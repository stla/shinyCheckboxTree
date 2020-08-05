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
/******/ 	return __webpack_require__(__webpack_require__.s = "./srcjs/checkboxTree.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-checkbox-tree/lib/index.browser.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-checkbox-tree/lib/index.browser.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! react-checkbox-tree - v1.6.0 | 2019 */
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t(__webpack_require__(/*! react */ "react")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ "react")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function (e) {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 27);
  }([function (e, t, n) {
    e.exports = n(96)();
  }, function (t, n) {
    t.exports = e;
  }, function (e, t, n) {
    var r = n(16),
        o = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        a = r || o || Function("return this")();
    e.exports = a;
  }, function (e, t, n) {
    var r = n(41),
        o = n(47);

    e.exports = function (e, t) {
      var n = o(e, t);
      return r(n) ? n : void 0;
    };
  }, function (e, t, n) {
    var r = n(31),
        o = n(32),
        a = n(33),
        i = n(34),
        c = n(35);

    function l(e) {
      var t = -1,
          n = null == e ? 0 : e.length;

      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }

    l.prototype.clear = r, l.prototype["delete"] = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = c, e.exports = l;
  }, function (e, t, n) {
    var r = n(14);

    e.exports = function (e, t) {
      for (var n = e.length; n--;) {
        if (r(e[n][0], t)) return n;
      }

      return -1;
    };
  }, function (e, t, n) {
    var r = n(12),
        o = n(43),
        a = n(44),
        i = "[object Null]",
        c = "[object Undefined]",
        l = r ? r.toStringTag : void 0;

    e.exports = function (e) {
      return null == e ? void 0 === e ? c : i : l && l in Object(e) ? o(e) : a(e);
    };
  }, function (e, t, n) {
    var r = n(3)(Object, "create");
    e.exports = r;
  }, function (e, t, n) {
    var r = n(56);

    e.exports = function (e, t) {
      var n = e.__data__;
      return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
    };
  }, function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == _typeof(e);
    };
  }, function (e, t, n) {
    var r;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    !function () {
      "use strict";

      var n = {}.hasOwnProperty;

      function o() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];

          if (r) {
            var a = _typeof(r);

            if ("string" === a || "number" === a) e.push(r);else if (Array.isArray(r) && r.length) {
              var i = o.apply(null, r);
              i && e.push(i);
            } else if ("object" === a) for (var c in r) {
              n.call(r, c) && r[c] && e.push(c);
            }
          }
        }

        return e.join(" ");
      }

      e.exports ? (o["default"] = o, e.exports = o) : void 0 === (r = function () {
        return o;
      }.apply(t, [])) || (e.exports = r);
    }();
  }, function (e, t, n) {
    var r = n(3)(n(2), "Map");
    e.exports = r;
  }, function (e, t, n) {
    var r = n(2).Symbol;
    e.exports = r;
  }, function (e, t) {
    var n = Array.isArray;
    e.exports = n;
  }, function (e, t) {
    e.exports = function (e, t) {
      return e === t || e != e && t != t;
    };
  }, function (e, t, n) {
    var r = n(6),
        o = n(17),
        a = "[object AsyncFunction]",
        i = "[object Function]",
        c = "[object GeneratorFunction]",
        l = "[object Proxy]";

    e.exports = function (e) {
      if (!o(e)) return !1;
      var t = r(e);
      return t == i || t == c || t == a || t == l;
    };
  }, function (e, t, n) {
    (function (t) {
      var n = "object" == _typeof(t) && t && t.Object === Object && t;
      e.exports = n;
    }).call(this, n(42));
  }, function (e, t) {
    e.exports = function (e) {
      var t = _typeof(e);

      return null != e && ("object" == t || "function" == t);
    };
  }, function (e, t) {
    var n = Function.prototype.toString;

    e.exports = function (e) {
      if (null != e) {
        try {
          return n.call(e);
        } catch (e) {}

        try {
          return e + "";
        } catch (e) {}
      }

      return "";
    };
  }, function (e, t, n) {
    var r = n(48),
        o = n(55),
        a = n(57),
        i = n(58),
        c = n(59);

    function l(e) {
      var t = -1,
          n = null == e ? 0 : e.length;

      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }

    l.prototype.clear = r, l.prototype["delete"] = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = c, e.exports = l;
  }, function (e, t, n) {
    var r = n(60),
        o = n(63),
        a = n(64),
        i = 1,
        c = 2;

    e.exports = function (e, t, n, l, s, u) {
      var p = n & i,
          f = e.length,
          d = t.length;
      if (f != d && !(p && d > f)) return !1;
      var h = u.get(e);
      if (h && u.get(t)) return h == t;
      var b = -1,
          y = !0,
          v = n & c ? new r() : void 0;

      for (u.set(e, t), u.set(t, e); ++b < f;) {
        var g = e[b],
            x = t[b];
        if (l) var m = p ? l(x, g, b, t, e, u) : l(g, x, b, e, t, u);

        if (void 0 !== m) {
          if (m) continue;
          y = !1;
          break;
        }

        if (v) {
          if (!o(t, function (e, t) {
            if (!a(v, t) && (g === e || s(g, e, n, l, u))) return v.push(t);
          })) {
            y = !1;
            break;
          }
        } else if (g !== x && !s(g, x, n, l, u)) {
          y = !1;
          break;
        }
      }

      return u["delete"](e), u["delete"](t), y;
    };
  }, function (e, t, n) {
    (function (e) {
      var r = n(2),
          o = n(81),
          a = t && !t.nodeType && t,
          i = a && "object" == _typeof(e) && e && !e.nodeType && e,
          c = i && i.exports === a ? r.Buffer : void 0,
          l = (c ? c.isBuffer : void 0) || o;
      e.exports = l;
    }).call(this, n(22)(e));
  }, function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function get() {
          return e.l;
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function get() {
          return e.i;
        }
      }), e.webpackPolyfill = 1), e;
    };
  }, function (e, t, n) {
    var r = n(83),
        o = n(84),
        a = n(85),
        i = a && a.isTypedArray,
        c = i ? o(i) : r;
    e.exports = c;
  }, function (e, t) {
    var n = 9007199254740991;

    e.exports = function (e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
    };
  }, function (e, t, n) {
    var r = n(28);

    e.exports = function (e, t) {
      return r(e, t);
    };
  }, function (e, t, n) {
    var r = self.crypto || self.msCrypto;

    e.exports = function (e) {
      e = e || 21;

      for (var t = "", n = r.getRandomValues(new Uint8Array(e)); e--;) {
        t += "QLUint8ARdomValuesObj0h6345-79BCrypgJzHKTNYDSMkXPZ_FfG1WcqvwxEI2"[63 & n[e]];
      }

      return t;
    };
  }, function (e, t, n) {
    e.exports = n(98)["default"];
  }, function (e, t, n) {
    var r = n(29),
        o = n(9);

    e.exports = function e(t, n, a, i, c) {
      return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, a, i, e, c));
    };
  }, function (e, t, n) {
    var r = n(30),
        o = n(20),
        a = n(65),
        i = n(69),
        c = n(91),
        l = n(13),
        s = n(21),
        u = n(23),
        p = 1,
        f = "[object Arguments]",
        d = "[object Array]",
        h = "[object Object]",
        b = Object.prototype.hasOwnProperty;

    e.exports = function (e, t, n, y, v, g) {
      var x = l(e),
          m = l(t),
          k = x ? d : c(e),
          O = m ? d : c(t),
          j = (k = k == f ? h : k) == h,
          _ = (O = O == f ? h : O) == h,
          w = k == O;

      if (w && s(e)) {
        if (!s(t)) return !1;
        x = !0, j = !1;
      }

      if (w && !j) return g || (g = new r()), x || u(e) ? o(e, t, n, y, v, g) : a(e, t, k, n, y, v, g);

      if (!(n & p)) {
        var C = j && b.call(e, "__wrapped__"),
            P = _ && b.call(t, "__wrapped__");

        if (C || P) {
          var E = C ? e.value() : e,
              N = P ? t.value() : t;
          return g || (g = new r()), v(E, N, n, y, g);
        }
      }

      return !!w && (g || (g = new r()), i(e, t, n, y, v, g));
    };
  }, function (e, t, n) {
    var r = n(4),
        o = n(36),
        a = n(37),
        i = n(38),
        c = n(39),
        l = n(40);

    function s(e) {
      var t = this.__data__ = new r(e);
      this.size = t.size;
    }

    s.prototype.clear = o, s.prototype["delete"] = a, s.prototype.get = i, s.prototype.has = c, s.prototype.set = l, e.exports = s;
  }, function (e, t) {
    e.exports = function () {
      this.__data__ = [], this.size = 0;
    };
  }, function (e, t, n) {
    var r = n(5),
        o = Array.prototype.splice;

    e.exports = function (e) {
      var t = this.__data__,
          n = r(t, e);
      return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0);
    };
  }, function (e, t, n) {
    var r = n(5);

    e.exports = function (e) {
      var t = this.__data__,
          n = r(t, e);
      return n < 0 ? void 0 : t[n][1];
    };
  }, function (e, t, n) {
    var r = n(5);

    e.exports = function (e) {
      return r(this.__data__, e) > -1;
    };
  }, function (e, t, n) {
    var r = n(5);

    e.exports = function (e, t) {
      var n = this.__data__,
          o = r(n, e);
      return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
    };
  }, function (e, t, n) {
    var r = n(4);

    e.exports = function () {
      this.__data__ = new r(), this.size = 0;
    };
  }, function (e, t) {
    e.exports = function (e) {
      var t = this.__data__,
          n = t["delete"](e);
      return this.size = t.size, n;
    };
  }, function (e, t) {
    e.exports = function (e) {
      return this.__data__.get(e);
    };
  }, function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e);
    };
  }, function (e, t, n) {
    var r = n(4),
        o = n(11),
        a = n(19),
        i = 200;

    e.exports = function (e, t) {
      var n = this.__data__;

      if (n instanceof r) {
        var c = n.__data__;
        if (!o || c.length < i - 1) return c.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new a(c);
      }

      return n.set(e, t), this.size = n.size, this;
    };
  }, function (e, t, n) {
    var r = n(15),
        o = n(45),
        a = n(17),
        i = n(18),
        c = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        s = Object.prototype,
        u = l.toString,
        p = s.hasOwnProperty,
        f = RegExp("^" + u.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    e.exports = function (e) {
      return !(!a(e) || o(e)) && (r(e) ? f : c).test(i(e));
    };
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    var r = n(12),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        c = r ? r.toStringTag : void 0;

    e.exports = function (e) {
      var t = a.call(e, c),
          n = e[c];

      try {
        e[c] = void 0;
        var r = !0;
      } catch (e) {}

      var o = i.call(e);
      return r && (t ? e[c] = n : delete e[c]), o;
    };
  }, function (e, t) {
    var n = Object.prototype.toString;

    e.exports = function (e) {
      return n.call(e);
    };
  }, function (e, t, n) {
    var r,
        o = n(46),
        a = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";

    e.exports = function (e) {
      return !!a && a in e;
    };
  }, function (e, t, n) {
    var r = n(2)["__core-js_shared__"];
    e.exports = r;
  }, function (e, t) {
    e.exports = function (e, t) {
      return null == e ? void 0 : e[t];
    };
  }, function (e, t, n) {
    var r = n(49),
        o = n(4),
        a = n(11);

    e.exports = function () {
      this.size = 0, this.__data__ = {
        hash: new r(),
        map: new (a || o)(),
        string: new r()
      };
    };
  }, function (e, t, n) {
    var r = n(50),
        o = n(51),
        a = n(52),
        i = n(53),
        c = n(54);

    function l(e) {
      var t = -1,
          n = null == e ? 0 : e.length;

      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }

    l.prototype.clear = r, l.prototype["delete"] = o, l.prototype.get = a, l.prototype.has = i, l.prototype.set = c, e.exports = l;
  }, function (e, t, n) {
    var r = n(7);

    e.exports = function () {
      this.__data__ = r ? r(null) : {}, this.size = 0;
    };
  }, function (e, t) {
    e.exports = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    };
  }, function (e, t, n) {
    var r = n(7),
        o = "__lodash_hash_undefined__",
        a = Object.prototype.hasOwnProperty;

    e.exports = function (e) {
      var t = this.__data__;

      if (r) {
        var n = t[e];
        return n === o ? void 0 : n;
      }

      return a.call(t, e) ? t[e] : void 0;
    };
  }, function (e, t, n) {
    var r = n(7),
        o = Object.prototype.hasOwnProperty;

    e.exports = function (e) {
      var t = this.__data__;
      return r ? void 0 !== t[e] : o.call(t, e);
    };
  }, function (e, t, n) {
    var r = n(7),
        o = "__lodash_hash_undefined__";

    e.exports = function (e, t) {
      var n = this.__data__;
      return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? o : t, this;
    };
  }, function (e, t, n) {
    var r = n(8);

    e.exports = function (e) {
      var t = r(this, e)["delete"](e);
      return this.size -= t ? 1 : 0, t;
    };
  }, function (e, t) {
    e.exports = function (e) {
      var t = _typeof(e);

      return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
    };
  }, function (e, t, n) {
    var r = n(8);

    e.exports = function (e) {
      return r(this, e).get(e);
    };
  }, function (e, t, n) {
    var r = n(8);

    e.exports = function (e) {
      return r(this, e).has(e);
    };
  }, function (e, t, n) {
    var r = n(8);

    e.exports = function (e, t) {
      var n = r(this, e),
          o = n.size;
      return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
    };
  }, function (e, t, n) {
    var r = n(19),
        o = n(61),
        a = n(62);

    function i(e) {
      var t = -1,
          n = null == e ? 0 : e.length;

      for (this.__data__ = new r(); ++t < n;) {
        this.add(e[t]);
      }
    }

    i.prototype.add = i.prototype.push = o, i.prototype.has = a, e.exports = i;
  }, function (e, t) {
    var n = "__lodash_hash_undefined__";

    e.exports = function (e) {
      return this.__data__.set(e, n), this;
    };
  }, function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e);
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) {
        if (t(e[n], n, e)) return !0;
      }

      return !1;
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      return e.has(t);
    };
  }, function (e, t, n) {
    var r = n(12),
        o = n(66),
        a = n(14),
        i = n(20),
        c = n(67),
        l = n(68),
        s = 1,
        u = 2,
        p = "[object Boolean]",
        f = "[object Date]",
        d = "[object Error]",
        h = "[object Map]",
        b = "[object Number]",
        y = "[object RegExp]",
        v = "[object Set]",
        g = "[object String]",
        x = "[object Symbol]",
        m = "[object ArrayBuffer]",
        k = "[object DataView]",
        O = r ? r.prototype : void 0,
        j = O ? O.valueOf : void 0;

    e.exports = function (e, t, n, r, O, _, w) {
      switch (n) {
        case k:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          e = e.buffer, t = t.buffer;

        case m:
          return !(e.byteLength != t.byteLength || !_(new o(e), new o(t)));

        case p:
        case f:
        case b:
          return a(+e, +t);

        case d:
          return e.name == t.name && e.message == t.message;

        case y:
        case g:
          return e == t + "";

        case h:
          var C = c;

        case v:
          var P = r & s;
          if (C || (C = l), e.size != t.size && !P) return !1;
          var E = w.get(e);
          if (E) return E == t;
          r |= u, w.set(e, t);
          var N = i(C(e), C(t), r, O, _, w);
          return w["delete"](e), N;

        case x:
          if (j) return j.call(e) == j.call(t);
      }

      return !1;
    };
  }, function (e, t, n) {
    var r = n(2).Uint8Array;
    e.exports = r;
  }, function (e, t) {
    e.exports = function (e) {
      var t = -1,
          n = Array(e.size);
      return e.forEach(function (e, r) {
        n[++t] = [r, e];
      }), n;
    };
  }, function (e, t) {
    e.exports = function (e) {
      var t = -1,
          n = Array(e.size);
      return e.forEach(function (e) {
        n[++t] = e;
      }), n;
    };
  }, function (e, t, n) {
    var r = n(70),
        o = 1,
        a = Object.prototype.hasOwnProperty;

    e.exports = function (e, t, n, i, c, l) {
      var s = n & o,
          u = r(e),
          p = u.length;
      if (p != r(t).length && !s) return !1;

      for (var f = p; f--;) {
        var d = u[f];
        if (!(s ? d in t : a.call(t, d))) return !1;
      }

      var h = l.get(e);
      if (h && l.get(t)) return h == t;
      var b = !0;
      l.set(e, t), l.set(t, e);

      for (var y = s; ++f < p;) {
        var v = e[d = u[f]],
            g = t[d];
        if (i) var x = s ? i(g, v, d, t, e, l) : i(v, g, d, e, t, l);

        if (!(void 0 === x ? v === g || c(v, g, n, i, l) : x)) {
          b = !1;
          break;
        }

        y || (y = "constructor" == d);
      }

      if (b && !y) {
        var m = e.constructor,
            k = t.constructor;
        m != k && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof k && k instanceof k) && (b = !1);
      }

      return l["delete"](e), l["delete"](t), b;
    };
  }, function (e, t, n) {
    var r = n(71),
        o = n(73),
        a = n(76);

    e.exports = function (e) {
      return r(e, a, o);
    };
  }, function (e, t, n) {
    var r = n(72),
        o = n(13);

    e.exports = function (e, t, n) {
      var a = t(e);
      return o(e) ? a : r(a, n(e));
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = t.length, o = e.length; ++n < r;) {
        e[o + n] = t[n];
      }

      return e;
    };
  }, function (e, t, n) {
    var r = n(74),
        o = n(75),
        a = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        c = i ? function (e) {
      return null == e ? [] : (e = Object(e), r(i(e), function (t) {
        return a.call(e, t);
      }));
    } : o;
    e.exports = c;
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r;) {
        var i = e[n];
        t(i, n, e) && (a[o++] = i);
      }

      return a;
    };
  }, function (e, t) {
    e.exports = function () {
      return [];
    };
  }, function (e, t, n) {
    var r = n(77),
        o = n(86),
        a = n(90);

    e.exports = function (e) {
      return a(e) ? r(e) : o(e);
    };
  }, function (e, t, n) {
    var r = n(78),
        o = n(79),
        a = n(13),
        i = n(21),
        c = n(82),
        l = n(23),
        s = Object.prototype.hasOwnProperty;

    e.exports = function (e, t) {
      var n = a(e),
          u = !n && o(e),
          p = !n && !u && i(e),
          f = !n && !u && !p && l(e),
          d = n || u || p || f,
          h = d ? r(e.length, String) : [],
          b = h.length;

      for (var y in e) {
        !t && !s.call(e, y) || d && ("length" == y || p && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || c(y, b)) || h.push(y);
      }

      return h;
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = Array(e); ++n < e;) {
        r[n] = t(n);
      }

      return r;
    };
  }, function (e, t, n) {
    var r = n(80),
        o = n(9),
        a = Object.prototype,
        i = a.hasOwnProperty,
        c = a.propertyIsEnumerable,
        l = r(function () {
      return arguments;
    }()) ? r : function (e) {
      return o(e) && i.call(e, "callee") && !c.call(e, "callee");
    };
    e.exports = l;
  }, function (e, t, n) {
    var r = n(6),
        o = n(9),
        a = "[object Arguments]";

    e.exports = function (e) {
      return o(e) && r(e) == a;
    };
  }, function (e, t) {
    e.exports = function () {
      return !1;
    };
  }, function (e, t) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;

    e.exports = function (e, t) {
      var o = _typeof(e);

      return !!(t = null == t ? n : t) && ("number" == o || "symbol" != o && r.test(e)) && e > -1 && e % 1 == 0 && e < t;
    };
  }, function (e, t, n) {
    var r = n(6),
        o = n(24),
        a = n(9),
        i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function (e) {
      return a(e) && o(e.length) && !!i[r(e)];
    };
  }, function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e(t);
      };
    };
  }, function (e, t, n) {
    (function (e) {
      var r = n(16),
          o = t && !t.nodeType && t,
          a = o && "object" == _typeof(e) && e && !e.nodeType && e,
          i = a && a.exports === o && r.process,
          c = function () {
        try {
          var e = a && a.require && a.require("util").types;

          return e || i && i.binding && i.binding("util");
        } catch (e) {}
      }();

      e.exports = c;
    }).call(this, n(22)(e));
  }, function (e, t, n) {
    var r = n(87),
        o = n(88),
        a = Object.prototype.hasOwnProperty;

    e.exports = function (e) {
      if (!r(e)) return o(e);
      var t = [];

      for (var n in Object(e)) {
        a.call(e, n) && "constructor" != n && t.push(n);
      }

      return t;
    };
  }, function (e, t) {
    var n = Object.prototype;

    e.exports = function (e) {
      var t = e && e.constructor;
      return e === ("function" == typeof t && t.prototype || n);
    };
  }, function (e, t, n) {
    var r = n(89)(Object.keys, Object);
    e.exports = r;
  }, function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return e(t(n));
      };
    };
  }, function (e, t, n) {
    var r = n(15),
        o = n(24);

    e.exports = function (e) {
      return null != e && o(e.length) && !r(e);
    };
  }, function (e, t, n) {
    var r = n(92),
        o = n(11),
        a = n(93),
        i = n(94),
        c = n(95),
        l = n(6),
        s = n(18),
        u = s(r),
        p = s(o),
        f = s(a),
        d = s(i),
        h = s(c),
        b = l;
    (r && "[object DataView]" != b(new r(new ArrayBuffer(1))) || o && "[object Map]" != b(new o()) || a && "[object Promise]" != b(a.resolve()) || i && "[object Set]" != b(new i()) || c && "[object WeakMap]" != b(new c())) && (b = function b(e) {
      var t = l(e),
          n = "[object Object]" == t ? e.constructor : void 0,
          r = n ? s(n) : "";
      if (r) switch (r) {
        case u:
          return "[object DataView]";

        case p:
          return "[object Map]";

        case f:
          return "[object Promise]";

        case d:
          return "[object Set]";

        case h:
          return "[object WeakMap]";
      }
      return t;
    }), e.exports = b;
  }, function (e, t, n) {
    var r = n(3)(n(2), "DataView");
    e.exports = r;
  }, function (e, t, n) {
    var r = n(3)(n(2), "Promise");
    e.exports = r;
  }, function (e, t, n) {
    var r = n(3)(n(2), "Set");
    e.exports = r;
  }, function (e, t, n) {
    var r = n(3)(n(2), "WeakMap");
    e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(97);

    function o() {}

    function a() {}

    a.resetWarningCache = o, e.exports = function () {
      function e(e, t, n, o, a, i) {
        if (i !== r) {
          var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw c.name = "Invariant Violation", c;
        }
      }

      function t() {
        return e;
      }

      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: a,
        resetWarningCache: o
      };
      return n.PropTypes = n, n;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r = n(10),
        o = n.n(r),
        a = n(25),
        i = n.n(a),
        c = n(26),
        l = n.n(c),
        s = n(0),
        u = n.n(s),
        p = n(1),
        f = n.n(p);

    function d(e) {
      return (d = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function h() {
      return (h = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function b(e, t) {
      if (null == e) return {};

      var n,
          r,
          o = function (e, t) {
        if (null == e) return {};
        var n,
            r,
            o = {},
            a = Object.keys(e);

        for (r = 0; r < a.length; r++) {
          n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        }

        return o;
      }(e, t);

      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);

        for (r = 0; r < a.length; r++) {
          n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        }
      }

      return o;
    }

    function y(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function v(e, t) {
      return !t || "object" !== d(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function g(e) {
      return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function x(e, t) {
      return (x = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function m(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var k = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), v(this, g(t).apply(this, arguments));
      }

      var n, r, o;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && x(e, t);
      }(t, e), n = t, (r = [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.children,
              n = e.title,
              r = b(e, ["children", "title"]);
          return f.a.createElement("button", h({
            "aria-label": n,
            title: n,
            type: "button"
          }, r), t);
        }
      }]) && y(n.prototype, r), o && y(n, o), t;
    }(f.a.PureComponent);

    m(k, "propTypes", {
      children: u.a.node.isRequired,
      title: u.a.string
    }), m(k, "defaultProps", {
      title: null
    });
    var O = k,
        j = {
      ALL: "all",
      PARENT: "parent",
      LEAF: "leaf"
    };

    function _(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function w(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function C(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var P = j,
        E = function () {
      function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.props = t, this.flatNodes = n;
      }

      var t, n, r;
      return t = e, (n = [{
        key: "setProps",
        value: function value(e) {
          this.props = e;
        }
      }, {
        key: "clone",
        value: function value() {
          var t = this,
              n = {};
          return Object.keys(this.flatNodes).forEach(function (e) {
            var r = t.flatNodes[e];

            n[e] = function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _(Object(n), !0).forEach(function (t) {
                  w(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
              }

              return e;
            }({}, r);
          }), new e(this.props, n);
        }
      }, {
        key: "getNode",
        value: function value(e) {
          return this.flatNodes[e];
        }
      }, {
        key: "flattenNodes",
        value: function value(e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;

          if (Array.isArray(e) && 0 !== e.length) {
            var o = this.props,
                a = o.disabled,
                i = o.noCascade;
            e.forEach(function (e, o) {
              var c = t.nodeHasChildren(e);
              t.flatNodes[e.value] = {
                label: e.label,
                value: e.value,
                children: e.children,
                parent: n,
                isChild: void 0 !== n.value,
                isParent: c,
                isLeaf: !c,
                showCheckbox: void 0 === e.showCheckbox || e.showCheckbox,
                disabled: t.getDisabledState(e, n, a, i),
                treeDepth: r,
                index: o
              }, t.flattenNodes(e.children, e, r + 1);
            });
          }
        }
      }, {
        key: "nodeHasChildren",
        value: function value(e) {
          return Array.isArray(e.children);
        }
      }, {
        key: "getDisabledState",
        value: function value(e, t, n, r) {
          return !!n || !(r || !t.disabled) || Boolean(e.disabled);
        }
      }, {
        key: "deserializeLists",
        value: function value(e) {
          var t = this,
              n = ["checked", "expanded"];
          Object.keys(this.flatNodes).forEach(function (e) {
            n.forEach(function (n) {
              t.flatNodes[e][n] = !1;
            });
          }), n.forEach(function (n) {
            e[n].forEach(function (e) {
              void 0 !== t.flatNodes[e] && (t.flatNodes[e][n] = !0);
            });
          });
        }
      }, {
        key: "serializeList",
        value: function value(e) {
          var t = this,
              n = [];
          return Object.keys(this.flatNodes).forEach(function (r) {
            t.flatNodes[r][e] && n.push(r);
          }), n;
        }
      }, {
        key: "expandAllNodes",
        value: function value(e) {
          var t = this;
          return Object.keys(this.flatNodes).forEach(function (n) {
            t.flatNodes[n].isParent && (t.flatNodes[n].expanded = e);
          }), this;
        }
      }, {
        key: "toggleChecked",
        value: function value(e, t, n, r) {
          var o = this,
              a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              i = this.flatNodes[e.value],
              c = [P.PARENT, P.ALL].indexOf(n) > -1,
              l = [P.LEAF, P.ALL].indexOf(n) > -1;

          if (i.isLeaf || r) {
            if (e.disabled) return this;
            this.toggleNode(e.value, "checked", t);
          } else c && this.toggleNode(e.value, "checked", t), l && i.children.forEach(function (e) {
            o.toggleChecked(e, t, n, r, !1);
          });

          return a && !r && i.isChild && c && this.toggleParentStatus(i.parent, n), this;
        }
      }, {
        key: "toggleParentStatus",
        value: function value(e, t) {
          var n = this.flatNodes[e.value];
          n.isChild ? (t === P.ALL && this.toggleNode(e.value, "checked", this.isEveryChildChecked(n)), this.toggleParentStatus(n.parent, t)) : this.toggleNode(e.value, "checked", this.isEveryChildChecked(n));
        }
      }, {
        key: "isEveryChildChecked",
        value: function value(e) {
          var t = this;
          return e.children.every(function (e) {
            return t.getNode(e.value).checked;
          });
        }
      }, {
        key: "toggleNode",
        value: function value(e, t, n) {
          return this.flatNodes[e][t] = n, this;
        }
      }]) && C(t.prototype, n), r && C(t, r), e;
    }();

    function N(e) {
      return (N = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function A() {
      return (A = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function S(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function T(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function L(e, t) {
      return !t || "object" !== N(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function R(e) {
      return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function D(e, t) {
      return (D = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function I(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var z = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), L(this, R(t).apply(this, arguments));
      }

      var n, r, o;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && D(e, t);
      }(t, e), n = t, (r = [{
        key: "componentDidMount",
        value: function value() {
          this.updateDeterminateProperty();
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.updateDeterminateProperty();
        }
      }, {
        key: "updateDeterminateProperty",
        value: function value() {
          var e = this.props.indeterminate;
          this.checkbox.indeterminate = e;
        }
      }, {
        key: "render",
        value: function value() {
          var e = this,
              t = function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? S(Object(n), !0).forEach(function (t) {
                I(e, t, n[t]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
            }

            return e;
          }({}, this.props);

          return delete t.indeterminate, f.a.createElement("input", A({}, t, {
            ref: function ref(t) {
              e.checkbox = t;
            },
            type: "checkbox"
          }));
        }
      }]) && T(n.prototype, r), o && T(n, o), t;
    }(f.a.PureComponent);

    I(z, "propTypes", {
      indeterminate: u.a.bool
    }), I(z, "defaultProps", {
      indeterminate: !1
    });
    var q = z,
        F = u.a.shape({
      check: u.a.node,
      uncheck: u.a.node,
      halfCheck: u.a.node,
      expandClose: u.a.node,
      expandOpen: u.a.node,
      expandAll: u.a.node,
      collapseAll: u.a.node,
      parentClose: u.a.node,
      parentOpen: u.a.node,
      leaf: u.a.node
    }),
        M = u.a.shape({
      collapseAll: u.a.string.isRequired,
      expandAll: u.a.string.isRequired,
      toggle: u.a.string.isRequired
    });

    function B(e) {
      return (B = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function U(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function H(e) {
      return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function V(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function W(e, t) {
      return (W = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function $(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var J = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), (n = function (e, t) {
          return !t || "object" !== B(t) && "function" != typeof t ? V(e) : t;
        }(this, H(t).call(this, e))).onCheck = n.onCheck.bind(V(n)), n.onClick = n.onClick.bind(V(n)), n.onExpand = n.onExpand.bind(V(n)), n;
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && W(e, t);
      }(t, e), n = t, (r = [{
        key: "onCheck",
        value: function value() {
          var e = this.props,
              t = e.value,
              n = e.onCheck;
          n({
            value: t,
            checked: this.getCheckState({
              toggle: !0
            })
          });
        }
      }, {
        key: "onClick",
        value: function value() {
          var e = this.props,
              t = e.expandOnClick,
              n = e.isParent,
              r = e.value,
              o = e.onClick;
          n && t && this.onExpand(), o({
            value: r,
            checked: this.getCheckState({
              toggle: !1
            })
          });
        }
      }, {
        key: "onExpand",
        value: function value() {
          var e = this.props,
              t = e.expanded,
              n = e.value,
              r = e.onExpand;
          r({
            value: n,
            expanded: !t
          });
        }
      }, {
        key: "getCheckState",
        value: function value(e) {
          var t = e.toggle,
              n = this.props,
              r = n.checked,
              o = n.optimisticToggle;
          return !(0 !== r || !t) || 1 === r && !t || 2 === r && o;
        }
      }, {
        key: "renderCollapseButton",
        value: function value() {
          var e = this.props,
              t = e.expandDisabled,
              n = e.isLeaf,
              r = e.lang;
          return n ? f.a.createElement("span", {
            className: "rct-collapse"
          }, f.a.createElement("span", {
            className: "rct-icon"
          })) : f.a.createElement(O, {
            className: "rct-collapse rct-collapse-btn",
            disabled: t,
            title: r.toggle,
            onClick: this.onExpand
          }, this.renderCollapseIcon());
        }
      }, {
        key: "renderCollapseIcon",
        value: function value() {
          var e = this.props,
              t = e.expanded,
              n = e.icons,
              r = n.expandClose,
              o = n.expandOpen;
          return t ? o : r;
        }
      }, {
        key: "renderCheckboxIcon",
        value: function value() {
          var e = this.props,
              t = e.checked,
              n = e.icons,
              r = n.uncheck,
              o = n.check,
              a = n.halfCheck;
          return 0 === t ? r : 1 === t ? o : a;
        }
      }, {
        key: "renderNodeIcon",
        value: function value() {
          var e = this.props,
              t = e.expanded,
              n = e.icon,
              r = e.icons,
              o = r.leaf,
              a = r.parentClose,
              i = r.parentOpen,
              c = e.isLeaf;
          return null !== n ? n : c ? o : t ? i : a;
        }
      }, {
        key: "renderBareLabel",
        value: function value(e) {
          var t = this.props,
              n = t.onClick,
              r = t.title,
              o = null !== n;
          return f.a.createElement("span", {
            className: "rct-bare-label",
            title: r
          }, o ? f.a.createElement("span", {
            className: "rct-node-clickable",
            onClick: this.onClick,
            onKeyPress: this.onClick,
            role: "button",
            tabIndex: 0
          }, e) : e);
        }
      }, {
        key: "renderCheckboxLabel",
        value: function value(e) {
          var t = this.props,
              n = t.checked,
              r = t.disabled,
              o = t.title,
              a = t.treeId,
              i = t.value,
              c = null !== t.onClick,
              l = "".concat(a, "-").concat(String(i).split(" ").join("_")),
              s = [f.a.createElement("label", {
            key: 0,
            htmlFor: l,
            title: o
          }, f.a.createElement(q, {
            checked: 1 === n,
            disabled: r,
            id: l,
            indeterminate: 2 === n,
            onClick: this.onCheck,
            onChange: function onChange() {}
          }), f.a.createElement("span", {
            className: "rct-checkbox"
          }, this.renderCheckboxIcon()), c ? null : e)];
          return c && s.push(f.a.createElement("span", {
            key: 1,
            className: "rct-node-clickable",
            onClick: this.onClick,
            onKeyPress: this.onClick,
            role: "link",
            tabIndex: 0
          }, e)), s;
        }
      }, {
        key: "renderLabel",
        value: function value() {
          var e = this.props,
              t = e.label,
              n = e.showCheckbox,
              r = [e.showNodeIcon ? f.a.createElement("span", {
            key: 0,
            className: "rct-node-icon"
          }, this.renderNodeIcon()) : null, f.a.createElement("span", {
            key: 1,
            className: "rct-title"
          }, t)];
          return n ? this.renderCheckboxLabel(r) : this.renderBareLabel(r);
        }
      }, {
        key: "renderChildren",
        value: function value() {
          return this.props.expanded ? this.props.children : null;
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.className,
              n = e.disabled,
              r = e.expanded,
              a = e.isLeaf,
              i = o()({
            "rct-node": !0,
            "rct-node-leaf": a,
            "rct-node-parent": !a,
            "rct-node-expanded": !a && r,
            "rct-node-collapsed": !a && !r,
            "rct-disabled": n
          }, t);
          return f.a.createElement("li", {
            className: i
          }, f.a.createElement("span", {
            className: "rct-text"
          }, this.renderCollapseButton(), this.renderLabel()), this.renderChildren());
        }
      }]) && U(n.prototype, r), a && U(n, a), t;
    }(f.a.Component);

    $(J, "propTypes", {
      checked: u.a.number.isRequired,
      disabled: u.a.bool.isRequired,
      expandDisabled: u.a.bool.isRequired,
      expanded: u.a.bool.isRequired,
      icons: F.isRequired,
      isLeaf: u.a.bool.isRequired,
      isParent: u.a.bool.isRequired,
      label: u.a.node.isRequired,
      lang: M.isRequired,
      optimisticToggle: u.a.bool.isRequired,
      showNodeIcon: u.a.bool.isRequired,
      treeId: u.a.string.isRequired,
      value: u.a.oneOfType([u.a.string, u.a.number]).isRequired,
      onCheck: u.a.func.isRequired,
      onExpand: u.a.func.isRequired,
      children: u.a.node,
      className: u.a.string,
      expandOnClick: u.a.bool,
      icon: u.a.node,
      showCheckbox: u.a.bool,
      title: u.a.string,
      onClick: u.a.func
    }), $(J, "defaultProps", {
      children: null,
      className: null,
      expandOnClick: !1,
      icon: null,
      showCheckbox: !0,
      title: null,
      onClick: function onClick() {}
    });
    var K = J,
        G = u.a.oneOfType([u.a.arrayOf(u.a.string), u.a.arrayOf(u.a.number)]);

    function Y(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function Q(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var X = {
      label: u.a.node.isRequired,
      value: u.a.oneOfType([u.a.string, u.a.number]).isRequired,
      disabled: u.a.bool,
      icon: u.a.node,
      showCheckbox: u.a.bool,
      title: u.a.string
    },
        Z = u.a.oneOfType([u.a.shape(X), u.a.shape(function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Y(Object(n), !0).forEach(function (t) {
          Q(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }({}, X, {
      children: u.a.arrayOf(X).isRequired
    }))]);

    function ee(e) {
      return (ee = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function te(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function ne(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? te(Object(n), !0).forEach(function (t) {
          ce(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function re(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function oe(e) {
      return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function ae(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function ie(e, t) {
      return (ie = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function ce(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var le = function (e) {
      function t(e) {
        var n;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), n = function (e, t) {
          return !t || "object" !== ee(t) && "function" != typeof t ? ae(e) : t;
        }(this, oe(t).call(this, e));
        var r = new E(e);
        return r.flattenNodes(e.nodes), r.deserializeLists({
          checked: e.checked,
          expanded: e.expanded
        }), n.state = {
          id: e.id || "rct-".concat(l()(7)),
          model: r,
          prevProps: e
        }, n.onCheck = n.onCheck.bind(ae(n)), n.onExpand = n.onExpand.bind(ae(n)), n.onNodeClick = n.onNodeClick.bind(ae(n)), n.onExpandAll = n.onExpandAll.bind(ae(n)), n.onCollapseAll = n.onCollapseAll.bind(ae(n)), n;
      }

      var n, r, a;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && ie(e, t);
      }(t, e), n = t, a = [{
        key: "getDerivedStateFromProps",
        value: function value(e, t) {
          var n = t.model,
              r = t.prevProps,
              o = e.disabled,
              a = e.id,
              c = e.nodes,
              l = ne({}, t, {
            prevProps: e
          });
          return n.setProps(e), i()(r.nodes, c) && r.disabled === o || n.flattenNodes(c), null !== a && (l = ne({}, l, {
            id: a
          })), n.deserializeLists({
            checked: e.checked,
            expanded: e.expanded
          }), l;
        }
      }], (r = [{
        key: "onCheck",
        value: function value(e) {
          var t = this.props,
              n = t.checkModel,
              r = t.noCascade,
              o = t.onCheck,
              a = this.state.model.clone(),
              i = a.getNode(e.value);
          a.toggleChecked(e, e.checked, n, r), o(a.serializeList("checked"), ne({}, i, {}, e));
        }
      }, {
        key: "onExpand",
        value: function value(e) {
          var t = this.props.onExpand,
              n = this.state.model.clone(),
              r = n.getNode(e.value);
          n.toggleNode(e.value, "expanded", e.expanded), t(n.serializeList("expanded"), ne({}, r, {}, e));
        }
      }, {
        key: "onNodeClick",
        value: function value(e) {
          (0, this.props.onClick)(ne({}, this.state.model.getNode(e.value), {}, e));
        }
      }, {
        key: "onExpandAll",
        value: function value() {
          this.expandAllNodes();
        }
      }, {
        key: "onCollapseAll",
        value: function value() {
          this.expandAllNodes(!1);
        }
      }, {
        key: "expandAllNodes",
        value: function value() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              t = this.props.onExpand;
          t(this.state.model.clone().expandAllNodes(e).serializeList("expanded"));
        }
      }, {
        key: "determineShallowCheckState",
        value: function value(e, t) {
          var n = this.state.model.getNode(e.value);
          return n.isLeaf || t ? n.checked ? 1 : 0 : this.isEveryChildChecked(e) ? 1 : this.isSomeChildChecked(e) ? 2 : 0;
        }
      }, {
        key: "isEveryChildChecked",
        value: function value(e) {
          var t = this;
          return e.children.every(function (e) {
            return 1 === t.state.model.getNode(e.value).checkState;
          });
        }
      }, {
        key: "isSomeChildChecked",
        value: function value(e) {
          var t = this;
          return e.children.some(function (e) {
            return t.state.model.getNode(e.value).checkState > 0;
          });
        }
      }, {
        key: "renderTreeNodes",
        value: function value(e) {
          var n = this,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = this.props,
              a = o.expandDisabled,
              i = o.expandOnClick,
              c = o.icons,
              l = o.lang,
              s = o.noCascade,
              u = o.onClick,
              p = o.onlyLeafCheckboxes,
              d = o.optimisticToggle,
              h = o.showNodeTitle,
              b = o.showNodeIcon,
              y = this.state,
              v = y.id,
              g = y.model,
              x = t.defaultProps.icons,
              m = e.map(function (e) {
            var t = e.value,
                o = g.getNode(e.value),
                y = o.isParent ? n.renderTreeNodes(e.children, e) : null;
            o.checkState = n.determineShallowCheckState(e, s);
            var m = p ? o.isLeaf : o.showCheckbox;
            return !r.value || g.getNode(r.value).expanded ? f.a.createElement(K, {
              key: t,
              checked: o.checkState,
              className: e.className,
              disabled: o.disabled,
              expandDisabled: a,
              expandOnClick: i,
              expanded: o.expanded,
              icon: e.icon,
              icons: ne({}, x, {}, c),
              label: e.label,
              lang: l,
              optimisticToggle: d,
              isLeaf: o.isLeaf,
              isParent: o.isParent,
              showCheckbox: m,
              showNodeIcon: b,
              title: h ? e.title || e.label : e.title,
              treeId: v,
              value: e.value,
              onCheck: n.onCheck,
              onClick: u && n.onNodeClick,
              onExpand: n.onExpand
            }, y) : null;
          });
          return f.a.createElement("ol", null, m);
        }
      }, {
        key: "renderExpandAll",
        value: function value() {
          var e = this.props,
              t = e.icons,
              n = t.expandAll,
              r = t.collapseAll,
              o = e.lang;
          return e.showExpandAll ? f.a.createElement("div", {
            className: "rct-options"
          }, f.a.createElement(O, {
            className: "rct-option rct-option-expand-all",
            title: o.expandAll,
            onClick: this.onExpandAll
          }, n), f.a.createElement(O, {
            className: "rct-option rct-option-collapse-all",
            title: o.collapseAll,
            onClick: this.onCollapseAll
          }, r)) : null;
        }
      }, {
        key: "renderHiddenInput",
        value: function value() {
          var e = this.props,
              t = e.name,
              n = e.nameAsArray;
          return void 0 === t ? null : n ? this.renderArrayHiddenInput() : this.renderJoinedHiddenInput();
        }
      }, {
        key: "renderArrayHiddenInput",
        value: function value() {
          var e = this.props,
              t = e.checked,
              n = e.name;
          return t.map(function (e) {
            var t = "".concat(n, "[]");
            return f.a.createElement("input", {
              key: e,
              name: t,
              type: "hidden",
              value: e
            });
          });
        }
      }, {
        key: "renderJoinedHiddenInput",
        value: function value() {
          var e = this.props,
              t = e.checked,
              n = e.name,
              r = t.join(",");
          return f.a.createElement("input", {
            name: n,
            type: "hidden",
            value: r
          });
        }
      }, {
        key: "render",
        value: function value() {
          var e,
              t = this.props,
              n = t.disabled,
              r = t.iconsClass,
              a = t.nodes,
              i = t.nativeCheckboxes,
              c = this.state.id,
              l = this.renderTreeNodes(a),
              s = o()((ce(e = {
            "react-checkbox-tree": !0,
            "rct-disabled": n
          }, "rct-icons-".concat(r), !0), ce(e, "rct-native-display", i), e));
          return f.a.createElement("div", {
            className: s,
            id: c
          }, this.renderExpandAll(), this.renderHiddenInput(), l);
        }
      }]) && re(n.prototype, r), a && re(n, a), t;
    }(f.a.Component);

    ce(le, "propTypes", {
      nodes: u.a.arrayOf(Z).isRequired,
      checkModel: u.a.oneOf([j.LEAF, j.ALL]),
      checked: G,
      disabled: u.a.bool,
      expandDisabled: u.a.bool,
      expandOnClick: u.a.bool,
      expanded: G,
      icons: F,
      iconsClass: u.a.string,
      id: u.a.string,
      lang: M,
      name: u.a.string,
      nameAsArray: u.a.bool,
      nativeCheckboxes: u.a.bool,
      noCascade: u.a.bool,
      onlyLeafCheckboxes: u.a.bool,
      optimisticToggle: u.a.bool,
      showExpandAll: u.a.bool,
      showNodeIcon: u.a.bool,
      showNodeTitle: u.a.bool,
      onCheck: u.a.func,
      onClick: u.a.func,
      onExpand: u.a.func
    }), ce(le, "defaultProps", {
      checkModel: j.LEAF,
      checked: [],
      disabled: !1,
      expandDisabled: !1,
      expandOnClick: !1,
      expanded: [],
      icons: {
        check: f.a.createElement("span", {
          className: "rct-icon rct-icon-check"
        }),
        uncheck: f.a.createElement("span", {
          className: "rct-icon rct-icon-uncheck"
        }),
        halfCheck: f.a.createElement("span", {
          className: "rct-icon rct-icon-half-check"
        }),
        expandClose: f.a.createElement("span", {
          className: "rct-icon rct-icon-expand-close"
        }),
        expandOpen: f.a.createElement("span", {
          className: "rct-icon rct-icon-expand-open"
        }),
        expandAll: f.a.createElement("span", {
          className: "rct-icon rct-icon-expand-all"
        }),
        collapseAll: f.a.createElement("span", {
          className: "rct-icon rct-icon-collapse-all"
        }),
        parentClose: f.a.createElement("span", {
          className: "rct-icon rct-icon-parent-close"
        }),
        parentOpen: f.a.createElement("span", {
          className: "rct-icon rct-icon-parent-open"
        }),
        leaf: f.a.createElement("span", {
          className: "rct-icon rct-icon-leaf"
        })
      },
      iconsClass: "fa4",
      id: null,
      lang: {
        collapseAll: "Collapse all",
        expandAll: "Expand all",
        toggle: "Toggle"
      },
      name: void 0,
      nameAsArray: !1,
      nativeCheckboxes: !1,
      noCascade: !1,
      onlyLeafCheckboxes: !1,
      optimisticToggle: !0,
      showExpandAll: !1,
      showNodeIcon: !0,
      showNodeTitle: !1,
      onCheck: function onCheck() {},
      onClick: null,
      onExpand: function onExpand() {}
    });
    t["default"] = le;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./srcjs/checkboxTree.jsx":
/*!********************************!*\
  !*** ./srcjs/checkboxTree.jsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactR */ "reactR");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_checkbox_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-checkbox-tree */ "./node_modules/react-checkbox-tree/lib/index.browser.js");
/* harmony import */ var react_checkbox_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_checkbox_tree__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 //import 'react-checkbox-tree/lib/react-checkbox-tree.css';



function extractValues(nodes) {
  var values = nodes.map(function (node) {
    return node.value;
  });
  nodes.forEach(function (node) {
    var fields = Object.keys(node);

    if (fields.indexOf("children") > -1) {
      values = values.concat(extractValues(node.children));
    }
  });
  return values;
}

var Widget = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Widget, _React$PureComponent);

  var _super = _createSuper(Widget);

  function Widget(props) {
    var _this;

    _classCallCheck(this, Widget);

    _this = _super.call(this, props);
    _this.state = {
      checked: _this.props.checked,
      expanded: []
    };
    return _this;
  }

  _createClass(Widget, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var nchecked = this.props.checked.length;
      var diff = nchecked !== prevProps.checked.length || nchecked !== new Set([].concat(_toConsumableArray(this.props.checked), _toConsumableArray(prevProps.checked))).size;

      if (diff) {
        var checked = this.props.values.filter(function (x) {
          return _this2.props.checked.includes(x);
        });
        this.setState({
          checked: checked
        });
        this.props.setValue(checked);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_checkbox_tree__WEBPACK_IMPORTED_MODULE_2___default.a, {
        iconsClass: "fa5",
        nodes: this.props.nodes,
        checkModel: this.props.checkModel,
        checked: this.state.checked,
        expanded: this.state.expanded,
        onCheck: function onCheck(checked, targetNode) {
          if (_this3.props.single) {
            _this3.props.setValue([targetNode.value]);
          } else {
            _this3.props.setValue(checked);
          }
        },
        onExpand: function onExpand(expanded) {
          return _this3.setState({
            expanded: expanded
          });
        },
        onlyLeafCheckboxes: this.props.onlyLeafCheckboxes,
        showExpandAll: this.props.showExpandAll
      });
    }
  }]);

  return Widget;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

var Input = function Input(_ref) {
  var configuration = _ref.configuration,
      value = _ref.value,
      setValue = _ref.setValue;

  if (configuration.single && value.length > 1) {
    value = value[0];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Widget, {
    nodes: configuration.nodes,
    values: configuration.values,
    single: configuration.single,
    checkModel: configuration.checkModel,
    checked: value,
    setValue: setValue,
    onlyLeafCheckboxes: configuration.onlyLeafCheckboxes,
    showExpandAll: configuration.showExpandAll
  });
};

Object(reactR__WEBPACK_IMPORTED_MODULE_0__["reactShinyInput"])('.checkboxTree', 'shinyCheckboxTree.checkboxTree', Input);

/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ "reactR":
/*!********************************!*\
  !*** external "window.reactR" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.reactR;

/***/ })

/******/ });
//# sourceMappingURL=checkboxTree.js.map