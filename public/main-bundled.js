!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=28)}([function(e,t,r){"use strict";var n=r(1),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return t},extend:function(e,t,r){return u(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(17),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=r(5)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(i)})),e.exports=c}).call(this,r(16))},function(e,t,r){"use strict";var n=r(0),o=r(18),i=r(2),a=r(20),s=r(23),c=r(24),u=r(6);e.exports=function(e){return new Promise((function(t,l){var f=e.data,d=e.headers;n.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";d.Authorization="Basic "+btoa(m+":"+h)}var v=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,l,n),p=null}},p.onabort=function(){p&&(l(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var y=r(25),g=(e.withCredentials||c(v))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&n.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},function(e,t,r){"use strict";var n=r(19);e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(e){void 0!==t[e]&&(r[e]=t[e])})),n.forEach(i,(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])})),n.forEach(a,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}));var s=o.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return n.forEach(c,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])})),r}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){e.exports=r(11)},function(e,t,r){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,r=Object.isFrozen,n=Object.getPrototypeOf,o=Object.getOwnPropertyDescriptor,i=Object.freeze,a=Object.seal,s=Object.create,c="undefined"!=typeof Reflect&&Reflect,u=c.apply,l=c.construct;u||(u=function(e,t,r){return e.apply(t,r)}),i||(i=function(e){return e}),a||(a=function(e){return e}),l||(l=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t))))});var f,d=x(Array.prototype.forEach),p=x(Array.prototype.pop),m=x(Array.prototype.push),h=x(String.prototype.toLowerCase),v=x(String.prototype.match),y=x(String.prototype.replace),g=x(String.prototype.indexOf),b=x(String.prototype.trim),T=x(RegExp.prototype.test),w=(f=TypeError,function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return l(f,t)});function x(e){return function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return u(e,t,n)}}function A(e,n){t&&t(e,null);for(var o=n.length;o--;){var i=n[o];if("string"==typeof i){var a=h(i);a!==i&&(r(n)||(n[o]=a),i=a)}e[i]=!0}return e}function S(t){var r=s(null),n=void 0;for(n in t)u(e,t,[n])&&(r[n]=t[n]);return r}function E(e,t){for(;null!==e;){var r=o(e,t);if(r){if(r.get)return x(r.get);if("function"==typeof r.value)return x(r.value)}e=n(e)}return null}var k=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),O=i(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),N=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),D=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),C=i(["#text"]),M=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),_=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),I=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),U=a(/<%[\s\S]*|[\s\S]*%>/gm),H=a(/^data-[\-\w.\u00B7-\uFFFF]/),P=a(/^aria-[\-\w]+$/),q=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),z=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function G(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var V=function(){return"undefined"==typeof window?null:window},X=function(e,t){if("object"!==(void 0===e?"undefined":W(e))||"function"!=typeof e.createPolicy)return null;var r=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=t.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V(),r=function(t){return e(t)};if(r.version="2.2.6",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var n=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,c=t.Node,u=t.Element,l=t.NodeFilter,f=t.NamedNodeMap,x=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,K=t.Text,$=t.Comment,J=t.DOMParser,Y=t.trustedTypes,Z=u.prototype,Q=E(Z,"cloneNode"),ee=E(Z,"nextSibling"),te=E(Z,"childNodes"),re=E(Z,"parentNode");if("function"==typeof s){var ne=o.createElement("template");ne.content&&ne.content.ownerDocument&&(o=ne.content.ownerDocument)}var oe=X(Y,n),ie=oe&&Ie?oe.createHTML(""):"",ae=o,se=ae.implementation,ce=ae.createNodeIterator,ue=ae.getElementsByTagName,le=ae.createDocumentFragment,fe=n.importNode,de={};try{de=S(o).documentMode?o.documentMode:{}}catch(e){}var pe={};r.isSupported=se&&void 0!==se.createHTMLDocument&&9!==de;var me=I,he=U,ve=H,ye=P,ge=B,be=z,Te=q,we=null,xe=A({},[].concat(G(k),G(L),G(R),G(N),G(C))),Ae=null,Se=A({},[].concat(G(M),G(_),G(j),G(F))),Ee=null,ke=null,Le=!0,Re=!0,Oe=!1,Ne=!1,De=!1,Ce=!1,Me=!1,_e=!1,je=!1,Fe=!0,Ie=!1,Ue=!0,He=!0,Pe=!1,qe={},Be=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ze=null,We=A({},["audio","video","img","source","image","track"]),Ge=null,Ve=A({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Xe=null,Ke=o.createElement("form"),$e=function(e){Xe&&Xe===e||(e&&"object"===(void 0===e?"undefined":W(e))||(e={}),e=S(e),we="ALLOWED_TAGS"in e?A({},e.ALLOWED_TAGS):xe,Ae="ALLOWED_ATTR"in e?A({},e.ALLOWED_ATTR):Se,Ge="ADD_URI_SAFE_ATTR"in e?A(S(Ve),e.ADD_URI_SAFE_ATTR):Ve,ze="ADD_DATA_URI_TAGS"in e?A(S(We),e.ADD_DATA_URI_TAGS):We,Ee="FORBID_TAGS"in e?A({},e.FORBID_TAGS):{},ke="FORBID_ATTR"in e?A({},e.FORBID_ATTR):{},qe="USE_PROFILES"in e&&e.USE_PROFILES,Le=!1!==e.ALLOW_ARIA_ATTR,Re=!1!==e.ALLOW_DATA_ATTR,Oe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ne=e.SAFE_FOR_TEMPLATES||!1,De=e.WHOLE_DOCUMENT||!1,_e=e.RETURN_DOM||!1,je=e.RETURN_DOM_FRAGMENT||!1,Fe=!1!==e.RETURN_DOM_IMPORT,Ie=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,Ue=!1!==e.SANITIZE_DOM,He=!1!==e.KEEP_CONTENT,Pe=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||Te,Ne&&(Re=!1),je&&(_e=!0),qe&&(we=A({},[].concat(G(C))),Ae=[],!0===qe.html&&(A(we,k),A(Ae,M)),!0===qe.svg&&(A(we,L),A(Ae,_),A(Ae,F)),!0===qe.svgFilters&&(A(we,R),A(Ae,_),A(Ae,F)),!0===qe.mathMl&&(A(we,N),A(Ae,j),A(Ae,F))),e.ADD_TAGS&&(we===xe&&(we=S(we)),A(we,e.ADD_TAGS)),e.ADD_ATTR&&(Ae===Se&&(Ae=S(Ae)),A(Ae,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&A(Ge,e.ADD_URI_SAFE_ATTR),He&&(we["#text"]=!0),De&&A(we,["html","head","body"]),we.table&&(A(we,["tbody"]),delete Ee.tbody),i&&i(e),Xe=e)},Je=A({},["mi","mo","mn","ms","mtext"]),Ye=A({},["foreignobject","desc","title","annotation-xml"]),Ze=A({},L);A(Ze,R),A(Ze,O);var Qe=A({},N);A(Qe,D);var et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",rt="http://www.w3.org/1999/xhtml",nt=function(e){var t=re(e);t&&t.tagName||(t={namespaceURI:rt,tagName:"template"});var r=h(e.tagName),n=h(t.tagName);if(e.namespaceURI===tt)return t.namespaceURI===rt?"svg"===r:t.namespaceURI===et?"svg"===r&&("annotation-xml"===n||Je[n]):Boolean(Ze[r]);if(e.namespaceURI===et)return t.namespaceURI===rt?"math"===r:t.namespaceURI===tt?"math"===r&&Ye[n]:Boolean(Qe[r]);if(e.namespaceURI===rt){if(t.namespaceURI===tt&&!Ye[n])return!1;if(t.namespaceURI===et&&!Je[n])return!1;var o=A({},["title","style","font","a","script"]);return!Qe[r]&&(o[r]||!Ze[r])}return!1},ot=function(e){m(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},it=function(e,t){try{m(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){m(r.removed,{attribute:null,from:t})}t.removeAttribute(e)},at=function(e){var t=void 0,r=void 0;if(Me)e="<remove></remove>"+e;else{var n=v(e,/^[\r\n\t ]+/);r=n&&n[0]}var i=oe?oe.createHTML(e):e;try{t=(new J).parseFromString(i,"text/html")}catch(e){}if(!t||!t.documentElement){var a=(t=se.createHTMLDocument("")).body;a.parentNode.removeChild(a.parentNode.firstElementChild),a.outerHTML=i}return e&&r&&t.body.insertBefore(o.createTextNode(r),t.body.childNodes[0]||null),ue.call(t,De?"html":"body")[0]},st=function(e){return ce.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,(function(){return l.FILTER_ACCEPT}),!1)},ct=function(e){return!(e instanceof K||e instanceof $||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof x&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},ut=function(e){return"object"===(void 0===c?"undefined":W(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":W(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},lt=function(e,t,n){pe[e]&&d(pe[e],(function(e){e.call(r,t,n,Xe)}))},ft=function(e){var t=void 0;if(lt("beforeSanitizeElements",e,null),ct(e))return ot(e),!0;if(v(e.nodeName,/[\u0080-\uFFFF]/))return ot(e),!0;var n=h(e.nodeName);if(lt("uponSanitizeElement",e,{tagName:n,allowedTags:we}),!ut(e.firstElementChild)&&(!ut(e.content)||!ut(e.content.firstElementChild))&&T(/<[/\w]/g,e.innerHTML)&&T(/<[/\w]/g,e.textContent))return ot(e),!0;if(!we[n]||Ee[n]){if(He&&!Be[n])for(var o=re(e),i=te(e),a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e));return ot(e),!0}return e instanceof u&&!nt(e)?(ot(e),!0):"noscript"!==n&&"noembed"!==n||!T(/<\/no(script|embed)/i,e.innerHTML)?(Ne&&3===e.nodeType&&(t=e.textContent,t=y(t,me," "),t=y(t,he," "),e.textContent!==t&&(m(r.removed,{element:e.cloneNode()}),e.textContent=t)),lt("afterSanitizeElements",e,null),!1):(ot(e),!0)},dt=function(e,t,r){if(Ue&&("id"===t||"name"===t)&&(r in o||r in Ke))return!1;if(Re&&T(ve,t));else if(Le&&T(ye,t));else{if(!Ae[t]||ke[t])return!1;if(Ge[t]);else if(T(Te,y(r,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==g(r,"data:")||!ze[e])if(Oe&&!T(ge,y(r,be,"")));else if(r)return!1}return!0},pt=function(e){var t=void 0,n=void 0,o=void 0,i=void 0;lt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ae};for(i=a.length;i--;){var c=t=a[i],u=c.name,l=c.namespaceURI;if(n=b(t.value),o=h(u),s.attrName=o,s.attrValue=n,s.keepAttr=!0,s.forceKeepAttr=void 0,lt("uponSanitizeAttribute",e,s),n=s.attrValue,!s.forceKeepAttr&&(it(u,e),s.keepAttr))if(T(/\/>/i,n))it(u,e);else{Ne&&(n=y(n,me," "),n=y(n,he," "));var f=e.nodeName.toLowerCase();if(dt(f,o,n))try{l?e.setAttributeNS(l,u,n):e.setAttribute(u,n),p(r.removed)}catch(e){}}}lt("afterSanitizeAttributes",e,null)}},mt=function e(t){var r=void 0,n=st(t);for(lt("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)lt("uponSanitizeShadowNode",r,null),ft(r)||(r.content instanceof a&&e(r.content),pt(r));lt("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e,o){var i=void 0,s=void 0,u=void 0,l=void 0,f=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!ut(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!r.isSupported){if("object"===W(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(ut(e))return t.toStaticHTML(e.outerHTML)}return e}if(Ce||$e(o),r.removed=[],"string"==typeof e&&(Pe=!1),Pe);else if(e instanceof c)1===(s=(i=at("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?i=s:i.appendChild(s);else{if(!_e&&!Ne&&!De&&-1===e.indexOf("<"))return oe&&Ie?oe.createHTML(e):e;if(!(i=at(e)))return _e?null:ie}i&&Me&&ot(i.firstChild);for(var d=st(Pe?e:i);u=d.nextNode();)3===u.nodeType&&u===l||ft(u)||(u.content instanceof a&&mt(u.content),pt(u),l=u);if(l=null,Pe)return e;if(_e){if(je)for(f=le.call(i.ownerDocument);i.firstChild;)f.appendChild(i.firstChild);else f=i;return Fe&&(f=fe.call(n,f,!0)),f}var p=De?i.outerHTML:i.innerHTML;return Ne&&(p=y(p,me," "),p=y(p,he," ")),oe&&Ie?oe.createHTML(p):p},r.setConfig=function(e){$e(e),Ce=!0},r.clearConfig=function(){Xe=null,Ce=!1},r.isValidAttribute=function(e,t,r){Xe||$e({});var n=h(e),o=h(t);return dt(n,o,r)},r.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],m(pe[e],t))},r.removeHook=function(e){pe[e]&&p(pe[e])},r.removeHooks=function(e){pe[e]&&(pe[e]=[])},r.removeAllHooks=function(){pe={}},r}()}()},function(e,t,r){"use strict";var n=r(0),o=r(1),i=r(12),a=r(7);function s(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var c=s(r(4));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=r(8),c.CancelToken=r(26),c.isCancel=r(3),c.all=function(e){return Promise.all(e)},c.spread=r(27),e.exports=c,e.exports.default=c},function(e,t,r){"use strict";var n=r(0),o=r(2),i=r(13),a=r(14),s=r(7);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=c},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(15),i=r(3),a=r(4);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new m(e,t)),1!==u.length||l||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(6);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(21),o=r(22);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(8);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";r.r(t);var n=r(9),o=r.n(n),i=r(10),a=r.n(i);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.headerSearchIcon=document.querySelector(".header-search-icon"),this.overlay=document.querySelector(".search-overlay"),this.closeIcon=document.querySelector(".close-live-search"),this.inputField=document.querySelector("#live-search-field"),this.resultsArea=document.querySelector(".live-search-results"),this.loaderIcon=document.querySelector(".circle-loader"),this.typingWaitTimer,this.previousValue="",this.events()}var t,r,n;return t=e,(r=[{key:"events",value:function(){var e=this;this.inputField.addEventListener("keyup",(function(){return e.keyPressHandler()})),this.closeIcon.addEventListener("click",(function(){return e.closeOverlay()})),this.headerSearchIcon.addEventListener("click",(function(t){t.preventDefault(),e.openOverlay()}))}},{key:"keyPressHandler",value:function(){var e=this,t=this.inputField.value;""==t&&(clearTimeout(this.typingWaitTimer),this.hideLoaderIcon(),this.hideResultsArea()),""!=t&&t!=this.previousValue&&(clearTimeout(this.typingWaitTimer),this.showLoaderIcon(),this.hideResultsArea(),this.typingWaitTimer=setTimeout((function(){return e.sendRequest()}),800)),this.previousValue=t}},{key:"sendRequest",value:function(){var e=this;o.a.post("/search",{searchTerm:this.inputField.value}).then((function(t){console.log(t.data),e.renderResultsHTML(t.data)})).catch((function(){alert("The request failed.")}))}},{key:"renderResultsHTML",value:function(e){e.length?this.resultsArea.innerHTML=a.a.sanitize('<div class="list-group shadow-sm">\n            <div class="list-group-item active"><strong>Search Results</strong> ('.concat(e.length>1?"".concat(e.length," items found"):"1 item found",")</div>\n            ").concat(e.map((function(e){var t=new Date(e.createdDate);return'<a href="/post/'.concat(e._id,'" class="list-group-item list-group-item-action">\n              <img class="avatar-tiny" src="').concat(e.author.avatar,'"> <strong>').concat(e.title,'</strong>\n              <span class="text-muted small">by ').concat(e.author.username," on ").concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear(),"</span>\n            </a>")})).join(""),"\n          </div>")):this.resultsArea.innerHTML='<p class="alert alert-danger text-center shadow-sm">No results.</p>',this.hideLoaderIcon(),this.showResultsArea()}},{key:"showLoaderIcon",value:function(){this.loaderIcon.classList.add("circle-loader--visible")}},{key:"hideLoaderIcon",value:function(){this.loaderIcon.classList.remove("circle-loader--visible")}},{key:"showResultsArea",value:function(){this.resultsArea.classList.add("live-search-results--visible")}},{key:"hideResultsArea",value:function(){this.resultsArea.classList.remove("live-search-results--visible")}},{key:"openOverlay",value:function(){var e=this;this.overlay.classList.add("search-overlay--visible"),setTimeout((function(){return e.inputField.focus()}),50)}},{key:"closeOverlay",value:function(){this.overlay.classList.remove("search-overlay--visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'<div class="search-overlay">\n        <div class="search-overlay-top shadow-sm">\n          <div class="container container--narrow">\n            <label for="live-search-field" class="search-overlay-icon"><i class="fas fa-search"></i></label>\n            <input type="text" id="live-search-field" class="live-search-field" placeholder="What are you interested in?">\n            <span class="close-live-search"><i class="fas fa-times-circle"></i></span>\n          </div>\n        </div>\n    \n        <div class="search-overlay-bottom">\n          <div class="container container--narrow py-3">\n            <div class="circle-loader"></div>\n            <div class="live-search-results"></div>\n          </div>\n        </div>\n      </div>')}}])&&s(t.prototype,r),n&&s(t,n),e}();function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.chatWrapper=document.querySelector("#chat-wrapper"),this.openIcon=document.querySelector(".header-chat-icon"),this.injectHTML(),this.events()}var t,r,n;return t=e,(r=[{key:"events",value:function(){var e=this;this.openIcon.addEventListener("click",(function(){return e.showChat()}))}},{key:"showChat",value:function(){this.chatWrapper.classList.add("chat--visible")}},{key:"injectHTML",value:function(){this.chatWrapper.innerHTML='\n        <div class="chat-title-bar">Chat <span class="chat-title-bar-close"><i class="fas fa-times-circle"></i></span></div>\n        <div id="chat" class="chat-log"></div>\n\n        <form id="chatForm" class="chat-form border-top">\n      <input type="text" class="chat-field" id="chatField" placeholder="Type a message…" autocomplete="off">\n    </form>\n        '}}])&&u(t.prototype,r),n&&u(t,n),e}();document.querySelector("#chat-wrapper")&&new l,document.querySelector(".header-search-icon")&&new c}]);