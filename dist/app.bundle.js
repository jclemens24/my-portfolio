"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["app"],{

/***/ 1202:
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ 5108);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ 7452);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ 2776);
/* harmony import */ var letterizejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! letterizejs */ 636);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.css */ 3156);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var sky = document.getElementById('sky');
var shootingStar = document.querySelector('.shootingStar');
var headerName = document.querySelector('.about__me--name');
var sliderExists = document.querySelector('.slider');
var icons = document.querySelectorAll('.skill-language-row-icons');
var starNum = 60;
var shootingStarNum = 30;
var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
var starryNight = function starryNight() {
  (0,animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
    targets: ['#sky .star'],
    opacity: [{
      duration: 700,
      value: '0'
    }, {
      duration: 700,
      value: '1'
    }],
    easing: 'linear',
    loop: true,
    delay: function delay(el, i) {
      return 50 * i;
    }
  });
};
var shootingStars = function shootingStars() {
  (0,animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
    targets: ['.shootingStar .wish'],
    easing: 'linear',
    loop: true,
    delay: function delay(el, i) {
      return 1000 * i;
    },
    opacity: [{
      duration: 700,
      value: '1'
    }],
    width: [{
      value: '150px'
    }, {
      value: '0px'
    }],
    translateX: 350
  });
};
var getRandomRadius = function getRandomRadius() {
  return Math.random() * 0.7 + 0.6;
};
var getRandomX = function getRandomX() {
  return Math.floor(Math.random() * Math.floor(windowWidth)).toString();
};
var getRandomY = function getRandomY() {
  return Math.floor(Math.random() * Math.floor(windowHeight)).toString();
};
_toConsumableArray(Array(starNum)).forEach(function () {
  sky.insertAdjacentHTML('afterbegin', "\n  <circle cx=".concat(getRandomX(), " cy=").concat(getRandomY(), " r=").concat(getRandomRadius(), " stroke='none' strokeWidth='0' fill='white' class='star'></circle>\n  "));
});
_toConsumableArray(Array(shootingStarNum)).forEach(function () {
  shootingStar.insertAdjacentHTML('afterbegin', "\n  <div class='wish' style='left: ".concat(getRandomY(), "px; top: ").concat(getRandomX(), "px;'></div>\n  "));
});
if (headerName) {
  var myName = new letterizejs__WEBPACK_IMPORTED_MODULE_3__["default"]({
    targets: document.querySelector('.about__me--name'),
    wrapper: 'div'
  });
  var animation = animejs__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    targets: myName.listAll,
    delay: animejs__WEBPACK_IMPORTED_MODULE_2__["default"].stagger(50),
    loop: true
  });
  animation.add({
    translateY: -40
  }).add({
    translateY: 0
  });
}
(0,animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
  targets: icons,
  scale: [{
    value: 0.1,
    easing: 'easeOutSine',
    duration: 500
  }, {
    value: 1,
    easing: 'easeInOutQuad',
    duraction: 1200
  }],
  delay: animejs__WEBPACK_IMPORTED_MODULE_2__["default"].stagger(200, {
    grid: [4, 2],
    from: 'center'
  })
});
if (sliderExists) {
  var slides = document.querySelectorAll('.slide');
  var btnLeft = document.querySelector('.slider__btn--left');
  var btnRight = document.querySelector('.slider__btn--right');
  var dotsContainer = document.querySelector('.dots');
  var currentSlide = 0;
  var maxSlide = slides.length;
  var createDots = function createDots() {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML('beforeend', "<button role=\"button\" aria-label=\"Go To Slide ".concat(i + 1, "\" class=\"dots__dot\" data-slide=\"").concat(i, "\"></button>"));
    });
  };
  var goToSlide = function goToSlide(slide) {
    slides.forEach(function (s, i) {
      return s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
    });
  };
  var nextSlide = function nextSlide() {
    currentSlide === maxSlide - 1 ? currentSlide = 0 : currentSlide++;
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };
  var prevSlide = function prevSlide() {
    currentSlide === 0 ? currentSlide = maxSlide - 1 : currentSlide--;
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };
  var activeDot = function activeDot(slide) {
    document.querySelectorAll('.dots__dot').forEach(function (dot) {
      return dot.classList.remove('dots__dot--active');
    });
    document.querySelector(".dots__dot[data-slide=\"".concat(slide, "\"]")).classList.add('dots__dot--active');
  };
  var init = function init() {
    createDots();
    activeDot(0);
    goToSlide(0);
  };
  init();
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      var slide = e.target.dataset.slide;
      goToSlide(slide);
      activeDot(slide);
    }
  });
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  document.querySelector('nav').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__item')) {
      var id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}
