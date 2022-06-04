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

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"fbW0H":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "de829f933ffedfa0";
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

},{}],"67dEW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AddToCalendar", ()=>AddToCalendar);
parcelHelpers.export(exports, "Button", ()=>Button);
parcelHelpers.export(exports, "ButtonList", ()=>ButtonList);
parcelHelpers.export(exports, "Card", ()=>Card);
parcelHelpers.export(exports, "CardBody", ()=>CardBody);
parcelHelpers.export(exports, "CardHeader", ()=>CardHeader);
parcelHelpers.export(exports, "Carousel", ()=>Carousel);
parcelHelpers.export(exports, "CarouselItem", ()=>CarouselItem);
parcelHelpers.export(exports, "Col", ()=>Col);
parcelHelpers.export(exports, "Error", ()=>Error$1);
parcelHelpers.export(exports, "Icon", ()=>Icon);
parcelHelpers.export(exports, "Image", ()=>Image);
parcelHelpers.export(exports, "Input", ()=>Input);
parcelHelpers.export(exports, "Loading", ()=>Loading);
parcelHelpers.export(exports, "MD", ()=>MD);
parcelHelpers.export(exports, "MML", ()=>MML);
parcelHelpers.export(exports, "MMLTag", ()=>MMLTag);
parcelHelpers.export(exports, "Number", ()=>Number);
parcelHelpers.export(exports, "Parse", ()=>Parse);
parcelHelpers.export(exports, "Row", ()=>Row);
parcelHelpers.export(exports, "Scheduler", ()=>Scheduler);
parcelHelpers.export(exports, "SourceToXML", ()=>SourceToXML);
parcelHelpers.export(exports, "Success", ()=>Success);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "Tree", ()=>Tree);
parcelHelpers.export(exports, "XMLtoMMLTree", ()=>XMLtoMMLTree);
parcelHelpers.export(exports, "converters", ()=>converters);
parcelHelpers.export(exports, "truncate", ()=>truncate);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _parseXml = require("@rgrove/parse-xml");
var _parseXmlDefault = parcelHelpers.interopDefault(_parseXml);
var _dayjs = require("dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
var _sanitizeUrl = require("@braintree/sanitize-url");
var _reactMarkdown = require("react-markdown");
var _reactMarkdownDefault = parcelHelpers.interopDefault(_reactMarkdown);
var _linkifyjs = require("linkifyjs");
var _icalExpander = require("ical-expander");
var _icalExpanderDefault = parcelHelpers.interopDefault(_icalExpander);
var _reactVirtuoso = require("react-virtuoso");
var _isBetween = require("dayjs/plugin/isBetween");
var _isBetweenDefault = parcelHelpers.interopDefault(_isBetween);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
var runtime_1 = createCommonjsModule(function(module) {
    /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined$1; // More compressible than void 0.
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            return obj[key];
        }
        try {
            // IE 8 has a broken Object.defineProperty that only works on DOM objects.
            define({}, "");
        } catch (err1) {
            define = function(obj, key, value) {
                return obj[key] = value;
            };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
        }
        exports.wrap = wrap;
        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                return {
                    type: "throw",
                    arg: err
                };
            }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {};
        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
            return this;
        };
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
            [
                "next",
                "throw",
                "return"
            ].forEach(function(method) {
                define(prototype, method, function(arg) {
                    return this._invoke(method, arg);
                });
            });
        }
        exports.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports.mark = function(genFun) {
            if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
        };
        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        exports.awrap = function(arg) {
            return {
                __await: arg
            };
        };
        function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if (record.type === "throw") reject(record.arg);
                else {
                    var result = record.arg;
                    var value1 = result.value;
                    if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                        invoke("next", value, resolve, reject);
                    }, function(err) {
                        invoke("throw", err, resolve, reject);
                    });
                    return PromiseImpl.resolve(value1).then(function(unwrapped) {
                        // When a yielded Promise is resolved, its final value becomes
                        // the .value of the Promise<{value,done}> result for the
                        // current iteration.
                        result.value = unwrapped;
                        resolve(result);
                    }, function(error) {
                        // If a rejected Promise was yielded, throw the rejection back
                        // into the async generator function so it can be handled there.
                        return invoke("throw", error, resolve, reject);
                    });
                }
            }
            var previousPromise;
            function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
        };
        exports.AsyncIterator = AsyncIterator;
        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
             : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
            });
        };
        function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
                if (state === GenStateExecuting) throw new Error("Generator is already running");
                if (state === GenStateCompleted) {
                    if (method === "throw") throw arg;
                    // Be forgiving, per 25.3.3.3.3 of the spec:
                    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                    return doneResult();
                }
                context.method = method;
                context.arg = arg;
                while(true){
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if (context.method === "next") // Setting context._sent for legacy support of Babel's
                    // function.sent implementation.
                    context.sent = context._sent = context.arg;
                    else if (context.method === "throw") {
                        if (state === GenStateSuspendedStart) {
                            state = GenStateCompleted;
                            throw context.arg;
                        }
                        context.dispatchException(context.arg);
                    } else if (context.method === "return") context.abrupt("return", context.arg);
                    state = GenStateExecuting;
                    var record = tryCatch(innerFn, self, context);
                    if (record.type === "normal") {
                        // If an exception is thrown from innerFn, we leave state ===
                        // GenStateExecuting and loop back for another invocation.
                        state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                        if (record.arg === ContinueSentinel) continue;
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    } else if (record.type === "throw") {
                        state = GenStateCompleted;
                        // Dispatch the exception by looping back around to the
                        // context.dispatchException(context.arg) call above.
                        context.method = "throw";
                        context.arg = record.arg;
                    }
                }
            };
        }
        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined$1) {
                // A .throw or .return when the delegate iterator has no .throw
                // method always terminates the yield* loop.
                context.delegate = null;
                if (context.method === "throw") {
                    // Note: ["return"] must be used for ES3 parsing compatibility.
                    if (delegate.iterator["return"]) {
                        // If the delegate iterator has a return method, give it a
                        // chance to clean up.
                        context.method = "return";
                        context.arg = undefined$1;
                        maybeInvokeDelegate(delegate, context);
                        if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                        // "return" to "throw", let that override the TypeError below.
                        return ContinueSentinel;
                    }
                    context.method = "throw";
                    context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw") {
                context.method = "throw";
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
                context.method = "throw";
                context.arg = new TypeError("iterator result is not an object");
                context.delegate = null;
                return ContinueSentinel;
            }
            if (info.done) {
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value;
                // Resume execution at the desired location (see delegateYield).
                context.next = delegate.nextLoc;
                // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.
                if (context.method !== "return") {
                    context.method = "next";
                    context.arg = undefined$1;
                }
            } else // Re-yield the result returned by the delegate method.
            return info;
            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
        }
        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator");
        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function() {
            return this;
        };
        Gp.toString = function() {
            return "[object Generator]";
        };
        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };
            if (1 in locs) entry.catchLoc = locs[1];
            if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
        }
        function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [
                {
                    tryLoc: "root"
                }
            ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
        }
        exports.keys = function(object) {
            var keys = [];
            for(var key1 in object)keys.push(key1);
            keys.reverse();
            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
                while(keys.length){
                    var key = keys.pop();
                    if (key in object) {
                        next.value = key;
                        next.done = false;
                        return next;
                    }
                }
                // To avoid creating an additional object, we just hang the .value
                // and .done properties off the next function object itself. This
                // also ensures that the minifier will not anonymize the function.
                next.done = true;
                return next;
            };
        };
        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) return iteratorMethod.call(iterable);
                if (typeof iterable.next === "function") return iterable;
                if (!isNaN(iterable.length)) {
                    var i = -1, next1 = function next() {
                        while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                            next.value = iterable[i];
                            next.done = false;
                            return next;
                        }
                        next.value = undefined$1;
                        next.done = true;
                        return next;
                    };
                    return next1.next = next1;
                }
            }
            // Return an iterator with no values.
            return {
                next: doneResult
            };
        }
        exports.values = values;
        function doneResult() {
            return {
                value: undefined$1,
                done: true
            };
        }
        Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
                this.prev = 0;
                this.next = 0;
                // Resetting context._sent for legacy support of Babel's
                // function.sent implementation.
                this.sent = this._sent = undefined$1;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined$1;
                this.tryEntries.forEach(resetTryEntry);
                if (!skipTempReset) {
                    for(var name in this)// Not sure about the optimal order of these conditions:
                    if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined$1;
                }
            },
            stop: function() {
                this.done = true;
                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;
                if (rootRecord.type === "throw") throw rootRecord.arg;
                return this.rval;
            },
            dispatchException: function(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                    record.type = "throw";
                    record.arg = exception;
                    context.next = loc;
                    if (caught) {
                        // If the dispatched exception was caught by a catch block,
                        // then let that catch block handle the exception normally.
                        context.method = "next";
                        context.arg = undefined$1;
                    }
                    return !!caught;
                }
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    var record = entry.completion;
                    if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                    // it, so set the completion value of the entire function to
                    // throw the exception.
                    return handle("end");
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc");
                        var hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                            else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        } else if (hasFinally) {
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else throw new Error("try statement without catch or finally");
                    }
                }
            },
            abrupt: function(type, arg) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;
                if (finallyEntry) {
                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return ContinueSentinel;
                }
                return this.complete(record);
            },
            complete: function(record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                if (record.type === "break" || record.type === "continue") this.next = record.arg;
                else if (record.type === "return") {
                    this.rval = this.arg = record.arg;
                    this.method = "return";
                    this.next = "end";
                } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
                return ContinueSentinel;
            },
            finish: function(finallyLoc) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        resetTryEntry(entry);
                        return ContinueSentinel;
                    }
                }
            },
            "catch": function(tryLoc) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                }
                // The context.catch method must only be called with a location
                // argument that corresponds to a known catch block.
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
                this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                };
                if (this.method === "next") // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined$1;
                return ContinueSentinel;
            }
        };
        // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
        return exports;
    }(// If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports);
    try {
        regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
    }
});
function isXmlElement(node) {
    return !!node.children;
}
/**
 * MMLTag - Xml tag converted to this MMLTag
 */ var MMLTag = /*#__PURE__*/ function() {
    function MMLTag1(name, node, children) {
        this.name = name;
        this.node = node;
        this.attributes = this.node.attributes || {};
        this.children = children;
    }
    var _proto = MMLTag1.prototype;
    _proto.getText = function getText() {
        if (this.node.type === "text") return this.node.text;
        else if (isXmlElement(this.node) && this.node.children.length) return this.node.children[0].text;
        return "";
    };
    _proto.initialState = function initialState() {
        var _ref;
        var _this$attributes = this.attributes, name = _this$attributes.name, value = _this$attributes.value;
        if (name) return _ref = {}, _ref[name] = value, _ref;
        return {};
    };
    return MMLTag1;
}();
var Card = function Card(_ref) {
    var _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref.children;
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-card " + className
    }, children);
};
var Icon = function Icon(_ref) {
    var name = _ref.name;
    return (0, _reactDefault.default).createElement("i", {
        className: "mml-icon material-icons"
    }, name);
};
var CardHeader = function CardHeader(_ref) {
    var text = _ref.text, _ref$icon = _ref.icon, icon = _ref$icon === void 0 ? "" : _ref$icon, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-card-header " + className
    }, icon && (0, _reactDefault.default).createElement(Icon, {
        name: icon
    }), (0, _reactDefault.default).createElement("span", {
        className: "mml-card-header__text"
    }, text));
};
var CardBody = function CardBody(_ref) {
    var _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref.children;
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-card-body " + className
    }, children);
};
/**
 * A list of buttons
 */ var ButtonList = function ButtonList(_ref) {
    var children = _ref.children, _ref$variant = _ref.variant, variant = _ref$variant === void 0 ? "" : _ref$variant;
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-btnlist " + (variant === "floating" ? " mml-btnlist--floating" : "mml-btnlist--grounded")
    }, children);
};
/**
 * Utility to have custom svg icons outside the `material-icons` system provided by the Icon component
 * Use case internal to this library is the AddToCalendar component which needs brand icons which are not
 * included in [the default material-icons set and probably never will be](https://git.io/Jk9yH)
 */ var SvgIcon = function SvgIcon(_ref) {
    var path = _ref.path;
    return (0, _reactDefault.default).createElement("i", {
        className: "mml-icon"
    }, (0, _reactDefault.default).createElement("svg", {
        className: "mml-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
    }, (0, _reactDefault.default).createElement("path", {
        d: path
    })));
};
/** Icon path from https://materialdesignicons.com/ */ var IconGoogle = /*#__PURE__*/ (0, _reactDefault.default).createElement(SvgIcon, {
    path: "M21.35 11.1h-9.17v2.73h6.5c-.33 3.8-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.1 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.1 0-1.15-.15-1.8-.15-1.8h0z"
});
/** Icon path from https://materialdesignicons.com/ */ var IconMicrosoft = /*#__PURE__*/ (0, _reactDefault.default).createElement(SvgIcon, {
    path: "M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.2L20 3M3 13l6 .1v6.8l-6-1.15V13m17 .25V22l-10-1.9v-7l10 .15z"
});
/** Icon path from https://materialdesignicons.com/ */ var IconApple = /*#__PURE__*/ (0, _reactDefault.default).createElement(SvgIcon, {
    path: "M18.7 19.5c-.83 1.24-1.7 2.45-3.05 2.47-1.34.03-1.77-.8-3.3-.8-1.53 0-2 .77-3.27.82-1.3.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.4c.87-1.52 2.43-2.48 4.12-2.5 1.28-.02 2.5.87 3.3.87.78 0 2.26-1.07 3.8-.9.65.03 2.47.26 3.64 1.98-.1.06-2.17 1.28-2.15 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.2-.7.85-1.83 1.5-2.95 1.42-.15-1.15.4-2.35 1.05-3.1z"
});
function isMobile() {
    var ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    if (!ua) return false;
    var mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    if (mobileRE.test(ua)) return true;
    if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 1 && ua.indexOf("Macintosh") !== -1 && ua.indexOf("Safari") !== -1) return true;
    return false;
} // @ts-ignore (expect-error breaks in GH actions) TODO: replace deprecated method
var isIE = typeof window !== "undefined" && window.navigator.msSaveOrOpenBlob && window.Blob;
var getCurrentURL = function getCurrentURL() {
    if (typeof window !== "undefined") return window.location.href;
    return "";
};
var CALENDAR_SERVICES = [
    {
        id: "google",
        label: "Google",
        Icon: IconGoogle
    },
    {
        id: "apple",
        label: "Apple Calendar",
        Icon: IconApple
    },
    {
        id: "outlook",
        label: "Outlook",
        Icon: IconMicrosoft
    },
    {
        id: "outlookcom",
        label: "Outlook.com",
        Icon: IconMicrosoft
    }
];
/**
 * Format time
 *
 * Adapted from the `moment` way of [react-add-to-calendar](https://git.io/JkWol)
 * to the dayjs way
 */ function formatTime(date, id) {
    return (0, _dayjsDefault.default)(date).format(id === "outlookcom" ? "YYYY-MM-DDTHH:mm:ss" : "YYYYMMDDTHHmmss") + "Z";
}
/**
 * Create query string with given parameters
 *
 * It checks that the parameter value is not falsy
 */ function createQueryString(params) {
    if (params === void 0) params = {};
    return Object.keys(params).reduce(function(acc, key) {
        var value = params[key];
        if (value) acc += "&" + key + "=" + encodeURIComponent(value);
        return acc;
    }, "");
}
/**
 * Build calendar URL
 *
 * Resources:
 * - [SO question about Google](https://stackoverflow.com/q/22757908)
 * - [docs about outlook.com format](https://git.io/JkWp5)
 * - [addevent wrapper SaaS](https://www.addevent.com/)
 */ function buildUrl(event, id) {
    var start = event.start, end = event.end, title = event.title, location = event.location, description = event.description;
    var startFormatted = formatTime(start, id);
    var endFormatted = formatTime(end, id);
    if (id === "google") return "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=" + startFormatted + "/" + endFormatted + createQueryString({
        location: location,
        text: title,
        details: description
    });
    if (id === "outlookcom") return "https://outlook.live.com/owa/?rru=addevent" + createQueryString({
        startdt: startFormatted,
        enddt: endFormatted,
        subject: title,
        location: location,
        body: description,
        allday: "false"
    }) + "&path=/calendar/view/Month";
    var url = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        "URL:" + getCurrentURL(),
        "DTSTART:" + startFormatted,
        "DTEND:" + endFormatted,
        "SUMMARY:" + title,
        "DESCRIPTION:" + description,
        "LOCATION:" + location,
        "END:VEVENT",
        "END:VCALENDAR"
    ].join("\n");
    if (!isIE && isMobile()) url = encodeURI("data:text/calendar;charset=utf8," + url);
    return url;
}
/**
 * AddToCalendar widget that supports google, apple and outlook calendars
 */ var AddToCalendar = function AddToCalendar(_ref2) {
    var title = _ref2.title, start = _ref2.start, end = _ref2.end, _ref2$className = _ref2.className, className = _ref2$className === void 0 ? "" : _ref2$className, _ref2$location = _ref2.location, location = _ref2$location === void 0 ? "" : _ref2$location, _ref2$description = _ref2.description, description = _ref2$description === void 0 ? "" : _ref2$description;
    var event1 = {
        start: start,
        end: end,
        title: title,
        location: location,
        description: description
    };
    function handleLinkClick(event) {
        event.preventDefault();
        var url = event.currentTarget.getAttribute("href");
        if (!isMobile() && (url.startsWith("data") || url.startsWith("BEGIN"))) {
            var filename = "download.ics";
            var blob = new Blob([
                url
            ], {
                type: "text/calendar;charset=utf-8"
            });
            if (isIE) // @ts-ignore (expect-error breaks in GH actions) TODO: replace deprecated method
            window.navigator.msSaveOrOpenBlob(blob, filename);
            else {
                // many browsers do not properly support downloading data URIs
                // (even with "download" attribute in use) so this solution
                // ensures the event will download cross-browser
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.setAttribute("download", filename);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } else window.open(url, "_blank");
    }
    return (0, _reactDefault.default).createElement(Card, {
        className: "mml-add-to-calendar " + className
    }, (0, _reactDefault.default).createElement(CardHeader, {
        icon: "date_range",
        text: "Add to My Calendar"
    }), (0, _reactDefault.default).createElement(CardBody, null, (0, _reactDefault.default).createElement(ButtonList, null, CALENDAR_SERVICES.map(function(_ref3) {
        var id = _ref3.id, label = _ref3.label, Icon1 = _ref3.Icon;
        return (0, _reactDefault.default).createElement("a", {
            key: id,
            className: "mml-btn " + (Icon1 ? "mml-btn--with-icon" : ""),
            onClick: handleLinkClick,
            href: buildUrl(event1, id),
            target: "_blank",
            rel: "nofollow noreferrer noopener"
        }, Icon1, " ", label);
    }))));
};
/**
 * Button can be used to open a URL, submit the form or trigger a select when clicked
 */ var Button = function Button(_ref) {
    var _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, text = _ref.text, name = _ref.name, value = _ref.value, _ref$url = _ref.url, url = _ref$url === void 0 ? "" : _ref$url, variant = _ref.variant, icon = _ref.icon;
    if (icon) className += text ? " mml-btn--with-icon" : " mml-btn--icon";
    else className += " mml-btn--text";
    className += variant === "floating" ? " mml-btn--floating" : " mml-btn--grounded";
    if (url) return (0, _reactDefault.default).createElement("a", {
        className: "mml-btn " + className,
        href: (0, _sanitizeUrl.sanitizeUrl)(url),
        target: "_blank",
        rel: "nofollow noreferrer noopener"
    }, icon && (0, _reactDefault.default).createElement(Icon, {
        name: icon
    }), text);
    return (0, _reactDefault.default).createElement("button", {
        className: "mml-btn " + className,
        type: "submit",
        name: name,
        value: value,
        onClick: function onClick(event) {
            var _event$currentTarget, _event$currentTarget$;
            var input = document.createElement("input");
            input.type = "hidden";
            input.name = name || "";
            input.value = value || "";
            (_event$currentTarget = event.currentTarget) == null || (_event$currentTarget$ = _event$currentTarget.closest("form")) == null || _event$currentTarget$.appendChild(input);
        }
    }, icon && (0, _reactDefault.default).createElement(Icon, {
        name: icon
    }), text);
};
/**
 * A carousel is a nice mobile friendly way of letting a user select something
 *
 * Super simple scroll based carousel slightly inspired by [react-scroll-snap-slider](https://github.com/lifarl/react-scroll-snap-slider)
 */ var Carousel = function Carousel(_ref) {
    var children = _ref.children, _ref$slideWidth = _ref.slideWidth, slideWidth = _ref$slideWidth === void 0 ? "120px" : _ref$slideWidth, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-carousel " + className
    }, (0, _reactDefault.default).createElement("div", {
        className: "mml-carousel__track"
    }, (0, _reactDefault.default).createElement("div", {
        className: "mml-carousel__slides"
    }, (0, _react.Children).map(children, function(child) {
        return (0, _react.cloneElement)(child, {
            className: "mml-carousel__slide",
            slideWidth: slideWidth
        });
    }))));
};
/**
 * A carousel item
 */ var CarouselItem = function CarouselItem(_ref) {
    var children = _ref.children, slideWidth = _ref.slideWidth, _ref$width = _ref.width, width = _ref$width === void 0 ? "" : _ref$width, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var finalWidth = width || slideWidth;
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-carousel-item " + className,
        style: {
            flex: "0 0 " + finalWidth,
            minWidth: finalWidth
        }
    }, children);
};
/**
 * A grid column
 * TODO: Consider renaming this element
 */ var Col = function Col(_ref) {
    var children = _ref.children, _ref$width = _ref.width, width = _ref$width === void 0 ? 12 : _ref$width, _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? 0 : _ref$offset, _ref$align = _ref.align, align = _ref$align === void 0 ? "left" : _ref$align;
    var classNames = "mml-col-" + width;
    if (offset) classNames = classNames + (" mml-offset-" + offset);
    classNames = classNames + (" mml-align-" + align);
    return (0, _reactDefault.default).createElement("div", {
        className: classNames
    }, children);
};
var Error$1 = function Error(_ref) {
    var _ref$error = _ref.error, error = _ref$error === void 0 ? "" : _ref$error;
    if (!error) return null;
    return (0, _reactDefault.default).createElement("span", {
        className: "mml-error"
    }, error);
};
var Image = function Image(_ref) {
    var src = _ref.src, _ref$alt = _ref.alt, alt = _ref$alt === void 0 ? "" : _ref$alt, _ref$title = _ref.title, title = _ref$title === void 0 ? "" : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    return (0, _reactDefault.default).createElement("img", {
        className: ("mml-image " + className).trim(),
        src: src,
        alt: alt,
        title: title
    });
};
/**
 * Text input element. Usually you'll want to rely on regular messages
 */ var Input = function Input(_ref) {
    var name = _ref.name, label = _ref.label, _ref$value = _ref.value, value = _ref$value === void 0 ? "" : _ref$value, _ref$type = _ref.type, type = _ref$type === void 0 ? "text" : _ref$type, _ref$placeholder = _ref.placeholder, placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder;
    var _useState = (0, _react.useState)(value), state = _useState[0], setState = _useState[1];
    var id = "mml-" + name;
    return (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, null, label && (0, _reactDefault.default).createElement("label", {
        className: "mml-card-header",
        htmlFor: id
    }, (0, _reactDefault.default).createElement("span", {
        className: "mml-card-header__text"
    }, label)), (0, _reactDefault.default).createElement("input", {
        id: id,
        className: "mml-input",
        name: name,
        value: state,
        type: type,
        placeholder: placeholder,
        onChange: function onChange(event) {
            return setState(event.target.value);
        }
    }));
};
var SIZE = 44;
var Progress = function Progress(_ref) {
    var size = _ref.size, _ref$thickness = _ref.thickness, thickness = _ref$thickness === void 0 ? 3.6 : _ref$thickness, color = _ref.color;
    thickness = typeof thickness === "string" ? parseFloat(thickness) : thickness; // interpret a digit only string or a number as a pixel value otherwise leave
    // it as astring, it might be a value like `2em` or `120%`
    size = typeof size === "string" && /^\d+$/.test(size) || typeof size === "number" ? size + "px" : size;
    return (0, _reactDefault.default).createElement("span", {
        className: "mml-progress",
        role: "progressbar",
        style: {
            width: size,
            height: size,
            color: color
        }
    }, (0, _reactDefault.default).createElement("svg", {
        className: "mml-progress__svg",
        viewBox: SIZE / 2 + " " + SIZE / 2 + " " + SIZE + " " + SIZE
    }, (0, _reactDefault.default).createElement("circle", {
        className: "mml-progress__circle",
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
    })));
};
/**
 * Loading indicator
 */ var Loading = function Loading(_ref) {
    var _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, _ref$loading = _ref.loading, loading = _ref$loading === void 0 ? false : _ref$loading, text = _ref.text, size = _ref.size, thickness = _ref.thickness, color = _ref.color;
    if (!loading) return null;
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-loading " + className
    }, (0, _reactDefault.default).createElement(Progress, Object.assign({}, {
        size: size,
        thickness: thickness,
        color: color
    })), text && (0, _reactDefault.default).createElement("div", {
        className: "mml-loading__text"
    }, text));
};
var truncate = function truncate(input, length, end) {
    if (end === void 0) end = "...";
    if (input.length > length) return "" + input.substring(0, length - end.length) + end;
    return input;
};
var matchMarkdownLinks = function matchMarkdownLinks(message) {
    var regexMdLinks = /\[([^[]+)\](\(.*\))/gm;
    var matches = message.match(regexMdLinks);
    var singleMatch = /\[([^[]+)\]\((.*)\)/;
    var links = matches ? matches.map(function(match) {
        var i = singleMatch.exec(match);
        return i && i[2];
    }) : [];
    return links;
};
var MDLinkRender = function MDLinkRender(props) {
    if (!props.href || !props.href.startsWith("http") && !props.href.startsWith("mailto:")) return props.children;
    return (0, _reactDefault.default).createElement("a", {
        href: props.href,
        target: "_blank",
        rel: "nofollow noreferrer noopener"
    }, props.children);
};
var markDownRenderers = {
    link: MDLinkRender
};
var allowedMarkups = [
    "html",
    "root",
    "text",
    "break",
    "paragraph",
    "emphasis",
    "strong",
    "link",
    "list",
    "listItem",
    "code",
    "inlineCode",
    "blockquote"
];
/**
 * MD renders a given text as markdown
 */ var MD = function MD(_ref) {
    var text1 = _ref.text;
    if (!text1) return null;
    var newText = text1;
    var markdownLinks = matchMarkdownLinks(newText); // extract all valid links/emails within text and replace it with proper markup
    (0, _linkifyjs.find)(newText).forEach(function(_ref2) {
        var type = _ref2.type, href = _ref2.href, value = _ref2.value;
        // check if message is already  markdown
        var noParsingNeeded = markdownLinks && markdownLinks.filter(function(text) {
            return (text == null ? void 0 : text.indexOf(href)) !== -1;
        });
        if (noParsingNeeded.length > 0) return;
        var displayLink = type === "email" ? value : truncate(value.replace(/(http(s?):\/\/)?(www\.)?/, ""), 20);
        newText = newText.replace(value, "[" + displayLink + "](" + encodeURI(href) + ")");
    });
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-md"
    }, (0, _reactDefault.default).createElement((0, _reactMarkdownDefault.default), {
        allowedTypes: allowedMarkups,
        renderers: markDownRenderers,
        source: newText,
        escapeHtml: true,
        unwrapDisallowed: true,
        transformLinkUri: function transformLinkUri(uri) {
            return uri.startsWith("app://") ? uri : (0, _reactMarkdownDefault.default).uriTransformer(uri);
        }
    }));
};
/**
 * Mobile friendly number input
 */ var Number = function Number(_ref) {
    var name = _ref.name, value = _ref.value;
    var _useState = (0, _react.useState)(parseInt("" + value, 10) || 0), state = _useState[0], setState = _useState[1];
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-number"
    }, (0, _reactDefault.default).createElement("input", {
        name: name,
        value: state,
        type: "hidden"
    }), (0, _reactDefault.default).createElement("span", {
        className: "mml-btn mml-btn--floating mml-btn--icon mml-number__dec",
        onClick: function onClick() {
            return setState(state - 1);
        }
    }, (0, _reactDefault.default).createElement(Icon, {
        name: "remove"
    })), (0, _reactDefault.default).createElement("span", {
        className: "mml-number__count"
    }, state), (0, _reactDefault.default).createElement("span", {
        className: "mml-btn mml-btn--floating mml-btn--icon mml-number__inc",
        onClick: function onClick() {
            return setState(state + 1);
        }
    }, (0, _reactDefault.default).createElement(Icon, {
        name: "add"
    })));
};
var Row = function Row(_ref) {
    var children = _ref.children;
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-row"
    }, children);
};
var ITEMS_PER_PAGE = 40;
var VERTICAL_COMPENSATION = 3;
var INITIAL_INDEX = ITEMS_PER_PAGE;
var VIRTUOSO_START_INDEX = 10000;
/**
 * DatePicker select
 */ var DatePickerSelect = function DatePickerSelect(props) {
    var onChange = props.onChange, icalFilter = props.icalFilter, getItemData1 = props.getItemData, itemClassName = props.itemClassName, interval = props.interval, format = props.format, value = props.value; // Generate date items
    var generateItems = (0, _react.useCallback)(function(quantity, firstIdx) {
        return Array(quantity).fill(true).map(function(_, idx) {
            return getItemData1({
                interval: interval,
                format: format,
                value: value,
                idx: firstIdx + idx
            });
        }).filter(function(newItem) {
            return !icalFilter || icalFilter && icalFilter(newItem.value);
        });
    }, [
        interval,
        format,
        value,
        icalFilter,
        getItemData1
    ]);
    var _useState = (0, _react.useState)(generateItems(ITEMS_PER_PAGE * 2, -ITEMS_PER_PAGE)), items1 = _useState[0], setItems = _useState[1];
    var _useState2 = (0, _react.useState)(VIRTUOSO_START_INDEX), firstItemIndex1 = _useState2[0], setFirstItemIndex = _useState2[1];
    var initialIndexOffset = (0, _react.useRef)(INITIAL_INDEX);
    var _useState3 = (0, _react.useState)(null), selectedIdx = _useState3[0], setSelectedIdx = _useState3[1];
    var handleClick = (0, _react.useCallback)(function(item) {
        onChange(item.value);
        var firstItemIndex = initialIndexOffset.current || 0;
        var nextFirstItemIdx = firstItemIndex - INITIAL_INDEX - ITEMS_PER_PAGE;
        var missingTopItems = nextFirstItemIdx - item.idx + VERTICAL_COMPENSATION; // prepend date items, when the selected date's index is too low we prepend
        // some date options so that it will remain vertically centered in the middle
        if (missingTopItems >= 0) {
            nextFirstItemIdx -= missingTopItems;
            initialIndexOffset.current -= firstItemIndex - missingTopItems;
            setItems(function(items) {
                return [].concat(generateItems(missingTopItems, nextFirstItemIdx), items);
            });
        }
        setSelectedIdx(item.idx);
    }, [
        setItems,
        generateItems,
        initialIndexOffset,
        onChange
    ]);
    var appendItems = (0, _react.useCallback)(function(lastItemIndex) {
        setItems(function(items) {
            return [].concat(items, generateItems(ITEMS_PER_PAGE, lastItemIndex));
        });
    }, [
        setItems,
        generateItems
    ]); // @see https://git.io/JIUuo
    var prependItems = (0, _react.useCallback)(function() {
        var firstItemIndex = initialIndexOffset.current || 0;
        var nextFirstItemIdx = firstItemIndex - INITIAL_INDEX - ITEMS_PER_PAGE;
        if (initialIndexOffset) initialIndexOffset.current -= ITEMS_PER_PAGE;
        setItems(function(items) {
            return [].concat(generateItems(ITEMS_PER_PAGE, nextFirstItemIdx), items);
        });
        setFirstItemIndex(firstItemIndex - ITEMS_PER_PAGE);
        return false;
    }, [
        setItems,
        generateItems,
        initialIndexOffset
    ]); // on mount check if there is a selected value and save its idx in state
    (0, _react.useEffect)(function() {
        if (value) {
            var initialSelectedIdx = null;
            for(var i = 0; i < items1.length; i++)if (items1[i].isSelected(value)) {
                initialSelectedIdx = items1[i].idx;
                break;
            }
            setSelectedIdx(initialSelectedIdx);
        }
    }, []); // eslint-disable-line
    return (0, _reactDefault.default).createElement((0, _reactVirtuoso.Virtuoso), {
        data: items1,
        firstItemIndex: firstItemIndex1,
        itemContent: function itemContent(_, item) {
            return (0, _reactDefault.default).createElement("div", {
                className: itemClassName + (" mml-datepicker__item " + (item.idx === selectedIdx ? "mml-datepicker__item--selected" : "")),
                onClick: function onClick() {
                    return handleClick(item);
                }
            }, item.displayValue);
        },
        endReached: appendItems,
        startReached: prependItems
    });
};
/**
 * Get item data
 */ var getItemData = function getItemData(props) {
    var idx = props.idx, interval = props.interval, value = props.value, format = props.format;
    var newValue = idx >= 0 ? (0, _dayjsDefault.default)(value).add(idx * (interval * 24), "hour") : (0, _dayjsDefault.default)(value).subtract(idx * (interval * 24) * -1, "hour");
    return {
        idx: idx,
        value: newValue,
        displayValue: (0, _dayjsDefault.default)(newValue).format(format),
        isSelected: function isSelected(currentValue) {
            return (0, _dayjsDefault.default)(newValue).isSame(interval === 1 ? (0, _dayjsDefault.default)(currentValue) : (0, _dayjsDefault.default)(currentValue).add(interval, "day"), "date");
        }
    };
};
/**
 * DatePicker date
 */ var DatePickerDate = function DatePickerDate(props) {
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-datepicker__select mml-datepicker__date"
    }, (0, _reactDefault.default).createElement(DatePickerSelect, Object.assign({}, props, {
        itemClassName: "mml-datepicker__item--day",
        getItemData: getItemData
    })));
};
(0, _dayjsDefault.default).extend((0, _isBetweenDefault.default));
/**
 * Get item data
 */ var getItemData$1 = function getItemData(props) {
    var idx = props.idx, interval = props.interval, value = props.value, format = props.format;
    var newValue = idx >= 0 ? (0, _dayjsDefault.default)(value).add(idx * interval, "minute") : (0, _dayjsDefault.default)(value).subtract(idx * -1 * interval, "minute");
    return {
        idx: idx,
        value: newValue,
        displayValue: (0, _dayjsDefault.default)(newValue).format(format),
        isSelected: function isSelected(currentValue) {
            return (0, _dayjsDefault.default)(newValue).isBetween(currentValue, (0, _dayjsDefault.default)(currentValue).add(interval - 1, "minute"), "minute", "[]");
        }
    };
};
/**
 * DatePicker time
 */ var DatePickerTime = function DatePickerTime(props) {
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-datepicker__select mml-datepicker__time"
    }, (0, _reactDefault.default).createElement(DatePickerSelect, Object.assign({}, props, {
        itemClassName: "mml-datepicker__item--time",
        getItemData: getItemData$1
    })));
};
var DatePicker = function DatePicker(_ref) {
    var name = _ref.name, selected = _ref.selected, dateInterval = _ref.dateInterval, timeInterval = _ref.timeInterval, dateFormat = _ref.dateFormat, timeFormat = _ref.timeFormat, fullDay = _ref.fullDay, icalFilter = _ref.icalFilter;
    var _useState = (0, _react.useState)(selected), date = _useState[0], setDate = _useState[1];
    var handleChangeDate = function handleChangeDate(value) {
        setDate(function(prevDate) {
            return prevDate.set("date", value.get("date")).set("month", value.get("month")).set("year", value.get("year"));
        });
    };
    var handleChangeTime = function handleChangeTime(value) {
        setDate(function(prevDate) {
            return prevDate.set("minute", value.get("minute")).set("hour", value.get("hour"));
        });
    };
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-datepicker mml-datepicker--" + (fullDay ? "single" : "double")
    }, (0, _reactDefault.default).createElement("input", {
        name: name,
        value: date.toISOString(),
        type: "hidden"
    }), (0, _reactDefault.default).createElement(DatePickerDate, {
        icalFilter: icalFilter,
        format: dateFormat,
        value: date,
        onChange: handleChangeDate,
        interval: dateInterval
    }), !fullDay && (0, _reactDefault.default).createElement(DatePickerTime, {
        icalFilter: icalFilter,
        format: timeFormat,
        value: date,
        onChange: handleChangeTime,
        interval: timeInterval
    }));
};
var setupIcalFilter = /*#__PURE__*/ function() {
    var _ref = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee(icalURL, duration) {
        var response, body, icalExpander;
        return runtime_1.wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    _context.next = 2;
                    return fetch(icalURL, {
                        method: "GET",
                        redirect: "follow",
                        credentials: "same-origin"
                    });
                case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.text();
                case 5:
                    body = _context.sent;
                    if (response.ok) {
                        _context.next = 8;
                        break;
                    }
                    throw new Error(body);
                case 8:
                    icalExpander = new (0, _icalExpanderDefault.default)({
                        ics: body,
                        maxIterations: 10
                    });
                    return _context.abrupt("return", function() {
                        return function(start) {
                            if (!start) return true;
                            var _icalExpander$between = icalExpander.between(start.toDate(), start.add(duration, "minute").toDate()), events = _icalExpander$between.events;
                            return !events.length;
                        };
                    });
                case 10:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return function setupIcalFilter(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
var Scheduler = function Scheduler(_ref2) {
    var name = _ref2.name, selected = _ref2.selected, icalAvailability = _ref2.icalAvailability, _ref2$duration = _ref2.duration, duration = _ref2$duration === void 0 ? 30 : _ref2$duration, _ref2$dateInterval = _ref2.dateInterval, dateInterval = _ref2$dateInterval === void 0 ? 1 : _ref2$dateInterval, _ref2$timeInterval = _ref2.timeInterval, timeInterval = _ref2$timeInterval === void 0 ? 30 : _ref2$timeInterval, _ref2$dateFormat = _ref2.dateFormat, dateFormat = _ref2$dateFormat === void 0 ? "ddd MMM DD" : _ref2$dateFormat, _ref2$timeFormat = _ref2.timeFormat, timeFormat = _ref2$timeFormat === void 0 ? "hh:mm A" : _ref2$timeFormat, _ref2$fullDay = _ref2.fullDay, fullDay = _ref2$fullDay === void 0 ? false : _ref2$fullDay;
    var _useState = (0, _react.useState)(false), loading = _useState[0], setLoading = _useState[1];
    var _useState2 = (0, _react.useState)(""), error = _useState2[0], setError = _useState2[1];
    var _useState3 = (0, _react.useState)(function() {
        return function() {
            return true;
        };
    }), icalFilter = _useState3[0], setIcalFilter = _useState3[1];
    (0, _react.useEffect)(function() {
        if (!icalAvailability) return;
        setLoading(true);
        setupIcalFilter(icalAvailability, duration).then(setIcalFilter)["catch"](function(err) {
            console.warn("loading ical failed", {
                icalAvailability: icalAvailability,
                err: err
            });
            setError("iCal availability could not be loaded");
        })["finally"](function() {
            return setLoading(false);
        });
    }, [
        icalAvailability,
        duration
    ]);
    return (0, _reactDefault.default).createElement(Card, {
        className: "mml-scheduler"
    }, (0, _reactDefault.default).createElement(CardHeader, {
        icon: "date_range",
        text: "Scheduler"
    }), (0, _reactDefault.default).createElement(CardBody, null, error && !loading && (0, _reactDefault.default).createElement(Error$1, {
        error: "Failed, error: " + error
    }), !error && loading && (0, _reactDefault.default).createElement(Loading, {
        loading: true,
        text: "Loading availability"
    }), !error && !loading && (0, _reactDefault.default).createElement(DatePicker, {
        name: name,
        selected: selected ? (0, _dayjsDefault.default)(selected) : (0, _dayjsDefault.default)().startOf("hour"),
        dateInterval: dateInterval,
        timeInterval: timeInterval,
        dateFormat: dateFormat,
        timeFormat: timeFormat,
        fullDay: fullDay,
        icalFilter: icalFilter
    })));
};
var Success = function Success(_ref) {
    var success = _ref.success;
    if (success) return (0, _reactDefault.default).createElement("div", {
        className: "mml-success"
    }, success);
    return null;
};
/**
 * Simple paragraph text element
 */ var Text = function Text(_ref) {
    var text = _ref.text, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    return (0, _reactDefault.default).createElement("div", {
        className: ("mml-text " + className).trim()
    }, text);
};
/**
 * The converters maps MML tags to react nodes
 * Every converter is passed the MML tag as well as the children (as React nodes)
 */ var converters = {
    button: function button(tag) {
        return (0, _reactDefault.default).createElement(Button, Object.assign({}, tag.attributes, {
            key: tag.key,
            text: tag.getText(),
            name: tag.attributes.name,
            value: tag.attributes.value
        }));
    },
    button_list: function button_list(tag, children) {
        return (0, _reactDefault.default).createElement(ButtonList, Object.assign({}, tag.attributes, {
            key: tag.key
        }), children);
    },
    input: function input(tag) {
        return (0, _reactDefault.default).createElement(Input, Object.assign({}, tag.attributes, {
            key: tag.key,
            name: tag.attributes.name,
            value: tag.attributes.value
        }));
    },
    add_to_calendar: function add_to_calendar(tag) {
        return (0, _reactDefault.default).createElement(AddToCalendar, Object.assign({}, tag.attributes, {
            key: tag.key,
            title: tag.attributes.title,
            start: tag.attributes.start,
            end: tag.attributes.end
        }));
    },
    col: function col(tag, children) {
        return (0, _reactDefault.default).createElement(Col, Object.assign({}, tag.attributes, {
            key: tag.key
        }), children);
    },
    row: function row(tag, children) {
        return (0, _reactDefault.default).createElement(Row, Object.assign({}, tag.attributes, {
            key: tag.key
        }), children);
    },
    icon: function icon(tag) {
        return (0, _reactDefault.default).createElement(Icon, Object.assign({}, tag.attributes, {
            key: tag.key,
            name: tag.attributes.name
        }));
    },
    image: function image(tag) {
        return (0, _reactDefault.default).createElement(Image, Object.assign({}, tag.attributes, {
            key: tag.key,
            src: tag.attributes.src
        }));
    },
    md: function md(tag) {
        return (0, _reactDefault.default).createElement(MD, Object.assign({}, tag.attributes, {
            key: tag.key,
            text: tag.getText()
        }));
    },
    text: function text(tag) {
        return (0, _reactDefault.default).createElement(Text, Object.assign({}, tag.attributes, {
            key: tag.key,
            text: tag.getText()
        }));
    },
    scheduler: function scheduler(tag) {
        return (0, _reactDefault.default).createElement(Scheduler, Object.assign({}, tag.attributes, {
            key: tag.key,
            name: tag.attributes.name,
            dateInterval: parseInt(tag.attributes.dateInterval, 10) || 1,
            timeInterval: parseInt(tag.attributes.timeInterval, 10) || 30,
            duration: parseInt(tag.attributes.duration, 10) || 30,
            selected: tag.attributes.selected,
            fullDay: tag.attributes.fullDay === "true",
            icalAvailability: tag.attributes.icalAvailability
        }));
    },
    carousel: function carousel(tag, children) {
        return (0, _reactDefault.default).createElement(Carousel, Object.assign({
            slideWidth: tag.attributes.slideWidth
        }, tag.attributes, {
            key: tag.key
        }), children);
    },
    item: function item(tag, children) {
        return (0, _reactDefault.default).createElement(CarouselItem, Object.assign({}, tag.attributes, {
            key: tag.key
        }), children);
    },
    number: function number(tag) {
        return (0, _reactDefault.default).createElement(Number, Object.assign({}, tag.attributes, {
            key: tag.key,
            name: tag.attributes.name,
            value: tag.attributes.value
        }));
    }
};
/**
 * Tree - The tree object for MML tags
 */ var Tree = /*#__PURE__*/ function() {
    function Tree1(node, children, customConvertors) {
        this.converters = _extends({}, converters, customConvertors);
        this.node = node;
        this.children = children;
        this.reactElements = this.toReact();
        this.name = node.attributes.name;
        this.type = node.attributes.type;
    }
    /**
   * convert all nodes to react and maintain the hierarchy
   */ var _proto = Tree1.prototype;
    _proto.toReact = function toReact(parent) {
        var _this = this;
        if (parent === void 0) parent = this;
        var reactNodes = [];
        (parent.children || []).forEach(function(child, i) {
            var converter = _this.converters[child.name];
            if (!converter || !Object.hasOwnProperty.call(_this.converters, child.name)) throw Error("Converter not found for tag " + child.name + ", Available converters are " + Object.keys(_this.converters));
            var children = _this.toReact(child);
            child.key = "tag-" + child.name + "-position-" + i;
            reactNodes.push(converter(child, children));
        });
        return reactNodes;
    };
    return Tree1;
}();
/**
 * SourceToXML - Takes an MML string and converts it to XML nodes
 *
 * @param {string} source MML tag string
 *
 * @returns {array} an Array of XML nodes
 */ function SourceToXML(source) {
    var src = source.trim(); // the wrapping MML tags are optional, for parsing simplicity we automatically add them if they are not already there
    if (!src.startsWith("<mml")) src = "<mml>" + source + "</mml>"; // emulate HTML handling of & escaping
    var unescapedAmps = /&(?!amp;|lt;|gt;)/g;
    src = src.replace(unescapedAmps, "&amp;"); // convert the string to XML nodes
    // this library is relatively lightweight and doesn't do a ton of validation
    return (0, _parseXmlDefault.default)(src);
}
function convertNodes(nodes) {
    return nodes.reduce(function(acc, node) {
        var element = node;
        var children;
        if (element.children) children = convertNodes(element.children);
        var name = element.name;
        if (node.type === "text") {
            if (node.text.trim().length) name = "text";
            else return acc; // skip empty text elements
        }
        acc.push(new MMLTag(name, node, children));
        return acc;
    }, []);
}
/**
 * XMLtoMMLTree - Takes an array of XML nodes and converts it into an MML Tree
 *
 * @param {type} XMLNodes an array of XML nodes
 *
 * @returns {MMLTree} The MML tree
 */ function XMLtoMMLTree(document, customConvertors) {
    if (!document || !document.children || !document.children.length) throw new Error("bad input");
    var mmlNode = document.children[0];
    if (mmlNode.name !== "mml") throw new Error("missing mml tag");
    return new Tree(mmlNode, convertNodes(mmlNode.children), customConvertors);
}
/**
 * Takes an MML string and returns an MML Tree
 *
 * @param {string} source MML tag string
 *
 *  @returns {Tree} An MML Tree
 */ function Parse(source, customConvertors) {
    var XMLNodes = SourceToXML(source);
    return XMLtoMMLTree(XMLNodes, customConvertors);
}
/**
 * MML root component
 */ var MML = function MML(_ref) {
    var source = _ref.source, onSubmit = _ref.onSubmit, converters1 = _ref.converters, _ref$theme = _ref.theme, theme = _ref$theme === void 0 ? "" : _ref$theme, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, _ref$Loading = _ref.Loading, Loading$1 = _ref$Loading === void 0 ? Loading : _ref$Loading, _ref$Error = _ref.Error, Error = _ref$Error === void 0 ? Error$1 : _ref$Error, _ref$Success = _ref.Success, Success$1 = _ref$Success === void 0 ? Success : _ref$Success;
    var _useState = (0, _react.useState)(""), error = _useState[0], setError = _useState[1];
    var _useState2 = (0, _react.useState)({
        loading: false,
        error: "",
        success: ""
    }), submitState = _useState2[0], setSubmitState = _useState2[1];
    var tree = (0, _react.useMemo)(function() {
        try {
            return Parse(source, converters1);
        } catch (e) {
            console.warn("mml parsing error: ", source, e);
            setError("This chat message has invalid formatting and can't be shown");
            return null;
        }
    }, [
        source,
        converters1
    ]);
    var handleSubmit = (0, _react.useCallback)(/*#__PURE__*/ function() {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/ runtime_1.mark(function _callee(event) {
            var state;
            return runtime_1.wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        event.preventDefault();
                        state = {};
                        if (tree != null && tree.name) state.mml_name = tree.name; // include mml_name in the data
                        new FormData(event.currentTarget).forEach(function(value, key) {
                            state[key] = value;
                        });
                        if (onSubmit) {
                            _context.next = 6;
                            break;
                        }
                        return _context.abrupt("return", console.warn("Forgot to pass onSubmit prop to <MML/>? payload:", state));
                    case 6:
                        _context.prev = 6;
                        setSubmitState({
                            loading: true,
                            error: "",
                            success: ""
                        });
                        _context.next = 10;
                        return onSubmit(state);
                    case 10:
                        setSubmitState({
                            loading: false,
                            error: "",
                            success: "submitted"
                        });
                        _context.next = 16;
                        break;
                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](6);
                        setSubmitState({
                            loading: false,
                            error: "Failed to send the request. Please try again.",
                            success: ""
                        });
                    case 16:
                    case "end":
                        return _context.stop();
                }
            }, _callee, null, [
                [
                    6,
                    13
                ]
            ]);
        }));
        return function(_x) {
            return _ref2.apply(this, arguments);
        };
    }(), [
        onSubmit,
        tree
    ]);
    return (0, _reactDefault.default).createElement("div", {
        className: "mml-container " + theme + " " + className,
        "data-testid": "mml-container"
    }, error ? (0, _reactDefault.default).createElement("div", {
        className: "mml-wrap"
    }, Error && (0, _reactDefault.default).createElement(Error, {
        error: error
    })) : (0, _reactDefault.default).createElement("form", {
        onSubmit: handleSubmit,
        className: "mml-wrap",
        "data-testid": "mml-form"
    }, tree != null && tree.type ? (0, _reactDefault.default).createElement("div", {
        className: "mml-card"
    }, tree == null ? void 0 : tree.reactElements) : tree == null ? void 0 : tree.reactElements, submitState.loading && Loading$1 && (0, _reactDefault.default).createElement(Loading$1, {
        loading: submitState.loading
    }), submitState.success && Success$1 && (0, _reactDefault.default).createElement(Success$1, {
        success: submitState.success
    }), submitState.error && Error && (0, _reactDefault.default).createElement(Error, {
        error: submitState.error
    })));
};

},{"react":"21dqq","@rgrove/parse-xml":"dqdUq","dayjs":"NJZFB","@braintree/sanitize-url":"hrxAd","react-markdown":"cxZtv","linkifyjs":"67hJe","ical-expander":"5D44D","react-virtuoso":"k6zTl","dayjs/plugin/isBetween":"nqWFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqdUq":[function(require,module,exports) {
"use strict";
const Parser = require("./lib/Parser");
const XmlCdata = require("./lib/XmlCdata");
const XmlComment = require("./lib/XmlComment");
const XmlDocument = require("./lib/XmlDocument");
const XmlElement = require("./lib/XmlElement");
const XmlNode = require("./lib/XmlNode");
const XmlProcessingInstruction = require("./lib/XmlProcessingInstruction");
const XmlText = require("./lib/XmlText");
/**
Parses the given XML string and returns an `XmlDocument` instance representing
the document tree.

@example

  const parseXml = require('@rgrove/parse-xml');
  let doc = parseXml('<kittens fuzzy="yes">I like fuzzy kittens.</kittens>');

@param {string} xml
  XML string to parse.

@param {object} [options]
  Parsing options.

  @param {boolean} [options.ignoreUndefinedEntities=false]
    When `true`, an undefined named entity (like "&bogus;") will be left in the
    output as is instead of causing a parse error.

  @param {boolean} [options.preserveCdata=false]
    When `true`, CDATA sections will be preserved in the document as `XmlCdata`
    nodes. Otherwise CDATA sections will be represented as `XmlText` nodes,
    which keeps the node tree simpler and easier to work with.

  @param {boolean} [options.preserveComments=false]
    When `true`, comments will be preserved in the document as `XmlComment`
    nodes. Otherwise comments will not be included in the node tree.

  @param {(entity: string) => string?} [options.resolveUndefinedEntity]
    When an undefined named entity is encountered, this function will be called
    with the entity as its only argument. It should return a string value with
    which to replace the entity, or `null` or `undefined` to treat the entity as
    undefined (which may result in a parse error depending on the value of
    `ignoreUndefinedEntities`).

  @param {boolean} [options.sortAttributes=false]
    When `true`, attributes in an element's `attributes` object will be sorted
    in alphanumeric order by name. Otherwise they'll retain their original order
    as found in the XML.

@returns {XmlDocument}
@public
*/ function parseXml(xml, options) {
    return new Parser(xml, options).document;
}
parseXml.XmlCdata = XmlCdata;
parseXml.XmlComment = XmlComment;
parseXml.XmlDocument = XmlDocument;
parseXml.XmlElement = XmlElement;
parseXml.XmlNode = XmlNode;
parseXml.XmlProcessingInstruction = XmlProcessingInstruction;
parseXml.XmlText = XmlText;
module.exports = parseXml;

},{"./lib/Parser":"2zczX","./lib/XmlCdata":"fAh9d","./lib/XmlComment":"NEw4j","./lib/XmlDocument":"4lC2y","./lib/XmlElement":"2wEWb","./lib/XmlNode":"9LLjO","./lib/XmlProcessingInstruction":"dw3l5","./lib/XmlText":"hdnEu"}],"2zczX":[function(require,module,exports) {
"use strict";
const StringScanner = require("./StringScanner");
const syntax = require("./syntax");
const XmlCdata = require("./XmlCdata");
const XmlComment = require("./XmlComment");
const XmlDocument = require("./XmlDocument");
const XmlElement = require("./XmlElement");
const XmlProcessingInstruction = require("./XmlProcessingInstruction");
const XmlText = require("./XmlText");
const emptyString = "";
/**
Parses an XML string into an `XmlDocument`.

@private
*/ class Parser {
    /**
  @param {string} xml
    XML string to parse.

  @param {object} [options]
    Parsing options.

    @param {boolean} [options.ignoreUndefinedEntities=false]
    @param {boolean} [options.preserveCdata=false]
    @param {boolean} [options.preserveComments=false]
    @param {(entity: string) => string?} [options.resolveUndefinedEntity]
    @param {boolean} [options.sortAttributes=false]
  */ constructor(xml, options = {}){
        /** @type {XmlDocument} */ this.document = new XmlDocument();
        /** @type {XmlDocument|XmlElement} */ this.currentNode = this.document;
        this.options = options;
        this.scanner = new StringScanner(normalizeXmlString(xml));
        this.consumeProlog();
        if (!this.consumeElement()) this.error("Root element is missing or invalid");
        while(this.consumeMisc()); // eslint-disable-line no-empty
        if (!this.scanner.isEnd) this.error("Extra content at the end of the document");
    }
    /**
  Adds the given `XmlNode` as a child of `this.currentNode`.

  @param {XmlNode} node
  */ addNode(node) {
        node.parent = this.currentNode;
        // @ts-ignore
        this.currentNode.children.push(node);
    }
    /**
  Adds the given _text_ to the document, either by appending it to a preceding
  `XmlText` node (if possible) or by creating a new `XmlText` node.

  @param {string} text
  */ addText(text) {
        let { children  } = this.currentNode;
        if (children.length > 0) {
            let prevNode = children[children.length - 1];
            if (prevNode instanceof XmlText) {
                // The previous node is a text node, so we can append to it and avoid
                // creating another node.
                prevNode.text += text;
                return;
            }
        }
        this.addNode(new XmlText(text));
    }
    /**
  Consumes an `AttValue` (attribute value) if possible.

  @returns {string|false}
    Contents of the `AttValue` minus quotes, or `false` if nothing was consumed.
    An empty string indicates that an `AttValue` was consumed but was empty.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-AttValue
  */ consumeAttributeValue() {
        let { scanner  } = this;
        let quote = scanner.peek();
        if (quote !== '"' && quote !== "'") return false;
        scanner.advance();
        let chars;
        let isClosed = false;
        let value = emptyString;
        let regex = quote === '"' ? /[^"&<]+/y : /[^'&<]+/y;
        matchLoop: while(!scanner.isEnd){
            chars = scanner.consumeMatch(regex);
            if (chars) {
                this.validateChars(chars);
                value += chars.replace(/[\t\r\n]/g, " ");
            }
            let nextChar = scanner.peek();
            switch(nextChar){
                case quote:
                    isClosed = true;
                    break matchLoop;
                case "&":
                    value += this.consumeReference();
                    continue;
                case "<":
                    this.error("Unescaped `<` is not allowed in an attribute value"); /* istanbul ignore next */ 
                    break;
                case emptyString:
                    this.error("Unclosed attribute"); /* istanbul ignore next */ 
                    break;
            }
        }
        if (!isClosed) this.error("Unclosed attribute");
        scanner.advance();
        return value;
    }
    /**
  Consumes a CDATA section if possible.

  @returns {boolean}
    Whether a CDATA section was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-cdata-sect
  */ consumeCdataSection() {
        let { scanner  } = this;
        if (!scanner.consumeStringFast("<![CDATA[")) return false;
        let text = scanner.consumeUntilString("]]>");
        this.validateChars(text);
        if (!scanner.consumeStringFast("]]>")) this.error("Unclosed CDATA section");
        if (this.options.preserveCdata) this.addNode(new XmlCdata(text));
        else this.addText(text);
        return true;
    }
    /**
  Consumes character data if possible.

  @returns {boolean}
    Whether character data was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#dt-chardata
  */ consumeCharData() {
        let { scanner  } = this;
        let charData = scanner.consumeUntilMatch(/<|&|]]>/g);
        if (!charData) return false;
        this.validateChars(charData);
        if (scanner.peek() === "]" && scanner.peek(3) === "]]>") this.error("Element content may not contain the CDATA section close delimiter `]]>`");
        this.addText(charData);
        return true;
    }
    /**
  Consumes a comment if possible.

  @returns {boolean}
    Whether a comment was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Comment
  */ consumeComment() {
        let { scanner  } = this;
        if (!scanner.consumeStringFast("<!--")) return false;
        let content = scanner.consumeUntilString("--");
        this.validateChars(content);
        if (!scanner.consumeStringFast("-->")) {
            if (scanner.peek(2) === "--") this.error("The string `--` isn't allowed inside a comment");
            else this.error("Unclosed comment");
        }
        if (this.options.preserveComments) this.addNode(new XmlComment(content.trim()));
        return true;
    }
    /**
  Consumes a reference in a content context if possible.

  This differs from `consumeReference()` in that a consumed reference will be
  added to the document as a text node instead of returned.

  @returns {boolean}
    Whether a reference was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#entproc
  */ consumeContentReference() {
        let ref = this.consumeReference();
        if (ref) {
            this.addText(ref);
            return true;
        }
        return false;
    }
    /**
  Consumes a doctype declaration if possible.

  This is a loose implementation since doctype declarations are currently
  discarded without further parsing.

  @returns {boolean}
    Whether a doctype declaration was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#dtd
  */ consumeDoctypeDeclaration() {
        let { scanner  } = this;
        if (!scanner.consumeStringFast("<!DOCTYPE") || !this.consumeWhitespace()) return false;
        scanner.consumeMatch(/[^[>]+/y);
        if (scanner.consumeMatch(/\[[\s\S]+?\][\x20\t\r\n]*>/y)) return true;
        if (!scanner.consumeStringFast(">")) this.error("Unclosed doctype declaration");
        return true;
    }
    /**
  Consumes an element if possible.

  @returns {boolean}
    Whether an element was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-element
  */ consumeElement() {
        let { scanner  } = this;
        let mark = scanner.charIndex;
        if (scanner.peek() !== "<") return false;
        scanner.advance();
        let name = this.consumeName();
        if (!name) {
            scanner.reset(mark);
            return false;
        }
        let attributes = Object.create(null);
        while(this.consumeWhitespace()){
            let attrName = this.consumeName();
            if (!attrName) continue;
            let attrValue = this.consumeEqual() && this.consumeAttributeValue();
            if (attrValue === false) this.error("Attribute value expected");
            if (attrName in attributes) this.error(`Duplicate attribute: ${attrName}`);
            if (attrName === "xml:space" && attrValue !== "default" && attrValue !== "preserve") this.error('Value of the `xml:space` attribute must be "default" or "preserve"');
            attributes[attrName] = attrValue;
        }
        if (this.options.sortAttributes) {
            let attrNames = Object.keys(attributes).sort();
            let sortedAttributes = Object.create(null);
            for(let i = 0; i < attrNames.length; ++i){
                let attrName = attrNames[i];
                sortedAttributes[attrName] = attributes[attrName];
            }
            attributes = sortedAttributes;
        }
        let isEmpty = Boolean(scanner.consumeStringFast("/>"));
        let element = new XmlElement(name, attributes);
        element.parent = this.currentNode;
        if (!isEmpty) {
            if (!scanner.consumeStringFast(">")) this.error(`Unclosed start tag for element \`${name}\``);
            this.currentNode = element;
            this.consumeCharData();
            while(this.consumeElement() || this.consumeContentReference() || this.consumeCdataSection() || this.consumeProcessingInstruction() || this.consumeComment())this.consumeCharData();
            let endTagMark = scanner.charIndex;
            let endTagName;
            if (!scanner.consumeStringFast("</") || !(endTagName = this.consumeName()) || endTagName !== name) {
                scanner.reset(endTagMark);
                this.error(`Missing end tag for element ${name}`);
            }
            this.consumeWhitespace();
            if (!scanner.consumeStringFast(">")) this.error(`Unclosed end tag for element ${name}`);
            this.currentNode = element.parent;
        }
        this.addNode(element);
        return true;
    }
    /**
  Consumes an `Eq` production if possible.

  @returns {boolean}
    Whether an `Eq` production was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Eq
  */ consumeEqual() {
        this.consumeWhitespace();
        if (this.scanner.consumeStringFast("=")) {
            this.consumeWhitespace();
            return true;
        }
        return false;
    }
    /**
  Consumes `Misc` content if possible.

  @returns {boolean}
    Whether anything was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Misc
  */ consumeMisc() {
        return this.consumeComment() || this.consumeProcessingInstruction() || this.consumeWhitespace();
    }
    /**
  Consumes one or more `Name` characters if possible.

  @returns {string}
    `Name` characters, or an empty string if none were consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Name
  */ consumeName() {
        return syntax.isNameStartChar(this.scanner.peek()) ? this.scanner.consumeMatchFn(syntax.isNameChar) : emptyString;
    }
    /**
  Consumes a processing instruction if possible.

  @returns {boolean}
    Whether a processing instruction was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-pi
  */ consumeProcessingInstruction() {
        let { scanner  } = this;
        let mark = scanner.charIndex;
        if (!scanner.consumeStringFast("<?")) return false;
        let name = this.consumeName();
        if (name) {
            if (name.toLowerCase() === "xml") {
                scanner.reset(mark);
                this.error("XML declaration isn't allowed here");
            }
        } else this.error("Invalid processing instruction");
        if (!this.consumeWhitespace()) {
            if (scanner.consumeStringFast("?>")) {
                this.addNode(new XmlProcessingInstruction(name));
                return true;
            }
            this.error("Whitespace is required after a processing instruction name");
        }
        let content = scanner.consumeUntilString("?>");
        this.validateChars(content);
        if (!scanner.consumeStringFast("?>")) this.error("Unterminated processing instruction");
        this.addNode(new XmlProcessingInstruction(name, content));
        return true;
    }
    /**
  Consumes a prolog if possible.

  @returns {boolean}
    Whether a prolog was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-prolog-dtd
  */ consumeProlog() {
        let { scanner  } = this;
        let mark = scanner.charIndex;
        this.consumeXmlDeclaration();
        while(this.consumeMisc()); // eslint-disable-line no-empty
        if (this.consumeDoctypeDeclaration()) {
            while(this.consumeMisc()); // eslint-disable-line no-empty
        }
        return mark < scanner.charIndex;
    }
    /**
  Consumes a reference if possible.

  This differs from `consumeContentReference()` in that a consumed reference
  will be returned rather than added to the document.

  @returns {string|false}
    Parsed reference value, or `false` if nothing was consumed (to distinguish
    from a reference that resolves to an empty string).

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Reference
  */ consumeReference() {
        let { scanner  } = this;
        if (scanner.peek() !== "&") return false;
        scanner.advance();
        let ref = scanner.consumeMatchFn(syntax.isReferenceChar);
        if (scanner.consume() !== ";") this.error("Unterminated reference (a reference must end with `;`)");
        let parsedValue;
        if (ref[0] === "#") {
            // This is a character reference.
            let codePoint = ref[1] === "x" ? parseInt(ref.slice(2), 16) // Hex codepoint.
             : parseInt(ref.slice(1), 10); // Decimal codepoint.
            if (isNaN(codePoint)) this.error("Invalid character reference");
            parsedValue = String.fromCodePoint(codePoint);
            if (!syntax.isXmlChar(parsedValue)) this.error("Character reference resolves to an invalid character");
        } else {
            // This is an entity reference.
            parsedValue = syntax.predefinedEntities[ref];
            if (parsedValue === undefined) {
                let { ignoreUndefinedEntities , resolveUndefinedEntity  } = this.options;
                let wrappedRef = `&${ref};`; // for backcompat with <= 2.x
                if (resolveUndefinedEntity) {
                    let resolvedValue = resolveUndefinedEntity(wrappedRef);
                    if (resolvedValue !== null && resolvedValue !== undefined) {
                        let type = typeof resolvedValue;
                        if (type !== "string") throw new TypeError(`\`resolveUndefinedEntity()\` must return a string, \`null\`, or \`undefined\`, but returned a value of type ${type}`);
                        return resolvedValue;
                    }
                }
                if (ignoreUndefinedEntities) return wrappedRef;
                scanner.reset(-wrappedRef.length);
                this.error(`Named entity isn't defined: ${wrappedRef}`);
            }
        }
        return parsedValue;
    }
    /**
  Consumes a `SystemLiteral` if possible.

  A `SystemLiteral` is similar to an attribute value, but allows the characters
  `<` and `&` and doesn't replace references.

  @returns {string|false}
    Value of the `SystemLiteral` minus quotes, or `false` if nothing was
    consumed. An empty string indicates that a `SystemLiteral` was consumed but
    was empty.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-SystemLiteral
  */ consumeSystemLiteral() {
        let { scanner  } = this;
        let quote = scanner.consumeStringFast('"') || scanner.consumeStringFast("'");
        if (!quote) return false;
        let value = scanner.consumeUntilString(quote);
        this.validateChars(value);
        if (!scanner.consumeStringFast(quote)) this.error("Missing end quote");
        return value;
    }
    /**
  Consumes one or more whitespace characters if possible.

  @returns {boolean}
    Whether any whitespace characters were consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#white
  */ consumeWhitespace() {
        return Boolean(this.scanner.consumeMatchFn(syntax.isWhitespace));
    }
    /**
  Consumes an XML declaration if possible.

  @returns {boolean}
    Whether an XML declaration was consumed.

  @see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-XMLDecl
  */ consumeXmlDeclaration() {
        let { scanner  } = this;
        if (!scanner.consumeStringFast("<?xml")) return false;
        if (!this.consumeWhitespace()) this.error("Invalid XML declaration");
        let version = Boolean(scanner.consumeStringFast("version")) && this.consumeEqual() && this.consumeSystemLiteral();
        if (version === false) this.error("XML version is missing or invalid");
        else if (!/^1\.[0-9]+$/.test(version)) this.error("Invalid character in version number");
        if (this.consumeWhitespace()) {
            let encoding = Boolean(scanner.consumeStringFast("encoding")) && this.consumeEqual() && this.consumeSystemLiteral();
            if (encoding) this.consumeWhitespace();
            let standalone = Boolean(scanner.consumeStringFast("standalone")) && this.consumeEqual() && this.consumeSystemLiteral();
            if (standalone) {
                if (standalone !== "yes" && standalone !== "no") this.error('Only "yes" and "no" are permitted as values of `standalone`');
                this.consumeWhitespace();
            }
        }
        if (!scanner.consumeStringFast("?>")) this.error("Invalid or unclosed XML declaration");
        return true;
    }
    /**
  Throws an error at the current scanner position.

  @param {string} message
  */ error(message) {
        let { charIndex , string: xml  } = this.scanner;
        let column = 1;
        let excerpt = "";
        let line = 1;
        // Find the line and column where the error occurred.
        for(let i = 0; i < charIndex; ++i){
            let char = xml[i];
            if (char === "\n") {
                column = 1;
                excerpt = "";
                line += 1;
            } else {
                column += 1;
                excerpt += char;
            }
        }
        let eol = xml.indexOf("\n", charIndex);
        excerpt += eol === -1 ? xml.slice(charIndex) : xml.slice(charIndex, eol);
        let excerptStart = 0;
        // Keep the excerpt below 50 chars, but always keep the error position in
        // view.
        if (excerpt.length > 50) {
            if (column < 40) excerpt = excerpt.slice(0, 50);
            else {
                excerptStart = column - 20;
                excerpt = excerpt.slice(excerptStart, column + 30);
            }
        }
        let err = new Error(`${message} (line ${line}, column ${column})\n` + `  ${excerpt}\n` + " ".repeat(column - excerptStart + 1) + "^\n");
        Object.assign(err, {
            column,
            excerpt,
            line,
            pos: charIndex
        });
        throw err;
    }
    /**
  Throws an invalid character error if any character in the given _string_ isn't
  a valid XML character.

  @param {string} string
  */ validateChars(string) {
        let charIndex = 0;
        for (let char of string){
            if (syntax.isNotXmlChar(char)) {
                this.scanner.reset(-([
                    ...string
                ].length - charIndex));
                this.error("Invalid character");
            }
            charIndex += 1;
        }
    }
}
module.exports = Parser;
// -- Private Functions --------------------------------------------------------
/**
Normalizes the given XML string by stripping a byte order mark (if present) and
replacing CRLF sequences and lone CR characters with LF characters.

@param {string} xml
@returns {string}
*/ function normalizeXmlString(xml) {
    if (xml[0] === "\uFEFF") xml = xml.slice(1);
    return xml.replace(/\r\n?/g, "\n");
} /** @typedef {import('./XmlNode')} XmlNode */ 

},{"./StringScanner":"aBjG2","./syntax":"7V8iZ","./XmlCdata":"fAh9d","./XmlComment":"NEw4j","./XmlDocument":"4lC2y","./XmlElement":"2wEWb","./XmlProcessingInstruction":"dw3l5","./XmlText":"hdnEu"}],"aBjG2":[function(require,module,exports) {
"use strict";
const emptyString = "";
/**
@private
*/ class StringScanner {
    /**
  @param {string} string
  */ constructor(string){
        /** @type {string[]} */ this.chars = [
            ...string
        ];
        /** @type {number} */ this.charCount = this.chars.length;
        /** @type {number} */ this.charIndex = 0;
        /** @type {number[]} */ this.charsToBytes = new Array(this.charCount);
        /** @type {boolean} */ this.multiByteMode = false;
        /** @type {string} */ this.string = string;
        let { chars , charCount , charsToBytes  } = this;
        if (charCount === string.length) // There are no multibyte characters in the input string, so char indexes
        // and byte indexes are the same.
        for(let i = 0; i < charCount; ++i)charsToBytes[i] = i;
        else {
            // Create a mapping of character indexes to byte indexes. When the string
            // contains multibyte characters, a byte index may not necessarily align
            // with a character index.
            for(let byteIndex = 0, charIndex = 0; charIndex < charCount; ++charIndex){
                charsToBytes[charIndex] = byteIndex;
                byteIndex += chars[charIndex].length;
            }
            this.multiByteMode = true;
        }
    }
    /**
  Whether the current character index is at the end of the input string.

  @type {boolean}
  */ get isEnd() {
        return this.charIndex >= this.charCount;
    }
    // -- Protected Methods ------------------------------------------------------
    /**
  Returns the number of characters in the given _string_, which may differ from
  the byte length if the string contains multibyte characters.

  @param {string} string
  @returns {number}
  */ _charLength(string) {
        let { length  } = string;
        if (length < 2 || !this.multiByteMode) return length;
        // We could get the char length with `[ ...string ].length`, but that's
        // actually slower than this approach, which replaces surrogate pairs with
        // single-byte characters.
        return string.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length;
    }
    // -- Public Methods ---------------------------------------------------------
    /**
  Advances the scanner by the given number of characters, stopping if the end of
  the string is reached.

  @param {number} [count]
  */ advance(count = 1) {
        this.charIndex = Math.min(this.charCount, this.charIndex + count);
    }
    /**
  Consumes and returns the given number of characters if possible, advancing the
  scanner and stopping if the end of the string is reached.

  If no characters could be consumed, an empty string will be returned.

  @param {number} [count]
  @returns {string}
  */ consume(count = 1) {
        let chars = this.peek(count);
        this.advance(count);
        return chars;
    }
    /**
  Consumes a match for the given sticky regex, advances the scanner, updates the
  `lastIndex` property of the regex, and returns the matching string.

  The regex must have a sticky flag ("y") so that its `lastIndex` prop can be
  used to anchor the match at the current scanner position.

  Returns the consumed string, or an empty string if nothing was consumed.

  @param {RegExp} regex
  @returns {string}
  */ consumeMatch(regex) {
        if (!regex.sticky) throw new Error('`regex` must have a sticky flag ("y")');
        regex.lastIndex = this.charsToBytes[this.charIndex];
        let result = regex.exec(this.string);
        if (result === null) return emptyString;
        let match = result[0];
        this.advance(this._charLength(match));
        return match;
    }
    /**
  Consumes and returns all characters for which the given function returns a
  truthy value, stopping on the first falsy return value or if the end of the
  input is reached.

  @param {(char: string) => boolean} fn
  @returns {string}
  */ consumeMatchFn(fn) {
        let startIndex = this.charIndex;
        while(!this.isEnd && fn(this.peek()))this.advance();
        return this.charIndex > startIndex ? this.string.slice(this.charsToBytes[startIndex], this.charsToBytes[this.charIndex]) : emptyString;
    }
    /**
  Consumes the given string if it exists at the current character index, and
  advances the scanner.

  If the given string doesn't exist at the current character index, an empty
  string will be returned and the scanner will not be advanced.

  @param {string} stringToConsume
  @returns {string}
  */ consumeString(stringToConsume) {
        if (this.consumeStringFast(stringToConsume)) return stringToConsume;
        if (!this.multiByteMode) return emptyString;
        let { length  } = stringToConsume;
        let charLengthToMatch = this._charLength(stringToConsume);
        if (charLengthToMatch !== length && stringToConsume === this.peek(charLengthToMatch)) {
            this.advance(charLengthToMatch);
            return stringToConsume;
        }
        return emptyString;
    }
    /**
   * Does the same thing as `consumeString()`, but doesn't support consuming
   * multibyte characters. This can be much faster if you only need to match
   * single byte characters.
   *
   * @param {string} stringToConsume
   * @returns {string}
   */ consumeStringFast(stringToConsume) {
        if (this.peek() === stringToConsume[0]) {
            let { length  } = stringToConsume;
            if (length === 1) {
                this.advance();
                return stringToConsume;
            }
            if (this.peek(length) === stringToConsume) {
                this.advance(length);
                return stringToConsume;
            }
        }
        return emptyString;
    }
    /**
  Consumes characters until the given global regex is matched, advancing the
  scanner up to (but not beyond) the beginning of the match and updating the
  `lastIndex` property of the regex.

  The regex must have a global flag ("g") so that its `lastIndex` prop can be
  used to begin the search at the current scanner position.

  Returns the consumed string, or an empty string if nothing was consumed.

  @param {RegExp} regex
  @returns {string}
  */ consumeUntilMatch(regex) {
        if (!regex.global) throw new Error('`regex` must have a global flag ("g")');
        let byteIndex = this.charsToBytes[this.charIndex];
        regex.lastIndex = byteIndex;
        let match = regex.exec(this.string);
        if (match === null || match.index === byteIndex) return emptyString;
        let result = this.string.slice(byteIndex, match.index);
        this.advance(this._charLength(result));
        return result;
    }
    /**
  Consumes characters until the given string is found, advancing the scanner up
  to (but not beyond) that point.

  Returns the consumed string, or an empty string if nothing was consumed.

  @param {string} searchString
  @returns {string}
  */ consumeUntilString(searchString) {
        let { charIndex , charsToBytes , string  } = this;
        let byteIndex = charsToBytes[charIndex];
        let matchByteIndex = string.indexOf(searchString, byteIndex);
        if (matchByteIndex <= 0) return emptyString;
        let result = string.slice(byteIndex, matchByteIndex);
        this.advance(this._charLength(result));
        return result;
    }
    /**
  Returns the given number of characters starting at the current character
  index, without advancing the scanner and without exceeding the end of the
  input string.

  @param {number} [count]
  @returns {string}
  */ peek(count = 1) {
        // Inlining this comparison instead of checking `this.isEnd` improves perf
        // slightly since `peek()` is called so frequently.
        if (this.charIndex >= this.charCount) return emptyString;
        if (count === 1) return this.chars[this.charIndex];
        let { charsToBytes , charIndex  } = this;
        return this.string.slice(charsToBytes[charIndex], charsToBytes[charIndex + count]);
    }
    /**
  Resets the scanner position to the given character _index_, or to the start of
  the input string if no index is given.

  If _index_ is negative, the scanner position will be moved backward by that
  many characters, stopping if the beginning of the string is reached.

  @param {number} [index]
  */ reset(index = 0) {
        this.charIndex = index >= 0 ? Math.min(this.charCount, index) : Math.max(0, this.charIndex + index);
    }
}
module.exports = StringScanner;

},{}],"7V8iZ":[function(require,module,exports) {
"use strict";
// -- Exported Constants -------------------------------------------------------
/**
Mapping of predefined entity names to their replacement values.

@type {Readonly<{[name: string]: string}>}
@see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent
*/ const predefinedEntities = Object.freeze(Object.assign(Object.create(null), {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
}));
exports.predefinedEntities = predefinedEntities;
// -- Exported Functions -------------------------------------------------------
/**
Returns `true` if _char_ is an XML `NameChar`, `false` if it isn't.

@param {string} char
@returns {boolean}
@see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-NameChar
*/ function isNameChar(char) {
    if (isNameStartChar(char)) return true;
    let cp = getCodePoint(char);
    return cp === 0x2D // -
     || cp === 0x2E // .
     || cp >= 0x30 && cp <= 0x39 // 0-9
     || cp === 0xB7 || cp >= 0x300 && cp <= 0x36F || cp >= 0x203F && cp <= 0x2040;
}
exports.isNameChar = isNameChar;
/**
Returns `true` if _char_ is an XML `NameStartChar`, `false` if it isn't.

@param {string} char
@returns {boolean}
@see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-NameStartChar
*/ function isNameStartChar(char) {
    let cp = getCodePoint(char);
    return cp === 0x3A // :
     || cp === 0x5F // _
     || cp >= 0x41 && cp <= 0x5A // A-Z
     || cp >= 0x61 && cp <= 0x7A // a-z
     || cp >= 0xC0 && cp <= 0xD6 || cp >= 0xD8 && cp <= 0xF6 || cp >= 0xF8 && cp <= 0x2FF || cp >= 0x370 && cp <= 0x37D || cp >= 0x37F && cp <= 0x1FFF || cp >= 0x200C && cp <= 0x200D || cp >= 0x2070 && cp <= 0x218F || cp >= 0x2C00 && cp <= 0x2FEF || cp >= 0x3001 && cp <= 0xD7FF || cp >= 0xF900 && cp <= 0xFDCF || cp >= 0xFDF0 && cp <= 0xFFFD || cp >= 0x10000 && cp <= 0xEFFFF;
}
exports.isNameStartChar = isNameStartChar;
/**
Returns `true` if _char_ is not a valid XML `Char`, `false` otherwise.

@param {string} char
@returns {boolean}
@see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char
*/ function isNotXmlChar(char) {
    return !isXmlChar(char);
}
exports.isNotXmlChar = isNotXmlChar;
/**
Returns `true` if _char_ is a valid reference character (which may appear
between `&` and `;` in a reference), `false` otherwise.

@param {string} char
@returns {boolean}
@see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-references
*/ function isReferenceChar(char) {
    return char === "#" || isNameChar(char);
}
exports.isReferenceChar = isReferenceChar;
/**
Returns `true` if _char_ is an XML whitespace character, `false` otherwise.

@param {string} char
@returns {boolean}
@see https://www.w3.org/TR/2008/REC-xml-20081126/#white
*/ function isWhitespace(char) {
    let cp = getCodePoint(char);
    return cp === 0x20 || cp === 0x9 || cp === 0xA || cp === 0xD;
}
exports.isWhitespace = isWhitespace;
/**
Returns `true` if _char_ is a valid XML `Char`, `false` otherwise.

@param {string} char
@returns {boolean}
@see https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char
*/ function isXmlChar(char) {
    let cp = getCodePoint(char);
    return cp === 0x9 || cp === 0xA || cp === 0xD || cp >= 0x20 && cp <= 0xD7FF || cp >= 0xE000 && cp <= 0xFFFD || cp >= 0x10000 && cp <= 0x10FFFF;
}
exports.isXmlChar = isXmlChar;
// -- Private Functions --------------------------------------------------------
/**
Returns the Unicode code point value of the given character, or `-1` if _char_
is empty.

@param {string} char
@returns {number}
*/ function getCodePoint(char) {
    return char.codePointAt(0) || -1;
}

},{}],"fAh9d":[function(require,module,exports) {
"use strict";
const XmlNode = require("./XmlNode");
const XmlText = require("./XmlText");
/**
A CDATA section within an XML document.

@public
*/ class XmlCdata extends XmlText {
    get type() {
        return XmlNode.TYPE_CDATA;
    }
}
module.exports = XmlCdata;

},{"./XmlNode":"9LLjO","./XmlText":"hdnEu"}],"9LLjO":[function(require,module,exports) {
"use strict";
/**
Base interface for a node in an XML document.

@public
*/ class XmlNode {
    constructor(){
        /**
    Parent node of this node, or `null` if this node has no parent.

    @type {XmlDocument|XmlElement|null}
    @public
    */ this.parent = null;
    }
    /**
  Document that contains this node, or `null` if this node is not associated
  with a document.

  @type {XmlDocument?}
  @public
  */ get document() {
        return this.parent ? this.parent.document : null;
    }
    /**
  Whether this node is the root node of the document.

  @returns {boolean}
  @public
  */ get isRootNode() {
        return this.parent ? this.parent === this.document : false;
    }
    /**
  Whether whitespace should be preserved in the content of this element and
  its children.

  This is influenced by the value of the special `xml:space` attribute, and
  will be `true` for any node whose `xml:space` attribute is set to
  "preserve". If a node has no such attribute, it will inherit the value of
  the nearest ancestor that does (if any).

  @type {boolean}
  @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-white-space
  @public
  */ get preserveWhitespace() {
        return Boolean(this.parent && this.parent.preserveWhitespace);
    }
    /**
  Type of this node.

  The value of this property is a string that matches one of the static `TYPE_*`
  properties on the `XmlNode` class (e.g. `TYPE_ELEMENT`, `TYPE_TEXT`, etc.).

  The `XmlNode` class itself is a base class and doesn't have its own type name.

  @type {string}
  @public
  */ get type() {
        return "";
    }
    /**
  Returns a JSON-serializable object representing this node, minus properties
  that could result in circular references.

  @returns {{[key: string]: any}}
  @public
  */ toJSON() {
        /** @type {{[key: string]: any}} */ let json = {
            type: this.type
        };
        if (this.isRootNode) json.isRootNode = true;
        if (this.preserveWhitespace) json.preserveWhitespace = true;
        return json;
    }
}
/**
Type value for an `XmlCdata` node.

@type {string}
@public
*/ XmlNode.TYPE_CDATA = "cdata";
/**
Type value for an `XmlComment` node.

@type {string}
@public
*/ XmlNode.TYPE_COMMENT = "comment";
/**
Type value for an `XmlDocument` node.

@type {string}
@public
*/ XmlNode.TYPE_DOCUMENT = "document";
/**
Type value for an `XmlElement` node.

@type {string}
@public
*/ XmlNode.TYPE_ELEMENT = "element";
/**
Type value for an `XmlProcessingInstruction` node.

@type {string}
@public
*/ XmlNode.TYPE_PROCESSING_INSTRUCTION = "pi";
/**
Type value for an `XmlText` node.

@type {string}
@public
*/ XmlNode.TYPE_TEXT = "text";
module.exports = XmlNode; /** @typedef {import('./XmlDocument')} XmlDocument */  /** @typedef {import('./XmlElement')} XmlElement */ 

},{}],"hdnEu":[function(require,module,exports) {
"use strict";
const XmlNode = require("./XmlNode");
/**
Text content within an XML document.

@public
*/ class XmlText extends XmlNode {
    /**
  @param {string} [text]
  */ constructor(text = ""){
        super();
        /**
    Text content of this node.

    @type {string}
    @public
    */ this.text = text;
    }
    get type() {
        return XmlNode.TYPE_TEXT;
    }
    toJSON() {
        return Object.assign(XmlNode.prototype.toJSON.call(this), {
            text: this.text
        });
    }
}
module.exports = XmlText;

},{"./XmlNode":"9LLjO"}],"NEw4j":[function(require,module,exports) {
"use strict";
const XmlNode = require("./XmlNode");
/**
A comment within an XML document.

@public
*/ class XmlComment extends XmlNode {
    /**
  @param {string} [content]
  */ constructor(content = ""){
        super();
        /**
    Content of this comment.

    @type {string}
    @public
    */ this.content = content;
    }
    get type() {
        return XmlNode.TYPE_COMMENT;
    }
    toJSON() {
        return Object.assign(XmlNode.prototype.toJSON.call(this), {
            content: this.content
        });
    }
}
module.exports = XmlComment;

},{"./XmlNode":"9LLjO"}],"4lC2y":[function(require,module,exports) {
"use strict";
const XmlElement = require("./XmlElement");
const XmlNode = require("./XmlNode");
/**
Represents an XML document. All elements within the document are descendants of
this node.

@public
*/ class XmlDocument extends XmlNode {
    /**
  @param {Array<XmlComment|XmlElement|XmlProcessingInstruction>} [children]
  */ constructor(children = []){
        super();
        /**
    Child nodes of this document.

    @type {Array<XmlComment|XmlElement|XmlProcessingInstruction>}
    @public
    */ this.children = children;
    }
    get document() {
        return this;
    }
    /**
  Root element of this document, or `null` if this document is empty.

  @type {XmlElement?}
  @public
  */ get root() {
        // @ts-ignore
        return this.children.find((child)=>child instanceof XmlElement) || null;
    }
    /**
  Text content of this document and all its descendants.

  @type {string}
  @public
  */ get text() {
        return this.children.map((child)=>"text" in child ? child.text : "").join("");
    }
    get type() {
        return XmlNode.TYPE_DOCUMENT;
    }
    toJSON() {
        return Object.assign(XmlNode.prototype.toJSON.call(this), {
            children: this.children.map((child)=>child.toJSON())
        });
    }
}
module.exports = XmlDocument; /** @typedef {import('./XmlComment')} XmlComment */  /** @typedef {import('./XmlProcessingInstruction')} XmlProcessingInstruction */ 

},{"./XmlElement":"2wEWb","./XmlNode":"9LLjO"}],"2wEWb":[function(require,module,exports) {
"use strict";
const XmlNode = require("./XmlNode");
/**
Element in an XML document.

@public
*/ class XmlElement extends XmlNode {
    /**
  @param {string} name
  @param {{[attrName: string]: string}} [attributes]
  @param {Array<XmlCdata|XmlComment|XmlElement|XmlProcessingInstruction|XmlText>} [children]
  */ constructor(name, attributes = Object.create(null), children = []){
        super();
        /**
    Name of this element.

    @type {string}
    @public
    */ this.name = name;
        /**
    Attributes on this element.

    @type {{[attrName: string]: string}}
    @public
    */ this.attributes = attributes;
        /**
    Child nodes of this element.

    @type {Array<XmlCdata|XmlComment|XmlElement|XmlProcessingInstruction|XmlText>}
    @public
    */ this.children = children;
    }
    /**
  Whether this node is empty (meaning it has no children).

  @type {boolean}
  @public
  */ get isEmpty() {
        return this.children.length === 0;
    }
    /** @type {boolean} */ get preserveWhitespace() {
        /** @type {XmlNode?} */ let node = this;
        while(node instanceof XmlElement){
            if ("xml:space" in node.attributes) return node.attributes["xml:space"] === "preserve";
            node = node.parent;
        }
        return false;
    }
    /**
  Text content of this element and all its descendants.

  @type {string}
  @public
  */ get text() {
        return this.children.map((child)=>"text" in child ? child.text : "").join("");
    }
    get type() {
        return XmlNode.TYPE_ELEMENT;
    }
    /** @returns {{[key: string]: any}} */ toJSON() {
        return Object.assign(XmlNode.prototype.toJSON.call(this), {
            name: this.name,
            attributes: this.attributes,
            children: this.children.map((child)=>child.toJSON())
        });
    }
}
module.exports = XmlElement; /** @typedef {import('./XmlCdata')} XmlCdata */  /** @typedef {import('./XmlComment')} XmlComment */  /** @typedef {import('./XmlProcessingInstruction')} XmlProcessingInstruction */  /** @typedef {import('./XmlText')} XmlText */ 

},{"./XmlNode":"9LLjO"}],"dw3l5":[function(require,module,exports) {
"use strict";
const XmlNode = require("./XmlNode");
/**
A processing instruction within an XML document.

@public
*/ class XmlProcessingInstruction extends XmlNode {
    /**
  @param {string} name
  @param {string} [content]
  */ constructor(name, content = ""){
        super();
        /**
    Name of this processing instruction. Also sometimes referred to as the
    processing instruction "target".

    @type {string}
    @public
    */ this.name = name;
        /**
    Content of this processing instruction.

    @type {string}
    @public
    */ this.content = content;
    }
    get type() {
        return XmlNode.TYPE_PROCESSING_INSTRUCTION;
    }
    toJSON() {
        return Object.assign(XmlNode.prototype.toJSON.call(this), {
            name: this.name,
            content: this.content
        });
    }
}
module.exports = XmlProcessingInstruction;

},{"./XmlNode":"9LLjO"}],"5D44D":[function(require,module,exports) {
"use strict";
const ICAL = require("ical.js");
// Copied from https://dxr.mozilla.org/comm-central/source/calendar/timezones/zones.json
// And compiled using node compile-zones.js
// See also https://github.com/mozilla-comm/ical.js/issues/195
const timezones = require("./zones-compiled.json");
class IcalExpander {
    constructor(opts){
        this.maxIterations = opts.maxIterations != null ? opts.maxIterations : 1000;
        this.skipInvalidDates = opts.skipInvalidDates != null ? opts.skipInvalidDates : false;
        this.jCalData = ICAL.parse(opts.ics);
        this.component = new ICAL.Component(this.jCalData);
        this.events = this.component.getAllSubcomponents("vevent").map((vevent)=>new ICAL.Event(vevent));
        if (this.skipInvalidDates) this.events = this.events.filter((evt)=>{
            try {
                evt.startDate.toJSDate();
                evt.endDate.toJSDate();
                return true;
            } catch (err) {
                // skipping events with invalid time
                return false;
            }
        });
    }
    between(after, before) {
        function isEventWithinRange(startTime, endTime) {
            return (!after || endTime >= after.getTime()) && (!before || startTime <= before.getTime());
        }
        function getTimes(eventOrOccurrence) {
            const startTime = eventOrOccurrence.startDate.toJSDate().getTime();
            let endTime = eventOrOccurrence.endDate.toJSDate().getTime();
            // If it is an all day event, the end date is set to 00:00 of the next day
            // So we need to make it be 23:59:59 to compare correctly with the given range
            if (eventOrOccurrence.endDate.isDate && endTime > startTime) endTime -= 1;
            return {
                startTime,
                endTime
            };
        }
        const exceptions = [];
        this.events.forEach((event)=>{
            if (event.isRecurrenceException()) exceptions.push(event);
        });
        const ret = {
            events: [],
            occurrences: []
        };
        this.events.filter((e)=>!e.isRecurrenceException()).forEach((event)=>{
            const exdates = [];
            event.component.getAllProperties("exdate").forEach((exdateProp)=>{
                const exdate = exdateProp.getFirstValue();
                exdates.push(exdate.toJSDate().getTime());
            });
            // Recurring event is handled differently
            if (event.isRecurring()) {
                const iterator = event.iterator();
                let next;
                let i = 0;
                do {
                    i += 1;
                    next = iterator.next();
                    if (next) {
                        const occurrence = event.getOccurrenceDetails(next);
                        const { startTime , endTime  } = getTimes(occurrence);
                        const isOccurrenceExcluded = exdates.indexOf(startTime) !== -1;
                        // TODO check that within same day?
                        const exception = exceptions.find((ex)=>ex.uid === event.uid && ex.recurrenceId.toJSDate().getTime() === occurrence.startDate.toJSDate().getTime());
                        // We have passed the max date, stop
                        if (before && startTime > before.getTime()) break;
                        // Check that we are within our range
                        if (isEventWithinRange(startTime, endTime)) {
                            if (exception) ret.events.push(exception);
                            else if (!isOccurrenceExcluded) ret.occurrences.push(occurrence);
                        }
                    }
                }while (next && (!this.maxIterations || i < this.maxIterations));
                return;
            }
            // Non-recurring event:
            const { startTime , endTime  } = getTimes(event);
            if (isEventWithinRange(startTime, endTime)) ret.events.push(event);
        });
        return ret;
    }
    before(before) {
        return this.between(undefined, before);
    }
    after(after) {
        return this.between(after);
    }
    all() {
        return this.between();
    }
}
function registerTimezones() {
    Object.keys(timezones).forEach((key)=>{
        const icsData = timezones[key];
        const icsTimezone = `BEGIN:VTIMEZONE\r\nTZID:${key}\r\n${icsData}\r\nEND:VTIMEZONE`;
        const parsed = ICAL.parse(`BEGIN:VCALENDAR\nPRODID:-//tzurl.org//NONSGML Olson 2012h//EN\nVERSION:2.0\n${icsTimezone}\nEND:VCALENDAR`);
        const comp = new ICAL.Component(parsed);
        const vtimezone = comp.getFirstSubcomponent("vtimezone");
        ICAL.TimezoneService.register(key, new ICAL.Timezone(vtimezone));
    });
}
registerTimezones();
module.exports = IcalExpander;

},{"ical.js":"98Sz9","./zones-compiled.json":"h9dki"}],"98Sz9":[function(require,module,exports) {
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2021 */ /* jshint ignore:start */ var ICAL;
(function() {
    // CommonJS, where exports may be different each time.
    ICAL = module.exports;
})();
/* jshint ignore:end */ /* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * The number of characters before iCalendar line folding should occur
 * @type {Number}
 * @default 75
 */ ICAL.foldLength = 75;
/**
 * The character(s) to be used for a newline. The default value is provided by
 * rfc5545.
 * @type {String}
 * @default "\r\n"
 */ ICAL.newLineChar = "\r\n";
/**
 * Helper functions used in various places within ical.js
 * @namespace
 */ ICAL.helpers = {
    /**
   * Compiles a list of all referenced TZIDs in all subcomponents and
   * removes any extra VTIMEZONE subcomponents. In addition, if any TZIDs
   * are referenced by a component, but a VTIMEZONE does not exist,
   * an attempt will be made to generate a VTIMEZONE using ICAL.TimezoneService.
   *
   * @param {ICAL.Component} vcal     The top-level VCALENDAR component.
   * @return {ICAL.Component}         The ICAL.Component that was passed in.
   */ updateTimezones: function(vcal) {
        var allsubs, properties, vtimezones, reqTzid, i, tzid;
        if (!vcal || vcal.name !== "vcalendar") //not a top-level vcalendar component
        return vcal;
        //Store vtimezone subcomponents in an object reference by tzid.
        //Store properties from everything else in another array
        allsubs = vcal.getAllSubcomponents();
        properties = [];
        vtimezones = {};
        for(i = 0; i < allsubs.length; i++)if (allsubs[i].name === "vtimezone") {
            tzid = allsubs[i].getFirstProperty("tzid").getFirstValue();
            vtimezones[tzid] = allsubs[i];
        } else properties = properties.concat(allsubs[i].getAllProperties());
        //create an object with one entry for each required tz
        reqTzid = {};
        for(i = 0; i < properties.length; i++)if (tzid = properties[i].getParameter("tzid")) reqTzid[tzid] = true;
        //delete any vtimezones that are not on the reqTzid list.
        for(i in vtimezones)if (vtimezones.hasOwnProperty(i) && !reqTzid[i]) vcal.removeSubcomponent(vtimezones[i]);
        //create any missing, but registered timezones
        for(i in reqTzid)if (reqTzid.hasOwnProperty(i) && !vtimezones[i] && ICAL.TimezoneService.has(i)) vcal.addSubcomponent(ICAL.TimezoneService.get(i).component);
        return vcal;
    },
    /**
   * Checks if the given type is of the number type and also NaN.
   *
   * @param {Number} number     The number to check
   * @return {Boolean}          True, if the number is strictly NaN
   */ isStrictlyNaN: function(number) {
        return typeof number === "number" && isNaN(number);
    },
    /**
   * Parses a string value that is expected to be an integer, when the valid is
   * not an integer throws a decoration error.
   *
   * @param {String} string     Raw string input
   * @return {Number}           Parsed integer
   */ strictParseInt: function(string) {
        var result = parseInt(string, 10);
        if (ICAL.helpers.isStrictlyNaN(result)) throw new Error('Could not extract integer from "' + string + '"');
        return result;
    },
    /**
   * Creates or returns a class instance of a given type with the initialization
   * data if the data is not already an instance of the given type.
   *
   * @example
   * var time = new ICAL.Time(...);
   * var result = ICAL.helpers.formatClassType(time, ICAL.Time);
   *
   * (result instanceof ICAL.Time)
   * // => true
   *
   * result = ICAL.helpers.formatClassType({}, ICAL.Time);
   * (result isntanceof ICAL.Time)
   * // => true
   *
   *
   * @param {Object} data       object initialization data
   * @param {Object} type       object type (like ICAL.Time)
   * @return {?}                An instance of the found type.
   */ formatClassType: function formatClassType(data, type) {
        if (typeof data === "undefined") return undefined;
        if (data instanceof type) return data;
        return new type(data);
    },
    /**
   * Identical to indexOf but will only match values when they are not preceded
   * by a backslash character.
   *
   * @param {String} buffer         String to search
   * @param {String} search         Value to look for
   * @param {Number} pos            Start position
   * @return {Number}               The position, or -1 if not found
   */ unescapedIndexOf: function(buffer, search, pos) {
        while((pos = buffer.indexOf(search, pos)) !== -1){
            if (pos > 0 && buffer[pos - 1] === "\\") pos += 1;
            else return pos;
        }
        return -1;
    },
    /**
   * Find the index for insertion using binary search.
   *
   * @param {Array} list            The list to search
   * @param {?} seekVal             The value to insert
   * @param {function(?,?)} cmpfunc The comparison func, that can
   *                                  compare two seekVals
   * @return {Number}               The insert position
   */ binsearchInsert: function(list, seekVal, cmpfunc) {
        if (!list.length) return 0;
        var low = 0, high = list.length - 1, mid, cmpval;
        while(low <= high){
            mid = low + Math.floor((high - low) / 2);
            cmpval = cmpfunc(seekVal, list[mid]);
            if (cmpval < 0) high = mid - 1;
            else if (cmpval > 0) low = mid + 1;
            else break;
        }
        if (cmpval < 0) return mid; // insertion is displacing, so use mid outright.
        else if (cmpval > 0) return mid + 1;
        else return mid;
    },
    /**
   * Convenience function for debug output
   * @private
   */ dumpn: /* istanbul ignore next */ function() {
        if (!ICAL.debug) return;
        if (typeof console !== "undefined" && "log" in console) ICAL.helpers.dumpn = function consoleDumpn(input) {
            console.log(input);
        };
        else ICAL.helpers.dumpn = function geckoDumpn(input) {
            dump(input + "\n");
        };
        ICAL.helpers.dumpn(arguments[0]);
    },
    /**
   * Clone the passed object or primitive. By default a shallow clone will be
   * executed.
   *
   * @param {*} aSrc            The thing to clone
   * @param {Boolean=} aDeep    If true, a deep clone will be performed
   * @return {*}                The copy of the thing
   */ clone: function(aSrc, aDeep) {
        if (!aSrc || typeof aSrc != "object") return aSrc;
        else if (aSrc instanceof Date) return new Date(aSrc.getTime());
        else if ("clone" in aSrc) return aSrc.clone();
        else if (Array.isArray(aSrc)) {
            var arr = [];
            for(var i = 0; i < aSrc.length; i++)arr.push(aDeep ? ICAL.helpers.clone(aSrc[i], true) : aSrc[i]);
            return arr;
        } else {
            var obj = {};
            for(var name in aSrc)// uses prototype method to allow use of Object.create(null);
            /* istanbul ignore else */ if (Object.prototype.hasOwnProperty.call(aSrc, name)) {
                if (aDeep) obj[name] = ICAL.helpers.clone(aSrc[name], true);
                else obj[name] = aSrc[name];
            }
            return obj;
        }
    },
    /**
   * Performs iCalendar line folding. A line ending character is inserted and
   * the next line begins with a whitespace.
   *
   * @example
   * SUMMARY:This line will be fold
   *  ed right in the middle of a word.
   *
   * @param {String} aLine      The line to fold
   * @return {String}           The folded line
   */ foldline: function foldline(aLine) {
        var result = "";
        var line = aLine || "", pos = 0, line_length = 0;
        //pos counts position in line for the UTF-16 presentation
        //line_length counts the bytes for the UTF-8 presentation
        while(line.length){
            var cp = line.codePointAt(pos);
            if (cp < 128) ++line_length;
            else if (cp < 2048) line_length += 2; //needs 2 UTF-8 bytes
            else if (cp < 65536) line_length += 3;
            else line_length += 4; //cp is less than 1114112
            if (line_length < ICAL.foldLength + 1) pos += cp > 65535 ? 2 : 1;
            else {
                result += ICAL.newLineChar + " " + line.substring(0, pos);
                line = line.substring(pos);
                pos = line_length = 0;
            }
        }
        return result.substr(ICAL.newLineChar.length + 1);
    },
    /**
   * Pads the given string or number with zeros so it will have at least two
   * characters.
   *
   * @param {String|Number} data    The string or number to pad
   * @return {String}               The number padded as a string
   */ pad2: function pad(data) {
        if (typeof data !== "string") {
            // handle fractions.
            if (typeof data === "number") data = parseInt(data);
            data = String(data);
        }
        var len = data.length;
        switch(len){
            case 0:
                return "00";
            case 1:
                return "0" + data;
            default:
                return data;
        }
    },
    /**
   * Truncates the given number, correctly handling negative numbers.
   *
   * @param {Number} number     The number to truncate
   * @return {Number}           The truncated number
   */ trunc: function trunc(number) {
        return number < 0 ? Math.ceil(number) : Math.floor(number);
    },
    /**
   * Poor-man's cross-browser inheritance for JavaScript. Doesn't support all
   * the features, but enough for our usage.
   *
   * @param {Function} base     The base class constructor function.
   * @param {Function} child    The child class constructor function.
   * @param {Object} extra      Extends the prototype with extra properties
   *                              and methods
   */ inherits: function(base, child, extra) {
        function F() {}
        F.prototype = base.prototype;
        child.prototype = new F();
        if (extra) ICAL.helpers.extend(extra, child.prototype);
    },
    /**
   * Poor-man's cross-browser object extension. Doesn't support all the
   * features, but enough for our usage. Note that the target's properties are
   * not overwritten with the source properties.
   *
   * @example
   * var child = ICAL.helpers.extend(parent, {
   *   "bar": 123
   * });
   *
   * @param {Object} source     The object to extend
   * @param {Object} target     The object to extend with
   * @return {Object}           Returns the target.
   */ extend: function(source, target) {
        for(var key in source){
            var descr = Object.getOwnPropertyDescriptor(source, key);
            if (descr && !Object.getOwnPropertyDescriptor(target, key)) Object.defineProperty(target, key, descr);
        }
        return target;
    }
};
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /** @namespace ICAL */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.design = function() {
    "use strict";
    var FROM_ICAL_NEWLINE = /\\\\|\\;|\\,|\\[Nn]/g;
    var TO_ICAL_NEWLINE = /\\|;|,|\n/g;
    var FROM_VCARD_NEWLINE = /\\\\|\\,|\\[Nn]/g;
    var TO_VCARD_NEWLINE = /\\|,|\n/g;
    function createTextType(fromNewline, toNewline) {
        var result = {
            matches: /.*/,
            fromICAL: function(aValue, structuredEscape) {
                return replaceNewline(aValue, fromNewline, structuredEscape);
            },
            toICAL: function(aValue, structuredEscape) {
                var regEx = toNewline;
                if (structuredEscape) regEx = new RegExp(regEx.source + "|" + structuredEscape);
                return aValue.replace(regEx, function(str) {
                    switch(str){
                        case "\\":
                            return "\\\\";
                        case ";":
                            return "\\;";
                        case ",":
                            return "\\,";
                        case "\n":
                            return "\\n";
                        /* istanbul ignore next */ default:
                            return str;
                    }
                });
            }
        };
        return result;
    }
    // default types used multiple times
    var DEFAULT_TYPE_TEXT = {
        defaultType: "text"
    };
    var DEFAULT_TYPE_TEXT_MULTI = {
        defaultType: "text",
        multiValue: ","
    };
    var DEFAULT_TYPE_TEXT_STRUCTURED = {
        defaultType: "text",
        structuredValue: ";"
    };
    var DEFAULT_TYPE_INTEGER = {
        defaultType: "integer"
    };
    var DEFAULT_TYPE_DATETIME_DATE = {
        defaultType: "date-time",
        allowedTypes: [
            "date-time",
            "date"
        ]
    };
    var DEFAULT_TYPE_DATETIME = {
        defaultType: "date-time"
    };
    var DEFAULT_TYPE_URI = {
        defaultType: "uri"
    };
    var DEFAULT_TYPE_UTCOFFSET = {
        defaultType: "utc-offset"
    };
    var DEFAULT_TYPE_RECUR = {
        defaultType: "recur"
    };
    var DEFAULT_TYPE_DATE_ANDOR_TIME = {
        defaultType: "date-and-or-time",
        allowedTypes: [
            "date-time",
            "date",
            "text"
        ]
    };
    function replaceNewlineReplace(string) {
        switch(string){
            case "\\\\":
                return "\\";
            case "\\;":
                return ";";
            case "\\,":
                return ",";
            case "\\n":
            case "\\N":
                return "\n";
            /* istanbul ignore next */ default:
                return string;
        }
    }
    function replaceNewline(value, newline, structuredEscape) {
        // avoid regex when possible.
        if (value.indexOf("\\") === -1) return value;
        if (structuredEscape) newline = new RegExp(newline.source + "|\\\\" + structuredEscape);
        return value.replace(newline, replaceNewlineReplace);
    }
    var commonProperties = {
        "categories": DEFAULT_TYPE_TEXT_MULTI,
        "url": DEFAULT_TYPE_URI,
        "version": DEFAULT_TYPE_TEXT,
        "uid": DEFAULT_TYPE_TEXT
    };
    var commonValues = {
        "boolean": {
            values: [
                "TRUE",
                "FALSE"
            ],
            fromICAL: function(aValue) {
                switch(aValue){
                    case "TRUE":
                        return true;
                    case "FALSE":
                        return false;
                    default:
                        //TODO: parser warning
                        return false;
                }
            },
            toICAL: function(aValue) {
                if (aValue) return "TRUE";
                return "FALSE";
            }
        },
        float: {
            matches: /^[+-]?\d+\.\d+$/,
            fromICAL: function(aValue) {
                var parsed = parseFloat(aValue);
                if (ICAL.helpers.isStrictlyNaN(parsed)) // TODO: parser warning
                return 0.0;
                return parsed;
            },
            toICAL: function(aValue) {
                return String(aValue);
            }
        },
        integer: {
            fromICAL: function(aValue) {
                var parsed = parseInt(aValue);
                if (ICAL.helpers.isStrictlyNaN(parsed)) return 0;
                return parsed;
            },
            toICAL: function(aValue) {
                return String(aValue);
            }
        },
        "utc-offset": {
            toICAL: function(aValue) {
                if (aValue.length < 7) // no seconds
                // -0500
                return aValue.substr(0, 3) + aValue.substr(4, 2);
                else // seconds
                // -050000
                return aValue.substr(0, 3) + aValue.substr(4, 2) + aValue.substr(7, 2);
            },
            fromICAL: function(aValue) {
                if (aValue.length < 6) // no seconds
                // -05:00
                return aValue.substr(0, 3) + ":" + aValue.substr(3, 2);
                else // seconds
                // -05:00:00
                return aValue.substr(0, 3) + ":" + aValue.substr(3, 2) + ":" + aValue.substr(5, 2);
            },
            decorate: function(aValue) {
                return ICAL.UtcOffset.fromString(aValue);
            },
            undecorate: function(aValue) {
                return aValue.toString();
            }
        }
    };
    var icalParams = {
        // Although the syntax is DQUOTE uri DQUOTE, I don't think we should
        // enfoce anything aside from it being a valid content line.
        //
        // At least some params require - if multi values are used - DQUOTEs
        // for each of its values - e.g. delegated-from="uri1","uri2"
        // To indicate this, I introduced the new k/v pair
        // multiValueSeparateDQuote: true
        //
        // "ALTREP": { ... },
        // CN just wants a param-value
        // "CN": { ... }
        "cutype": {
            values: [
                "INDIVIDUAL",
                "GROUP",
                "RESOURCE",
                "ROOM",
                "UNKNOWN"
            ],
            allowXName: true,
            allowIanaToken: true
        },
        "delegated-from": {
            valueType: "cal-address",
            multiValue: ",",
            multiValueSeparateDQuote: true
        },
        "delegated-to": {
            valueType: "cal-address",
            multiValue: ",",
            multiValueSeparateDQuote: true
        },
        // "DIR": { ... }, // See ALTREP
        "encoding": {
            values: [
                "8BIT",
                "BASE64"
            ]
        },
        // "FMTTYPE": { ... }, // See ALTREP
        "fbtype": {
            values: [
                "FREE",
                "BUSY",
                "BUSY-UNAVAILABLE",
                "BUSY-TENTATIVE"
            ],
            allowXName: true,
            allowIanaToken: true
        },
        // "LANGUAGE": { ... }, // See ALTREP
        "member": {
            valueType: "cal-address",
            multiValue: ",",
            multiValueSeparateDQuote: true
        },
        "partstat": {
            // TODO These values are actually different per-component
            values: [
                "NEEDS-ACTION",
                "ACCEPTED",
                "DECLINED",
                "TENTATIVE",
                "DELEGATED",
                "COMPLETED",
                "IN-PROCESS"
            ],
            allowXName: true,
            allowIanaToken: true
        },
        "range": {
            values: [
                "THISANDFUTURE"
            ]
        },
        "related": {
            values: [
                "START",
                "END"
            ]
        },
        "reltype": {
            values: [
                "PARENT",
                "CHILD",
                "SIBLING"
            ],
            allowXName: true,
            allowIanaToken: true
        },
        "role": {
            values: [
                "REQ-PARTICIPANT",
                "CHAIR",
                "OPT-PARTICIPANT",
                "NON-PARTICIPANT"
            ],
            allowXName: true,
            allowIanaToken: true
        },
        "rsvp": {
            values: [
                "TRUE",
                "FALSE"
            ]
        },
        "sent-by": {
            valueType: "cal-address"
        },
        "tzid": {
            matches: /^\//
        },
        "value": {
            // since the value here is a 'type' lowercase is used.
            values: [
                "binary",
                "boolean",
                "cal-address",
                "date",
                "date-time",
                "duration",
                "float",
                "integer",
                "period",
                "recur",
                "text",
                "time",
                "uri",
                "utc-offset"
            ],
            allowXName: true,
            allowIanaToken: true
        }
    };
    // When adding a value here, be sure to add it to the parameter types!
    var icalValues = ICAL.helpers.extend(commonValues, {
        text: createTextType(FROM_ICAL_NEWLINE, TO_ICAL_NEWLINE),
        uri: {
        },
        "binary": {
            decorate: function(aString) {
                return ICAL.Binary.fromString(aString);
            },
            undecorate: function(aBinary) {
                return aBinary.toString();
            }
        },
        "cal-address": {
        },
        "date": {
            decorate: function(aValue, aProp) {
                if (design.strict) return ICAL.Time.fromDateString(aValue, aProp);
                else return ICAL.Time.fromString(aValue, aProp);
            },
            /**
       * undecorates a time object.
       */ undecorate: function(aValue) {
                return aValue.toString();
            },
            fromICAL: function(aValue) {
                // from: 20120901
                // to: 2012-09-01
                if (!design.strict && aValue.length >= 15) // This is probably a date-time, e.g. 20120901T130000Z
                return icalValues["date-time"].fromICAL(aValue);
                else return aValue.substr(0, 4) + "-" + aValue.substr(4, 2) + "-" + aValue.substr(6, 2);
            },
            toICAL: function(aValue) {
                // from: 2012-09-01
                // to: 20120901
                var len = aValue.length;
                if (len == 10) return aValue.substr(0, 4) + aValue.substr(5, 2) + aValue.substr(8, 2);
                else if (len >= 19) return icalValues["date-time"].toICAL(aValue);
                else //TODO: serialize warning?
                return aValue;
            }
        },
        "date-time": {
            fromICAL: function(aValue) {
                // from: 20120901T130000
                // to: 2012-09-01T13:00:00
                if (!design.strict && aValue.length == 8) // This is probably a date, e.g. 20120901
                return icalValues.date.fromICAL(aValue);
                else {
                    var result = aValue.substr(0, 4) + "-" + aValue.substr(4, 2) + "-" + aValue.substr(6, 2) + "T" + aValue.substr(9, 2) + ":" + aValue.substr(11, 2) + ":" + aValue.substr(13, 2);
                    if (aValue[15] && aValue[15] === "Z") result += "Z";
                    return result;
                }
            },
            toICAL: function(aValue) {
                // from: 2012-09-01T13:00:00
                // to: 20120901T130000
                var len = aValue.length;
                if (len == 10 && !design.strict) return icalValues.date.toICAL(aValue);
                else if (len >= 19) {
                    var result = aValue.substr(0, 4) + aValue.substr(5, 2) + // grab the (DDTHH) segment
                    aValue.substr(8, 5) + // MM
                    aValue.substr(14, 2) + // SS
                    aValue.substr(17, 2);
                    if (aValue[19] && aValue[19] === "Z") result += "Z";
                    return result;
                } else // TODO: error
                return aValue;
            },
            decorate: function(aValue, aProp) {
                if (design.strict) return ICAL.Time.fromDateTimeString(aValue, aProp);
                else return ICAL.Time.fromString(aValue, aProp);
            },
            undecorate: function(aValue) {
                return aValue.toString();
            }
        },
        duration: {
            decorate: function(aValue) {
                return ICAL.Duration.fromString(aValue);
            },
            undecorate: function(aValue) {
                return aValue.toString();
            }
        },
        period: {
            fromICAL: function(string) {
                var parts = string.split("/");
                parts[0] = icalValues["date-time"].fromICAL(parts[0]);
                if (!ICAL.Duration.isValueString(parts[1])) parts[1] = icalValues["date-time"].fromICAL(parts[1]);
                return parts;
            },
            toICAL: function(parts) {
                if (!design.strict && parts[0].length == 10) parts[0] = icalValues.date.toICAL(parts[0]);
                else parts[0] = icalValues["date-time"].toICAL(parts[0]);
                if (!ICAL.Duration.isValueString(parts[1])) {
                    if (!design.strict && parts[1].length == 10) parts[1] = icalValues.date.toICAL(parts[1]);
                    else parts[1] = icalValues["date-time"].toICAL(parts[1]);
                }
                return parts.join("/");
            },
            decorate: function(aValue, aProp) {
                return ICAL.Period.fromJSON(aValue, aProp, !design.strict);
            },
            undecorate: function(aValue) {
                return aValue.toJSON();
            }
        },
        recur: {
            fromICAL: function(string) {
                return ICAL.Recur._stringToData(string, true);
            },
            toICAL: function(data) {
                var str = "";
                for(var k in data){
                    /* istanbul ignore if */ if (!Object.prototype.hasOwnProperty.call(data, k)) continue;
                    var val = data[k];
                    if (k == "until") {
                        if (val.length > 10) val = icalValues["date-time"].toICAL(val);
                        else val = icalValues.date.toICAL(val);
                    } else if (k == "wkst") {
                        if (typeof val === "number") val = ICAL.Recur.numericDayToIcalDay(val);
                    } else if (Array.isArray(val)) val = val.join(",");
                    str += k.toUpperCase() + "=" + val + ";";
                }
                return str.substr(0, str.length - 1);
            },
            decorate: function decorate(aValue) {
                return ICAL.Recur.fromData(aValue);
            },
            undecorate: function(aRecur) {
                return aRecur.toJSON();
            }
        },
        time: {
            fromICAL: function(aValue) {
                // from: MMHHSS(Z)?
                // to: HH:MM:SS(Z)?
                if (aValue.length < 6) // TODO: parser exception?
                return aValue;
                // HH::MM::SSZ?
                var result = aValue.substr(0, 2) + ":" + aValue.substr(2, 2) + ":" + aValue.substr(4, 2);
                if (aValue[6] === "Z") result += "Z";
                return result;
            },
            toICAL: function(aValue) {
                // from: HH:MM:SS(Z)?
                // to: MMHHSS(Z)?
                if (aValue.length < 8) //TODO: error
                return aValue;
                var result = aValue.substr(0, 2) + aValue.substr(3, 2) + aValue.substr(6, 2);
                if (aValue[8] === "Z") result += "Z";
                return result;
            }
        }
    });
    var icalProperties = ICAL.helpers.extend(commonProperties, {
        "action": DEFAULT_TYPE_TEXT,
        "attach": {
            defaultType: "uri"
        },
        "attendee": {
            defaultType: "cal-address"
        },
        "calscale": DEFAULT_TYPE_TEXT,
        "class": DEFAULT_TYPE_TEXT,
        "comment": DEFAULT_TYPE_TEXT,
        "completed": DEFAULT_TYPE_DATETIME,
        "contact": DEFAULT_TYPE_TEXT,
        "created": DEFAULT_TYPE_DATETIME,
        "description": DEFAULT_TYPE_TEXT,
        "dtend": DEFAULT_TYPE_DATETIME_DATE,
        "dtstamp": DEFAULT_TYPE_DATETIME,
        "dtstart": DEFAULT_TYPE_DATETIME_DATE,
        "due": DEFAULT_TYPE_DATETIME_DATE,
        "duration": {
            defaultType: "duration"
        },
        "exdate": {
            defaultType: "date-time",
            allowedTypes: [
                "date-time",
                "date"
            ],
            multiValue: ","
        },
        "exrule": DEFAULT_TYPE_RECUR,
        "freebusy": {
            defaultType: "period",
            multiValue: ","
        },
        "geo": {
            defaultType: "float",
            structuredValue: ";"
        },
        "last-modified": DEFAULT_TYPE_DATETIME,
        "location": DEFAULT_TYPE_TEXT,
        "method": DEFAULT_TYPE_TEXT,
        "organizer": {
            defaultType: "cal-address"
        },
        "percent-complete": DEFAULT_TYPE_INTEGER,
        "priority": DEFAULT_TYPE_INTEGER,
        "prodid": DEFAULT_TYPE_TEXT,
        "related-to": DEFAULT_TYPE_TEXT,
        "repeat": DEFAULT_TYPE_INTEGER,
        "rdate": {
            defaultType: "date-time",
            allowedTypes: [
                "date-time",
                "date",
                "period"
            ],
            multiValue: ",",
            detectType: function(string) {
                if (string.indexOf("/") !== -1) return "period";
                return string.indexOf("T") === -1 ? "date" : "date-time";
            }
        },
        "recurrence-id": DEFAULT_TYPE_DATETIME_DATE,
        "resources": DEFAULT_TYPE_TEXT_MULTI,
        "request-status": DEFAULT_TYPE_TEXT_STRUCTURED,
        "rrule": DEFAULT_TYPE_RECUR,
        "sequence": DEFAULT_TYPE_INTEGER,
        "status": DEFAULT_TYPE_TEXT,
        "summary": DEFAULT_TYPE_TEXT,
        "transp": DEFAULT_TYPE_TEXT,
        "trigger": {
            defaultType: "duration",
            allowedTypes: [
                "duration",
                "date-time"
            ]
        },
        "tzoffsetfrom": DEFAULT_TYPE_UTCOFFSET,
        "tzoffsetto": DEFAULT_TYPE_UTCOFFSET,
        "tzurl": DEFAULT_TYPE_URI,
        "tzid": DEFAULT_TYPE_TEXT,
        "tzname": DEFAULT_TYPE_TEXT
    });
    // When adding a value here, be sure to add it to the parameter types!
    var vcardValues = ICAL.helpers.extend(commonValues, {
        text: createTextType(FROM_VCARD_NEWLINE, TO_VCARD_NEWLINE),
        uri: createTextType(FROM_VCARD_NEWLINE, TO_VCARD_NEWLINE),
        date: {
            decorate: function(aValue) {
                return ICAL.VCardTime.fromDateAndOrTimeString(aValue, "date");
            },
            undecorate: function(aValue) {
                return aValue.toString();
            },
            fromICAL: function(aValue) {
                if (aValue.length == 8) return icalValues.date.fromICAL(aValue);
                else if (aValue[0] == "-" && aValue.length == 6) return aValue.substr(0, 4) + "-" + aValue.substr(4);
                else return aValue;
            },
            toICAL: function(aValue) {
                if (aValue.length == 10) return icalValues.date.toICAL(aValue);
                else if (aValue[0] == "-" && aValue.length == 7) return aValue.substr(0, 4) + aValue.substr(5);
                else return aValue;
            }
        },
        time: {
            decorate: function(aValue) {
                return ICAL.VCardTime.fromDateAndOrTimeString("T" + aValue, "time");
            },
            undecorate: function(aValue) {
                return aValue.toString();
            },
            fromICAL: function(aValue) {
                var splitzone = vcardValues.time._splitZone(aValue, true);
                var zone = splitzone[0], value = splitzone[1];
                //console.log("SPLIT: ",splitzone);
                if (value.length == 6) value = value.substr(0, 2) + ":" + value.substr(2, 2) + ":" + value.substr(4, 2);
                else if (value.length == 4 && value[0] != "-") value = value.substr(0, 2) + ":" + value.substr(2, 2);
                else if (value.length == 5) value = value.substr(0, 3) + ":" + value.substr(3, 2);
                if (zone.length == 5 && (zone[0] == "-" || zone[0] == "+")) zone = zone.substr(0, 3) + ":" + zone.substr(3);
                return value + zone;
            },
            toICAL: function(aValue) {
                var splitzone = vcardValues.time._splitZone(aValue);
                var zone = splitzone[0], value = splitzone[1];
                if (value.length == 8) value = value.substr(0, 2) + value.substr(3, 2) + value.substr(6, 2);
                else if (value.length == 5 && value[0] != "-") value = value.substr(0, 2) + value.substr(3, 2);
                else if (value.length == 6) value = value.substr(0, 3) + value.substr(4, 2);
                if (zone.length == 6 && (zone[0] == "-" || zone[0] == "+")) zone = zone.substr(0, 3) + zone.substr(4);
                return value + zone;
            },
            _splitZone: function(aValue, isFromIcal) {
                var lastChar = aValue.length - 1;
                var signChar = aValue.length - (isFromIcal ? 5 : 6);
                var sign = aValue[signChar];
                var zone, value;
                if (aValue[lastChar] == "Z") {
                    zone = aValue[lastChar];
                    value = aValue.substr(0, lastChar);
                } else if (aValue.length > 6 && (sign == "-" || sign == "+")) {
                    zone = aValue.substr(signChar);
                    value = aValue.substr(0, signChar);
                } else {
                    zone = "";
                    value = aValue;
                }
                return [
                    zone,
                    value
                ];
            }
        },
        "date-time": {
            decorate: function(aValue) {
                return ICAL.VCardTime.fromDateAndOrTimeString(aValue, "date-time");
            },
            undecorate: function(aValue) {
                return aValue.toString();
            },
            fromICAL: function(aValue) {
                return vcardValues["date-and-or-time"].fromICAL(aValue);
            },
            toICAL: function(aValue) {
                return vcardValues["date-and-or-time"].toICAL(aValue);
            }
        },
        "date-and-or-time": {
            decorate: function(aValue) {
                return ICAL.VCardTime.fromDateAndOrTimeString(aValue, "date-and-or-time");
            },
            undecorate: function(aValue) {
                return aValue.toString();
            },
            fromICAL: function(aValue) {
                var parts = aValue.split("T");
                return (parts[0] ? vcardValues.date.fromICAL(parts[0]) : "") + (parts[1] ? "T" + vcardValues.time.fromICAL(parts[1]) : "");
            },
            toICAL: function(aValue) {
                var parts = aValue.split("T");
                return vcardValues.date.toICAL(parts[0]) + (parts[1] ? "T" + vcardValues.time.toICAL(parts[1]) : "");
            }
        },
        timestamp: icalValues["date-time"],
        "language-tag": {
            matches: /^[a-zA-Z0-9-]+$/ // Could go with a more strict regex here
        }
    });
    var vcardParams = {
        "type": {
            valueType: "text",
            multiValue: ","
        },
        "value": {
            // since the value here is a 'type' lowercase is used.
            values: [
                "text",
                "uri",
                "date",
                "time",
                "date-time",
                "date-and-or-time",
                "timestamp",
                "boolean",
                "integer",
                "float",
                "utc-offset",
                "language-tag"
            ],
            allowXName: true,
            allowIanaToken: true
        }
    };
    var vcardProperties = ICAL.helpers.extend(commonProperties, {
        "adr": {
            defaultType: "text",
            structuredValue: ";",
            multiValue: ","
        },
        "anniversary": DEFAULT_TYPE_DATE_ANDOR_TIME,
        "bday": DEFAULT_TYPE_DATE_ANDOR_TIME,
        "caladruri": DEFAULT_TYPE_URI,
        "caluri": DEFAULT_TYPE_URI,
        "clientpidmap": DEFAULT_TYPE_TEXT_STRUCTURED,
        "email": DEFAULT_TYPE_TEXT,
        "fburl": DEFAULT_TYPE_URI,
        "fn": DEFAULT_TYPE_TEXT,
        "gender": DEFAULT_TYPE_TEXT_STRUCTURED,
        "geo": DEFAULT_TYPE_URI,
        "impp": DEFAULT_TYPE_URI,
        "key": DEFAULT_TYPE_URI,
        "kind": DEFAULT_TYPE_TEXT,
        "lang": {
            defaultType: "language-tag"
        },
        "logo": DEFAULT_TYPE_URI,
        "member": DEFAULT_TYPE_URI,
        "n": {
            defaultType: "text",
            structuredValue: ";",
            multiValue: ","
        },
        "nickname": DEFAULT_TYPE_TEXT_MULTI,
        "note": DEFAULT_TYPE_TEXT,
        "org": {
            defaultType: "text",
            structuredValue: ";"
        },
        "photo": DEFAULT_TYPE_URI,
        "related": DEFAULT_TYPE_URI,
        "rev": {
            defaultType: "timestamp"
        },
        "role": DEFAULT_TYPE_TEXT,
        "sound": DEFAULT_TYPE_URI,
        "source": DEFAULT_TYPE_URI,
        "tel": {
            defaultType: "uri",
            allowedTypes: [
                "uri",
                "text"
            ]
        },
        "title": DEFAULT_TYPE_TEXT,
        "tz": {
            defaultType: "text",
            allowedTypes: [
                "text",
                "utc-offset",
                "uri"
            ]
        },
        "xml": DEFAULT_TYPE_TEXT
    });
    var vcard3Values = ICAL.helpers.extend(commonValues, {
        binary: icalValues.binary,
        date: vcardValues.date,
        "date-time": vcardValues["date-time"],
        "phone-number": {
        },
        uri: icalValues.uri,
        text: icalValues.text,
        time: icalValues.time,
        vcard: icalValues.text,
        "utc-offset": {
            toICAL: function(aValue) {
                return aValue.substr(0, 7);
            },
            fromICAL: function(aValue) {
                return aValue.substr(0, 7);
            },
            decorate: function(aValue) {
                return ICAL.UtcOffset.fromString(aValue);
            },
            undecorate: function(aValue) {
                return aValue.toString();
            }
        }
    });
    var vcard3Params = {
        "type": {
            valueType: "text",
            multiValue: ","
        },
        "value": {
            // since the value here is a 'type' lowercase is used.
            values: [
                "text",
                "uri",
                "date",
                "date-time",
                "phone-number",
                "time",
                "boolean",
                "integer",
                "float",
                "utc-offset",
                "vcard",
                "binary"
            ],
            allowXName: true,
            allowIanaToken: true
        }
    };
    var vcard3Properties = ICAL.helpers.extend(commonProperties, {
        fn: DEFAULT_TYPE_TEXT,
        n: {
            defaultType: "text",
            structuredValue: ";",
            multiValue: ","
        },
        nickname: DEFAULT_TYPE_TEXT_MULTI,
        photo: {
            defaultType: "binary",
            allowedTypes: [
                "binary",
                "uri"
            ]
        },
        bday: {
            defaultType: "date-time",
            allowedTypes: [
                "date-time",
                "date"
            ],
            detectType: function(string) {
                return string.indexOf("T") === -1 ? "date" : "date-time";
            }
        },
        adr: {
            defaultType: "text",
            structuredValue: ";",
            multiValue: ","
        },
        label: DEFAULT_TYPE_TEXT,
        tel: {
            defaultType: "phone-number"
        },
        email: DEFAULT_TYPE_TEXT,
        mailer: DEFAULT_TYPE_TEXT,
        tz: {
            defaultType: "utc-offset",
            allowedTypes: [
                "utc-offset",
                "text"
            ]
        },
        geo: {
            defaultType: "float",
            structuredValue: ";"
        },
        title: DEFAULT_TYPE_TEXT,
        role: DEFAULT_TYPE_TEXT,
        logo: {
            defaultType: "binary",
            allowedTypes: [
                "binary",
                "uri"
            ]
        },
        agent: {
            defaultType: "vcard",
            allowedTypes: [
                "vcard",
                "text",
                "uri"
            ]
        },
        org: DEFAULT_TYPE_TEXT_STRUCTURED,
        note: DEFAULT_TYPE_TEXT_MULTI,
        prodid: DEFAULT_TYPE_TEXT,
        rev: {
            defaultType: "date-time",
            allowedTypes: [
                "date-time",
                "date"
            ],
            detectType: function(string) {
                return string.indexOf("T") === -1 ? "date" : "date-time";
            }
        },
        "sort-string": DEFAULT_TYPE_TEXT,
        sound: {
            defaultType: "binary",
            allowedTypes: [
                "binary",
                "uri"
            ]
        },
        class: DEFAULT_TYPE_TEXT,
        key: {
            defaultType: "binary",
            allowedTypes: [
                "binary",
                "text"
            ]
        }
    });
    /**
   * iCalendar design set
   * @type {ICAL.design.designSet}
   */ var icalSet = {
        value: icalValues,
        param: icalParams,
        property: icalProperties
    };
    /**
   * vCard 4.0 design set
   * @type {ICAL.design.designSet}
   */ var vcardSet = {
        value: vcardValues,
        param: vcardParams,
        property: vcardProperties
    };
    /**
   * vCard 3.0 design set
   * @type {ICAL.design.designSet}
   */ var vcard3Set = {
        value: vcard3Values,
        param: vcard3Params,
        property: vcard3Properties
    };
    /**
   * The design data, used by the parser to determine types for properties and
   * other metadata needed to produce correct jCard/jCal data.
   *
   * @alias ICAL.design
   * @namespace
   */ var design = {
        /**
     * A designSet describes value, parameter and property data. It is used by
     * ther parser and stringifier in components and properties to determine they
     * should be represented.
     *
     * @typedef {Object} designSet
     * @memberOf ICAL.design
     * @property {Object} value       Definitions for value types, keys are type names
     * @property {Object} param       Definitions for params, keys are param names
     * @property {Object} property    Defintions for properties, keys are property names
     */ /**
     * Can be set to false to make the parser more lenient.
     */ strict: true,
        /**
     * The default set for new properties and components if none is specified.
     * @type {ICAL.design.designSet}
     */ defaultSet: icalSet,
        /**
     * The default type for unknown properties
     * @type {String}
     */ defaultType: "unknown",
        /**
     * Holds the design set for known top-level components
     *
     * @type {Object}
     * @property {ICAL.design.designSet} vcard       vCard VCARD
     * @property {ICAL.design.designSet} vevent      iCalendar VEVENT
     * @property {ICAL.design.designSet} vtodo       iCalendar VTODO
     * @property {ICAL.design.designSet} vjournal    iCalendar VJOURNAL
     * @property {ICAL.design.designSet} valarm      iCalendar VALARM
     * @property {ICAL.design.designSet} vtimezone   iCalendar VTIMEZONE
     * @property {ICAL.design.designSet} daylight    iCalendar DAYLIGHT
     * @property {ICAL.design.designSet} standard    iCalendar STANDARD
     *
     * @example
     * var propertyName = 'fn';
     * var componentDesign = ICAL.design.components.vcard;
     * var propertyDetails = componentDesign.property[propertyName];
     * if (propertyDetails.defaultType == 'text') {
     *   // Yep, sure is...
     * }
     */ components: {
            vcard: vcardSet,
            vcard3: vcard3Set,
            vevent: icalSet,
            vtodo: icalSet,
            vjournal: icalSet,
            valarm: icalSet,
            vtimezone: icalSet,
            daylight: icalSet,
            standard: icalSet
        },
        /**
     * The design set for iCalendar (rfc5545/rfc7265) components.
     * @type {ICAL.design.designSet}
     */ icalendar: icalSet,
        /**
     * The design set for vCard (rfc6350/rfc7095) components.
     * @type {ICAL.design.designSet}
     */ vcard: vcardSet,
        /**
     * The design set for vCard (rfc2425/rfc2426/rfc7095) components.
     * @type {ICAL.design.designSet}
     */ vcard3: vcard3Set,
        /**
     * Gets the design set for the given component name.
     *
     * @param {String} componentName        The name of the component
     * @return {ICAL.design.designSet}      The design set for the component
     */ getDesignSet: function(componentName) {
            var isInDesign = componentName && componentName in design.components;
            return isInDesign ? design.components[componentName] : design.defaultSet;
        }
    };
    return design;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * Contains various functions to convert jCal and jCard data back into
 * iCalendar and vCard.
 * @namespace
 */ ICAL.stringify = function() {
    "use strict";
    var LINE_ENDING = "\r\n";
    var DEFAULT_VALUE_TYPE = "unknown";
    var design = ICAL.design;
    var helpers = ICAL.helpers;
    /**
   * Convert a full jCal/jCard array into a iCalendar/vCard string.
   *
   * @function ICAL.stringify
   * @variation function
   * @param {Array} jCal    The jCal/jCard document
   * @return {String}       The stringified iCalendar/vCard document
   */ function stringify(jCal) {
        if (typeof jCal[0] == "string") // This is a single component
        jCal = [
            jCal
        ];
        var i = 0;
        var len = jCal.length;
        var result = "";
        for(; i < len; i++)result += stringify.component(jCal[i]) + LINE_ENDING;
        return result;
    }
    /**
   * Converts an jCal component array into a ICAL string.
   * Recursive will resolve sub-components.
   *
   * Exact component/property order is not saved all
   * properties will come before subcomponents.
   *
   * @function ICAL.stringify.component
   * @param {Array} component
   *        jCal/jCard fragment of a component
   * @param {ICAL.design.designSet} designSet
   *        The design data to use for this component
   * @return {String}       The iCalendar/vCard string
   */ stringify.component = function(component, designSet) {
        var name = component[0].toUpperCase();
        var result = "BEGIN:" + name + LINE_ENDING;
        var props = component[1];
        var propIdx = 0;
        var propLen = props.length;
        var designSetName = component[0];
        // rfc6350 requires that in vCard 4.0 the first component is the VERSION
        // component with as value 4.0, note that 3.0 does not have this requirement.
        if (designSetName === "vcard" && component[1].length > 0 && !(component[1][0][0] === "version" && component[1][0][3] === "4.0")) designSetName = "vcard3";
        designSet = designSet || design.getDesignSet(designSetName);
        for(; propIdx < propLen; propIdx++)result += stringify.property(props[propIdx], designSet) + LINE_ENDING;
        // Ignore subcomponents if none exist, e.g. in vCard.
        var comps = component[2] || [];
        var compIdx = 0;
        var compLen = comps.length;
        for(; compIdx < compLen; compIdx++)result += stringify.component(comps[compIdx], designSet) + LINE_ENDING;
        result += "END:" + name;
        return result;
    };
    /**
   * Converts a single jCal/jCard property to a iCalendar/vCard string.
   *
   * @function ICAL.stringify.property
   * @param {Array} property
   *        jCal/jCard property array
   * @param {ICAL.design.designSet} designSet
   *        The design data to use for this property
   * @param {Boolean} noFold
   *        If true, the line is not folded
   * @return {String}       The iCalendar/vCard string
   */ stringify.property = function(property, designSet, noFold) {
        var name = property[0].toUpperCase();
        var jsName = property[0];
        var params = property[1];
        var line = name;
        var paramName;
        for(paramName in params){
            var value = params[paramName];
            /* istanbul ignore else */ if (params.hasOwnProperty(paramName)) {
                var multiValue = paramName in designSet.param && designSet.param[paramName].multiValue;
                if (multiValue && Array.isArray(value)) {
                    if (designSet.param[paramName].multiValueSeparateDQuote) multiValue = '"' + multiValue + '"';
                    value = value.map(stringify._rfc6868Unescape);
                    value = stringify.multiValue(value, multiValue, "unknown", null, designSet);
                } else value = stringify._rfc6868Unescape(value);
                line += ";" + paramName.toUpperCase();
                line += "=" + stringify.propertyValue(value);
            }
        }
        if (property.length === 3) // If there are no values, we must assume a blank value
        return line + ":";
        var valueType = property[2];
        if (!designSet) designSet = design.defaultSet;
        var propDetails;
        var multiValue = false;
        var structuredValue = false;
        var isDefault = false;
        if (jsName in designSet.property) {
            propDetails = designSet.property[jsName];
            if ("multiValue" in propDetails) multiValue = propDetails.multiValue;
            if ("structuredValue" in propDetails && Array.isArray(property[3])) structuredValue = propDetails.structuredValue;
            if ("defaultType" in propDetails) {
                if (valueType === propDetails.defaultType) isDefault = true;
            } else if (valueType === DEFAULT_VALUE_TYPE) isDefault = true;
        } else if (valueType === DEFAULT_VALUE_TYPE) isDefault = true;
        // push the VALUE property if type is not the default
        // for the current property.
        if (!isDefault) // value will never contain ;/:/, so we don't escape it here.
        line += ";VALUE=" + valueType.toUpperCase();
        line += ":";
        if (multiValue && structuredValue) line += stringify.multiValue(property[3], structuredValue, valueType, multiValue, designSet, structuredValue);
        else if (multiValue) line += stringify.multiValue(property.slice(3), multiValue, valueType, null, designSet, false);
        else if (structuredValue) line += stringify.multiValue(property[3], structuredValue, valueType, null, designSet, structuredValue);
        else line += stringify.value(property[3], valueType, designSet, false);
        return noFold ? line : ICAL.helpers.foldline(line);
    };
    /**
   * Handles escaping of property values that may contain:
   *
   *    COLON (:), SEMICOLON (;), or COMMA (,)
   *
   * If any of the above are present the result is wrapped
   * in double quotes.
   *
   * @function ICAL.stringify.propertyValue
   * @param {String} value      Raw property value
   * @return {String}           Given or escaped value when needed
   */ stringify.propertyValue = function(value) {
        if (helpers.unescapedIndexOf(value, ",") === -1 && helpers.unescapedIndexOf(value, ":") === -1 && helpers.unescapedIndexOf(value, ";") === -1) return value;
        return '"' + value + '"';
    };
    /**
   * Converts an array of ical values into a single
   * string based on a type and a delimiter value (like ",").
   *
   * @function ICAL.stringify.multiValue
   * @param {Array} values      List of values to convert
   * @param {String} delim      Used to join the values (",", ";", ":")
   * @param {String} type       Lowecase ical value type
   *        (like boolean, date-time, etc..)
   * @param {?String} innerMulti If set, each value will again be processed
   *        Used for structured values
   * @param {ICAL.design.designSet} designSet
   *        The design data to use for this property
   *
   * @return {String}           iCalendar/vCard string for value
   */ stringify.multiValue = function(values, delim, type, innerMulti, designSet, structuredValue) {
        var result = "";
        var len = values.length;
        var i = 0;
        for(; i < len; i++){
            if (innerMulti && Array.isArray(values[i])) result += stringify.multiValue(values[i], innerMulti, type, null, designSet, structuredValue);
            else result += stringify.value(values[i], type, designSet, structuredValue);
            if (i !== len - 1) result += delim;
        }
        return result;
    };
    /**
   * Processes a single ical value runs the associated "toICAL" method from the
   * design value type if available to convert the value.
   *
   * @function ICAL.stringify.value
   * @param {String|Number} value       A formatted value
   * @param {String} type               Lowercase iCalendar/vCard value type
   *  (like boolean, date-time, etc..)
   * @return {String}                   iCalendar/vCard value for single value
   */ stringify.value = function(value, type, designSet, structuredValue) {
        if (type in designSet.value && "toICAL" in designSet.value[type]) return designSet.value[type].toICAL(value, structuredValue);
        return value;
    };
    /**
   * Internal helper for rfc6868. Exposing this on ICAL.stringify so that
   * hackers can disable the rfc6868 parsing if the really need to.
   *
   * @param {String} val        The value to unescape
   * @return {String}           The escaped value
   */ stringify._rfc6868Unescape = function(val) {
        return val.replace(/[\n^"]/g, function(x) {
            return RFC6868_REPLACE_MAP[x];
        });
    };
    var RFC6868_REPLACE_MAP = {
        '"': "^'",
        "\n": "^n",
        "^": "^^"
    };
    return stringify;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * Contains various functions to parse iCalendar and vCard data.
 * @namespace
 */ ICAL.parse = function() {
    "use strict";
    var CHAR = /[^ \t]/;
    var MULTIVALUE_DELIMITER = ",";
    var VALUE_DELIMITER = ":";
    var PARAM_DELIMITER = ";";
    var PARAM_NAME_DELIMITER = "=";
    var DEFAULT_VALUE_TYPE = "unknown";
    var DEFAULT_PARAM_TYPE = "text";
    var design = ICAL.design;
    var helpers = ICAL.helpers;
    /**
   * An error that occurred during parsing.
   *
   * @param {String} message        The error message
   * @memberof ICAL.parse
   * @extends {Error}
   * @class
   */ function ParserError(message) {
        this.message = message;
        this.name = "ParserError";
        try {
            throw new Error();
        } catch (e) {
            if (e.stack) {
                var split = e.stack.split("\n");
                split.shift();
                this.stack = split.join("\n");
            }
        }
    }
    ParserError.prototype = Error.prototype;
    /**
   * Parses iCalendar or vCard data into a raw jCal object. Consult
   * documentation on the {@tutorial layers|layers of parsing} for more
   * details.
   *
   * @function ICAL.parse
   * @variation function
   * @todo Fix the API to be more clear on the return type
   * @param {String} input      The string data to parse
   * @return {Object|Object[]}  A single jCal object, or an array thereof
   */ function parser(input) {
        var state = {};
        var root = state.component = [];
        state.stack = [
            root
        ];
        parser._eachLine(input, function(err, line) {
            parser._handleContentLine(line, state);
        });
        // when there are still items on the stack
        // throw a fatal error, a component was not closed
        // correctly in that case.
        if (state.stack.length > 1) throw new ParserError("invalid ical body. component began but did not end");
        state = null;
        return root.length == 1 ? root[0] : root;
    }
    /**
   * Parse an iCalendar property value into the jCal for a single property
   *
   * @function ICAL.parse.property
   * @param {String} str
   *   The iCalendar property string to parse
   * @param {ICAL.design.designSet=} designSet
   *   The design data to use for this property
   * @return {Object}
   *   The jCal Object containing the property
   */ parser.property = function(str, designSet) {
        var state = {
            component: [
                [],
                []
            ],
            designSet: designSet || design.defaultSet
        };
        parser._handleContentLine(str, state);
        return state.component[1][0];
    };
    /**
   * Convenience method to parse a component. You can use ICAL.parse() directly
   * instead.
   *
   * @function ICAL.parse.component
   * @see ICAL.parse(function)
   * @param {String} str    The iCalendar component string to parse
   * @return {Object}       The jCal Object containing the component
   */ parser.component = function(str) {
        return parser(str);
    };
    // classes & constants
    parser.ParserError = ParserError;
    /**
   * The state for parsing content lines from an iCalendar/vCard string.
   *
   * @private
   * @memberof ICAL.parse
   * @typedef {Object} parserState
   * @property {ICAL.design.designSet} designSet    The design set to use for parsing
   * @property {ICAL.Component[]} stack             The stack of components being processed
   * @property {ICAL.Component} component           The currently active component
   */ /**
   * Handles a single line of iCalendar/vCard, updating the state.
   *
   * @private
   * @function ICAL.parse._handleContentLine
   * @param {String} line               The content line to process
   * @param {ICAL.parse.parserState}    The current state of the line parsing
   */ parser._handleContentLine = function(line, state) {
        // break up the parts of the line
        var valuePos = line.indexOf(VALUE_DELIMITER);
        var paramPos = line.indexOf(PARAM_DELIMITER);
        var lastParamIndex;
        var lastValuePos;
        // name of property or begin/end
        var name;
        var value;
        // params is only overridden if paramPos !== -1.
        // we can't do params = params || {} later on
        // because it sacrifices ops.
        var params = {};
        /**
     * Different property cases
     *
     *
     * 1. RRULE:FREQ=foo
     *    // FREQ= is not a param but the value
     *
     * 2. ATTENDEE;ROLE=REQ-PARTICIPANT;
     *    // ROLE= is a param because : has not happened yet
     */ // when the parameter delimiter is after the
        // value delimiter then it is not a parameter.
        if (paramPos !== -1 && valuePos !== -1) // when the parameter delimiter is after the
        // value delimiter then it is not a parameter.
        {
            if (paramPos > valuePos) paramPos = -1;
        }
        var parsedParams;
        if (paramPos !== -1) {
            name = line.substring(0, paramPos).toLowerCase();
            parsedParams = parser._parseParameters(line.substring(paramPos), 0, state.designSet);
            if (parsedParams[2] == -1) throw new ParserError("Invalid parameters in '" + line + "'");
            params = parsedParams[0];
            lastParamIndex = parsedParams[1].length + parsedParams[2] + paramPos;
            if ((lastValuePos = line.substring(lastParamIndex).indexOf(VALUE_DELIMITER)) !== -1) value = line.substring(lastParamIndex + lastValuePos + 1);
            else throw new ParserError("Missing parameter value in '" + line + "'");
        } else if (valuePos !== -1) {
            // without parmeters (BEGIN:VCAENDAR, CLASS:PUBLIC)
            name = line.substring(0, valuePos).toLowerCase();
            value = line.substring(valuePos + 1);
            if (name === "begin") {
                var newComponent = [
                    value.toLowerCase(),
                    [],
                    []
                ];
                if (state.stack.length === 1) state.component.push(newComponent);
                else state.component[2].push(newComponent);
                state.stack.push(state.component);
                state.component = newComponent;
                if (!state.designSet) state.designSet = design.getDesignSet(state.component[0]);
                return;
            } else if (name === "end") {
                state.component = state.stack.pop();
                return;
            }
        // If it is not begin/end, then this is a property with an empty value,
        // which should be considered valid.
        } else /**
       * Invalid line.
       * The rational to throw an error is we will
       * never be certain that the rest of the file
       * is sane and it is unlikely that we can serialize
       * the result correctly either.
       */ throw new ParserError('invalid line (no token ";" or ":") "' + line + '"');
        var valueType;
        var multiValue = false;
        var structuredValue = false;
        var propertyDetails;
        if (name in state.designSet.property) {
            propertyDetails = state.designSet.property[name];
            if ("multiValue" in propertyDetails) multiValue = propertyDetails.multiValue;
            if ("structuredValue" in propertyDetails) structuredValue = propertyDetails.structuredValue;
            if (value && "detectType" in propertyDetails) valueType = propertyDetails.detectType(value);
        }
        // attempt to determine value
        if (!valueType) {
            if (!("value" in params)) {
                if (propertyDetails) valueType = propertyDetails.defaultType;
                else valueType = DEFAULT_VALUE_TYPE;
            } else // possible to avoid this?
            valueType = params.value.toLowerCase();
        }
        delete params.value;
        /**
     * Note on `var result` juggling:
     *
     * I observed that building the array in pieces has adverse
     * effects on performance, so where possible we inline the creation.
     * It is a little ugly but resulted in ~2000 additional ops/sec.
     */ var result;
        if (multiValue && structuredValue) {
            value = parser._parseMultiValue(value, structuredValue, valueType, [], multiValue, state.designSet, structuredValue);
            result = [
                name,
                params,
                valueType,
                value
            ];
        } else if (multiValue) {
            result = [
                name,
                params,
                valueType
            ];
            parser._parseMultiValue(value, multiValue, valueType, result, null, state.designSet, false);
        } else if (structuredValue) {
            value = parser._parseMultiValue(value, structuredValue, valueType, [], null, state.designSet, structuredValue);
            result = [
                name,
                params,
                valueType,
                value
            ];
        } else {
            value = parser._parseValue(value, valueType, state.designSet, false);
            result = [
                name,
                params,
                valueType,
                value
            ];
        }
        // rfc6350 requires that in vCard 4.0 the first component is the VERSION
        // component with as value 4.0, note that 3.0 does not have this requirement.
        if (state.component[0] === "vcard" && state.component[1].length === 0 && !(name === "version" && value === "4.0")) state.designSet = design.getDesignSet("vcard3");
        state.component[1].push(result);
    };
    /**
   * Parse a value from the raw value into the jCard/jCal value.
   *
   * @private
   * @function ICAL.parse._parseValue
   * @param {String} value          Original value
   * @param {String} type           Type of value
   * @param {Object} designSet      The design data to use for this value
   * @return {Object} varies on type
   */ parser._parseValue = function(value, type, designSet, structuredValue) {
        if (type in designSet.value && "fromICAL" in designSet.value[type]) return designSet.value[type].fromICAL(value, structuredValue);
        return value;
    };
    /**
   * Parse parameters from a string to object.
   *
   * @function ICAL.parse._parseParameters
   * @private
   * @param {String} line           A single unfolded line
   * @param {Numeric} start         Position to start looking for properties
   * @param {Object} designSet      The design data to use for this property
   * @return {Object} key/value pairs
   */ parser._parseParameters = function(line, start, designSet) {
        var lastParam = start;
        var pos = 0;
        var delim = PARAM_NAME_DELIMITER;
        var result = {};
        var name, lcname;
        var value, valuePos = -1;
        var type, multiValue, mvdelim;
        // find the next '=' sign
        // use lastParam and pos to find name
        // check if " is used if so get value from "->"
        // then increment pos to find next ;
        while(pos !== false && (pos = helpers.unescapedIndexOf(line, delim, pos + 1)) !== -1){
            name = line.substr(lastParam + 1, pos - lastParam - 1);
            if (name.length == 0) throw new ParserError("Empty parameter name in '" + line + "'");
            lcname = name.toLowerCase();
            mvdelim = false;
            multiValue = false;
            if (lcname in designSet.param && designSet.param[lcname].valueType) type = designSet.param[lcname].valueType;
            else type = DEFAULT_PARAM_TYPE;
            if (lcname in designSet.param) {
                multiValue = designSet.param[lcname].multiValue;
                if (designSet.param[lcname].multiValueSeparateDQuote) mvdelim = parser._rfc6868Escape('"' + multiValue + '"');
            }
            var nextChar = line[pos + 1];
            if (nextChar === '"') {
                valuePos = pos + 2;
                pos = helpers.unescapedIndexOf(line, '"', valuePos);
                if (multiValue && pos != -1) {
                    var extendedValue = true;
                    while(extendedValue)if (line[pos + 1] == multiValue && line[pos + 2] == '"') pos = helpers.unescapedIndexOf(line, '"', pos + 3);
                    else extendedValue = false;
                }
                if (pos === -1) throw new ParserError('invalid line (no matching double quote) "' + line + '"');
                value = line.substr(valuePos, pos - valuePos);
                lastParam = helpers.unescapedIndexOf(line, PARAM_DELIMITER, pos);
                if (lastParam === -1) pos = false;
            } else {
                valuePos = pos + 1;
                // move to next ";"
                var nextPos = helpers.unescapedIndexOf(line, PARAM_DELIMITER, valuePos);
                var propValuePos = helpers.unescapedIndexOf(line, VALUE_DELIMITER, valuePos);
                if (propValuePos !== -1 && nextPos > propValuePos) {
                    // this is a delimiter in the property value, let's stop here
                    nextPos = propValuePos;
                    pos = false;
                } else if (nextPos === -1) {
                    // no ";"
                    if (propValuePos === -1) nextPos = line.length;
                    else nextPos = propValuePos;
                    pos = false;
                } else {
                    lastParam = nextPos;
                    pos = nextPos;
                }
                value = line.substr(valuePos, nextPos - valuePos);
            }
            value = parser._rfc6868Escape(value);
            if (multiValue) {
                var delimiter = mvdelim || multiValue;
                value = parser._parseMultiValue(value, delimiter, type, [], null, designSet);
            } else value = parser._parseValue(value, type, designSet);
            if (multiValue && lcname in result) {
                if (Array.isArray(result[lcname])) result[lcname].push(value);
                else result[lcname] = [
                    result[lcname],
                    value
                ];
            } else result[lcname] = value;
        }
        return [
            result,
            value,
            valuePos
        ];
    };
    /**
   * Internal helper for rfc6868. Exposing this on ICAL.parse so that
   * hackers can disable the rfc6868 parsing if the really need to.
   *
   * @function ICAL.parse._rfc6868Escape
   * @param {String} val        The value to escape
   * @return {String}           The escaped value
   */ parser._rfc6868Escape = function(val) {
        return val.replace(/\^['n^]/g, function(x) {
            return RFC6868_REPLACE_MAP[x];
        });
    };
    var RFC6868_REPLACE_MAP = {
        "^'": '"',
        "^n": "\n",
        "^^": "^"
    };
    /**
   * Parse a multi value string. This function is used either for parsing
   * actual multi-value property's values, or for handling parameter values. It
   * can be used for both multi-value properties and structured value properties.
   *
   * @private
   * @function ICAL.parse._parseMultiValue
   * @param {String} buffer     The buffer containing the full value
   * @param {String} delim      The multi-value delimiter
   * @param {String} type       The value type to be parsed
   * @param {Array.<?>} result        The array to append results to, varies on value type
   * @param {String} innerMulti The inner delimiter to split each value with
   * @param {ICAL.design.designSet} designSet   The design data for this value
   * @return {?|Array.<?>}            Either an array of results, or the first result
   */ parser._parseMultiValue = function(buffer, delim, type, result, innerMulti, designSet, structuredValue) {
        var pos = 0;
        var lastPos = 0;
        var value;
        if (delim.length === 0) return buffer;
        // split each piece
        while((pos = helpers.unescapedIndexOf(buffer, delim, lastPos)) !== -1){
            value = buffer.substr(lastPos, pos - lastPos);
            if (innerMulti) value = parser._parseMultiValue(value, innerMulti, type, [], null, designSet, structuredValue);
            else value = parser._parseValue(value, type, designSet, structuredValue);
            result.push(value);
            lastPos = pos + delim.length;
        }
        // on the last piece take the rest of string
        value = buffer.substr(lastPos);
        if (innerMulti) value = parser._parseMultiValue(value, innerMulti, type, [], null, designSet, structuredValue);
        else value = parser._parseValue(value, type, designSet, structuredValue);
        result.push(value);
        return result.length == 1 ? result[0] : result;
    };
    /**
   * Process a complete buffer of iCalendar/vCard data line by line, correctly
   * unfolding content. Each line will be processed with the given callback
   *
   * @private
   * @function ICAL.parse._eachLine
   * @param {String} buffer                         The buffer to process
   * @param {function(?String, String)} callback    The callback for each line
   */ parser._eachLine = function(buffer, callback) {
        var len = buffer.length;
        var lastPos = buffer.search(CHAR);
        var pos = lastPos;
        var line;
        var firstChar;
        var newlineOffset;
        do {
            pos = buffer.indexOf("\n", lastPos) + 1;
            if (pos > 1 && buffer[pos - 2] === "\r") newlineOffset = 2;
            else newlineOffset = 1;
            if (pos === 0) {
                pos = len;
                newlineOffset = 0;
            }
            firstChar = buffer[lastPos];
            if (firstChar === " " || firstChar === "	") // add to line
            line += buffer.substr(lastPos + 1, pos - lastPos - (newlineOffset + 1));
            else {
                if (line) callback(null, line);
                // push line
                line = buffer.substr(lastPos, pos - lastPos - newlineOffset);
            }
            lastPos = pos;
        }while (pos !== len);
        // extra ending line
        line = line.trim();
        if (line.length) callback(null, line);
    };
    return parser;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.Component = function() {
    "use strict";
    var PROPERTY_INDEX = 1;
    var COMPONENT_INDEX = 2;
    var NAME_INDEX = 0;
    /**
   * @classdesc
   * Wraps a jCal component, adding convenience methods to add, remove and
   * update subcomponents and properties.
   *
   * @class
   * @alias ICAL.Component
   * @param {Array|String} jCal         Raw jCal component data OR name of new
   *                                      component
   * @param {ICAL.Component} parent     Parent component to associate
   */ function Component(jCal, parent) {
        if (typeof jCal === "string") // jCal spec (name, properties, components)
        jCal = [
            jCal,
            [],
            []
        ];
        // mostly for legacy reasons.
        this.jCal = jCal;
        this.parent = parent || null;
    }
    Component.prototype = {
        /**
     * Hydrated properties are inserted into the _properties array at the same
     * position as in the jCal array, so it is possible that the array contains
     * undefined values for unhydrdated properties. To avoid iterating the
     * array when checking if all properties have been hydrated, we save the
     * count here.
     *
     * @type {Number}
     * @private
     */ _hydratedPropertyCount: 0,
        /**
     * The same count as for _hydratedPropertyCount, but for subcomponents
     *
     * @type {Number}
     * @private
     */ _hydratedComponentCount: 0,
        /**
     * The name of this component
     * @readonly
     */ get name () {
            return this.jCal[NAME_INDEX];
        },
        /**
     * The design set for this component, e.g. icalendar vs vcard
     *
     * @type {ICAL.design.designSet}
     * @private
     */ get _designSet () {
            var parentDesign = this.parent && this.parent._designSet;
            return parentDesign || ICAL.design.getDesignSet(this.name);
        },
        _hydrateComponent: function(index) {
            if (!this._components) {
                this._components = [];
                this._hydratedComponentCount = 0;
            }
            if (this._components[index]) return this._components[index];
            var comp = new Component(this.jCal[COMPONENT_INDEX][index], this);
            this._hydratedComponentCount++;
            return this._components[index] = comp;
        },
        _hydrateProperty: function(index) {
            if (!this._properties) {
                this._properties = [];
                this._hydratedPropertyCount = 0;
            }
            if (this._properties[index]) return this._properties[index];
            var prop = new ICAL.Property(this.jCal[PROPERTY_INDEX][index], this);
            this._hydratedPropertyCount++;
            return this._properties[index] = prop;
        },
        /**
     * Finds first sub component, optionally filtered by name.
     *
     * @param {String=} name        Optional name to filter by
     * @return {?ICAL.Component}     The found subcomponent
     */ getFirstSubcomponent: function(name) {
            if (name) {
                var i = 0;
                var comps = this.jCal[COMPONENT_INDEX];
                var len = comps.length;
                for(; i < len; i++)if (comps[i][NAME_INDEX] === name) {
                    var result = this._hydrateComponent(i);
                    return result;
                }
            } else {
                if (this.jCal[COMPONENT_INDEX].length) return this._hydrateComponent(0);
            }
            // ensure we return a value (strict mode)
            return null;
        },
        /**
     * Finds all sub components, optionally filtering by name.
     *
     * @param {String=} name            Optional name to filter by
     * @return {ICAL.Component[]}       The found sub components
     */ getAllSubcomponents: function(name) {
            var jCalLen = this.jCal[COMPONENT_INDEX].length;
            var i = 0;
            if (name) {
                var comps = this.jCal[COMPONENT_INDEX];
                var result = [];
                for(; i < jCalLen; i++)if (name === comps[i][NAME_INDEX]) result.push(this._hydrateComponent(i));
                return result;
            } else {
                if (!this._components || this._hydratedComponentCount !== jCalLen) for(; i < jCalLen; i++)this._hydrateComponent(i);
                return this._components || [];
            }
        },
        /**
     * Returns true when a named property exists.
     *
     * @param {String} name     The property name
     * @return {Boolean}        True, when property is found
     */ hasProperty: function(name) {
            var props = this.jCal[PROPERTY_INDEX];
            var len = props.length;
            var i = 0;
            for(; i < len; i++){
                // 0 is property name
                if (props[i][NAME_INDEX] === name) return true;
            }
            return false;
        },
        /**
     * Finds the first property, optionally with the given name.
     *
     * @param {String=} name        Lowercase property name
     * @return {?ICAL.Property}     The found property
     */ getFirstProperty: function(name) {
            if (name) {
                var i = 0;
                var props = this.jCal[PROPERTY_INDEX];
                var len = props.length;
                for(; i < len; i++)if (props[i][NAME_INDEX] === name) {
                    var result = this._hydrateProperty(i);
                    return result;
                }
            } else {
                if (this.jCal[PROPERTY_INDEX].length) return this._hydrateProperty(0);
            }
            return null;
        },
        /**
     * Returns first property's value, if available.
     *
     * @param {String=} name    Lowercase property name
     * @return {?String}        The found property value.
     */ getFirstPropertyValue: function(name) {
            var prop = this.getFirstProperty(name);
            if (prop) return prop.getFirstValue();
            return null;
        },
        /**
     * Get all properties in the component, optionally filtered by name.
     *
     * @param {String=} name        Lowercase property name
     * @return {ICAL.Property[]}    List of properties
     */ getAllProperties: function(name) {
            var jCalLen = this.jCal[PROPERTY_INDEX].length;
            var i = 0;
            if (name) {
                var props = this.jCal[PROPERTY_INDEX];
                var result = [];
                for(; i < jCalLen; i++)if (name === props[i][NAME_INDEX]) result.push(this._hydrateProperty(i));
                return result;
            } else {
                if (!this._properties || this._hydratedPropertyCount !== jCalLen) for(; i < jCalLen; i++)this._hydrateProperty(i);
                return this._properties || [];
            }
        },
        _removeObjectByIndex: function(jCalIndex, cache, index) {
            cache = cache || [];
            // remove cached version
            if (cache[index]) {
                var obj = cache[index];
                if ("parent" in obj) obj.parent = null;
            }
            cache.splice(index, 1);
            // remove it from the jCal
            this.jCal[jCalIndex].splice(index, 1);
        },
        _removeObject: function(jCalIndex, cache, nameOrObject) {
            var i = 0;
            var objects = this.jCal[jCalIndex];
            var len = objects.length;
            var cached = this[cache];
            if (typeof nameOrObject === "string") {
                for(; i < len; i++)if (objects[i][NAME_INDEX] === nameOrObject) {
                    this._removeObjectByIndex(jCalIndex, cached, i);
                    return true;
                }
            } else if (cached) {
                for(; i < len; i++)if (cached[i] && cached[i] === nameOrObject) {
                    this._removeObjectByIndex(jCalIndex, cached, i);
                    return true;
                }
            }
            return false;
        },
        _removeAllObjects: function(jCalIndex, cache, name) {
            var cached = this[cache];
            // Unfortunately we have to run through all children to reset their
            // parent property.
            var objects = this.jCal[jCalIndex];
            var i = objects.length - 1;
            // descending search required because splice
            // is used and will effect the indices.
            for(; i >= 0; i--)if (!name || objects[i][NAME_INDEX] === name) this._removeObjectByIndex(jCalIndex, cached, i);
        },
        /**
     * Adds a single sub component.
     *
     * @param {ICAL.Component} component        The component to add
     * @return {ICAL.Component}                 The passed in component
     */ addSubcomponent: function(component) {
            if (!this._components) {
                this._components = [];
                this._hydratedComponentCount = 0;
            }
            if (component.parent) component.parent.removeSubcomponent(component);
            var idx = this.jCal[COMPONENT_INDEX].push(component.jCal);
            this._components[idx - 1] = component;
            this._hydratedComponentCount++;
            component.parent = this;
            return component;
        },
        /**
     * Removes a single component by name or the instance of a specific
     * component.
     *
     * @param {ICAL.Component|String} nameOrComp    Name of component, or component
     * @return {Boolean}                            True when comp is removed
     */ removeSubcomponent: function(nameOrComp) {
            var removed = this._removeObject(COMPONENT_INDEX, "_components", nameOrComp);
            if (removed) this._hydratedComponentCount--;
            return removed;
        },
        /**
     * Removes all components or (if given) all components by a particular
     * name.
     *
     * @param {String=} name            Lowercase component name
     */ removeAllSubcomponents: function(name) {
            var removed = this._removeAllObjects(COMPONENT_INDEX, "_components", name);
            this._hydratedComponentCount = 0;
            return removed;
        },
        /**
     * Adds an {@link ICAL.Property} to the component.
     *
     * @param {ICAL.Property} property      The property to add
     * @return {ICAL.Property}              The passed in property
     */ addProperty: function(property) {
            if (!(property instanceof ICAL.Property)) throw new TypeError("must instance of ICAL.Property");
            if (!this._properties) {
                this._properties = [];
                this._hydratedPropertyCount = 0;
            }
            if (property.parent) property.parent.removeProperty(property);
            var idx = this.jCal[PROPERTY_INDEX].push(property.jCal);
            this._properties[idx - 1] = property;
            this._hydratedPropertyCount++;
            property.parent = this;
            return property;
        },
        /**
     * Helper method to add a property with a value to the component.
     *
     * @param {String}               name         Property name to add
     * @param {String|Number|Object} value        Property value
     * @return {ICAL.Property}                    The created property
     */ addPropertyWithValue: function(name, value) {
            var prop = new ICAL.Property(name);
            prop.setValue(value);
            this.addProperty(prop);
            return prop;
        },
        /**
     * Helper method that will update or create a property of the given name
     * and sets its value. If multiple properties with the given name exist,
     * only the first is updated.
     *
     * @param {String}               name         Property name to update
     * @param {String|Number|Object} value        Property value
     * @return {ICAL.Property}                    The created property
     */ updatePropertyWithValue: function(name, value) {
            var prop = this.getFirstProperty(name);
            if (prop) prop.setValue(value);
            else prop = this.addPropertyWithValue(name, value);
            return prop;
        },
        /**
     * Removes a single property by name or the instance of the specific
     * property.
     *
     * @param {String|ICAL.Property} nameOrProp     Property name or instance to remove
     * @return {Boolean}                            True, when deleted
     */ removeProperty: function(nameOrProp) {
            var removed = this._removeObject(PROPERTY_INDEX, "_properties", nameOrProp);
            if (removed) this._hydratedPropertyCount--;
            return removed;
        },
        /**
     * Removes all properties associated with this component, optionally
     * filtered by name.
     *
     * @param {String=} name        Lowercase property name
     * @return {Boolean}            True, when deleted
     */ removeAllProperties: function(name) {
            var removed = this._removeAllObjects(PROPERTY_INDEX, "_properties", name);
            this._hydratedPropertyCount = 0;
            return removed;
        },
        /**
     * Returns the Object representation of this component. The returned object
     * is a live jCal object and should be cloned if modified.
     * @return {Object}
     */ toJSON: function() {
            return this.jCal;
        },
        /**
     * The string representation of this component.
     * @return {String}
     */ toString: function() {
            return ICAL.stringify.component(this.jCal, this._designSet);
        }
    };
    /**
   * Create an {@link ICAL.Component} by parsing the passed iCalendar string.
   *
   * @param {String} str        The iCalendar string to parse
   */ Component.fromString = function(str) {
        return new Component(ICAL.parse.component(str));
    };
    return Component;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.Property = function() {
    "use strict";
    var NAME_INDEX = 0;
    var PROP_INDEX = 1;
    var TYPE_INDEX = 2;
    var VALUE_INDEX = 3;
    var design = ICAL.design;
    /**
   * @classdesc
   * Provides a layer on top of the raw jCal object for manipulating a single
   * property, with its parameters and value.
   *
   * @description
   * It is important to note that mutations done in the wrapper
   * directly mutate the jCal object used to initialize.
   *
   * Can also be used to create new properties by passing
   * the name of the property (as a String).
   *
   * @class
   * @alias ICAL.Property
   * @param {Array|String} jCal         Raw jCal representation OR
   *  the new name of the property
   *
   * @param {ICAL.Component=} parent    Parent component
   */ function Property(jCal, parent) {
        this._parent = parent || null;
        if (typeof jCal === "string") {
            // We are creating the property by name and need to detect the type
            this.jCal = [
                jCal,
                {},
                design.defaultType
            ];
            this.jCal[TYPE_INDEX] = this.getDefaultType();
        } else this.jCal = jCal;
        this._updateType();
    }
    Property.prototype = {
        /**
     * The value type for this property
     * @readonly
     * @type {String}
     */ get type () {
            return this.jCal[TYPE_INDEX];
        },
        /**
     * The name of this property, in lowercase.
     * @readonly
     * @type {String}
     */ get name () {
            return this.jCal[NAME_INDEX];
        },
        /**
     * The parent component for this property.
     * @type {ICAL.Component}
     */ get parent () {
            return this._parent;
        },
        set parent (p){
            // Before setting the parent, check if the design set has changed. If it
            // has, we later need to update the type if it was unknown before.
            var designSetChanged = !this._parent || p && p._designSet != this._parent._designSet;
            this._parent = p;
            if (this.type == design.defaultType && designSetChanged) {
                this.jCal[TYPE_INDEX] = this.getDefaultType();
                this._updateType();
            }
            return p;
        },
        /**
     * The design set for this property, e.g. icalendar vs vcard
     *
     * @type {ICAL.design.designSet}
     * @private
     */ get _designSet () {
            return this.parent ? this.parent._designSet : design.defaultSet;
        },
        /**
     * Updates the type metadata from the current jCal type and design set.
     *
     * @private
     */ _updateType: function() {
            var designSet = this._designSet;
            if (this.type in designSet.value) {
                var designType = designSet.value[this.type];
                if ("decorate" in designSet.value[this.type]) this.isDecorated = true;
                else this.isDecorated = false;
                if (this.name in designSet.property) {
                    this.isMultiValue = "multiValue" in designSet.property[this.name];
                    this.isStructuredValue = "structuredValue" in designSet.property[this.name];
                }
            }
        },
        /**
     * Hydrate a single value. The act of hydrating means turning the raw jCal
     * value into a potentially wrapped object, for example {@link ICAL.Time}.
     *
     * @private
     * @param {Number} index        The index of the value to hydrate
     * @return {Object}             The decorated value.
     */ _hydrateValue: function(index) {
            if (this._values && this._values[index]) return this._values[index];
            // for the case where there is no value.
            if (this.jCal.length <= VALUE_INDEX + index) return null;
            if (this.isDecorated) {
                if (!this._values) this._values = [];
                return this._values[index] = this._decorate(this.jCal[VALUE_INDEX + index]);
            } else return this.jCal[VALUE_INDEX + index];
        },
        /**
     * Decorate a single value, returning its wrapped object. This is used by
     * the hydrate function to actually wrap the value.
     *
     * @private
     * @param {?} value         The value to decorate
     * @return {Object}         The decorated value
     */ _decorate: function(value) {
            return this._designSet.value[this.type].decorate(value, this);
        },
        /**
     * Undecorate a single value, returning its raw jCal data.
     *
     * @private
     * @param {Object} value         The value to undecorate
     * @return {?}                   The undecorated value
     */ _undecorate: function(value) {
            return this._designSet.value[this.type].undecorate(value, this);
        },
        /**
     * Sets the value at the given index while also hydrating it. The passed
     * value can either be a decorated or undecorated value.
     *
     * @private
     * @param {?} value             The value to set
     * @param {Number} index        The index to set it at
     */ _setDecoratedValue: function(value, index) {
            if (!this._values) this._values = [];
            if (typeof value === "object" && "icaltype" in value) {
                // decorated value
                this.jCal[VALUE_INDEX + index] = this._undecorate(value);
                this._values[index] = value;
            } else {
                // undecorated value
                this.jCal[VALUE_INDEX + index] = value;
                this._values[index] = this._decorate(value);
            }
        },
        /**
     * Gets a parameter on the property.
     *
     * @param {String}        name   Parameter name (lowercase)
     * @return {Array|String}        Parameter value
     */ getParameter: function(name) {
            if (name in this.jCal[PROP_INDEX]) return this.jCal[PROP_INDEX][name];
            else return undefined;
        },
        /**
     * Gets first parameter on the property.
     *
     * @param {String}        name   Parameter name (lowercase)
     * @return {String}        Parameter value
     */ getFirstParameter: function(name) {
            var parameters = this.getParameter(name);
            if (Array.isArray(parameters)) return parameters[0];
            return parameters;
        },
        /**
     * Sets a parameter on the property.
     *
     * @param {String}       name     The parameter name
     * @param {Array|String} value    The parameter value
     */ setParameter: function(name, value) {
            var lcname = name.toLowerCase();
            if (typeof value === "string" && lcname in this._designSet.param && "multiValue" in this._designSet.param[lcname]) value = [
                value
            ];
            this.jCal[PROP_INDEX][name] = value;
        },
        /**
     * Removes a parameter
     *
     * @param {String} name     The parameter name
     */ removeParameter: function(name) {
            delete this.jCal[PROP_INDEX][name];
        },
        /**
     * Get the default type based on this property's name.
     *
     * @return {String}     The default type for this property
     */ getDefaultType: function() {
            var name = this.jCal[NAME_INDEX];
            var designSet = this._designSet;
            if (name in designSet.property) {
                var details = designSet.property[name];
                if ("defaultType" in details) return details.defaultType;
            }
            return design.defaultType;
        },
        /**
     * Sets type of property and clears out any existing values of the current
     * type.
     *
     * @param {String} type     New iCAL type (see design.*.values)
     */ resetType: function(type) {
            this.removeAllValues();
            this.jCal[TYPE_INDEX] = type;
            this._updateType();
        },
        /**
     * Finds the first property value.
     *
     * @return {String}         First property value
     */ getFirstValue: function() {
            return this._hydrateValue(0);
        },
        /**
     * Gets all values on the property.
     *
     * NOTE: this creates an array during each call.
     *
     * @return {Array}          List of values
     */ getValues: function() {
            var len = this.jCal.length - VALUE_INDEX;
            if (len < 1) // it is possible for a property to have no value.
            return [];
            var i = 0;
            var result = [];
            for(; i < len; i++)result[i] = this._hydrateValue(i);
            return result;
        },
        /**
     * Removes all values from this property
     */ removeAllValues: function() {
            if (this._values) this._values.length = 0;
            this.jCal.length = 3;
        },
        /**
     * Sets the values of the property.  Will overwrite the existing values.
     * This can only be used for multi-value properties.
     *
     * @param {Array} values    An array of values
     */ setValues: function(values) {
            if (!this.isMultiValue) throw new Error(this.name + ": does not not support mulitValue.\n" + "override isMultiValue");
            var len = values.length;
            var i = 0;
            this.removeAllValues();
            if (len > 0 && typeof values[0] === "object" && "icaltype" in values[0]) this.resetType(values[0].icaltype);
            if (this.isDecorated) for(; i < len; i++)this._setDecoratedValue(values[i], i);
            else for(; i < len; i++)this.jCal[VALUE_INDEX + i] = values[i];
        },
        /**
     * Sets the current value of the property. If this is a multi-value
     * property, all other values will be removed.
     *
     * @param {String|Object} value     New property value.
     */ setValue: function(value) {
            this.removeAllValues();
            if (typeof value === "object" && "icaltype" in value) this.resetType(value.icaltype);
            if (this.isDecorated) this._setDecoratedValue(value, 0);
            else this.jCal[VALUE_INDEX] = value;
        },
        /**
     * Returns the Object representation of this component. The returned object
     * is a live jCal object and should be cloned if modified.
     * @return {Object}
     */ toJSON: function() {
            return this.jCal;
        },
        /**
     * The string representation of this component.
     * @return {String}
     */ toICALString: function() {
            return ICAL.stringify.property(this.jCal, this._designSet, true);
        }
    };
    /**
   * Create an {@link ICAL.Property} by parsing the passed iCalendar string.
   *
   * @param {String} str                        The iCalendar string to parse
   * @param {ICAL.design.designSet=} designSet  The design data to use for this property
   * @return {ICAL.Property}                    The created iCalendar property
   */ Property.fromString = function(str, designSet) {
        return new Property(ICAL.parse.property(str, designSet));
    };
    return Property;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.UtcOffset = function() {
    /**
   * @classdesc
   * This class represents the "duration" value type, with various calculation
   * and manipulation methods.
   *
   * @class
   * @alias ICAL.UtcOffset
   * @param {Object} aData          An object with members of the utc offset
   * @param {Number=} aData.hours   The hours for the utc offset
   * @param {Number=} aData.minutes The minutes in the utc offset
   * @param {Number=} aData.factor  The factor for the utc-offset, either -1 or 1
   */ function UtcOffset(aData) {
        this.fromData(aData);
    }
    UtcOffset.prototype = {
        /**
     * The hours in the utc-offset
     * @type {Number}
     */ hours: 0,
        /**
     * The minutes in the utc-offset
     * @type {Number}
     */ minutes: 0,
        /**
     * The sign of the utc offset, 1 for positive offset, -1 for negative
     * offsets.
     * @type {Number}
     */ factor: 1,
        /**
     * The type name, to be used in the jCal object.
     * @constant
     * @type {String}
     * @default "utc-offset"
     */ icaltype: "utc-offset",
        /**
     * Returns a clone of the utc offset object.
     *
     * @return {ICAL.UtcOffset}     The cloned object
     */ clone: function() {
            return ICAL.UtcOffset.fromSeconds(this.toSeconds());
        },
        /**
     * Sets up the current instance using members from the passed data object.
     *
     * @param {Object} aData          An object with members of the utc offset
     * @param {Number=} aData.hours   The hours for the utc offset
     * @param {Number=} aData.minutes The minutes in the utc offset
     * @param {Number=} aData.factor  The factor for the utc-offset, either -1 or 1
     */ fromData: function(aData) {
            if (aData) {
                for(var key in aData)/* istanbul ignore else */ if (aData.hasOwnProperty(key)) this[key] = aData[key];
            }
            this._normalize();
        },
        /**
     * Sets up the current instance from the given seconds value. The seconds
     * value is truncated to the minute. Offsets are wrapped when the world
     * ends, the hour after UTC+14:00 is UTC-12:00.
     *
     * @param {Number} aSeconds         The seconds to convert into an offset
     */ fromSeconds: function(aSeconds) {
            var secs = Math.abs(aSeconds);
            this.factor = aSeconds < 0 ? -1 : 1;
            this.hours = ICAL.helpers.trunc(secs / 3600);
            secs -= this.hours * 3600;
            this.minutes = ICAL.helpers.trunc(secs / 60);
            return this;
        },
        /**
     * Convert the current offset to a value in seconds
     *
     * @return {Number}                 The offset in seconds
     */ toSeconds: function() {
            return this.factor * (60 * this.minutes + 3600 * this.hours);
        },
        /**
     * Compare this utc offset with another one.
     *
     * @param {ICAL.UtcOffset} other        The other offset to compare with
     * @return {Number}                     -1, 0 or 1 for less/equal/greater
     */ compare: function icaltime_compare(other) {
            var a = this.toSeconds();
            var b = other.toSeconds();
            return (a > b) - (b > a);
        },
        _normalize: function() {
            // Range: 97200 seconds (with 1 hour inbetween)
            var secs = this.toSeconds();
            var factor = this.factor;
            while(secs < -43200)secs += 97200;
            while(secs > 50400)secs -= 97200;
            this.fromSeconds(secs);
            // Avoid changing the factor when on zero seconds
            if (secs == 0) this.factor = factor;
        },
        /**
     * The iCalendar string representation of this utc-offset.
     * @return {String}
     */ toICALString: function() {
            return ICAL.design.icalendar.value["utc-offset"].toICAL(this.toString());
        },
        /**
     * The string representation of this utc-offset.
     * @return {String}
     */ toString: function toString() {
            return (this.factor == 1 ? "+" : "-") + ICAL.helpers.pad2(this.hours) + ":" + ICAL.helpers.pad2(this.minutes);
        }
    };
    /**
   * Creates a new {@link ICAL.UtcOffset} instance from the passed string.
   *
   * @param {String} aString    The string to parse
   * @return {ICAL.Duration}    The created utc-offset instance
   */ UtcOffset.fromString = function(aString) {
        // -05:00
        var options = {};
        //TODO: support seconds per rfc5545 ?
        options.factor = aString[0] === "+" ? 1 : -1;
        options.hours = ICAL.helpers.strictParseInt(aString.substr(1, 2));
        options.minutes = ICAL.helpers.strictParseInt(aString.substr(4, 2));
        return new ICAL.UtcOffset(options);
    };
    /**
   * Creates a new {@link ICAL.UtcOffset} instance from the passed seconds
   * value.
   *
   * @param {Number} aSeconds       The number of seconds to convert
   */ UtcOffset.fromSeconds = function(aSeconds) {
        var instance = new UtcOffset();
        instance.fromSeconds(aSeconds);
        return instance;
    };
    return UtcOffset;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.Binary = function() {
    /**
   * @classdesc
   * Represents the BINARY value type, which contains extra methods for
   * encoding and decoding.
   *
   * @class
   * @alias ICAL.Binary
   * @param {String} aValue     The binary data for this value
   */ function Binary(aValue) {
        this.value = aValue;
    }
    Binary.prototype = {
        /**
     * The type name, to be used in the jCal object.
     * @default "binary"
     * @constant
     */ icaltype: "binary",
        /**
     * Base64 decode the current value
     *
     * @return {String}         The base64-decoded value
     */ decodeValue: function decodeValue() {
            return this._b64_decode(this.value);
        },
        /**
     * Encodes the passed parameter with base64 and sets the internal
     * value to the result.
     *
     * @param {String} aValue      The raw binary value to encode
     */ setEncodedValue: function setEncodedValue(aValue) {
            this.value = this._b64_encode(aValue);
        },
        _b64_encode: function base64_encode(data) {
            // http://kevin.vanzonneveld.net
            // +   original by: Tyler Akins (http://rumkin.com)
            // +   improved by: Bayron Guevara
            // +   improved by: Thunder.m
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Pellentesque Malesuada
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Rafał Kukawski (http://kukawski.pl)
            // *     example 1: base64_encode('Kevin van Zonneveld');
            // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
            // mozilla has this native
            // - but breaks in 2.0.0.12!
            //if (typeof this.window['atob'] == 'function') {
            //    return atob(data);
            //}
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = "", tmp_arr = [];
            if (!data) return data;
            do {
                o1 = data.charCodeAt(i++);
                o2 = data.charCodeAt(i++);
                o3 = data.charCodeAt(i++);
                bits = o1 << 16 | o2 << 8 | o3;
                h1 = bits >> 18 & 0x3f;
                h2 = bits >> 12 & 0x3f;
                h3 = bits >> 6 & 0x3f;
                h4 = bits & 0x3f;
                // use hexets to index into b64, and append result to encoded string
                tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            }while (i < data.length);
            enc = tmp_arr.join("");
            var r = data.length % 3;
            return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
        },
        _b64_decode: function base64_decode(data) {
            // http://kevin.vanzonneveld.net
            // +   original by: Tyler Akins (http://rumkin.com)
            // +   improved by: Thunder.m
            // +      input by: Aman Gupta
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +   bugfixed by: Pellentesque Malesuada
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
            // *     returns 1: 'Kevin van Zonneveld'
            // mozilla has this native
            // - but breaks in 2.0.0.12!
            //if (typeof this.window['btoa'] == 'function') {
            //    return btoa(data);
            //}
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = "", tmp_arr = [];
            if (!data) return data;
            data += "";
            do {
                h1 = b64.indexOf(data.charAt(i++));
                h2 = b64.indexOf(data.charAt(i++));
                h3 = b64.indexOf(data.charAt(i++));
                h4 = b64.indexOf(data.charAt(i++));
                bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
                o1 = bits >> 16 & 0xff;
                o2 = bits >> 8 & 0xff;
                o3 = bits & 0xff;
                if (h3 == 64) tmp_arr[ac++] = String.fromCharCode(o1);
                else if (h4 == 64) tmp_arr[ac++] = String.fromCharCode(o1, o2);
                else tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
            }while (i < data.length);
            dec = tmp_arr.join("");
            return dec;
        },
        /**
     * The string representation of this value
     * @return {String}
     */ toString: function() {
            return this.value;
        }
    };
    /**
   * Creates a binary value from the given string.
   *
   * @param {String} aString        The binary value string
   * @return {ICAL.Binary}          The binary value instance
   */ Binary.fromString = function(aString) {
        return new Binary(aString);
    };
    return Binary;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ (function() {
    /**
   * @classdesc
   * This class represents the "period" value type, with various calculation
   * and manipulation methods.
   *
   * @description
   * The passed data object cannot contain both and end date and a duration.
   *
   * @class
   * @param {Object} aData                  An object with members of the period
   * @param {ICAL.Time=} aData.start        The start of the period
   * @param {ICAL.Time=} aData.end          The end of the period
   * @param {ICAL.Duration=} aData.duration The duration of the period
   */ ICAL.Period = function icalperiod(aData) {
        this.wrappedJSObject = this;
        if (aData && "start" in aData) {
            if (aData.start && !(aData.start instanceof ICAL.Time)) throw new TypeError(".start must be an instance of ICAL.Time");
            this.start = aData.start;
        }
        if (aData && aData.end && aData.duration) throw new Error("cannot accept both end and duration");
        if (aData && "end" in aData) {
            if (aData.end && !(aData.end instanceof ICAL.Time)) throw new TypeError(".end must be an instance of ICAL.Time");
            this.end = aData.end;
        }
        if (aData && "duration" in aData) {
            if (aData.duration && !(aData.duration instanceof ICAL.Duration)) throw new TypeError(".duration must be an instance of ICAL.Duration");
            this.duration = aData.duration;
        }
    };
    ICAL.Period.prototype = {
        /**
     * The start of the period
     * @type {ICAL.Time}
     */ start: null,
        /**
     * The end of the period
     * @type {ICAL.Time}
     */ end: null,
        /**
     * The duration of the period
     * @type {ICAL.Duration}
     */ duration: null,
        /**
     * The class identifier.
     * @constant
     * @type {String}
     * @default "icalperiod"
     */ icalclass: "icalperiod",
        /**
     * The type name, to be used in the jCal object.
     * @constant
     * @type {String}
     * @default "period"
     */ icaltype: "period",
        /**
     * Returns a clone of the duration object.
     *
     * @return {ICAL.Period}      The cloned object
     */ clone: function() {
            return ICAL.Period.fromData({
                start: this.start ? this.start.clone() : null,
                end: this.end ? this.end.clone() : null,
                duration: this.duration ? this.duration.clone() : null
            });
        },
        /**
     * Calculates the duration of the period, either directly or by subtracting
     * start from end date.
     *
     * @return {ICAL.Duration}      The calculated duration
     */ getDuration: function duration() {
            if (this.duration) return this.duration;
            else return this.end.subtractDate(this.start);
        },
        /**
     * Calculates the end date of the period, either directly or by adding
     * duration to start date.
     *
     * @return {ICAL.Time}          The calculated end date
     */ getEnd: function() {
            if (this.end) return this.end;
            else {
                var end = this.start.clone();
                end.addDuration(this.duration);
                return end;
            }
        },
        /**
     * The string representation of this period.
     * @return {String}
     */ toString: function toString() {
            return this.start + "/" + (this.end || this.duration);
        },
        /**
     * The jCal representation of this period type.
     * @return {Object}
     */ toJSON: function() {
            return [
                this.start.toString(),
                (this.end || this.duration).toString()
            ];
        },
        /**
     * The iCalendar string representation of this period.
     * @return {String}
     */ toICALString: function() {
            return this.start.toICALString() + "/" + (this.end || this.duration).toICALString();
        }
    };
    /**
   * Creates a new {@link ICAL.Period} instance from the passed string.
   *
   * @param {String} str            The string to parse
   * @param {ICAL.Property} prop    The property this period will be on
   * @return {ICAL.Period}          The created period instance
   */ ICAL.Period.fromString = function fromString(str, prop) {
        var parts = str.split("/");
        if (parts.length !== 2) throw new Error('Invalid string value: "' + str + '" must contain a "/" char.');
        var options = {
            start: ICAL.Time.fromDateTimeString(parts[0], prop)
        };
        var end = parts[1];
        if (ICAL.Duration.isValueString(end)) options.duration = ICAL.Duration.fromString(end);
        else options.end = ICAL.Time.fromDateTimeString(end, prop);
        return new ICAL.Period(options);
    };
    /**
   * Creates a new {@link ICAL.Period} instance from the given data object.
   * The passed data object cannot contain both and end date and a duration.
   *
   * @param {Object} aData                  An object with members of the period
   * @param {ICAL.Time=} aData.start        The start of the period
   * @param {ICAL.Time=} aData.end          The end of the period
   * @param {ICAL.Duration=} aData.duration The duration of the period
   * @return {ICAL.Period}                  The period instance
   */ ICAL.Period.fromData = function fromData(aData) {
        return new ICAL.Period(aData);
    };
    /**
   * Returns a new period instance from the given jCal data array. The first
   * member is always the start date string, the second member is either a
   * duration or end date string.
   *
   * @param {Array<String,String>} aData    The jCal data array
   * @param {ICAL.Property} aProp           The property this jCal data is on
   * @param {Boolean} aLenient              If true, data value can be both date and date-time
   * @return {ICAL.Period}                  The period instance
   */ ICAL.Period.fromJSON = function(aData, aProp1, aLenient) {
        function fromDateOrDateTimeString(aValue, aProp) {
            if (aLenient) return ICAL.Time.fromString(aValue, aProp);
            else return ICAL.Time.fromDateTimeString(aValue, aProp);
        }
        if (ICAL.Duration.isValueString(aData[1])) return ICAL.Period.fromData({
            start: fromDateOrDateTimeString(aData[0], aProp1),
            duration: ICAL.Duration.fromString(aData[1])
        });
        else return ICAL.Period.fromData({
            start: fromDateOrDateTimeString(aData[0], aProp1),
            end: fromDateOrDateTimeString(aData[1], aProp1)
        });
    };
})();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ (function() {
    var DURATION_LETTERS = /([PDWHMTS]{1,1})/;
    /**
   * @classdesc
   * This class represents the "duration" value type, with various calculation
   * and manipulation methods.
   *
   * @class
   * @alias ICAL.Duration
   * @param {Object} data               An object with members of the duration
   * @param {Number} data.weeks         Duration in weeks
   * @param {Number} data.days          Duration in days
   * @param {Number} data.hours         Duration in hours
   * @param {Number} data.minutes       Duration in minutes
   * @param {Number} data.seconds       Duration in seconds
   * @param {Boolean} data.isNegative   If true, the duration is negative
   */ ICAL.Duration = function icalduration(data) {
        this.wrappedJSObject = this;
        this.fromData(data);
    };
    ICAL.Duration.prototype = {
        /**
     * The weeks in this duration
     * @type {Number}
     * @default 0
     */ weeks: 0,
        /**
     * The days in this duration
     * @type {Number}
     * @default 0
     */ days: 0,
        /**
     * The days in this duration
     * @type {Number}
     * @default 0
     */ hours: 0,
        /**
     * The minutes in this duration
     * @type {Number}
     * @default 0
     */ minutes: 0,
        /**
     * The seconds in this duration
     * @type {Number}
     * @default 0
     */ seconds: 0,
        /**
     * The seconds in this duration
     * @type {Boolean}
     * @default false
     */ isNegative: false,
        /**
     * The class identifier.
     * @constant
     * @type {String}
     * @default "icalduration"
     */ icalclass: "icalduration",
        /**
     * The type name, to be used in the jCal object.
     * @constant
     * @type {String}
     * @default "duration"
     */ icaltype: "duration",
        /**
     * Returns a clone of the duration object.
     *
     * @return {ICAL.Duration}      The cloned object
     */ clone: function clone() {
            return ICAL.Duration.fromData(this);
        },
        /**
     * The duration value expressed as a number of seconds.
     *
     * @return {Number}             The duration value in seconds
     */ toSeconds: function toSeconds() {
            var seconds = this.seconds + 60 * this.minutes + 3600 * this.hours + 86400 * this.days + 604800 * this.weeks;
            return this.isNegative ? -seconds : seconds;
        },
        /**
     * Reads the passed seconds value into this duration object. Afterwards,
     * members like {@link ICAL.Duration#days days} and {@link ICAL.Duration#weeks weeks} will be set up
     * accordingly.
     *
     * @param {Number} aSeconds     The duration value in seconds
     * @return {ICAL.Duration}      Returns this instance
     */ fromSeconds: function fromSeconds(aSeconds) {
            var secs = Math.abs(aSeconds);
            this.isNegative = aSeconds < 0;
            this.days = ICAL.helpers.trunc(secs / 86400);
            // If we have a flat number of weeks, use them.
            if (this.days % 7 == 0) {
                this.weeks = this.days / 7;
                this.days = 0;
            } else this.weeks = 0;
            secs -= (this.days + 7 * this.weeks) * 86400;
            this.hours = ICAL.helpers.trunc(secs / 3600);
            secs -= this.hours * 3600;
            this.minutes = ICAL.helpers.trunc(secs / 60);
            secs -= this.minutes * 60;
            this.seconds = secs;
            return this;
        },
        /**
     * Sets up the current instance using members from the passed data object.
     *
     * @param {Object} aData               An object with members of the duration
     * @param {Number} aData.weeks         Duration in weeks
     * @param {Number} aData.days          Duration in days
     * @param {Number} aData.hours         Duration in hours
     * @param {Number} aData.minutes       Duration in minutes
     * @param {Number} aData.seconds       Duration in seconds
     * @param {Boolean} aData.isNegative   If true, the duration is negative
     */ fromData: function fromData(aData) {
            var propsToCopy = [
                "weeks",
                "days",
                "hours",
                "minutes",
                "seconds",
                "isNegative"
            ];
            for(var key in propsToCopy){
                /* istanbul ignore if */ if (!propsToCopy.hasOwnProperty(key)) continue;
                var prop = propsToCopy[key];
                if (aData && prop in aData) this[prop] = aData[prop];
                else this[prop] = 0;
            }
        },
        /**
     * Resets the duration instance to the default values, i.e. PT0S
     */ reset: function reset() {
            this.isNegative = false;
            this.weeks = 0;
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        },
        /**
     * Compares the duration instance with another one.
     *
     * @param {ICAL.Duration} aOther        The instance to compare with
     * @return {Number}                     -1, 0 or 1 for less/equal/greater
     */ compare: function compare(aOther) {
            var thisSeconds = this.toSeconds();
            var otherSeconds = aOther.toSeconds();
            return (thisSeconds > otherSeconds) - (thisSeconds < otherSeconds);
        },
        /**
     * Normalizes the duration instance. For example, a duration with a value
     * of 61 seconds will be normalized to 1 minute and 1 second.
     */ normalize: function normalize() {
            this.fromSeconds(this.toSeconds());
        },
        /**
     * The string representation of this duration.
     * @return {String}
     */ toString: function toString() {
            if (this.toSeconds() == 0) return "PT0S";
            else {
                var str = "";
                if (this.isNegative) str += "-";
                str += "P";
                if (this.weeks) str += this.weeks + "W";
                if (this.days) str += this.days + "D";
                if (this.hours || this.minutes || this.seconds) {
                    str += "T";
                    if (this.hours) str += this.hours + "H";
                    if (this.minutes) str += this.minutes + "M";
                    if (this.seconds) str += this.seconds + "S";
                }
                return str;
            }
        },
        /**
     * The iCalendar string representation of this duration.
     * @return {String}
     */ toICALString: function() {
            return this.toString();
        }
    };
    /**
   * Returns a new ICAL.Duration instance from the passed seconds value.
   *
   * @param {Number} aSeconds       The seconds to create the instance from
   * @return {ICAL.Duration}        The newly created duration instance
   */ ICAL.Duration.fromSeconds = function icalduration_from_seconds(aSeconds) {
        return new ICAL.Duration().fromSeconds(aSeconds);
    };
    /**
   * Internal helper function to handle a chunk of a duration.
   *
   * @param {String} letter type of duration chunk
   * @param {String} number numeric value or -/+
   * @param {Object} dict target to assign values to
   */ function parseDurationChunk(letter, number, object) {
        var type;
        switch(letter){
            case "P":
                if (number && number === "-") object.isNegative = true;
                else object.isNegative = false;
                break;
            case "D":
                type = "days";
                break;
            case "W":
                type = "weeks";
                break;
            case "H":
                type = "hours";
                break;
            case "M":
                type = "minutes";
                break;
            case "S":
                type = "seconds";
                break;
            default:
                // Not a valid chunk
                return 0;
        }
        if (type) {
            if (!number && number !== 0) throw new Error('invalid duration value: Missing number before "' + letter + '"');
            var num = parseInt(number, 10);
            if (ICAL.helpers.isStrictlyNaN(num)) throw new Error('invalid duration value: Invalid number "' + number + '" before "' + letter + '"');
            object[type] = num;
        }
        return 1;
    }
    /**
   * Checks if the given string is an iCalendar duration value.
   *
   * @param {String} value      The raw ical value
   * @return {Boolean}          True, if the given value is of the
   *                              duration ical type
   */ ICAL.Duration.isValueString = function(string) {
        return string[0] === "P" || string[1] === "P";
    };
    /**
   * Creates a new {@link ICAL.Duration} instance from the passed string.
   *
   * @param {String} aStr       The string to parse
   * @return {ICAL.Duration}    The created duration instance
   */ ICAL.Duration.fromString = function icalduration_from_string(aStr) {
        var pos = 0;
        var dict = Object.create(null);
        var chunks = 0;
        while((pos = aStr.search(DURATION_LETTERS)) !== -1){
            var type = aStr[pos];
            var numeric = aStr.substr(0, pos);
            aStr = aStr.substr(pos + 1);
            chunks += parseDurationChunk(type, numeric, dict);
        }
        if (chunks < 2) // There must be at least a chunk with "P" and some unit chunk
        throw new Error('invalid duration value: Not enough duration components in "' + aStr + '"');
        return new ICAL.Duration(dict);
    };
    /**
   * Creates a new ICAL.Duration instance from the given data object.
   *
   * @param {Object} aData               An object with members of the duration
   * @param {Number} aData.weeks         Duration in weeks
   * @param {Number} aData.days          Duration in days
   * @param {Number} aData.hours         Duration in hours
   * @param {Number} aData.minutes       Duration in minutes
   * @param {Number} aData.seconds       Duration in seconds
   * @param {Boolean} aData.isNegative   If true, the duration is negative
   * @return {ICAL.Duration}             The createad duration instance
   */ ICAL.Duration.fromData = function icalduration_from_data(aData) {
        return new ICAL.Duration(aData);
    };
})();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2012 */ (function() {
    var OPTIONS = [
        "tzid",
        "location",
        "tznames",
        "latitude",
        "longitude"
    ];
    /**
   * @classdesc
   * Timezone representation, created by passing in a tzid and component.
   *
   * @example
   * var vcalendar;
   * var timezoneComp = vcalendar.getFirstSubcomponent('vtimezone');
   * var tzid = timezoneComp.getFirstPropertyValue('tzid');
   *
   * var timezone = new ICAL.Timezone({
   *   component: timezoneComp,
   *   tzid
   * });
   *
   * @class
   * @param {ICAL.Component|Object} data options for class
   * @param {String|ICAL.Component} data.component
   *        If data is a simple object, then this member can be set to either a
   *        string containing the component data, or an already parsed
   *        ICAL.Component
   * @param {String} data.tzid      The timezone identifier
   * @param {String} data.location  The timezone locationw
   * @param {String} data.tznames   An alternative string representation of the
   *                                  timezone
   * @param {Number} data.latitude  The latitude of the timezone
   * @param {Number} data.longitude The longitude of the timezone
   */ ICAL.Timezone = function icaltimezone(data) {
        this.wrappedJSObject = this;
        this.fromData(data);
    };
    ICAL.Timezone.prototype = {
        /**
     * Timezone identifier
     * @type {String}
     */ tzid: "",
        /**
     * Timezone location
     * @type {String}
     */ location: "",
        /**
     * Alternative timezone name, for the string representation
     * @type {String}
     */ tznames: "",
        /**
     * The primary latitude for the timezone.
     * @type {Number}
     */ latitude: 0.0,
        /**
     * The primary longitude for the timezone.
     * @type {Number}
     */ longitude: 0.0,
        /**
     * The vtimezone component for this timezone.
     * @type {ICAL.Component}
     */ component: null,
        /**
     * The year this timezone has been expanded to. All timezone transition
     * dates until this year are known and can be used for calculation
     *
     * @private
     * @type {Number}
     */ expandedUntilYear: 0,
        /**
     * The class identifier.
     * @constant
     * @type {String}
     * @default "icaltimezone"
     */ icalclass: "icaltimezone",
        /**
     * Sets up the current instance using members from the passed data object.
     *
     * @param {ICAL.Component|Object} aData options for class
     * @param {String|ICAL.Component} aData.component
     *        If aData is a simple object, then this member can be set to either a
     *        string containing the component data, or an already parsed
     *        ICAL.Component
     * @param {String} aData.tzid      The timezone identifier
     * @param {String} aData.location  The timezone locationw
     * @param {String} aData.tznames   An alternative string representation of the
     *                                  timezone
     * @param {Number} aData.latitude  The latitude of the timezone
     * @param {Number} aData.longitude The longitude of the timezone
     */ fromData: function fromData(aData) {
            this.expandedUntilYear = 0;
            this.changes = [];
            if (aData instanceof ICAL.Component) // Either a component is passed directly
            this.component = aData;
            else {
                // Otherwise the component may be in the data object
                if (aData && "component" in aData) {
                    if (typeof aData.component == "string") {
                        // If a string was passed, parse it as a component
                        var jCal = ICAL.parse(aData.component);
                        this.component = new ICAL.Component(jCal);
                    } else if (aData.component instanceof ICAL.Component) // If it was a component already, then just set it
                    this.component = aData.component;
                    else // Otherwise just null out the component
                    this.component = null;
                }
                // Copy remaining passed properties
                for(var key in OPTIONS)/* istanbul ignore else */ if (OPTIONS.hasOwnProperty(key)) {
                    var prop = OPTIONS[key];
                    if (aData && prop in aData) this[prop] = aData[prop];
                }
            }
            // If we have a component but no TZID, attempt to get it from the
            // component's properties.
            if (this.component instanceof ICAL.Component && !this.tzid) this.tzid = this.component.getFirstPropertyValue("tzid");
            return this;
        },
        /**
     * Finds the utcOffset the given time would occur in this timezone.
     *
     * @param {ICAL.Time} tt        The time to check for
     * @return {Number} utc offset in seconds
     */ utcOffset: function utcOffset(tt) {
            if (this == ICAL.Timezone.utcTimezone || this == ICAL.Timezone.localTimezone) return 0;
            this._ensureCoverage(tt.year);
            if (!this.changes.length) return 0;
            var tt_change = {
                year: tt.year,
                month: tt.month,
                day: tt.day,
                hour: tt.hour,
                minute: tt.minute,
                second: tt.second
            };
            var change_num = this._findNearbyChange(tt_change);
            var change_num_to_use = -1;
            var step = 1;
            // TODO: replace with bin search?
            for(;;){
                var change = ICAL.helpers.clone(this.changes[change_num], true);
                if (change.utcOffset < change.prevUtcOffset) ICAL.Timezone.adjust_change(change, 0, 0, 0, change.utcOffset);
                else ICAL.Timezone.adjust_change(change, 0, 0, 0, change.prevUtcOffset);
                var cmp = ICAL.Timezone._compare_change_fn(tt_change, change);
                if (cmp >= 0) change_num_to_use = change_num;
                else step = -1;
                if (step == -1 && change_num_to_use != -1) break;
                change_num += step;
                if (change_num < 0) return 0;
                if (change_num >= this.changes.length) break;
            }
            var zone_change = this.changes[change_num_to_use];
            var utcOffset_change = zone_change.utcOffset - zone_change.prevUtcOffset;
            if (utcOffset_change < 0 && change_num_to_use > 0) {
                var tmp_change = ICAL.helpers.clone(zone_change, true);
                ICAL.Timezone.adjust_change(tmp_change, 0, 0, 0, tmp_change.prevUtcOffset);
                if (ICAL.Timezone._compare_change_fn(tt_change, tmp_change) < 0) {
                    var prev_zone_change = this.changes[change_num_to_use - 1];
                    var want_daylight = false; // TODO
                    if (zone_change.is_daylight != want_daylight && prev_zone_change.is_daylight == want_daylight) zone_change = prev_zone_change;
                }
            }
            // TODO return is_daylight?
            return zone_change.utcOffset;
        },
        _findNearbyChange: function icaltimezone_find_nearby_change(change) {
            // find the closest match
            var idx = ICAL.helpers.binsearchInsert(this.changes, change, ICAL.Timezone._compare_change_fn);
            if (idx >= this.changes.length) return this.changes.length - 1;
            return idx;
        },
        _ensureCoverage: function(aYear) {
            if (ICAL.Timezone._minimumExpansionYear == -1) {
                var today = ICAL.Time.now();
                ICAL.Timezone._minimumExpansionYear = today.year;
            }
            var changesEndYear = aYear;
            if (changesEndYear < ICAL.Timezone._minimumExpansionYear) changesEndYear = ICAL.Timezone._minimumExpansionYear;
            changesEndYear += ICAL.Timezone.EXTRA_COVERAGE;
            if (changesEndYear > ICAL.Timezone.MAX_YEAR) changesEndYear = ICAL.Timezone.MAX_YEAR;
            if (!this.changes.length || this.expandedUntilYear < aYear) {
                var subcomps = this.component.getAllSubcomponents();
                var compLen = subcomps.length;
                var compIdx = 0;
                for(; compIdx < compLen; compIdx++)this._expandComponent(subcomps[compIdx], changesEndYear, this.changes);
                this.changes.sort(ICAL.Timezone._compare_change_fn);
                this.expandedUntilYear = changesEndYear;
            }
        },
        _expandComponent: function(aComponent, aYear, changes) {
            if (!aComponent.hasProperty("dtstart") || !aComponent.hasProperty("tzoffsetto") || !aComponent.hasProperty("tzoffsetfrom")) return null;
            var dtstart = aComponent.getFirstProperty("dtstart").getFirstValue();
            var change;
            function convert_tzoffset(offset) {
                return offset.factor * (offset.hours * 3600 + offset.minutes * 60);
            }
            function init_changes() {
                var changebase = {};
                changebase.is_daylight = aComponent.name == "daylight";
                changebase.utcOffset = convert_tzoffset(aComponent.getFirstProperty("tzoffsetto").getFirstValue());
                changebase.prevUtcOffset = convert_tzoffset(aComponent.getFirstProperty("tzoffsetfrom").getFirstValue());
                return changebase;
            }
            if (!aComponent.hasProperty("rrule") && !aComponent.hasProperty("rdate")) {
                change = init_changes();
                change.year = dtstart.year;
                change.month = dtstart.month;
                change.day = dtstart.day;
                change.hour = dtstart.hour;
                change.minute = dtstart.minute;
                change.second = dtstart.second;
                ICAL.Timezone.adjust_change(change, 0, 0, 0, -change.prevUtcOffset);
                changes.push(change);
            } else {
                var props = aComponent.getAllProperties("rdate");
                for(var rdatekey in props){
                    /* istanbul ignore if */ if (!props.hasOwnProperty(rdatekey)) continue;
                    var rdate = props[rdatekey];
                    var time = rdate.getFirstValue();
                    change = init_changes();
                    change.year = time.year;
                    change.month = time.month;
                    change.day = time.day;
                    if (time.isDate) {
                        change.hour = dtstart.hour;
                        change.minute = dtstart.minute;
                        change.second = dtstart.second;
                        if (dtstart.zone != ICAL.Timezone.utcTimezone) ICAL.Timezone.adjust_change(change, 0, 0, 0, -change.prevUtcOffset);
                    } else {
                        change.hour = time.hour;
                        change.minute = time.minute;
                        change.second = time.second;
                        if (time.zone != ICAL.Timezone.utcTimezone) ICAL.Timezone.adjust_change(change, 0, 0, 0, -change.prevUtcOffset);
                    }
                    changes.push(change);
                }
                var rrule = aComponent.getFirstProperty("rrule");
                if (rrule) {
                    rrule = rrule.getFirstValue();
                    change = init_changes();
                    if (rrule.until && rrule.until.zone == ICAL.Timezone.utcTimezone) {
                        rrule.until.adjust(0, 0, 0, change.prevUtcOffset);
                        rrule.until.zone = ICAL.Timezone.localTimezone;
                    }
                    var iterator = rrule.iterator(dtstart);
                    var occ;
                    while(occ = iterator.next()){
                        change = init_changes();
                        if (occ.year > aYear || !occ) break;
                        change.year = occ.year;
                        change.month = occ.month;
                        change.day = occ.day;
                        change.hour = occ.hour;
                        change.minute = occ.minute;
                        change.second = occ.second;
                        change.isDate = occ.isDate;
                        ICAL.Timezone.adjust_change(change, 0, 0, 0, -change.prevUtcOffset);
                        changes.push(change);
                    }
                }
            }
            return changes;
        },
        /**
     * The string representation of this timezone.
     * @return {String}
     */ toString: function toString() {
            return this.tznames ? this.tznames : this.tzid;
        }
    };
    ICAL.Timezone._compare_change_fn = function icaltimezone_compare_change_fn(a, b) {
        if (a.year < b.year) return -1;
        else if (a.year > b.year) return 1;
        if (a.month < b.month) return -1;
        else if (a.month > b.month) return 1;
        if (a.day < b.day) return -1;
        else if (a.day > b.day) return 1;
        if (a.hour < b.hour) return -1;
        else if (a.hour > b.hour) return 1;
        if (a.minute < b.minute) return -1;
        else if (a.minute > b.minute) return 1;
        if (a.second < b.second) return -1;
        else if (a.second > b.second) return 1;
        return 0;
    };
    /**
   * Convert the date/time from one zone to the next.
   *
   * @param {ICAL.Time} tt                  The time to convert
   * @param {ICAL.Timezone} from_zone       The source zone to convert from
   * @param {ICAL.Timezone} to_zone         The target zone to convert to
   * @return {ICAL.Time}                    The converted date/time object
   */ ICAL.Timezone.convert_time = function icaltimezone_convert_time(tt, from_zone, to_zone) {
        if (tt.isDate || from_zone.tzid == to_zone.tzid || from_zone == ICAL.Timezone.localTimezone || to_zone == ICAL.Timezone.localTimezone) {
            tt.zone = to_zone;
            return tt;
        }
        var utcOffset = from_zone.utcOffset(tt);
        tt.adjust(0, 0, 0, -utcOffset);
        utcOffset = to_zone.utcOffset(tt);
        tt.adjust(0, 0, 0, utcOffset);
        return null;
    };
    /**
   * Creates a new ICAL.Timezone instance from the passed data object.
   *
   * @param {ICAL.Component|Object} aData options for class
   * @param {String|ICAL.Component} aData.component
   *        If aData is a simple object, then this member can be set to either a
   *        string containing the component data, or an already parsed
   *        ICAL.Component
   * @param {String} aData.tzid      The timezone identifier
   * @param {String} aData.location  The timezone locationw
   * @param {String} aData.tznames   An alternative string representation of the
   *                                  timezone
   * @param {Number} aData.latitude  The latitude of the timezone
   * @param {Number} aData.longitude The longitude of the timezone
   */ ICAL.Timezone.fromData = function icaltimezone_fromData(aData) {
        var tt = new ICAL.Timezone();
        return tt.fromData(aData);
    };
    /**
   * The instance describing the UTC timezone
   * @type {ICAL.Timezone}
   * @constant
   * @instance
   */ ICAL.Timezone.utcTimezone = ICAL.Timezone.fromData({
        tzid: "UTC"
    });
    /**
   * The instance describing the local timezone
   * @type {ICAL.Timezone}
   * @constant
   * @instance
   */ ICAL.Timezone.localTimezone = ICAL.Timezone.fromData({
        tzid: "floating"
    });
    /**
   * Adjust a timezone change object.
   * @private
   * @param {Object} change     The timezone change object
   * @param {Number} days       The extra amount of days
   * @param {Number} hours      The extra amount of hours
   * @param {Number} minutes    The extra amount of minutes
   * @param {Number} seconds    The extra amount of seconds
   */ ICAL.Timezone.adjust_change = function icaltimezone_adjust_change(change, days, hours, minutes, seconds) {
        return ICAL.Time.prototype.adjust.call(change, days, hours, minutes, seconds, change);
    };
    ICAL.Timezone._minimumExpansionYear = -1;
    ICAL.Timezone.MAX_YEAR = 2035; // TODO this is because of time_t, which we don't need. Still usefull?
    ICAL.Timezone.EXTRA_COVERAGE = 5;
})();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.TimezoneService = function() {
    var zones;
    /**
   * @classdesc
   * Singleton class to contain timezones.  Right now it is all manual registry in
   * the future we may use this class to download timezone information or handle
   * loading pre-expanded timezones.
   *
   * @namespace
   * @alias ICAL.TimezoneService
   */ var TimezoneService = {
        get count () {
            return Object.keys(zones).length;
        },
        reset: function() {
            zones = Object.create(null);
            var utc = ICAL.Timezone.utcTimezone;
            zones.Z = utc;
            zones.UTC = utc;
            zones.GMT = utc;
        },
        /**
     * Checks if timezone id has been registered.
     *
     * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
     * @return {Boolean}        False, when not present
     */ has: function(tzid) {
            return !!zones[tzid];
        },
        /**
     * Returns a timezone by its tzid if present.
     *
     * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
     * @return {?ICAL.Timezone} The timezone, or null if not found
     */ get: function(tzid) {
            return zones[tzid];
        },
        /**
     * Registers a timezone object or component.
     *
     * @param {String=} name
     *        The name of the timezone. Defaults to the component's TZID if not
     *        passed.
     * @param {ICAL.Component|ICAL.Timezone} zone
     *        The initialized zone or vtimezone.
     */ register: function(name, timezone) {
            if (name instanceof ICAL.Component) {
                if (name.name === "vtimezone") {
                    timezone = new ICAL.Timezone(name);
                    name = timezone.tzid;
                }
            }
            if (timezone instanceof ICAL.Timezone) zones[name] = timezone;
            else throw new TypeError("timezone must be ICAL.Timezone or ICAL.Component");
        },
        /**
     * Removes a timezone by its tzid from the list.
     *
     * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
     * @return {?ICAL.Timezone} The removed timezone, or null if not registered
     */ remove: function(tzid) {
            return delete zones[tzid];
        }
    };
    // initialize defaults
    TimezoneService.reset();
    return TimezoneService;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ (function() {
    /**
   * @classdesc
   * iCalendar Time representation (similar to JS Date object).  Fully
   * independent of system (OS) timezone / time.  Unlike JS Date, the month
   * January is 1, not zero.
   *
   * @example
   * var time = new ICAL.Time({
   *   year: 2012,
   *   month: 10,
   *   day: 11
   *   minute: 0,
   *   second: 0,
   *   isDate: false
   * });
   *
   *
   * @alias ICAL.Time
   * @class
   * @param {Object} data           Time initialization
   * @param {Number=} data.year     The year for this date
   * @param {Number=} data.month    The month for this date
   * @param {Number=} data.day      The day for this date
   * @param {Number=} data.hour     The hour for this date
   * @param {Number=} data.minute   The minute for this date
   * @param {Number=} data.second   The second for this date
   * @param {Boolean=} data.isDate  If true, the instance represents a date (as
   *                                  opposed to a date-time)
   * @param {ICAL.Timezone} zone timezone this position occurs in
   */ ICAL.Time = function icaltime(data, zone) {
        this.wrappedJSObject = this;
        var time = this._time = Object.create(null);
        /* time defaults */ time.year = 0;
        time.month = 1;
        time.day = 1;
        time.hour = 0;
        time.minute = 0;
        time.second = 0;
        time.isDate = false;
        this.fromData(data, zone);
    };
    ICAL.Time._dowCache = {};
    ICAL.Time._wnCache = {};
    ICAL.Time.prototype = {
        /**
     * The class identifier.
     * @constant
     * @type {String}
     * @default "icaltime"
     */ icalclass: "icaltime",
        _cachedUnixTime: null,
        /**
     * The type name, to be used in the jCal object. This value may change and
     * is strictly defined by the {@link ICAL.Time#isDate isDate} member.
     * @readonly
     * @type {String}
     * @default "date-time"
     */ get icaltype () {
            return this.isDate ? "date" : "date-time";
        },
        /**
     * The timezone for this time.
     * @type {ICAL.Timezone}
     */ zone: null,
        /**
     * Internal uses to indicate that a change has been made and the next read
     * operation must attempt to normalize the value (for example changing the
     * day to 33).
     *
     * @type {Boolean}
     * @private
     */ _pendingNormalization: false,
        /**
     * Returns a clone of the time object.
     *
     * @return {ICAL.Time}              The cloned object
     */ clone: function() {
            return new ICAL.Time(this._time, this.zone);
        },
        /**
     * Reset the time instance to epoch time
     */ reset: function icaltime_reset() {
            this.fromData(ICAL.Time.epochTime);
            this.zone = ICAL.Timezone.utcTimezone;
        },
        /**
     * Reset the time instance to the given date/time values.
     *
     * @param {Number} year             The year to set
     * @param {Number} month            The month to set
     * @param {Number} day              The day to set
     * @param {Number} hour             The hour to set
     * @param {Number} minute           The minute to set
     * @param {Number} second           The second to set
     * @param {ICAL.Timezone} timezone  The timezone to set
     */ resetTo: function icaltime_resetTo(year, month, day, hour, minute, second, timezone) {
            this.fromData({
                year: year,
                month: month,
                day: day,
                hour: hour,
                minute: minute,
                second: second,
                zone: timezone
            });
        },
        /**
     * Set up the current instance from the Javascript date value.
     *
     * @param {?Date} aDate     The Javascript Date to read, or null to reset
     * @param {Boolean} useUTC  If true, the UTC values of the date will be used
     */ fromJSDate: function icaltime_fromJSDate(aDate, useUTC) {
            if (!aDate) this.reset();
            else if (useUTC) {
                this.zone = ICAL.Timezone.utcTimezone;
                this.year = aDate.getUTCFullYear();
                this.month = aDate.getUTCMonth() + 1;
                this.day = aDate.getUTCDate();
                this.hour = aDate.getUTCHours();
                this.minute = aDate.getUTCMinutes();
                this.second = aDate.getUTCSeconds();
            } else {
                this.zone = ICAL.Timezone.localTimezone;
                this.year = aDate.getFullYear();
                this.month = aDate.getMonth() + 1;
                this.day = aDate.getDate();
                this.hour = aDate.getHours();
                this.minute = aDate.getMinutes();
                this.second = aDate.getSeconds();
            }
            this._cachedUnixTime = null;
            return this;
        },
        /**
     * Sets up the current instance using members from the passed data object.
     *
     * @param {Object} aData            Time initialization
     * @param {Number=} aData.year      The year for this date
     * @param {Number=} aData.month     The month for this date
     * @param {Number=} aData.day       The day for this date
     * @param {Number=} aData.hour      The hour for this date
     * @param {Number=} aData.minute    The minute for this date
     * @param {Number=} aData.second    The second for this date
     * @param {Boolean=} aData.isDate   If true, the instance represents a date
     *                                    (as opposed to a date-time)
     * @param {ICAL.Timezone=} aZone    Timezone this position occurs in
     */ fromData: function fromData(aData, aZone) {
            if (aData) {
                for(var key in aData)/* istanbul ignore else */ if (Object.prototype.hasOwnProperty.call(aData, key)) {
                    // ical type cannot be set
                    if (key === "icaltype") continue;
                    this[key] = aData[key];
                }
            }
            if (aZone) this.zone = aZone;
            if (aData && !("isDate" in aData)) this.isDate = !("hour" in aData);
            else if (aData && "isDate" in aData) this.isDate = aData.isDate;
            if (aData && "timezone" in aData) {
                var zone = ICAL.TimezoneService.get(aData.timezone);
                this.zone = zone || ICAL.Timezone.localTimezone;
            }
            if (aData && "zone" in aData) this.zone = aData.zone;
            if (!this.zone) this.zone = ICAL.Timezone.localTimezone;
            this._cachedUnixTime = null;
            return this;
        },
        /**
     * Calculate the day of week.
     * @param {ICAL.Time.weekDay=} aWeekStart
     *        The week start weekday, defaults to SUNDAY
     * @return {ICAL.Time.weekDay}
     */ dayOfWeek: function icaltime_dayOfWeek(aWeekStart) {
            var firstDow = aWeekStart || ICAL.Time.SUNDAY;
            var dowCacheKey = (this.year << 12) + (this.month << 8) + (this.day << 3) + firstDow;
            if (dowCacheKey in ICAL.Time._dowCache) return ICAL.Time._dowCache[dowCacheKey];
            // Using Zeller's algorithm
            var q = this.day;
            var m = this.month + (this.month < 3 ? 12 : 0);
            var Y = this.year - (this.month < 3 ? 1 : 0);
            var h = q + Y + ICAL.helpers.trunc((m + 1) * 26 / 10) + ICAL.helpers.trunc(Y / 4);
            h += ICAL.helpers.trunc(Y / 100) * 6 + ICAL.helpers.trunc(Y / 400);
            // Normalize to 1 = wkst
            h = (h + 7 - firstDow) % 7 + 1;
            ICAL.Time._dowCache[dowCacheKey] = h;
            return h;
        },
        /**
     * Calculate the day of year.
     * @return {Number}
     */ dayOfYear: function dayOfYear() {
            var is_leap = ICAL.Time.isLeapYear(this.year) ? 1 : 0;
            var diypm = ICAL.Time.daysInYearPassedMonth;
            return diypm[is_leap][this.month - 1] + this.day;
        },
        /**
     * Returns a copy of the current date/time, rewound to the start of the
     * week. The resulting ICAL.Time instance is of icaltype date, even if this
     * is a date-time.
     *
     * @param {ICAL.Time.weekDay=} aWeekStart
     *        The week start weekday, defaults to SUNDAY
     * @return {ICAL.Time}      The start of the week (cloned)
     */ startOfWeek: function startOfWeek(aWeekStart) {
            var firstDow = aWeekStart || ICAL.Time.SUNDAY;
            var result = this.clone();
            result.day -= (this.dayOfWeek() + 7 - firstDow) % 7;
            result.isDate = true;
            result.hour = 0;
            result.minute = 0;
            result.second = 0;
            return result;
        },
        /**
     * Returns a copy of the current date/time, shifted to the end of the week.
     * The resulting ICAL.Time instance is of icaltype date, even if this is a
     * date-time.
     *
     * @param {ICAL.Time.weekDay=} aWeekStart
     *        The week start weekday, defaults to SUNDAY
     * @return {ICAL.Time}      The end of the week (cloned)
     */ endOfWeek: function endOfWeek(aWeekStart) {
            var firstDow = aWeekStart || ICAL.Time.SUNDAY;
            var result = this.clone();
            result.day += (7 - this.dayOfWeek() + firstDow - ICAL.Time.SUNDAY) % 7;
            result.isDate = true;
            result.hour = 0;
            result.minute = 0;
            result.second = 0;
            return result;
        },
        /**
     * Returns a copy of the current date/time, rewound to the start of the
     * month. The resulting ICAL.Time instance is of icaltype date, even if
     * this is a date-time.
     *
     * @return {ICAL.Time}      The start of the month (cloned)
     */ startOfMonth: function startOfMonth() {
            var result = this.clone();
            result.day = 1;
            result.isDate = true;
            result.hour = 0;
            result.minute = 0;
            result.second = 0;
            return result;
        },
        /**
     * Returns a copy of the current date/time, shifted to the end of the
     * month.  The resulting ICAL.Time instance is of icaltype date, even if
     * this is a date-time.
     *
     * @return {ICAL.Time}      The end of the month (cloned)
     */ endOfMonth: function endOfMonth() {
            var result = this.clone();
            result.day = ICAL.Time.daysInMonth(result.month, result.year);
            result.isDate = true;
            result.hour = 0;
            result.minute = 0;
            result.second = 0;
            return result;
        },
        /**
     * Returns a copy of the current date/time, rewound to the start of the
     * year. The resulting ICAL.Time instance is of icaltype date, even if
     * this is a date-time.
     *
     * @return {ICAL.Time}      The start of the year (cloned)
     */ startOfYear: function startOfYear() {
            var result = this.clone();
            result.day = 1;
            result.month = 1;
            result.isDate = true;
            result.hour = 0;
            result.minute = 0;
            result.second = 0;
            return result;
        },
        /**
     * Returns a copy of the current date/time, shifted to the end of the
     * year.  The resulting ICAL.Time instance is of icaltype date, even if
     * this is a date-time.
     *
     * @return {ICAL.Time}      The end of the year (cloned)
     */ endOfYear: function endOfYear() {
            var result = this.clone();
            result.day = 31;
            result.month = 12;
            result.isDate = true;
            result.hour = 0;
            result.minute = 0;
            result.second = 0;
            return result;
        },
        /**
     * First calculates the start of the week, then returns the day of year for
     * this date. If the day falls into the previous year, the day is zero or negative.
     *
     * @param {ICAL.Time.weekDay=} aFirstDayOfWeek
     *        The week start weekday, defaults to SUNDAY
     * @return {Number}     The calculated day of year
     */ startDoyWeek: function startDoyWeek(aFirstDayOfWeek) {
            var firstDow = aFirstDayOfWeek || ICAL.Time.SUNDAY;
            var delta = this.dayOfWeek() - firstDow;
            if (delta < 0) delta += 7;
            return this.dayOfYear() - delta;
        },
        /**
     * Get the dominical letter for the current year. Letters range from A - G
     * for common years, and AG to GF for leap years.
     *
     * @param {Number} yr           The year to retrieve the letter for
     * @return {String}             The dominical letter.
     */ getDominicalLetter: function() {
            return ICAL.Time.getDominicalLetter(this.year);
        },
        /**
     * Finds the nthWeekDay relative to the current month (not day).  The
     * returned value is a day relative the month that this month belongs to so
     * 1 would indicate the first of the month and 40 would indicate a day in
     * the following month.
     *
     * @param {Number} aDayOfWeek   Day of the week see the day name constants
     * @param {Number} aPos         Nth occurrence of a given week day values
     *        of 1 and 0 both indicate the first weekday of that type. aPos may
     *        be either positive or negative
     *
     * @return {Number} numeric value indicating a day relative
     *                   to the current month of this time object
     */ nthWeekDay: function icaltime_nthWeekDay(aDayOfWeek, aPos) {
            var daysInMonth = ICAL.Time.daysInMonth(this.month, this.year);
            var weekday;
            var pos = aPos;
            var start = 0;
            var otherDay = this.clone();
            if (pos >= 0) {
                otherDay.day = 1;
                // because 0 means no position has been given
                // 1 and 0 indicate the same day.
                if (pos != 0) // remove the extra numeric value
                pos--;
                // set current start offset to current day.
                start = otherDay.day;
                // find the current day of week
                var startDow = otherDay.dayOfWeek();
                // calculate the difference between current
                // day of the week and desired day of the week
                var offset = aDayOfWeek - startDow;
                // if the offset goes into the past
                // week we add 7 so it goes into the next
                // week. We only want to go forward in time here.
                if (offset < 0) // this is really important otherwise we would
                // end up with dates from in the past.
                offset += 7;
                // add offset to start so start is the same
                // day of the week as the desired day of week.
                start += offset;
                // because we are going to add (and multiply)
                // the numeric value of the day we subtract it
                // from the start position so not to add it twice.
                start -= aDayOfWeek;
                // set week day
                weekday = aDayOfWeek;
            } else {
                // then we set it to the last day in the current month
                otherDay.day = daysInMonth;
                // find the ends weekday
                var endDow = otherDay.dayOfWeek();
                pos++;
                weekday = endDow - aDayOfWeek;
                if (weekday < 0) weekday += 7;
                weekday = daysInMonth - weekday;
            }
            weekday += pos * 7;
            return start + weekday;
        },
        /**
     * Checks if current time is the nth weekday, relative to the current
     * month.  Will always return false when rule resolves outside of current
     * month.
     *
     * @param {ICAL.Time.weekDay} aDayOfWeek       Day of week to check
     * @param {Number} aPos                        Relative position
     * @return {Boolean}                           True, if it is the nth weekday
     */ isNthWeekDay: function(aDayOfWeek, aPos) {
            var dow = this.dayOfWeek();
            if (aPos === 0 && dow === aDayOfWeek) return true;
            // get pos
            var day = this.nthWeekDay(aDayOfWeek, aPos);
            if (day === this.day) return true;
            return false;
        },
        /**
     * Calculates the ISO 8601 week number. The first week of a year is the
     * week that contains the first Thursday. The year can have 53 weeks, if
     * January 1st is a Friday.
     *
     * Note there are regions where the first week of the year is the one that
     * starts on January 1st, which may offset the week number. Also, if a
     * different week start is specified, this will also affect the week
     * number.
     *
     * @see ICAL.Time.weekOneStarts
     * @param {ICAL.Time.weekDay} aWeekStart        The weekday the week starts with
     * @return {Number}                             The ISO week number
     */ weekNumber: function weekNumber(aWeekStart) {
            var wnCacheKey = (this.year << 12) + (this.month << 8) + (this.day << 3) + aWeekStart;
            if (wnCacheKey in ICAL.Time._wnCache) return ICAL.Time._wnCache[wnCacheKey];
            // This function courtesty of Julian Bucknall, published under the MIT license
            // http://www.boyet.com/articles/publishedarticles/calculatingtheisoweeknumb.html
            // plus some fixes to be able to use different week starts.
            var week1;
            var dt = this.clone();
            dt.isDate = true;
            var isoyear = this.year;
            if (dt.month == 12 && dt.day > 25) {
                week1 = ICAL.Time.weekOneStarts(isoyear + 1, aWeekStart);
                if (dt.compare(week1) < 0) week1 = ICAL.Time.weekOneStarts(isoyear, aWeekStart);
                else isoyear++;
            } else {
                week1 = ICAL.Time.weekOneStarts(isoyear, aWeekStart);
                if (dt.compare(week1) < 0) week1 = ICAL.Time.weekOneStarts(--isoyear, aWeekStart);
            }
            var daysBetween = dt.subtractDate(week1).toSeconds() / 86400;
            var answer = ICAL.helpers.trunc(daysBetween / 7) + 1;
            ICAL.Time._wnCache[wnCacheKey] = answer;
            return answer;
        },
        /**
     * Adds the duration to the current time. The instance is modified in
     * place.
     *
     * @param {ICAL.Duration} aDuration         The duration to add
     */ addDuration: function icaltime_add(aDuration) {
            var mult = aDuration.isNegative ? -1 : 1;
            // because of the duration optimizations it is much
            // more efficient to grab all the values up front
            // then set them directly (which will avoid a normalization call).
            // So we don't actually normalize until we need it.
            var second = this.second;
            var minute = this.minute;
            var hour = this.hour;
            var day = this.day;
            second += mult * aDuration.seconds;
            minute += mult * aDuration.minutes;
            hour += mult * aDuration.hours;
            day += mult * aDuration.days;
            day += mult * 7 * aDuration.weeks;
            this.second = second;
            this.minute = minute;
            this.hour = hour;
            this.day = day;
            this._cachedUnixTime = null;
        },
        /**
     * Subtract the date details (_excluding_ timezone).  Useful for finding
     * the relative difference between two time objects excluding their
     * timezone differences.
     *
     * @param {ICAL.Time} aDate     The date to substract
     * @return {ICAL.Duration}      The difference as a duration
     */ subtractDate: function icaltime_subtract(aDate) {
            var unixTime = this.toUnixTime() + this.utcOffset();
            var other = aDate.toUnixTime() + aDate.utcOffset();
            return ICAL.Duration.fromSeconds(unixTime - other);
        },
        /**
     * Subtract the date details, taking timezones into account.
     *
     * @param {ICAL.Time} aDate  The date to subtract
     * @return {ICAL.Duration}  The difference in duration
     */ subtractDateTz: function icaltime_subtract_abs(aDate) {
            var unixTime = this.toUnixTime();
            var other = aDate.toUnixTime();
            return ICAL.Duration.fromSeconds(unixTime - other);
        },
        /**
     * Compares the ICAL.Time instance with another one.
     *
     * @param {ICAL.Duration} aOther        The instance to compare with
     * @return {Number}                     -1, 0 or 1 for less/equal/greater
     */ compare: function icaltime_compare(other) {
            var a = this.toUnixTime();
            var b = other.toUnixTime();
            if (a > b) return 1;
            if (b > a) return -1;
            return 0;
        },
        /**
     * Compares only the date part of this instance with another one.
     *
     * @param {ICAL.Duration} other         The instance to compare with
     * @param {ICAL.Timezone} tz            The timezone to compare in
     * @return {Number}                     -1, 0 or 1 for less/equal/greater
     */ compareDateOnlyTz: function icaltime_compareDateOnlyTz(other, tz) {
            function cmp(attr) {
                return ICAL.Time._cmp_attr(a, b, attr);
            }
            var a = this.convertToZone(tz);
            var b = other.convertToZone(tz);
            var rc = 0;
            if ((rc = cmp("year")) != 0) return rc;
            if ((rc = cmp("month")) != 0) return rc;
            if ((rc = cmp("day")) != 0) return rc;
            return rc;
        },
        /**
     * Convert the instance into another timezone. The returned ICAL.Time
     * instance is always a copy.
     *
     * @param {ICAL.Timezone} zone      The zone to convert to
     * @return {ICAL.Time}              The copy, converted to the zone
     */ convertToZone: function convertToZone(zone) {
            var copy = this.clone();
            var zone_equals = this.zone.tzid == zone.tzid;
            if (!this.isDate && !zone_equals) ICAL.Timezone.convert_time(copy, this.zone, zone);
            copy.zone = zone;
            return copy;
        },
        /**
     * Calculates the UTC offset of the current date/time in the timezone it is
     * in.
     *
     * @return {Number}     UTC offset in seconds
     */ utcOffset: function utc_offset() {
            if (this.zone == ICAL.Timezone.localTimezone || this.zone == ICAL.Timezone.utcTimezone) return 0;
            else return this.zone.utcOffset(this);
        },
        /**
     * Returns an RFC 5545 compliant ical representation of this object.
     *
     * @return {String} ical date/date-time
     */ toICALString: function() {
            var string = this.toString();
            if (string.length > 10) return ICAL.design.icalendar.value["date-time"].toICAL(string);
            else return ICAL.design.icalendar.value.date.toICAL(string);
        },
        /**
     * The string representation of this date/time, in jCal form
     * (including : and - separators).
     * @return {String}
     */ toString: function toString() {
            var result = this.year + "-" + ICAL.helpers.pad2(this.month) + "-" + ICAL.helpers.pad2(this.day);
            if (!this.isDate) {
                result += "T" + ICAL.helpers.pad2(this.hour) + ":" + ICAL.helpers.pad2(this.minute) + ":" + ICAL.helpers.pad2(this.second);
                if (this.zone === ICAL.Timezone.utcTimezone) result += "Z";
            }
            return result;
        },
        /**
     * Converts the current instance to a Javascript date
     * @return {Date}
     */ toJSDate: function toJSDate() {
            if (this.zone == ICAL.Timezone.localTimezone) {
                if (this.isDate) return new Date(this.year, this.month - 1, this.day);
                else return new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, 0);
            } else return new Date(this.toUnixTime() * 1000);
        },
        _normalize: function icaltime_normalize() {
            var isDate = this._time.isDate;
            if (this._time.isDate) {
                this._time.hour = 0;
                this._time.minute = 0;
                this._time.second = 0;
            }
            this.adjust(0, 0, 0, 0);
            return this;
        },
        /**
     * Adjust the date/time by the given offset
     *
     * @param {Number} aExtraDays       The extra amount of days
     * @param {Number} aExtraHours      The extra amount of hours
     * @param {Number} aExtraMinutes    The extra amount of minutes
     * @param {Number} aExtraSeconds    The extra amount of seconds
     * @param {Number=} aTime           The time to adjust, defaults to the
     *                                    current instance.
     */ adjust: function icaltime_adjust(aExtraDays, aExtraHours, aExtraMinutes, aExtraSeconds, aTime) {
            var minutesOverflow, hoursOverflow, daysOverflow = 0, yearsOverflow = 0;
            var second, minute, hour, day;
            var daysInMonth;
            var time = aTime || this._time;
            if (!time.isDate) {
                second = time.second + aExtraSeconds;
                time.second = second % 60;
                minutesOverflow = ICAL.helpers.trunc(second / 60);
                if (time.second < 0) {
                    time.second += 60;
                    minutesOverflow--;
                }
                minute = time.minute + aExtraMinutes + minutesOverflow;
                time.minute = minute % 60;
                hoursOverflow = ICAL.helpers.trunc(minute / 60);
                if (time.minute < 0) {
                    time.minute += 60;
                    hoursOverflow--;
                }
                hour = time.hour + aExtraHours + hoursOverflow;
                time.hour = hour % 24;
                daysOverflow = ICAL.helpers.trunc(hour / 24);
                if (time.hour < 0) {
                    time.hour += 24;
                    daysOverflow--;
                }
            }
            // Adjust month and year first, because we need to know what month the day
            // is in before adjusting it.
            if (time.month > 12) yearsOverflow = ICAL.helpers.trunc((time.month - 1) / 12);
            else if (time.month < 1) yearsOverflow = ICAL.helpers.trunc(time.month / 12) - 1;
            time.year += yearsOverflow;
            time.month -= 12 * yearsOverflow;
            // Now take care of the days (and adjust month if needed)
            day = time.day + aExtraDays + daysOverflow;
            if (day > 0) for(;;){
                daysInMonth = ICAL.Time.daysInMonth(time.month, time.year);
                if (day <= daysInMonth) break;
                time.month++;
                if (time.month > 12) {
                    time.year++;
                    time.month = 1;
                }
                day -= daysInMonth;
            }
            else while(day <= 0){
                if (time.month == 1) {
                    time.year--;
                    time.month = 12;
                } else time.month--;
                day += ICAL.Time.daysInMonth(time.month, time.year);
            }
            time.day = day;
            this._cachedUnixTime = null;
            return this;
        },
        /**
     * Sets up the current instance from unix time, the number of seconds since
     * January 1st, 1970.
     *
     * @param {Number} seconds      The seconds to set up with
     */ fromUnixTime: function fromUnixTime(seconds) {
            this.zone = ICAL.Timezone.utcTimezone;
            var epoch = ICAL.Time.epochTime.clone();
            epoch.adjust(0, 0, 0, seconds);
            this.year = epoch.year;
            this.month = epoch.month;
            this.day = epoch.day;
            this.hour = epoch.hour;
            this.minute = epoch.minute;
            this.second = Math.floor(epoch.second);
            this._cachedUnixTime = null;
        },
        /**
     * Converts the current instance to seconds since January 1st 1970.
     *
     * @return {Number}         Seconds since 1970
     */ toUnixTime: function toUnixTime() {
            if (this._cachedUnixTime !== null) return this._cachedUnixTime;
            var offset = this.utcOffset();
            // we use the offset trick to ensure
            // that we are getting the actual UTC time
            var ms = Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second - offset);
            // seconds
            this._cachedUnixTime = ms / 1000;
            return this._cachedUnixTime;
        },
        /**
     * Converts time to into Object which can be serialized then re-created
     * using the constructor.
     *
     * @example
     * // toJSON will automatically be called
     * var json = JSON.stringify(mytime);
     *
     * var deserialized = JSON.parse(json);
     *
     * var time = new ICAL.Time(deserialized);
     *
     * @return {Object}
     */ toJSON: function() {
            var copy = [
                "year",
                "month",
                "day",
                "hour",
                "minute",
                "second",
                "isDate"
            ];
            var result = Object.create(null);
            var i = 0;
            var len = copy.length;
            var prop;
            for(; i < len; i++){
                prop = copy[i];
                result[prop] = this[prop];
            }
            if (this.zone) result.timezone = this.zone.tzid;
            return result;
        }
    };
    (function setupNormalizeAttributes() {
        // This needs to run before any instances are created!
        function defineAttr(attr) {
            Object.defineProperty(ICAL.Time.prototype, attr, {
                get: function getTimeAttr() {
                    if (this._pendingNormalization) {
                        this._normalize();
                        this._pendingNormalization = false;
                    }
                    return this._time[attr];
                },
                set: function setTimeAttr(val) {
                    // Check if isDate will be set and if was not set to normalize date.
                    // This avoids losing days when seconds, minutes and hours are zeroed
                    // what normalize will do when time is a date.
                    if (attr === "isDate" && val && !this._time.isDate) this.adjust(0, 0, 0, 0);
                    this._cachedUnixTime = null;
                    this._pendingNormalization = true;
                    this._time[attr] = val;
                    return val;
                }
            });
        }
        /* istanbul ignore else */ if ("defineProperty" in Object) {
            defineAttr("year");
            defineAttr("month");
            defineAttr("day");
            defineAttr("hour");
            defineAttr("minute");
            defineAttr("second");
            defineAttr("isDate");
        }
    })();
    /**
   * Returns the days in the given month
   *
   * @param {Number} month      The month to check
   * @param {Number} year       The year to check
   * @return {Number}           The number of days in the month
   */ ICAL.Time.daysInMonth = function icaltime_daysInMonth(month, year) {
        var _daysInMonth = [
            0,
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ];
        var days = 30;
        if (month < 1 || month > 12) return days;
        days = _daysInMonth[month];
        if (month == 2) days += ICAL.Time.isLeapYear(year);
        return days;
    };
    /**
   * Checks if the year is a leap year
   *
   * @param {Number} year       The year to check
   * @return {Boolean}          True, if the year is a leap year
   */ ICAL.Time.isLeapYear = function isLeapYear(year) {
        if (year <= 1752) return year % 4 == 0;
        else return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    };
    /**
   * Create a new ICAL.Time from the day of year and year. The date is returned
   * in floating timezone.
   *
   * @param {Number} aDayOfYear     The day of year
   * @param {Number} aYear          The year to create the instance in
   * @return {ICAL.Time}            The created instance with the calculated date
   */ ICAL.Time.fromDayOfYear = function icaltime_fromDayOfYear(aDayOfYear, aYear) {
        var year = aYear;
        var doy = aDayOfYear;
        var tt = new ICAL.Time();
        tt.auto_normalize = false;
        var is_leap = ICAL.Time.isLeapYear(year) ? 1 : 0;
        if (doy < 1) {
            year--;
            is_leap = ICAL.Time.isLeapYear(year) ? 1 : 0;
            doy += ICAL.Time.daysInYearPassedMonth[is_leap][12];
            return ICAL.Time.fromDayOfYear(doy, year);
        } else if (doy > ICAL.Time.daysInYearPassedMonth[is_leap][12]) {
            is_leap = ICAL.Time.isLeapYear(year) ? 1 : 0;
            doy -= ICAL.Time.daysInYearPassedMonth[is_leap][12];
            year++;
            return ICAL.Time.fromDayOfYear(doy, year);
        }
        tt.year = year;
        tt.isDate = true;
        for(var month = 11; month >= 0; month--)if (doy > ICAL.Time.daysInYearPassedMonth[is_leap][month]) {
            tt.month = month + 1;
            tt.day = doy - ICAL.Time.daysInYearPassedMonth[is_leap][month];
            break;
        }
        tt.auto_normalize = true;
        return tt;
    };
    /**
   * Returns a new ICAL.Time instance from a date string, e.g 2015-01-02.
   *
   * @deprecated                Use {@link ICAL.Time.fromDateString} instead
   * @param {String} str        The string to create from
   * @return {ICAL.Time}        The date/time instance
   */ ICAL.Time.fromStringv2 = function fromString(str) {
        return new ICAL.Time({
            year: parseInt(str.substr(0, 4), 10),
            month: parseInt(str.substr(5, 2), 10),
            day: parseInt(str.substr(8, 2), 10),
            isDate: true
        });
    };
    /**
   * Returns a new ICAL.Time instance from a date string, e.g 2015-01-02.
   *
   * @param {String} aValue     The string to create from
   * @return {ICAL.Time}        The date/time instance
   */ ICAL.Time.fromDateString = function(aValue) {
        // Dates should have no timezone.
        // Google likes to sometimes specify Z on dates
        // we specifically ignore that to avoid issues.
        // YYYY-MM-DD
        // 2012-10-10
        return new ICAL.Time({
            year: ICAL.helpers.strictParseInt(aValue.substr(0, 4)),
            month: ICAL.helpers.strictParseInt(aValue.substr(5, 2)),
            day: ICAL.helpers.strictParseInt(aValue.substr(8, 2)),
            isDate: true
        });
    };
    /**
   * Returns a new ICAL.Time instance from a date-time string, e.g
   * 2015-01-02T03:04:05. If a property is specified, the timezone is set up
   * from the property's TZID parameter.
   *
   * @param {String} aValue         The string to create from
   * @param {ICAL.Property=} prop   The property the date belongs to
   * @return {ICAL.Time}            The date/time instance
   */ ICAL.Time.fromDateTimeString = function(aValue, prop) {
        if (aValue.length < 19) throw new Error('invalid date-time value: "' + aValue + '"');
        var zone;
        if (aValue[19] && aValue[19] === "Z") zone = "Z";
        else if (prop) zone = prop.getParameter("tzid");
        // 2012-10-10T10:10:10(Z)?
        var time = new ICAL.Time({
            year: ICAL.helpers.strictParseInt(aValue.substr(0, 4)),
            month: ICAL.helpers.strictParseInt(aValue.substr(5, 2)),
            day: ICAL.helpers.strictParseInt(aValue.substr(8, 2)),
            hour: ICAL.helpers.strictParseInt(aValue.substr(11, 2)),
            minute: ICAL.helpers.strictParseInt(aValue.substr(14, 2)),
            second: ICAL.helpers.strictParseInt(aValue.substr(17, 2)),
            timezone: zone
        });
        return time;
    };
    /**
   * Returns a new ICAL.Time instance from a date or date-time string,
   *
   * @param {String} aValue         The string to create from
   * @param {ICAL.Property=} prop   The property the date belongs to
   * @return {ICAL.Time}            The date/time instance
   */ ICAL.Time.fromString = function fromString(aValue, aProperty) {
        if (aValue.length > 10) return ICAL.Time.fromDateTimeString(aValue, aProperty);
        else return ICAL.Time.fromDateString(aValue);
    };
    /**
   * Creates a new ICAL.Time instance from the given Javascript Date.
   *
   * @param {?Date} aDate     The Javascript Date to read, or null to reset
   * @param {Boolean} useUTC  If true, the UTC values of the date will be used
   */ ICAL.Time.fromJSDate = function fromJSDate(aDate, useUTC) {
        var tt = new ICAL.Time();
        return tt.fromJSDate(aDate, useUTC);
    };
    /**
   * Creates a new ICAL.Time instance from the the passed data object.
   *
   * @param {Object} aData            Time initialization
   * @param {Number=} aData.year      The year for this date
   * @param {Number=} aData.month     The month for this date
   * @param {Number=} aData.day       The day for this date
   * @param {Number=} aData.hour      The hour for this date
   * @param {Number=} aData.minute    The minute for this date
   * @param {Number=} aData.second    The second for this date
   * @param {Boolean=} aData.isDate   If true, the instance represents a date
   *                                    (as opposed to a date-time)
   * @param {ICAL.Timezone=} aZone    Timezone this position occurs in
   */ ICAL.Time.fromData = function fromData(aData, aZone) {
        var t = new ICAL.Time();
        return t.fromData(aData, aZone);
    };
    /**
   * Creates a new ICAL.Time instance from the current moment.
   * The instance is “floating” - has no timezone relation.
   * To create an instance considering the time zone, call
   * ICAL.Time.fromJSDate(new Date(), true)
   * @return {ICAL.Time}
   */ ICAL.Time.now = function icaltime_now() {
        return ICAL.Time.fromJSDate(new Date(), false);
    };
    /**
   * Returns the date on which ISO week number 1 starts.
   *
   * @see ICAL.Time#weekNumber
   * @param {Number} aYear                  The year to search in
   * @param {ICAL.Time.weekDay=} aWeekStart The week start weekday, used for calculation.
   * @return {ICAL.Time}                    The date on which week number 1 starts
   */ ICAL.Time.weekOneStarts = function weekOneStarts(aYear, aWeekStart) {
        var t = ICAL.Time.fromData({
            year: aYear,
            month: 1,
            day: 1,
            isDate: true
        });
        var dow = t.dayOfWeek();
        var wkst = aWeekStart || ICAL.Time.DEFAULT_WEEK_START;
        if (dow > ICAL.Time.THURSDAY) t.day += 7;
        if (wkst > ICAL.Time.THURSDAY) t.day -= 7;
        t.day -= dow - wkst;
        return t;
    };
    /**
   * Get the dominical letter for the given year. Letters range from A - G for
   * common years, and AG to GF for leap years.
   *
   * @param {Number} yr           The year to retrieve the letter for
   * @return {String}             The dominical letter.
   */ ICAL.Time.getDominicalLetter = function(yr) {
        var LTRS = "GFEDCBA";
        var dom = (yr + (yr / 4 | 0) + (yr / 400 | 0) - (yr / 100 | 0) - 1) % 7;
        var isLeap = ICAL.Time.isLeapYear(yr);
        if (isLeap) return LTRS[(dom + 6) % 7] + LTRS[dom];
        else return LTRS[dom];
    };
    /**
   * January 1st, 1970 as an ICAL.Time.
   * @type {ICAL.Time}
   * @constant
   * @instance
   */ ICAL.Time.epochTime = ICAL.Time.fromData({
        year: 1970,
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        isDate: false,
        timezone: "Z"
    });
    ICAL.Time._cmp_attr = function _cmp_attr(a, b, attr) {
        if (a[attr] > b[attr]) return 1;
        if (a[attr] < b[attr]) return -1;
        return 0;
    };
    /**
   * The days that have passed in the year after a given month. The array has
   * two members, one being an array of passed days for non-leap years, the
   * other analog for leap years.
   * @example
   * var isLeapYear = ICAL.Time.isLeapYear(year);
   * var passedDays = ICAL.Time.daysInYearPassedMonth[isLeapYear][month];
   * @type {Array.<Array.<Number>>}
   */ ICAL.Time.daysInYearPassedMonth = [
        [
            0,
            31,
            59,
            90,
            120,
            151,
            181,
            212,
            243,
            273,
            304,
            334,
            365
        ],
        [
            0,
            31,
            60,
            91,
            121,
            152,
            182,
            213,
            244,
            274,
            305,
            335,
            366
        ]
    ];
    /**
   * The weekday, 1 = SUNDAY, 7 = SATURDAY. Access via
   * ICAL.Time.MONDAY, ICAL.Time.TUESDAY, ...
   *
   * @typedef {Number} weekDay
   * @memberof ICAL.Time
   */ ICAL.Time.SUNDAY = 1;
    ICAL.Time.MONDAY = 2;
    ICAL.Time.TUESDAY = 3;
    ICAL.Time.WEDNESDAY = 4;
    ICAL.Time.THURSDAY = 5;
    ICAL.Time.FRIDAY = 6;
    ICAL.Time.SATURDAY = 7;
    /**
   * The default weekday for the WKST part.
   * @constant
   * @default ICAL.Time.MONDAY
   */ ICAL.Time.DEFAULT_WEEK_START = ICAL.Time.MONDAY;
})();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2015 */ (function() {
    /**
   * Describes a vCard time, which has slight differences to the ICAL.Time.
   * Properties can be null if not specified, for example for dates with
   * reduced accuracy or truncation.
   *
   * Note that currently not all methods are correctly re-implemented for
   * VCardTime. For example, comparison will have undefined results when some
   * members are null.
   *
   * Also, normalization is not yet implemented for this class!
   *
   * @alias ICAL.VCardTime
   * @class
   * @extends {ICAL.Time}
   * @param {Object} data                           The data for the time instance
   * @param {Number=} data.year                     The year for this date
   * @param {Number=} data.month                    The month for this date
   * @param {Number=} data.day                      The day for this date
   * @param {Number=} data.hour                     The hour for this date
   * @param {Number=} data.minute                   The minute for this date
   * @param {Number=} data.second                   The second for this date
   * @param {ICAL.Timezone|ICAL.UtcOffset} zone     The timezone to use
   * @param {String} icaltype                       The type for this date/time object
   */ ICAL.VCardTime = function(data, zone, icaltype) {
        this.wrappedJSObject = this;
        var time = this._time = Object.create(null);
        time.year = null;
        time.month = null;
        time.day = null;
        time.hour = null;
        time.minute = null;
        time.second = null;
        this.icaltype = icaltype || "date-and-or-time";
        this.fromData(data, zone);
    };
    ICAL.helpers.inherits(ICAL.Time, ICAL.VCardTime, /** @lends ICAL.VCardTime */ {
        /**
     * The class identifier.
     * @constant
     * @type {String}
     * @default "vcardtime"
     */ icalclass: "vcardtime",
        /**
     * The type name, to be used in the jCal object.
     * @type {String}
     * @default "date-and-or-time"
     */ icaltype: "date-and-or-time",
        /**
     * The timezone. This can either be floating, UTC, or an instance of
     * ICAL.UtcOffset.
     * @type {ICAL.Timezone|ICAL.UtcOFfset}
     */ zone: null,
        /**
     * Returns a clone of the vcard date/time object.
     *
     * @return {ICAL.VCardTime}     The cloned object
     */ clone: function() {
            return new ICAL.VCardTime(this._time, this.zone, this.icaltype);
        },
        _normalize: function() {
            return this;
        },
        /**
     * @inheritdoc
     */ utcOffset: function() {
            if (this.zone instanceof ICAL.UtcOffset) return this.zone.toSeconds();
            else return ICAL.Time.prototype.utcOffset.apply(this, arguments);
        },
        /**
     * Returns an RFC 6350 compliant representation of this object.
     *
     * @return {String}         vcard date/time string
     */ toICALString: function() {
            return ICAL.design.vcard.value[this.icaltype].toICAL(this.toString());
        },
        /**
     * The string representation of this date/time, in jCard form
     * (including : and - separators).
     * @return {String}
     */ toString: function toString() {
            var p2 = ICAL.helpers.pad2;
            var y = this.year, m = this.month, d = this.day;
            var h = this.hour, mm = this.minute, s = this.second;
            var hasYear = y !== null, hasMonth = m !== null, hasDay = d !== null;
            var hasHour = h !== null, hasMinute = mm !== null, hasSecond = s !== null;
            var datepart = (hasYear ? p2(y) + (hasMonth || hasDay ? "-" : "") : hasMonth || hasDay ? "--" : "") + (hasMonth ? p2(m) : "") + (hasDay ? "-" + p2(d) : "");
            var timepart = (hasHour ? p2(h) : "-") + (hasHour && hasMinute ? ":" : "") + (hasMinute ? p2(mm) : "") + (!hasHour && !hasMinute ? "-" : "") + (hasMinute && hasSecond ? ":" : "") + (hasSecond ? p2(s) : "");
            var zone;
            if (this.zone === ICAL.Timezone.utcTimezone) zone = "Z";
            else if (this.zone instanceof ICAL.UtcOffset) zone = this.zone.toString();
            else if (this.zone === ICAL.Timezone.localTimezone) zone = "";
            else if (this.zone instanceof ICAL.Timezone) {
                var offset = ICAL.UtcOffset.fromSeconds(this.zone.utcOffset(this));
                zone = offset.toString();
            } else zone = "";
            switch(this.icaltype){
                case "time":
                    return timepart + zone;
                case "date-and-or-time":
                case "date-time":
                    return datepart + (timepart == "--" ? "" : "T" + timepart + zone);
                case "date":
                    return datepart;
            }
            return null;
        }
    });
    /**
   * Returns a new ICAL.VCardTime instance from a date and/or time string.
   *
   * @param {String} aValue     The string to create from
   * @param {String} aIcalType  The type for this instance, e.g. date-and-or-time
   * @return {ICAL.VCardTime}   The date/time instance
   */ ICAL.VCardTime.fromDateAndOrTimeString = function(aValue, aIcalType) {
        function part(v, s, e) {
            return v ? ICAL.helpers.strictParseInt(v.substr(s, e)) : null;
        }
        var parts = aValue.split("T");
        var dt = parts[0], tmz = parts[1];
        var splitzone = tmz ? ICAL.design.vcard.value.time._splitZone(tmz) : [];
        var zone = splitzone[0], tm = splitzone[1];
        var stoi = ICAL.helpers.strictParseInt;
        var dtlen = dt ? dt.length : 0;
        var tmlen = tm ? tm.length : 0;
        var hasDashDate = dt && dt[0] == "-" && dt[1] == "-";
        var hasDashTime = tm && tm[0] == "-";
        var o = {
            year: hasDashDate ? null : part(dt, 0, 4),
            month: hasDashDate && (dtlen == 4 || dtlen == 7) ? part(dt, 2, 2) : dtlen == 7 ? part(dt, 5, 2) : dtlen == 10 ? part(dt, 5, 2) : null,
            day: dtlen == 5 ? part(dt, 3, 2) : dtlen == 7 && hasDashDate ? part(dt, 5, 2) : dtlen == 10 ? part(dt, 8, 2) : null,
            hour: hasDashTime ? null : part(tm, 0, 2),
            minute: hasDashTime && tmlen == 3 ? part(tm, 1, 2) : tmlen > 4 ? hasDashTime ? part(tm, 1, 2) : part(tm, 3, 2) : null,
            second: tmlen == 4 ? part(tm, 2, 2) : tmlen == 6 ? part(tm, 4, 2) : tmlen == 8 ? part(tm, 6, 2) : null
        };
        if (zone == "Z") zone = ICAL.Timezone.utcTimezone;
        else if (zone && zone[3] == ":") zone = ICAL.UtcOffset.fromString(zone);
        else zone = null;
        return new ICAL.VCardTime(o, zone, aIcalType);
    };
})();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ (function() {
    var DOW_MAP = {
        SU: ICAL.Time.SUNDAY,
        MO: ICAL.Time.MONDAY,
        TU: ICAL.Time.TUESDAY,
        WE: ICAL.Time.WEDNESDAY,
        TH: ICAL.Time.THURSDAY,
        FR: ICAL.Time.FRIDAY,
        SA: ICAL.Time.SATURDAY
    };
    var REVERSE_DOW_MAP = {};
    for(var key1 in DOW_MAP)/* istanbul ignore else */ if (DOW_MAP.hasOwnProperty(key1)) REVERSE_DOW_MAP[DOW_MAP[key1]] = key1;
    var COPY_PARTS = [
        "BYSECOND",
        "BYMINUTE",
        "BYHOUR",
        "BYDAY",
        "BYMONTHDAY",
        "BYYEARDAY",
        "BYWEEKNO",
        "BYMONTH",
        "BYSETPOS"
    ];
    /**
   * @classdesc
   * This class represents the "recur" value type, with various calculation
   * and manipulation methods.
   *
   * @class
   * @alias ICAL.Recur
   * @param {Object} data                               An object with members of the recurrence
   * @param {ICAL.Recur.frequencyValues=} data.freq     The frequency value
   * @param {Number=} data.interval                     The INTERVAL value
   * @param {ICAL.Time.weekDay=} data.wkst              The week start value
   * @param {ICAL.Time=} data.until                     The end of the recurrence set
   * @param {Number=} data.count                        The number of occurrences
   * @param {Array.<Number>=} data.bysecond             The seconds for the BYSECOND part
   * @param {Array.<Number>=} data.byminute             The minutes for the BYMINUTE part
   * @param {Array.<Number>=} data.byhour               The hours for the BYHOUR part
   * @param {Array.<String>=} data.byday                The BYDAY values
   * @param {Array.<Number>=} data.bymonthday           The days for the BYMONTHDAY part
   * @param {Array.<Number>=} data.byyearday            The days for the BYYEARDAY part
   * @param {Array.<Number>=} data.byweekno             The weeks for the BYWEEKNO part
   * @param {Array.<Number>=} data.bymonth              The month for the BYMONTH part
   * @param {Array.<Number>=} data.bysetpos             The positionals for the BYSETPOS part
   */ ICAL.Recur = function icalrecur(data) {
        this.wrappedJSObject = this;
        this.parts = {};
        if (data && typeof data === "object") this.fromData(data);
    };
    ICAL.Recur.prototype = {
        /**
     * An object holding the BY-parts of the recurrence rule
     * @type {Object}
     */ parts: null,
        /**
     * The interval value for the recurrence rule.
     * @type {Number}
     */ interval: 1,
        /**
     * The week start day
     *
     * @type {ICAL.Time.weekDay}
     * @default ICAL.Time.MONDAY
     */ wkst: ICAL.Time.MONDAY,
        /**
     * The end of the recurrence
     * @type {?ICAL.Time}
     */ until: null,
        /**
     * The maximum number of occurrences
     * @type {?Number}
     */ count: null,
        /**
     * The frequency value.
     * @type {ICAL.Recur.frequencyValues}
     */ freq: null,
        /**
     * The class identifier.
     * @constant
     * @type {String}
     * @default "icalrecur"
     */ icalclass: "icalrecur",
        /**
     * The type name, to be used in the jCal object.
     * @constant
     * @type {String}
     * @default "recur"
     */ icaltype: "recur",
        /**
     * Create a new iterator for this recurrence rule. The passed start date
     * must be the start date of the event, not the start of the range to
     * search in.
     *
     * @example
     * var recur = comp.getFirstPropertyValue('rrule');
     * var dtstart = comp.getFirstPropertyValue('dtstart');
     * var iter = recur.iterator(dtstart);
     * for (var next = iter.next(); next; next = iter.next()) {
     *   if (next.compare(rangeStart) < 0) {
     *     continue;
     *   }
     *   console.log(next.toString());
     * }
     *
     * @param {ICAL.Time} aStart        The item's start date
     * @return {ICAL.RecurIterator}     The recurrence iterator
     */ iterator: function(aStart) {
            return new ICAL.RecurIterator({
                rule: this,
                dtstart: aStart
            });
        },
        /**
     * Returns a clone of the recurrence object.
     *
     * @return {ICAL.Recur}      The cloned object
     */ clone: function clone() {
            return new ICAL.Recur(this.toJSON());
        },
        /**
     * Checks if the current rule is finite, i.e. has a count or until part.
     *
     * @return {Boolean}        True, if the rule is finite
     */ isFinite: function isfinite() {
            return !!(this.count || this.until);
        },
        /**
     * Checks if the current rule has a count part, and not limited by an until
     * part.
     *
     * @return {Boolean}        True, if the rule is by count
     */ isByCount: function isbycount() {
            return !!(this.count && !this.until);
        },
        /**
     * Adds a component (part) to the recurrence rule. This is not a component
     * in the sense of {@link ICAL.Component}, but a part of the recurrence
     * rule, i.e. BYMONTH.
     *
     * @param {String} aType            The name of the component part
     * @param {Array|String} aValue     The component value
     */ addComponent: function addPart(aType, aValue) {
            var ucname = aType.toUpperCase();
            if (ucname in this.parts) this.parts[ucname].push(aValue);
            else this.parts[ucname] = [
                aValue
            ];
        },
        /**
     * Sets the component value for the given by-part.
     *
     * @param {String} aType        The component part name
     * @param {Array} aValues       The component values
     */ setComponent: function setComponent(aType, aValues) {
            this.parts[aType.toUpperCase()] = aValues.slice();
        },
        /**
     * Gets (a copy) of the requested component value.
     *
     * @param {String} aType        The component part name
     * @return {Array}              The component part value
     */ getComponent: function getComponent(aType) {
            var ucname = aType.toUpperCase();
            return ucname in this.parts ? this.parts[ucname].slice() : [];
        },
        /**
     * Retrieves the next occurrence after the given recurrence id. See the
     * guide on {@tutorial terminology} for more details.
     *
     * NOTE: Currently, this method iterates all occurrences from the start
     * date. It should not be called in a loop for performance reasons. If you
     * would like to get more than one occurrence, you can iterate the
     * occurrences manually, see the example on the
     * {@link ICAL.Recur#iterator iterator} method.
     *
     * @param {ICAL.Time} aStartTime        The start of the event series
     * @param {ICAL.Time} aRecurrenceId     The date of the last occurrence
     * @return {ICAL.Time}                  The next occurrence after
     */ getNextOccurrence: function getNextOccurrence(aStartTime, aRecurrenceId) {
            var iter = this.iterator(aStartTime);
            var next, cdt;
            do next = iter.next();
            while (next && next.compare(aRecurrenceId) <= 0);
            if (next && aRecurrenceId.zone) next.zone = aRecurrenceId.zone;
            return next;
        },
        /**
     * Sets up the current instance using members from the passed data object.
     *
     * @param {Object} data                               An object with members of the recurrence
     * @param {ICAL.Recur.frequencyValues=} data.freq     The frequency value
     * @param {Number=} data.interval                     The INTERVAL value
     * @param {ICAL.Time.weekDay=} data.wkst              The week start value
     * @param {ICAL.Time=} data.until                     The end of the recurrence set
     * @param {Number=} data.count                        The number of occurrences
     * @param {Array.<Number>=} data.bysecond             The seconds for the BYSECOND part
     * @param {Array.<Number>=} data.byminute             The minutes for the BYMINUTE part
     * @param {Array.<Number>=} data.byhour               The hours for the BYHOUR part
     * @param {Array.<String>=} data.byday                The BYDAY values
     * @param {Array.<Number>=} data.bymonthday           The days for the BYMONTHDAY part
     * @param {Array.<Number>=} data.byyearday            The days for the BYYEARDAY part
     * @param {Array.<Number>=} data.byweekno             The weeks for the BYWEEKNO part
     * @param {Array.<Number>=} data.bymonth              The month for the BYMONTH part
     * @param {Array.<Number>=} data.bysetpos             The positionals for the BYSETPOS part
     */ fromData: function(data) {
            for(var key in data){
                var uckey = key.toUpperCase();
                if (uckey in partDesign) {
                    if (Array.isArray(data[key])) this.parts[uckey] = data[key];
                    else this.parts[uckey] = [
                        data[key]
                    ];
                } else this[key] = data[key];
            }
            if (this.interval && typeof this.interval != "number") optionDesign.INTERVAL(this.interval, this);
            if (this.wkst && typeof this.wkst != "number") this.wkst = ICAL.Recur.icalDayToNumericDay(this.wkst);
            if (this.until && !(this.until instanceof ICAL.Time)) this.until = ICAL.Time.fromString(this.until);
        },
        /**
     * The jCal representation of this recurrence type.
     * @return {Object}
     */ toJSON: function() {
            var res = Object.create(null);
            res.freq = this.freq;
            if (this.count) res.count = this.count;
            if (this.interval > 1) res.interval = this.interval;
            for(var k in this.parts){
                /* istanbul ignore if */ if (!this.parts.hasOwnProperty(k)) continue;
                var kparts = this.parts[k];
                if (Array.isArray(kparts) && kparts.length == 1) res[k.toLowerCase()] = kparts[0];
                else res[k.toLowerCase()] = ICAL.helpers.clone(this.parts[k]);
            }
            if (this.until) res.until = this.until.toString();
            if ("wkst" in this && this.wkst !== ICAL.Time.DEFAULT_WEEK_START) res.wkst = ICAL.Recur.numericDayToIcalDay(this.wkst);
            return res;
        },
        /**
     * The string representation of this recurrence rule.
     * @return {String}
     */ toString: function icalrecur_toString() {
            // TODO retain order
            var str = "FREQ=" + this.freq;
            if (this.count) str += ";COUNT=" + this.count;
            if (this.interval > 1) str += ";INTERVAL=" + this.interval;
            for(var k in this.parts)/* istanbul ignore else */ if (this.parts.hasOwnProperty(k)) str += ";" + k + "=" + this.parts[k];
            if (this.until) str += ";UNTIL=" + this.until.toICALString();
            if ("wkst" in this && this.wkst !== ICAL.Time.DEFAULT_WEEK_START) str += ";WKST=" + ICAL.Recur.numericDayToIcalDay(this.wkst);
            return str;
        }
    };
    function parseNumericValue(type, min, max, value) {
        var result = value;
        if (value[0] === "+") result = value.substr(1);
        result = ICAL.helpers.strictParseInt(result);
        if (min !== undefined && value < min) throw new Error(type + ': invalid value "' + value + '" must be > ' + min);
        if (max !== undefined && value > max) throw new Error(type + ': invalid value "' + value + '" must be < ' + min);
        return result;
    }
    /**
   * Convert an ical representation of a day (SU, MO, etc..)
   * into a numeric value of that day.
   *
   * @param {String} string     The iCalendar day name
   * @param {ICAL.Time.weekDay=} aWeekStart
   *        The week start weekday, defaults to SUNDAY
   * @return {Number}           Numeric value of given day
   */ ICAL.Recur.icalDayToNumericDay = function toNumericDay(string, aWeekStart) {
        //XXX: this is here so we can deal
        //     with possibly invalid string values.
        var firstDow = aWeekStart || ICAL.Time.SUNDAY;
        return (DOW_MAP[string] - firstDow + 7) % 7 + 1;
    };
    /**
   * Convert a numeric day value into its ical representation (SU, MO, etc..)
   *
   * @param {Number} num        Numeric value of given day
   * @param {ICAL.Time.weekDay=} aWeekStart
   *        The week start weekday, defaults to SUNDAY
   * @return {String}           The ICAL day value, e.g SU,MO,...
   */ ICAL.Recur.numericDayToIcalDay = function toIcalDay(num, aWeekStart) {
        //XXX: this is here so we can deal with possibly invalid number values.
        //     Also, this allows consistent mapping between day numbers and day
        //     names for external users.
        var firstDow = aWeekStart || ICAL.Time.SUNDAY;
        var dow = num + firstDow - ICAL.Time.SUNDAY;
        if (dow > 7) dow -= 7;
        return REVERSE_DOW_MAP[dow];
    };
    var VALID_DAY_NAMES = /^(SU|MO|TU|WE|TH|FR|SA)$/;
    var VALID_BYDAY_PART = /^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/;
    /**
   * Possible frequency values for the FREQ part
   * (YEARLY, MONTHLY, WEEKLY, DAILY, HOURLY, MINUTELY, SECONDLY)
   *
   * @typedef {String} frequencyValues
   * @memberof ICAL.Recur
   */ var ALLOWED_FREQ = [
        "SECONDLY",
        "MINUTELY",
        "HOURLY",
        "DAILY",
        "WEEKLY",
        "MONTHLY",
        "YEARLY"
    ];
    var optionDesign = {
        FREQ: function(value, dict, fmtIcal) {
            // yes this is actually equal or faster then regex.
            // upside here is we can enumerate the valid values.
            if (ALLOWED_FREQ.indexOf(value) !== -1) dict.freq = value;
            else throw new Error('invalid frequency "' + value + '" expected: "' + ALLOWED_FREQ.join(", ") + '"');
        },
        COUNT: function(value, dict, fmtIcal) {
            dict.count = ICAL.helpers.strictParseInt(value);
        },
        INTERVAL: function(value, dict, fmtIcal) {
            dict.interval = ICAL.helpers.strictParseInt(value);
            if (dict.interval < 1) // 0 or negative values are not allowed, some engines seem to generate
            // it though. Assume 1 instead.
            dict.interval = 1;
        },
        UNTIL: function(value, dict, fmtIcal) {
            if (value.length > 10) dict.until = ICAL.design.icalendar.value["date-time"].fromICAL(value);
            else dict.until = ICAL.design.icalendar.value.date.fromICAL(value);
            if (!fmtIcal) dict.until = ICAL.Time.fromString(dict.until);
        },
        WKST: function(value, dict, fmtIcal) {
            if (VALID_DAY_NAMES.test(value)) dict.wkst = ICAL.Recur.icalDayToNumericDay(value);
            else throw new Error('invalid WKST value "' + value + '"');
        }
    };
    var partDesign = {
        BYSECOND: parseNumericValue.bind(this, "BYSECOND", 0, 60),
        BYMINUTE: parseNumericValue.bind(this, "BYMINUTE", 0, 59),
        BYHOUR: parseNumericValue.bind(this, "BYHOUR", 0, 23),
        BYDAY: function(value) {
            if (VALID_BYDAY_PART.test(value)) return value;
            else throw new Error('invalid BYDAY value "' + value + '"');
        },
        BYMONTHDAY: parseNumericValue.bind(this, "BYMONTHDAY", -31, 31),
        BYYEARDAY: parseNumericValue.bind(this, "BYYEARDAY", -366, 366),
        BYWEEKNO: parseNumericValue.bind(this, "BYWEEKNO", -53, 53),
        BYMONTH: parseNumericValue.bind(this, "BYMONTH", 1, 12),
        BYSETPOS: parseNumericValue.bind(this, "BYSETPOS", -366, 366)
    };
    /**
   * Creates a new {@link ICAL.Recur} instance from the passed string.
   *
   * @param {String} string         The string to parse
   * @return {ICAL.Recur}           The created recurrence instance
   */ ICAL.Recur.fromString = function(string) {
        var data = ICAL.Recur._stringToData(string, false);
        return new ICAL.Recur(data);
    };
    /**
   * Creates a new {@link ICAL.Recur} instance using members from the passed
   * data object.
   *
   * @param {Object} aData                              An object with members of the recurrence
   * @param {ICAL.Recur.frequencyValues=} aData.freq    The frequency value
   * @param {Number=} aData.interval                    The INTERVAL value
   * @param {ICAL.Time.weekDay=} aData.wkst             The week start value
   * @param {ICAL.Time=} aData.until                    The end of the recurrence set
   * @param {Number=} aData.count                       The number of occurrences
   * @param {Array.<Number>=} aData.bysecond            The seconds for the BYSECOND part
   * @param {Array.<Number>=} aData.byminute            The minutes for the BYMINUTE part
   * @param {Array.<Number>=} aData.byhour              The hours for the BYHOUR part
   * @param {Array.<String>=} aData.byday               The BYDAY values
   * @param {Array.<Number>=} aData.bymonthday          The days for the BYMONTHDAY part
   * @param {Array.<Number>=} aData.byyearday           The days for the BYYEARDAY part
   * @param {Array.<Number>=} aData.byweekno            The weeks for the BYWEEKNO part
   * @param {Array.<Number>=} aData.bymonth             The month for the BYMONTH part
   * @param {Array.<Number>=} aData.bysetpos            The positionals for the BYSETPOS part
   */ ICAL.Recur.fromData = function(aData) {
        return new ICAL.Recur(aData);
    };
    /**
   * Converts a recurrence string to a data object, suitable for the fromData
   * method.
   *
   * @param {String} string     The string to parse
   * @param {Boolean} fmtIcal   If true, the string is considered to be an
   *                              iCalendar string
   * @return {ICAL.Recur}       The recurrence instance
   */ ICAL.Recur._stringToData = function(string, fmtIcal) {
        var dict = Object.create(null);
        // split is slower in FF but fast enough.
        // v8 however this is faster then manual split?
        var values = string.split(";");
        var len = values.length;
        for(var i = 0; i < len; i++){
            var parts = values[i].split("=");
            var ucname = parts[0].toUpperCase();
            var lcname = parts[0].toLowerCase();
            var name = fmtIcal ? lcname : ucname;
            var value = parts[1];
            if (ucname in partDesign) {
                var partArr = value.split(",");
                var partArrIdx = 0;
                var partArrLen = partArr.length;
                for(; partArrIdx < partArrLen; partArrIdx++)partArr[partArrIdx] = partDesign[ucname](partArr[partArrIdx]);
                dict[name] = partArr.length == 1 ? partArr[0] : partArr;
            } else if (ucname in optionDesign) optionDesign[ucname](value, dict, fmtIcal);
            else // Don't swallow unknown values. Just set them as they are.
            dict[lcname] = value;
        }
        return dict;
    };
})();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.RecurIterator = function() {
    /**
   * @classdesc
   * An iterator for a single recurrence rule. This class usually doesn't have
   * to be instanciated directly, the convenience method
   * {@link ICAL.Recur#iterator} can be used.
   *
   * @description
   * The options object may contain additional members when resuming iteration from a previous run
   *
   * @description
   * The options object may contain additional members when resuming iteration
   * from a previous run.
   *
   * @class
   * @alias ICAL.RecurIterator
   * @param {Object} options                The iterator options
   * @param {ICAL.Recur} options.rule       The rule to iterate.
   * @param {ICAL.Time} options.dtstart     The start date of the event.
   * @param {Boolean=} options.initialized  When true, assume that options are
   *        from a previously constructed iterator. Initialization will not be
   *        repeated.
   */ function icalrecur_iterator(options) {
        this.fromData(options);
    }
    icalrecur_iterator.prototype = {
        /**
     * True when iteration is finished.
     * @type {Boolean}
     */ completed: false,
        /**
     * The rule that is being iterated
     * @type {ICAL.Recur}
     */ rule: null,
        /**
     * The start date of the event being iterated.
     * @type {ICAL.Time}
     */ dtstart: null,
        /**
     * The last occurrence that was returned from the
     * {@link ICAL.RecurIterator#next} method.
     * @type {ICAL.Time}
     */ last: null,
        /**
     * The sequence number from the occurrence
     * @type {Number}
     */ occurrence_number: 0,
        /**
     * The indices used for the {@link ICAL.RecurIterator#by_data} object.
     * @type {Object}
     * @private
     */ by_indices: null,
        /**
     * If true, the iterator has already been initialized
     * @type {Boolean}
     * @private
     */ initialized: false,
        /**
     * The initializd by-data.
     * @type {Object}
     * @private
     */ by_data: null,
        /**
     * The expanded yeardays
     * @type {Array}
     * @private
     */ days: null,
        /**
     * The index in the {@link ICAL.RecurIterator#days} array.
     * @type {Number}
     * @private
     */ days_index: 0,
        /**
     * Initialize the recurrence iterator from the passed data object. This
     * method is usually not called directly, you can initialize the iterator
     * through the constructor.
     *
     * @param {Object} options                The iterator options
     * @param {ICAL.Recur} options.rule       The rule to iterate.
     * @param {ICAL.Time} options.dtstart     The start date of the event.
     * @param {Boolean=} options.initialized  When true, assume that options are
     *        from a previously constructed iterator. Initialization will not be
     *        repeated.
     */ fromData: function(options) {
            this.rule = ICAL.helpers.formatClassType(options.rule, ICAL.Recur);
            if (!this.rule) throw new Error("iterator requires a (ICAL.Recur) rule");
            this.dtstart = ICAL.helpers.formatClassType(options.dtstart, ICAL.Time);
            if (!this.dtstart) throw new Error("iterator requires a (ICAL.Time) dtstart");
            if (options.by_data) this.by_data = options.by_data;
            else this.by_data = ICAL.helpers.clone(this.rule.parts, true);
            if (options.occurrence_number) this.occurrence_number = options.occurrence_number;
            this.days = options.days || [];
            if (options.last) this.last = ICAL.helpers.formatClassType(options.last, ICAL.Time);
            this.by_indices = options.by_indices;
            if (!this.by_indices) this.by_indices = {
                "BYSECOND": 0,
                "BYMINUTE": 0,
                "BYHOUR": 0,
                "BYDAY": 0,
                "BYMONTH": 0,
                "BYWEEKNO": 0,
                "BYMONTHDAY": 0
            };
            this.initialized = options.initialized || false;
            if (!this.initialized) this.init();
        },
        /**
     * Intialize the iterator
     * @private
     */ init: function icalrecur_iterator_init() {
            this.initialized = true;
            this.last = this.dtstart.clone();
            var parts = this.by_data;
            if ("BYDAY" in parts) // libical does this earlier when the rule is loaded, but we postpone to
            // now so we can preserve the original order.
            this.sort_byday_rules(parts.BYDAY);
            // If the BYYEARDAY appares, no other date rule part may appear
            if ("BYYEARDAY" in parts) {
                if ("BYMONTH" in parts || "BYWEEKNO" in parts || "BYMONTHDAY" in parts || "BYDAY" in parts) throw new Error("Invalid BYYEARDAY rule");
            }
            // BYWEEKNO and BYMONTHDAY rule parts may not both appear
            if ("BYWEEKNO" in parts && "BYMONTHDAY" in parts) throw new Error("BYWEEKNO does not fit to BYMONTHDAY");
            // For MONTHLY recurrences (FREQ=MONTHLY) neither BYYEARDAY nor
            // BYWEEKNO may appear.
            if (this.rule.freq == "MONTHLY" && ("BYYEARDAY" in parts || "BYWEEKNO" in parts)) throw new Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");
            // For WEEKLY recurrences (FREQ=WEEKLY) neither BYMONTHDAY nor
            // BYYEARDAY may appear.
            if (this.rule.freq == "WEEKLY" && ("BYYEARDAY" in parts || "BYMONTHDAY" in parts)) throw new Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");
            // BYYEARDAY may only appear in YEARLY rules
            if (this.rule.freq != "YEARLY" && "BYYEARDAY" in parts) throw new Error("BYYEARDAY may only appear in YEARLY rules");
            this.last.second = this.setup_defaults("BYSECOND", "SECONDLY", this.dtstart.second);
            this.last.minute = this.setup_defaults("BYMINUTE", "MINUTELY", this.dtstart.minute);
            this.last.hour = this.setup_defaults("BYHOUR", "HOURLY", this.dtstart.hour);
            this.last.day = this.setup_defaults("BYMONTHDAY", "DAILY", this.dtstart.day);
            this.last.month = this.setup_defaults("BYMONTH", "MONTHLY", this.dtstart.month);
            if (this.rule.freq == "WEEKLY") {
                if ("BYDAY" in parts) {
                    var bydayParts = this.ruleDayOfWeek(parts.BYDAY[0], this.rule.wkst);
                    var pos = bydayParts[0];
                    var dow = bydayParts[1];
                    var wkdy = dow - this.last.dayOfWeek(this.rule.wkst);
                    if (this.last.dayOfWeek(this.rule.wkst) < dow && wkdy >= 0 || wkdy < 0) // Initial time is after first day of BYDAY data
                    this.last.day += wkdy;
                } else {
                    var dayName = ICAL.Recur.numericDayToIcalDay(this.dtstart.dayOfWeek());
                    parts.BYDAY = [
                        dayName
                    ];
                }
            }
            if (this.rule.freq == "YEARLY") {
                for(;;){
                    this.expand_year_days(this.last.year);
                    if (this.days.length > 0) break;
                    this.increment_year(this.rule.interval);
                }
                this._nextByYearDay();
            }
            if (this.rule.freq == "MONTHLY" && this.has_by_data("BYDAY")) {
                var tempLast = null;
                var initLast = this.last.clone();
                var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
                // Check every weekday in BYDAY with relative dow and pos.
                for(var i in this.by_data.BYDAY){
                    /* istanbul ignore if */ if (!this.by_data.BYDAY.hasOwnProperty(i)) continue;
                    this.last = initLast.clone();
                    var bydayParts = this.ruleDayOfWeek(this.by_data.BYDAY[i]);
                    var pos = bydayParts[0];
                    var dow = bydayParts[1];
                    var dayOfMonth = this.last.nthWeekDay(dow, pos);
                    // If |pos| >= 6, the byday is invalid for a monthly rule.
                    if (pos >= 6 || pos <= -6) throw new Error("Malformed values in BYDAY part");
                    // If a Byday with pos=+/-5 is not in the current month it
                    // must be searched in the next months.
                    if (dayOfMonth > daysInMonth || dayOfMonth <= 0) {
                        // Skip if we have already found a "last" in this month.
                        if (tempLast && tempLast.month == initLast.month) continue;
                        while(dayOfMonth > daysInMonth || dayOfMonth <= 0){
                            this.increment_month();
                            daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
                            dayOfMonth = this.last.nthWeekDay(dow, pos);
                        }
                    }
                    this.last.day = dayOfMonth;
                    if (!tempLast || this.last.compare(tempLast) < 0) tempLast = this.last.clone();
                }
                this.last = tempLast.clone();
                //XXX: This feels like a hack, but we need to initialize
                //     the BYMONTHDAY case correctly and byDayAndMonthDay handles
                //     this case. It accepts a special flag which will avoid incrementing
                //     the initial value without the flag days that match the start time
                //     would be missed.
                if (this.has_by_data("BYMONTHDAY")) this._byDayAndMonthDay(true);
                if (this.last.day > daysInMonth || this.last.day == 0) throw new Error("Malformed values in BYDAY part");
            } else if (this.has_by_data("BYMONTHDAY")) {
                if (this.last.day < 0) {
                    var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
                    this.last.day = daysInMonth + this.last.day + 1;
                }
            }
        },
        /**
     * Retrieve the next occurrence from the iterator.
     * @return {ICAL.Time}
     */ next: function icalrecur_iterator_next() {
            var before = this.last ? this.last.clone() : null;
            if (this.rule.count && this.occurrence_number >= this.rule.count || this.rule.until && this.last.compare(this.rule.until) > 0) {
                //XXX: right now this is just a flag and has no impact
                //     we can simplify the above case to check for completed later.
                this.completed = true;
                return null;
            }
            if (this.occurrence_number == 0 && this.last.compare(this.dtstart) >= 0) {
                // First of all, give the instance that was initialized
                this.occurrence_number++;
                return this.last;
            }
            var valid;
            do {
                valid = 1;
                switch(this.rule.freq){
                    case "SECONDLY":
                        this.next_second();
                        break;
                    case "MINUTELY":
                        this.next_minute();
                        break;
                    case "HOURLY":
                        this.next_hour();
                        break;
                    case "DAILY":
                        this.next_day();
                        break;
                    case "WEEKLY":
                        this.next_week();
                        break;
                    case "MONTHLY":
                        valid = this.next_month();
                        break;
                    case "YEARLY":
                        this.next_year();
                        break;
                    default:
                        return null;
                }
            }while (!this.check_contracting_rules() || this.last.compare(this.dtstart) < 0 || !valid);
            // TODO is this valid?
            if (this.last.compare(before) == 0) throw new Error("Same occurrence found twice, protecting you from death by recursion");
            if (this.rule.until && this.last.compare(this.rule.until) > 0) {
                this.completed = true;
                return null;
            } else {
                this.occurrence_number++;
                return this.last;
            }
        },
        next_second: function next_second() {
            return this.next_generic("BYSECOND", "SECONDLY", "second", "minute");
        },
        increment_second: function increment_second(inc) {
            return this.increment_generic(inc, "second", 60, "minute");
        },
        next_minute: function next_minute() {
            return this.next_generic("BYMINUTE", "MINUTELY", "minute", "hour", "next_second");
        },
        increment_minute: function increment_minute(inc) {
            return this.increment_generic(inc, "minute", 60, "hour");
        },
        next_hour: function next_hour() {
            return this.next_generic("BYHOUR", "HOURLY", "hour", "monthday", "next_minute");
        },
        increment_hour: function increment_hour(inc) {
            this.increment_generic(inc, "hour", 24, "monthday");
        },
        next_day: function next_day() {
            var has_by_day = "BYDAY" in this.by_data;
            var this_freq = this.rule.freq == "DAILY";
            if (this.next_hour() == 0) return 0;
            if (this_freq) this.increment_monthday(this.rule.interval);
            else this.increment_monthday(1);
            return 0;
        },
        next_week: function next_week() {
            var end_of_data = 0;
            if (this.next_weekday_by_week() == 0) return end_of_data;
            if (this.has_by_data("BYWEEKNO")) {
                var idx = ++this.by_indices.BYWEEKNO;
                if (this.by_indices.BYWEEKNO == this.by_data.BYWEEKNO.length) {
                    this.by_indices.BYWEEKNO = 0;
                    end_of_data = 1;
                }
                // HACK should be first month of the year
                this.last.month = 1;
                this.last.day = 1;
                var week_no = this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];
                this.last.day += 7 * week_no;
                if (end_of_data) this.increment_year(1);
            } else // Jump to the next week
            this.increment_monthday(7 * this.rule.interval);
            return end_of_data;
        },
        /**
     * Normalize each by day rule for a given year/month.
     * Takes into account ordering and negative rules
     *
     * @private
     * @param {Number} year         Current year.
     * @param {Number} month        Current month.
     * @param {Array}  rules        Array of rules.
     *
     * @return {Array} sorted and normalized rules.
     *                 Negative rules will be expanded to their
     *                 correct positive values for easier processing.
     */ normalizeByMonthDayRules: function(year, month, rules) {
            var daysInMonth = ICAL.Time.daysInMonth(month, year);
            // XXX: This is probably bad for performance to allocate
            //      a new array for each month we scan, if possible
            //      we should try to optimize this...
            var newRules = [];
            var ruleIdx = 0;
            var len = rules.length;
            var rule;
            for(; ruleIdx < len; ruleIdx++){
                rule = rules[ruleIdx];
                // if this rule falls outside of given
                // month discard it.
                if (Math.abs(rule) > daysInMonth) continue;
                // negative case
                if (rule < 0) // we add (not subtract it is a negative number)
                // one from the rule because 1 === last day of month
                rule = daysInMonth + (rule + 1);
                else if (rule === 0) continue;
                // only add unique items...
                if (newRules.indexOf(rule) === -1) newRules.push(rule);
            }
            // unique and sort
            return newRules.sort(function(a, b) {
                return a - b;
            });
        },
        /**
     * NOTES:
     * We are given a list of dates in the month (BYMONTHDAY) (23, etc..)
     * Also we are given a list of days (BYDAY) (MO, 2SU, etc..) when
     * both conditions match a given date (this.last.day) iteration stops.
     *
     * @private
     * @param {Boolean=} isInit     When given true will not increment the
     *                                current day (this.last).
     */ _byDayAndMonthDay: function(isInit) {
            var byMonthDay; // setup in initMonth
            var byDay = this.by_data.BYDAY;
            var date;
            var dateIdx = 0;
            var dateLen; // setup in initMonth
            var dayLen = byDay.length;
            // we are not valid by default
            var dataIsValid = 0;
            var daysInMonth;
            var self = this;
            // we need a copy of this, because a DateTime gets normalized
            // automatically if the day is out of range. At some points we
            // set the last day to 0 to start counting.
            var lastDay = this.last.day;
            function initMonth() {
                daysInMonth = ICAL.Time.daysInMonth(self.last.month, self.last.year);
                byMonthDay = self.normalizeByMonthDayRules(self.last.year, self.last.month, self.by_data.BYMONTHDAY);
                dateLen = byMonthDay.length;
                // For the case of more than one occurrence in one month
                // we have to be sure to start searching after the last
                // found date or at the last BYMONTHDAY, unless we are
                // initializing the iterator because in this case we have
                // to consider the last found date too.
                while(byMonthDay[dateIdx] <= lastDay && !(isInit && byMonthDay[dateIdx] == lastDay) && dateIdx < dateLen - 1)dateIdx++;
            }
            function nextMonth() {
                // since the day is incremented at the start
                // of the loop below, we need to start at 0
                lastDay = 0;
                self.increment_month();
                dateIdx = 0;
                initMonth();
            }
            initMonth();
            // should come after initMonth
            if (isInit) lastDay -= 1;
            // Use a counter to avoid an infinite loop with malformed rules.
            // Stop checking after 4 years so we consider also a leap year.
            var monthsCounter = 48;
            while(!dataIsValid && monthsCounter){
                monthsCounter--;
                // increment the current date. This is really
                // important otherwise we may fall into the infinite
                // loop trap. The initial date takes care of the case
                // where the current date is the date we are looking
                // for.
                date = lastDay + 1;
                if (date > daysInMonth) {
                    nextMonth();
                    continue;
                }
                // find next date
                var next = byMonthDay[dateIdx++];
                // this logic is dependant on the BYMONTHDAYS
                // being in order (which is done by #normalizeByMonthDayRules)
                if (next >= date) // if the next month day is in the future jump to it.
                lastDay = next;
                else {
                    // in this case the 'next' monthday has past
                    // we must move to the month.
                    nextMonth();
                    continue;
                }
                // Now we can loop through the day rules to see
                // if one matches the current month date.
                for(var dayIdx = 0; dayIdx < dayLen; dayIdx++){
                    var parts = this.ruleDayOfWeek(byDay[dayIdx]);
                    var pos = parts[0];
                    var dow = parts[1];
                    this.last.day = lastDay;
                    if (this.last.isNthWeekDay(dow, pos)) {
                        // when we find the valid one we can mark
                        // the conditions as met and break the loop.
                        // (Because we have this condition above
                        //  it will also break the parent loop).
                        dataIsValid = 1;
                        break;
                    }
                }
                // It is completely possible that the combination
                // cannot be matched in the current month.
                // When we reach the end of possible combinations
                // in the current month we iterate to the next one.
                // since dateIdx is incremented right after getting
                // "next", we don't need dateLen -1 here.
                if (!dataIsValid && dateIdx === dateLen) {
                    nextMonth();
                    continue;
                }
            }
            if (monthsCounter <= 0) // Checked 4 years without finding a Byday that matches
            // a Bymonthday. Maybe the rule is not correct.
            throw new Error("Malformed values in BYDAY combined with BYMONTHDAY parts");
            return dataIsValid;
        },
        next_month: function next_month() {
            var this_freq = this.rule.freq == "MONTHLY";
            var data_valid = 1;
            if (this.next_hour() == 0) return data_valid;
            if (this.has_by_data("BYDAY") && this.has_by_data("BYMONTHDAY")) data_valid = this._byDayAndMonthDay();
            else if (this.has_by_data("BYDAY")) {
                var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
                var setpos = 0;
                var setpos_total = 0;
                if (this.has_by_data("BYSETPOS")) {
                    var last_day = this.last.day;
                    for(var day = 1; day <= daysInMonth; day++){
                        this.last.day = day;
                        if (this.is_day_in_byday(this.last)) {
                            setpos_total++;
                            if (day <= last_day) setpos++;
                        }
                    }
                    this.last.day = last_day;
                }
                data_valid = 0;
                for(var day = this.last.day + 1; day <= daysInMonth; day++){
                    this.last.day = day;
                    if (this.is_day_in_byday(this.last)) {
                        if (!this.has_by_data("BYSETPOS") || this.check_set_position(++setpos) || this.check_set_position(setpos - setpos_total - 1)) {
                            data_valid = 1;
                            break;
                        }
                    }
                }
                if (day > daysInMonth) {
                    this.last.day = 1;
                    this.increment_month();
                    if (this.is_day_in_byday(this.last)) {
                        if (!this.has_by_data("BYSETPOS") || this.check_set_position(1)) data_valid = 1;
                    } else data_valid = 0;
                }
            } else if (this.has_by_data("BYMONTHDAY")) {
                this.by_indices.BYMONTHDAY++;
                if (this.by_indices.BYMONTHDAY >= this.by_data.BYMONTHDAY.length) {
                    this.by_indices.BYMONTHDAY = 0;
                    this.increment_month();
                }
                var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
                var day = this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];
                if (day < 0) day = daysInMonth + day + 1;
                if (day > daysInMonth) {
                    this.last.day = 1;
                    data_valid = this.is_day_in_byday(this.last);
                } else this.last.day = day;
            } else {
                this.increment_month();
                var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
                if (this.by_data.BYMONTHDAY[0] > daysInMonth) data_valid = 0;
                else this.last.day = this.by_data.BYMONTHDAY[0];
            }
            return data_valid;
        },
        next_weekday_by_week: function next_weekday_by_week() {
            var end_of_data = 0;
            if (this.next_hour() == 0) return end_of_data;
            if (!this.has_by_data("BYDAY")) return 1;
            for(;;){
                var tt = new ICAL.Time();
                this.by_indices.BYDAY++;
                if (this.by_indices.BYDAY == Object.keys(this.by_data.BYDAY).length) {
                    this.by_indices.BYDAY = 0;
                    end_of_data = 1;
                }
                var coded_day = this.by_data.BYDAY[this.by_indices.BYDAY];
                var parts = this.ruleDayOfWeek(coded_day);
                var dow = parts[1];
                dow -= this.rule.wkst;
                if (dow < 0) dow += 7;
                tt.year = this.last.year;
                tt.month = this.last.month;
                tt.day = this.last.day;
                var startOfWeek = tt.startDoyWeek(this.rule.wkst);
                if (dow + startOfWeek < 1) {
                    // The selected date is in the previous year
                    if (!end_of_data) continue;
                }
                var next = ICAL.Time.fromDayOfYear(startOfWeek + dow, this.last.year);
                /**
         * The normalization horrors below are due to
         * the fact that when the year/month/day changes
         * it can effect the other operations that come after.
         */ this.last.year = next.year;
                this.last.month = next.month;
                this.last.day = next.day;
                return end_of_data;
            }
        },
        next_year: function next_year() {
            if (this.next_hour() == 0) return 0;
            if (++this.days_index == this.days.length) {
                this.days_index = 0;
                do {
                    this.increment_year(this.rule.interval);
                    this.expand_year_days(this.last.year);
                }while (this.days.length == 0);
            }
            this._nextByYearDay();
            return 1;
        },
        _nextByYearDay: function _nextByYearDay() {
            var doy = this.days[this.days_index];
            var year = this.last.year;
            if (doy < 1) {
                // Time.fromDayOfYear(doy, year) indexes relative to the
                // start of the given year. That is different from the
                // semantics of BYYEARDAY where negative indexes are an
                // offset from the end of the given year.
                doy += 1;
                year += 1;
            }
            var next = ICAL.Time.fromDayOfYear(doy, year);
            this.last.day = next.day;
            this.last.month = next.month;
        },
        /**
     * @param dow (eg: '1TU', '-1MO')
     * @param {ICAL.Time.weekDay=} aWeekStart The week start weekday
     * @return [pos, numericDow] (eg: [1, 3]) numericDow is relative to aWeekStart
     */ ruleDayOfWeek: function ruleDayOfWeek(dow, aWeekStart) {
            var matches = dow.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);
            if (matches) {
                var pos = parseInt(matches[1] || 0, 10);
                dow = ICAL.Recur.icalDayToNumericDay(matches[2], aWeekStart);
                return [
                    pos,
                    dow
                ];
            } else return [
                0,
                0
            ];
        },
        next_generic: function next_generic(aRuleType, aInterval, aDateAttr, aFollowingAttr, aPreviousIncr) {
            var has_by_rule = aRuleType in this.by_data;
            var this_freq = this.rule.freq == aInterval;
            var end_of_data = 0;
            if (aPreviousIncr && this[aPreviousIncr]() == 0) return end_of_data;
            if (has_by_rule) {
                this.by_indices[aRuleType]++;
                var idx = this.by_indices[aRuleType];
                var dta = this.by_data[aRuleType];
                if (this.by_indices[aRuleType] == dta.length) {
                    this.by_indices[aRuleType] = 0;
                    end_of_data = 1;
                }
                this.last[aDateAttr] = dta[this.by_indices[aRuleType]];
            } else if (this_freq) this["increment_" + aDateAttr](this.rule.interval);
            if (has_by_rule && end_of_data && this_freq) this["increment_" + aFollowingAttr](1);
            return end_of_data;
        },
        increment_monthday: function increment_monthday(inc) {
            for(var i = 0; i < inc; i++){
                var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
                this.last.day++;
                if (this.last.day > daysInMonth) {
                    this.last.day -= daysInMonth;
                    this.increment_month();
                }
            }
        },
        increment_month: function increment_month() {
            this.last.day = 1;
            if (this.has_by_data("BYMONTH")) {
                this.by_indices.BYMONTH++;
                if (this.by_indices.BYMONTH == this.by_data.BYMONTH.length) {
                    this.by_indices.BYMONTH = 0;
                    this.increment_year(1);
                }
                this.last.month = this.by_data.BYMONTH[this.by_indices.BYMONTH];
            } else {
                if (this.rule.freq == "MONTHLY") this.last.month += this.rule.interval;
                else this.last.month++;
                this.last.month--;
                var years = ICAL.helpers.trunc(this.last.month / 12);
                this.last.month %= 12;
                this.last.month++;
                if (years != 0) this.increment_year(years);
            }
        },
        increment_year: function increment_year(inc) {
            this.last.year += inc;
        },
        increment_generic: function increment_generic(inc, aDateAttr, aFactor, aNextIncrement) {
            this.last[aDateAttr] += inc;
            var nextunit = ICAL.helpers.trunc(this.last[aDateAttr] / aFactor);
            this.last[aDateAttr] %= aFactor;
            if (nextunit != 0) this["increment_" + aNextIncrement](nextunit);
        },
        has_by_data: function has_by_data(aRuleType) {
            return aRuleType in this.rule.parts;
        },
        expand_year_days: function expand_year_days(aYear) {
            var t = new ICAL.Time();
            this.days = [];
            // We need our own copy with a few keys set
            var parts = {};
            var rules = [
                "BYDAY",
                "BYWEEKNO",
                "BYMONTHDAY",
                "BYMONTH",
                "BYYEARDAY"
            ];
            for(var p in rules)/* istanbul ignore else */ if (rules.hasOwnProperty(p)) {
                var part = rules[p];
                if (part in this.rule.parts) parts[part] = this.rule.parts[part];
            }
            if ("BYMONTH" in parts && "BYWEEKNO" in parts) {
                var valid = 1;
                var validWeeks = {};
                t.year = aYear;
                t.isDate = true;
                for(var monthIdx = 0; monthIdx < this.by_data.BYMONTH.length; monthIdx++){
                    var month = this.by_data.BYMONTH[monthIdx];
                    t.month = month;
                    t.day = 1;
                    var first_week = t.weekNumber(this.rule.wkst);
                    t.day = ICAL.Time.daysInMonth(month, aYear);
                    var last_week = t.weekNumber(this.rule.wkst);
                    for(monthIdx = first_week; monthIdx < last_week; monthIdx++)validWeeks[monthIdx] = 1;
                }
                for(var weekIdx = 0; weekIdx < this.by_data.BYWEEKNO.length && valid; weekIdx++){
                    var weekno = this.by_data.BYWEEKNO[weekIdx];
                    if (weekno < 52) valid &= validWeeks[weekIdx];
                    else valid = 0;
                }
                if (valid) delete parts.BYMONTH;
                else delete parts.BYWEEKNO;
            }
            var partCount = Object.keys(parts).length;
            if (partCount == 0) {
                var t1 = this.dtstart.clone();
                t1.year = this.last.year;
                this.days.push(t1.dayOfYear());
            } else if (partCount == 1 && "BYMONTH" in parts) for(var monthkey in this.by_data.BYMONTH){
                /* istanbul ignore if */ if (!this.by_data.BYMONTH.hasOwnProperty(monthkey)) continue;
                var t2 = this.dtstart.clone();
                t2.year = aYear;
                t2.month = this.by_data.BYMONTH[monthkey];
                t2.isDate = true;
                this.days.push(t2.dayOfYear());
            }
            else if (partCount == 1 && "BYMONTHDAY" in parts) for(var monthdaykey in this.by_data.BYMONTHDAY){
                /* istanbul ignore if */ if (!this.by_data.BYMONTHDAY.hasOwnProperty(monthdaykey)) continue;
                var t3 = this.dtstart.clone();
                var day_ = this.by_data.BYMONTHDAY[monthdaykey];
                if (day_ < 0) {
                    var daysInMonth = ICAL.Time.daysInMonth(t3.month, aYear);
                    day_ = day_ + daysInMonth + 1;
                }
                t3.day = day_;
                t3.year = aYear;
                t3.isDate = true;
                this.days.push(t3.dayOfYear());
            }
            else if (partCount == 2 && "BYMONTHDAY" in parts && "BYMONTH" in parts) for(var monthkey in this.by_data.BYMONTH){
                /* istanbul ignore if */ if (!this.by_data.BYMONTH.hasOwnProperty(monthkey)) continue;
                var month_ = this.by_data.BYMONTH[monthkey];
                var daysInMonth = ICAL.Time.daysInMonth(month_, aYear);
                for(var monthdaykey in this.by_data.BYMONTHDAY){
                    /* istanbul ignore if */ if (!this.by_data.BYMONTHDAY.hasOwnProperty(monthdaykey)) continue;
                    var day_ = this.by_data.BYMONTHDAY[monthdaykey];
                    if (day_ < 0) day_ = day_ + daysInMonth + 1;
                    t.day = day_;
                    t.month = month_;
                    t.year = aYear;
                    t.isDate = true;
                    this.days.push(t.dayOfYear());
                }
            }
            else if (partCount == 1 && "BYWEEKNO" in parts) ;
            else if (partCount == 2 && "BYWEEKNO" in parts && "BYMONTHDAY" in parts) ;
            else if (partCount == 1 && "BYDAY" in parts) this.days = this.days.concat(this.expand_by_day(aYear));
            else if (partCount == 2 && "BYDAY" in parts && "BYMONTH" in parts) {
                for(var monthkey in this.by_data.BYMONTH){
                    /* istanbul ignore if */ if (!this.by_data.BYMONTH.hasOwnProperty(monthkey)) continue;
                    var month = this.by_data.BYMONTH[monthkey];
                    var daysInMonth = ICAL.Time.daysInMonth(month, aYear);
                    t.year = aYear;
                    t.month = this.by_data.BYMONTH[monthkey];
                    t.day = 1;
                    t.isDate = true;
                    var first_dow = t.dayOfWeek();
                    var doy_offset = t.dayOfYear() - 1;
                    t.day = daysInMonth;
                    var last_dow = t.dayOfWeek();
                    if (this.has_by_data("BYSETPOS")) {
                        var set_pos_counter = 0;
                        var by_month_day = [];
                        for(var day = 1; day <= daysInMonth; day++){
                            t.day = day;
                            if (this.is_day_in_byday(t)) by_month_day.push(day);
                        }
                        for(var spIndex = 0; spIndex < by_month_day.length; spIndex++)if (this.check_set_position(spIndex + 1) || this.check_set_position(spIndex - by_month_day.length)) this.days.push(doy_offset + by_month_day[spIndex]);
                    } else for(var daycodedkey in this.by_data.BYDAY){
                        /* istanbul ignore if */ if (!this.by_data.BYDAY.hasOwnProperty(daycodedkey)) continue;
                        var coded_day = this.by_data.BYDAY[daycodedkey];
                        var bydayParts = this.ruleDayOfWeek(coded_day);
                        var pos = bydayParts[0];
                        var dow = bydayParts[1];
                        var month_day;
                        var first_matching_day = (dow + 7 - first_dow) % 7 + 1;
                        var last_matching_day = daysInMonth - (last_dow + 7 - dow) % 7;
                        if (pos == 0) for(var day = first_matching_day; day <= daysInMonth; day += 7)this.days.push(doy_offset + day);
                        else if (pos > 0) {
                            month_day = first_matching_day + (pos - 1) * 7;
                            if (month_day <= daysInMonth) this.days.push(doy_offset + month_day);
                        } else {
                            month_day = last_matching_day + (pos + 1) * 7;
                            if (month_day > 0) this.days.push(doy_offset + month_day);
                        }
                    }
                }
                // Return dates in order of occurrence (1,2,3,...) instead
                // of by groups of weekdays (1,8,15,...,2,9,16,...).
                this.days.sort(function(a, b) {
                    return a - b;
                }); // Comparator function allows to sort numbers.
            } else if (partCount == 2 && "BYDAY" in parts && "BYMONTHDAY" in parts) {
                var expandedDays = this.expand_by_day(aYear);
                for(var daykey in expandedDays){
                    /* istanbul ignore if */ if (!expandedDays.hasOwnProperty(daykey)) continue;
                    var day = expandedDays[daykey];
                    var tt = ICAL.Time.fromDayOfYear(day, aYear);
                    if (this.by_data.BYMONTHDAY.indexOf(tt.day) >= 0) this.days.push(day);
                }
            } else if (partCount == 3 && "BYDAY" in parts && "BYMONTHDAY" in parts && "BYMONTH" in parts) {
                var expandedDays = this.expand_by_day(aYear);
                for(var daykey in expandedDays){
                    /* istanbul ignore if */ if (!expandedDays.hasOwnProperty(daykey)) continue;
                    var day = expandedDays[daykey];
                    var tt = ICAL.Time.fromDayOfYear(day, aYear);
                    if (this.by_data.BYMONTH.indexOf(tt.month) >= 0 && this.by_data.BYMONTHDAY.indexOf(tt.day) >= 0) this.days.push(day);
                }
            } else if (partCount == 2 && "BYDAY" in parts && "BYWEEKNO" in parts) {
                var expandedDays = this.expand_by_day(aYear);
                for(var daykey in expandedDays){
                    /* istanbul ignore if */ if (!expandedDays.hasOwnProperty(daykey)) continue;
                    var day = expandedDays[daykey];
                    var tt = ICAL.Time.fromDayOfYear(day, aYear);
                    var weekno = tt.weekNumber(this.rule.wkst);
                    if (this.by_data.BYWEEKNO.indexOf(weekno)) this.days.push(day);
                }
            } else if (partCount == 3 && "BYDAY" in parts && "BYWEEKNO" in parts && "BYMONTHDAY" in parts) ;
            else if (partCount == 1 && "BYYEARDAY" in parts) this.days = this.days.concat(this.by_data.BYYEARDAY);
            else this.days = [];
            return 0;
        },
        expand_by_day: function expand_by_day(aYear) {
            var days_list = [];
            var tmp = this.last.clone();
            tmp.year = aYear;
            tmp.month = 1;
            tmp.day = 1;
            tmp.isDate = true;
            var start_dow = tmp.dayOfWeek();
            tmp.month = 12;
            tmp.day = 31;
            tmp.isDate = true;
            var end_dow = tmp.dayOfWeek();
            var end_year_day = tmp.dayOfYear();
            for(var daykey in this.by_data.BYDAY){
                /* istanbul ignore if */ if (!this.by_data.BYDAY.hasOwnProperty(daykey)) continue;
                var day = this.by_data.BYDAY[daykey];
                var parts = this.ruleDayOfWeek(day);
                var pos = parts[0];
                var dow = parts[1];
                if (pos == 0) {
                    var tmp_start_doy = (dow + 7 - start_dow) % 7 + 1;
                    for(var doy = tmp_start_doy; doy <= end_year_day; doy += 7)days_list.push(doy);
                } else if (pos > 0) {
                    var first;
                    if (dow >= start_dow) first = dow - start_dow + 1;
                    else first = dow - start_dow + 8;
                    days_list.push(first + (pos - 1) * 7);
                } else {
                    var last;
                    pos = -pos;
                    if (dow <= end_dow) last = end_year_day - end_dow + dow;
                    else last = end_year_day - end_dow + dow - 7;
                    days_list.push(last - (pos - 1) * 7);
                }
            }
            return days_list;
        },
        is_day_in_byday: function is_day_in_byday(tt) {
            for(var daykey in this.by_data.BYDAY){
                /* istanbul ignore if */ if (!this.by_data.BYDAY.hasOwnProperty(daykey)) continue;
                var day = this.by_data.BYDAY[daykey];
                var parts = this.ruleDayOfWeek(day);
                var pos = parts[0];
                var dow = parts[1];
                var this_dow = tt.dayOfWeek();
                if (pos == 0 && dow == this_dow || tt.nthWeekDay(dow, pos) == tt.day) return 1;
            }
            return 0;
        },
        /**
     * Checks if given value is in BYSETPOS.
     *
     * @private
     * @param {Numeric} aPos position to check for.
     * @return {Boolean} false unless BYSETPOS rules exist
     *                   and the given value is present in rules.
     */ check_set_position: function check_set_position(aPos) {
            if (this.has_by_data("BYSETPOS")) {
                var idx = this.by_data.BYSETPOS.indexOf(aPos);
                // negative numbers are not false-y
                return idx !== -1;
            }
            return false;
        },
        sort_byday_rules: function icalrecur_sort_byday_rules(aRules) {
            for(var i = 0; i < aRules.length; i++)for(var j = 0; j < i; j++){
                var one = this.ruleDayOfWeek(aRules[j], this.rule.wkst)[1];
                var two = this.ruleDayOfWeek(aRules[i], this.rule.wkst)[1];
                if (one > two) {
                    var tmp = aRules[i];
                    aRules[i] = aRules[j];
                    aRules[j] = tmp;
                }
            }
        },
        check_contract_restriction: function check_contract_restriction(aRuleType, v) {
            var indexMapValue = icalrecur_iterator._indexMap[aRuleType];
            var ruleMapValue = icalrecur_iterator._expandMap[this.rule.freq][indexMapValue];
            var pass = false;
            if (aRuleType in this.by_data && ruleMapValue == icalrecur_iterator.CONTRACT) {
                var ruleType = this.by_data[aRuleType];
                for(var bydatakey in ruleType){
                    /* istanbul ignore else */ if (ruleType.hasOwnProperty(bydatakey)) {
                        if (ruleType[bydatakey] == v) {
                            pass = true;
                            break;
                        }
                    }
                }
            } else // Not a contracting byrule or has no data, test passes
            pass = true;
            return pass;
        },
        check_contracting_rules: function check_contracting_rules() {
            var dow = this.last.dayOfWeek();
            var weekNo = this.last.weekNumber(this.rule.wkst);
            var doy = this.last.dayOfYear();
            return this.check_contract_restriction("BYSECOND", this.last.second) && this.check_contract_restriction("BYMINUTE", this.last.minute) && this.check_contract_restriction("BYHOUR", this.last.hour) && this.check_contract_restriction("BYDAY", ICAL.Recur.numericDayToIcalDay(dow)) && this.check_contract_restriction("BYWEEKNO", weekNo) && this.check_contract_restriction("BYMONTHDAY", this.last.day) && this.check_contract_restriction("BYMONTH", this.last.month) && this.check_contract_restriction("BYYEARDAY", doy);
        },
        setup_defaults: function setup_defaults(aRuleType, req, deftime) {
            var indexMapValue = icalrecur_iterator._indexMap[aRuleType];
            var ruleMapValue = icalrecur_iterator._expandMap[this.rule.freq][indexMapValue];
            if (ruleMapValue != icalrecur_iterator.CONTRACT) {
                if (!(aRuleType in this.by_data)) this.by_data[aRuleType] = [
                    deftime
                ];
                if (this.rule.freq != req) return this.by_data[aRuleType][0];
            }
            return deftime;
        },
        /**
     * Convert iterator into a serialize-able object.  Will preserve current
     * iteration sequence to ensure the seamless continuation of the recurrence
     * rule.
     * @return {Object}
     */ toJSON: function() {
            var result = Object.create(null);
            result.initialized = this.initialized;
            result.rule = this.rule.toJSON();
            result.dtstart = this.dtstart.toJSON();
            result.by_data = this.by_data;
            result.days = this.days;
            result.last = this.last.toJSON();
            result.by_indices = this.by_indices;
            result.occurrence_number = this.occurrence_number;
            return result;
        }
    };
    icalrecur_iterator._indexMap = {
        "BYSECOND": 0,
        "BYMINUTE": 1,
        "BYHOUR": 2,
        "BYDAY": 3,
        "BYMONTHDAY": 4,
        "BYYEARDAY": 5,
        "BYWEEKNO": 6,
        "BYMONTH": 7,
        "BYSETPOS": 8
    };
    icalrecur_iterator._expandMap = {
        "SECONDLY": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "MINUTELY": [
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "HOURLY": [
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "DAILY": [
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            1
        ],
        "WEEKLY": [
            2,
            2,
            2,
            2,
            3,
            3,
            1,
            1
        ],
        "MONTHLY": [
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            1
        ],
        "YEARLY": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    };
    icalrecur_iterator.UNKNOWN = 0;
    icalrecur_iterator.CONTRACT = 1;
    icalrecur_iterator.EXPAND = 2;
    icalrecur_iterator.ILLEGAL = 3;
    return icalrecur_iterator;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.RecurExpansion = function() {
    function formatTime(item) {
        return ICAL.helpers.formatClassType(item, ICAL.Time);
    }
    function compareTime(a, b) {
        return a.compare(b);
    }
    function isRecurringComponent(comp) {
        return comp.hasProperty("rdate") || comp.hasProperty("rrule") || comp.hasProperty("recurrence-id");
    }
    /**
   * @classdesc
   * Primary class for expanding recurring rules.  Can take multiple rrules,
   * rdates, exdate(s) and iterate (in order) over each next occurrence.
   *
   * Once initialized this class can also be serialized saved and continue
   * iteration from the last point.
   *
   * NOTE: it is intended that this class is to be used
   *       with ICAL.Event which handles recurrence exceptions.
   *
   * @example
   * // assuming event is a parsed ical component
   * var event;
   *
   * var expand = new ICAL.RecurExpansion({
   *   component: event,
   *   dtstart: event.getFirstPropertyValue('dtstart')
   * });
   *
   * // remember there are infinite rules
   * // so it is a good idea to limit the scope
   * // of the iterations then resume later on.
   *
   * // next is always an ICAL.Time or null
   * var next;
   *
   * while (someCondition && (next = expand.next())) {
   *   // do something with next
   * }
   *
   * // save instance for later
   * var json = JSON.stringify(expand);
   *
   * //...
   *
   * // NOTE: if the component's properties have
   * //       changed you will need to rebuild the
   * //       class and start over. This only works
   * //       when the component's recurrence info is the same.
   * var expand = new ICAL.RecurExpansion(JSON.parse(json));
   *
   * @description
   * The options object can be filled with the specified initial values. It can
   * also contain additional members, as a result of serializing a previous
   * expansion state, as shown in the example.
   *
   * @class
   * @alias ICAL.RecurExpansion
   * @param {Object} options
   *        Recurrence expansion options
   * @param {ICAL.Time} options.dtstart
   *        Start time of the event
   * @param {ICAL.Component=} options.component
   *        Component for expansion, required if not resuming.
   */ function RecurExpansion(options) {
        this.ruleDates = [];
        this.exDates = [];
        this.fromData(options);
    }
    RecurExpansion.prototype = {
        /**
     * True when iteration is fully completed.
     * @type {Boolean}
     */ complete: false,
        /**
     * Array of rrule iterators.
     *
     * @type {ICAL.RecurIterator[]}
     * @private
     */ ruleIterators: null,
        /**
     * Array of rdate instances.
     *
     * @type {ICAL.Time[]}
     * @private
     */ ruleDates: null,
        /**
     * Array of exdate instances.
     *
     * @type {ICAL.Time[]}
     * @private
     */ exDates: null,
        /**
     * Current position in ruleDates array.
     * @type {Number}
     * @private
     */ ruleDateInc: 0,
        /**
     * Current position in exDates array
     * @type {Number}
     * @private
     */ exDateInc: 0,
        /**
     * Current negative date.
     *
     * @type {ICAL.Time}
     * @private
     */ exDate: null,
        /**
     * Current additional date.
     *
     * @type {ICAL.Time}
     * @private
     */ ruleDate: null,
        /**
     * Start date of recurring rules.
     *
     * @type {ICAL.Time}
     */ dtstart: null,
        /**
     * Last expanded time
     *
     * @type {ICAL.Time}
     */ last: null,
        /**
     * Initialize the recurrence expansion from the data object. The options
     * object may also contain additional members, see the
     * {@link ICAL.RecurExpansion constructor} for more details.
     *
     * @param {Object} options
     *        Recurrence expansion options
     * @param {ICAL.Time} options.dtstart
     *        Start time of the event
     * @param {ICAL.Component=} options.component
     *        Component for expansion, required if not resuming.
     */ fromData: function(options) {
            var start = ICAL.helpers.formatClassType(options.dtstart, ICAL.Time);
            if (!start) throw new Error(".dtstart (ICAL.Time) must be given");
            else this.dtstart = start;
            if (options.component) this._init(options.component);
            else {
                this.last = formatTime(options.last) || start.clone();
                if (!options.ruleIterators) throw new Error(".ruleIterators or .component must be given");
                this.ruleIterators = options.ruleIterators.map(function(item) {
                    return ICAL.helpers.formatClassType(item, ICAL.RecurIterator);
                });
                this.ruleDateInc = options.ruleDateInc;
                this.exDateInc = options.exDateInc;
                if (options.ruleDates) {
                    this.ruleDates = options.ruleDates.map(formatTime);
                    this.ruleDate = this.ruleDates[this.ruleDateInc];
                }
                if (options.exDates) {
                    this.exDates = options.exDates.map(formatTime);
                    this.exDate = this.exDates[this.exDateInc];
                }
                if (typeof options.complete !== "undefined") this.complete = options.complete;
            }
        },
        /**
     * Retrieve the next occurrence in the series.
     * @return {ICAL.Time}
     */ next: function() {
            var iter;
            var ruleOfDay;
            var next;
            var compare;
            var maxTries = 500;
            var currentTry = 0;
            while(true){
                if ((currentTry++) > maxTries) throw new Error("max tries have occured, rule may be impossible to forfill.");
                next = this.ruleDate;
                iter = this._nextRecurrenceIter(this.last);
                // no more matches
                // because we increment the rule day or rule
                // _after_ we choose a value this should be
                // the only spot where we need to worry about the
                // end of events.
                if (!next && !iter) {
                    // there are no more iterators or rdates
                    this.complete = true;
                    break;
                }
                // no next rule day or recurrence rule is first.
                if (!next || iter && next.compare(iter.last) > 0) {
                    // must be cloned, recur will reuse the time element.
                    next = iter.last.clone();
                    // move to next so we can continue
                    iter.next();
                }
                // if the ruleDate is still next increment it.
                if (this.ruleDate === next) this._nextRuleDay();
                this.last = next;
                // check the negative rules
                if (this.exDate) {
                    compare = this.exDate.compare(this.last);
                    if (compare < 0) this._nextExDay();
                    // if the current rule is excluded skip it.
                    if (compare === 0) {
                        this._nextExDay();
                        continue;
                    }
                }
                //XXX: The spec states that after we resolve the final
                //     list of dates we execute exdate this seems somewhat counter
                //     intuitive to what I have seen most servers do so for now
                //     I exclude based on the original date not the one that may
                //     have been modified by the exception.
                return this.last;
            }
        },
        /**
     * Converts object into a serialize-able format. This format can be passed
     * back into the expansion to resume iteration.
     * @return {Object}
     */ toJSON: function() {
            function toJSON(item) {
                return item.toJSON();
            }
            var result = Object.create(null);
            result.ruleIterators = this.ruleIterators.map(toJSON);
            if (this.ruleDates) result.ruleDates = this.ruleDates.map(toJSON);
            if (this.exDates) result.exDates = this.exDates.map(toJSON);
            result.ruleDateInc = this.ruleDateInc;
            result.exDateInc = this.exDateInc;
            result.last = this.last.toJSON();
            result.dtstart = this.dtstart.toJSON();
            result.complete = this.complete;
            return result;
        },
        /**
     * Extract all dates from the properties in the given component. The
     * properties will be filtered by the property name.
     *
     * @private
     * @param {ICAL.Component} component        The component to search in
     * @param {String} propertyName             The property name to search for
     * @return {ICAL.Time[]}                    The extracted dates.
     */ _extractDates: function(component, propertyName) {
            function handleProp(prop) {
                idx = ICAL.helpers.binsearchInsert(result, prop, compareTime);
                // ordered insert
                result.splice(idx, 0, prop);
            }
            var result = [];
            var props = component.getAllProperties(propertyName);
            var len = props.length;
            var i = 0;
            var prop1;
            var idx;
            for(; i < len; i++)props[i].getValues().forEach(handleProp);
            return result;
        },
        /**
     * Initialize the recurrence expansion.
     *
     * @private
     * @param {ICAL.Component} component    The component to initialize from.
     */ _init: function(component) {
            this.ruleIterators = [];
            this.last = this.dtstart.clone();
            // to provide api consistency non-recurring
            // events can also use the iterator though it will
            // only return a single time.
            if (!isRecurringComponent(component)) {
                this.ruleDate = this.last.clone();
                this.complete = true;
                return;
            }
            if (component.hasProperty("rdate")) {
                this.ruleDates = this._extractDates(component, "rdate");
                // special hack for cases where first rdate is prior
                // to the start date. We only check for the first rdate.
                // This is mostly for google's crazy recurring date logic
                // (contacts birthdays).
                if (this.ruleDates[0] && this.ruleDates[0].compare(this.dtstart) < 0) {
                    this.ruleDateInc = 0;
                    this.last = this.ruleDates[0].clone();
                } else this.ruleDateInc = ICAL.helpers.binsearchInsert(this.ruleDates, this.last, compareTime);
                this.ruleDate = this.ruleDates[this.ruleDateInc];
            }
            if (component.hasProperty("rrule")) {
                var rules = component.getAllProperties("rrule");
                var i = 0;
                var len = rules.length;
                var rule;
                var iter;
                for(; i < len; i++){
                    rule = rules[i].getFirstValue();
                    iter = rule.iterator(this.dtstart);
                    this.ruleIterators.push(iter);
                    // increment to the next occurrence so future
                    // calls to next return times beyond the initial iteration.
                    // XXX: I find this suspicious might be a bug?
                    iter.next();
                }
            }
            if (component.hasProperty("exdate")) {
                this.exDates = this._extractDates(component, "exdate");
                // if we have a .last day we increment the index to beyond it.
                this.exDateInc = ICAL.helpers.binsearchInsert(this.exDates, this.last, compareTime);
                this.exDate = this.exDates[this.exDateInc];
            }
        },
        /**
     * Advance to the next exdate
     * @private
     */ _nextExDay: function() {
            this.exDate = this.exDates[++this.exDateInc];
        },
        /**
     * Advance to the next rule date
     * @private
     */ _nextRuleDay: function() {
            this.ruleDate = this.ruleDates[++this.ruleDateInc];
        },
        /**
     * Find and return the recurrence rule with the most recent event and
     * return it.
     *
     * @private
     * @return {?ICAL.RecurIterator}    Found iterator.
     */ _nextRecurrenceIter: function() {
            var iters = this.ruleIterators;
            if (iters.length === 0) return null;
            var len = iters.length;
            var iter;
            var iterTime;
            var iterIdx = 0;
            var chosenIter;
            // loop through each iterator
            for(; iterIdx < len; iterIdx++){
                iter = iters[iterIdx];
                iterTime = iter.last;
                // if iteration is complete
                // then we must exclude it from
                // the search and remove it.
                if (iter.completed) {
                    len--;
                    if (iterIdx !== 0) iterIdx--;
                    iters.splice(iterIdx, 1);
                    continue;
                }
                // find the most recent possible choice
                if (!chosenIter || chosenIter.last.compare(iterTime) > 0) // that iterator is saved
                chosenIter = iter;
            }
            // the chosen iterator is returned but not mutated
            // this iterator contains the most recent event.
            return chosenIter;
        }
    };
    return RecurExpansion;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.Event = function() {
    /**
   * @classdesc
   * ICAL.js is organized into multiple layers. The bottom layer is a raw jCal
   * object, followed by the component/property layer. The highest level is the
   * event representation, which this class is part of. See the
   * {@tutorial layers} guide for more details.
   *
   * @class
   * @alias ICAL.Event
   * @param {ICAL.Component=} component         The ICAL.Component to base this event on
   * @param {Object} options                    Options for this event
   * @param {Boolean} options.strictExceptions
   *          When true, will verify exceptions are related by their UUID
   * @param {Array<ICAL.Component|ICAL.Event>} options.exceptions
   *          Exceptions to this event, either as components or events. If not
   *            specified exceptions will automatically be set in relation of
   *            component's parent
   */ function Event(component, options) {
        if (!(component instanceof ICAL.Component)) {
            options = component;
            component = null;
        }
        if (component) this.component = component;
        else this.component = new ICAL.Component("vevent");
        this._rangeExceptionCache = Object.create(null);
        this.exceptions = Object.create(null);
        this.rangeExceptions = [];
        if (options && options.strictExceptions) this.strictExceptions = options.strictExceptions;
        if (options && options.exceptions) options.exceptions.forEach(this.relateException, this);
        else if (this.component.parent && !this.isRecurrenceException()) this.component.parent.getAllSubcomponents("vevent").forEach(function(event) {
            if (event.hasProperty("recurrence-id")) this.relateException(event);
        }, this);
    }
    Event.prototype = {
        THISANDFUTURE: "THISANDFUTURE",
        /**
     * List of related event exceptions.
     *
     * @type {ICAL.Event[]}
     */ exceptions: null,
        /**
     * When true, will verify exceptions are related by their UUID.
     *
     * @type {Boolean}
     */ strictExceptions: false,
        /**
     * Relates a given event exception to this object.  If the given component
     * does not share the UID of this event it cannot be related and will throw
     * an exception.
     *
     * If this component is an exception it cannot have other exceptions
     * related to it.
     *
     * @param {ICAL.Component|ICAL.Event} obj       Component or event
     */ relateException: function(obj) {
            if (this.isRecurrenceException()) throw new Error("cannot relate exception to exceptions");
            if (obj instanceof ICAL.Component) obj = new ICAL.Event(obj);
            if (this.strictExceptions && obj.uid !== this.uid) throw new Error("attempted to relate unrelated exception");
            var id = obj.recurrenceId.toString();
            // we don't sort or manage exceptions directly
            // here the recurrence expander handles that.
            this.exceptions[id] = obj;
            // index RANGE=THISANDFUTURE exceptions so we can
            // look them up later in getOccurrenceDetails.
            if (obj.modifiesFuture()) {
                var item = [
                    obj.recurrenceId.toUnixTime(),
                    id
                ];
                // we keep them sorted so we can find the nearest
                // value later on...
                var idx = ICAL.helpers.binsearchInsert(this.rangeExceptions, item, compareRangeException);
                this.rangeExceptions.splice(idx, 0, item);
            }
        },
        /**
     * Checks if this record is an exception and has the RANGE=THISANDFUTURE
     * value.
     *
     * @return {Boolean}        True, when exception is within range
     */ modifiesFuture: function() {
            if (!this.component.hasProperty("recurrence-id")) return false;
            var range = this.component.getFirstProperty("recurrence-id").getParameter("range");
            return range === this.THISANDFUTURE;
        },
        /**
     * Finds the range exception nearest to the given date.
     *
     * @param {ICAL.Time} time usually an occurrence time of an event
     * @return {?ICAL.Event} the related event/exception or null
     */ findRangeException: function(time) {
            if (!this.rangeExceptions.length) return null;
            var utc = time.toUnixTime();
            var idx = ICAL.helpers.binsearchInsert(this.rangeExceptions, [
                utc
            ], compareRangeException);
            idx -= 1;
            // occurs before
            if (idx < 0) return null;
            var rangeItem = this.rangeExceptions[idx];
            /* istanbul ignore next: sanity check only */ if (utc < rangeItem[0]) return null;
            return rangeItem[1];
        },
        /**
     * This object is returned by {@link ICAL.Event#getOccurrenceDetails getOccurrenceDetails}
     *
     * @typedef {Object} occurrenceDetails
     * @memberof ICAL.Event
     * @property {ICAL.Time} recurrenceId       The passed in recurrence id
     * @property {ICAL.Event} item              The occurrence
     * @property {ICAL.Time} startDate          The start of the occurrence
     * @property {ICAL.Time} endDate            The end of the occurrence
     */ /**
     * Returns the occurrence details based on its start time.  If the
     * occurrence has an exception will return the details for that exception.
     *
     * NOTE: this method is intend to be used in conjunction
     *       with the {@link ICAL.Event#iterator iterator} method.
     *
     * @param {ICAL.Time} occurrence time occurrence
     * @return {ICAL.Event.occurrenceDetails} Information about the occurrence
     */ getOccurrenceDetails: function(occurrence) {
            var id = occurrence.toString();
            var utcId = occurrence.convertToZone(ICAL.Timezone.utcTimezone).toString();
            var item;
            var result = {
                //XXX: Clone?
                recurrenceId: occurrence
            };
            if (id in this.exceptions) {
                item = result.item = this.exceptions[id];
                result.startDate = item.startDate;
                result.endDate = item.endDate;
                result.item = item;
            } else if (utcId in this.exceptions) {
                item = this.exceptions[utcId];
                result.startDate = item.startDate;
                result.endDate = item.endDate;
                result.item = item;
            } else {
                // range exceptions (RANGE=THISANDFUTURE) have a
                // lower priority then direct exceptions but
                // must be accounted for first. Their item is
                // always the first exception with the range prop.
                var rangeExceptionId = this.findRangeException(occurrence);
                var end;
                if (rangeExceptionId) {
                    var exception = this.exceptions[rangeExceptionId];
                    // range exception must modify standard time
                    // by the difference (if any) in start/end times.
                    result.item = exception;
                    var startDiff = this._rangeExceptionCache[rangeExceptionId];
                    if (!startDiff) {
                        var original = exception.recurrenceId.clone();
                        var newStart = exception.startDate.clone();
                        // zones must be same otherwise subtract may be incorrect.
                        original.zone = newStart.zone;
                        startDiff = newStart.subtractDate(original);
                        this._rangeExceptionCache[rangeExceptionId] = startDiff;
                    }
                    var start = occurrence.clone();
                    start.zone = exception.startDate.zone;
                    start.addDuration(startDiff);
                    end = start.clone();
                    end.addDuration(exception.duration);
                    result.startDate = start;
                    result.endDate = end;
                } else {
                    // no range exception standard expansion
                    end = occurrence.clone();
                    end.addDuration(this.duration);
                    result.endDate = end;
                    result.startDate = occurrence;
                    result.item = this;
                }
            }
            return result;
        },
        /**
     * Builds a recur expansion instance for a specific point in time (defaults
     * to startDate).
     *
     * @param {ICAL.Time} startTime     Starting point for expansion
     * @return {ICAL.RecurExpansion}    Expansion object
     */ iterator: function(startTime) {
            return new ICAL.RecurExpansion({
                component: this.component,
                dtstart: startTime || this.startDate
            });
        },
        /**
     * Checks if the event is recurring
     *
     * @return {Boolean}        True, if event is recurring
     */ isRecurring: function() {
            var comp = this.component;
            return comp.hasProperty("rrule") || comp.hasProperty("rdate");
        },
        /**
     * Checks if the event describes a recurrence exception. See
     * {@tutorial terminology} for details.
     *
     * @return {Boolean}    True, if the event describes a recurrence exception
     */ isRecurrenceException: function() {
            return this.component.hasProperty("recurrence-id");
        },
        /**
     * Returns the types of recurrences this event may have.
     *
     * Returned as an object with the following possible keys:
     *
     *    - YEARLY
     *    - MONTHLY
     *    - WEEKLY
     *    - DAILY
     *    - MINUTELY
     *    - SECONDLY
     *
     * @return {Object.<ICAL.Recur.frequencyValues, Boolean>}
     *          Object of recurrence flags
     */ getRecurrenceTypes: function() {
            var rules = this.component.getAllProperties("rrule");
            var i = 0;
            var len = rules.length;
            var result = Object.create(null);
            for(; i < len; i++){
                var value = rules[i].getFirstValue();
                result[value.freq] = true;
            }
            return result;
        },
        /**
     * The uid of this event
     * @type {String}
     */ get uid () {
            return this._firstProp("uid");
        },
        set uid (value){
            this._setProp("uid", value);
        },
        /**
     * The start date
     * @type {ICAL.Time}
     */ get startDate () {
            return this._firstProp("dtstart");
        },
        set startDate (value){
            this._setTime("dtstart", value);
        },
        /**
     * The end date. This can be the result directly from the property, or the
     * end date calculated from start date and duration. Setting the property
     * will remove any duration properties.
     * @type {ICAL.Time}
     */ get endDate () {
            var endDate = this._firstProp("dtend");
            if (!endDate) {
                var duration = this._firstProp("duration");
                endDate = this.startDate.clone();
                if (duration) endDate.addDuration(duration);
                else if (endDate.isDate) endDate.day += 1;
            }
            return endDate;
        },
        set endDate (value){
            if (this.component.hasProperty("duration")) this.component.removeProperty("duration");
            this._setTime("dtend", value);
        },
        /**
     * The duration. This can be the result directly from the property, or the
     * duration calculated from start date and end date. Setting the property
     * will remove any `dtend` properties.
     * @type {ICAL.Duration}
     */ get duration () {
            var duration1 = this._firstProp("duration");
            if (!duration1) return this.endDate.subtractDateTz(this.startDate);
            return duration1;
        },
        set duration (value){
            if (this.component.hasProperty("dtend")) this.component.removeProperty("dtend");
            this._setProp("duration", value);
        },
        /**
     * The location of the event.
     * @type {String}
     */ get location () {
            return this._firstProp("location");
        },
        set location (value){
            return this._setProp("location", value);
        },
        /**
     * The attendees in the event
     * @type {ICAL.Property[]}
     * @readonly
     */ get attendees () {
            //XXX: This is way lame we should have a better
            //     data structure for this later.
            return this.component.getAllProperties("attendee");
        },
        /**
     * The event summary
     * @type {String}
     */ get summary () {
            return this._firstProp("summary");
        },
        set summary (value){
            this._setProp("summary", value);
        },
        /**
     * The event description.
     * @type {String}
     */ get description () {
            return this._firstProp("description");
        },
        set description (value){
            this._setProp("description", value);
        },
        /**
     * The event color from [rfc7986](https://datatracker.ietf.org/doc/html/rfc7986)
     * @type {String}
     */ get color () {
            return this._firstProp("color");
        },
        set color (value){
            this._setProp("color", value);
        },
        /**
     * The organizer value as an uri. In most cases this is a mailto: uri, but
     * it can also be something else, like urn:uuid:...
     * @type {String}
     */ get organizer () {
            return this._firstProp("organizer");
        },
        set organizer (value){
            this._setProp("organizer", value);
        },
        /**
     * The sequence value for this event. Used for scheduling
     * see {@tutorial terminology}.
     * @type {Number}
     */ get sequence () {
            return this._firstProp("sequence");
        },
        set sequence (value){
            this._setProp("sequence", value);
        },
        /**
     * The recurrence id for this event. See {@tutorial terminology} for details.
     * @type {ICAL.Time}
     */ get recurrenceId () {
            return this._firstProp("recurrence-id");
        },
        set recurrenceId (value){
            this._setTime("recurrence-id", value);
        },
        /**
     * Set/update a time property's value.
     * This will also update the TZID of the property.
     *
     * TODO: this method handles the case where we are switching
     * from a known timezone to an implied timezone (one without TZID).
     * This does _not_ handle the case of moving between a known
     *  (by TimezoneService) timezone to an unknown timezone...
     *
     * We will not add/remove/update the VTIMEZONE subcomponents
     *  leading to invalid ICAL data...
     * @private
     * @param {String} propName     The property name
     * @param {ICAL.Time} time      The time to set
     */ _setTime: function(propName, time) {
            var prop = this.component.getFirstProperty(propName);
            if (!prop) {
                prop = new ICAL.Property(propName);
                this.component.addProperty(prop);
            }
            // utc and local don't get a tzid
            if (time.zone === ICAL.Timezone.localTimezone || time.zone === ICAL.Timezone.utcTimezone) // remove the tzid
            prop.removeParameter("tzid");
            else prop.setParameter("tzid", time.zone.tzid);
            prop.setValue(time);
        },
        _setProp: function(name, value) {
            this.component.updatePropertyWithValue(name, value);
        },
        _firstProp: function(name) {
            return this.component.getFirstPropertyValue(name);
        },
        /**
     * The string representation of this event.
     * @return {String}
     */ toString: function() {
            return this.component.toString();
        }
    };
    function compareRangeException(a, b) {
        if (a[0] > b[0]) return 1;
        if (b[0] > a[0]) return -1;
        return 0;
    }
    return Event;
}();
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */ /**
 * This symbol is further described later on
 * @ignore
 */ ICAL.ComponentParser = function() {
    /**
   * @classdesc
   * The ComponentParser is used to process a String or jCal Object,
   * firing callbacks for various found components, as well as completion.
   *
   * @example
   * var options = {
   *   // when false no events will be emitted for type
   *   parseEvent: true,
   *   parseTimezone: true
   * };
   *
   * var parser = new ICAL.ComponentParser(options);
   *
   * parser.onevent(eventComponent) {
   *   //...
   * }
   *
   * // ontimezone, etc...
   *
   * parser.oncomplete = function() {
   *
   * };
   *
   * parser.process(stringOrComponent);
   *
   * @class
   * @alias ICAL.ComponentParser
   * @param {Object=} options        Component parser options
   * @param {Boolean} options.parseEvent        Whether events should be parsed
   * @param {Boolean} options.parseTimezeone    Whether timezones should be parsed
   */ function ComponentParser(options) {
        if (typeof options === "undefined") options = {};
        var key;
        for(key in options)/* istanbul ignore else */ if (options.hasOwnProperty(key)) this[key] = options[key];
    }
    ComponentParser.prototype = {
        /**
     * When true, parse events
     *
     * @type {Boolean}
     */ parseEvent: true,
        /**
     * When true, parse timezones
     *
     * @type {Boolean}
     */ parseTimezone: true,
        /* SAX like events here for reference */ /**
     * Fired when parsing is complete
     * @callback
     */ oncomplete: /* istanbul ignore next */ function() {},
        /**
     * Fired if an error occurs during parsing.
     *
     * @callback
     * @param {Error} err details of error
     */ onerror: /* istanbul ignore next */ function(err) {},
        /**
     * Fired when a top level component (VTIMEZONE) is found
     *
     * @callback
     * @param {ICAL.Timezone} component     Timezone object
     */ ontimezone: /* istanbul ignore next */ function(component) {},
        /**
     * Fired when a top level component (VEVENT) is found.
     *
     * @callback
     * @param {ICAL.Event} component    Top level component
     */ onevent: /* istanbul ignore next */ function(component) {},
        /**
     * Process a string or parse ical object.  This function itself will return
     * nothing but will start the parsing process.
     *
     * Events must be registered prior to calling this method.
     *
     * @param {ICAL.Component|String|Object} ical      The component to process,
     *        either in its final form, as a jCal Object, or string representation
     */ process: function(ical) {
            //TODO: this is sync now in the future we will have a incremental parser.
            if (typeof ical === "string") ical = ICAL.parse(ical);
            if (!(ical instanceof ICAL.Component)) ical = new ICAL.Component(ical);
            var components = ical.getAllSubcomponents();
            var i = 0;
            var len = components.length;
            var component;
            for(; i < len; i++){
                component = components[i];
                switch(component.name){
                    case "vtimezone":
                        if (this.parseTimezone) {
                            var tzid = component.getFirstPropertyValue("tzid");
                            if (tzid) this.ontimezone(new ICAL.Timezone({
                                tzid: tzid,
                                component: component
                            }));
                        }
                        break;
                    case "vevent":
                        if (this.parseEvent) this.onevent(new ICAL.Event(component));
                        break;
                    default:
                        continue;
                }
            }
            //XXX: ideally we should do a "nextTick" here
            //     so in all cases this is actually async.
            this.oncomplete();
        }
    };
    return ComponentParser;
}();

},{}],"h9dki":[function(require,module,exports) {
module.exports = JSON.parse('{"Africa/Abidjan":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Accra":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Addis_Ababa":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Algiers":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Asmara":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Bamako":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Bangui":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Banjul":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Bissau":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Blantyre":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Brazzaville":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Bujumbura":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Cairo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Casablanca":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20180325T020000\\r\\nRDATE:20180325T020000\\r\\nRDATE:20180617T020000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:20180513T030000\\r\\nRDATE:20180513T030000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20190609T020000\\r\\nRDATE:20190609T020000\\r\\nRDATE:20200531T020000\\r\\nRDATE:20210516T020000\\r\\nRDATE:20220508T020000\\r\\nRDATE:20230430T020000\\r\\nRDATE:20240414T020000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20181028T030000\\r\\nRDATE:20181028T030000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:20190505T030000\\r\\nRDATE:20190505T030000\\r\\nRDATE:20200419T030000\\r\\nRDATE:20210411T030000\\r\\nRDATE:20220327T030000\\r\\nRDATE:20230319T030000\\r\\nRDATE:20240310T030000\\r\\nEND:DAYLIGHT","Africa/Ceuta":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Africa/Conakry":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Dakar":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Dar_es_Salaam":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Djibouti":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Douala":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/El_Aaiun":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20180325T020000\\r\\nRDATE:20180325T020000\\r\\nRDATE:20180617T020000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:20180513T030000\\r\\nRDATE:20180513T030000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20181028T030000\\r\\nRDATE:20181028T030000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:20190505T030000\\r\\nRDATE:20190505T030000\\r\\nRDATE:20200419T030000\\r\\nRDATE:20210411T030000\\r\\nRDATE:20220327T030000\\r\\nRDATE:20230319T030000\\r\\nRDATE:20240310T030000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20190609T020000\\r\\nRDATE:20190609T020000\\r\\nRDATE:20200531T020000\\r\\nRDATE:20210516T020000\\r\\nRDATE:20220508T020000\\r\\nRDATE:20230430T020000\\r\\nRDATE:20240414T020000\\r\\nEND:STANDARD","Africa/Freetown":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Gaborone":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Harare":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Johannesburg":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:SAST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Juba":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Kampala":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Khartoum":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Kigali":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Kinshasa":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Lagos":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Libreville":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Lome":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Luanda":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Lubumbashi":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Lusaka":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Malabo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Maputo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Maseru":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:SAST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Mbabane":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:SAST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Mogadishu":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Monrovia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Nairobi":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Ndjamena":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Niamey":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Nouakchott":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Ouagadougou":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Porto-Novo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Sao_Tome":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:20180101T010000\\r\\nRDATE:20180101T010000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:20190101T020000\\r\\nRDATE:20190101T020000\\r\\nEND:STANDARD","Africa/Tripoli":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Tunis":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Windhoek":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Adak":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-1000\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:HDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-1000\\r\\nTZNAME:HST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Anchorage":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:AKDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:AKST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Anguilla":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Antigua":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Araguaina":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Buenos_Aires":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Catamarca":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Cordoba":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Jujuy":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/La_Rioja":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Mendoza":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Rio_Gallegos":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Salta":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/San_Juan":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/San_Luis":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Tucuman":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Argentina/Ushuaia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Aruba":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Asuncion":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19701004T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700322T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=4SU\\r\\nEND:STANDARD","America/Atikokan":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Bahia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Bahia_Banderas":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:DAYLIGHT","America/Barbados":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Belem":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Belize":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Blanc-Sablon":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Boa_Vista":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Bogota":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:-05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Boise":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Cambridge_Bay":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Campo_Grande":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20181104T000000\\r\\nRDATE:20181104T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:20180218T000000\\r\\nRDATE:20180218T000000\\r\\nRDATE:20190217T000000\\r\\nEND:STANDARD","America/Cancun":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Caracas":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Cayenne":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Cayman":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Chicago":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Chihuahua":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","America/Costa_Rica":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Creston":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Cuiaba":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20181104T000000\\r\\nRDATE:20181104T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:20180218T000000\\r\\nRDATE:20180218T000000\\r\\nRDATE:20190217T000000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Curacao":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Danmarkshavn":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Dawson":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:20180311T020000\\r\\nRDATE:20180311T020000\\r\\nRDATE:20190310T020000\\r\\nRDATE:20200308T020000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:20181104T020000\\r\\nRDATE:20181104T020000\\r\\nRDATE:20191103T020000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:20201101T000000\\r\\nRDATE:20201101T000000\\r\\nEND:STANDARD","America/Dawson_Creek":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Denver":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Detroit":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Dominica":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Edmonton":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Eirunepe":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:-05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/El_Salvador":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Fort_Nelson":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Fortaleza":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Glace_Bay":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:ADT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Goose_Bay":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:ADT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT","America/Grand_Turk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:20181104T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:20190310T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:20180311T020000\\r\\nRDATE:20180311T020000\\r\\nEND:DAYLIGHT","America/Grenada":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Guadeloupe":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Guatemala":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Guayaquil":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:-05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Guyana":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Halifax":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:ADT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Havana":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT","America/Hermosillo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Indiana/Indianapolis":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Indiana/Knox":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Indiana/Marengo":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Indiana/Petersburg":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Indiana/Tell_City":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Indiana/Vevay":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Indiana/Vincennes":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Indiana/Winamac":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT","America/Inuvik":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Iqaluit":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Jamaica":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Juneau":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:AKDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:AKST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Kentucky/Louisville":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Kentucky/Monticello":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Kralendijk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/La_Paz":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Lima":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:-05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Los_Angeles":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Lower_Princes":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Maceio":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Managua":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Manaus":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Marigot":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Martinique":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Matamoros":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Mazatlan":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","America/Menominee":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Merida":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","America/Metlakatla":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:AKDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:AKST\\r\\nDTSTART:20191103T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:20181104T020000\\r\\nRDATE:20181104T020000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:AKST\\r\\nDTSTART:20190120T020000\\r\\nRDATE:20190120T020000\\r\\nEND:STANDARD","America/Mexico_City":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","America/Miquelon":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Moncton":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:ADT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Monterrey":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","America/Montevideo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Montserrat":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Nassau":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/New_York":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Nipigon":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Nome":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:AKDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:AKST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Noronha":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/North_Dakota/Beulah":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/North_Dakota/Center":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/North_Dakota/New_Salem":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Nuuk":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:19700328T220000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19701024T230000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\\r\\nEND:STANDARD","America/Ojinaga":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Panama":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Pangnirtung":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Paramaribo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Phoenix":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Port-au-Prince":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Port_of_Spain":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Porto_Velho":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Puerto_Rico":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Punta_Arenas":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Rainy_River":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Rankin_Inlet":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Recife":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Regina":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Resolute":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT","America/Rio_Branco":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:-05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Santarem":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Santiago":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:20190407T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYMONTHDAY=2,3,4,5,6,7,8;BYDAY=SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20190908T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=2,3,4,5,6,7,8;BYDAY=SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20180812T000000\\r\\nRDATE:20180812T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:20180513T000000\\r\\nRDATE:20180513T000000\\r\\nEND:STANDARD","America/Santo_Domingo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Sao_Paulo":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:20181104T000000\\r\\nRDATE:20181104T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20180218T000000\\r\\nRDATE:20180218T000000\\r\\nRDATE:20190217T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:19700101T000000\\r\\nEND:DAYLIGHT","America/Scoresbysund":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:19700329T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:-0100\\r\\nTZNAME:-01\\r\\nDTSTART:19701025T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","America/Sitka":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:AKDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:AKST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/St_Barthelemy":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/St_Johns":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0230\\r\\nTZOFFSETTO:-0330\\r\\nTZNAME:NST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0330\\r\\nTZOFFSETTO:-0230\\r\\nTZNAME:NDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT","America/St_Kitts":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/St_Lucia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/St_Thomas":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/St_Vincent":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Swift_Current":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Tegucigalpa":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Thule":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:ADT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Thunder_Bay":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Tijuana":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Toronto":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Tortola":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Vancouver":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Whitehorse":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:20180311T020000\\r\\nRDATE:20180311T020000\\r\\nRDATE:20190310T020000\\r\\nRDATE:20200308T020000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:20181104T020000\\r\\nRDATE:20181104T020000\\r\\nRDATE:20191103T020000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:20201101T000000\\r\\nRDATE:20201101T000000\\r\\nEND:STANDARD","America/Winnipeg":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Yakutat":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:AKDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:AKST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Yellowknife":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Antarctica/Casey":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:20181007T040000\\r\\nRDATE:20181007T040000\\r\\nRDATE:20191004T030000\\r\\nRDATE:20201004T000100\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:20180311T040000\\r\\nRDATE:20180311T040000\\r\\nRDATE:20190317T030000\\r\\nRDATE:20200308T030000\\r\\nEND:STANDARD","Antarctica/Davis":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Antarctica/DumontDUrville":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:+10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Antarctica/Macquarie":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:AEDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT","Antarctica/Mawson":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Antarctica/McMurdo":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:NZDT\\r\\nDTSTART:19700927T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:NZST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD","Antarctica/Palmer":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Antarctica/Rothera":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Antarctica/Syowa":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Antarctica/Troll":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:+02\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Antarctica/Vostok":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Arctic/Longyearbyen":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Asia/Aden":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Almaty":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Amman":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700326T235959\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1TH\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701030T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR\\r\\nEND:STANDARD","Asia/Anadyr":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Aqtau":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Aqtobe":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Ashgabat":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Atyrau":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Baghdad":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Bahrain":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Baku":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Bangkok":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Barnaul":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Beirut":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Asia/Bishkek":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Brunei":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Chita":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:+09\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Choibalsan":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Colombo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0530\\r\\nTZOFFSETTO:+0530\\r\\nTZNAME:+0530\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Damascus":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701030T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700327T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR\\r\\nEND:DAYLIGHT","Asia/Dhaka":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Dili":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:+09\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Dubai":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Dushanbe":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Famagusta":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:20180325T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT","Asia/Gaza":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:20200328T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:20201024T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:20180324T010000\\r\\nRDATE:20180324T010000\\r\\nRDATE:20190329T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:20181027T010000\\r\\nRDATE:20181027T010000\\r\\nRDATE:20191026T000000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Hebron":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:20200328T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:20201024T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:20180324T010000\\r\\nRDATE:20180324T010000\\r\\nRDATE:20190329T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:20181027T010000\\r\\nRDATE:20181027T010000\\r\\nRDATE:20191026T000000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Ho_Chi_Minh":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Hong_Kong":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:HKT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Hovd":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Irkutsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Istanbul":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Jakarta":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:WIB\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Jayapura":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:WIT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Jerusalem":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:IDT\\r\\nDTSTART:19700327T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=23,24,25,26,27,28,29;BYDAY=FR\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:IST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Asia/Kabul":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0430\\r\\nTZOFFSETTO:+0430\\r\\nTZNAME:+0430\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Kamchatka":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Karachi":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:PKT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Kathmandu":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0545\\r\\nTZOFFSETTO:+0545\\r\\nTZNAME:+0545\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Khandyga":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:+09\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Kolkata":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0530\\r\\nTZOFFSETTO:+0530\\r\\nTZNAME:IST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Krasnoyarsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Kuala_Lumpur":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Kuching":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Kuwait":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Macau":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Magadan":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Makassar":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:WITA\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Manila":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:PST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Muscat":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Nicosia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT","Asia/Novokuznetsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Novosibirsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Omsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Oral":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Phnom_Penh":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Pontianak":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:WIB\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Pyongyang":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0830\\r\\nTZNAME:KST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0830\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:KST\\r\\nDTSTART:20180504T233000\\r\\nRDATE:20180504T233000\\r\\nEND:STANDARD","Asia/Qatar":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Qostanay":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Qyzylorda":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:20181221T000000\\r\\nRDATE:20181221T000000\\r\\nEND:STANDARD","Asia/Riyadh":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Sakhalin":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Samarkand":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Seoul":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:KST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Shanghai":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Singapore":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Srednekolymsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Taipei":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Tashkent":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Tbilisi":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Tehran":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0330\\r\\nTZNAME:+0330\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0330\\r\\nTZOFFSETTO:+0430\\r\\nTZNAME:+0430\\r\\nDTSTART:20180321T235959\\r\\nRDATE:20180321T235959\\r\\nRDATE:20190321T235959\\r\\nRDATE:20200320T235959\\r\\nRDATE:20210321T235959\\r\\nRDATE:20220321T235959\\r\\nRDATE:20230321T235959\\r\\nRDATE:20240320T235959\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0430\\r\\nTZOFFSETTO:+0330\\r\\nTZNAME:+0330\\r\\nDTSTART:20180921T235959\\r\\nRDATE:20180921T235959\\r\\nRDATE:20190921T235959\\r\\nRDATE:20200920T235959\\r\\nRDATE:20210921T235959\\r\\nRDATE:20220921T235959\\r\\nRDATE:20230921T235959\\r\\nRDATE:20240920T235959\\r\\nEND:STANDARD","Asia/Thimphu":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Tokyo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:JST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Tomsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Ulaanbaatar":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Urumqi":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Ust-Nera":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:+10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Vientiane":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Vladivostok":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:+10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Yakutsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:+09\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Yangon":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0630\\r\\nTZOFFSETTO:+0630\\r\\nTZNAME:+0630\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Yekaterinburg":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Yerevan":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Atlantic/Azores":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:19700329T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:-0100\\r\\nTZNAME:-01\\r\\nDTSTART:19701025T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Atlantic/Bermuda":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:ADT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Atlantic/Canary":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WEST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:WET\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Atlantic/Cape_Verde":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0100\\r\\nTZOFFSETTO:-0100\\r\\nTZNAME:-01\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Atlantic/Faroe":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WEST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:WET\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Atlantic/Madeira":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WEST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:WET\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Atlantic/Reykjavik":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Atlantic/South_Georgia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Atlantic/St_Helena":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Atlantic/Stanley":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Australia/Adelaide":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1030\\r\\nTZOFFSETTO:+0930\\r\\nTZNAME:ACST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0930\\r\\nTZOFFSETTO:+1030\\r\\nTZNAME:ACDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT","Australia/Brisbane":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Australia/Broken_Hill":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1030\\r\\nTZOFFSETTO:+0930\\r\\nTZNAME:ACST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0930\\r\\nTZOFFSETTO:+1030\\r\\nTZNAME:ACDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT","Australia/Currie":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:AEDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD","Australia/Darwin":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0930\\r\\nTZOFFSETTO:+0930\\r\\nTZNAME:ACST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Australia/Eucla":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0845\\r\\nTZOFFSETTO:+0845\\r\\nTZNAME:+0845\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Australia/Hobart":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:AEDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD","Australia/Lindeman":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Australia/Lord_Howe":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1030\\r\\nTZNAME:+1030\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1030\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT","Australia/Melbourne":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:AEDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT","Australia/Perth":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:AWST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Australia/Sydney":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:AEDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT","Europe/Amsterdam":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Andorra":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Astrakhan":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Athens":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Belgrade":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Berlin":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Bratislava":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Brussels":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Bucharest":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Budapest":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Busingen":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Chisinau":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Copenhagen":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Dublin":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:IST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:DAYLIGHT","Europe/Gibraltar":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Guernsey":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:BST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Helsinki":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Isle_of_Man":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:BST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Istanbul":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Jersey":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:BST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Kaliningrad":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Kiev":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Kirov":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Lisbon":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:WET\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WEST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT","Europe/Ljubljana":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/London":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:BST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Luxembourg":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Madrid":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Malta":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Mariehamn":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Minsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Monaco":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Moscow":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:MSK\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Nicosia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT","Europe/Oslo":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Paris":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Podgorica":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Prague":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Riga":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Rome":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Samara":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/San_Marino":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Sarajevo":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Saratov":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Simferopol":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:MSK\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Skopje":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Sofia":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Stockholm":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Tallinn":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Tirane":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Ulyanovsk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Uzhgorod":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Vaduz":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Vatican":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Vienna":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Vilnius":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Volgograd":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:20181028T020000\\r\\nRDATE:20181028T020000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Warsaw":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Zagreb":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Zaporozhye":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Europe/Zurich":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Indian/Antananarivo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Chagos":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Christmas":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Cocos":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0630\\r\\nTZOFFSETTO:+0630\\r\\nTZNAME:+0630\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Comoro":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Kerguelen":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Mahe":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Maldives":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Mauritius":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Mayotte":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Indian/Reunion":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Apia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1400\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:19700405T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1400\\r\\nTZNAME:+14\\r\\nDTSTART:19700927T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\\r\\nEND:DAYLIGHT","Pacific/Auckland":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:NZDT\\r\\nDTSTART:19700927T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:NZST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD","Pacific/Bougainville":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Chatham":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1245\\r\\nTZOFFSETTO:+1345\\r\\nTZNAME:+1345\\r\\nDTSTART:19700927T024500\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1345\\r\\nTZOFFSETTO:+1245\\r\\nTZNAME:+1245\\r\\nDTSTART:19700405T034500\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD","Pacific/Chuuk":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:+10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Easter":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:-06\\r\\nDTSTART:20190406T220000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SA\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:-05\\r\\nDTSTART:20190907T220000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=1SA\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:-06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:-05\\r\\nDTSTART:20180811T220000\\r\\nRDATE:20180811T220000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:-06\\r\\nDTSTART:20180512T220000\\r\\nRDATE:20180512T220000\\r\\nEND:STANDARD","Pacific/Efate":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Enderbury":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Fakaofo":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Fiji":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700118T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=12,13,14,15,16,17,18;BYDAY=SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:20211114T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:20181104T020000\\r\\nRDATE:20181104T020000\\r\\nRDATE:20191110T020000\\r\\nRDATE:20201220T020000\\r\\nEND:DAYLIGHT","Pacific/Funafuti":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Galapagos":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:-06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Gambier":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:-09\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Guadalcanal":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Guam":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:ChST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Honolulu":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-1000\\r\\nTZOFFSETTO:-1000\\r\\nTZNAME:HST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Kiritimati":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1400\\r\\nTZOFFSETTO:+1400\\r\\nTZNAME:+14\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Kosrae":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Kwajalein":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Majuro":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Marquesas":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0930\\r\\nTZOFFSETTO:-0930\\r\\nTZNAME:-0930\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Midway":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-1100\\r\\nTZOFFSETTO:-1100\\r\\nTZNAME:SST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Nauru":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Niue":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-1100\\r\\nTZOFFSETTO:-1100\\r\\nTZNAME:-11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Norfolk":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:20191006T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:20200405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1130\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:20190701T000000\\r\\nRDATE:20190701T000000\\r\\nEND:STANDARD","Pacific/Noumea":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Pago_Pago":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-1100\\r\\nTZOFFSETTO:-1100\\r\\nTZNAME:SST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Palau":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:+09\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Pitcairn":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:-08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Pohnpei":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Port_Moresby":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:+10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Rarotonga":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-1000\\r\\nTZOFFSETTO:-1000\\r\\nTZNAME:-10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Saipan":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:ChST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Tahiti":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-1000\\r\\nTZOFFSETTO:-1000\\r\\nTZNAME:-10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Tarawa":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Tongatapu":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Wake":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific/Wallis":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","AUS Central Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0930\\r\\nTZOFFSETTO:+0930\\r\\nTZNAME:ACST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","AUS Eastern Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:AEDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT","Afghanistan Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0430\\r\\nTZOFFSETTO:+0430\\r\\nTZNAME:+0430\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Asmera":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Africa/Timbuktu":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Alaskan Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0900\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:AKDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0900\\r\\nTZNAME:AKST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Argentina/ComodRivadavia":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Buenos_Aires":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","America/Godthab":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:19700328T220000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19701024T230000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=24,25,26,27,28,29,30;BYDAY=SA\\r\\nEND:STANDARD","America/Louisville":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Montreal":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","America/Santa_Isabel":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Arab Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Arabian Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Arabic Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Argentina Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Calcutta":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0530\\r\\nTZOFFSETTO:+0530\\r\\nTZNAME:IST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Katmandu":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0545\\r\\nTZOFFSETTO:+0545\\r\\nTZNAME:+0545\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Rangoon":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0630\\r\\nTZOFFSETTO:+0630\\r\\nTZNAME:+0630\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Asia/Saigon":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Atlantic Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:ADT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:AST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Atlantic/Faeroe":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WEST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:WET\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Atlantic/Jan_Mayen":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Azerbaijan Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Azores Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:19700329T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:-0100\\r\\nTZNAME:-01\\r\\nDTSTART:19701025T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Bahia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Bangladesh Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Belarus Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Canada Central Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Cape Verde Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0100\\r\\nTZOFFSETTO:-0100\\r\\nTZNAME:-01\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Caucasus Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Cen. Australia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1030\\r\\nTZOFFSETTO:+0930\\r\\nTZNAME:ACST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0930\\r\\nTZOFFSETTO:+1030\\r\\nTZNAME:ACDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT","Central America Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Central Asia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0600\\r\\nTZOFFSETTO:+0600\\r\\nTZNAME:+06\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Central Brazilian Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20181104T000000\\r\\nRDATE:20181104T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:20180218T000000\\r\\nRDATE:20180218T000000\\r\\nRDATE:20190217T000000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Central Europe Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Central European Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Central Pacific Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Central Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Central Standard Time (Mexico)":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","China Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","E. Africa Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","E. Australia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","E. South America Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:20181104T000000\\r\\nRDATE:20181104T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20180218T000000\\r\\nRDATE:20180218T000000\\r\\nRDATE:20190217T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0200\\r\\nTZOFFSETTO:-0200\\r\\nTZNAME:-02\\r\\nDTSTART:19700101T000000\\r\\nEND:DAYLIGHT","Eastern Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Egypt Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Ekaterinburg Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Europe/Belfast":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:BST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","FLE Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Fiji Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700118T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=12,13,14,15,16,17,18;BYDAY=SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:20211114T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:20181104T020000\\r\\nRDATE:20181104T020000\\r\\nRDATE:20191110T020000\\r\\nRDATE:20201220T020000\\r\\nEND:DAYLIGHT","GMT Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:BST\\r\\nDTSTART:19700329T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","GTB Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Georgian Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Greenwich Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:GMT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Hawaiian Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-1000\\r\\nTZOFFSETTO:-1000\\r\\nTZNAME:HST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Iran Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0330\\r\\nTZNAME:+0330\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0330\\r\\nTZOFFSETTO:+0430\\r\\nTZNAME:+0430\\r\\nDTSTART:20180321T235959\\r\\nRDATE:20180321T235959\\r\\nRDATE:20190321T235959\\r\\nRDATE:20200320T235959\\r\\nRDATE:20210321T235959\\r\\nRDATE:20220321T235959\\r\\nRDATE:20230321T235959\\r\\nRDATE:20240320T235959\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0430\\r\\nTZOFFSETTO:+0330\\r\\nTZNAME:+0330\\r\\nDTSTART:20180921T235959\\r\\nRDATE:20180921T235959\\r\\nRDATE:20190921T235959\\r\\nRDATE:20200920T235959\\r\\nRDATE:20210921T235959\\r\\nRDATE:20220921T235959\\r\\nRDATE:20230921T235959\\r\\nRDATE:20240920T235959\\r\\nEND:STANDARD","Israel Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:IDT\\r\\nDTSTART:19700327T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=23,24,25,26,27,28,29;BYDAY=FR\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:IST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Jordan Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700326T235959\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1TH\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701030T010000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR\\r\\nEND:STANDARD","Kaliningrad Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Korea Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:KST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Libya Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Line Islands Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1400\\r\\nTZOFFSETTO:+1400\\r\\nTZNAME:+14\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Magadan Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Mauritius Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Middle East Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700329T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701025T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Montevideo Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Morocco Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20180325T020000\\r\\nRDATE:20180325T020000\\r\\nRDATE:20180617T020000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:20180513T030000\\r\\nRDATE:20180513T030000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0000\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20190609T020000\\r\\nRDATE:20190609T020000\\r\\nRDATE:20200531T020000\\r\\nRDATE:20210516T020000\\r\\nRDATE:20220508T020000\\r\\nRDATE:20230430T020000\\r\\nRDATE:20240414T020000\\r\\nEND:STANDARD\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:+01\\r\\nDTSTART:20181028T030000\\r\\nRDATE:20181028T030000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0000\\r\\nTZNAME:+00\\r\\nDTSTART:20190505T030000\\r\\nRDATE:20190505T030000\\r\\nRDATE:20200419T030000\\r\\nRDATE:20210411T030000\\r\\nRDATE:20220327T030000\\r\\nRDATE:20230319T030000\\r\\nRDATE:20240310T030000\\r\\nEND:DAYLIGHT","Mountain Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Mountain Standard Time (Mexico)":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700405T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701025T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","N. Central Asia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Namibia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","New Zealand Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:NZDT\\r\\nDTSTART:19700927T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:NZST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD","Newfoundland Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0230\\r\\nTZOFFSETTO:-0330\\r\\nTZNAME:NST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0330\\r\\nTZOFFSETTO:-0230\\r\\nTZNAME:NDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT","North Asia East Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","North Asia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pacific SA Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:20190407T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYMONTHDAY=2,3,4,5,6,7,8;BYDAY=SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20190908T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=2,3,4,5,6,7,8;BYDAY=SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:20180812T000000\\r\\nRDATE:20180812T000000\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:20180513T000000\\r\\nRDATE:20180513T000000\\r\\nEND:STANDARD","Pacific Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Pacific/Johnston":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-1000\\r\\nTZOFFSETTO:-1000\\r\\nTZNAME:HST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Pakistan Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:PKT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Paraguay Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19701004T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700322T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=4SU\\r\\nEND:STANDARD","Romance Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","Russia Time Zone 10":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:+11\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Russia Time Zone 11":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1200\\r\\nTZOFFSETTO:+1200\\r\\nTZNAME:+12\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Russia Time Zone 3":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0400\\r\\nTZOFFSETTO:+0400\\r\\nTZNAME:+04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Russian Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:MSK\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","SA Eastern Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0300\\r\\nTZOFFSETTO:-0300\\r\\nTZNAME:-03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","SA Pacific Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:-05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","SA Western Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","SE Asia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0700\\r\\nTZOFFSETTO:+0700\\r\\nTZNAME:+07\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Samoa Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1400\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:19700405T040000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1400\\r\\nTZNAME:+14\\r\\nDTSTART:19700927T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=9;BYDAY=-1SU\\r\\nEND:DAYLIGHT","Singapore Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","South Africa Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:SAST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Sri Lanka Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0530\\r\\nTZOFFSETTO:+0530\\r\\nTZNAME:+0530\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Syria Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:EET\\r\\nDTSTART:19701030T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1FR\\r\\nEND:STANDARD\\r\\nBEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:EEST\\r\\nDTSTART:19700327T000000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1FR\\r\\nEND:DAYLIGHT","Taipei Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:CST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Tasmania Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1100\\r\\nTZNAME:AEDT\\r\\nDTSTART:19701004T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+1100\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:AEST\\r\\nDTSTART:19700405T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU\\r\\nEND:STANDARD","Tokyo Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:JST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Tonga Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1300\\r\\nTZOFFSETTO:+1300\\r\\nTZNAME:+13\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Turkey Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0300\\r\\nTZOFFSETTO:+0300\\r\\nTZNAME:+03\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","US Eastern Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","US Mountain Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","US/Central":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:CDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:CST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","US/Eastern":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0500\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:EDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0500\\r\\nTZNAME:EST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","US/Mountain":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0600\\r\\nTZNAME:MDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0600\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:MST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","US/Pacific":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","US/Pacific-New":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:-0800\\r\\nTZOFFSETTO:-0700\\r\\nTZNAME:PDT\\r\\nDTSTART:19700308T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:-0700\\r\\nTZOFFSETTO:-0800\\r\\nTZNAME:PST\\r\\nDTSTART:19701101T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\\r\\nEND:STANDARD","Ulaanbaatar Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:+08\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Venezuela Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:-0400\\r\\nTZOFFSETTO:-0400\\r\\nTZNAME:-04\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Vladivostok Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:+10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","W. Australia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0800\\r\\nTZOFFSETTO:+0800\\r\\nTZNAME:AWST\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","W. Central Africa Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:WAT\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","W. Europe Standard Time":"BEGIN:DAYLIGHT\\r\\nTZOFFSETFROM:+0100\\r\\nTZOFFSETTO:+0200\\r\\nTZNAME:CEST\\r\\nDTSTART:19700329T020000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\\r\\nEND:DAYLIGHT\\r\\nBEGIN:STANDARD\\r\\nTZOFFSETFROM:+0200\\r\\nTZOFFSETTO:+0100\\r\\nTZNAME:CET\\r\\nDTSTART:19701025T030000\\r\\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\\r\\nEND:STANDARD","West Asia Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0500\\r\\nTZOFFSETTO:+0500\\r\\nTZNAME:+05\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","West Pacific Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+1000\\r\\nTZOFFSETTO:+1000\\r\\nTZNAME:+10\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD","Yakutsk Standard Time":"BEGIN:STANDARD\\r\\nTZOFFSETFROM:+0900\\r\\nTZOFFSETTO:+0900\\r\\nTZNAME:+09\\r\\nDTSTART:19700101T000000\\r\\nEND:STANDARD"}');

},{}],"nqWFO":[function(require,module,exports) {
!function(e, i) {
    module.exports = i();
}(this, function() {
    "use strict";
    return function(e1, i1, t) {
        i1.prototype.isBetween = function(e, i, s, f) {
            var n = t(e), o = t(i), r = "(" === (f = f || "()")[0], u = ")" === f[1];
            return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
    };
});

},{}]},["1xC6H","fbW0H"], null, "parcelRequire10c2")

//# sourceMappingURL=mml-react.esm.3ffedfa0.js.map
