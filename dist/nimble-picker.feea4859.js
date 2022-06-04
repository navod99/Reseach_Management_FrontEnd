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
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("react-refresh/runtime");
var ErrorOverlay = require("react-error-overlay");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"3TdGZ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2df97a2ffeea4859";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
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
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
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
function hmrApply(bundle, asset) {
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
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7AVdN":[function(require,module,exports) {
"use strict";
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var icons = _interopRequireWildcard(require("../../svgs"));
var _store = _interopRequireDefault(require("../../utils/store"));
var _frequently = _interopRequireDefault(require("../../utils/frequently"));
var _utils = require("../../utils");
var _data = require("../../utils/data");
var _sharedProps = require("../../utils/shared-props");
var _anchors = _interopRequireDefault(require("../anchors"));
var _category = _interopRequireDefault(require("../category"));
var _preview = _interopRequireDefault(require("../preview"));
var _search = _interopRequireDefault(require("../search"));
var _sharedDefaultProps = require("../../utils/shared-default-props");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2["default"])(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var I18N = {
    search: "Search",
    clear: "Clear",
    // Accessible label on "clear" button
    notfound: "No Emoji Found",
    skintext: "Choose your default skin tone",
    categories: {
        search: "Search Results",
        recent: "Frequently Used",
        people: "Smileys & People",
        nature: "Animals & Nature",
        foods: "Food & Drink",
        activity: "Activity",
        places: "Travel & Places",
        objects: "Objects",
        symbols: "Symbols",
        flags: "Flags",
        custom: "Custom"
    },
    categorieslabel: "Emoji categories",
    // Accessible title for the list of categories
    skintones: {
        1: "Default Skin Tone",
        2: "Light Skin Tone",
        3: "Medium-Light Skin Tone",
        4: "Medium Skin Tone",
        5: "Medium-Dark Skin Tone",
        6: "Dark Skin Tone"
    }
};
var NimblePicker = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inherits2["default"])(NimblePicker1, _React$PureComponent);
    function NimblePicker1(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, NimblePicker1);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NimblePicker1).call(this, props));
        _this.CUSTOM = [];
        _this.RECENT_CATEGORY = {
            id: "recent",
            name: "Recent",
            emojis: null
        };
        _this.SEARCH_CATEGORY = {
            id: "search",
            name: "Search",
            emojis: null,
            anchor: false
        };
        if (props.data.compressed) (0, _data.uncompress)(props.data);
        _this.data = props.data;
        _this.i18n = (0, _utils.deepMerge)(I18N, props.i18n);
        _this.icons = (0, _utils.deepMerge)(icons, props.icons);
        _this.state = {
            firstRender: true
        };
        _this.categories = [];
        var allCategories = [].concat(_this.data.categories);
        if (props.custom.length > 0) {
            var customCategories = {};
            var customCategoriesCreated = 0;
            props.custom.forEach(function(emoji) {
                if (!customCategories[emoji.customCategory]) {
                    customCategories[emoji.customCategory] = {
                        id: emoji.customCategory ? "custom-".concat(emoji.customCategory) : "custom",
                        name: emoji.customCategory || "Custom",
                        emojis: [],
                        anchor: customCategoriesCreated === 0
                    };
                    customCategoriesCreated++;
                }
                var category = customCategories[emoji.customCategory];
                var customEmoji = _objectSpread({}, emoji, {
                    // `<Category />` expects emoji to have an `id`.
                    id: emoji.short_names[0],
                    custom: true
                });
                category.emojis.push(customEmoji);
                _this.CUSTOM.push(customEmoji);
            });
            allCategories = allCategories.concat(Object.keys(customCategories).map(function(key) {
                return customCategories[key];
            }));
        }
        _this.hideRecent = true;
        if (props.include != undefined) allCategories.sort(function(a, b) {
            if (props.include.indexOf(a.id) > props.include.indexOf(b.id)) return 1;
            return -1;
        });
        for(var categoryIndex = 0; categoryIndex < allCategories.length; categoryIndex++){
            var category1 = allCategories[categoryIndex];
            var isIncluded = props.include && props.include.length ? props.include.indexOf(category1.id) > -1 : true;
            var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category1.id) > -1 : false;
            if (!isIncluded || isExcluded) continue;
            if (props.emojisToShowFilter) {
                var newEmojis = [];
                var emojis = category1.emojis;
                for(var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex++){
                    var emoji1 = emojis[emojiIndex];
                    if (props.emojisToShowFilter(_this.data.emojis[emoji1] || emoji1)) newEmojis.push(emoji1);
                }
                if (newEmojis.length) {
                    var newCategory = {
                        emojis: newEmojis,
                        name: category1.name,
                        id: category1.id
                    };
                    _this.categories.push(newCategory);
                }
            } else _this.categories.push(category1);
        }
        var includeRecent = props.include && props.include.length ? props.include.indexOf(_this.RECENT_CATEGORY.id) > -1 : true;
        var excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf(_this.RECENT_CATEGORY.id) > -1 : false;
        if (includeRecent && !excludeRecent) {
            _this.hideRecent = false;
            _this.categories.unshift(_this.RECENT_CATEGORY);
        }
        if (_this.categories[0]) _this.categories[0].first = true;
        _this.categories.unshift(_this.SEARCH_CATEGORY);
        _this.setAnchorsRef = _this.setAnchorsRef.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleAnchorClick = _this.handleAnchorClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.setSearchRef = _this.setSearchRef.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSearch = _this.handleSearch.bind((0, _assertThisInitialized2["default"])(_this));
        _this.setScrollRef = _this.setScrollRef.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleScroll = _this.handleScroll.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleScrollPaint = _this.handleScrollPaint.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEmojiOver = _this.handleEmojiOver.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEmojiLeave = _this.handleEmojiLeave.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEmojiClick = _this.handleEmojiClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEmojiSelect = _this.handleEmojiSelect.bind((0, _assertThisInitialized2["default"])(_this));
        _this.setPreviewRef = _this.setPreviewRef.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSkinChange = _this.handleSkinChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleDarkMatchMediaChange = _this.handleDarkMatchMediaChange.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
    }
    (0, _createClass2["default"])(NimblePicker1, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                if (this.state.firstRender) {
                    this.testStickyPosition();
                    this.firstRenderTimeout = setTimeout(function() {
                        _this2.setState({
                            firstRender: false
                        });
                    }, 60);
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.updateCategoriesSize();
                this.handleScroll();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.SEARCH_CATEGORY.emojis = null;
                clearTimeout(this.leaveTimeout);
                clearTimeout(this.firstRenderTimeout);
                if (this.darkMatchMedia) this.darkMatchMedia.removeListener(this.handleDarkMatchMediaChange);
            }
        },
        {
            key: "testStickyPosition",
            value: function testStickyPosition() {
                var stickyTestElement = document.createElement("div");
                var prefixes = [
                    "",
                    "-webkit-",
                    "-ms-",
                    "-moz-",
                    "-o-"
                ];
                prefixes.forEach(function(prefix) {
                    return stickyTestElement.style.position = "".concat(prefix, "sticky");
                });
                this.hasStickyPosition = !!stickyTestElement.style.position.length;
            }
        },
        {
            key: "getPreferredTheme",
            value: function getPreferredTheme() {
                if (this.props.theme != "auto") return this.props.theme;
                if (this.state.theme) return this.state.theme;
                if (typeof matchMedia !== "function") return _sharedDefaultProps.PickerDefaultProps.theme;
                if (!this.darkMatchMedia) {
                    this.darkMatchMedia = matchMedia("(prefers-color-scheme: dark)");
                    this.darkMatchMedia.addListener(this.handleDarkMatchMediaChange);
                }
                if (this.darkMatchMedia.media.match(/^not/)) return _sharedDefaultProps.PickerDefaultProps.theme;
                return this.darkMatchMedia.matches ? "dark" : "light";
            }
        },
        {
            key: "handleDarkMatchMediaChange",
            value: function handleDarkMatchMediaChange() {
                this.setState({
                    theme: this.darkMatchMedia.matches ? "dark" : "light"
                });
            }
        },
        {
            key: "handleEmojiOver",
            value: function handleEmojiOver(emoji) {
                var preview = this.preview;
                if (!preview) return;
                 // Use Array.prototype.find() when it is more widely supported.
                var emojiData = this.CUSTOM.filter(function(customEmoji) {
                    return customEmoji.id === emoji.id;
                })[0];
                for(var key in emojiData)if (emojiData.hasOwnProperty(key)) emoji[key] = emojiData[key];
                preview.setState({
                    emoji: emoji
                });
                clearTimeout(this.leaveTimeout);
            }
        },
        {
            key: "handleEmojiLeave",
            value: function handleEmojiLeave(emoji) {
                var preview = this.preview;
                if (!preview) return;
                this.leaveTimeout = setTimeout(function() {
                    preview.setState({
                        emoji: null
                    });
                }, 16);
            }
        },
        {
            key: "handleEmojiClick",
            value: function handleEmojiClick(emoji, e) {
                this.props.onClick(emoji, e);
                this.handleEmojiSelect(emoji);
            }
        },
        {
            key: "handleEmojiSelect",
            value: function handleEmojiSelect(emoji) {
                var _this3 = this;
                this.props.onSelect(emoji);
                if (!this.hideRecent && !this.props.recent) _frequently["default"].add(emoji);
                var component = this.categoryRefs["category-1"];
                if (component) {
                    var maxMargin = component.maxMargin;
                    if (this.props.enableFrequentEmojiSort) component.forceUpdate();
                    requestAnimationFrame(function() {
                        if (!_this3.scroll) return;
                        component.memoizeSize();
                        if (maxMargin == component.maxMargin) return;
                        _this3.updateCategoriesSize();
                        _this3.handleScrollPaint();
                        if (_this3.SEARCH_CATEGORY.emojis) component.updateDisplay("none");
                    });
                }
            }
        },
        {
            key: "handleScroll",
            value: function handleScroll() {
                if (!this.waitingForPaint) {
                    this.waitingForPaint = true;
                    requestAnimationFrame(this.handleScrollPaint);
                }
            }
        },
        {
            key: "handleScrollPaint",
            value: function handleScrollPaint() {
                this.waitingForPaint = false;
                if (!this.scroll) return;
                var activeCategory = null;
                if (this.SEARCH_CATEGORY.emojis) activeCategory = this.SEARCH_CATEGORY;
                else {
                    var target = this.scroll, scrollTop = target.scrollTop, scrollingDown = scrollTop > (this.scrollTop || 0), minTop = 0;
                    for(var i = 0, l = this.categories.length; i < l; i++){
                        var ii = scrollingDown ? this.categories.length - 1 - i : i, category = this.categories[ii], component = this.categoryRefs["category-".concat(ii)];
                        if (component) {
                            var active = component.handleScroll(scrollTop);
                            if (!minTop || component.top < minTop) {
                                if (component.top > 0) minTop = component.top;
                            }
                            if (active && !activeCategory) activeCategory = category;
                        }
                    }
                    if (scrollTop < minTop) activeCategory = this.categories.filter(function(category) {
                        return !(category.anchor === false);
                    })[0];
                    else if (scrollTop + this.clientHeight >= this.scrollHeight) activeCategory = this.categories[this.categories.length - 1];
                }
                if (activeCategory) {
                    var anchors = this.anchors, _activeCategory = activeCategory, categoryName = _activeCategory.name;
                    if (anchors.state.selected != categoryName) anchors.setState({
                        selected: categoryName
                    });
                }
                this.scrollTop = scrollTop;
            }
        },
        {
            key: "handleSearch",
            value: function handleSearch(emojis) {
                this.SEARCH_CATEGORY.emojis = emojis;
                for(var i = 0, l = this.categories.length; i < l; i++){
                    var component = this.categoryRefs["category-".concat(i)];
                    if (component && component.props.name != "Search") {
                        var display = emojis ? "none" : "inherit";
                        component.updateDisplay(display);
                    }
                }
                this.forceUpdate();
                if (this.scroll) this.scroll.scrollTop = 0;
                this.handleScroll();
            }
        },
        {
            key: "handleAnchorClick",
            value: function handleAnchorClick(category, i) {
                var component = this.categoryRefs["category-".concat(i)], scroll = this.scroll, anchors = this.anchors, scrollToComponent = null;
                scrollToComponent = function scrollToComponent() {
                    if (component) {
                        var top = component.top;
                        if (category.first) top = 0;
                        else top += 1;
                        scroll.scrollTop = top;
                    }
                };
                if (this.SEARCH_CATEGORY.emojis) {
                    this.handleSearch(null);
                    this.search.clear();
                    requestAnimationFrame(scrollToComponent);
                } else scrollToComponent();
            }
        },
        {
            key: "handleSkinChange",
            value: function handleSkinChange(skin) {
                var newState = {
                    skin: skin
                }, onSkinChange = this.props.onSkinChange;
                this.setState(newState);
                _store["default"].update(newState);
                onSkinChange(skin);
            }
        },
        {
            key: "handleKeyDown",
            value: function handleKeyDown(e) {
                var handled = false;
                switch(e.keyCode){
                    case 13:
                        var emoji;
                        if (this.SEARCH_CATEGORY.emojis && this.SEARCH_CATEGORY.emojis.length && (emoji = (0, _utils.getSanitizedData)(this.SEARCH_CATEGORY.emojis[0], this.state.skin, this.props.set, this.props.data))) {
                            this.handleEmojiSelect(emoji);
                            handled = true;
                        }
                        break;
                }
                if (handled) e.preventDefault();
            }
        },
        {
            key: "updateCategoriesSize",
            value: function updateCategoriesSize() {
                for(var i = 0, l = this.categories.length; i < l; i++){
                    var component = this.categoryRefs["category-".concat(i)];
                    if (component) component.memoizeSize();
                }
                if (this.scroll) {
                    var target = this.scroll;
                    this.scrollHeight = target.scrollHeight;
                    this.clientHeight = target.clientHeight;
                }
            }
        },
        {
            key: "getCategories",
            value: function getCategories() {
                return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
            }
        },
        {
            key: "setAnchorsRef",
            value: function setAnchorsRef(c) {
                this.anchors = c;
            }
        },
        {
            key: "setSearchRef",
            value: function setSearchRef(c) {
                this.search = c;
            }
        },
        {
            key: "setPreviewRef",
            value: function setPreviewRef(c) {
                this.preview = c;
            }
        },
        {
            key: "setScrollRef",
            value: function setScrollRef(c) {
                this.scroll = c;
            }
        },
        {
            key: "setCategoryRef",
            value: function setCategoryRef(name, c) {
                if (!this.categoryRefs) this.categoryRefs = {};
                this.categoryRefs[name] = c;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this4 = this;
                var _this$props = this.props, perLine = _this$props.perLine, emojiSize = _this$props.emojiSize, set = _this$props.set, sheetSize = _this$props.sheetSize, sheetColumns = _this$props.sheetColumns, sheetRows = _this$props.sheetRows, style = _this$props.style, title = _this$props.title, emoji = _this$props.emoji, color = _this$props.color, _native = _this$props["native"], backgroundImageFn = _this$props.backgroundImageFn, emojisToShowFilter = _this$props.emojisToShowFilter, showPreview = _this$props.showPreview, showSkinTones = _this$props.showSkinTones, emojiTooltip = _this$props.emojiTooltip, useButton = _this$props.useButton, include = _this$props.include, exclude = _this$props.exclude, recent = _this$props.recent, autoFocus = _this$props.autoFocus, skinEmoji = _this$props.skinEmoji, notFound = _this$props.notFound, notFoundEmoji = _this$props.notFoundEmoji;
                var width = perLine * (emojiSize + 12) + 12 + 2 + (0, _utils.measureScrollbar)();
                var theme = this.getPreferredTheme();
                var skin = this.props.skin || this.state.skin || _store["default"].get("skin") || this.props.defaultSkin;
                return _react["default"].createElement("section", {
                    style: _objectSpread({
                        width: width
                    }, style),
                    className: "emoji-mart emoji-mart-".concat(theme),
                    "aria-label": title,
                    onKeyDown: this.handleKeyDown
                }, _react["default"].createElement("div", {
                    className: "emoji-mart-bar"
                }, _react["default"].createElement(_anchors["default"], {
                    ref: this.setAnchorsRef,
                    data: this.data,
                    i18n: this.i18n,
                    color: color,
                    categories: this.categories,
                    onAnchorClick: this.handleAnchorClick,
                    icons: this.icons
                })), _react["default"].createElement(_search["default"], {
                    ref: this.setSearchRef,
                    onSearch: this.handleSearch,
                    data: this.data,
                    i18n: this.i18n,
                    emojisToShowFilter: emojisToShowFilter,
                    include: include,
                    exclude: exclude,
                    custom: this.CUSTOM,
                    autoFocus: autoFocus
                }), _react["default"].createElement("div", {
                    ref: this.setScrollRef,
                    className: "emoji-mart-scroll",
                    onScroll: this.handleScroll
                }, this.getCategories().map(function(category, i) {
                    return _react["default"].createElement(_category["default"], {
                        ref: _this4.setCategoryRef.bind(_this4, "category-".concat(i)),
                        key: category.name,
                        id: category.id,
                        name: category.name,
                        emojis: category.emojis,
                        perLine: perLine,
                        "native": _native,
                        hasStickyPosition: _this4.hasStickyPosition,
                        data: _this4.data,
                        i18n: _this4.i18n,
                        recent: category.id == _this4.RECENT_CATEGORY.id ? recent : undefined,
                        custom: category.id == _this4.RECENT_CATEGORY.id ? _this4.CUSTOM : undefined,
                        emojiProps: {
                            "native": _native,
                            skin: skin,
                            size: emojiSize,
                            set: set,
                            sheetSize: sheetSize,
                            sheetColumns: sheetColumns,
                            sheetRows: sheetRows,
                            forceSize: _native,
                            tooltip: emojiTooltip,
                            backgroundImageFn: backgroundImageFn,
                            useButton: useButton,
                            onOver: _this4.handleEmojiOver,
                            onLeave: _this4.handleEmojiLeave,
                            onClick: _this4.handleEmojiClick
                        },
                        notFound: notFound,
                        notFoundEmoji: notFoundEmoji
                    });
                })), (showPreview || showSkinTones) && _react["default"].createElement("div", {
                    className: "emoji-mart-bar"
                }, _react["default"].createElement(_preview["default"], {
                    ref: this.setPreviewRef,
                    data: this.data,
                    title: title,
                    emoji: emoji,
                    showSkinTones: showSkinTones,
                    showPreview: showPreview,
                    emojiProps: {
                        "native": _native,
                        size: 38,
                        skin: skin,
                        set: set,
                        sheetSize: sheetSize,
                        sheetColumns: sheetColumns,
                        sheetRows: sheetRows,
                        backgroundImageFn: backgroundImageFn
                    },
                    skinsProps: {
                        skin: skin,
                        onChange: this.handleSkinChange,
                        skinEmoji: skinEmoji
                    },
                    i18n: this.i18n
                })));
            }
        }
    ]);
    return NimblePicker1;
}(_react["default"].PureComponent);
exports["default"] = NimblePicker;
NimblePicker.propTypes = _objectSpread({}, _sharedProps.PickerPropTypes, {
    data: _propTypes["default"].object.isRequired
});
NimblePicker.defaultProps = _objectSpread({}, _sharedDefaultProps.PickerDefaultProps);

},{"@babel/runtime/helpers/interopRequireWildcard":"9V6N5","@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/defineProperty":"4x6r7","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2","../../svgs":"3W5Zh","../../utils/store":"j9gfp","../../utils/frequently":"5kzNm","../../utils":"8M2VM","../../utils/data":"clYgf","../../utils/shared-props":"9jWYY","../anchors":"kdgEJ","../category":"dK1AC","../preview":"8P1KO","../search":"4ks7r","../../utils/shared-default-props":"8TBa4"}],"9V6N5":[function(require,module,exports) {
var _typeof = require("./typeof.js")["default"];
function _getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./typeof.js":"jgQjt"}],"3W5Zh":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.search = exports.categories = void 0;
var _react = _interopRequireDefault(require("react"));
var categories = {
    activity: function activity() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
        }));
    },
    custom: function custom() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("g", {
            transform: "translate(2.000000, 1.000000)"
        }, _react["default"].createElement("rect", {
            id: "Rectangle",
            x: "8",
            y: "0",
            width: "3",
            height: "21",
            rx: "1.5"
        }), _react["default"].createElement("rect", {
            id: "Rectangle",
            transform: "translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) ",
            x: "8.343",
            y: "0.049",
            width: "3",
            height: "21",
            rx: "1.5"
        }), _react["default"].createElement("rect", {
            id: "Rectangle",
            transform: "translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) ",
            x: "8.343",
            y: "0.049",
            width: "3",
            height: "21",
            rx: "1.5"
        })));
    },
    flags: function flags() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
        }));
    },
    foods: function foods() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
        }));
    },
    nature: function nature() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
        }), _react["default"].createElement("path", {
            d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
        }));
    },
    objects: function objects() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
        }), _react["default"].createElement("path", {
            d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
        }));
    },
    people: function people() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
        }), _react["default"].createElement("path", {
            d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
        }));
    },
    places: function places() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
        }), _react["default"].createElement("path", {
            d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
        }));
    },
    recent: function recent() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
        }), _react["default"].createElement("path", {
            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
        }));
    },
    symbols: function symbols() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24"
        }, _react["default"].createElement("path", {
            d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
        }));
    }
};
exports.categories = categories;
var search = {
    search: function search() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "13",
            viewBox: "0 0 20 20",
            opacity: "0.5"
        }, _react["default"].createElement("path", {
            d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        }));
    },
    "delete": function _delete() {
        return _react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "13",
            viewBox: "0 0 20 20",
            opacity: "0.5"
        }, _react["default"].createElement("path", {
            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
        }));
    }
};
exports.search = search;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","react":"21dqq"}],"5kzNm":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _store = _interopRequireDefault(require("./store"));
var DEFAULTS = [
    "+1",
    "grinning",
    "kissing_heart",
    "heart_eyes",
    "laughing",
    "stuck_out_tongue_winking_eye",
    "sweat_smile",
    "joy",
    "scream",
    "disappointed",
    "unamused",
    "weary",
    "sob",
    "sunglasses",
    "heart",
    "poop"
];
var frequently, initialized;
var defaults = {};
function init() {
    initialized = true;
    frequently = _store["default"].get("frequently");
}
function add(emoji) {
    if (!initialized) init();
    var id = emoji.id;
    frequently || (frequently = defaults);
    frequently[id] || (frequently[id] = 0);
    frequently[id] += 1;
    _store["default"].set("last", id);
    _store["default"].set("frequently", frequently);
}
function get(perLine) {
    if (!initialized) init();
    if (!frequently) {
        defaults = {};
        var result = [];
        for(var i = 0; i < perLine; i++){
            defaults[DEFAULTS[i]] = perLine - i;
            result.push(DEFAULTS[i]);
        }
        return result;
    }
    var quantity = perLine * 4;
    var frequentlyKeys = [];
    for(var key in frequently)if (frequently.hasOwnProperty(key)) frequentlyKeys.push(key);
    var sorted = frequentlyKeys.sort(function(a, b) {
        return frequently[a] - frequently[b];
    }).reverse();
    var sliced = sorted.slice(0, quantity);
    var last = _store["default"].get("last");
    if (last && sliced.indexOf(last) == -1) {
        sliced.pop();
        sliced.push(last);
    }
    return sliced;
}
var _default = {
    add: add,
    get: get
};
exports["default"] = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","./store":"j9gfp"}],"kdgEJ":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var Anchors = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inherits2["default"])(Anchors1, _React$PureComponent);
    function Anchors1(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Anchors1);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Anchors1).call(this, props));
        var defaultCategory = props.categories.filter(function(category) {
            return category.first;
        })[0];
        _this.state = {
            selected: defaultCategory.name
        };
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
    }
    (0, _createClass2["default"])(Anchors1, [
        {
            key: "handleClick",
            value: function handleClick(e) {
                var index = e.currentTarget.getAttribute("data-index");
                var _this$props = this.props, categories = _this$props.categories, onAnchorClick = _this$props.onAnchorClick;
                onAnchorClick(categories[index], index);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props2 = this.props, categories = _this$props2.categories, color = _this$props2.color, i18n = _this$props2.i18n, icons = _this$props2.icons, selected = this.state.selected;
                return _react["default"].createElement("nav", {
                    className: "emoji-mart-anchors",
                    "aria-label": i18n.categorieslabel
                }, categories.map(function(category, i) {
                    var id = category.id, name = category.name, anchor = category.anchor, isSelected = name == selected;
                    if (anchor === false) return null;
                    var iconId = id.startsWith("custom-") ? "custom" : id;
                    return _react["default"].createElement("button", {
                        key: id,
                        "aria-label": i18n.categories[iconId],
                        title: i18n.categories[iconId],
                        "data-index": i,
                        type: "button",
                        onClick: _this2.handleClick,
                        className: "emoji-mart-anchor ".concat(isSelected ? "emoji-mart-anchor-selected" : ""),
                        style: {
                            color: isSelected ? color : null
                        }
                    }, _react["default"].createElement("div", {
                        className: "emoji-mart-anchor-icon"
                    }, icons.categories[iconId]()), _react["default"].createElement("span", {
                        className: "emoji-mart-anchor-bar",
                        style: {
                            backgroundColor: color
                        }
                    }));
                }));
            }
        }
    ]);
    return Anchors1;
}(_react["default"].PureComponent);
exports["default"] = Anchors;
Anchors.propTypes = {
    categories: _propTypes["default"].array,
    onAnchorClick: _propTypes["default"].func,
    icons: _propTypes["default"].object
};
Anchors.defaultProps = {
    categories: [],
    onAnchorClick: function onAnchorClick() {},
    icons: {}
};

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2"}],"dK1AC":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _frequently = _interopRequireDefault(require("../utils/frequently"));
var _utils = require("../utils");
var _nimbleEmoji = _interopRequireDefault(require("./emoji/nimble-emoji"));
var _notFound = _interopRequireDefault(require("./not-found"));
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2["default"])(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var Category = /*#__PURE__*/ function(_React$Component) {
    (0, _inherits2["default"])(Category1, _React$Component);
    function Category1(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Category1);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Category1).call(this, props));
        _this.data = props.data;
        _this.setContainerRef = _this.setContainerRef.bind((0, _assertThisInitialized2["default"])(_this));
        _this.setLabelRef = _this.setLabelRef.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
    }
    (0, _createClass2["default"])(Category1, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.margin = 0;
                this.minMargin = 0;
                this.memoizeSize();
            }
        },
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps, nextState) {
                var _this$props = this.props, name = _this$props.name, perLine = _this$props.perLine, _native = _this$props["native"], hasStickyPosition = _this$props.hasStickyPosition, emojis = _this$props.emojis, emojiProps = _this$props.emojiProps, skin = emojiProps.skin, size = emojiProps.size, set = emojiProps.set, nextPerLine = nextProps.perLine, nextNative = nextProps["native"], nextHasStickyPosition = nextProps.hasStickyPosition, nextEmojis = nextProps.emojis, nextEmojiProps = nextProps.emojiProps, nextSkin = nextEmojiProps.skin, nextSize = nextEmojiProps.size, nextSet = nextEmojiProps.set, shouldUpdate = false;
                if (name == "Recent" && perLine != nextPerLine) shouldUpdate = true;
                if (name == "Search") shouldUpdate = !(emojis == nextEmojis);
                if (skin != nextSkin || size != nextSize || _native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) shouldUpdate = true;
                return shouldUpdate;
            }
        },
        {
            key: "memoizeSize",
            value: function memoizeSize() {
                if (!this.container) {
                    // probably this is a test environment, e.g. jest
                    this.top = 0;
                    this.maxMargin = 0;
                    return;
                }
                var parent = this.container.parentElement;
                var _this$container$getBo = this.container.getBoundingClientRect(), top = _this$container$getBo.top, height = _this$container$getBo.height;
                var _parent$getBoundingCl = parent.getBoundingClientRect(), parentTop = _parent$getBoundingCl.top;
                var _this$label$getBoundi = this.label.getBoundingClientRect(), labelHeight = _this$label$getBoundi.height;
                this.top = top - parentTop + parent.scrollTop;
                if (height == 0) this.maxMargin = 0;
                else this.maxMargin = height - labelHeight;
            }
        },
        {
            key: "handleScroll",
            value: function handleScroll(scrollTop) {
                var margin = scrollTop - this.top;
                margin = margin < this.minMargin ? this.minMargin : margin;
                margin = margin > this.maxMargin ? this.maxMargin : margin;
                if (margin == this.margin) return;
                if (!this.props.hasStickyPosition) this.label.style.top = "".concat(margin, "px");
                this.margin = margin;
                return true;
            }
        },
        {
            key: "getEmojis",
            value: function getEmojis() {
                var _this2 = this;
                var _this$props2 = this.props, name = _this$props2.name, emojis = _this$props2.emojis, recent = _this$props2.recent, perLine = _this$props2.perLine;
                if (name == "Recent") {
                    var custom = this.props.custom;
                    var frequentlyUsed = recent || _frequently["default"].get(perLine);
                    if (frequentlyUsed.length) emojis = frequentlyUsed.map(function(id) {
                        var emoji = custom.filter(function(e) {
                            return e.id === id;
                        })[0];
                        if (emoji) return emoji;
                        return id;
                    }).filter(function(id) {
                        return !!(0, _utils.getData)(id, null, null, _this2.data);
                    });
                    if (emojis.length === 0 && frequentlyUsed.length > 0) return null;
                }
                if (emojis) emojis = emojis.slice(0);
                return emojis;
            }
        },
        {
            key: "updateDisplay",
            value: function updateDisplay(display) {
                var emojis = this.getEmojis();
                if (!emojis || !this.container) return;
                this.container.style.display = display;
            }
        },
        {
            key: "setContainerRef",
            value: function setContainerRef(c) {
                this.container = c;
            }
        },
        {
            key: "setLabelRef",
            value: function setLabelRef(c) {
                this.label = c;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var _this$props3 = this.props, id = _this$props3.id, name = _this$props3.name, hasStickyPosition = _this$props3.hasStickyPosition, emojiProps = _this$props3.emojiProps, i18n = _this$props3.i18n, notFound = _this$props3.notFound, notFoundEmoji = _this$props3.notFoundEmoji, emojis = this.getEmojis(), labelStyles = {}, labelSpanStyles = {}, containerStyles = {};
                if (!emojis) containerStyles = {
                    display: "none"
                };
                if (!hasStickyPosition) {
                    labelStyles = {
                        height: 28
                    };
                    labelSpanStyles = {
                        position: "absolute"
                    };
                }
                var label = i18n.categories[id] || name;
                return _react["default"].createElement("section", {
                    ref: this.setContainerRef,
                    className: "emoji-mart-category",
                    "aria-label": label,
                    style: containerStyles
                }, _react["default"].createElement("div", {
                    style: labelStyles,
                    "data-name": name,
                    className: "emoji-mart-category-label"
                }, _react["default"].createElement("span", {
                    style: labelSpanStyles,
                    ref: this.setLabelRef,
                    "aria-hidden": true
                }, label)), _react["default"].createElement("ul", {
                    className: "emoji-mart-category-list"
                }, emojis && emojis.map(function(emoji) {
                    return _react["default"].createElement("li", {
                        key: emoji.short_names && emoji.short_names.join("_") || emoji
                    }, (0, _nimbleEmoji["default"])(_objectSpread({
                        emoji: emoji,
                        data: _this3.data
                    }, emojiProps)));
                })), emojis && !emojis.length && _react["default"].createElement(_notFound["default"], {
                    i18n: i18n,
                    notFound: notFound,
                    notFoundEmoji: notFoundEmoji,
                    data: this.data,
                    emojiProps: emojiProps
                }));
            }
        }
    ]);
    return Category1;
}(_react["default"].Component);
exports["default"] = Category;
Category.propTypes = {
    emojis: _propTypes["default"].array,
    hasStickyPosition: _propTypes["default"].bool,
    name: _propTypes["default"].string.isRequired,
    "native": _propTypes["default"].bool.isRequired,
    perLine: _propTypes["default"].number.isRequired,
    emojiProps: _propTypes["default"].object.isRequired,
    recent: _propTypes["default"].arrayOf(_propTypes["default"].string),
    notFound: _propTypes["default"].func,
    notFoundEmoji: _propTypes["default"].string.isRequired
};
Category.defaultProps = {
    emojis: [],
    hasStickyPosition: true
};

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/defineProperty":"4x6r7","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2","../utils/frequently":"5kzNm","../utils":"8M2VM","./emoji/nimble-emoji":"gcj6T","./not-found":"bIWAd"}],"bIWAd":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _nimbleEmoji = _interopRequireDefault(require("./emoji/nimble-emoji"));
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2["default"])(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var NotFound = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inherits2["default"])(NotFound1, _React$PureComponent);
    function NotFound1() {
        (0, _classCallCheck2["default"])(this, NotFound1);
        return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NotFound1).apply(this, arguments));
    }
    (0, _createClass2["default"])(NotFound1, [
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, data = _this$props.data, emojiProps = _this$props.emojiProps, i18n = _this$props.i18n, notFound = _this$props.notFound, notFoundEmoji = _this$props.notFoundEmoji;
                var component = notFound && notFound() || _react["default"].createElement("div", {
                    className: "emoji-mart-no-results"
                }, (0, _nimbleEmoji["default"])(_objectSpread({
                    data: data
                }, emojiProps, {
                    size: 38,
                    emoji: notFoundEmoji,
                    onOver: null,
                    onLeave: null,
                    onClick: null
                })), _react["default"].createElement("div", {
                    className: "emoji-mart-no-results-label"
                }, i18n.notfound));
                return component;
            }
        }
    ]);
    return NotFound1;
}(_react["default"].PureComponent);
exports["default"] = NotFound;
NotFound.propTypes = {
    notFound: _propTypes["default"].func.isRequired,
    emojiProps: _propTypes["default"].object.isRequired
};

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/defineProperty":"4x6r7","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2","./emoji/nimble-emoji":"gcj6T"}],"8P1KO":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../utils");
var _nimbleEmoji = _interopRequireDefault(require("./emoji/nimble-emoji"));
var _skinsEmoji = _interopRequireDefault(require("./skins-emoji"));
var _skinsDot = _interopRequireDefault(require("./skins-dot"));
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2["default"])(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var Preview = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inherits2["default"])(Preview1, _React$PureComponent);
    function Preview1(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Preview1);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Preview1).call(this, props));
        _this.data = props.data;
        _this.state = {
            emoji: null
        };
        return _this;
    }
    (0, _createClass2["default"])(Preview1, [
        {
            key: "render",
            value: function render() {
                var emoji = this.state.emoji, _this$props = this.props, emojiProps = _this$props.emojiProps, skinsProps = _this$props.skinsProps, showSkinTones = _this$props.showSkinTones, title = _this$props.title, idleEmoji = _this$props.emoji, i18n = _this$props.i18n, showPreview = _this$props.showPreview;
                if (emoji && showPreview) {
                    var emojiData = (0, _utils.getData)(emoji, null, null, this.data), _emojiData$emoticons = emojiData.emoticons, emoticons = _emojiData$emoticons === void 0 ? [] : _emojiData$emoticons, knownEmoticons = [], listedEmoticons = [];
                    emoticons.forEach(function(emoticon) {
                        if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) return;
                        knownEmoticons.push(emoticon.toLowerCase());
                        listedEmoticons.push(emoticon);
                    });
                    return _react["default"].createElement("div", {
                        className: "emoji-mart-preview"
                    }, _react["default"].createElement("div", {
                        className: "emoji-mart-preview-emoji",
                        "aria-hidden": "true"
                    }, (0, _nimbleEmoji["default"])(_objectSpread({
                        key: emoji.id,
                        emoji: emoji,
                        data: this.data
                    }, emojiProps))), _react["default"].createElement("div", {
                        className: "emoji-mart-preview-data",
                        "aria-hidden": "true"
                    }, _react["default"].createElement("div", {
                        className: "emoji-mart-preview-name"
                    }, emoji.name), _react["default"].createElement("div", {
                        className: "emoji-mart-preview-shortnames"
                    }, emojiData.short_names.map(function(short_name) {
                        return _react["default"].createElement("span", {
                            key: short_name,
                            className: "emoji-mart-preview-shortname"
                        }, ":", short_name, ":");
                    })), _react["default"].createElement("div", {
                        className: "emoji-mart-preview-emoticons"
                    }, listedEmoticons.map(function(emoticon) {
                        return _react["default"].createElement("span", {
                            key: emoticon,
                            className: "emoji-mart-preview-emoticon"
                        }, emoticon);
                    }))));
                } else return _react["default"].createElement("div", {
                    className: "emoji-mart-preview"
                }, _react["default"].createElement("div", {
                    className: "emoji-mart-preview-emoji",
                    "aria-hidden": "true"
                }, idleEmoji && idleEmoji.length && (0, _nimbleEmoji["default"])(_objectSpread({
                    emoji: idleEmoji,
                    data: this.data
                }, emojiProps))), _react["default"].createElement("div", {
                    className: "emoji-mart-preview-data",
                    "aria-hidden": "true"
                }, _react["default"].createElement("span", {
                    className: "emoji-mart-title-label"
                }, title)), showSkinTones && _react["default"].createElement("div", {
                    className: "emoji-mart-preview-skins".concat(skinsProps.skinEmoji ? " custom" : "")
                }, skinsProps.skinEmoji ? _react["default"].createElement(_skinsEmoji["default"], {
                    skin: skinsProps.skin,
                    emojiProps: emojiProps,
                    data: this.data,
                    skinEmoji: skinsProps.skinEmoji,
                    i18n: i18n,
                    onChange: skinsProps.onChange
                }) : _react["default"].createElement(_skinsDot["default"], {
                    skin: skinsProps.skin,
                    i18n: i18n,
                    onChange: skinsProps.onChange
                })));
            }
        }
    ]);
    return Preview1;
}(_react["default"].PureComponent);
exports["default"] = Preview;
Preview.propTypes = {
    showSkinTones: _propTypes["default"].bool,
    title: _propTypes["default"].string.isRequired,
    emoji: _propTypes["default"].string.isRequired,
    emojiProps: _propTypes["default"].object.isRequired,
    skinsProps: _propTypes["default"].object.isRequired
};
Preview.defaultProps = {
    showSkinTones: true,
    onChange: function onChange() {}
};

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/defineProperty":"4x6r7","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2","../utils":"8M2VM","./emoji/nimble-emoji":"gcj6T","./skins-emoji":"jUWsh","./skins-dot":"fm5yy"}],"jUWsh":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _nimbleEmoji = _interopRequireDefault(require("./emoji/nimble-emoji"));
var _skins = _interopRequireDefault(require("./skins"));
var SkinsEmoji = /*#__PURE__*/ function(_Skins) {
    (0, _inherits2["default"])(SkinsEmoji1, _Skins);
    function SkinsEmoji1(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, SkinsEmoji1);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SkinsEmoji1).call(this, props));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
    }
    (0, _createClass2["default"])(SkinsEmoji1, [
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, skin = _this$props.skin, emojiProps = _this$props.emojiProps, data = _this$props.data, skinEmoji = _this$props.skinEmoji, i18n = _this$props.i18n;
                var opened = this.state.opened;
                var skinToneNodes = [];
                for(var skinTone = 1; skinTone <= 6; skinTone++){
                    var selected = skinTone === skin;
                    skinToneNodes.push(_react["default"].createElement("span", {
                        key: "skin-tone-".concat(skinTone),
                        className: "emoji-mart-skin-swatch custom".concat(selected ? " selected" : "")
                    }, _react["default"].createElement("span", {
                        onClick: this.handleClick,
                        "data-skin": skinTone,
                        className: "emoji-mart-skin-tone-".concat(skinTone)
                    }, (0, _nimbleEmoji["default"])({
                        emoji: skinEmoji,
                        data: data,
                        skin: skinTone,
                        backgroundImageFn: emojiProps.backgroundImageFn,
                        "native": emojiProps["native"],
                        set: emojiProps.set,
                        sheetSize: emojiProps.sheetSize,
                        size: 23
                    }))));
                }
                return _react["default"].createElement("div", {
                    className: "emoji-mart-skin-swatches custom".concat(opened ? " opened" : "")
                }, _react["default"].createElement("div", {
                    className: "emoji-mart-skin-text".concat(opened ? " opened" : "")
                }, i18n.skintext), skinToneNodes);
            }
        }
    ]);
    return SkinsEmoji1;
}(_skins["default"]);
exports["default"] = SkinsEmoji;
SkinsEmoji.propTypes = {
    onChange: _propTypes["default"].func,
    skin: _propTypes["default"].number.isRequired,
    emojiProps: _propTypes["default"].object.isRequired,
    skinTone: _propTypes["default"].number,
    skinEmoji: _propTypes["default"].string.isRequired,
    i18n: _propTypes["default"].object
};
SkinsEmoji.defaultProps = {
    onChange: function onChange() {},
    skinTone: null
};

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2","./emoji/nimble-emoji":"gcj6T","./skins":"iuPgN"}],"iuPgN":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var Skins = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inherits2["default"])(Skins1, _React$PureComponent);
    function Skins1(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Skins1);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Skins1).call(this, props));
        _this.state = {
            opened: false
        };
        return _this;
    }
    (0, _createClass2["default"])(Skins1, [
        {
            key: "handleClick",
            value: function handleClick(e) {
                var skin = parseInt(e.currentTarget.getAttribute("data-skin"));
                var onChange = this.props.onChange;
                if (!this.state.opened) this.setState({
                    opened: true
                });
                else {
                    this.setState({
                        opened: false
                    });
                    if (skin != this.props.skin) onChange(skin);
                }
            }
        },
        {
            key: "render",
            value: function render() {
                return null;
            }
        }
    ]);
    return Skins1;
}(_react["default"].PureComponent);
exports["default"] = Skins;
Skins.propTypes = {
    onChange: _propTypes["default"].func,
    skin: _propTypes["default"].number.isRequired
};
Skins.defaultProps = {
    onChange: function onChange() {}
};

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2"}],"fm5yy":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _skins = _interopRequireDefault(require("./skins"));
var SkinsDot = /*#__PURE__*/ function(_Skins) {
    (0, _inherits2["default"])(SkinsDot1, _Skins);
    function SkinsDot1(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, SkinsDot1);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SkinsDot1).call(this, props));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
    }
    (0, _createClass2["default"])(SkinsDot1, [
        {
            key: "handleKeyDown",
            value: function handleKeyDown(event) {
                // if either enter or space is pressed, then execute
                if (event.keyCode === 13 || event.keyCode === 32) {
                    event.preventDefault();
                    this.handleClick(event);
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, skin = _this$props.skin, i18n = _this$props.i18n;
                var opened = this.state.opened;
                var skinToneNodes = [];
                for(var skinTone = 1; skinTone <= 6; skinTone++){
                    var selected = skinTone === skin;
                    var visible = opened || selected;
                    skinToneNodes.push(_react["default"].createElement("span", (0, _extends2["default"])({
                        key: "skin-tone-".concat(skinTone),
                        className: "emoji-mart-skin-swatch".concat(selected ? " selected" : ""),
                        "aria-label": i18n.skintones[skinTone],
                        "aria-hidden": !visible
                    }, opened ? {
                        role: "menuitem"
                    } : {}), _react["default"].createElement("span", (0, _extends2["default"])({
                        onClick: this.handleClick,
                        onKeyDown: this.handleKeyDown,
                        role: "button"
                    }, selected ? {
                        "aria-haspopup": true,
                        "aria-expanded": !!opened
                    } : {}, opened ? {
                        "aria-pressed": !!selected
                    } : {}, {
                        tabIndex: visible ? "0" : "",
                        "aria-label": i18n.skintones[skinTone],
                        title: i18n.skintones[skinTone],
                        "data-skin": skinTone,
                        className: "emoji-mart-skin emoji-mart-skin-tone-".concat(skinTone)
                    }))));
                }
                return _react["default"].createElement("section", {
                    className: "emoji-mart-skin-swatches".concat(opened ? " opened" : ""),
                    "aria-label": i18n.skintext
                }, _react["default"].createElement("div", opened ? {
                    role: "menubar"
                } : {}, skinToneNodes));
            }
        }
    ]);
    return SkinsDot1;
}(_skins["default"]);
exports["default"] = SkinsDot;
SkinsDot.propTypes = {
    onChange: _propTypes["default"].func,
    skin: _propTypes["default"].number.isRequired,
    i18n: _propTypes["default"].object
};
SkinsDot.defaultProps = {
    onChange: function onChange() {}
};

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/extends":"vw3vn","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2","./skins":"iuPgN"}],"4ks7r":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _svgs = require("../svgs");
var _nimbleEmojiIndex = _interopRequireDefault(require("../utils/emoji-index/nimble-emoji-index"));
var _index = require("../utils/index");
var id = 0;
var Search = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inherits2["default"])(Search1, _React$PureComponent);
    function Search1(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Search1);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Search1).call(this, props));
        _this.state = {
            icon: _svgs.search.search,
            isSearching: false,
            id: ++id
        };
        _this.data = props.data;
        _this.emojiIndex = new _nimbleEmojiIndex["default"](_this.data);
        _this.setRef = _this.setRef.bind((0, _assertThisInitialized2["default"])(_this));
        _this.clear = _this.clear.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyUp = _this.handleKeyUp.bind((0, _assertThisInitialized2["default"])(_this)); // throttle keyboard input so that typing isn't delayed
        _this.handleChange = (0, _index.throttleIdleTask)(_this.handleChange.bind((0, _assertThisInitialized2["default"])(_this)));
        return _this;
    }
    (0, _createClass2["default"])(Search1, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                // in some cases (e.g. preact) the input may already be pre-populated
                // this.input is undefined in Jest tests
                if (this.input && this.input.value) this.search(this.input.value);
            }
        },
        {
            key: "search",
            value: function search(value) {
                if (value == "") this.setState({
                    icon: _svgs.search.search,
                    isSearching: false
                });
                else this.setState({
                    icon: _svgs.search["delete"],
                    isSearching: true
                });
                this.props.onSearch(this.emojiIndex.search(value, {
                    emojisToShowFilter: this.props.emojisToShowFilter,
                    maxResults: this.props.maxResults,
                    include: this.props.include,
                    exclude: this.props.exclude,
                    custom: this.props.custom
                }));
            }
        },
        {
            key: "clear",
            value: function clear() {
                if (this.input.value == "") return;
                this.input.value = "";
                this.input.focus();
                this.search("");
            }
        },
        {
            key: "handleChange",
            value: function handleChange() {
                if (this.input) this.search(this.input.value);
            }
        },
        {
            key: "handleKeyUp",
            value: function handleKeyUp(e) {
                if (e.keyCode === 13) this.clear();
            }
        },
        {
            key: "setRef",
            value: function setRef(c) {
                this.input = c;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, i18n = _this$props.i18n, autoFocus = _this$props.autoFocus;
                var _this$state = this.state, icon = _this$state.icon, isSearching = _this$state.isSearching, id1 = _this$state.id;
                var inputId = "emoji-mart-search-".concat(id1);
                return _react["default"].createElement("section", {
                    className: "emoji-mart-search",
                    "aria-label": i18n.search
                }, _react["default"].createElement("input", {
                    id: inputId,
                    ref: this.setRef,
                    type: "search",
                    onChange: this.handleChange,
                    placeholder: i18n.search,
                    autoFocus: autoFocus
                }), _react["default"].createElement("label", {
                    className: "emoji-mart-sr-only",
                    htmlFor: inputId
                }, i18n.search), _react["default"].createElement("button", {
                    className: "emoji-mart-search-icon",
                    onClick: this.clear,
                    onKeyUp: this.handleKeyUp,
                    "aria-label": i18n.clear,
                    disabled: !isSearching
                }, icon()));
            }
        }
    ]);
    return Search1;
}(_react["default"].PureComponent);
exports["default"] = Search;
Search.propTypes = {
    onSearch: _propTypes["default"].func,
    maxResults: _propTypes["default"].number,
    emojisToShowFilter: _propTypes["default"].func,
    autoFocus: _propTypes["default"].bool
};
Search.defaultProps = {
    onSearch: function onSearch() {},
    maxResults: 75,
    emojisToShowFilter: null,
    autoFocus: false
};

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","react":"21dqq","prop-types":"7wKI2","../svgs":"3W5Zh","../utils/emoji-index/nimble-emoji-index":"4ey5c","../utils/index":"8M2VM"}]},["1xC6H","3TdGZ"], null, "parcelRequire10c2")

//# sourceMappingURL=nimble-picker.feea4859.js.map
