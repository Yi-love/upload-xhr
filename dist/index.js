!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.uploadXhr=e():t.uploadXhr=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=39)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(27)("wks"),o=n(28),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(0),o=n(2),i=n(10),u=n(5),s=function(t,e,n){var a,c,f,l=t&s.F,p=t&s.G,h=t&s.S,v=t&s.P,d=t&s.B,y=t&s.W,x=p?o:o[e]||(o[e]={}),m=x.prototype,g=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(a in n)(c=!l&&g&&void 0!==g[a])&&a in x||(f=c?g[a]:n[a],x[a]=p&&"function"!=typeof g[a]?n[a]:d&&c?i(f,r):y&&g[a]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((x.virtual||(x.virtual={}))[a]=f,t&s.R&&m&&!m[a]&&u(m,a,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(7),o=n(23);t.exports=n(6)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(14)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3),o=n(43),i=n(44),u=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var r=n(11);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(8),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(25),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(27)("keys"),o=n(28);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(7).f,o=n(12),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(11);t.exports.f=function(t){return new r(t)}},function(t,e,n){t.exports={default:n(41),__esModule:!0}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(49),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(32),o=n(4),i=n(61),u=n(5),s=n(12),a=n(9),c=n(62),f=n(20),l=n(65),p=n(1)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,y,x,m){c(n,e,d);var g,_,b,w=function(t){if(!h&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",j="values"==y,O=!1,P=t.prototype,M=P[p]||P["@@iterator"]||y&&P[y],k=!h&&M||w(y),L=y?j?w("entries"):k:void 0,T="Array"==e?P.entries||M:M;if(T&&(b=l(T.call(new t)))!==Object.prototype&&b.next&&(f(b,S,!0),r||s(b,p)||u(b,p,v)),j&&M&&"values"!==M.name&&(O=!0,k=function(){return M.call(this)}),r&&!m||!h&&!O&&P[p]||u(P,p,k),a[e]=k,a[S]=v,y)if(g={values:j?k:w("values"),keys:x?k:w("keys"),entries:L},m)for(_ in g)_ in P||i(P,_,g[_]);else o(o.P+o.F*(h||O),e,g);return g}},function(t,e){t.exports=!0},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(13),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(3),o=n(11),i=n(1)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}},function(t,e,n){var r,o,i,u=n(10),s=n(76),a=n(33),c=n(15),f=n(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,y=0,x={},m=function(){var t=+this;if(x.hasOwnProperty(t)){var e=x[t];delete x[t],e()}},g=function(t){m.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return x[++y]=function(){s("function"==typeof t?t:Function(t),e)},r(y),y},h=function(t){delete x[t]},"process"==n(13)(l)?r=function(t){l.nextTick(u(m,t,1))}:d&&d.now?r=function(t){d.now(u(m,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=g,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in c("script")?function(t){a.appendChild(c("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:p,clear:h}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),o=n(8),i=n(21);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.UploadXHR=void 0;var o=n(40),i=r(o),u=n(45),s=r(u),a=n(54),c=r(a),f=n(55),l=r(f),p=n(56),h=r(p),v=function(t){return h.default.resolve(t)},d=function(t){return h.default.reject(t)};e.UploadXHR=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c.default)(this,t),this.list=[],this.maxUploadSize=Math.round(e.maxUploadSize||3),this.uploadingSize=0,this.fileName=e.fileName||"fileName",this.url=e.url||"/",this.maxDeleteSize=Math.max(Math.round(e.maxDeleteSize||1),10),this.resolveCallBack="function"==typeof e.resolveCallBack?e.resolveCallBack:v,this.rejectCallBack="function"==typeof e.rejectCallBack?e.rejectCallBack:d,this.headers=e.headers||{},this.query=e.query||{},this.data=e.data||{},this.async=!("async"in e)||!!e.async,this.user=e.user,this.password=e.password,this.autoUpload=!("autoUpload"in e)||!!e.autoUpload,this.paddingList(e.list)}return(0,l.default)(t,[{key:"paddingList",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Array.isArray(t))return this;for(var n=[],r=0;r<t.length;r++)n.push({file:t[r],state:1,xhr:null,progress:0,promise:null,data:e,uid:""+Date.now()+r});return this.list=[].concat(this.list||[],n),this}},{key:"getUploadingList",value:function(){for(var t=[],e=Math.max(this.maxUploadSize-this.uploadingSize,0),n=0;n<this.list.length;n++)this.list[n]&&1===this.list[n].state&&t.length<e&&t.push(this.list[n]);return t}},{key:"getUploadFileByUid",value:function(t){for(var e=0;e<this.list.length&&t;e++)if(this.list[e].uid===t)return this.list[e]}},{key:"padding",value:function(t){var e=this.abort(t).getUploadFileByUid(t);return e&&(e.state=1),this}},{key:"del",value:function(t){var e=this.abort(t).getUploadFileByUid(t);return e&&(e.state=-500),this.clear()}},{key:"clear",value:function(){for(var t=[],e=0,n=0;n<this.list.length;n++)this.list[n]&&-500===this.list[n].state?e++:t.push(this.list[n]);return e>=this.maxDeleteSize&&(this.list=t),this}},{key:"upload",value:function(){if(!this.list||this.list.length<=0)return this;if(this.uploadingSize>=this.maxUploadSize)return this;var t=this.getUploadingList();this.uploadingSize+=t.length;for(var e=this,n=0;n<t.length;n++)!function(n){var r=t[n];r&&1!==r.state?e.next():e.request(r).then(function(t){return e.resolveCallBack(t,r)},function(t){return e.rejectCallBack(t,r)}).then(function(t){return r.progress=100,r.state=4,r.xhr=null,h.default.resolve(t)},function(t){return r.state=-300,r.xhr=null,h.default.reject(t)}).then(e.next.bind(e),e.next.bind(e))}(n);return this}},{key:"next",value:function(){return this.uploadingSize--,this.uploadingSize=Math.max(this.uploadingSize,0),this.autoUpload?this.upload():this}},{key:"abort",value:function(t){var e=this.getUploadFileByUid(t);return e&&2===e.state&&e.xhr&&e.xhr.readyState!==XMLHttpRequest.UNSENT&&(e.xhr.abort(),e.state=3,e.promise&&e.promise.reject(new Error("use uid("+t+") abort this request"))),this}},{key:"getXHR",value:function(){return new XMLHttpRequest}},{key:"appendQuery",value:function(){var t=[];for(var e in this.query)t.push(e+"="+this.query[e]);return t.length<1?this.url:(this.url+(this.url.indexOf("?")>=1?"&":"?")+t.join("&")).replace(/[&?]{1,2}/,"?")}},{key:"request",value:function(t){var e;if(!t)return h.default.reject(new Error("no request."));var n=new FormData,r=(0,s.default)({},this.headers),o=(0,s.default)({},this.data,t.data,(e={},(0,i.default)(e,t.uid,t.file),(0,i.default)(e,this.fileName,t.uid),e)),u=this.appendQuery(),a=this.async,c=this.user,f=this.password;for(var l in o)if(Array.isArray(o[l]))for(var p=0;p<o[l].length;p++)n.append(l+"[]",o[l][p]);else n.append(l,o[l]);return t.xhr=this.abort(t.uid).getXHR(),t.state=2,t.promise=new h.default(function(e,o){t.xhr.open("post",u,a,c,f);for(var i in r)t.xhr.setRequestHeader(i,r[i]);t.xhr.onload=function(){return t.xhr&&t.xhr.status&&(200===t.xhr.status||304===t.xhr.status)?e(t.xhr.responseText):o({message:"Upload Error"})},t.xhr.onerror=function(t){return o({message:"Net Error"})},t.xhr.upload.onprogress=function(e){e.lengthComputable&&(t.progress=e.loaded/e.total*100|0)},t.xhr.send(n)}),t.promise}}]),t}()},function(t,e,n){"use strict";e.__esModule=!0;var r=n(22),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){n(42);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(4);r(r.S+r.F*!n(6),"Object",{defineProperty:n(7).f})},function(t,e,n){t.exports=!n(6)&&!n(14)(function(){return 7!=Object.defineProperty(n(15)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports={default:n(46),__esModule:!0}},function(t,e,n){n(47),t.exports=n(2).Object.assign},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(48)})},function(t,e,n){"use strict";var r=n(24),o=n(52),i=n(53),u=n(30),s=n(25),a=Object.assign;t.exports=!a||n(14)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=u(t),a=arguments.length,c=1,f=o.f,l=i.f;a>c;)for(var p,h=s(arguments[c++]),v=f?r(h).concat(f(h)):r(h),d=v.length,y=0;d>y;)l.call(h,p=v[y++])&&(n[p]=h[p]);return n}:a},function(t,e,n){var r=n(12),o=n(16),i=n(50)(!1),u=n(19)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,c=[];for(n in s)n!=u&&r(s,n)&&c.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(16),o=n(26),i=n(51);t.exports=function(t){return function(e,n,u){var s,a=r(e),c=o(a.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if((s=a[f++])!=s)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(18),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(22),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(57),__esModule:!0}},function(t,e,n){n(58),n(59),n(66),n(70),n(81),n(82),t.exports=n(2).Promise},function(t,e){},function(t,e,n){"use strict";var r=n(60)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(18),o=n(17);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),a=r(n),c=s.length;return a<0||a>=c?t?"":void 0:(i=s.charCodeAt(a),i<55296||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";var r=n(63),o=n(23),i=n(20),u={};n(5)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(3),o=n(64),i=n(29),u=n(19)("IE_PROTO"),s=function(){},a=function(){var t,e=n(15)("iframe"),r=i.length;for(e.style.display="none",n(33).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(7),o=n(3),i=n(24);t.exports=n(6)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,a=0;s>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(12),o=n(30),i=n(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(67);for(var r=n(0),o=n(5),i=n(9),u=n(1)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<s.length;a++){var c=s[a],f=r[c],l=f&&f.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,e,n){"use strict";var r=n(68),o=n(69),i=n(9),u=n(16);t.exports=n(31)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,u,s=n(32),a=n(0),c=n(10),f=n(34),l=n(4),p=n(8),h=n(11),v=n(71),d=n(72),y=n(35),x=n(36).set,m=n(77)(),g=n(21),_=n(37),b=n(38),w=a.TypeError,S=a.process,j=a.Promise,O="process"==f(S),P=function(){},M=o=g.f,k=!!function(){try{var t=j.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(P,P)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof e}catch(t){}}(),L=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},T=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,u=o?e.ok:e.fail,s=e.resolve,a=e.reject,c=e.domain;try{u?(o||(2==t._h&&C(t),t._h=1),!0===u?n=r:(c&&c.enter(),n=u(r),c&&c.exit()),n===e.promise?a(w("Promise-chain cycle")):(i=L(n))?i.call(n,s,a):s(n)):a(r)}catch(t){a(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&E(t)})}},E=function(t){x.call(a,function(){var e,n,r,o=t._v,i=U(t);if(i&&(e=_(function(){O?S.emit("unhandledRejection",o,t):(n=a.onunhandledrejection)?n({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=O||U(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},U=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){x.call(a,function(){var e;O?S.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},A=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),T(e,!0))},R=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=L(t))?m(function(){var r={_w:n,_d:!1};try{e.call(t,c(R,r,1),c(A,r,1))}catch(t){A.call(r,t)}}):(n._v=t,n._s=1,T(n,!1))}catch(t){A.call({_w:n,_d:!1},t)}}};k||(j=function(t){v(this,j,"Promise","_h"),h(t),r.call(this);try{t(c(R,this,1),c(A,this,1))}catch(t){A.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(78)(j.prototype,{then:function(t,e){var n=M(y(this,j));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=O?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&T(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=c(R,t,1),this.reject=c(A,t,1)},g.f=M=function(t){return t===j||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!k,{Promise:j}),n(20)(j,"Promise"),n(79)("Promise"),u=n(2).Promise,l(l.S+l.F*!k,"Promise",{reject:function(t){var e=M(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(s||!k),"Promise",{resolve:function(t){return b(s&&this===u?j:this,t)}}),l(l.S+l.F*!(k&&n(80)(function(t){j.all(t).catch(P)})),"Promise",{all:function(t){var e=this,n=M(e),r=n.resolve,o=n.reject,i=_(function(){var n=[],i=0,u=1;d(t,!1,function(t){var s=i++,a=!1;n.push(void 0),u++,e.resolve(t).then(function(t){a||(a=!0,n[s]=t,--u||r(n))},o)}),--u||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=M(e),r=n.reject,o=_(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(10),o=n(73),i=n(74),u=n(3),s=n(26),a=n(75),c={},f={},e=t.exports=function(t,e,n,l,p){var h,v,d,y,x=p?function(){return t}:a(t),m=r(n,l,e?2:1),g=0;if("function"!=typeof x)throw TypeError(t+" is not iterable!");if(i(x)){for(h=s(t.length);h>g;g++)if((y=e?m(u(v=t[g])[0],v[1]):m(t[g]))===c||y===f)return y}else for(d=x.call(t);!(v=d.next()).done;)if((y=o(d,m,v.value,e))===c||y===f)return y};e.BREAK=c,e.RETURN=f},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(9),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(34),o=n(1)("iterator"),i=n(9);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(36).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,s=r.Promise,a="process"==n(13)(u);t.exports=function(){var t,e,n,c=function(){var r,o;for(a&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(a)n=function(){u.nextTick(c)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var f=s.resolve();n=function(){f.then(c)}}else n=function(){o.call(r,c)};else{var l=!0,p=document.createTextNode("");new i(c).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(5);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(7),u=n(6),s=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(4),o=n(2),i=n(0),u=n(35),s=n(38);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(21),i=n(37);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})}])});