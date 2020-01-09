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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/JPZJPZ2416/repositories/vinbird/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "My styled page"), __jsx("meta", {
  content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no",
  name: "viewport",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("link", {
  href: "/css/material-kit.css?v=2.0.6",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), __jsx("body", {
  class: "index-page sidebar-collapse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("nav", {
  class: "navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg",
  "color-on-scroll": "100",
  id: "sectionsNav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("div", {
  class: "navbar-translate",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("a", {
  class: "navbar-brand",
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, " VinBirdnest "), __jsx("button", {
  class: "navbar-toggler",
  type: "button",
  "data-toggle": "collapse",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("span", {
  class: "sr-only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Toggle navigation"), __jsx("span", {
  class: "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("span", {
  class: "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("span", {
  class: "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}))), __jsx("div", {
  class: "collapse navbar-collapse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("ul", {
  class: "navbar-nav ml-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("li", {
  class: "dropdown nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  class: "dropdown-toggle nav-link",
  "data-toggle": "dropdown",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "apps"), " About VinBirdnest"), __jsx("div", {
  class: "dropdown-menu dropdown-with-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("a", {
  href: "./about-vinbird.html",
  class: "dropdown-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "layers"), " About VinBirdnest"), __jsx("a", {
  href: "./about-birdnest.html",
  class: "dropdown-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "layers"), " About bird's nest"), __jsx("a", {
  href: "./product-services.html",
  class: "dropdown-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "content_paste"), " Products & Services"), __jsx("a", {
  href: "how-its-made.html",
  class: "dropdown-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "content_paste"), " How It's made"))), __jsx("li", {
  class: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("a", {
  class: "nav-link",
  href: "./faq.html",
  onclick: "scrollToDownload()",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "info"), " FAQ")), __jsx("li", {
  class: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("a", {
  class: "nav-link",
  href: "./gallery.html",
  onclick: "scrollToDownload()",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "aspect_ratio"), " Gallery")), __jsx("li", {
  class: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("a", {
  class: "nav-link",
  href: "./contact.html",
  onclick: "scrollToDownload()",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "settings_phone"), " Contact")), __jsx("li", {
  class: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("a", {
  class: "nav-link",
  href: "./cn/index.html",
  onclick: "scrollToDownload()",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "translate"), " \u4E2D\u6587")), __jsx("li", {
  class: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("a", {
  class: "nav-link",
  rel: "tooltip",
  title: "",
  "data-placement": "bottom",
  href: "https://twitter.com/CreativeTim",
  target: "_blank",
  "data-original-title": "Follow us on Twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx("i", {
  class: "fa fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}))), __jsx("li", {
  class: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("a", {
  class: "nav-link",
  rel: "tooltip",
  title: "",
  "data-placement": "bottom",
  href: "https://www.facebook.com/CreativeTim",
  target: "_blank",
  "data-original-title": "Like us on Facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("i", {
  class: "fa fa-facebook-square",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}))), __jsx("li", {
  class: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("a", {
  class: "nav-link",
  rel: "tooltip",
  title: "",
  "data-placement": "bottom",
  href: "https://www.instagram.com/CreativeTimOfficial",
  target: "_blank",
  "data-original-title": "Follow us on Instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx("i", {
  class: "fa fa-instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}))))))), __jsx("div", {
  class: "page-header header-filter clear-filter purple-filter",
  "data-parallax": "true",
  style: {
    backgroundImage: `url('./assets/img/background/bg2.jpg')`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx("div", {
  class: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, __jsx("div", {
  class: "col-md-8 ml-auto mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("div", {
  class: "brand",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, "VinBirdnest"), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, "Live the nature")))))), __jsx("div", {
  class: "main main-raised",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, __jsx("div", {
  class: "section section-basic",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("div", {
  class: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, "We believe nature has been providing us with many benefits.")), __jsx("div", {
  id: "buttons",
  class: "cd-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("div", {
  class: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("div", {
  class: "col-md-8 ml-auto mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, "In VinBirdnest, we deliver edible bird\u2019s nest by keeping true to its natural way. Thus, we want people to enjoy its natural benefit through our high quality products."))))), __jsx("div", {
  class: "navigation-example",
  style: {
    backgroundImage: `url('./assets/img/background/bg.jpg')`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}), __jsx("div", {
  class: "section section-basic",
  style: {
    backgroundColor: '#eecd74'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx("div", {
  class: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, "100% Certified High Quality Products and Registered Company")), __jsx("div", {
  id: "buttons",
  class: "cd-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, __jsx("div", {
  class: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, __jsx("div", {
  class: "col-md-8 ml-auto mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, "Vinbirdnest is legally registered as edible bird's nest exporting company in People's Republic of China under registration number 002. Therefore, to maintain and improve the high standard of our product quality, we have also obtained required certifications.", __jsx("div", {
  class: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, "\u2190 ", __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}, "Click Certificate to view"), " \u2192"))), __jsx("div", {
  class: "section",
  id: "carousel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, __jsx("div", {
  class: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, __jsx("div", {
  class: "col-md-8 mr-auto ml-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, __jsx("div", {
  class: "card card-raised card-carousel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}, __jsx("div", {
  id: "carouselExampleIndicators",
  class: "carousel slide",
  "data-ride": "carousel",
  "data-interval": "3000",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, __jsx("ol", {
  class: "carousel-indicators",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, __jsx("li", {
  "data-target": "#carouselExampleIndicators",
  "data-slide-to": "0",
  class: "active",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}), __jsx("li", {
  "data-target": "#carouselExampleIndicators",
  "data-slide-to": "1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}), __jsx("li", {
  "data-target": "#carouselExampleIndicators",
  "data-slide-to": "2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
})), __jsx("div", {
  class: "carousel-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, __jsx("div", {
  class: "carousel-item active",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, __jsx("img", {
  class: "d-block w-100",
  src: "https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504068819722-UF64E9T6OAASJXORBIAT/ke17ZwdGBToddI8pDm48kNDA1KKPnejvrc8aNB1h53BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI_O0QXaCfy1WSgXfW7kCtZfhqU1lZMakzDgTpPIGZH6sKMshLAGzx4R3EDFOm1kBS/MockupCertificate4_esta_green.jpg?format=750w",
  alt: "First slide",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}), __jsx("div", {
  class: "carousel-caption d-none d-md-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}, "location_on"), " Certificate one"))), __jsx("div", {
  class: "carousel-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}, __jsx("img", {
  class: "d-block w-100",
  src: "https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504068822467-JVMITJEVRH2PZSFB4L3W/ke17ZwdGBToddI8pDm48kNDA1KKPnejvrc8aNB1h53BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI_O0QXaCfy1WSgXfW7kCtZfhqU1lZMakzDgTpPIGZH6sKMshLAGzx4R3EDFOm1kBS/MockupCertificate1_esta_green.jpg?format=750w",
  alt: "Second slide",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156
  },
  __self: undefined
}), __jsx("div", {
  class: "carousel-caption d-none d-md-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, "location_on"), " Certificate two"))), __jsx("div", {
  class: "carousel-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, __jsx("img", {
  class: "d-block w-100",
  src: "https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504068826022-YO1NZK98VDWZCSXRFXVZ/ke17ZwdGBToddI8pDm48kNDA1KKPnejvrc8aNB1h53BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI_O0QXaCfy1WSgXfW7kCtZfhqU1lZMakzDgTpPIGZH6sKMshLAGzx4R3EDFOm1kBS/MockupCertificate3_esta_green.jpg?format=750w",
  alt: "Third slide",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164
  },
  __self: undefined
}), __jsx("div", {
  class: "carousel-caption d-none d-md-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}, "location_on"), " Certificate three")))), __jsx("a", {
  class: "carousel-control-prev",
  href: "#carouselExampleIndicators",
  role: "button",
  "data-slide": "prev",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  },
  __self: undefined
}, "keyboard_arrow_left"), __jsx("span", {
  class: "sr-only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174
  },
  __self: undefined
}, "Previous")), __jsx("a", {
  class: "carousel-control-next",
  href: "#carouselExampleIndicators",
  role: "button",
  "data-slide": "next",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}, __jsx("i", {
  class: "material-icons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}, "keyboard_arrow_right"), __jsx("span", {
  class: "sr-only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, "Next"))))))))))), __jsx("div", {
  class: "section section-basic",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194
  },
  __self: undefined
}, __jsx("div", {
  class: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 195
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196
  },
  __self: undefined
}, "Customizable Products To Your Own Needs")), __jsx("div", {
  id: "buttons",
  class: "cd-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}, __jsx("div", {
  class: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200
  },
  __self: undefined
}, __jsx("div", {
  class: "col-md-8 mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 201
  },
  __self: undefined
}, "Waste no more effort with products that can be specifically customized to your unique needs in food & beverages, cosmetics and nutraceutical industry.")), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 205
  },
  __self: undefined
}), __jsx("button", {
  class: "btn btn-warning btn-lg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206
  },
  __self: undefined
}, "Our products and services")))), __jsx("div", {
  class: "navigation-example",
  style: {
    backgroundImage: `url('./assets/img/background/bg4.jpg')`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
}), __jsx("div", {
  class: "section section-basic",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 215
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216
  },
  __self: undefined
}, __jsx("div", {
  class: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218
  },
  __self: undefined
}, "All Natural Products, No Food Additive & Non-GMO")), __jsx("div", {
  id: "buttons",
  class: "cd-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221
  },
  __self: undefined
}, __jsx("div", {
  class: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  },
  __self: undefined
}, __jsx("div", {
  class: "col-md-8 mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223
  },
  __self: undefined
}, "ESTA continues to strive because of our natural and non-genetically modified processes. We does not use any food additive and our nests are very healthy for long-time consumption."))))), __jsx("div", {
  class: "navigation-example",
  style: {
    backgroundImage: `url('./assets/img/background/bg3.jpg')`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 232
  },
  __self: undefined
}), __jsx("div", {
  class: "section section-basic",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236
  },
  __self: undefined
}, __jsx("div", {
  class: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238
  },
  __self: undefined
}, "Clean & Hygienic Manufacturing Process")), __jsx("div", {
  id: "buttons",
  class: "cd-section",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 241
  },
  __self: undefined
}, __jsx("div", {
  class: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242
  },
  __self: undefined
}, __jsx("div", {
  class: "col-md-8 mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 243
  },
  __self: undefined
}, "We are committed to implement natural and hygienic manufacturing stages."))), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248
  },
  __self: undefined
}), __jsx("button", {
  class: "btn btn-warning btn-lg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249
  },
  __self: undefined
}, "See how we make it"))), "// end 6th --> // 7th: 3rd image-->", __jsx("div", {
  class: "navigation-example",
  style: {
    backgroundImage: `url('./assets/img/background/bg7.jpg')`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 254
  },
  __self: undefined
}), "// end 7th --> // 8th -->", __jsx("div", {
  class: "section section-basic",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 257
  },
  __self: undefined
}, __jsx("div", {
  class: "section section-signup",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259
  },
  __self: undefined
}, __jsx("div", {
  class: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260
  },
  __self: undefined
}, __jsx("div", {
  class: "col-md-3 ml-auto mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 261
  },
  __self: undefined
}, __jsx("div", {
  class: "card-login",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 262
  },
  __self: undefined
}, __jsx("div", {
  class: "card-header card-header-primary text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 263
  },
  __self: undefined
}, __jsx("h4", {
  class: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 264
  },
  __self: undefined
}, "No Need to Worry about Legality")), __jsx("img", {
  class: "",
  src: "https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504179336208-ZO7PFXQPP2YZHIAIWO0T/ke17ZwdGBToddI8pDm48kByeOjzod2mFALX25R4PqmpZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dj5hCgVXYNQVce-zwunVDzSz3P4GRf0U4dHI0F9H5KJRVXvH_6vLzxRGAovOgUr_w/ikon_3warna-07-01.png?format=300w",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266
  },
  __self: undefined
}), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 267
  },
  __self: undefined
}), __jsx("div", {
  class: "card-body container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 268
  },
  __self: undefined
}, "// todo: change content-->", __jsx("div", {
  class: "description text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270
  },
  __self: undefined
}, "Our products are 100% legal and certified by Indonesian Agriculture Quarantine Agency and Certification and Accreditation Administration of the People's Republic of China (CNCA).")), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274
  },
  __self: undefined
}))), __jsx("div", {
  class: "col-md-3 ml-auto mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 278
  },
  __self: undefined
}, __jsx("div", {
  class: "card-login",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 279
  },
  __self: undefined
}, __jsx("div", {
  class: "card-header card-header-primary text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 280
  },
  __self: undefined
}, __jsx("h4", {
  class: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 281
  },
  __self: undefined
}, "We Only Deliver You High-Quality Products")), __jsx("img", {
  class: "",
  src: "https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504178037406-BTK4GKUOEJX6NQRZ5ZQ3/ke17ZwdGBToddI8pDm48kByeOjzod2mFALX25R4PqmpZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dj5hCgVXYNQVce-zwunVDzSz3P4GRf0U4dHI0F9H5KJRVXvH_6vLzxRGAovOgUr_w/ikon_3warna-05-01.png?format=300w",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284
  },
  __self: undefined
}), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 285
  },
  __self: undefined
}), __jsx("p", {
  class: "description text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 286
  },
  __self: undefined
}, "Be rest assured about the quality of product you order, it has passed our quality control procedure."), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 288
  },
  __self: undefined
}))), __jsx("div", {
  class: "col-md-3 ml-auto mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 292
  },
  __self: undefined
}, __jsx("div", {
  class: "card-login",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 293
  },
  __self: undefined
}, __jsx("div", {
  class: "card-header card-header-primary text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 294
  },
  __self: undefined
}, __jsx("h4", {
  class: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 295
  },
  __self: undefined
}, "Products Can Be Tailored to Your Unique Needs")), __jsx("img", {
  class: "",
  src: "https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504178778111-VDOPLPSCXVBZ8RJOPWZC/ke17ZwdGBToddI8pDm48kByeOjzod2mFALX25R4PqmpZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dj5hCgVXYNQVce-zwunVDzSz3P4GRf0U4dHI0F9H5KJRVXvH_6vLzxRGAovOgUr_w/ikon_3warna-06-01.png?format=300w",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 297
  },
  __self: undefined
}), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 298
  },
  __self: undefined
}), __jsx("p", {
  class: "description text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 299
  },
  __self: undefined
}, "Waste no more effort as our products can be specifically customized to your unique needs."), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301
  },
  __self: undefined
}))), __jsx("div", {
  class: "col-md-3 ml-auto mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 305
  },
  __self: undefined
}, __jsx("div", {
  class: "card-login",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 306
  },
  __self: undefined
}, __jsx("div", {
  class: "card-header card-header-primary text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 307
  },
  __self: undefined
}, __jsx("h4", {
  class: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 308
  },
  __self: undefined
}, "Focus on Satisfying Customer Needs Better ")), __jsx("img", {
  class: "",
  src: "https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504179310684-P8UDPOJ1LC0TER3SA8WB/ke17ZwdGBToddI8pDm48kByeOjzod2mFALX25R4PqmpZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dj5hCgVXYNQVce-zwunVDzSz3P4GRf0U4dHI0F9H5KJRVXvH_6vLzxRGAovOgUr_w/ikon_3warna-08-01.png?format=300w",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 310
  },
  __self: undefined
}), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 311
  },
  __self: undefined
}), __jsx("p", {
  class: "description text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 312
  },
  __self: undefined
}, "We focus our capabilities towards satisfying our valuable customer by integrating downstream and upstream in the value chain."), __jsx("div", {
  class: "space-50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 314
  },
  __self: undefined
})))))))), __jsx("footer", {
  class: "footer",
  "data-background-color": "black",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 328
  },
  __self: undefined
}, __jsx("div", {
  class: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 329
  },
  __self: undefined
}, __jsx("nav", {
  class: "float-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 330
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 331
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332
  },
  __self: undefined
}, __jsx("a", {
  href: "/about-vinbird.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 333
  },
  __self: undefined
}, "About Us")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 337
  },
  __self: undefined
}, __jsx("a", {
  href: "http://blog.creative-tim.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 338
  },
  __self: undefined
}, "Blog")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 342
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.creative-tim.com/license",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 343
  },
  __self: undefined
}, "Licenses")))), __jsx("div", {
  class: "copyright float-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 349
  },
  __self: undefined
}, "\xA9", __jsx("script", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 351
  },
  __self: undefined
}, "document.write(new Date().getFullYear())"), " VinBirdnest"))), __jsx("script", {
  src: "./assets/js/core/jquery.min.js",
  type: "text/javascript",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 358
  },
  __self: undefined
}), __jsx("script", {
  src: "./assets/js/core/popper.min.js",
  type: "text/javascript",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 359
  },
  __self: undefined
}), __jsx("script", {
  src: "./assets/js/core/bootstrap-material-design.min.js",
  type: "text/javascript",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 360
  },
  __self: undefined
}), __jsx("script", {
  src: "./assets/js/plugins/moment.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 361
  },
  __self: undefined
}), __jsx("script", {
  src: "./assets/js/plugins/bootstrap-datetimepicker.js",
  type: "text/javascript",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363
  },
  __self: undefined
}), __jsx("script", {
  src: "./assets/js/plugins/nouislider.min.js",
  type: "text/javascript",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 365
  },
  __self: undefined
}), __jsx("script", {
  src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 367
  },
  __self: undefined
}), __jsx("script", {
  src: "./assets/js/material-kit.js?v=2.0.6",
  type: "text/javascript",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 369
  },
  __self: undefined
}), __jsx("script", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370
  },
  __self: undefined
}, "$(document).ready(function() ", "); function scrollToDownload() ", "}")));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/JPZJPZ2416/repositories/vinbird/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map