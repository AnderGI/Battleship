/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/uncle-sam.png */ \"./src/images/uncle-sam.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ai.png */ \"./src/images/ai.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/versus.png */ \"./src/images/versus.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  --darkGrey: #414141;\\r\\n  --lightGrey: #545454;\\r\\n  --darkBrown: #1d1d1d;\\r\\n  --whiteBrwon: #4e3027;\\r\\n  --smoothWhite1: #c5c6c6;\\r\\n  --smoothWhite2: #ecf0f1;\\r\\n  --black: #060606;\\r\\n  --blue: #3297db;\\r\\n  --red: #e84c3d;\\r\\n  --metalGrey: #2c3f50;\\r\\n}\\r\\n\\r\\nheader > div.fight {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 0.125em;\\r\\n  padding: 0.25em 2em;\\r\\n}\\r\\nheader > div.fight > div {\\r\\n  flex-grow: 1;\\r\\n  height: 70%;\\r\\n  background-color: var(--whiteBrwon);\\r\\n}\\r\\nheader > div.fight > div:nth-child(2n + 1) {\\r\\n  flex-grow: 2;\\r\\n}\\r\\nheader > div.fight > div.img {\\r\\n  border-radius: 50px;\\r\\n  width: 100px;\\r\\n  height: 75px;\\r\\n  position: absolute;\\r\\n  background-color: var(--blue);\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\nheader > div.fight > div:first-child > div {\\r\\n  height: 100%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n}\\r\\nheader > div.fight > div:last-child > div {\\r\\n  height: 100%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n}\\r\\nheader > div.fight > div.img > div {\\r\\n  width: 90%;\\r\\n  height: 90%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  background-color: var(--blue);\\r\\n  display: grid;\\r\\n  grid-template-rows: 15vh 75vh 10vh;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: grid;\\r\\n  grid-template-rows: 1fr;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  padding: 0.2em 1em;\\r\\n  column-gap: 0.5em;\\r\\n  /* position: relative;*/\\r\\n}\\r\\n\\r\\n/*MODAL*/\\r\\n\\r\\ndialog#modal,\\r\\ndialog#winningDialog {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  width: 60%;\\r\\n  height: 30%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  border: none !important;\\r\\n \\r\\n}\\r\\n\\r\\ndialog#modal::backdrop,\\r\\ndialog#winningDialog::backdrop {\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\nmain > section {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(10, 1fr);\\r\\n  grid-template-rows: repeat(10, 1fr);\\r\\n  transform: scale(0.75);\\r\\n  transition: transform ease-in-out 500ms;\\r\\n}\\r\\n\\r\\nmain > section.prepared {\\r\\n  transform: scale(1);\\r\\n}\\r\\n\\r\\nmain > section.notPrepared {\\r\\n  pointer-events: none;\\r\\n}\\r\\nmain > section > div.ship,\\r\\nmain > section > div.placedShip {\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n}\\r\\nmain > section > div {\\r\\n  background-color: rgba(0, 0, 0, 0.15);\\r\\n  border: 1px solid var(--blue);\\r\\n  position: relative;\\r\\n}\\r\\nmain > section > div.used{\\r\\n  pointer-events: none;\\r\\n}\\r\\nmain > section > div.missed{\\r\\n  background-color:#AEE8F5;\\r\\n}\\r\\nmain > section > div.hit::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  margin: auto;\\r\\n  height: 90%;\\r\\n  width: 10%;\\r\\n  background-color: var(--red);\\r\\n  transform: rotateZ(30deg);\\r\\n}\\r\\nmain > section > div.hit::before{\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  margin: auto;\\r\\n  height: 90%;\\r\\n  width: 10%;\\r\\n  background-color: var(--red);\\r\\n  transform: rotateZ(330deg);\\r\\n}\\r\\nmain > section > div:nth-child(10n + 10) {\\r\\n  border-right: none;\\r\\n}\\r\\nmain > section > div:nth-child(10n + 1) {\\r\\n  border-left: none;\\r\\n}\\r\\nfooter {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-template-rows: 1fr;\\r\\n  justify-items: center;\\r\\n  padding: 0.5em 0.2em;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nfooter > section{\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  content: '';\\r\\n  width: 70%;\\r\\n  height: 95%;\\r\\n  transform: translateX(-20%);\\r\\n  text-align:center;\\r\\n  vertical-align:middle;\\r\\n  background-color: rgba(255, 255, 255);\\r\\n  font: normal small-caps 700 2em monospace;\\r\\n  border-radius: 10px;\\r\\n}\\r\\nfooter > section.visible{\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: monospace;\\r\\n  letter-spacing: 0.0625em;\\r\\n  font-weight: 900;\\r\\n  font-size: 1.5em;\\r\\n  padding: 0.25em 2em;\\r\\n  border-radius: 10px;\\r\\n  border: none !important;\\r\\n  background-color: var(--smoothWhite2);\\r\\n  color: var(--red);\\r\\n  text-transform: lowercase;\\r\\n  box-shadow: 0em 0em 0.1em 0.02em var(--smoothWhite2);\\r\\n  transition: box-shadow ease-in-out 50ms, pointer-events ease-in-out 50ms,\\r\\n    opacity ease-in-out 50ms, transform ease-in-out 50ms;\\r\\n}\\r\\n\\r\\nbutton.notPrepared {\\r\\n  pointer-events: none;\\r\\n  opacity: 0.5;\\r\\n  transform: scale(0.75);\\r\\n}\\r\\n\\r\\nbutton:not(button.startBattle) :hover {\\r\\n  box-shadow: 0em 0em 0.1em 0.05em var(--smoothWhite2);\\r\\n}\\r\\n\\r\\nbutton.startBattle {\\r\\n  animation: battleBtn 1s infinite;\\r\\n}\\r\\n\\r\\nbutton.notVisible{\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@keyframes battleBtn {\\r\\n  0% {\\r\\n    box-shadow: 0em 0em 0.1em 0.05em var(--smoothWhite2);\\r\\n  }\\r\\n  25% {\\r\\n    box-shadow: 0em 0em 0.1em 0.05em var(--red);\\r\\n  }\\r\\n  50% {\\r\\n    box-shadow: 0em 0em 0.1em 0.05em var(--smoothWhite2);\\r\\n  }\\r\\n  75% {\\r\\n    box-shadow: 0em 0em 0.1em 0.05em var(--red);\\r\\n  }\\r\\n  100% {\\r\\n    box-shadow: 0em 0em 0.1em 0.05em var(--smoothWhite2);\\r\\n  }\\r\\n}\\r\\n\\r\\ndialog#modal > button,\\r\\ndialog#winningDialog > button {\\r\\n  font-size: 3em;\\r\\n  background-color: rgba(0, 0, 0, 0);\\r\\n  color: var(--smoothWhite2);\\r\\n  font-family: monospace;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  text-align: center;\\r\\n  border: 1px solid rgba(0, 0, 0, 0.5);\\r\\n  border-radius: 0px;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Player/Player.js":
/*!******************************!*\
  !*** ./src/Player/Player.js ***!
  \******************************/
