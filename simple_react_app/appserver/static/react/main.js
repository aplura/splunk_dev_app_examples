!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.main=t(require("react")):e.main=t(e.react)}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static/app/simple_react_app/react",r(r.s="./src/index.js")}({"./node_modules/@babel/runtime/helpers/assertThisInitialized/index.js":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/classCallCheck/index.js":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/createClass/index.js":function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/defineProperty/index.js":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/getPrototypeOf/index.js":function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/inherits/index.js":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/setPrototypeOf/index.js");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/interopRequireDefault/index.js":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/possibleConstructorReturn/index.js":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/typeof/index.js").default,o=r("./node_modules/@babel/runtime/helpers/assertThisInitialized/index.js");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/setPrototypeOf/index.js":function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,r(t,n)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/typeof/index.js":function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},"./src/App.js":function(e,t,r){var n,o;n=[t,r("./node_modules/@babel/runtime/helpers/classCallCheck/index.js"),r("./node_modules/@babel/runtime/helpers/createClass/index.js"),r("./node_modules/@babel/runtime/helpers/assertThisInitialized/index.js"),r("./node_modules/@babel/runtime/helpers/inherits/index.js"),r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn/index.js"),r("./node_modules/@babel/runtime/helpers/getPrototypeOf/index.js"),r("./node_modules/@babel/runtime/helpers/defineProperty/index.js"),r("react")],void 0===(o=function(e,t,n,o,u,s,l,i,p){"use strict";var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var o=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.default)(this,r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=a(t),n=a(n),o=a(o),u=a(u),s=a(s),l=a(l),i=a(i);var f=function(e){(0,u.default)(s,e);var r=d(s);function s(e){var n;return(0,t.default)(this,s),n=r.call(this,e),(0,i.default)((0,o.default)(n),"componentDidMount",(function(){})),(0,i.default)((0,o.default)(n),"updateParentState",(function(e){n.setState(Object.assign(n.state,e))})),n.updateParentState=n.updateParentState.bind((0,o.default)(n)),n}return(0,n.default)(s,[{key:"render",value:function(){return console.log(this.props.splunk),p.default.createElement("div",null,p.default.createElement("h1",null,"Simple React App"))}}]),s}((p=a(p)).default.Component);e.default=f}.apply(t,n))||(e.exports=o)},"./src/index.js":function(e,t,r){var n,o;n=[t,r("./node_modules/@babel/runtime/helpers/classCallCheck/index.js"),r("./node_modules/@babel/runtime/helpers/createClass/index.js"),r("./node_modules/@babel/runtime/helpers/inherits/index.js"),r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn/index.js"),r("./node_modules/@babel/runtime/helpers/getPrototypeOf/index.js"),r("react"),r("./src/App.js")],void 0===(o=function(e,t,n,o,u,s,l,i){"use strict";var p=r("./node_modules/@babel/runtime/helpers/interopRequireDefault/index.js");function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.default)(e);if(t){var o=(0,s.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,u.default)(this,r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t=p(t),n=p(n),o=p(o),u=p(u),s=p(s),l=p(l),i=p(i);var d=function(e){(0,o.default)(u,e);var r=a(u);function u(e){var n;return(0,t.default)(this,u),(n=r.call(this,e)).state={splunk_service:e.splunkjs.createService({owner:"nobody"}),splunk_components:e.splunk_components||{}},n}return(0,n.default)(u,[{key:"render",value:function(){return l.default.createElement(i.default,{style:{height:"850px"},app_context:this.props.utils.getCurrentApp(),utils:this.props.utils,splunk:this.props.splunkjs.createService({owner:"nobody"}),splunk_components:this.state.splunk_components})}}]),u}(l.default.Component);e.default=d}.apply(t,n))||(e.exports=o)},react:function(t,r){t.exports=e}})}));