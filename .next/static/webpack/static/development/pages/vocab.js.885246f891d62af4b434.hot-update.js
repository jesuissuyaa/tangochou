webpackHotUpdate("static/development/pages/vocab.js",{

/***/ "./pages/vocab.tsx":
/*!*************************!*\
  !*** ./pages/vocab.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _utils_strUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/strUtils */ "./utils/strUtils.tsx");







var _jsxFileName = "/Users/kashi-lab/github/tangochou/pages/vocab.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8__["createElement"];


 // import fetch from 'isomorphic-unfetch';

var initWordState = {
  words: [{
    id: 1,
    word: 'falloir',
    definition: ['to need', 'have to']
  }, {
    id: 2,
    word: 'valoir',
    definition: ['be worth']
  }, {
    id: 3,
    word: 'faire',
    definition: ['to do', 'to make']
  }]
};

var createWordList = function createWordList(dict) {
  var res = [];
  var l = 65;
  var _w = 0;

  while (l < 65 + 26
  /* && _w < dict.length*/
  ) {
    var letter = String.fromCharCode(l);
    var w = _w; // insert heading letter

    res.push(__jsx(Heading, {
      key: l,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, letter));
    var list = [];
    var key = 1;

    while (w < dict.length && dict[w].word[0].toUpperCase() == letter) {
      list.push(__jsx("li", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, Object(_utils_strUtils__WEBPACK_IMPORTED_MODULE_10__["unescape"])(dict[w].word), __jsx("div", {
        key: key++,
        style: {
          marginLeft: '1rem',
          fontSize: '0.8rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, dict[w++].definition.join(', '))));
    }

    res.push(__jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, list));
    _w = w;
    l++;
  }

  _w = 0;
  return res;
};

var Heading = function Heading(props) {
  return __jsx("p", {
    className: "jsx-1163175343",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1163175343",
    __self: this
  }, "p.jsx-1163175343{font-size:1.5rem;font-weight:bold;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9wYWdlcy92b2NhYi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VnQixBQUcwQixpQkFDQSxpQkFDUixTQUNYIiwiZmlsZSI6Ii9Vc2Vycy9rYXNoaS1sYWIvZ2l0aHViL3RhbmdvY2hvdS9wYWdlcy92b2NhYi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVuZXNjYXBlIH0gZnJvbSAnLi4vdXRpbHMvc3RyVXRpbHMnO1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbnRlcmZhY2UgUHJvcHMge1xuICBrZXk6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFdvcmRTdGF0ZSB7XG4gIHdvcmRzOiB7IGlkOiBudW1iZXI7IHdvcmQ6IHN0cmluZzsgZGVmaW5pdGlvbjogc3RyaW5nW10gfVtdO1xufVxuXG5jb25zdCBpbml0V29yZFN0YXRlID0ge1xuICB3b3JkczogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgd29yZDogJ2ZhbGxvaXInLFxuICAgICAgZGVmaW5pdGlvbjogWyd0byBuZWVkJywgJ2hhdmUgdG8nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgd29yZDogJ3ZhbG9pcicsXG4gICAgICBkZWZpbml0aW9uOiBbJ2JlIHdvcnRoJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHdvcmQ6ICdmYWlyZScsXG4gICAgICBkZWZpbml0aW9uOiBbJ3RvIGRvJywgJ3RvIG1ha2UnXSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgY3JlYXRlV29yZExpc3QgPSAoXG4gIGRpY3Q6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHdvcmQ6IHN0cmluZztcbiAgICBkZWZpbml0aW9uOiBzdHJpbmdbXTtcbiAgfVtdLFxuKSA9PiB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuXG4gIGxldCBsID0gNjU7XG4gIGxldCBfdyA9IDA7XG4gIHdoaWxlIChsIDwgNjUgKyAyNiAvKiAmJiBfdyA8IGRpY3QubGVuZ3RoKi8pIHtcbiAgICBjb25zdCBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGwpO1xuICAgIGxldCB3ID0gX3c7XG4gICAgLy8gaW5zZXJ0IGhlYWRpbmcgbGV0dGVyXG4gICAgcmVzLnB1c2goPEhlYWRpbmcga2V5PXtsfT57bGV0dGVyfTwvSGVhZGluZz4pO1xuXG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGxldCBrZXkgPSAxO1xuICAgIHdoaWxlICh3IDwgZGljdC5sZW5ndGggJiYgZGljdFt3XS53b3JkWzBdLnRvVXBwZXJDYXNlKCkgPT0gbGV0dGVyKSB7XG4gICAgICBsaXN0LnB1c2goXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAge3VuZXNjYXBlKGRpY3Rbd10ud29yZCl9XG4gICAgICAgICAgPGRpdiBrZXk9e2tleSsrfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMXJlbScsIGZvbnRTaXplOiAnMC44cmVtJyB9fT5cbiAgICAgICAgICAgIHtkaWN0W3crK10uZGVmaW5pdGlvbi5qb2luKCcsICcpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPixcbiAgICAgICk7XG4gICAgfVxuICAgIHJlcy5wdXNoKDx1bD57bGlzdH08L3VsPik7XG4gICAgX3cgPSB3O1xuICAgIGwrKztcbiAgfVxuICBfdyA9IDA7XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBIZWFkaW5nOiBSZWFjdC5GQzxQcm9wcz4gPSBwcm9wcyA9PiAoXG4gIDxwPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3A+XG4pO1xuXG5jbGFzcyBWb2NhYiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8e30sIFdvcmRTdGF0ZT4ge1xuICBzdGF0ZTogV29yZFN0YXRlID0gaW5pdFdvcmRTdGF0ZTtcblxuICBmZXRjaFdvcmRzKCkge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdm9jYWI/X3NvcnQ9d29yZCZvcmRlcj1hc2MnKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdvcmRzOiBqc29uIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoV29yZHMoKTsgLy8gdXBkYXRlIHN0YXRlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e2NyZWF0ZVdvcmRMaXN0KHRoaXMuc3RhdGUud29yZHMpfTwvZGl2PlxuICAgICAgICB7LyogVE9ETyBtb3ZlIGNyZWF0ZVdvcmRMaXN0IHRvIGNvbXBvbmVudGRpZG1vdXRuICovfVxuICAgICAgICB7LyogPGRpdj57Y3JlYXRlV29yZExpc3QodGhpcy5zdGF0ZS53b3Jkcy5tYXAoaXRlbSA9PiBpdGVtLndvcmQpKX08L2Rpdj4gKi99XG4gICAgICAgIHsvKiB7Wy4uLkFycmF5KDI2KV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgPEhlYWRpbmcga2V5PXtpfT57U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpfTwvSGVhZGluZz5cbiAgICAgICAgKSl9ICovfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWb2NhYjtcbiJdfQ== */\n/*@ sourceURL=/Users/kashi-lab/github/tangochou/pages/vocab.tsx */"));
};

var Vocab =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Vocab, _React$PureComponent);

  function Vocab() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vocab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vocab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", initWordState);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vocab, [{
    key: "fetchWords",
    value: function fetchWords() {
      var _this2 = this;

      fetch('http://localhost:3001/vocab?_sort=word&order=asc').then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          words: json
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchWords(); // update state
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, createWordList(this.state.words)));
    }
  }]);

  return Vocab;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Vocab);

/***/ })

})
//# sourceMappingURL=vocab.js.885246f891d62af4b434.hot-update.js.map