/***/ ((module) => {

eval("class Player {\r\n    static computerMoves = new Set();\r\n    static hits = [];\r\n    static randomValidMove(){\r\n        let row;\r\n        let col;\r\n        while(\r\n            !this.computerMoves.has(`${row}, ${col}`)\r\n            ){\r\n            row = Math.floor(Math.random() * 9);\r\n            col = Math.floor(Math.random() * 9);\r\n\r\n                this.computerMoves.add(`${row}, ${col}`)\r\n        \r\n        }\r\n        return [row, col]\r\n    }\r\n    static addMoveToHit(_row,_col){\r\n        this.hits.push([_row, _col]);\r\n    }\r\n\r\n    static triangulateShip(){\r\n        //everytime with a randomvalid move a ship is hitted that move\r\n        //is added to hits\r\n        //it should calculate all the moves \r\n    }\r\n}\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./src/Player/Player.js?");

/***/ }),

/***/ "./src/UI_Modules/alignementTextInBtn.js":
/*!***********************************************!*\
  !*** ./src/UI_Modules/alignementTextInBtn.js ***!
  \***********************************************/
/***/ ((module) => {

eval("//NO CHANGES NEEDED\r\n\r\nconst positionBtn = document.querySelector(\"button.positionBtn\");\r\nconst alignementArray = [\"Vertical\", \"Horizontal\"];\r\n\r\n\r\nconst alignementTextInBtn = () => {\r\n    positionBtn.addEventListener('click', () => {\r\n        const first = alignementArray.shift();\r\n        positionBtn.textContent = first;\r\n        alignementArray.push(first)\r\n    })\r\n}\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = alignementTextInBtn;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/alignementTextInBtn.js?");

/***/ }),

/***/ "./src/UI_Modules/correctVisualShipPlacement.js":
/*!******************************************************!*\
  !*** ./src/UI_Modules/correctVisualShipPlacement.js ***!
  \******************************************************/
/***/ ((module) => {

eval("//NO CHANGES NEEDED\r\n//IT WILL EVALUATE WHETHER THE SHIP IS HORIZONTAL OR VERTICAL\r\n//IF IT IS CORRECTLY PLACED\r\n\r\n\r\nconst visualShipDisplay = (cellIndex, obj) => {\r\n  /**\r\n   * Take into account the starting index of the ship and while the start and the end are both in the same\r\n   * row or col its going to be a true positioning else it will be false\r\n   */\r\n  let correctShipPositioning = false;\r\n  const userCells = [...document.querySelectorAll(\"div.userGbCell\")];\r\n  const verticalCombinations = [\r\n    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],\r\n    [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],\r\n    [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],\r\n    [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],\r\n    [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],\r\n    [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],\r\n    [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],\r\n    [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],\r\n    [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],\r\n    [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],\r\n  ];\r\n  const verticalOccupiedCells = [];\r\n  if (obj.alignement === \"Horizontal\") {\r\n    if (\r\n      (0 <= cellIndex && cellIndex + obj.length - 1 <= 9) ||\r\n      (10 <= cellIndex && cellIndex + obj.length - 1 <= 19) ||\r\n      (20 <= cellIndex && cellIndex + obj.length - 1 <= 29) ||\r\n      (30 <= cellIndex && cellIndex + obj.length - 1 <= 39) ||\r\n      (40 <= cellIndex && cellIndex + obj.length - 1 <= 49) ||\r\n      (50 <= cellIndex && cellIndex + obj.length - 1 <= 59) ||\r\n      (60 <= cellIndex && cellIndex + obj.length - 1 <= 69) ||\r\n      (70 <= cellIndex && cellIndex + obj.length - 1 <= 79) ||\r\n      (80 <= cellIndex && cellIndex + obj.length - 1 <= 89) ||\r\n      (90 <= cellIndex && cellIndex + obj.length - 1 <= 99)\r\n    ) {\r\n        if(!userCells[cellIndex].classList.contains(\"placedShip\") && \r\n        !userCells[cellIndex + obj.length - 1].classList.contains(\"placedShip\")){\r\n          correctShipPositioning = true;\r\n        }\r\n        \r\n    }\r\n  }\r\n\r\n  if (obj.alignement === \"Vertical\") {\r\n    for (let i = 10; i < obj.length * 10; i += 10) {\r\n      verticalOccupiedCells.push(cellIndex + i);\r\n    }\r\n    /**\r\n     * take some combination of verticalCombinations\r\n     * if every cell the ship will occupy has an index of not -1\r\n     * (it exists) in some combination then return true;\r\n     */\r\n                            //every combination possible\r\n    correctShipPositioning = verticalCombinations.some((combination) => {\r\n            //current ship\r\n      return verticalOccupiedCells.every(cell => {\r\n          return combination.indexOf(cell) !== -1;\r\n      })\r\n    });\r\n  }\r\n\r\n\r\n\r\n  return correctShipPositioning;\r\n};\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = visualShipDisplay;\r\n\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/correctVisualShipPlacement.js?");

/***/ }),

