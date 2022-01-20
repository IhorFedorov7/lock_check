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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/activ-link/activ-link.js":
/*!*****************************************!*\
  !*** ./src/js/activ-link/activ-link.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const activeLink = option => {
  const links = option.activ;
  const classEl = option.class;
  const el = document.querySelectorAll(links);
  el.forEach(link => {
    if (link.getAttribute('href').replace('#', '') === location.hash.replace('#', '')) {
      addClass(link);
    }
  });

  function addClass(e) {
    let elem = e.querySelector('h3');
    removeClass();

    if (elem) {
      elem.classList.add(classEl);
    }
  }

  function removeClass() {
    el.forEach(i => {
      let elem = i.querySelector(`h3.${classEl}`);

      if (elem) {
        elem.classList.remove(classEl);
      }
    });
  }

  el.forEach(i => {
    i.addEventListener('click', () => {
      addClass(i);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (activeLink);

/***/ }),

/***/ "./src/js/ads_banners/banner_1/ads.js":
/*!********************************************!*\
  !*** ./src/js/ads_banners/banner_1/ads.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const bannersAds_one = option => {
  const elem = option.el;
  const bannerIn = document.querySelector(elem);
  bannerIn.innerHTML += `
        <div class="info-ads__modal">
            <div class="info-ads__banner-left">
                <div class="info-ads__banner-text">
                    <h2>Buy our thing!</h2>
                    <p>We know you need it!</p>
                </div>
                <div class="info-ads__banner-block"></div>
            </div>
            <div class="info-ads__banner-right">
                <buttom class="btn">BUY NOW</buttom>
            </div>
        </div>
    `;
};

/* harmony default export */ __webpack_exports__["default"] = (bannersAds_one);

/***/ }),

/***/ "./src/js/ads_banners/banner_1/obj.js":
/*!********************************************!*\
  !*** ./src/js/ads_banners/banner_1/obj.js ***!
  \********************************************/
/*! exports provided: styleModuleObjAdsOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleModuleObjAdsOne", function() { return styleModuleObjAdsOne; });
const styleModuleObjAdsOne = {
  '.info-ads__modal': ['z-index: 100;', 'opacity: 1;', 'margin: auto;', 'padding: 0;', 'display: flex;', 'align-items: center;', 'justify-content: center;', 'max-width: 424px;', 'height: 100%;'],
  '.info-ads__banner-left': ['width: 100%;', 'background: #ED1C5B;', 'display: flex;', 'align-items: center;', 'justify-content: space-between;'],
  '.info-ads__banner-text': ['width: 100%;'],
  '.info-ads__banner-text > h2, .info-ads__banner-text > p': ['width: 80%;', 'margin: 0 auto;', 'color: #fff;'],
  '.info-ads__banner-text > h2': ['font-weight: var(--font-w-800);', 'font-size: 24px;'],
  '.info-ads__banner-block': ['content: "";', 'display: block;', 'border-bottom: 64px solid #fff;', 'border-left: 32px solid transparent;', 'right: 0;', 'top: 0;', 'bottom: 0;', 'background: #ED1C5B;'],
  '.info-ads__banner-right': ['display: flex;', 'align-items: center;', 'width: 65%;', 'height: 100%;', 'background: #fff;', 'padding: 8px;'],
  '.info-ads__banner-right buttom': ['display: flex;', 'align-items: center;', 'justify-content: center;', 'background: #0386FF;', 'height: 50%;', 'padding: 8px 24px;', 'border-radius: calc(var(--input-border-rad) / 3);'],
  '.btn': ['color: var(--color-white);', 'font-size: 24px;', 'font-weight: calc(var(--font-w) * 7);', 'filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));'],
  'max-width: 762px': {
    '.info-ads__modal': ['flex-direction: column;', 'height: 100%;', 'min-width: 232px;', 'max-width: 232px;'],
    '.info-ads__banner-left': ['flex-direction: column;', 'justify-content: center;', 'width: 100%;'],
    '.info-ads__banner-text > h2, .info-ads__banner-text > p': ['width: 80%;', 'margin: 20px auto;', 'color: #fff;'],
    '.info-ads__banner-block': ['border-right: 232px solid #fff;', 'border-top: 20px solid transparent;', 'border-bottom: 0;', 'border-left: 0;'],
    '.info-ads__banner-right': ['width: 100%;', 'padding: 0'],
    '.btn': ['margin: 8px auto;']
  }
};


/***/ }),

/***/ "./src/js/ads_banners/banner_2/ads.js":
/*!********************************************!*\
  !*** ./src/js/ads_banners/banner_2/ads.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const bannersAds_two = option => {
  const elem = option.el;
  const bannerIn = document.querySelector(elem);
  bannerIn.innerHTML += `
        <div class="modal__ads-block">
            <div class="modal__ads-dialog">
                <div class="modal__ads-content">
                    <div class="modal__ads-header">
                        <h3 class="modal__ads-title">Banner ads</h3>
                        <a href="#close" title="Close" class="close">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1847 14.9991L7.71436 9.52879L2.25761 14.9855L0.456741 13.1847L5.9135 7.72792L0.456741 2.27116L2.27115 0.456758L7.72791 5.91352L13.1847 0.456758L14.9855 2.25762L9.52877 7.71438L14.9991 13.1847L13.1847 14.9991Z" fill="#E5E5E5"/>
                            </svg>
                        </a>
                    </div>
                    <div class="modal__ads-body">    
                        <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</h2>
                    </div>
                    <div class="modal__ads-footer">
                        <buttom class="btn">BUY NOW</buttom>
                    </div>
                </div>
            </div>
        </div>
    `;
};

/* harmony default export */ __webpack_exports__["default"] = (bannersAds_two);

/***/ }),

/***/ "./src/js/ads_banners/banner_2/obj.js":
/*!********************************************!*\
  !*** ./src/js/ads_banners/banner_2/obj.js ***!
  \********************************************/
