_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"20a2":function(e,t,r){e.exports=r("nOHt")},"2qu3":function(e,t,r){"use strict";var n=r("lSNA"),o=r("lwsE"),a=r("W8MJ");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var u,d=(u=r("q1tI"))&&u.__esModule?u:{default:u},f=r("8L3h"),b=r("jwwS");var m=[],h=[],p=!1;function j(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function O(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=j(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function v(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new x(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!p&&"function"===typeof r.webpack){var a=r.webpack();h.push((function(e){var t,r=l(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(c){r.e(c)}finally{r.f()}}))}var c=function(e,t){o();var a=d.default.useContext(b.LoadableContext),c=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return c.loading||c.error?d.default.createElement(r.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:n.retry}):c.loaded?r.render(c.loaded,e):null}),[e,c])};return c.preload=function(){return o()},c.displayName="LoadableComponent",d.default.forwardRef(c)}var x=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return v(j,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}g.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(O,e)},g.preloadAll=function(){return new Promise((function(e,t){w(m).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return p=!0,t()};w(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var _=g;t.default=_},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},Vvt1:function(e,t,r){e.exports=r("a6RD")},VxdY:function(e,t,r){},a6RD:function(e,t,r){"use strict";var n=r("lSNA");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var r=c.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=c.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};i(r("q1tI"));var c=i(r("2qu3"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},hUgY:function(e,t,r){"use strict";r.r(t);var n=r("nKUr");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("q1tI");var a=r("YFqc"),c=r.n(a),i=r("Vvt1"),l=r.n(i),s=r("20a2"),u=function(e){return Object(n.jsx)(c.a,{href:"/",children:Object(n.jsxs)("a",{className:"flex w-14.5 h-14.5 max-h-14.5 cursor-pointer tilt motion-reduce:transform-none",children:[Object(n.jsxs)("h1",{className:"text-4xl",children:[Object(n.jsx)("span",{className:"underline",children:"M"}),Object(n.jsx)("span",{className:"relative -bottom-1",children:"c"})]}),Object(n.jsx)("span",{className:"font-bold absolute right-2.5 animate-bounce motion-safe:animate-bounce",children:"c"})]})})},d=l()((function(){return r.e(11).then(r.bind(null,"5hKV"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["5hKV"]},modules:["@components/ThemeToggle"]}}),f=function(){var e=Object(s.useRouter)().pathname;return Object(n.jsxs)("nav",{className:"w-full flex p-4 align-middle justify-between mb-10",children:[Object(n.jsx)("div",{children:Object(n.jsx)(u,{})}),Object(n.jsxs)("div",{className:"text-xl sm:text-2xl flex",children:[Object(n.jsxs)("ul",{className:"text-right flex",children:[Object(n.jsx)("li",{className:"mr-2 sm:mr-6 my-auto",children:Object(n.jsx)("span",{className:"".concat("/"===e&&"underline"," cursor-pointer"),children:Object(n.jsx)(c.a,{href:"/",children:"Home"})})}),Object(n.jsx)("li",{className:"mr-2 sm:mr-6 my-auto",children:Object(n.jsx)("span",{className:"".concat("/about"===e&&"underline"," cursor-pointer"),children:Object(n.jsx)(c.a,{href:"/about",children:"About"})})}),Object(n.jsx)("li",{className:"mr-2 sm:mr-6 my-auto",children:Object(n.jsx)("span",{className:"".concat("/projects"===e&&"underline"," cursor-pointer"),children:Object(n.jsx)(c.a,{href:"/projects",children:"Projects"})})})]}),Object(n.jsx)("div",{className:"my-auto mr-2 sm:mr-0 top-0",children:Object(n.jsx)(d,{})})]})]})},b=function(e){switch(e.name.toLowerCase()){case"github":return Object(n.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-current w-6 tilt motion-reduce:transform-none",children:[Object(n.jsx)("title",{children:"GitHub"}),Object(n.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]});case"linkedin":return Object(n.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-current w-6 tilt motion-reduce:transform-none",children:[Object(n.jsx)("title",{children:"LinkedIn"}),Object(n.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]});case"email":return Object(n.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-current w-6 tilt motion-reduce:transform-none",children:[Object(n.jsx)("title",{children:"Email"}),Object(n.jsx)("path",{d:"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"})]})}},m=function(){return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"flex",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"flex mr-2",href:"https://github.com/alexmccdev",target:"_blank",rel:"noreferrer noopener",children:Object(n.jsx)(b,{name:"GitHub"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"flex mr-2",href:"https://www.linkedin.com/in/alexmccdev",target:"_blank",rel:"noreferrer noopener",children:Object(n.jsx)(b,{name:"LinkedIn"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"flex",href:"mailto:alexmcc.dev@gmail.com",target:"_blank",rel:"noreferrer noopener",children:Object(n.jsx)(b,{name:"Email"})})})]})})},h=function(){return Object(n.jsxs)("footer",{className:"text-center text-sm px-4 pb-4 w-full bg-footer dark:bg-footerDark",children:[Object(n.jsx)("div",{className:"flex justify-center pb-4",children:Object(n.jsx)(m,{})}),"Copyright \xa9 ",(new Date).getFullYear()," ","alexmcc.dev"]})},p=r("g4pe"),j=r.n(p);r("VxdY");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.a,{children:Object(n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})}),Object(n.jsx)(f,{}),Object(n.jsx)("main",{className:"flex-1",children:Object(n.jsx)(t,y({},r))}),Object(n.jsx)(h,{})]})}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o}},[[0,0,1,2,3]]]);