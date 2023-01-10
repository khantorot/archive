var isMobile = false;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|menu__item70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}








window.addEventListener('load', function () {
  const info_wrap = document.querySelector('.info_wrap');
  document.querySelector('.wrapper').classList.add('show_page');

  document.querySelector('.menu').addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('menu__item-inner')) {
      showData(e.target.getAttribute('data-atr'));
    }
  })

  showData(0)

  function showData(keyID) {
      let out = '';

      out += '<h4>' + projects[keyID].name + '</h4>';
      out += '<h5>' + projects[keyID].date + '</h5>';
      out += '<p>' + projects[keyID].about + '</p>';
      out += '<div class="info_wrap_panel">'
      out += '<div class="prev_btn">prev</div>';
      out += '<a href="' + projects[keyID].link + '" data-id="' + keyID + '" target="_blank">view</a>';
      out += '<div class="next_btn">next</div>';
      out += '</div>';

      info_wrap.innerHTML =  out;
  }

  info_wrap.addEventListener('click', function(e){
    let id = info_wrap.querySelector('a').getAttribute('data-id');

    if (e.target.classList.contains('next_btn')) {
      if (id < (Object.keys(projects).length) - 1){
        id++;
      } else{
        id = 0;
      }
      showData(id);
    }
    if (e.target.classList.contains('prev_btn')) {
      if (id > 0){
        id--;
      } else{
        id = Object.keys(projects).length - 1;
      }
      showData(id);
    }
  })
})






showPage();

function showPage() {
  let out_menu = '';
  for (key in projects) {
    out_menu += '<div class="menu__item"><a class="menu__item-inner" data-atr="' + key + '" target="_blank" href="' + projects[key].link + '">' + projects[key].name + '</a></div>';
  }
  document.querySelector('.menu').innerHTML += out_menu;
}





document.querySelector('.menu').addEventListener('mousemove', function(e){
  let element_data = e.target.getBoundingClientRect();
  let element = document.querySelector('.menu_eff');

  element.style.transform = 'translateY('+ element_data.top +'px)';
})







parcelRequire = (function (modules, cache, entry, globalName) {
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        if (previousRequire) {
          return previousRequire(name, true);
        }

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

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    var mainExports = newRequire(entry[entry.length - 1]);

    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  parcelRequire = newRequire;

  if (error) {
    throw error;
  }

  return newRequire;
})({
  "v3Qa": [function (require, module, exports) {
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
    };


    var InfiniteMenu = function () {
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
          this.initEvents();

          requestAnimationFrame(function () {
            return _this.render();
          });
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
        }

      }, {
        key: "cloneItems",
        value: function cloneItems() {
          var _this2 = this;

          var itemHeight = this.DOM.menuItems[0].offsetHeight;

          var fitIn = Math.ceil(winsize.height / itemHeight);

          this.DOM.el.querySelectorAll('.loop__clone').forEach(function (clone) {
            return _this2.DOM.el.removeChild(clone);
          });

          var totalClones = 0;
          this.DOM.menuItems.filter(function (_, index) {
            return index < fitIn;
          }).map(function (target) {
            var clone = target.cloneNode(true);
            clone.classList.add('loop__clone');

            _this2.DOM.el.appendChild(clone);

            ++totalClones;
          });

          this.clonesHeight = totalClones * itemHeight;

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
            this.setScrollPos(1);
          } else if (this.scrollPos <= 0) {
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
  }, {}], "QvaY": [function (require, module, exports) {
    "use strict";

    var _infinitemenu = _interopRequireDefault(require("./infinitemenu"));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var menu = new _infinitemenu.default(document.querySelector('nav.menu'));
  }, { "./infinitemenu": "v3Qa" }]
}, {}, ["QvaY"], null)




























const el = document.querySelector(".title");

let elWidth = el.offsetWidth;
let windowWidth = window.innerWidth;

let mouseX = 0;
let prevMouseX = 0;

let skewTarget = 0;
let translateTarget = 0;

let skewWithEasing = 0;
let translateWithEasing = 0;

let skewEasingFactor = 0.1;
let translateEasingFactor = 0.05;

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleWindowResize);

function handleMouseMove(e) {
  mouseX = e.pageX;
}

function handleWindowResize(e) {
  elWidth = el.offsetWidth;
  windowWidth = window.innerWidth;
}

function lerp(start, end, factor) {
  return (1 - factor) * start + factor * end;
}

function animateMe() {
  skewTarget = mouseX - prevMouseX;
  prevMouseX = mouseX;

  translateTarget = (elWidth - windowWidth) / windowWidth * mouseX * -1;

  skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);

  skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75);

  translateWithEasing = lerp(
    translateWithEasing,
    translateTarget,
    translateEasingFactor);


  el.style.transform = `
translateX(${translateWithEasing}px)`;

  window.requestAnimationFrame(animateMe);
}

window.requestAnimationFrame(animateMe);