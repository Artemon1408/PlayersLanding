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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burgermenus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgermenus */ "./src/js/modules/burgermenus.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_calcRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calcRating */ "./src/js/modules/calcRating.js");
/* harmony import */ var _modules_themeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/themeToggle */ "./src/js/modules/themeToggle.js");




window.addEventListener("DOMContentLoaded", () => {
  Object(_modules_burgermenus__WEBPACK_IMPORTED_MODULE_0__["default"])(".burger__menu", "[data-link]", ".burger");
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_1__["default"])(".banner__burger");
  Object(_modules_calcRating__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_themeToggle__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("banner__burger-menu-active");
      if (this.classList.contains("active")) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burgermenus.js":
/*!***************************************!*\
  !*** ./src/js/modules/burgermenus.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burgerMenus = (menuSelector, linkItem, burgerselector) => {
  const menu = document.body.querySelector(menuSelector),
    menuItem = document.body.querySelectorAll(linkItem),
    hamburger = document.body.querySelector(burgerselector);
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger-active");
    menu.classList.toggle("burger__menu-active");
    if (hamburger.classList.contains("burger-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
  menuItem.forEach(item => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger-active");
      menu.classList.toggle("burger__menu-active");
      if (menu.classList.contains("burger__menu-active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (burgerMenus);

/***/ }),

/***/ "./src/js/modules/calcRating.js":
/*!**************************************!*\
  !*** ./src/js/modules/calcRating.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calcRating = () => {
  const headRating = document.querySelector(".banner__nav-pagination"),
    numberRatings = document.querySelectorAll(".banner__nav-pag"),
    ratingBar = document.querySelector(".banner__rating-descr");
  function showRating(value = 0) {
    let span = document.createElement("span");
    span.style.cssText = `color: rgb(249, 185, 54); 
    font-family: "Red Hat Display"; 
    font-size: 20px; 
    font-weight: 700; 
    line-height: 26px; 
    letter-spacing: 0px; 
    text-align: left;`;
    span.innerText = value;
    ratingBar.innerHTML = `Your rating: <span>${value}</span>`;
    document.body.appendChild(span);
  }
  headRating.addEventListener("click", e => {
    const target = e.target;
    if (target && target.classList.contains("banner__nav-pag")) {
      numberRatings.forEach((item, i) => {
        if (target == item) {
          showRating(i);
        }
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (calcRating);

/***/ }),

/***/ "./src/js/modules/themeToggle.js":
/*!***************************************!*\
  !*** ./src/js/modules/themeToggle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const themeToggle = () => {
  const root = document.querySelector(":root"),
    toggle = document.querySelector("#theme");
  toggle.addEventListener("click", () => {
    root.classList.toggle("dark");
  });
};
/* harmony default export */ __webpack_exports__["default"] = (themeToggle);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map