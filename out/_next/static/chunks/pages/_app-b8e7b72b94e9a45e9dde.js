_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"20a2":function(e,t,r){e.exports=r("nOHt")},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},VxdY:function(e,t,r){},hUgY:function(e,t,r){"use strict";r.r(t);var c=r("nKUr");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=r("q1tI"),a=r("YFqc"),l=r.n(a),i=r("20a2"),o=function(e){return Object(c.jsx)(l.a,{href:"/",children:Object(c.jsxs)("a",{className:"flex border-primary dark:border-primaryDark border-2 w-14.5 h-14.5 max-h-14.5 cursor-pointer tilt motion-reduce:transform-none",children:[Object(c.jsxs)("h1",{className:"text-4xl chunky-underline-lg",children:["M",Object(c.jsx)("span",{className:"relative -bottom-1",children:"c"})]}),Object(c.jsx)("span",{className:"font-bold absolute right-2.5 animate-bounce motion-safe:animate-bounce",children:"c"})]})})},j=function(){var e=Object(s.useState)("light"==localStorage.getItem("theme")?"light":"dark"),t=e[0],r=e[1];return Object(c.jsx)("span",{role:"btn","aria-label":"toggle theme",className:"cursor-pointer",onClick:function(){var e=document.querySelector("html");localStorage.theme&&"dark"==localStorage.getItem("theme")?(e.classList.remove("dark"),e.classList.add("light"),localStorage.setItem("theme","light"),r("light")):(e.classList.remove("light"),e.classList.add("dark"),localStorage.setItem("theme","dark"),r("dark"))},children:"light"==t?"\u2600\ufe0f":"\ud83c\udf19"})},m=function(){var e=Object(i.useRouter)().pathname;return Object(c.jsxs)("nav",{className:"w-full flex p-4 align-middle justify-between mb-10",children:[Object(c.jsx)("div",{children:Object(c.jsx)(o,{})}),Object(c.jsxs)("ul",{className:"block text-right sm:flex text-base md:text-2xl",children:[Object(c.jsx)("li",{className:"mr-2 sm:mr-6 my-auto",children:Object(c.jsx)("span",{className:"".concat("/"===e&&"underline"," cursor-pointer"),children:Object(c.jsx)(l.a,{href:"/",children:"Home"})})}),Object(c.jsx)("li",{className:"mr-2 sm:mr-6 my-auto",children:Object(c.jsx)("span",{className:"".concat("/about"===e&&"underline"," cursor-pointer"),children:Object(c.jsx)(l.a,{href:"/about",children:"About"})})}),Object(c.jsx)("li",{className:"mr-2 sm:mr-6 my-auto",children:Object(c.jsx)("span",{className:"".concat("/projects"===e&&"underline"," cursor-pointer"),children:Object(c.jsx)(l.a,{href:"/projects",children:"Projects"})})}),Object(c.jsx)("li",{className:"my-auto mr-2 sm:mr-0",children:Object(c.jsx)(j,{})})]})]})},b=function(e){switch(e.name.toLowerCase()){case"github":return Object(c.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-current w-6 tilt motion-reduce:transform-none",children:[Object(c.jsx)("title",{children:"GitHub"}),Object(c.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]});case"linkedin":return Object(c.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-current w-6 tilt motion-reduce:transform-none",children:[Object(c.jsx)("title",{children:"LinkedIn"}),Object(c.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]});case"email":return Object(c.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-current w-6 tilt motion-reduce:transform-none",children:[Object(c.jsx)("title",{children:"Email"}),Object(c.jsx)("path",{d:"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"})]})}},h=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"flex",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"flex mr-2",href:"https://github.com/alexmccdev",target:"_blank",rel:"noreferrer noopener",children:Object(c.jsx)(b,{name:"GitHub"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"flex mr-2",href:"https://www.linkedin.com/in/alexmccdev",target:"_blank",rel:"noreferrer noopener",children:Object(c.jsx)(b,{name:"LinkedIn"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"flex",href:"mailto:alexmcc.dev@gmail.com",target:"_blank",rel:"noreferrer noopener",children:Object(c.jsx)(b,{name:"Email"})})})]})})},d=function(e){return Object(c.jsxs)("footer",{className:"text-center text-sm p-4 w-full",children:[Object(c.jsx)("div",{className:"flex justify-center mb-4",children:Object(c.jsx)(h,{})}),"Copyright \xa9 ",(new Date).getFullYear()," ","alexmcc.dev"]})},u=r("g4pe"),x=r.n(u);r("VxdY");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x.a,{children:Object(c.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})}),Object(c.jsx)(m,{}),Object(c.jsx)("main",{className:"flex-1",children:Object(c.jsx)(t,f({},r))}),Object(c.jsx)(d,{})]})}}},[[0,0,1,2,3]]]);