/*! exports provided: styleModuleObjAdsTwe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleModuleObjAdsTwe", function() { return styleModuleObjAdsTwe; });
const styleModuleObjAdsTwe = {
  '.modal__ads-block': ['background: var(--input-rbg);', 'z-index: 100;', 'opacity: 1;', '-webkit-transition: opacity 200ms ease-in;', '-moz-transition: opacity 200ms ease-in;', 'transition: opacity 200ms ease-in;', 'pointer-events: auto;'],
  '.modal__ads-dialog': ['width: 50%;', 'margin: auto;', 'padding: var(--px-16);'],
  '.modal__ads-content': ['display: -webkit-box;', 'display: -webkit-flex;', 'display: -ms-flexbox;', 'display: flex;', '-webkit-box-orient: vertical;', '-webkit-box-direction: normal;', '-webkit-flex-direction: column;', '-ms-flex-direction: column;', 'flex-direction: column;', 'background-color: var(--color-white);', '-webkit-background-clip: padding-box;', 'background-clip: padding-box;', 'border: 1px solid rgba(0,0,0,.2);', 'border-radius: calc(var(--input-border-rad) / 2);', 'outline: 0;', 'margin: auto;', 'box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);'],
  '.modal__ads-header': ['display: -webkit-box;', 'display: -webkit-flex;', 'display: -ms-flexbox;', 'display: flex;', '-webkit-box-align: center;', '-webkit-align-items: center;', '-ms-flex-align: center;', 'align-items: center;', '-webkit-box-pack: justify;', '-webkit-justify-content: space-between;', '-ms-flex-pack: justify;', 'justify-content: space-between;', 'padding: 16px 24px;'],
  '.modal__ads-title': ['margin-top: 0;', 'margin-bottom: 0;', 'line-height: 1.5;', 'font-size: 26px;', 'font-weight: calc(var(--font-w) * 7);', 'color: var(--color-black)!important;'],
  '.modal__ads-footer': ['display: flex;', 'align-items: center;', 'justify-content: center;', 'margin-bottom: 16px;'],
  '.modal__ads-footer buttom': ['display: flex;', 'align-items: center;', 'justify-content: center;', 'background: #0386FF;', 'height: var(--width-percent);', 'width: 80%;', 'padding: 10px;', 'border-radius: calc(var(--input-border-rad) / 2);'],
  '.btn': ['color: var(--color-white);', 'font-size: 24px;', 'font-weight: calc(var(--font-w) * 7);'],
  '.close': ['float: right;', 'font-family: sans-serif;', 'font-size: 24px;', 'font-weight: calc(var(--font-w) * 7);', 'line-height: 1;', 'color: var(--color-black);', 'text-shadow: 0 1px 0 var(--color-white);', 'opacity: .5;', 'text-decoration: none;'],
  '.close:focus, .close:hover': ['color: var(--color-black);', 'text-decoration: none;', 'cursor: pointer;', 'opacity: .75;'],
  '.modal__ads-body': ['-webkit-box-flex: 1;', '-webkit-flex: 1 1 auto;', ' -ms-flex: 1 1 auto;', 'flex: 1 1 auto;', 'padding: 10px 24px;', 'padding-top: 0;', 'overflow: auto;', 'color: var(--color-black)!important;', 'font-size: 24px;'],
  '.modal__ads-body > h2': ['font-weight: calc(var(--font-w) * 4);', 'font-size: 16px;', 'margin: 0;'],
  'min-width: 768px': {
    '.modal__ads-content': ['-webkit-box-shadow: var(--input-shadow);', 'box-shadow: var(--input-shadow);', 'height: var( --width-percent);']
  },
  'max-width: 820px': {
    '.modal__ads-dialog': ['width: 70%;', 'margin: 4% auto;', 'top: 30%;']
  },
  'max-width: 660px': {
    '.modal__ads-dialog': ['width: 80%;', 'margin: auto;', 'top: calc(var( --width-percent) - 60%);']
  }
};


/***/ }),

/***/ "./src/js/burger-menu/burger-menu.js":
/*!*******************************************!*\
  !*** ./src/js/burger-menu/burger-menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burgerMenu = option => {
  const block = option.block;
  const btn = option.btn;
  const nav = option.nav;
  const link = option.link;
  const elBlock = document.querySelector(block);
  const elBtn = document.querySelector(btn);
  const elNav = document.querySelector(nav);
  const elLink = document.querySelectorAll(link);
  elBlock.addEventListener('click', e => {
    e.preventDefault();
    toggleMenu();
  });
  elLink.forEach(i => {
    i.addEventListener('click', () => {
      toggleMenu();
    });
  });

  const toggleMenu = () => {
    if (window.getComputedStyle(elBlock).display !== 'none') {
      elBtn.classList.toggle('block-content__menu-active');
      elNav.classList.toggle('block-content__navigation-activ');

      if (elBtn.classList.contains('block-content__menu-active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);

/***/ }),

/***/ "./src/js/check-block/check-block.js":
/*!*******************************************!*\
  !*** ./src/js/check-block/check-block.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkBlockGrade = option => {
  const elCheck = option.check;
  const elDynamic = option.change;
  const elText = option.text;
  const elCheckDom = document.querySelectorAll(elCheck);
  const elDynamicColor = document.querySelector(elDynamic);
  const elDynamicText = document.querySelector(elText);
  let lengthNotAcriv = 0;
  let count = 0;
  let grade = 0;
  elCheckDom.forEach(key => {
    lengthNotAcriv++;

    if (key.classList.contains('activ')) {
      count++;
    }
  });
  grade = Math.round(100 / lengthNotAcriv * count);
  elDynamicColor.textContent = grade;

  if (grade <= 20) {
    if (elDynamicColor.classList[1]) {
      elDynamicColor.style.background = 'var(--color-dark-red)';
    } else {
      if (elDynamicText.textContent === 'Your ad blocker is insufficient') {
        return;
      } else {
        elDynamicColor.style.color = 'var(--color-dark-red)';
        elDynamicText.innerHTML = 'Your ad blocker is insufficient';
      }
    }
  }

  ;

  if (grade > 20 && grade < 90) {
    if (elDynamicColor.classList[1]) {
      elDynamicColor.style.background = 'var(--color-orango)';
    } else {
      if (elDynamicText.textContent === 'It definitely can be better') {
        return;
      } else {
        elDynamicColor.style.color = 'var(--color-orango)';
        elDynamicText.innerHTML = 'It definitely can be better';
      }
    }
  }

  ;

  if (grade >= 90) {
    if (elDynamicColor.classList[1]) {
      elDynamicColor.style.background = 'var(--color-dark-green)';
    } else {
      if (elDynamicText.textContent === 'The score is above average, good results') {
        return;
      } else {
        elDynamicColor.style.color = 'var(--color-dark-green)';
        elDynamicText.innerHTML = 'The score is above average, good results';
      }
    }
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (checkBlockGrade);

/***/ }),

