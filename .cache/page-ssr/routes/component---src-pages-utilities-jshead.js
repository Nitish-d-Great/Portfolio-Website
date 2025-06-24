exports.id = "component---src-pages-utilities-jshead";
exports.ids = ["component---src-pages-utilities-jshead"];
exports.modules = {

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountUp: () => (/* binding */ i)
/* harmony export */ });
var t=function(){return t=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var a in i=arguments[n])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t},t.apply(this,arguments)},i=function(){function i(i,n,s){var a=this;this.endVal=n,this.options=s,this.version="2.8.1",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var i=t-a.startTime;a.remaining=a.duration-i,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(i,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(i,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(i/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),i<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(t){var i,n,s,e,o=t<0?"-":"";i=Math.abs(t).toFixed(a.options.decimalPlaces);var r=(i+="").split(".");if(n=r[0],s=r.length>1?a.options.decimal+r[1]:"",a.options.useGrouping){e="";for(var l=3,h=0,u=0,p=n.length;u<p;++u)a.options.useIndianSeparators&&4===u&&(l=2,h=1),0!==u&&h%l==0&&(e=a.options.separator+e),h++,e=n[p-u-1]+e;n=e}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),o+a.options.prefix+n+s+a.options.suffix},this.easeOutExpo=function(t,i,n,s){return n*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=t(t({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof i?document.getElementById(i):i,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,i):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return i.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),s=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<i&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||s>i)&&!t.paused&&t.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(t){var i;if(this.el){var n=this.formattingFn(t);if(null===(i=this.options.plugin)||void 0===i?void 0:i.render)this.options.plugin.render(this.el,n);else if("INPUT"===this.el.tagName)this.el.value=n;else"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},i.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},i.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}();


/***/ }),

/***/ "./src/files/Nitish-Gupta-Resume.pdf":
/*!*******************************************!*\
  !*** ./src/files/Nitish-Gupta-Resume.pdf ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Nitish-Gupta-Resume-cee8d4234848cf4ad0b1ce04c5a9d577.pdf");

/***/ }),

/***/ "./src/components/Container/index.js":
/*!*******************************************!*\
  !*** ./src/components/Container/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/Container/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


// Styles

const Container = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/components/Cursor/index.js":
/*!****************************************!*\
  !*** ./src/components/Cursor/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/Cursor/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



// Styles

const Cursor = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const initCursor = () => {
      var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: window.innerWidth / 2,
        endY: window.innerHeight / 2,
        cursorVisible: true,
        cursorEnlarged: false,
        $outline: document.querySelector(".ppk-dot-outline"),
        init: function () {
          this.outlineSize = this.$outline.offsetWidth;
          this.setupEventListeners();
          this.animateDotOutline();
        },
        setupEventListeners: function () {
          var self = this;
          document.querySelectorAll("a, button").forEach(function (el) {
            el.addEventListener("mouseover", function () {
              self.cursorEnlarged = true;
              self.toggleCursorSize();
            });
            el.addEventListener("mouseout", function () {
              self.cursorEnlarged = false;
              self.toggleCursorSize();
            });
          });
          document.addEventListener("mousedown", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          document.addEventListener("mouseup", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
          document.addEventListener("mousemove", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.endX = e.pageX;
            self.endY = e.pageY;
          });
          document.addEventListener("mouseenter", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 1;
          });
          document.addEventListener("mouseleave", function (e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$outline.style.opacity = 0;
          });
        },
        animateDotOutline: function () {
          var self = this;
          self._x += (self.endX - self._x) / self.delay;
          self._y += (self.endY - self._y) / self.delay;
          self.$outline.style.top = self._y + "px";
          self.$outline.style.left = self._x + "px";
          requestAnimationFrame(this.animateDotOutline.bind(self));
        },
        toggleCursorSize: function () {
          var self = this;
          if (self.cursorEnlarged) {
            self.$outline.style.transform = "translate(-50%, -50%) scale(2)";
            self.$outline.style.borderColor = "white";
          } else {
            self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
            self.$outline.style.borderColor = "#3a3a3a";
          }
        },
        toggleCursorVisibility: function () {
          var self = this;
          if (self.cursorVisible) {
            self.$outline.style.opacity = 1;
          } else {
            self.$outline.style.opacity = 0;
          }
        }
      };
      cursor.init();
    };
    initCursor();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("cursor")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ppk-dot-outline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ppk-dot"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _ScrambleText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ScrambleText */ "./src/components/ScrambleText/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/components/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




// Styles

const Header = ({
  onThemeChange,
  theme,
  disableScramble = false
}) => {
  var _window, _window$location;
  const pathname = typeof window !== "undefined" ? (_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.pathname : "";
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 730 : true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "header"
  }, pathname === "/" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-holder w-[100px] sm:w-[33%]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: `Based in`,
    className: "scramble-text",
    delay: 1.5
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    className: "underline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
    className: "sm:text-[18px] text-[14px]"
  }, !isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: `Kanpur, India`,
    className: "scramble-text",
    duration: 3
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: `India`,
    className: "scramble-text",
    duration: 3
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Switch to",
    className: "scramble-text",
    duration: 3.5
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: onThemeChange,
    className: "underline cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: `${theme === "dark" ? "Light" : "Dark"} mode`,
    className: "scramble-text",
    duration: 3.9
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "w-[100px] sm:w-[33%]"
  }, !isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "sm:text-[18px] text-[14px]"
  }, !disableScramble ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: `<- back to home`,
    className: "scramble-text",
    duration: 2
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, `<- back to home`)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: `<- back`,
    className: "scramble-text sm:text-[18px] text-[14px]",
    duration: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "header-list w-[100px] sm:w-[33%]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about/",
    className: pathname !== null && pathname !== void 0 && pathname.startsWith("/about") ? `-active` : ``
  }, !disableScramble ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "About",
    className: "scramble-text",
    duration: 3
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/Nitish-d-Great",
    target: "_blank"
  }, !disableScramble ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Projects",
    className: "scramble-text",
    duration: 3
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Experiments"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/utilities/",
    className: pathname !== null && pathname !== void 0 && pathname.startsWith("/utilities") ? `-active` : ``
  }, !disableScramble ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScrambleText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Know More",
    className: "scramble-text",
    duration: 3
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Know More")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Loader/index.js":
/*!****************************************!*\
  !*** ./src/components/Loader/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/components/Loader/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




// Styles


// Components

const Loader = ({
  isOpened = false,
  duration,
  linkBack,
  limit,
  numberSize = ""
}) => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const countUp = new countup_js__WEBPACK_IMPORTED_MODULE_1__.CountUp("value", limit ? limit : 100, {
      formattingFn: v => {
        setValue(v);
        return `${v}`;
      },
      duration: duration !== null && duration !== void 0 ? duration : 1
    });
    countUp.start();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("loader", {
      ["-opened"]: isOpened
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `value ${numberSize}`,
    id: "value"
  }), linkBack && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, `<-`, " go back to home"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./src/components/Note/index.js":
/*!**************************************!*\
  !*** ./src/components/Note/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Container */ "./src/components/Container/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/Note/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);


