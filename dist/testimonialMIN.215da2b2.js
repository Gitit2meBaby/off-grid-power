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
})({"minifiedJS/testimonialMIN.js":[function(require,module,exports) {
var testimonials = [{
    title: "Just The Best. Best Design. Best Install Best Price.",
    content: "Trent and his team are just amazing. From design to install the professionalism, technical knowledge, quality of work was just the best. We would recommend off grid power to anyone who wants quality and confidence in a system designed and installed to generate reliable power to your home. Thanks Trent really appreciate the system.",
    name: "Paul And Carol Francis",
    date: "Mar 8, 2023"
  }, {
    title: "Exceptional Installation",
    content: "Trent and his team were exceptional. The installation had some challenges but they rallied and pushed through. They created the most symmetrical, neat, clean job I have ever seen. I was really emotional when I arrived onsite to see it installed. We can't thank Trent and his team enough. Their knowledge, expertise, gentle & friendly nature was second to none. I would highly recommend Trent and his team for your solar installation.",
    name: "Lisa Post",
    date: "Mar 8, 2023"
  }, {
    title: "Solar Install",
    content: "Such an amazing service from start to finish, with all the team being really helpful, friendly and professional, and definitely going above and beyond on several occasions. The installation was done with amazing care, and the results have been brilliant. I'd highly recommend the Off Grid Power to anyone.",
    name: "Gabrielle Gawne-Kelnar",
    date: "Mar 1, 2023"
  }, {
    title: "Off Grid Power Installation",
    content: "Installation was professionally and promptly done. After installation back-up has been available and helpful.\n\nSystem is working well.\n\nRecommended business.",
    name: "John Miller",
    date: "Aug 3, 2022"
  }, {
    title: "Fantastic",
    content: "Great service, great product, highly recommended for all applications of solar equipment and service\u2026 \uD83D\uDC4D\uD83C\uDFFE",
    name: "Lindsay Gaddes",
    date: "Apr 19, 2022"
  }, {
    title: "Off Grid Power",
    content: "Professional and hold to their word. I have used them twice … first for initial install and then for further battery storage additions. Can not recommend them more highly. I am happy to be contacted for further information as it can be rare these days to get their level of service.",
    name: "Robert Borcherdt",
    date: "Mar 6, 2022"
  }, {
    title: "Solar Power",
    content: "Great company to deal with, total professionals with years of industry experience, that makes the difference when designing and building a system to suit your exact needs.\n\nThere are lots of other companies out there who appear to offer the same, but it is only when you investigate in detail, but you will see a lot are just offering whatever systems they have on hand, not a true engineered custom design based on years of experience and countless installations with very satisfied customers.",
    name: "Tony Reeves",
    date: "Sep 26, 2021"
  }, {
    title: "Off Grid Power Installation",
    content: "We had a great experience with Off Grid Power. Not only was the service prompt and professional, this was the only fully itemized quote we received out of a total of 6 quotes. Trent really knows off grid solar. His advice was excellent and we have a top of the line system which was cheaper than the more older technology. We would wholeheartedly recommend his company to our friends and family - as well as strangers who might read this online!",
    name: "Ros Cooper",
    date: "Apr 7, 2021"
  }, {
    title: "Off Grid Power",
    content: "If Quality had a name, it would be Trent Rogers.\n\nThe attention to detail in his quote, his advice and his install exemplifies one who has a passion for, and mastery of, his trade.\n\nThanks so much.",
    name: "Bunyip Creek",
    date: "Aug 29, 2020"
  }],
  testimonial = document.querySelector(".testimonial");
var testimonialTitle = document.querySelector("#testimonialTitle"),
  testimonialContent = document.querySelector("#testimonialContent"),
  testimonialDate = document.querySelector("#testimonialDate"),
  testimonialName = document.querySelector("#testimonialName"),
  currentIndex = 0;
function updateTestimonial(e) {
  var t = testimonials[e];
  t && (testimonial.classList.add("invisible"), setTimeout(function () {
    testimonialTitle.textContent = t.title, testimonialContent.textContent = "\"".concat(t.content, "\""), testimonialDate.textContent = t.date, testimonialName.textContent = t.name, currentIndex = (currentIndex + 1) % testimonials.length, testimonial.classList.remove("invisible");
  }, 1e3));
}
setInterval(function () {
  updateTestimonial(currentIndex);
}, 5e3);
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
},{}]},{},["../../../.nvm/versions/node/v18.18.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","minifiedJS/testimonialMIN.js"], null)
//# sourceMappingURL=/testimonialMIN.215da2b2.js.map