/***/ "./src/UI_Modules/displayGameboards.js":
/*!*********************************************!*\
  !*** ./src/UI_Modules/displayGameboards.js ***!
  \*********************************************/
/***/ ((module) => {

eval("const displayGameboards = (arrayOfArrays, el, cellClass) => {\r\n    //el.innerHTML = \"\";\r\n    for(let i = 0; i < arrayOfArrays.length; i++){\r\n        for(let j = 0; j < arrayOfArrays[i].length; j++){\r\n            const div = document.createElement(\"div\");\r\n            div.setAttribute(\"class\", cellClass);\r\n            el.append(div);\r\n        }\r\n    }\r\n}\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = displayGameboards;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/displayGameboards.js?");

/***/ }),

/***/ "./src/UI_Modules/displayShipShadow.js":
/*!*********************************************!*\
  !*** ./src/UI_Modules/displayShipShadow.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-undef */\r\nconst userCells = [...document.querySelectorAll(\"div.userGbCell\")];\r\n//Ship name button and its corresponding length\r\nconst shipValuesNameLength = __webpack_require__(/*! ./shipValuesNameLength */ \"./src/UI_Modules/shipValuesNameLength.js\");\r\n//Alignement text content button\r\nconst shipValuesAlignement = __webpack_require__(/*! ./shipValuesAlignement */ \"./src/UI_Modules/shipValuesAlignement.js\");\r\nconst positionBtn = document.querySelector(\"button.positionBtn\");\r\nconst shipNameBtn = document.querySelector(\"button.shipName\");\r\n\r\nconst displayShipShadow = (e) => {\r\n  const shipBtnText = shipNameBtn.textContent;\r\n  const positionBtnText = positionBtn.textContent;\r\n  const cell = e.target;\r\n  if (shipBtnText !== \"Place Ship\" && positionBtnText !== \"Alignement\") {\r\n    //cell.style.backgroundColor = \"white\";\r\n    const objNameAndLenght = shipValuesNameLength(shipBtnText);\r\n    const objAlignement = shipValuesAlignement(positionBtnText);\r\n    //object with name, length and alignement\r\n    const obj = { ...objNameAndLenght, ...objAlignement };\r\n    /* When cell is clicked a ship will be created and it will be placed in userGameboard and new gameboard will be rendered\r\n      const vertical = obj.alignement === \"Vertical\";\r\n      const ship = new Ship(obj.length, vertical, obj.name);\r\n      */\r\n    const cellIndex = userCells.indexOf(cell);\r\n    const visualShipPlacement = __webpack_require__(/*! ./correctVisualShipPlacement */ \"./src/UI_Modules/correctVisualShipPlacement.js\");\r\n    let goodPositioning = visualShipPlacement(cellIndex, obj);\r\n    for(const cell of userCells){\r\n      cell.style.pointerEvents = null;\r\n    }\r\n    if (obj.alignement === \"Horizontal\") {\r\n      for (let i = 0; i < obj.length; i++) {\r\n        if (goodPositioning) {\r\n          userCells[cellIndex + i].classList.add(\"ship\");\r\n        } else {\r\n          cell.style.pointerEvents = \"none\";\r\n        }\r\n      }\r\n    }\r\n\r\n    if (obj.alignement === \"Vertical\") {\r\n      for (let i = 0; i < obj.length * 10; i += 10) {\r\n        if (goodPositioning) {\r\n          userCells[cellIndex + i].classList.add(\"ship\");\r\n        } else {\r\n          if (cellIndex + i <= 100) {\r\n            cell.style.pointerEvents = \"none\";\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\nmodule.exports = displayShipShadow;\r\n\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/displayShipShadow.js?");

/***/ }),

/***/ "./src/UI_Modules/fromSetIndexesToSectionDivIndexes.js":
/*!*************************************************************!*\
  !*** ./src/UI_Modules/fromSetIndexesToSectionDivIndexes.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("//take a set with indexes\r\n//and transform its pair of indexes el[0] and el[3]\r\n//into NodeList indexes from 0 to 99 both included\r\n\r\nconst fromSetToNodeListIndexes = (set) => {\r\n  const fromSetToArray = Array.from(set);\r\n  const nodeListIndexes = [];\r\n\r\n  fromSetToArray.forEach((coord) => {\r\n    let rowIndex = parseInt(coord[0]);\r\n    let colIndex = parseInt(coord[3]);\r\n\r\n    //first row from 0 to 9\r\n    //second 10 to 19 and so on until last from 90 to 99\r\n    if (rowIndex === 0);\r\n    else if (rowIndex === 1) rowIndex = 10;\r\n    else if (rowIndex === 2) rowIndex = 20;\r\n    else if (rowIndex === 3) rowIndex = 30;\r\n    else if (rowIndex === 4) rowIndex = 40;\r\n    else if (rowIndex === 5) rowIndex = 50;\r\n    else if (rowIndex === 6) rowIndex = 60;\r\n    else if (rowIndex === 7) rowIndex = 70;\r\n    else if (rowIndex === 8) rowIndex = 80;\r\n    else if (rowIndex === 9) rowIndex = 90;\r\n\r\n    const nodeListCoord = rowIndex + colIndex;\r\n    nodeListIndexes.push(nodeListCoord);\r\n  });\r\n\r\n  return nodeListIndexes;\r\n};\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = fromSetToNodeListIndexes;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/fromSetIndexesToSectionDivIndexes.js?");

/***/ }),