/***/ "./src/js/create-banners/check/check-banner.js":
/*!*****************************************************!*\
  !*** ./src/js/create-banners/check/check-banner.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkBlock = option => {
  const el = option.el;
  const navEl = option.navEl;
  const checkEl = option.checkEl;
  const checkDetect = option.detectCheck;
  const checkVisibility = option.visCheck;
  const types = option.type;
  const checkInfo = option.check;
  let check = document.querySelector(el);

  const checks = option => {
    const booleon = option.booleon;
    const index = option.index;

    switch (booleon) {
      case 'true':
        if (document.querySelectorAll(navEl)[`${index}`].classList.contains('activ')) {
          return;
        } else {
          (() => {
            document.querySelectorAll(navEl)[`${index}`].classList.add('activ');
            document.querySelectorAll(checkEl)[`${index}`].classList.add('activ');
          })();
        }

        break;

      case 'false':
        if (!document.querySelectorAll(navEl)[`${index}`].classList.contains('activ')) {
          return;
        } else {
          (() => {
            document.querySelectorAll(navEl)[`${index}`].classList.remove('activ');
            document.querySelectorAll(checkEl)[`${index}`].classList.remove('activ');
          })();
        }

        break;
    }
  };

  const checkElements = option => {
    const tr = option.true;
    const fl = option.false;

    if (el !== null) {
      check = document.querySelector(el);
    } else {
      check = document.querySelector('[class*="ads banner"]:not([class*="content-block__examination-info"])');
    }

    ;

    if (check === null) {
      tr();
    } else {
      if (window.getComputedStyle(check).display !== 'none' || check.clientHeight !== 0) {
        return fl();
      } else {
        return tr();
      }
    }

    ;
  };

  const ifBunners = option => {
    const checkBanners = option.check;
    const if1 = option.if_1;
    const if2 = option.if_2;

    if (checkBanners) {
      if1();
    } else {
      if2();
    }
  };

  const toggleClass = (elCheck, classCheck) => {
    const el = document.querySelectorAll(elCheck);

    if (el.length === 6) {
      el.forEach((i, index) => {
        if (index !== 0 && index !== 3) {
          if (!i.parentElement.classList.contains(classCheck)) {
            i.parentElement.classList.add(classCheck);
          }
        }
      });
    } else {
      el.forEach(i => i.parentElement.classList.remove(classCheck));
    }
  };

  checkElements({
    true: () => {
      ifBunners({
        check: document.querySelector(el).classList.contains('banner'),
        if_1: () => {
          checks({
            booleon: 'true',
            index: 0
          });
        },
        if_2: () => {
          checks({
            booleon: 'true',
            index: 1
          });
        }
      });
    },
    false: () => {
      ifBunners({
        check: document.querySelector(el).classList.contains('banner'),
        if_1: () => {
          checks({
            booleon: 'false',
            index: 0
          });
        },
        if_2: () => {
          checks({
            booleon: 'false',
            index: 1
          });
        }
      });
    }
  });
  checkElements({
    true: () => {
      toggleClass('[class*="activity banner_detect"]:not(.activ)', 'hidden');

      if (checkDetect) {
        let checkDtMd = document.querySelector(checkDetect);

        if (checkDtMd) {
          checks({
            booleon: 'false',
            index: 1
          });
        } else {
          checks({
            booleon: 'true',
            index: 1
          });
        }
      }

      if (checkVisibility) {
        let count = 0;
        let checkVisEl = document.querySelectorAll(checkVisibility);

        if (checkVisEl) {
          checkVisEl.forEach(i => {
            if (window.getComputedStyle(i).filter !== 'none') {
              count++;
            }
          });

          if (count === 3) {
            checks({
              booleon: 'false',
              index: 2
            });
          } else {
            checks({
              booleon: 'true',
              index: 2
            });
          }
        }
      }
    },
    false: () => {
      return toggleClass('[class*="activity banner_detect"]:not(.activ)', 'hidden');
    }
  });

  if (types === 'true') {
    checks({
      booleon: 'true',
      index: 0
    });
  }

  ;

  if (checkInfo === 'analyst') {
    if (window.getComputedStyle(check).display === 'none') {
      checkElements({
        true: () => {
          checks({
            booleon: 'true',
            index: 1
          });
        },
        false: () => {
          checks({
            booleon: 'false',
            index: 1
          });
        }
      });
    }

    ;
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (checkBlock);

/***/ }),

/***/ "./src/js/create-banners/detect/detect-banner.js":
/*!*******************************************************!*\
  !*** ./src/js/create-banners/detect/detect-banner.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_motation_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../options/motation-el */ "./src/js/options/motation-el.js");


const detectBanner = option => {
  const elem = option.el;
  const elemCrStatic = option.elemCrStatic;
  const elModul = option.create;
  const stylesCr = option.styleCr;
  let detectEl = document.querySelectorAll(elem);
  let count = 0;
  elemCrStatic();
  stylesCr();

  const detectBlock = () => {
    document.querySelector(elModul).innerHTML += `
            <div id="openModal" class="modal__detect">
                <div class="modal__detect-dialog">
                    <div class="modal__detect-content">
                        <div class="modal__detect-header">
                            <h3 class="modal__detect-title">Detect AdLock</h3>
                            <a href="#close" title="Close" class="close">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1847 14.9991L7.71436 9.52879L2.25761 14.9855L0.456741 13.1847L5.9135 7.72792L0.456741 2.27116L2.27115 0.456758L7.72791 5.91352L13.1847 0.456758L14.9855 2.25762L9.52877 7.71438L14.9991 13.1847L13.1847 14.9991Z" fill="#E5E5E5"/>
                            </svg>
                            </a>
                        </div>
                        <div class="modal__detect-body">    
                            <h2>Please turn off your adblocker</h2>
                        </div>
                    </div>
                </div>
            </div>
        `;
    const blure = document.querySelectorAll(['.banner_detect div[class^="content"],.banner_detect p[class^="content"]']);
    blure.forEach(i => {
      i.style.setProperty("filter", "blur(.3rem)", 'important');
    });
  };

  const checkHide = () => {
    if (detectEl.length === 0 || detectEl === null) {
      detectEl = document.querySelectorAll(elem);
    } else {
      detectEl = document.querySelectorAll(elem);
      detectEl.forEach(key => {
        if (window.getComputedStyle(key).display == "none") {
          if (count === 0) {
            detectBlock();
            count++;
          }
        }
      });
    }

    return;
  };

  (() => {
    checkHide();
    Object(_options_motation_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body', () => {
      checkHide();
    });
  })();
};

/* harmony default export */ __webpack_exports__["default"] = (detectBanner);

/***/ }),

/***/ "./src/js/create-banners/detect/obj.js":
/*!*********************************************!*\
  !*** ./src/js/create-banners/detect/obj.js ***!
  \*********************************************/
