// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
    // Save the require from previous bundle to this closure if any
    var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
    var nodeRequire = typeof require === 'function' && require;
  
    function newRequire(name, jumped) {
      if (!cache[name]) {
        if (!modules[name]) {
          // if we cannot find the module within our internal map or
          // cache jump to the current global require ie. the last bundle
          // that was added to the page.
          var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
          if (!jumped && currentRequire) {
            return currentRequire(name, true);
          }
  
          // If there are other bundles on this page the require from the
          // previous one is saved to 'previousRequire'. Repeat this as
          // many times as there are bundles until the module is found or
          // we exhaust the require chain.
          if (previousRequire) {
            return previousRequire(name, true);
          }
  
          // Try the node require function if it exists.
          if (nodeRequire && typeof name === 'string') {
            return nodeRequire(name);
          }
  
          var err = new Error('Cannot find module \'' + name + '\'');
          err.code = 'MODULE_NOT_FOUND';
          throw err;
        }
  
        localRequire.resolve = resolve;
        localRequire.cache = {};
  
        var module = cache[name] = new newRequire.Module(name);
  
        modules[name][0].call(module.exports, localRequire, module, module.exports, this);
      }
  
      return cache[name].exports;
  
      function localRequire(x){
        return newRequire(localRequire.resolve(x));
      }
  
      function resolve(x){
        return modules[name][1][x] || x;
      }
    }
  
    function Module(moduleName) {
      this.id = moduleName;
      this.bundle = newRequire;
      this.exports = {};
    }
  
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
      modules[id] = [function (require, module) {
        module.exports = exports;
      }, {}];
    };
  
    var error;
    for (var i = 0; i < entry.length; i++) {
      try {
        newRequire(entry[i]);
      } catch (e) {
        // Save first error but execute all entries
        if (!error) {
          error = e;
        }
      }
    }
  
    if (entry.length) {
      // Expose entry point to Node, AMD or browser globals
      // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
      var mainExports = newRequire(entry[entry.length - 1]);
  
      // CommonJS
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = mainExports;
  
      // RequireJS
      } else if (typeof define === "function" && define.amd) {
       define(function () {
         return mainExports;
       });
  
      // <script>
      } else if (globalName) {
        this[globalName] = mainExports;
      }
    }
  
    // Override the current require with this new one
    parcelRequire = newRequire;
  
    if (error) {
      // throw error from earlier, _after updating parcelRequire_
      throw error;
    }
  
    return newRequire;
  })({"v3Qa":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
  
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  var winsize = {
    width: window.innerWidth,
    height: window.innerHeight
  }; // https://stackoverflow.com/a/3540295
  
  var isMobile = false; //initiate as false
  // device detection
  
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|menu__item70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }
  
  var InfiniteMenu = /*#__PURE__*/function () {
    function InfiniteMenu(el) {
      var _this = this;
  
      _classCallCheck(this, InfiniteMenu);
  
      if (!isMobile) {
        this.DOM = {
          el: el
        };
        this.DOM.menuItems = _toConsumableArray(this.DOM.el.querySelectorAll('.menu__item'));
        this.cloneItems();
        this.initScroll();
        this.initEvents(); // rAF/loop
  
        requestAnimationFrame(function () {
          return _this.render();
        });
      } else {
        document.body.classList.add('mobile');
      }
    }
  
    _createClass(InfiniteMenu, [{
      key: "getScrollPos",
      value: function getScrollPos() {
        return (this.DOM.el.pageYOffset || this.DOM.el.scrollTop) - (this.DOM.el.clientTop || 0);
      }
    }, {
      key: "setScrollPos",
      value: function setScrollPos(pos) {
        this.DOM.el.scrollTop = pos;
      } // Create menu items clones and append them to the menu items list
      // total clones = number of menu items that fit in the viewport
  
    }, {
      key: "cloneItems",
      value: function cloneItems() {
        var _this2 = this;
  
        // Get the height of one menu item
        var itemHeight = this.DOM.menuItems[0].offsetHeight; // How many items fit in the window?
  
        var fitIn = Math.ceil(winsize.height / itemHeight); // Create [fitIn] clones from the beginning of the list
        // Remove any
  
        this.DOM.el.querySelectorAll('.loop__clone').forEach(function (clone) {
          return _this2.DOM.el.removeChild(clone);
        }); // Add clones
  
        var totalClones = 0;
        this.DOM.menuItems.filter(function (_, index) {
          return index < fitIn;
        }).map(function (target) {
          var clone = target.cloneNode(true);
          clone.classList.add('loop__clone');
  
          _this2.DOM.el.appendChild(clone);
  
          ++totalClones;
        }); // All clones height
  
        this.clonesHeight = totalClones * itemHeight; // Scrollable area height
  
        this.scrollHeight = this.DOM.el.scrollHeight;
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this3 = this;
  
        window.addEventListener('resize', function () {
          return _this3.resize();
        });
      }
    }, {
      key: "resize",
      value: function resize() {
        this.cloneItems();
        this.initScroll();
      }
    }, {
      key: "initScroll",
      value: function initScroll() {
        // Scroll 1 pixel to allow upwards scrolling
        this.scrollPos = this.getScrollPos();
  
        if (this.scrollPos <= 0) {
          this.setScrollPos(1);
        }
      }
    }, {
      key: "scrollUpdate",
      value: function scrollUpdate() {
        this.scrollPos = this.getScrollPos();
  
        if (this.clonesHeight + this.scrollPos >= this.scrollHeight) {
          // Scroll to the top when you’ve reached the bottom
          this.setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
        } else if (this.scrollPos <= 0) {
          // Scroll to the bottom when you reach the top
          this.setScrollPos(this.scrollHeight - this.clonesHeight);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;
  
        this.scrollUpdate();
        requestAnimationFrame(function () {
          return _this4.render();
        });
      }
    }]);
  
    return InfiniteMenu;
  }();
  
  exports.default = InfiniteMenu;
  },{}],"QvaY":[function(require,module,exports) {
  "use strict";
  
  var _infinitemenu = _interopRequireDefault(require("./infinitemenu"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var menu = new _infinitemenu.default(document.querySelector('nav.menu'));
  },{"./infinitemenu":"v3Qa"}]},{},["QvaY"], null)




















  /**
* demo3.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/
{
  // body element
  const body = document.body;

  // helper functions
  const MathUtils = {
      // linear interpolation
      lerp: (a, b, n) => (1 - n) * a + n * b,
      // distance between two points
      distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1)
  }

  // calculate the viewport size
  let winsize;
  const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
  calcWinsize();
  // and recalculate on resize
  window.addEventListener('resize', calcWinsize);

  // get the mouse position
  const getMousePos = (ev) => {
      let posx = 0;
      let posy = 0;
      if (!ev) ev = window.event;
      if (ev.pageX || ev.pageY) {
          posx = ev.pageX;
          posy = ev.pageY;
      }
      else if (ev.clientX || ev.clientY) 	{
          posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
          posy = ev.clientY + body.scrollTop + docEl.scrollTop;
      }
      return {x: posx, y: posy};
  }

  // mousePos: current mouse position
  // cacheMousePos: previous mouse position
  // lastMousePos: last last recorded mouse position (at the time the last image was shown)
  let mousePos = lastMousePos = cacheMousePos = {x: 0, y: 0};
  
  // update the mouse position
  window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));
  
  // gets the distance from the current mouse position to the last recorded mouse position
  const getMouseDistance = () => MathUtils.distance(mousePos.x,mousePos.y,lastMousePos.x,lastMousePos.y);

  class Image {
      constructor(el) {
          this.DOM = {el: el};
          // image deafult styles
          this.defaultStyle = {
              x: 0,
              y: 0,
              opacity: 0
          };
          // get sizes/position
          this.getRect();
          // init/bind events
          this.initEvents();
      }
      initEvents() {
          // on resize get updated sizes/position
          window.addEventListener('resize', () => this.resize());
      }
      resize() {
          // reset styles
          TweenMax.set(this.DOM.el, this.defaultStyle);
          // get sizes/position
          this.getRect();
      }
      getRect() {
          this.rect = this.DOM.el.getBoundingClientRect();
      }
      isActive() {
          // check if image is animating or if it's visible
          return TweenMax.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
      }
  }

  class ImageTrail {
      constructor() {
          // images container
          this.DOM = {content: document.querySelector('.content')};
          // array of Image objs, one per image element
          this.images = [];
          [...this.DOM.content.querySelectorAll('img')].forEach(img => this.images.push(new Image(img)));
          // total number of images
          this.imagesTotal = this.images.length;
          // upcoming image index
          this.imgPosition = 0;
          // zIndex value to apply to the upcoming image
          this.zIndexVal = 1;
          // mouse distance required to show the next image
          this.threshold = 50;
          // render the images
          requestAnimationFrame(() => this.render());
      }
      render() {
          // get distance between the current mouse position and the position of the previous image
          let distance = getMouseDistance();
          // cache previous mouse position
          cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
          cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

          // if the mouse moved more than [this.threshold] then show the next image
          if ( distance > this.threshold ) {
              this.showNextImage();

              ++this.zIndexVal;
              this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition+1 : 0;
              
              lastMousePos = mousePos;
          }

          // check when mousemove stops and all images are inactive (not visible and not animating)
          let isIdle = true;
          for (let img of this.images) {
              if ( img.isActive() ) {
                  isIdle = false;
                  break;
              }
          }
          // reset z-index initial value
          if ( isIdle && this.zIndexVal !== 1 ) {
              this.zIndexVal = 1;
          }

          // loop..
          requestAnimationFrame(() => this.render());
      }
      showNextImage() {
          // show image at position [this.imgPosition]
          const img = this.images[this.imgPosition];
          // kill any tween on the image
          TweenMax.killTweensOf(img.DOM.el);

          new TimelineMax()
          // show the image
          .set(img.DOM.el, {
              startAt: {opacity: 0},
              opacity: 1,
              zIndex: this.zIndexVal,
              x: cacheMousePos.x - img.rect.width/2,
              y: cacheMousePos.y - img.rect.height/2
          }, 0)
          // animate position
          .to(img.DOM.el, 1.6, {
              ease: Expo.easeOut,
              x: mousePos.x - img.rect.width/2,
              y: mousePos.y - img.rect.height/2
          }, 0)
          // then make it disappear
          .to(img.DOM.el, 1, {
              ease: Power1.easeOut,
              opacity: 0
          }, 0.4)
          // translate down the image
          .to(img.DOM.el, 1, {
              ease: Quint.easeInOut,
              y: `+=${winsize.height + img.rect.height/2}`
          }, 0.4);
      }
  }

  /***********************************/
  /********** Preload stuff **********/

  // Preload images
  const preloadImages = () => {
      return new Promise((resolve, reject) => {
          imagesLoaded(document.querySelectorAll('.content__img'), resolve);
      });
  };
  
  // And then..
  preloadImages().then(() => {
      // Remove the loader
      document.body.classList.remove('loading');
      new ImageTrail();
  });
}