/***/ "./src/UI_Modules/getCellIndexFromArray.js":
/*!*************************************************!*\
  !*** ./src/UI_Modules/getCellIndexFromArray.js ***!
  \*************************************************/
/***/ ((module) => {

eval("const getCellIndex = (row, col) => {\r\n    let index = 0;\r\n    if(row === 0) index += 0;\r\n    else if(row === 1) index += 10;\r\n    else if(row === 2) index += 20;\r\n    else if(row === 3) index += 30;\r\n    else if(row === 4) index += 40;\r\n    else if(row === 5) index += 50;\r\n    else if(row === 6) index += 60;\r\n    else if(row === 7) index += 70;\r\n    else if(row === 8) index += 80;\r\n    else index += 90;\r\n    \r\n    return index + col;\r\n}\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = getCellIndex;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/getCellIndexFromArray.js?");

/***/ }),

/***/ "./src/UI_Modules/getShipCoordinates.js":
/*!**********************************************!*\
  !*** ./src/UI_Modules/getShipCoordinates.js ***!
  \**********************************************/
/***/ ((module) => {

eval("//USER CLICKS ON A DIV \r\n//ITS INDEX GIES THROUGH THIS FUNCTION AND RETURNS\r\n//AN OBJECT WITH THE CORRESPONDIG INDEX FOR ARRAYS \r\n// IF IT IS NEEDED TO PLACE A SHIP WITH PLACESHIP METHOD ROW SHOULD INCREASE BY ONE\r\nconst getShipCoordinates = (index) => {\r\n    let col = 0;\r\n    let row = 0;\r\n    if(index >=0 && index <=9){\r\n        row = 0;\r\n        col = index;\r\n    }else if(index >=10 && index <=19){\r\n        row = 1;\r\n        col = index - 10;\r\n    }else if(index >=20 && index <=29){\r\n        row = 2;\r\n        col = index - 20;\r\n    }else if(index >=30 && index <=39){\r\n        row = 3;\r\n        col = index - 30;\r\n    }else if(index >=40 && index <=49){\r\n        row = 4;\r\n        col = index - 40;\r\n    }else if(index >=50 && index <=59){\r\n        row = 5;\r\n        col = index - 50;\r\n    }else if(index >=60 && index <=69){\r\n        row = 6;\r\n        col = index - 60;\r\n    }else if(index >=70 && index <=79){\r\n        row = 7;\r\n        col = index - 70;\r\n    }else if(index >=80 && index <=89){\r\n        row = 8;\r\n        col = index - 80;\r\n    }else{\r\n        row = 9;\r\n        col = index - 90;\r\n    }\r\n\r\n    return {\r\n        row:  (row + 1),\r\n        col : (col + 1)\r\n    }\r\n    \r\n}\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = getShipCoordinates;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/getShipCoordinates.js?");

/***/ }),

/***/ "./src/UI_Modules/getShipFromUICoords.js":
/*!***********************************************!*\
  !*** ./src/UI_Modules/getShipFromUICoords.js ***!
  \***********************************************/
/***/ ((module) => {

eval("/**\r\n * FUNCTION WILL RECEIVE ROW AND COL\r\n * IN GAMEBOARD IT WILL SEARCH FOR SHIP WITH THAT POSITION IT WILL RETURN IT\r\n */\r\n\r\nconst getShipFromUICoords = (row, col, gameboard) => {\r\n    const shipsArray = gameboard.ships;\r\n    for(const ship of shipsArray){\r\n        if(ship.coordinates.has(`${row}, ${col}`)) return ship;\r\n    }\r\n}\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = getShipFromUICoords;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/getShipFromUICoords.js?");

/***/ }),

/***/ "./src/UI_Modules/removeShipShadow.js":
/*!********************************************!*\
  !*** ./src/UI_Modules/removeShipShadow.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-undef */\r\nconst userCells = [...document.querySelectorAll(\"div.userGbCell\")];\r\n  //Ship name button and its corresponding length\r\n  const shipValuesNameLength = __webpack_require__(/*! ./shipValuesNameLength */ \"./src/UI_Modules/shipValuesNameLength.js\");\r\n  //Alignement text content button\r\n  const shipValuesAlignement = __webpack_require__(/*! ./shipValuesAlignement */ \"./src/UI_Modules/shipValuesAlignement.js\");\r\n  const positionBtn = document.querySelector(\"button.positionBtn\");\r\n  const shipNameBtn = document.querySelector(\"button.shipName\");\r\n\r\nconst removeShipShadow = (e) => {\r\n    const shipBtnText = shipNameBtn.textContent;\r\n    const positionBtnText = positionBtn.textContent;\r\n    const cell = e.target;\r\n    if (shipBtnText !== \"Place Ship\" && positionBtnText !== \"Alignement\") {\r\n      //cRepeated Code\r\n      const objNameAndLenght = shipValuesNameLength(shipBtnText);\r\n      const objAlignement = shipValuesAlignement(positionBtnText);\r\n      //object with name, length and alignement\r\n      const obj = { ...objNameAndLenght, ...objAlignement };\r\n      const cellIndex = userCells.indexOf(cell);\r\n\r\n      if (obj.alignement === \"Horizontal\") {\r\n        for (let i = 0; i < obj.length; i++) {\r\n          if(cellIndex + i <= 99){\r\n            userCells[cellIndex + i].classList.remove(\"ship\");         \r\n          }\r\n\r\n        }\r\n      }\r\n\r\n      if (obj.alignement === \"Vertical\") {\r\n        for (let i = 0; i < obj.length * 10; i += 10) {\r\n          if (cellIndex + i <= 99) {\r\n            userCells[cellIndex + i].classList.remove(\"ship\");\r\n          }\r\n\r\n        }\r\n      }\r\n    }\r\n  };\r\n\r\n  module.exports = removeShipShadow;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/removeShipShadow.js?");

/***/ }),

