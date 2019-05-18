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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(htmlElementsArray) {\n        this.htmlElementsArray = htmlElementsArray;\n    }\n\n    html(string) {\n        if (!string) {\n            return this.htmlElementsArray[0].innerHTML;\n        } else {\n            for (let i = 0; i < this.htmlElementsArray.length; i++) {\n                this.htmlElementsArray[i].innerHTML = string;\n            }\n        }\n    }\n\n    empty() {\n        for (let i = 0; i < this.htmlElementsArray.length; i++) {\n            this.htmlElementsArray[i].innerHTML = \"\";\n        }\n    }\n\n    append(input){\n        if(input.constructor.name === 'String'){\n            for (let i = 0; i < this.htmlElementsArray.length; i++) {\n                this.htmlElementsArray[i].innerHTML += input;\n            }\n        } else if (input instanceof HTMLElement){\n            for (let i = 0; i < this.htmlElementsArray.length; i++) {\n                let deep = true;\n                let cloned = input.cloneNode(deep);\n                this.htmlElementsArray[i].appendChild(cloned);\n            }\n\n        } else if (input.constructor.name === 'DOMNodeCollection') {\n            for (let i = 0; i < this.htmlElementsArray.length; i++) {\n                for(let j = 0; j < input.htmlElementsArray.length; j++ ){\n                    let deep = true;\n                    let clone = input.htmlElementsArray[j].cloneNode(deep);\n                    this.htmlElementsArray[i].appendChild(clone);\n                }\n            }\n        }\n    }\n\n    attr(attrName){\n        return (this.htmlElementsArray[0].getAttribute(attrName)) ? (this.htmlElementsArray[0].getAttribute(attrName)) : undefined;\n    }\n\n    addClass(classNames){\n        for (let i = 0; i < this.htmlElementsArray.length; i++) {\n            let classAttr = this.htmlElementsArray[i].getAttribute(\"class\");\n            classNames = classAttr + \" \" + classNames;\n            this.htmlElementsArray[i].setAttribute(\"class\", classNames);\n        }\n    }\n\n    removeClass(classNames){\n        for(let i = 0; i < this.htmlElementsArray.length; i++){\n            this.htmlElementsArray[i].classList.remove(classNames);\n        }\n    }\n\n    children(){\n        let domNodeCollection = new DOMNodeCollection;\n        for (let i = 0; i < this.htmlElementsArray.length; i++) {\n            domNodeCollection.push( [this.htmlElementsArray[i], this.htmlElementsArray[i].children()])\n        }\n        return domNodeCollection;\n    }\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nconst core = function (input) {\n    if(input.constructor.name === \"HTMLElement\"){\n        let htmlElementsArray = [];\n        htmlElementsArray.push(input);\n        let domNodeCollection = DOMNodeCollection(htmlElementsArray);\n        return domNodeCollection;\n    } else if (typeof input === \"string\") {\n    // } else if (input.constructor.name === \"String\") {\n        let elementList = document.querySelectorAll(input);\n        let array = Array.from(elementList);\n        let domNodeCollection = new DOMNodeCollection(array);\n        return domNodeCollection;\n    }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n    window.$l = core;\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });