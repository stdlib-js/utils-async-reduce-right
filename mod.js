// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&m.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[g],r=d(t,g);try{t[g]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[g]=e:delete t[g],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||_(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",_);var A="object"==typeof self?self:null,S="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof T?T:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(A)return A;if(S)return S;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),I=N.document&&N.document.childNodes,B=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",V);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function x(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(x));var k="function"==typeof s||"object"==typeof B||"function"==typeof I?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function L(t){return"function"===k(t)}var M=Math.floor;function J(t){return M(t)===t}function R(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&J(t.length)&&t.length>=0&&t.length<=9007199254740991}function U(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var Y=Number.POSITIVE_INFINITY;var X,q=Object.getPrototypeOf;X=L(Object.getPrototypeOf)?q:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var z=X;var D=Object.prototype;function H(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),z(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&L(r.constructor)&&"[object Function]"===h(r.constructor)&&d(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===D||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function K(t){return"number"==typeof t}var Q=Number,W=Q.prototype.toString;var Z=b();function $(t){return"object"==typeof t&&(t instanceof Q||(Z?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function tt(t){return K(t)||$(t)}a(tt,"isPrimitive",K),a(tt,"isObject",$);var rt=Q.NEGATIVE_INFINITY;function et(t){return t<Y&&t>rt&&J(t)}function nt(t){return K(t)&&et(t)}function ot(t){return $(t)&&et(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ct(t){return ot(t)&&t.valueOf()>0}function ft(t){return ut(t)||ct(t)}function lt(t,r){return H(r)?(d(r,"thisArg")&&(t.thisArg=r.thisArg),d(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(U("0id30","series",t.series)):d(r,"limit")&&(t.limit=r.limit,!ut(t.limit))?new TypeError(U("0id3b","limit",t.limit)):null):new TypeError(U("0id2h",r))}a(it,"isPrimitive",nt),a(it,"isObject",ot),a(ft,"isPrimitive",ut),a(ft,"isObject",ct);var at=()=>{};function st(t,r,e,n,o){var i,u,c,f,l,a;if(0===(f=t.length))return o(null,r);for(c=f<e.limit?f:e.limit,at("Number of arguments: %d",n.length),i=0,l=f,a=0;a<c;a++)l>0&&s();function s(){function o(t,e){if(!u){if(t)return u=!0,p(t);at("Accumulator: %s",JSON.stringify(e)),r=e,p()}}at("Collection element %d: %s.",l-=1,JSON.stringify(t[l])),3===n.length?n.call(e.thisArg,r,t[l],o):4===n.length?n.call(e.thisArg,r,t[l],l,o):n.call(e.thisArg,r,t[l],l,t,o)}function p(t){return t?(at("Encountered an error: %s",t.message),o(t)):(i+=1,l>0?s():i===f?o(null,r):void 0)}}function pt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=lt(e,t))throw n;o=r}else o=t;if(!L(o))throw new TypeError(U("0id43",o));return void 0===e.series&&void 0===e.limit&&(e.series=!0),e.series?e.limit=1:e.limit||(e.limit=Y),i;function i(t,r,n){if(!R(t))throw new TypeError(U("0idBO",t));if(!L(n))throw new TypeError(U("0id43",n));return st(t,r,e,o,(function(t,r){if(t)return n(t);n(null,r)}))}}function yt(t,r,e,n,o){if(arguments.length<5)return pt(e)(t,r,n);pt(e,n)(t,r,o)}a(yt,"factory",pt);export{yt as default,pt as factory};
//# sourceMappingURL=mod.js.map
