(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/hero.js"],{

/***/ "./components/HeroesDetail.tsx":
/*!*************************************!*\
  !*** ./components/HeroesDetail.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/jormpoon/Desktop/Personal Projects/epic_seven_guide/components/HeroesDetail.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var HeroesDetail = function HeroesDetail(_ref) {
  var name = _ref.name,
      attribute = _ref.attribute;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, attribute));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroesDetail);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhero&absolutePagePath=%2FUsers%2Fjormpoon%2FDesktop%2FPersonal%20Projects%2Fepic_seven_guide%2Fpages%2Fhero.tsx!./":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhero&absolutePagePath=%2FUsers%2Fjormpoon%2FDesktop%2FPersonal%20Projects%2Fepic_seven_guide%2Fpages%2Fhero.tsx ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/hero", function() {
      var mod = __webpack_require__(/*! ./pages/hero.tsx */ "./pages/hero.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/hero.tsx */ "./pages/hero.tsx", function() {
          if(!next.router.components["/hero"]) return
          var updatedPage = __webpack_require__(/*! ./pages/hero.tsx */ "./pages/hero.tsx")
          next.router.update("/hero", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

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

/***/ }),

/***/ 2:
/*!**************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fhero&absolutePagePath=%2FUsers%2Fjormpoon%2FDesktop%2FPersonal%20Projects%2Fepic_seven_guide%2Fpages%2Fhero.tsx ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fhero&absolutePagePath=%2FUsers%2Fjormpoon%2FDesktop%2FPersonal%20Projects%2Fepic_seven_guide%2Fpages%2Fhero.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhero&absolutePagePath=%2FUsers%2Fjormpoon%2FDesktop%2FPersonal%20Projects%2Fepic_seven_guide%2Fpages%2Fhero.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=hero.js.map