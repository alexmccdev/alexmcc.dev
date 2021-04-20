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



var ThemeToggle = function ThemeToggle(props) {
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
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVUb2dnbGUudHN4Il0sIm5hbWVzIjpbIlRoZW1lVG9nZ2xlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJodG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsV0FBd0MsR0FBRyxTQUEzQ0EsV0FBMkMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQzlCQyxzREFBUSxDQUM5QixTQUFpQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEtBQWlDLE9BQWxFLEdBQTRFLE9BQTVFLEdBQXNGLE1BRHhELENBRHNCO0FBQUEsTUFDakRDLEtBRGlEO0FBQUEsTUFDMUNDLFFBRDBDOztBQUt4RCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0FBRUEsUUFBSSxDQUFDLENBQUNQLFlBQVksQ0FBQ0UsS0FBZixJQUF3QkYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEtBQWlDLE1BQTdELEVBQXFFO0FBQ2pFSSxVQUFJLENBQUNHLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixNQUF0QjtBQUNBSixVQUFJLENBQUNHLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixPQUFuQjtBQUNBVixrQkFBWSxDQUFDVyxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE9BQTlCO0FBQ0FSLGNBQVEsQ0FBQyxPQUFELENBQVI7QUFDSCxLQUxELE1BS087QUFDSEUsVUFBSSxDQUFDRyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsT0FBdEI7QUFDQUosVUFBSSxDQUFDRyxTQUFMLENBQWVFLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQVYsa0JBQVksQ0FBQ1csT0FBYixDQUFxQixPQUFyQixFQUE4QixNQUE5QjtBQUNBUixjQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0g7QUFDSixHQWREOztBQWVBLHNCQUNJO0FBQU0sUUFBSSxFQUFDLEtBQVg7QUFBaUIsa0JBQVcsY0FBNUI7QUFBMkMsYUFBUyxFQUFDLGdCQUFyRDtBQUFzRSxXQUFPLEVBQUVDLFdBQS9FO0FBQUEsY0FDS0YsS0FBSyxJQUFJLE9BQVQsR0FBbUIsSUFBbkIsR0FBMEI7QUFEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0F6QkQ7O0dBQU1MLFc7O0tBQUFBLFc7QUEyQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODhlZmUwYTQyMjNkOTY0OGJjNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgSVRoZW1lVG9nZ2xlUHJvcHMge31cclxuXHJcbmNvbnN0IFRoZW1lVG9nZ2xlOiBSZWFjdC5GQzxJVGhlbWVUb2dnbGVQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT0gJ2xpZ2h0JyA/ICdsaWdodCcgOiAnZGFyaydcclxuICAgIClcclxuXHJcbiAgICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXHJcblxyXG4gICAgICAgIGlmICghIWxvY2FsU3RvcmFnZS50aGVtZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PSAnZGFyaycpIHtcclxuICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcclxuICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdsaWdodCcpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpXHJcbiAgICAgICAgICAgIHNldFRoZW1lKCdsaWdodCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpXHJcbiAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnZGFyaycpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJylcclxuICAgICAgICAgICAgc2V0VGhlbWUoJ2RhcmsnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gcm9sZT1cImJ0blwiIGFyaWEtbGFiZWw9XCJ0b2dnbGUgdGhlbWVcIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfT5cclxuICAgICAgICAgICAge3RoZW1lID09ICdsaWdodCcgPyAn4piA77iPJyA6ICfwn4yZJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lVG9nZ2xlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=