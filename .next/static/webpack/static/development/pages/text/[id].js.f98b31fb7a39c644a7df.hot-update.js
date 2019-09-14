webpackHotUpdate("static/development/pages/text/[id].js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strUtils */ "./utils/strUtils.tsx");



var _jsxFileName = "/Users/kashi-lab/github/tangochou/utils/dbUtils.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];


var getWords = function getWords() {
  fetch('http://localhost:3001/vocab').then(function (res) {
    return res.json();
  }).then(function (json) {
    //console.log(json);
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "hello");
  });
};
function addWord(_x, _x2, _x3, _x4) {
  return _addWord.apply(this, arguments);
}

function _addWord() {
  _addWord = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tWord, vWord, textId, defs) {
    var vRes, vData, vocab, tRes, tData, wordList;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tWord = Object(_strUtils__WEBPACK_IMPORTED_MODULE_4__["escape"])(tWord);
            vWord = Object(_strUtils__WEBPACK_IMPORTED_MODULE_4__["escape"])(vWord);
            _context.next = 4;
            return fetch('http://localhost:3001/vocab');

          case 4:
            vRes = _context.sent;
            _context.next = 7;
            return vRes.json();

          case 7:
            vData = _context.sent;
            vocab = vData.map(function (item) {
              return item.word;
            }); // add to vocab

            if (!vocab.includes(vWord)) {
              fetch('http://localhost:3001/vocab', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  word: vWord.toLowerCase(),
                  definition: defs
                })
              }).then(getWords);
            } // add to word list (for text)


            _context.next = 12;
            return fetch("http://localhost:3001/texts/?id=".concat(textId));

          case 12:
            tRes = _context.sent;
            _context.next = 15;
            return tRes.json();

          case 15:
            tData = _context.sent;
            tData = tData[0];
            wordList = tData.wordlist;
            wordList.push(tWord);
            console.log(wordList);
            _context.next = 22;
            return fetch("http://localhost:3001/texts/".concat(textId), {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                text: tData.text,
                desc: tData.desc,
                title: tData.title,
                wordlist: wordList
              })
            });

          case 22:
            tRes = _context.sent;

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addWord.apply(this, arguments);
}

function getTextTitles() {
  return _getTextTitles.apply(this, arguments);
}

function _getTextTitles() {
  _getTextTitles = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var res, data, elements;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('http://localhost:3001/texts');

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            data = _context2.sent;
            elements = [];
            data.map(function (item) {
              return elements.push(__jsx("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                },
                __self: this
              }, item.title));
            });
            return _context2.abrupt("return", __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, elements));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTextTitles.apply(this, arguments);
}

function deleteWord(_x5, _x6) {
  return _deleteWord.apply(this, arguments);
}

function _deleteWord() {
  _deleteWord = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(word, textId) {
    var vRes, vData, vId, tRes, tData, wordList, i;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            word = Object(_strUtils__WEBPACK_IMPORTED_MODULE_4__["escape"])(word); // remove from vocab

            _context3.next = 3;
            return fetch("http://localhost:3001/vocab?word=".concat(word.toLowerCase()));

          case 3:
            vRes = _context3.sent;
            _context3.next = 6;
            return vRes.json();

          case 6:
            vData = _context3.sent;

            if (vData.length) {
              vId = vData[0].id;
              fetch("http://localhost:3001/vocab/".concat(vId), {
                method: 'DELETE'
              }).then(getWords)["catch"](function (e) {
                console.log(e);
              });
            } // delete from to word list (for text)


            _context3.next = 10;
            return fetch("http://localhost:3001/texts/?id=".concat(textId));

          case 10:
            tRes = _context3.sent;
            _context3.next = 13;
            return tRes.json();

          case 13:
            tData = _context3.sent;
            tData = tData[0];
            wordList = tData.wordlist;
            i = wordList.indexOf(word);
            console.log(wordList);
            if (i > -1) wordList.splice(i, 1);
            console.log(wordList);
            _context3.next = 22;
            return fetch("http://localhost:3001/texts/".concat(textId), {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                text: tData.text,
                desc: tData.desc,
                title: tData.title,
                wordlist: wordList
              })
            });

          case 22:
            tRes = _context3.sent;

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteWord.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=[id].js.f98b31fb7a39c644a7df.hot-update.js.map