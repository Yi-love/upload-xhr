'use strict';
const NET_ERROR_TIPS = 'Net Error';
const UPLOAD_ERROR_TIPS = 'Upload Error';

const PADDING_STATE = 1; //等待
const UPLOADING_STATE = 2;//uploading
const ABORT_STATE = 3;  //暂停，停止
const COMPLETE_STATE = 4; //完成
const ERROR_STATE = -300; //失败
const DELETE_STATE = -500; //删除

const resolveCallBack = (res)=>Promise.resolve(res);
const rejectCallBack = (err)=>Promise.reject(err);

/**
 * 多文件上传,自动上传
 */
export default class UploadXHR {
    constructor(options={}){
        //列表
        this.list = [];
        //上传列表Max
        this.maxUploadSize = Math.round(options.maxUploadSize || 3);
        //正在上传队列大小
        this.uploadingSize = 0;
        //上传文件名称
        this.fileName = options.fileName || 'fileName';
        //上传url
        this.url = options.url || '/';
        //删除队列大小限制
        this.maxDeleteSize = Math.max(Math.round(options.maxDeleteSize || 1) , 10);
        //成功回调
        this.resolveCallBack = typeof options.resolveCallBack === 'function' ? options.resolveCallBack : resolveCallBack;
        //失败回调
        this.rejectCallBack = typeof options.rejectCallBack === 'function' ? options.rejectCallBack : rejectCallBack;
        //headers
        this.headers = options.headers || {};
        //query
        this.query = options.query || {};
        //data
        this.data = options.data || {};
        //async
        this.async = 'async' in options ? !!options.async : true;
        //user
        this.user = options.user;
        this.password = options.password;
        //autoUpload
        this.autoUpload = 'autoUpload' in options ? !!options.autoUpload : true;
        //添加文件对象
        this.paddingList(options.list);
    }
    /**
     * [paddingList 添加文件列表]
     * @param  {[type]} list [description]
     * @param  {Object} data [description]
     * @return {[type]}      [description]
     */
    paddingList(list , data = {}){
        if( !Array.isArray(list) ){
            return this;
        }
        let paddingList = [];
        for ( let i = 0 ; i < list.length ; i++ ){
            paddingList.push({
                file: list[i], //文件
                state: PADDING_STATE, //状态
                xhr: null, //XMLHttpRequest
                progress: 0, //上传进度
                promise: null, //promise
                data: data, //附加数据
                uid: ('' + Date.now()) + i
            });
        }
        this.list = [].concat(this.list || [] , paddingList);
        return this;
    }
    /**
     * [getUploadingIndexList 获取上传列表id]
     * @return {[type]} [description]
     */
    getUploadingList(){
        let arr = [];
        let len = Math.max(this.maxUploadSize - this.uploadingSize , 0);
        for ( let i = 0 ; i < this.list.length ; i++ ){
            //padding
            if ( this.list[i] && this.list[i].state === PADDING_STATE && arr.length < len ){
                arr.push(this.list[i]);
            }
        }
        return arr;
    }
    /**
     * [getUploadFileByUid 根据uid获取数据对象]
     * @param  {[type]} uid [description]
     * @return {[type]}     [description]
     */
    getUploadFileByUid(uid){
        for ( let i = 0 ; i < this.list.length ; i++ ){
            if ( this.list[i].uid === uid ){
                return this.list[i];
            }
        }
        return void 0;
    }
    /**
     * [padding 重置为待上传]
     * @param  {[type]} uid [description]
     * @return {[type]}     [description]
     */
    padding(uid){
        let uploadObj = this.abort(uid).getUploadFileByUid(uid);
        if ( uploadObj ){
            uploadObj.state = PADDING_STATE;
        }
        return this;
    }
    /**
     * [del 删除]
     * @param  {[type]} uid [description]
     * @return {[type]}     [description]
     */
    del(uid){
        let uploadObj = this.abort(uid).getUploadFileByUid(uid);
        if ( uploadObj ){
            uploadObj.state = DELETE_STATE;
        }
        return this.clear();
    }
    /**
     * [clear 清除]
     * @return {[type]} [description]
     */
    clear(){
        let list = [];
        let delSize = 0;

        for (let i = 0; i < this.list.length; i++) {
            if ( this.list[i] && this.list[i].state === DELETE_STATE ){
                delSize ++;
            }else{
                list.push(this.list[i]);
            }
        }
        if ( delSize >= this.maxDeleteSize ){
            this.list = list;
        }
        return this;
    }
    /**
     * [upload 上传数据]
     * @return {[type]}      [description]
     */
    upload(){
        if ( !this.list || this.list.length <= 0 ){
            return this;
        }
        if ( this.uploadingSize >= this.maxUploadSize ){
            return this;
        }
        let arr = this.getUploadingList();
        this.uploadingSize += arr.length;

        let self = this;
        for ( let i = 0 ; i < arr.length ; i++ ){
            let req = arr[i];
            if ( req && req.state !== PADDING_STATE ){
                self.next();
            }else{
                self.request(req)
                .then((res)=>{
                    return self.resolveCallBack(res , req);//success
                },(err)=>{
                    return self.rejectCallBack(err , req);//error
                })
                .then((res)=>{
                    req.progress = 100;
                    req.state = COMPLETE_STATE;
                    req.xhr = null;
                    return Promise.resolve(res);
                },(err)=>{
                    req.state = ERROR_STATE;
                    req.xhr = null;
                    return Promise.reject(err);
                })
                .then(self.next.bind(self),self.next.bind(self));
            }

        }
        return this;
    }
    /**
     * [next 自动上传]
     * @return {Function} [description]
     */
    next(){
        this.uploadingSize --;
        this.uploadingSize = Math.max(this.uploadingSize , 0);
        return this.autoUpload ? this.upload() : this;
    }
    /**
     * [abort 取消上传]
     * @param  {[type]} uid [description]
     * @return {[type]}     [description]
     */
    abort(uid){
        let uploadObj = this.getUploadFileByUid(uid);
        if ( uploadObj && uploadObj.state === UPLOADING_STATE ){
            if ( uploadObj.xhr && uploadObj.xhr.readyState !== XMLHttpRequest.UNSENT ){
                uploadObj.xhr.abort();
                uploadObj.state = ABORT_STATE;
                if ( uploadObj.promise ){
                    uploadObj.promise.reject('use uid abort this request.');
                }
            }
        }
        return this;
    }
    getXHR(){
        return new XMLHttpRequest();
    }
    appendQuery(){
        let query = [];
        for ( let name in this.query ){
            query.push(name + '=' + this.query[name]);
        }
        if ( query.length < 1 ){
            return this.url;
        }
        return (this.url + (this.url.indexOf('?') >= 1 ? '&' : '?') + query.join('&')).replace(/[&?]{1,2}/, '?');
    }
    /**
     * [request 发送请求]
     * @param  {[type]} req [description]
     * @return {[type]}     [description]
     */
    request(req){
        if ( !req ){
            return Promise.reject('no request.');
        }

        //数据
        let formData = new FormData();
        let headers = Object.assign({} , this.headers);
        let data = Object.assign({} , this.data , req.data , {[req.uid]:req.file , [this.fileName]:req.uid});
        //上传路径
        let url = this.appendQuery();
        //异步
        let async = this.async;
        //用户
        let user = this.user;
        let password = this.password;
        //设置数据
        for ( let name in data ){
            if ( Array.isArray(data[name]) ){
                for (let i = 0 ; i < data[name].length ; i++ ){
                    formData.append(name + '[]',  data[name][i]);
                }
            }else{
                formData.append(name,  data[name]);
            }
        }
        //获取xhr
        req.xhr = this.abort(req.uid).getXHR();
        
        req.state = UPLOADING_STATE;

        req.promise = new Promise((resolve , reject)=>{
            //打开链接
            req.xhr.open('post' , url , async , user , password);
            //设置头
            for ( let name in headers ){
                req.xhr.setRequestHeader(name , headers[name]);
            }

            //定义上传完成后的回调函数
            req.xhr.onload = function() {
                //成功
                if (req.xhr && req.xhr.status && (req.xhr.status === 200 || req.xhr.status === 304)) {
                    return resolve(req.xhr.responseText);
                } else {
                    return reject({message:UPLOAD_ERROR_TIPS , xhr:req.xhr});
                }
            };
            req.xhr.onerror = (event)=>{
                return reject({message:NET_ERROR_TIPS});
            };
            //上传进度
            req.xhr.upload.onprogress = (event)=> {
                if (event.lengthComputable) {
                    req.progress = (event.loaded / event.total * 100 | 0);
                }
            };
            req.xhr.send(formData);
        });
        return req.promise;
    }
}