/***/ "./src/UI_Modules/shipValuesAlignement.js":
/*!************************************************!*\
  !*** ./src/UI_Modules/shipValuesAlignement.js ***!
  \************************************************/
/***/ ((module) => {

eval("//NO CHANGES NEEDED\r\nconst shipValuesAlignement = (elementTextContent) => {\r\n    let obj = null;\r\n    switch (elementTextContent){\r\n      case \"Vertical\":\r\n        obj = {\r\n          alignement: \"Vertical\"\r\n        }\r\n        break;\r\n      case \"Horizontal\":\r\n        obj = {\r\n          alignement: \"Horizontal\"\r\n        }\r\n        break;\r\n    }\r\n    return obj;\r\n  }\r\n\r\n  // eslint-disable-next-line no-undef\r\n  module.exports = shipValuesAlignement;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/shipValuesAlignement.js?");

/***/ }),

/***/ "./src/UI_Modules/shipValuesNameLength.js":
/*!************************************************!*\
  !*** ./src/UI_Modules/shipValuesNameLength.js ***!
  \************************************************/
/***/ ((module) => {

eval("//NO CHANGES NEEDED\r\nconst shipValuesNameLength = (elementTextContent) => {\r\n    let shipNameAndLength = null;\r\n    switch(elementTextContent){\r\n      case \"Cruise\":\r\n        shipNameAndLength = {\r\n          name:\"Cruise\",\r\n          length: 5,\r\n        }\r\n        break;\r\n      case \"Battleship\":\r\n        shipNameAndLength = {\r\n          name:\"Battleship\",\r\n          length: 4,\r\n        }\r\n        break;\r\n      case \"Destroyer\":\r\n        shipNameAndLength = {\r\n          name:\"Destroyer\",\r\n          length: 3,\r\n        }\r\n        break;\r\n      case \"Submarine\":\r\n        shipNameAndLength = {\r\n          name:\"Submarine\",\r\n          length: 3,\r\n        }\r\n        break;\r\n      case \"Patrol Boat\":\r\n        shipNameAndLength = {\r\n          name:\"Patrol Boat\",\r\n          length: 2,\r\n        }\r\n        break;\r\n    }\r\n\r\n    return shipNameAndLength;\r\n  }\r\n\r\n  // eslint-disable-next-line no-undef\r\n  module.exports = shipValuesNameLength;\n\n//# sourceURL=webpack://battleship/./src/UI_Modules/shipValuesNameLength.js?");

/***/ }),

/***/ "./src/gameboard/gameBoard.js":
/*!************************************!*\
  !*** ./src/gameboard/gameBoard.js ***!
  \************************************/
