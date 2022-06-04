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

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"evbBj":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6907b897ad7caa2d";
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

},{}],"gcj6T":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../utils");
var _data = require("../../utils/data");
var _sharedProps = require("../../utils/shared-props");
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
var _getData = function _getData(props) {
    var emoji = props.emoji, skin = props.skin, set = props.set, data = props.data;
    return (0, _utils.getData)(emoji, skin, set, data);
};
var _getPosition = function _getPosition(props) {
    var _getData2 = _getData(props), sheet_x = _getData2.sheet_x, sheet_y = _getData2.sheet_y, multiplyX = 100 / (props.sheetColumns - 1), multiplyY = 100 / (props.sheetRows - 1);
    return "".concat(multiplyX * sheet_x, "% ").concat(multiplyY * sheet_y, "%");
};
var _getSanitizedData = function _getSanitizedData(props) {
    var emoji = props.emoji, skin = props.skin, set = props.set, data = props.data;
    return (0, _utils.getSanitizedData)(emoji, skin, set, data);
};
var _handleClick = function _handleClick(e, props) {
    if (!props.onClick) return;
    var onClick = props.onClick, emoji = _getSanitizedData(props);
    onClick(emoji, e);
};
var _handleOver = function _handleOver(e, props) {
    if (!props.onOver) return;
    var onOver = props.onOver, emoji = _getSanitizedData(props);
    onOver(emoji, e);
};
var _handleLeave = function _handleLeave(e, props) {
    if (!props.onLeave) return;
    var onLeave = props.onLeave, emoji = _getSanitizedData(props);
    onLeave(emoji, e);
};
var _isNumeric = function _isNumeric(value) {
    return !isNaN(value - parseFloat(value));
};
var _convertStyleToCSS = function _convertStyleToCSS(style) {
    var div = document.createElement("div");
    for(var key in style){
        var value = style[key];
        if (_isNumeric(value)) value += "px";
        div.style[key] = value;
    }
    return div.getAttribute("style");
};
var NimbleEmoji = function NimbleEmoji1(props) {
    if (props.data.compressed) (0, _data.uncompress)(props.data);
    for(var k in NimbleEmoji1.defaultProps)if (props[k] == undefined && NimbleEmoji1.defaultProps[k] != undefined) props[k] = NimbleEmoji1.defaultProps[k];
    var data = _getData(props);
    if (!data) {
        if (props.fallback) return props.fallback(null, props);
        else return null;
    }
    var unified = data.unified, custom = data.custom, short_names = data.short_names, imageUrl = data.imageUrl, style = {}, children = props.children, className = "emoji-mart-emoji", nativeEmoji = unified && (0, _utils.unifiedToNative)(unified), label = [
        nativeEmoji
    ].concat(short_names).filter(Boolean).join(", "), title = null;
    if (!unified && !custom) {
        if (props.fallback) return props.fallback(data, props);
        else return null;
    }
    if (props.tooltip) title = short_names[0];
    if (props["native"] && unified) {
        className += " emoji-mart-emoji-native";
        style = {
            fontSize: props.size
        };
        children = nativeEmoji;
        if (props.forceSize) {
            style.display = "inline-block";
            style.width = props.size;
            style.height = props.size;
            style.wordBreak = "keep-all";
        }
    } else if (custom) {
        className += " emoji-mart-emoji-custom";
        style = {
            width: props.size,
            height: props.size,
            display: "inline-block"
        };
        if (data.spriteUrl) style = _objectSpread({}, style, {
            backgroundImage: "url(".concat(data.spriteUrl, ")"),
            backgroundSize: "".concat(100 * props.sheetColumns, "% ").concat(100 * props.sheetRows, "%"),
            backgroundPosition: _getPosition(props)
        });
        else style = _objectSpread({}, style, {
            backgroundImage: "url(".concat(imageUrl, ")"),
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        });
    } else {
        var setHasEmoji = data["has_img_".concat(props.set)] == undefined || data["has_img_".concat(props.set)];
        if (!setHasEmoji) {
            if (props.fallback) return props.fallback(data, props);
            else return null;
        } else style = {
            width: props.size,
            height: props.size,
            display: "inline-block",
            backgroundImage: "url(".concat(props.backgroundImageFn(props.set, props.sheetSize), ")"),
            backgroundSize: "".concat(100 * props.sheetColumns, "% ").concat(100 * props.sheetRows, "%"),
            backgroundPosition: _getPosition(props)
        };
    }
    var Tag = {
        name: "span",
        props: {}
    };
    if (props.onClick && props.useButton) {
        Tag.name = "button";
        Tag.props = {
            type: "button"
        };
    }
    if (props.html) {
        style = _convertStyleToCSS(style);
        return "<".concat(Tag.name, " style='").concat(style, "' aria-label='").concat(label, "' ").concat(title ? "title='".concat(title, "'") : "", " class='").concat(className, "'>").concat(children || "", "</").concat(Tag.name, ">");
    } else return _react["default"].createElement(Tag.name, (0, _extends2["default"])({
        onClick: function onClick(e) {
            return _handleClick(e, props);
        },
        onMouseEnter: function onMouseEnter(e) {
            return _handleOver(e, props);
        },
        onMouseLeave: function onMouseLeave(e) {
            return _handleLeave(e, props);
        },
        "aria-label": label,
        title: title,
        className: className
    }, Tag.props), _react["default"].createElement("span", {
        style: style
    }, children));
};
NimbleEmoji.propTypes = _objectSpread({}, _sharedProps.EmojiPropTypes, {
    data: _propTypes["default"].object.isRequired
});
NimbleEmoji.defaultProps = _sharedDefaultProps.EmojiDefaultProps;
var _default = NimbleEmoji;
exports["default"] = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/extends":"vw3vn","@babel/runtime/helpers/defineProperty":"4x6r7","react":"21dqq","prop-types":"7wKI2","../../utils":"8M2VM","../../utils/data":"clYgf","../../utils/shared-props":"9jWYY","../../utils/shared-default-props":"8TBa4"}],"9jWYY":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PickerPropTypes = exports.EmojiPropTypes = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var EmojiPropTypes = {
    data: _propTypes["default"].object.isRequired,
    onOver: _propTypes["default"].func,
    onLeave: _propTypes["default"].func,
    onClick: _propTypes["default"].func,
    fallback: _propTypes["default"].func,
    backgroundImageFn: _propTypes["default"].func,
    "native": _propTypes["default"].bool,
    forceSize: _propTypes["default"].bool,
    tooltip: _propTypes["default"].bool,
    useButton: _propTypes["default"].bool,
    skin: _propTypes["default"].oneOf([
        1,
        2,
        3,
        4,
        5,
        6
    ]),
    sheetSize: _propTypes["default"].oneOf([
        16,
        20,
        32,
        64
    ]),
    sheetColumns: _propTypes["default"].number,
    sheetRows: _propTypes["default"].number,
    set: _propTypes["default"].oneOf([
        "apple",
        "google",
        "twitter",
        "facebook"
    ]),
    size: _propTypes["default"].number.isRequired,
    emoji: _propTypes["default"].oneOfType([
        _propTypes["default"].string,
        _propTypes["default"].object
    ]).isRequired
};
exports.EmojiPropTypes = EmojiPropTypes;
var PickerPropTypes = {
    onClick: _propTypes["default"].func,
    onSelect: _propTypes["default"].func,
    onSkinChange: _propTypes["default"].func,
    perLine: _propTypes["default"].number,
    emojiSize: _propTypes["default"].number,
    i18n: _propTypes["default"].object,
    style: _propTypes["default"].object,
    title: _propTypes["default"].string,
    emoji: _propTypes["default"].string,
    color: _propTypes["default"].string,
    set: EmojiPropTypes.set,
    skin: EmojiPropTypes.skin,
    "native": _propTypes["default"].bool,
    backgroundImageFn: EmojiPropTypes.backgroundImageFn,
    sheetSize: EmojiPropTypes.sheetSize,
    emojisToShowFilter: _propTypes["default"].func,
    showPreview: _propTypes["default"].bool,
    showSkinTones: _propTypes["default"].bool,
    emojiTooltip: EmojiPropTypes.tooltip,
    useButton: EmojiPropTypes.useButton,
    theme: _propTypes["default"].oneOf([
        "auto",
        "light",
        "dark"
    ]),
    include: _propTypes["default"].arrayOf(_propTypes["default"].string),
    exclude: _propTypes["default"].arrayOf(_propTypes["default"].string),
    recent: _propTypes["default"].arrayOf(_propTypes["default"].string),
    autoFocus: _propTypes["default"].bool,
    enableFrequentEmojiSort: _propTypes["default"].bool,
    custom: _propTypes["default"].arrayOf(_propTypes["default"].shape({
        name: _propTypes["default"].string.isRequired,
        short_names: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
        emoticons: _propTypes["default"].arrayOf(_propTypes["default"].string),
        keywords: _propTypes["default"].arrayOf(_propTypes["default"].string),
        imageUrl: _propTypes["default"].string,
        spriteUrl: _propTypes["default"].string,
        sheet_x: _propTypes["default"].number,
        sheet_y: _propTypes["default"].number,
        size: _propTypes["default"].number,
        sheetColumns: _propTypes["default"].number,
        sheetRows: _propTypes["default"].number
    })),
    skinEmoji: _propTypes["default"].string,
    notFound: _propTypes["default"].func,
    notFoundEmoji: _propTypes["default"].string,
    icons: _propTypes["default"].object
};
exports.PickerPropTypes = PickerPropTypes;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","prop-types":"7wKI2"}],"8TBa4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmojiDefaultProps = exports.PickerDefaultProps = void 0;
var EmojiDefaultProps = {
    skin: 1,
    set: "apple",
    sheetSize: 64,
    sheetColumns: 57,
    sheetRows: 57,
    "native": false,
    forceSize: false,
    tooltip: false,
    useButton: true,
    backgroundImageFn: function backgroundImageFn(set, sheetSize) {
        return "https://unpkg.com/emoji-datasource-".concat(set, "@").concat("5.0.1", "/img/").concat(set, "/sheets-256/").concat(sheetSize, ".png");
    }
};
exports.EmojiDefaultProps = EmojiDefaultProps;
var PickerDefaultProps = {
    onClick: function onClick() {},
    onSelect: function onSelect() {},
    onSkinChange: function onSkinChange() {},
    emojiSize: 24,
    perLine: 9,
    i18n: {},
    style: {},
    title: "Emoji Mart\u2122",
    emoji: "department_store",
    color: "#ae65c5",
    set: EmojiDefaultProps.set,
    theme: "light",
    skin: null,
    defaultSkin: EmojiDefaultProps.skin,
    "native": EmojiDefaultProps["native"],
    sheetSize: EmojiDefaultProps.sheetSize,
    backgroundImageFn: EmojiDefaultProps.backgroundImageFn,
    emojisToShowFilter: null,
    showPreview: true,
    showSkinTones: true,
    emojiTooltip: EmojiDefaultProps.tooltip,
    useButton: EmojiDefaultProps.useButton,
    autoFocus: false,
    enableFrequentEmojiSort: false,
    custom: [],
    skinEmoji: "",
    notFound: function notFound() {},
    notFoundEmoji: "sleuth_or_spy",
    icons: {}
};
exports.PickerDefaultProps = PickerDefaultProps;

},{}]},["1xC6H","evbBj"], null, "parcelRequire10c2")

//# sourceMappingURL=nimble-emoji.ad7caa2d.js.map
