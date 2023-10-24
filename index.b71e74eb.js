// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gmPuC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
var _index = require("./components/timer/index");
var _hands = require("./components/hands/hands");
var _myButton = require("./components/button/my-button");
const root = document.querySelector(".root");
(0, _router.initRouter)(root);

},{"./router":"4QFWt","./components/timer/index":"1L0Sb","./components/hands/hands":"29HSW","./components/button/my-button":"g8tqG"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _game = require("./pages/game");
var _home = require("./pages/home");
var _introduction = require("./pages/introduction");
var _result = require("./pages/viewResult/result");
const BASE_PATH = "/dwf-m5-desafio-final";
function isGithubPages() {
    return location.host.includes("bautistajuan.github.io");
}
const routes = [
    {
        path: /\/welcome/,
        component: (0, _home.initHome)
    },
    {
        path: /\/introductions/,
        component: (0, _introduction.instructions)
    },
    {
        path: /\/game/,
        component: (0, _game.game)
    },
    {
        path: /\/result/,
        component: (0, _result.result)
    }
];
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        console.log("el handle Route recibio una nueva ruta y es", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            container.firstChild?.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/" || location.pathname == "/dwf-m5-desafio-final/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/game":"c5SNR","./pages/home":"l5Ogl","./pages/introduction":"9gQWG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/viewResult/result":"8OYcW"}],"c5SNR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "game", ()=>game);
var _state = require("../../state");
function game(params) {
    let timeEnd = true;
    const div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `
    
    <div class="container-timer">
      <my-timer></my-timer>
    </div>
    <div class="container-game">
    <my-hands class="hands"></my-hands>
    </div>
  `;
    const hands = div.querySelector(".hands");
    (function SetMoveAndWinner() {
        const OPCIONES = [
            "Piedra",
            "Papel",
            "Tijera"
        ];
        let movimientoComputadora;
        movimientoComputadora = OPCIONES[Math.floor(Math.random() * 3)];
        hands?.addEventListener("handSelected", (e)=>{
            // Efecto en mano seleccionado, junto
            e.detail.addClass.add("click", "nextPage");
            (0, _state.state).setMoves(e.detail.selectionPlayer, movimientoComputadora);
            (0, _state.state).resultOfTheGame(e.detail.selectionPlayer, movimientoComputadora);
            // Pasemos a ver los resultados...
            if (e.detail.addClass[2] == "nextPage") {
                timeEnd = false;
                setTimeout(()=>{
                    params.goTo("/result");
                }, 1000);
            }
        });
    })();
    (function timeOff() {
        let counter = 3;
        const intervalId = setInterval(()=>{
            counter--;
            if (counter < 1 && timeEnd == true) {
                clearInterval(intervalId);
                params.goTo("/introductions");
            }
        }, 1000);
    })();
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
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
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState || this.data;
        localStorage.setItem("saved-state", JSON.stringify(newState));
    },
    setMoves (myMove, computerMove) {
        const lastState = this.getState();
        state.setState({
            ...lastState,
            currentGame: {
                ...lastState.currentGame,
                myPlay: myMove,
                computerPlay: computerMove
            }
        });
    },
    setResult (result) {
        const lastState = this.getState();
        state.setState({
            ...lastState,
            currentGame: {
                ...lastState.currentGame,
                result: result
            }
        });
    },
    resultOfTheGame (myPlay, computerPlay) {
        let iWin = false;
        let computerWin = false;
        let equal = false;
        if (myPlay == "Piedra" && computerPlay == "Tijera" || myPlay == "Papel" && computerPlay == "Piedra" || myPlay == "Tijera" && computerPlay == "Papel") {
            iWin;
            state.pushToHistory(1, 0);
            state.setResult("Ganaste");
        } else if (computerPlay == "Piedra" && myPlay == "Tijera" || computerPlay == "Papel" && myPlay == "Piedra" || computerPlay == "Tijera" && myPlay == "Papel") {
            computerWin;
            state.pushToHistory(0, 1);
            state.setResult("Perdiste");
        } else if (myPlay == computerPlay) {
            equal;
            state.pushToHistory(0, 0);
            state.setResult("Empate");
        }
    },
    getHistory () {
        const localData = localStorage.getItem("saved-state");
        const dataParse = JSON.parse(localData);
        this.setState(dataParse);
        return dataParse;
    },
    pushToHistory (myPoint, computerPoint) {
        const currentState = this.getState();
        state.setState({
            ...currentState,
            history: {
                ...currentState.history,
                myHistoryPlay: currentState.history.myHistoryPlay + myPoint,
                computerHistoryPlay: currentState.history.computerHistoryPlay + computerPoint
            }
        });
    },
    restartPoints () {
        state.setState({
            history: {
                myHistoryPlay: 0,
                computerHistoryPlay: 0
            }
        });
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l5Ogl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHome", ()=>initHome);
function initHome(params) {
    const div = document.createElement("div");
    div.className = "home-page-container";
    div.innerHTML = `
    <div class="container-title">
      <h1 class="title">Piedra <br>
      Papel <span>\xf3</span><br>
      Tijera</h1>
    </div>
    <div class="container-btn">
      <my-button class="change-page">Empezar</my-button>
    </div>
    <div class="container-hands">
      <my-hands></my-hands>
    </div>

  `;
    const btn = div.querySelector(".change-page");
    btn?.addEventListener("click", (e)=>{
        e.preventDefault();
        return params.goTo("/introductions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9gQWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instructions", ()=>instructions);
function instructions(params) {
    const instructions = document.createElement("div");
    instructions.className = "intro";
    instructions.innerHTML = `
    <div class="container-instructions">
      <h2 class="sub-instruction">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
      <div class="play-btn">
      <my-button class="change-page">Play!</my-button>
      </div>
      <div class="hands">
        <my-hands></my-hands>
      </div>
    </div>
  `;
    const playButton = instructions.querySelector(".change-page");
    playButton?.addEventListener("click", (e)=>{
        e.preventDefault();
        params.goTo("/game");
    });
    return instructions;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OYcW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "result", ()=>result);
var _state = require("../../state");
function result(params) {
    const resultGame = (0, _state.state).getHistory();
    const pointsData = resultGame.history;
    const div = document.createElement("div");
    div.className = "result-page-container";
    div.innerHTML = `
    <div class="container-result-end">
      <div class="img-container">
        <p class="text-result">${resultGame.currentGame.result}</p>   
        <img class="img-result" > 
      </div>
      <div class="score">
        <div class="score-data">
          <h2 class="score-h2">Score<h2>
          <p>Tu puntaje: <span class="user-points">${pointsData.myHistoryPlay}</span></p>
          <p>Maquina: <span class="mach-points">${pointsData.computerHistoryPlay}</span> </p>    
          </div>
      </div>
      <div class="container_button-try-again">
        <my-button class="button-try-again">Volver a Jugar</my-button>
        <my-button class="button-restart">Reiniciar</my-button>
      </div>
    </div>
  
  `;
    const image = div.querySelector(".img-result");
    const bodyForResult = document.querySelector("body");
    if (resultGame.currentGame.result == "Ganaste") {
        bodyForResult.classList.add("ganaste");
        image.src = new URL(require("9fee52dcd9be2fff")).toString();
    } else if (resultGame.currentGame.result == "Perdiste") {
        image.src = new URL(require("b3d08fe5c0b6a14d")).toString();
        bodyForResult.classList.add("perdiste");
    } else {
        bodyForResult.classList.add("empate");
        image.src = new URL(require("b3d08fe5c0b6a14d")).toString();
    }
    //logica para quitar color de fondo si vuelve para atras
    window.addEventListener("popstate", (event)=>{
        if (event.state) {
            bodyForResult.classList.remove("ganaste");
            bodyForResult.classList.remove("empate");
            bodyForResult.classList.remove("perdiste");
        }
    });
    const tryAgainBtn = div.querySelector(".button-try-again");
    const restart = div.querySelector(".button-restart");
    restart?.addEventListener("click", ()=>{
        (0, _state.state).restartPoints();
        params.goTo("/welcome");
        bodyForResult.classList.remove("ganaste");
        bodyForResult.classList.remove("empate");
        bodyForResult.classList.remove("perdiste");
    });
    tryAgainBtn?.addEventListener("click", ()=>{
        params.goTo("/introductions");
        bodyForResult.classList.remove("ganaste");
        bodyForResult.classList.remove("empate");
        bodyForResult.classList.remove("perdiste");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju","9fee52dcd9be2fff":"jp34h","b3d08fe5c0b6a14d":"zQ6BI"}],"jp34h":[function(require,module,exports) {
module.exports = require("fb5a32f5ba7c0b09").getBundleURL("7UhFu") + "star-1.4d6801af.png" + "?" + Date.now();

},{"fb5a32f5ba7c0b09":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"zQ6BI":[function(require,module,exports) {
module.exports = require("7e438212ec4a4a22").getBundleURL("7UhFu") + "star-2.cb0dcdf8.png" + "?" + Date.now();

},{"7e438212ec4a4a22":"lgJ39"}],"1L0Sb":[function(require,module,exports) {
customElements.define("my-timer", class extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const div = document.createElement("div");
        div.className = "container-timer";
        const style = document.createElement("style");
        div.innerHTML = `
        <div class="countdown-number"></div>
        <svg class="svg">
         <circle class="svg-circle" r="90" cx="140" cy="140"></circle>
        </svg>
      `;
        let counter = 3;
        var counterNumber = div.querySelector(".countdown-number");
        counterNumber.textContent = counter;
        const timer = setInterval(()=>{
            counter--;
            if (counter == 0) clearInterval(timer);
            counterNumber.textContent = counter;
        }, 1000);
        style.innerHTML = `
        .container-timer{
          text-align: center;
        }      

        .countdown-number {
          position: relative;
          top: 169px;
          font-weight: 400;
          font-size: 70px;
          text-align: center;
          color: black;
        }
        .svg {
          width: 260px;
          height: 280px;
          transform: rotateY(-180deg) rotateZ(-90deg);
        }
        .svg-circle {
          stroke-dasharray: 570px;
          stroke-dashoffset: 0px;
          stroke-linecap: round;
          stroke-width: 10px;
          stroke: black ;
          fill: none;
          animation: countdown 3s linear infinite forwards;
        }
        @keyframes countdown {
        from {
         stroke-dashoffset: 0px;
        }
        to {
         stroke-dashoffset: 580px;
        }
      }`;
        shadow.appendChild(div);
        shadow.appendChild(style);
    }
});

},{}],"29HSW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
customElements.define("my-hands", class Hands extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    connectedCallback() {
        const styleHands = document.createElement("style");
        styleHands.innerHTML = `
      .piedra,
      .papel,
      .tijera {
        height: 150px; 
        margin-right: 5px;
      }
      .click{
        height: 200px;
      }
      `;
        this.shadow.appendChild(styleHands);
    }
    render() {
        const handsContainer = document.createElement("div");
        handsContainer.className = "hands-container";
        handsContainer.innerHTML = `
        <img class="piedra" id="Piedra"  alt="Piedra">
        <img class="papel" id="Papel" alt="Pepel">
        <img class="tijera" id="Tijera" alt="Tijera">

      `;
        const imgUrl = handsContainer.querySelectorAll("img");
        imgUrl.forEach((img)=>{
            if (img.className == "papel") img.src = new URL(require("57244464944e7744")).toString();
            else if (img.className == "piedra") img.src = new URL(require("3be133119ac4ff19")).toString();
            else if (img.className == "tijera") img.src = new URL(require("f708893c87d1c46f")).toString();
            img.addEventListener("click", (i)=>{
                const event = new CustomEvent("handSelected", {
                    detail: {
                        selectionPlayer: i.target.id,
                        addClass: i.target.classList
                    }
                });
                this.dispatchEvent(event);
            });
        });
        this.shadow.appendChild(handsContainer);
    }
});

},{"57244464944e7744":"brq0R","3be133119ac4ff19":"ahMbM","f708893c87d1c46f":"5RLXy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brq0R":[function(require,module,exports) {
module.exports = require("c82aa9887ea8991b").getBundleURL("7UhFu") + "papel.7e4765e7.png" + "?" + Date.now();

},{"c82aa9887ea8991b":"lgJ39"}],"ahMbM":[function(require,module,exports) {
module.exports = require("5060a788af7d1f1").getBundleURL("7UhFu") + "piedra.dbe546e3.png" + "?" + Date.now();

},{"5060a788af7d1f1":"lgJ39"}],"5RLXy":[function(require,module,exports) {
module.exports = require("aed99fcb0fa27c3b").getBundleURL("7UhFu") + "tijera.d3d2f5f9.png" + "?" + Date.now();

},{"aed99fcb0fa27c3b":"lgJ39"}],"g8tqG":[function(require,module,exports) {
customElements.define("my-button", class StartButton extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
        .button {
          color: #D8FCFC;
          text-align: center;
          font-family: 'Odibee Sans';
          font-size: 45px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 2.25px;
          width: 322px;
          height: 87px;
          flex-shrink: 0;
          border-radius: 10px;
          border: 10px solid #001997;
          background: #006CFC;
        }
      `;
        this.shadow.appendChild(style);
    }
    render() {
        this.shadow.innerHTML = `
        <button class="button" type="button">${this.textContent}</button>

      `;
    }
});

},{}]},["gmPuC","h7u1C"], "h7u1C", "parcelRequire7796")

//# sourceMappingURL=index.b71e74eb.js.map
