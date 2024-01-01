// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reduceRightAsync=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var O=String.fromCharCode,E=isNaN,S=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,a,l,s,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if(u(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function F(e){var r,t,n;if(!V(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var I,N=Object.prototype,C=N.toString,$=N.__defineGetter__,L=N.__defineSetter__,R=N.__lookupGetter__,B=N.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||B.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var G=I;function M(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function W(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function Y(e,r){return null!=e&&J.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"";var H=X()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[q],r=Y(e,q);try{e[q]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[q]=t:delete e[q],n}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=X();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return W(e)||re(e)}function ne(){return new Function("return this;")()}M(te,"isPrimitive",W),M(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof global?global:null,ce="object"==typeof globalThis?globalThis:null;var ue=function(e){if(arguments.length){if(!W(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ce)return ce;if(ie)return ie;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),le=ue.document&&ue.document.childNodes,se=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;M(fe,"REGEXP",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function de(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de));var be="function"==typeof Z||"object"==typeof se||"function"==typeof le?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function he(e){return"function"===be(e)}var ve=Math.floor;function me(e){return ve(e)===e}function we(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=9007199254740991}var je=Number.POSITIVE_INFINITY;var _e,Oe=Object,Ee=Object.getPrototypeOf;_e=he(Object.getPrototypeOf)?Ee:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Se=_e;var Te=Object.prototype;function Ae(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ge(e)}(e)&&(r=function(e){return null==e?null:(e=Oe(e),Se(e))}(e),!r||!Y(e,"constructor")&&Y(r,"constructor")&&he(r.constructor)&&"[object Function]"===H(r.constructor)&&Y(r,"isPrototypeOf")&&he(r.isPrototypeOf)&&(r===Te||function(e){var r;for(r in e)if(!Y(e,r))return!1;return!0}(e)))}function xe(e){return"number"==typeof e}var ke=Number,Pe=ke.prototype.toString;var Ve=X();function Fe(e){return"object"==typeof e&&(e instanceof ke||(Ve?function(e){try{return Pe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ie(e){return xe(e)||Fe(e)}M(Ie,"isPrimitive",xe),M(Ie,"isObject",Fe);var Ne=ke.NEGATIVE_INFINITY;function Ce(e){return e<je&&e>Ne&&me(e)}function $e(e){return xe(e)&&Ce(e)}function Le(e){return Fe(e)&&Ce(e.valueOf())}function Re(e){return $e(e)||Le(e)}function Be(e){return $e(e)&&e>0}function Ge(e){return Le(e)&&e.valueOf()>0}function Me(e){return Be(e)||Ge(e)}function Ze(e,r){return Ae(r)?(Y(r,"thisArg")&&(e.thisArg=r.thisArg),Y(r,"series")&&(e.series=r.series,!W(e.series))?new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):Y(r,"limit")&&(e.limit=r.limit,!Be(e.limit))?new TypeError(F("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",r))}function We(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}M(Re,"isPrimitive",$e),M(Re,"isObject",Le),M(Me,"isPrimitive",Be),M(Me,"isObject",Ge);var Ue=We(Object.freeze({__proto__:null,default:()=>()=>{}}))("reduce-right-async:limit");function Xe(e,r,t,n,i){var o,a,c,u,l,s;if(u=e.length,Ue("Collection length: %d",u),0===u)return Ue("Finished processing a collection."),i(null,r);for(c=u<t.limit?u:t.limit,Ue("Concurrency limit: %d",c),Ue("Number of arguments: %d",n.length),o=0,l=u,s=0;s<c;s++)l>0&&f();function f(){function i(e,t){if(!a){if(e)return a=!0,p(e);Ue("Accumulator: %s",JSON.stringify(t)),r=t,p()}}Ue("Collection element %d: %s.",l-=1,JSON.stringify(e[l])),3===n.length?n.call(t.thisArg,r,e[l],i):4===n.length?n.call(t.thisArg,r,e[l],l,i):n.call(t.thisArg,r,e[l],l,e,i)}function p(e){return e?(Ue("Encountered an error: %s",e.message),i(e)):(Ue("Processed %d of %d collection elements.",o+=1,u),l>0?f():o===u?(Ue("Finished processing a collection."),i(null,r)):void 0)}}function ze(e,r){var t,n,i;if(t={},arguments.length>1){if(n=Ze(t,e))throw n;i=r}else i=e;if(!he(i))throw new TypeError(F("invalid argument. Last argument must be a function. Value: `%s`.",i));return void 0===t.series&&void 0===t.limit&&(t.series=!0),t.series?t.limit=1:t.limit||(t.limit=je),o;function o(e,r,n){if(!we(e))throw new TypeError(F("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!he(n))throw new TypeError(F("invalid argument. Last argument must be a function. Value: `%s`.",n));return Xe(e,r,t,i,(function(e,r){if(e)return n(e);n(null,r)}))}}function Je(e,r,t,n,i){if(arguments.length<5)return ze(t)(e,r,n);ze(t,n)(e,r,i)}return M(Je,"factory",ze),Je}));
//# sourceMappingURL=index.js.map