/*! exports provided: styleModuleObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleModuleObj", function() { return styleModuleObj; });
const styleModuleObj = {
  '.modal__detect': ['position:  absolute;', 'top: 0;', 'right: 0;', 'bottom: 0;', 'left: 0;', 'background: var(--input-rbg);', 'z-index: 100;', 'opacity: 1;', '-webkit-transition: opacity 200ms ease-in;', '-moz-transition: opacity 200ms ease-in;', 'transition: opacity 200ms ease-in;', 'pointer-events: auto;', 'padding: 0;'],
  '.modal__detect-dialog': ['width: 50%;', 'margin: 10% auto;'],
  '.modal__detect-content': ['display: -webkit-box;', 'display: -webkit-flex;', 'display: -ms-flexbox;', 'display: flex;', '-webkit-box-orient: vertical;', '-webkit-box-direction: normal;', '-webkit-flex-direction: column;', '-ms-flex-direction: column;', 'flex-direction: column;', 'background-color: var(--color-white);', '-webkit-background-clip: padding-box;', 'background-clip: padding-box;', 'border: 1px solid rgba(0,0,0,.2);', 'border-radius: calc(var(--input-border-rad) / 2);', 'outline: 0;'],
  '.modal__detect-header': ['display: -webkit-box;', 'display: -webkit-flex;', 'display: -ms-flexbox;', 'display: flex;', '-webkit-box-align: center;', '-webkit-align-items: center;', '-ms-flex-align: center;', 'align-items: center;', '-webkit-box-pack: justify;', '-webkit-justify-content: space-between;', '-ms-flex-pack: justify;', 'justify-content: space-between;', 'padding: 0 calc(var(--width-px) - 70px);'],
  '.modal__detect-title': ['margin-top: 0;', 'margin-bottom: 0;', 'line-height: 1.5;', 'font-size: 26px;', 'font-weight: calc(var(--font-w) * 7);', 'color: var(--color-black)!important;'],
  '.modal__detect-footer': ['display: flex;', 'align-items: center;', 'justify-content: center;', 'margin-bottom: 2%;'],
  '.modal__detect-footer buttom': ['display: flex;', 'align-items: center;', 'justify-content: center;', 'background: #0386FF;', 'height: var(--width-percent);', 'width: 70%;', 'padding: 10px;', 'border-radius: calc(var(--input-border-rad) / 2);'],
  '.btn': ['color: var(--color-white);', 'font-size: 24px;', 'font-weight: calc(var(--font-w) * 7);'],
  '.close': ['float: right;', 'font-family: sans-serif;', 'font-size: 24px;', 'font-weight: calc(var(--font-w) * 7);', 'line-height: 1;', 'color: var(--color-black);', 'text-shadow: 0 1px 0 var(--color-white);', 'opacity: .5;', 'text-decoration: none;'],
  '.close:focus, .close:hover': ['color: var(--color-black);', 'text-decoration: none;', 'cursor: pointer;', 'opacity: .75;'],
  '.modal__detect-body': ['-webkit-box-flex: 1;', '-webkit-flex: 1 1 auto;', ' -ms-flex: 1 1 auto;', 'flex: 1 1 auto;', 'padding: 10px 30px;', 'padding-top: 0;', 'overflow: auto;', 'color: var(--color-black)!important;', 'font-size: 24px;'],
  '.modal__detect-body > h2': ['font-weight: calc(var(--font-w) * 4);', 'font-size: 16px;', 'margin: 0;'],
  'min-width: 768px': {
    '.modal__detect-content': ['-webkit-box-shadow: var(--input-shadow);', 'box-shadow: var(--input-shadow);', 'height: var( --width-percent);']
  },
  'max-width: 820px': {
    '.modal__detect-dialog': ['width: 70%;', 'margin: 4% auto;', 'top: 30%;']
  },
  'max-width: 660px': {
    '.modal__detect-dialog': ['width: var( --width-percent);', 'margin: auto;', 'top: calc(var( --width-percent) - 60%);']
  }
};


/***/ }),

/***/ "./src/js/create-banners/disclosure/disclosure-banner.js":
/*!***************************************************************!*\
  !*** ./src/js/create-banners/disclosure/disclosure-banner.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_motation_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../options/motation-el */ "./src/js/options/motation-el.js");


const bannerCreateDisclosure = option => {
  const elem = option.el;
  const create = option.create;
  let detectEl = document.querySelectorAll(elem);

  const checkHide = () => {
    if (detectEl.length === 0 || detectEl === null) {
      detectEl = document.querySelectorAll(elem);
      detectEl.forEach(key => {
        if (window.getComputedStyle(key).display == "none") {
          key.style.setProperty("display", "block", "important");
        }
      });
    }

    ;
    return;
  };

  create();
  checkHide();
  Object(_options_motation_el__WEBPACK_IMPORTED_MODULE_0__["default"])('body', () => {
    checkHide();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (bannerCreateDisclosure);

/***/ }),

/***/ "./src/js/create-banners/dynamic/dynamic-banner.js":
/*!*********************************************************!*\
  !*** ./src/js/create-banners/dynamic/dynamic-banner.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const bannetCreateDynamic = option => {
  let lastScroll = 0;
  let elTop;
  let elBn;
  const stylesCr = option.styleCr;
  const elemCr = option.elemCr;
  const elemCrStatic = option.elemCrStatic;

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

  const containtHide = () => elBn.classList.contains('top-banner_content');

  (() => {
    stylesCr();
    elemCrStatic();
    elemCr();
    elTop = document.querySelector('.top-banner');
    elBn = elTop.querySelector('div[class="trigger"]');
    elTop.style.opacity = '1';
    elTop.style.setProperty("display", "block", "important");
    window.addEventListener('scroll', () => {
      if (scrollPosition() > lastScroll) {
        if (!document.querySelector('.top-banner') || document.querySelectorAll('.top-banner').length <= 0 && containtHide()) {
          if (document.querySelector('.top-banner')) {
            elTop = document.querySelector('.top-banner');
            elBn = elTop.querySelector('div[class="trigger"]');
            elTop.style.opacity = '1';
          }
        } else {
          elBn.classList.add('top-banner_content');
          elTop.style.setProperty("display", "block", "important");
          document.querySelector('.top-banner').style.opacity = '1';
        }
      } else if (scrollPosition() < lastScroll && containtHide()) {
        if (document.querySelector('.top-banner')) {
          document.querySelector('.top-banner').style.opacity = '0';
        }
      }

      lastScroll = scrollPosition();
    });
  })();
};

/* harmony default export */ __webpack_exports__["default"] = (bannetCreateDynamic);

/***/ }),

/***/ "./src/js/create-banners/dynamic/obj.js":
/*!**********************************************!*\
  !*** ./src/js/create-banners/dynamic/obj.js ***!
  \**********************************************/
/*! exports provided: styleObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleObj", function() { return styleObj; });
const styleObj = {
  '.block_dynamic>.top-banner': ['position: absolute;', 'width: var(--width-percent);', 'top: calc(var(--width-percent) - 90%);', 'z-index: 100;', 'display: block;'],
  '.top-banner_content': ['width: var(--width-percent);', 'height: var(--width-percent);', 'margin: auto;'],
  '.top-banner_img': ['width: var(--width-percent);', 'height: var(--width-percent);'],
  'max-width: 820px': {
    '.top-banner': ['top: var(--width-percent) - 70%;'],
    '.top-banner_content': ['width: var(--width-percent);']
  }
};


/***/ }),

/***/ "./src/js/create-banners/google-ads/google-ads__banner.js":
/*!****************************************************************!*\
  !*** ./src/js/create-banners/google-ads/google-ads__banner.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const googleAdsBanner = option => {
  const elemCrStatic = option.elemCrStatic;
  elemCrStatic();
};

/* harmony default export */ __webpack_exports__["default"] = (googleAdsBanner);

/***/ }),

/***/ "./src/js/create-banners/yandex-ads/yandex-ads__banner.js":
/*!****************************************************************!*\
  !*** ./src/js/create-banners/yandex-ads/yandex-ads__banner.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const yandexAdsBanner = option => {
  const elemCrStatic = option.elemCrStatic;
  elemCrStatic();
};

/* harmony default export */ __webpack_exports__["default"] = (yandexAdsBanner);

/***/ }),

/***/ "./src/js/create-section/struktur/obj.js":
/*!***********************************************!*\
  !*** ./src/js/create-section/struktur/obj.js ***!
  \***********************************************/
