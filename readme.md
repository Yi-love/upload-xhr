# Upload-Xhr
File upload component（文件上传组件：支持多文件同时上传）

> 待优化，请勿使用。

```js
import UploadXHR from 'upload-xhr';

let upXhr = new UploadXHR({url:'/api/uploadFile',callback:handlerResponse});

let target = event.target;
let files = target.files;
files = this.exchangeFilesToArray(files));
this.upXhr.list = this.upXhr.getUploadList(files);
this.upXhr.upload();
```