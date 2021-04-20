webpackHotUpdate_N_E("pages/about",{

/***/ "./src/components/Layout/PageWrapper.tsx":
/*!***********************************************!*\
  !*** ./src/components/Layout/PageWrapper.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\alexm\\Dev\\alexmccdev\\src\\components\\Layout\\PageWrapper.tsx",
    _this = undefined;



var PageWrapper = function PageWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "flex h-full justify-center items-center px-4",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, _this);
};

_c = PageWrapper;
/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

var _c;

$RefreshReg$(_c, "PageWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Sections/AboutSection.tsx":
/*!**************************************************!*\
  !*** ./src/components/Sections/AboutSection.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layout/PageWrapper */ "./src/components/Layout/PageWrapper.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\alexm\\Dev\\alexmccdev\\src\\components\\Sections\\AboutSection.tsx",
    _this = undefined;





var AboutSection = function AboutSection() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "max-w-xl text-xl z-50 tracking-tight",
      children: ["Currently, I am a software consultant working on an education grants management platform at", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "chunky-underline-sm cursor-pointer",
        href: "https://hmbnet.com/egrants/",
        target: "_blank",
        rel: "noreferrer noopener",
        children: "Harris, Mackessy & Brennan, Inc."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), "Harris, Mackessy & Brennan, Inc.".charAt("Harris, Mackessy & Brennan, Inc.".length - 1) !== '.' && '.', " I began my career as an industrial & systems engineer in Columbus, Ohio working in manufacturing and on data migration projects before learning", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        role: "img",
        "aria-label": "sparkle",
        children: "\u2728"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), "web development", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        role: "img",
        "aria-label": "sparkle",
        children: "\u2728"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), ". In my free time, I enjoy learning new technologies, hacking on", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "chunky-underline-sm cursor-pointer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/projects",
          children: "side-projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), ", and rock climbing!", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        role: "img",
        "aria-label": "strong",
        children: "\uD83D\uDCAA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_c = AboutSection;
/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

var _c;

$RefreshReg$(_c, "AboutSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L1BhZ2VXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvQWJvdXRTZWN0aW9uLnRzeCJdLCJuYW1lcyI6WyJQYWdlV3JhcHBlciIsImNoaWxkcmVuIiwiQWJvdXRTZWN0aW9uIiwicHJvY2VzcyIsImVtcGxveWVyTmFtZSIsImNoYXJBdCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQSxJQUFNQSxXQUF3QyxHQUFHLFNBQTNDQSxXQUEyQyxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMvRCxzQkFBTztBQUFTLGFBQVMsRUFBQyw4Q0FBbkI7QUFBQSxjQUFtRUE7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FGRDs7S0FBTUQsVztBQUlTQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUUsWUFBMEMsR0FBRyxTQUE3Q0EsWUFBNkMsR0FBTTtBQUNyRCxzQkFDSSxxRUFBQyxzRUFBRDtBQUFBLDJCQUNJO0FBQUcsZUFBUyxFQUFDLHNDQUFiO0FBQUEsZ0hBQ2dHLEdBRGhHLGVBRUk7QUFDSSxpQkFBUyxFQUFDLG9DQURkO0FBRUksWUFBSSxFQUFFQyw2QkFGVjtBQUdJLGNBQU0sRUFBQyxRQUhYO0FBSUksV0FBRyxFQUFDLHFCQUpSO0FBQUEsa0JBTUtBLGtDQUF3QkM7QUFON0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBVUtELGtDQUFBLENBQXlCRSxNQUF6QixDQUFnQ0Ysa0NBQUEsQ0FBeUJHLE1BQXpCLEdBQWtDLENBQWxFLE1BQXlFLEdBQXpFLElBQWdGLEdBVnJGLHNKQVk2QixHQVo3QixlQWFJO0FBQU0sWUFBSSxFQUFDLEtBQVg7QUFBaUIsc0JBQVcsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixrQ0FpQkk7QUFBTSxZQUFJLEVBQUMsS0FBWDtBQUFpQixzQkFBVyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCSixzRUFvQnFFLEdBcEJyRSxlQXFCSTtBQUFNLGlCQUFTLEVBQUMsb0NBQWhCO0FBQUEsK0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkosMEJBd0J5QixHQXhCekIsZUF5Qkk7QUFBTSxZQUFJLEVBQUMsS0FBWDtBQUFpQixzQkFBVyxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQ0gsQ0FsQ0Q7O0tBQU1KLFk7QUFvQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmI0NGJlMDNjN2VmYTI2Y2NjYmEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgSVBhZ2VXcmFwcGVyUHJvcHMge31cclxuXHJcbmNvbnN0IFBhZ2VXcmFwcGVyOiBSZWFjdC5GQzxJUGFnZVdyYXBwZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTRcIj57Y2hpbGRyZW59PC9zZWN0aW9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlV3JhcHBlclxyXG4iLCJpbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0L1BhZ2VXcmFwcGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmludGVyZmFjZSBJQWJvdXRTZWN0aW9uUHJvcHMge31cclxuXHJcbmNvbnN0IEFib3V0U2VjdGlvbjogUmVhY3QuRkM8SUFib3V0U2VjdGlvblByb3BzPiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy14bCB0ZXh0LXhsIHotNTAgdHJhY2tpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIEN1cnJlbnRseSwgSSBhbSBhIHNvZnR3YXJlIGNvbnN1bHRhbnQgd29ya2luZyBvbiBhbiBlZHVjYXRpb24gZ3JhbnRzIG1hbmFnZW1lbnQgcGxhdGZvcm0gYXR7JyAnfVxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaHVua3ktdW5kZXJsaW5lLXNtIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5lbXBsb3llckxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuZW1wbG95ZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52LmVtcGxveWVyTmFtZS5jaGFyQXQocHJvY2Vzcy5lbnYuZW1wbG95ZXJOYW1lLmxlbmd0aCAtIDEpICE9PSAnLicgJiYgJy4nfSBJIGJlZ2FuIG15IGNhcmVlclxyXG4gICAgICAgICAgICAgICAgYXMgYW4gaW5kdXN0cmlhbCAmYW1wOyBzeXN0ZW1zIGVuZ2luZWVyIGluIENvbHVtYnVzLCBPaGlvIHdvcmtpbmcgaW4gbWFudWZhY3R1cmluZyBhbmQgb24gZGF0YSBtaWdyYXRpb25cclxuICAgICAgICAgICAgICAgIHByb2plY3RzIGJlZm9yZSBsZWFybmluZ3snICd9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cInNwYXJrbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICDinKhcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHdlYiBkZXZlbG9wbWVudFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJzcGFya2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4pyoXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAuIEluIG15IGZyZWUgdGltZSwgSSBlbmpveSBsZWFybmluZyBuZXcgdGVjaG5vbG9naWVzLCBoYWNraW5nIG9ueycgJ31cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNodW5reS11bmRlcmxpbmUtc20gY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+c2lkZS1wcm9qZWN0czwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICwgYW5kIHJvY2sgY2xpbWJpbmcheycgJ31cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwic3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg8J+SqlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTZWN0aW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=