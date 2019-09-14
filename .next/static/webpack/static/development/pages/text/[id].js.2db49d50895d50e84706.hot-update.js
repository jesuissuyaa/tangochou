webpackHotUpdate("static/development/pages/text/[id].js",{

/***/ "./pages/text/[id].tsx":
/*!*****************************!*\
  !*** ./pages/text/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Button */ "./components/Button.tsx");
/* harmony import */ var _utils_dbUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/dbUtils */ "./utils/dbUtils.tsx");
/* harmony import */ var _utils_strUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/strUtils */ "./utils/strUtils.tsx");









var _jsxFileName = "/Users/kashi-lab/github/tangochou/pages/text/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10__["createElement"];








var Loader = __webpack_require__(/*! react-loaders */ "./node_modules/react-loaders/dist/react-loaders.js").Loader;

var initialState = {
  wordInText: '',
  wordInVocab: '',
  defs: []
}; // interface State {
//   sWordList: string[];
// }
// const initialState = {
//   sWordList: [],
// };

var linkStyle = {
  color: 'white',
  fontSize: '0.5rem',
  fontWeight: 'bold',
  textDecoration: 'none'
}; // span clicked -> show definition

var Text =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Text, _React$Component);

  function Text() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Text);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Text)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", initialState);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "cleanString", function (str) {
      // remove commas and periods
      str = Object(_utils_strUtils__WEBPACK_IMPORTED_MODULE_16__["strip"])(str); // split string if concatenated

      if (str.includes('’')) {
        str = str.split('’')[1];
      } else if (_this.state.wordInVocab.includes("'")) {
        str = str.split("'")[1];
      } // lowercase


      console.log(str);
      return str.toLowerCase();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleWordClick",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var loader, container, url, link, response, data, spanStyle, elements;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // show loading
                loader = __jsx("img", {
                  src: "/static/loader.gif",
                  style: {
                    width: '3rem'
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  },
                  __self: this
                });
                container = document.getElementsByClassName('def')[0];
                react_dom__WEBPACK_IMPORTED_MODULE_11___default.a.render(loader, container); // clean string

                _this.state.wordInText = event.target.innerHTML;
                _this.state.wordInVocab = _this.cleanString(_this.state.wordInText);
                console.log(_this.state.wordInText, _this.state.wordInVocab); // show link to Linguee

                url = "https://www.linguee.fr/francais-anglais/search?source=auto&query=".concat(_this.state.wordInVocab);
                link = __jsx("a", {
                  href: url,
                  style: linkStyle,
                  target: "_blank",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  },
                  __self: this
                }, url);
                document.getElementsByClassName('word')[0].innerText = _this.state.wordInVocab;
                react_dom__WEBPACK_IMPORTED_MODULE_11___default.a.render(link, document.getElementsByClassName('def-link')[0]); // get definitions from Linguee

                _context.next = 12;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:3000/api/linguee/".concat(_this.state.wordInVocab));

              case 12:
                response = _context.sent;
                _context.next = 15;
                return response.json();

              case 15:
                data = _context.sent;

                if (data.length) {
                  _context.next = 21;
                  break;
                }

                _context.next = 19;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:3000/api/collins/".concat(_this.state.wordInVocab));

              case 19:
                response = _context.sent;
                data = response.json();

              case 21:
                // display definitions
                spanStyle = {
                  marginRight: '1rem'
                };

                if (data.length) {
                  // copy to state
                  _this.state.defs = data;
                  elements = data.map(function (item, index) {
                    return __jsx("span", {
                      key: index,
                      style: spanStyle,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                      },
                      __self: this
                    }, item);
                  });
                } else {
                  elements = __jsx("i", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 127
                    },
                    __self: this
                  }, "no definition found :(");
                }

                console.log(_this.state.defs);
                react_dom__WEBPACK_IMPORTED_MODULE_11___default.a.render(elements, container);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "textWithTags", function (text, wordlist) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, text.split(' ').map(function (word, index) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, __jsx("span", {
          key: index,
          onClick: _this.handleWordClick,
          className: "jsx-3182803227" + " " + ((wordlist.includes(word) ? 'highlight' : '') || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, Object(_utils_strUtils__WEBPACK_IMPORTED_MODULE_16__["unescape"])(word)), "\xA0");
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3182803227",
        __self: this
      }, ".highlight.jsx-3182803227{background-color:#a17da1;color:white;padding:0 0.3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9wYWdlcy90ZXh0L1tpZF0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ka0IsQUFHb0MseUJBQ2IsWUFDSyxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2thc2hpLWxhYi9naXRodWIvdGFuZ29jaG91L3BhZ2VzL3RleHQvW2lkXS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRUZXh0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgYWRkV29yZCwgZGVsZXRlV29yZCB9IGZyb20gJy4uLy4uL3V0aWxzL2RiVXRpbHMnO1xuaW1wb3J0IHsgdW5lc2NhcGUsIHN0cmlwIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyVXRpbHMnO1xuXG5pbXBvcnQgc2NzcyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbG9hZGVycy5jc3Mvc3JjL2FuaW1hdGlvbnMvcGFjbWFuLnNjc3MnO1xuY29uc3QgTG9hZGVyID0gcmVxdWlyZSgncmVhY3QtbG9hZGVycycpLkxvYWRlcjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaWQ6IG51bWJlcjtcbiAgZGVzYzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdvcmRsaXN0OiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgd29yZEluVGV4dDogc3RyaW5nO1xuICB3b3JkSW5Wb2NhYjogc3RyaW5nO1xuICBkZWZzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB3b3JkSW5UZXh0OiAnJyxcbiAgd29yZEluVm9jYWI6ICcnLFxuICBkZWZzOiBbXSxcbn07XG4vLyBpbnRlcmZhY2UgU3RhdGUge1xuLy8gICBzV29yZExpc3Q6IHN0cmluZ1tdO1xuLy8gfVxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuLy8gICBzV29yZExpc3Q6IFtdLFxuLy8gfTtcblxuY29uc3QgbGlua1N0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBjb2xvcjogJ3doaXRlJyxcbiAgZm9udFNpemU6ICcwLjVyZW0nLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG59O1xuXG4vLyBzcGFuIGNsaWNrZWQgLT4gc2hvdyBkZWZpbml0aW9uXG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdGV4dHM/aWQ9JHtpZH1gKTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgZGF0YSA9IGRhdGFbMF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICBkZXNjOiBkYXRhLmRlc2MsXG4gICAgICB0ZXh0OiBkYXRhLnRleHQsXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIHdvcmRsaXN0OiBkYXRhLndvcmRsaXN0LFxuICAgIH07XG4gIH1cblxuICBjbGVhblN0cmluZyA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgIC8vIHJlbW92ZSBjb21tYXMgYW5kIHBlcmlvZHNcbiAgICBzdHIgPSBzdHJpcChzdHIpO1xuICAgIC8vIHNwbGl0IHN0cmluZyBpZiBjb25jYXRlbmF0ZWRcbiAgICBpZiAoc3RyLmluY2x1ZGVzKCfigJknKSkge1xuICAgICAgc3RyID0gc3RyLnNwbGl0KCfigJknKVsxXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUud29yZEluVm9jYWIuaW5jbHVkZXMoXCInXCIpKSB7XG4gICAgICBzdHIgPSBzdHIuc3BsaXQoXCInXCIpWzFdO1xuICAgIH1cbiAgICAvLyBsb3dlcmNhc2VcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbiAgfTtcbiAgaGFuZGxlV29yZENsaWNrID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgLy8gc2hvdyBsb2FkaW5nXG4gICAgY29uc3QgbG9hZGVyID0gPGltZyBzcmM9XCIvc3RhdGljL2xvYWRlci5naWZcIiBzdHlsZT17eyB3aWR0aDogJzNyZW0nIH19IC8+O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlZicpWzBdO1xuICAgIFJlYWN0RE9NLnJlbmRlcihsb2FkZXIsIGNvbnRhaW5lcik7XG5cbiAgICAvLyBjbGVhbiBzdHJpbmdcbiAgICB0aGlzLnN0YXRlLndvcmRJblRleHQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxTcGFuRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIHRoaXMuc3RhdGUud29yZEluVm9jYWIgPSB0aGlzLmNsZWFuU3RyaW5nKHRoaXMuc3RhdGUud29yZEluVGV4dCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS53b3JkSW5UZXh0LCB0aGlzLnN0YXRlLndvcmRJblZvY2FiKTtcbiAgICAvLyBzaG93IGxpbmsgdG8gTGluZ3VlZVxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5saW5ndWVlLmZyL2ZyYW5jYWlzLWFuZ2xhaXMvc2VhcmNoP3NvdXJjZT1hdXRvJnF1ZXJ5PSR7dGhpcy5zdGF0ZS53b3JkSW5Wb2NhYn1gO1xuICAgIGNvbnN0IGxpbmsgPSAoXG4gICAgICA8YSBocmVmPXt1cmx9IHN0eWxlPXtsaW5rU3R5bGV9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICB7dXJsfVxuICAgICAgPC9hPlxuICAgICk7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnd29yZCcsXG4gICAgKVswXSBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJUZXh0ID0gdGhpcy5zdGF0ZS53b3JkSW5Wb2NhYjtcbiAgICBSZWFjdERPTS5yZW5kZXIobGluaywgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVmLWxpbmsnKVswXSk7XG5cbiAgICAvLyBnZXQgZGVmaW5pdGlvbnMgZnJvbSBMaW5ndWVlXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9saW5ndWVlLyR7dGhpcy5zdGF0ZS53b3JkSW5Wb2NhYn1gLFxuICAgICk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgLy8gbGluZ3VlZSB0aW1lZCBvdXRcbiAgICAgIC8vIGdldCBkZWZpbml0aW9ucyBmcm9tIGNvbGxpdGlvbnNcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NvbGxpbnMvJHt0aGlzLnN0YXRlLndvcmRJblZvY2FifWAsXG4gICAgICApO1xuICAgICAgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgLy8gZGlzcGxheSBkZWZpbml0aW9uc1xuICAgIGNvbnN0IHNwYW5TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHsgbWFyZ2luUmlnaHQ6ICcxcmVtJyB9O1xuXG4gICAgbGV0IGVsZW1lbnRzO1xuICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgLy8gY29weSB0byBzdGF0ZVxuICAgICAgdGhpcy5zdGF0ZS5kZWZzID0gZGF0YTtcbiAgICAgIGVsZW1lbnRzID0gZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlPXtzcGFuU3R5bGV9PlxuICAgICAgICAgIHtpdGVtfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudHMgPSA8aT5ubyBkZWZpbml0aW9uIGZvdW5kIDooPC9pPjtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZWZzKTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihlbGVtZW50cywgY29udGFpbmVyKTtcbiAgfTtcblxuICB0ZXh0V2l0aFRhZ3MgPSAodGV4dDogc3RyaW5nLCB3b3JkbGlzdDogc3RyaW5nW10pID0+IChcbiAgICA8PlxuICAgICAge3RleHQuc3BsaXQoJyAnKS5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3dvcmRsaXN0LmluY2x1ZGVzKHdvcmQpID8gJ2hpZ2hsaWdodCcgOiAnJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlV29yZENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt1bmVzY2FwZSh3b3JkKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMTdkYTE7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JkXCI+XG4gICAgICAgICAgICA8aT5jbGljayBvbiBhIHdvcmQgOik8L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZcIj48L2Rpdj5cbiAgICAgICAgICB7LyogPElucHV0VGV4dCAvPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xpY2toYW5kbGVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICBhZGRXb3JkKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53b3JkSW5UZXh0LFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53b3JkSW5Wb2NhYixcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlZnMsXG4gICAgICAgICAgICAgICAgKS50aGVuKCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgYWRkIHRvIHZvY2FiXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xpY2toYW5kbGVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGVXb3JkKFxuICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dvcmQnKVswXSBhcyBIVE1MRGl2RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICAgICAgKS50aGVuKCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgcmVtb3ZlIGZyb20gdm9jYWJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmLWxpbmtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxocj48L2hyPlxuICAgICAgICA8aDM+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aGlzLnRleHRXaXRoVGFncyh0aGlzLnByb3BzLnRleHQsIHRoaXMucHJvcHMud29yZGxpc3QpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlZiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZWYtbGluayB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud29yZC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ExN2RhMTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC53b3JkIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/pages/text/[id].tsx */"));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Text, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        clickhandler: function clickhandler(e) {
          Object(_utils_dbUtils__WEBPACK_IMPORTED_MODULE_15__["addWord"])(_this2.state.wordInText, _this2.state.wordInVocab, _this2.props.id, _this2.state.defs).then(function () {
            return location.reload();
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "add to vocab"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        clickhandler: function clickhandler(e) {
          Object(_utils_dbUtils__WEBPACK_IMPORTED_MODULE_15__["deleteWord"])(document.getElementsByClassName('word')[0].innerText, _this2.props.id).then(function () {
            return location.reload();
          });
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
      }, this.textWithTags(this.props.text, this.props.wordlist)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2875986623",
        __self: this
      }, ".button-container.jsx-2875986623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0.5rem 0;width:100%;}.def.jsx-2875986623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;margin:0.5rem 0;}.def-link.jsx-2875986623{line-height:1;}.text-container.jsx-2875986623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;overflow-wrap:break-word;}.word.jsx-2875986623{border-bottom:1px dotted #fff;}.word-container.jsx-2875986623{background-color:#a17da1;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;padding:1rem;}.word.jsx-2875986623{-webkit-flex-basis:30%;-ms-flex-preferred-size:30%;flex-basis:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9wYWdlcy90ZXh0L1tpZF0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNNb0IsQUFHMEIsQUFNQSxBQUtDLEFBR0QsQUFLaUIsQUFHTCxBQU9WLGNBakJqQixXQVdjLEtBSGQsT0FJZSw2QkFNZixRQTdCK0IsQUFNVixBQVFBLHFDQVVGLGdDQWpCRCxBQVFTLGdCQVAzQixTQVFBLE1BU2UsYUFDZixVQXpCa0IsZ0JBQ0wsV0FDYiIsImZpbGUiOiIvVXNlcnMva2FzaGktbGFiL2dpdGh1Yi90YW5nb2Nob3UvcGFnZXMvdGV4dC9baWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBJbnB1dFRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dFRleHQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBhZGRXb3JkLCBkZWxldGVXb3JkIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGJVdGlscyc7XG5pbXBvcnQgeyB1bmVzY2FwZSwgc3RyaXAgfSBmcm9tICcuLi8uLi91dGlscy9zdHJVdGlscyc7XG5cbmltcG9ydCBzY3NzIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9sb2FkZXJzLmNzcy9zcmMvYW5pbWF0aW9ucy9wYWNtYW4uc2Nzcyc7XG5jb25zdCBMb2FkZXIgPSByZXF1aXJlKCdyZWFjdC1sb2FkZXJzJykuTG9hZGVyO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpZDogbnVtYmVyO1xuICBkZXNjOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgd29yZGxpc3Q6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB3b3JkSW5UZXh0OiBzdHJpbmc7XG4gIHdvcmRJblZvY2FiOiBzdHJpbmc7XG4gIGRlZnM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHdvcmRJblRleHQ6ICcnLFxuICB3b3JkSW5Wb2NhYjogJycsXG4gIGRlZnM6IFtdLFxufTtcbi8vIGludGVyZmFjZSBTdGF0ZSB7XG4vLyAgIHNXb3JkTGlzdDogc3RyaW5nW107XG4vLyB9XG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4vLyAgIHNXb3JkTGlzdDogW10sXG4vLyB9O1xuXG5jb25zdCBsaW5rU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIGNvbG9yOiAnd2hpdGUnLFxuICBmb250U2l6ZTogJzAuNXJlbScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbn07XG5cbi8vIHNwYW4gY2xpY2tlZCAtPiBzaG93IGRlZmluaXRpb25cblxuY2xhc3MgVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS90ZXh0cz9pZD0ke2lkfWApO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBkYXRhID0gZGF0YVswXTtcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogZGF0YS5pZCxcbiAgICAgIGRlc2M6IGRhdGEuZGVzYyxcbiAgICAgIHRleHQ6IGRhdGEudGV4dCxcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgd29yZGxpc3Q6IGRhdGEud29yZGxpc3QsXG4gICAgfTtcbiAgfVxuXG4gIGNsZWFuU3RyaW5nID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgLy8gcmVtb3ZlIGNvbW1hcyBhbmQgcGVyaW9kc1xuICAgIHN0ciA9IHN0cmlwKHN0cik7XG4gICAgLy8gc3BsaXQgc3RyaW5nIGlmIGNvbmNhdGVuYXRlZFxuICAgIGlmIChzdHIuaW5jbHVkZXMoJ+KAmScpKSB7XG4gICAgICBzdHIgPSBzdHIuc3BsaXQoJ+KAmScpWzFdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS53b3JkSW5Wb2NhYi5pbmNsdWRlcyhcIidcIikpIHtcbiAgICAgIHN0ciA9IHN0ci5zcGxpdChcIidcIilbMV07XG4gICAgfVxuICAgIC8vIGxvd2VyY2FzZVxuICAgIGNvbnNvbGUubG9nKHN0cik7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xuICB9O1xuICBoYW5kbGVXb3JkQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAvLyBzaG93IGxvYWRpbmdcbiAgICBjb25zdCBsb2FkZXIgPSA8aW1nIHNyYz1cIi9zdGF0aWMvbG9hZGVyLmdpZlwiIHN0eWxlPXt7IHdpZHRoOiAnM3JlbScgfX0gLz47XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVmJylbMF07XG4gICAgUmVhY3RET00ucmVuZGVyKGxvYWRlciwgY29udGFpbmVyKTtcblxuICAgIC8vIGNsZWFuIHN0cmluZ1xuICAgIHRoaXMuc3RhdGUud29yZEluVGV4dCA9IChldmVudC50YXJnZXQgYXMgSFRNTFNwYW5FbGVtZW50KS5pbm5lckhUTUw7XG4gICAgdGhpcy5zdGF0ZS53b3JkSW5Wb2NhYiA9IHRoaXMuY2xlYW5TdHJpbmcodGhpcy5zdGF0ZS53b3JkSW5UZXh0KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLndvcmRJblRleHQsIHRoaXMuc3RhdGUud29yZEluVm9jYWIpO1xuICAgIC8vIHNob3cgbGluayB0byBMaW5ndWVlXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3Lmxpbmd1ZWUuZnIvZnJhbmNhaXMtYW5nbGFpcy9zZWFyY2g/c291cmNlPWF1dG8mcXVlcnk9JHt0aGlzLnN0YXRlLndvcmRJblZvY2FifWA7XG4gICAgY29uc3QgbGluayA9IChcbiAgICAgIDxhIGhyZWY9e3VybH0gc3R5bGU9e2xpbmtTdHlsZX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIHt1cmx9XG4gICAgICA8L2E+XG4gICAgKTtcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICd3b3JkJyxcbiAgICApWzBdIGFzIEhUTUxEaXZFbGVtZW50KS5pbm5lclRleHQgPSB0aGlzLnN0YXRlLndvcmRJblZvY2FiO1xuICAgIFJlYWN0RE9NLnJlbmRlcihsaW5rLCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWYtbGluaycpWzBdKTtcblxuICAgIC8vIGdldCBkZWZpbml0aW9ucyBmcm9tIExpbmd1ZWVcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xpbmd1ZWUvJHt0aGlzLnN0YXRlLndvcmRJblZvY2FifWAsXG4gICAgKTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAvLyBsaW5ndWVlIHRpbWVkIG91dFxuICAgICAgLy8gZ2V0IGRlZmluaXRpb25zIGZyb20gY29sbGl0aW9uc1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY29sbGlucy8ke3RoaXMuc3RhdGUud29yZEluVm9jYWJ9YCxcbiAgICAgICk7XG4gICAgICBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgICAvLyBkaXNwbGF5IGRlZmluaXRpb25zXG4gICAgY29uc3Qgc3BhblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBtYXJnaW5SaWdodDogJzFyZW0nIH07XG5cbiAgICBsZXQgZWxlbWVudHM7XG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAvLyBjb3B5IHRvIHN0YXRlXG4gICAgICB0aGlzLnN0YXRlLmRlZnMgPSBkYXRhO1xuICAgICAgZWxlbWVudHMgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gc3R5bGU9e3NwYW5TdHlsZX0+XG4gICAgICAgICAge2l0ZW19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50cyA9IDxpPm5vIGRlZmluaXRpb24gZm91bmQgOig8L2k+O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRlZnMpO1xuXG4gICAgUmVhY3RET00ucmVuZGVyKGVsZW1lbnRzLCBjb250YWluZXIpO1xuICB9O1xuXG4gIHRleHRXaXRoVGFncyA9ICh0ZXh0OiBzdHJpbmcsIHdvcmRsaXN0OiBzdHJpbmdbXSkgPT4gKFxuICAgIDw+XG4gICAgICB7dGV4dC5zcGxpdCgnICcpLm1hcCgod29yZCwgaW5kZXgpID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17d29yZGxpc3QuaW5jbHVkZXMod29yZCkgPyAnaGlnaGxpZ2h0JyA6ICcnfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVXb3JkQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3VuZXNjYXBlKHdvcmQpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgPC8+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ExN2RhMTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjNyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yZC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmRcIj5cbiAgICAgICAgICAgIDxpPmNsaWNrIG9uIGEgd29yZCA6KTwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZlwiPjwvZGl2PlxuICAgICAgICAgIHsvKiA8SW5wdXRUZXh0IC8+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGlja2hhbmRsZXI9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGFkZFdvcmQoXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndvcmRJblRleHQsXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndvcmRJblZvY2FiLFxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVmcyxcbiAgICAgICAgICAgICAgICApLnRoZW4oKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBhZGQgdG8gdm9jYWJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGlja2hhbmRsZXI9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZVdvcmQoXG4gICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd29yZCcpWzBdIGFzIEhUTUxEaXZFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgICAgICAgICApLnRoZW4oKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICByZW1vdmUgZnJvbSB2b2NhYlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWYtbGlua1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAge3RoaXMudGV4dFdpdGhUYWdzKHRoaXMucHJvcHMudGV4dCwgdGhpcy5wcm9wcy53b3JkbGlzdCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVmIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlZi1saW5rIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud29yZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53b3JkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTE3ZGExO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndvcmQge1xuICAgICAgICAgICAgZmxleC1iYXNpczogMzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIl19 */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/pages/text/[id].tsx */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
        var id, res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = context.query.id;
                _context2.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:3001/texts?id=".concat(id));

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return res.json();

              case 6:
                data = _context2.sent;
                data = data[0];
                return _context2.abrupt("return", {
                  id: data.id,
                  desc: data.desc,
                  text: data.text,
                  title: data.title,
                  wordlist: data.wordlist
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=[id].js.2db49d50895d50e84706.hot-update.js.map