webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/ThemeToggle.tsx":
/*!****************************************!*\
  !*** ./src/components/ThemeToggle.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\alexm\\Dev\\alexmccdev\\src\\components\\ThemeToggle.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var ThemeToggle = function ThemeToggle() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])( true && localStorage.getItem('theme') == 'light' ? 'light' : 'dark'),
      theme = _useState[0],
      setTheme = _useState[1];

  var toggleTheme = function toggleTheme() {
    var html = document.querySelector('html');

    if (!!localStorage.theme && localStorage.getItem('theme') == 'dark') {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    role: "btn",
    "aria-label": "toggle theme",
    className: "cursor-pointer",
    onClick: toggleTheme,
    children: theme == 'light' ? '☀️' : '🌙'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(ThemeToggle, "IzICIkvDQukMBznY3JBihgjBIZk=");

_c = ThemeToggle;
/* harmony default export */ __webpack_exports__["default"] = (ThemeToggle);

var _c;

$RefreshReg$(_c, "ThemeToggle");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVUb2dnbGUudHN4Il0sIm5hbWVzIjpbIlRoZW1lVG9nZ2xlIiwidXNlU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbWUiLCJzZXRUaGVtZSIsInRvZ2dsZVRoZW1lIiwiaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQXdDLEdBQUcsU0FBM0NBLFdBQTJDLEdBQU07QUFBQTs7QUFBQSxrQkFDekJDLHNEQUFRLENBQzlCLFNBQWlDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsS0FBaUMsT0FBbEUsR0FBNEUsT0FBNUUsR0FBc0YsTUFEeEQsQ0FEaUI7QUFBQSxNQUM1Q0MsS0FENEM7QUFBQSxNQUNyQ0MsUUFEcUM7O0FBS25ELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxRQUFJLENBQUMsQ0FBQ1AsWUFBWSxDQUFDRSxLQUFmLElBQXdCRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsS0FBaUMsTUFBN0QsRUFBcUU7QUFDakVJLFVBQUksQ0FBQ0csU0FBTCxDQUFlQyxNQUFmLENBQXNCLE1BQXRCO0FBQ0FKLFVBQUksQ0FBQ0csU0FBTCxDQUFlRSxHQUFmLENBQW1CLE9BQW5CO0FBQ0FWLGtCQUFZLENBQUNXLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIsT0FBOUI7QUFDQVIsY0FBUSxDQUFDLE9BQUQsQ0FBUjtBQUNILEtBTEQsTUFLTztBQUNIRSxVQUFJLENBQUNHLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixPQUF0QjtBQUNBSixVQUFJLENBQUNHLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixNQUFuQjtBQUNBVixrQkFBWSxDQUFDVyxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE1BQTlCO0FBQ0FSLGNBQVEsQ0FBQyxNQUFELENBQVI7QUFDSDtBQUNKLEdBZEQ7O0FBZUEsc0JBQ0k7QUFBTSxRQUFJLEVBQUMsS0FBWDtBQUFpQixrQkFBVyxjQUE1QjtBQUEyQyxhQUFTLEVBQUMsZ0JBQXJEO0FBQXNFLFdBQU8sRUFBRUMsV0FBL0U7QUFBQSxjQUNLRixLQUFLLElBQUksT0FBVCxHQUFtQixJQUFuQixHQUEwQjtBQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQXpCRDs7R0FBTUosVzs7S0FBQUEsVztBQTJCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZWNiMTBiMDJlOTBjNDkwMDNhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFRoZW1lVG9nZ2xlOiBSZWFjdC5GQzxJVGhlbWVUb2dnbGVQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09ICdsaWdodCcgPyAnbGlnaHQnIDogJ2RhcmsnXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxyXG5cclxuICAgICAgICBpZiAoISFsb2NhbFN0b3JhZ2UudGhlbWUgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT0gJ2RhcmsnKSB7XHJcbiAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXHJcbiAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKVxyXG4gICAgICAgICAgICBzZXRUaGVtZSgnbGlnaHQnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHQnKVxyXG4gICAgICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpXHJcbiAgICAgICAgICAgIHNldFRoZW1lKCdkYXJrJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIHJvbGU9XCJidG5cIiBhcmlhLWxhYmVsPVwidG9nZ2xlIHRoZW1lXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+XHJcbiAgICAgICAgICAgIHt0aGVtZSA9PSAnbGlnaHQnID8gJ+KYgO+4jycgOiAn8J+MmSd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVRvZ2dsZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9