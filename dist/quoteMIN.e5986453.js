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
})({"minifiedJS/quoteMIN.js":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function () {
  var e = document.createElement("div");
  e.innerHTML = "\n<div class=\"main-title\"><h1>Please enter your contact details</h1><img src=\"assets/logo100.webp\" alt=\"Off Grid Power logo\"></div><form action=\"formHandle.php\" method=\"POST\"><div class=\"details\"><label for=\"name\">Name</label><input autocomplete=\"on\" type=\"text\" id=\"name\" name=\"name\" required aria-label=\"Name\"><label for=\"email\">Email</label><input autocomplete=\"on\" type=\"email\" id=\"email\" name=\"email\" required aria-label=\"Email\"><label for=\"phone\">Phone</label><input autocomplete=\"on\" type=\"tel\" id=\"phone\" name=\"phone\" required aria-label=\"Phone\">\n<label for=\"address\">Address</label>\n<input autocomplete=\"on\" type=\"text\" id=\"address\" name=\"address\" required aria-label=\"Address\"></div><div class=\"add-title\"><p id=\"additionalInformation\">Additional Information</p><svg stroke=\"#595959\" fill=\"currentColor\" stroke-width=\".4\" viewBox=\"0 0 16 16\" height=\"1em\" width=\"1em\"xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\"d=\"M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z\"clip-rule=\"evenodd\"></path></svg></div>\n<div id=\"formDropdown\"><div class=\"radios\"><div class=\"power-requirement\"><p>Power Requirement</p><label><input type=\"radio\" id=\"oneTwo\" name=\"power\" checked>1-2 People</label><label><input type=\"radio\" id=\"twoFour\" name=\"power\">2-4 People</label><label><input type=\"radio\" id=\"fourSix\" name=\"power\">4-6 People</label><label><input type=\"radio\" id=\"commercial\" name=\"power\">Commercial Business</label></div><div class=\"system-size\"><p>Size of system required</p><label><input type=\"radio\" id=\"ten\" name=\"size\">3.3kW (10 Panels)</label><label><input type=\"radio\" id=\"twenty\" name=\"size\">6.6kW (20 Panels)</label><label><input type=\"radio\" id=\"twentyFour\" name=\"size\">8kW (24 Panels)</label><label><input type=\"radio\" id=\"fourty\" name=\"size\">13.2kW (40 Panels)</label><label><input type=\"radio\" id=\"fourtyFour\" name=\"size\">16kW (44 Panels)</label><label><input type=\"radio\" id=\"greater\" name=\"size\">Greater than 16kw</label><label><input type=\"radio\" id=\"notSure\" name=\"size\" checked>I don't know please advise</label></div></div><div class=\"usage\"><label for=\"usage\">Average Daily Electricity Usage kW</label><input type=\"text\" id=\"usage\"><label for=\"hours\">What percentage from the above field is used during daylight hours?</label><input type=\"text\" id=\"hours\"></div><div class=\"type\"><p>Building Type</p><label><input type=\"checkbox\" id=\"tin\" name=\"type\">Tin Roof</label><label><input type=\"checkbox\" id=\"tile\" name=\"type\">Tile Roof</label><label><input type=\"checkbox\" id=\"single\" name=\"type\">Single Story</label><label><input type=\"checkbox\" id=\"double\" name=\"type\">Double Story</label><label><input type=\"checkbox\" id=\"shed\" name=\"type\">Shed</label></div><div class=\"comments\"><label for=\"comments\">Please provide any additional comments / information here</label><div class=\"textarea-wrapper\"><textarea placeholder=\"eg. your budget, are you currently connected to the grid...\" name=\"comments\"id=\"comments\" cols=\"\" rows=\"\"></textarea></div></div><div class=\"btn-container\"><button type=\"submit\" id=\"submitForm\">Submit</button></div></div></div></form>\n";
  var a = document.querySelector(".dialog");
  a.appendChild(e);
  var l = document.querySelectorAll(".quoteBtn"),
    t = !1;
  l.forEach(function (e) {
    e.addEventListener("click", function () {
      a.showModal(), t = !0;
    });
  });
  var i = document.querySelector("#additionalInformation"),
    o = document.querySelector(".add-title"),
    d = document.querySelector("#formDropdown");
  o.addEventListener("click", function () {
    d.classList.toggle("show-dropdown"), i.classList.add("active-text");
  });
});
},{}],"../../../.nvm/versions/node/v18.18.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55614" + '/');
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
},{}]},{},["../../../.nvm/versions/node/v18.18.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","minifiedJS/quoteMIN.js"], null)
//# sourceMappingURL=/quoteMIN.e5986453.js.map