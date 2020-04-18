webpackHotUpdate("static/development/pages/hero.js",{

/***/ "./pages/hero.tsx":
/*!************************!*\
  !*** ./pages/hero.tsx ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeroesDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeroesDetail */ "./components/HeroesDetail.tsx");
var _this = undefined,
    _jsxFileName = "/Users/jormpoon/Desktop/Personal Projects/epic_seven_guide/pages/hero.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Hero = function Hero(props) {
  console.log(props.results);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Heroes of Epic Seven", props.results.map(function (hero) {
    return __jsx(_components_HeroesDetail__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attribute: hero.attribute,
      name: hero.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 24
      }
    });
  }));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=hero.js.15710bdeeb0e2c74bf18.hot-update.js.map