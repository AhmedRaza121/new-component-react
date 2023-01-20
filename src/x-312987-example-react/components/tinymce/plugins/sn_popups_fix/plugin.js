"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*__ESM_BODY_START__*/
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.10.2 (2021-11-17)
 */
!function () {
  "use strict";

  function d() {}
  function i(n) {
    return function () {
      return n;
    };
  }
  function c(n) {
    return n;
  }
  function n() {
    return a;
  }
  function e(n) {
    return _typeof(n) === t;
  }
  var t,
    o = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    u = i(!(t = "function")),
    f = i(!0),
    a = {
      fold: function fold(n, e) {
        return n();
      },
      isSome: u,
      isNone: f,
      getOr: c,
      getOrThunk: r,
      getOrDie: function getOrDie(n) {
        throw new Error(n || "error: getOrDie called on none.");
      },
      getOrNull: i(null),
      getOrUndefined: i(void 0),
      or: c,
      orThunk: r,
      map: n,
      each: d,
      bind: n,
      exists: u,
      forall: f,
      filter: function filter() {
        return a;
      },
      toArray: function toArray() {
        return [];
      },
      toString: i("none()")
    };
  function r(n) {
    return n();
  }
  function l(n, e) {
    for (var t = 0, o = n.length; t < o; t++) e(n[t], t);
  }
  var s = function s(t) {
      function n() {
        return r;
      }
      function e(n) {
        return n(t);
      }
      var o = i(t),
        r = {
          fold: function fold(n, e) {
            return e(t);
          },
          isSome: f,
          isNone: u,
          getOr: o,
          getOrThunk: o,
          getOrDie: o,
          getOrNull: o,
          getOrUndefined: o,
          or: n,
          orThunk: n,
          map: function map(n) {
            return s(n(t));
          },
          each: function each(n) {
            n(t);
          },
          bind: e,
          exists: e,
          forall: e,
          filter: function filter(n) {
            return n(t) ? r : a;
          },
          toArray: function toArray() {
            return [t];
          },
          toString: function toString() {
            return "some(" + t + ")";
          }
        };
      return r;
    },
    _m = function m() {
      return (_m = Object.assign || function (n) {
        for (var e, t = 1, o = arguments.length; t < o; t++) for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n;
      }).apply(this, arguments);
    };
  function h(n, e, t) {
    if (t || 2 === arguments.length) for (var o, r = 0, i = e.length; r < i; r++) !o && r in e || ((o = o || Array.prototype.slice.call(e, 0, r))[r] = e[r]);
    return n.concat(o || Array.prototype.slice.call(e));
  }
  function p(n) {
    if (null == n) throw new Error("Node cannot be null or undefined");
    return {
      dom: n
    };
  }
  var v = {
    fromHtml: function fromHtml(n, e) {
      var t = (e || document).createElement("div");
      if (t.innerHTML = n, !t.hasChildNodes() || 1 < t.childNodes.length) throw console.error("HTML does not have a single root node", n), new Error("HTML must have a single root node");
      return p(t.childNodes[0]);
    },
    fromTag: function fromTag(n, e) {
      var t = (e || document).createElement(n);
      return p(t);
    },
    fromText: function fromText(n, e) {
      var t = (e || document).createTextNode(n);
      return p(t);
    },
    fromDom: p,
    fromPoint: function fromPoint(n, e, t) {
      return (null == (o = n.dom.elementFromPoint(e, t)) ? a : s(o)).map(p);
      var o;
    }
  };
  function g(e) {
    return function (n) {
      return n.dom.nodeType === e;
    };
  }
  function y(n) {
    return R(n) ? n : v.fromDom(n.dom.ownerDocument);
  }
  function w(n, e) {
    n.dom.appendChild(e.dom);
  }
  function _() {
    P || ((P = v.fromDom(document).dom.createElement("sn-tinymce-hoist")).attachShadow({
      mode: "open"
    }), w(function (n) {
      var e = n.dom.body;
      if (null == e) throw new Error("Body is not available yet");
      return v.fromDom(e);
    }(v.fromDom(document)), v.fromDom(P)));
  }
  function b(n, e) {
    var t,
      o,
      r = v.fromDom(e),
      i = (t = D(r), x(o = t) && null != o.dom.host ? t : v.fromDom(y(t).dom.body)),
      u = n.theme.ui.getRootComponent();
    i.dom.contains(u.element.dom) || j(i, u, w);
  }
  function T(n) {
    b(n, P.shadowRoot);
  }
  function E(n) {
    b(n, n.getElement());
  }
  "undefined" != typeof window || Function("return this;")();
  var P,
    R = g(9),
    x = g(11),
    D = e(Element.prototype.attachShadow) && e(Node.prototype.getRootNode) ? function (n) {
      return v.fromDom(n.dom.getRootNode());
    } : y,
    O = i("alloy.system.attached"),
    N = function N(n) {
      var e, t, o, r, i, u;
      l(n.components(), N), e = n, t = O(), r = (o = e).element, i = t, u = _m({
        target: r
      }, {}), o.getSystem().triggerEvent(i, r, u);
    },
    j = function j(n, e, t) {
      t(n, e.element), l(function (n, e) {
        for (var t = n.length, o = new Array(t), r = 0; r < t; r++) {
          var i = n[r];
          o[r] = e(i, r);
        }
        return o;
      }(e.element.dom.childNodes, v.fromDom), function (n) {
        e.getByDom(n).each(N);
      });
    },
    F = tinymce.util.Tools.resolve("tinymce.dom.StyleSheetLoader"),
    C = tinymce.util.Tools.resolve("tinymce.EditorManager"),
    S = !1,
    k = i("dismiss.popups"),
    M = tinymce.util.Tools.resolve("tinymce.util.Promise"),
    A = {},
    L = {
      exports: A
    };
  !function () {
    var n = this,
      e = function e() {
        var n,
          e,
          t,
          o = {
            exports: {}
          };
        function r() {}
        function i(n) {
          if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof n) throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], s(n, this);
        }
        function u(t, o) {
          for (; 3 === t._state;) t = t._value;
          0 !== t._state ? (t._handled = !0, i._immediateFn(function () {
            var n,
              e = 1 === t._state ? o.onFulfilled : o.onRejected;
            if (null !== e) {
              try {
                n = e(t._value);
              } catch (n) {
                return void f(o.promise, n);
              }
              c(o.promise, n);
            } else (1 === t._state ? c : f)(o.promise, t._value);
          })) : t._deferreds.push(o);
        }
        function c(e, n) {
          try {
            if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (n && ("object" == _typeof(n) || "function" == typeof n)) {
              var t = n.then;
              if (n instanceof i) return e._state = 3, e._value = n, void a(e);
              if ("function" == typeof t) return void s((o = t, r = n, function () {
                o.apply(r, arguments);
              }), e);
            }
            e._state = 1, e._value = n, a(e);
          } catch (n) {
            f(e, n);
          }
          var o, r;
        }
        function f(n, e) {
          n._state = 2, n._value = e, a(n);
        }
        function a(n) {
          2 === n._state && 0 === n._deferreds.length && i._immediateFn(function () {
            n._handled || i._unhandledRejectionFn(n._value);
          });
          for (var e = 0, t = n._deferreds.length; e < t; e++) u(n, n._deferreds[e]);
          n._deferreds = null;
        }
        function l(n, e, t) {
          this.onFulfilled = "function" == typeof n ? n : null, this.onRejected = "function" == typeof e ? e : null, this.promise = t;
        }
        function s(n, e) {
          var t = !1;
          try {
            n(function (n) {
              t || (t = !0, c(e, n));
            }, function (n) {
              t || (t = !0, f(e, n));
            });
          } catch (n) {
            if (t) return;
            t = !0, f(e, n);
          }
        }
        n = o, e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, t = setTimeout, i.prototype["catch"] = function (n) {
          return this.then(null, n);
        }, i.prototype.then = function (n, e) {
          var t = new this.constructor(r);
          return u(this, new l(n, e, t)), t;
        }, i.all = function (n) {
          var c = Array.prototype.slice.call(n);
          return new i(function (r, i) {
            if (0 === c.length) return r([]);
            for (var u = c.length, n = 0; n < c.length; n++) !function e(t, n) {
              try {
                if (n && ("object" == _typeof(n) || "function" == typeof n)) {
                  var o = n.then;
                  if ("function" == typeof o) return o.call(n, function (n) {
                    e(t, n);
                  }, i), 0;
                }
                c[t] = n, 0 == --u && r(c);
              } catch (n) {
                i(n);
              }
            }(n, c[n]);
          });
        }, i.resolve = function (e) {
          return e && "object" == _typeof(e) && e.constructor === i ? e : new i(function (n) {
            n(e);
          });
        }, i.reject = function (t) {
          return new i(function (n, e) {
            e(t);
          });
        }, i.race = function (r) {
          return new i(function (n, e) {
            for (var t = 0, o = r.length; t < o; t++) r[t].then(n, e);
          });
        }, i._immediateFn = "function" == typeof setImmediate ? function (n) {
          setImmediate(n);
        } : function (n) {
          t(n, 0);
        }, i._unhandledRejectionFn = function (n) {
          "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", n);
        }, i._setImmediateFn = function (n) {
          i._immediateFn = n;
        }, i._setUnhandledRejectionFn = function (n) {
          i._unhandledRejectionFn = n;
        }, n.exports ? n.exports = i : e.Promise || (e.Promise = i);
        var d = o.exports;
        return {
          boltExport: ("undefined" != typeof window ? window : Function("return this;")()).Promise || d
        };
      };
    "object" == _typeof(A) && void 0 !== L ? L.exports = e() : (n = "undefined" != typeof globalThis ? globalThis : n || self).EphoxContactWrapper = e();
  }();
  var U,
    H,
    I,
    B,
    W = L.exports.boltExport,
    q = 0,
    z = new WeakMap(),
    G = new Map(),
    J = (U = function U(u) {
      return new M(function () {
        for (var n, e, t = 0, o = Array.from(G.entries()); t < o.length; t++) {
          var r = o[t],
            i = r[0];
          0 <= r[1].indexOf(u) && (n = i, e = k(), n.theme.ui.getRootComponent().broadcastOn([e], {
            target: n.theme.ui.getRootComponent().element
          }), E(i));
        }
      });
    }, I = null, B = !100, K.stop = function () {
      B = !0, clearTimeout(I);
    }, K);
  function K() {
    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
    var t = this;
    return H = !!I, new W(function (e) {
      B = !1, clearTimeout(I), I = setTimeout(function () {
        I = null, H && U.apply(t, n).then(function (n) {
          return !B && e(n);
        });
      }, 100), H || U.apply(t, n).then(function (n) {
        return !B && e(n);
      });
    });
  }
  function Q(n) {
    var e = (n.composedPath ? n.composedPath() : n.path)[0];
    J(e);
  }
  function V(i) {
    var u = i.getContainer();
    new M(function (t) {
      var o = "sn-tinymce-findAncestors" + q++ + ("s" + new Date().getTime().toString(36) + n() + n() + n()),
        r = function r(n) {
          window.removeEventListener(o, r);
          var e = n.composedPath ? n.composedPath() : n.path;
          t(h(h([], e.filter(function (n) {
            return n !== u && n.nodeType === Node.ELEMENT_NODE;
          }), !0), [document, window], !1));
        };
      function n() {
        return Math.round(4294967295 * Math.random()).toString(36);
      }
      window.addEventListener(o, r);
      var e = new window.CustomEvent(o, {
        bubbles: !0,
        composed: !0,
        cancelable: !1
      });
      u.dispatchEvent(e);
    }).then(function (n) {
      for (var e = 0, t = h(h([], n.map(function (n) {
          return n.shadowRoot;
        }).filter(c), !0), [window], !1); e < t.length; e++) {
        var o = t[e],
          r = z.get(o);
        r || (o.addEventListener("scroll", Q, !0), r = new Set(), z.set(o, r)), r.add(i);
      }
      G.set(i, n);
    });
  }
  o.add("sn_popups_fix", function (s) {
    s.on("init", function () {
      var t,
        o,
        n,
        e,
        r,
        i,
        u,
        c,
        f,
        a,
        l = s;
      _(), n = l, S || (e = P.shadowRoot, r = F(e, {
        contentCssCors: n.getParam("content_css_cors"),
        referrerPolicy: n.getParam("referrer_policy", "", "string")
      }), f = (u = n).getParam("skin"), a = u.getParam("skin_url"), !1 !== f && (c = f || "oxide", a = a ? u.documentBaseURI.toAbsolute(a) : C.baseURL + "/skins/ui/" + c), i = a + "/skin.min.css", !1 === n.getParam("skin") == 0 && r.load(i, d, d), S = !0), function (n) {
        for (var e = 0, t = h([], n.getContainer().querySelectorAll('button.tox-tbtn--select[aria-haspopup="true"]'), !0); e < t.length; e++) t[e].addEventListener("click", function () {
          T(n);
        });
        n.on("click focus", function () {
          E(n);
        });
      }(s), V(s), o = (t = s).windowManager.open, t.windowManager.open = function () {
        for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
        return T(t), o.apply(t, n);
      }, t.on("CloseWindow", function () {
        E(t);
      });
    }), s.on("remove", function () {
      !function (n) {
        n.theme.ui.getRootComponent().destroy();
        var e = C.get();
        (0 === e.length || 1 === e.length && e[0] === n) && (P.remove(), P = null, S = !1);
      }(s), function (n) {
        for (var e = 0, t = h(h([], G.get(n).map(function (n) {
            return n.shadowRoot;
          }).filter(c), !0), [window], !1); e < t.length; e++) {
          var o = t[e],
            r = z.get(o);
          null != r && r["delete"](n), r && 0 !== r.size || (o.removeEventListener("scroll", Q, !0), z["delete"](o));
        }
        G["delete"](n);
      }(s);
    });
  });
}();
/*__ESM_BODY_END__*/