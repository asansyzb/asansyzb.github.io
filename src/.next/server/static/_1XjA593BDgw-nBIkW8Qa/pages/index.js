module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./styles/components/common.styles.ts

const useStyles = Object(styles_["makeStyles"])(theme => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));
/* harmony default export */ var common_styles = (useStyles);
// CONCATENATED MODULE: ./components/About.tsx
var __jsx = external_react_default.a.createElement;




const content = [`Hi!`, `I'm Alibek. I'm a coder, a maker, a believer.`, `I am an extrovert. I can talk about different topics until I run out of imagination. Maybe that's the reason why I left South Korea.`, `At the age of 19 I co-founded a subscription based startup as a CTO. I had an amazing journey into the tech and business world. At the age of 20 I was one of the first developers at a blockchain based startup <b> Unstoppable Domains.</b> (<a href="https://unstoppabledomains.com" target="_blank">check them out!</a>)`, `Currently, I am learning finance and machine learning. I believe that we can enhance financial institutions by applying computer simulations. Let's see where it'll bring me.`, `Passively looking for internships / full-time positions as a full-stack developer.`];

const About = ({}) => {
  const classes = common_styles();
  return __jsx(Container_default.a, {
    className: classes.container
  }, __jsx(Typography_default.a, {
    variant: "h3"
  }, "alibek sansyzbayev"), __jsx("br", null), __jsx(Typography_default.a, {
    variant: "h4"
  }, "About me"), __jsx("br", null), content.map((data, idx) => __jsx(external_react_default.a.Fragment, {
    key: idx
  }, __jsx(Typography_default.a, {
    variant: "h6",
    dangerouslySetInnerHTML: {
      __html: data
    }
  }), __jsx("br", null))));
};

/* harmony default export */ var components_About = (About);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/Education.tsx
var Education_jsx = external_react_default.a.createElement;





const Education_content = [[`Software Engineer / 42 School Silicon Valley October 2018 - July 2020, Fremont, Ca, US`, `42 is a private, non-profit and tuition free computer programming school in Silicon Valley, USA. Achieved level 9 in 3 months (average - 1 level per month).`], [`Bachelor of Computer Science / Korea Advanced Institute of Science and Technology (KAIST) August 2016 - August 2018, Daejeon, South Korea`, `KAIST is the top 40 university in the world according to QS Top Universities (2018). Dropped out after 3 semesters.`], [`High School / Republican Physics-Mathematics School (RPMS) September 2013 - May 2016, Almaty, Kazakhstan`, `RPMS is top 1 school in the area of natural sciences in Kazakhstan (founders of “Yandex” Ilya Segalovich and Arkady Volozh studied at this school).`]];

const Education = ({}) => {
  const classes = common_styles();
  return Education_jsx(Container_default.a, {
    className: classes.container
  }, Education_jsx(Typography_default.a, {
    variant: "h4"
  }, "Education"), Education_jsx("br", null), Education_content.map((data, idx) => Education_jsx(external_react_default.a.Fragment, {
    key: idx
  }, Education_jsx(Typography_default.a, {
    variant: "h6"
  }, data[0]), Education_jsx(Typography_default.a, {
    variant: "body1"
  }, data[1]), Education_jsx("br", null))), Education_jsx(core_["Divider"], null));
};

/* harmony default export */ var components_Education = (Education);
// CONCATENATED MODULE: ./components/Experience.tsx
var Experience_jsx = external_react_default.a.createElement;




const Experience_content = [[`Full Stack Developer / Unstoppable Domains April 2019 - February 2020, San Francisco, Ca, USA`, `Developed and improved backend (Node.js) and frontend (React.js). Connected backend with Ethereum and Zilliqa blockchain technologies.`], [`CTO (Cofounder) / Brandlesskz May 2018 - November 2018, Astana, Kazakhstan`, `Developed using Agile Methodology frontend (Vue.js), backend (Node.js), iOS and Android mobile applications (Flutter) for customers. Developed Telegram Bot for better Supply and Chain Management.`], [`Lecturer / MethodPro (Method Digital Education) June 2018 -July 2018, Astana, Kazakhstan`, `Instructed ~50 students Vue.js Progressive Web Framework, Agile Development, and Web Fundamentals (HTML5, CSS, Javascript).`], [`Information Technology Tutor / Method Digital Education Feb 2018 - July 2018, Astana, Kazakhstan`, `Instructed high school and university students programming fundamentals (data structures, algorithms) using python.`], [`Mentor (Mentor Program) / Korea Advanced Institute of Science and Technology (KAIST) August 2017 - December 2017, Daejeon, South Korea`, `Mentored new students with the beginning of the first semester.`], [`Coordinator (Coordinator Team) / International Olympiad in Informatics (IOI) July 2015 - August 2015, Almaty, Kazakhstsan`, `Worked on the organization part. Fixed the technical problems that occurred during the Olympiad.`]];

const Experience = ({}) => {
  const classes = common_styles();
  return Experience_jsx(Container_default.a, {
    className: classes.container
  }, Experience_jsx(Typography_default.a, {
    variant: "h4"
  }, "Experience"), Experience_jsx("br", null), Experience_content.map((data, idx) => Experience_jsx(external_react_default.a.Fragment, {
    key: idx
  }, Experience_jsx(Typography_default.a, {
    variant: "h6"
  }, data[0]), Experience_jsx(Typography_default.a, {
    variant: "body1"
  }, data[1]), Experience_jsx("br", null))));
};

/* harmony default export */ var components_Experience = (Experience);
// CONCATENATED MODULE: ./pages/index.tsx
var pages_jsx = external_react_default.a.createElement;






const App = ({}) => {
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(components_About, null), pages_jsx(core_["Divider"], null), pages_jsx(components_Experience, null), pages_jsx(core_["Divider"], null), pages_jsx(components_Education, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });