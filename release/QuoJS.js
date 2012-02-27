/*!
 * QuoJS 1.0.5 ~ Copyright (c) 2011, 2012 Javi Jiménez Villar (@soyjavi)
 * http://quojs.tapquo.com
 * Released under MIT license, https://raw.github.com/soyjavi/QuoJS/master/LICENSE.txt
 */

var Quo=function(){function a(e,b){e=e||k;e.__proto__=a.prototype;e.selector=b||"";return e}function i(e){if(e){var b=i.getDomainSelector(e);return a(b,e)}else return a()}var k=[];i.extend=function(e){Array.prototype.slice.call(arguments,1).forEach(function(b){for(key in b)e[key]=b[key]});return e};a.prototype=i.fn={};return i}();window.Quo=Quo;"$$"in window||(window.$$=Quo);(function(a){function i(b){return b.filter(function(g){return g!==undefined&&g!==null})}var k=Object.prototype,e=[];a.toType=function(b){return k.toString.call(b).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};a.isOwnProperty=function(b,g){return k.hasOwnProperty.call(b,g)};a.getDomainSelector=function(b){var g=null,c=[1,9,11],f=a.toType(b);if(f==="array")g=i(b);else if(f==="string")g=a.query(document,b);else if(c.indexOf(b.nodeType)>=0||b===window)g=[b];return g};a.map=function(b,g){var c=[],f;if(a.toType(b)===
"array")for(f=0;f<b.length;f++){var d=g(b[f],f);d!=null&&c.push(d)}else for(f in b){d=g(b[f],f);d!=null&&c.push(d)}return c.length>0?[].concat.apply([],c):c};a.each=function(b,g){var c;if(a.toType(b)==="array")for(c=0;c<b.length;c++){if(g.call(b[c],c,b[c])===false)break}else for(c in b)if(g.call(b[c],c,b[c])===false)break;return b};a.mix=function(){for(var b={},g=0,c=arguments.length;g<c;g++){var f=arguments[g],d;for(d in f)if(a.isOwnProperty(f,d)&&f[d]!==undefined)b[d]=f[d]}return b};a.fn.forEach=
e.forEach;a.fn.indexOf=e.indexOf;a.fn.map=function(b){return a.map(this,function(g,c){return b.call(g,c,g)})};a.fn.instance=function(b){return this.map(function(){return this[b]})};a.fn.filter=function(b){return a([].filter.call(this,function(g){return g.parentNode&&a.query(g.parentNode,b).indexOf(g)>=0}))}})(Quo);(function(a){a.fn.attr=function(i,k){return a.toType(i)==="string"&&k===undefined?this[0].getAttribute(i):this.each(function(){this.setAttribute(i,k)})};a.fn.data=function(i,k){return this.attr("data-"+i,k)};a.fn.val=function(i){return a.toType(i)==="string"?this.each(function(){this.value=i}):this.length>0?this[0].value:null};a.fn.show=function(){return this.style("display","block")};a.fn.hide=function(){return this.style("display","none")};a.fn.height=function(){return this.offset().height};a.fn.width=
function(){return this.offset().width};a.fn.offset=function(){var i=this[0].getBoundingClientRect();return{left:i.left+window.pageXOffset,top:i.top+window.pageYOffset,width:i.width,height:i.height}};a.fn.remove=function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})}})(Quo);(function(a){var i=/WebKit\/([\d.]+)/,k={android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,blackberry:/(BlackBerry).*Version\/([\d.]+)/,webos:/(webOS|hpwOS)[\s\/]([\d.]+)/},e=null;a.isMobile=function(){e=e||b();return e.isMobile};a.environment=function(){return e=e||b()};a.isOnline=function(){return navigator.onLine};var b=function(){var g=navigator.userAgent,c={},f=g.match(i);c.browser=f?f[0]:g;var d;for(os in k)if(f=g.match(k[os])){d={name:os==="iphone"||
os==="ipad"?"ios":os,version:f[2].replace("_",".")};break}c.os=d;c.isMobile=c.os?true:false;c.screen={width:window.innerWidth,height:window.innerHeight};return c}})(Quo);(function(a){a.fn.text=function(i){return!i?this[0].textContent:this.each(function(){this.textContent=i})};a.fn.html=function(i){return a.toType(i)==="string"?this.each(function(){this.innerHTML=i}):this[0].innerHTML};a.fn.append=function(i){return this.each(function(){if(a.toType(i)==="string"){if(i){var k=document.createElement();k.innerHTML=i;this.appendChild(k.firstChild)}}else this.insertBefore(i)})};a.fn.prepend=function(i){return this.each(function(){if(a.toType(i)==="string")this.innerHTML=
i+this.innerHTML;else{var k=this.parentNode;k.insertBefore(i,k.firstChild)}})};a.fn.empty=function(){return this.each(function(){this.innerHTML=null})}})(Quo);(function(a){a.query=function(e,b){var g=document.querySelectorAll(b);return g=Array.prototype.slice.call(g)};a.fn.parent=function(e){var b=e?i(this):this.instance("parentNode");return k(b,e)};a.fn.siblings=function(e){var b=this.map(function(g,c){return Array.prototype.slice.call(c.parentNode.children).filter(function(f){return f!==c})});return k(b,e)};a.fn.children=function(e){var b=this.map(function(){return Array.prototype.slice.call(this.children)});return k(b,e)};a.fn.get=function(e){return e===
undefined?this:this[e]};a.fn.first=function(){return a(this[0])};a.fn.last=function(){return a(this[this.length-1])};a.fn.closest=function(e,b){var g=this[0],c=a(e);for(c.length||(g=null);g&&c.indexOf(g)<0;)g=g!==b&&g!==document&&g.parentNode;return a(g)};a.fn.each=function(e){this.forEach(function(b,g){e.call(b,g,b)});return this};var i=function(e){for(var b=[];e.length>0;)e=a.map(e,function(g){if((g=g.parentNode)&&g!==document&&b.indexOf(g)<0){b.push(g);return g}});return b},k=function(e,b){return b===
undefined?a(e):a(e).filter(b)}})(Quo);(function(a){function i(k,e){return e.split(/\s+/g).indexOf(k)>=0}a.fn.addClass=function(k){return this.each(function(){i(k,this.className)||(this.className+=" "+k)})};a.fn.removeClass=function(k){return this.each(function(){if(i(k,this.className))this.className=this.className.replace(k," ").replace(/\s+/gi," ")})};a.fn.toggleClass=function(k){return this.each(function(){if(i(k,this.className))this.className=this.className.replace(k," ");else this.className+=" "+k})};a.fn.hasClass=function(k){return i(k,
this[0].className)};a.fn.style=function(k,e){return!e?this[0].style[k]||document.defaultView.getComputedStyle(this[0],"")[k]:this.each(function(){this.style[k]=e})}})(Quo);(function(a){function i(f,d){if(d.contentType)d.headers["Content-Type"]=d.contentType;if(d.dataType)d.headers.Accept=g[d.dataType];for(header in d.headers)f.setRequestHeader(header,d.headers[header])}function k(f,d){f.onreadystatechange={};f.abort();d.error.call(d.context,"QuoJS \u00bb $$.ajax : timeout exceeded",f,d)}function e(f,d){var h=f.responseText;if(h)if(d.dataType===b.MIME)try{h=JSON.parse(h)}catch(j){h=j;d.error.call(d.context,"Parse Error",f,d)}else if(d.dataType==="xml")h=f.responseXML;
return h}var b={TYPE:"GET",MIME:"json"},g={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},c=0;a.ajaxSettings={type:b.TYPE,async:true,success:{},error:{},context:null,dataType:b.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:false,timeout:0};a.ajax=function(f){var d=a.mix(a.ajaxSettings,f);if(/=\?/.test(d.url))return a.jsonp(d);var h=d.xhr();h.onreadystatechange=function(){if(h.readyState===
4){clearTimeout(j);if(h.status===200||h.status===0){if(d.async){var l=e(h,d);d.success.call(d.context,l,h)}}else d.error.call(d.context,"QuoJS \u00bb $$.ajax",h,d)}};h.open(d.type,d.url,d.async);i(h,d);if(d.timeout>0)var j=setTimeout(function(){k(h,d)},d.timeout);h.send(d.data);return d.async?h:e(h,d)};a.jsonp=function(f){var d="jsonp"+ ++c,h=document.createElement("script"),j={abort:function(){a(h).remove();if(d in window)window[d]={}}},l;window[d]=function(n){clearTimeout(l);a(h).remove();delete window[d];
f.success.call(f.context,n,j)};h.src=f.url.replace(/=\?/,"="+d);a("head").append(h);if(f.timeout>0)l=setTimeout(function(){k(j,f)},f.timeout);return j};a.get=function(f,d,h,j){f+=a.serializeParameters(d);return a.ajax({url:f,success:h,dataType:j})};a.post=function(f,d,h,j){return a.ajax({type:"POST",url:f,data:d,success:h,dataType:j,contentType:"application/x-www-form-urlencoded"})};a.json=function(f,d,h){f+=a.serializeParameters(d);return a.ajax({url:f,success:h,dataType:b.MIME})};a.serializeParameters=
function(f){var d="?",h;for(h in f)if(f.hasOwnProperty(h)){if(d!=="?")d+="&";d+=h+"="+f[h]}return d==="?"?"":d}})(Quo);(function(a){var i={touch:"touchstart",tap:"tap"},k=/complete|loaded|interactive/;["touch","tap"].forEach(function(e){a.fn[e]=function(b){a(document.body).delegate(this.selector,i[e],b);return this}});a.fn.on=function(e,b,g){return b===undefined||a.toType(b)==="function"?this.bind(e,b):this.delegate(b,e,g)};a.fn.off=function(e,b,g){return b===undefined||a.toType(b)==="function"?this.unbind(e,b):this.undelegate(b,e,g)};a.fn.ready=function(e){k.test(document.readyState)?e(a):document.addEventListener("DOMContentLoaded",
function(){e(a)},false);return this}})(Quo);(function(a){function i(j,l,n,o,m){l=(a.isMobile()?l:h[l])||l;var p=j._id||(j._id=c++);p=f[p]||(f[p]=[]);m=m&&m(n,l);l={event:l,callback:n,selector:o,proxy:e(m,n,j),delegate:m,index:p.length};p.push(l);j.addEventListener(l.event,l.proxy,false)}function k(j,l,n,o){l=(a.isMobile()?l:h[l])||l;var m=j._id||(j._id=c++);b(m,l,n,o).forEach(function(p){delete f[m][p.index];j.removeEventListener(p.event,p.proxy,false)})}function e(j,l,n){l=j||l;return function(o){var m=l.apply(n,[o].concat(o.data));m===false&&
o.preventDefault();return m}}function b(j,l,n,o){return(f[j]||[]).filter(function(m){return m&&(!l||m.event==l)&&(!n||m.fn==n)&&(!o||m.selector==o)})}function g(j){var l=a.extend({originalEvent:j},j);a.each(d,function(n,o){l[n]=function(){this[o]=function(){return true};return j[n].apply(j,arguments)};l[o]=function(){return false}});return l}var c=1,f={},d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},h={touchstart:"mousedown",
touchmove:"mousemove",touchend:"mouseup",tap:"click",doubletap:"dblclick",orientationchange:"resize"};a.Event=function(j){var l=document.createEvent("Events");l.initEvent(j,true,true,null,null,null,null,null,null,null,null,null,null,null,null);return l};a.fn.bind=function(j,l){return this.each(function(){i(this,j,l)})};a.fn.unbind=function(j,l){return this.each(function(){k(this,j,l)})};a.fn.delegate=function(j,l,n){return this.each(function(o,m){i(m,l,n,j,function(p){return function(r){var q=a(r.target).closest(j,
m).get(0);if(q){var s=a.extend(g(r),{currentTarget:q,liveFired:m});return p.apply(q,[s].concat([].slice.call(arguments,1)))}}})})};a.fn.undelegate=function(j,l,n){return this.each(function(){k(this,l,n,j)})};a.fn.trigger=function(j){if(a.toType(j)==="string")j=a.Event(j);return this.each(function(){this.dispatchEvent(j)})}})(Quo);(function(a){function i(h){var j=Date.now(),l=j-(c.last||j);h=a.isMobile()?h.touches[0]:h;f&&clearTimeout(f);c={el:a("tagName"in h.target?h.target:h.target.parentNode),x1:h.pageX,y1:h.pageY,isDoubleTap:l>0&&l<=250?true:false,last:j};setTimeout(g,d)}function k(h){h=a.isMobile()?h.touches[0]:h;c.x2=h.pageX;c.y2=h.pageY}function e(){if(c.isDoubleTap){c.el.trigger("doubleTap");c={}}else if(c.x2>0||c.y2>0){(Math.abs(c.x1-c.x2)>30||Math.abs(c.y1-c.y2)>30)&&c.el.trigger("swipe")&&c.el.trigger("swipe"+(Math.abs(c.x1-
c.x2)>=Math.abs(c.y1-c.y2)?c.x1-c.x2>0?"Left":"Right":c.y1-c.y2>0?"Up":"Down"));c.x1=c.x2=c.y1=c.y2=c.last=0;c={}}else{c.el!==undefined&&c.el.trigger("tap");f=setTimeout(function(){f=null;c={}},250)}}function b(){c={};clearTimeout(f)}function g(){if(c.last&&Date.now()-c.last>=d){c.el.trigger("longTap");c={}}}var c={},f,d=750;["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","longTap"].forEach(function(h){a.fn[h]=function(j){return this.on(h,j)}});a(document).ready(function(){var h=
a(document.body);h.bind("touchstart",i);h.bind("touchmove",k);h.bind("touchend",e);h.bind("touchcancel",b)})})(Quo);
