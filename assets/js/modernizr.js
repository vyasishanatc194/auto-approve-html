window.Modernizr=function(e,t,n){function r(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1);return o((e+" "+b.join(n+" ")+n).split(" "),t)}function o(e,t){for(var r in e)if(m[e[r]]!==n)return"pfx"!=t||e[r];return!1}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){return typeof e===t}function c(e){m.cssText=e}var s,l,u={},d=t.documentElement,f=(t.head||t.getElementsByTagName("head")[0],"modernizr"),p=t.createElement(f),m=p.style,h=t.createElement("input"),g=":)",v=Object.prototype.toString,y=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),b="Webkit Moz O ms Khtml".split(" "),x="http://www.w3.org/2000/svg",E={},S={},C={},T=[],w=function(e,n,r,o){var i,a,c,s=t.createElement("div");if(parseInt(r,10))for(;r--;)(c=t.createElement("div")).id=o?o[r]:f+(r+1),s.appendChild(c);return i=["&shy;","<style>",e,"</style>"].join(""),s.id=f,s.innerHTML+=i,d.appendChild(s),a=n(s,e),s.parentNode.removeChild(s),!!a},k=function(){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(r,o){o=o||t.createElement(e[r]||"div");var i=(r="on"+r)in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(r,""),i=a(o[r],"function"),a(o[r],n)||(o[r]=n),o.removeAttribute(r))),o=null,i}}(),P={}.hasOwnProperty;l=a(P,n)||a(P.call,n)?function(e,t){return t in e&&a(e.constructor.prototype[t],n)}:function(e,t){return P.call(e,t)};!function(n,r){var o=['@font-face {font-family:"font";src:url("https://")}',["@media (",y.join("touch-enabled),("),f,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",y.join("transform-3d),("),f,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',g,'";visibility:hidden}'].join("")].join(""),i=r.length;w(o,function(n,r){for(var o=t.styleSheets[t.styleSheets.length-1],a=o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"",c=n.childNodes,s={};i--;)s[c[i].id]=c[i];u.touch="ontouchstart"in e||9===s.touch.offsetTop,u.csstransforms3d=9===s.csstransforms3d.offsetLeft,u.generatedcontent=s.generatedcontent.offsetHeight>=1,u.fontface=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])},i,r)}(0,["fontface","touch","csstransforms3d","generatedcontent"]);for(var j in E.flexbox=function(){var e=t.createElement("div"),n=t.createElement("div");(function(e,t,n,r){t+=":",e.style.cssText=(t+y.join(n+";"+t)).slice(0,-t.length)+(r||"")})(e,"display","box","width:42px;padding:0;"),function(e,t,n,r){e.style.cssText=y.join(t+":"+n+";")+(r||"")}(n,"box-flex","1","width:10px;"),e.appendChild(n),d.appendChild(e);var r=42===n.offsetWidth;return e.removeChild(n),d.removeChild(e),r},E.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},E.canvastext=function(){return!!u.canvas&&!!a(t.createElement("canvas").getContext("2d").fillText,"function")},E.webgl=function(){return!!e.WebGLRenderingContext},E.touch=function(){return u.touch},E.geolocation=function(){return!!navigator.geolocation},E.postmessage=function(){return!!e.postMessage},E.websqldatabase=function(){return!!e.openDatabase},E.indexedDB=function(){for(var t=-1,n=b.length;++t<n;)if(e[b[t].toLowerCase()+"IndexedDB"])return!0;return!!e.indexedDB},E.hashchange=function(){return k("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},E.history=function(){return!!e.history&&!!history.pushState},E.draganddrop=function(){return k("dragstart")&&k("drop")},E.websockets=function(){for(var t=-1,n=b.length;++t<n;)if(e[b[t]+"WebSocket"])return!0;return"WebSocket"in e},E.rgba=function(){return c("background-color:rgba(150,255,150,.5)"),i(m.backgroundColor,"rgba")},E.hsla=function(){return c("background-color:hsla(120,40%,100%,.5)"),i(m.backgroundColor,"rgba")||i(m.backgroundColor,"hsla")},E.multiplebgs=function(){return c("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(m.background)},E.backgroundsize=function(){return r("backgroundSize")},E.borderimage=function(){return r("borderImage")},E.borderradius=function(){return r("borderRadius")},E.boxshadow=function(){return r("boxShadow")},E.textshadow=function(){return""===t.createElement("div").style.textShadow},E.opacity=function(){var e,t;return e="opacity:.55",c(y.join(e+";")+(t||"")),/^0.55$/.test(m.opacity)},E.cssanimations=function(){return r("animationName")},E.csscolumns=function(){return r("columnCount")},E.cssgradients=function(){var e="background-image:";return c((e+y.join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+y.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),i(m.backgroundImage,"gradient")},E.cssreflections=function(){return r("boxReflect")},E.csstransforms=function(){return!!o(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},E.csstransforms3d=function(){var e=!!o(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return e&&"webkitPerspective"in d.style&&(e=u.csstransforms3d),e},E.csstransitions=function(){return r("transitionProperty")},E.fontface=function(){return u.fontface},E.generatedcontent=function(){return u.generatedcontent},E.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType){(n=new Boolean(n)).ogg=e.canPlayType('video/ogg; codecs="theora"');var r='video/mp4; codecs="avc1.42E01E';n.h264=e.canPlayType(r+'"')||e.canPlayType(r+', mp4a.40.2"'),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return n},E.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"'),n.mp3=e.canPlayType("audio/mpeg;"),n.wav=e.canPlayType('audio/wav; codecs="1"'),n.m4a=e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;"))}catch(e){}return n},E.localstorage=function(){try{return!!localStorage.getItem}catch(e){return!1}},E.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(e){return!1}},E.webworkers=function(){return!!e.Worker},E.applicationcache=function(){return!!e.applicationCache},E.svg=function(){return!!t.createElementNS&&!!t.createElementNS(x,"svg").createSVGRect},E.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==x},E.smil=function(){return!!t.createElementNS&&/SVG/.test(v.call(t.createElementNS(x,"animate")))},E.svgclippaths=function(){return!!t.createElementNS&&/SVG/.test(v.call(t.createElementNS(x,"clipPath")))},E)l(E,j)&&(s=j.toLowerCase(),u[s]=E[j](),T.push((u[s]?"":"no-")+s));return u.input||(u.input=function(e){for(var t=0,n=e.length;t<n;t++)C[e[t]]=e[t]in h;return C}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),u.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)h.setAttribute("type",o=e[a]),(r="text"!==h.type)&&(h.value=g,h.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&h.style.WebkitAppearance!==n?(d.appendChild(h),r=(i=t.defaultView).getComputedStyle&&"textfield"!==i.getComputedStyle(h,null).WebkitAppearance&&0!==h.offsetHeight,d.removeChild(h)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?r=h.checkValidity&&!1===h.checkValidity():/^color$/.test(o)?(d.appendChild(h),d.offsetWidth,r=h.value!=g,d.removeChild(h)):r=h.value!=g)),S[e[a]]=!!r;return S}("search tel url email datetime date month week time datetime-local number range color".split(" "))),c(""),p=h=null,e.attachEvent&&function(){var e=t.createElement("div");return e.innerHTML="<elem></elem>",1!==e.childNodes.length}()&&function(e,t){function r(e){for(var t=-1;++t<s;)e.createElement(c[t])}e.iepp=e.iepp||{};var o,i=e.iepp,a=i.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",c=a.split("|"),s=c.length,l=new RegExp("(^|\\s)("+a+")","gi"),u=new RegExp("<(/*)("+a+")","gi"),d=/^\s*[\{\}]\s*$/,f=new RegExp("(^|[^\\n]*?\\s)("+a+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),p=t.createDocumentFragment(),m=t.documentElement,h=m.firstChild,g=t.createElement("body"),v=t.createElement("style"),y=/print|all/;i.getCSS=function(e,t){if(e+""===n)return"";for(var r,o=-1,a=e.length,c=[];++o<a;)(r=e[o]).disabled||(t=r.media||t,y.test(t)&&c.push(i.getCSS(r.imports,t),r.cssText),t="all");return c.join("")},i.parseCSS=function(e){for(var t,n=[];null!=(t=f.exec(e));)n.push(((d.exec(t[1])?"\n":t[1])+t[2]+t[3]).replace(l,"$1.iepp_$2")+t[4]);return n.join("\n")},i.writeHTML=function(){var e=-1;for(o=o||t.body;++e<s;)for(var n=t.getElementsByTagName(c[e]),r=n.length,i=-1;++i<r;)n[i].className.indexOf("iepp_")<0&&(n[i].className+=" iepp_"+c[e]);p.appendChild(o),m.appendChild(g),g.className=o.className,g.id=o.id,g.innerHTML=o.innerHTML.replace(u,"<$1font")},i._beforePrint=function(){v.styleSheet.cssText=i.parseCSS(i.getCSS(t.styleSheets,"all")),i.writeHTML()},i.restoreHTML=function(){g.innerHTML="",m.removeChild(g),m.appendChild(o)},i._afterPrint=function(){i.restoreHTML(),v.styleSheet.cssText=""},r(t),r(p),i.disablePP||(h.insertBefore(v,h.firstChild),v.media="print",v.className="iepp-printshim",e.attachEvent("onbeforeprint",i._beforePrint),e.attachEvent("onafterprint",i._afterPrint))}(e,t),u._version="2.0.6",u._prefixes=y,u._domPrefixes=b,u.hasEvent=k,u.testProp=function(e){return o([e])},u.testAllProps=r,u.testStyles=w,d.className=d.className.replace(/\bno-js\b/,"")+" js "+T.join(" "),u}(this,this.document),function(e,t,n){function r(e){return!e||"loaded"==e||"complete"==e}function o(){for(var e=1,t=-1;h.length-++t&&(!h[t].s||(e=h[t].r)););e&&i()}function i(){var e=h.shift();g=1,e?e.t?f(function(){"c"==e.t?function(e){var n,r=t.createElement("link");if(r.href=e.s,r.rel="stylesheet",r.type="text/css",e.e||!E&&!v)r.onload=function(){n||(n=1,f(function(){o()},0))},e.e&&r.onload();else{var i=function(e){f(function(){if(!n)try{e.sheet.cssRules.length?(n=1,o()):i(e)}catch(t){1e3==t.code||"security"==t.message||"denied"==t.message?(n=1,f(function(){o()},0)):i(e)}},0)};i(r)}f(function(){n||(n=1,o())},u.errorTimeout),!e.e&&p.parentNode.insertBefore(r,p)}(e):function(e){var n,i=t.createElement("script");i.src=e.s,i.onreadystatechange=i.onload=function(){!n&&r(i.readyState)&&(n=1,o(),i.onload=i.onreadystatechange=null)},f(function(){n||(n=1,o())},u.errorTimeout),e.e?i.onload():p.parentNode.insertBefore(i,p)}(e)},0):(e(),o()):g=0}function a(e,n,a,c,s,l){function d(){!v&&r(m.readyState)&&(x.r=v=1,!g&&o(),m.onload=m.onreadystatechange=null,f(function(){b.removeChild(m)},0))}var m=t.createElement(e),v=0,x={t:a,s:n,e:l};m.src=m.data=n,!y&&(m.style.display="none"),m.width=m.height="0","object"!=e&&(m.type=a),m.onload=m.onreadystatechange=d,"img"==e?m.onerror=d:"script"==e&&(m.onerror=function(){x.e=x.r=1,i()}),h.splice(c,0,x),b.insertBefore(m,y?null:p),f(function(){v||(b.removeChild(m),x.r=x.e=v=1,o())},u.errorTimeout)}function c(e,t,n){var r="c"==t?T:C;return g=0,t=t||"j",P(e)?a(r,e,t,this.i++,0,n):(h.splice(this.i++,0,e),1==h.length&&i()),this}function s(){var e=u;return e.loader={load:c,i:0},e}var l,u,d=t.documentElement,f=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],g=0,v="MozAppearance"in d.style,y=v&&!!t.createRange().compareNode,b=y?d:p.parentNode,x=e.opera&&"[object Opera]"==m.call(e.opera),E="webkitAppearance"in d.style,S=E&&"async"in t.createElement("script"),C=v?"object":x||S?"img":"script",T=E?"img":C,w=Array.isArray||function(e){return"[object Array]"==m.call(e)},k=function(e){return Object(e)===e},P=function(e){return"string"==typeof e},j=function(e){return"[object Function]"==m.call(e)},N=[],M={};(u=function(e){function t(e,t,r,o,i){var a=function(e){var t,n,r=e.split("!"),o=N.length,i=r.pop(),a=r.length,c={url:i,origUrl:i,prefixes:r};for(n=0;n<a;n++)(t=M[r[n]])&&(c=t(c));for(n=0;n<o;n++)c=N[n](c);return c}(e),c=a.autoCallback;if(!a.bypass){if(t&&(t=j(t)?t:t[e]||t[o]||t[e.split("/").pop().split("?")[0]]),a.instead)return a.instead(e,t,r,o,i);r.load(a.url,a.forceCSS||!a.forceJS&&/css$/.test(a.url)?"c":n,a.noexec),(j(t)||j(c))&&r.load(function(){s(),t&&t(a.origUrl,i,o),c&&c(a.origUrl,i,o)})}}function r(e,n){function r(e){if(P(e))t(e,s,n,0,i);else if(k(e))for(o in e)e.hasOwnProperty(o)&&t(e[o],s,n,o,i)}var o,i=!!e.test,a=i?e.yep:e.nope,c=e.load||e.both,s=e.callback;r(a),r(c),e.complete&&n.load(e.complete)}var o,i,a=this.yepnope.loader;if(P(e))t(e,0,a,0);else if(w(e))for(o=0;o<e.length;o++)i=e[o],P(i)?t(i,0,a,0):w(i)?u(i):k(i)&&r(i,a);else k(e)&&r(e,a)}).addPrefix=function(e,t){M[e]=t},u.addFilter=function(e){N.push(e)},u.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",l=function(){t.removeEventListener("DOMContentLoaded",l,0),t.readyState="complete"},0)),e.yepnope=s()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};