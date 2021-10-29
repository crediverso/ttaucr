/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TTAUCR"] = factory();
	else
		root["TTAUCR"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Util\": () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.Util)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://TTAUCR/./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Util = /*#__PURE__*/function () {\n  function Util() {\n    _classCallCheck(this, Util);\n\n    this.init = true;\n    window.liveInstances = {};\n  }\n\n  _createClass(Util, [{\n    key: \"classInitiated\",\n    get: function get() {\n      return this.init;\n    }\n  }, {\n    key: \"existentWindows\",\n    get: function get() {\n      return window.liveInstances;\n    }\n  }, {\n    key: \"returnTrue\",\n    value: function returnTrue() {\n      return true;\n    }\n  }, {\n    key: \"closeWindows\",\n    value: function closeWindows() {\n      var windowChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      try {\n        if (windowChannel) {\n          window.liveInstances[windowChannel].close();\n          delete window.liveInstances[windowChannel];\n        } else {\n          for (var _window in _window.liveInstances) {\n            _window.liveInstances[_window].close();\n          }\n\n          window.liveInstance = {};\n        }\n      } catch (e) {\n        console.log('Not able to close this window', e);\n      }\n    }\n  }, {\n    key: \"waitForDefinition\",\n    value: function waitForDefinition() {\n      var varToBeWatched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var timeoutms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15000;\n      var timeInterval = null;\n      var timeoutFlag = false;\n      var timeout = null;\n      return new Promise(function (resolve, reject) {\n        timeInterval = setInterval(function () {\n          if (varToBeWatched != null) {\n            clearTimeout(timeout);\n            resolve(true);\n          }\n\n          timeout = setTimeout(function () {\n            timeoutFlag = true;\n            reject({\n              error: '[TTAUCR.Util.waitForBody] Variable declaration timeout'\n            });\n          }, timeoutms);\n        }, 500);\n      });\n    }\n  }, {\n    key: \"createWindow\",\n    value: function createWindow() {\n      var targetURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';\n      return new Promise(function (resolve, reject) {\n        try {\n          window.liveInstances[targetURL] = window.open(targetURL, 'modal', 'width=350,height=450');\n          resolve(window.liveInstances[targetURL]);\n        } catch (e) {\n          reject(e);\n        }\n      });\n    }\n  }, {\n    key: \"send\",\n    value: function () {\n      var _send = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var message,\n            targetURL,\n            channel,\n            encodeToBase64,\n            childWindow,\n            readyFlag,\n            _args = arguments;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                message = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';\n                targetURL = _args.length > 1 && _args[1] !== undefined ? _args[1] : '*';\n                channel = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'default';\n                encodeToBase64 = _args.length > 3 && _args[3] !== undefined ? _args[3] : true;\n\n                if (window.liveInstances.hasOwnProperty(channel)) {\n                  _context.next = 15;\n                  break;\n                }\n\n                _context.next = 7;\n                return this.createWindow(targetURL);\n\n              case 7:\n                childWindow = _context.sent;\n                window.liveInstances[channel] = childWindow;\n                _context.next = 11;\n                return this.waitForDefinition(window.liveInstances[channel].document.body);\n\n              case 11:\n                readyFlag = _context.sent;\n\n                if (readyFlag) {\n                  window.liveInstances[channel].document.title = channel;\n                  window.liveInstances[channel].postMessage(this.createMessageObject(message, channel, encodeToBase64), targetURL);\n                }\n\n                _context.next = 16;\n                break;\n\n              case 15:\n                if (window.liveInstances[channel].closed) {\n                  delete window.liveInstances[channel];\n                  this.send(message, targetURL, channel, false);\n                } else {\n                  window.liveInstances[channel].postMessage(this.createMessageObject(message, channel, encodeToBase64), targetURL);\n                }\n\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function send() {\n        return _send.apply(this, arguments);\n      }\n\n      return send;\n    }()\n  }, {\n    key: \"createMessageObject\",\n    value: function createMessageObject() {\n      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var channel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';\n      var encodeToBase64 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n      var messageObject = {};\n      messageObject[channel] = encodeToBase64 ? btoa(message) : message;\n      return messageObject;\n    }\n  }, {\n    key: \"listen\",\n    value: function listen(channel) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (event) {};\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      return window.addEventListener(\"message\", function (event) {\n        try {\n          var data = event.data[channel];\n          var decodedMessage = atob(data);\n          callback(decodedMessage);\n        } catch (e) {}\n      }, options);\n    }\n  }]);\n\n  return Util;\n}();\n\nmodule.exports = {\n  Util: Util\n};\n\n//# sourceURL=webpack://TTAUCR/./src/util.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});