window.addEventListener('load', function () {
  starryNight();
  shootingStars();
});
document.addEventListener('DOMContentLoaded', function () {
  var dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('click', function () {
    this.classList.toggle('active');
  });
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});

/***/ }),

/***/ 3156:
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(1202)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRTtNQUM1QyxJQUFNSSxFQUFFLEdBQUdOLENBQUMsQ0FBQ0MsTUFBTSxDQUFDTSxZQUFZLENBQUMsTUFBTSxDQUFDO01BQ3hDckYsUUFBUSxDQUFDRyxhQUFhLENBQUNpRixFQUFFLENBQUMsQ0FBQ0UsY0FBYyxDQUFDO1FBQ3hDQyxRQUFRLEVBQUU7TUFDWixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FBQztBQUNKO0FBRUF4RSxNQUFNLENBQUM4RCxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWTtFQUMxQ3pELFdBQVcsQ0FBQyxDQUFDO0VBQ2JVLGFBQWEsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGOUIsUUFBUSxDQUFDNkUsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN4RCxJQUFNVyxRQUFRLEdBQUd4RixRQUFRLENBQUNHLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFFcERxRixRQUFRLENBQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQzdDLElBQUksQ0FBQ0gsU0FBUyxDQUFDZSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ2pDLENBQUMsQ0FBQztFQUVGekYsUUFBUSxDQUFDNkUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLENBQUMsRUFBRTtJQUM5QyxJQUFJLENBQUNVLFFBQVEsQ0FBQ1IsUUFBUSxDQUFDRixDQUFDLENBQUNDLE1BQU0sQ0FBQyxFQUFFO01BQ2hDUyxRQUFRLENBQUNkLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNyQztFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNsT0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3N0eWxlcy5jc3M/MDdkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lJztcclxuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnO1xyXG5pbXBvcnQgTGV0dGVyaXplIGZyb20gJ2xldHRlcml6ZWpzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMuY3NzJztcclxuXHJcbmNvbnN0IHNreSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza3knKTtcclxuY29uc3Qgc2hvb3RpbmdTdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob290aW5nU3RhcicpO1xyXG5jb25zdCBoZWFkZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19tZS0tbmFtZScpO1xyXG5jb25zdCBzbGlkZXJFeGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJyk7XHJcbmNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNraWxsLWxhbmd1YWdlLXJvdy1pY29ucycpO1xyXG5cclxuY29uc3Qgc3Rhck51bSA9IDYwO1xyXG5jb25zdCBzaG9vdGluZ1N0YXJOdW0gPSAzMDtcclxuXHJcbmNvbnN0IHdpbmRvd1dpZHRoID0gTWF0aC5tYXgoXHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG4gIHdpbmRvdy5pbm5lcldpZHRoXHJcbik7XHJcbmNvbnN0IHdpbmRvd0hlaWdodCA9IE1hdGgubWF4KFxyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXHJcbiAgd2luZG93LmlubmVySGVpZ2h0XHJcbik7XHJcblxyXG5jb25zdCBzdGFycnlOaWdodCA9ICgpID0+IHtcclxuICBhbmltZSh7XHJcbiAgICB0YXJnZXRzOiBbJyNza3kgLnN0YXInXSxcclxuICAgIG9wYWNpdHk6IFtcclxuICAgICAge1xyXG4gICAgICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgICAgICAgdmFsdWU6ICcwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgICAgICAgdmFsdWU6ICcxJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBlYXNpbmc6ICdsaW5lYXInLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGRlbGF5OiAoZWwsIGkpID0+IDUwICogaSxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNob290aW5nU3RhcnMgPSAoKSA9PiB7XHJcbiAgYW5pbWUoe1xyXG4gICAgdGFyZ2V0czogWycuc2hvb3RpbmdTdGFyIC53aXNoJ10sXHJcbiAgICBlYXNpbmc6ICdsaW5lYXInLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGRlbGF5OiAoZWwsIGkpID0+IDEwMDAgKiBpLFxyXG4gICAgb3BhY2l0eTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZHVyYXRpb246IDcwMCxcclxuICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHdpZHRoOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogJzE1MHB4JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiAnMHB4JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB0cmFuc2xhdGVYOiAzNTAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSYW5kb21SYWRpdXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAwLjcgKyAwLjY7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSYW5kb21YID0gKCkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHdpbmRvd1dpZHRoKSkudG9TdHJpbmcoKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFJhbmRvbVkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3Iod2luZG93SGVpZ2h0KSkudG9TdHJpbmcoKTtcclxufTtcclxuXHJcblsuLi5BcnJheShzdGFyTnVtKV0uZm9yRWFjaCgoKSA9PiB7XHJcbiAgc2t5Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICdhZnRlcmJlZ2luJyxcclxuICAgIGBcclxuICA8Y2lyY2xlIGN4PSR7Z2V0UmFuZG9tWCgpfSBjeT0ke2dldFJhbmRvbVkoKX0gcj0ke2dldFJhbmRvbVJhZGl1cygpfSBzdHJva2U9J25vbmUnIHN0cm9rZVdpZHRoPScwJyBmaWxsPSd3aGl0ZScgY2xhc3M9J3N0YXInPjwvY2lyY2xlPlxyXG4gIGBcclxuICApO1xyXG59KTtcclxuXHJcblsuLi5BcnJheShzaG9vdGluZ1N0YXJOdW0pXS5mb3JFYWNoKCgpID0+IHtcclxuICBzaG9vdGluZ1N0YXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgJ2FmdGVyYmVnaW4nLFxyXG4gICAgYFxyXG4gIDxkaXYgY2xhc3M9J3dpc2gnIHN0eWxlPSdsZWZ0OiAke2dldFJhbmRvbVkoKX1weDsgdG9wOiAke2dldFJhbmRvbVgoKX1weDsnPjwvZGl2PlxyXG4gIGBcclxuICApO1xyXG59KTtcclxuXHJcbmlmIChoZWFkZXJOYW1lKSB7XHJcbiAgY29uc3QgbXlOYW1lID0gbmV3IExldHRlcml6ZSh7XHJcbiAgICB0YXJnZXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX21lLS1uYW1lJyksXHJcbiAgICB3cmFwcGVyOiAnZGl2JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYW5pbWF0aW9uID0gYW5pbWUudGltZWxpbmUoe1xyXG4gICAgdGFyZ2V0czogbXlOYW1lLmxpc3RBbGwsXHJcbiAgICBkZWxheTogYW5pbWUuc3RhZ2dlcig1MCksXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBhbmltYXRpb25cclxuICAgIC5hZGQoe1xyXG4gICAgICB0cmFuc2xhdGVZOiAtNDAsXHJcbiAgICB9KVxyXG4gICAgLmFkZCh7XHJcbiAgICAgIHRyYW5zbGF0ZVk6IDAsXHJcbiAgICB9KTtcclxufVxyXG5cclxuYW5pbWUoe1xyXG4gIHRhcmdldHM6IGljb25zLFxyXG4gIHNjYWxlOiBbXHJcbiAgICB7IHZhbHVlOiAwLjEsIGVhc2luZzogJ2Vhc2VPdXRTaW5lJywgZHVyYXRpb246IDUwMCB9LFxyXG4gICAgeyB2YWx1ZTogMSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCcsIGR1cmFjdGlvbjogMTIwMCB9LFxyXG4gIF0sXHJcbiAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoMjAwLCB7IGdyaWQ6IFs0LCAyXSwgZnJvbTogJ2NlbnRlcicgfSksXHJcbn0pO1xyXG5cclxuaWYgKHNsaWRlckV4aXN0cykge1xyXG4gIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xyXG4gIGNvbnN0IGJ0bkxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19idG4tLWxlZnQnKTtcclxuICBjb25zdCBidG5SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2J0bi0tcmlnaHQnKTtcclxuICBjb25zdCBkb3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvdHMnKTtcclxuXHJcbiAgbGV0IGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgY29uc3QgbWF4U2xpZGUgPSBzbGlkZXMubGVuZ3RoO1xyXG5cclxuICBjb25zdCBjcmVhdGVEb3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKF8sIGkpIHtcclxuICAgICAgZG90c0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgJ2JlZm9yZWVuZCcsXHJcbiAgICAgICAgYDxidXR0b24gcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJHbyBUbyBTbGlkZSAke1xyXG4gICAgICAgICAgaSArIDFcclxuICAgICAgICB9XCIgY2xhc3M9XCJkb3RzX19kb3RcIiBkYXRhLXNsaWRlPVwiJHtpfVwiPjwvYnV0dG9uPmBcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvVG9TbGlkZSA9IGZ1bmN0aW9uIChzbGlkZSkge1xyXG4gICAgc2xpZGVzLmZvckVhY2goXHJcbiAgICAgIChzLCBpKSA9PiAocy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezEwMCAqIChpIC0gc2xpZGUpfSUpYClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3VycmVudFNsaWRlID09PSBtYXhTbGlkZSAtIDEgPyAoY3VycmVudFNsaWRlID0gMCkgOiBjdXJyZW50U2xpZGUrKztcclxuICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgYWN0aXZlRG90KGN1cnJlbnRTbGlkZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldlNsaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3VycmVudFNsaWRlID09PSAwID8gKGN1cnJlbnRTbGlkZSA9IG1heFNsaWRlIC0gMSkgOiBjdXJyZW50U2xpZGUtLTtcclxuICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgYWN0aXZlRG90KGN1cnJlbnRTbGlkZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZlRG90ID0gZnVuY3Rpb24gKHNsaWRlKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLmRvdHNfX2RvdCcpXHJcbiAgICAgIC5mb3JFYWNoKChkb3QpID0+IGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdkb3RzX19kb3QtLWFjdGl2ZScpKTtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihgLmRvdHNfX2RvdFtkYXRhLXNsaWRlPVwiJHtzbGlkZX1cIl1gKVxyXG4gICAgICAuY2xhc3NMaXN0LmFkZCgnZG90c19fZG90LS1hY3RpdmUnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3JlYXRlRG90cygpO1xyXG4gICAgYWN0aXZlRG90KDApO1xyXG4gICAgZ29Ub1NsaWRlKDApO1xyXG4gIH07XHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgYnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpO1xyXG4gIGJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xyXG4gIGRvdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZG90c19fZG90JykpIHtcclxuICAgICAgY29uc3QgeyBzbGlkZSB9ID0gZS50YXJnZXQuZGF0YXNldDtcclxuICAgICAgZ29Ub1NsaWRlKHNsaWRlKTtcclxuICAgICAgYWN0aXZlRG90KHNsaWRlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLmtleSA9PT0gJ0Fycm93TGVmdCcgJiYgcHJldlNsaWRlKCk7XHJcbiAgICBlLmtleSA9PT0gJ0Fycm93UmlnaHQnICYmIG5leHRTbGlkZSgpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2l0ZW0nKSkge1xyXG4gICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgc3RhcnJ5TmlnaHQoKTtcclxuICBzaG9vdGluZ1N0YXJzKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xyXG5cclxuICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICghZHJvcGRvd24uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImFuaW1lIiwiTGV0dGVyaXplIiwic2t5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNob290aW5nU3RhciIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXJOYW1lIiwic2xpZGVyRXhpc3RzIiwiaWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3Rhck51bSIsInNob290aW5nU3Rhck51bSIsIndpbmRvd1dpZHRoIiwiTWF0aCIsIm1heCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0Iiwic3RhcnJ5TmlnaHQiLCJ0YXJnZXRzIiwib3BhY2l0eSIsImR1cmF0aW9uIiwidmFsdWUiLCJlYXNpbmciLCJsb29wIiwiZGVsYXkiLCJlbCIsImkiLCJzaG9vdGluZ1N0YXJzIiwid2lkdGgiLCJ0cmFuc2xhdGVYIiwiZ2V0UmFuZG9tUmFkaXVzIiwicmFuZG9tIiwiZ2V0UmFuZG9tWCIsImZsb29yIiwidG9TdHJpbmciLCJnZXRSYW5kb21ZIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJmb3JFYWNoIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY29uY2F0IiwibXlOYW1lIiwid3JhcHBlciIsImFuaW1hdGlvbiIsInRpbWVsaW5lIiwibGlzdEFsbCIsInN0YWdnZXIiLCJhZGQiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJkdXJhY3Rpb24iLCJncmlkIiwiZnJvbSIsInNsaWRlcyIsImJ0bkxlZnQiLCJidG5SaWdodCIsImRvdHNDb250YWluZXIiLCJjdXJyZW50U2xpZGUiLCJtYXhTbGlkZSIsImxlbmd0aCIsImNyZWF0ZURvdHMiLCJfIiwiZ29Ub1NsaWRlIiwic2xpZGUiLCJzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJuZXh0U2xpZGUiLCJhY3RpdmVEb3QiLCJwcmV2U2xpZGUiLCJkb3QiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsImRhdGFzZXQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImRyb3Bkb3duIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==