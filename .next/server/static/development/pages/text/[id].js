module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.tsx":
/*!*******************************!*\
  !*** ./components/Button.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kashi-lab/github/tangochou/components/Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


const Button = props => __jsx("button", {
  onClick: props.clickhandler,
  className: "jsx-113404155",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "113404155",
  __self: undefined
}, "button.jsx-113404155{background-color:#230903;border:none;color:#fff;font-family:'Hepta Slab',serif;font-size:0.8rem;font-weight:bold;padding:0.3rem 0.5rem;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9jb21wb25lbnRzL0J1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCLEFBR2tDLHlCQUNiLFlBQ0QsV0FDcUIsK0JBQ2YsaUJBQ0EsaUJBQ0ssc0JBQ0cseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9jb21wb25lbnRzL0J1dHRvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8vIHRleHQ6IHN0cmluZztcbiAgY2xpY2toYW5kbGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZDtcbn1cbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gcHJvcHMgPT4gKFxuICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmNsaWNraGFuZGxlcn0+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzA5MDM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGVwdGEgU2xhYicsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2J1dHRvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/components/Button.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./components/Menu.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kashi-lab/github/tangochou/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




const Layout = props => __jsx("div", {
  className: "jsx-678887812",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-678887812",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "vocab-with-context"), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Hepta+Slab&display=swap",
  rel: "stylesheet",
  className: "jsx-678887812",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("link", {
  href: "node_modules/loaders.css/src/animations/line-scale.scss",
  className: "jsx-678887812",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("main", {
  className: "jsx-678887812",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "678887812",
  __self: undefined
}, "div.jsx-678887812{background-color:#f2fef1;box-sizing:border-box;color:#230903;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Hepta Slab',serif;line-height:2;}main.jsx-678887812{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:30vw;min-height:calc(100vh - 16px);padding:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQixBQUdrQyxBQVFILHNCQUNULEdBUlMsc0JBQ1IsY0FDRCxtQ0FPRyx1Q0FOZ0IsOEJBT1YsQ0FOUixjQUNoQiwrREFNbUIsaUJBQ2EsOEJBQ2pCLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2thc2hpLWxhYi9naXRodWIvdGFuZ29jaG91L2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgVGV4dHMgZnJvbSAnLi9UZXh0cyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPHt9PiA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT52b2NhYi13aXRoLWNvbnRleHQ8L3RpdGxlPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IZXB0YStTbGFiJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgPjwvbGluaz5cbiAgICAgIDxsaW5rIGhyZWY9XCJub2RlX21vZHVsZXMvbG9hZGVycy5jc3Mvc3JjL2FuaW1hdGlvbnMvbGluZS1zY2FsZS5zY3NzXCI+PC9saW5rPlxuICAgIDwvSGVhZD5cblxuICAgIDxNZW51IC8+XG4gICAgPG1haW4+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmZWYxO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogIzIzMDkwMztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZXB0YSBTbGFiJywgc2VyaWY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgfVxuICAgICAgbWFpbiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHZ3O1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZweCk7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/components/Layout.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Menu.tsx":
/*!*****************************!*\
  !*** ./components/Menu.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Texts */ "./components/Texts.tsx");
var _jsxFileName = "/Users/kashi-lab/github/tangochou/components/Menu.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




