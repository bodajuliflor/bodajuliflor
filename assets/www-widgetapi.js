(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.P=b.prototype}
function ra(){this.A=!1;this.m=null;this.j=void 0;this.i=1;this.s=this.o=0;this.I=this.l=null}
function ta(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
ra.prototype.D=function(a){this.j=a};
function va(a,b){a.l={Ua:b,Za:!0};a.i=a.o||a.s}
ra.prototype.return=function(a){this.l={return:a};this.i=this.s};
function w(a,b,c){a.i=c;return{value:b}}
ra.prototype.v=function(a){this.i=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.s=c)}
function xa(a,b){a.i=b;a.o=0}
function ya(a){a.o=0;var b=a.l.Ua;a.l=null;return b}
function Aa(a){a.I=[a.l];a.o=0;a.s=0}
function Ba(a){var b=a.I.splice(0)[0];(b=a.l=a.l||b)?b.Za?a.i=a.o||a.s:void 0!=b.v&&a.s<b.v?(a.i=b.v,a.l=null):a.i=a.s:a.i=0}
function Ca(a){this.i=new ra;this.j=a}
function Da(a,b){ta(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.A=!1,e;var f=e.value}catch(g){return a.i.m=null,va(a.i,g),Fa(a)}a.i.m=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.A=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,va(a.i,c)}a.i.A=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Za)throw b.Ua;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){ta(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.D):(a.i.D(b),b=Fa(a));return b};
this.throw=function(b){ta(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.D):(va(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.A=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.s()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.s=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Ca),reject:g(this.s)}};
b.prototype.Ca=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.jb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Ba(g):this.o(g)}};
b.prototype.Ba=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.kb(h,g):this.o(g)};
b.prototype.s=function(g){this.D(2,g)};
b.prototype.o=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.Da();this.I()};
b.prototype.Da=function(){var g=this;e(function(){if(g.X()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.X=function(){if(this.A)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.I=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.jb=function(g){var h=this.m();g.ta(h.resolve,h.reject)};
b.prototype.kb=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(y){try{l(t(y))}catch(z){m(z)}}:q}
var l,m,p=new b(function(t,q){l=t;m=q});
this.ta(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ta=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ta(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(y){return function(z){t[y]=z;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).ta(p(t.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||qa});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b,c){a=a.split(".");c=c||A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Wb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function Za(){}
function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},db=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function eb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){}
function sb(a){return new rb(tb,a)}
var tb={};sb("");var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function F(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")||F("Silk")}
;var Mb={};function Nb(a){this.i=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.i.toString()};var Ob=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(a){return a?decodeURI(a):a}
function Qb(a){return Pb(a.match(Ob)[3]||null)}
function Rb(a){var b=a.match(Ob);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Tb(a){var b=[],c;for(c in a)Sb(c,a[c],b);return b.join("&")}
var Ub=/#|$/;function Vb(a,b){var c=a.search(Ub);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function Wb(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Xb(a){Xb[" "](a);return a}
Xb[" "]=function(){};var bc=F("Opera"),cc=F("Trident")||F("MSIE"),dc=F("Edge"),ec=F("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),fc=-1!=Kb().toLowerCase().indexOf("webkit")&&!F("Edge");function gc(){var a=A.document;return a?a.documentMode:void 0}
var hc;a:{var ic="",jc=function(){var a=Kb();if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(dc)return/Edge\/([\d\.]+)/.exec(a);if(cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jc&&(ic=jc?jc[1]:"");if(cc){var kc=gc();if(null!=kc&&kc>parseFloat(ic)){hc=String(kc);break a}}hc=ic}var lc=hc,mc;if(A.document&&cc){var nc=gc();mc=nc?nc:parseInt(lc,10)||void 0}else mc=void 0;var oc=mc;var pc=Wb()||F("iPod"),qc=F("iPad");!F("Android")||Lb();Lb();var rc=F("Safari")&&!(Lb()||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(Wb()||F("iPad")||F("iPod"));var sc={},tc=null;
function uc(a,b){Ma(a);void 0===b&&(b=0);if(!tc){tc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));sc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===tc[h]&&(tc[h]=g)}}}b=sc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var vc="undefined"!==typeof Uint8Array,xc={};var yc;function zc(a){if(xc!==xc)throw Error("illegal external caller");this.Pa=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
zc.prototype.isEmpty=function(){return null==this.Pa};var Ac="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Bc(a,b){Object.isFrozen(a)||(Ac?a[Ac]|=b:void 0!==a.N?a.N|=b:Object.defineProperties(a,{N:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Cc(a,b){Object.isExtensible(a)&&(Ac?a[Ac]&&(a[Ac]&=~b):void 0!==a.N&&(a.N&=~b))}
function Dc(a){var b;Ac?b=a[Ac]:b=a.N;return null==b?0:b}
function Ec(a,b){Ac?a[Ac]=b:void 0!==a.N?a.N=b:Object.defineProperties(a,{N:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Fc(a){Bc(a,1);return a}
function G(a){return a?!!(Dc(a)&2):!1}
function Gc(a){Bc(a,16);return a}
function Hc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");Cc(a,16)}
function Ic(a,b){b?Bc(a,8):Cc(a,8)}
function Jc(a,b){Ec(b,(Dc(a)|0)&-51)}
;var Kc={};function Lc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Pc,Qc=Object.freeze(Fc([]));function Rc(a){if(G(a.u))throw Error("Cannot mutate an immutable Message");}
var Sc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Tc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Uc(a){return a.displayName||a.name||"unknown type name"}
function Vc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Uc(b)+" but got "+(a&&Uc(a.constructor)));return a}
;function Wc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(vc&&null!=a&&a instanceof Uint8Array)return uc(a);if(a instanceof zc){var b=a.Pa;return null==b?"":"string"===typeof b?b:a.Pa=uc(b)}}}return a}
;function Xc(a,b,c){if(null!=a){if(Array.isArray(a))a=Yc(a,b,c);else if(Lc(a)){var d={},e;for(e in a)d[e]=Xc(a[e],b,c);a=d}else a=b(a);return a}}
function Yc(a,b,c){var d=Array.prototype.slice.call(a);c(a,d);for(a=0;a<d.length;a++)d[a]=Xc(d[a],b,c);return d}
function Zc(a){if(a.Ja===Kc)return a.toJSON();a=Wc(a);return Array.isArray(a)?Yc(a,Zc,$c):a}
function ad(a){if(!a)return a;if("object"===typeof a){if(vc&&null!=a&&a instanceof Uint8Array)return new Uint8Array(a);if(a.Ja===Kc)return a.clone()}return a}
function $c(){}
;function bd(a){return a.i||(a.i=a.u[a.m+a.l]={})}
function cd(a,b,c){return-1===b?null:b>=a.m?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.u[b+a.l]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Rc(a);a.o&&(a.o=void 0);if(b>=a.m||d)return bd(a)[b]=c,a;void 0!==a.i&&a.m>=a.u.length?(d=a.u.length-1,e=b+a.l,e>=d?(a.u[d]=void 0,a.u[e]=c,a.u.push(a.i)):a.u[e]=c):a.u[b+a.l]=c;void 0!==a.i&&b in a.i&&delete a.i[b];return a}
function dd(a,b,c,d){var e=cd(a,b,d);Array.isArray(e)?e&&Dc(e)&1||Fc(e):e=Qc;if(G(a.u))c&1||(Bc(e,2),Object.freeze(e));else if(e===Qc||G(e))e=Fc(Array.prototype.slice.call(e)),I(a,b,e,d);return e}
function ed(a,b,c,d){Rc(a);(c=fd(a,c))&&c!==b&&null!=d&&I(a,c,void 0,!1);return I(a,b,d)}
function fd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=cd(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function gd(a,b,c){var d=void 0===d?!1:d;var e=cd(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.Ja!==Kc?f?new b(e):void 0:e;g!==e&&null!=g&&(I(a,c,g,d,!0),Bc(g.u,Dc(a.u)&-33));b=g;if(null==b)return b;G(b.u)&&!G(a.u)&&(b=b.Oa(),I(a,c,b,d));return b}
function hd(a,b,c,d,e){e=void 0===e?!0:e;a.j||(a.j={});var f=a.j[c];d=dd(a,c,2,d);var g=!!(Dc(a.u)&16),h=G(d);h=G(a.u)||h;if(!f){f=[];for(var k=h,l=0;l<d.length;l++){var m=d[l];k=k||G(m);var p=b,t=g,q=!1;q=void 0===q?!1:q;t=void 0===t?!1:t;m=Array.isArray(m)?new p(t?Gc(m):m):q?new p:void 0;void 0!==m&&(f.push(m),h&&Bc(m.u,2))}a.j[c]=f;Ic(d,!k)}b=h||e;e=G(f);b&&!e&&(Object.isFrozen(f)&&(a.j[c]=f=f.slice()),Bc(f,2),Object.freeze(f));!b&&e&&(a.j[c]=f=f.slice());return f}
function J(a,b,c,d){Rc(a);null!=d?Vc(d,b):d=void 0;return I(a,c,d)}
function id(a,b,c,d,e){Rc(a);null!=e?Vc(e,b):e=void 0;ed(a,c,d,e)}
function jd(a,b,c,d){Rc(a);if(null!=d){var e=Fc([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Vc(d[g],b).u,f=f||G(e[g]);a.j||(a.j={});a.j[c]=d;Ic(e,!f)}else a.j&&(a.j[c]=void 0),e=Qc;return I(a,c,e)}
function kd(a,b,c,d){Rc(a);var e=hd(a,c,b,void 0,!1);c=null!=d?Vc(d,c):new c;a=dd(a,b,2);e.push(c);a.push(c.u);G(c.u)&&Ic(a,!1)}
function ld(a,b){return cd(a,b)}
function md(a,b){a=cd(a,b);return null==a?"":a}
;function nd(a,b,c){a||(a=od);od=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j;a?Dc(a)&16&&Bc(a,32):(a=f?[f]:[],Bc(a,48));e&&0<a.length&&Lc(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.l=(f?0:-1)-d;this.j=void 0;this.u=a;a:{f=this.u.length;d=f-1;if(f&&(f=this.u[d],Lc(f))){this.i=f;b=Object.keys(f);0<b.length&&db(b,isNaN)?this.m=Number.MAX_VALUE:this.m=d-this.l;break a}void 0!==b&&-1<b?(this.m=Math.max(b,d+1-this.l),this.i=void 0):this.m=Number.MAX_VALUE}if(!e&&this.i&&"g"in this.i)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c)for(e=0;e<c.length;e++)b=c[e],b<this.m?(b+=this.l,(d=this.u[b])?Array.isArray(d)&&Fc(d):this.u[b]=Qc):(d=bd(this),(f=d[b])?Array.isArray(f)&&Fc(f):d[b]=Qc)}
n=nd.prototype;n.toJSON=function(){var a=this.u;return Pc?a:Yc(a,Zc,$c)};
function pd(a){Pc=!0;try{return JSON.stringify(a.toJSON(),qd)}finally{Pc=!1}}
n.clone=function(){var a=Yc(this.u,ad,Jc);Gc(a);od=a;a=new this.constructor(a);od=null;rd(a,this);return a};
n.isMutable=function(){return!G(this.u)};
n.Ja=Kc;n.toString=function(){return this.u.toString()};
function qd(a,b){return Wc(b)}
function rd(a,b){b.s&&(a.s=b.s.slice());var c=b.j;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;f=G(h.u);var l=hd(h,e[0].constructor,g,k,f);g=dd(h,g,0,void 0===k?!1:k);if(!(h=f)&&(h=g)){if(!g)throw Error("cannot check mutability state of non-array");h=!(Dc(g)&8)}if(h){for(h=0;h<l.length;h++)(k=l[h])&&G(k.u)&&!f&&(l[h]=l[h].Oa(),g[h]=l[h].u);Ic(g,!0)}f=l;for(l=0;l<Math.min(f.length,e.length);l++)rd(f[l],e[l])}}else throw Error("unexpected object: type: "+
La(e)+": "+e);}}}}
var od;function sd(a,b,c,d,e,f){(a=a.j&&a.j[c])?(e=f.Fa?Fc(a.slice()):a,jd(b,0<e.length?e[0].constructor:void 0,c,e)):(vc&&d instanceof Uint8Array?e=d.length?new zc(new Uint8Array(d)):yc||(yc=new zc(null)):(Array.isArray(d)&&(e?Bc(d,2):d&&Dc(d)&1&&f.Fa?(e=Array.prototype.slice.call(d),Ec(e,(Dc(d)|0)&-51),d=e):Hc(d)),e=d),I(b,c,e))}
;function td(){nd.apply(this,arguments)}
v(td,nd);td.prototype.Oa=function(){return this};
if(Sc){var ud={};Object.defineProperties(td,(ud[Symbol.hasInstance]=Tc(function(){throw Error(void 0);}),ud))};function L(){td.apply(this,arguments)}
v(L,td);L.prototype.Oa=function(){if(G(this.u)){var a={Fa:!0};var b=G(this.u);if(b&&!a.Fa)throw Error("copyRepeatedFields must be true for frozen messages");b||Hc(this.u);var c=new this.constructor;this.s&&(c.s=this.s.slice());for(var d=this.u,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Lc(f))for(var g in f){var h=+g;Number.isNaN(h)?bd(c)[g]=f[g]:sd(this,c,h,f[g],b,a)}else sd(this,c,e-this.l,f,b,a)}c.o=this;a=c}else a=this;return a};
if(Sc){var vd={};Object.defineProperties(L,(vd[Symbol.hasInstance]=Tc(Object[Symbol.hasInstance]),vd))};var wd=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");function xd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=yd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,zd[c])c=zd[c];else{c=String(c);if(!zd[c]){var f=/function\s+([^\(]+)/m.exec(c);zd[c]=f?f[1]:"[Anonymous]"}c=zd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function yd(a,b){b||(b={});b[Ad(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ad(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=yd(a,b));return c}
function Ad(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var zd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Bd;try{new URL("s://g"),Bd=!0}catch(a){Bd=!1}var Cd=Bd;function Dd(a,b){a.removeAttribute("srcdoc");if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.i:(La(b),b="type_error:SafeUrl");else{b:if(Cd){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Ed(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Ed.prototype;n.clone=function(){return new Ed(this.x,this.y)};
n.equals=function(a){return a instanceof Ed&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Fd(a,b){this.width=a;this.height=b}
n=Fd.prototype;n.clone=function(){return new Fd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Gd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Hd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Id(a){var b=Jd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Kd(){var a=[];Id(function(b){a.push(b)});
return a}
var Jd={Eb:"allow-forms",Fb:"allow-modals",Gb:"allow-orientation-lock",Hb:"allow-pointer-lock",Ib:"allow-popups",Jb:"allow-popups-to-escape-sandbox",Kb:"allow-presentation",Lb:"allow-same-origin",Mb:"allow-scripts",Nb:"allow-top-navigation",Ob:"allow-top-navigation-by-user-activation"},Ld=ab(function(){return Kd()});
function Md(){var a=Nd(),b={};E(Ld(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Nd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Od(a){this.isValid=a}
function Pd(a){return new Od(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Qd=[Pd("data"),Pd("http"),Pd("https"),Pd("mailto"),Pd("ftp"),new Od(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Rd(a,b){b=void 0===b?Qd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Od&&d.isValid(a))return new Hb(a,Ib)}}
function Sd(a){var b=void 0===b?Qd:b;return Rd(a,b)||Jb}
;var Td=(new Date).getTime();function Ud(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Vd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Vd);function Wd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],z=e[2],H=e[3],K=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var M=H^y&(z^H);var N=1518500249}else M=y^z^H,N=1859775393;else 60>q?(M=y&z|H&(y|z),N=2400959708):(M=y^z^H,N=3395469782);M=((p<<5|p>>>27)&4294967295)+M+K+N+t[q]&4294967295;K=H;H=z;z=(y<<30|y>>>2)&4294967295;y=p;p=M}e[0]=e[0]+p&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+K&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],y=0,z=p.length;y<z;++y)q.push(p.charCodeAt(y));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<t;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var y=24;0<=y;y-=8)p[t++]=e[q]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,nb:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function Zd(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,$d(Ud(d),a,c||null)].join(" "):null}
function $d(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),ae(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=ae(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ae(a){var b=Wd();b.update(a);return b.nb().toLowerCase()}
;var be={};function ce(a){this.i=a||{cookie:""}}
n=ce.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ha:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.dc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ha}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ha:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var de=new ce("undefined"==typeof document?null:document);function ee(a){return!!be.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function fe(a,b,c,d){(a=A[a])||(a=(new ce(document)).get(b));return a?Zd(a,c,d):null}
function ge(a){var b=void 0===b?!1:b;var c=Ud(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;ee(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new ce(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");ee(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new ce(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Zd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ee(b)&&((b=fe("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=fe("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function he(){this.l=this.l;this.s=this.s}
he.prototype.l=!1;he.prototype.dispose=function(){this.l||(this.l=!0,this.ca())};
he.prototype.ca=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function ie(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
ie.prototype.stopPropagation=function(){this.l=!0};
ie.prototype.preventDefault=function(){this.defaultPrevented=!0};var je=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ke(a,b){ie.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
D(ke,ie);var le={2:"touch",3:"pen",4:"mouse"};
ke.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(ec){a:{try{Xb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:le[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ke.P.preventDefault.call(this)};
ke.prototype.stopPropagation=function(){ke.P.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ke.prototype.preventDefault=function(){ke.P.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var me="closure_listenable_"+(1E6*Math.random()|0);var ne=0;function oe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.xa=e;this.key=++ne;this.ja=this.sa=!1}
function pe(a){a.ja=!0;a.listener=null;a.proxy=null;a.src=null;a.xa=null}
;function qe(a){this.src=a;this.listeners={};this.i=0}
qe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=re(a,b,d,e);-1<g?(b=a[g],c||(b.sa=!1)):(b=new oe(b,this.src,f,!!d,e),b.sa=c,a.push(b));return b};
qe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=re(e,b,c,d);return-1<b?(pe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function se(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(pe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function re(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ja&&f.listener==b&&f.capture==!!c&&f.xa==d)return e}return-1}
;var te="closure_lm_"+(1E6*Math.random()|0),ue={},ve=0;function we(a,b,c,d,e){if(d&&d.once)xe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)we(a,b[f],c,d,e);else c=ye(c),a&&a[me]?a.Y(b,c,Na(d)?!!d.capture:!!d,e):ze(a,b,c,!1,d,e)}
function ze(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=Ae(a);h||(a[te]=h=new qe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Be();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)je||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ce(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ve++}}
function Be(){function a(c){return b.call(a.src,a.listener,c)}
var b=De;return a}
function xe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)xe(a,b[f],c,d,e);else c=ye(c),a&&a[me]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):ze(a,b,c,!0,d,e)}
function Ee(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ee(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=ye(c),a&&a[me])?a.i.remove(String(b),c,d,e):a&&(a=Ae(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=re(b,c,d,e)),(c=-1<a?b[a]:null)&&Fe(c))}
function Fe(a){if("number"!==typeof a&&a&&!a.ja){var b=a.src;if(b&&b[me])se(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ce(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ve--;(c=Ae(b))?(se(c,a),0==c.i&&(c.src=null,b[te]=null)):pe(a)}}}
function Ce(a){return a in ue?ue[a]:ue[a]="on"+a}
function De(a,b){if(a.ja)a=!0;else{b=new ke(b,this);var c=a.listener,d=a.xa||a.src;a.sa&&Fe(a);a=c.call(d,b)}return a}
function Ae(a){a=a[te];return a instanceof qe?a:null}
var Ge="__closure_events_fn_"+(1E9*Math.random()>>>0);function ye(a){if("function"===typeof a)return a;a[Ge]||(a[Ge]=function(b){return a.handleEvent(b)});
return a[Ge]}
;function He(){he.call(this);this.i=new qe(this);this.X=this;this.D=null}
D(He,he);He.prototype[me]=!0;He.prototype.addEventListener=function(a,b,c,d){we(this,a,b,c,d)};
He.prototype.removeEventListener=function(a,b,c,d){Ee(this,a,b,c,d)};
function Ie(a,b){var c=a.D;if(c){var d=[];for(var e=1;c;c=c.D)d.push(c),++e}a=a.X;c=b.type||b;"string"===typeof b?b=new ie(b,a):b instanceof ie?b.target=b.target||a:(e=b,b=new ie(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Je(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Je(g,c,!0,b)&&e,b.l||(e=Je(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Je(g,c,!1,b)&&e}
He.prototype.ca=function(){He.P.ca.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,pe(d[e]);delete a.listeners[c];a.i--}}this.D=null};
He.prototype.Y=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Je(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ja&&g.capture==c){var h=g.listener,k=g.xa||g.src;g.sa&&se(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ke(a){He.call(this);var b=this;this.I=this.m=0;this.K=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
aa:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return w(e,Le(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.I||Me(this)}
v(Ke,He);function Ne(){var a=Oe;Ke.i||(Ke.i=new Ke(a));return Ke.i}
Ke.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.K.aa(this.I);delete Ke.i};
Ke.prototype.G=function(){return this.j};
function Me(a){a.I=a.K.M(function(){var b;return x(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.v(3):w(c,Le(a),3):w(c,Le(a),3);Me(a);c.i=0})},3E4)}
function Le(a,b){return a.A?a.A:a.A=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.m=a.K.M(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.A=void 0;a.m&&(a.K.aa(a.m),a.m=0);g!==a.j&&(a.j=g,a.j?Ie(a,"networkstatus-online"):Ie(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:ya(h),g=!1,h.v(3)}})})}
;function Pe(){this.data_=[];this.i=-1}
Pe.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Pe.prototype.get=function(a){return!!this.data_[a]};
function Qe(a){-1===a.i&&(a.i=cb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Re(a){L.call(this,a,-1,Se)}
v(Re,L);function Te(a,b){return I(a,2,b)}
function Ue(a,b){return I(a,3,b)}
function Ve(a,b){return I(a,4,b)}
function We(a,b){return I(a,5,b)}
function Xe(a,b){return I(a,9,b)}
function Ye(a,b){return jd(a,Ze,10,b)}
function $e(a,b){return I(a,11,b)}
function af(a,b){return I(a,1,b)}
function bf(a,b){return I(a,7,b)}
function Ze(a){L.call(this,a)}
v(Ze,L);var Se=[10,6];var cf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function df(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function ef(){var a=window,b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;var d=df(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(cf).then(function(e){null!=d.uach||(d.uach=e);return e});
return d.uach_promise=a}
function ff(a){var b;return $e(Ye(We(Te(af(Ve(bf(Xe(Ue(new Re,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ze;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function gf(){var a,b;return null!=(b=null==(a=ef())?void 0:a.then(function(c){return ff(c)}))?b:null}
;function hf(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
hf.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function jf(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var kf;function lf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Gd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Sa;c.Sa=null;e()}};
return function(e){d.next={Sa:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function mf(a){A.setTimeout(function(){throw a;},0)}
;function nf(){this.j=this.i=null}
nf.prototype.add=function(a,b){var c=of.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
nf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var of=new hf(function(){return new pf},function(a){return a.reset()});
function pf(){this.next=this.scope=this.i=null}
pf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
pf.prototype.reset=function(){this.next=this.scope=this.i=null};var qf,rf=!1,sf=new nf;function tf(a,b){qf||uf();rf||(qf(),rf=!0);sf.add(a,b)}
function uf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);qf=function(){a.then(vf)}}else qf=function(){var b=vf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!F("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(kf||(kf=lf()),kf(b)):A.setImmediate(b)}}
function vf(){for(var a;a=sf.remove();){try{a.i.call(a.scope)}catch(b){mf(b)}jf(of,a)}rf=!1}
;function wf(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
wf.prototype[Symbol.iterator]=function(){return this};
wf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function xf(a,b){return new wf(a,b)}
;function yf(){this.blockSize=-1}
;function zf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
D(zf,yf);zf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function Af(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
zf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)Af(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Af(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Af(this,e);f=0;break}}this.j=f;this.m+=b}};
zf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;Af(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Bf(){}
Bf.prototype.next=function(){return Cf};
var Cf={done:!0,value:void 0};function Df(a){return{value:a,done:!1}}
Bf.prototype.L=function(){return this};function Ef(a){if(a instanceof Ff||a instanceof Gf||a instanceof Hf)return a;if("function"==typeof a.next)return new Ff(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ff(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new Ff(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function Ff(a){this.j=a}
Ff.prototype.L=function(){return new Gf(this.j())};
Ff.prototype[Symbol.iterator]=function(){return new Hf(this.j())};
Ff.prototype.i=function(){return new Hf(this.j())};
function Gf(a){this.j=a}
v(Gf,Bf);Gf.prototype.next=function(){return this.j.next()};
Gf.prototype[Symbol.iterator]=function(){return new Hf(this.j)};
Gf.prototype.i=function(){return new Hf(this.j)};
function Hf(a){Ff.call(this,function(){return a});
this.l=a}
v(Hf,Ff);Hf.prototype.next=function(){return this.l.next()};function If(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof If)for(c=Jf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Jf(a){Kf(a);return a.i.concat()}
n=If.prototype;n.has=function(a){return Lf(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Mf;Kf(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Mf(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Lf(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&Kf(this),!0):!1};
function Kf(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Lf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Lf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Lf(this.j,a)?this.j[a]:b};
n.set=function(a,b){Lf(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Jf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new If(this)};
n.keys=function(){return Ef(this.L(!0)).i()};
n.values=function(){return Ef(this.L(!1)).i()};
n.entries=function(){var a=this;return xf(this.keys(),function(b){return[b,a.get(b)]})};
n.L=function(a){Kf(this);var b=0,c=this.l,d=this,e=new Bf;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Cf;var f=d.i[b++];return Df(a?f:d.j[f])};
return e};
function Lf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Nf=A.JSON.stringify;function Of(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Pf(a){this.i=0;this.A=void 0;this.m=this.j=this.l=null;this.s=this.o=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){Qf(b,2,c)},function(c){Qf(b,3,c)})}catch(c){Qf(this,3,c)}}
function Rf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Rf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Sf=new hf(function(){return new Rf},function(a){a.reset()});
function Tf(a,b,c){var d=Sf.get();d.j=a;d.onRejected=b;d.context=c;return d}
Pf.prototype.then=function(a,b,c){return Uf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Pf.prototype.$goog_Thenable=!0;Pf.prototype.cancel=function(a){if(0==this.i){var b=new Vf(a);tf(function(){sg(this,b)},this)}};
function sg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?sg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):tg(c),ug(c,e,3,b)))}a.l=null}else Qf(a,3,b)}
function vg(a,b){a.j||2!=a.i&&3!=a.i||wg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Uf(a,b,c,d){var e=Tf(null,null,null);e.i=new Pf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Vf?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;vg(a,e);return e.i}
Pf.prototype.I=function(a){this.i=0;Qf(this,2,a)};
Pf.prototype.X=function(a){this.i=0;Qf(this,3,a)};
function Qf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.I,f=a.X;if(d instanceof Pf){vg(d,Tf(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if("function"===typeof k){xg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.i=b,a.l=null,wg(a),3!=b||c instanceof Vf||yg(a,c))}}
function xg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function wg(a){a.o||(a.o=!0,tf(a.D,a))}
function tg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
Pf.prototype.D=function(){for(var a;a=tg(this);)ug(this,a,this.i,this.A);this.o=!1};
function ug(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.s;a=a.l)a.s=!1;if(b.i)b.i.l=null,zg(b,c,d);else try{b.l?b.j.call(b.context):zg(b,c,d)}catch(e){Ag.call(null,e)}jf(Sf,b)}
function zg(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function yg(a,b){a.s=!0;tf(function(){a.s&&Ag.call(null,b)})}
var Ag=mf;function Vf(a){Xa.call(this,a)}
D(Vf,Xa);Vf.prototype.name="cancel";function O(a){he.call(this);this.A=1;this.m=[];this.o=0;this.i=[];this.j={};this.D=!!a}
D(O,he);n=O.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.A;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.A=e+3;d.push(e);return e};
function Bg(a,b,c){var d=Cg;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.na(a)}}
n.na=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.o?(this.m.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.ea=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];Dg(this.i[g+1],this.i[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.na(c)}}return 0!=e}return!1};
function Dg(a,b,c){tf(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.na,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.ca=function(){O.P.ca.call(this);this.clear();this.m.length=0};function Eg(a){this.i=a}
Eg.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Nf(b))};
Eg.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Eg.prototype.remove=function(a){this.i.remove(a)};function Fg(a){this.i=a}
D(Fg,Eg);function Gg(a){this.data=a}
function Hg(a){return void 0===a||a instanceof Gg?a:new Gg(a)}
Fg.prototype.set=function(a,b){Fg.P.set.call(this,a,Hg(b))};
Fg.prototype.j=function(a){a=Fg.P.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Fg.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ig(a){this.i=a}
D(Ig,Fg);Ig.prototype.set=function(a,b,c){if(b=Hg(b)){if(c){if(c<Date.now()){Ig.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ig.P.set.call(this,a,b)};
Ig.prototype.j=function(a){var b=Ig.P.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ig.prototype.remove.call(this,a);else return b}};function Jg(){}
;function Kg(){}
D(Kg,Jg);Kg.prototype[Symbol.iterator]=function(){return Ef(this.L(!0)).i()};
Kg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Lg(a){this.i=a}
D(Lg,Kg);n=Lg.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.L=function(a){var b=0,c=this.i,d=new Bf;d.next=function(){if(b>=c.length)return Cf;var e=c.key(b++);if(a)return Df(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Df(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Mg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
D(Mg,Lg);function Ng(a,b){this.j=a;this.i=null;var c;if(c=cc)c=!(9<=Number(oc));if(c){Og||(Og=new If);this.i=Og.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Og.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
D(Ng,Kg);var Pg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Og=null;function Qg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Pg[b]})}
n=Ng.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Qg(a),b);Rg(this)};
n.get=function(a){a=this.i.getAttribute(Qg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Qg(a));Rg(this)};
n.L=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Bf;d.next=function(){if(b>=c.length)return Cf;var e=c[b++];if(a)return Df(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Df(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Rg(this)};
function Rg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Sg(a,b){this.j=a;this.i=b+"::"}
D(Sg,Kg);Sg.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Sg.prototype.get=function(a){return this.j.get(this.i+a)};
Sg.prototype.remove=function(a){this.j.remove(this.i+a)};
Sg.prototype.L=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Bf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Df(a?e.slice(c.i.length):c.j.get(e))};
return d};function Tg(a){L.call(this,a)}
v(Tg,L);Tg.prototype.getKey=function(){return cd(this,1)};
Tg.prototype.U=function(){return ld(this,2===fd(this,Ug)?2:-1)};
Tg.prototype.setValue=function(a){return ed(this,2,Ug,a)};
var Ug=[2,3,4,5,6];function Vg(a){L.call(this,a)}
v(Vg,L);function Wg(a){L.call(this,a)}
v(Wg,L);function Xg(a){L.call(this,a,-1,Yg)}
v(Xg,L);var Yg=[2];function Zg(a){L.call(this,a,-1,$g)}
v(Zg,L);Zg.prototype.getPlayerType=function(){return cd(this,36)};
Zg.prototype.setHomeGroupInfo=function(a){return J(this,Xg,81,a)};
var $g=[9,66,24,32,86,100,101];function ah(a){L.call(this,a,-1,bh)}
v(ah,L);var bh=[15,26,28];function ch(a){L.call(this,a)}
v(ch,L);ch.prototype.setToken=function(a){return I(this,2,a)};function dh(a){L.call(this,a,-1,eh)}
v(dh,L);dh.prototype.setSafetyMode=function(a){return I(this,5,a)};
var eh=[12];function fh(a){L.call(this,a,-1,gh)}
v(fh,L);var gh=[12];function hh(a){L.call(this,a,-1,ih)}
v(hh,L);function jh(a){L.call(this,a)}
v(jh,L);jh.prototype.getKey=function(){return md(this,1)};
jh.prototype.U=function(){return md(this,2)};
jh.prototype.setValue=function(a){return I(this,2,a)};
var ih=[4,5];function kh(a){L.call(this,a)}
v(kh,L);function lh(a){L.call(this,a)}
v(lh,L);var mh=[2,3,4];function nh(a){L.call(this,a)}
v(nh,L);function oh(a){L.call(this,a)}
v(oh,L);function ph(a){L.call(this,a)}
v(ph,L);function qh(a){L.call(this,a,-1,rh)}
v(qh,L);var rh=[10,17];function sh(a){L.call(this,a)}
v(sh,L);function th(a){L.call(this,a)}
v(th,L);function uh(a){L.call(this,a)}
v(uh,L);function vh(a){L.call(this,a,442)}
v(vh,L);
var wh=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441];function xh(a){L.call(this,a)}
v(xh,L);function yh(a){L.call(this,a)}
v(yh,L);yh.prototype.setVideoId=function(a){return ed(this,1,zh,a)};
yh.prototype.getPlaylistId=function(){return ld(this,2===fd(this,zh)?2:-1)};
var zh=[1,2];function Ah(a){L.call(this,a,-1,Bh)}
v(Ah,L);var Bh=[3];var Ch=A.window,Dh,Eh,Fh=(null==Ch?void 0:null==(Dh=Ch.yt)?void 0:Dh.config_)||(null==Ch?void 0:null==(Eh=Ch.ytcfg)?void 0:Eh.data_)||{};B("yt.config_",Fh);function Gh(){var a=arguments;1<a.length?Fh[a[0]]=a[1]:1===a.length&&Object.assign(Fh,a[0])}
function Q(a,b){return a in Fh?Fh[a]:b}
function Hh(){return Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Ih(){var a=Fh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Jh=[];function Kh(a){Jh.forEach(function(b){return b(a)})}
function Lh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Mh(b)}}:a}
function Mh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=Q("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Gh("ERRORS",e));Kh(a)}
function Nh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=Q("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Gh("ERRORS",e))}
;var Oh=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Oh});var Ph={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Qh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ph||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function Rh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
Qh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Qh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Qh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=A.ytEventsEventsListeners||{};B("ytEventsEventsListeners",kb);var Sh=A.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Sh);
function Th(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Uh(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Vh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
var Vh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Wh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Th(a,b,c,d);if(e)return e;e=++Sh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Qh(h);if(!Hd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Qh(h);
h.currentTarget=a;return c.call(a,h)};
g=Lh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Vh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
;function Xh(a,b){"function"===typeof a&&(a=Lh(a));return window.setTimeout(a,b)}
function Yh(a,b){"function"===typeof a&&(a=Lh(a));return window.setInterval(a,b)}
;var Zh=/^[\w.]*$/,$h={q:!0,search_query:!0};function ai(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=bi(f[0]||""),h=bi(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(ai);k.args=[{key:l,value:f[1],query:a,method:ci==m?"unchanged":m}];$h.hasOwnProperty(l)||Nh(k)}}return c}
var ci=String(ai);function di(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ei(a){"?"==a.charAt(0)&&(a=a.substr(1));return ai(a,"&")}
function fi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ei(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Tb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function gi(a){if(!b)var b=window.location.href;var c=a.match(Ob)[1]||null,d=Qb(a);c&&d?(a=a.match(Ob),b=b.match(Ob),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Qb(b)==d&&(Number(b.match(Ob)[4]||null)||null)==(Number(a.match(Ob)[4]||null)||null):!0;return a}
function bi(a){return a&&a.match(Zh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=hi(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ii(a,b){a=hi(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function hi(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
function ji(){var a=[],b=Q("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=Q("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function ki(a){var b=li;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Td;e.flash="0";a:{try{var f=b.i.top.location.href}catch(Y){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?wd:g;try{var h=g.history.length}catch(Y){h=0}e.u_his=h;var k;e.u_h=null==(k=wd.screen)?void 0:k.height;var l;e.u_w=null==(l=wd.screen)?void 0:l.width;var m;e.u_ah=null==(m=wd.screen)?void 0:m.availHeight;var p;e.u_aw=null==
(p=wd.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=wd.screen)?void 0:t.colorDepth}catch(Y){}h=b.i;try{var q=h.screenX;var y=h.screenY}catch(Y){}try{var z=h.outerWidth;var H=h.outerHeight}catch(Y){}try{var K=h.innerWidth;var M=h.innerHeight}catch(Y){}try{var N=h.screenLeft;var ob=h.screenTop}catch(Y){}try{K=h.innerWidth,M=h.innerHeight}catch(Y){}try{var wc=h.screen.availWidth;var za=h.screen.availTop}catch(Y){}q=[N,ob,q,y,wc,za,z,H,K,M];y=b.i.top;try{var sa=(y||window).document,Z="CSS1Compat"==
sa.compatMode?sa.documentElement:sa.body;var da=(new Fd(Z.clientWidth,Z.clientHeight)).round()}catch(Y){da=new Fd(-12245933,-12245933)}sa=da;da={};var ea=void 0===ea?A:ea;Z=new Pe;ea.SVGElement&&ea.document.createElementNS&&Z.set(0);y=Md();y["allow-top-navigation-by-user-activation"]&&Z.set(1);y["allow-popups-to-escape-sandbox"]&&Z.set(2);ea.crypto&&ea.crypto.subtle&&Z.set(3);ea.TextDecoder&&ea.TextEncoder&&Z.set(4);ea=Qe(Z);da.bc=ea;da.bih=sa.height;da.biw=sa.width;da.brdim=q.join();b=b.j;b=(da.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,da.wgl=!!wd.WebGLRenderingContext,da);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var li=new function(){var a=window.document;this.i=window;this.j=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return di(ki(a))});Date.now();var mi="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function ni(){if(!mi)return null;var a=mi();return"open"in a?a:null}
;var oi={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},pi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Vd)),qi=!1;
function ri(a,b){b=void 0===b?{}:b;var c=gi(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in oi){var f=Q(oi[e]);"X-Goog-Visitor-Id"!==e||f||(f=Q("VISITOR_DATA"));!f||!c&&Qb(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Qb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Qb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!Qb(a))b["X-YouTube-Ad-Signals"]=di(ki());return b}
function si(a){var b=window.location.search,c=Qb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||c||!gi(a)||(c=document.location.hostname);var d=Pb(a.match(Ob)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ei(b),f={};E(pi,function(g){e[g]&&(f[g]=e[g])});
return fi(a,f||{},!1)}
function ti(a,b){var c=b.format||"JSON";a=ui(a,b);var d=vi(a,b),e=!1,f=wi(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)m=xi(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||A;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Xh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function ui(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=fi(a,b||{},!0);return a}
function vi(a,b){var c=Q("XSRF_FIELD_NAME"),d=Q("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=Q("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Qb(a)&&!b.withCredentials&&Qb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ei(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Tb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!qi&&a&&"POST"!=b.method&&(qi=!0,Mh(Error("AJAX request with postData should use POST")));return e}
function xi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Nh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?yi(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=zi(g)})}d&&Ai(e);
return e}
function Ai(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;sb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===qb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){A.console&&A.console.error(g.message)}qb=e}else qb=e}d=(e=qb)?e.createHTML(d):d;a[c]=new Nb(d)}else Ai(a[b])}}
function yi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function zi(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function wi(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Lh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ni();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=si(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ri(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Bi={Tb:"WEB_DISPLAY_MODE_UNKNOWN",Pb:"WEB_DISPLAY_MODE_BROWSER",Rb:"WEB_DISPLAY_MODE_MINIMAL_UI",Sb:"WEB_DISPLAY_MODE_STANDALONE",Qb:"WEB_DISPLAY_MODE_FULLSCREEN"};function Ci(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var Di={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ei={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Fi={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Gi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Hi(){var a=A.navigator;return a?a.connection:void 0}
;function Ii(){return"INNERTUBE_API_KEY"in Fh&&"INNERTUBE_API_VERSION"in Fh}
function Ji(){return{innertubeApiKey:Q("INNERTUBE_API_KEY"),innertubeApiVersion:Q("INNERTUBE_API_VERSION"),Ga:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Wa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),tb:Q("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ya:Q("INNERTUBE_CONTEXT_HL"),Xa:Q("INNERTUBE_CONTEXT_GL"),ub:Q("INNERTUBE_HOST_OVERRIDE")||"",wb:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),vb:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ki(a){var b={client:{hl:a.Ya,gl:a.Xa,clientName:a.Wa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ga}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ji();0<c.length&&(b.request={internalExperimentFlags:c});Li(a,void 0,b);Mi(void 0,b);Ni(a,void 0,b);Oi(void 0,b);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&
(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(ei(Q("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Pi(a){var b=new fh,c=new Zg;I(c,1,a.Ya);I(c,2,a.Xa);I(c,16,a.tb);I(c,17,a.innertubeContextClientVersion);if(a.Ga){var d=a.Ga,e=new Vg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,Vg,62,e)}(d=A.devicePixelRatio)&&1!=d&&I(c,65,d);d=Q("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=ji();if(0<d.length){e=new ah;for(var f=0;f<d.length;f++){var g=new Tg;I(g,1,d[f].key);g.setValue(d[f].value);
kd(e,15,Tg,g)}J(b,ah,5,e)}Li(a,c);Mi(c);Ni(a,c);Oi(c);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new dh,I(a,3,Q("DELEGATED_SESSION_ID")));a=u(Object.entries(ei(Q("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,Zg,1,c);return b}
function Li(a,b,c){a=a.Wa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=gd(b,Wg,96)||new Wg;var d=Ci();d=Object.keys(Bi).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,Wg,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Ci())}
function Mi(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ni(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=gd(b,Vg,62))?d:new Vg;I(c,6,a.appInstallData);J(b,Vg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Oi(a,b){a:{var c=Hi();if(c){var d=Di[c.type||"unknown"]||"CONN_UNKNOWN";c=Di[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,Ei[d]):b&&(b.client.connectionType=d));R("web_log_effective_connection_type")&&(d=Hi(),d=null!=d&&d.effectiveType?Gi.hasOwnProperty(d.effectiveType)?Gi[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,Fi[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Qi(a,b,c){c=void 0===c?{}:c;var d={};Q("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":Q("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Vb||Q("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ub:b=ge([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function Ri(a){a=Object.assign({},a);delete a.Authorization;var b=ge();if(b){var c=new zf;c.update(Q("INNERTUBE_API_KEY"));c.update(b);a.hash=uc(c.digest(),3)}return a}
;function Si(a){var b=new Mg;(b=b.isAvailable()?a?new Sg(b,a):b:null)||(a=new Ng(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Ig(a):null;this.j=document.domain||window.location.hostname}
Si.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Nf(b))}catch(f){return}else e=escape(b);b=this.j;de.set(""+a,e,{Ha:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Si.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=de.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Si.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;de.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ti=window,T=Ti.ytcsi&&Ti.ytcsi.now?Ti.ytcsi.now:Ti.performance&&Ti.performance.timing&&Ti.performance.now&&Ti.performance.timing.navigationStart?function(){return Ti.performance.timing.navigationStart+Ti.performance.now()}:function(){return(new Date).getTime()};var Ui;function Vi(){Ui||(Ui=new Si("yt.innertube"));return Ui}
function Wi(a,b,c,d){if(d)return null;d=Vi().get("nextId",!0)||1;var e=Vi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ri(c),requestTime:Math.round(T())};Vi().set("nextId",d+1,86400,!0);Vi().set("requests",e,86400,!0);return d}
function Xi(a){var b=Vi().get("requests",!0)||{};delete b[a];Vi().set("requests",b,86400,!0)}
function Yi(a){var b=Vi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Ri(Qi(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Zi(a,d.method,e,{}));delete b[c]}}Vi().set("requests",b,86400,!0)}}
;function $i(){}
$i.prototype.M=function(a,b){return aj(a,1,b)};
function bj(a,b){aj(a,2,b)}
;function cj(){$i.apply(this,arguments)}
v(cj,$i);function dj(){cj.i||(cj.i=new cj);return cj.i}
function aj(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Xh(a,c||0)}
cj.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
cj.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var Oe=dj();var ej=pc||qc;var fj=function(){var a;return function(){a||(a=new Si("ytidb"));return a}}();
function gj(){var a;return null==(a=fj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var hj=[],ij=!1;function jj(a){ij||(hj.push({type:"ERROR",payload:a}),10<hj.length&&hj.shift())}
function kj(a,b){ij||(hj.push({type:"EVENT",eventType:a,payload:b}),10<hj.length&&hj.shift())}
;function lj(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(lj,Error);function mj(){try{return nj(),!0}catch(a){return!1}}
function nj(){if(void 0!==Q("DATASYNC_ID"))return Q("DATASYNC_ID");throw new lj("Datasync ID not set","unknown");}
;function oj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function pj(a){return a.substr(0,a.indexOf(":"))||a}
;var qj={},rj=(qj.AUTH_INVALID="No user identifier specified.",qj.EXPLICIT_ABORT="Transaction was explicitly aborted.",qj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",qj.MISSING_INDEX="Index not created.",qj.MISSING_OBJECT_STORES="Object stores not created.",qj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",qj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",qj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
qj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",qj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",qj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",qj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",qj),sj={},tj=(sj.AUTH_INVALID="ERROR",sj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",sj.EXPLICIT_ABORT="IGNORED",sj.IDB_NOT_SUPPORTED="ERROR",sj.MISSING_INDEX=
"WARNING",sj.MISSING_OBJECT_STORES="ERROR",sj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",sj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",sj.QUOTA_EXCEEDED="WARNING",sj.QUOTA_MAYBE_EXCEEDED="WARNING",sj.UNKNOWN_ABORT="WARNING",sj.INCOMPATIBLE_DB_VERSION="WARNING",sj),uj={},vj=(uj.AUTH_INVALID=!1,uj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,uj.EXPLICIT_ABORT=!1,uj.IDB_NOT_SUPPORTED=!1,uj.MISSING_INDEX=!1,uj.MISSING_OBJECT_STORES=!1,uj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,uj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,uj.QUOTA_EXCEEDED=!1,uj.QUOTA_MAYBE_EXCEEDED=!0,uj.UNKNOWN_ABORT=!0,uj.INCOMPATIBLE_DB_VERSION=!1,uj);function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?rj[a]:c;d=void 0===d?tj[a]:d;e=void 0===e?vj[a]:e;lj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,U.prototype)}
v(U,lj);function wj(a,b){U.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},rj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,wj.prototype)}
v(wj,U);function xj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,xj.prototype)}
v(xj,Error);var yj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function zj(a,b,c,d){b=pj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new U("QUOTA_EXCEEDED",a);if(rc&&"UnknownError"===e.name)return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof xj)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&yj.some(function(f){return e.message.includes(f)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ac:e.name})];e.level="WARNING";return e}
function Aj(a,b,c){var d=gj();return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Bj(a){if(!a)throw Error();throw a;}
function Cj(a){return a}
function Dj(a){this.i=a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(new Dj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Z:0};f.Z<a.length;f={Z:f.Z},++f.Z)Ej(V.resolve(a[f.Z]).then(function(g){return function(h){d[g.Z]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
V.resolve=function(a){return new V(new Dj(function(b,c){a instanceof V?a.then(b,c):b(a)}))};
V.reject=function(a){return new V(new Dj(function(b,c){c(a)}))};
V.prototype.then=function(a,b){var c=this,d=null!=a?a:Cj,e=null!=b?b:Bj;return new V(new Dj(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Fj(c,c,d,f,g)}),c.onRejected.push(function(){Gj(c,c,e,f,g)})):"FULFILLED"===c.state.status?Fj(c,c,d,f,g):"REJECTED"===c.state.status&&Gj(c,c,e,f,g)}))};
function Ej(a,b){a.then(void 0,b)}
function Fj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Hj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Gj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Hj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Hj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ij(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Jj(a){return new Promise(function(b,c){Ij(a,b,c)})}
function W(a){return new V(new Dj(function(b,c){Ij(a,b,c)}))}
;function Kj(a,b){return new V(new Dj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Lj(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(T());this.j=!1}
n=Lj.prototype;n.add=function(a,b,c){return Mj(this,[a],{mode:"readwrite",J:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Mj(this,[a],{mode:"readwrite",J:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Mj(this,[a],{mode:"readonly",J:!0},function(c){return c.objectStore(a).count(b)})};
function Nj(a,b,c){a=a.i.createObjectStore(b,c);return new Oj(a)}
n.delete=function(a,b){return Mj(this,[a],{mode:"readwrite",J:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Mj(this,[a],{mode:"readonly",J:!0},function(c){return c.objectStore(a).get(b)})};
function Pj(a,b){return Mj(a,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(c){c=c.objectStore("LogsRequestsStore");return W(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Mj(a,b,c,d){var e,f,g,h,k,l,m,p,t,q,y,z;return x(function(H){switch(H.i){case 1:var K={mode:"readonly",J:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.J?3:1;g=0;case 2:if(h){H.v(3);break}g++;k=Math.round(T());wa(H,4);l=a.i.transaction(b,e.mode);K=new Qj(l);K=Rj(K,d);return w(H,K,6);case 6:return m=H.j,p=Math.round(T()),Sj(a,k,p,g,void 0,b.join(),e),H.return(m);case 4:t=ya(H);q=Math.round(T());y=zj(t,a.i.name,b.join(),a.i.version);
if((z=y instanceof U&&!y.i)||g>=f)Sj(a,k,q,g,y,b.join(),e),h=y;H.v(2);break;case 3:return H.return(Promise.reject(h))}})}
function Sj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&kj("QUOTA_EXCEEDED",{dbName:pj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),kj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Tj(a,!1,d,f,b,g.tag),jj(e)):Tj(a,!0,d,f,b,g.tag)}
function Tj(a,b,c,d,e,f){kj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function Oj(a){this.i=a}
n=Oj.prototype;n.add=function(a,b){return W(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return W(this.i.clear()).then(function(){})};
n.count=function(a){return W(this.i.count(a))};
function Uj(a,b){return Vj(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Uj(this,a):W(this.i.delete(a))};
n.get=function(a){return W(this.i.get(a))};
n.index=function(a){try{return new Kk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new xj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function Vj(a,b,c){a=a.i.openCursor(b.query,b.direction);return Lk(a).then(function(d){return Kj(d,c)})}
function Qj(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=U;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Rj(a,b){var c=new Promise(function(d,e){try{Ej(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Qj.prototype.abort=function(){this.i.abort();this.j=!0;throw new U("EXPLICIT_ABORT");};
Qj.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Oj(a),this.l.set(a,b));return b};
function Kk(a){this.i=a}
n=Kk.prototype;n.count=function(a){return W(this.i.count(a))};
n.delete=function(a){return Mk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return W(this.i.get(a))};
n.getKey=function(a){return W(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function Mk(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Lk(a).then(function(d){return Kj(d,c)})}
function Nk(a,b){this.request=a;this.cursor=b}
function Lk(a){return W(a).then(function(b){return b?new Nk(a,b):null})}
n=Nk.prototype;n.advance=function(a){this.cursor.advance(a);return Lk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Lk(this.request)};
n.delete=function(){return W(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.U=function(){return this.cursor.value};
n.update=function(a){return W(this.cursor.update(a))};function Ok(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Lj(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Cb,m=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&kj("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:pj(a)});var y=f(),z=new Qj(g.transaction);
m&&m(y,function(H){return q.oldVersion<H&&q.newVersion>=H},z);
z.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){kj("IDB_UNEXPECTEDLY_CLOSED",{dbName:pj(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Pk(a,b,c){c=void 0===c?{}:c;return Ok(a,b,c)}
function Qk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,Jj(c),4);
if(2!=g.i)return xa(g,0);f=ya(g);throw zj(f,a,"",-1);})}
;function Rk(a){return new Promise(function(b){bj(function(){b()},a)})}
function Sk(a,b){this.name=a;this.options=b;this.m=!0;this.o=this.s=0;this.j=500}
Sk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Pk(a,b,c)};
Sk.prototype.delete=function(a){a=void 0===a?{}:a;return Qk(this.name,a)};
function Tk(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Uk(a,b){if(!b)throw Aj("openWithToken",pj(a.name));return Vk(a)}
function Vk(a){function b(){var f,g,h,k,l,m,p,t,q,y;return x(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",wa(z,2),w(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var H=a.options,K=[],M=u(Object.keys(H.ia)),N=M.next();!N.done;N=M.next()){N=N.value;var ob=H.ia[N],wc=void 0===ob.Ab?Number.MAX_VALUE:ob.Ab;!(h.i.version>=ob.Ea)||h.i.version>=wc||h.i.objectStoreNames.contains(N)||K.push(N)}k=K;if(0===k.length){z.v(5);break}l=Object.keys(a.options.ia);m=h.objectStoreNames();
if(a.o<ii("ytidb_reopen_db_retries",0))return a.o++,h.close(),jj(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.s<ii("ytidb_remake_db_retries",1))){z.v(6);break}a.s++;if(!R("ytidb_remake_db_enable_backoff_delay")){z.v(7);break}return w(z,Rk(a.j),8);case 8:a.j*=2;case 7:return w(z,a.delete(),9);case 9:return jj(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new wj(m,l);case 5:return z.return(h);case 2:p=ya(z);if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.v(10);break}return w(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:t=z.j;q=t.i.version;if(void 0!==a.options.version&&q>a.options.version+1)throw t.close(),
a.m=!1,Tk(a,q);return z.return(t);case 10:throw c(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),zj(p,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Tk(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,Cb:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Wk=new Sk("YtIdbMeta",{ia:{databases:{Ea:1}},upgrade:function(a,b){b(1)&&Nj(a,"databases",{keyPath:"actualName"})}});
function Xk(a,b){var c;return x(function(d){if(1==d.i)return w(d,Uk(Wk,b),2);c=d.j;return d.return(Mj(c,["databases"],{J:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return W(f.i.put(a,void 0)).then(function(){})})}))})}
function Yk(a,b){var c;return x(function(d){if(1==d.i)return a?w(d,Uk(Wk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function Zk(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],w(e,Uk(Wk,b),2)):3!=e.i?(d=e.j,w(e,Mj(d,["databases"],{J:!0,mode:"readonly"},function(f){c.length=0;return Vj(f.objectStore("databases"),{},function(g){a(g.U())&&c.push(g.U());return g.continue()})}),3)):e.return(c)})}
function $k(a){return Zk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var al,bl=new function(){}(new function(){});
function cl(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=gj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ej)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||dc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Xk(d,bl),4);case 4:return w(e,Yk("yt-idb-test-do-not-use",bl),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function dl(){if(void 0!==al)return al;ij=!0;return al=cl().then(function(a){ij=!1;var b;if(null!=(b=fj())&&b.i){var c;b={hasSucceededOnce:(null==(c=gj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=fj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function el(){return C("ytglobal.idbToken_")||void 0}
function fl(){var a=el();return a?Promise.resolve(a):dl().then(function(b){(b=b?bl:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Of;function gl(a){if(!mj())throw a=new U("AUTH_INVALID",{dbName:a}),jj(a),a;var b=nj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function hl(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",w(m,fl(),2);case 2:g=m.j;if(!g)throw h=Aj("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),jj(h),h;oj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:gl(a);wa(m,3);return w(m,Xk(k,g),5);case 5:return w(m,Pk(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=ya(m),wa(m,7),w(m,Yk(k.actualName,g),9);case 9:xa(m,
8);break;case 7:ya(m);case 8:throw l;}})}
function il(a,b,c){c=void 0===c?{}:c;return hl(a,b,!1,c)}
function jl(a,b,c){c=void 0===c?{}:c;return hl(a,b,!0,c)}
function kl(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return w(e,fl(),2);if(3!=e.i){c=e.j;if(!c)return e.return();oj(a);d=gl(a);return w(e,Qk(d.actualName,b),3)}return w(e,Yk(d.actualName,c),0)})}
function ll(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?w(e,Qk(d.actualName,b),2):w(e,Yk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ml(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return w(d,fl(),2);if(3!=d.i){b=d.j;if(!b)return d.return();oj("LogsDatabaseV2");return w(d,$k(b),3)}c=d.j;return w(d,ll(c,a,b),0)})}
function nl(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return w(d,fl(),2);if(3!=d.i){c=d.j;if(!c)return d.return();oj(a);return w(d,Qk(a,b),3)}return w(d,Yk(a,c),0)})}
;function ol(a){this.ra=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.da=function(){};
this.now=Date.now;this.ha=!1;var b;this.hb=null!=(b=a.hb)?b:100;var c;this.gb=null!=(c=a.gb)?c:1;var d;this.eb=null!=(d=a.eb)?d:2592E6;var e;this.cb=null!=(e=a.cb)?e:12E4;var f;this.fb=null!=(f=a.fb)?f:5E3;var g;this.B=null!=(g=a.B)?g:void 0;this.wa=!!a.wa;var h;this.va=null!=(h=a.va)?h:.1;var k;this.za=null!=(k=a.za)?k:10;a.handleError&&(this.handleError=a.handleError);a.da&&(this.da=a.da);a.ha&&(this.ha=a.ha);a.ra&&(this.ra=a.ra);this.C=a.C;this.K=a.K;this.F=a.F;this.H=a.H;this.S=a.S;this.La=a.La;
this.Ka=a.Ka;pl(this)&&(!this.C||this.C("networkless_logging"))&&ql(this)}
function ql(a){pl(a)&&!a.ha&&(a.i=!0,a.wa&&Math.random()<=a.va&&a.F.mb(a.B),rl(a),a.H.G()&&a.ma(),a.H.Y(a.La,a.ma.bind(a)),a.H.Y(a.Ka,a.Ra.bind(a)))}
n=ol.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(pl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.B).then(function(e){d.id=e;c.H.G()&&sl(c,d)}).catch(function(e){sl(c,d);
tl(c,e)})}else this.S(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(pl(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.H.G()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return w(k,d.F.set(e,d.B).catch(function(l){tl(d,l)}),2);
f(g,h);k.i=0})}}this.S(a,b,e.skipRetry)}else this.F.set(e,this.B).catch(function(g){d.S(a,b,e.skipRetry);
tl(d,g)})}else this.S(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(pl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.ba(d.id,c.B):e=!0;c.H.R&&c.C&&c.C("vss_network_hint")&&c.H.R(!0);f(g,h)};
this.S(d.url,d.options);this.F.set(d,this.B).then(function(g){d.id=g;e&&c.F.ba(d.id,c.B)}).catch(function(g){tl(c,g)})}else this.S(a,b)};
n.ma=function(){var a=this;if(!pl(this))throw Aj("throttleSend");this.j||(this.j=this.K.M(function(){var b;return x(function(c){if(1==c.i)return w(c,a.F.Va("NEW",a.B),2);if(3!=c.i)return b=c.j,b?w(c,sl(a,b),3):(a.Ra(),c.return());a.j&&(a.j=0,a.ma());c.i=0})},this.hb))};
n.Ra=function(){this.K.aa(this.j);this.j=0};
function sl(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!pl(a))throw c=Aj("immediateSend"),c;if(void 0===b.id){e.v(2);break}return w(e,a.F.yb(b.id,a.B),3);case 3:(d=e.j)?b=d:a.da(Error("The request cannot be found in the database."));case 2:if(ul(a,b,a.eb)){e.v(4);break}a.da(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return w(e,a.F.ba(b.id,a.B),5);case 5:return e.return();case 4:b.skipRetry||(b=vl(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return w(e,a.F.ba(b.id,a.B),8);case 8:a.S(b.url,b.options,!!b.skipRetry),e.i=0}})}
function vl(a,b){if(!pl(a))throw Aj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:g=wl(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.za)){l.v(2);break}if(!a.H.ka){l.v(3);break}return w(l,a.H.ka(),3);case 3:if(a.H.G()){l.v(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.v(6);break}return w(l,a.F.Ma(b.id,a.B,!1),6);case 6:return l.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.za)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.v(8);break}return b.sendCount<a.gb?w(l,a.F.Ma(b.id,a.B),12):w(l,a.F.ba(b.id,a.B),8);case 12:a.K.M(function(){a.H.G()&&a.ma()},a.fb);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):w(h,a.F.ba(b.id,a.B),2);a.H.R&&a.C&&a.C("vss_network_hint")&&a.H.R(!0);d(e,f);h.i=0})};
return b}
function ul(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function rl(a){if(!pl(a))throw Aj("retryQueuedRequests");a.F.Va("QUEUED",a.B).then(function(b){b&&!ul(a,b,a.cb)?a.K.M(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.v(2):w(c,a.F.Ma(b.id,a.B),2);rl(a);c.i=0})}):a.H.G()&&a.ma()})}
function tl(a,b){a.ib&&!a.H.G()?a.ib(b):a.handleError(b)}
function pl(a){return!!a.B||a.ra}
function wl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var xl=C("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.na;O.prototype.publish=O.prototype.ea;O.prototype.clear=O.prototype.clear;B("ytPubsub2Pubsub2Instance",xl);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);function yl(a,b){Sk.call(this,a,b);this.options=b;oj(a)}
v(yl,Sk);function zl(a,b){var c;return function(){c||(c=new yl(a,b));return c}}
yl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Na?jl:il)(a,b,Object.assign({},c))};
yl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Na?nl:kl)(this.name,a)};
function Al(a,b){return zl(a,b)}
;var Bl;
function Cl(){if(Bl)return Bl();var a={};Bl=Al("LogsDatabaseV2",{ia:(a.LogsRequestsStore={Ea:2},a),Na:!1,upgrade:function(b,c,d){c(2)&&Nj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return Bl()}
;function Dl(a){return Uk(Cl(),a)}
function El(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Dl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:Q("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Pj(d,e),3);f=g.j;c.Db=T();Fl(c);return g.return(f)})}
function Gl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.i)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Dl(b),2);if(3!=l.i)return d=l.j,e=Q("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Mj(d,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(m){return Mk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.U()&&(k=p.U(),"NEW"===a&&(k.status="QUEUED",p.update(k)))})}),
3);
c.Db=T();Fl(c);return l.return(k)})}
function Hl(a,b){var c;return x(function(d){if(1==d.i)return w(d,Dl(b),2);c=d.j;return d.return(Mj(c,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",W(f.i.put(g,void 0)).then(function(){return g})})}))})}
function Il(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return w(e,Dl(b),2);d=e.j;return e.return(Mj(d,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),W(g.i.put(h,void 0)).then(function(){return h})):V.resolve(void 0)})}))})}
function Jl(a,b){var c;return x(function(d){if(1==d.i)return w(d,Dl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Kl(a){var b,c;return x(function(d){if(1==d.i)return w(d,Dl(a),2);b=d.j;c=T()-2592E6;return w(d,Mj(b,["LogsRequestsStore"],{mode:"readwrite",J:!0},function(e){return Vj(e.objectStore("LogsRequestsStore"),{},function(f){if(f.U().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ll(){x(function(a){return w(a,ml(),0)})}
function Fl(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Ml={},Nl=Al("ServiceWorkerLogsDatabase",{ia:(Ml.SWHealthLog={Ea:1},Ml),Na:!0,upgrade:function(a,b){b(1)&&Nj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Ol(a){return Uk(Nl(),a)}
function Pl(a){var b,c;x(function(d){if(1==d.i)return w(d,Ol(a),2);b=d.j;c=T()-2592E6;return w(d,Mj(b,["SWHealthLog"],{mode:"readwrite",J:!0},function(e){return Vj(e.objectStore("SWHealthLog"),{},function(f){if(f.U().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ql(a){var b;return x(function(c){if(1==c.i)return w(c,Ol(a),2);b=c.j;return w(c,b.clear("SWHealthLog"),0)})}
;var Rl={},Sl=0;
function Tl(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)wi(a,void 0,"POST",b);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))wi(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new Ya({url:a});if(d.l&&d.j||d.m){var e=Pb(a.match(Ob)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==Vb(a,"ri"));break b}}catch(h){}f=!1}if(f){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var g=!0;break b}}catch(h){}g=!1}b=g?!0:!1}else b=!1;b||Ul(a)}}
function Ul(a){var b=new Image,c=""+Sl++;Rl[c]=b;b.onload=b.onerror=function(){delete Rl[c]};
b.src=a}
;function Vl(){this.i=new Map;this.j=!1}
function Wl(){if(!Vl.i){var a=C("yt.networkRequestMonitor.instance")||new Vl;B("yt.networkRequestMonitor.instance",a);Vl.i=a}return Vl.i}
Vl.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Vl.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Vl.prototype.removeParams=function(a){return a.split("?")[0]};
Vl.prototype.removeParams=Vl.prototype.removeParams;Vl.prototype.isEndpointCFR=Vl.prototype.isEndpointCFR;Vl.prototype.requestComplete=Vl.prototype.requestComplete;Vl.getInstance=Wl;var Xl;function Yl(){Xl||(Xl=new Si("yt.offline"));return Xl}
function Zl(a){if(R("offline_error_handling")){var b=Yl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Yl().set("errors",b,2592E3,!0)}}
;function X(){He.call(this);var a=this;this.m=!1;this.j=Ne();this.j.Y("networkstatus-online",function(){if(a.m&&R("offline_error_handling")){var b=Yl().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new lj(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Mh(d)}Yl().set("errors",{},2592E3,!0)}}})}
v(X,He);function $l(){if(!X.i){var a=C("yt.networkStatusManager.instance")||new X;B("yt.networkStatusManager.instance",a);X.i=a}return X.i}
n=X.prototype;n.G=function(){return this.j.G()};
n.R=function(a){this.j.j=a};
n.sb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.ob=function(){this.m=!0};
n.Y=function(a,b){return this.j.Y(a,b)};
n.ka=function(a){a=Le(this.j,a);a.then(function(b){R("use_cfr_monitor")&&Wl().requestComplete("generate_204",b)});
return a};
X.prototype.sendNetworkCheckRequest=X.prototype.ka;X.prototype.listen=X.prototype.Y;X.prototype.enableErrorFlushing=X.prototype.ob;X.prototype.getWindowStatus=X.prototype.sb;X.prototype.networkStatusHint=X.prototype.R;X.prototype.isNetworkAvailable=X.prototype.G;X.getInstance=$l;function am(a){a=void 0===a?{}:a;He.call(this);var b=this;this.j=this.A=0;this.m=$l();var c=C("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.Aa?(this.Aa=a.Aa,c("networkstatus-online",function(){bm(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bm(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ie(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ie(b,"publicytnetworkstatus-offline")})))}
v(am,He);am.prototype.G=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
am.prototype.R=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
am.prototype.ka=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return R("skip_network_check_if_cfr")&&Wl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.R((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function bm(a,b){a.Aa?a.j?(Oe.aa(a.A),a.A=Oe.M(function(){a.o!==b&&(Ie(a,b),a.o=b,a.j=T())},a.Aa-(T()-a.j))):(Ie(a,b),a.o=b,a.j=T()):Ie(a,b)}
;var cm;function dm(){ol.call(this,{F:{mb:Kl,ba:Jl,Va:Gl,yb:Hl,Ma:Il,set:El},H:em(),handleError:Mh,da:Nh,S:fm,now:T,ib:Zl,K:dj(),La:"publicytnetworkstatus-online",Ka:"publicytnetworkstatus-offline",wa:!0,va:.1,za:ii("potential_esf_error_limit",10),C:R,ha:!(mj()&&"www.youtube-nocookie.com"!==Qb(document.location.toString()))});this.l=new Of;R("networkless_immediately_drop_all_requests")&&Ll();nl("LogsDatabaseV2")}
v(dm,ol);function gm(){var a=C("yt.networklessRequestController.instance");a||(a=new dm,B("yt.networklessRequestController.instance",a),R("networkless_logging")&&fl().then(function(b){a.B=b;ql(a);a.l.resolve();a.wa&&Math.random()<=a.va&&a.B&&Pl(a.B);R("networkless_immediately_drop_sw_health_store")&&hm(a)}));
return a}
dm.prototype.writeThenSend=function(a,b){b||(b={});mj()||(this.i=!1);ol.prototype.writeThenSend.call(this,a,b)};
dm.prototype.sendThenWrite=function(a,b,c){b||(b={});mj()||(this.i=!1);ol.prototype.sendThenWrite.call(this,a,b,c)};
dm.prototype.sendAndWrite=function(a,b){b||(b={});mj()||(this.i=!1);ol.prototype.sendAndWrite.call(this,a,b)};
dm.prototype.awaitInitialization=function(){return this.l.promise};
function hm(a){var b;x(function(c){if(!a.B)throw b=Aj("clearSWHealthLogsDb"),b;return c.return(Ql(a.B).catch(function(d){a.handleError(d)}))})}
function fm(a,b,c){R("use_cfr_monitor")&&im(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}c&&0===Object.keys(b).length?Tl(a):ti(a,b)}
function em(){cm||(cm=new am({xb:!0,pb:!0}));return cm}
function im(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Wl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Wl().requestComplete(a,!0);d(e,f)}}
;var jm=0,km=0,lm,mm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:km};B("ytNetworklessLoggingInitializationOptions",mm);function nm(a,b){function c(d){var e=om().G();if(!pm()||!d||e&&R("vss_networkless_bypass_write"))qm(a,b);else{var f={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0};El(f,d).then(function(g){f.id=g;om().G()&&rm(f)}).catch(function(g){rm(f);
om().G()?Mh(g):Zl(g)})}}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?fl().then(function(d){c(d)}):c(el())}
function sm(a,b){function c(d){if(pm()&&d){var e={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){R("use_cfr_monitor")&&Wl().requestComplete(e.url,!0);void 0!==e.id?Jl(e.id,d):f=!0;R("vss_network_hint")&&om().R(!0);g(k,l)};
if(R("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Wl().requestComplete(e.url,!1);h(k,l)}}qm(e.url,e.options);
El(e,d).then(function(k){e.id=k;f&&Jl(e.id,d)}).catch(function(k){om().G()?Mh(k):Zl(k)})}else qm(a,b)}
b=void 0===b?{}:b;R("skip_is_supported_killswitch")?fl().then(function(d){c(d)}):c(el())}
function tm(){var a=el();if(!a)throw Aj("throttleSend");jm||(jm=Oe.M(function(){var b;return x(function(c){if(1==c.i)return w(c,Gl("NEW",a),2);if(3!=c.i)return b=c.j,b?w(c,rm(b),3):(Oe.aa(jm),jm=0,c.return());jm&&(jm=0,tm());c.i=0})},100))}
function rm(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=el();if(!b)throw c=Aj("immediateSend"),c;if(void 0===a.id){e.v(2);break}return w(e,Hl(a.id,b),3);case 3:(d=e.j)?a=d:Nh(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=T()-f)){e.v(4);break}Nh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.v(5);break}return w(e,Jl(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=um(a));f=a;if(R("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(T())}a=f;if(!a){e.v(0);break}if(!a.skipRetry||void 0===a.id){e.v(8);break}return w(e,Jl(a.id,b),8);case 8:qm(a.url,a.options,!!a.skipRetry),e.i=0}})}
function um(a){var b=el();if(!b)throw Aj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:R("use_cfr_monitor")&&Wl().requestComplete(a.url,!1);g=wl(f);if(!(R("nwl_consider_error_code")&&g||!R("nwl_consider_error_code")&&vm()<=ii("potential_esf_error_limit",10))){l.v(2);break}if(R("skip_checking_network_on_cfr_failure")&&(!R("skip_checking_network_on_cfr_failure")||Wl().isEndpointCFR(a.url))){l.v(3);break}return w(l,om().ka(),3);case 3:if(om().G()){l.v(2);break}c(e,f);if(!R("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.v(6);break}return w(l,Il(a.id,b,!1),6);case 6:return l.return();case 2:if(R("nwl_consider_error_code")&&!g&&vm()>ii("potential_esf_error_limit",10))return l.return();C("ytNetworklessLoggingInitializationOptions")&&mm.potentialEsfErrorCounter++;km++;if(void 0===(null==(k=a)?void 0:k.id)){l.v(8);break}return 1>a.sendCount?w(l,Il(a.id,b),12):w(l,Jl(a.id,b),8);case 12:Oe.M(function(){om().G()&&tm()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return R("use_cfr_monitor")&&Wl().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.v(2):w(h,Jl(a.id,b),2);R("vss_network_hint")&&om().R(!0);d(e,f);h.i=0})};
return a}
function om(){if(R("use_new_nwl"))return em();lm||(lm=new am({xb:!0,pb:!0}));return lm}
function qm(a,b,c){c&&0===Object.keys(b).length?Tl(a):ti(a,b)}
function pm(){return C("ytNetworklessLoggingInitializationOptions")?mm.isNwlInitialized:!1}
function vm(){return C("ytNetworklessLoggingInitializationOptions")?mm.potentialEsfErrorCounter:km}
;function wm(a){var b=this;this.config_=null;a?this.config_=a:Ii()&&(this.config_=Ji());aj(function(){Yi(b)},0,5E3)}
wm.prototype.isReady=function(){!this.config_&&Ii()&&(this.config_=Ji());return!!this.config_};
function Zi(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Wi(b,c,l,k)),z)){var H=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,N){Xi(z);H(M,N)};
c.onFetchSuccess=function(M,N){Xi(z);K(M,N)}}try{y&&d.retry&&!d.ab.bypassNetworkless?(g.method="POST",d.ab.writeThenSend?R("use_new_nwl_wts")?gm().writeThenSend(q,g):nm(q,g):R("use_new_nwl_saw")?gm().sendAndWrite(q,g):sm(q,g)):R("web_all_payloads_via_jspb")?ti(q,g):(g.method="POST",g.postParams||(g.postParams={}),ti(q,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Xi(z),z=0),Nh(Error("An extension is blocking network request."));
else throw M;}z&&aj(function(){Yi(a)},0,5E3)}
!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Nh(new lj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new lj("innertube xhrclient not ready",b,c,d);Mh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ub)&&(h=f);var k=a.config_.wb||!1,l=Qi(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.vb&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var q=fi(""+h+m,p||{},!0);R("use_new_nwl")&&gm().i||!R("use_new_nwl")&&
pm()?dl().then(function(y){e(y)}):e(!1)}
;var xm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ym(a){this.I=a;this.i=null;this.o=0;this.D=null;this.A=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.m=0;this.Ba=Wh(window,"mousemove",Va(this.Ca,this));this.Da=Yh(Va(this.X,this),25)}
D(ym,he);ym.prototype.Ca=function(a){void 0===a.i&&Rh(a);var b=a.i;void 0===a.j&&Rh(a);this.i=new Ed(b,a.j)};
ym.prototype.X=function(){if(this.i){var a=xm();if(0!=this.o){var b=this.D,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.j[this.m]=.5<Math.abs((d-this.A)/this.A)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.I();this.A=d}this.o=a;this.D=this.i;this.m=(this.m+1)%4}};
ym.prototype.ca=function(){window.clearInterval(this.Da);Uh(this.Ba)};var zm={};
function Am(){var a={},b=void 0===a.zb?!1:a.zb;a=void 0===a.qb?!0:a.qb;if(null==C("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&Bm();Wh(document,"keydown",Bm);Wh(document,"keyup",Bm);Wh(document,"mousedown",Bm);Wh(document,"mouseup",Bm);b?Wh(window,"touchmove",function(){Cm("touchmove",200)},{passive:!0}):(Wh(window,"resize",function(){Cm("resize",200)}),a&&Wh(window,"scroll",function(){Cm("scroll",200)}));
new ym(function(){Cm("mouse",100)});
Wh(document,"touchstart",Bm,{passive:!0});Wh(document,"touchend",Bm,{passive:!0})}}
function Cm(a,b){zm[a]||(zm[a]=!0,Oe.M(function(){Bm();zm[a]=!1},b))}
function Bm(){null==C("_lact",window)&&Am();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function Dm(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Em=A.ytPubsubPubsubInstance||new O,Fm=A.ytPubsubPubsubSubscribedKeys||{},Gm=A.ytPubsubPubsubTopicToKeys||{},Hm=A.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.na;O.prototype.publish=O.prototype.ea;O.prototype.clear=O.prototype.clear;B("ytPubsubPubsubInstance",Em);B("ytPubsubPubsubTopicToKeys",Gm);B("ytPubsubPubsubIsSynchronous",Hm);B("ytPubsubPubsubSubscribedKeys",Fm);function Im(){this.store=[];this.i={}}
Im.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});a=Jm(a);this.i[a]?this.i[a]++:this.i[a]=1;return a};
Im.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=u(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=u(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?(b.push(e.payload),this.i[Jm(e.keys)]--):c.push(e)}this.store=c;a=Km(this,a);a=u(a);for(c=a.next();!c.done;c=a.next())c=c.value,0<this.i[c]&&Nh(new lj("Transport IMS did not fully extract entries for key:",{sequence:c,cc:b.length,Zb:this.i[c]}));return b};
Im.prototype.getSequenceCount=function(a){var b=Km(this,a);a=0;b=u(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function Km(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=u(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=Lm(b.auth):"isJspb"===g?e=JSON.stringify(b.isJspb):"cttAuthInfo"===g&&(f=Lm(b.cttAuthInfo));b=[];d=[d,e,f];a=u(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==f[g]){c=!1;break}c&&b.push(e)}return b}
Im.prototype.getSequenceCount=Im.prototype.getSequenceCount;Im.prototype.extractMatchingEntries=Im.prototype.extractMatchingEntries;Im.prototype.storePayload=Im.prototype.storePayload;function Jm(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
function Lm(a){return void 0===a?"undefined":a}
;var Mm=ii("initial_gel_batch_timeout",2E3),Nm=Math.pow(2,16)-1,Om=void 0;function Pm(){this.l=this.i=this.j=0}
var Qm=new Pm,Rm=new Pm,Sm,Tm=!0,Um=A.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Um);var Vm=A.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Vm);var Wm=A.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Wm);var Xm=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Xm);var Ym={};function Zm(){var a=C("yt.logging.ims");a||(a=new Im,B("yt.logging.ims",a));return a}
function $m(a,b){R("web_all_payloads_via_jspb")&&Nh(new lj("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){an(a);var c=bn(a);if(R("use_new_in_memory_storage")){Ym[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Zm().storePayload(d,a.payload);cn(b,[],c,!1,d)}else d=Um.get(c)||[],Um.set(c,d),d.push(a.payload),cn(b,d,c)}}
function dn(a,b){if("log_event"===a.endpoint){an(void 0,a);var c=bn(a,!0);if(R("use_new_in_memory_storage")){Ym[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Zm().storePayload(d,a.payload.toJSON());cn(b,[],c,!0,d)}else d=Vm.get(c)||[],Vm.set(c,d),a=a.payload.toJSON(),d.push(a),cn(b,d,c,!0)}}
function cn(a,b,c,d,e){d=void 0===d?!1:d;a&&(Om=new a);a=ii("tvhtml5_logging_max_batch")||ii("web_logging_max_batch")||100;var f=T(),g=d?Rm.l:Qm.l;b=b.length;e&&(b=Zm().getSequenceCount(e));b>=a?R("background_thread_flush_logs_due_to_batch_limit")?Sm||(Sm=Xh(function(){en({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d);Sm=void 0},0)):en({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d):10<=f-g&&(fn(d),d?Rm.l=f:Qm.l=f)}
function gn(a,b){R("web_all_payloads_via_jspb")&&Nh(new lj("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){an(a);var c=bn(a),d=new Map;d.set(c,[a.payload]);b&&(Om=new b);return new Pf(function(e,f){Om&&Om.isReady()?hn(d,Om,e,f,{bypassNetworkless:!0},!0):e()})}}
function jn(a,b){if("log_event"===a.endpoint){an(void 0,a);var c=bn(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Om=new b);return new Pf(function(e){Om&&Om.isReady()?kn(d,Om,e,{bypassNetworkless:!0},!0):e()})}}
function bn(a,b){var c="";if(a.ga)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new yh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&ed(d,2,zh,c.playlistId);Xm[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Wm[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function en(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&R("web_all_payloads_via_jspb")&&Nh(new lj("transport.flushLogs called for JSON in JSPB only experiment"));new Pf(function(d,e){c?(window.clearTimeout(Rm.j),window.clearTimeout(Rm.i),Rm.i=0):(window.clearTimeout(Qm.j),window.clearTimeout(Qm.i),Qm.i=0);if(Om&&Om.isReady())if(R("use_new_in_memory_storage")){var f=a,g=c,h=Om;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Zm().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),
k.set(b,e),kn(k,h,d,f)):(k=Zm().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,k),hn(l,h,d,e,f));else if(g){e=u(Object.keys(Ym));for(g=e.next();!g.done;g=e.next())l=g.value,g=Zm().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Ym[l];kn(k,h,d,f)}else{k=u(Object.keys(Ym));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Zm().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Ym[g]}hn(l,h,d,e,f)}}else f=a,k=c,h=Om,f=void 0===f?
{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Vm.get(b)||[],e.set(b,k),kn(e,h,d,f),Vm.delete(b)):(k=new Map,l=Um.get(b)||[],k.set(b,l),hn(k,h,d,e,f),Um.delete(b)):k?(kn(Vm,h,d,f),Vm.clear()):(hn(Um,h,d,e,f),Um.clear());else fn(c),d()})}
function fn(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!Qm.i||a&&!Rm.i)){var b=Xh(function(){en({writeThenSend:!0},void 0,a)},6E4);
a?Rm.i=b:Qm.i=b}window.clearTimeout(a?Rm.j:Qm.j);b=Q("LOGGING_BATCH_TIMEOUT",ii("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Tm&&(b=Mm);b=Xh(function(){en({writeThenSend:!0},void 0,a)},b);
a?Rm.j=b:Qm.j=b}
function hn(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={oa:k.oa,W:k.W,fa:k.fa,qa:k.qa,pa:k.pa},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.W=mb({context:Ki(b.config_||Ji())});if(!Ma(m)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}k.W.events=m;(m=Wm[l])&&ln(k.W,l,m);delete Wm[l];k.fa="visitorOnlyApprovedKey"===l;mn(k.W,g,k.fa);nn(e);k.qa=function(){h--;h||c()};
k.oa=0;k.pa=function(p){return function(){p.oa++;if(e.bypassNetworkless&&R("log_errors_through_nwl_on_retry")&&1===p.oa)try{Zi(b,"log_event",p.W,on({writeThenSend:!0},p.fa,p.qa,p.pa,f)),Tm=!1}catch(t){Mh(t),d()}h--;h||c()}}(k);
try{Zi(b,"log_event",k.W,on(e,k.fa,k.qa,k.pa,f)),Tm=!1}catch(p){Mh(p),d()}}}
function kn(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(T()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Ah;var p=Pi(b.config_||Ji());J(k,fh,1,p);m=m?pn(m):[];m=u(m);for(p=m.next();!p.done;p=m.next())kd(k,3,vh,p.value);(m=Xm[l])&&qn(k,l,m);delete Xm[l];l="visitorOnlyApprovedKey"===l;rn(k,f,l);nn(d);k=pd(k);l=on(d,l,function(){g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;Zi(b,"log_event","",l);Tm=!1}}
function nn(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function on(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,ab:a,ga:b,Xb:!!e,headers:{},postBodyFormat:"",postBody:""};sn()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function mn(a,b,c){sn()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID"))&&(c=tn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function rn(a,b,c){sn()||I(a,2,b);if(!c&&(b=Q("EVENT_ID"))){c=tn();var d=new xh;I(d,1,b);I(d,2,c);J(a,xh,5,d)}}
function tn(){var a=Q("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Nm/2));a++;a>Nm&&(a=1);Gh("BATCH_CLIENT_COUNTER",a);return a}
function ln(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function qn(a,b,c){if(ld(c,1===fd(c,zh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,yh,4,c);a=gd(a,fh,1)||new fh;c=gd(a,dh,3)||new dh;var e=new ch;e.setToken(b);I(e,1,d);kd(c,12,ch,e);J(a,dh,3,c)}
function pn(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new vh(a[c]))}catch(d){Mh(new lj("Transport failed to deserialize "+String(a[c])))}return b}
function an(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function sn(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
;var un=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",un);
function vn(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&Am();a=Dm();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.la&&(a=e.context,b=d.la,b={index:wn(b),groupKey:b},a.sequence=b,d.rb&&delete un[d.la]);(d.Bb?gn:$m)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ga:d.ga},c)}
function xn(a){en(void 0,void 0,void 0===a?!1:a)}
function wn(a){un[a]=a in un?un[a]+1:0;return un[a]}
;var yn=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",yn);function zn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;Q("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:wm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||T());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Dm();d=new uh;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&b.la){e=b.la;var f=wn(e),g=new th;I(g,2,f);I(g,1,e);J(d,th,3,g);b.rb&&delete yn[b.la]}J(a,uh,33,d);(b.Bb?jn:dn)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,ga:b.ga},c)}
;function An(a,b){var c=void 0===c?{}:c;if(R("migrate_events_to_ts")){c=void 0===c?{}:c;var d=wm;Q("ytLoggingEventsDefaultDisabled",!1)&&wm===wm&&(d=null);R("web_all_payloads_via_jspb")&&Nh(new lj("Logs should be translated to JSPB but are sent as JSON instead",a));vn(a,b,d,c)}else d=wm,Q("ytLoggingEventsDefaultDisabled",!1)&&wm==wm&&(d=null),vn(a,b,d,c)}
;var Bn=[{Ia:function(a){return"Cannot read property '"+a.key+"'"},
ya:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ia:function(a){return"Cannot call '"+a.key+"'"},
ya:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ia:function(a){return a.key+" is not defined"},
ya:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Dn={V:[],T:[{lb:Cn,weight:500}]};function Cn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function En(){this.T=[];this.V=[]}
var Fn;function Gn(){if(!Fn){var a=Fn=new En;a.V.length=0;a.T.length=0;Dn.V&&a.V.push.apply(a.V,Dn.V);Dn.T&&a.T.push.apply(a.T,Dn.T)}return Fn}
;var Hn=new O;function In(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Jn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Jn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Jn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Jn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Kn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ln(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=In(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Ln(e+".ve",f,g,h):0;d+=g;d+=Ln(e,a[e],b,c);if(500<d)break}}else c[b]=Mn(a),d+=c[b].length;else c[b]=Mn(a),d+=c[b].length;return d}
function Ln(a,b,c,d){c+="."+a;a=Mn(b);d[c]=a;return c.length+a.length}
function Mn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Nn=new Set,On=0,Pn=0,Qn=0,Rn=[],Sn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Tn(){for(var a=u(Sn),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Un(){var a;return x(function(b){return(a=gf())?b.return(a.then(function(c){c=pd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return uc(d,3)})):b.return(Promise.resolve(null))})}
;var Vn={};function Wn(a){return Vn[a]||(Vn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Xn={},Yn=[],Cg=new O,Zn={};function $n(){for(var a=u(Yn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function ao(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Wn(b)]:a.getAttribute("data-"+b):null;return c}
function bo(a){Cg.ea.apply(Cg,arguments)}
;function co(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function eo(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function fo(a,b,c){go||(go={},Wh(window,"message",function(d){a:{if(d.origin===eo(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=go[e.id])d.A=!0,d.A&&(E(d.o,d.sendMessage,d),d.o.length=0),d.Qa(e)}e=void 0}return e}));
go[c]=b}
var go=null;var ho=window;function io(a,b,c){this.s=this.i=this.j=null;this.l=0;this.A=!1;this.o=[];this.m=null;this.I={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.D=c;this.setup(a,b)}
n=io.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Qa=function(a){jo(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);ko(this,a);return this};
function lo(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.D===b[0]&&ko(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(Xn[this.i.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.s){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.s,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);go&&(go[this.id]=null);this.j=null;a=this.i;for(var c in kb)kb[c][0]==a&&Uh(c);this.s=this.i=null};
n.Ta=function(){return{}};
function mo(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.A?a.sendMessage(b):a.o.push(b)}
function jo(a,b,c){a.m.l||(c={target:a,data:c},a.m.ea(b,c),bo(a.D+"."+b,c))}
function no(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+eo(a.j,"title"));(b=eo(a.j,"width"))&&c.setAttribute("width",b.toString());(b=eo(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ta();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=Vb(window.location.href,k);null!==l&&(g[k]=l)});
ho.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(ho.yt_embedsTokenValue),delete ho.yt_embedsTokenValue);var h=""+eo(a.j,"host")+("/embed/"+eo(a.j,"videoId"))+"?"+Tb(g);ho.yt_embedsEnableUaChProbe?Un().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Rd(l.href).toString();Dd(c,Sd(k));return k}):
ho.yt_embedsEnableIframeSrcWithIntent?Dd(c,Sd(h)):c.src=h;
return c}
n.bb=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function oo(a){fo(a.j,a,a.id);a.l=Yh(a.bb.bind(a),250);Wh(a.i,"load",function(){window.clearInterval(a.l);a.l=Yh(a.bb.bind(a),250)})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Rb(a.src):"https://www.youtube.com"),this.j=new co(b),c||(b=no(this,a),this.s=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),Xn[this.i.id]=this,window.postMessage){this.m=new O;oo(this);b=eo(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Zn)Zn.hasOwnProperty(e)&&
lo(this,e)}};
function ko(a,b){a.I[b]||(a.I[b]=!0,mo(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Rb(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Yb){if(Yb.name&&"SyntaxError"===Yb.name){if(!(Yb.message&&0<Yb.message.indexOf("target origin ''"))){var e=void 0,f=Yb;e=void 0===e?{}:e;e.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(R("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=On)){var m=void 0,p=void 0,t=f,q=g,y=xd(t),z=y.message||"Unknown Error",H=y.name||"UnknownError",
K=y.stack||t.j||"Not available";if(K.startsWith(H+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var N=y.lineNumber||"Not available",ob=y.fileName||"Not available",wc=K,za=0;if(t.hasOwnProperty("args")&&t.args&&t.args.length)for(var sa=0;sa<t.args.length&&!(za=Kn(t.args[sa],"params."+sa,q,za),500<=za);sa++);else if(t.hasOwnProperty("params")&&t.params){var Z=t.params;if("object"===typeof t.params)for(p in Z){if(Z[p]){var da="params."+p,ea=Mn(Z[p]);q[da]=ea;za+=da.length+ea.length;if(500<za)break}}else q.params=
Mn(Z)}if(Rn.length)for(var Y=0;Y<Rn.length&&!(za=Kn(Rn[Y],"params.context."+Y,q,za),500<=za);Y++);navigator.vendor&&!q.hasOwnProperty("vendor")&&(q["device.vendor"]=navigator.vendor);var S={message:z,name:H,lineNumber:N,fileName:ob,stack:wc,params:q,sampleWeight:1},Wj=Number(t.columnNumber);isNaN(Wj)||(S.lineNumber=S.lineNumber+":"+Wj);if("IGNORED"===t.level)m=0;else a:{for(var Xj=Gn(),Yj=u(Xj.V),Wf=Yj.next();!Wf.done;Wf=Yj.next()){var Zj=Wf.value;if(S.message&&S.message.match(Zj.Yb)){m=Zj.weight;
break a}}for(var ak=u(Xj.T),Xf=ak.next();!Xf.done;Xf=ak.next()){var bk=Xf.value;if(bk.lb(S)){m=bk.weight;break a}}m=1}S.sampleWeight=m;for(var ck=u(Bn),Yf=ck.next();!Yf.done;Yf=ck.next()){var Zf=Yf.value;if(Zf.ya[S.name])for(var dk=u(Zf.ya[S.name]),$f=dk.next();!$f.done;$f=dk.next()){var ek=$f.value,Xd=S.message.match(ek.regexp);if(Xd){S.params["params.error.original"]=Xd[0];for(var ag=ek.groups,fk={},Zb=0;Zb<ag.length;Zb++)fk[ag[Zb]]=Xd[Zb+1],S.params["params.error."+ag[Zb]]=Xd[Zb+1];S.message=Zf.Ia(fk);
break}}}S.params||(S.params={});var gk=Gn();S.params["params.errorServiceSignature"]="msg="+gk.V.length+"&cb="+gk.T.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==rb&&(S.params["params.fconst"]="true");var ua=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(ua);if(0!==ua.sampleWeight&&!Nn.has(ua.message)){if("ERROR"===h){Hn.ea("handleError",
ua);if(R("record_app_crashed_web")&&0===Qn&&1===ua.sampleWeight)if(Qn++,R("errors_via_jspb")){var bg=new sh;I(bg,1,1);if(!R("report_client_error_with_app_crash_ks")){var hk=new nh;I(hk,1,ua.message);var ik=new oh;J(ik,nh,3,hk);var jk=new ph;J(jk,oh,5,ik);var kk=new qh;J(kk,ph,9,jk);J(bg,qh,4,kk)}var uo=bg,lk=new vh;id(lk,sh,20,wh,uo);zn(lk)}else{var mk={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(mk.systemHealth={crashData:{clientError:{logMessage:{message:ua.message}}}});
An("appCrashed",mk)}Pn++}else"WARNING"===h&&Hn.ea("handleWarning",ua);if(R("kevlar_gel_error_routing"))a:{var cg=void 0,dg=void 0,Mc=h,P=ua;if(R("errors_via_jspb")){if(Tn())dg=void 0;else{var $b=new kh;I($b,1,P.stack);P.fileName&&I($b,4,P.fileName);var Oa=P.lineNumber&&P.lineNumber.split?P.lineNumber.split(":"):[];0!==Oa.length&&(1!==Oa.length||isNaN(Number(Oa[0]))?2!==Oa.length||isNaN(Number(Oa[0]))||isNaN(Number(Oa[1]))||(I($b,2,Number(Oa[0])),I($b,3,Number(Oa[1]))):I($b,2,Number(Oa[0])));var vb=
new nh;I(vb,1,P.message);I(vb,3,P.name);I(vb,6,P.sampleWeight);"ERROR"===Mc?I(vb,2,2):"WARNING"===Mc?I(vb,2,1):I(vb,2,0);var eg=new lh;I(eg,1,!0);id(eg,kh,3,mh,$b);var wb=new hh;I(wb,3,window.location.href);for(var nk=Q("FEXP_EXPERIMENTS",[]),fg=0;fg<nk.length;fg++){var ok=wb,vo=nk[fg];Rc(ok);dd(ok,5,2,!1).push(vo)}var gg=Hh();if(!Ih()&&gg)for(var pk=u(Object.keys(gg)),xb=pk.next();!xb.done;xb=pk.next()){var qk=xb.value,hg=new jh;I(hg,1,qk);hg.setValue(String(gg[qk]));kd(wb,4,jh,hg)}var ig=P.params;
if(ig){var rk=u(Object.keys(ig));for(xb=rk.next();!xb.done;xb=rk.next()){var sk=xb.value,jg=new jh;I(jg,1,"client."+sk);jg.setValue(String(ig[sk]));kd(wb,4,jh,jg)}}var tk=Q("SERVER_NAME"),uk=Q("SERVER_VERSION");if(tk&&uk){var kg=new jh;I(kg,1,"server.name");kg.setValue(tk);kd(wb,4,jh,kg);var lg=new jh;I(lg,1,"server.version");lg.setValue(uk);kd(wb,4,jh,lg)}var Yd=new oh;J(Yd,hh,1,wb);J(Yd,lh,2,eg);J(Yd,nh,3,vb);dg=Yd}var vk=dg;if(!vk)break a;var wk=new vh;id(wk,oh,163,wh,vk);zn(wk)}else{if(Tn())cg=
void 0;else{var Nc={stackTrace:P.stack};P.fileName&&(Nc.filename=P.fileName);var Pa=P.lineNumber&&P.lineNumber.split?P.lineNumber.split(":"):[];0!==Pa.length&&(1!==Pa.length||isNaN(Number(Pa[0]))?2!==Pa.length||isNaN(Number(Pa[0]))||isNaN(Number(Pa[1]))||(Nc.lineNumber=Number(Pa[0]),Nc.columnNumber=Number(Pa[1])):Nc.lineNumber=Number(Pa[0]));var mg={level:"ERROR_LEVEL_UNKNOWN",message:P.message,errorClassName:P.name,sampleWeight:P.sampleWeight};"ERROR"===Mc?mg.level="ERROR_LEVEL_ERROR":"WARNING"===
Mc&&(mg.level="ERROR_LEVEL_WARNNING");var wo={isObfuscated:!0,browserStackInfo:Nc},ac={pageUrl:window.location.href,kvPairs:[]};Q("FEXP_EXPERIMENTS")&&(ac.experimentIds=Q("FEXP_EXPERIMENTS"));var ng=Hh();if(!Ih()&&ng)for(var xk=u(Object.keys(ng)),yb=xk.next();!yb.done;yb=xk.next()){var yk=yb.value;ac.kvPairs.push({key:yk,value:String(ng[yk])})}var og=P.params;if(og){var zk=u(Object.keys(og));for(yb=zk.next();!yb.done;yb=zk.next()){var Ak=yb.value;ac.kvPairs.push({key:"client."+Ak,value:String(og[Ak])})}}var Bk=
Q("SERVER_NAME"),Ck=Q("SERVER_VERSION");Bk&&Ck&&(ac.kvPairs.push({key:"server.name",value:Bk}),ac.kvPairs.push({key:"server.version",value:Ck}));cg={errorMetadata:ac,stackTrace:wo,logMessage:mg}}var Dk=cg;if(!Dk)break a;An("clientError",Dk)}if("ERROR"===Mc||R("errors_flush_gel_always_killswitch"))b:if(R("migrate_events_to_ts"))c:{if(R("web_fp_via_jspb")&&(xn(!0),!R("web_fp_via_jspb_and_json")))break c;xn()}else{if(R("web_fp_via_jspb")&&(xn(!0),!R("web_fp_via_jspb_and_json")))break b;xn()}}if(!R("suppress_error_204_logging")){var zb=
ua,Oc=zb.params||{},$a={urlParams:{a:"logerror",t:"jserror",type:zb.name,msg:zb.message.substr(0,250),line:zb.lineNumber,level:h,"client.name":Oc.name},postParams:{url:Q("PAGE_NAME",window.location.href),file:zb.fileName},method:"POST"};Oc.version&&($a["client.version"]=Oc.version);if($a.postParams){zb.stack&&($a.postParams.stack=zb.stack);for(var Ek=u(Object.keys(Oc)),pg=Ek.next();!pg.done;pg=Ek.next()){var Fk=pg.value;$a.postParams["client."+Fk]=Oc[Fk]}var qg=Hh();if(qg)for(var Gk=u(Object.keys(qg)),
rg=Gk.next();!rg.done;rg=Gk.next()){var Hk=rg.value;$a.postParams[Hk]=qg[Hk]}var Ik=Q("SERVER_NAME"),Jk=Q("SERVER_VERSION");Ik&&Jk&&($a.postParams["server.name"]=Ik,$a.postParams["server.version"]=Jk)}ti(Q("ECATCHER_REPORT_HOST","")+"/error_204",$a)}try{Nn.add(ua.message)}catch(Bo){}On++}}}}}else throw Yb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function po(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function qo(a){return 0===a.search("get")||0===a.search("is")}
;function ro(a,b){io.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.O={};this.playerInfo={};this.videoTitle=""}
v(ro,io);n=ro.prototype;n.Ta=function(){var a=eo(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=eo(this.j,"embedConfig")){if(Na(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Qa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Na(a))for(var c in a)a.hasOwnProperty(c)&&(this.O[c]=a[c]);break;case "infoDelivery":so(this,a);break;case "initialDelivery":Na(a)&&(window.clearInterval(this.l),this.playerInfo={},this.O={},to(this,a.apiInterface),so(this,a));break;default:jo(this,b,a)}};
function so(a,b){if(Na(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.i.setAttribute("title",b))):(a.videoTitle="",a.i.setAttribute("title","YouTube "+eo(a.j,"title"))))}}
function to(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:po(c)?this[c]=function(){this.playerInfo={};
this.O={};mo(this,c,arguments);return this}:qo(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){mo(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=eo(this.j,"host")+("/embed/"+eo(this.j,"videoId")),b=Number(eo(this.j,"width")),c=Number(eo(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,
"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.O.namespaces?a?this.O[a]?this.O[a].options||[]:[]:this.O.namespaces||[]:[]};
n.getOption=function(a,b){if(this.O.namespaces&&a&&b&&this.O[a])return this.O[a][b]};
function xo(a){if("iframe"!==a.tagName.toLowerCase()){var b=ao(a,"videoid");b&&(b={videoId:b,width:ao(a,"width"),height:ao(a,"height")},new ro(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Xn[a]});
B("YT.scan",$n);B("YT.subscribe",function(a,b,c){Cg.subscribe(a,b,c);Zn[a]=!0;for(var d in Xn)Xn.hasOwnProperty(d)&&lo(Xn[d],a)});
B("YT.unsubscribe",function(a,b,c){Bg(a,b,c)});
B("YT.Player",ro);io.prototype.destroy=io.prototype.destroy;io.prototype.setSize=io.prototype.setSize;io.prototype.getIframe=io.prototype.getIframe;io.prototype.addEventListener=io.prototype.addEventListener;ro.prototype.getVideoEmbedCode=ro.prototype.getVideoEmbedCode;ro.prototype.getOptions=ro.prototype.getOptions;ro.prototype.getOption=ro.prototype.getOption;
Yn.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);E(fb(a,b),xo)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||$n();var yo=A.onYTReady;yo&&yo();var zo=A.onYouTubeIframeAPIReady;zo&&zo();var Ao=A.onYouTubePlayerAPIReady;Ao&&Ao();}).call(this);