/*! exports provided: obj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj", function() { return obj; });
const obj = {
  0: {
    name: 'Context ads',
    id: 'context_ads',
    info: `Contextual advertising is advertising that is relevant to the content of the website you visit. Traditionally, context ads are displayed by automated systems related to the content of the website based on keyword targeting.`,
    class: 'content_type',
    block: [{
      type: 'Google ads',
      act: ['Rule applied ', 'Element hides '],
      class: 'google-Ads'
    }, {
      type: 'Yandex ads',
      act: ['Rule applied ', 'Element hides '],
      class: 'yandex-Ads'
    }]
  },
  1: {
    name: 'Banner ads',
    id: 'banners_ads',
    info: `A banner is a rectangular graphic advert, stretching across the top, bottom, or sides of a webpage. Its purpose is to promote a brand and make web surfers visit the advertiser's website. Oftentimes, banners overcover the content and are extra annoying.`,
    class: 'banner_type',
    block: [{
      type: 'Static image',
      act: ['Element hides '],
      class: 'banner_static'
    }, {
      type: 'Dynamic image',
      act: ['Element hides '],
      class: 'banner_dynamic'
    }, {
      type: 'Banner toggle',
      act: ['Element hides '],
      class: 'banner_disclosure'
    }, {
      type: 'Detecting',
      act: ['Element hides ', 'Detect adblocker ', 'Content available '],
      class: 'banner_detect'
    }]
  },
  2: {
    name: 'Analytics',
    id: 'analytics',
    info: `Analytics services (Google, Yandex, Hotjar, etc.) collect user data from each website visitor and send it to servers, where they can make reports and visualize the number of users, bounce rates, session durations, page views, goal completions, etc.`,
    class: 'analyst_type',
    block: [{
      type: 'Google',
      act: ['Rule applied '],
      class: 'google-analyst'
    }, {
      type: 'Hotjar',
      act: ['Rule applied '],
      class: 'hotjar-analyst'
    }, {
      type: 'Yandex',
      act: ['Rule applied '],
      class: 'yandex-analyst'
    }]
  }
};


/***/ }),

/***/ "./src/js/create-section/struktur/section__constructor.js":
/*!****************************************************************!*\
  !*** ./src/js/create-section/struktur/section__constructor.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const addingBlock = obj => {
  const arr = Object.entries(obj);
  arr.forEach(key => {
    let name = key[1].name;
    let id = key[1].id;
    let info = key[1].info;
    let className = key[1].class;
    let obj = key[1].block;
    document.querySelector('.app').innerHTML += `
            <section class="content-block__background">
                <div class="content-block__container width">
                    <div class="accordion__block">
                        <div id="${id}" class="content-block__switch">
                            <h2>${name}</h2>
                            <div class="content-block__dynamic ${className}">
                            </div>
                        </div>
                        <div class="content-block__description">
                            <p class="indent">
                                ${info}
                            </p>
                        </div>
                    </div>
                    <div class="content-block__type ${className}">
                    </div>
                </div>
            </section>
        `;
    document.querySelector('.block-content__app').innerHTML += `
            <div class="block-content__navigation-text">
                <a href="#${id}">
                    <h2 class="block-content__navigation-name">
                        ${name}
                    </h2>
                </a>
                <div class="content-block__nav-info ${className}">
    
                </div>        
            </div>
        `;
    obj.forEach(i => {
      let tyle = i.type;
      let act = i.act;
      let classType = i.class;
      let templateRight = '';
      let templateLeft = '';

      const create = () => {
        act.forEach(acts => {
          templateRight += `
                        <div class="content-block__examination-info ${classType == 'banner_detect' ? classType : ''}">
                            <div class="checkbox">
                                <div class="adLock__check check__activity ${classType == undefined ? '' : classType}">
                                </div>
                                <div class="label-check__activity">
                                    <h3 id="${name}">${acts}</h3>
                                </div>
                            </div>
                        </div>
                    `;
          templateLeft += `
                        <div class="content-block__checkbox">
                            <div class="adLock__check check-nav__activity ${classType == undefined ? '' : classType}">
                            </div>
                        </div>
                    `;
        });
      };

      create();
      document.querySelector(`.content-block__type.${className}`).innerHTML += `
                <div class="content-block__examination ${className}">
                    <div class="content-block__examination-switch">
                        <h3 id="${classType}">${tyle}</h3>
                    </div>
                    <div class="content-block__examination-content-ads ${classType == undefined ? '' : classType}">
                    </div>
                    <div class="content-block__verstecken">
                        ${templateRight}
                    </div>
                </div>
            `;
      document.querySelector(`.content-block__nav-info.${className}`).innerHTML += `
            <div class="content-block__nav-check">
                <div class="content-block__nav-activity">
                    <a href="#${classType}">
                        <h3>${tyle}</h3>
                    </a>
                </div>
                <div class="content-block__activity-info ${className}">
                    ${templateLeft}
                </div>
            </div>
            `;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addingBlock);

/***/ }),

/***/ "./src/js/fix/remove.js":
/*!******************************!*\
  !*** ./src/js/fix/remove.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const removeEl = elem => {
  const el = document.querySelectorAll(elem);
  el.forEach(i => {
    i.style.setProperty("display", "none", 'important');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (removeEl);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_menu_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger-menu/burger-menu */ "./src/js/burger-menu/burger-menu.js");
/* harmony import */ var _activ_link_activ_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activ-link/activ-link */ "./src/js/activ-link/activ-link.js");
/* harmony import */ var _scroll_nav_scroll_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-nav/scroll-nav */ "./src/js/scroll-nav/scroll-nav.js");
/* harmony import */ var _create_section_struktur_obj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-section/struktur/obj */ "./src/js/create-section/struktur/obj.js");
/* harmony import */ var _create_banners_dynamic_obj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-banners/dynamic/obj */ "./src/js/create-banners/dynamic/obj.js");
/* harmony import */ var _create_banners_detect_obj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-banners/detect/obj */ "./src/js/create-banners/detect/obj.js");
/* harmony import */ var _ads_banners_banner_1_obj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ads_banners/banner_1/obj */ "./src/js/ads_banners/banner_1/obj.js");
/* harmony import */ var _ads_banners_banner_2_obj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ads_banners/banner_2/obj */ "./src/js/ads_banners/banner_2/obj.js");
/* harmony import */ var _ads_banners_banner_1_ads__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ads_banners/banner_1/ads */ "./src/js/ads_banners/banner_1/ads.js");
/* harmony import */ var _ads_banners_banner_2_ads__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ads_banners/banner_2/ads */ "./src/js/ads_banners/banner_2/ads.js");
/* harmony import */ var _create_section_struktur_section_constructor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-section/struktur/section__constructor */ "./src/js/create-section/struktur/section__constructor.js");
/* harmony import */ var _fix_remove__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fix/remove */ "./src/js/fix/remove.js");
/* harmony import */ var _options_constructor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./options/constructor */ "./src/js/options/constructor.js");
/* harmony import */ var _create_banners_dynamic_dynamic_banner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-banners/dynamic/dynamic-banner */ "./src/js/create-banners/dynamic/dynamic-banner.js");
/* harmony import */ var _options_filling_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./options/filling__styles */ "./src/js/options/filling__styles.js");
/* harmony import */ var _create_banners_disclosure_disclosure_banner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-banners/disclosure/disclosure-banner */ "./src/js/create-banners/disclosure/disclosure-banner.js");
/* harmony import */ var _create_banners_detect_detect_banner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-banners/detect/detect-banner */ "./src/js/create-banners/detect/detect-banner.js");
/* harmony import */ var _create_banners_google_ads_google_ads_banner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-banners/google-ads/google-ads__banner */ "./src/js/create-banners/google-ads/google-ads__banner.js");
/* harmony import */ var _create_banners_yandex_ads_yandex_ads_banner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create-banners/yandex-ads/yandex-ads__banner */ "./src/js/create-banners/yandex-ads/yandex-ads__banner.js");
/* harmony import */ var _options_motation_el__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./options/motation-el */ "./src/js/options/motation-el.js");
/* harmony import */ var _create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./create-banners/check/check-banner */ "./src/js/create-banners/check/check-banner.js");
/* harmony import */ var _scroll_top_section_scroll_top_section__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scroll-top-section/scroll-top-section */ "./src/js/scroll-top-section/scroll-top-section.js");
/* harmony import */ var _options_create_el__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./options/create-el */ "./src/js/options/create-el.js");
/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./server/server */ "./src/js/server/server.js");
/* harmony import */ var _check_block_check_block__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./check-block/check-block */ "./src/js/check-block/check-block.js");


