// Components


// Styles

const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "note"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "   ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/cesarolvr/cesarolvr-www",
    target: "_blank"
  }, "  "), " "));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/ScrambleText/index.js":
/*!**********************************************!*\
  !*** ./src/components/ScrambleText/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ScrambleText = ({
  text,
  className,
  delay = 0,
  duration = 1,
  placeholder = "."
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const chars = placeholder;
  const scramble = (element, originalText) => {
    let frame = 0;
    let iteration = 0;
    const totalFrames = duration * 60; // 60fps * duration in seconds
    const framesPerChar = totalFrames / originalText.length;
    const animate = () => {
      const scrambled = originalText.split("").map((letter, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      }).join("");
      element.textContent = scrambled;
      if (iteration >= originalText.length) {
        return;
      }
      if (frame >= framesPerChar) {
        iteration += 1;
        frame = 0;
      }
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!textRef.current) return;
    const element = textRef.current;
    const originalText = text;

    // Initial scramble
    const timeout = setTimeout(() => {
      scramble(element, originalText);
    }, delay * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay, duration]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    ref: textRef
  }, text);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrambleText);

/***/ }),

/***/ "./src/pages/utilities.js?export=head":
/*!********************************************!*\
  !*** ./src/pages/utilities.js?export=head ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Note */ "./src/components/Note/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Cursor */ "./src/components/Cursor/index.js");
