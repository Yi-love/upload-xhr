'use strict';
const netErrorTips = 'Net Error';
const PADDING_STATE = 1; //等待
const UPLOADING_STATE = 2;//uploading
const ABORT_STATE = 3;  //暂停，停止
const COMPLETE_STATE = 4; //完成
const ERROR_STATE = -300; //失败
const DELETE_STATE = -500; //删除

/**
 * 多文件上传,自动上传
 */
export default class UploadXHR {
    constructor(options={}){
        //未完成列表
        this.list = this.getUploadList(options.list || [] , options.prefix || '');
        this.maxUploadSize = options.maxUploadSize || 3;
        this.uploadingSize = 0;
        this.fileName = options.fileName || 'fileName';
        this.url = options.url || '/';
        this.prefixName = options.prefixName || 'prefix';
        this.callback = options.callback || function(){};
    }
    getUploadList(list , prefix){
        if( !Array.isArray(list) ){
            return [].concat(this.list || []);
        }
        let paddingList = [];
        for ( let i = 0 ; i < list.length ; i++ ){
            paddingList.push({
                file: list[i],
                state: PADDING_STATE,
                xhr: null, //XMLHttpRequest
                progress: 0,
                promise: null,
                prefix: prefix || '',
                uid: ('' + Date.now()) + i
            });
        }
        return [].concat(this.list || [] , paddingList);
    }
    getPaddingStateUploadIndex(len){
        let arr = [];
        for ( let i = 0 ; i < this.list.length ; i++ ){
            if ( this.list[i].state === PADDING_STATE && arr.length < len){
                arr.push(i);
            }
        }
        return arr;
    }
    getUploadFileIndexByUid(uid){
        for ( let i = 0 ; i < this.list.length ; i++ ){
            if ( this.list[i].uid === uid ){
                return i;
            }
        }
        return -1;
    }
    padding(uid){
        this.abort(uid);
        for (let i = 0; i < this.list.length; i++) {
            if ( this.list[i].uid === uid ){
                this.list[i].state = PADDING_STATE;
            }
        }
        return this;
    }
    del(uid){
        this.abort(uid);
        for (let i = 0; i < this.list.length; i++) {
            if ( this.list[i].uid === uid ){
                this.list[i].state = DELETE_STATE;
            }
        }
        return this;
    }
    upload(url='' , data = {}){
        if ( this.list.length <= 0 ){
            return this;
        }
        if ( this.uploadingSize >= this.maxUploadSize ){
            return this;
        }
        let arr = this.getPaddingStateUploadIndex(Math.max(this.maxUploadSize - this.uploadingSize) , 0);
        this.uploadingSize += arr.length;
        let self = this;
        if ( typeof url === 'object' ){
            data = url;
            url = '';
        }
        url = url || this.url;
        for ( let i = 0 ; i < arr.length ; i++ ){
            let req = this.list[arr[i]];
            if ( req.state === UPLOADING_STATE ){
                continue;
            }
            this.request(req , url , data)
            .then((res)=>{
                return self.callback(res , req);
            },(error)=>{
            }).then(()=>{
                self.uploadingSize --;
                return self.upload(url , data);
            });
        }
        return this;
    }
    abort(uid){
        let index = this.getUploadFileIndexByUid(uid);
        if ( index >= 0 && this.list[index].state === UPLOADING_STATE ){
            if ( this.list[index].xhr && this.list[index].xhr.readyState !== XMLHttpRequest.UNSENT ){
                this.list[index].xhr.abort();
                this.list[index].state = ABORT_STATE;
                if ( this.list[index].promise ){
                    this.list[index].promise.reject('use uid abort this request.');
                }
            }
        }
        return this;
    }
    getXHR(){
        return new XMLHttpRequest();
    }
    request(req , url = '' , data = {}){
        if ( !req ){
            return Promise.reject('no request.');
        }

        //数据
        let formData = new FormData();
        //文件内容
        formData.append(req.uid , req.file);
        //文件名
        formData.append(this.fileName , req.uid);
        //前缀路径
        formData.append(this.prefixName , req.prefix);

        if ( typeof url === 'object' ){
            data = url;
            url = '';
        }
        for ( let files in data ){
            if ( data[files] ){
                formData.append(files , data[files]);
            }
        }

        //获取xhr
        req.xhr = this.abort(req.uid).getXHR();
        //上传路径
        url = url || this.url;

        req.state = UPLOADING_STATE;

        req.promise = new Promise((resolve , reject)=>{
            //打开链接
            req.xhr.open('post' , url , true);
            //定义上传完成后的回调函数
            req.xhr.onload = function() {
                //成功
                if (req.xhr && req.xhr.status && (req.xhr.status === 200 || req.xhr.status === 304)) {
                    try{
                        if ( req.xhr.responseText) {
                            let result = JSON.parse(req.xhr.responseText);
                            if ( +result.code === 0 ) {
                                return resolve(result.data);
                            }
                            return reject(result);
                        }
                    }catch(e){
                        return reject(req.xhr.responseText);
                    }
                    //成功
                } else {
                    return reject({message:netErrorTips});
                }
            };
            req.xhr.onerror = (event)=>{
                return reject({message:netErrorTips});
            };
            //上传进度
            req.xhr.upload.onprogress = (event)=> {
                if (event.lengthComputable) {
                    req.progress = (event.loaded / event.total * 100 | 0);
                }
            };
            req.xhr.send(formData);
        }).then((res)=>{
            req.progress = 100;
            req.state = COMPLETE_STATE;
            req.xhr = null;
            return Promise.resolve(res);
        },(error)=>{
            req.state = ERROR_STATE;
            req.xhr = null;
            return Promise.reject(error);
        });
        return req.promise;
    }
}