window.onload = function () {
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  ;
};

function start() {
  //создание блоков контента для блокировки
  Object(_create_section_struktur_section_constructor__WEBPACK_IMPORTED_MODULE_10__["default"])(_create_section_struktur_obj__WEBPACK_IMPORTED_MODULE_3__["obj"]); //удалить лишние елементы из маски созданного контента

  Object(_fix_remove__WEBPACK_IMPORTED_MODULE_11__["default"])(['.analyst_type .content-block__examination-content-ads', '.error_type .content-block__examination-content-ads']); //Создание гугл баннера

  Object(_create_banners_google_ads_google_ads_banner__WEBPACK_IMPORTED_MODULE_17__["default"])({
    elemCrStatic: () => {
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.content-block__examination-content-ads.google-Ads',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('script', {
          attr: {
            type: 'text/javascript'
          }
        })
      });
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.content-block__examination-content-ads.google-Ads',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('ins', {
          class: ['adsbygoogle'],
          attr: {
            style: 'display:block',
            data: {
              adClient: 'ca-pub-6430039911615607',
              adSlot: '4852376176',
              adFormat: 'auto'
            }
          }
        })
      });
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.content-block__examination-content-ads.google-Ads',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('script', {})
      });
    }
  }); //Создание яндекс баннера

  Object(_create_banners_yandex_ads_yandex_ads_banner__WEBPACK_IMPORTED_MODULE_18__["default"])({
    elemCrStatic: () => {
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.content-block__examination-content-ads.yandex-Ads',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
          attr: {
            id: 'yandex_rtb_R-A-491776-1'
          }
        })
      });
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.content-block__examination-content-ads.yandex-Ads',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('script', {
          attr: {
            type: 'text/javascript'
          }
        })
      });
    }
  }); //создание статического баннера 

  const ads = () => {
    Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
      block: '.content-block__examination-content-ads.banner_static',
      blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
        class: ['banner', 'ads']
      })
    });

    if (document.querySelector('.content-block__examination-content-ads.banner_static > .banner')) {
      Object(_options_filling_styles__WEBPACK_IMPORTED_MODULE_14__["default"])(_ads_banners_banner_1_obj__WEBPACK_IMPORTED_MODULE_6__["styleModuleObjAdsOne"]);
      Object(_ads_banners_banner_1_ads__WEBPACK_IMPORTED_MODULE_8__["default"])({
        el: '.content-block__examination-content-ads.banner_static > .banner'
      });
    }
  };

  ads(); //создание блока для динамического рекламного контента 

  Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
    block: '.content-block__examination-content-ads.banner_dynamic',
    blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
      class: ['block_dynamic'],
      attr: {
        style: 'height: 100%; position: relative;'
      }
    })
  }); //создание динамического контента

  Object(_create_banners_dynamic_dynamic_banner__WEBPACK_IMPORTED_MODULE_13__["default"])({
    styleCr: () => {
      //создание элемента style в head и его наполнение
      Object(_options_filling_styles__WEBPACK_IMPORTED_MODULE_14__["default"])(_create_banners_dynamic_obj__WEBPACK_IMPORTED_MODULE_4__["styleObj"]);
    },
    elemCrStatic: () => {
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.block_dynamic',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
          class: ['content']
        }),
        creates: [{
          0: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
            class: ['content_block']
          })
        }, {
          0: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('p', {
            class: ['content_txt']
          }),
          content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. `
        }]
      });
    },
    elemCr: () => {
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.block_dynamic',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
          class: ['top-banner', 'ads', 'banner']
        }),
        creates: [{
          0: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
            class: ['trigger']
          })
        }, {
          0: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('img', {
            class: ['img__banner', 'img__ads'],
            attr: {
              src: './img/partner_1.png',
              alt: 'Lern new JS Framework',
              width: '100%',
              height: '100%'
            }
          })
        }]
      });
    }
  }); //создание статического баннера 

  Object(_create_banners_disclosure_disclosure_banner__WEBPACK_IMPORTED_MODULE_15__["default"])({
    el: '.banner_disclosure .banner',
    create: () => {
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.content-block__examination-content-ads.banner_disclosure',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
          class: ['banner', 'ads'],
          attr: {
            style: 'height: 100%; position: relative;'
          }
        })
      });

      if (document.querySelector('.content-block__examination-content-ads.banner_disclosure > .banner')) {
        Object(_options_filling_styles__WEBPACK_IMPORTED_MODULE_14__["default"])(_ads_banners_banner_2_obj__WEBPACK_IMPORTED_MODULE_7__["styleModuleObjAdsTwe"]);
        Object(_ads_banners_banner_2_ads__WEBPACK_IMPORTED_MODULE_9__["default"])({
          el: '.content-block__examination-content-ads.banner_disclosure > .banner'
        });
      }
    }
  });
  Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
    block: '.content-block__examination-content-ads.banner_detect',
    blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
      class: ['banner_detect'],
      attr: {
        style: 'position: relative;'
      }
    })
  }); //Детект
  //создание баннера ловишки для детекта  

  Object(_create_banners_detect_detect_banner__WEBPACK_IMPORTED_MODULE_16__["default"])({
    el: '.banner_detect .banner',
    create: 'div[class^="banner_detect"]',
    elemCrStatic: () => {
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '.content-block__examination-content-ads.banner_detect .banner_detect',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
          class: ['banner', 'ads']
        }),
        creates: [{
          0: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('img', {
            class: ['img__banner', 'img__ads'],
            attr: {
              src: './img/partner_2.png',
              alt: 'Everyone can looks like IT guy with macbook',
              width: '100%',
              height: '100%'
            }
          })
        }]
      });
      Object(_options_constructor__WEBPACK_IMPORTED_MODULE_12__["default"])({
        block: '[class^="banner_detect"]',
        blockRoot: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
          class: ['content']
        }),
        creates: [{
          0: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('div', {
            class: ['content_block']
          })
        }, {
          0: Object(_options_create_el__WEBPACK_IMPORTED_MODULE_22__["default"])('p', {
            class: ['content_txt']
          }),
          content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. `
        }]
      });
    },
    styleCr: () => {
      //создание элемента style в head и его наполнение
      Object(_options_filling_styles__WEBPACK_IMPORTED_MODULE_14__["default"])(_create_banners_detect_obj__WEBPACK_IMPORTED_MODULE_5__["styleModuleObj"]);
    }
  }); // //добавление класса activ для сворачивания блока
  // clickHidingCcontent({
  //     el: 'input[type="checkbox"]#AdLock.accordion'
  // });

  Object(_server_server__WEBPACK_IMPORTED_MODULE_23__["default"])({
    domenNameCheck: [{
      domen: /pagead2.googlesyndication.com/,
      funCheck: () => {
        Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
          el: ['div.google-Ads .adsbygoogle'],
          navEl: '.content_type .check__activity.google-Ads',
          checkEl: '.content_type .check__activity.google-Ads',
          type: 'true'
        });
      }
    }, {
      domen: /.yandex.ru/,
      funCheck: () => {
        Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
          el: ['div.yandex-Ads [id^="yandex"]'],
          navEl: '.content_type .check-nav__activity.yandex-Ads',
          checkEl: '.content_type .check__activity.yandex-Ads',
          type: 'true'
        });
      }
    }, {
      domen: /www.google-analytics.com/,
      funCheck: () => {
        Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
          el: ['div.google-analyst'],
          navEl: ['.analyst_type .check-nav__activity.google-analyst'],
          checkEl: ['.analyst_type .check__activity.google-analyst'],
          type: 'true'
        });
      }
    }, {
      domen: /static.hotjar.com/,
      funCheck: () => {
        Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
          el: ['div.hotjar-analyst'],
          navEl: ['.analyst_type .check-nav__activity.hotjar-analyst'],
          checkEl: ['.analyst_type .check__activity.hotjar-analyst'],
          type: 'true'
        });
      }
    }, {
      domen: /.cloudfront.net/,
      funCheck: () => {
        Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
          el: ['div.cloudfront-analyst'],
          navEl: ['.analyst_type .check-nav__activity.cloudfront-analyst'],
          checkEl: ['.analyst_type .check__activity.cloudfront-analyst'],
          type: 'true'
        });
      }
    }]
  });
  Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
    el: ['div.google-Ads .adsbygoogle'],
    navEl: ['.content_type .check-nav__activity.google-Ads'],
    checkEl: ['.content_type .check__activity.google-Ads'],
    check: 'analyst'
  });
  Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
    el: ['div.yandex-Ads [id^="yandex"]'],
    navEl: ['.content_type .check-nav__activity.yandex-Ads'],
    checkEl: ['.content_type .check__activity.yandex-Ads'],
    check: 'analyst'
  }); //проверка на скрытие рекламного блока .banner_static

  Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
    el: ['div.banner_static div.banner'],
    navEl: ['.banner_type .check-nav__activity.banner_static'],
    checkEl: ['.banner_type .check__activity.banner_static']
  }); //проверка на скрытие рекламного блока .banner_dynamic

  Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
    el: ['div.banner_dynamic div.banner'],
    navEl: ['.banner_type .check-nav__activity.banner_dynamic'],
    checkEl: ['.banner_type .check__activity.banner_dynamic']
  }); //проверка на скрытие рекламного блока .banner_disclosure

  Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
    el: ['div.banner_disclosure div.banner'],
    navEl: ['.banner_type .check-nav__activity.banner_disclosure'],
    checkEl: ['.banner_type .check__activity.banner_disclosure']
  }); //проверка на скрытие рекламного блока .banner_detect

  Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
    el: ['div.banner_detect div.banner'],
    navEl: ['.banner_type .check-nav__activity.banner_detect'],
    checkEl: ['.banner_type .check__activity.banner_detect'],
    detectCheck: '#openModal',
    visCheck: ['.banner_detect div[class^="content"],.banner_detect p[class^="content"]']
  }); //проверка на изменение в дом дереве и вызов функции проверки

  Object(_options_motation_el__WEBPACK_IMPORTED_MODULE_19__["default"])('.app', () => {
    Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
      el: ['div.banner_static div.banner'],
      navEl: ['.banner_type .check-nav__activity.banner_static'],
      checkEl: ['.banner_type .check__activity.banner_static']
    });
    Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
      el: ['div.banner_dynamic div.banner'],
      navEl: ['.banner_type .check-nav__activity.banner_dynamic'],
      checkEl: ['.banner_type .check__activity.banner_dynamic']
    });
    Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
      el: ['div.banner_disclosure div.banner'],
      navEl: ['.banner_type .check-nav__activity.banner_disclosure'],
      checkEl: ['.banner_type .check__activity.banner_disclosure']
    });
    Object(_create_banners_check_check_banner__WEBPACK_IMPORTED_MODULE_20__["default"])({
      el: ['div.banner_detect div.banner'],
      navEl: ['.banner_type .check-nav__activity.banner_detect'],
      checkEl: ['.banner_type .check__activity.banner_detect'],
      detectCheck: '#openModal',
      visCheck: ['.banner_detect div[class^="content"]', '.banner_detect p[class^="content"]']
    });
    Object(_check_block_check_block__WEBPACK_IMPORTED_MODULE_24__["default"])({
      check: 'div.adLock__check.check__activity',
      change: '.check-block__grade-dynamic',
      text: '.check-block__info-text > p'
    });
    Object(_check_block_check_block__WEBPACK_IMPORTED_MODULE_24__["default"])({
      check: '.content_type div.adLock__check.check__activity',
      change: '.content-block__dynamic.content_type'
    });
    Object(_check_block_check_block__WEBPACK_IMPORTED_MODULE_24__["default"])({
      check: '.banner_type div.adLock__check.check__activity',
      change: '.content-block__dynamic.banner_type'
    });
    Object(_check_block_check_block__WEBPACK_IMPORTED_MODULE_24__["default"])({
      check: '.analyst_type div.adLock__check.check__activity',
      change: '.content-block__dynamic.analyst_type'
    });
  });
  Object(_check_block_check_block__WEBPACK_IMPORTED_MODULE_24__["default"])({
    check: '.banner_type div.adLock__check.check__activity',
    change: '.content-block__dynamic.banner_type'
  });
  Object(_burger_menu_burger_menu__WEBPACK_IMPORTED_MODULE_0__["default"])({
    btn: '.block-content__menu',
    block: '.block-content__burger-menu',
    nav: '.block-content__navigation',
    click: '.block-content__left',
    link: 'a:not([aria-label="logo"])'
  });

  const triggerWidth = () => {
    Object(_activ_link_activ_link__WEBPACK_IMPORTED_MODULE_1__["default"])({
      activ: ['.block-content__navigation a', '.block-content__logo a'],
      class: 'active'
    });
    Object(_scroll_top_section_scroll_top_section__WEBPACK_IMPORTED_MODULE_21__["default"])({
      relativ: '.block-content__right',
      dynamic: ['[class$="check-block__background"]', '.check-block__background.activ'],
      height: '.check-block__section'
    });
    Object(_scroll_nav_scroll_nav__WEBPACK_IMPORTED_MODULE_2__["default"])({
      el: 'a[href^="#"]:not(.close)',
      speed: 0.1
    });
  };

  triggerWidth();

  window.onresize = () => {
    triggerWidth();
  };
}

