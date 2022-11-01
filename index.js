// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).reduceRightAsync={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,r,e.get),p&&c&&c.call(t,r,e.set),t};var a=e;function s(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&g.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[h],r=m(t,h);try{t[h]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[h]=e:delete t[h],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=d();function O(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function E(t){return y(t)||O(t)}function A(){return new Function("return this;")()}s(E,"isPrimitive",y),s(E,"isObject",O);var T="object"==typeof self?self:null,S="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof P?P:null;var I=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(T)return T;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),B=I.document&&I.document.childNodes,x=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;s(F,"REGEXP",V);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function G(t){return null!==t&&"object"==typeof t}function M(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(G));var k="function"==typeof p||"object"==typeof x||"function"==typeof B?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};function L(t){return"function"===k(t)}var R=Math.floor;function J(t){return R(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&J(t.length)&&t.length>=0&&t.length<=9007199254740991}function Y(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var X=Number.POSITIVE_INFINITY;var q,z=Object.getPrototypeOf;q=L(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=q;var H=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===H||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Q(t){return"number"==typeof t}var W=Number,Z=W.prototype.toString;var $=d();function tt(t){return"object"==typeof t&&(t instanceof W||($?function(t){try{return Z.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function rt(t){return Q(t)||tt(t)}s(rt,"isPrimitive",Q),s(rt,"isObject",tt);var et=W.NEGATIVE_INFINITY;function nt(t){return t<X&&t>et&&J(t)}function ot(t){return Q(t)&&nt(t)}function it(t){return tt(t)&&nt(t.valueOf())}function ut(t){return ot(t)||it(t)}function ct(t){return ot(t)&&t>0}function ft(t){return it(t)&&t.valueOf()>0}function lt(t){return ct(t)||ft(t)}function at(t,r){return K(r)?(m(r,"thisArg")&&(t.thisArg=r.thisArg),m(r,"series")&&(t.series=r.series,!y(t.series))?new TypeError(Y("0id30","series",t.series)):m(r,"limit")&&(t.limit=r.limit,!ct(t.limit))?new TypeError(Y("0id3b","limit",t.limit)):null):new TypeError(Y("0id2h",r))}s(ut,"isPrimitive",ot),s(ut,"isObject",it),s(lt,"isPrimitive",ct),s(lt,"isObject",ft);var st=()=>{};function pt(t,r,e,n,o){var i,u,c,f,l,a;if(0===(f=t.length))return o(null,r);for(c=f<e.limit?f:e.limit,st("Number of arguments: %d",n.length),i=0,l=f,a=0;a<c;a++)l>0&&s();function s(){function o(t,e){if(!u){if(t)return u=!0,p(t);st("Accumulator: %s",JSON.stringify(e)),r=e,p()}}st("Collection element %d: %s.",l-=1,JSON.stringify(t[l])),3===n.length?n.call(e.thisArg,r,t[l],o):4===n.length?n.call(e.thisArg,r,t[l],l,o):n.call(e.thisArg,r,t[l],l,t,o)}function p(t){return t?(st("Encountered an error: %s",t.message),o(t)):(i+=1,l>0?s():i===f?o(null,r):void 0)}}function yt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=at(e,t))throw n;o=r}else o=t;if(!L(o))throw new TypeError(Y("0id43",o));return void 0===e.series&&void 0===e.limit&&(e.series=!0),e.series?e.limit=1:e.limit||(e.limit=X),i;function i(t,r,n){if(!U(t))throw new TypeError(Y("0idBO",t));if(!L(n))throw new TypeError(Y("0id43",n));return pt(t,r,e,o,(function(t,r){if(t)return n(t);n(null,r)}))}}function bt(t,r,e,n,o){if(arguments.length<5)return yt(e)(t,r,n);yt(e,n)(t,r,o)}s(bt,"factory",yt),t.default=bt,t.factory=yt,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map