/* harmony import */ var _files_Nitish_Gupta_Resume_pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../files/Nitish-Gupta-Resume.pdf */ "./src/files/Nitish-Gupta-Resume.pdf");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_actions_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/actions.scss */ "./src/styles/actions.scss");
/* harmony import */ var _styles_actions_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_actions_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ScrambleText */ "./src/components/ScrambleText/index.js");


// Components






// Files


// Styles



const Actions = () => {
  const [isOpened, setIsOpened] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cursor__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpened: isOpened,
    duration: 0.5
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    hideShortcut: true,
    goBackToHome: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "actions-list md:pl-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "hover:text-[var(--tw-text-gray-primary)]",
    href: _files_Nitish_Gupta_Resume_pdf__WEBPACK_IMPORTED_MODULE_6__["default"],
    download: true,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Download CV",
    className: "scramble-text",
    duration: 1,
    placeholder: ".:"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.linkedin.com/in/nitish-gupta-2676b5250/",
    target: "_blank",
    className: "hover:text-[var(--tw-text-gray-primary)]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Connect on Linkedin",
    className: "scramble-text",
    duration: 1.2,
    placeholder: ".:"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/Nitish-d-Great",
    target: "_blank",
    className: "hover:text-[var(--tw-text-gray-primary)]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Explore Github",
    className: "scramble-text",
    duration: 1.6,
    placeholder: ".:"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://meet.google.com/",
    target: "_blank",
    className: "hover:text-[var(--tw-text-gray-primary)]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Book a Meeting",
    className: "scramble-text inline-block",
    duration: 1.4,
    placeholder: ".:"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "inline-block ml-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "invite to -> nit.nitish02@gmail.com",
    className: "scramble-text",
    duration: 1.4,
    placeholder: "__"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:nitnitish02@gmail.com",
    className: "hover:text-[var(--tw-text-gray-primary)]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Send me an Email",
    className: "scramble-text",
    duration: 2.2,
    placeholder: ".:"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://x.com/nit_nitish02",
    target: "_blank",
    className: "hover:text-[var(--tw-text-gray-primary)]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Ping me on X",
    className: "scramble-text inline-block",
    duration: 2.4,
    placeholder: ".:"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "inline-block ml-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: " ",
    className: "scramble-text",
    duration: 2.4,
    placeholder: "__"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.instagram.com/nitish_d_great/",
    target: "_blank",
    className: "hover:text-[var(--tw-text-gray-primary)]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "Follow me on Instagram",
    className: "scramble-text inline-block",
    duration: 2.4,
    placeholder: ".:"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "inline-block ml-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ScrambleText__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: " ",
    className: "scramble-text",
    duration: 2.4,
    placeholder: "__"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Note__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Utilities | Nitish");

/***/ }),

/***/ "./src/components/Container/index.scss":
/*!*********************************************!*\
  !*** ./src/components/Container/index.scss ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Cursor/index.scss":
/*!******************************************!*\
  !*** ./src/components/Cursor/index.scss ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Header/index.scss":
/*!******************************************!*\
  !*** ./src/components/Header/index.scss ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Loader/index.scss":
/*!******************************************!*\
  !*** ./src/components/Loader/index.scss ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/Note/index.scss":
/*!****************************************!*\
  !*** ./src/components/Note/index.scss ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/actions.scss":
/*!*********************************!*\
  !*** ./src/styles/actions.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

};
;
//# sourceMappingURL=component---src-pages-utilities-jshead.js.map