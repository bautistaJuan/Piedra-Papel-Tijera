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
})({"state.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
      result: ""
    },
    history: {
      myHistoryPlay: 0,
      computerHistoryPlay: 0
    }
  },
  listeners: [],
  setMoves: function setMoves(myMove, computerMove) {
    var lastState = this.getState();
    state.setState(__assign(__assign({}, lastState), {
      currentGame: __assign(__assign({}, lastState.currentGame), {
        myPlay: myMove,
        computerPlay: computerMove
      })
    }));
  },
  setResult: function setResult(result) {
    var lastState = this.getState();
    state.setState(__assign(__assign({}, lastState), {
      currentGame: __assign(__assign({}, lastState.currentGame), {
        result: result
      })
    }));
  },
  whoWins: function whoWins(myPlay, computerPlay) {
    var iWin = false;
    var computerWin = false;
    var equal = false;
    if (myPlay == "piedra" && computerPlay == "tijera" || myPlay == "papel" && computerPlay == "piedra" || myPlay == "tijera" && computerPlay == "papel") {
      iWin == true;
      // this.pushToHistory(1, 0);
      this.setResult("Ganaste");
    } else if (computerPlay == "piedra" && myPlay == "tijera" || computerPlay == "papel" && myPlay == "piedra" || computerPlay == "tijera" && myPlay == "papel") {
      computerWin == true;
      this.pushToHistory(0, 1);
      this.setResult("Perdiste");
    } else if (myPlay == computerPlay) {
      equal == true;
      // this.pushToHistory(0, 0);
      this.setResult("Empate");
    }
  },
  getState: function getState() {
    return this.data;
  },
  setState: function setState(newState) {
    this.data = newState || this.data;
    console.log("soy el state, he cambiado", newState);
    localStorage.setItem("saved-state", JSON.stringify(newState));
  }
};
exports.state = state;
},{}],"pages/game/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = void 0;
var state_1 = require("../../state");
function game() {
  var lastState = state_1.state.getState();
  // <my-timer></my-timer>
  var div = document.createElement("div");
  div.innerHTML = "\n   <my-hands class=\"hands\"></my-hands>\n  ";
  return div;
}
exports.game = game;
},{"../../state":"state.ts"}],"pages/home/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initHome = void 0;
function initHome(params) {
  var div = document.createElement("div");
  div.className = "home-page-container";
  div.innerHTML = "\n    <div class=\"container-title\">\n      <h1 class=\"title\">Piedra <br>\n      Papel <span>\xF3</span><br>\n      Tijera</h1>\n    </div>\n    <div class=\"container-btn\">\n      <my-button class=\"change-page\">Empezar</my-button>\n    </div>\n    <div class=\"container-hands\">\n      <my-hands></my-hands>\n    </div>\n\n  ";
  var btn = div.querySelector(".change-page");
  btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (e) {
    e.preventDefault();
    return params.goTo("/introductions");
  });
  return div;
}
exports.initHome = initHome;
},{}],"pages/introduction/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instructions = void 0;
function instructions(params) {
  var instructions = document.createElement("div");
  instructions.className = "intro";
  instructions.innerHTML = "\n    <div class=\"container\">\n      <h2 class=\"sub-instruction\">Presion\xE1 jugar y eleg\xED: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>\n      <div class=\"play-btn\">\n      <my-button class=\"change-page\">Play!</my-button>\n      </div>\n      <div class=\"hands\">\n        <my-hands></my-hands>\n      </div>\n    </div>\n  ";
  var playButton = instructions.querySelector(".change-page");
  playButton === null || playButton === void 0 ? void 0 : playButton.addEventListener("click", function (e) {
    e.preventDefault();
    params.goTo("/game");
  });
  return instructions;
}
exports.instructions = instructions;
},{}],"router.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initRouter = void 0;
var game_1 = require("./pages/game");
var home_1 = require("./pages/home");
var introduction_1 = require("./pages/introduction");
var BASE_PATH = "/dwf-m5-desafio-final";
function isGithubPages() {
  return location.host.includes("bautistajuan.github.io");
}
var routes = [{
  path: /\/welcome/,
  component: home_1.initHome
}, {
  path: /\/introductions/,
  component: introduction_1.instructions
}, {
  path: /\/game/,
  component: game_1.game
}];
function initRouter(container) {
  function goTo(path) {
    var completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    var _a;
    console.log("el handle Route recibio una nueva ruta y es", route);
    var newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
      var r = routes_1[_i];
      if (r.path.test(newRoute)) {
        var el = r.component({
          goTo: goTo
        });
        (_a = container.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/" || location.pathname == "/dwf-m5-desafio-final/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
exports.initRouter = initRouter;
},{"./pages/game":"pages/game/index.ts","./pages/home":"pages/home/index.ts","./pages/introduction":"pages/introduction/index.ts"}],"components/timer/index.ts":[function(require,module,exports) {
var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
customElements.define("my-timer", /** @class */function (_super) {
  __extends(class_1, _super);
  function class_1() {
    var _this = _super.call(this) || this;
    _this.render();
    return _this;
  }
  class_1.prototype.render = function () {
    var shadow = this.attachShadow({
      mode: "open"
    });
    var div = document.createElement("div");
    div.className = "container-timer";
    var style = document.createElement("style");
    div.innerHTML = "\n        <div class=\"countdown-number\"></div>\n        <svg class=\"svg\">\n         <circle class=\"svg-circle\" r=\"90\" cx=\"140\" cy=\"140\"></circle>\n        </svg>\n      ";
    var counter = 3;
    var counterNumber = div.querySelector(".countdown-number");
    counterNumber.textContent = counter;
    var timer = setInterval(function () {
      counter--;
      if (counter == 0) {
        clearInterval(timer);
      }
      counterNumber.textContent = counter;
    }, 1000);
    style.innerHTML = "\n        .container-timer{\n          text-align: center;\n        }      \n\n        .countdown-number {\n          position: relative;\n          top: 169px;\n          font-weight: 400;\n          font-size: 70px;\n          text-align: center;\n          color: black;\n        }\n        .svg {\n          width: 260px;\n          height: 280px;\n          transform: rotateY(-180deg) rotateZ(-90deg);\n        }\n        .svg-circle {\n          stroke-dasharray: 570px;\n          stroke-dashoffset: 0px;\n          stroke-linecap: round;\n          stroke-width: 10px;\n          stroke: black ;\n          fill: none;\n          animation: countdown 3s linear infinite forwards;\n        }\n        @keyframes countdown {\n        from {\n         stroke-dashoffset: 0px;\n        }\n        to {\n         stroke-dashoffset: 580px;\n        }\n      }";
    shadow.appendChild(div);
    shadow.appendChild(style);
  };
  return class_1;
}(HTMLElement));
},{}],"components/hands/hands.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", {
  value: true
});
customElements.define("my-hands", /** @class */function (_super) {
  __extends(Hands, _super);
  function Hands() {
    var _this = _super.call(this) || this;
    _this.shadow = _this.attachShadow({
      mode: "open"
    });
    _this.render();
    return _this;
  }
  Hands.prototype.connectedCallback = function () {
    var styleHands = document.createElement("style");
    styleHands.innerHTML = "\n      .piedra,\n      .papel,\n      .tijera {\n        height: 150px; \n        margin-right: 5px;\n      ";
    this.shadow.appendChild(styleHands);
  };
  Hands.prototype.render = function () {
    var _this = this;
    var handsContainer = document.createElement("div");
    handsContainer.className = "hands-container";
    handsContainer.innerHTML = "\n        <img class=\"piedra\" id=\"Piedra\"  alt=\"Piedra\">\n        <img class=\"papel\" id=\"Papel\" alt=\"Pepel\">\n        <img class=\"tijera\" id=\"Tijera\" alt=\"Tijera\">\n\n      ";
    var imgUrl = handsContainer.querySelectorAll("img");
    var randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    var imgSelect = imgUrl[randomNum].id;
    imgUrl.forEach(function (img) {
      if (img.className == "papel") {
        img.src = new URL("../../img/papel.png", import.meta.url).toString();
      } else if (img.className == "piedra") {
        img.src = new URL("../../img/piedra.png", import.meta.url).toString();
      } else if (img.className == "tijera") {
        img.src = new URL("../../img/tijera.png", import.meta.url).toString();
      }
      img.addEventListener("click", function (i) {
        var event = new CustomEvent("handSelected", {
          detail: {
            selectionPlayer: i.target.id,
            selectionComputer: imgSelect
          }
        });
        _this.dispatchEvent(event);
      });
    });
    this.shadow.appendChild(handsContainer);
  };
  return Hands;
}(HTMLElement));
},{}],"components/button/my-button.ts":[function(require,module,exports) {
var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
customElements.define("my-button", /** @class */function (_super) {
  __extends(StartButton, _super);
  function StartButton() {
    var _this = _super.call(this) || this;
    _this.shadow = _this.attachShadow({
      mode: "open"
    });
    _this.render();
    return _this;
  }
  StartButton.prototype.connectedCallback = function () {
    var style = document.createElement("style");
    style.innerHTML = "\n        .button {\n            color: #D8FCFC;\n            text-align: center;\n            font-family: 'Odibee Sans';\n            font-size: 45px;\n            font-style: normal;\n            font-weight: 400;\n            line-height: normal;\n            letter-spacing: 2.25px;\n            width: 322px;\n            height: 87px;\n            flex-shrink: 0;\n            border-radius: 10px;\n            border: 10px solid #001997;\n            background: #006CFC;\n        }\n        ";
    this.shadow.appendChild(style);
  };
  StartButton.prototype.render = function () {
    this.shadow.innerHTML = "\n         <button class=\"button\" type=\"button\">".concat(this.textContent, "</button>\n        ");
  };
  return StartButton;
}(HTMLElement));
},{}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var router_1 = require("./router");
require("./components/timer/index");
require("./components/hands/hands");
require("./components/button/my-button");
var root = document.querySelector(".root");
(0, router_1.initRouter)(root);
},{"./router":"router.ts","./components/timer/index":"components/timer/index.ts","./components/hands/hands":"components/hands/hands.ts","./components/button/my-button":"components/button/my-button.ts"}],"../../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62850" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map