const Menu = () => __jsx("div", {
  className: "jsx-99495791",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/add-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-99495791",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "add new text")), __jsx("p", {
  className: "jsx-99495791",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "TEXTS: "), __jsx(_Texts__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/vocab",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-99495791",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "vocab")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "99495791",
  __self: undefined
}, "a.jsx-99495791,a.jsx-99495791:visited,div.jsx-99495791{color:#230903;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}a.jsx-99495791:hover{color:#656256;}div.jsx-99495791{background-color:#9ebc9f;box-sizing:border-box;height:calc(100vh - 16px);padding:1rem;position:fixed;width:30vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9jb21wb25lbnRzL01lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFLdUIsQUFLQSxBQUdXLGNBUFIsQUFLbkIsV0FHd0IsTUFQRCxnQkFRSywwQkFDYixRQVJmLEtBU2lCLGVBQ0osV0FDYiIsImZpbGUiOiIvVXNlcnMva2FzaGktbGFiL2dpdGh1Yi90YW5nb2Nob3UvY29tcG9uZW50cy9NZW51LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgVGV4dHMgZnJvbSAnLi9UZXh0cyc7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPExpbmsgaHJlZj1cIi9hZGQtdGV4dFwiPlxuICAgICAgPGE+YWRkIG5ldyB0ZXh0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8cD5URVhUUzogPC9wPlxuXG4gICAgPFRleHRzIC8+XG5cbiAgICA8TGluayBocmVmPVwiL3ZvY2FiXCI+XG4gICAgICA8YT52b2NhYjwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhLFxuICAgICAgYTp2aXNpdGVkLFxuICAgICAgZGl2IHtcbiAgICAgICAgY29sb3I6ICMyMzA5MDM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM2NTYyNTY7XG4gICAgICB9XG4gICAgICBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWViYzlmO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNnB4KTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMzB2dztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdfQ== */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/components/Menu.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Texts.tsx":
/*!******************************!*\
  !*** ./components/Texts.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/kashi-lab/github/tangochou/components/Texts.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


const initTitleState = {
  texts: [{
    id: 1,
    title: 'init 1',
    desc: 'dummy',
    text: 'dummy'
  }, {
    id: 2,
    title: 'init2',
    desc: 'dummy',
    text: 'dummy'
  }]
};

class Texts extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", initTitleState);
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3001/texts');
    const data = await res.json();
    this.setState({
      texts: data
    });
  }

  render() {
    return __jsx("ul", {
      className: "jsx-3170864205",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, this.state.texts.map((item, i) => __jsx("li", {
      key: i,
      className: "jsx-3170864205",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: i,
      href: "/text/[id]",
      as: `/text/${item.id}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("a", {
      key: i,
      className: "jsx-3170864205",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item.title)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3170864205",
      __self: this
    }, "a.jsx-3170864205,a.jsx-3170864205:visited{color:#230903;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3170864205:hover{color:#656256;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9jb21wb25lbnRzL1RleHRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q29CLEFBSTJCLEFBS0EsY0FKRyxBQUtuQixpQkFKdUIsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9jb21wb25lbnRzL1RleHRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbnRlcmZhY2UgVGl0bGVTdGF0ZSB7XG4gIHRleHRzOiB7IGlkOiBudW1iZXI7IHRpdGxlOiBzdHJpbmc7IGRlc2M6IHN0cmluZzsgdGV4dDogc3RyaW5nIH1bXTtcbn1cblxuY29uc3QgaW5pdFRpdGxlU3RhdGUgPSB7XG4gIHRleHRzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogJ2luaXQgMScsXG4gICAgICBkZXNjOiAnZHVtbXknLFxuICAgICAgdGV4dDogJ2R1bW15JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6ICdpbml0MicsXG4gICAgICBkZXNjOiAnZHVtbXknLFxuICAgICAgdGV4dDogJ2R1bW15JyxcbiAgICB9LFxuICBdLFxufTtcbmNsYXNzIFRleHRzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDx7fSwge30+IHtcbiAgc3RhdGU6IFRpdGxlU3RhdGUgPSBpbml0VGl0bGVTdGF0ZTtcblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3RleHRzJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRzOiBkYXRhIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7dGhpcy5zdGF0ZS50ZXh0cy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj1cIi90ZXh0L1tpZF1cIiBhcz17YC90ZXh0LyR7aXRlbS5pZH1gfT5cbiAgICAgICAgICAgICAgPGEga2V5PXtpfT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBhLFxuICAgICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgICBjb2xvcjogIzIzMDkwMztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjU2MjU2O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRzO1xuIl19 */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/components/Texts.tsx */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Texts);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/text/[id].tsx":
/*!*****************************!*\
  !*** ./pages/text/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.tsx");
/* harmony import */ var _utils_dbUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/dbUtils */ "./utils/dbUtils.tsx");
/* harmony import */ var _utils_strUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/strUtils */ "./utils/strUtils.tsx");

var _jsxFileName = "/Users/kashi-lab/github/tangochou/pages/text/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];








const Loader = __webpack_require__(/*! react-loaders */ "react-loaders").Loader;

const initialState = {
  wordInText: '',
  wordInVocab: '',
  defs: []
}; // interface State {
//   sWordList: string[];
// }
// const initialState = {
//   sWordList: [],
// };

const linkStyle = {
  color: 'white',
  fontSize: '0.5rem',
  fontWeight: 'bold',
  textDecoration: 'none'
}; // span clicked -> show definition

class Text extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", initialState);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cleanString", str => {
      // remove commas and periods
      str = Object(_utils_strUtils__WEBPACK_IMPORTED_MODULE_8__["strip"])(str); // split string if concatenated