/***/ ((module) => {

eval("\r\nclass GameBoard {\r\n  constructor() {\r\n    this.table = [\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    ];\r\n    this.ships = [\r\n\r\n    ];\r\n    this.shipCoord = new Set();\r\n    this.missedShots = [\r\n\r\n    ];\r\n  }\r\n\r\n  placeShip(_row, _col, _ship) {\r\n    if (_row > 10 || _col > 10) return false;\r\n    //calc the space available taking into accout ship length and its\r\n    //startin position (from left to right when horizontal and from top to\r\n    //bottom when vertical)\r\n    let availableSpace;\r\n    if (_ship.vertical) {\r\n      //ship is vertical\r\n      availableSpace = 10 - (_row - 1); //the user will not introduce the index\r\n      if (availableSpace < _ship.length) return false; //not enought space\r\n      \r\n    } else {\r\n      //ship is horizontal\r\n      availableSpace = 10 - (_col - 1);\r\n      if (availableSpace < _ship.length) return false; //not enought space\r\n    }\r\n\r\n    const coordinates = [];\r\n    //all posible coordinates\r\n    for(let i = 0; i < _ship.length; i++){\r\n        if(_ship.vertical){\r\n            coordinates.push([(_row - 1) + i, (_col - 1)]);\r\n        }else{\r\n            coordinates.push([(_row - 1), (_col - 1) + i]);\r\n        }\r\n    }\r\n\r\n  \r\n    let possibleShip = true;\r\n      coordinates.forEach(el => {\r\n        const [row, col] = el;\r\n        if(this.shipCoord.has(`${row}, ${col}`)) {\r\n          possibleShip = false\r\n          return false;\r\n        };\r\n      })      \r\n    \r\n\r\n    if(possibleShip === true){\r\n      coordinates.forEach(el => {\r\n        const [r, c] = el;\r\n        this.shipCoord.add(`${r}, ${c}`);\r\n        this.table[r][c] = _ship.name.charAt(0);\r\n        _ship.coordinates.add(`${r}, ${c}`);\r\n      })      \r\n      this.ships.push(_ship);\r\n    }\r\n\r\n    \r\n  }\r\n\r\n  receiveAttack(_row, _col) {\r\n    //if(_row > 10 || _col > 10) return false;\r\n    const rowIndex = _row - 1;\r\n    const colIndex = _col - 1;\r\n    const el = [rowIndex, colIndex];\r\n  \r\n    //if shipCoordinates does not have the el add it to missedShots cause \r\n    //no ship occupies that coord\r\n    if(!this.shipCoord.has(`${rowIndex}, ${colIndex}`)){\r\n      this.missedShots.push(el);  \r\n      this.table[rowIndex][colIndex] = \"*\";\r\n      return \"*\";\r\n    }else{\r\n      //if shipCoord has it\r\n      //look for every ship\r\n      //evaluate if coordinates of ship has el coordinates\r\n      //in that case ship has been hitted\r\n      for(const ship of this.ships){\r\n        if(ship.coordinates.has(`${rowIndex}, ${colIndex}`)){\r\n          this.table[rowIndex][colIndex] = \"X\";\r\n          ship.hit();\r\n          ship.isSunk();\r\n          return \"X\";\r\n        }\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n  reset(){\r\n    this.table = [\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    ];\r\n    this.ships = [\r\n\r\n    ];\r\n    this.shipCoord = new Set();\r\n    this.missedShots = [\r\n\r\n    ];\r\n  }\r\n}\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = GameBoard;\n\n//# sourceURL=webpack://battleship/./src/gameboard/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* eslint-disable no-undef */\r\n\r\n\r\n(function () {\r\n  const Ship = __webpack_require__(/*! ./ship/ship */ \"./src/ship/ship.js\");\r\n  const Gameboard = __webpack_require__(/*! ./gameboard/gameBoard */ \"./src/gameboard/gameBoard.js\");\r\n  let playerWins = true;\r\n  const Player = __webpack_require__(/*! ./Player/Player */ \"./src/Player/Player.js\");\r\n  const userSection = document.querySelector(\"section#userGameboard\");\r\n  const computerSection = document.querySelector(\"section#computerGameboard\");\r\n  const userGameboard = new Gameboard();\r\n  const computerGameboard = new Gameboard();\r\n\r\n  const positionBtn = document.querySelector(\"button.positionBtn\");\r\n  const battleBtn = document.querySelector(\"button.battleBtn\");\r\n  const shipNameBtn = document.querySelector(\"button.shipName\");\r\n  const getCellIndexFromArray = __webpack_require__(/*! ./UI_Modules/getCellIndexFromArray */ \"./src/UI_Modules/getCellIndexFromArray.js\");\r\n  const userGameboardSection = document.querySelector(\"section#userGameboard\");\r\n  const computerGameboardSection = document.querySelector(\r\n    \"section#computerGameboard\"\r\n  );\r\n\r\n  let ships = {\r\n    Cruise: 5,\r\n    Battleship: 4,\r\n    Submarine: 3,\r\n    Destroyer: 3,\r\n    \"Patrol Boat\": 2,\r\n  };\r\n  let shipsArray = Object.entries(ships);\r\n\r\n  const fightModal = document.getElementById(\"modal\");\r\n  const closingModalBtn = document.querySelector(\"button.modalBtn\");\r\n\r\n  const alignementTextInBtn = __webpack_require__(/*! ./UI_Modules/alignementTextInBtn */ \"./src/UI_Modules/alignementTextInBtn.js\");\r\n  alignementTextInBtn();\r\n\r\n  const displayGameboards = __webpack_require__(/*! ./UI_Modules/displayGameboards */ \"./src/UI_Modules/displayGameboards.js\");\r\n  displayGameboards(userGameboard.table, userSection, \"userGbCell\");\r\n  displayGameboards(computerGameboard.table, computerSection, \"computerGbCell\");\r\n\r\n  const userCells = [...document.querySelectorAll(\"div.userGbCell\")];\r\n  const computerCells = [...document.querySelectorAll(\"div.computerGbCell\")];\r\n\r\n  const displayShipShadow = __webpack_require__(/*! ./UI_Modules/displayShipShadow */ \"./src/UI_Modules/displayShipShadow.js\");\r\n  const removeShipShadow = __webpack_require__(/*! ./UI_Modules/removeShipShadow */ \"./src/UI_Modules/removeShipShadow.js\");\r\n\r\n  const shipValuesNameLength = __webpack_require__(/*! ./UI_Modules/shipValuesNameLength */ \"./src/UI_Modules/shipValuesNameLength.js\");\r\n  const shipValuesAlignement = __webpack_require__(/*! ./UI_Modules/shipValuesAlignement */ \"./src/UI_Modules/shipValuesAlignement.js\");\r\n\r\n  const getShipCoordinates = __webpack_require__(/*! ./UI_Modules/getShipCoordinates */ \"./src/UI_Modules/getShipCoordinates.js\");\r\n  const fromSetToNodeListIndexes = __webpack_require__(/*! ./UI_Modules/fromSetIndexesToSectionDivIndexes */ \"./src/UI_Modules/fromSetIndexesToSectionDivIndexes.js\");\r\n  const getShipFromUICoords = __webpack_require__(/*! ./UI_Modules/getShipFromUICoords */ \"./src/UI_Modules/getShipFromUICoords.js\");\r\n\r\n  const footerSection = document.querySelector(\"footer>section\");\r\n\r\n  shipNameBtn.addEventListener(\"click\", () => {\r\n    if (shipsArray.length === 0) {\r\n      shipNameBtn.textContent = \"Ships prepared!\";\r\n      battleBtn.classList.remove(\"notPrepared\");\r\n      battleBtn.classList.add(\"startBattle\");\r\n      shipNameBtn.classList.add(\"notPrepared\");\r\n      positionBtn.classList.add(\"notPrepared\");\r\n      userGameboardSection.classList.remove(\"prepared\");\r\n      userGameboardSection.classList.add(\"notPrepared\");\r\n    } else {\r\n      const first = shipsArray.shift();\r\n      const text = first[0];\r\n      shipNameBtn.textContent = text;\r\n    }\r\n  });\r\n\r\n  const displayShip = (e) => {\r\n    const cell = e.target;\r\n    const shipBtnText = shipNameBtn.textContent;\r\n    const positionBtnText = positionBtn.textContent;\r\n    if (shipBtnText !== \"Ships\" && positionBtnText !== \"Alignement\") {\r\n      const objNameAndLenght = shipValuesNameLength(shipBtnText);\r\n      const objAlignement = shipValuesAlignement(positionBtnText);\r\n      const obj = { ...objNameAndLenght, ...objAlignement };\r\n      const ship = new Ship(obj.length, obj.alignement, obj.name);\r\n      const shipCoordinates = getShipCoordinates(userCells.indexOf(cell));\r\n      userGameboard.placeShip(shipCoordinates.row, shipCoordinates.col, ship);\r\n      const nodeListIndexesArray = fromSetToNodeListIndexes(ship.coordinates);\r\n      nodeListIndexesArray.forEach((index) =>\r\n        userCells[index].classList.add(\"placedShip\")\r\n      );\r\n    }\r\n  };\r\n\r\n  const placeComputerShipsRandomly = () => {\r\n    //coordenadas validas random\r\n    //mientras placeships devuelva false seguir con coordenadas random\r\n    //ships vnames and alignement\r\n    let moves;\r\n    const shipNames = [\r\n      \"Cruise\",\r\n      \"Battleship\",\r\n      \"Destroyer\",\r\n      \"Submarine\",\r\n      \"Patrol Boat\",\r\n    ];\r\n    const shipsAlignement = [\"Vertical\", \"Horizontal\"];\r\n    let nameIndex = 0;\r\n    let nameLengthObj;\r\n    let alignementIndex;\r\n    let alignementObj;\r\n    let currentGameboardShipsLenght = computerGameboard.ships.length; //0\r\n    while (computerGameboard.ships.length !== 5) {\r\n      moves = Player.randomValidMove();\r\n      nameLengthObj = shipValuesNameLength(shipNames[nameIndex]);\r\n      alignementIndex = Math.floor(Math.random() * 2);\r\n      alignementObj = shipValuesAlignement(shipsAlignement[alignementIndex]);\r\n      const obj = { ...nameLengthObj, ...alignementObj };\r\n      const ship = new Ship(obj.length, obj.alignement, obj.name);\r\n      computerGameboard.placeShip(moves[0] + 1, moves[1] + 1, ship);\r\n      if (currentGameboardShipsLenght < computerGameboard.ships.length) {\r\n        nameIndex++;\r\n        currentGameboardShipsLenght++;\r\n      }\r\n    }\r\n  };\r\n\r\n  placeComputerShipsRandomly();\r\n\r\n  userCells.forEach((cell) => {\r\n    cell.addEventListener(\"mouseenter\", displayShipShadow);\r\n    cell.addEventListener(\"mouseleave\", removeShipShadow);\r\n    cell.addEventListener(\"click\", displayShip);\r\n  });\r\n\r\n  const show = () => {\r\n    fightModal.showModal();\r\n    battleBtn.classList.remove(\"startBattle\");\r\n  };\r\n  const close = () => {\r\n    fightModal.close();\r\n    computerGameboardSection.classList.remove(\"notPrepared\");\r\n    computerGameboardSection.classList.add(\"prepared\");\r\n    footerSection.classList.add(\"visible\");\r\n    shipNameBtn.classList.add(\"notVisible\");\r\n    positionBtn.classList.add(\"notVisible\");\r\n  };\r\n  battleBtn.addEventListener(\"click\", show);\r\n  closingModalBtn.addEventListener(\"click\", close);\r\n\r\n  const displayWinningMessage = () => {\r\n    const winningDialog = document.querySelector(\"dialog#winningDialog\");\r\n    const winningDialogBtn = document.querySelector(\r\n      \"dialog#winningDialog>button\"\r\n    );\r\n    winningDialog.showModal();\r\n    winningDialogBtn.textContent = playerWins ? \"You win!\" : \"Computer wins!\";\r\n    winningDialogBtn.addEventListener(\"click\", () => {\r\n      computerGameboard.reset();\r\n      userGameboard.reset();\r\n      userCells.forEach((cell) => cell.classList.remove(\"placedShip\"));\r\n      computerCells.forEach((cell) =>\r\n        cell.classList.remove(\"missed\", \"used\", \"hit\")\r\n      );\r\n      userCells.forEach((cell) =>\r\n        cell.classList.remove(\"missed\", \"used\", \"hit\")\r\n      );\r\n      \r\n      userGameboardSection.classList.remove(\"notPrepared\");\r\n      userGameboardSection.classList.add(\"prepared\");\r\n      computerGameboardSection.classList.remove(\"prepared\");\r\n\r\n      footerSection.classList.remove(\"visible\");\r\n\r\n      shipNameBtn.classList.remove(\"notVisible\");\r\n      shipNameBtn.classList.remove(\"notPrepared\");\r\n      shipNameBtn.textContent = \"Ships\";\r\n      positionBtn.classList.remove(\"notVisible\");\r\n      positionBtn.classList.remove(\"notPrepared\");\r\n      positionBtn.textContent = \"Alignement\";\r\n      battleBtn.classList.add(\"notPrepared\");\r\n\r\n      ships = {\r\n        Cruise: 5,\r\n        Battleship: 4,\r\n        Submarine: 3,\r\n        Destroyer: 3,\r\n        \"Patrol Boat\": 2,\r\n      };\r\n      shipsArray = Object.entries(ships);\r\n\r\n      placeComputerShipsRandomly();\r\n      winningDialog.close();\r\n    });\r\n  };\r\n\r\n  /**PROBLE COMES WITH TIMMING OF COMOPUTER MOVES AND THE COMPUTER SHOULD ALSO HAVE THE LOGIC OF\r\n   * MAKING THE NEXT BEST MOVE\r\n   */\r\n  const computerMoves = () => {\r\n    let shipHitted = true;\r\n    let moves;\r\n    let cell;\r\n    while (shipHitted) {\r\n      moves = Player.randomValidMove();\r\n      const [row, col] = moves;\r\n      /**POSSIBLE SHIP INFO */\r\n      //const attackResp = userGameboard.receiveAttack(row, col);\r\n      //const ship = getShipFromUICoords(row + 1, col + 1, userGameboard);\r\n      const cellIndex = getCellIndexFromArray(row, col);\r\n      cell = userCells[cellIndex];\r\n      if (cell.classList.contains(\"placedShip\")) {\r\n        cell.classList.add(\"hit\");\r\n        userGameboard.receiveAttack(row + 1, col + 1);\r\n       // footerSection.textContent = `Computer hitted!`;\r\n        if (userGameboard.ships.every((ship) => ship.sunk === true)) {\r\n          footerSection.textContent = `A computer has sunk all your ships idiot! Shame on you!`;\r\n          playerWins = false;\r\n          displayWinningMessage();\r\n        }\r\n      } else {\r\n        cell.classList.add(\"missed\");\r\n        shipHitted = false;\r\n        //footerSection.textContent = `Computer missed!`;\r\n      }\r\n    }\r\n\r\n    //it is not available anymore\r\n    cell.classList.add(\"used\");\r\n  };\r\n\r\n  const handleUserClick = (e) => {\r\n    const cell = e.target;\r\n    const coordinates = getShipCoordinates(computerCells.indexOf(cell));\r\n    const { row, col } = coordinates;\r\n    const attackResp = computerGameboard.receiveAttack(row, col);\r\n    const ship = getShipFromUICoords(row - 1, col - 1, computerGameboard);\r\n    //DISPLAY HITS AND MISSED HITS\r\n    //FOR ONE AND/OR ALL SHIPS\r\n    if (attackResp === \"X\") {\r\n      //hits\r\n      cell.classList.add(\"hit\");\r\n      footerSection.textContent = `${ship.name} hitted!`;\r\n      if (ship.sunk) {\r\n        footerSection.textContent = `${ship.name} has been sunk!`;\r\n      }\r\n      if (computerGameboard.ships.every((ship) => ship.sunk === true)) {\r\n        footerSection.textContent = `${ship.name} and all ships have been sunk!`;\r\n        displayWinningMessage();\r\n      }\r\n    }\r\n    //MISSED\r\n    if (attackResp === \"*\") {\r\n      footerSection.textContent = \"Missed\";\r\n      cell.classList.add(\"missed\");\r\n      //WHNE MISSSED COMPUTER MAKES MOVE\r\n      computerMoves();\r\n    }\r\n    //EVERY CELL THAT HAS BEEN HITTED OR MISSED SHOULD NOT BE USED AGAIN\r\n    cell.classList.add(\"used\");\r\n  };\r\n\r\n  computerCells.forEach((cell) => {\r\n    cell.addEventListener(\"click\", handleUserClick);\r\n  });\r\n  console.log(computerGameboard.table);\r\n})();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship/ship.js":
/*!**************************!*\
  !*** ./src/ship/ship.js ***!
  \**************************/
/***/ ((module) => {

eval("\r\nclass Ship{\r\n    constructor(_length, _verticalPosition, _name){\r\n        this.length = _length;\r\n        this.vertical = _verticalPosition === \"Vertical\" ? true : false;\r\n        this.timesHitted = 0;\r\n        this.sunk = false;\r\n        this.coordinates = new Set();\r\n        this.name = _name;\r\n    }\r\n\r\n    hit(){\r\n        this.timesHitted += 1;\r\n    }\r\n\r\n    isSunk(){\r\n        this.sunk = this.timesHitted >= this.length;\r\n    }\r\n}\r\n\r\n// eslint-disable-next-line no-undef\r\nmodule.exports = Ship;\n\n//# sourceURL=webpack://battleship/./src/ship/ship.js?");

/***/ }),

/***/ "./src/images/ai.png":
/*!***************************!*\
  !*** ./src/images/ai.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ab1f5d284516d31b2513.png\";\n\n//# sourceURL=webpack://battleship/./src/images/ai.png?");

/***/ }),

/***/ "./src/images/uncle-sam.png":
/*!**********************************!*\
  !*** ./src/images/uncle-sam.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"aff34d967e5041720578.png\";\n\n//# sourceURL=webpack://battleship/./src/images/uncle-sam.png?");

/***/ }),

/***/ "./src/images/versus.png":
/*!*******************************!*\
  !*** ./src/images/versus.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b412aa01628868221103.png\";\n\n//# sourceURL=webpack://battleship/./src/images/versus.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;