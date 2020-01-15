/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byline__ = __webpack_require__(/*! ./byline */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bio__ = __webpack_require__(/*! ./bio */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ieWxpbmUnO1xuaW1wb3J0ICcuL2Jpbyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/byline/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: byline\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar withSelect = wp.data.withSelect;\nvar ServerSideRender = wp.components.ServerSideRender;\nvar Fragment = wp.element.Fragment;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('wp-authors/byline', {\n  title: __('Author Byline', 'wp-author'),\n  icon: 'admin-users',\n  category: 'widgets',\n  keywords: [__('byline', 'wp-author'), __('author', 'wp-author')],\n\n  edit: withSelect(function (select) {\n    var post_id = select(\"core/editor\").getCurrentPostId();\n    var author_ids = select(\"core/editor\").getEditedPostAttribute('authors');\n    var query = {\n      include: author_ids\n    };\n\n    return {\n      terms: select('core').getEntityRecords('taxonomy', 'guest_author', query),\n      author_ids: author_ids\n    };\n  })(function (_ref) {\n    var terms = _ref.terms,\n        author_ids = _ref.author_ids,\n        className = _ref.className;\n\n    if (author_ids.length === 0) {\n      return 'Please select author(s).';\n    }\n\n    if (!terms) {\n      return 'Loading...';\n    }\n\n    if (terms && terms.length === 0) {\n      return 'No authors';\n    }\n\n    return wp.element.createElement(\n      'ul',\n      { className: className },\n      terms.map(function (term, index) {\n        return wp.element.createElement(\n          'li',\n          { key: index },\n          wp.element.createElement(\n            'a',\n            { className: 'author-link', href: term.link },\n            term.name\n          )\n        );\n      })\n    );\n  }),\n  save: function save(props) {\n    return null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ieWxpbmUvaW5kZXguanM/YjFiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBieWxpbmVcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgd2l0aFNlbGVjdCA9IHdwLmRhdGEud2l0aFNlbGVjdDtcbnZhciBTZXJ2ZXJTaWRlUmVuZGVyID0gd3AuY29tcG9uZW50cy5TZXJ2ZXJTaWRlUmVuZGVyO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcblxuLyoqXG4gKiBSZWdpc3RlcjogYWEgR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3dwLWF1dGhvcnMvYnlsaW5lJywge1xuICB0aXRsZTogX18oJ0F1dGhvciBCeWxpbmUnLCAnd3AtYXV0aG9yJyksXG4gIGljb246ICdhZG1pbi11c2VycycsXG4gIGNhdGVnb3J5OiAnd2lkZ2V0cycsXG4gIGtleXdvcmRzOiBbX18oJ2J5bGluZScsICd3cC1hdXRob3InKSwgX18oJ2F1dGhvcicsICd3cC1hdXRob3InKV0sXG5cbiAgZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG4gICAgdmFyIHBvc3RfaWQgPSBzZWxlY3QoXCJjb3JlL2VkaXRvclwiKS5nZXRDdXJyZW50UG9zdElkKCk7XG4gICAgdmFyIGF1dGhvcl9pZHMgPSBzZWxlY3QoXCJjb3JlL2VkaXRvclwiKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdhdXRob3JzJyk7XG4gICAgdmFyIHF1ZXJ5ID0ge1xuICAgICAgaW5jbHVkZTogYXV0aG9yX2lkc1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGVybXM6IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3RheG9ub215JywgJ2d1ZXN0X2F1dGhvcicsIHF1ZXJ5KSxcbiAgICAgIGF1dGhvcl9pZHM6IGF1dGhvcl9pZHNcbiAgICB9O1xuICB9KShmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB0ZXJtcyA9IF9yZWYudGVybXMsXG4gICAgICAgIGF1dGhvcl9pZHMgPSBfcmVmLmF1dGhvcl9pZHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG4gICAgaWYgKGF1dGhvcl9pZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1BsZWFzZSBzZWxlY3QgYXV0aG9yKHMpLic7XG4gICAgfVxuXG4gICAgaWYgKCF0ZXJtcykge1xuICAgICAgcmV0dXJuICdMb2FkaW5nLi4uJztcbiAgICB9XG5cbiAgICBpZiAodGVybXMgJiYgdGVybXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gJ05vIGF1dGhvcnMnO1xuICAgIH1cblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuICAgICAgdGVybXMubWFwKGZ1bmN0aW9uICh0ZXJtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdhdXRob3ItbGluaycsIGhyZWY6IHRlcm0ubGluayB9LFxuICAgICAgICAgICAgdGVybS5uYW1lXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9KSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ieWxpbmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/byline/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ieWxpbmUvZWRpdG9yLnNjc3M/NmQ1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2J5bGluZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/byline/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ieWxpbmUvc3R5bGUuc2Nzcz9mYWE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYnlsaW5lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!**************************!*\
  !*** ./src/bio/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: byline\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar withSelect = wp.data.withSelect;\n\n\nconsole.log('loaded');\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('wp-authors/bio', {\n\ttitle: __('Author Bios', 'wp-author'),\n\ticon: 'id',\n\tcategory: 'widgets',\n\tkeywords: [__('bio', 'wp-author'), __('author', 'wp-author'), __('card', 'wp-author')],\n\n\tedit: withSelect(function (select) {\n\t\tvar author_ids = select('core/editor').getEditedPostAttribute('authors');\n\t\tvar query = {\n\t\t\tinclude: author_ids\n\t\t};\n\n\t\treturn {\n\t\t\tterms: select('core').getEntityRecords('taxonomy', 'guest_author', query),\n\t\t\tauthor_ids: author_ids\n\t\t};\n\t})(function (_ref) {\n\t\tvar terms = _ref.terms,\n\t\t    author_ids = _ref.author_ids,\n\t\t    className = _ref.className;\n\n\t\tif (author_ids.length === 0) {\n\t\t\treturn 'Please select author(s).';\n\t\t}\n\n\t\tif (!terms) {\n\t\t\treturn 'Loading...';\n\t\t}\n\n\t\tif (terms && terms.length === 0) {\n\t\t\treturn 'No authors.';\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\tterms.map(function (term, index) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ key: index, className: 'author-bio' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'author-name author-title-wrapper' },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'h2',\n\t\t\t\t\t\t\t{ className: 'author-title heading-size-4' },\n\t\t\t\t\t\t\tterm.name\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement('div', { className: 'author-description', dangerouslySetInnerHTML: { __html: term.description } }),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'a',\n\t\t\t\t\t\t{ className: 'author-link', href: term.link, rel: 'author' },\n\t\t\t\t\t\t__('View Archive', 'wp-authors')\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t})\n\t\t);\n\t}),\n\tsave: function save(props) {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iaW8vaW5kZXguanM/NWJmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBieWxpbmVcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgd2l0aFNlbGVjdCA9IHdwLmRhdGEud2l0aFNlbGVjdDtcblxuXG5jb25zb2xlLmxvZygnbG9hZGVkJyk7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5yZWdpc3RlckJsb2NrVHlwZSgnd3AtYXV0aG9ycy9iaW8nLCB7XG5cdHRpdGxlOiBfXygnQXV0aG9yIEJpb3MnLCAnd3AtYXV0aG9yJyksXG5cdGljb246ICdpZCcsXG5cdGNhdGVnb3J5OiAnd2lkZ2V0cycsXG5cdGtleXdvcmRzOiBbX18oJ2JpbycsICd3cC1hdXRob3InKSwgX18oJ2F1dGhvcicsICd3cC1hdXRob3InKSwgX18oJ2NhcmQnLCAnd3AtYXV0aG9yJyldLFxuXG5cdGVkaXQ6IHdpdGhTZWxlY3QoZnVuY3Rpb24gKHNlbGVjdCkge1xuXHRcdHZhciBhdXRob3JfaWRzID0gc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ2F1dGhvcnMnKTtcblx0XHR2YXIgcXVlcnkgPSB7XG5cdFx0XHRpbmNsdWRlOiBhdXRob3JfaWRzXG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXJtczogc2VsZWN0KCdjb3JlJykuZ2V0RW50aXR5UmVjb3JkcygndGF4b25vbXknLCAnZ3Vlc3RfYXV0aG9yJywgcXVlcnkpLFxuXHRcdFx0YXV0aG9yX2lkczogYXV0aG9yX2lkc1xuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChfcmVmKSB7XG5cdFx0dmFyIHRlcm1zID0gX3JlZi50ZXJtcyxcblx0XHQgICAgYXV0aG9yX2lkcyA9IF9yZWYuYXV0aG9yX2lkcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cblx0XHRpZiAoYXV0aG9yX2lkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnUGxlYXNlIHNlbGVjdCBhdXRob3IocykuJztcblx0XHR9XG5cblx0XHRpZiAoIXRlcm1zKSB7XG5cdFx0XHRyZXR1cm4gJ0xvYWRpbmcuLi4nO1xuXHRcdH1cblxuXHRcdGlmICh0ZXJtcyAmJiB0ZXJtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnTm8gYXV0aG9ycy4nO1xuXHRcdH1cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHRlcm1zLm1hcChmdW5jdGlvbiAodGVybSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGtleTogaW5kZXgsIGNsYXNzTmFtZTogJ2F1dGhvci1iaW8nIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2F1dGhvci1uYW1lIGF1dGhvci10aXRsZS13cmFwcGVyJyB9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnaDInLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2F1dGhvci10aXRsZSBoZWFkaW5nLXNpemUtNCcgfSxcblx0XHRcdFx0XHRcdFx0dGVybS5uYW1lXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnYXV0aG9yLWRlc2NyaXB0aW9uJywgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiB0ZXJtLmRlc2NyaXB0aW9uIH0gfSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2EnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdhdXRob3ItbGluaycsIGhyZWY6IHRlcm0ubGluaywgcmVsOiAnYXV0aG9yJyB9LFxuXHRcdFx0XHRcdFx0X18oJ1ZpZXcgQXJjaGl2ZScsICd3cC1hdXRob3JzJylcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0pLFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jpby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************!*\
  !*** ./src/bio/editor.scss ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iaW8vZWRpdG9yLnNjc3M/MmQ5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jpby9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************!*\
  !*** ./src/bio/style.scss ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iaW8vc3R5bGUuc2Nzcz8xMTE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmlvL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);