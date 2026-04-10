"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{4873:(e,t,i)=>{let a,r,n;i.d(t,{Ay:()=>vG});var s=i(7620),o=Object.create,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,m=function(e,t){return function(){return e&&(t=e(e=0)),t}},v=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},b=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=u(t),s=0,o=n.length;s<o;s++)r=n[s],h.call(e,r)||r===i||l(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=d(t,r))||a.enumerable});return e},E=function(e,t,i){return i=null!=e?o(c(e)):{},b(!t&&e&&e.__esModule?i:l(i,"default",{value:e,enumerable:!0}),e)},g=v(function(e,t){t.exports="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}});function f(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):f(e,t)}var _=m(function(){_()});function y(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var T=m(function(){}),A=v(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),k=v(function(e,t){function i(e,t){if(!f(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}_(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),w=v(function(e,t){function i(e,t){if(!f(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}_(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),S=v(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),R=v(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),I=v(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),C=v(function(e,t){T(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=y(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),L=v(function(e,t){_();var i=A(),a=S(),r=R(),n=I(),s=C(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!f(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),D=v(function(e,t){_();var i=L();function a(e){if(!f(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),M=v(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),O=v(function(e,t){_();var i=A(),a=k(),r=w(),n=L(),s=D(),o=M(),l=S(),d=R(),u=I();function c(){if(!f(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),x=v(function(e,t){t.exports=new(O())}),N=v(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=x();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function U(e,t){if(e){if("string"==typeof e)return P(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return P(e,t)}}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||U(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=E(g()),W=E(g()),V=E(g()),F={now:function(){var e=V.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},$=function(){if("function"==typeof(null==(e=W.default.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),W.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=F.now(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},K=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},q=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=K()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},Y=function(e){e&&void 0!==e.nodeName?e=q(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function G(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},Q=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,G(o)),d=(i=console.info).bind.apply(i,G(o)),u=(a=console.debug).bind.apply(a,G(o)),c=(r=console.warn).bind.apply(r,G(o)),h=(n=console.error).bind.apply(n,G(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.TRACE))return l.apply(void 0,G(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.DEBUG))return u.apply(void 0,G(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.INFO))return d.apply(void 0,G(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.WARN))return c.apply(void 0,G(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.ERROR))return h.apply(void 0,G(t))},get level(){return m},set level(p){p!==this.level&&(m=null!=p?p:s)}}}("[mux]"),z=E(g());function Z(){return"1"===(z.default.doNotTrack||z.default.navigator&&z.default.navigator.doNotTrack)}function X(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){if(!f(e,t))throw TypeError("Cannot call a class as a function")}function ee(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function et(e,t,i){return t&&ee(e.prototype,t),i&&ee(e,i),e}function ei(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ea(e){return(ea=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function er(e,t,i){return(er="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ea(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function en(e,t){return(en=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}_(),T();var es=function(e){return eo(e)[0]},eo=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},el=E(g()),ed={exists:function(){var e=el.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=el.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=el.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function eu(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function ec(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){ei(e,t,i[t])})}return e}function eh(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var em=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ep=["x-cdn","content-type"].concat(em);function ev(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ep.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eb(e){if(e){var t=em.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eE=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eg=function(e){if(!e)return{};var t=ed.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ef=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ev(e.getAllResponseHeaders())},e_=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!ed.exists())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eg(n),h=c.bytesLoaded,m=c.requestStart,v=c.responseStart,b=c.responseEnd;o("requestcompleted",eh(ec({},eE(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:v,request_response_end:b,request_type:"manifest",request_hostname:es(r),request_response_headers:ef(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eg(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],v=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:es(i.url),request_response_headers:ef(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(v)?void 0:v})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eg(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:es(i.url),request_response_headers:ef(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=eg(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ef(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?es(r.responseURL):void 0,request_id:h?eb(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ef(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:es(c),request_id:h?eb(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var v=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:es(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var b=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,b),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,b),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ey=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eT=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=es(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ev(u[u.length-1]._responseHeaders||""));var c=i?eb(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eA=function(e,t){if("function"==typeof t.getCurrentRepresentationForType){var i=t.getCurrentRepresentationForType(e);return i?{currentLevel:i.absoluteIndex,renditionWidth:i.width||null,renditionHeight:i.height||null,renditionBitrate:i.bandwidth}:{}}var a=t.getQualityFor(e),r=t.getCurrentTrackFor(e).bitrateList;return r?{currentLevel:a,renditionWidth:r[a].width||null,renditionHeight:r[a].height||null,renditionBitrate:r[a].bandwidth}:{}},ek=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},ew=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eS=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=ew(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:es(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eT(r,i),h=c.requestStart,m=c.requestResponseStart,v=c.requestResponseEnd,b=c.requestResponseHeaders,E=c.requestMediaDuration,g=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:v,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:b,request_hostname:g,request_id:c.requestId,request_url:f,request_media_duration:E,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eT(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,v=u.requestBytesLoaded,b=u.requestResponseHeaders,E=u.requestMediaDuration,g=u.requestHostname,f=u.requestUrl,_=u.requestId,y=eA(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:v,request_type:d,request_response_headers:b,request_hostname:g,request_id:_,request_url:f,request_media_start_time:l,request_media_duration:E,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:ek(c.video.codec)}}},m=function(e,t,r){var s=e.mediaType;if("audio"===s||"video"===s){if("function"==typeof i.getRepresentationsByType)if(e.newRepresentation)o={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var o,l=i.getRepresentationsByType(s);if(l&&"number"==typeof e.newQuality){var d=l.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});d&&(o={bitrate:d.bandwidth,width:d.width,height:d.height,qualityIndex:e.newQuality})}}else{if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality})}if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=eh(ec({},o),{codec:i.getCurrentTrackFor(s).codec});var u=h();u&&n("renditionchange",u)}};i.on("qualityChangeRendered",m);var v=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:es(t.url)})};i.on("fragmentLoadingAbandoned",v);var b=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:es(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",b),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",b),i.off("fragmentLoadingAbandoned",v),delete i._stopMuxMonitor}},eR=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eI=0,eC=function(){function e(){J(this,e),ei(this,"_listeners",void 0)}return et(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eI,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eI;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before"+e]||[],r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t),o(s,t)}}}]),e}(),eL=E(g()),eD=function(){function e(t){var i=this;J(this,e),ei(this,"_playbackHeartbeatInterval",void 0),ei(this,"_playheadShouldBeProgressing",void 0),ei(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eL.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return et(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eL.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eL.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eM=function e(t){var i=this;J(this,e),ei(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},eO=function(){function e(t){J(this,e),ei(this,"_watchTimeTrackerLastCheckedTime",void 0),ei(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return et(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),eu(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),ex=function(){function e(t){var i=this;J(this,e),ei(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),ei(this,"_lastTime",void 0),ei(this,"_isAdPlaying",void 0),ei(this,"_callbackUpdatePlaybackTime",void 0),ei(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=F.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on("viewinit",function(){i.pm.data.view_playing_time_ms_cumulative=0});var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a);var r=function(){i.pm.data.player_is_paused||a()};t.on("seeked",r),t.on("rebufferend",r);var n=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",n),t.on("seeking",n),t.on("rebufferstart",n),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=F.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return et(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=F.now(),this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time||0,t=F.now(),i=t-this._lastTime,a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i),a>0&&a<=1e3&&eu(this.pm.data,"view_content_playback_time",a),null!==this._callbackUpdatePlaybackTime&&i>0&&i<=1e3&&(this._isAdPlaying&&eu(this.pm.data,"ad_playing_time_ms_cumulative",i),eu(this.pm.data,"view_playing_time_ms_cumulative",i)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eN=function(){function e(t){J(this,e),ei(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return et(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eP=function e(t){if(J(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;eu(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(eu(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eU=function(){function e(t){var i=this;J(this,e),ei(this,"_lastCheckedTime",void 0),ei(this,"_lastPlayheadTime",void 0),ei(this,"_lastPlayheadTimeUpdatedTime",void 0),ei(this,"_rebuffering",void 0),ei(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:F.now()})}))}return et(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eH=function(){function e(t){var i=this;J(this,e),ei(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||F.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||F.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return et(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),eB=function e(t){var i=this;J(this,e),ei(this,"_lastPlayerHeight",void 0),ei(this,"_lastPlayerWidth",void 0),ei(this,"_lastPlayheadPosition",void 0),ei(this,"_lastSourceHeight",void 0),ei(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend","playbackmodechange"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eu(t.data,"view_total_content_playback_time",e),eu(t.data,"view_total_upscaling",r*e),eu(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange","playbackmodechange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eW=function e(t){var i=this;J(this,e),ei(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=F.now(),r=(t.data.viewer_time||e)-(a||e);eu(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,eu(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eV=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eF=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],e$=function(){function e(t){var i=this;J(this,e),ei(this,"_adHasPlayed",void 0),ei(this,"_adRequests",void 0),ei(this,"_adResponses",void 0),ei(this,"_currentAdRequestNumber",void 0),ei(this,"_currentAdResponseNumber",void 0),ei(this,"_prerollPlayTime",void 0),ei(this,"_wouldBeNewAdPlay",void 0),ei(this,"isAdBreak",void 0),ei(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eF.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eV(i._adRequests,a),eu(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||eu(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eV(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&eu(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,eu(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||eu(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||eu(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return et(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=H(eo(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=H(eo(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}this.pm.data.ad_type="preroll"}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id,null!=t&&t.ad_type&&(this.pm.data.ad_type=null==t?void 0:t.ad_type)}}]),e}(),eK=function e(t){var i=this;J(this,e),ei(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=F.now(),t.on("before*",r)},r=function(e){var a=F.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eq=E(g()),eY=function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=t+"="+r+(n.expires?"; expires="+n.expires.toUTCString():"")+(n.path?"; path="+n.path:"")+(n.domain?"; domain="+n.domain:"")+(n.secure?"; secure":"")}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){s=h;break}t||(s[m]=h)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})}(),eG="muxData",ej=function(){var e;try{e=(eY.get(eG)||"").split("&").reduce(function(e,t){var i=H(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eQ=function(e){try{eY.set(eG,Object.entries(e).map(function(e){var t=H(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},ez=function(){var e=ej();return e.mux_viewer_id=e.mux_viewer_id||$(),e.msn=e.msn||Math.random(),eQ(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eZ=function(){var e=ej(),t=F.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=$(),e.sst=t),e.sex=t+15e5,eQ(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},eX=E(g()),eJ=function(){var e;switch(e0()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e0=function(){var e=eX.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};eJ.getConnectionFromAPI=e0;var e1=e3({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e2=e3({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cm:"cmcd",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cv:"cumulative",cx:"connection",cz:"context",da:"data",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mp:"mode",ms:"ms",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",pv:"previous",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e3(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e4(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e1[s];o||(Q.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e2[e]?o+=e2[e]:Number.isInteger(Number(e))?o+=e:(Q.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e5=E(g()),e9=E(N()),e8={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e6=["hb","requestcompleted","requestfailed","requestcanceled"],e7=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e8,t)};e7.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e7.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length)return void this._eventQueue.pop();this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},e7.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e5.default.clearTimeout(this._sendTimeout)},e7.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e4({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);tt(this._beaconUrl,i,!0,function(){})},e7.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=F.now();tt(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,Q.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=F.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},e7.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e7.prototype._startBeaconSending=function(){var e=this;e5.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e5.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e7.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(F.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(Q.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e6.indexOf(e.e)}),s()),o()||(Q.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var te="function"==typeof e9.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},tt=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(e5.default.fetch)return void e5.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:te(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(e5.default.XMLHttpRequest){var r=new e5.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},ti=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception","view_playing_time_ms_cumulative","ad_playing_time_ms_cumulative"],ta=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],tr=["ad_id","ad_creative_id","ad_universal_id"],tn=["viewstart","error","ended","viewend"],ts=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,v,b,E,g,f,_,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};J(this,e),ei(this,"mux",void 0),ei(this,"envKey",void 0),ei(this,"options",void 0),ei(this,"eventQueue",void 0),ei(this,"sampleRate",void 0),ei(this,"disableCookies",void 0),ei(this,"respectDoNotTrack",void 0),ei(this,"previousBeaconData",void 0),ei(this,"lastEventTime",void 0),ei(this,"rateLimited",void 0),ei(this,"pageLevelData",void 0),ei(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e7((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(_=this.options.sampleRate)?_:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(T=this.options.respectDoNotTrack)&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(b=this.options.platform)||null==(v=b.os)?void 0:v.architecture,viewer_os_version:null==(g=this.options.platform)||null==(E=g.os)?void 0:E.version,viewer_connection_type:eJ(),page_url:null===eq.default||void 0===eq.default||null==(f=eq.default.location)?void 0:f.href},this.viewerData=this.disableCookies?{}:ez()}return et(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&Z())return Q.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return Q.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eZ(),a=eh(ec({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=e4(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return Q.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||Q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited)if(Q.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&"hb"===e)this.eventQueue.flushEvents(!0);else if(tn.indexOf(e)>=0){if("error"===e&&"warning"===t.player_error_severity)return;this.eventQueue.flushEvents()}if(this.rateLimited)return a.event="eventrateexceeded",s=e4(a),this.eventQueue.queueEvent(a.event,s),Q.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=ec({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=H(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||ti.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||tr.includes(t)&&ta.includes(e)||"playbackmodechange"===e&&0===t.indexOf("player_playback_mode"))}}]),e}(),to=function e(t){J(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var v=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,v),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tl=function e(t){var i=this;J(this,e),ei(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=F.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,ei({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})};function td(e,t){return(null==e?void 0:e.toLowerCase())===(null==t?void 0:t.toLowerCase())}var tu=function e(t){J(this,e);var i=function(e){var i,a,r,o=null!=(i=e)&&i.request_type&&("media"===i.request_type||"video"===i.request_type)&&null!=(a=i.request_response_headers)&&a["x-cdn"]?i.request_response_headers["x-cdn"]:null!=i&&i.video_cdn?i.video_cdn:null,l=null!=(r=e)&&r.request_start?r.request_start:null!=r&&r.viewer_time?r.viewer_time:Date.now();null!=o&&!td(o,n)&&s<=l&&(n=o,s=l,t.emit("cdnchange",{video_cdn:o}))},a=null,r=null,n=null,s=0;t.on("viewinit",function(){a=null,r=null,n=null,s=0}),t.on("beforecdnchange",function(e,t){var i=null==t?void 0:t.video_cdn;i&&(void 0===t.video_previous_cdn||null===t.video_previous_cdn)&&(td(i,r)?t.video_previous_cdn=null!=a?a:void 0:(t.video_previous_cdn=null!=r?r:void 0,a=r,r=i))}),t.on("requestcompleted",function(e,t){i(t)})},tc=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},th=function e(t){var i=this;J(this,e),ei(this,"_emittingAutomaticEvent",!1),ei(this,"_hasInitialized",!1),ei(this,"_currentMode","standard"),t.on("viewstart",function(){i._hasInitialized||(i._hasInitialized=!0,i._currentMode=t.data.player_playback_mode||"standard",i._emittingAutomaticEvent=!0,t.emit("playbackmodechange",{player_playback_mode:i._currentMode,player_playback_mode_data:"{}"}),i._emittingAutomaticEvent=!1)}),t.on("viewend",function(){i._hasInitialized=!1}),t.on("playbackmodechange",function(e,a){i._emittingAutomaticEvent||(a.player_playback_mode_data?tc(a.player_playback_mode_data)||(t.mux.log.warn("Invalid JSON string for player_playback_mode_data"),a.player_playback_mode_data="{}"):a.player_playback_mode_data="{}",t.data.player_playback_mode_data=a.player_playback_mode_data,t.data.player_playback_mode=a.player_playback_mode,i._currentMode=a.player_playback_mode)})},tm=function(){function e(t){J(this,e),ei(this,"pm",void 0),ei(this,"_currentRangeStart",void 0),ei(this,"_lastPlayheadTime",void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on("playbackheartbeat",this._updatePlaybackRange.bind(this)),t.on("playbackheartbeatend",this._endPlaybackRange.bind(this))}return et(e,[{key:"_updateLastRangeEnd",value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:"_updatePlaybackRange",value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&null!=(e=this.pm.adTracker)&&e.isAdBreak&&null!==this._lastPlayheadTime&&t<this._lastPlayheadTime)){if(null!==this._lastPlayheadTime&&null!==this._currentRangeStart&&Math.abs(t-this._lastPlayheadTime)>1e3){var i=this.pm.data.video_playback_ranges;i&&i.length>0&&(i[i.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(null===this._currentRangeStart){var a=this.pm.data.video_playback_ranges||[];a.length>0&&a[a.length-1][1]===t?this._currentRangeStart=a[a.length-1][0]:(this._currentRangeStart=t,a.push([t,t])),this.pm.data.video_playback_ranges=a}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:"_endPlaybackRange",value:function(){null!==this._currentRangeStart&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),tp=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange","cdnchange","playbackmodechange"],tv=new Set(["requestcompleted","requestfailed","requestcanceled"]),tb=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&en(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ea(a);return e=t?Reflect.construct(i,arguments,ea(this).constructor):i.apply(this,arguments),e&&("object"===y(e)||"function"==typeof e)?e:X(this)});function a(e,t,r){J(this,a),ei(X(n=i.call(this)),"pageLoadEndTime",void 0),ei(X(n),"pageLoadInitTime",void 0),ei(X(n),"_destroyed",void 0),ei(X(n),"_heartBeatTimeout",void 0),ei(X(n),"adTracker",void 0),ei(X(n),"dashjs",void 0),ei(X(n),"data",void 0),ei(X(n),"disablePlayheadRebufferTracking",void 0),ei(X(n),"disableRebufferTracking",void 0),ei(X(n),"disableAdPlaybackRangeFiltering",void 0),ei(X(n),"errorTracker",void 0),ei(X(n),"errorTranslator",void 0),ei(X(n),"emitTranslator",void 0),ei(X(n),"getAdData",void 0),ei(X(n),"getPlayheadTime",void 0),ei(X(n),"getStateData",void 0),ei(X(n),"stateDataTranslator",void 0),ei(X(n),"hlsjs",void 0),ei(X(n),"id",void 0),ei(X(n),"longResumeTracker",void 0),ei(X(n),"minimumRebufferDuration",void 0),ei(X(n),"mux",void 0),ei(X(n),"playbackEventDispatcher",void 0),ei(X(n),"playbackHeartbeat",void 0),ei(X(n),"playbackHeartbeatTime",void 0),ei(X(n),"playheadTime",void 0),ei(X(n),"seekingTracker",void 0),ei(X(n),"sustainedRebufferThreshold",void 0),ei(X(n),"watchTimeTracker",void 0),ei(X(n),"currentFragmentPDT",void 0),ei(X(n),"currentFragmentStart",void 0),n.pageLoadInitTime=ed.navigationStart(),n.pageLoadEndTime=ed.domContentLoadedEventEnd(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),Q.level=r.debug?j.DEBUG:j.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.disableAdPlaybackRangeFiltering=r.disableAdPlaybackRangeFiltering,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new ts(e,r.data.env_key,r),n.data={player_instance_id:$(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"),this.emit("renditionchange"))}).bind(X(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tp.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tl(X(n)),n.errorTracker=new eM(X(n)),new eK(X(n)),n.seekingTracker=new eW(X(n)),n.playheadTime=new eN(X(n)),n.playbackHeartbeat=new eD(X(n)),new eB(X(n)),n.watchTimeTracker=new eO(X(n)),new ex(X(n)),new tm(X(n)),n.adTracker=new e$(X(n)),new eU(X(n)),new eP(X(n)),new eH(X(n)),new to(X(n)),new tu(X(n)),new th(X(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return et(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=er(ea(a.prototype),"emit",this)).call.apply(i,[this].concat(G(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=H(eo(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return"".concat(e[0],":").concat(e[1])})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tv.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e,t=this.getStateData();if("function"==typeof this.stateDataTranslator)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}null!=(e=this.data)&&e.video_cdn&&null!=t&&t.video_cdn&&(t.video_cdn,t=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(t,["video_cdn"])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=$(),i=function(){t===e.data.view_id&&eu(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){return e.hlsjs?this.hlsjs?void this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):void(this.hlsjs=e.hlsjs,e_(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ey(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){return e.dashjs?this.dashjs?void this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):void(this.dashjs=e.dashjs,eS(this.mux,this.id,e.dashjs)):void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eR(this.dashjs),this.dashjs=void 0)}}]),a}(eC),tE=E(N());function tg(){return tE.default&&!!(tE.default.fullscreenElement||tE.default.webkitFullscreenElement||tE.default.mozFullScreenElement||tE.default.msFullscreenElement)}var tf,t_=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],ty={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tT=E(g());tT.default&&tT.default.WeakMap&&(tf=new WeakMap);var tA={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tk=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tk.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tk.prototype.processLine=function(e){var t=e.indexOf(":"),i=tD(e,t),a=i[0],r=2===i.length?tR(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tA.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tA.PART_INF:tw(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tA.SERVER_CONTROL:tw(this.manifest,i),this.setHoldBack();break;case tA.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tA.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tA.VERSION:tw(this.manifest,i);break;case tA.SESSION_DATA:var s=eE(tM(i[1]));Object.assign(this.manifest.sessionData,s)}},tk.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tw=function(e,t){var i,a=tS(t[0].replace("#EXT-X-",""));tL(t[1])?(i={},i=Object.assign(tC(t[1]),i)):i=tR(t[1]),e[a]=i},tS=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tR=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tI=function(e){var t={},i=e.split("=");return i.length>1&&(t[tS(i[0])]=tR(i[1])),t},tC=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tI(t[a]),i);return i},tL=function(e){return e.indexOf("=")>-1},tD=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tM=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tO={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){Q.info("safeCall error",e)}return r},safeIncrement:eu,getComputedStyle:function(e,t){var i;return e&&t&&tT.default&&"function"==typeof tT.default.getComputedStyle?(tf&&tf.has(e)&&(i=tf.get(e)),i||(i=tT.default.getComputedStyle(e,null),tf&&tf.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ev,cdnHeadersToRequestId:eb,extractHostnameAndDomain:eo,extractHostname:es,manifestParser:tk,generateShortID:K,generateUUID:$,now:F.now,findMediaElement:Y},tx={},tN=function(e){var t=arguments;"string"==typeof e?tN.hasOwnProperty(e)?B.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tN[e].apply(null,t)},0):Q.warn("`"+e+"` is an unknown task"):"function"==typeof e?B.default.setTimeout(function(){e(tN)},0):Q.warn("`"+e+"` is invalid.")},tP={loaded:F.now(),NAME:"mux-embed",VERSION:"5.17.10",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=H(Y(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tg(),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.fullscreenChangeListener&&(document.removeEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1),delete r.mux.fullscreenChangeListener),r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=H(Y(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.fullscreenChangeListener=r.mux.fullscreenChangeListener,delete r.mux.fullscreenChangeListener,a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},t_.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=ty[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))}),r.mux.listeners.enterpictureinpicture=function(){e.emit(n,"playbackmodechange",{player_playback_mode:"pip",player_playback_mode_data:"{}"})},r.mux.listeners.leavepictureinpicture=function(){var t=tg()?"fullscreen":"standard";e.emit(n,"playbackmodechange",{player_playback_mode:t,player_playback_mode_data:"{}"})},r.addEventListener("enterpictureinpicture",r.mux.listeners.enterpictureinpicture,!1),r.addEventListener("leavepictureinpicture",r.mux.listeners.leavepictureinpicture,!1),r.mux.fullscreenChangeListener=function(){var t=tg(),i=document.fullscreenElement;if(t&&(i===r||null!=i&&i.contains(r)))e.emit(n,"playbackmodechange",{player_playback_mode:"fullscreen",player_playback_mode_data:"{}"});else if(!t){var a=document.pictureInPictureElement===r;e.emit(n,"playbackmodechange",{player_playback_mode:a?"pip":"standard",player_playback_mode_data:"{}"})}},document.addEventListener("fullscreenchange",r.mux.fullscreenChangeListener,!1)}(tN,e,t)},destroyMonitor:function(e){var t=H(Y(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():Q.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=q(e);tx[i]?tx[i].addHLSJS(t):Q.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=q(e);tx[i]?tx[i].addDashJS(t):Q.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=q(e);tx[t]?tx[t].removeHLSJS():Q.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=q(e);tx[t]?tx[t].removeDashJS():Q.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){Z()&&t&&t.respectDoNotTrack&&Q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=q(e);tx[i]=new tb(tN,i,t)},emit:function(e,t,i){var a=q(e);tx[a]?(tx[a].emit(t,i),"destroy"===t&&delete tx[a]):Q.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=q(e);tx[i]?tx[i].emit("hb",t):Q.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=q(e);tx[i]?tx[i].emitTranslator=t:Q.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=q(e);tx[i]?tx[i].stateDataTranslator=t:Q.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=q(e);tx[i]?tx[i].getPlayheadTime=t:Q.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:Z,log:Q,utils:tO,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",PLAYBACK_MODE_CHANGE:"playbackmodechange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tN,tP),void 0!==B.default&&"function"==typeof B.default.addEventListener&&B.default.addEventListener("pagehide",function(e){e.persisted||(tN.WINDOW_UNLOADING=!0)},!1);var tU=i(1537),tH=tU.Ay,tB={VIDEO:"video",DRM:"drm"},tW={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tV=e=>e===tB.VIDEO?"playback":e,tF=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tF.MEDIA_ERR_ABORTED=1,tF.MEDIA_ERR_NETWORK=2,tF.MEDIA_ERR_DECODE=3,tF.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tF.MEDIA_ERR_ENCRYPTED=5,tF.MEDIA_ERR_CUSTOM=100,tF.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var t$=(e,t)=>null!=t&&e in t,tK={ANY:"any",MUTED:"muted"},tq={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tY={MSE:"mse",NATIVE:"native"},tG={HEADER:"header",QUERY:"query",NONE:"none"},tj=Object.values(tG),tQ={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tz={HLS:tQ.M3U8};Object.keys(tz),[...Object.values(tQ)];var tZ={code:"en"},tX=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tJ=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},t0=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return t$(e,tz)?tz[e]:t}return t3(e)},t1=e=>"VOD"===e?tq.ON_DEMAND:tq.LIVE,t2=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,t3=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=new URL(t).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return t5(e)?tQ.M3U8:"";let r=i.slice(a+1).toUpperCase();return t$(r,tQ)?tQ[r]:""},t4="mux.com",t5=({src:e,customDomain:t=t4})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},t9=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function t8(e,t=!0){var i;return new t6(t&&null!=(i=null==tZ?void 0:tZ[e])?i:e,t?tZ.code:"en")}var t6=class{constructor(e,t=(e=>null!=(e=tZ)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},t7=Object.values(tK),ie=e=>"boolean"==typeof e||"string"==typeof e&&t7.includes(e),it=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tK.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tK.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},ii=e=>"time"in e?e.time:e.startTime;function ia(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function ir(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function is(e,t,i,a){let r=ir(e,i,a);return r||((r=ia(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>ii(t)-ii(e)).forEach(t=>{var i,n;let s=t.value,o=ii(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var io="cuepoints",il=Object.freeze({label:io});async function id(e,t,i=il){return is(e,t,i.label,"metadata")}var iu=e=>({time:e.startTime,value:JSON.parse(e.text)});function ic(e,t={label:io}){var i,a;let r=ir(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iu(r.activeCues[0]);let{currentTime:n}=e;return iu(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ih(e,t=il){return new Promise(i=>{tX(e,"loadstart",async()=>{let a=await id(e,[],t);tX(e,"cuechange",()=>{let t=ic(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var im="chapters",ip=Object.freeze({label:im}),iv=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function ib(e,t,i=ip){return is(e,t,i.label,"chapters")}function iE(e,t={label:im}){var i,a;let r=ir(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return iv(r.activeCues[0]);let{currentTime:n}=e;return iv(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ig(e,t=ip){return new Promise(i=>{tX(e,"loadstart",async()=>{let a=await ib(e,[],t);tX(e,"cuechange",()=>{let t=iE(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var i_={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},iy=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o;if(n){let i=t8("Your device appears to be offline",r),a=tF.MEDIA_ERR_NETWORK,n=new tF(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=tW.NETWORK_OFFLINE,n.data=e,n}let l="status"in e?e.status:e.code,d=Date.now(),u=tF.MEDIA_ERR_NETWORK;if(200===l)return;let c=tV(t),h=((e,t)=>{var i,a;let r=tV(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:t$(n,t)?t[n]:void 0})(t,i),m=(e=>e===tB.VIDEO?i_.VIDEO:e===tB.DRM?i_.DRM:void 0)(t),[v]=tJ(null!=(s=i.playbackId)?s:"");if(!l||!v)return;let b=t9(h);if(h&&!b){let i=new tF(t8("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:c}),u,!0,t8("Compact JWT string: {token}",r).format({token:h}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(l>=500){let e=new tF("",u,null==a||a);return e.errorCategory=t,e.muxCode=tW.NETWORK_UNKNOWN_ERROR,e}if(403===l)if(b){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(b,d)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tF(t8("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:c}),u,!0,t8("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=b.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(d)}));return a.errorCategory=t,a.muxCode=tW.NETWORK_TOKEN_EXPIRED,a.data=e,a}if((({sub:e},t)=>e!==t)(b,v)){let i=new tF(t8("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c}),u,!0,t8("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:c,playbackId:v,tokenPlaybackId:b.sub}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if((({aud:e},t)=>!e)(b,0)){let i=new tF(t8("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,t8("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if((({aud:e},t)=>e!==t)(b,m)){let i=new tF(t8("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,t8("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m,aud:b.aud}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new tF(t8("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c,category:t}),u,null==a||a,t8("Specified playback ID: {playbackId}",r).format({playbackId:v}));return i.errorCategory=t,i.muxCode=tW.NETWORK_TOKEN_MISSING,i.data=e,i}if(412===l){let n=new tF(t8("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),u,null==a||a,t8("Specified playback ID: {playbackId}",r).format({playbackId:v}));return n.errorCategory=t,n.muxCode=tW.NETWORK_NOT_READY,n.streamType=i.streamType===tq.LIVE?"live":i.streamType===tq.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===l){let i=new tF(t8("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),u,null==a||a,t8("Specified playback ID: {playbackId}",r).format({playbackId:v}));return i.errorCategory=t,i.muxCode=tW.NETWORK_NOT_FOUND,i.data=e,i}if(400===l){let i=new tF(t8("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),u,null==a||a,t8("Specified playback ID: {playbackId}",r).format({playbackId:v}));return i.errorCategory=t,i.muxCode=tW.NETWORK_INVALID_URL,i.data=e,i}let E=new tF("",u,null==a||a);return E.errorCategory=t,E.muxCode=tW.NETWORK_UNKNOWN_ERROR,E.data=e,E},iT=tH.DefaultConfig.capLevelController,iA={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400},ik=class e extends iT{constructor(e){super(e)}static setMaxAutoResolution(t,i){i?e.maxAutoResolution.set(t,i):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){var t;let i=this.hls;return null!=(t=e.maxAutoResolution.get(i))?t:void 0}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),i=this.getMaxAutoResolution();if(!i)return super.getMaxLevel(e);let a=iA[i.toLowerCase().trim()];if(!a)return super.getMaxLevel(e);let r=t.filter(e=>e.width*e.height<=a),n=r.findIndex(e=>e.width*e.height===a);if(-1!==n){let e=r[n];return t.findIndex(t=>t===e)}if(0===r.length)return 0;let s=r[r.length-1];return t.findIndex(e=>e===s)}getMaxLevel(t){if(void 0!==this.getMaxAutoResolution())return this.getMaxLevelCapped(t);let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iT.getMaxLevelByMediaSize(a,16/9*n,n)}};ik.minMaxResolution=720,ik.maxAutoResolution=new WeakMap;var iw,iS,iR,iI,iC,iL,iD=e=>new TextDecoder("utf-16le").decode(e).replace("skd://","").slice(1),iM={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},iO=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,ix=async(e,t)=>{if(t===tQ.MP4)return{streamType:tq.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tQ.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await fetch(i.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>200!==e.status?Promise.reject(e):e.text());return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(iO)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=t1(n),o=t2(n),l;if(s===tq.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},iN=async(e,t,i=t0({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await ix(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&iP(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=iW.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=iW.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=iW.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iP=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=iW.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},iU=null!=(iS=null==(iw=null==globalThis?void 0:globalThis.navigator)?void 0:iw.userAgent)?iS:"",iH=null!=(iC=null==(iI=null==(iR=null==globalThis?void 0:globalThis.navigator)?void 0:iR.userAgentData)?void 0:iI.platform)?iC:"",iB=iU.toLowerCase().includes("android")||["x11","android"].some(e=>iH.toLowerCase().includes(e)),iW=new WeakMap,iV="mux.com",iF=null==(iL=tH.isSupported)?void 0:iL.call(tH),i$=()=>{if("undefined"!=typeof window)return tN.utils.now()},iK=tN.utils.generateUUID,iq=({playbackId:e,customDomain:t=iV,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=tJ(e),v=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||v.searchParams.has("token")?(v.searchParams.forEach((e,t)=>{"token"!=t&&v.searchParams.delete(t)}),u&&v.searchParams.set("token",u)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&v.searchParams.set(e,t)})),v.toString()},iY=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},iG=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},ij=e=>{var t;return null==(t=iW.get(e))?void 0:t.error},iQ=e=>{var t,i;return null!=(i=null==(t=iW.get(e))?void 0:t.streamType)?i:tq.UNKNOWN},iz=e=>{var t,i;return null!=(i=null==(t=iW.get(e))?void 0:t.seekable)?i:e.seekable},iZ=.034,iX=(e,t,i=iZ)=>e>t||((e,t,i=iZ)=>Math.abs(e-t)<=i)(e,t,i),iJ=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},i0=(e,t)=>e.ended||e.loop?e.ended:!!(t&&iJ(e,t))||((e,t=iZ)=>e.paused&&iX(e.currentTime,e.duration,t))(e),i1=(e,t,i)=>{i2(t,i,e);let{metadata:a={}}=e,{view_session_id:r=iK()}=a,n=(e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:at(e)&&null!=(a=null!=(i=iY(e.playbackId))?i:iG(e.src))?a:e.src})(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{var i;let a=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let n=e.muxDataKeepSession;e.muxDataKeepSession=!0;let s=null==(i=iW.get(t))?void 0:i.coreReference;i1(e,t,s),e.muxDataKeepSession=n,e.useWebkitFairplay=!1,a&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},iW.set(t,{retryCount:0});let s=i4(e,t),o=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tX(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,s);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?s&&t.mux.addHLSJS({hlsjs:s,Hls:s?tH:void 0}):aa(e,t,s),ar(e,t,s),ih(t),ig(t);let l=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=ie(a)?a:!!a,o=()=>{r||tX(t,"playing",()=>{r=!0},{once:!0})};if(o(),tX(t,"loadstart",()=>{r=!1,o(),it(t,s)},{once:!0}),tX(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tq.UNKNOWN?e.streamType===tq.LIVE:!Number.isFinite(t.duration)),it(t,s)},{once:!0}),i&&i.once(tH.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tq.UNKNOWN?e.streamType===tq.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tX(t,"play",()=>{"metadata"===t.preload?i.once(tH.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||it(t,s=ie(e)?e:!!e)}})(e,t,s),d={engine:s,setAutoplay:l,setPreload:o},u=iW.get(t);return u&&(u.coreReference=d),d},i2=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",as),e.removeEventListener("error",al),e.removeEventListener("durationchange",an),iW.delete(e),e.dispatchEvent(new Event("teardown")))};function i3(e,t){var i;let a=t0(e);if(a!==tQ.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tY.MSE,o=n===tY.NATIVE,l=iF&&(s||iB||!(/^((?!chrome|android).)*safari/i.test(iU)&&t.canPlayType("application/vnd.apple.mpegurl")));return r&&(o||!l)}var i4=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={},maxAutoResolution:l}=e,d=t0(e)===tQ.M3U8,u=i3(e,t);if(d&&!u&&iF){let d=i5(a),u=i9(e),c=[tG.QUERY,tG.HEADER].includes(s)?{useHeaders:s===tG.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,h=ai(e,o),m=new tH({debug:i,startPosition:r,cmcd:c,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tG.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...h,...d,...u,...o});return h.capLevelController===ik&&void 0!==l&&ik.setMaxAutoResolution(m,l),m.on(tH.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&iP(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),m}},i5=e=>e===tq.LIVE?{backBufferLength:8}:{},i9=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=iY(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:i7(e,"fairplay"),serverCertificateUrl:ae(e,"fairplay")},"com.widevine.alpha":{licenseUrl:i7(e,"widevine")},"com.microsoft.playready":{licenseUrl:i7(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=(e=>e.includes("fps")?iM.FAIRPLAY:e.includes("playready")?iM.PLAYREADY:e.includes("widevine")?iM.WIDEVINE:void 0)(e);return null==a||a(i),t}))}:{}},i8=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},i6=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},i7=({playbackId:e,tokens:{drm:t}={},customDomain:i=iV},a)=>{let r=iY(e);return`https://license.${i.toLocaleLowerCase().endsWith(iV)?i:iV}/license/${a}/${r}?token=${t}`},ae=({playbackId:e,tokens:{drm:t}={},customDomain:i=iV},a)=>{let r=iY(e);return`https://license.${i.toLocaleLowerCase().endsWith(iV)?i:iV}/appcert/${a}/${r}?token=${t}`},at=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iV)||!!i&&a.includes(i.toLocaleLowerCase())},ai=(e,t)=>{let i={};return i.capLevelToPlayerSize=e.capRenditionToPlayerSize,null==i.capLevelToPlayerSize?(i.capLevelController=ik,i.capLevelToPlayerSize=!0):i.capLevelController=tU.Rx,i},aa=(e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tN,muxDataSDKOptions:o={}}=e,l=at(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tH:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}},ar=(e,t,i)=>{var a,r;let n=i3(e,t),{src:s,customDomain:o=iV}=e,l=()=>{t.ended||e.disablePseudoEnded||!i0(t,i)||(iJ(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=iz(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(tX(t,"durationchange",c),t&&n){let i=t0(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=iG(s);iP(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(iQ(t)!==tq.LIVE||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tX(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>iN(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=iy(i,tB.VIDEO,e);if(a)return void ao(t,a)}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};tX(t,"play",e,{once:!0}),tX(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?((e,t)=>{let i={mediaEl:t,getAppCertificate:()=>i8(ae(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iy(t,tB.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)}),getLicenseKey:t=>i6(t,i7(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=iy(t,tB.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)}),saveAndDispatchError:ao,drmTypeCb:()=>{var t;null==(t=e.drmTypeCb)||t.call(e,iM.FAIRPLAY)}};if(e.useWebkitFairplay)(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r})=>{if(!window.WebKitMediaKeys||!("onwebkitneedkey"in e)){console.error("No WebKitMediaKeys. FairPlay may not be supported");let t=new tF(t8("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tF.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tB.DRM,t.muxCode=tW.ENCRYPTED_CDM_ERROR,a(e,t),()=>{}}let n=t(),s=null,o=t=>{(async()=>{try{e.webkitKeys||l();let i=await n;if(null===t.initData||null==i)return;let a=((e,t)=>{let i=function(e){let t=new ArrayBuffer(2*e.length),i=new DataView(t);for(let t=0;t<e.length;t++)i.setUint16(2*t,e.charCodeAt(t),!0);return t}(iD(e)),a=new Uint8Array(e),r=new Uint8Array(i),n=new Uint8Array(t),s=new Uint8Array(a.byteLength+4+n.byteLength+4+r.byteLength),o=0,l=e=>{s.set(e,o),o+=e.byteLength},d=e=>{let t=new DataView(s.buffer),i=e.byteLength;t.setUint32(o,i,!0),o+=4,l(e)};return l(a),d(r),d(n),s})(t.initData,i);d(a)}catch(t){console.error("Could not start encrypted playback due to exception",t),a(e,t)}})()},l=()=>{try{let t=new WebKitMediaKeys("com.apple.fps.1_0");e.webkitSetMediaKeys(t),r()}catch{let e=new tF("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",tF.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory=tB.DRM,e.muxCode=tW.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,e}},d=t=>{let r=e.webkitKeys.createSession("application/vnd.apple.mpegurl",t),n=async t=>{try{let e=t.message,a=await i(e);r.update(a)}catch(t){console.error("Error on FairPlay session message",t),a(e,t)}},o=t=>{let i=t.target.error;if(!i)return;console.error(`Internal Webkit Key Session Error - sysCode: ${i.systemCode} code: ${i.code}`);let r=new tF(t8("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tF.MEDIA_ERR_ENCRYPTED,!0);r.errorCategory=tB.DRM,r.muxCode=tW.ENCRYPTED_CDM_ERROR,a(e,r)},l=()=>{r.removeEventListener("webkitkeymessage",n),r.removeEventListener("webkitkeyerror",o),e.removeEventListener("teardown",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l),s=null;try{r.close()}catch{}};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l,{once:!0}),r.addEventListener("webkitkeymessage",n),r.addEventListener("webkitkeyerror",o),e.addEventListener("teardown",l),s=l},u=()=>{e.removeEventListener("webkitneedkey",o),e.removeEventListener("teardown",u),null==s||s();try{e.webkitSetMediaKeys(null)}catch{}};return e.addEventListener("webkitneedkey",o),e.addEventListener("teardown",u,{once:!0})})(i);else{let t=(({mediaEl:e,getAppCertificate:t,getLicenseKey:i,saveAndDispatchError:a,drmTypeCb:r,fallbackToWebkitFairplay:n})=>{let s=null,o=async t=>{try{let i=t.initDataType;if("skd"!==i)return void console.error(`Received unexpected initialization data type "${i}"`);e.mediaKeys||await l(i);let a=t.initData;if(null==a)return void console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);await d(i,a)}catch(t){a(e,t);return}},l=async i=>{let n=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[i],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(e=>(r(),e)).catch(()=>{let t=new tF(t8("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tF.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tB.DRM,t.muxCode=tW.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,a(e,t)});if(!n)return;let s=await n.createMediaKeys();try{let e=await t();await s.setServerCertificate(e).catch(()=>{let e=t8("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tF(e,tF.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tB.DRM,t.muxCode=tW.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(t){a(e,t);return}await e.setMediaKeys(s)},d=async(t,r)=>{let o=e.mediaKeys.createSession(),l=async t=>{let r=t.message,n=await i(r);try{await o.update(n)}catch{let t=new tF(t8("Failed to update DRM license. This may be an issue with the player or your protected content."),tF.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=tB.DRM,t.muxCode=tW.ENCRYPTED_UPDATE_LICENSE_FAILED,a(e,t)}},d=()=>{o.keyStatuses.forEach(t=>(t=>{let i;"internal-error"===t?((i=new tF(t8("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tF.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tB.DRM,i.muxCode=tW.ENCRYPTED_CDM_ERROR):("output-restricted"===t||"output-downscaled"===t)&&((i=new tF(t8("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tF.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tB.DRM,i.muxCode=tW.ENCRYPTED_OUTPUT_RESTRICTED),i&&a(e,i)})(t))};o.addEventListener("keystatuseschange",d),o.addEventListener("message",l);let u=async()=>{o.removeEventListener("keystatuseschange",d),o.removeEventListener("message",l),"webkitCurrentPlaybackTargetIsWireless"in e&&e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",u),e.removeEventListener("teardown",u),await o.close().catch(e=>{console.warn("There was an error when closing EME session",e)}),s=null};"webkitCurrentPlaybackTargetIsWireless"in e&&e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",u,{once:!0}),e.addEventListener("teardown",u,{once:!0}),s=u,await o.generateRequest(t,r).catch(async t=>{if("NotSupportedError"===t.name&&"webkitCurrentPlaybackTargetIsWireless"in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"),null==n||n();else{let e=new tF(t8("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tF.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=tB.DRM,e.muxCode=tW.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error("Failed to generate license request",t),Promise.reject(e)}})},u=async()=>{e.removeEventListener("encrypted",o),e.removeEventListener("teardown",u),s&&await s(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener("encrypted",o),e.addEventListener("teardown",u,{once:!0}),u})({fallbackToWebkitFairplay:async()=>{var i;await t(),null==(i=e.fallbackToWebkitFairplay)||i.call(e)},...i})}})(e,t):tX(t,"encrypted",()=>{let e=new tF(t8("Attempting to play DRM-protected content without providing a DRM token."),tF.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tB.DRM,e.muxCode=tW.ENCRYPTED_MISSING_TOKEN,ao(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=iW.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",an,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",as),t.addEventListener("error",al),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tX(t,"pause",l),tX(t,"seeked",l),tX(t,"play",()=>{t.ended||iX(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(tH.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:v}=(e=>{var t;let i=e.type,a=t1(i),r=t2(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tq.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}})(e);if(c===tq.LIVE){v?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=iW.get(t))?o:{}).seekable=e}(null!=(l=iW.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=iW.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=iW.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),c(),iQ(t)!==tq.LIVE||Number.isFinite(t.duration)||(i.on(tH.Events.LEVEL_UPDATED,c),tX(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tH.Events.LEVELS_UPDATED,c)}))}),i.on(tH.Events.ERROR,(a,r)=>{var n,s;let o=ad(r,e);if(o.muxCode===tW.NETWORK_NOT_READY){let e=null!=(n=iW.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new tF(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),ao(t,s),setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);return}{e.retryCount=0;let i=new tF('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),ao(t,i);return}}ao(t,o)}),i.on(tH.Events.MANIFEST_LOADED,()=>{let e=iW.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",al),tX(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tH.Events.MANIFEST_PARSED,function(t,i){n();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tH.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(r(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tH.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)}),null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)});let r=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},n=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),r()};t.once(tH.Events.DESTROYING,n)}(e,i),function(e,t){t.on(tH.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;ia(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tH.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tH.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tH.Events.MANIFEST_LOADED,a),t.once(tH.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function an(e){var t;let i=e.target,a=null==(t=iW.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function as(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tF(i,a);if(t.src&&a===tF.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=ij(t))?e:t.error;(null==i?void 0:i.code)===tF.MEDIA_ERR_SRC_NOT_SUPPORTED&&ao(t,r)},500);if(t.src&&(a!==tF.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}ao(t,r)}function ao(e,t){var i;t.fatal&&((null!=(i=iW.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function al(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tF))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=iW.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var ad=(e,t)=>{var i,a,r;e.fatal?console.error("getErrorFromHlsErrorData()",e):t.debug&&console.warn("getErrorFromHlsErrorData() (non-fatal)",e);let n={[tH.ErrorTypes.NETWORK_ERROR]:tF.MEDIA_ERR_NETWORK,[tH.ErrorTypes.MEDIA_ERROR]:tF.MEDIA_ERR_DECODE,[tH.ErrorTypes.KEY_SYSTEM_ERROR]:tF.MEDIA_ERR_ENCRYPTED},s,o=(e=>[tH.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tH.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tF.MEDIA_ERR_NETWORK:n[e.type])(e);if(o===tF.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=(e=>e.type===tH.ErrorTypes.KEY_SYSTEM_ERROR?tB.DRM:e.type===tH.ErrorTypes.NETWORK_ERROR?tB.VIDEO:void 0)(e))?i:tB.VIDEO;s=null!=(a=iy(e.response,r,t,e.fatal))?a:new tF("",o,e.fatal)}else o===tF.MEDIA_ERR_ENCRYPTED?e.details===tH.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tF(t8("Attempting to play DRM-protected content without providing a DRM token."),tF.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tB.DRM,s.muxCode=tW.ENCRYPTED_MISSING_TOKEN):e.details===tH.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tF(t8("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tF.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tB.DRM,s.muxCode=tW.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tH.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tF(t8("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tF.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tB.DRM,s.muxCode=tW.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tH.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tF(t8("Failed to update DRM license. This may be an issue with the player or your protected content."),tF.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tB.DRM,s.muxCode=tW.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tH.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tF(t8("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tF.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tB.DRM,s.muxCode=tW.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tH.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tF(t8("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tF.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tB.DRM,s.muxCode=tW.ENCRYPTED_CDM_ERROR):e.details===tH.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tF(t8("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tF.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tB.DRM,s.muxCode=tW.ENCRYPTED_OUTPUT_RESTRICTED):((s=new tF(e.error.message,tF.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tB.DRM,s.muxCode=tW.ENCRYPTED_ERROR):s=new tF("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s};let au=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],ac=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function ah(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${av(e)}></audio>
    </slot>
    <slot></slot>
  `}function am(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${av(e)}></video>
    </slot>
    <slot></slot>
  `}function ap(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),r=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class n extends e{static getTemplateHTML=t.endsWith("audio")?ah:am;static shadowRootOptions={mode:"open"};static Events=au;static #e=!1;static get observedAttributes(){return n.#t(),[...a?.constructor?.observedAttributes??[],...ac]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),r))if(!(t in this.prototype))if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();return e.has(a)?void(!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i)):this.set?void this.set(t,i):void(this.nativeEl&&(this.nativeEl[t]=i))}),Object.defineProperty(this.prototype,t,i)}}#a=!1;#r=null;#n=new Map;#s;#o;get;set;call;get nativeEl(){return this.#i(),this.#r??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#r=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),r))this.#l(e);this.#d()}#d(){for(let e of(this.#s=new MutationObserver(this.#u.bind(this)),this.#o=()=>this.#c(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#c(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#c(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#s?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#u(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#h(a))}}#h(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){!["id","class"].includes(e)&&(!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i)))}connectedCallback(){this.#i(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#s?.disconnect(),this.#s=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#r=null}}}function av(e){let t="";for(let i in e){if(!ac.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let ab=ap(globalThis.HTMLElement??class{},{tag:"video"});ap(globalThis.HTMLElement??class{},{tag:"audio"});var aE,ag,af,a_,ay,aT,aA,ak,aw,aS,aR,aI,aC,aL=e=>{throw TypeError(e)},aD=(e,t,i)=>t.has(e)||aL("Cannot "+i),aM=(e,t,i)=>(aD(e,t,"read from private field"),i?i.call(e):t.get(e)),aO=(e,t,i)=>t.has(e)?aL("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ax=(e,t,i,a)=>(aD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aN=(e,t,i)=>(aD(e,t,"access private method"),i),aP=(()=>{try{return"0.30.3"}catch{}return"UNKNOWN"})(),aU=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,aH={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",MAX_AUTO_RESOLUTION:"max-auto-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo",CAP_RENDITION_TO_PLAYER_SIZE:"cap-rendition-to-player-size"},aB=Object.values(aH),aW="mux-video",aV=class extends ab{constructor(){super(),aO(this,aS),aO(this,aE),aO(this,ag),aO(this,af,{}),aO(this,a_,{}),aO(this,ay),aO(this,aT),aO(this,aA),aO(this,ak),aO(this,aw,""),aO(this,aI),ax(this,ag,i$()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let i=(e=>{var t;return null==(t=iW.get(e))?void 0:t.metadata})(this.nativeEl),a=null!=(t=this.metadata)?t:{};this.metadata={...i,...a},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(ax(this,aw,"default"),this.updateLogo())})}static get NAME(){return aW}static get VERSION(){return aP}static get observedAttributes(){var e;return[...aB,...null!=(e=ab.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?aU:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${ab.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[aH.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(aH.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tj.includes(e)?this.setAttribute(aH.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tj.join()}`):this.removeAttribute(aH.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(aH.PLAYER_INIT_TIME)?+this.getAttribute(aH.PLAYER_INIT_TIME):aM(this,ag)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(aH.PLAYER_INIT_TIME):this.setAttribute(aH.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=aM(this,aA))?e:aW}set playerSoftwareName(e){ax(this,aA,e)}get playerSoftwareVersion(){var e;return null!=(e=aM(this,aT))?e:aP}set playerSoftwareVersion(e){ax(this,aT,e)}get _hls(){var e;return null==(e=aM(this,aS,aR))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=ij(this.nativeEl))?e:null}get errorTranslator(){return aM(this,ak)}set errorTranslator(e){ax(this,ak,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(aH.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(aH.TYPE,e):this.removeAttribute(aH.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(aH.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(aH.DEBUG,""):this.removeAttribute(aH.DEBUG))}get disableTracking(){return this.hasAttribute(aH.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(aH.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(aH.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(aH.DISABLE_COOKIES,""):this.removeAttribute(aH.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(aH.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(aH.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(aH.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(aH.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(aH.START_TIME):this.setAttribute(aH.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(aH.PLAYBACK_ID)?this.getAttribute(aH.PLAYBACK_ID):null!=(e=iG(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(aH.PLAYBACK_ID,e):this.removeAttribute(aH.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(aH.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(aH.MAX_RESOLUTION,e):this.removeAttribute(aH.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(aH.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(aH.MIN_RESOLUTION,e):this.removeAttribute(aH.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(aH.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(aH.MAX_AUTO_RESOLUTION):this.setAttribute(aH.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(aH.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(aH.RENDITION_ORDER,e):this.removeAttribute(aH.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(aH.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(aH.PROGRAM_START_TIME):this.setAttribute(aH.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(aH.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(aH.PROGRAM_END_TIME):this.setAttribute(aH.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(aH.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(aH.ASSET_START_TIME):this.setAttribute(aH.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(aH.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(aH.ASSET_END_TIME):this.setAttribute(aH.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(aH.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(aH.CUSTOM_DOMAIN,e):this.removeAttribute(aH.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){var e;return(null==(e=this._hlsConfig)?void 0:e.capLevelToPlayerSize)!=null?this._hlsConfig.capLevelToPlayerSize:aM(this,aI)}set capRenditionToPlayerSize(e){ax(this,aI,e)}get drmToken(){var e;return null!=(e=this.getAttribute(aH.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(aH.DRM_TOKEN,e):this.removeAttribute(aH.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(aH.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(aH.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(aH.PLAYBACK_ID)){let[,e]=tJ(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(aH.PLAYBACK_TOKEN,e):this.removeAttribute(aH.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(aH.PLAYBACK_TOKEN),t=this.getAttribute(aH.DRM_TOKEN);return{...aM(this,a_),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){ax(this,a_,null!=e?e:{})}get ended(){return i0(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(aH.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(aH.ENV_KEY,e):this.removeAttribute(aH.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(aH.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(aH.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(aH.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(aH.STREAM_TYPE))?e:iQ(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(aH.STREAM_TYPE,e):this.removeAttribute(aH.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(aH.TARGET_LIVE_WINDOW)?+this.getAttribute(aH.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=iW.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(aH.TARGET_LIVE_WINDOW):this.setAttribute(aH.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(aH.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=iW.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=iz(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(aH.LIVE_EDGE_OFFSET))return+this.getAttribute(aH.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(aH.LIVE_EDGE_OFFSET):this.setAttribute(aH.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return iz(this.nativeEl)}async addCuePoints(e){return id(this.nativeEl,e)}get activeCuePoint(){return ic(this.nativeEl)}get cuePoints(){return function(e,t={label:io}){let i=ir(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>iu(e)):[]}(this.nativeEl)}async addChapters(e){return ib(this.nativeEl,e)}get activeChapter(){return iE(this.nativeEl)}get chapters(){return function(e,t={label:im}){var i;let a=ir(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>iv(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(aH.PREFER_PLAYBACK);if(e===tY.MSE||e===tY.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tY.MSE||e===tY.NATIVE?this.setAttribute(aH.PREFER_PLAYBACK,e):this.removeAttribute(aH.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![aH.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...aM(this,af)}}set metadata(e){ax(this,af,null!=e?e:{}),this.mux&&this.mux.emit("hb",aM(this,af))}get _hlsConfig(){return aM(this,ay)}set _hlsConfig(e){ax(this,ay,e)}get logo(){var e;return null!=(e=this.getAttribute(aH.LOGO))?e:aM(this,aw)}set logo(e){e?this.setAttribute(aH.LOGO,e):this.removeAttribute(aH.LOGO)}load(){i1(this,this.nativeEl,aM(this,aS,aR))}unload(){i2(this.nativeEl,aM(this,aS,aR),this)}attributeChangedCallback(e,t,i){var a,r;switch(ab.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case aH.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case aH.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?aN(this,aS,aC).call(this):e&&!a?this.unload():e&&a&&(this.unload(),aN(this,aS,aC).call(this));break}case"autoplay":if(i===t)break;null==(a=aM(this,aS,aR))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=aM(this,aS,aR))||r.setPreload(i);break;case aH.PLAYBACK_ID:this.src=iq(this);break;case aH.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case aH.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case aH.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case aH.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case aH.LOGO:(null==i||i!==t)&&this.updateLogo();break;case aH.DISABLE_TRACKING:if(null==i||i!==t){let e=this.currentTime,t=this.paused;this.unload(),aN(this,aS,aC).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case aH.DISABLE_COOKIES:(null==i||i!==t)&&this.disableCookies&&document.cookie.split(";").forEach(e=>{e.trim().startsWith("muxData")&&(document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/"))});break;case aH.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(aM(this,aw)||this.logo))}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!aM(this,aS,aR)&&aN(this,aS,aC).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};aE=new WeakMap,ag=new WeakMap,af=new WeakMap,a_=new WeakMap,ay=new WeakMap,aT=new WeakMap,aA=new WeakMap,ak=new WeakMap,aw=new WeakMap,aS=new WeakSet,aR=function(){var e,t;return e=this.nativeEl,null==(t=iW.get(e))?void 0:t.coreReference},aI=new WeakMap,aC=async function(){aM(this,aE)||(await ax(this,aE,Promise.resolve()),ax(this,aE,null),this.load())};let aF=new WeakMap;class a$ extends Error{}class aK extends Error{}let aq=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function aY(){return globalThis.cast?.framework?.CastContext.getInstance()}function aG(){return aY()?.getCurrentSession()}function aj(){return aG()?.getSessionObj().media[0]}function aQ(e){return aY().setOptions({...az(),...e})}function az(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function aZ(e){try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return aq.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function aX(e){try{let i=await (await fetch(e)).text(),a=i,r=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(i);if(r.length>0){let t=new URL(r[0],e).toString();a=await (await fetch(t)).text()}var t=a.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());if(!t)return;let n=t.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return n?n[1]:null}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}let aJ=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),a0=new WeakSet;!function(e){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}(()=>{if(!globalThis.chrome?.cast?.isAvailable)return void console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);a||(a=cast.framework,aY().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{aJ.forEach(t=>aF.get(t).onCastStateChanged?.(e))}),aY().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{aJ.forEach(t=>aF.get(t).onSessionStateChanged?.(e))}),aJ.forEach(e=>aF.get(e).init?.()))});let a1=0;class a2 extends EventTarget{#p;#a;#v;#b;#E="disconnected";#g=!1;#f=new Set;#_=new WeakMap;#y=()=>this.#T();constructor(e){super(),this.#p=e,aJ.add(this),aF.set(this,{init:()=>this.#i(),onCastStateChanged:()=>this.#A(),onSessionStateChanged:()=>this.#k(),getCastPlayer:()=>this.#w}),this.#i()}destroy(){this.#p?.textTracks?.removeEventListener("change",this.#y),this.#b&&this.#v?.controller&&Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),this.#p&&a0.delete(this.#p),this.#a=!1}get #w(){if(a0.has(this.#p))return this.#v}get state(){return this.#E}async watchAvailability(e){if(this.#p.disableRemotePlayback)throw new a$("disableRemotePlayback attribute is present.");return this.#_.set(e,++a1),this.#f.add(e),queueMicrotask(()=>e(this.#S())),a1}async cancelWatchAvailability(e){if(this.#p.disableRemotePlayback)throw new a$("disableRemotePlayback attribute is present.");e?this.#f.delete(e):this.#f.clear()}async prompt(){if(this.#p.disableRemotePlayback)throw new a$("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new aK("The RemotePlayback API is disabled on this platform.");let e=a0.has(this.#p);a0.add(this.#p),aQ(this.#p.castOptions),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{await aY().requestSession()}catch(t){if(e||a0.delete(this.#p),"cancel"===t)return;throw Error(t)}aF.get(this.#p)?.loadOnPrompt?.()}#R(){a0.has(this.#p)&&(Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.removeEventListener(e,t)}),a0.delete(this.#p),this.#p.muted=this.#v.isMuted,this.#p.currentTime=this.#v.savedPlayerState.currentTime,!1===this.#v.savedPlayerState.isPaused&&this.#p.play())}#S(){let e=aY()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#A(){let e=aY().getCastState();if(a0.has(this.#p)&&"CONNECTING"===e&&(this.#E="connecting",this.dispatchEvent(new Event("connecting"))),!this.#g&&e?.includes("CONNECT"))for(let e of(this.#g=!0,this.#f))e(!0);else if(this.#g&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#g=!1,this.#f))e(!1)}async #k(){let{SESSION_RESUMED:e}=a.SessionState;if(aY().getSessionState()===e&&this.#p.castSrc===aj()?.media.contentId){a0.add(this.#p),Object.entries(this.#b).forEach(([e,t])=>{this.#v.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{aj().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#b[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#b[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#i(){a&&!this.#a&&(this.#a=!0,aQ(this.#p.castOptions),this.#p.textTracks.addEventListener("change",this.#y),this.#A(),this.#v=new a.RemotePlayer,new a.RemotePlayerController(this.#v),this.#b={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#E="connected",this.dispatchEvent(new Event("connect"))):(this.#R(),this.#E="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#p.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#p.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#w?.isMediaLoaded&&this.#p.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#p.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#p.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#w?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#p.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#w?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#w?.isMediaLoaded&&(await Promise.resolve(),this.#I())}})}#I(){this.#T()}async #T(){let e;if(!this.#w)return;let t=(this.#v.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#p.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=aG()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{aj().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let a3=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#C={paused:!1};#L=az();#D;#M;get remote(){if(this.#M)return this.#M;if(globalThis.chrome){if(!this.isConnected)return;return this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),aF.set(this,{loadOnPrompt:()=>this.#O()}),this.#M=new a2(this)}return super.remote}get #w(){return aF.get(this.remote)?.getCastPlayer?.()}disconnectedCallback(){this.#M?.destroy(),this.#M=null,aF.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#L.receiverApplicationId=i;return}if(this.#w)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #O(){this.#C.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#w)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],aZ(this.castSrc)){let t=await aX(this.castSrc);t?.includes("m4s")||t?.includes("mp4")?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes("ts")&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#C.paused,r.activeTrackIds=i,await aG()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#w){this.#w.isPaused&&this.#w.controller?.playOrPause();return}return super.play()}pause(){if(this.#w){this.#w.isPaused||this.#w.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#L}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#D}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t))return void console.error(`castCustomData must be nullish or an object but value was of type ${t}`);this.#D=e}get readyState(){if(this.#w)switch(this.#w.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#w?this.#w.isPaused:super.paused}get muted(){return this.#w?this.#w?.isMuted:super.muted}set muted(e){if(this.#w){(e&&!this.#w.isMuted||!e&&this.#w.isMuted)&&this.#w.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#w?this.#w?.volumeLevel??1:super.volume}set volume(e){if(this.#w){this.#w.volumeLevel=+e,this.#w.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.duration??NaN:super.duration}get currentTime(){return this.#w&&this.#w?.isMediaLoaded?this.#w?.currentTime??0:super.currentTime}set currentTime(e){if(this.#w){this.#w.currentTime=e,this.#w.controller?.seek();return}super.currentTime=e}};class a4 extends Event{track;constructor(e,t){super(e),this.track=t.track}}let a5=new WeakMap;function a9(e){var t,i;let a;return a5.get(e)??(t=e,i={},(a=a5.get(t))||a5.set(t,a={}),Object.assign(a,i))}function a8(e,t){let i=e.videoTracks;a9(t).media=new WeakRef(e),a9(t).renditionSet||(a9(t).renditionSet=new Set);let a=a9(i).trackSet;a.add(t);let r=a.size-1;r in a7.prototype||Object.defineProperty(a7.prototype,r,{get(){return[...a9(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new a4("addtrack",{track:t}))})}function a6(e){let t=a9(e).media?.deref()?.videoTracks;t&&(a9(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new a4("removetrack",{track:e}))}))}class a7 extends EventTarget{#x;#N;#P;constructor(){super(),a9(this).trackSet=new Set}get #U(){return a9(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#U].findIndex(e=>e.selected)}get onaddtrack(){return this.#x}set onaddtrack(e){this.#x&&(this.removeEventListener("addtrack",this.#x),this.#x=void 0),"function"==typeof e&&(this.#x=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class re extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function rt(e){let t=a9(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...a9(e).renditionSet]):[]}class ri extends EventTarget{#H;#B;#P;[Symbol.iterator](){return rt(this).values()}get length(){return rt(this).length}getRenditionById(e){return rt(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return rt(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of rt(this).entries())i.selected=t===e}get onaddrendition(){return this.#H}set onaddrendition(e){this.#H&&(this.removeEventListener("addrendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class ra{src;id;width;height;bitrate;frameRate;codec;#W=!1;get selected(){return this.#W}set selected(e){if(this.#W!==e){this.#W=e;var t=this;let i=a9(t).media?.deref()?.videoRenditions;i&&!a9(i).changeRequested&&(a9(i).changeRequested=!0,queueMicrotask(()=>{delete a9(i).changeRequested,a9(t).track.selected&&i.dispatchEvent(new Event("change"))}))}}}class rr{id;kind;label="";language="";sourceBuffer;#W=!1;addRendition(e,t,i,a,r,n){let s=new ra;return s.src=e,s.width=t,s.height=i,s.frameRate=n,s.bitrate=r,s.codec=a,!function(e,t){let i=a9(e).media?.deref()?.videoRenditions;a9(t).media=a9(e).media,a9(t).track=e;let a=a9(e).renditionSet;a.add(t);let r=a.size-1;r in ri.prototype||Object.defineProperty(ri.prototype,r,{get(){return rt(this)[r]}}),queueMicrotask(()=>{i&&e.selected&&i.dispatchEvent(new re("addrendition",{rendition:t}))})}(this,s),s}removeRendition(e){let t=a9(e).media?.deref()?.videoRenditions,i=a9(e).track;a9(i).renditionSet.delete(e),queueMicrotask(()=>{let i=a9(e).track;t&&i.selected&&t.dispatchEvent(new re("removerendition",{rendition:e}))})}get selected(){return this.#W}set selected(e){this.#W!==e&&(this.#W=e,!0===e&&function(e){let t=a9(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(a9(t).changeRequested)return;a9(t).changeRequested=!0,queueMicrotask(()=>{delete a9(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function rn(e){let t=a9(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...a9(e).renditionSet]):[]}class rs extends EventTarget{#H;#B;#P;[Symbol.iterator](){return rn(this).values()}get length(){return rn(this).length}getRenditionById(e){return rn(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return rn(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of rn(this).entries())i.selected=t===e}get onaddrendition(){return this.#H}set onaddrendition(e){this.#H&&(this.removeEventListener("addrendition",this.#H),this.#H=void 0),"function"==typeof e&&(this.#H=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#B}set onremoverendition(e){this.#B&&(this.removeEventListener("removerendition",this.#B),this.#B=void 0),"function"==typeof e&&(this.#B=e,this.addEventListener("removerendition",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class ro{src;id;bitrate;codec;#W=!1;get selected(){return this.#W}set selected(e){if(this.#W!==e){this.#W=e;var t=this;let i=a9(t).media?.deref()?.audioRenditions;i&&!a9(i).changeRequested&&(a9(i).changeRequested=!0,queueMicrotask(()=>{delete a9(i).changeRequested,a9(t).track.enabled&&i.dispatchEvent(new Event("change"))}))}}}function rl(e,t){let i=e.audioTracks;a9(t).media=new WeakRef(e),a9(t).renditionSet||(a9(t).renditionSet=new Set);let a=a9(i).trackSet;a.add(t);let r=a.size-1;r in ru.prototype||Object.defineProperty(ru.prototype,r,{get(){return[...a9(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new a4("addtrack",{track:t}))})}function rd(e){let t=a9(e).media?.deref()?.audioTracks;t&&(a9(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new a4("removetrack",{track:e}))}))}class ru extends EventTarget{#x;#N;#P;constructor(){super(),a9(this).trackSet=new Set}get #U(){return a9(this).trackSet}[Symbol.iterator](){return this.#U.values()}get length(){return this.#U.size}getTrackById(e){return[...this.#U].find(t=>t.id===e)??null}get onaddtrack(){return this.#x}set onaddtrack(e){this.#x&&(this.removeEventListener("addtrack",this.#x),this.#x=void 0),"function"==typeof e&&(this.#x=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#N}set onremovetrack(e){this.#N&&(this.removeEventListener("removetrack",this.#N),this.#N=void 0),"function"==typeof e&&(this.#N=e,this.addEventListener("removetrack",e))}get onchange(){return this.#P}set onchange(e){this.#P&&(this.removeEventListener("change",this.#P),this.#P=void 0),"function"==typeof e&&(this.#P=e,this.addEventListener("change",e))}}class rc{id;kind;label="";language="";sourceBuffer;#V=!1;addRendition(e,t,i){let a=new ro;return a.src=e,a.codec=t,a.bitrate=i,!function(e,t){let i=a9(e).media?.deref()?.audioRenditions;a9(t).media=a9(e).media,a9(t).track=e;let a=a9(e).renditionSet;a.add(t);let r=a.size-1;r in rs.prototype||Object.defineProperty(rs.prototype,r,{get(){return rn(this)[r]}}),queueMicrotask(()=>{i&&e.enabled&&i.dispatchEvent(new re("addrendition",{rendition:t}))})}(this,a),a}removeRendition(e){let t=a9(e).media?.deref()?.audioRenditions,i=a9(e).track;a9(i).renditionSet.delete(e),queueMicrotask(()=>{let i=a9(e).track;t&&i.enabled&&t.dispatchEvent(new re("removerendition",{rendition:e}))})}get enabled(){return this.#V}set enabled(e){if(this.#V!==e){this.#V=e;let t=a9(this).media?.deref()?.audioTracks;t&&!a9(t).changeRequested&&(a9(t).changeRequested=!0,queueMicrotask(()=>{delete a9(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}let rh=rv(globalThis.HTMLMediaElement,"video"),rm=rv(globalThis.HTMLMediaElement,"audio");function rp(e){if(!e?.prototype)return e;let t=rv(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=a9(e).videoTracks;if(!t&&(t=new a7,a9(e).videoTracks=t,rh)){let i=rh.call(e.nativeEl??e);for(let t of i)a8(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof rr)){for(let e of i)a6(e);return}a8(e,a.track)}),i.addEventListener("removetrack",e=>{a6(e.track)})}return t}});let i=rv(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=a9(e).audioTracks;if(!t&&(t=new ru,a9(e).audioTracks=t,rm)){let i=rm.call(e.nativeEl??e);for(let t of i)rl(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof rc)){for(let e of i)rd(e);return}rl(e,a.track)}),i.addEventListener("removetrack",e=>{rd(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new rr;return a.kind=e,a.label=t,a.language=i,a8(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=a6),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new rc;return a.kind=e,a.label=t,a.language=i,rl(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=rd),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=a9(e).videoRenditions;return t||(a9(t=new ri).media=new WeakRef(e),a9(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=a9(e).audioRenditions;return t||(a9(t=new rs).media=new WeakRef(e),a9(e).audioRenditions=t),t};return e}function rv(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var rb=e=>{throw TypeError(e)},rE=(e,t,i)=>t.has(e)||rb("Cannot "+i),rg=(e,t,i)=>(rE(e,t,"read from private field"),i?i.call(e):t.get(e)),rf=(e,t,i)=>t.has(e)?rb("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),r_=(e,t,i,a)=>(rE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ry=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends ry{}globalThis.DocumentFragment=e}var rT,rA=class extends ry{},rk=class{constructor(e,t={}){rf(this,rT),r_(this,rT,null==t?void 0:t.detail)}get detail(){return rg(this,rT)}initCustomEvent(){}};rT=new WeakMap;var rw={document:{createElement:function(e,t){return new rA}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(rA)},CustomEvent:rk,EventTarget:ry,HTMLElement:rA,HTMLVideoElement:class extends ry{}},rS="undefined"==typeof window||void 0===globalThis.customElements,rR=rS?rw:globalThis;rS?rw.document:globalThis.document;var rI,rC=class extends a3(rp(aV)){constructor(){super(...arguments),rf(this,rI)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=rg(this,rI))?e:this.muxCastCustomData}set castCustomData(e){r_(this,rI,e)}};rI=new WeakMap,rR.customElements.get("mux-video")||(rR.customElements.define("mux-video",rC),rR.MuxVideoElement=rC);let rL={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},rD={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},rM={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},rO=Object.entries(rM),rx=rO.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),rN=rO.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(rN).reduce((e,[t,i])=>{let a=rx[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let rP=Object.entries(rx).reduce((e,[t,i])=>{let a=rN[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),rU={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},rH={DISABLED:"disabled",SHOWING:"showing"},rB={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},rW={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},rV={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},rF={FULLSCREEN:"fullscreen"};function r$(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function rK(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function rq(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function rY(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function rG(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function rj(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let rQ=e=>new Promise(t=>setTimeout(t,e)),rz=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],rZ=e=>{if(!rG(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&((e,t)=>{let i=1===e?rz[t].singular:rz[t].plural;return`${e} ${i}`})(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function rX(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let rJ={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},r0=(null==(uv=globalThis.navigator)?void 0:uv.language)||"en",r1=(e,t={})=>(e=>{var t,i,a;let[r]=r0.split("-");return(null==(t=rJ[r0])?void 0:t[e])||(null==(i=rJ[r])?void 0:i[e])||(null==(a=rJ.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class r2{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class r3 extends r2{}class r4 extends r3{constructor(){super(...arguments),this.role=null}}class r5{observe(){}unobserve(){}disconnect(){}}let r9={createElement:function(){return new r8.HTMLElement},createElementNS:function(){return new r8.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},r8={ResizeObserver:r5,document:r9,Node:r3,Element:r4,HTMLElement:class extends r4{constructor(){super(...arguments),this.innerHTML=""}get content(){return new r8.DocumentFragment}},DocumentFragment:class extends r2{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},r6="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"undefined"==typeof window||void 0===window.customElements,r7=Object.keys(r8).every(e=>e in globalThis),ne=r6&&!r7?r8:globalThis,nt=r6&&!r7?r9:globalThis.document,ni=new WeakMap,na=e=>{let t=ni.get(e);return t||ni.set(e,t=new Set),t},nr=new ne.ResizeObserver(e=>{for(let t of e)for(let e of na(t.target))e(t)});function nn(e,t){na(e).add(t),nr.observe(e)}function ns(e,t){let i=na(e);i.delete(t),i.size||nr.unobserve(e)}function no(e){let t={};for(let i of e)t[i.name]=i.value;return t}function nl(e){var t;return null!=(t=nd(e))?t:nm(e,"media-controller")}function nd(e){var t;let{MEDIA_CONTROLLER:i}=rD,a=e.getAttribute(i);if(a)return null==(t=nv(e))?void 0:t.getElementById(a)}let nu=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},nc=(e,t)=>((e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]})(e,t)[0],nh=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||nh(e,t.getRootNode().host)),nm=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||nm(e.getRootNode().host,t)};function np(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=np(i.shadowRoot))?t:i:null}function nv(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function nb(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function nE(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||ng(e,t)}function ng(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function nf(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function n_(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}nf(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function ny(e,t){return e.hasAttribute(t)}function nT(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}ny(e,t)!=i&&e.toggleAttribute(t,i)}function nA(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function nk(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;nA(e,t,void 0)!==a&&e.setAttribute(t,a)}var nw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nS=(e,t,i)=>(nw(e,t,"read from private field"),i?i.call(e):t.get(e)),nR=(e,t,i,a)=>(nw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nI extends ne.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ub,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rD.MEDIA_CONTROLLER,rx.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rD.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nS(this,ub))?void 0:a.unassociateElement)||r.call(a,this),nR(this,ub,null)),i&&this.isConnected&&(nR(this,ub,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nS(this,ub))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),nR(this,ub,function(e){var t;let i=e.getAttribute(rD.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):nm(e,"media-controller")}(this)),this.getAttribute(rD.MEDIA_CONTROLLER)&&(null==(t=null==(e=nS(this,ub))?void 0:e.associateElement)||t.call(e,this)),null==(i=nS(this,ub))||i.addEventListener("pointerdown",this),null==(a=nS(this,ub))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(rD.MEDIA_CONTROLLER)&&(null==(t=null==(e=nS(this,ub))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=nS(this,ub))||i.removeEventListener("pointerdown",this),null==(a=nS(this,ub))||a.removeEventListener("click",this),nR(this,ub,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===rB.TOUCH)return void this.handleTap(e);if(d===rB.MOUSE||d===rB.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return ny(this,rx.MEDIA_PAUSED)}set mediaPaused(e){nT(this,rx.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?rL.MEDIA_PLAY_REQUEST:rL.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new ne.CustomEvent(t,{composed:!0,bubbles:!0}))}}ub=new WeakMap,nI.shadowRootOptions={mode:"open"},nI.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},ne.customElements.get("media-gesture-receiver")||ne.customElements.define("media-gesture-receiver",nI);var nC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nL=(e,t,i)=>(nC(e,t,"read from private field"),i?i.call(e):t.get(e)),nD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nM=(e,t,i,a)=>(nC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nO=(e,t,i)=>(nC(e,t,"access private method"),i);let nx={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},nN=Object.values(rx);function nP(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(nx.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(rN.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(rN.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class nU extends ne.HTMLElement{constructor(){if(super(),nD(this,uT),nD(this,uS),nD(this,uI),nD(this,uL),nD(this,uM),nD(this,ux),nD(this,uE,0),nD(this,ug,null),nD(this,uf,null),nD(this,u_,void 0),this.breakpointsComputed=!1,nD(this,uy,new MutationObserver(nO(this,uT,uA).bind(this))),nD(this,uk,!1),nD(this,uw,e=>{nL(this,uk)||(setTimeout(()=>{!function(e){nP(e.target,e.contentRect.width)}(e),nM(this,uk,!1)},0),nM(this,uk,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}let e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){nL(this,ug)&&this.mediaUnsetCallback(nL(this,ug));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[nx.AUTOHIDE,nx.GESTURES_DISABLED].concat(nN).filter(e=>![rx.MEDIA_RENDITION_LIST,rx.MEDIA_AUDIO_TRACK_LIST,rx.MEDIA_CHAPTERS_CUES,rx.MEDIA_WIDTH,rx.MEDIA_HEIGHT,rx.MEDIA_ERROR,rx.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==nx.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(nM(this,ug,e),e.localName.includes("-")&&await ne.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;nL(this,uy).observe(this,{childList:!0,subtree:!0}),nn(this,nL(this,uw));let t=null!=this.getAttribute(nx.AUDIO)?r1("audio player"):r1("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(nx.USER_INACTIVE,""),nP(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=ne.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;nL(this,uy).disconnect(),ns(this,nL(this,uw)),this.media&&this.mediaUnsetCallback(this.media),null==(e=ne.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){nM(this,ug,null)}handleEvent(e){switch(e.type){case"pointerdown":nM(this,uE,e.timeStamp);break;case"pointermove":nO(this,uS,uR).call(this,e);break;case"pointerup":nO(this,uI,uC).call(this,e);break;case"mouseleave":nO(this,uL,uD).call(this);break;case"mouseup":this.removeAttribute(nx.KEYBOARD_CONTROL);break;case"keyup":nO(this,ux,uN).call(this),this.setAttribute(nx.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);nM(this,u_,isNaN(t)?0:t)}get autohide(){return(void 0===nL(this,u_)?2:nL(this,u_)).toString()}get breakpoints(){return nA(this,nx.BREAKPOINTS)}set breakpoints(e){nk(this,nx.BREAKPOINTS,e)}get audio(){return ny(this,nx.AUDIO)}set audio(e){nT(this,nx.AUDIO,e)}get gesturesDisabled(){return ny(this,nx.GESTURES_DISABLED)}set gesturesDisabled(e){nT(this,nx.GESTURES_DISABLED,e)}get keyboardControl(){return ny(this,nx.KEYBOARD_CONTROL)}set keyboardControl(e){nT(this,nx.KEYBOARD_CONTROL,e)}get noAutohide(){return ny(this,nx.NO_AUTOHIDE)}set noAutohide(e){nT(this,nx.NO_AUTOHIDE,e)}get autohideOverControls(){return ny(this,nx.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){nT(this,nx.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return ny(this,nx.USER_INACTIVE)}set userInteractive(e){nT(this,nx.USER_INACTIVE,e)}}uE=new WeakMap,ug=new WeakMap,uf=new WeakMap,u_=new WeakMap,uy=new WeakMap,uT=new WeakSet,uA=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},uk=new WeakMap,uw=new WeakMap,uS=new WeakSet,uR=function(e){if("mouse"!==e.pointerType&&e.timeStamp-nL(this,uE)<250)return;nO(this,uM,uO).call(this),clearTimeout(nL(this,uf));let t=this.hasAttribute(nx.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&nO(this,ux,uN).call(this)},uI=new WeakSet,uC=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(nx.USER_INACTIVE);[this,this.media].includes(e.target)&&t?nO(this,uL,uD).call(this):nO(this,ux,uN).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&nO(this,ux,uN).call(this)},uL=new WeakSet,uD=function(){if(0>nL(this,u_)||this.hasAttribute(nx.USER_INACTIVE))return;this.setAttribute(nx.USER_INACTIVE,"");let e=new ne.CustomEvent(rN.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},uM=new WeakSet,uO=function(){if(!this.hasAttribute(nx.USER_INACTIVE))return;this.removeAttribute(nx.USER_INACTIVE);let e=new ne.CustomEvent(rN.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},ux=new WeakSet,uN=function(){nO(this,uM,uO).call(this),clearTimeout(nL(this,uf));let e=parseInt(this.autohide);e<0||nM(this,uf,setTimeout(()=>{nO(this,uL,uD).call(this)},1e3*e))},nU.shadowRootOptions={mode:"open"},nU.getTemplateHTML=function(e){return`
    <style>
      
      :host([${rx.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${nx.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${nx.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${nx.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${nx.AUDIO}])[${nx.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${nx.AUDIO}])[${nx.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${nx.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${nx.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${nx.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${nx.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${nx.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${nx.USER_INACTIVE}]:not([${rx.MEDIA_PAUSED}]):not([${rx.MEDIA_IS_AIRPLAYING}]):not([${rx.MEDIA_IS_CASTING}]):not([${nx.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${nx.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${nx.USER_INACTIVE}]:not([${nx.NO_AUTOHIDE}]):not([${rx.MEDIA_PAUSED}]):not([${rx.MEDIA_IS_CASTING}]):not([${nx.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${nx.USER_INACTIVE}][${nx.AUTOHIDE_OVER_CONTROLS}]:not([${nx.NO_AUTOHIDE}]):not([${rx.MEDIA_PAUSED}]):not([${rx.MEDIA_IS_CASTING}]):not([${nx.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${nx.AUDIO}])[${rx.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${nI.shadowRootOptions.mode}">
          ${nI.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},ne.customElements.get("media-container")||ne.customElements.define("media-container",nU);var nH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nB=(e,t,i)=>(nH(e,t,"read from private field"),i?i.call(e):t.get(e)),nW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nV=(e,t,i,a)=>(nH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nF{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){nW(this,uW),nW(this,uP,void 0),nW(this,uU,void 0),nW(this,uH,void 0),nW(this,uB,new Set),nV(this,uP,e),nV(this,uU,t),nV(this,uH,new Set(i))}[Symbol.iterator](){return nB(this,uW,uV).values()}get length(){return nB(this,uW,uV).size}get value(){var e;return null!=(e=[...nB(this,uW,uV)].join(" "))?e:""}set value(e){var t;e!==this.value&&(nV(this,uB,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...nB(this,uW,uV)][e]}values(){return nB(this,uW,uV).values()}forEach(e,t){nB(this,uW,uV).forEach(e,t)}add(...e){var t,i;e.forEach(e=>nB(this,uB).add(e)),(""!==this.value||(null==(t=nB(this,uP))?void 0:t.hasAttribute(`${nB(this,uU)}`)))&&(null==(i=nB(this,uP))||i.setAttribute(`${nB(this,uU)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>nB(this,uB).delete(e)),null==(t=nB(this,uP))||t.setAttribute(`${nB(this,uU)}`,`${this.value}`)}contains(e){return nB(this,uW,uV).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}uP=new WeakMap,uU=new WeakMap,uH=new WeakMap,uB=new WeakMap,uW=new WeakSet,uV=function(){return nB(this,uB).size?nB(this,uB):nB(this,uH)};let n$=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?rU.CAPTIONS:rU.SUBTITLES,language:i,label:r}},nK=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=n$(e);return{...t,...i}}),nq=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?n$(e):e):"string"==typeof e?nK(e):[e]:[],nY=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,nG=(e=[])=>Array.prototype.map.call(e,nY).join(" "),nj=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},nQ=(e,t=[],i=[])=>{let a=nq(i).map(nj);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},nz=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:nj(t);return Array.from(e.textTracks).filter(i)},nZ=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(rx.MEDIA_SUBTITLES_SHOWING)},nX="exitFullscreen"in nt?"exitFullscreen":"webkitExitFullscreen"in nt?"webkitExitFullscreen":"webkitCancelFullScreen"in nt?"webkitCancelFullScreen":void 0,nJ="fullscreenElement"in nt?"fullscreenElement":"webkitFullscreenElement"in nt?"webkitFullscreenElement":void 0,n0="fullscreenEnabled"in nt?"fullscreenEnabled":"webkitFullscreenEnabled"in nt?"webkitFullscreenEnabled":void 0,n1=()=>{var e;return r||(r=null==(e=null==nt?void 0:nt.createElement)?void 0:e.call(nt,"video"))},n2=async(e=n1())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([n3(e,i.signal),n4(e,t)]);return i.abort(),a},n3=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),n4=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await rQ(10)}return e.volume!==t},n5=/.*Version\/.*Safari\/.*/.test(ne.navigator.userAgent),n9=(e=n1())=>(!ne.matchMedia("(display-mode: standalone)").matches||!n5)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),n8=(e=n1())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[n0])||i&&"webkitSupportsFullscreen"in i})({documentElement:nt,media:e}),n6=n8(),n7=n9(),se=!!ne.WebKitPlaybackTargetAvailabilityEvent,st=!!ne.chrome,si=e=>nz(e.media,e=>[rU.SUBTITLES,rU.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),sa=e=>nz(e.media,e=>e.mode===rH.SHOWING&&[rU.SUBTITLES,rU.CAPTIONS].includes(e.kind)),sr=(e,t)=>{let i=si(e),a=sa(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)nQ(rH.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;nQ(rH.DISABLED,i,a),nQ(rH.SHOWING,i,[{language:n,label:s,kind:o}])}}},sn=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?ss(e,t):Object.entries(e).every(([e,i])=>e in t&&sn(i,t[e])))),ss=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>sn(e,t[i])))},so=Object.values(rV),sl=n2().then(e=>n=e),sd=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof ne.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=ne.customElements.get(t);i&&e instanceof i||(await ne.customElements.whenDefined(t),ne.customElements.upgrade(e))}))},su=new ne.DOMParser,sc={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==ne.localStorage.getItem("media-chrome-pref-muted"),r=i.hasAttribute("muted");if(a){t&&ne.localStorage.removeItem("media-chrome-pref-muted");return}if(r&&!t)return;ne.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===ne.localStorage.getItem("media-chrome-pref-muted");sc.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?ne.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||ne.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=ne.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;sc.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&rG(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[rV.LIVE,rV.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(so.includes(r))return r===rV.UNKNOWN?a:r;let n=t.duration;return n===1/0?rV.LIVE:Number.isFinite(n)?rV.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=sc.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===rV.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(sc.mediaStreamType.get(e)!==rV.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>si(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>sa(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![rU.CAPTIONS,rU.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||sr(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=nz(i,{kind:rU.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&su.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&nh(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!nt.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else nt.pictureInPictureElement&&nt.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[nJ];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===rF.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(nJ in e))return nh(n,r);for(;null==e?void 0:e[nJ];){if(e[nJ]===r)return!0;e=null==(t=e[nJ])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),i.detail&&(null==(a=t.media)||a.focus())):(e=>{var t;let{documentElement:i}=e;if(nX){let e=null==(t=null==i?void 0:i[nX])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&ne.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!n6||!n8(t))return rW.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return n7&&n9(t)?(null==t?void 0:t.disablePictureInPicture)?rW.UNAVAILABLE:void 0:rW.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===n||(null==t?void 0:t.volume)==void 0)return rW.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==n&&sl.then(t=>e(t?void 0:rW.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return st&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?rW.UNAVAILABLE:void 0:rW.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>se?(null==t?void 0:t.availability)==="not-available"?rW.UNAVAILABLE:void 0:rW.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:rW.UNAVAILABLE:rW.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?rW.UNAVAILABLE:void 0:rW.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},sh={[rL.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=nz(l,{kind:rU.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[rL.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[rL.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===rV.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[rL.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[rL.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[rL.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[rL.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[rL.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[rL.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[rL.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[rL.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=si(t),s=nq(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&ne.localStorage.setItem("media-chrome-pref-subtitles-lang",o),nQ(rH.SHOWING,n,s)},[rL.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=si(t);nQ(rH.DISABLED,a,null!=i?i:[])},[rL.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){sr(t,i)},[rL.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[rL.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[rL.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[rL.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[rL.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[rL.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[rL.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[rL.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[rL.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var sm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sp=(e,t,i)=>(sm(e,t,"read from private field"),i?i.call(e):t.get(e)),sv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sb=(e,t,i,a)=>(sm(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sE=(e,t,i)=>(sm(e,t,"access private method"),i);let sg=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],sf={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};class s_ extends nU{constructor(){super(),sv(this,uz),sv(this,uX),sv(this,u0),sv(this,u2),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,sv(this,uF,new nF(this,sf.HOTKEYS)),sv(this,u$,void 0),sv(this,uK,void 0),sv(this,uq,null),sv(this,uY,void 0),sv(this,uG,void 0),sv(this,uj,e=>{var t;null==(t=sp(this,uK))||t.dispatch(e)}),sv(this,uQ,void 0),this.associateElement(this);let e={};sb(this,uY,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new ne.CustomEvent(rP[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.hasAttribute(sf.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(sf.NO_HOTKEYS,sf.HOTKEYS,sf.DEFAULT_STREAM_TYPE,sf.DEFAULT_SUBTITLES,sf.DEFAULT_DURATION,sf.NO_MUTED_PREF,sf.NO_VOLUME_PREF,sf.LANG,sf.LOOP)}get mediaStore(){return sp(this,uK)}set mediaStore(e){var t,i;if(sp(this,uK)&&(null==(t=sp(this,uG))||t.call(this),sb(this,uG,void 0)),sb(this,uK,e),!sp(this,uK)&&!this.hasAttribute(sf.NO_DEFAULT_STORE))return void sE(this,uz,uZ).call(this);sb(this,uG,null==(i=sp(this,uK))?void 0:i.subscribe(sp(this,uY)))}get fullscreenElement(){var e;return null!=(e=sp(this,u$))?e:this}set fullscreenElement(e){var t;this.hasAttribute(sf.FULLSCREEN_ELEMENT)&&this.removeAttribute(sf.FULLSCREEN_ELEMENT),sb(this,u$,e),null==(t=sp(this,uK))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return ny(this,sf.DEFAULT_SUBTITLES)}set defaultSubtitles(e){nT(this,sf.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return nA(this,sf.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){nk(this,sf.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return nf(this,sf.DEFAULT_DURATION)}set defaultDuration(e){n_(this,sf.DEFAULT_DURATION,e)}get noHotkeys(){return ny(this,sf.NO_HOTKEYS)}set noHotkeys(e){nT(this,sf.NO_HOTKEYS,e)}get keysUsed(){return nA(this,sf.KEYS_USED)}set keysUsed(e){nk(this,sf.KEYS_USED,e)}get liveEdgeOffset(){return nf(this,sf.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){n_(this,sf.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return ny(this,sf.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){nT(this,sf.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return ny(this,sf.NO_VOLUME_PREF)}set noVolumePref(e){nT(this,sf.NO_VOLUME_PREF,e)}get noMutedPref(){return ny(this,sf.NO_MUTED_PREF)}set noMutedPref(e){nT(this,sf.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return ny(this,sf.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){nT(this,sf.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return ny(this,sf.NO_DEFAULT_STORE)}set noDefaultStore(e){nT(this,sf.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u,c,h,m,v;if(super.attributeChangedCallback(e,t,i),e===sf.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(sf.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===sf.HOTKEYS)sp(this,uF).value=i;else if(e===sf.DEFAULT_SUBTITLES&&i!==t)null==(a=sp(this,uK))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(sf.DEFAULT_SUBTITLES)}});else if(e===sf.DEFAULT_STREAM_TYPE)null==(n=sp(this,uK))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(sf.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===sf.LIVE_EDGE_OFFSET)null==(s=sp(this,uK))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(sf.LIVE_EDGE_OFFSET)?+this.getAttribute(sf.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sf.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(sf.LIVE_EDGE_OFFSET)}});else if(e===sf.SEEK_TO_LIVE_OFFSET)null==(o=sp(this,uK))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(sf.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sf.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===sf.NO_AUTO_SEEK_TO_LIVE)null==(l=sp(this,uK))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(sf.NO_AUTO_SEEK_TO_LIVE)}});else if(e===sf.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;sb(this,u$,e),null==(u=sp(this,uK))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===sf.LANG&&i!==t?(r0=i,null==(c=sp(this,uK))||c.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===sf.LOOP&&i!==t?null==(h=sp(this,uK))||h.dispatch({type:rL.MEDIA_LOOP_REQUEST,detail:null!=i}):e===sf.NO_VOLUME_PREF&&i!==t?null==(m=sp(this,uK))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(sf.NO_VOLUME_PREF)}}):e===sf.NO_MUTED_PREF&&i!==t&&(null==(v=sp(this,uK))||v.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(sf.NO_MUTED_PREF)}}))}connectedCallback(){var e,t;sp(this,uK)||this.hasAttribute(sf.NO_DEFAULT_STORE)||sE(this,uz,uZ).call(this),null==(e=sp(this,uK))||e.dispatch({type:"documentelementchangerequest",detail:nt}),super.connectedCallback(),sp(this,uK)&&!sp(this,uG)&&sb(this,uG,null==(t=sp(this,uK))?void 0:t.subscribe(sp(this,uY))),void 0!==sp(this,uQ)&&sp(this,uK)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=sp(this,uK))||i.dispatch({type:rL.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:sp(this,uQ)}))},0),this.hasAttribute(sf.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r;if(null==(e=super.disconnectedCallback)||e.call(this),sp(this,uK)){let e=sp(this,uK).getState();sb(this,uQ,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=sp(this,uK))||i.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(a=sp(this,uK))||a.dispatch({type:rL.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}sp(this,uG)&&(null==(r=sp(this,uG))||r.call(this),sb(this,uG,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=sp(this,uK))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=sp(this,uK))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){sC(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=sL(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(rL).forEach(t=>{e.addEventListener(t,sp(this,uj))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(rL).forEach(t=>{e.removeEventListener(t,sp(this,uj))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),sp(this,uK)&&Object.entries(sp(this,uK).getState()).forEach(([t,i])=>{sC([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",sE(this,u0,u1))}disableHotkeys(){this.removeEventListener("keydown",sE(this,u0,u1)),this.removeEventListener("keyup",sE(this,uX,uJ))}get hotkeys(){return nA(this,sf.HOTKEYS)}set hotkeys(e){nk(this,sf.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,s,o,l,d;let u,c,h,m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(sf.KEYS_USED))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||sp(this,uF).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&sp(this,uF).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&sp(this,uF).contains("noshift+/")))switch(e.key){case" ":case"k":u=sp(this,uK).getState().mediaPaused?rL.MEDIA_PLAY_REQUEST:rL.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new ne.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"m":u="off"===this.mediaStore.getState().mediaVolumeLevel?rL.MEDIA_UNMUTE_REQUEST:rL.MEDIA_MUTE_REQUEST,this.dispatchEvent(new ne.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"f":u=this.mediaStore.getState().mediaIsFullscreen?rL.MEDIA_EXIT_FULLSCREEN_REQUEST:rL.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new ne.CustomEvent(u,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new ne.CustomEvent(rL.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(sf.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(sf.KEYBOARD_BACKWARD_SEEK_OFFSET):10;c=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),h=new ne.CustomEvent(rL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowRight":case"l":{let e=this.hasAttribute(sf.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(sf.KEYBOARD_FORWARD_SEEK_OFFSET):10;c=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),h=new ne.CustomEvent(rL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowUp":{let e=this.hasAttribute(sf.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(sf.KEYBOARD_UP_VOLUME_STEP):.025;c=Math.min((null!=(s=this.mediaStore.getState().mediaVolume)?s:1)+e,1),h=new ne.CustomEvent(rL.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"ArrowDown":{let e=this.hasAttribute(sf.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(sf.KEYBOARD_DOWN_VOLUME_STEP):.025;c=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),h=new ne.CustomEvent(rL.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break}case"<":c=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),h=new ne.CustomEvent(rL.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case">":c=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),h=new ne.CustomEvent(rL.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:c}),this.dispatchEvent(h);break;case"/":case"?":e.shiftKey&&sE(this,u2,u3).call(this);break;case"p":u=this.mediaStore.getState().mediaIsPip?rL.MEDIA_EXIT_PIP_REQUEST:rL.MEDIA_ENTER_PIP_REQUEST,h=new ne.CustomEvent(u,{composed:!0,bubbles:!0}),this.dispatchEvent(h)}}}uF=new WeakMap,u$=new WeakMap,uK=new WeakMap,uq=new WeakMap,uY=new WeakMap,uG=new WeakMap,uj=new WeakMap,uQ=new WeakMap,uz=new WeakSet,uZ=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=sc,requestMap:r=sh,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0!=e&&(sn(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u))))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},v=async(e,t)=>{var i,r,n,u,v,b,E,g,f,_,y,T,A,k,w,S;let R=!!o;if(o={...d,...null!=o?o:{},...e},R)return;await sd(...Object.values(e));let I=l.length>0&&0===t&&s,C=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),D=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(v=d.media)?void 0:v.audioTracks)!==(null==(b=o.media)?void 0:b.audioTracks),O=(null==(E=d.media)?void 0:E.remote)!==(null==(g=o.media)?void 0:g.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(C||I),P=!!(null==(f=d.media)?void 0:f.textTracks)&&(L||I),U=!!(null==(_=d.media)?void 0:_.videoRenditions)&&(D||I),H=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||I),B=!!(null==(T=d.media)?void 0:T.remote)&&(O||I),W=!!d.documentElement&&(x||I),V=N||P||U||H||B||W,F=0===l.length&&1===t&&s,$=!!o.media&&(C||F),K=!!(null==(A=o.media)?void 0:A.textTracks)&&(L||F),q=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(D||F),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||F),G=!!(null==(S=o.media)?void 0:S.remote)&&(O||F),j=!!o.documentElement&&(x||F),Q=$||K||q||Y||G||j;if(!(V||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let v=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),$&&(o.media.addEventListener(t,v),m[e].mediaEvents=v)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),K&&(null==(a=o.media.textTracks)||a.addEventListener(t,v),m[e].textTracksEvents=v)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),q&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,v),m[e].videoRenditionsEvents=v)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,v),m[e].audioTracksEvents=v)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,v),m[e].remoteEvents=v)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,v),m[e].rootEvents=v)});let b=m[e].stateOwnersUpdateHandlers;if(b&&V&&(Array.isArray(b)?b:[b]).forEach(e=>{"function"==typeof e&&e()}),Q){let t=u.map(e=>e(v,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else V&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return v({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode)return void c(r[t](a,d,e));"mediaelementchangerequest"===t?v({media:i}):"fullscreenelementchangerequest"===t?v({fullscreenElement:i}):"documentelementchangerequest"===t?v({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),h())},getState:()=>u,subscribe:e=>(v({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(v({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(sf.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(sf.DEFAULT_DURATION)?+this.getAttribute(sf.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(sf.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(sf.LIVE_EDGE_OFFSET)?+this.getAttribute(sf.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sf.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sf.SEEK_TO_LIVE_OFFSET):this.hasAttribute(sf.LIVE_EDGE_OFFSET)?+this.getAttribute(sf.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(sf.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(sf.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(sf.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(sf.NO_SUBTITLES_LANG_PREF)}})},uX=new WeakSet,uJ=function(e){let{key:t,shiftKey:i}=e;if(!(i&&("/"===t||"?"===t)||sg.includes(t)))return void this.removeEventListener("keyup",sE(this,uX,uJ));this.keyboardShortcutHandler(e)},u0=new WeakSet,u1=function(e){var t;let{metaKey:i,altKey:a,key:r,shiftKey:n}=e,s=n&&("/"===r||"?"===r);if(s&&(null==(t=sp(this,uq))?void 0:t.open)||i||a||!s&&!sg.includes(r))return void this.removeEventListener("keyup",sE(this,uX,uJ));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)||sp(this,uF).contains(`no${r.toLowerCase()}`)||" "===r&&sp(this,uF).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",sE(this,uX,uJ),{once:!0})},u2=new WeakSet,u3=function(){sp(this,uq)||(sb(this,uq,nt.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(sp(this,uq))),sp(this,uq).open=!0};let sy=Object.values(rx),sT=Object.values(rM),sA=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(ne.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,rD.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>sy.includes(e)):[]},sk=e=>(e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&ne.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof ne.customElements.get(e.nodeName.toLowerCase()))&&ne.customElements.upgrade(e),sT.some(t=>t in e)})(e)||!!sA(e).length,sw=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},sS={[rx.MEDIA_SUBTITLES_LIST]:nG,[rx.MEDIA_SUBTITLES_SHOWING]:nG,[rx.MEDIA_SEEKABLE]:sw,[rx.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(sw).join(" "),[rx.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[rx.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(r$).join(" ")},[rx.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(rq).join(" ")}},sR=async(e,t,i)=>{var a,r;if(e.isConnected||await rQ(0),"boolean"==typeof i||null==i)return nT(e,t,i);if("number"==typeof i)return n_(e,t,i);if("string"==typeof i)return nk(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=sS[t])?void 0:a.call(sS,i))?r:i;return e.setAttribute(t,n)},sI=(e,t)=>{if((e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))})(e))return;let i=(e,t)=>{var i,a;sk(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>sI(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!sk(e))return void ne.customElements.whenDefined(a).then(()=>{i(e,t)});i(e,t)},sC=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=sA(e),r=t.toLowerCase();a.includes(r)&&sR(e,r,i)})},sL=(e,t,i)=>{sI(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(rL.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(rL.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>sI(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>sI(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>sI(e,t)),Array.prototype.forEach.call(r,e=>sI(e,i))):"attributes"===n&&o===rD.MEDIA_CHROME_ATTRIBUTES&&(sk(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{sI(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(rL.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(rL.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};ne.customElements.get("media-controller")||ne.customElements.define("media-controller",s_);let sD={PLACEMENT:"placement",BOUNDS:"bounds"};class sM extends ne.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!nb(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=nm(this,"#"+this.bounds))?e:nl(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;return h<0?void this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[sD.PLACEMENT,sD.BOUNDS]}get placement(){return nA(this,sD.PLACEMENT)}set placement(e){nk(this,sD.PLACEMENT,e)}get bounds(){return nA(this,sD.BOUNDS)}set bounds(e){nk(this,sD.BOUNDS,e)}}sM.shadowRootOptions={mode:"open"},sM.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},ne.customElements.get("media-tooltip")||ne.customElements.define("media-tooltip",sM);var sO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sx=(e,t,i)=>(sO(e,t,"read from private field"),i?i.call(e):t.get(e)),sN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sP=(e,t,i,a)=>(sO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sU={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class sH extends ne.HTMLElement{constructor(){if(super(),sN(this,u7),sN(this,u4,void 0),this.preventClick=!1,this.tooltipEl=null,sN(this,u5,e=>{this.preventClick||this.handleClick(e),setTimeout(sx(this,u9),0)}),sN(this,u9,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),sN(this,u8,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",sx(this,u8));this.preventClick||this.handleClick(e)}),sN(this,u6,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",sx(this,u8));this.addEventListener("keyup",sx(this,u8),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",sU.TOOLTIP_PLACEMENT,rD.MEDIA_CONTROLLER,rx.MEDIA_LANG]}enable(){this.addEventListener("click",sx(this,u5)),this.addEventListener("keydown",sx(this,u6)),this.tabIndex=0}disable(){this.removeEventListener("click",sx(this,u5)),this.removeEventListener("keydown",sx(this,u6)),this.removeEventListener("keyup",sx(this,u8)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rD.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sx(this,u4))?void 0:a.unassociateElement)||r.call(a,this),sP(this,u4,null)),i&&this.isConnected&&(sP(this,u4,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sx(this,u4))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===sU.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===rx.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),sx(this,u9).call(this)}connectedCallback(){var e,t,i;let{style:a}=nE(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(rD.MEDIA_CONTROLLER);r&&(sP(this,u4,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sx(this,u4))?void 0:t.associateElement)||i.call(t,this)),ne.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=u7,t=ce,sO(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=sx(this,u4))?void 0:e.unassociateElement)||t.call(e,this),sP(this,u4,null),this.removeEventListener("mouseenter",sx(this,u9)),this.removeEventListener("focus",sx(this,u9)),this.removeEventListener("click",sx(this,u5))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return nA(this,sU.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){nk(this,sU.TOOLTIP_PLACEMENT,e)}get mediaController(){return nA(this,rD.MEDIA_CONTROLLER)}set mediaController(e){nk(this,rD.MEDIA_CONTROLLER,e)}get disabled(){return ny(this,sU.DISABLED)}set disabled(e){nT(this,sU.DISABLED,e)}get noTooltip(){return ny(this,sU.NO_TOOLTIP)}set noTooltip(e){nT(this,sU.NO_TOOLTIP,e)}handleClick(e){}}u4=new WeakMap,u5=new WeakMap,u9=new WeakMap,u8=new WeakMap,u6=new WeakMap,u7=new WeakSet,ce=function(){this.addEventListener("mouseenter",sx(this,u9)),this.addEventListener("focus",sx(this,u9)),this.addEventListener("click",sx(this,u5));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},sH.shadowRootOptions={mode:"open"},sH.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${sM.shadowRootOptions.mode}">
          ${sM.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},sH.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},sH.getTooltipContentHTML=function(){return""},ne.customElements.get("media-chrome-button")||ne.customElements.define("media-chrome-button",sH);let sB=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,sW=e=>{let t=e.mediaIsAirplaying?r1("stop airplay"):r1("start airplay");e.setAttribute("aria-label",t)};class sV extends sH{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_IS_AIRPLAYING,rx.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sW(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_IS_AIRPLAYING&&sW(this)}get mediaIsAirplaying(){return ny(this,rx.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){nT(this,rx.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return nA(this,rx.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){nk(this,rx.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new ne.CustomEvent(rL.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}sV.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rx.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rx.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rx.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${rx.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sB}</slot>
      <slot name="exit">${sB}</slot>
    </slot>
  `},sV.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${r1("start airplay")}</slot>
    <slot name="tooltip-exit">${r1("stop airplay")}</slot>
  `},ne.customElements.get("media-airplay-button")||ne.customElements.define("media-airplay-button",sV);let sF=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,s$=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,sK=e=>{e.setAttribute("aria-checked",nZ(e).toString())};class sq extends sH{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_SUBTITLES_LIST,rx.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",r1("closed captions")),sK(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_SUBTITLES_SHOWING&&sK(this)}get mediaSubtitlesList(){return sY(this,rx.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){sG(this,rx.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return sY(this,rx.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){sG(this,rx.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new ne.CustomEvent(rL.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}sq.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${sF}</slot>
      <slot name="off">${s$}</slot>
    </slot>
  `},sq.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${r1("Enable captions")}</slot>
    <slot name="tooltip-disable">${r1("Disable captions")}</slot>
  `};let sY=(e,t)=>{let i=e.getAttribute(t);return i?nK(i):[]},sG=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=nG(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};ne.customElements.get("media-captions-button")||ne.customElements.define("media-captions-button",sq);let sj=e=>{let t=e.mediaIsCasting?r1("stop casting"):r1("start casting");e.setAttribute("aria-label",t)};class sQ extends sH{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_IS_CASTING,rx.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sj(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_IS_CASTING&&sj(this)}get mediaIsCasting(){return ny(this,rx.MEDIA_IS_CASTING)}set mediaIsCasting(e){nT(this,rx.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return nA(this,rx.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){nk(this,rx.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?rL.MEDIA_EXIT_CAST_REQUEST:rL.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new ne.CustomEvent(e,{composed:!0,bubbles:!0}))}}sQ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rx.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rx.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rx.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${rx.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},sQ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${r1("Start casting")}</slot>
    <slot name="tooltip-exit">${r1("Stop casting")}</slot>
  `},ne.customElements.get("media-cast-button")||ne.customElements.define("media-cast-button",sQ);var sz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sZ=(e,t,i)=>(sz(e,t,"read from private field"),i?i.call(e):t.get(e)),sX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sJ=(e,t,i,a)=>(sz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),s0=(e,t,i)=>(sz(e,t,"access private method"),i);let s1={OPEN:"open",ANCHOR:"anchor"};class s2 extends ne.HTMLElement{constructor(){super(),sX(this,cr),sX(this,cs),sX(this,cl),sX(this,cu),sX(this,ch),sX(this,cp),sX(this,ct,!1),sX(this,ci,null),sX(this,ca,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[s1.OPEN,s1.ANCHOR]}get open(){return ny(this,s1.OPEN)}set open(e){nT(this,s1.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":s0(this,cu,cc).call(this,e);break;case"focusout":s0(this,ch,cm).call(this,e);break;case"keydown":s0(this,cp,cv).call(this,e)}}connectedCallback(){s0(this,cr,cn).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){s0(this,cr,cn).call(this),e===s1.OPEN&&i!==t&&(this.open?s0(this,cs,co).call(this):s0(this,cl,cd).call(this))}focus(){sJ(this,ci,np());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}ct=new WeakMap,ci=new WeakMap,ca=new WeakMap,cr=new WeakSet,cn=function(){if(!sZ(this,ct)&&(sJ(this,ct,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=nE(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},cs=new WeakSet,co=function(){var e;null==(e=sZ(this,ca))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},cl=new WeakSet,cd=function(){var e;null==(e=sZ(this,ca))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},cu=new WeakSet,cc=function(e){sJ(this,ca,e.relatedTarget),nh(this,e.relatedTarget)||(this.open=!this.open)},ch=new WeakSet,cm=function(e){var t;!nh(this,e.relatedTarget)&&(null==(t=sZ(this,ci))||t.focus(),sZ(this,ca)&&sZ(this,ca)!==e.relatedTarget&&this.open&&(this.open=!1))},cp=new WeakSet,cv=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=sZ(this,ci))||n.focus(),this.open=!1))},s2.shadowRootOptions={mode:"open"},s2.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},s2.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},ne.customElements.get("media-chrome-dialog")||ne.customElements.define("media-chrome-dialog",s2);var s3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s4=(e,t,i)=>(s3(e,t,"read from private field"),i?i.call(e):t.get(e)),s5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s9=(e,t,i,a)=>(s3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),s8=(e,t,i)=>(s3(e,t,"access private method"),i);class s6 extends ne.HTMLElement{constructor(){if(super(),s5(this,cw),s5(this,cR),s5(this,cC),s5(this,cD),s5(this,cO),s5(this,cN),s5(this,cU),s5(this,cB),s5(this,cb,void 0),s5(this,cE,void 0),s5(this,cg,void 0),s5(this,cf,void 0),s5(this,c_,{}),s5(this,cy,[]),s5(this,cT,()=>{if(this.range.matches(":focus-visible")){let{style:e}=nE(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),s5(this,cA,()=>{let{style:e}=nE(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),s5(this,ck,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),s9(this,cg,this.shadowRoot.querySelector("#startpoint")),s9(this,cf,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",rD.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rD.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=s4(this,cb))?void 0:a.unassociateElement)||r.call(a,this),s9(this,cb,null)),i&&this.isConnected&&(s9(this,cb,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=s4(this,cb))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),s8(this,cR,cI).call(this)):(this.range.setAttribute(e,i),s8(this,cC,cL).call(this)))}connectedCallback(){var e,t,i;let{style:a}=nE(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),s4(this,c_).pointer=nE(this.shadowRoot,"#pointer"),s4(this,c_).progress=nE(this.shadowRoot,"#progress"),s4(this,c_).thumb=nE(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),s4(this,c_).activeSegment=nE(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(rD.MEDIA_CONTROLLER);r&&(s9(this,cb,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=s4(this,cb))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",s4(this,cT)),this.shadowRoot.addEventListener("focusout",s4(this,cA)),s8(this,cR,cI).call(this),nn(this.container,s4(this,ck))}disconnectedCallback(){var e,t;s8(this,cC,cL).call(this),null==(t=null==(e=s4(this,cb))?void 0:e.unassociateElement)||t.call(e,this),s9(this,cb,null),this.shadowRoot.removeEventListener("focusin",s4(this,cT)),this.shadowRoot.removeEventListener("focusout",s4(this,cA)),ns(this.container,s4(this,ck))}updatePointerBar(e){var t;null==(t=s4(this,c_).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=s4(this,c_).progress)||e.style.setProperty("width",`${i}%`),null==(t=s4(this,c_).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];s9(this,cy,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=nt.createElementNS("http://www.w3.org/2000/svg","rect"),c=ng(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;return 0===s?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/s))}(e.clientX,e.clientY,s4(this,cg).getBoundingClientRect(),s4(this,cf).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":s8(this,cB,cW).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":s8(this,cO,cx).call(this,e);break;case"pointerdown":s8(this,cD,cM).call(this,e);break;case"pointerup":s8(this,cN,cP).call(this);break;case"pointerleave":s8(this,cU,cH).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}cb=new WeakMap,cE=new WeakMap,cg=new WeakMap,cf=new WeakMap,c_=new WeakMap,cy=new WeakMap,cT=new WeakMap,cA=new WeakMap,ck=new WeakMap,cw=new WeakSet,cS=function(e){let t=s4(this,c_).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=s4(this,cy).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},cR=new WeakSet,cI=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},cC=new WeakSet,cL=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=ne.window)||e.removeEventListener("pointerup",this),null==(t=ne.window)||t.removeEventListener("pointermove",this)},cD=new WeakSet,cM=function(e){var t;s9(this,cE,e.composedPath().includes(this.range)),null==(t=ne.window)||t.addEventListener("pointerup",this)},cO=new WeakSet,cx=function(e){var t;"mouse"!==e.pointerType&&s8(this,cD,cM).call(this,e),this.addEventListener("pointerleave",this),null==(t=ne.window)||t.addEventListener("pointermove",this)},cN=new WeakSet,cP=function(){var e;null==(e=ne.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},cU=new WeakSet,cH=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=ne.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=s4(this,c_).activeSegment)||t.style.removeProperty("transform")},cB=new WeakSet,cW=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),s8(this,cw,cS).call(this,e),this.dragging&&("mouse"!==e.pointerType||!s4(this,cE))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},s6.shadowRootOptions={mode:"open"},s6.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},s6.getContainerTemplateHTML=function(e){return""},ne.customElements.get("media-chrome-range")||ne.customElements.define("media-chrome-range",s6);var s7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oe=(e,t,i)=>(s7(e,t,"read from private field"),i?i.call(e):t.get(e)),ot=(e,t,i,a)=>(s7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oi extends ne.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cV,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rD.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rD.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oe(this,cV))?void 0:a.unassociateElement)||r.call(a,this),ot(this,cV,null)),i&&this.isConnected&&(ot(this,cV,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oe(this,cV))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rD.MEDIA_CONTROLLER);a&&(ot(this,cV,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=oe(this,cV))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oe(this,cV))?void 0:e.unassociateElement)||t.call(e,this),ot(this,cV,null)}}cV=new WeakMap,oi.shadowRootOptions={mode:"open"},oi.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},ne.customElements.get("media-control-bar")||ne.customElements.define("media-control-bar",oi);var oa=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},or=(e,t,i)=>(oa(e,t,"read from private field"),i?i.call(e):t.get(e)),on=(e,t,i,a)=>(oa(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class os extends ne.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cF,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rD.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===rD.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=or(this,cF))?void 0:a.unassociateElement)||r.call(a,this),on(this,cF,null)),i&&this.isConnected&&(on(this,cF,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=or(this,cF))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=nE(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(rD.MEDIA_CONTROLLER);r&&(on(this,cF,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=or(this,cF))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=or(this,cF))?void 0:e.unassociateElement)||t.call(e,this),on(this,cF,null)}}cF=new WeakMap,os.shadowRootOptions={mode:"open"},os.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},os.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},ne.customElements.get("media-text-display")||ne.customElements.define("media-text-display",os);var oo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ol=(e,t,i)=>(oo(e,t,"read from private field"),i?i.call(e):t.get(e));class od extends os{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,c$,void 0),((e,t,i,a)=>(oo(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,c$,this.shadowRoot.querySelector("slot")),ol(this,c$).textContent=rX(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===rx.MEDIA_DURATION&&(ol(this,c$).textContent=rX(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return nf(this,rx.MEDIA_DURATION)}set mediaDuration(e){n_(this,rx.MEDIA_DURATION,e)}}c$=new WeakMap,od.getSlotTemplateHTML=function(e,t){return`
    <slot>${rX(t.mediaDuration)}</slot>
  `},ne.customElements.get("media-duration-display")||ne.customElements.define("media-duration-display",od);let ou={2:r1("Network Error"),3:r1("Decode Error"),4:r1("Source Not Supported"),5:r1("Encryption Error")},oc={2:r1("A network error caused the media download to fail."),3:r1("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:r1("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:r1("The media is encrypted and there are no keys to decrypt it.")},oh=e=>{var t,i;return 1===e.code?null:{title:null!=(t=ou[e.code])?t:`Error ${e.code}`,message:null!=(i=oc[e.code])?i:e.message}};var om=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function op(e){var t;let{title:i,message:a}=null!=(t=oh(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let ov=[rx.MEDIA_ERROR_CODE,rx.MEDIA_ERROR_MESSAGE];class ob extends s2{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cK,null)}static get observedAttributes(){return[...super.observedAttributes,...ov]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!ov.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==oh(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return om(this,e=cK,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;om(this,t=cK,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return nf(this,"mediaerrorcode")}set mediaErrorCode(e){n_(this,"mediaerrorcode",e)}get mediaErrorMessage(){return nA(this,"mediaerrormessage")}set mediaErrorMessage(e){nk(this,"mediaerrormessage",e)}}cK=new WeakMap,ob.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${op({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},ob.formatErrorMessage=op,ne.customElements.get("media-error-dialog")||ne.customElements.define("media-error-dialog",ob);var oE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},og=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class of extends s2{constructor(){super(...arguments),og(this,cq,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),og(this,cY,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",oE(this,cq)),document.addEventListener("keydown",oE(this,cY)))}disconnectedCallback(){this.removeEventListener("click",oE(this,cq)),document.removeEventListener("keydown",oE(this,cY))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",oE(this,cq)),document.addEventListener("keydown",oE(this,cY))):(this.removeEventListener("click",oE(this,cq)),document.removeEventListener("keydown",oE(this,cY))))}}cq=new WeakMap,cY=new WeakMap,of.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${function(){let e=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join("");return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${e}</table>
  `}()}
    </slot>
  `},ne.customElements.get("media-keyboard-shortcuts-dialog")||ne.customElements.define("media-keyboard-shortcuts-dialog",of);var o_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let oy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,oT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,oA=e=>{let t=e.mediaIsFullscreen?r1("exit fullscreen mode"):r1("enter fullscreen mode");e.setAttribute("aria-label",t)};class ok extends sH{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cG,null)}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_IS_FULLSCREEN,rx.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oA(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_IS_FULLSCREEN&&oA(this)}get mediaFullscreenUnavailable(){return nA(this,rx.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){nk(this,rx.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return ny(this,rx.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){nT(this,rx.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i,a,r;o_(this,t=cG,"write to private field"),i?i.call(this,e):t.set(this,e);let n=(o_(this,a=cG,"read from private field"),(r?r.call(this):a.get(this))instanceof PointerEvent),s=this.mediaIsFullscreen?new ne.CustomEvent(rL.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new ne.CustomEvent(rL.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:n});this.dispatchEvent(s)}}cG=new WeakMap,ok.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rx.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${rx.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rx.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${rx.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${oy}</slot>
      <slot name="exit">${oT}</slot>
    </slot>
  `},ok.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${r1("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${r1("Exit fullscreen mode")}</slot>
  `},ne.customElements.get("media-fullscreen-button")||ne.customElements.define("media-fullscreen-button",ok);let{MEDIA_TIME_IS_LIVE:ow,MEDIA_PAUSED:oS}=rx,{MEDIA_SEEK_TO_LIVE_REQUEST:oR,MEDIA_PLAY_REQUEST:oI}=rL,oC=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?r1("seek to live"):r1("playing live");e.setAttribute("aria-label",a);let r=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=r1("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class oL extends sH{static get observedAttributes(){return[...super.observedAttributes,ow,oS]}connectedCallback(){super.connectedCallback(),oC(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),oC(this)}get mediaPaused(){return ny(this,rx.MEDIA_PAUSED)}set mediaPaused(e){nT(this,rx.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return ny(this,rx.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){nT(this,rx.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new ne.CustomEvent(oR,{composed:!0,bubbles:!0})),this.hasAttribute(oS)&&this.dispatchEvent(new ne.CustomEvent(oI,{composed:!0,bubbles:!0})))}}oL.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${ow}]:not([${oS}])) slot[name=indicator] > *,
      :host([${ow}]:not([${oS}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${ow}]:not([${oS}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${r1("live")}</slot>
  `},ne.customElements.get("media-live-button")||ne.customElements.define("media-live-button",oL);var oD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oM=(e,t,i)=>(oD(e,t,"read from private field"),i?i.call(e):t.get(e)),oO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ox=(e,t,i,a)=>(oD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let oN={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},oP=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class oU extends ne.HTMLElement{constructor(){if(super(),oO(this,cj,void 0),oO(this,cQ,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rD.MEDIA_CONTROLLER,rx.MEDIA_PAUSED,rx.MEDIA_LOADING,oN.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===oN.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===rD.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oM(this,cj))?void 0:a.unassociateElement)||r.call(a,this),ox(this,cj,null)),i&&this.isConnected&&(ox(this,cj,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oM(this,cj))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(rD.MEDIA_CONTROLLER);a&&(ox(this,cj,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=oM(this,cj))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oM(this,cj))?void 0:e.unassociateElement)||t.call(e,this),ox(this,cj,null)}get loadingDelay(){return oM(this,cQ)}set loadingDelay(e){ox(this,cQ,e);let{style:t}=nE(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return ny(this,rx.MEDIA_PAUSED)}set mediaPaused(e){nT(this,rx.MEDIA_PAUSED,e)}get mediaLoading(){return ny(this,rx.MEDIA_LOADING)}set mediaLoading(e){nT(this,rx.MEDIA_LOADING,e)}get mediaController(){return nA(this,rD.MEDIA_CONTROLLER)}set mediaController(e){nk(this,rD.MEDIA_CONTROLLER,e)}get noAutohide(){return ny(this,oN.NO_AUTOHIDE)}set noAutohide(e){nT(this,oN.NO_AUTOHIDE,e)}}cj=new WeakMap,cQ=new WeakMap,oU.shadowRootOptions={mode:"open"},oU.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${rx.MEDIA_LOADING}]:not([${rx.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${rx.MEDIA_LOADING}]:not([${rx.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${rx.MEDIA_LOADING}]:not([${rx.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${oP}</slot>
    <div id="status" role="status" aria-live="polite">${r1("media loading")}</div>
  `},ne.customElements.get("media-loading-indicator")||ne.customElements.define("media-loading-indicator",oU);let oH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,oB=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,oW=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,oV=e=>{let t="off"===e.mediaVolumeLevel?r1("unmute"):r1("mute");e.setAttribute("aria-label",t)};class oF extends sH{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),oV(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_VOLUME_LEVEL&&oV(this)}get mediaVolumeLevel(){return nA(this,rx.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){nk(this,rx.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?rL.MEDIA_UNMUTE_REQUEST:rL.MEDIA_MUTE_REQUEST;this.dispatchEvent(new ne.CustomEvent(e,{composed:!0,bubbles:!0}))}}oF.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${rx.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${rx.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${rx.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${rx.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${rx.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${rx.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${rx.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${oH}</slot>
      <slot name="low">${oB}</slot>
      <slot name="medium">${oB}</slot>
      <slot name="high">${oW}</slot>
    </slot>
  `},oF.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${r1("Mute")}</slot>
    <slot name="tooltip-unmute">${r1("Unmute")}</slot>
  `},ne.customElements.get("media-mute-button")||ne.customElements.define("media-mute-button",oF);let o$=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,oK=e=>{let t=e.mediaIsPip?r1("exit picture in picture mode"):r1("enter picture in picture mode");e.setAttribute("aria-label",t)};class oq extends sH{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_IS_PIP,rx.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),oK(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_IS_PIP&&oK(this)}get mediaPipUnavailable(){return nA(this,rx.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){nk(this,rx.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return ny(this,rx.MEDIA_IS_PIP)}set mediaIsPip(e){nT(this,rx.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?rL.MEDIA_EXIT_PIP_REQUEST:rL.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new ne.CustomEvent(e,{composed:!0,bubbles:!0}))}}oq.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rx.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${rx.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${rx.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${rx.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${o$}</slot>
      <slot name="exit">${o$}</slot>
    </slot>
  `},oq.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${r1("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${r1("Exit picture in picture mode")}</slot>
  `},ne.customElements.get("media-pip-button")||ne.customElements.define("media-pip-button",oq);var oY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let oG={RATES:"rates"},oj=[1,1.2,1.5,1.7,2];class oQ extends sH{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cz,new nF(this,oG.RATES,{defaultValue:oj})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_PLAYBACK_RATE,oG.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===oG.RATES&&(oY(this,cz).value=i),e===rx.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",r1("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return oY(this,cz)}set rates(e){e?Array.isArray(e)?oY(this,cz).value=e.join(" "):"string"==typeof e&&(oY(this,cz).value=e):oY(this,cz).value=""}get mediaPlaybackRate(){return nf(this,rx.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){n_(this,rx.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(oY(this,cz).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new ne.CustomEvent(rL.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}cz=new WeakMap,oQ.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},oQ.getTooltipContentHTML=function(){return r1("Playback rate")},ne.customElements.get("media-playback-rate-button")||ne.customElements.define("media-playback-rate-button",oQ);let oz=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,oZ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,oX=e=>{let t=e.mediaPaused?r1("play"):r1("pause");e.setAttribute("aria-label",t)};class oJ extends sH{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_PAUSED,rx.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),oX(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===rx.MEDIA_PAUSED||e===rx.MEDIA_LANG)&&oX(this)}get mediaPaused(){return ny(this,rx.MEDIA_PAUSED)}set mediaPaused(e){nT(this,rx.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?rL.MEDIA_PLAY_REQUEST:rL.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new ne.CustomEvent(e,{composed:!0,bubbles:!0}))}}oJ.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${rx.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${rx.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${rx.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${rx.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${oz}</slot>
      <slot name="pause">${oZ}</slot>
    </slot>
  `},oJ.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${r1("Play")}</slot>
    <slot name="tooltip-pause">${r1("Pause")}</slot>
  `},ne.customElements.get("media-play-button")||ne.customElements.define("media-play-button",oJ);let o0={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class o1 extends ne.HTMLElement{static get observedAttributes(){return[o0.PLACEHOLDER_SRC,o0.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if(e===o0.SRC&&(null==i?this.image.removeAttribute(o0.SRC):this.image.setAttribute(o0.SRC,i)),e===o0.PLACEHOLDER_SRC)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return nA(this,o0.PLACEHOLDER_SRC)}set placeholderSrc(e){nk(this,o0.SRC,e)}get src(){return nA(this,o0.SRC)}set src(e){nk(this,o0.SRC,e)}}o1.shadowRootOptions={mode:"open"},o1.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},ne.customElements.get("media-poster-image")||ne.customElements.define("media-poster-image",o1);var o2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class o3 extends os{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cZ,void 0),((e,t,i,a)=>(o2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cZ,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_PREVIEW_CHAPTER,rx.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===rx.MEDIA_PREVIEW_CHAPTER||e===rx.MEDIA_LANG)&&i!==t&&null!=i){var a,r;if((o2(this,a=cZ,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i){let e=r1("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return nA(this,rx.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){nk(this,rx.MEDIA_PREVIEW_CHAPTER,e)}}cZ=new WeakMap,ne.customElements.get("media-preview-chapter-display")||ne.customElements.define("media-preview-chapter-display",o3);var o4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o5=(e,t,i)=>(o4(e,t,"read from private field"),i?i.call(e):t.get(e)),o9=(e,t,i,a)=>(o4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class o8 extends ne.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cX,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[rD.MEDIA_CONTROLLER,rx.MEDIA_PREVIEW_IMAGE,rx.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(rD.MEDIA_CONTROLLER);a&&(o9(this,cX,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=o5(this,cX))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=o5(this,cX))?void 0:e.unassociateElement)||t.call(e,this),o9(this,cX,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[rx.MEDIA_PREVIEW_IMAGE,rx.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===rD.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=o5(this,cX))?void 0:a.unassociateElement)||r.call(a,this),o9(this,cX,null)),i&&this.isConnected&&(o9(this,cX,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=o5(this,cX))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return nA(this,rx.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nk(this,rx.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(rx.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e)return void this.removeAttribute(rx.MEDIA_PREVIEW_COORDS);this.setAttribute(rx.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,v=m?c:h>1?h:1,{style:b}=nE(this.shadowRoot,":host"),E=nE(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),f=m?"min":"max";b.setProperty(`${f}-width`,"initial","important"),b.setProperty(`${f}-height`,"initial","important"),b.width=`${r*v}px`,b.height=`${n*v}px`;let _=()=>{E.width=`${this.imgWidth*v}px`,E.height=`${this.imgHeight*v}px`,E.display="block"};g.src!==s&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,_()},g.src=s,_()),_(),E.transform=`translate(-${i*v}px, -${a*v}px)`}}cX=new WeakMap,o8.shadowRootOptions={mode:"open"},o8.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},ne.customElements.get("media-preview-thumbnail")||ne.customElements.define("media-preview-thumbnail",o8);var o6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o7=(e,t,i)=>(o6(e,t,"read from private field"),i?i.call(e):t.get(e));class le extends os{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,cJ,void 0),((e,t,i,a)=>(o6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,cJ,this.shadowRoot.querySelector("slot")),o7(this,cJ).textContent=rX(0)}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_PREVIEW_TIME&&null!=i&&(o7(this,cJ).textContent=rX(parseFloat(i)))}get mediaPreviewTime(){return nf(this,rx.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){n_(this,rx.MEDIA_PREVIEW_TIME,e)}}cJ=new WeakMap,ne.customElements.get("media-preview-time-display")||ne.customElements.define("media-preview-time-display",le);let lt={SEEK_OFFSET:"seekoffset"};class li extends sH{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_CURRENT_TIME,lt.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=nf(this,lt.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===lt.SEEK_OFFSET&&(this.seekOffset=nf(this,lt.SEEK_OFFSET,30))}get seekOffset(){return nf(this,lt.SEEK_OFFSET,30)}set seekOffset(e){n_(this,lt.SEEK_OFFSET,e),this.setAttribute("aria-label",r1("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),nu(nc(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nf(this,rx.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){n_(this,rx.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new ne.CustomEvent(rL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}li.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},li.getTooltipContentHTML=function(){return r1("Seek backward")},ne.customElements.get("media-seek-backward-button")||ne.customElements.define("media-seek-backward-button",li);let la={SEEK_OFFSET:"seekoffset"};class lr extends sH{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_CURRENT_TIME,la.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=nf(this,la.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===la.SEEK_OFFSET&&(this.seekOffset=nf(this,la.SEEK_OFFSET,30))}get seekOffset(){return nf(this,la.SEEK_OFFSET,30)}set seekOffset(e){n_(this,la.SEEK_OFFSET,e),this.setAttribute("aria-label",r1("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),nu(nc(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return nf(this,rx.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){n_(this,rx.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new ne.CustomEvent(rL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}lr.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},lr.getTooltipContentHTML=function(){return r1("Seek forward")},ne.customElements.get("media-seek-forward-button")||ne.customElements.define("media-seek-forward-button",lr);var ln=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ls=(e,t,i)=>(ln(e,t,"read from private field"),i?i.call(e):t.get(e));let lo={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},ll=[...Object.values(lo),rx.MEDIA_CURRENT_TIME,rx.MEDIA_DURATION,rx.MEDIA_SEEKABLE],ld=["Enter"," "],lu="&nbsp;/&nbsp;",lc=(e,{timesSep:t=lu}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?rX(0-(s-r)):rX(r);return e.showDuration?`${o}${t}${rX(s)}`:o};class lh extends os{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,c0,void 0),((e,t,i,a)=>(ln(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,c0,this.shadowRoot.querySelector("slot")),ls(this,c0).innerHTML=`${lc(this)}`}static get observedAttributes(){return[...super.observedAttributes,...ll,"disabled"]}connectedCallback(){let{style:e}=nE(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",r1("playback time"));let t=e=>{let{key:i}=e;if(!ld.includes(i))return void this.removeEventListener("keyup",t);this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!ld.includes(r))return void this.removeEventListener("keyup",t);this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){ll.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return ny(this,lo.REMAINING)}set remaining(e){nT(this,lo.REMAINING,e)}get showDuration(){return ny(this,lo.SHOW_DURATION)}set showDuration(e){nT(this,lo.SHOW_DURATION,e)}get noToggle(){return ny(this,lo.NO_TOGGLE)}set noToggle(e){nT(this,lo.NO_TOGGLE,e)}get mediaDuration(){return nf(this,rx.MEDIA_DURATION)}set mediaDuration(e){n_(this,rx.MEDIA_DURATION,e)}get mediaCurrentTime(){return nf(this,rx.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){n_(this,rx.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(rx.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(rx.MEDIA_SEEKABLE);this.setAttribute(rx.MEDIA_SEEKABLE,e.join(":"))}update(){let e=lc(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let n=e.remaining?rZ(0-(r-i)):rZ(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",n);let s=rZ(r),o=`${n} of ${s}`;e.setAttribute("aria-valuetext",o)})(this),e!==ls(this,c0).innerHTML&&(ls(this,c0).innerHTML=e)}}c0=new WeakMap,lh.getSlotTemplateHTML=function(e,t){return`
    <slot>${lc(t)}</slot>
  `},ne.customElements.get("media-time-display")||ne.customElements.define("media-time-display",lh);var lm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lp=(e,t,i)=>(lm(e,t,"read from private field"),i?i.call(e):t.get(e)),lv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lb=(e,t,i,a)=>(lm(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lE{constructor(e,t,i){lv(this,c1,void 0),lv(this,c2,void 0),lv(this,c3,void 0),lv(this,c4,void 0),lv(this,c5,void 0),lv(this,c9,void 0),lv(this,c8,void 0),lv(this,c6,void 0),lv(this,c7,0),lv(this,he,(e=performance.now())=>{lb(this,c7,requestAnimationFrame(lp(this,he))),lb(this,c4,performance.now()-lp(this,c3));let t=1e3/this.fps;if(lp(this,c4)>t){lb(this,c3,e-lp(this,c4)%t);let i=1e3/((e-lp(this,c2))/++((e,t,i,a)=>({set _(value){lb(e,t,value,i)},get _(){return lp(e,t,a)}}))(this,c5)._),a=(e-lp(this,c9))/1e3/this.duration,r=lp(this,c8)+a*this.playbackRate;r-lp(this,c1).valueAsNumber>0?lb(this,c6,this.playbackRate/this.duration/i):(lb(this,c6,.995*lp(this,c6)),r=lp(this,c1).valueAsNumber+lp(this,c6)),this.callback(r)}}),lb(this,c1,e),this.callback=t,this.fps=i}start(){0===lp(this,c7)&&(lb(this,c3,performance.now()),lb(this,c2,lp(this,c3)),lb(this,c5,0),lp(this,he).call(this))}stop(){0!==lp(this,c7)&&(cancelAnimationFrame(lp(this,c7)),lb(this,c7,0))}update({start:e,duration:t,playbackRate:i}){let a=e-lp(this,c1).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),lb(this,c8,e),lb(this,c9,performance.now()),this.duration=t,this.playbackRate=i}}c1=new WeakMap,c2=new WeakMap,c3=new WeakMap,c4=new WeakMap,c5=new WeakMap,c9=new WeakMap,c8=new WeakMap,c6=new WeakMap,c7=new WeakMap,he=new WeakMap;var lg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lf=(e,t,i)=>(lg(e,t,"read from private field"),i?i.call(e):t.get(e)),l_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ly=(e,t,i,a)=>(lg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lT=(e,t,i)=>(lg(e,t,"access private method"),i);let lA=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},lk=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class lw extends s6{constructor(){super(),l_(this,hc),l_(this,hm),l_(this,hb),l_(this,hg),l_(this,h_),l_(this,hT),l_(this,hk),l_(this,hS),l_(this,ht,void 0),l_(this,hi,void 0),l_(this,ha,void 0),l_(this,hr,void 0),l_(this,hn,void 0),l_(this,hs,void 0),l_(this,ho,void 0),l_(this,hl,void 0),l_(this,hd,void 0),l_(this,hu,void 0),l_(this,hv,e=>{!this.dragging&&(rG(e)&&(this.range.valueAsNumber=e),lf(this,hu)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),ly(this,ha,this.shadowRoot.querySelectorAll('[part~="box"]')),ly(this,hn,this.shadowRoot.querySelector('[part~="preview-box"]')),ly(this,hs,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);ly(this,ho,parseInt(e.getPropertyValue("--media-box-padding-left"))),ly(this,hl,parseInt(e.getPropertyValue("--media-box-padding-right"))),ly(this,hi,new lE(this.range,lf(this,hv),60))}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_PAUSED,rx.MEDIA_DURATION,rx.MEDIA_SEEKABLE,rx.MEDIA_CURRENT_TIME,rx.MEDIA_PREVIEW_IMAGE,rx.MEDIA_PREVIEW_TIME,rx.MEDIA_PREVIEW_CHAPTER,rx.MEDIA_BUFFERED,rx.MEDIA_PLAYBACK_RATE,rx.MEDIA_LOADING,rx.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",r1("seek")),lT(this,hc,hh).call(this),ly(this,ht,this.getRootNode()),null==(e=lf(this,ht))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),lT(this,hc,hh).call(this),null==(e=lf(this,ht))||e.removeEventListener("transitionstart",this),ly(this,ht,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===rx.MEDIA_CURRENT_TIME||e===rx.MEDIA_PAUSED||e===rx.MEDIA_ENDED||e===rx.MEDIA_LOADING||e===rx.MEDIA_DURATION||e===rx.MEDIA_SEEKABLE?(lf(this,hi).update({start:lA(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),lT(this,hc,hh).call(this),(e=>{let t=e.range,i=rZ(+lk(e)),a=rZ(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)})(this)):e===rx.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===rx.MEDIA_DURATION||e===rx.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=lf(this,hd),this.updateBar()))}get mediaChaptersCues(){return lf(this,hd)}set mediaChaptersCues(e){var t;ly(this,hd,e),this.updateSegments(null==(t=lf(this,hd))?void 0:t.map(e=>({start:lA(this,e.startTime),end:lA(this,e.endTime)})))}get mediaPaused(){return ny(this,rx.MEDIA_PAUSED)}set mediaPaused(e){nT(this,rx.MEDIA_PAUSED,e)}get mediaLoading(){return ny(this,rx.MEDIA_LOADING)}set mediaLoading(e){nT(this,rx.MEDIA_LOADING,e)}get mediaDuration(){return nf(this,rx.MEDIA_DURATION)}set mediaDuration(e){n_(this,rx.MEDIA_DURATION,e)}get mediaCurrentTime(){return nf(this,rx.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){n_(this,rx.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return nf(this,rx.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){n_(this,rx.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(rx.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(rx.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(rx.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(rx.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(rx.MEDIA_SEEKABLE);this.setAttribute(rx.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return nA(this,rx.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){nk(this,rx.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return nf(this,rx.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){n_(this,rx.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return ny(this,rx.MEDIA_ENDED)}set mediaEnded(e){nT(this,rx.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=lA(this,r)}let{style:a}=nE(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=nE(this.shadowRoot,"#current-rail"),t=nE(this.shadowRoot,'[part~="current-box"]'),i=lT(this,hb,hE).call(this,lf(this,hs)),a=lT(this,hg,hf).call(this,i,this.range.valueAsNumber),r=lT(this,h_,hy).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":lT(this,hS,hR).call(this);break;case"pointermove":lT(this,hT,hA).call(this,e);break;case"pointerup":lf(this,hu)&&ly(this,hu,!1);break;case"pointerdown":ly(this,hu,!0);break;case"pointerleave":lT(this,hk,hw).call(this,null);break;case"transitionstart":nh(e.target,this)&&setTimeout(()=>lT(this,hc,hh).call(this),0)}}}ht=new WeakMap,hi=new WeakMap,ha=new WeakMap,hr=new WeakMap,hn=new WeakMap,hs=new WeakMap,ho=new WeakMap,hl=new WeakMap,hd=new WeakMap,hu=new WeakMap,hc=new WeakSet,hh=function(){lT(this,hm,hp).call(this)?lf(this,hi).start():lf(this,hi).stop()},hm=new WeakSet,hp=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&nb(this)},hv=new WeakMap,hb=new WeakSet,hE=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?nm(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},hg=new WeakSet,hf=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},h_=new WeakSet,hy=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+lf(this,ho)){let t=e.range.left-e.bounds.left-lf(this,ho);return`${n-i/2+t}px`}if(n>r-lf(this,hl)){let t=e.bounds.right-e.range.right-lf(this,hl);return`${n+i/2-t-e.range.width}px`}return 0},hT=new WeakSet,hA=function(e){let t=[...lf(this,ha)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void lT(this,hk,hw).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=nE(this.shadowRoot,"#preview-rail"),r=nE(this.shadowRoot,'[part~="preview-box"]'),n=lT(this,hb,hE).call(this,lf(this,hn)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=lT(this,hg,hf).call(this,n,s),l=lT(this,h_,hy).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(lf(this,hr))-Math.round(s*i))&&s>.01&&s<.99||(ly(this,hr,s*i),lT(this,hk,hw).call(this,lf(this,hr)))},hk=new WeakSet,hw=function(e){this.dispatchEvent(new ne.CustomEvent(rL.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},hS=new WeakSet,hR=function(){lf(this,hi).stop();let e=lk(this);this.dispatchEvent(new ne.CustomEvent(rL.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},lw.shadowRootOptions={mode:"open"},lw.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${rx.MEDIA_PREVIEW_IMAGE}], [${rx.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${rx.MEDIA_PREVIEW_IMAGE}], [${rx.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${rx.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${rx.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${rx.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${rx.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${rx.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${rx.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${rx.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${rx.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${rx.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${rx.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${rx.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${rx.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${o8.shadowRootOptions.mode}">
            ${o8.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},ne.customElements.get("media-time-range")||ne.customElements.define("media-time-range",lw);class lS extends s6{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_VOLUME,rx.MEDIA_MUTED,rx.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new ne.CustomEvent(rL.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",r1("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rx.MEDIA_VOLUME||e===rx.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return nf(this,rx.MEDIA_VOLUME,1)}set mediaVolume(e){n_(this,rx.MEDIA_VOLUME,e)}get mediaMuted(){return ny(this,rx.MEDIA_MUTED)}set mediaMuted(e){nT(this,rx.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return nA(this,rx.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){nk(this,rx.MEDIA_VOLUME_UNAVAILABLE,e)}}ne.customElements.get("media-volume-range")||ne.customElements.define("media-volume-range",lS);class lR extends sH{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=r1("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return ny(this,rx.MEDIA_LOOP)}set mediaLoop(e){nT(this,rx.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new ne.CustomEvent(rL.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}lR.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${rx.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},lR.getTooltipContentHTML=function(){return r1("Loop")},ne.customElements.get("media-loop-button")||ne.customElements.define("media-loop-button",lR);var lI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lC=(e,t,i)=>(lI(e,t,"read from private field"),i?i.call(e):t.get(e)),lL=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lD=(e,t,i,a)=>(lI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lM={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof lW&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof lW?a.element[a.attributeName]=t:a.value=t}}}};class lO extends ne.DocumentFragment{constructor(e,t,i=lM){var a;super(),lL(this,hI,void 0),lL(this,hC,void 0),this.append(e.content.cloneNode(!0)),lD(this,hI,lx(this)),lD(this,hC,i),null==(a=i.createCallback)||a.call(i,this,lC(this,hI),t),i.processCallback(this,lC(this,hI),t)}update(e){lC(this,hC).processCallback(this,lC(this,hI),e)}}hI=new WeakMap,hC=new WeakMap;let lx=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new lB;for([i,a]of lP(r.value))if(i){let i=new lW(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of lP(n))if(i){let i=new lV(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new lF(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else lx(r,t);return t},lN={},lP=e=>{let t="",i=0,a=lN[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),lN[e]=a};class lU{get value(){return""}set value(e){}toString(){return this.value}}let lH=new WeakMap;class lB{constructor(){lL(this,hL,[])}[Symbol.iterator](){return lC(this,hL).values()}get length(){return lC(this,hL).length}item(e){return lC(this,hL)[e]}append(...e){for(let t of e)t instanceof lW&&lH.set(t,this),lC(this,hL).push(t)}toString(){return lC(this,hL).join("")}}hL=new WeakMap;class lW extends lU{constructor(e,t,i){super(),lL(this,hN),lL(this,hD,""),lL(this,hM,void 0),lL(this,hO,void 0),lL(this,hx,void 0),lD(this,hM,e),lD(this,hO,t),lD(this,hx,i)}get attributeName(){return lC(this,hO)}get attributeNamespace(){return lC(this,hx)}get element(){return lC(this,hM)}get value(){return lC(this,hD)}set value(e){lC(this,hD)!==e&&(lD(this,hD,e),lC(this,hN,hP)&&1!==lC(this,hN,hP).length?lC(this,hM).setAttributeNS(lC(this,hx),lC(this,hO),lC(this,hN,hP).toString()):null==e?lC(this,hM).removeAttributeNS(lC(this,hx),lC(this,hO)):lC(this,hM).setAttributeNS(lC(this,hx),lC(this,hO),e))}get booleanValue(){return lC(this,hM).hasAttributeNS(lC(this,hx),lC(this,hO))}set booleanValue(e){if(lC(this,hN,hP)&&1!==lC(this,hN,hP).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}hD=new WeakMap,hM=new WeakMap,hO=new WeakMap,hx=new WeakMap,hN=new WeakSet,hP=function(){return lH.get(this)};class lV extends lU{constructor(e,t){super(),lL(this,hU,void 0),lL(this,hH,void 0),lD(this,hU,e),lD(this,hH,t?[...t]:[new Text])}get replacementNodes(){return lC(this,hH)}get parentNode(){return lC(this,hU)}get nextSibling(){return lC(this,hH)[lC(this,hH).length-1].nextSibling}get previousSibling(){return lC(this,hH)[0].previousSibling}get value(){return lC(this,hH).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),lD(this,hH,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(lC(this,hH)[0].parentNode,lC(this,hH),t,this.nextSibling))}}hU=new WeakMap,hH=new WeakMap;class lF extends lV{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let l$={string:e=>String(e)};class lK{constructor(e){this.template=e,this.state=void 0}}let lq=new WeakMap,lY=new WeakMap,lG={partial:(e,t)=>{t[e.expression]=new lK(e.template)},if:(e,t)=>{var i;if(lZ(e.expression,t))if(lq.get(e)!==e.template){lq.set(e,e.template);let i=new lO(e.template,t,lQ);e.replace(i),lY.set(e,i)}else null==(i=lY.get(e))||i.update(t);else e.replace(""),lq.delete(e),lY.delete(e)}},lj=Object.keys(lG),lQ={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof lF){if(!n.directive){let e=lj.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=lG[n.directive])||a.call(lG,n,i);continue}let t=lZ(e,i);if(t instanceof lK){lq.get(n)!==t.template?(lq.set(n,t.template),n.value=t=new lO(t.template,t.state,lQ),lY.set(n,t)):null==(r=lY.get(n))||r.update(t.state);continue}t?(n instanceof lW&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof lW?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,lq.delete(n),lY.delete(n))):n instanceof lW?n.value=void 0:(n.value=void 0,lq.delete(n),lY.delete(n))}}},lz={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=l$[t])?void 0:i.call(l$,e)}};function lZ(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return lX(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return lX(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=l0(d,t))}return i}if(1===d.length)return lJ(d[0])?l0(d[0].token,t):lX(e);if(2===d.length){let i=lz[null==(o=d[0])?void 0:o.token];return i&&lJ(d[1])?i(l0(d[1].token,t)):lX(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=lz[i];if(!a||!lJ(d[0])||!lJ(d[2]))return lX(e);let r=l0(d[0].token,t);return a(r,"|"===i?d[2].token:l0(d[2].token,t))}}function lX(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function lJ({type:e}){return["number","boolean","string","param"].includes(e)}function l0(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):rj(e)?parseFloat(e):t[e]}var l1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l2=(e,t,i)=>(l1(e,t,"read from private field"),i?i.call(e):t.get(e)),l3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l4=(e,t,i,a)=>(l1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l5=(e,t,i)=>(l1(e,t,"access private method"),i);let l9={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},l8=nt.createElement("template");l8.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class l6 extends ne.HTMLElement{constructor(){super(),l3(this,hF),l3(this,hK),l3(this,hB,void 0),l3(this,hW,void 0),l3(this,hV,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(l9[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(rN.BREAKPOINTS_COMPUTED,this.render),l5(this,hF,h$).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=l2(this,hB))?e:this.constructor.template}set template(e){if(null===e)return void this.removeAttribute("template");"string"==typeof e?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(l4(this,hB,e),l4(this,hV,null),this.createRenderer())}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>l9[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=l9[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(rj(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&l5(this,hK,hq).call(this)}connectedCallback(){l5(this,hK,hq).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==l2(this,hW)&&(l4(this,hW,this.template),this.renderer=new lO(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(l8.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function l7(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function de(e){return e.split("-")[0]}hB=new WeakMap,hW=new WeakMap,hV=new WeakMap,hF=new WeakSet,h$=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},hK=new WeakSet,hq=function(){var e;let t=this.getAttribute("template");if(!t||t===l2(this,hV))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){l4(this,hV,t),l4(this,hB,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(l4(this,hV,t),l7(t).then(e=>{let t=nt.createElement("template");t.innerHTML=e,l4(this,hB,t),this.createRenderer()}).catch(console.error))},l6.observedAttributes=["template"],l6.processor=lQ,ne.customElements.get("media-theme")||ne.customElements.define("media-theme",l6);class dt extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class di extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var da=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dr=(e,t,i)=>(da(e,t,"read from private field"),i?i.call(e):t.get(e)),dn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ds=(e,t,i,a)=>(da(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dl=(e,t,i)=>(da(e,t,"access private method"),i);function dd({type:e,text:t,value:i,checked:a}){let r=nt.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=nt.createElement("span");return n.textContent=t,r.append(n),r}function du(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let dc={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class dh extends ne.HTMLElement{constructor(){if(super(),dn(this,hJ),dn(this,h1),dn(this,h4),dn(this,h9),dn(this,h6),dn(this,me),dn(this,mr),dn(this,ms),dn(this,ml),dn(this,mu),dn(this,mh),dn(this,mp),dn(this,mb),dn(this,mg),dn(this,m_),dn(this,mT),dn(this,mk),dn(this,mS),dn(this,hY,null),dn(this,hG,null),dn(this,hj,null),dn(this,hQ,new Set),dn(this,hz,void 0),dn(this,hZ,!1),dn(this,hX,null),dn(this,h3,()=>{let e=dr(this,hQ),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));ds(this,hQ,t)}),dn(this,mi,()=>{dl(this,mr,mn).call(this),dl(this,ms,mo).call(this,!1)}),dn(this,ma,()=>{dl(this,mr,mn).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),ds(this,hz,new MutationObserver(dr(this,h3))),dr(this,hz).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[dc.DISABLED,dc.HIDDEN,dc.STYLE,dc.ANCHOR,rD.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":dl(this,hJ,h0).call(this,e);break;case"invoke":dl(this,h9,h8).call(this,e);break;case"click":dl(this,ml,md).call(this,e);break;case"toggle":dl(this,mh,mm).call(this,e);break;case"focusout":dl(this,mb,mE).call(this,e);break;case"keydown":dl(this,mg,mf).call(this,e)}}connectedCallback(){var e,t;ds(this,hX,ng(this.shadowRoot,":host")),dl(this,h4,h5).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),ds(this,hY,nd(this)),null==(t=null==(e=dr(this,hY))?void 0:e.associateElement)||t.call(e,this),this.hidden||(nn(dp(this),dr(this,mi)),nn(this,dr(this,ma))),dl(this,h1,h2).call(this)}disconnectedCallback(){var e,t;ns(dp(this),dr(this,mi)),ns(this,dr(this,ma)),this.disable(),null==(t=null==(e=dr(this,hY))?void 0:e.unassociateElement)||t.call(e,this),ds(this,hY,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===dc.HIDDEN&&i!==t?(dr(this,hZ)||ds(this,hZ,!0),this.hidden?dl(this,me,mt).call(this):dl(this,h6,h7).call(this),this.dispatchEvent(new di({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===rD.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=dr(this,hY))?void 0:a.unassociateElement)||r.call(a,this),ds(this,hY,null)),i&&this.isConnected&&(ds(this,hY,nd(this)),null==(s=null==(n=dr(this,hY))?void 0:n.associateElement)||s.call(n,this))):e===dc.DISABLED&&i!==t?null==i?this.enable():this.disable():e===dc.STYLE&&i!==t&&dl(this,h4,h5).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=nv(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(dm)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&dl(this,mS,mR).call(this,t)}focus(){if(ds(this,hG,np()),this.items.length){dl(this,mk,mw).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=dl(this,m_,my).call(this,e);i&&(dl(this,mS,mR).call(this,i,"checkbox"===i.type),dr(this,hj)&&!this.hidden&&(null==(t=dr(this,hG))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=dl(this,m_,my).call(this,e))?t:dl(this,mT,mA).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),dl(this,mk,mw).call(this,r[s]),r[s].focus()}}function dm(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function dp(e){var t;return null!=(t=e.getAttribute("bounds")?nm(e,`#${e.getAttribute("bounds")}`):nl(e)||e.parentElement)?t:e}hY=new WeakMap,hG=new WeakMap,hj=new WeakMap,hQ=new WeakMap,hz=new WeakMap,hZ=new WeakMap,hX=new WeakMap,hJ=new WeakSet,h0=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&dl(this,h1,h2).call(this),t.name||dr(this,h3).call(this)},h1=new WeakSet,h2=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},h3=new WeakMap,h4=new WeakSet,h5=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},h9=new WeakSet,h8=function(e){ds(this,hj,e.relatedTarget),nh(this,e.relatedTarget)||(this.hidden=!this.hidden)},h6=new WeakSet,h7=function(){var e;null==(e=dr(this,hj))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),nn(dp(this),dr(this,mi)),nn(this,dr(this,ma))},me=new WeakSet,mt=function(){var e;null==(e=dr(this,hj))||e.setAttribute("aria-expanded","false"),ns(dp(this),dr(this,mi)),ns(this,dr(this,ma))},mi=new WeakMap,ma=new WeakMap,mr=new WeakSet,mn=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(de(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=de(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=dp(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=dr(this,hX);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},ms=new WeakSet,mo=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=dr(this,hX);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),dl(this,mr,mn).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),dl(this,mr,mn).call(this);a.removeProperty("--media-menu-transition-in")},ml=new WeakSet,md=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(dr(this,mu,mc))){null==(t=dr(this,hG))||t.focus(),this.hidden=!0;return}let i=dl(this,m_,my).call(this,e);!i||i.hasAttribute("disabled")||(dl(this,mk,mw).call(this,i),this.handleSelect(e))},mu=new WeakSet,mc=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},mh=new WeakSet,mm=function(e){if(e.target===this)return;dl(this,mp,mv).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new dt({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);dl(this,ms,mo).call(this,!0)},mp=new WeakSet,mv=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},mb=new WeakSet,mE=function(e){var t;nh(this,e.relatedTarget)||(dr(this,hZ)&&(null==(t=dr(this,hG))||t.focus()),dr(this,hj)&&dr(this,hj)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},mg=new WeakSet,mf=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(dr(this,hZ)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=dr(this,hG))||n.focus(),dr(this,hZ)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},m_=new WeakSet,my=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},mT=new WeakSet,mA=function(){return this.items.find(e=>0===e.tabIndex)},mk=new WeakSet,mw=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},mS=new WeakSet,mR=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},dh.shadowRootOptions={mode:"open"},dh.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},ne.customElements.get("media-chrome-menu")||ne.customElements.define("media-chrome-menu",dh);var dv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},db=(e,t,i)=>(dv(e,t,"read from private field"),i?i.call(e):t.get(e)),dE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dg=(e,t,i,a)=>(dv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),df=(e,t,i)=>(dv(e,t,"access private method"),i);let d_={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class dy extends ne.HTMLElement{constructor(){if(super(),dE(this,mL),dE(this,mM),dE(this,mx),dE(this,mU),dE(this,mB),dE(this,mV),dE(this,mI,!1),dE(this,mC,void 0),dE(this,mP,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=nt.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=no(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[d_.TYPE,d_.DISABLED,d_.CHECKED,d_.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),dT(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":df(this,mL,mD).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":df(this,mB,mW).call(this,e);break;case"keyup":df(this,mU,mH).call(this,e)}}attributeChangedCallback(e,t,i){e===d_.CHECKED&&dT(this)&&!db(this,mI)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===d_.TYPE&&i!==t?this.role="menuitem"+i:e===d_.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(d_.DISABLED)||this.enable(),this.role="menuitem"+this.type,dg(this,mC,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),df(this,mV,mF).call(this),this.submenuElement&&df(this,mM,mO).call(this)}disconnectedCallback(){this.disable(),df(this,mV,mF).call(this),dg(this,mC,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nv(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(d_.TYPE))?e:""}set type(e){this.setAttribute(d_.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(d_.VALUE))?e:this.text}set value(e){this.setAttribute(d_.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(dT(this))return"true"===this.getAttribute("aria-checked")}set checked(e){dT(this)&&(dg(this,mI,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!dT(this)&&this.invokeTargetElement&&nh(this,e.target)&&this.invokeTargetElement.dispatchEvent(new dt({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function dT(e){return"radio"===e.type||"checkbox"===e.type}mI=new WeakMap,mC=new WeakMap,mL=new WeakSet,mD=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?df(this,mM,mO).call(this):df(this,mx,mN).call(this))},mM=new WeakSet,mO=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",db(this,mP)),this.submenuElement.addEventListener("addmenuitem",db(this,mP)),this.submenuElement.addEventListener("removemenuitem",db(this,mP)),db(this,mP).call(this)},mx=new WeakSet,mN=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",db(this,mP)),this.submenuElement.removeEventListener("addmenuitem",db(this,mP)),this.submenuElement.removeEventListener("removemenuitem",db(this,mP)),db(this,mP).call(this)},mP=new WeakMap,mU=new WeakSet,mH=function(e){let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",df(this,mU,mH));this.handleClick(e)},mB=new WeakSet,mW=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",df(this,mU,mH));this.addEventListener("keyup",df(this,mU,mH),{once:!0})},mV=new WeakSet,mF=function(){var e;let t=null==(e=db(this,mC))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},dy.shadowRootOptions={mode:"open"},dy.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},dy.getSuffixSlotInnerHTML=function(e){return""},ne.customElements.get("media-chrome-menu-item")||ne.customElements.define("media-chrome-menu-item",dy);class dA extends dh{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nl(this).querySelector("media-settings-menu-button")}}dA.getTemplateHTML=function(e){return`
    ${dh.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},ne.customElements.get("media-settings-menu")||ne.customElements.define("media-settings-menu",dA);class dk extends dy{}dk.shadowRootOptions={mode:"open"},dk.getTemplateHTML=function(e){return`
    ${dy.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},dk.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},ne.customElements.get("media-settings-menu-item")||ne.customElements.define("media-settings-menu-item",dk);class dw extends sH{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=nv(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new dt({relatedTarget:this}))}}ne.customElements.get("media-chrome-menu-button")||ne.customElements.define("media-chrome-menu-button",dw);class dS extends dw{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",r1("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nl(this).querySelector("media-settings-menu")}}dS.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},dS.getTooltipContentHTML=function(){return r1("Settings")},ne.customElements.get("media-settings-menu-button")||ne.customElements.define("media-settings-menu-button",dS);var dR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dI=(e,t,i)=>(dR(e,t,"read from private field"),i?i.call(e):t.get(e)),dC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dL=(e,t,i,a)=>(dR(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dD=(e,t,i)=>(dR(e,t,"access private method"),i);class dM extends dh{constructor(){super(...arguments),dC(this,mq),dC(this,mG),dC(this,m$,[]),dC(this,mK,void 0)}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_AUDIO_TRACK_LIST,rx.MEDIA_AUDIO_TRACK_ENABLED,rx.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rx.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===rx.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;dL(this,m$,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(rY)),dD(this,mq,mY).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dD(this,mG,mj))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dD(this,mG,mj))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=nl(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return dI(this,m$)}set mediaAudioTrackList(e){dL(this,m$,e),dD(this,mq,mY).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=nA(this,rx.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nk(this,rx.MEDIA_AUDIO_TRACK_ENABLED,e)}}m$=new WeakMap,mK=new WeakMap,mq=new WeakSet,mY=function(){if(dI(this,mK)===JSON.stringify(this.mediaAudioTrackList))return;dL(this,mK,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=dd({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(du(this,"checked-indicator")),this.defaultSlot.append(e)}},mG=new WeakSet,mj=function(){if(null==this.value)return;let e=new ne.CustomEvent(rL.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},ne.customElements.get("media-audio-track-menu")||ne.customElements.define("media-audio-track-menu",dM);let dO=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,dx=e=>{let t=r1("Audio");e.setAttribute("aria-label",t)};class dN extends dw{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_AUDIO_TRACK_ENABLED,rx.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),dx(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_LANG&&dx(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nl(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=nA(this,rx.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){nk(this,rx.MEDIA_AUDIO_TRACK_ENABLED,e)}}dN.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${dO}</slot>
  `},dN.getTooltipContentHTML=function(){return r1("Audio")},ne.customElements.get("media-audio-track-menu-button")||ne.customElements.define("media-audio-track-menu-button",dN);var dP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dH=(e,t,i)=>(dP(e,t,"access private method"),i);let dB=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class dW extends dh{constructor(){super(...arguments),dU(this,mz),dU(this,mX),dU(this,mQ,void 0)}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_SUBTITLES_LIST,rx.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_SUBTITLES_LIST&&t!==i?dH(this,mz,mZ).call(this):e===rx.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",dH(this,mz,mZ).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dH(this,mX,mJ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dH(this,mX,mJ))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nl(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return dV(this,rx.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dF(this,rx.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dV(this,rx.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dF(this,rx.MEDIA_SUBTITLES_SHOWING,e)}}mQ=new WeakMap,mz=new WeakSet,mZ=function(){var e,t,i,a,r,n;let s=(dP(this,t=mQ,"read from private field"),(i?i.call(this):t.get(this))!==JSON.stringify(this.mediaSubtitlesList)),o=this.value!==this.getAttribute(rx.MEDIA_SUBTITLES_SHOWING);if(!s&&!o)return;a=mQ,r=JSON.stringify(this.mediaSubtitlesList),dP(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let l=!this.value,d=dd({type:"radio",text:this.formatMenuItemText(r1("Off")),value:"off",checked:l});for(let t of(d.prepend(du(this,"checked-indicator")),this.defaultSlot.append(d),this.mediaSubtitlesList)){let i=dd({type:"radio",text:this.formatMenuItemText(t.label,t),value:nY(t),checked:this.value==nY(t)});i.prepend(du(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(du(this,"captions-indicator")),this.defaultSlot.append(i)}},mX=new WeakSet,mJ=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(rx.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new ne.CustomEvent(rL.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new ne.CustomEvent(rL.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dW.getTemplateHTML=function(e){return`
    ${dh.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${dB}</slot>
  `};let dV=(e,t)=>{let i=e.getAttribute(t);return i?nK(i):[]},dF=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=nG(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};ne.customElements.get("media-captions-menu")||ne.customElements.define("media-captions-menu",dW);let d$=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dK=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,dq=e=>{e.setAttribute("data-captions-enabled",nZ(e).toString())},dY=e=>{e.setAttribute("aria-label",r1("closed captions"))};class dG extends dw{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_SUBTITLES_LIST,rx.MEDIA_SUBTITLES_SHOWING,rx.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),dY(this),dq(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_SUBTITLES_SHOWING?dq(this):e===rx.MEDIA_LANG&&dY(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=nl(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return dj(this,rx.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dQ(this,rx.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dj(this,rx.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dQ(this,rx.MEDIA_SUBTITLES_SHOWING,e)}}dG.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${d$}</slot>
      <slot name="off">${dK}</slot>
    </slot>
  `},dG.getTooltipContentHTML=function(){return r1("Captions")};let dj=(e,t)=>{let i=e.getAttribute(t);return i?nK(i):[]},dQ=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=nG(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};ne.customElements.get("media-captions-menu-button")||ne.customElements.define("media-captions-menu-button",dG);var dz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dZ=(e,t,i)=>(dz(e,t,"read from private field"),i?i.call(e):t.get(e)),dX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dJ=(e,t,i)=>(dz(e,t,"access private method"),i);let d0={RATES:"rates"};class d1 extends dh{constructor(){super(),dX(this,m1),dX(this,m3),dX(this,m0,new nF(this,d0.RATES,{defaultValue:oj})),dJ(this,m1,m2).call(this)}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_PLAYBACK_RATE,d0.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===rx.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,dJ(this,m1,m2).call(this)):e===d0.RATES&&t!=i&&(dZ(this,m0).value=i,dJ(this,m1,m2).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dJ(this,m3,m4))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dJ(this,m3,m4))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nl(this).querySelector("media-playback-rate-menu-button")}get rates(){return dZ(this,m0)}set rates(e){e?Array.isArray(e)?dZ(this,m0).value=e.join(" "):"string"==typeof e&&(dZ(this,m0).value=e):dZ(this,m0).value="",dJ(this,m1,m2).call(this)}get mediaPlaybackRate(){return nf(this,rx.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){n_(this,rx.MEDIA_PLAYBACK_RATE,e)}}m0=new WeakMap,m1=new WeakSet,m2=function(){this.defaultSlot.textContent="";let e=this.mediaPlaybackRate,t=new Set(Array.from(dZ(this,m0)).map(e=>Number(e)));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=dd({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(du(this,"checked-indicator")),this.defaultSlot.append(t)}},m3=new WeakSet,m4=function(){if(!this.value)return;let e=new ne.CustomEvent(rL.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},ne.customElements.get("media-playback-rate-menu")||ne.customElements.define("media-playback-rate-menu",d1);class d2 extends dw{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rx.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",r1("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nl(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return nf(this,rx.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){n_(this,rx.MEDIA_PLAYBACK_RATE,e)}}d2.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},d2.getTooltipContentHTML=function(){return r1("Playback rate")},ne.customElements.get("media-playback-rate-menu-button")||ne.customElements.define("media-playback-rate-menu-button",d2);var d3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d4=(e,t,i)=>(d3(e,t,"read from private field"),i?i.call(e):t.get(e)),d5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d9=(e,t,i,a)=>(d3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d8=(e,t,i)=>(d3(e,t,"access private method"),i);class d6 extends dh{constructor(){super(...arguments),d5(this,m8),d5(this,m7),d5(this,m5,[]),d5(this,m9,{})}static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_RENDITION_LIST,rx.MEDIA_RENDITION_SELECTED,rx.MEDIA_RENDITION_UNAVAILABLE,rx.MEDIA_HEIGHT]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===rx.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",d8(this,m8,m6).call(this);else if(e===rx.MEDIA_RENDITION_LIST&&t!==i)d9(this,m5,null==i?void 0:i.split(/\s+/).map(rK)),d8(this,m8,m6).call(this);else e===rx.MEDIA_HEIGHT&&t!==i&&d8(this,m8,m6).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",d8(this,m7,pe))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",d8(this,m7,pe))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:nl(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return d4(this,m5)}set mediaRenditionList(e){d9(this,m5,e),d8(this,m8,m6).call(this)}get mediaRenditionSelected(){return nA(this,rx.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nk(this,rx.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nf(this,rx.MEDIA_HEIGHT)}set mediaHeight(e){n_(this,rx.MEDIA_HEIGHT,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}m5=new WeakMap,m9=new WeakMap,m8=new WeakSet,m6=function(){if(d4(this,m9).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&d4(this,m9).mediaHeight===this.mediaHeight)return;d4(this,m9).mediaRenditionList=JSON.stringify(this.mediaRenditionList),d4(this,m9).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort(this.compareRendition.bind(this)),t=e.find(e=>e.id===this.mediaRenditionSelected);for(let i of e)i.selected=i===t;this.defaultSlot.textContent="";let i=!this.mediaRenditionSelected;for(let t of e){let e=dd({type:"radio",text:this.formatRendition(t,{showBitrate:this.showRenditionBitrate(t)}),value:`${t.id}`,checked:t.selected&&!i});e.prepend(du(this,"checked-indicator")),this.defaultSlot.append(e)}let a=t&&this.showRenditionBitrate(t),r=i?t?this.formatMenuItemText(`${r1("Auto")} \u2022 ${this.formatRendition(t,{showBitrate:a})}`,t):this.formatMenuItemText(`${r1("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(r1("Auto")),n=dd({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(du(this,"checked-indicator")),this.defaultSlot.append(n)},m7=new WeakSet,pe=function(){if(null==this.value)return;let e=new ne.CustomEvent(rL.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},ne.customElements.get("media-rendition-menu")||ne.customElements.define("media-rendition-menu",d6);let d7=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class ue extends dw{static get observedAttributes(){return[...super.observedAttributes,rx.MEDIA_RENDITION_SELECTED,rx.MEDIA_RENDITION_UNAVAILABLE,rx.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",r1("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:nl(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return nA(this,rx.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){nk(this,rx.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return nf(this,rx.MEDIA_HEIGHT)}set mediaHeight(e){n_(this,rx.MEDIA_HEIGHT,e)}}ue.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${d7}</slot>
  `},ue.getTooltipContentHTML=function(){return r1("Quality")},ne.customElements.get("media-rendition-menu-button")||ne.customElements.define("media-rendition-menu-button",ue);var ut=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ui=(e,t,i)=>(ut(e,t,"read from private field"),i?i.call(e):t.get(e)),ua=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ur=(e,t,i,a)=>(ut(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),un=(e,t,i)=>(ut(e,t,"access private method"),i);class us extends dh{constructor(){super(),ua(this,pi),ua(this,pr),ua(this,ps),ua(this,pl),ua(this,pc),ua(this,pt,!1),ua(this,pu,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=un(this,pl,pd).call(this,t);(i||a)&&(ui(this,pt)?un(this,pr,pn).call(this):un(this,pc,ph).call(this,e))}),ua(this,pm,e=>{let t=e.target,i=this.contains(t),a=2===e.button,r=(null==t?void 0:t.nodeName)==="VIDEO",n=un(this,pl,pd).call(this,t);!i&&(a&&(r||n)||un(this,pr,pn).call(this))}),ua(this,pp,e=>{"Escape"===e.key&&un(this,pr,pn).call(this)}),ua(this,pv,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}un(this,pr,pn).call(this)}),this.setAttribute("noautohide",""),un(this,pi,pa).call(this)}connectedCallback(){super.connectedCallback(),nl(this).addEventListener("contextmenu",ui(this,pu)),this.addEventListener("click",ui(this,pv))}disconnectedCallback(){super.disconnectedCallback(),nl(this).removeEventListener("contextmenu",ui(this,pu)),this.removeEventListener("click",ui(this,pv)),document.removeEventListener("mousedown",ui(this,pm)),document.removeEventListener("keydown",ui(this,pp))}}pt=new WeakMap,pi=new WeakSet,pa=function(){this.hidden=!ui(this,pt)},pr=new WeakSet,pn=function(){ur(this,pt,!1),un(this,pi,pa).call(this)},ps=new WeakSet,po=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&un(e,pr,pn).call(e)})},pl=new WeakSet,pd=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},pu=new WeakMap,pc=new WeakSet,ph=function(e){e.preventDefault(),un(this,ps,po).call(this),ur(this,pt,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,un(this,pi,pa).call(this),document.addEventListener("mousedown",ui(this,pm),{once:!0}),document.addEventListener("keydown",ui(this,pp),{once:!0})},pm=new WeakMap,pp=new WeakMap,pv=new WeakMap,us.getTemplateHTML=function(e){return`
      ${dh.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},ne.customElements.get("media-context-menu")||ne.customElements.define("media-context-menu",us);class uo extends dy{}uo.shadowRootOptions={mode:"open"},uo.getTemplateHTML=function(e){return`
    ${dy.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},ne.customElements.get("media-context-menu-item")||ne.customElements.define("media-context-menu-item",uo);var ul=e=>{throw TypeError(e)},ud=(e,t,i)=>t.has(e)||ul("Cannot "+i),uu=(e,t,i)=>(ud(e,t,"read from private field"),i?i.call(e):t.get(e)),uc=(e,t,i)=>t.has(e)?ul("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),uh=(e,t,i,a)=>(ud(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),um=(e,t,i)=>(ud(e,t,"access private method"),i),up=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends up{}globalThis.DocumentFragment=e}var uv,ub,uE,ug,uf,u_,uy,uT,uA,uk,uw,uS,uR,uI,uC,uL,uD,uM,uO,ux,uN,uP,uU,uH,uB,uW,uV,uF,u$,uK,uq,uY,uG,uj,uQ,uz,uZ,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u6,u7,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cb,cE,cg,cf,c_,cy,cT,cA,ck,cw,cS,cR,cI,cC,cL,cD,cM,cO,cx,cN,cP,cU,cH,cB,cW,cV,cF,c$,cK,cq,cY,cG,cj,cQ,cz,cZ,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hE,hg,hf,h_,hy,hT,hA,hk,hw,hS,hR,hI,hC,hL,hD,hM,hO,hx,hN,hP,hU,hH,hB,hW,hV,hF,h$,hK,hq,hY,hG,hj,hQ,hz,hZ,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mE,mg,mf,m_,my,mT,mA,mk,mw,mS,mR,mI,mC,mL,mD,mM,mO,mx,mN,mP,mU,mH,mB,mW,mV,mF,m$,mK,mq,mY,mG,mj,mQ,mz,mZ,mX,mJ,m0,m1,m2,m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pb,pE=class extends up{},pg=class{constructor(e,t={}){uc(this,pb),uh(this,pb,null==t?void 0:t.detail)}get detail(){return uu(this,pb)}initCustomEvent(){}};pb=new WeakMap;var pf={document:{createElement:function(e,t){return new pE}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(pE)},CustomEvent:pg,EventTarget:up,HTMLElement:pE,HTMLVideoElement:class extends up{}},p_="undefined"==typeof window||void 0===globalThis.customElements,py=p_?pf:globalThis,pT=p_?pf.document:globalThis.document;function pA(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function pk(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function pw(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function pS(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var pR,pI,pC,pL=(e,t)=>!!e&&!!t&&(!!e.contains(t)||pL(e,t.getRootNode().host)),pD="mux.com",pM=(()=>{try{return"3.11.5"}catch{}return"UNKNOWN"})(),pO=e=>{if(e){if([tq.LIVE,tq.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tq.LIVE}},px={crossorigin:"crossOrigin",playsinline:"playsInline"},pN=class{constructor(e,t){uc(this,pR),uc(this,pI),uc(this,pC,[]),uh(this,pR,e),uh(this,pI,t)}[Symbol.iterator](){return uu(this,pC).values()}get length(){return uu(this,pC).length}get value(){var e;return null!=(e=uu(this,pC).join(" "))?e:""}set value(e){var t;e!==this.value&&(uh(this,pC,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return uu(this,pC)[e]}values(){return uu(this,pC).values()}keys(){return uu(this,pC).keys()}forEach(e){uu(this,pC).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||uu(this,pC).push(e)}),(""!==this.value||null!=(t=uu(this,pR))&&t.hasAttribute(`${uu(this,pI)}`))&&null!=(i=uu(this,pR))&&i.setAttribute(`${uu(this,pI)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{uu(this,pC).splice(uu(this,pC).indexOf(e),1)}),null==(t=uu(this,pR))||t.setAttribute(`${uu(this,pI)}`,`${this.value}`)}contains(e){return uu(this,pC).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};pR=new WeakMap,pI=new WeakMap,pC=new WeakMap;var pP=`[mux-player ${pM}]`;function pU(...e){console.warn(pP,...e)}function pH(...e){console.error(pP,...e)}function pB(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${t8("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),pU(i)}var pW={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},pV={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},pF=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),p$=[...Object.values(pW).filter(e=>pW.PLAYSINLINE!==e),...Object.values(pV)];function pK(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var pq=class extends py.HTMLElement{static get observedAttributes(){return p$}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case pV.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case pV.VOLUME:{let e=null!=(a=pw(i))?a:1;this.media&&(this.media.volume=e);return}case pV.PLAYBACKRATE:{let e=null!=(r=pw(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:pF}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:pF}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=pw(this.getAttribute(pV.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(pV.PLAYBACKRATE,`${e}`):this.removeAttribute(pV.PLAYBACKRATE)}get crossOrigin(){return pK(this,pW.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(pW.CROSSORIGIN,`${e}`)}get autoplay(){return null!=pK(this,pW.AUTOPLAY)}set autoplay(e){e?this.setAttribute(pW.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(pW.AUTOPLAY)}get loop(){return null!=pK(this,pW.LOOP)}set loop(e){e?this.setAttribute(pW.LOOP,""):this.removeAttribute(pW.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=pK(this,pW.MUTED)}set defaultMuted(e){e?this.setAttribute(pW.MUTED,""):this.removeAttribute(pW.MUTED)}get playsInline(){return null!=pK(this,pW.PLAYSINLINE)}set playsInline(e){pH("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(pW.PRELOAD,e):this.removeAttribute(pW.PRELOAD)}},pY=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,pG=new WeakMap,pj=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=pG.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=pG.get(this.element);e&&e.delete(this.type)}}static for(t){pG.has(t.element)||pG.set(t.element,new Map);let i=t.attributeName.slice(2),a=pG.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},pQ=new Map,pz=new WeakMap,pZ=new WeakMap,pX=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(pQ.has(this.stringsKey))return pQ.get(this.stringsKey);{let e=pT.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),pQ.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(pz.get(e)!==i){pz.set(e,i);let t=new lO(i,this.values,this.processor);pZ.set(e,t),e instanceof lV?e.replace(...t.children):e.appendChild(t);return}let a=pZ.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},pJ={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof lW&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof lW){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof lW&&e.attributeName.startsWith("on")&&(pj.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof lV&&(e.replace(""),1)||t instanceof pX&&e instanceof lV&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof lV&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof lW){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function p0(e,...t){return new pX(e,t,pJ)}var p1=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",THUMB:"thumb",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",MENU_ITEM:"menu-item",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),p2=e=>e.charAt(0).toUpperCase()+e.slice(1),p3=(e,t)=>{let i=(e=>{if(e.muxCode){if(e.muxCode===tW.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===tW.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([tW.NETWORK_TOKEN_AUD_MISMATCH,tW.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===tW.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===tW.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===tW.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===tW.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===tF.MEDIA_ERR_NETWORK)return"";if(e.code===tF.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tF.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},p4=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,p5=pT.createElement("template");"innerHTML"in p5&&(p5.innerHTML=p4);var p9,p8,p6=class extends l6{};p6.template=null==(p8=null==(p9=p5.content)?void 0:p9.children)?void 0:p8[0],py.customElements.get("media-theme-gerwig")||py.customElements.define("media-theme-gerwig",p6);var p7={SRC:"src",POSTER:"poster"},ve={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},vt=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"],vi=ob.formatErrorMessage;function va(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}ob.formatErrorMessage=e=>{var t,i;if(e instanceof tF){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=p2(null!=(i=e.errorCategory)?i:"video"),n=tV(null!=(a=e.errorCategory)?a:tB.VIDEO);if(e.muxCode===tW.NETWORK_OFFLINE)return t8("Your device appears to be offline",t);if(e.muxCode===tW.NETWORK_TOKEN_EXPIRED)return t8("{category} URL has expired",t).format({category:r});if([tW.NETWORK_TOKEN_SUB_MISMATCH,tW.NETWORK_TOKEN_AUD_MISMATCH,tW.NETWORK_TOKEN_AUD_MISSING,tW.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return t8("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===tW.NETWORK_TOKEN_MISSING)return t8("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===tW.NETWORK_NOT_FOUND)return t8("{category} does not exist",t).format({category:r});if(e.muxCode===tW.NETWORK_NOT_READY){let i="live"===e.streamType?"Live stream":"Video";return t8("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===tF.MEDIA_ERR_NETWORK)return t8("Network Error",t);if(e.code===tF.MEDIA_ERR_DECODE)return t8("Media Error",t);if(e.code===tF.MEDIA_ERR_SRC_NOT_SUPPORTED)return t8("Source Not Supported",t)}return t8("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.muxCode){let r=p2(null!=(i=e.errorCategory)?i:"video"),n=tV(null!=(a=e.errorCategory)?a:tB.VIDEO);return e.muxCode===tW.NETWORK_OFFLINE?t8("Check your internet connection and try reloading this video.",t):e.muxCode===tW.NETWORK_TOKEN_EXPIRED?t8("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===tW.NETWORK_TOKEN_SUB_MISMATCH?t8("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===tW.NETWORK_TOKEN_MALFORMED?t8("{category} URL is formatted incorrectly",t).format({category:r}):[tW.NETWORK_TOKEN_AUD_MISMATCH,tW.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?t8("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[tW.NETWORK_TOKEN_MISSING,tW.NETWORK_INVALID_URL].includes(e.muxCode)?t8("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===tW.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===tF.MEDIA_ERR_NETWORK||e.code===tF.MEDIA_ERR_DECODE||e.code===tF.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${t8("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return vi(e)};var vr,vn,vs,vo,vl,vd,vu,vc,vh,vm,vp,vv,vb,vE,vg,vf=Object.values(aH),v_=Object.values(p7),vy=Object.values(ve),vT="mux-player",vA={isDialogOpen:!1},vk={redundant_streams:!0},vw=class extends pq{constructor(){super(),uc(this,vu),uc(this,vr),uc(this,vn,!1),uc(this,vs,{}),uc(this,vo,!0),uc(this,vl,new pN(this,"hotkeys")),uc(this,vd,{...vA,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&um(this,vu,vm).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(pL(this,pT.activeElement)||e.preventDefault())}}),uh(this,vr,i$()),this.attachShadow({mode:"open"}),um(this,vu,vh).call(this),this.isConnected&&um(this,vu,vc).call(this)}static get NAME(){return vT}static get VERSION(){return pM}static get observedAttributes(){var e;return[...null!=(e=pq.observedAttributes)?e:[],...v_,...vf,...vy]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=va(this))}attributeChangedCallback(e,t,i){var a;switch(um(this,vu,vc).call(this),super.attributeChangedCallback(e,t,i),e){case ve.HOTKEYS:uu(this,vl).value=i;break;case ve.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&pU(t8("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case ve.THUMBNAIL_TOKEN:if(i){let e=t9(i);if(e){let{aud:t}=e,i=i_.THUMBNAIL;t!==i&&pU(t8("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case ve.STORYBOARD_TOKEN:if(i){let e=t9(i);if(e){let{aud:t}=e,i=i_.STORYBOARD;t!==i&&pU(t8("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case ve.DRM_TOKEN:if(i){let e=t9(i);if(e){let{aud:t}=e,i=i_.DRM;t!==i&&pU(t8("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case aH.PLAYBACK_ID:null!=i&&i.includes("?token")&&pH(t8("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case aH.STREAM_TYPE:i&&![tq.LIVE,tq.ON_DEMAND,tq.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:pB({file:"invalid-stream-type.md",message:t8("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tq.LIVE?null==this.getAttribute(ve.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case ve.FULLSCREEN_ELEMENT:if(null!=i||i!==t){let e=pT.getElementById(i),t=null==e?void 0:e.querySelector("mux-player");this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case aH.CAP_RENDITION_TO_PLAYER_SIZE:(null==i||i!==t)&&(this.capRenditionToPlayerSize=null!=i||void 0)}[aH.PLAYBACK_ID,p7.SRC,ve.PLAYBACK_TOKEN].includes(e)&&t!==i&&uh(this,vd,{...uu(this,vd),...vA}),um(this,vu,vp).call(this,{[null!=(a=px[e])?a:pk(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(rx.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new py.CustomEvent(rL.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rN.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(rx.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new py.CustomEvent(rL.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(rN.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(aH.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tj.includes(e)?this.setAttribute(aH.PREFER_CMCD,e):pU(`Invalid value for preferCmcd. Must be one of ${tj.join()}`):this.removeAttribute(aH.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rx.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(rx.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(ve.THEME))?e:"gerwig"}set theme(e){this.setAttribute(ve.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(vt.includes(i))continue;let a=e.getAttribute(i);t[pk(i)]=""===a||a}return t}set themeProps(e){var t,i;um(this,vu,vc).call(this);let a={...this.themeProps,...e};for(let r in a){if(vt.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(pA(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(pA(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(aH.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(aH.PLAYBACK_ID,e):this.removeAttribute(aH.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=vS(this,p7.SRC))?e:void 0:null!=(t=this.getAttribute(p7.SRC))?t:void 0}set src(e){e?this.setAttribute(p7.SRC,e):this.removeAttribute(p7.SRC)}get poster(){var e;let t=this.getAttribute(p7.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void pU("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=pD,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=t9(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${pS({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(p7.POSTER,e):this.removeAttribute(p7.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(ve.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(ve.STORYBOARD_SRC,e):this.removeAttribute(ve.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tq.LIVE,tq.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=pD,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=t9(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${pS({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(ve.AUDIO)}set audio(e){if(!e)return void this.removeAttribute(ve.AUDIO);this.setAttribute(ve.AUDIO,"")}get hotkeys(){return uu(this,vl)}get nohotkeys(){return this.hasAttribute(ve.NOHOTKEYS)}set nohotkeys(e){if(!e)return void this.removeAttribute(ve.NOHOTKEYS);this.setAttribute(ve.NOHOTKEYS,"")}get thumbnailTime(){return pw(this.getAttribute(ve.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(ve.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(ve.VIDEO_TITLE))?e:this.getAttribute(ve.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(ve.VIDEO_TITLE,e):this.removeAttribute(ve.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=vS(this,ve.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(ve.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(ve.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=py.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(ve.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(ve.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=py.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(ve.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(ve.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=py.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(ve.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(ve.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(ve.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(ve.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(ve.PLAYBACK_RATES))return this.getAttribute(ve.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e)return void this.removeAttribute(ve.PLAYBACK_RATES);this.setAttribute(ve.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=pw(this.getAttribute(ve.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(ve.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=pw(this.getAttribute(ve.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(ve.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(ve.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(ve.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(ve.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return pw(this.getAttribute(ve.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(ve.DEFAULT_DURATION):this.setAttribute(ve.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(aH.PLAYER_INIT_TIME)?pw(this.getAttribute(aH.PLAYER_INIT_TIME)):uu(this,vr)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(aH.PLAYER_INIT_TIME):this.setAttribute(aH.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(aH.PLAYER_SOFTWARE_NAME))?e:vT}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(aH.PLAYER_SOFTWARE_VERSION))?e:pM}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(aH.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(aH.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(aH.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(aH.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(aH.MAX_RESOLUTION,e):this.removeAttribute(aH.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(aH.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(aH.MIN_RESOLUTION,e):this.removeAttribute(aH.MIN_RESOLUTION))}get maxAutoResolution(){var e;return null!=(e=this.getAttribute(aH.MAX_AUTO_RESOLUTION))?e:void 0}set maxAutoResolution(e){null==e?this.removeAttribute(aH.MAX_AUTO_RESOLUTION):this.setAttribute(aH.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){var e;return null!=(e=this.getAttribute(aH.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(aH.RENDITION_ORDER,e):this.removeAttribute(aH.RENDITION_ORDER))}get programStartTime(){return pw(this.getAttribute(aH.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(aH.PROGRAM_START_TIME):this.setAttribute(aH.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return pw(this.getAttribute(aH.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(aH.PROGRAM_END_TIME):this.setAttribute(aH.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return pw(this.getAttribute(aH.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(aH.ASSET_START_TIME):this.setAttribute(aH.ASSET_START_TIME,`${e}`)}get assetEndTime(){return pw(this.getAttribute(aH.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(aH.ASSET_END_TIME):this.setAttribute(aH.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(ve.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(ve.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):vk}set extraSourceParams(e){null==e?this.removeAttribute(ve.EXTRA_SOURCE_PARAMS):this.setAttribute(ve.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(aH.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(aH.CUSTOM_DOMAIN,e):this.removeAttribute(aH.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=vS(this,aH.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(aH.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(ve.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(ve.NO_VOLUME_PREF,""):this.removeAttribute(ve.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(ve.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(ve.NO_MUTED_PREF,""):this.removeAttribute(ve.NO_MUTED_PREF)}get debug(){return null!=vS(this,aH.DEBUG)}set debug(e){e?this.setAttribute(aH.DEBUG,""):this.removeAttribute(aH.DEBUG)}get disableTracking(){return null!=vS(this,aH.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(aH.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=vS(this,aH.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(aH.DISABLE_COOKIES,""):this.removeAttribute(aH.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(aH.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tq.UNKNOWN}set streamType(e){this.setAttribute(aH.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(ve.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(ve.DEFAULT_STREAM_TYPE))?i:tq.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(ve.DEFAULT_STREAM_TYPE,e):this.removeAttribute(ve.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(ve.TARGET_LIVE_WINDOW)?+this.getAttribute(ve.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(ve.TARGET_LIVE_WINDOW):this.setAttribute(ve.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return pw(vS(this,aH.START_TIME))}set startTime(e){this.setAttribute(aH.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(aH.PREFER_PLAYBACK);if(e===tY.MSE||e===tY.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tY.MSE||e===tY.NATIVE?this.setAttribute(aH.PREFER_PLAYBACK,e):this.removeAttribute(aH.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(um(this,vu,vc).call(this),!this.media)return void pH("underlying media element missing when trying to set metadata. metadata will not be set.");this.media.metadata={...va(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(um(this,vu,vc).call(this),!this.media)return void pH("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");this.media._hlsConfig=e}async addCuePoints(e){var t;return(um(this,vu,vc).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void pH("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(um(this,vu,vc).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void pH("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(ve.PLAYBACK_TOKEN),t=this.getAttribute(ve.DRM_TOKEN),i=this.getAttribute(ve.THUMBNAIL_TOKEN),a=this.getAttribute(ve.STORYBOARD_TOKEN);return{...uu(this,vs),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){uh(this,vs,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(ve.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(ve.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(ve.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(ve.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(ve.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(ve.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(ve.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(ve.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return ia(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(ve.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(ve.CAST_RECEIVER,e):this.removeAttribute(ve.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media)return void pH("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(ve.NO_TOOLTIPS)}set noTooltips(e){if(!e)return void this.removeAttribute(ve.NO_TOOLTIPS);this.setAttribute(ve.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(ve.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(ve.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(ve.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){var e;return null==(e=this.media)?void 0:e.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media)return void pH("underlying media element missing when trying to set capRenditionToPlayerSize");this.media.capRenditionToPlayerSize=e}};function vS(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}vr=new WeakMap,vn=new WeakMap,vs=new WeakMap,vo=new WeakMap,vl=new WeakMap,vd=new WeakMap,vu=new WeakSet,vc=function(){var e,t,i,a;if(!uu(this,vn)){uh(this,vn,!0),um(this,vu,vp).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof py.HTMLElement))throw""}catch{pH("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{pH("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof s_))throw""}catch{pH("<media-controller> failed to upgrade!")}um(this,vu,vv).call(this),um(this,vu,vb).call(this),um(this,vu,vE).call(this),uh(this,vo,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nx.USER_INACTIVE))||t),um(this,vu,vg).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>um(this,vu,vp).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>um(this,vu,vp).call(this))}},vh=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},vm=function(e){Object.assign(uu(this,vd),e),um(this,vu,vp).call(this)},vp=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,v,b,E,g,f,_,y,T,A,k,w,S,R,I,C,L,D,M,O,x,N,P,U,H,B,W,V,F,$,K,q,Y,G,j;let Q,z;t={...uu(this,vd),...e},Q={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:(null==(i=this.media)?void 0:i.currentSrc)&&this.storyboard,storyboardSrc:this.getAttribute(ve.STORYBOARD_SRC),fullscreenElement:this.getAttribute(ve.FULLSCREEN_ELEMENT),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=py.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(ve.NOHOTKEYS),hotKeys:this.getAttribute(ve.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,maxAutoResolution:this.maxAutoResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(aH.TARGET_LIVE_WINDOW),streamType:pO(this.getAttribute(aH.STREAM_TYPE)),primaryColor:this.getAttribute(ve.PRIMARY_COLOR),secondaryColor:this.getAttribute(ve.SECONDARY_COLOR),accentColor:this.getAttribute(ve.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(z=null==(n=this.mediaController)?void 0:n.querySelector("media-time-display"))&&"none"===getComputedStyle(z).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(ve.PLAYBACK_RATES),customDomain:null!=(a=this.getAttribute(aH.CUSTOM_DOMAIN))?a:void 0,title:this.getAttribute(ve.TITLE),videoTitle:null!=(r=this.getAttribute(ve.VIDEO_TITLE))?r:this.getAttribute(ve.TITLE),novolumepref:this.hasAttribute(ve.NO_VOLUME_PREF),nomutedpref:this.hasAttribute(ve.NO_MUTED_PREF),proudlyDisplayMuxBadge:this.hasAttribute(ve.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,disablePseudoEnded:this.hasAttribute(ve.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:this.capRenditionToPlayerSize,...t,extraSourceParams:this.extraSourceParams},s=p0`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(Q)}
    ${pY}
  </style>
  ${l=Q,p0`
  <media-theme
    template="${l.themeTemplate||!1}"
    defaultstreamtype="${null!=(d=l.defaultStreamType)&&d}"
    hotkeys="${(e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===pO(e.streamType)&&(t+=" noarrowleft noarrowright"),t})(l)||!1}"
    nohotkeys="${l.noHotKeys||!l.hasSrc||!1}"
    noautoseektolive="${!!(null!=(u=l.streamType)&&u.includes(tq.LIVE))&&0!==l.targetLiveWindow}"
    novolumepref="${l.novolumepref||!1}"
    nomutedpref="${l.nomutedpref||!1}"
    disabled="${!l.hasSrc||l.isDialogOpen}"
    audio="${null!=(c=l.audio)&&c}"
    style="${null!=(h=function(e){let t="";return Object.entries(e).forEach(([e,i])=>{null!=i&&(t+=`${pA(e)}: ${i}; `)}),t?t.trim():void 0}({"--media-primary-color":l.primaryColor,"--media-secondary-color":l.secondaryColor,"--media-accent-color":l.accentColor}))&&h}"
    defaultsubtitles="${!l.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(m=l.forwardSeekOffset)&&m}"
    backwardseekoffset="${null!=(v=l.backwardSeekOffset)&&v}"
    playbackrates="${null!=(b=l.playbackRates)&&b}"
    defaultshowremainingtime="${null!=(E=l.defaultShowRemainingTime)&&E}"
    defaultduration="${null!=(g=l.defaultDuration)&&g}"
    hideduration="${null!=(f=l.hideDuration)&&f}"
    title="${null!=(_=l.title)&&_}"
    videotitle="${null!=(y=l.videoTitle)&&y}"
    proudlydisplaymuxbadge="${null!=(T=l.proudlyDisplayMuxBadge)&&T}"
    exportparts="${p1}"
    onclose="${l.onCloseErrorDialog}"
    onfocusin="${l.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${null!=(A=l.noHotKeys)&&A}"
      target-live-window="${null!=(k=l.targetLiveWindow)&&k}"
      stream-type="${null!=(w=pO(l.streamType))&&w}"
      crossorigin="${null!=(S=l.crossOrigin)?S:""}"
      playsinline
      autoplay="${null!=(R=l.autoplay)&&R}"
      muted="${null!=(I=l.muted)&&I}"
      loop="${null!=(C=l.loop)&&C}"
      preload="${null!=(L=l.preload)&&L}"
      debug="${null!=(D=l.debug)&&D}"
      prefer-cmcd="${null!=(M=l.preferCmcd)&&M}"
      disable-tracking="${null!=(O=l.disableTracking)&&O}"
      disable-cookies="${null!=(x=l.disableCookies)&&x}"
      prefer-playback="${null!=(N=l.preferPlayback)&&N}"
      start-time="${null!=l.startTime&&l.startTime}"
      beacon-collection-domain="${null!=(P=l.beaconCollectionDomain)&&P}"
      player-init-time="${null!=(U=l.playerInitTime)&&U}"
      player-software-name="${null!=(H=l.playerSoftwareName)&&H}"
      player-software-version="${null!=(B=l.playerSoftwareVersion)&&B}"
      env-key="${null!=(W=l.envKey)&&W}"
      custom-domain="${null!=(V=l.customDomain)&&V}"
      src="${l.src?l.src:!!l.playbackId&&iq(l)}"
      cast-src="${l.src?l.src:!!l.playbackId&&iq(l)}"
      cast-receiver="${null!=(F=l.castReceiver)&&F}"
      drm-token="${null!=(K=null==($=l.tokens)?void 0:$.drm)&&K}"
      exportparts="video"
      disable-pseudo-ended="${null!=(q=l.disablePseudoEnded)&&q}"
      max-auto-resolution="${null!=(Y=l.maxAutoResolution)&&Y}"
      cap-rendition-to-player-size="${null!=(G=l.capRenditionToPlayerSize)&&G}"
    >
      ${l.storyboard?p0`<track label="thumbnails" default kind="metadata" src="${l.storyboard}" />`:p0``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!l.poster&&l.poster}"
        placeholdersrc="${null!=(j=l.placeholder)&&j}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,o=this.shadowRoot,s.renderInto(o)},vv=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(vt.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},vb=function(){let e=e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof tF)){let{message:e,code:t}=null!=i?i:{};i=new tF(e,t)}if(!(null!=i&&i.fatal)){pU(i),i.data&&pU(`${i.name} data:`,i.data);return}let a=p3(i,!1);a.message&&pB(a),pH(i),i.data&&pH(`${i.name} data:`,i.data),um(this,vu,vm).call(this,{isDialogOpen:!0})};this.addEventListener("error",e),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tF))return e;let r=p3(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},vE=function(){var e,t,i,a;let r=()=>um(this,vu,vp).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},vg=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tq.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tq.LIVE&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nx.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,uu(this,vo))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(nx.USER_INACTIVE))||t;uu(this,vo)!==a&&(uh(this,vo,a),n(i,uu(this,vo)))})};var vR=e=>{throw TypeError(e)},vI=(e,t,i)=>t.has(e)||vR("Cannot "+i),vC=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends vC{}globalThis.DocumentFragment=e}var vL,vD=class extends vC{},vM=class{constructor(e,t={}){((e,t,i)=>t.has(e)?vR("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,vL),((e,t,i,a)=>(vI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,vL,null==t?void 0:t.detail)}get detail(){let e,t;return vI(this,e=vL,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};vL=new WeakMap;var vO={document:{createElement:function(e,t){return new vD}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vD)},CustomEvent:vM,EventTarget:vC,HTMLElement:vD,HTMLVideoElement:class extends vC{}},vx="undefined"==typeof window||void 0===globalThis.customElements,vN=vx?vO:globalThis;vx?vO.document:globalThis.document,vN.customElements.get("mux-player")||(vN.customElements.define("mux-player",vw),vN.MuxPlayerElement=vw);var vP=parseInt(s.version)>=19,vU={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},vH=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{ref:t,...i}=e;return Object.entries(i).reduce((e,t)=>{let[i,a]=t,r=((e,t)=>{if(!(!vP&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=vU)&&i in a)return vU[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase())):e}})(i,a);if(!r)return e;let n=vP||"boolean"!=typeof a?a:"";return e[r]=n,e},{})};function vB(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var vW=Object.prototype.hasOwnProperty,vV=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!vW.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),vF=(e,t,i)=>{e[i]=t},v$=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:vF,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:vV;return(0,s.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t])},vK=(()=>{try{return"3.11.5"}catch(e){}return"UNKNOWN"})(),vq=(e,t,i)=>(0,s.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),vY=s.forwardRef((e,t)=>{let{children:i,...a}=e;return s.createElement("mux-player",{suppressHydrationWarning:!0,...vH(a),ref:t},i)}),vG=s.forwardRef((e,t)=>{var i;let a=(0,s.useRef)(null),r=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return s.useCallback(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return e=>{let i=!1,a=t.map(t=>{let a=vB(t,e);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let e=0;e<a.length;e++){let i=a[e];"function"==typeof i?i():vB(t[e],null)}}}}(...t),t)}(a,t),[n]=((e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:v,onPlay:b,onPlaying:E,onTimeUpdate:g,onPause:f,onSeeking:_,onSeeked:y,onStalled:T,onSuspend:A,onEnded:k,onError:w,onCuePointChange:S,onChapterChange:R,metadata:I,tokens:C,paused:L,playbackId:D,playbackRates:M,currentTime:O,themeProps:x,extraSourceParams:N,castCustomData:P,_hlsConfig:U,...H}=t;return v$("tokens",C,e),v$("playbackId",D,e),v$("playbackRates",M,e),v$("metadata",I,e),v$("extraSourceParams",N,e),v$("_hlsConfig",U,e),v$("themeProps",x,e),v$("castCustomData",P,e),v$("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&vV(e,t,i)),v$("currentTime",O,e,(e,t)=>{null!=t&&(e.currentTime=t)}),vq("abort",e,i),vq("canplay",e,a),vq("canplaythrough",e,r),vq("emptied",e,n),vq("loadstart",e,s),vq("loadeddata",e,o),vq("loadedmetadata",e,l),vq("progress",e,d),vq("durationchange",e,u),vq("volumechange",e,c),vq("ratechange",e,h),vq("resize",e,m),vq("waiting",e,v),vq("play",e,b),vq("playing",e,E),vq("timeupdate",e,g),vq("pause",e,f),vq("seeking",e,_),vq("seeked",e,y),vq("stalled",e,T),vq("suspend",e,A),vq("ended",e,k),vq("error",e,w),vq("cuepointchange",e,S),vq("chapterchange",e,R),[H]})(a,e),[o]=(0,s.useState)(null!=(i=e.playerInitTime)?i:i$());return s.createElement(vY,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:"mux-player-react",playerSoftwareVersion:vK,playerInitTime:o,...n})})}}]);