      if (str.includes('’')) {
        str = str.split('’')[1];
      } else if (str.includes("'")) {
        str = str.split("'")[1];
      } // lowercase


      return str.toLowerCase();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleWordClick", async event => {
      // show loading
      const loader = __jsx("img", {
        src: "/static/loader.gif",
        style: {
          width: '3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      });

      const container = document.getElementsByClassName('def')[0];
      react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(loader, container); // clean string

      this.state.wordInText = event.target.innerHTML;
      this.state.wordInVocab = this.cleanString(this.state.wordInText); // show link to Linguee

      const url = `https://www.linguee.fr/francais-anglais/search?source=auto&query=${this.state.wordInVocab}`;

      const link = __jsx("a", {
        href: url,
        style: linkStyle,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, url);

      document.getElementsByClassName('word')[0].innerText = this.state.wordInVocab;
      react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(link, document.getElementsByClassName('def-link')[0]); // get definitions from Linguee

      let response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(`http://localhost:3000/api/linguee/${this.state.wordInVocab}`);
      let data = await response.json();
      data = [];

      if (!data.length) {
        console.log('trying collins...'); // linguee timed out
        // get definitions from collitions

        response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(`http://localhost:3000/api/collins/${this.state.wordInVocab}`);
        data = await response.json();
      } // display definitions


      const spanStyle = {
        marginRight: '1rem'
      };
      let elements;

      if (data.length) {
        // copy to state
        this.state.defs = data;
        elements = data.map((item, index) => __jsx("span", {
          key: index,
          style: spanStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, item));
      } else {
        elements = __jsx("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, "no definition found :(");
      }

      console.log(this.state.defs);
      react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(elements, container);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "textWithTags", (text, wordlist) => __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, text.split(' ').map((word, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("span", {
      key: index,
      onClick: this.handleWordClick,
      className: "jsx-3182803227" + " " + ((wordlist.includes(word) ? 'highlight' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, Object(_utils_strUtils__WEBPACK_IMPORTED_MODULE_8__["unescape"])(word)), "\xA0")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3182803227",
      __self: this
    }, ".highlight.jsx-3182803227{background-color:#a17da1;color:white;padding:0 0.3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9wYWdlcy90ZXh0L1tpZF0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ka0IsQUFHb0MseUJBQ2IsWUFDSyxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2thc2hpLWxhYi9naXRodWIvdGFuZ29jaG91L3BhZ2VzL3RleHQvW2lkXS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRUZXh0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgYWRkV29yZCwgZGVsZXRlV29yZCB9IGZyb20gJy4uLy4uL3V0aWxzL2RiVXRpbHMnO1xuaW1wb3J0IHsgdW5lc2NhcGUsIHN0cmlwIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyVXRpbHMnO1xuXG5pbXBvcnQgc2NzcyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbG9hZGVycy5jc3Mvc3JjL2FuaW1hdGlvbnMvcGFjbWFuLnNjc3MnO1xuY29uc3QgTG9hZGVyID0gcmVxdWlyZSgncmVhY3QtbG9hZGVycycpLkxvYWRlcjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaWQ6IG51bWJlcjtcbiAgZGVzYzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdvcmRsaXN0OiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgd29yZEluVGV4dDogc3RyaW5nO1xuICB3b3JkSW5Wb2NhYjogc3RyaW5nO1xuICBkZWZzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB3b3JkSW5UZXh0OiAnJyxcbiAgd29yZEluVm9jYWI6ICcnLFxuICBkZWZzOiBbXSxcbn07XG4vLyBpbnRlcmZhY2UgU3RhdGUge1xuLy8gICBzV29yZExpc3Q6IHN0cmluZ1tdO1xuLy8gfVxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuLy8gICBzV29yZExpc3Q6IFtdLFxuLy8gfTtcblxuY29uc3QgbGlua1N0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBjb2xvcjogJ3doaXRlJyxcbiAgZm9udFNpemU6ICcwLjVyZW0nLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG59O1xuXG4vLyBzcGFuIGNsaWNrZWQgLT4gc2hvdyBkZWZpbml0aW9uXG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdGV4dHM/aWQ9JHtpZH1gKTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgZGF0YSA9IGRhdGFbMF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICBkZXNjOiBkYXRhLmRlc2MsXG4gICAgICB0ZXh0OiBkYXRhLnRleHQsXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIHdvcmRsaXN0OiBkYXRhLndvcmRsaXN0LFxuICAgIH07XG4gIH1cblxuICBjbGVhblN0cmluZyA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgIC8vIHJlbW92ZSBjb21tYXMgYW5kIHBlcmlvZHNcbiAgICBzdHIgPSBzdHJpcChzdHIpO1xuICAgIC8vIHNwbGl0IHN0cmluZyBpZiBjb25jYXRlbmF0ZWRcbiAgICBpZiAoc3RyLmluY2x1ZGVzKCfigJknKSkge1xuICAgICAgc3RyID0gc3RyLnNwbGl0KCfigJknKVsxXTtcbiAgICB9IGVsc2UgaWYgKHN0ci5pbmNsdWRlcyhcIidcIikpIHtcbiAgICAgIHN0ciA9IHN0ci5zcGxpdChcIidcIilbMV07XG4gICAgfVxuICAgIC8vIGxvd2VyY2FzZVxuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgfTtcbiAgaGFuZGxlV29yZENsaWNrID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgLy8gc2hvdyBsb2FkaW5nXG4gICAgY29uc3QgbG9hZGVyID0gPGltZyBzcmM9XCIvc3RhdGljL2xvYWRlci5naWZcIiBzdHlsZT17eyB3aWR0aDogJzNyZW0nIH19IC8+O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlZicpWzBdO1xuICAgIFJlYWN0RE9NLnJlbmRlcihsb2FkZXIsIGNvbnRhaW5lcik7XG5cbiAgICAvLyBjbGVhbiBzdHJpbmdcbiAgICB0aGlzLnN0YXRlLndvcmRJblRleHQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxTcGFuRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIHRoaXMuc3RhdGUud29yZEluVm9jYWIgPSB0aGlzLmNsZWFuU3RyaW5nKHRoaXMuc3RhdGUud29yZEluVGV4dCk7XG4gICAgLy8gc2hvdyBsaW5rIHRvIExpbmd1ZWVcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cubGluZ3VlZS5mci9mcmFuY2Fpcy1hbmdsYWlzL3NlYXJjaD9zb3VyY2U9YXV0byZxdWVyeT0ke3RoaXMuc3RhdGUud29yZEluVm9jYWJ9YDtcbiAgICBjb25zdCBsaW5rID0gKFxuICAgICAgPGEgaHJlZj17dXJsfSBzdHlsZT17bGlua1N0eWxlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAge3VybH1cbiAgICAgIDwvYT5cbiAgICApO1xuICAgIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ3dvcmQnLFxuICAgIClbMF0gYXMgSFRNTERpdkVsZW1lbnQpLmlubmVyVGV4dCA9IHRoaXMuc3RhdGUud29yZEluVm9jYWI7XG4gICAgUmVhY3RET00ucmVuZGVyKGxpbmssIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlZi1saW5rJylbMF0pO1xuXG4gICAgLy8gZ2V0IGRlZmluaXRpb25zIGZyb20gTGluZ3VlZVxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbGluZ3VlZS8ke3RoaXMuc3RhdGUud29yZEluVm9jYWJ9YCxcbiAgICApO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGRhdGEgPSBbXTtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygndHJ5aW5nIGNvbGxpbnMuLi4nKTtcbiAgICAgIC8vIGxpbmd1ZWUgdGltZWQgb3V0XG4gICAgICAvLyBnZXQgZGVmaW5pdGlvbnMgZnJvbSBjb2xsaXRpb25zXG4gICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jb2xsaW5zLyR7dGhpcy5zdGF0ZS53b3JkSW5Wb2NhYn1gLFxuICAgICAgKTtcbiAgICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIC8vIGRpc3BsYXkgZGVmaW5pdGlvbnNcbiAgICBjb25zdCBzcGFuU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7IG1hcmdpblJpZ2h0OiAnMXJlbScgfTtcblxuICAgIGxldCBlbGVtZW50cztcbiAgICBpZiAoZGF0YS5sZW5ndGgpIHtcbiAgICAgIC8vIGNvcHkgdG8gc3RhdGVcbiAgICAgIHRoaXMuc3RhdGUuZGVmcyA9IGRhdGE7XG4gICAgICBlbGVtZW50cyA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZT17c3BhblN0eWxlfT5cbiAgICAgICAgICB7aXRlbX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzID0gPGk+bm8gZGVmaW5pdGlvbiBmb3VuZCA6KDwvaT47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGVmcyk7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoZWxlbWVudHMsIGNvbnRhaW5lcik7XG4gIH07XG5cbiAgdGV4dFdpdGhUYWdzID0gKHRleHQ6IHN0cmluZywgd29yZGxpc3Q6IHN0cmluZ1tdKSA9PiAoXG4gICAgPD5cbiAgICAgIHt0ZXh0LnNwbGl0KCcgJykubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXt3b3JkbGlzdC5pbmNsdWRlcyh3b3JkKSA/ICdoaWdobGlnaHQnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVdvcmRDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dW5lc2NhcGUod29yZCl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICA8Lz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTE3ZGExO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuM3JlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yZFwiPlxuICAgICAgICAgICAgPGk+Y2xpY2sgb24gYSB3b3JkIDopPC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmXCI+PC9kaXY+XG4gICAgICAgICAgey8qIDxJbnB1dFRleHQgLz4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsaWNraGFuZGxlcj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkV29yZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud29yZEluVGV4dCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud29yZEluVm9jYWIsXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZWZzLFxuICAgICAgICAgICAgICAgICkudGhlbigoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGFkZCB0byB2b2NhYlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsaWNraGFuZGxlcj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlV29yZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud29yZEluVGV4dCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud29yZEluVm9jYWIsXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgICAgICkudGhlbigoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHJlbW92ZSBmcm9tIHZvY2FiXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZi1saW5rXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgPGgzPnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICB7dGhpcy50ZXh0V2l0aFRhZ3ModGhpcy5wcm9wcy50ZXh0LCB0aGlzLnByb3BzLndvcmRsaXN0KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZWYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVmLWxpbmsge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndvcmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMTdkYTE7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud29yZCB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/pages/text/[id].tsx */")));
  }

  static async getInitialProps(context) {
    const {
      id
    } = context.query;
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(`http://localhost:3001/texts?id=${id}`);
    let data = await res.json();
    data = data[0];
    return {
      id: data.id,
      desc: data.desc,
      text: data.text,
      title: data.title,
      wordlist: data.wordlist
    };
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2875986623" + " " + "word-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2875986623" + " " + "word",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("i", {
      className: "jsx-2875986623",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "click on a word :)")), __jsx("div", {
      className: "jsx-2875986623" + " " + "def",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2875986623" + " " + "button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      clickhandler: e => {
        Object(_utils_dbUtils__WEBPACK_IMPORTED_MODULE_7__["addWord"])(this.state.wordInText, this.state.wordInVocab, this.props.id, this.state.defs).then(() => location.reload());
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "add to vocab"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      clickhandler: e => {
        Object(_utils_dbUtils__WEBPACK_IMPORTED_MODULE_7__["deleteWord"])(this.state.wordInText, this.state.wordInVocab, this.props.id).then(() => location.reload());
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "remove from vocab")), __jsx("div", {
      className: "jsx-2875986623" + " " + "def-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    })), __jsx("hr", {
      className: "jsx-2875986623",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }), __jsx("h3", {
      className: "jsx-2875986623",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, this.props.title), __jsx("div", {
      className: "jsx-2875986623" + " " + "text-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, this.textWithTags(this.props.text, this.props.wordlist)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2875986623",
      __self: this
    }, ".button-container.jsx-2875986623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0.5rem 0;width:100%;}.def.jsx-2875986623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;margin:0.5rem 0;}.def-link.jsx-2875986623{line-height:1;}.text-container.jsx-2875986623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;overflow-wrap:break-word;}.word.jsx-2875986623{border-bottom:1px dotted #fff;}.word-container.jsx-2875986623{background-color:#a17da1;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;padding:1rem;}.word.jsx-2875986623{-webkit-flex-basis:30%;-ms-flex-preferred-size:30%;flex-basis:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9wYWdlcy90ZXh0L1tpZF0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNNb0IsQUFHMEIsQUFNQSxBQUtDLEFBR0QsQUFLaUIsQUFHTCxBQU9WLGNBakJqQixXQVdjLEtBSGQsT0FJZSw2QkFNZixRQTdCK0IsQUFNVixBQVFBLHFDQVVGLGdDQWpCRCxBQVFTLGdCQVAzQixTQVFBLE1BU2UsYUFDZixVQXpCa0IsZ0JBQ0wsV0FDYiIsImZpbGUiOiIvVXNlcnMva2FzaGktbGFiL2dpdGh1Yi90YW5nb2Nob3UvcGFnZXMvdGV4dC9baWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBJbnB1dFRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dFRleHQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBhZGRXb3JkLCBkZWxldGVXb3JkIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGJVdGlscyc7XG5pbXBvcnQgeyB1bmVzY2FwZSwgc3RyaXAgfSBmcm9tICcuLi8uLi91dGlscy9zdHJVdGlscyc7XG5cbmltcG9ydCBzY3NzIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9sb2FkZXJzLmNzcy9zcmMvYW5pbWF0aW9ucy9wYWNtYW4uc2Nzcyc7XG5jb25zdCBMb2FkZXIgPSByZXF1aXJlKCdyZWFjdC1sb2FkZXJzJykuTG9hZGVyO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpZDogbnVtYmVyO1xuICBkZXNjOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgd29yZGxpc3Q6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB3b3JkSW5UZXh0OiBzdHJpbmc7XG4gIHdvcmRJblZvY2FiOiBzdHJpbmc7XG4gIGRlZnM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHdvcmRJblRleHQ6ICcnLFxuICB3b3JkSW5Wb2NhYjogJycsXG4gIGRlZnM6IFtdLFxufTtcbi8vIGludGVyZmFjZSBTdGF0ZSB7XG4vLyAgIHNXb3JkTGlzdDogc3RyaW5nW107XG4vLyB9XG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4vLyAgIHNXb3JkTGlzdDogW10sXG4vLyB9O1xuXG5jb25zdCBsaW5rU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIGNvbG9yOiAnd2hpdGUnLFxuICBmb250U2l6ZTogJzAuNXJlbScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbn07XG5cbi8vIHNwYW4gY2xpY2tlZCAtPiBzaG93IGRlZmluaXRpb25cblxuY2xhc3MgVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS90ZXh0cz9pZD0ke2lkfWApO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBkYXRhID0gZGF0YVswXTtcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogZGF0YS5pZCxcbiAgICAgIGRlc2M6IGRhdGEuZGVzYyxcbiAgICAgIHRleHQ6IGRhdGEudGV4dCxcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgd29yZGxpc3Q6IGRhdGEud29yZGxpc3QsXG4gICAgfTtcbiAgfVxuXG4gIGNsZWFuU3RyaW5nID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgLy8gcmVtb3ZlIGNvbW1hcyBhbmQgcGVyaW9kc1xuICAgIHN0ciA9IHN0cmlwKHN0cik7XG4gICAgLy8gc3BsaXQgc3RyaW5nIGlmIGNvbmNhdGVuYXRlZFxuICAgIGlmIChzdHIuaW5jbHVkZXMoJ+KAmScpKSB7XG4gICAgICBzdHIgPSBzdHIuc3BsaXQoJ+KAmScpWzFdO1xuICAgIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKFwiJ1wiKSkge1xuICAgICAgc3RyID0gc3RyLnNwbGl0KFwiJ1wiKVsxXTtcbiAgICB9XG4gICAgLy8gbG93ZXJjYXNlXG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICB9O1xuICBoYW5kbGVXb3JkQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAvLyBzaG93IGxvYWRpbmdcbiAgICBjb25zdCBsb2FkZXIgPSA8aW1nIHNyYz1cIi9zdGF0aWMvbG9hZGVyLmdpZlwiIHN0eWxlPXt7IHdpZHRoOiAnM3JlbScgfX0gLz47XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVmJylbMF07XG4gICAgUmVhY3RET00ucmVuZGVyKGxvYWRlciwgY29udGFpbmVyKTtcblxuICAgIC8vIGNsZWFuIHN0cmluZ1xuICAgIHRoaXMuc3RhdGUud29yZEluVGV4dCA9IChldmVudC50YXJnZXQgYXMgSFRNTFNwYW5FbGVtZW50KS5pbm5lckhUTUw7XG4gICAgdGhpcy5zdGF0ZS53b3JkSW5Wb2NhYiA9IHRoaXMuY2xlYW5TdHJpbmcodGhpcy5zdGF0ZS53b3JkSW5UZXh0KTtcbiAgICAvLyBzaG93IGxpbmsgdG8gTGluZ3VlZVxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5saW5ndWVlLmZyL2ZyYW5jYWlzLWFuZ2xhaXMvc2VhcmNoP3NvdXJjZT1hdXRvJnF1ZXJ5PSR7dGhpcy5zdGF0ZS53b3JkSW5Wb2NhYn1gO1xuICAgIGNvbnN0IGxpbmsgPSAoXG4gICAgICA8YSBocmVmPXt1cmx9IHN0eWxlPXtsaW5rU3R5bGV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICB7dXJsfVxuICAgICAgPC9hPlxuICAgICk7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnd29yZCcsXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJUZXh0ID0gdGhpcy5zdGF0ZS53b3JkSW5Wb2NhYjtcbiAgICBSZWFjdERPTS5yZW5kZXIobGluaywgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVmLWxpbmsnKVswXSk7XG5cbiAgICAvLyBnZXQgZGVmaW5pdGlvbnMgZnJvbSBMaW5ndWVlXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9saW5ndWVlLyR7dGhpcy5zdGF0ZS53b3JkSW5Wb2NhYn1gLFxuICAgICk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgZGF0YSA9IFtdO1xuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgY29sbGlucy4uLicpO1xuICAgICAgLy8gbGluZ3VlZSB0aW1lZCBvdXRcbiAgICAgIC8vIGdldCBkZWZpbml0aW9ucyBmcm9tIGNvbGxpdGlvbnNcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NvbGxpbnMvJHt0aGlzLnN0YXRlLndvcmRJblZvY2FifWAsXG4gICAgICApO1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgLy8gZGlzcGxheSBkZWZpbml0aW9uc1xuICAgIGNvbnN0IHNwYW5TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHsgbWFyZ2luUmlnaHQ6ICcxcmVtJyB9O1xuXG4gICAgbGV0IGVsZW1lbnRzO1xuICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgLy8gY29weSB0byBzdGF0ZVxuICAgICAgdGhpcy5zdGF0ZS5kZWZzID0gZGF0YTtcbiAgICAgIGVsZW1lbnRzID0gZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlPXtzcGFuU3R5bGV9PlxuICAgICAgICAgIHtpdGVtfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudHMgPSA8aT5ubyBkZWZpbml0aW9uIGZvdW5kIDooPC9pPjtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZWZzKTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihlbGVtZW50cywgY29udGFpbmVyKTtcbiAgfTtcblxuICB0ZXh0V2l0aFRhZ3MgPSAodGV4dDogc3RyaW5nLCB3b3JkbGlzdDogc3RyaW5nW10pID0+IChcbiAgICA8PlxuICAgICAge3RleHQuc3BsaXQoJyAnKS5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3dvcmRsaXN0LmluY2x1ZGVzKHdvcmQpID8gJ2hpZ2hsaWdodCcgOiAnJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlV29yZENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt1bmVzY2FwZSh3b3JkKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMTdkYTE7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JkXCI+XG4gICAgICAgICAgICA8aT5jbGljayBvbiBhIHdvcmQgOik8L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZcIj48L2Rpdj5cbiAgICAgICAgICB7LyogPElucHV0VGV4dCAvPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xpY2toYW5kbGVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICBhZGRXb3JkKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53b3JkSW5UZXh0LFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53b3JkSW5Wb2NhYixcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlZnMsXG4gICAgICAgICAgICAgICAgKS50aGVuKCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgYWRkIHRvIHZvY2FiXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xpY2toYW5kbGVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGVXb3JkKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53b3JkSW5UZXh0LFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53b3JkSW5Wb2NhYixcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICAgICAgKS50aGVuKCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgcmVtb3ZlIGZyb20gdm9jYWJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmLWxpbmtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxocj48L2hyPlxuICAgICAgICA8aDM+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aGlzLnRleHRXaXRoVGFncyh0aGlzLnByb3BzLnRleHQsIHRoaXMucHJvcHMud29yZGxpc3QpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlZiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZWYtbGluayB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud29yZC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ExN2RhMTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/pages/text/[id].tsx */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./utils/dbUtils.tsx":
/*!***************************!*\
  !*** ./utils/dbUtils.tsx ***!
  \***************************/
/*! exports provided: getWords, addWord, getTextTitles, deleteWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWords", function() { return getWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWord", function() { return addWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextTitles", function() { return getTextTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteWord", function() { return deleteWord; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strUtils */ "./utils/strUtils.tsx");

var _jsxFileName = "/Users/kashi-lab/github/tangochou/utils/dbUtils.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];


const getWords = () => {
  fetch('http://localhost:3001/vocab').then(res => res.json()).then(json => {
    //console.log(json);
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, "hello");
  });
};
async function addWord(tWord, vWord, textId, defs) {
  tWord = Object(_strUtils__WEBPACK_IMPORTED_MODULE_2__["escape"])(tWord);
  vWord = Object(_strUtils__WEBPACK_IMPORTED_MODULE_2__["escape"])(vWord);
  const vRes = await fetch('http://localhost:3001/vocab');
  const vData = await vRes.json();
  const vocab = vData.map(item => item.word); // add to vocab

  if (!vocab.includes(vWord)) {
    fetch('http://localhost:3001/vocab', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        word: vWord.toLowerCase(),
        definition: defs
      })
    }).then(getWords);
  } // add to word list (for text)


  let tRes = await fetch(`http://localhost:3001/texts/?id=${textId}`);
  let tData = await tRes.json();
  tData = tData[0];
  const wordList = tData.wordlist;
  wordList.push(tWord);
  console.log(wordList);
  tRes = await fetch(`http://localhost:3001/texts/${textId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      text: tData.text,
      desc: tData.desc,
      title: tData.title,
      wordlist: wordList
    })
  });
}
async function getTextTitles() {
  const res = await fetch('http://localhost:3001/texts');
  const data = await res.json();
  const elements = [];
  data.map(item => elements.push(__jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, item.title)));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, elements);
}
async function deleteWord(tWord, vWord, textId) {
  tWord = Object(_strUtils__WEBPACK_IMPORTED_MODULE_2__["escape"])(tWord);
  vWord = Object(_strUtils__WEBPACK_IMPORTED_MODULE_2__["escape"])(vWord); // remove from vocab

  const vRes = await fetch(`http://localhost:3001/vocab?word=${vWord}`);
  const vData = await vRes.json();

  if (vData.length) {
    const vId = vData[0].id;
    fetch(`http://localhost:3001/vocab/${vId}`, {
      method: 'DELETE'
    }).then(getWords).catch(e => {
      console.log(e);
    });
  } // delete from to word list (for text)


  let tRes = await fetch(`http://localhost:3001/texts/?id=${textId}`);
  let tData = await tRes.json();
  tData = tData[0];
  const wordList = tData.wordlist;
  const i = wordList.indexOf(tWord);
  console.log(wordList);
  if (i > -1) wordList.splice(i, 1);
  console.log(wordList);
  tRes = await fetch(`http://localhost:3001/texts/${textId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      text: tData.text,
      desc: tData.desc,
      title: tData.title,
      wordlist: wordList
    })
  });
}

/***/ }),

/***/ "./utils/strUtils.tsx":
/*!****************************!*\
  !*** ./utils/strUtils.tsx ***!
  \****************************/
/*! exports provided: encodeAccents, encodeAccentsUtf, escape, strip, unescape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeAccents", function() { return encodeAccents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeAccentsUtf", function() { return encodeAccentsUtf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strip", function() { return strip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return unescape; });
/* 
the cédille Ç,
the accent aigu é,
the accent circonflexe â, ê, î, ô, û,
the accent grave à, è, ù
and the accent tréma ë, ï, ü.
*/
const encodeAccents = str => str.toLowerCase().replace(/ç/g, '%E7').replace(/é/g, '%E9').replace(/â/g, '%E2').replace(/ê/g, '%EA').replace(/î/g, '%EE').replace(/ô/g, '%F4').replace(/û/g, '%FB').replace(/à/g, '%E0').replace(/è/g, '%E8').replace(/ù/g, '%F9').replace(/ë/g, '%EB').replace(/ï/g, '%EF').replace(/ü/g, '%FC');
/* use to encode for collins */

const encodeAccentsUtf = str => str.toLowerCase().replace(/ç/g, '%C3%A7').replace(/é/g, '%C3%A9').replace(/â/g, '%C3%A2').replace(/ê/g, '%C3%AA').replace(/î/g, '%C3%AE').replace(/ô/g, '%C3%B4').replace(/û/g, '%C3%BB').replace(/à/g, '%C3%A0').replace(/è/g, '%C3%A8').replace(/ù/g, '%C3%B9').replace(/ë/g, '%C3%AB').replace(/ï/g, '%C3%AF').replace(/ü/g, '%C3%BC');
const escape = str => str.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/</g, '&gt;').replace(/"/g, '&quot;');
const strip = str => str.replace(/[,.]/g, '');
const unescape = str => str.replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/, '"').replace(/&amp;/g, '&');

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/text/[id].tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kashi-lab/github/tangochou/pages/text/[id].tsx */"./pages/text/[id].tsx");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-loaders":
/*!********************************!*\
  !*** external "react-loaders" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loaders");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map