;

/***/ }),

/***/ "./src/js/options/constructor.js":
/*!***************************************!*\
  !*** ./src/js/options/constructor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Constructor = option => {
  const blockEL = option.block;
  const blockRoot = option.blockRoot;
  const createEl = option.creates;
  const elternBanner = document.querySelector(blockEL);
  const block = blockRoot;

  if (blockRoot) {
    elternBanner.append(block);
  }

  ;

  if (createEl) {
    let count = 0;
    let el;
    createEl.forEach(key => {
      if (key[0]) {
        if (block && count == 0) {
          el = key[0];
          block.append(el);
        } else if (count > 0) {
          el.append(key[0]);
          el = key[0];
        } else {
          elternBanner.append(key[0]);
        }

        ;
      } else {
        el = block;
      }

      if (key.content) {
        el.innerHTML = key.content;
      }

      ;
      count++;
    });
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Constructor);

/***/ }),

/***/ "./src/js/options/create-el.js":
/*!*************************************!*\
  !*** ./src/js/options/create-el.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getElement = (tagName, option) => {
  const classNames = option.class;
  const attributes = option.attr;
  const element = document.createElement(tagName);

  if (classNames) {
    element.classList.add(...classNames);
  }

  ;

  if (attributes) {
    for (const attribute in attributes) {
      if (element[attribute] !== undefined) {
        element[attribute] = attributes[attribute];
      }
    }

    ;

    if (attributes.data) {
      const data = attributes.data;

      for (const key in data) {
        const elemData = element.dataset;
        elemData[key] = data[key];
      }
    }

    ;
  }

  ;
  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (getElement);

/***/ }),

