webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/ProjectCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ProjectCard.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/ExternalLinkIcon */ "./src/components/Icons/ExternalLinkIcon.tsx");
/* harmony import */ var _Icons_TechnologyIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/TechnologyIcons */ "./src/components/Icons/TechnologyIcons.tsx");


var _jsxFileName = "C:\\Users\\alexm\\Dev\\alexmccdev\\src\\components\\ProjectCard.tsx",
    _this = undefined;





var ProjectCard = function ProjectCard(_ref) {
  var project = _ref.project;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
    className: "max-w-xl relative flex flex-col w-full p-4 mb-6 border border-current",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-between mb-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "chunky-underline-sm",
        children: project.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "tilt motion-reduce:transform-none cursor-pointer",
        href: project.link,
        target: "_blank",
        rel: "noreferrer noopener",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Icons_ExternalLinkIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-1 mb-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: project.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex h-6",
      children: project.technologies.map(function (t) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "mr-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Icons_TechnologyIcons__WEBPACK_IMPORTED_MODULE_3__["default"], {
            name: t
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this)
        }, t, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_c = ProjectCard;
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

var _c;

$RefreshReg$(_c, "ProjectCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4Il0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvamVjdCIsIm5hbWUiLCJsaW5rIiwiZGVzY3JpcHRpb24iLCJ0ZWNobm9sb2dpZXMiLCJtYXAiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLFdBQXdDLEdBQUcsU0FBM0NBLFdBQTJDLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzlELHNCQUNJO0FBQVMsYUFBUyxFQUFDLHVFQUFuQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLHFCQUFkO0FBQUEsa0JBQXFDQSxPQUFPLENBQUNDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQ0ksaUJBQVMsRUFBQyxrREFEZDtBQUVJLFlBQUksRUFBRUQsT0FBTyxDQUFDRSxJQUZsQjtBQUdJLGNBQU0sRUFBQyxRQUhYO0FBSUksV0FBRyxFQUFDLHFCQUpSO0FBQUEsK0JBTUkscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVlJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0k7QUFBQSxrQkFBSUYsT0FBTyxDQUFDRztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkosZUFlSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsZ0JBQ0tILE9BQU8sQ0FBQ0ksWUFBUixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQ0MsQ0FBRDtBQUFBLDRCQUN0QjtBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQSxpQ0FDSSxxRUFBQyw4REFBRDtBQUFpQixnQkFBSSxFQUFFQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBNEJBLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHNCO0FBQUEsT0FBekI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5QkgsQ0ExQkQ7O0tBQU1QLFc7QUE0QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLmFiZDFhNTYxZjk0OTMyNTRlYWFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFeHRlcm5hbExpbmtJY29uIGZyb20gJy4vSWNvbnMvRXh0ZXJuYWxMaW5rSWNvbidcclxuaW1wb3J0IFRlY2hub2xvZ3lJY29ucyBmcm9tICcuL0ljb25zL1RlY2hub2xvZ3lJY29ucydcclxuXHJcbmludGVyZmFjZSBJUHJvamVjdENhcmRQcm9wcyB7XHJcbiAgICBwcm9qZWN0OiBQcm9qZWN0XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RDYXJkOiBSZWFjdC5GQzxJUHJvamVjdENhcmRQcm9wcz4gPSAoeyBwcm9qZWN0IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWF4LXcteGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgcC00IG1iLTYgYm9yZGVyIGJvcmRlci1jdXJyZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNodW5reS11bmRlcmxpbmUtc21cIj57cHJvamVjdC5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbHQgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEV4dGVybmFsTGlua0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtNlwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3QudGVjaG5vbG9naWVzLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTRcIiBrZXk9e3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVjaG5vbG9neUljb25zIG5hbWU9e3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==