# Upload-Xhr
File upload component（文件上传组件：支持多文件同时上传）

```js
import {UploadXHR} from 'upload-xhr';

//可以注入一个resolveCallBack
let handlerResponse = function(res , uploadXhrObj){
};
//可以注入一个rejectCallBack
let handlerError = function(err , uploadXhrObj){
};

let upXhr = new UploadXHR({url:'/api/uploadFile',resolveCallBack:handlerResponse,rejectCallBack:handlerError})

let target = event.target;
let files = target.files;
files = this.exchangeFilesToArray(files));

this.upXhr.paddingList(files , {prefix:prefix}).upload();
```

## params

```js
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

```

### paddingList(list , data={})