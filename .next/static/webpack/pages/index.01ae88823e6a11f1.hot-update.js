"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/bio.js":
/*!***************************!*\
  !*** ./components/bio.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AchievementSection\": function() { return /* binding */ AchievementSection; },\n/* harmony export */   \"AchievementYear\": function() { return /* binding */ AchievementYear; },\n/* harmony export */   \"BioYear\": function() { return /* binding */ BioYear; },\n/* harmony export */   \"EduSection\": function() { return /* binding */ EduSection; },\n/* harmony export */   \"ExpSection\": function() { return /* binding */ ExpSection; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding-left: 6.8em;\\n  text-indent: -6.8em;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding-left: 11em;\\n  text-indent: -11em;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-weight: bold;\\n  margin-right: 1em;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding-left: 3em;\\n  text-indent: 3em;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-weight: bold;\\n  margin-right: 1em;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\n\nvar EduSection = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box)(_templateObject());\nvar ExpSection = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box)(_templateObject1());\nvar BioYear = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject2());\nvar AchievementSection = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box)(_templateObject3());\nvar AchievementYear = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jpby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0Y7QUFFN0IsSUFBTUUsVUFBVSxHQUFHRCwyREFBTSxDQUFDRCxpREFBRyxDQUFDLG1CQUdwQztBQUNNLElBQU1HLFVBQVUsR0FBR0YsMkRBQU0sQ0FBQ0QsaURBQUcsQ0FBQyxvQkFHcEM7QUFFTSxJQUFNSSxPQUFPLEdBQUdILDREQUFXLG9CQUdqQztBQUVNLElBQU1LLGtCQUFrQixHQUFHTCwyREFBTSxDQUFDRCxpREFBRyxDQUFDLG9CQUc1QztBQUNNLElBQU1PLGVBQWUsR0FBR04sNERBQVcsb0JBR3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmlvLmpzPzFmOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5leHBvcnQgY29uc3QgRWR1U2VjdGlvbiA9IHN0eWxlZChCb3gpYFxuICBwYWRkaW5nLWxlZnQ6IDYuOGVtO1xuICB0ZXh0LWluZGVudDogLTYuOGVtO1xuYFxuZXhwb3J0IGNvbnN0IEV4cFNlY3Rpb24gPSBzdHlsZWQoQm94KWBcbiAgcGFkZGluZy1sZWZ0OiAxMWVtO1xuICB0ZXh0LWluZGVudDogLTExZW07XG5gXG5cbmV4cG9ydCBjb25zdCBCaW9ZZWFyID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbmBcblxuZXhwb3J0IGNvbnN0IEFjaGlldmVtZW50U2VjdGlvbiA9IHN0eWxlZChCb3gpYFxuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbiAgdGV4dC1pbmRlbnQ6IDNlbTtcbmBcbmV4cG9ydCBjb25zdCBBY2hpZXZlbWVudFllYXIgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuYFxuIl0sIm5hbWVzIjpbIkJveCIsInN0eWxlZCIsIkVkdVNlY3Rpb24iLCJFeHBTZWN0aW9uIiwiQmlvWWVhciIsInNwYW4iLCJBY2hpZXZlbWVudFNlY3Rpb24iLCJBY2hpZXZlbWVudFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/bio.js\n"));

/***/ })

});