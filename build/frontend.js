/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CorrectMessage.jsx":
/*!*******************************************!*\
  !*** ./src/components/CorrectMessage.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CorrectMessage = _ref => {
  let {
    show,
    onClick
  } = _ref;
  const [showMessage, setShowMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (show) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(undefined);
      }, 2000);
    }
  }, [show]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: onClick,
    className: ` ${showMessage ? 'correct_message' : showMessage === undefined ? 'correct_message_hide' : 'hidden'} w-full items-center absolute top-0 left-0 bg-green-500 flex h-full rounded-md text-center justify-center  flex-col opacity-0 flex:opacity-100 transition-opacity duration-500`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    className: "bi bi-emoji-smile",
    viewBox: "0 0 16 16"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-xl"
  }, "That's Correct Answer!"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CorrectMessage);

/***/ }),

/***/ "./src/components/IncorrectMessage.jsx":
/*!*********************************************!*\
  !*** ./src/components/IncorrectMessage.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IncorrectMessage = _ref => {
  let {
    show,
    onClick
  } = _ref;
  const [showMessage, setShowMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (show === false) {
      setShowMessage(false);
      setTimeout(() => {
        setShowMessage(undefined);
      }, 2000);
    }
  }, [show]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: onClick,
    className: ` ${showMessage === false ? 'incorrect_message' : showMessage === undefined ? 'incorrect_message_hide' : 'hidden'} w-full items-center absolute top-0 left-0 bg-red-500 h-full flex rounded-md text-center justify-center  flex-col opacity-0 flex:opacity-100 transition-opacity duration-500`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    className: "bi bi-emoji-frown",
    viewBox: "0 0 16 16"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-xl"
  }, "Sorry! try again."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IncorrectMessage);

/***/ }),

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CorrectMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CorrectMessage */ "./src/components/CorrectMessage.jsx");
/* harmony import */ var _components_IncorrectMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/IncorrectMessage */ "./src/components/IncorrectMessage.jsx");
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");






document.addEventListener("DOMContentLoaded", function () {
  const divToUpdate = document.querySelectorAll(".quiz-update-me");
  divToUpdate.forEach(function (div) {
    const data = JSON.parse(div.querySelector("pre").innerHTML);
    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Quiz, {
      data: data
    }), div);
    div.classList.remove("quiz-update-me");
  });
});
const Quiz = _ref => {
  let {
    data
  } = _ref;
  const [correctAnswer, setCorrectAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isCorrect, setIsCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const [isCorrectDelayed, setIsCorrectDelayed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const handleAnswer = index => {
    setCorrectAnswer(index);
    if (index == data.correctAnswer) {
      setIsCorrect(true);
    } else {
      // alert('Wrong Answer')
      setIsCorrect(false);
    }
  };
  console.log(data.answerColor);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isCorrect === false) {
      setTimeout(() => {
        setIsCorrect(undefined);
      }, 2500);
    }
    if (isCorrect === true) {
      setTimeout(() => {
        setIsCorrectDelayed(true);
      }, 1000);
    }
  }, [isCorrect]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "quiz-frontend relative p-5  rounded-md shadow-md shadow-gray-400 ",
    style: {
      backgroundColor: data.bgColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4 relative z-10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-xl font-semibold",
    style: {
      color: data.headingColor,
      textAlign: data.theAlignment
    }
  }, data.question), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "flex justify-between gap-3"
  }, data.answers.map((answer, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      onClick: isCorrect === true ? undefined : () => handleAnswer(index),
      style: {
        color: data.answerColor ? data.answerColor : "#000000",
        backgroundColor: data.answerBgColor ? data.answerBgColor : "#efdfdf"
      },
      className: ` ${isCorrectDelayed === true && index === data.correctAnswer ? "cursor-normal" : isCorrectDelayed === true && index !== data.correctAnswer ? "cursor-normal opacity-50" : "cursor-pointer"}  hover:bg-[${data.answerBgColorHover}] px-3 py-3 rounded-md w-full  flex gap-2 items-center font-semibold`
    }, isCorrectDelayed === true && index == data.correctAnswer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      className: "bi bi-check text-blue-600",
      viewBox: "0 0 16 16"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
    })), isCorrectDelayed === true && index !== data.correctAnswer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      className: "bi bi-x",
      viewBox: "0 0 16 16"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, answer));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CorrectMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: isCorrect
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_IncorrectMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: isCorrect
  }));
};
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map