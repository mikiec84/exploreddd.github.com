window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return r(E.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&y[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+C.join(r+" ")+r).split(" "),s(o,t,n))}function u(){f.input=function(n){for(var r=0,o=n.length;r<o;r++)M[n[r]]=n[r]in v;return M.list&&(M.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var r=0,o,a,i,c=e.length;r<c;r++)v.setAttribute("type",a=e[r]),o="text"!==v.type,o&&(v.value=b,v.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&v.style.WebkitAppearance!==n?(m.appendChild(v),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(v,null).WebkitAppearance&&0!==v.offsetHeight,m.removeChild(v)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?v.checkValidity&&v.checkValidity()===!1:v.value!=b)),j[e[r]]=!!o;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",f={},p=!0,m=t.documentElement,h="modernizr",g=t.createElement(h),y=g.style,v=t.createElement("input"),b=":)",x={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",S=w.split(" "),C=w.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},k={},j={},M={},N=[],z=N.slice,P,L=function(e,n,r,o){var a,i,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:h+(r+1),l.appendChild(c);return a=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),l.id=h,(u?l:d).innerHTML+=a,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),i=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=s),!!i},O=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return L("@media "+t+" { #"+h+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty,R;R=a(F,"undefined")||a(F.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=z.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(z.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(z.call(arguments)))};return r}),k.flexbox=function(){return l("flexWrap")},k.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},k.canvastext=function(){return!!f.canvas&&!!a(t.createElement("canvas").getContext("2d").fillText,"function")},k.webgl=function(){return!!e.WebGLRenderingContext},k.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",E.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!l("indexedDB",e)},k.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!!e.history&&!!history.pushState},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},k.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(y.backgroundColor,"rgba")},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(y.backgroundColor,"rgba")||i(y.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},k.backgroundsize=function(){return l("backgroundSize")},k.borderimage=function(){return l("borderImage")},k.borderradius=function(){return l("borderRadius")},k.boxshadow=function(){return l("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(y.opacity)},k.cssanimations=function(){return l("animationName")},k.csscolumns=function(){return l("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),i(y.backgroundImage,"gradient")},k.cssreflections=function(){return l("boxReflect")},k.csstransforms=function(){return!!l("transform")},k.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in m.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return l("transition")},k.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},k.generatedcontent=function(){var e;return L(["#",h,"{font:0/0 a}#",h,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},k.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},k.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(x.call(t.createElementNS(T.svg,"animate")))},k.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(x.call(t.createElementNS(T.svg,"clipPath")))};for(var B in k)R(k,B)&&(P=B.toLowerCase(),f[P]=k[B](),N.push((f[P]?"":"no-")+P));return f.input||u(),f.addTest=function(e,t){if("object"==typeof e)for(var r in e)R(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof p&&p&&(m.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),g=v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[m]];return t||(t={},h++,e[m]=h,g[h]=t),t}function a(e,n,r){if(n||(n=t),y)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||d.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),y)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;i<s;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function s(e){e||(e=t);var r=o(e);return v.shivCSS&&!p&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),y||c(e,r),e}var l="3.7.0",u=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,m="_html5shiv",h=0,g={},y;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,y=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){p=!0,y=!0}}();var v={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:u.shivCSS!==!1,supportsUnknownElements:y,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=v,s(t)}(this,t),f._version=d,f._prefixes=E,f._domPrefixes=C,f._cssomPrefixes=S,f.mq=O,f.hasEvent=A,f.testProp=function(e){return c([e])},f.testAllProps=l,f.testStyles=L,f.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+N.join(" "):""),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();g=1,e?e.t?f(function(){("c"==e.t?j.injectCss:j.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function s(e,n,r,o,a,s,l){function u(t){if(!m&&i(d.readyState)&&(x.r=m=1,!g&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&f(function(){b.removeChild(d)},50);for(var r in C[n])C[n].hasOwnProperty(r)&&C[n][r].onload()}}var l=l||j.errorTimeout,d=t.createElement(e),m=0,y=0,x={t:r,s:n,e:a,a:s,x:l};1===C[n]&&(y=1,C[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,y)},h.splice(o,0,x),"img"!=e&&(y||2===C[n]?(b.insertBefore(d,v?null:p),f(u,l)):C[n].push(d))}function l(e,t,n,r,a){return g=0,t=t||"j",o(e)?s("c"==t?E:x,e,t,this.i++,n,r,a):(h.splice(this.i++,0,e),1==h.length&&c()),this}function u(){var e=j;return e.loader={load:l,i:0},e}var d=t.documentElement,f=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],g=0,y="MozAppearance"in d.style,v=y&&!!t.createRange().compareNode,b=v?d:p.parentNode,d=e.opera&&"[object Opera]"==m.call(e.opera),d=!!t.attachEvent&&!d,x=y?"object":d?"script":"img",E=d?"script":x,w=Array.isArray||function(e){return"[object Array]"==m.call(e)},S=[],C={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},k,j;j=function(e){function t(e){var e=e.split("!"),t=S.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,a,i;for(a=0;a<r;a++)i=e[a].split("="),(o=T[i.shift()])&&(n=o(n,i));for(a=0;a<t;a++)n=S[a](n);return n}function i(e,o,a,i,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,a,i,c):(C[s.url]?s.noexec=!0:C[s.url]=1,a.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&a.load(function(){u(),o&&o(s.origUrl,c,i),l&&l(s.origUrl,c,i),C[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(l=function(){var e=[].slice.call(arguments);u.apply(this,e),d()}),i(e,l,t,0,c);else if(Object(e)===e)for(p in f=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--f&&(r(l)?l=function(){var e=[].slice.call(arguments);u.apply(this,e),d()}:l[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(u[p])),i(e[p],l,t,p,c))}else!n&&d()}var c=!!e.test,s=e.load||e.both,l=e.callback||a,u=l,d=e.complete||a,f,p;n(c?e.yep:e.nope,!!s),s&&n(s)}var s,l,d=this.yepnope.loader;if(o(e))i(e,0,d,0);else if(w(e))for(s=0;s<e.length;s++)l=e[s],o(l)?i(l,0,d,0):w(l)?j(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},j.addPrefix=function(e,t){T[e]=t},j.addFilter=function(e){S.push(e)},j.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",k=function(){t.removeEventListener("DOMContentLoaded",k,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u=t.createElement("script"),d,m,o=o||j.errorTimeout;u.src=e;for(m in r)u.setAttribute(m,r[m]);n=l?c:n||a,u.onreadystatechange=u.onload=function(){!d&&i(u.readyState)&&(d=1,n(),u.onload=u.onreadystatechange=null)},f(function(){d||(d=1,n(1))},o),s?u.onload():p.parentNode.insertBefore(u,p)},e.yepnope.injectCss=function(e,n,r,o,i,s){var o=t.createElement("link"),l,n=s?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);i||(p.parentNode.insertBefore(o,p),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,o=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,r),t=42===a.offsetWidth,n.removeChild(o),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){E(!0)}var n={};e.respond=n,n.update=function(){};var r=[],o=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var n=o();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},i=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=a,n.queue=r,n.unsupportedmq=i,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var c,s,l,u=e.document,d=u.documentElement,f=[],p=[],m=[],h={},g=30,y=u.getElementsByTagName("head")[0]||d,v=u.getElementsByTagName("base")[0],b=y.getElementsByTagName("link"),x=function(){var e,t=u.createElement("div"),n=u.body,r=d.style.fontSize,o=n&&n.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=u.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,a?d.removeChild(n):n.removeChild(t),d.style.fontSize=r,o&&(n.style.fontSize=o),e=l=parseFloat(e)},E=function(t){var n="clientWidth",r=d[n],o="CSS1Compat"===u.compatMode&&r||u.body[n]||r,a={},i=b[b.length-1],h=(new Date).getTime();if(t&&c&&g>h-c)return e.clearTimeout(s),void(s=e.setTimeout(E,g));c=h;for(var v in f)if(f.hasOwnProperty(v)){var w=f[v],S=w.minw,C=w.maxw,T=null===S,k=null===C,j="em";S&&(S=parseFloat(S)*(S.indexOf(j)>-1?l||x():1)),C&&(C=parseFloat(C)*(C.indexOf(j)>-1?l||x():1)),w.hasquery&&(T&&k||!(T||o>=S)||!(k||C>=o))||(a[w.media]||(a[w.media]=[]),a[w.media].push(p[w.rules]))}for(var M in m)m.hasOwnProperty(M)&&m[M]&&m[M].parentNode===y&&y.removeChild(m[M]);m.length=0;for(var N in a)if(a.hasOwnProperty(N)){var z=u.createElement("style"),P=a[N].join("\n");z.type="text/css",z.media=N,y.insertBefore(z,i.nextSibling),z.styleSheet?z.styleSheet.cssText=P:z.appendChild(u.createTextNode(P)),m.push(z)}},w=function(e,t,r){var o=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),a=o&&o.length||0;t=t.substring(0,t.lastIndexOf("/"));var c=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},s=!a&&r;t.length&&(t+="/"),s&&(a=1);for(var l=0;a>l;l++){var u,d,m,h;s?(u=r,p.push(c(e))):(u=o[l].match(n.regex.findStyles)&&RegExp.$1,p.push(RegExp.$2&&c(RegExp.$2))),m=u.split(","),h=m.length;for(var g=0;h>g;g++)d=m[g],i(d)||f.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:p.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},S=function(){if(r.length){var t=r.shift();a(t.href,function(n){w(n,t.href,t.media),h[t.href]=!0,e.setTimeout(function(){S()},0)})}},C=function(){for(var t=0;t<b.length;t++){var n=b[t],o=n.href,a=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();o&&i&&!h[o]&&(n.styleSheet&&n.styleSheet.rawCssText?(w(n.styleSheet.rawCssText,o,a),h[o]=!0):(!/^([a-zA-Z:]*\/\/)/.test(o)&&!v||o.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===o.substring(0,2)&&(o=e.location.protocol+o),r.push({href:o,media:a})))}S()};C(),n.update=C,n.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);