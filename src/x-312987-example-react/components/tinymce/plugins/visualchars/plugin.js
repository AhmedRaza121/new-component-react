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

  function n(t) {
    return function (n) {
      return _typeof(n) === t;
    };
  }
  function i(n) {
    return function () {
      return n;
    };
  }
  function t(n) {
    return n;
  }
  function e() {
    return l;
  }
  var o,
    r = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    u = function u(n) {
      return e = _typeof(t = n), (null === t ? "null" : "object" == e && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == e && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : e) === o;
      var t, e;
    },
    c = n("boolean"),
    a = n("number"),
    s = i(!(o = "string")),
    f = i(!0),
    l = {
      fold: function fold(n, t) {
        return n();
      },
      isSome: s,
      isNone: f,
      getOr: t,
      getOrThunk: d,
      getOrDie: function getOrDie(n) {
        throw new Error(n || "error: getOrDie called on none.");
      },
      getOrNull: i(null),
      getOrUndefined: i(void 0),
      or: t,
      orThunk: d,
      map: e,
      each: function each() {},
      bind: e,
      exists: s,
      forall: f,
      filter: function filter() {
        return l;
      },
      toArray: function toArray() {
        return [];
      },
      toString: i("none()")
    };
  function d(n) {
    return n();
  }
  function m(n, t) {
    for (var e = 0, o = n.length; e < o; e++) t(n[e], e);
  }
  function v(n, t) {
    for (var e = h(n), o = 0, r = e.length; o < r; o++) {
      var i = e[o];
      t(n[i], i);
    }
  }
  var g = function g(e) {
      function n() {
        return r;
      }
      function t(n) {
        return n(e);
      }
      var o = i(e),
        r = {
          fold: function fold(n, t) {
            return t(e);
          },
          isSome: f,
          isNone: s,
          getOr: o,
          getOrThunk: o,
          getOrDie: o,
          getOrNull: o,
          getOrUndefined: o,
          or: n,
          orThunk: n,
          map: function map(n) {
            return g(n(e));
          },
          each: function each(n) {
            n(e);
          },
          bind: t,
          exists: t,
          forall: t,
          filter: function filter(n) {
            return n(e) ? r : l;
          },
          toArray: function toArray() {
            return [e];
          },
          toString: function toString() {
            return "some(" + e + ")";
          }
        };
      return r;
    },
    h = Object.keys;
  function p(n) {
    return n.dom.nodeValue;
  }
  function y(n, t, e) {
    !function (n, t, e) {
      if (!(u(e) || c(e) || a(e))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", e, ":: Element ", n), new Error("Attribute value was not simple");
      n.setAttribute(t, e + "");
    }(n.dom, t, e);
  }
  function b(n, t) {
    n.dom.removeAttribute(t);
  }
  function w(n, t) {
    var e,
      o = null === (e = n.dom.getAttribute(t)) ? void 0 : e;
    return void 0 === o || "" === o ? [] : o.split(" ");
  }
  function T(n) {
    return void 0 !== n.dom.classList;
  }
  function k(n, t) {
    return i = t, 0 < (o = function (n) {
      for (var t = [], e = 0, o = n.length; e < o; e++) {
        var r = n[e];
        r !== i && t.push(r);
      }
      return t;
    }(w(e = n, "class"))).length ? y(e, "class", o.join(" ")) : b(e, "class"), 0;
    var e, i, o;
  }
  function N(n, t) {
    var e = "";
    return v(n, function (n, t) {
      e += t;
    }), new RegExp("[" + e + "]", t ? "g" : "");
  }
  function A(n) {
    return '<span data-mce-bogus="1" class="mce-' + H[n] + '">' + n + "</span>";
  }
  function O(n) {
    var t = p(n);
    return j(n) && void 0 !== t && _.test(t);
  }
  function C(n) {
    return "span" === n.nodeName.toLowerCase() && n.classList.contains("mce-nbsp-wrap");
  }
  function S(f, n) {
    m(K(M.fromDom(n), O), function (n) {
      var t,
        e,
        o,
        r,
        i,
        u = n.dom.parentNode;
      if (C(u)) t = M.fromDom(u), e = U, T(t) ? t.dom.classList.add(e) : (r = e, i = w(o = t, "class").concat([r]), y(o, "class", i.join(" ")));else {
        for (var c, a = f.dom.encode(p(n)).replace(F, A), s = f.dom.create("div", null, a); c = s.lastChild;) f.dom.insertAfter(c, n.dom);
        f.dom.remove(n.dom);
      }
    });
  }
  function D(r, n) {
    m(r.dom.select(I, n), function (n) {
      var t, e, o;
      C(n) ? (t = M.fromDom(n), e = U, T(t) ? t.dom.classList.remove(e) : k(t, e), 0 === (T(o = t) ? o.dom.classList : w(o, "class")).length && b(o, "class")) : r.dom.remove(n, !0);
    });
  }
  function E(n) {
    var t = n.getBody(),
      e = n.selection.getBookmark(),
      o = function (n, t) {
        for (; n.parentNode;) {
          if (n.parentNode === t) return n;
          n = n.parentNode;
        }
      }(n.selection.getNode(), t);
    D(n, o = void 0 !== o ? o : t), S(n, o), n.selection.moveToBookmark(e);
  }
  function L(n, t) {
    var e = n,
      o = t.get();
    e.fire("VisualChars", {
      state: o
    });
    var r = n.getBody();
    (!0 === t.get() ? S : D)(n, r);
  }
  function x(n, t) {
    n.addCommand("mceVisualChars", function () {
      !function (n, t) {
        t.set(!t.get());
        var e = n.selection.getBookmark();
        L(n, t), n.selection.moveToBookmark(e);
      }(n, t);
    });
  }
  function B(e, o) {
    return function (t) {
      function n(n) {
        return t.setActive(n.state);
      }
      return t.setActive(o.get()), e.on("VisualChars", n), function () {
        return e.off("VisualChars", n);
      };
    };
  }
  "undefined" != typeof window || Function("return this;")();
  function P(n) {
    if (null == n) throw new Error("Node cannot be null or undefined");
    return {
      dom: n
    };
  }
  var V,
    j = function j(n) {
      return 3 === n.dom.nodeType;
    },
    M = {
      fromHtml: function fromHtml(n, t) {
        var e = (t || document).createElement("div");
        if (e.innerHTML = n, !e.hasChildNodes() || 1 < e.childNodes.length) throw console.error("HTML does not have a single root node", n), new Error("HTML must have a single root node");
        return P(e.childNodes[0]);
      },
      fromTag: function fromTag(n, t) {
        var e = (t || document).createElement(n);
        return P(e);
      },
      fromText: function fromText(n, t) {
        var e = (t || document).createTextNode(n);
        return P(e);
      },
      fromDom: P,
      fromPoint: function fromPoint(n, t, e) {
        return (null == (o = n.dom.elementFromPoint(t, e)) ? l : g(o)).map(P);
        var o;
      }
    },
    H = {
      "\xa0": "nbsp",
      "\xad": "shy"
    },
    _ = N(H),
    F = N(H, !0),
    I = (V = "", v(H, function (n) {
      V && (V += ","), V += "span.mce-" + n;
    }), V),
    U = "mce-nbsp",
    K = function K(n, t) {
      var e = [];
      return m(function (n, t) {
        for (var e = n.length, o = new Array(e), r = 0; r < e; r++) {
          var i = n[r];
          o[r] = t(i, r);
        }
        return o;
      }(n.dom.childNodes, M.fromDom), function (n) {
        e = (e = t(n) ? e.concat([n]) : e).concat(K(n, t));
      }), e;
    },
    R = tinymce.util.Tools.resolve("tinymce.util.Delay");
  r.add("visualchars", function (n) {
    var t,
      e,
      o,
      r,
      i,
      u,
      c,
      a,
      s,
      f,
      l = (t = n.getParam("visualchars_default_state", !1), e = t, {
        get: function get() {
          return e;
        },
        set: function set(n) {
          e = n;
        }
      });
    function d() {
      return o.execCommand("mceVisualChars");
    }
    return x(n, l), (o = n).ui.registry.addToggleButton("visualchars", {
      tooltip: "Show invisible characters",
      icon: "visualchars",
      onAction: d,
      onSetup: B(o, r = l)
    }), o.ui.registry.addToggleMenuItem("visualchars", {
      text: "Show invisible characters",
      icon: "visualchars",
      onAction: d,
      onSetup: B(o, r)
    }), i = n, u = l, c = R.debounce(function () {
      E(i);
    }, 300), !1 !== i.getParam("forced_root_block") && i.on("keydown", function (n) {
      !0 === u.get() && (13 === n.keyCode ? E(i) : c());
    }), i.on("remove", c.stop), s = l, (a = n).on("init", function () {
      L(a, s);
    }), f = l, {
      isEnabled: function isEnabled() {
        return f.get();
      }
    };
  });
}();
/*__ESM_BODY_END__*/