/***/ "./src/js/options/filling__styles.js":
/*!*******************************************!*\
  !*** ./src/js/options/filling__styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_el__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-el */ "./src/js/options/create-el.js");


const createStyles = obj => {
  const style = Object(_create_el__WEBPACK_IMPORTED_MODULE_0__["default"])('style', {
    class: ['styles']
  });
  const arrStyle = Object.entries(obj); //style.textContent = '@import "../../style/root.css" all;';

  document.head.appendChild(style);

  for (let key in arrStyle) {
    if (arrStyle[key][1].constructor !== Object) {
      style.innerHTML += `
                ${arrStyle[key][0]} { 
                    ${arrStyle[key][1].join(' ')} 
                }
            `;
    } else {
      const arr = arrStyle[key];
      const arrs = Object.entries(arr[1]);
      let templete = '';

      for (let i in arrs) {
        templete += `
                    ${arrs[i][0]}{
                        ${arrs[i][1].join(' ')}
                    }
                `;
      }

      ;
      style.innerHTML += `
                @media(${arr[0]}) { 
                    ${templete}
                }
            `;
    }

    ;
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (createStyles);

/***/ }),

/***/ "./src/js/options/motation-el.js":
/*!***************************************!*\
  !*** ./src/js/options/motation-el.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkMutation = (el, callback) => {
  const elem = document.querySelector(el);
  const observer = new MutationObserver(mutations => {
    setTimeout(() => {
      if (Boolean(mutations)) {
        return callback(mutations);
      }
    }, 500);
  });
  observer.observe(elem, {
    attributes: true,
    childList: true,
    subtree: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkMutation);

/***/ }),

/***/ "./src/js/scroll-nav/scroll-nav.js":
/*!*****************************************!*\
  !*** ./src/js/scroll-nav/scroll-nav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = option => {
  const el = option.el;
  const speed = option.speed;
  const links = document.querySelectorAll(el);
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const heightTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop);
      const hash = this.hash;
      const toBlock = document.querySelector(hash).getBoundingClientRect().top - 40;
      let start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        const progress = time - start;
        const calculate = toBlock < 0 ? Math.max(Math.round(heightTop - progress / speed), heightTop + toBlock) : Math.min(Math.round(heightTop + progress / speed), heightTop + toBlock);

        if (calculate != heightTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }

        document.documentElement.scrollTo(0, calculate);
      }

      ;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/scroll-top-section/scroll-top-section.js":
/*!*********************************************************!*\
  !*** ./src/js/scroll-top-section/scroll-top-section.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrollTopSection = option => {
  const relativ = option.relativ;
  const dynamicEl = option.dynamic;
  const heightBlock = option.height;
  const elem = document.querySelector(relativ);
  const el = document.querySelector(dynamicEl);
  const animationEl = document.querySelector(heightBlock);

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

  let lastScroll = 0;

  if (el) {
    const setHeight = el.offsetHeight;
    animationEl.style.height = `${setHeight}px`;

    if (!el.classList.contains('activ')) {
      el.classList.add('activ');
    }

    window.addEventListener('scroll', () => {
      let returnsSize = elem.getBoundingClientRect().top;

      if (scrollPosition() > lastScroll) {
        if (returnsSize < -setHeight + 16) {
          if (el.classList.contains('activ')) {
            el.classList.remove('activ');
          }
        }

        if (returnsSize < -setHeight) {
          if (!el.classList.contains('shift')) {
            el.classList.add('shift');
            el.classList.add('down');
            el.classList.remove('up');
          }
        }

        if (returnsSize < -setHeight - 64) {
          if (!el.classList.contains('scroll')) {
            el.classList.add('scroll');
            setTimeout(() => {
              el.classList.add('anim');
            }, 50);
          }
        }

        if (returnsSize < -setHeight - 128) {
          if (!el.classList.contains('down')) {
            el.classList.remove('down');
          }
        }
      } else if (scrollPosition() < lastScroll) {
        if (returnsSize > -setHeight - 128) {
          if (!el.classList.contains('up')) {
            el.classList.add('up');
            el.classList.remove('down');
          }
        }

        if (returnsSize > -setHeight - 64) {
          if (el.classList.contains('shift')) {
            el.classList.remove('anim');
            el.classList.remove('shift');
            setTimeout(() => {
              el.classList.remove('scroll');
            }, 50);
          }
        }

        if (returnsSize > -setHeight) {
          if (!el.classList.contains('activ')) {
            el.classList.remove('up');
          }
        }

        if (returnsSize > -setHeight + 16) {
          if (!el.classList.contains('activ')) {
            setTimeout(() => {
              if (!el.classList.contains('activ')) {
                el.classList.add('activ');
              } else {
                return;
              }
            }, 200);
          }
        }
      }

      lastScroll = scrollPosition();
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (scrollTopSection);

/***/ }),

/***/ "./src/js/server/server.js":
/*!*********************************!*\
  !*** ./src/js/server/server.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SERVER = option => {
  const dom = option.domenNameCheck;
  const performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
  let obj = performance.getEntries();
  obj.forEach(i => {
    if (i.domainLookupEnd === 0 && i.domainLookupStart === 0 && i.initiatorType === 'script') {
      dom.forEach(key => {
        if (key.domen.test(i.name)) {
          key.funCheck();
        }
      });
    }

    ;
  });
  return obj = {}; // function req( name ) {
  //     const request = new XMLHttpRequest();
  //     request.open('GET', name);
  //     request.setRequestHeader('strict-origin-when-cross-origin', 'text/javascript; charset=UTF-8');
  //     request.send();
  //     request.addEventListener('readystatechange', () => {
  //         if ( request.readyState === 4  && request.status == 200 ) {
  //             console.log(request.status);
  //         } else {
  //             // console.error(request.status);
  //         }
  //     })
  // }
};

/* harmony default export */ __webpack_exports__["default"] = (SERVER);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map