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

  function e(r) {
    return function (e) {
      return t = _typeof(n = e), (null === n ? "null" : "object" == t && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : t) === r;
      var n, t;
    };
  }
  function n(n) {
    return function (e) {
      return _typeof(e) === n;
    };
  }
  function t(n) {
    return function (e) {
      return n === e;
    };
  }
  function l(e) {
    return !(null == e);
  }
  function E() {}
  function C(e) {
    return function () {
      return e;
    };
  }
  function S(e) {
    return e;
  }
  function r(e, n) {
    return e === n;
  }
  var T = e("string"),
    g = e("object"),
    a = e("array"),
    h = t(null),
    o = n("boolean"),
    u = t(void 0),
    c = n("function"),
    f = n("number");
  function P(r) {
    for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      var t = o.concat(e);
      return r.apply(null, t);
    };
  }
  function p(n) {
    return function (e) {
      return !n(e);
    };
  }
  function i() {
    return s;
  }
  var v = C(!1),
    x = C(!0),
    s = {
      fold: function fold(e, n) {
        return e();
      },
      isSome: v,
      isNone: x,
      getOr: S,
      getOrThunk: m,
      getOrDie: function getOrDie(e) {
        throw new Error(e || "error: getOrDie called on none.");
      },
      getOrNull: C(null),
      getOrUndefined: C(void 0),
      or: S,
      orThunk: m,
      map: i,
      each: E,
      bind: i,
      exists: v,
      forall: x,
      filter: function filter() {
        return s;
      },
      toArray: function toArray() {
        return [];
      },
      toString: C("none()")
    };
  function m(e) {
    return e();
  }
  function y(e, n) {
    return -1 < G.call(e, n);
  }
  function R(e, n) {
    for (var t = 0, r = e.length; t < r; t++) if (n(e[t], t)) return !0;
    return !1;
  }
  function D(e, n) {
    for (var t = [], r = 0; r < e; r++) t.push(n(r));
    return t;
  }
  function O(e, n) {
    for (var t = e.length, r = new Array(t), o = 0; o < t; o++) {
      var u = e[o];
      r[o] = n(u, o);
    }
    return r;
  }
  function A(e, n) {
    for (var t = 0, r = e.length; t < r; t++) n(e[t], t);
  }
  function d(e, n) {
    for (var t = [], r = [], o = 0, u = e.length; o < u; o++) {
      var i = e[o];
      (n(i, o) ? t : r).push(i);
    }
    return {
      pass: t,
      fail: r
    };
  }
  function k(e, n) {
    for (var t = [], r = 0, o = e.length; r < o; r++) {
      var u = e[r];
      n(u, r) && t.push(u);
    }
    return t;
  }
  function I(e, r, o) {
    return function (e) {
      for (var n, t = e.length - 1; 0 <= t; t--) n = e[t], o = r(o, n, t);
    }(e), o;
  }
  function B(e, t, r) {
    return A(e, function (e, n) {
      r = t(r, e, n);
    }), r;
  }
  function w(e, n) {
    return function (e, n, t) {
      for (var r = 0, o = e.length; r < o; r++) {
        var u = e[r];
        if (n(u, r)) return q.some(u);
        if (t(u, r)) break;
      }
      return q.none();
    }(e, n, v);
  }
  function b(e, n) {
    for (var t = 0, r = e.length; t < r; t++) if (n(e[t], t)) return q.some(t);
    return q.none();
  }
  function M(e) {
    for (var n = [], t = 0, r = e.length; t < r; ++t) {
      if (!a(e[t])) throw new Error("Arr.flatten item " + t + " was not an array, input: " + e);
      $.apply(n, e[t]);
    }
    return n;
  }
  function N(e, n) {
    return M(O(e, n));
  }
  function z(e, n) {
    for (var t = 0, r = e.length; t < r; ++t) if (!0 !== n(e[t], t)) return !1;
    return !0;
  }
  function L(e, n) {
    for (var t = {}, r = 0, o = e.length; r < o; r++) {
      var u = e[r];
      t[String(u)] = n(u, r);
    }
    return t;
  }
  function _(e) {
    return [e];
  }
  function W(e, n) {
    return 0 <= n && n < e.length ? q.some(e[n]) : q.none();
  }
  function j(e) {
    return W(e, 0);
  }
  function F(e) {
    return W(e, e.length - 1);
  }
  function H(e, n) {
    for (var t = 0; t < e.length; t++) {
      var r = n(e[t], t);
      if (r.isSome()) return r;
    }
    return q.none();
  }
  var V = function V(t) {
      function e() {
        return o;
      }
      function n(e) {
        return e(t);
      }
      var r = C(t),
        o = {
          fold: function fold(e, n) {
            return n(t);
          },
          isSome: x,
          isNone: v,
          getOr: r,
          getOrThunk: r,
          getOrDie: r,
          getOrNull: r,
          getOrUndefined: r,
          or: e,
          orThunk: e,
          map: function map(e) {
            return V(e(t));
          },
          each: function each(e) {
            e(t);
          },
          bind: n,
          exists: n,
          forall: n,
          filter: function filter(e) {
            return e(t) ? o : s;
          },
          toArray: function toArray() {
            return [t];
          },
          toString: function toString() {
            return "some(" + t + ")";
          }
        };
      return o;
    },
    q = {
      some: V,
      none: i,
      from: function from(e) {
        return null == e ? s : V(e);
      }
    },
    U = Array.prototype.slice,
    G = Array.prototype.indexOf,
    $ = Array.prototype.push,
    _K = function K() {
      return (_K = Object.assign || function (e) {
        for (var n, t = 1, r = arguments.length; t < r; t++) for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        return e;
      }).apply(this, arguments);
    };
  function X(e, n, t) {
    if (t || 2 === arguments.length) for (var r, o = 0, u = n.length; o < u; o++) !r && o in n || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
    return e.concat(r || Array.prototype.slice.call(n));
  }
  function Y(t) {
    var r,
      o = !1;
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return o || (o = !0, r = t.apply(null, e)), r;
    };
  }
  function J(e, n) {
    var t = String(n).toLowerCase();
    return w(e, function (e) {
      return e.search(t);
    });
  }
  function Q(e, n, t) {
    return "" === n || e.length >= n.length && e.substr(t, t + n.length) === n;
  }
  function Z(e, n) {
    return -1 !== e.indexOf(n);
  }
  function ee(e, n) {
    return Q(e, n, e.length - n.length);
  }
  function ne(e) {
    return 0 < e.length;
  }
  function te(n) {
    return function (e) {
      return Z(e, n);
    };
  }
  function re(e) {
    return window.matchMedia(e).matches;
  }
  function oe(e, n) {
    var t = e.dom;
    if (1 !== t.nodeType) return !1;
    var r = t;
    if (void 0 !== r.matches) return r.matches(n);
    if (void 0 !== r.msMatchesSelector) return r.msMatchesSelector(n);
    if (void 0 !== r.webkitMatchesSelector) return r.webkitMatchesSelector(n);
    if (void 0 !== r.mozMatchesSelector) return r.mozMatchesSelector(n);
    throw new Error("Browser lacks native selectors");
  }
  function ue(e) {
    return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount;
  }
  function ie(e, n) {
    var t = void 0 === n ? document : n.dom;
    return ue(t) ? q.none() : q.from(t.querySelector(e)).map(Ve.fromDom);
  }
  function ce(e, n) {
    return e.dom === n.dom;
  }
  function le(e, n) {
    return He().browser.isIE() ? (t = e.dom, r = n.dom, o = Node.DOCUMENT_POSITION_CONTAINED_BY, 0 != (t.compareDocumentPosition(r) & o)) : (u = e.dom) !== (i = n.dom) && u.contains(i);
    var t, r, o, u, i;
  }
  function ae(e, n) {
    for (var t = Ue(e), r = 0, o = t.length; r < o; r++) {
      var u = t[r];
      n(e[u], u);
    }
  }
  function fe(e, t) {
    return $e(e, function (e, n) {
      return {
        k: n,
        v: t(e, n)
      };
    });
  }
  function se(e, n) {
    var t = {},
      r = n,
      o = t,
      u = function u(e, n) {
        o[n] = e;
      },
      i = E;
    return ae(e, function (e, n) {
      (r(e, n) ? u : i)(e, n);
    }), t;
  }
  function me(e, t) {
    var r = [];
    return ae(e, function (e, n) {
      r.push(t(e, n));
    }), r;
  }
  function de(e) {
    return me(e, S);
  }
  function ge(e) {
    return Ue(e).length;
  }
  function pe(e, n) {
    return Ke(e, n) ? q.from(e[n]) : q.none();
  }
  function be(e, n) {
    return Ke(e, n) && void 0 !== e[n] && null !== e[n];
  }
  function he(e, n, t) {
    return {
      element: e,
      rowspan: n,
      colspan: t
    };
  }
  function ve(e, n, t) {
    return {
      element: e,
      cells: n,
      section: t
    };
  }
  function we(e, n, t) {
    return {
      element: e,
      isNew: n,
      isLocked: t
    };
  }
  function ye(e, n, t, r) {
    return {
      element: e,
      cells: n,
      section: t,
      isNew: r
    };
  }
  function Ce() {
    return De(0, 0);
  }
  function Se(e) {
    function n(e) {
      return function () {
        return t === e;
      };
    }
    var t = e.current,
      r = e.version;
    return {
      current: t,
      version: r,
      isEdge: n("Edge"),
      isChrome: n("Chrome"),
      isIE: n("IE"),
      isOpera: n("Opera"),
      isFirefox: n(Me),
      isSafari: n("Safari")
    };
  }
  function Te(e) {
    function n(e) {
      return function () {
        return t === e;
      };
    }
    var t = e.current,
      r = e.version;
    return {
      current: t,
      version: r,
      isWindows: n(Ne),
      isiOS: n("iOS"),
      isAndroid: n(ze),
      isOSX: n("OSX"),
      isLinux: n("Linux"),
      isSolaris: n(Le),
      isFreeBSD: n(_e),
      isChromeOS: n(We)
    };
  }
  function xe(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  }
  var Re,
    De = function De(e, n) {
      return {
        major: e,
        minor: n
      };
    },
    Oe = {
      nu: De,
      detect: function detect(e, n) {
        var t,
          r,
          o = String(n).toLowerCase();
        return 0 === e.length ? Ce() : (r = function (e, n) {
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if (r.test(n)) return r;
          }
        }(e, t = o)) ? De(u(1), u(2)) : {
          major: 0,
          minor: 0
        };
        function u(e) {
          return Number(t.replace(r, "$" + e));
        }
      },
      unknown: Ce
    },
    Ae = function Ae(e, n) {
      return Q(e, n, 0);
    },
    ke = (Re = /^\s+|\s+$/g, function (e) {
      return e.replace(Re, "");
    }),
    Ie = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
    Be = {
      browsers: C([{
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function search(e) {
          return Z(e, "edge/") && Z(e, "chrome") && Z(e, "safari") && Z(e, "applewebkit");
        }
      }, {
        name: "Chrome",
        brand: "Chromium",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ie],
        search: function search(e) {
          return Z(e, "chrome") && !Z(e, "chromeframe");
        }
      }, {
        name: "IE",
        versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
        search: function search(e) {
          return Z(e, "msie") || Z(e, "trident");
        }
      }, {
        name: "Opera",
        versionRegexes: [Ie, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: te("opera")
      }, {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: te("firefox")
      }, {
        name: "Safari",
        versionRegexes: [Ie, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: function search(e) {
          return (Z(e, "safari") || Z(e, "mobile/")) && Z(e, "applewebkit");
        }
      }]),
      oses: C([{
        name: "Windows",
        search: te("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      }, {
        name: "iOS",
        search: function search(e) {
          return Z(e, "iphone") || Z(e, "ipad");
        },
        versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
      }, {
        name: "Android",
        search: te("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      }, {
        name: "OSX",
        search: te("mac os x"),
        versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
      }, {
        name: "Linux",
        search: te("linux"),
        versionRegexes: []
      }, {
        name: "Solaris",
        search: te("sunos"),
        versionRegexes: []
      }, {
        name: "FreeBSD",
        search: te("freebsd"),
        versionRegexes: []
      }, {
        name: "ChromeOS",
        search: te("cros"),
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
      }])
    },
    Me = "Firefox",
    Ee = function Ee() {
      return Se({
        current: void 0,
        version: Oe.unknown()
      });
    },
    Pe = Se,
    Ne = (C("Edge"), C("Chrome"), C("IE"), C("Opera"), C(Me), C("Safari"), "Windows"),
    ze = "Android",
    Le = "Solaris",
    _e = "FreeBSD",
    We = "ChromeOS",
    je = function je() {
      return Te({
        current: void 0,
        version: Oe.unknown()
      });
    },
    Fe = Te,
    He = (C(Ne), C("iOS"), C(ze), C("Linux"), C("OSX"), C(Le), C(_e), C(We), Y(function () {
      return e = navigator.userAgent, n = q.from(navigator.userAgentData), t = re, p = Be.browsers(), b = Be.oses(), h = n.bind(function (e) {
        return r = p, H(e.brands, function (n) {
          var t = n.brand.toLowerCase();
          return w(r, function (e) {
            var n;
            return t === (null === (n = e.brand) || void 0 === n ? void 0 : n.toLowerCase());
          }).map(function (e) {
            return {
              current: e.name,
              version: Oe.nu(parseInt(n.version, 10), 0)
            };
          });
        });
        var r;
      }).orThunk(function () {
        return J(p, t = e).map(function (e) {
          var n = Oe.detect(e.versionRegexes, t);
          return {
            current: e.name,
            version: n
          };
        });
        var t;
      }).fold(Ee, Pe), v = J(b, r = e).map(function (e) {
        var n = Oe.detect(e.versionRegexes, r);
        return {
          current: e.name,
          version: n
        };
      }).fold(je, Fe), {
        browser: h,
        os: v,
        deviceType: (u = h, i = e, c = t, l = (o = v).isiOS() && !0 === /ipad/i.test(i), a = o.isiOS() && !l, s = (f = o.isiOS() || o.isAndroid()) || c("(pointer:coarse)"), m = l || !a && f && c("(min-device-width:768px)"), d = a || f && !m, g = u.isSafari() && o.isiOS() && !1 === /safari/i.test(i), {
          isiPad: C(l),
          isiPhone: C(a),
          isTablet: C(m),
          isPhone: C(d),
          isTouch: C(s),
          isAndroid: o.isAndroid,
          isiOS: o.isiOS,
          isWebView: C(g),
          isDesktop: C(!d && !m && !g)
        })
      };
      var e, n, t, r, o, u, i, c, l, a, f, s, m, d, g, p, b, h, v;
    })),
    Ve = {
      fromHtml: function fromHtml(e, n) {
        var t = (n || document).createElement("div");
        if (t.innerHTML = e, !t.hasChildNodes() || 1 < t.childNodes.length) throw console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
        return xe(t.childNodes[0]);
      },
      fromTag: function fromTag(e, n) {
        var t = (n || document).createElement(e);
        return xe(t);
      },
      fromText: function fromText(e, n) {
        var t = (n || document).createTextNode(e);
        return xe(t);
      },
      fromDom: xe,
      fromPoint: function fromPoint(e, n, t) {
        return q.from(e.dom.elementFromPoint(n, t)).map(xe);
      }
    },
    qe = oe,
    Ue = Object.keys,
    Ge = Object.hasOwnProperty,
    $e = function $e(e, r) {
      var o = {};
      return ae(e, function (e, n) {
        var t = r(e, n);
        o[t.k] = t.v;
      }), o;
    },
    Ke = function Ke(e, n) {
      return Ge.call(e, n);
    },
    Xe = ["tfoot", "thead", "tbody", "colgroup"];
  function Ye(e) {
    return e.dom.nodeName.toLowerCase();
  }
  function Je(e) {
    return e.dom.nodeType;
  }
  function Qe(n) {
    return function (e) {
      return Je(e) === n;
    };
  }
  function Ze(e) {
    return 8 === Je(e) || "#comment" === Ye(e);
  }
  function en(n) {
    return function (e) {
      return gn(e) && Ye(e) === n;
    };
  }
  function nn(e) {
    return Ve.fromDom(e.dom.ownerDocument);
  }
  function tn(e) {
    return bn(e) ? e : nn(e);
  }
  function rn(e) {
    return q.from(e.dom.parentNode).map(Ve.fromDom);
  }
  function on(e, n) {
    for (var t = c(n) ? n : v, r = e.dom, o = []; null !== r.parentNode && void 0 !== r.parentNode;) {
      var u = r.parentNode,
        i = Ve.fromDom(u);
      if (o.push(i), !0 === t(i)) break;
      r = u;
    }
    return o;
  }
  function un(e) {
    return q.from(e.dom.previousSibling).map(Ve.fromDom);
  }
  function cn(e) {
    return q.from(e.dom.nextSibling).map(Ve.fromDom);
  }
  function ln(e) {
    return O(e.dom.childNodes, Ve.fromDom);
  }
  function an(e, n) {
    var t = e.dom.childNodes;
    return q.from(t[n]).map(Ve.fromDom);
  }
  function fn(e) {
    return Ve.fromDom(e.dom.host);
  }
  function sn(e, n, t) {
    return r = function r(e) {
      return oe(e, n);
    }, k(on(e, t), r);
    var r;
  }
  function mn(e, n) {
    return t = function t(e) {
      return oe(e, n);
    }, k(ln(e), t);
    var t;
  }
  function dn(e, n) {
    return ue(t = void 0 === e ? document : e.dom) ? [] : O(t.querySelectorAll(n), Ve.fromDom);
    var t;
  }
  "undefined" != typeof window || Function("return this;")();
  var gn = Qe(1),
    pn = Qe(3),
    bn = Qe(9),
    hn = Qe(11),
    vn = c(Element.prototype.attachShadow) && c(Node.prototype.getRootNode),
    wn = C(vn),
    yn = vn ? function (e) {
      return Ve.fromDom(e.dom.getRootNode());
    } : tn,
    Cn = function Cn(e) {
      return l(e.dom.shadowRoot);
    },
    Sn = function Sn(e) {
      var n = pn(e) ? e.dom.parentNode : e.dom;
      if (null == n || null === n.ownerDocument) return !1;
      var t,
        r,
        o,
        u,
        i,
        c = n.ownerDocument;
      return o = Ve.fromDom(n), i = yn(o), (hn(u = i) && l(u.dom.host) ? q.some(i) : q.none()).fold(function () {
        return c.body.contains(n);
      }, (t = Sn, r = fn, function (e) {
        return t(r(e));
      }));
    },
    Tn = function Tn(e) {
      var n = e.dom.body;
      if (null == n) throw new Error("Body is not available yet");
      return Ve.fromDom(n);
    },
    xn = function xn(e, n) {
      var t = [];
      return A(ln(e), function (e) {
        t = (t = n(e) ? t.concat([e]) : t).concat(xn(e, n));
      }), t;
    };
  function Rn(e, n, t, r, o) {
    return e(t, r) ? q.some(t) : c(o) && o(t) ? q.none() : n(t, r, o);
  }
  function Dn(e, n, t) {
    for (var r = e.dom, o = c(t) ? t : v; r.parentNode;) {
      var r = r.parentNode,
        u = Ve.fromDom(r);
      if (n(u)) return q.some(u);
      if (o(u)) break;
    }
    return q.none();
  }
  function On(e, n, t) {
    return Dn(e, function (e) {
      return oe(e, n);
    }, t);
  }
  function An(e, n) {
    return t = function t(e) {
      return oe(e, n);
    }, w(e.dom.childNodes, function (e) {
      return t(Ve.fromDom(e));
    }).map(Ve.fromDom);
    var t;
  }
  function kn(e, n) {
    return ie(n, e);
  }
  function In(e, n, t) {
    return Rn(oe, On, e, n, t);
  }
  function Bn(e, n, t) {
    if (!(T(t) || o(t) || f(t))) throw console.error("Invalid call to Attribute.set. Key ", n, ":: Value ", t, ":: Element ", e), new Error("Attribute value was not simple");
    e.setAttribute(n, t + "");
  }
  function Mn(e, n, t) {
    Bn(e.dom, n, t);
  }
  function En(e, n) {
    var t = e.dom;
    ae(n, function (e, n) {
      Bn(t, n, e);
    });
  }
  function Pn(e, n) {
    var t = e.dom.getAttribute(n);
    return null === t ? void 0 : t;
  }
  function Nn(e, n) {
    return q.from(Pn(e, n));
  }
  function zn(e) {
    return B(e.dom.attributes, function (e, n) {
      return e[n.name] = n.value, e;
    }, {});
  }
  function Ln(e, n, t) {
    return void 0 === t && (t = r), e.exists(function (e) {
      return t(e, n);
    });
  }
  function _n(e) {
    for (var n = [], t = function t(e) {
        n.push(e);
      }, r = 0; r < e.length; r++) e[r].each(t);
    return n;
  }
  function Wn(e, n, t) {
    return e.isSome() && n.isSome() ? q.some(t(e.getOrDie(), n.getOrDie())) : q.none();
  }
  function jn(e, n) {
    return e ? q.some(n) : q.none();
  }
  function Fn(e) {
    return void 0 !== e.style && c(e.style.getPropertyValue);
  }
  function Hn(e, n, t) {
    if (!T(t)) throw console.error("Invalid call to CSS.set. Property ", n, ":: Value ", t, ":: Element ", e), new Error("CSS value must be a string: " + t);
    Fn(e) && e.style.setProperty(n, t);
  }
  function Vn(e, n, t) {
    Hn(e.dom, n, t);
  }
  function qn(e, n) {
    var t = e.dom;
    ae(n, function (e, n) {
      Hn(t, n, e);
    });
  }
  function Un(e, n) {
    var t = e.dom,
      r = window.getComputedStyle(t).getPropertyValue(n);
    return "" !== r || Sn(e) ? r : jt(t, n);
  }
  function Gn(e, n) {
    var t = e.dom,
      r = jt(t, n);
    return q.from(r).filter(function (e) {
      return 0 < e.length;
    });
  }
  function $n(e, n) {
    var t,
      r = n;
    Fn(t = e.dom) && t.style.removeProperty(r), Ln(Nn(e, "style").map(ke), "") && Wt(e, "style");
  }
  function Kn(e, n, t) {
    return void 0 === t && (t = 0), Nn(e, n).map(function (e) {
      return parseInt(e, 10);
    }).getOr(t);
  }
  function Xn(e, n) {
    return Kn(e, n, 1);
  }
  function Yn(e) {
    return en("col")(e) ? 1 < Kn(e, "span", 1) : 1 < Xn(e, "colspan");
  }
  function Jn(e) {
    return 1 < Xn(e, "rowspan");
  }
  function Qn(e, n) {
    return parseInt(Un(e, n), 10);
  }
  function Zn(e, n) {
    return Vt(e, n, x);
  }
  function et(e, n) {
    return t = ["td", "th"], (o = void 0 === (o = n) ? v : n)(r = e) ? q.none() : y(t, Ye(r)) ? q.some(r) : On(r, t.join(","), function (e) {
      return oe(e, "table") || o(e);
    });
    var t, r, o;
  }
  function nt(e) {
    return Zn(e, "th,td");
  }
  function tt(e) {
    return oe(e, "colgroup") ? mn(e, "col") : N(qt(e), function (e) {
      return mn(e, "col");
    });
  }
  function rt(e, n) {
    return In(e, "table", n);
  }
  function ot(e) {
    return Zn(e, "tr");
  }
  function ut(e, t) {
    return O(e, function (e) {
      if ("colgroup" !== Ye(e)) return ve(e, n = O(nt(e), function (e) {
        return he(e, Kn(e, "rowspan", 1), Kn(e, "colspan", 1));
      }), t(e));
      var n = O(tt(e), function (e) {
        return he(e, 1, Kn(e, "span", 1));
      });
      return ve(e, n, "colgroup");
    });
  }
  function it(e) {
    return rn(e).map(function (e) {
      var n = Ye(e);
      return y(Xe, n) ? n : "tbody";
    }).getOr("tbody");
  }
  function ct(e) {
    var n = ot(e);
    return ut(X(X([], qt(e), !0), n, !0), it);
  }
  function lt(e, n, t) {
    var r = e.cells,
      o = r.slice(0, n),
      u = r.slice(n),
      i = o.concat(t).concat(u);
    return Ut(e, i);
  }
  function at(e, n, t) {
    return lt(e, n, [t]);
  }
  function ft(e, n, t) {
    e.cells[n] = t;
  }
  function st(e, n) {
    return e.cells[n];
  }
  function mt(e, n) {
    return st(e, n).element;
  }
  function dt(e) {
    return e.cells.length;
  }
  function gt(e) {
    var n = d(e, function (e) {
      return "colgroup" === e.section;
    });
    return {
      rows: n.fail,
      cols: n.pass
    };
  }
  function pt(e, n, t) {
    var r = O(e.cells, t);
    return ye(n(e.element), r, e.section, !0);
  }
  function bt(e) {
    return Nn(e, Gt).bind(function (e) {
      return q.from(e.match(/\d+/g));
    }).map(function (e) {
      return L(e, x);
    });
  }
  function ht(e) {
    var n,
      t = me(B(gt(e).rows, function (t, e) {
        return A(e.cells, function (e, n) {
          e.isLocked && (t[n] = !0);
        }), t;
      }, {}), function (e, n) {
        return parseInt(n, 10);
      });
    return (n = U.call(t, 0)).sort(void 0), n;
  }
  function vt(e) {
    var l = {},
      n = [],
      a = j(e).map(function (e) {
        return e.element;
      }).bind(rt).bind(bt).getOr({}),
      t = 0,
      f = 0,
      s = 0,
      r = d(e, function (e) {
        return "colgroup" === e.section;
      }),
      o = r.pass;
    A(r.fail, function (e) {
      var c = [];
      A(e.cells, function (e) {
        for (var n = 0; void 0 !== l[s + "," + n];) n++;
        for (var t = be(a, n.toString()), r = {
            element: e.element,
            rowspan: e.rowspan,
            colspan: e.colspan,
            row: s,
            column: n,
            isLocked: t
          }, o = 0; o < e.colspan; o++) for (var u = 0; u < e.rowspan; u++) {
          var i = n + o;
          l[s + u + "," + i] = r, f = Math.max(f, i + 1);
        }
        c.push(r);
      }), t++, n.push(ve(e.element, c, e.section)), s++;
    });
    var u = F(o).map(function (e) {
        var o,
          u,
          n = (o = {}, u = 0, A(e.cells, function (t) {
            var r = t.colspan;
            D(r, function (e) {
              var n = u + e;
              o[n] = {
                element: t.element,
                colspan: r,
                column: n
              };
            }), u += r;
          }), o);
        return {
          colgroups: [{
            element: e.element,
            columns: de(n)
          }],
          columns: n
        };
      }).getOrThunk(function () {
        return {
          colgroups: [],
          columns: {}
        };
      }),
      i = u.columns,
      c = u.colgroups;
    return {
      grid: {
        rows: t,
        columns: f
      },
      access: l,
      all: n,
      columns: i,
      colgroups: c
    };
  }
  function wt(e, n) {
    var t = n.column,
      r = n.column + n.colspan - 1,
      o = n.row,
      u = n.row + n.rowspan - 1;
    return t <= e.finishCol && r >= e.startCol && o <= e.finishRow && u >= e.startRow;
  }
  function yt(e, n) {
    return n.column >= e.startCol && n.column + n.colspan - 1 <= e.finishCol && n.row >= e.startRow && n.row + n.rowspan - 1 <= e.finishRow;
  }
  function Ct(e, n, t) {
    var r = $t.findItem(e, n, ce),
      o = $t.findItem(e, t, ce);
    return r.bind(function (r) {
      return o.map(function (e) {
        return n = r, t = e, {
          startRow: Math.min(n.row, t.row),
          startCol: Math.min(n.column, t.column),
          finishRow: Math.max(n.row + n.rowspan - 1, t.row + t.rowspan - 1),
          finishCol: Math.max(n.column + n.colspan - 1, t.column + t.colspan - 1)
        };
        var n, t;
      });
    });
  }
  function St(n, e, t) {
    return Ct(n, e, t).map(function (e) {
      return O($t.filterItems(n, P(wt, e)), function (e) {
        return e.element;
      });
    });
  }
  function Tt(e, n) {
    return $t.findItem(e, n, function (e, n) {
      return le(n, e);
    }).map(function (e) {
      return e.element;
    });
  }
  function xt(e, n, t, r, o) {
    var u = Kt(e),
      i = ce(e, t) ? q.some(n) : Tt(u, n),
      c = ce(e, o) ? q.some(r) : Tt(u, r);
    return i.bind(function (n) {
      return c.bind(function (e) {
        return St(u, n, e);
      });
    });
  }
  function Rt(n, t) {
    rn(n).each(function (e) {
      e.dom.insertBefore(t.dom, n.dom);
    });
  }
  function Dt(e, n) {
    cn(e).fold(function () {
      rn(e).each(function (e) {
        Xt(e, n);
      });
    }, function (e) {
      Rt(e, n);
    });
  }
  function Ot(n, t) {
    an(n, 0).fold(function () {
      Xt(n, t);
    }, function (e) {
      n.dom.insertBefore(t.dom, e.dom);
    });
  }
  function At(e, n) {
    Rt(e, n), Xt(n, e);
  }
  function kt(t, r) {
    A(r, function (e, n) {
      Dt(0 === n ? t : r[n - 1], e);
    });
  }
  function It(n, e) {
    A(e, function (e) {
      Xt(n, e);
    });
  }
  function Bt(e) {
    e.dom.textContent = "", A(ln(e), function (e) {
      Yt(e);
    });
  }
  function Mt(e) {
    var n,
      t = ln(e);
    0 < t.length && (n = e, A(t, function (e) {
      Rt(n, e);
    })), Yt(e);
  }
  function Et(e) {
    return Jt.get(e);
  }
  function Pt(e) {
    return Jt.getOption(e);
  }
  function Nt(e, n) {
    return Jt.set(e, n);
  }
  function zt(e, n) {
    return k(N(e.all, function (e) {
      return e.cells;
    }), n);
  }
  var Lt,
    _t,
    Wt = function Wt(e, n) {
      e.dom.removeAttribute(n);
    },
    jt = function jt(e, n) {
      return Fn(e) ? e.style.getPropertyValue(n) : "";
    },
    Ft = C(10),
    Ht = C(10),
    Vt = function Vt(e, n, t) {
      return N(ln(e), function (e) {
        return oe(e, n) ? t(e) ? [e] : [] : Vt(e, n, t);
      });
    },
    qt = function qt(e) {
      return rt(e).fold(C([]), function (e) {
        return mn(e, "colgroup");
      });
    },
    Ut = function Ut(e, n) {
      return ye(e.element, n, e.section, e.isNew);
    },
    Gt = "data-snooker-locked-cols",
    $t = {
      fromTable: function fromTable(e) {
        return vt(ct(e));
      },
      generate: vt,
      getAt: function getAt(e, n, t) {
        return q.from(e.access[n + "," + t]);
      },
      findItem: function findItem(e, n, t) {
        var r = zt(e, function (e) {
          return t(n, e.element);
        });
        return 0 < r.length ? q.some(r[0]) : q.none();
      },
      filterItems: zt,
      justCells: function justCells(e) {
        return N(e.all, function (e) {
          return e.cells;
        });
      },
      justColumns: function justColumns(e) {
        return de(e.columns);
      },
      hasColumns: function hasColumns(e) {
        return 0 < Ue(e.columns).length;
      },
      getColumnAt: function getColumnAt(e, n) {
        return q.from(e.columns[n]);
      }
    },
    Kt = $t.fromTable,
    Xt = function Xt(e, n) {
      e.dom.appendChild(n.dom);
    },
    Yt = function Yt(e) {
      var n = e.dom;
      null !== n.parentNode && n.parentNode.removeChild(n);
    },
    Jt = (Lt = pn, {
      get: function get(e) {
        if (!Lt(e)) throw new Error("Can only get text value of a text node");
        return _t(e).getOr("");
      },
      getOption: _t = function _t(e) {
        return Lt(e) ? q.from(e.dom.nodeValue) : q.none();
      },
      set: function set(e, n) {
        if (!Lt(e)) throw new Error("Can only set raw text value of a text node");
        e.dom.nodeValue = n;
      }
    }),
    Qt = ["body", "p", "div", "article", "aside", "figcaption", "figure", "footer", "header", "nav", "section", "ol", "ul", "li", "table", "thead", "tbody", "tfoot", "caption", "tr", "td", "th", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "address"];
  function Zt() {
    return {
      up: C({
        selector: On,
        closest: In,
        predicate: Dn,
        all: on
      }),
      down: C({
        selector: dn,
        predicate: xn
      }),
      styles: C({
        get: Un,
        getRaw: Gn,
        set: Vn,
        remove: $n
      }),
      attrs: C({
        get: Pn,
        set: Mn,
        remove: Wt,
        copyTo: function copyTo(e, n) {
          En(n, zn(e));
        }
      }),
      insert: C({
        before: Rt,
        after: Dt,
        afterAll: kt,
        append: Xt,
        appendAll: It,
        prepend: Ot,
        wrap: At
      }),
      remove: C({
        unwrap: Mt,
        remove: Yt
      }),
      create: C({
        nu: Ve.fromTag,
        clone: function clone(e) {
          return Ve.fromDom(e.dom.cloneNode(!1));
        },
        text: Ve.fromText
      }),
      query: C({
        comparePosition: function comparePosition(e, n) {
          return e.dom.compareDocumentPosition(n.dom);
        },
        prevSibling: un,
        nextSibling: cn
      }),
      property: C({
        children: ln,
        name: Ye,
        parent: rn,
        document: function document(e) {
          return tn(e).dom;
        },
        isText: pn,
        isComment: Ze,
        isElement: gn,
        isSpecial: function isSpecial(e) {
          return y(["script", "noscript", "iframe", "noframes", "noembed", "title", "style", "textarea", "xmp"], Ye(e));
        },
        getLanguage: function getLanguage(e) {
          return gn(e) ? Nn(e, "lang") : q.none();
        },
        getText: Et,
        setText: Nt,
        isBoundary: function isBoundary(e) {
          return !!gn(e) && ("body" === Ye(e) || y(Qt, Ye(e)));
        },
        isEmptyTag: function isEmptyTag(e) {
          return !!gn(e) && y(["br", "img", "hr", "input"], Ye(e));
        },
        isNonEditable: function isNonEditable(e) {
          return gn(e) && "false" === Pn(e, "contenteditable");
        }
      }),
      eq: ce,
      is: qe
    };
  }
  function er(t, e) {
    return Hr(qr, function (e, n) {
      return t(n);
    }, e);
  }
  function nr(e) {
    return On(e, "table");
  }
  function tr(c, l, a) {
    function f(n) {
      return function (e) {
        return void 0 !== a && a(e) || ce(e, n);
      };
    }
    return ce(c, l) ? q.some({
      boxes: q.some([c]),
      start: c,
      finish: l
    }) : nr(c).bind(function (i) {
      return nr(l).bind(function (u) {
        if (ce(i, u)) return q.some({
          boxes: (r = c, o = l, St(Kt(i), r, o)),
          start: c,
          finish: l
        });
        if (le(i, u)) {
          var e = 0 < (n = sn(l, "td,th", f(i))).length ? n[n.length - 1] : l;
          return q.some({
            boxes: xt(i, c, i, l, u),
            start: c,
            finish: e
          });
        }
        if (le(u, i)) {
          var n,
            t = 0 < (n = sn(c, "td,th", f(u))).length ? n[n.length - 1] : c;
          return q.some({
            boxes: xt(u, c, i, l, u),
            start: c,
            finish: t
          });
        }
        return Vr(qr, c, l, void 0).shared.bind(function (e) {
          return In(e, "table", a).bind(function (e) {
            var n = sn(l, "td,th", f(e)),
              t = 0 < n.length ? n[n.length - 1] : l,
              r = sn(c, "td,th", f(e)),
              o = 0 < r.length ? r[r.length - 1] : c;
            return q.some({
              boxes: xt(e, c, i, l, u),
              start: o,
              finish: t
            });
          });
        });
        var r, o;
      });
    });
  }
  function rr(e, n) {
    var t = dn(e, n);
    return 0 < t.length ? q.some(t) : q.none();
  }
  function or(e, n, r) {
    return kn(e, n).bind(function (t) {
      return kn(e, r).bind(function (n) {
        return er(nr, [t, n]).map(function (e) {
          return {
            first: t,
            last: n,
            table: e
          };
        });
      });
    });
  }
  function ur(e, r, o, u, n) {
    return t = n, w(e, function (e) {
      return oe(e, t);
    }).bind(function (e) {
      return t = r, i = o, rt(n = e).bind(function (e) {
        var r = Kt(e),
          o = t,
          u = i;
        return $t.findItem(r, n, ce).bind(function (e) {
          var n = 0 < o ? e.row + e.rowspan - 1 : e.row,
            t = 0 < u ? e.column + e.colspan - 1 : e.column;
          return $t.getAt(r, n + o, t + u).map(function (e) {
            return e.element;
          });
        });
      }).bind(function (e) {
        return t = u, On(n = e, "table").bind(function (e) {
          return kn(e, t).bind(function (e) {
            return tr(e, n).bind(function (n) {
              return n.boxes.map(function (e) {
                return {
                  boxes: e,
                  start: n.start,
                  finish: n.finish
                };
              });
            });
          });
        });
        var n, t;
      });
      var n, t, i;
    });
    var t;
  }
  function ir(o, e, n) {
    return or(o, e, n).bind(function (c) {
      function e(e) {
        return ce(o, e);
      }
      var n = "thead,tfoot,tbody,table",
        t = On(c.first, n, e),
        r = On(c.last, n, e);
      return t.bind(function (i) {
        return r.bind(function (e) {
          return ce(i, e) ? (t = c.table, r = c.first, o = c.last, u = Kt(t), Ct(n = u, r, o).bind(function (e) {
            return function (e, n) {
              for (var t = !0, r = P(yt, n), o = n.startRow; o <= n.finishRow; o++) for (var u = n.startCol; u <= n.finishCol; u++) t = t && $t.getAt(e, o, u).exists(r);
              return t ? q.some(n) : q.none();
            }(n, e);
          })) : q.none();
          var n, t, r, o, u;
        });
      });
    });
  }
  function cr(e, n, t, r) {
    return e.fold(n, t, r);
  }
  function lr(e, n) {
    return Ve.fromDom(e.dom.cloneNode(n));
  }
  function ar(e) {
    return lr(e, !1);
  }
  function fr(e) {
    return lr(e, !0);
  }
  function sr(e, n) {
    var t = Ve.fromTag(n);
    return En(t, zn(e)), t;
  }
  function mr(r, o) {
    function e(e) {
      var n = o(e);
      if (n <= 0 || null === n) {
        var t = Un(e, r);
        return parseFloat(t) || 0;
      }
      return n;
    }
    function u(o, e) {
      return B(e, function (e, n) {
        var t = Un(o, n),
          r = void 0 === t ? 0 : parseInt(t, 10);
        return isNaN(r) ? e : e + r;
      }, 0);
    }
    return {
      set: function set(e, n) {
        if (!f(n) && !n.match(/^[0-9]+$/)) throw new Error(r + ".set accepts only positive integer values. Value was " + n);
        var t = e.dom;
        Fn(t) && (t.style[r] = n + "px");
      },
      get: e,
      getOuter: e,
      aggregate: u,
      max: function max(e, n, t) {
        var r = u(e, t);
        return r < n ? n - r : 0;
      }
    };
  }
  function dr() {
    var e = He().browser;
    return e.isIE() || e.isEdge();
  }
  function gr(e, n, t) {
    return r = Un(e, n), o = t, u = parseFloat(r), (isNaN(u) ? q.none() : q.some(u)).getOr(o);
    var r, o, u;
  }
  function pr(e) {
    return Un(e, "box-sizing");
  }
  function br(e, n, t, r) {
    return n - gr(e, "padding-" + t, 0) - gr(e, "padding-" + r, 0) - gr(e, "border-" + t + "-width", 0) - gr(e, "border-" + r + "-width", 0);
  }
  function hr(e, n) {
    var t = e.dom,
      r = t.getBoundingClientRect().width || t.offsetWidth;
    return "border-box" === n ? r : br(e, r, "left", "right");
  }
  function vr(e) {
    return Jr.get(e);
  }
  function wr(e) {
    return Jr.getOuter(e);
  }
  function yr(t, r) {
    void 0 === r && (r = x);
    var e = t.grid,
      n = D(e.columns, S),
      o = D(e.rows, S);
    return O(n, function (n) {
      return eo(function () {
        return N(o, function (e) {
          return $t.getAt(t, e, n).filter(function (e) {
            return e.column === n;
          }).toArray();
        });
      }, function (e) {
        return 1 === e.colspan && r(e.element);
      }, function () {
        return $t.getAt(t, 0, n);
      });
    });
  }
  function Cr(t) {
    var e = t.grid,
      n = D(e.rows, S),
      r = D(e.columns, S);
    return O(n, function (n) {
      return eo(function () {
        return N(r, function (e) {
          return $t.getAt(t, n, e).filter(function (e) {
            return e.row === n;
          }).fold(C([]), function (e) {
            return [e];
          });
        });
      }, function (e) {
        return 1 === e.rowspan;
      }, function () {
        return $t.getAt(t, n, 0);
      });
    });
  }
  function Sr(n, t) {
    return function (e) {
      return "rtl" === no(e) ? t : n;
    };
  }
  function Tr(e) {
    return to.get(e);
  }
  function xr(e) {
    return to.getOuter(e);
  }
  function Rr(e, n) {
    return void 0 !== e ? e : void 0 !== n ? n : 0;
  }
  function Dr(e) {
    var n = e.dom.ownerDocument,
      t = n.body,
      r = n.defaultView,
      o = n.documentElement;
    if (t === e.dom) return uo(t.offsetLeft, t.offsetTop);
    var u = Rr(null == r ? void 0 : r.pageYOffset, o.scrollTop),
      i = Rr(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
      c = Rr(o.clientTop, t.clientTop),
      l = Rr(o.clientLeft, t.clientLeft);
    return io(e).translate(i - l, u - c);
  }
  function Or(e, n) {
    return {
      row: e,
      y: n
    };
  }
  function Ar(e, n) {
    return {
      col: e,
      x: n
    };
  }
  function kr(e) {
    return Dr(e).left + wr(e);
  }
  function Ir(e) {
    return Dr(e).left;
  }
  function Br(e, n) {
    return Ar(e, Ir(n));
  }
  function Mr(e, n) {
    return Ar(e, kr(n));
  }
  function Er(e) {
    return Dr(e).top;
  }
  function Pr(e, n) {
    return Or(e, Er(n));
  }
  function Nr(e, n) {
    return Or(e, Er(n) + xr(n));
  }
  function zr(t, n, r) {
    if (0 === r.length) return [];
    var e = O(r.slice(1), function (e, n) {
        return e.map(function (e) {
          return t(n, e);
        });
      }),
      o = r[r.length - 1].map(function (e) {
        return n(r.length - 1, e);
      });
    return e.concat([o]);
  }
  function Lr(i) {
    if (!a(i)) throw new Error("cases must be an array");
    if (0 === i.length) throw new Error("there must be at least one case");
    var c = [],
      t = {};
    return A(i, function (e, r) {
      var n = Ue(e);
      if (1 !== n.length) throw new Error("one and only one name per case");
      var o = n[0],
        u = e[o];
      if (void 0 !== t[o]) throw new Error("duplicate key detected:" + o);
      if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
      if (!a(u)) throw new Error("case arguments must be an array");
      c.push(o), t[o] = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t.length;
        if (n !== u.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + u.length + " (" + u + "), got " + n);
        return {
          fold: function fold() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            if (e.length !== i.length) throw new Error("Wrong number of arguments to fold. Expected " + i.length + ", got " + e.length);
            return e[r].apply(null, t);
          },
          match: function match(e) {
            var n = Ue(e);
            if (c.length !== n.length) throw new Error("Wrong number of arguments to match. Expected: " + c.join(",") + "\nActual: " + n.join(","));
            if (!z(c, function (e) {
              return y(n, e);
            })) throw new Error("Not all branches were specified when using match. Specified: " + n.join(", ") + "\nRequired: " + c.join(", "));
            return e[o].apply(null, t);
          },
          log: function log(e) {
            console.log(e, {
              constructors: c,
              constructor: o,
              params: t
            });
          }
        };
      };
    }), t;
  }
  var _r,
    Wr,
    jr,
    Fr = function Fr(n, e, t) {
      return e.bind(function (e) {
        return t.filter(P(n.eq, e));
      });
    },
    Hr = function Hr(e, n, t) {
      return 0 < t.length ? (r = e, o = n, u = t[0], I(t.slice(1), function (e, n) {
        var t = o(r, n);
        return Fr(r, e, t);
      }, o(r, u))) : q.none();
      var r, o, u;
    },
    Vr = function Vr(n, e, t, r) {
      function o(n) {
        return b(n, r).fold(function () {
          return n;
        }, function (e) {
          return n.slice(0, e + 1);
        });
      }
      void 0 === r && (r = v);
      var u = [e].concat(n.up().all(e)),
        i = [t].concat(n.up().all(t)),
        c = o(u),
        l = o(i),
        a = w(c, function (e) {
          return R(l, P(n.eq, e));
        });
      return {
        firstpath: c,
        secondpath: l,
        shared: a
      };
    },
    qr = Zt(),
    Ur = rr,
    Gr = Lr([{
      none: []
    }, {
      multiple: ["elements"]
    }, {
      single: ["element"]
    }]),
    $r = Gr.none,
    Kr = Gr.multiple,
    Xr = Gr.single,
    Yr = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    Jr = mr("width", function (e) {
      return e.dom.offsetWidth;
    }),
    Qr = function Qr(e) {
      return hr(e, "content-box");
    },
    Zr = function Zr(e) {
      return dr() ? hr(e, pr(e)) : gr(e, "width", e.dom.offsetWidth);
    },
    eo = function eo(e, n, t) {
      var r = e();
      return w(r, n).orThunk(function () {
        return q.from(r[0]).orThunk(t);
      }).map(function (e) {
        return e.element;
      });
    },
    no = function no(e) {
      return "rtl" === Un(e, "direction") ? "rtl" : "ltr";
    },
    to = mr("height", function (e) {
      var n = e.dom;
      return Sn(e) ? n.getBoundingClientRect().height : n.offsetHeight;
    }),
    ro = function ro(e) {
      return dr() ? (t = pr(n = e), o = (r = n.dom).getBoundingClientRect().height || r.offsetHeight, "border-box" === t ? o : br(n, o, "top", "bottom")) : gr(e, "height", e.dom.offsetHeight);
      var n, t, r, o;
    },
    oo = function oo(t, r) {
      return {
        left: t,
        top: r,
        translate: function translate(e, n) {
          return oo(t + e, r + n);
        }
      };
    },
    uo = oo,
    io = function io(e) {
      var n,
        t = e.dom,
        r = t.ownerDocument.body;
      return r === t ? uo(r.offsetLeft, r.offsetTop) : Sn(e) ? (n = t.getBoundingClientRect(), uo(n.left, n.top)) : uo(0, 0);
    },
    co = {
      delta: S,
      positions: function positions(e) {
        return zr(Pr, Nr, e);
      },
      edge: Er
    },
    lo = Sr({
      delta: S,
      edge: Ir,
      positions: function positions(e) {
        return zr(Br, Mr, e);
      }
    }, {
      delta: function delta(e) {
        return -e;
      },
      edge: kr,
      positions: function positions(e) {
        return zr(Mr, Br, e);
      }
    }),
    ao = {
      delta: function delta(e, n) {
        return lo(n).delta(e, n);
      },
      positions: function positions(e, n) {
        return lo(n).positions(e, n);
      },
      edge: function edge(e) {
        return lo(e).edge(e);
      }
    },
    fo = {
      unsupportedLength: ["em", "ex", "cap", "ch", "ic", "rem", "lh", "rlh", "vw", "vh", "vi", "vb", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px"],
      fixed: ["px", "pt"],
      relative: ["%"],
      empty: [""]
    },
    so = (jr = ["Infinity", (_r = "[0-9]+") + "\\." + mo(_r) + mo(Wr = "[eE][+-]?[0-9]+"), "\\." + _r + mo(Wr), _r + mo(Wr)].join("|"), new RegExp("^([+-]?(?:" + jr + "))(.*)$"));
  function mo(e) {
    return "(?:" + e + ")?";
  }
  function go(e, n, t) {
    var r = q.from(e.dom.parentElement).map(Ve.fromDom).getOrThunk(function () {
      return Tn(nn(e));
    });
    return n(e) / t(r) * 100;
  }
  function po(e, n) {
    Vn(e, "width", n + "px");
  }
  function bo(e, n) {
    Vn(e, "width", n + "%");
  }
  function ho(e, n) {
    Vn(e, "height", n + "px");
  }
  function vo(e) {
    var n,
      t,
      r,
      o,
      u,
      i,
      c,
      l,
      a,
      f,
      s = ro(e) + "px";
    return s ? (n = s, t = e, r = Tr, o = ho, f = parseFloat(n), ee(n, "%") && "table" !== Ye(t) ? (i = f, c = r, l = o, a = rt(u = t).map(function (e) {
      var n = c(e);
      return Math.floor(i / 100 * n);
    }).getOr(i), l(u, a), a) : f) : Tr(e);
  }
  function wo(e, n) {
    return Gn(e, n).orThunk(function () {
      return Nn(e, n).map(function (e) {
        return e + "px";
      });
    });
  }
  function yo(e) {
    return wo(e, "width");
  }
  function Co(e) {
    return go(e, vr, Qr);
  }
  function So(e) {
    return (jl(e) ? vr : Zr)(e);
  }
  function To(e) {
    return vo(n = e) / Xn(n, "rowspan");
    var n;
  }
  function xo(e, n, t) {
    Vn(e, "width", n + t);
  }
  function Ro(e) {
    return go(e, vr, Qr) + "%";
  }
  function Do(e) {
    return yo(e).getOrThunk(function () {
      return So(e) + "px";
    });
  }
  function Oo(e) {
    return wo(e, "height").getOrThunk(function () {
      return To(e) + "px";
    });
  }
  function Ao(e, n, t, r, o, u) {
    return e.filter(r).fold(function () {
      return u(function (t, r) {
        if (r < 0 || r >= t.length - 1) return q.none();
        var e = t[r].fold(function () {
            var e, n;
            return H((e = t.slice(0, r), (n = U.call(e, 0)).reverse(), n), function (e, n) {
              return e.map(function (e) {
                return {
                  value: e,
                  delta: n + 1
                };
              });
            });
          }, function (e) {
            return q.some({
              value: e,
              delta: 0
            });
          }),
          n = t[r + 1].fold(function () {
            return H(t.slice(r + 1), function (e, n) {
              return e.map(function (e) {
                return {
                  value: e,
                  delta: n + 1
                };
              });
            });
          }, function (e) {
            return q.some({
              value: e,
              delta: 1
            });
          });
        return e.bind(function (t) {
          return n.map(function (e) {
            var n = e.delta + t.delta;
            return Math.abs(e.value - t.value) / n;
          });
        });
      }(t, n));
    }, function (e) {
      return o(e);
    });
  }
  function ko(e, n, i, c) {
    var l = yr(e),
      t = $t.hasColumns(e) ? O($t.justColumns(e), function (e) {
        return q.from(e.element);
      }) : l,
      a = [q.some(ao.edge(n))].concat(O(ao.positions(l, n), function (e) {
        return e.map(function (e) {
          return e.x;
        });
      })),
      f = p(Yn);
    return O(t, function (e, u) {
      return Ao(e, u, a, f, function (e) {
        return t = e, o = (r = He().browser).isChrome() || r.isFirefox(), !Hl(t) || o ? i(e) : Ao(null != (n = l[u]) ? S(n) : q.none(), u, a, f, function (e) {
          return c(q.some(vr(e)));
        }, c);
        var n, t, r, o;
      }, c);
    });
  }
  function Io(e) {
    return e.map(function (e) {
      return e + "px";
    }).getOr("");
  }
  function Bo(e, n, t) {
    return ko(e, n, So, function (e) {
      return e.getOrThunk(t.minCellWidth);
    });
  }
  function Mo(e, n, t, r, o) {
    var u = Cr(e),
      i = [q.some(t.edge(n))].concat(O(t.positions(u, n), function (e) {
        return e.map(function (e) {
          return e.y;
        });
      }));
    return O(u, function (e, n) {
      return Ao(e, n, i, p(Jn), r, o);
    });
  }
  function Eo(e, n) {
    return function () {
      return Sn(e) ? n(e) : parseFloat(Gn(e, "width").getOr("0"));
    };
  }
  function Po(r) {
    var t = Eo(r, function (e) {
        return parseFloat(Ro(e));
      }),
      n = Eo(r, vr);
    return {
      width: t,
      pixelWidth: n,
      getWidths: function getWidths(e, n) {
        return t = n, ko(e, r, Co, function (e) {
          return e.fold(function () {
            return t.minCellWidth();
          }, function (e) {
            return e / t.pixelWidth() * 100;
          });
        });
        var t;
      },
      getCellDelta: function getCellDelta(e) {
        return e / n() * 100;
      },
      singleColumnWidth: function singleColumnWidth(e, n) {
        return [100 - e];
      },
      minCellWidth: function minCellWidth() {
        return Ft() / n() * 100;
      },
      setElementWidth: bo,
      adjustTableWidth: function adjustTableWidth(e) {
        var n = t();
        bo(r, n + e / 100 * n);
      },
      isRelative: !0,
      label: "percent"
    };
  }
  function No(t) {
    var r = Eo(t, vr);
    return {
      width: r,
      pixelWidth: r,
      getWidths: function getWidths(e, n) {
        return Bo(e, t, n);
      },
      getCellDelta: S,
      singleColumnWidth: function singleColumnWidth(e, n) {
        return [Math.max(Ft(), e + n) - e];
      },
      minCellWidth: Ft,
      setElementWidth: po,
      adjustTableWidth: function adjustTableWidth(e) {
        var n = r() + e;
        po(t, n);
      },
      isRelative: !1,
      label: "pixel"
    };
  }
  function zo(e, n) {
    function t(e) {
      return oe(e.element, n);
    }
    var u,
      r,
      i,
      c,
      l,
      a,
      f,
      s,
      o,
      m,
      d,
      g,
      p = fr(e),
      b = ct(p),
      h = Vl(e),
      v = $t.generate(b),
      w = (u = t, r = v.grid.columns, i = v.grid.rows, c = r, a = l = 0, f = [], s = [], ae(v.access, function (e) {
        var n, t, r, o;
        f.push(e), u(e) && (s.push(e), t = (n = e.row) + e.rowspan - 1, o = (r = e.column) + e.colspan - 1, n < i ? i = n : l < t && (l = t), r < c ? c = r : a < o && (a = o));
      }), {
        minRow: i,
        minCol: c,
        maxRow: l,
        maxCol: a,
        allCells: f,
        selectedCells: s
      }),
      y = "th:not(" + n + "),td:not(" + n + ")";
    return A(Vt(p, "th,td", function (e) {
      return oe(e, y);
    }), Yt), function (e, n, t, r) {
      for (var o, u, i, c = n.grid.columns, l = n.grid.rows, a = 0; a < l; a++) for (var f = !1, s = 0; s < c; s++) a < t.minRow || a > t.maxRow || s < t.minCol || s > t.maxCol || ($t.getAt(n, a, s).filter(r).isNone() ? (o = f, 0, u = e[a].element, i = Ve.fromTag("td"), Xt(i, Ve.fromTag("br")), (o ? Xt : Ot)(u, i)) : f = !0);
    }(b, v, w, t), o = p, m = w, d = v, g = function (e, n, t, r) {
      if (0 === r.minCol && n.grid.columns === r.maxCol + 1) return 0;
      var o = Bo(n, e, t),
        u = B(o, function (e, n) {
          return e + n;
        }, 0),
        i = B(o.slice(r.minCol, r.maxCol + 1), function (e, n) {
          return e + n;
        }, 0) / u * t.pixelWidth() - t.pixelWidth();
      return t.getCellDelta(i);
    }(e, $t.fromTable(e), h, w), ae(d.columns, function (e) {
      (e.column < m.minCol || e.column > m.maxCol) && Yt(e.element);
    }), A(k(Zn(o, "tr"), function (e) {
      return 0 === e.dom.childElementCount;
    }), Yt), m.minCol !== m.maxCol && m.minRow !== m.maxRow || A(Zn(o, "th,td"), function (e) {
      Wt(e, "rowspan"), Wt(e, "colspan");
    }), Wt(o, Gt), Wt(o, "data-snooker-col-series"), Vl(o).adjustTableWidth(g), p;
  }
  function Lo(e) {
    return "img" === Ye(e) ? 1 : Pt(e).fold(function () {
      return ln(e).length;
    }, function (e) {
      return e.length;
    });
  }
  function _o(e) {
    return Pt(e).filter(function (e) {
      return 0 !== e.trim().length || -1 < e.indexOf("\xa0");
    }).isSome() || y(Gl, Ye(e));
  }
  function Wo(e) {
    return o = _o, (_u2 = function u(e) {
      for (var n = 0; n < e.childNodes.length; n++) {
        var t = Ve.fromDom(e.childNodes[n]);
        if (o(t)) return q.some(t);
        var r = _u2(e.childNodes[n]);
        if (r.isSome()) return r;
      }
      return q.none();
    })(e.dom);
    var o, _u2;
  }
  function jo(e) {
    return $l(e, _o);
  }
  function Fo(n) {
    return function () {
      var e = Ve.fromTag("td", n.dom);
      return Xt(e, Ve.fromTag("br", n.dom)), e;
    };
  }
  function Ho(e) {
    return function () {
      return Ve.fromTag("col", e.dom);
    };
  }
  function Vo(e) {
    return function () {
      return Ve.fromTag("colgroup", e.dom);
    };
  }
  function qo(e) {
    return function () {
      return Ve.fromTag("tr", e.dom);
    };
  }
  function Uo(e, n, t) {
    var r,
      o,
      u = (It(o = sr(r = e, n), ln(fr(r))), o);
    return ae(t, function (e, n) {
      null === e ? Wt(u, n) : Mn(u, n, e);
    }), u;
  }
  function Go(e) {
    return e;
  }
  function $o(a, f, s) {
    function m(e, n) {
      var t = e.element.dom,
        r = n.dom;
      Fn(t) && Fn(r) && (r.style.cssText = t.style.cssText), $n(n, "height"), 1 !== e.colspan && $n(n, "width");
    }
    return {
      col: function col(e) {
        var n = Ve.fromTag(Ye(e.element), f.dom);
        return m(e, n), a(e.element, n), n;
      },
      colgroup: Vo(f),
      row: qo(f),
      cell: function cell(e) {
        var n,
          t,
          r,
          o,
          u,
          i = Ve.fromTag(Ye(e.element), f.dom),
          c = s.getOr(["strong", "em", "b", "i", "span", "font", "h1", "h2", "h3", "h4", "h5", "h6", "p", "div"]),
          l = 0 < c.length ? (n = e.element, t = i, r = c, Wo(n).map(function (e) {
            return I(sn(e, r.join(","), function (e) {
              return ce(e, n);
            }), function (e, n) {
              var t = ar(n);
              return Wt(t, "contenteditable"), Xt(e, t), t;
            }, t);
          }).getOr(t)) : i;
        return Xt(l, Ve.fromTag("br")), m(e, i), o = e.element, u = i, ae(Kl, function (n, t) {
          return Nn(o, t).filter(function (e) {
            return y(n, e);
          }).each(function (e) {
            return Mn(u, t, e);
          });
        }), a(e.element, i), i;
      },
      replace: Uo,
      colGap: Ho(f),
      gap: Fo(f)
    };
  }
  function Ko(e) {
    return {
      col: Ho(e),
      colgroup: Vo(e),
      row: qo(e),
      cell: Fo(e),
      replace: Go,
      colGap: Ho(e),
      gap: Fo(e)
    };
  }
  function Xo(e) {
    return O(e, Ve.fromDom);
  }
  function Yo(e) {
    return Ve.fromDom(e.getBody());
  }
  function Jo(e) {
    return e.getBoundingClientRect().width;
  }
  function Qo(e) {
    return e.getBoundingClientRect().height;
  }
  function Zo(n) {
    return function (e) {
      return ce(e, Yo(n));
    };
  }
  function eu(e) {
    return /^\d+(\.\d+)?$/.test(e) ? e + "px" : e;
  }
  function nu(e) {
    function n(e) {
      return Wt(e, "data-mce-style");
    }
    Wt(e, "data-mce-style"), A(nt(e), n), A(tt(e), n), A(ot(e), n);
  }
  function tu(e) {
    return Ve.fromDom(e.selection.getStart());
  }
  function ru(e) {
    return cr(e.get(), C([]), S, _);
  }
  function ou(e, n, t) {
    return {
      element: t,
      mergable: (u = n, i = Xl, cr(e.get(), q.none, function (n) {
        return n.length <= 1 ? q.none() : ir(u, i.firstSelectedSelector, i.lastSelectedSelector).map(function (e) {
          return {
            bounds: e,
            cells: n
          };
        });
      }, q.none)),
      unmergable: 0 < (o = ru(e)).length && z(o, function (e) {
        return r(e, "rowspan") || r(e, "colspan");
      }) ? q.some(o) : q.none(),
      selection: ru(e)
    };
    function r(e, n) {
      return Nn(e, n).exists(function (e) {
        return 1 < parseInt(e, 10);
      });
    }
    var o, u, i;
  }
  function uu(o) {
    return function (e, n) {
      var t,
        r = Ye(e);
      return In("col" === r || "colgroup" === r ? rt(t = e).bind(function (e) {
        return Ur(e, Xl.firstSelectedSelector);
      }).fold(C(t), function (e) {
        return e[0];
      }) : e, o, n);
    };
  }
  function iu(a, e, f) {
    a.on("BeforeGetContent", function (t) {
      !0 === t.selection && cr(e.get(), E, function (e) {
        t.preventDefault(), rt(e[0]).map(function (e) {
          var n = zo(e, "[data-mce-selected]");
          return nu(n), [n];
        }).each(function (e) {
          var n;
          t.content = "text" === t.format ? O(e, function (e) {
            return e.dom.innerText;
          }).join("") : (n = a, O(e, function (e) {
            return n.selection.serializer.serialize(e.dom, {});
          }).join(""));
        });
      }, E);
    }), a.on("BeforeSetContent", function (l) {
      !0 === l.selection && !0 === l.paste && j(Ql(e)).each(function (c) {
        rt(c).each(function (e) {
          var n,
            t,
            r,
            o,
            u = k((n = l.content, (t = document.createElement("div")).innerHTML = n, ln(Ve.fromDom(t))), function (e) {
              return "meta" !== Ye(e);
            }),
            i = en("table");
          1 === u.length && i(u[0]) && (l.preventDefault(), r = Ko(Ve.fromDom(a.getDoc())), o = {
            element: c,
            clipboard: u[0],
            generators: r
          }, f.pasteCells(e, o).each(function () {
            a.focus();
          }));
        });
      });
    });
  }
  function cu(e, n, t) {
    for (var r = 0, o = e; o < n; o++) r += void 0 !== t[o] ? t[o] : 0;
    return r;
  }
  function lu(e, n, t) {
    var r, o, u, i;
    A((r = e, o = n, $t.hasColumns(r) ? (i = o, O($t.justColumns(r), function (e, n) {
      return {
        element: e.element,
        width: i[n],
        colspan: e.colspan
      };
    })) : (u = o, O($t.justCells(r), function (e) {
      var n = cu(e.column, e.column + e.colspan, u);
      return {
        element: e.element,
        width: n,
        colspan: e.colspan
      };
    }))), function (e) {
      t.setElementWidth(e.element, e.width);
    });
  }
  function au(e, n, t, r, o) {
    var u,
      i,
      c,
      l,
      a,
      f,
      s,
      m,
      d,
      g,
      p = $t.fromTable(e),
      b = o.getCellDelta(n),
      h = o.getWidths(p, o),
      v = t === p.grid.columns - 1,
      w = r.clampTableDelta(h, t, b, o.minCellWidth(), v),
      y = (i = t, c = w, l = o, a = r, m = (u = h).slice(0), s = i, d = 0 === (f = u).length ? ea.none() : 1 === f.length ? ea.only(0) : 0 === s ? ea.left(0, 1) : s === f.length - 1 ? ea.right(s - 1, s) : 0 < s && s < f.length - 1 ? ea.middle(s - 1, s, s + 1) : ea.none(), g = C(O(m, C(0))), d.fold(g, function (e) {
        return l.singleColumnWidth(m[e], c);
      }, function (e, n) {
        return a.calcLeftEdgeDeltas(m, e, n, c, l.minCellWidth(), l.isRelative);
      }, function (e, n, t) {
        return a.calcMiddleDeltas(m, e, n, t, c, l.minCellWidth(), l.isRelative);
      }, function (e, n) {
        return a.calcRightEdgeDeltas(m, e, n, c, l.minCellWidth(), l.isRelative);
      }));
    lu(p, O(y, function (e, n) {
      return e + h[n];
    }), o), r.resizeTable(o.adjustTableWidth, w, v);
  }
  function fu(e) {
    return O(e, C(0));
  }
  function su(e, n, t, r, o) {
    return o(e.slice(0, n)).concat(r).concat(o(e.slice(t)));
  }
  function mu(i) {
    return function (e, n, t, r) {
      if (i(t)) {
        var o = Math.max(r, e[n] - Math.abs(t)),
          u = Math.abs(o - e[n]);
        return 0 <= t ? u : -u;
      }
      return t;
    };
  }
  function du() {
    function f(e, t, n, r) {
      var o = (100 + n) / 100,
        u = Math.max(r, (e[t] + n) / o);
      return O(e, function (e, n) {
        return (n === t ? u : e / o) - e;
      });
    }
    function c(e, n, t, r, o, u) {
      return u ? f(e, n, r, o) : (l = t, a = na(i = e, c = n, r, o), su(i, c, l + 1, [a, 0], fu));
      var i, c, l, a;
    }
    return {
      resizeTable: function resizeTable(e, n) {
        return e(n);
      },
      clampTableDelta: na,
      calcLeftEdgeDeltas: c,
      calcMiddleDeltas: function calcMiddleDeltas(e, n, t, r, o, u, i) {
        return c(e, t, r, o, u, i);
      },
      calcRightEdgeDeltas: function calcRightEdgeDeltas(e, n, t, r, o, u) {
        if (u) return f(e, t, r, o);
        var i = na(e, t, r, o);
        return fu(e.slice(0, t)).concat([i]);
      },
      calcRedestributedWidths: function calcRedestributedWidths(e, n, t, r) {
        if (r) {
          var o = (n + t) / n,
            u = O(e, function (e) {
              return e / o;
            });
          return {
            delta: 100 * o - 100,
            newSizes: u
          };
        }
        return {
          delta: t,
          newSizes: e
        };
      }
    };
  }
  function gu() {
    function i(e, n, t, r, o) {
      var u = ta(e, 0 <= r ? t : n, r, o);
      return su(e, n, t + 1, [u, -u], fu);
    }
    return {
      resizeTable: function resizeTable(e, n, t) {
        t && e(n);
      },
      clampTableDelta: function clampTableDelta(e, n, t, r, o) {
        if (o) {
          if (0 <= t) return t;
          var u = B(e, function (e, n) {
            return e + n - r;
          }, 0);
          return Math.max(-u, t);
        }
        return na(e, n, t, r);
      },
      calcLeftEdgeDeltas: i,
      calcMiddleDeltas: function calcMiddleDeltas(e, n, t, r, o, u) {
        return i(e, t, r, o, u);
      },
      calcRightEdgeDeltas: function calcRightEdgeDeltas(e, n, t, r, o, u) {
        return u ? fu(e) : O(e, C(r / e.length));
      },
      calcRedestributedWidths: function calcRedestributedWidths(e, n, t, r) {
        return {
          delta: 0,
          newSizes: e
        };
      }
    };
  }
  function pu(e, n, t) {
    var r = t.substring(0, t.length - e.length),
      o = parseFloat(r);
    return r === o.toString() ? n(o) : ra.invalid(t);
  }
  function bu(e, n, t) {
    var r,
      o,
      u,
      i,
      c = oa.from(t),
      l = z(e, function (e) {
        return "0px" === e;
      }) ? (r = e.length, o = c.fold(function () {
        return C("");
      }, function (e) {
        return C(e / r + "px");
      }, function () {
        return C(100 / r + "%");
      }), D(r, o)) : (u = e, i = n, c.fold(function () {
        return u;
      }, function (e) {
        return t = (n = e) / i, O(u, function (e) {
          return oa.from(e).fold(function () {
            return e;
          }, function (e) {
            return e * t + "px";
          }, function (e) {
            return e / 100 * n + "px";
          });
        });
        var n, t;
      }, function (e) {
        return n = i, O(u, function (e) {
          return oa.from(e).fold(function () {
            return e;
          }, function (e) {
            return e / n * 100 + "%";
          }, function (e) {
            return e + "%";
          });
        });
        var n;
      }));
    return ua(l);
  }
  function hu(e, n) {
    return 0 === e.length ? n : I(e, function (e, n) {
      return oa.from(n).fold(C(0), S, S) + e;
    }, 0);
  }
  function vu(e) {
    return ia(e).fold(C("px"), C("px"), C("%"));
  }
  function wu(l, e, n) {
    var a = $t.fromTable(l),
      i = a.all,
      f = $t.justCells(a),
      s = $t.justColumns(a);
    e.each(function (e) {
      var t,
        r,
        o,
        u,
        n = vu(e),
        i = vr(l),
        c = bu(ko(a, l, Do, Io), i, e);
      $t.hasColumns(a) ? (o = c, u = n, A(s, function (e, n) {
        var t = hu([o[n]], Ft());
        Vn(e.element, "width", t + u);
      })) : (t = c, r = n, A(f, function (e) {
        var n = hu(t.slice(e.column, e.colspan + e.column), Ft());
        Vn(e.element, "width", n + r);
      })), Vn(l, "width", e);
    }), n.each(function (e) {
      var n = vu(e),
        t = Tr(l),
        r = bu(Mo(a, l, co, Oo, Io), t, e),
        o = i,
        u = n;
      A(f, function (e) {
        var n = hu(r.slice(e.row, e.rowspan + e.row), Ht());
        Vn(e.element, "height", n + u);
      }), A(o, function (e, n) {
        Vn(e.element, "height", r[n]);
      }), Vn(l, "height", e);
    });
  }
  function yu(e) {
    return $t.fromTable(e).grid;
  }
  function Cu(n) {
    var o = [];
    return {
      bind: function bind(e) {
        if (void 0 === e) throw new Error("Event bind error: undefined handler");
        o.push(e);
      },
      unbind: function unbind(n) {
        o = k(o, function (e) {
          return e !== n;
        });
      },
      trigger: function trigger() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = {};
        A(n, function (e, n) {
          r[e] = t[n];
        }), A(o, function (e) {
          e(r);
        });
      }
    };
  }
  function Su(e) {
    return {
      registry: fe(e, function (e) {
        return {
          bind: e.bind,
          unbind: e.unbind
        };
      }),
      trigger: fe(e, function (e) {
        return e.trigger;
      })
    };
  }
  function Tu(e) {
    return e.slice(0).sort();
  }
  function xu(n, e) {
    var t = k(e, function (e) {
      return !y(n, e);
    });
    0 < t.length && function () {
      throw new Error("Unsupported keys for object: " + Tu(t).join(", "));
    }();
  }
  function Ru(e) {
    return function (r, o, u) {
      if (0 === o.length) throw new Error("You must specify at least one required field.");
      var t;
      return function (n, e) {
        if (!a(e)) throw new Error("The " + n + " fields must be an array. Was: " + e + ".");
        A(e, function (e) {
          if (!T(e)) throw new Error("The value " + e + " in the " + n + " fields was not a string.");
        });
      }("required", o), w(t = Tu(o), function (e, n) {
        return n < t.length - 1 && e === t[n + 1];
      }).each(function (e) {
        throw new Error("The field: " + e + " occurs more than once in the combined fields: [" + t.join(", ") + "].");
      }), function (n) {
        var t = Ue(n);
        z(o, function (e) {
          return y(t, e);
        }) || function (e, n) {
          throw new Error("All required keys (" + Tu(e).join(", ") + ") were not specified. Specified keys were: " + Tu(n).join(", ") + ".");
        }(o, t), r(o, t);
        var e = k(o, function (e) {
          return !u.validate(n[e], e);
        });
        return 0 < e.length && function (e, n) {
          throw new Error("All values need to be of type: " + n + ". Keys (" + Tu(e).join(", ") + ") were not.");
        }(e, u.label), n;
      };
    }(xu, e, {
      validate: c,
      label: "function"
    });
  }
  function Du() {
    var u,
      i,
      e = {
        onEvent: E,
        reset: E,
        events: Su({
          move: Cu(["info"])
        }).registry
      },
      n = (u = q.none(), {
        onEvent: function onEvent(e, o) {
          o.extract(e).each(function (e) {
            var n = o,
              t = e,
              r = u.map(function (e) {
                return n.compare(e, t);
              });
            u = q.some(t), r.each(function (e) {
              i.trigger.move(e);
            });
          });
        },
        reset: function reset() {
          u = q.none();
        },
        events: (i = Su({
          move: Cu(["info"])
        })).registry
      }),
      t = e;
    return {
      on: function on() {
        t.reset(), t = n;
      },
      off: function off() {
        t.reset(), t = e;
      },
      isOn: function isOn() {
        return t === n;
      },
      onEvent: function onEvent(e, n) {
        t.onEvent(e, n);
      },
      events: n.events
    };
  }
  function Ou(e) {
    function n() {
      return e.stopPropagation();
    }
    function t() {
      return e.preventDefault();
    }
    var r,
      o,
      u = Ve.fromDom(function (e) {
        if (wn() && l(e.target)) {
          var n = Ve.fromDom(e.target);
          if (gn(n) && Cn(n) && e.composed && e.composedPath) {
            var t = e.composedPath();
            if (t) return j(t);
          }
        }
        return q.from(e.target);
      }(e).getOr(e.target)),
      i = (r = t, o = n, function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return r(o.apply(null, e));
      });
    return {
      target: u,
      x: e.clientX,
      y: e.clientY,
      stop: n,
      prevent: t,
      kill: i,
      raw: e
    };
  }
  function Au(e, n, t) {
    return o = n, u = !1, i = sa, c = t, l = function l(e) {
      i(e) && c(Ou(e));
    }, (r = e).dom.addEventListener(o, l, u), {
      unbind: P(fa, r, o, l, u)
    };
    var r, o, u, i, c, l;
  }
  function ku(e) {
    return void 0 !== e.dom.classList;
  }
  function Iu(e, n) {
    return o = n, Mn(e, t = "class", (void 0 === (r = Pn(e, t)) || "" === r ? [] : r.split(" ")).concat([o]).join(" ")), 1;
    var t, r, o;
  }
  function Bu(e, n) {
    ku(e) ? e.dom.classList.add(n) : Iu(e, n);
  }
  function Mu(e, n) {
    return ku(e) && e.dom.classList.contains(n);
  }
  function Eu(e) {
    var n = e.replace(/\./g, "-");
    return {
      resolve: function resolve(e) {
        return n + "-" + e;
      }
    };
  }
  function Pu(e) {
    return In(e, "[contenteditable]");
  }
  function Nu(e, n) {
    return void 0 === n && (n = !1), !He().browser.isIE() && Sn(e) ? e.dom.isContentEditable : Pu(e).fold(C(n), function (e) {
      return "true" === pa(e);
    });
  }
  function zu(e) {
    A(dn(e.parent(), "." + ha), Yt);
  }
  function Lu(t, e, r) {
    var o = t.origin();
    A(e, function (e) {
      e.each(function (e) {
        var n = r(o, e);
        Bu(n, ha), Xt(t.parent(), n);
      });
    });
  }
  function _u(e, n, t, r, o) {
    var u,
      i,
      c,
      l,
      a,
      f = Dr(t),
      s = n.isResizable,
      m = 0 < r.length ? co.positions(r, t) : [],
      d = 0 < m.length ? (u = s, N(e.all, function (e, n) {
        return u(e.element) ? [n] : [];
      })) : [],
      g = k(m, function (e, n) {
        return R(d, function (e) {
          return n === e;
        });
      });
    i = n, c = g, l = f, a = wr(t), Lu(i, c, function (e, n) {
      var t,
        r,
        o,
        u,
        i,
        c = (t = n.row, r = l.left - e.left, o = n.y - e.top, u = a, qn(i = Ve.fromTag("div"), {
          position: "absolute",
          left: r + "px",
          top: o - 3.5 + "px",
          height: "7px",
          width: u + "px"
        }), En(i, {
          "data-row": t,
          role: "presentation"
        }), i);
      return Bu(c, va), c;
    });
    var p,
      b,
      h,
      v,
      w,
      y,
      C,
      S = 0 < o.length ? ao.positions(o, t) : [],
      T = 0 < S.length ? (b = s, h = [], D((p = e).grid.columns, function (e) {
        $t.getColumnAt(p, e).map(function (e) {
          return e.element;
        }).forall(b) && h.push(e);
      }), k(h, function (n) {
        return z($t.filterItems(p, function (e) {
          return e.column === n;
        }), function (e) {
          return b(e.element);
        });
      })) : [],
      x = k(S, function (e, n) {
        return R(T, function (e) {
          return n === e;
        });
      });
    v = n, w = x, y = f, C = xr(t), Lu(v, w, function (e, n) {
      var t,
        r,
        o,
        u,
        i,
        c = (t = n.col, r = n.x - e.left, o = y.top - e.top, u = C, qn(i = Ve.fromTag("div"), {
          position: "absolute",
          left: r - 3.5 + "px",
          top: o + "px",
          height: u + "px",
          width: "7px"
        }), En(i, {
          "data-column": t,
          role: "presentation"
        }), i);
      return Bu(c, wa), c;
    });
  }
  function Wu(e, n) {
    var t;
    zu(e), e.isResizable(n) && _u(t = $t.fromTable(n), e, n, Cr(t), yr(t));
  }
  function ju(e, n) {
    A(dn(e.parent(), "." + ha), n);
  }
  function Fu(e) {
    ju(e, function (e) {
      Vn(e, "display", "none");
    });
  }
  function Hu(e) {
    ju(e, function (e) {
      Vn(e, "display", "block");
    });
  }
  function Vu(o) {
    function e(e, n) {
      return q.from(Pn(e, n));
    }
    var n,
      t,
      r,
      u,
      i,
      c,
      l = (u = Su({
        drag: Cu(["xDelta", "yDelta", "target"])
      }), i = q.none(), (c = {
        mutate: function mutate(e, n) {
          r.trigger.drag(e, n);
        },
        events: (r = Su({
          drag: Cu(["xDelta", "yDelta"])
        })).registry
      }).events.drag.bind(function (n) {
        i.each(function (e) {
          u.trigger.drag(n.xDelta, n.yDelta, e);
        });
      }), {
        assign: function assign(e) {
          i = q.some(e);
        },
        get: function get() {
          return i;
        },
        mutate: c.mutate,
        events: u.registry
      }),
      a = (t = void 0 !== (n = {}).mode ? n.mode : ga, function (n, t, e) {
        function r() {
          m.stop(), l.isOn() && (l.off(), c.trigger.stop());
        }
        var o,
          u,
          i = !1,
          c = Su({
            start: Cu([]),
            stop: Cu([])
          }),
          l = Du(),
          a = (o = r, u = null, {
            cancel: f,
            throttle: function throttle() {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
              f(), u = setTimeout(function () {
                u = null, o.apply(null, e);
              }, 200);
            }
          });
        function f() {
          h(u) || (clearTimeout(u), u = null);
        }
        function s(t) {
          return function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            i && t.apply(null, e);
          };
        }
        l.events.move.bind(function (e) {
          t.mutate(n, e.info);
        });
        var m = t.sink(aa({
          forceDrop: r,
          drop: s(r),
          move: s(function (e) {
            a.cancel(), l.onEvent(e, t);
          }),
          delayDrop: s(a.throttle)
        }), e);
        return {
          element: m.element,
          go: function go(e) {
            m.start(e), l.on(), c.trigger.start();
          },
          on: function on() {
            i = !0;
          },
          off: function off() {
            i = !1;
          },
          destroy: function destroy() {
            m.destroy();
          },
          events: c.registry
        };
      }(l, t, n)),
      f = q.none();
    function s(e, n) {
      return Qn(e, n) - Kn(e, "data-initial-" + n, 0);
    }
    function m(e, n) {
      b.trigger.startAdjust(), l.assign(e), Mn(e, "data-initial-" + n, Qn(e, n)), Bu(e, ya), Vn(e, "opacity", "0.2"), a.go(o.parent());
    }
    function d(e) {
      return ce(e, o.view());
    }
    l.events.drag.bind(function (t) {
      e(t.target, "data-row").each(function (e) {
        var n = Qn(t.target, "top");
        Vn(t.target, "top", n + t.yDelta + "px");
      }), e(t.target, "data-column").each(function (e) {
        var n = Qn(t.target, "left");
        Vn(t.target, "left", n + t.xDelta + "px");
      });
    }), a.events.stop.bind(function () {
      l.get().each(function (r) {
        f.each(function (t) {
          e(r, "data-row").each(function (e) {
            var n = s(r, "top");
            Wt(r, "data-initial-top"), b.trigger.adjustHeight(t, n, parseInt(e, 10));
          }), e(r, "data-column").each(function (e) {
            var n = s(r, "left");
            Wt(r, "data-initial-left"), b.trigger.adjustWidth(t, n, parseInt(e, 10));
          }), Wu(o, t);
        });
      });
    });
    var g = Au(o.parent(), "mousedown", function (e) {
        Mu(e.target, va) && m(e.target, "top"), Mu(e.target, wa) && m(e.target, "left");
      }),
      p = Au(o.view(), "mouseover", function (e) {
        In(e.target, "table", d).filter(Nu).fold(function () {
          Sn(e.target) && zu(o);
        }, function (e) {
          f = q.some(e), Wu(o, e);
        });
      }),
      b = Su({
        adjustHeight: Cu(["table", "delta", "row"]),
        adjustWidth: Cu(["table", "delta", "column"]),
        startAdjust: Cu([])
      });
    return {
      destroy: function destroy() {
        g.unbind(), p.unbind(), a.destroy(), zu(o);
      },
      refresh: function refresh(e) {
        Wu(o, e);
      },
      on: a.on,
      off: a.off,
      hideBars: P(Fu, o),
      showBars: P(Hu, o),
      events: b.registry
    };
  }
  function qu(e, n) {
    return e.fire("newrow", {
      node: n
    });
  }
  function Uu(e, n) {
    return e.fire("newcell", {
      node: n
    });
  }
  function Gu(e, n, t) {
    e.fire("TableModified", _K(_K({}, t), {
      table: n
    }));
  }
  function $u(e) {
    return e.getParam("table_sizing_mode", "auto");
  }
  function Ku(e) {
    return e.getParam("table_responsive_width");
  }
  function Xu(e) {
    return e.getParam("table_border_widths", Ra, "array");
  }
  function Yu(e) {
    return e.getParam("table_border_styles", Da, "array");
  }
  function Ju(e) {
    return e.getParam("table_default_attributes", Oa, "object");
  }
  function Qu(e) {
    return e.getParam("table_default_styles", function (e) {
      var n;
      if (ka(e)) {
        var t = e.dom,
          r = null !== (n = t.getParent(e.selection.getStart(), t.isBlock)) && void 0 !== n ? n : e.getBody(),
          o = Qr(Ve.fromDom(r));
        return _K(_K({}, xa), {
          width: o + "px"
        });
      }
      return Ia(e) ? se(xa, function (e, n) {
        return "width" !== n;
      }) : xa;
    }(e), "object");
  }
  function Zu(e) {
    return e.getParam("table_cell_advtab", !0, "boolean");
  }
  function ei(e) {
    return e.getParam("table_row_advtab", !0, "boolean");
  }
  function ni(e) {
    return e.getParam("table_advtab", !0, "boolean");
  }
  function ti(e) {
    return e.getParam("table_style_by_css", !1, "boolean");
  }
  function ri(e) {
    return e.getParam("table_cell_class_list", [], "array");
  }
  function oi(e) {
    return e.getParam("table_class_list", [], "array");
  }
  function ui(e) {
    return "relative" === $u(e) || !0 === Ku(e);
  }
  function ii(e) {
    var n = "section",
      t = e.getParam("table_header_type", n, "string");
    return y(["section", "cells", "sectionCells", "auto"], t) ? t : n;
  }
  function ci(e) {
    var n = e.getParam("table_column_resizing", Aa, "string");
    return w(["preservetable", "resizetable"], function (e) {
      return e === n;
    }).getOr(Aa);
  }
  function li(e) {
    return "preservetable" === ci(e);
  }
  function ai(e) {
    return "resizetable" === ci(e);
  }
  function fi(e) {
    var n = e.getParam("table_clone_elements");
    return T(n) ? q.some(n.split(/[ ,]/)) : Array.isArray(n) ? q.some(n) : q.none();
  }
  function si(e) {
    return e.getParam("table_background_color_map", [], "array");
  }
  function mi(e) {
    return e.getParam("table_border_color_map", [], "array");
  }
  function di(e, n) {
    return (ui(e) ? Ul : ka(e) ? ql : Vl)(n);
  }
  function gi(e) {
    Wt(e, "width");
  }
  function pi(e) {
    return "false" !== Pn(e, "data-mce-resize");
  }
  function bi(p) {
    function m(e) {
      return "TABLE" === e.nodeName;
    }
    function b(e) {
      return di(p, e);
    }
    function h() {
      return (li(p) ? gu : du)();
    }
    var d,
      g,
      v = q.none(),
      w = q.none(),
      y = q.none();
    return p.on("init", function () {
      var e,
        n,
        t,
        r,
        o,
        u,
        i,
        c,
        l,
        a,
        m,
        f,
        s,
        d,
        g = (n = pi, (e = p).inline ? (u = Yo(e), qn(c = Ve.fromTag("div"), {
          position: "static",
          height: "0",
          width: "0",
          padding: "0",
          margin: "0",
          border: "0"
        }), Xt(Tn(Ve.fromDom(document)), c), c, i = n, {
          parent: C(c),
          view: C(u),
          origin: C(uo(0, 0)),
          isResizable: i
        }) : Il(Ve.fromDom(e.getDoc()), n));
      y = q.some(g), o = p.getParam("object_resizing", !0), (T(o) ? "table" === o : o) && p.getParam("table_resize_bars", !0, "boolean") && (t = h(), l = t, a = b, m = co, f = ao, s = Vu(g), d = Su({
        beforeResize: Cu(["table", "type"]),
        afterResize: Cu(["table", "type"]),
        startDrag: Cu([])
      }), s.events.adjustHeight.bind(function (e) {
        var n = e.table;
        d.trigger.beforeResize(n, "row");
        var t,
          r,
          o,
          u,
          i,
          c,
          l,
          a,
          f,
          s = m.delta(e.delta, n);
        t = n, r = s, o = e.row, u = m, l = $t.fromTable(t), a = O(Mo(l, t, u, To, function (e) {
          return e.getOrThunk(Ht);
        }), function (e, n) {
          return o === n ? Math.max(r + e, Ht()) : e;
        }), i = a, f = O($t.justCells(l), function (e) {
          var n = cu(e.row, e.row + e.rowspan, i);
          return {
            element: e.element,
            height: n,
            rowspan: e.rowspan
          };
        }), A((c = a, O(l.all, function (e, n) {
          return {
            element: e.element,
            height: c[n]
          };
        })), function (e) {
          ho(e.element, e.height);
        }), A(f, function (e) {
          ho(e.element, e.height);
        }), ho(t, I(a, function (e, n) {
          return e + n;
        }, 0)), d.trigger.afterResize(n, "row");
      }), s.events.startAdjust.bind(function (e) {
        d.trigger.startDrag();
      }), s.events.adjustWidth.bind(function (e) {
        var n = e.table;
        d.trigger.beforeResize(n, "col");
        var t = f.delta(e.delta, n),
          r = a(n);
        au(n, t, e.column, l, r), d.trigger.afterResize(n, "col");
      }), (r = {
        on: s.on,
        off: s.off,
        hideBars: s.hideBars,
        showBars: s.showBars,
        destroy: s.destroy,
        events: d.registry
      }).on(), r.events.startDrag.bind(function (e) {
        v = q.some(p.selection.getRng());
      }), r.events.beforeResize.bind(function (e) {
        var n,
          t = e.table.dom,
          r = p,
          o = Jo(n = t),
          u = Qo(t),
          i = Pa + e.type;
        r.fire("ObjectResizeStart", {
          target: n,
          width: o,
          height: u,
          origin: i
        });
      }), r.events.afterResize.bind(function (e) {
        var n,
          t,
          r,
          o,
          u,
          i = e.table,
          c = i.dom;
        nu(i), v.each(function (e) {
          p.selection.setRng(e), p.focus();
        }), n = p, r = Jo(t = c), o = Qo(c), u = Pa + e.type, n.fire("ObjectResized", {
          target: t,
          width: r,
          height: o,
          origin: u
        }), p.undoManager.add();
      }), w = q.some(r));
    }), p.on("ObjectResizeStart", function (e) {
      var n,
        t,
        r,
        o,
        u = e.target;
      m(u) && (n = Ve.fromDom(u), A(p.dom.select(".mce-clonedresizable"), function (e) {
        p.dom.addClass(e, "mce-" + ci(p) + "-columns");
      }), !Ml(n) && ka(p) ? Ma(n) : !Bl(n) && ui(p) && Ba(n), El(n) && Ae(e.origin, Pa) && Ba(n), d = e.width, g = Ia(p) ? "" : (o = (t = p).dom.getStyle(r = u, "width") || t.dom.getAttrib(r, "width"), q.from(o).filter(ne).getOr("")));
    }), p.on("ObjectResized", function (e) {
      var n,
        t,
        r,
        o,
        u,
        i,
        c,
        l,
        a,
        f,
        s = e.target;
      m(s) && (n = Ve.fromDom(s), t = e.origin, Ae(t, "corner-") && (r = n, o = e.width, f = ee(t, "e"), "" === g && Ba(r), o !== d && "" !== g ? (Vn(r, "width", g), u = h(), i = b(r), c = li(p) || f ? yu(r).columns - 1 : 0, au(r, o - d, c, u, i)) : /^(\d+(\.\d+)?)%$/.test(g) && Vn(r, "width", o * parseFloat(g.replace("%", "")) / d + "%"), /^(\d+(\.\d+)?)px$/.test(g) && (a = $t.fromTable(l = r), $t.hasColumns(a) || A(nt(l), function (e) {
        Vn(e, "width", Un(e, "width")), Wt(e, "width");
      }))), nu(n), Gu(p, n.dom, Ca));
    }), p.on("SwitchMode", function () {
      w.each(function (e) {
        p.mode.isReadOnly() ? e.hideBars() : e.showBars();
      });
    }), {
      lazyResize: function lazyResize() {
        return w;
      },
      lazyWire: function lazyWire() {
        return y.getOr(Il(Ve.fromDom(p.getBody()), pi));
      },
      destroy: function destroy() {
        w.each(function (e) {
          e.destroy();
        }), y.each(function (e) {
          var n = e;
          p.inline && Yt(n.parent());
        });
      }
    };
  }
  function hi(e, n) {
    return {
      element: e,
      offset: n
    };
  }
  function vi(e, n) {
    return (e.property().isText(n) ? e.property().getText(n) : e.property().children(n)).length;
  }
  function wi(t, r) {
    1 === Xn(t, "colspan") && yo(t).bind(function (e) {
      return o = ["fixed", "relative", "empty"], q.from(so.exec(e)).bind(function (e) {
        var n = Number(e[1]),
          t = e[2],
          r = t;
        return R(o, function (e) {
          return R(fo[e], function (e) {
            return r === e;
          });
        }) ? q.some({
          value: n,
          unit: t
        }) : q.none();
      });
      var o;
    }).each(function (e) {
      var n = e.value / 2;
      xo(t, n, e.unit), xo(r, n, e.unit);
    });
  }
  function yi(e) {
    return z(e, function (e) {
      return Wa(e.element);
    });
  }
  function Ci(e) {
    var n = "thead" === e.section,
      t = Ln(ja(e.cells), "th");
    return n || t ? {
      type: "header",
      subType: n && t ? "sectionCells" : n ? "section" : "cells"
    } : "tfoot" === e.section ? {
      type: "footer"
    } : {
      type: "body"
    };
  }
  function Si(e, n, t) {
    return we(t(e.element, n), !0, e.isLocked);
  }
  function Ti(e, n) {
    return e.section !== n ? ye(e.element, e.cells, n, e.isNew) : e;
  }
  function xi() {
    return {
      transformRow: Ti,
      transformCell: function transformCell(e, n, t) {
        var r,
          o,
          u = t(e.element, n);
        return we("td" !== Ye(u) ? (o = sr(r = u, "td"), Rt(r, o), It(o, ln(r)), Yt(r), o) : u, e.isNew, e.isLocked);
      }
    };
  }
  function Ri() {
    return {
      transformRow: Ti,
      transformCell: Si
    };
  }
  function Di() {
    return {
      transformRow: function transformRow(e, n) {
        return Ti(e, "thead" === n ? "tbody" : n);
      },
      transformCell: Si
    };
  }
  function Oi(e, n, t, r) {
    t === r ? Wt(e, n) : Mn(e, n, t);
  }
  function Ai(e, n, t) {
    F(mn(e, n)).fold(function () {
      return Ot(e, t);
    }, function (e) {
      return Dt(e, t);
    });
  }
  function ki(u, e) {
    function t(e, n) {
      var t, r, o;
      It((Bt(o = An(t = u, r = n).getOrThunk(function () {
        var e = Ve.fromTag(r, nn(t).dom);
        return "thead" === r ? Ai(t, "caption,colgroup", e) : "colgroup" === r ? Ai(t, "caption", e) : Xt(t, e), e;
      })), o), ("colgroup" === n ? function (e) {
        return N(e, function (e) {
          return O(e.cells, function (e) {
            return Oi(e.element, "span", e.colspan, 1), e.element;
          });
        });
      } : function (e) {
        return O(e, function (e) {
          e.isNew && i.push(e.element);
          var n = e.element;
          return Bt(n), A(e.cells, function (e) {
            e.isNew && c.push(e.element), Oi(e.element, "colspan", e.colspan, 1), Oi(e.element, "rowspan", e.rowspan, 1), Xt(n, e.element);
          }), n;
        });
      })(e));
    }
    function n(e, n) {
      0 < e.length ? t(e, n) : An(u, n).each(Yt);
    }
    var i = [],
      c = [],
      r = [],
      o = [],
      l = [],
      a = [];
    return A(e, function (e) {
      switch (e.section) {
        case "thead":
          r.push(e);
          break;
        case "tbody":
          o.push(e);
          break;
        case "tfoot":
          l.push(e);
          break;
        case "colgroup":
          a.push(e);
      }
    }), n(a, "colgroup"), n(r, "thead"), n(o, "tbody"), n(l, "tfoot"), {
      newRows: i,
      newCells: c
    };
  }
  function Ii(e, n) {
    if (0 === e.length) return 0;
    var t = e[0];
    return b(e, function (e) {
      return !n(t.element, e.element);
    }).getOr(e.length);
  }
  function Bi(m, d) {
    var g = O(m, function (e) {
      return O(e.cells, v);
    });
    return O(m, function (e, s) {
      var n = N(e.cells, function (e, n) {
        if (!1 !== g[s][n]) return [];
        var t,
          r,
          o,
          u,
          i,
          c,
          l,
          a,
          f = (o = n, u = d, l = (t = m)[r = s], a = "colgroup" === l.section, {
            colspan: Ii(l.cells.slice(o), u),
            rowspan: a ? 1 : Ii((i = t.slice(r), c = o, O(i, function (e) {
              return st(e, c);
            })), u)
          });
        return function (e, n, t, r) {
          for (var o = e; o < e + t; o++) for (var u = n; u < n + r; u++) g[o][u] = !0;
        }(s, n, f.rowspan, f.colspan), [{
          element: e.element,
          rowspan: f.rowspan,
          colspan: f.colspan,
          isNew: e.isNew
        }];
      });
      return {
        element: e.element,
        cells: n,
        section: e.section,
        isNew: e.isNew
      };
    });
  }
  function Mi(o, u, i) {
    var c = [];
    A(o.colgroups, function (e) {
      for (var n = [], t = 0; t < o.grid.columns; t++) {
        var r = $t.getColumnAt(o, t).map(function (e) {
          return we(e.element, i, !1);
        }).getOrThunk(function () {
          return we(u.colGap(), !0, !1);
        });
        n.push(r);
      }
      c.push(ye(e.element, n, "colgroup", i));
    });
    for (var e = 0; e < o.grid.rows; e++) {
      for (var n = [], t = 0; t < o.grid.columns; t++) {
        var r = $t.getAt(o, e, t).map(function (e) {
          return we(e.element, i, e.isLocked);
        }).getOrThunk(function () {
          return we(u.gap(), !0, !1);
        });
        n.push(r);
      }
      var l = o.all[e],
        a = ye(l.element, n, l.section, i);
      c.push(a);
    }
    return c;
  }
  function Ei(e) {
    return Bi(e, ce);
  }
  function Pi(e, n) {
    return H(e.all, function (e) {
      return w(e.cells, function (e) {
        return ce(n, e.element);
      });
    });
  }
  function Ni(n, e, t) {
    var r = _n(O(e.selection, function (e) {
      return et(e).bind(function (e) {
        return Pi(n, e);
      }).filter(t);
    }));
    return jn(0 < r.length, r);
  }
  function zi(f, n, s, m, d) {
    return function (o, u, e, i, c) {
      var l = $t.fromTable(u),
        a = q.from(null == c ? void 0 : c.section).getOrThunk(Pl);
      return n(l, e).map(function (e) {
        var n = Mi(l, i, !1),
          t = f(n, e, ce, d(i), a),
          r = ht(t.grid);
        return {
          info: e,
          grid: Ei(t.grid),
          cursor: t.cursor,
          lockedColumns: r
        };
      }).bind(function (e) {
        var n = ki(u, e.grid),
          t = q.from(null == c ? void 0 : c.sizing).getOrThunk(function () {
            return Vl(u);
          }),
          r = q.from(null == c ? void 0 : c.resize).getOrThunk(gu);
        return s(u, e.grid, e.info, {
          sizing: t,
          resize: r,
          section: a
        }), m(u), Wu(o, u), Wt(u, Gt), 0 < e.lockedColumns.length && Mn(u, Gt, e.lockedColumns.join(",")), q.some({
          cursor: e.cursor,
          newRows: n.newRows,
          newCells: n.newCells
        });
      });
    };
  }
  function Li(e, n) {
    return Ni(e, n, x).map(function (e) {
      return {
        cells: e,
        generators: n.generators,
        clipboard: n.clipboard
      };
    });
  }
  function _i(e, n) {
    return Ni(e, n, x);
  }
  function Wi(e, n) {
    return Ni(e, n, function (e) {
      return !e.isLocked;
    });
  }
  function ji(n, e) {
    return z(e, function (e) {
      return Pi(n, e).exists(function (e) {
        return !e.isLocked;
      });
    });
  }
  function Fi(n, e) {
    return e.mergable.filter(function (e) {
      return ji(n, e.cells);
    });
  }
  function Hi(n, e) {
    return e.unmergable.filter(function (e) {
      return ji(n, e);
    });
  }
  function Vi(e, n, t, r) {
    for (var o = gt(e).rows, u = !0, i = 0; i < o.length; i++) for (var c = 0; c < dt(o[0]); c++) {
      var l = o[i],
        a = st(l, c),
        f = t(a.element, n);
      !0 === f && !1 === u ? ft(l, c, we(r(), !0, a.isLocked)) : !0 === f && (u = !1);
    }
    return e;
  }
  function qi(e, t, i, c) {
    var n,
      r,
      l = gt(e).rows;
    return 0 < t && t < l.length && (n = l[t - 1].cells, r = i, A(B(n, function (e, n) {
      return R(e, function (e) {
        return r(e.element, n.element);
      }) ? e : e.concat([n]);
    }, []), function (e) {
      for (var o = q.none(), u = t; u < l.length; u++) for (var n = 0; n < dt(l[0]); n++) !function (n) {
        var t = l[u],
          r = st(t, n);
        i(r.element, e.element) && (o = o.isNone() ? q.some(c()) : o).each(function (e) {
          ft(t, n, we(e, !0, r.isLocked));
        });
      }(n);
    })), e;
  }
  function Ui(e, n) {
    return {
      rowDelta: 0,
      colDelta: dt(e[0]) - dt(n[0])
    };
  }
  function Gi(e, n) {
    return {
      rowDelta: e.length - n.length,
      colDelta: 0
    };
  }
  function $i(e, n, t, r) {
    var o = "colgroup" === n.section ? t.col : t.cell;
    return D(e, function (e) {
      return we(o(), !0, r(e));
    });
  }
  function Ki(e, n, r, o) {
    var u = e[e.length - 1];
    return e.concat(D(n, function () {
      var e = "colgroup" === u.section ? r.colgroup : r.row,
        n = pt(u, e, S),
        t = $i(n.cells.length, n, r, function (e) {
          return Ke(o, e.toString());
        });
      return Ut(n, t);
    }));
  }
  function Xi(e, t, r, o) {
    return O(e, function (e) {
      var n = $i(t, e, r, v);
      return lt(e, o, n);
    });
  }
  function Yi(e, n, t) {
    var r = n.colDelta < 0 ? Xi : S,
      o = n.rowDelta < 0 ? Ki : S,
      u = ht(e),
      i = dt(e[0]),
      c = R(u, function (e) {
        return e === i - 1;
      }),
      l = r(e, Math.abs(n.colDelta), t, c ? i - 1 : i),
      a = ht(l);
    return o(l, Math.abs(n.rowDelta), t, L(a, x));
  }
  function Ji(n, t, e) {
    return k(e, function (e) {
      return e >= n.column && e <= dt(t[0]) + n.column;
    });
  }
  function Qi(e, u, n, i, c) {
    var t,
      r,
      o,
      l = ht(u),
      a = (t = e, r = l, o = dt(u[0]), {
        row: gt(u).cols.length + t.row,
        column: w(D(o - t.column, function (e) {
          return e + t.column;
        }), function (n) {
          return z(r, function (e) {
            return e !== n;
          });
        }).getOr(o - 1)
      }),
      f = gt(n).rows,
      s = Ji(a, f, l);
    return function (e, n, t) {
      if (e.row >= n.length || e.column > dt(n[0])) return Ga.error("invalid start address out of table bounds, row: " + e.row + ", column: " + e.column);
      var r = n.slice(e.row),
        o = r[0].cells.slice(e.column),
        u = dt(t[0]),
        i = t.length;
      return Ga.value({
        rowDelta: r.length - i,
        colDelta: o.length - u
      });
    }(a, u, f).map(function (e) {
      var n = _K(_K({}, e), {
          colDelta: e.colDelta - s.length
        }),
        t = Yi(u, n, i),
        r = ht(t),
        o = Ji(a, f, r);
      return function (e, n, t, r, o, u) {
        for (var i, c, l, a, f, s = e.row, m = e.column, d = s + t.length, g = m + dt(t[0]) + u.length, p = L(u, x), b = s; b < d; b++) for (var h, v, w, y = 0, C = m; C < g; C++) p[C] ? y++ : (l = C, a = void 0, a = P(o, st((i = n)[c = b], l).element), f = i[c], 1 < i.length && 1 < dt(f) && (0 < l && a(mt(f, l - 1)) || l < f.cells.length - 1 && a(mt(f, l + 1)) || 0 < c && a(mt(i[c - 1], l)) || c < i.length - 1 && a(mt(i[c + 1], l))) && Vi(n, mt(n[b], C), o, r.cell), v = (h = st(t[b - s], C - m - y)).element, w = r.replace(v), ft(n[b], C, we(w, !0, h.isLocked)));
        return n;
      }(a, t, f, i, c, o);
    });
  }
  function Zi(t, e, n, r, o) {
    var u = t,
      i = o,
      c = r.cell;
    0 < u && u < e[0].cells.length && A(e, function (e) {
      var n = e.cells[u - 1],
        t = e.cells[u];
      i(t.element, n.element) && ft(e, u, we(c(), !0, t.isLocked));
    });
    var l = Yi(n, Gi(n, e), r);
    return O(Yi(e, Gi(e, l), r), function (e, n) {
      return lt(e, t, l[n].cells);
    });
  }
  function ec(e, n, t, r, o) {
    qi(n, e, o, r.cell);
    var u,
      i,
      c = ht(n),
      l = Ui(n, t),
      a = Yi(n, _K(_K({}, l), {
        colDelta: l.colDelta - c.length
      }), r),
      f = gt(a),
      s = f.cols,
      m = f.rows,
      d = ht(a),
      g = Ui(t, n),
      p = _K(_K({}, g), {
        colDelta: g.colDelta + d.length
      }),
      b = Yi((u = r, i = d, O(t, function (t) {
        return B(i, function (e, n) {
          return at(e, n, $i(1, t, u, x)[0]);
        }, t);
      })), p, r);
    return s.concat(m.slice(0, e)).concat(b).concat(m.slice(e, m.length));
  }
  function nc(e, t, n, r, o) {
    var u,
      i,
      c,
      l,
      a = gt(e),
      f = a.rows,
      s = a.cols,
      m = f.slice(0, t),
      d = f.slice(t),
      g = (u = f[n], i = function i(e, n) {
        return 0 < t && t < f.length && r(mt(f[t - 1], n), mt(f[t], n)) ? st(f[t], n) : we(o(e.element, r), !0, e.isLocked);
      }, c = r, l = o, pt(u, function (e) {
        return l(e, c);
      }, i));
    return s.concat(m).concat([g]).concat(d);
  }
  function tc(e, u, i, c, l) {
    return O(e, function (e) {
      var n,
        t,
        r = 0 < u && u < dt(e) && c(mt(e, u - 1), mt(e, u)),
        o = (n = e.section, t = l, "colgroup" !== n && r ? st(e, u) : we(t(st(e, i).element, c), !0, !1));
      return at(e, u, o);
    });
  }
  function rc(e, n, t, r) {
    return void 0 !== mt((u = e)[i = n], t) && 0 < i && r(mt(u[i - 1], t), mt(u[i], t)) || (o = e[n], 0 < t && r(mt(o, t - 1), mt(o, t)));
    var o, u, i;
  }
  function oc(e, n, t, r) {
    function o(e) {
      return ("row" === e ? Jn : Yn)(n) ? e + "group" : e;
    }
    return e ? Wa(n) ? o(t) : null : r && Wa(n) ? o("row" === t ? "col" : "row") : null;
  }
  function uc(e, n, t) {
    return we(t(e.element, n), !0, e.isLocked);
  }
  function ic(e, u, i, c, l, a, f) {
    return O(e, function (e, o) {
      return t = function t(e, n) {
        if (t = e, R(u, function (e) {
          return i(t.element, e.element);
        })) {
          var r = f(e, o, n) ? l(e, i, c) : e;
          return a(r, o, n).each(function (e) {
            var t = r.element;
            ae({
              scope: q.from(e)
            }, function (e, n) {
              e.fold(function () {
                Wt(t, n);
              }, function (e) {
                Bn(t.dom, n, e);
              });
            });
          }), r;
        }
        return e;
        var t;
      }, r = O((n = e).cells, t), ye(n.element, r, n.section, n.isNew);
      var n, t, r;
    });
  }
  function cc(t, r, o) {
    return N(t, function (e, n) {
      return rc(t, n, r, o) ? [] : [st(e, r)];
    });
  }
  function lc(e, n, t, r, o) {
    var u,
      i,
      c,
      l,
      a = gt(e).rows,
      f = N(n, function (e) {
        return cc(a, e, r);
      }),
      s = O(e, function (e) {
        return yi(e.cells);
      }),
      m = (u = f, z(i = s, S) && yi(u) ? x : function (e, n, t) {
        return !("th" === Ye(e.element) && i[n]);
      }),
      d = (c = t, l = s, function (e, n) {
        return q.some(oc(c, e.element, "row", l[n]));
      });
    return ic(e, f, r, o, uc, d, m);
  }
  function ac(e, n, t, r) {
    var o = gt(e).rows;
    return ic(e, O(n, function (e) {
      return st(o[e.row], e.column);
    }), t, r, uc, q.none, x);
  }
  function fc(e) {
    return B(e, function (e, n) {
      return R(e, function (e) {
        return e.column === n.column;
      }) ? e : e.concat([n]);
    }, []).sort(function (e, n) {
      return e.column - n.column;
    });
  }
  function sc(e) {
    return "tr" === Ye(e) || Ka(e);
  }
  function mc(e) {
    return {
      element: e,
      colspan: Kn(e, "colspan", 1),
      rowspan: Kn(e, "rowspan", 1)
    };
  }
  function dc(e) {
    return Nn(e, "scope").map(function (e) {
      return e.substr(0, 3);
    });
  }
  function gc(e) {
    return n = e, t = Ya.property().name(n), y(Xa, t);
    var n, t;
  }
  function pc(e) {
    return n = e, y(["ol", "ul"], Ya.property().name(n));
    var n;
  }
  function bc(e) {
    function u(e) {
      return "br" === Ye(e);
    }
    function t(o) {
      return jo(o).bind(function (t) {
        var r = cn(t).map(function (e) {
          return !!gc(e) || (n = e, !!y(["br", "img", "hr", "input"], Ya.property().name(n)) && "img" !== Ye(e));
          var n;
        }).getOr(!1);
        return rn(t).map(function (e) {
          return !0 === r || "li" === Ye(n = e) || Dn(n, pc).isSome() || u(t) || gc(e) && !ce(o, e) ? [] : [Ve.fromTag("br")];
          var n;
        });
      }).getOr([]);
    }
    var n,
      r = 0 === (n = N(e, function (e) {
        var n = ln(e);
        return z(n, function (e) {
          return u(e) || pn(e) && 0 === Et(e).trim().length;
        }) ? [] : n.concat(t(e));
      })).length ? [Ve.fromTag("br")] : n;
    Bt(e[0]), It(e[0], r);
  }
  function hc(e) {
    return Nu(e, !0);
  }
  function vc(e) {
    0 === nt(e).length && Yt(e);
  }
  function wc(e, n) {
    return {
      grid: e,
      cursor: n
    };
  }
  function yc(e, n, t) {
    var r,
      o,
      u,
      i,
      c,
      l = (r = n, o = t, c = gt(e).rows, q.from(null === (i = null === (u = c[r]) || void 0 === u ? void 0 : u.cells[o]) || void 0 === i ? void 0 : i.element).filter(hc).orThunk(function () {
        return H(c, function (e) {
          return H(e.cells, function (e) {
            var n = e.element;
            return jn(hc(n), n);
          });
        });
      }));
    return wc(e, l);
  }
  function Cc(e) {
    return B(e, function (e, n) {
      return R(e, function (e) {
        return e.row === n.row;
      }) ? e : e.concat([n]);
    }, []).sort(function (e, n) {
      return e.row - n.row;
    });
  }
  function Sc(u, i) {
    return function (e, n, t, r, o) {
      return yc(function (e, n, t, r, u, o, i) {
        var c = gt(e),
          l = c.cols,
          a = c.rows,
          f = a[n[0]],
          s = N(n, function (e) {
            return o = u, N((t = a)[r = e].cells, function (e, n) {
              return rc(t, r, n, o) ? [] : [e];
            });
            var t, r, o;
          }),
          m = O(f.cells, function (e, n) {
            return yi(cc(a, n, u));
          }),
          d = X([], a, !0);
        A(n, function (e) {
          d[e] = i.transformRow(a[e], t);
        });
        var g,
          p,
          b,
          h,
          v = l.concat(d),
          w = (g = f, z(p = m, S) && yi(g.cells) ? x : function (e, n, t) {
            return !("th" === Ye(e.element) && p[t]);
          }),
          y = (b = r, h = m, function (e, n, t) {
            return q.some(oc(b, e.element, "col", h[t]));
          });
        return ic(v, s, u, o, i.transformCell, y, w);
      }(e, O(Cc(n), function (e) {
        return e.row;
      }), u, i, t, r.replaceOrInit, o), n[0].row, n[0].column);
    };
  }
  function Tc(e, n, t) {
    var r,
      o = (r = t.section, ut(e, function () {
        return r;
      }));
    return Mi($t.generate(o), n, !0);
  }
  function xc(e, n, t, r) {
    var o = r.sizing,
      u = $t.generate(n);
    lu(u, o.getWidths(u, o), o);
  }
  function Rc(e, n, t, r) {
    var o = t,
      u = r.sizing,
      i = r.resize,
      c = $t.generate(n),
      l = u.getWidths(c, u),
      a = u.pixelWidth(),
      f = i.calcRedestributedWidths(l, a, o.pixelDelta, u.isRelative),
      s = f.newSizes,
      m = f.delta;
    lu(c, s, u), u.adjustTableWidth(m);
  }
  function Dc(e, n) {
    return R(n, function (e) {
      return 0 === e.column && e.isLocked;
    });
  }
  function Oc(n, e) {
    return R(e, function (e) {
      return e.column + e.colspan >= n.grid.columns && e.isLocked;
    });
  }
  function Ac(e, n) {
    var t = yr(e);
    return B(fc(n), function (e, n) {
      return e + t[n.column].map(wr).getOr(0);
    }, 0);
  }
  function kc(t) {
    return function (n, e) {
      return _i(n, e).filter(function (e) {
        return !(t ? Dc : Oc)(n, e);
      }).map(function (e) {
        return {
          details: e,
          pixelDelta: Ac(n, e)
        };
      });
    };
  }
  function Ic(t) {
    return function (n, e) {
      return Li(n, e).filter(function (e) {
        return !(t ? Dc : Oc)(n, e.cells);
      });
    };
  }
  function Bc(e, n) {
    var u = $t.fromTable(e);
    return _i(u, n).bind(function (e) {
      var n = e[e.length - 1],
        t = e[0].column,
        r = n.column + n.colspan,
        o = M(O(u.all, function (e) {
          return k(e.cells, function (e) {
            return e.column >= t && e.column < r;
          });
        }));
      return ja(o);
    }).getOr("");
  }
  function Mc(e, n) {
    return _i($t.fromTable(e), n).bind(ja).getOr("");
  }
  function Ec(m, d, e) {
    function n(e) {
      return "table" === Ye(Yo(e));
    }
    function t(c, l, a, f, s) {
      return function (t, e, o) {
        void 0 === o && (o = !1), nu(t);
        var n = f(),
          r = Ve.fromDom(m.getDoc()),
          u = $o(a, r, g),
          i = {
            sizing: di(m, t),
            resize: (ai(m) ? du : gu)(),
            section: function (e) {
              switch (ii(m)) {
                case "section":
                  return Fa();
                case "sectionCells":
                  return Ha();
                case "cells":
                  return Va();
                default:
                  return function (e, n) {
                    var t;
                    switch (H($t.fromTable(e).all, function (e) {
                      var n = Ci(e);
                      return "header" === n.type ? q.from(n.subType) : q.none();
                    }).getOr(n)) {
                      case "section":
                        return xi();
                      case "sectionCells":
                        return Ri();
                      case "cells":
                        return Di();
                    }
                  }(e, "section");
              }
            }(t)
          };
        return l(t) ? c(n, t, e, u, i).bind(function (e) {
          A(e.newRows, function (e) {
            qu(m, e.dom);
          }), A(e.newCells, function (e) {
            Uu(m, e.dom);
          });
          var r,
            n = (r = t, e.cursor.fold(function () {
              return j(nt(r)).filter(Sn).map(function (e) {
                d.clear(r);
                var n = m.dom.createRng();
                return n.selectNode(e.dom), m.selection.setRng(n), Mn(e, "data-mce-selected", "1"), n;
              });
            }, function (e) {
              var n = La(_a, e),
                t = m.dom.createRng();
              return t.setStart(n.element.dom, n.offset), t.setEnd(n.element.dom, n.offset), m.selection.setRng(t), d.clear(r), q.some(t);
            }));
          return Sn(t) && (nu(t), o || Gu(m, t.dom, s)), n.map(function (e) {
            return {
              rng: e,
              effect: s
            };
          });
        }) : q.none();
      };
    }
    var g = fi(m),
      r = ai(m) ? E : wi;
    return {
      deleteRow: t(lf, function (e) {
        return !1 === n(m) || 1 < yu(e).rows;
      }, E, e, Sa),
      deleteColumn: t(cf, function (e) {
        return !1 === n(m) || 1 < yu(e).columns;
      }, E, e, Sa),
      insertRowsBefore: t(tf, x, E, e, Sa),
      insertRowsAfter: t(rf, x, E, e, Sa),
      insertColumnsBefore: t(of, x, r, e, Sa),
      insertColumnsAfter: t(uf, x, r, e, Sa),
      mergeCells: t(bf, x, E, e, Sa),
      unmergeCells: t(hf, x, E, e, Sa),
      pasteColsBefore: t(wf, x, E, e, Sa),
      pasteColsAfter: t(yf, x, E, e, Sa),
      pasteRowsBefore: t(Cf, x, E, e, Sa),
      pasteRowsAfter: t(Sf, x, E, e, Sa),
      pasteCells: t(vf, x, E, e, Ta),
      makeCellsHeader: t(gf, x, E, e, Sa),
      unmakeCellsHeader: t(pf, x, E, e, Sa),
      makeColumnsHeader: t(af, x, E, e, Sa),
      unmakeColumnsHeader: t(ff, x, E, e, Sa),
      makeRowsHeader: t(sf, x, E, e, Sa),
      makeRowsBody: t(mf, x, E, e, Sa),
      makeRowsFooter: t(df, x, E, e, Sa),
      getTableRowType: Tf,
      getTableCellType: Mc,
      getTableColType: Bc
    };
  }
  function Pc(e, n, t, r) {
    return D(e, function (e) {
      return function (e, n, t, r) {
        for (var o = Ve.fromTag("tr"), u = 0; u < e; u++) {
          var i = r < n || u < t ? Ve.fromTag("th") : Ve.fromTag("td");
          u < t && Mn(i, "scope", "row"), r < n && Mn(i, "scope", "col"), Xt(i, Ve.fromTag("br")), Xt(o, i);
        }
        return o;
      }(n, t, r, e);
    });
  }
  function Nc(e, n) {
    e.selection.select(n.dom, !0), e.selection.collapse(!0);
  }
  function zc(u, i, c, l, a) {
    var o = Qu(u),
      f = {
        styles: o,
        attributes: Ju(u),
        colGroups: u.getParam("table_use_colgroups", !1, "boolean")
      };
    return u.undoManager.ignore(function () {
      var e = function (e, n, t, r, o, u) {
        void 0 === u && (u = xf);
        var i,
          c,
          l = Ve.fromTag("table"),
          a = "cells" !== o;
        qn(l, u.styles), En(l, u.attributes), u.colGroups && Xt(l, (i = n, c = Ve.fromTag("colgroup"), D(i, function () {
          return Xt(c, Ve.fromTag("col"));
        }), c));
        var f,
          s = Math.min(e, t);
        a && 0 < t && (f = Ve.fromTag("thead"), Xt(l, f), It(f, Pc(t, n, "sectionCells" === o ? s : 0, r)));
        var m = Ve.fromTag("tbody");
        return Xt(l, m), It(m, Pc(a ? e - s : e, n, a ? 0 : t, r)), l;
      }(c, i, a, l, ii(u), f);
      Mn(e, "data-mce-id", "__mce");
      var n,
        t,
        r,
        o = (n = e, t = Ve.fromTag("div"), r = Ve.fromDom(n.dom.cloneNode(!0)), Xt(t, r), t.dom.innerHTML);
      u.insertContent(o), u.addVisual();
    }), kn(Yo(u), 'table[data-mce-id="__mce"]').map(function (e) {
      var n, t, r;
      return ka(u) ? Ma(e) : Ia(u) ? Ea(e) : (ui(u) || (n = o.width, T(n) && -1 !== n.indexOf("%"))) && Ba(e), nu(e), Wt(e, "data-mce-id"), t = u, A(dn(e, "tr"), function (e) {
        qu(t, e.dom), A(dn(e, "th,td"), function (e) {
          Uu(t, e.dom);
        });
      }), r = u, kn(e, "td,th").each(P(Nc, r)), e.dom;
    }).getOr(null);
  }
  function Lc(e, n, t, r, o) {
    function u(e) {
      return f(e) && 0 < e;
    }
    if (void 0 === r && (r = {}), u(n) && u(t)) {
      var i = r.headerRows || 0;
      return zc(e, t, n, r.headerColumns || 0, i);
    }
    return console.error(o), null;
  }
  function _c(e) {
    return function () {
      return e().fold(function () {
        return [];
      }, function (e) {
        return O(e, function (e) {
          return e.dom;
        });
      });
    };
  }
  function Wc(t) {
    return function (e) {
      var n = 0 < e.length ? q.some(Xo(e)) : q.none();
      t(n);
    };
  }
  function jc(e, n, t) {
    var r = Kn(e, n, 1);
    1 === t || r <= 1 ? Wt(e, n) : Mn(e, n, Math.min(t, r));
  }
  function Fc(o, e, u) {
    return function (e, n) {
      for (var t = 0; t < n.length; t++) {
        var r = o.getStyle(n[t], u);
        if ((e = void 0 === e ? r : e) !== r) return "";
      }
      return e;
    }(void 0, o.select("td,th", e));
  }
  function Hc(e, n, t) {
    t && e.formatter.apply("align" + t, {}, n);
  }
  function Vc(n, t) {
    Rf.each("left center right".split(" "), function (e) {
      n.formatter.remove("align" + e, {}, t);
    });
  }
  function qc(e) {
    return Of.test(t = e) || Af.test(t) ? q.some({
      value: (Ae(n = e, "#") ? n.substring("#".length) : n).toUpperCase()
    }) : q.none();
    var n, t;
  }
  function Uc(e) {
    var n = e.toString(16);
    return (1 === n.length ? "0" + n : n).toUpperCase();
  }
  function Gc(e) {
    return {
      value: Uc(e.red) + Uc(e.green) + Uc(e.blue)
    };
  }
  function $c(e, n, t, r) {
    return {
      red: e,
      green: n,
      blue: t,
      alpha: r
    };
  }
  function Kc(e, n, t, r) {
    return $c(parseInt(e, 10), parseInt(n, 10), parseInt(t, 10), parseFloat(r));
  }
  function Xc(e) {
    var n = e;
    return {
      get: function get() {
        return n;
      },
      set: function set(e) {
        n = e;
      }
    };
  }
  function Yc(e) {
    function n() {
      return t.get().each(e);
    }
    var t = Xc(q.none());
    return {
      clear: function clear() {
        n(), t.set(q.none());
      },
      isSet: function isSet() {
        return t.get().isSome();
      },
      get: function get() {
        return t.get();
      },
      set: function set(e) {
        n(), t.set(q.some(e));
      }
    };
  }
  function Jc() {
    var n = Yc(E);
    return _K(_K({}, n), {
      on: function on(e) {
        return n.get().each(e);
      }
    });
  }
  function Qc(e) {
    return be(e, "menu");
  }
  function Zc(t, r) {
    return function (e) {
      var n;
      t.execCommand("mceTableApplyCellStyle", !1, ((n = {})[r] = e, n));
    };
  }
  function el(n, t, r, o, u) {
    return function (e) {
      return e(Mf(n, t, r, o, u));
    };
  }
  function nl(r, e, o) {
    var n = O(e, function (e) {
      return {
        text: e.title,
        value: "#" + qc(r = e.value).orThunk(function () {
          return function (e) {
            if ("transparent" === e) return q.some($c(0, 0, 0, 0));
            var n = kf.exec(e);
            if (null !== n) return q.some(Kc(n[1], n[2], n[3], "1"));
            var t = If.exec(e);
            return null !== t ? q.some(Kc(t[1], t[2], t[3], t[4])) : q.none();
          }(r).map(Gc);
        }).getOrThunk(function () {
          var e = document.createElement("canvas");
          e.height = 1, e.width = 1;
          var n = e.getContext("2d");
          n.clearRect(0, 0, e.width, e.height), n.fillStyle = "#FFFFFF", n.fillStyle = r, n.fillRect(0, 0, 1, 1);
          var t = n.getImageData(0, 0, 1, 1).data;
          return Gc($c(t[0], t[1], t[2], t[3]));
        }).value,
        type: "choiceitem"
      };
      var r;
    });
    return [{
      type: "fancymenuitem",
      fancytype: "colorswatch",
      initData: {
        colors: 0 < n.length ? n : void 0,
        allowCustomColors: !1
      },
      onAction: function onAction(e) {
        var n,
          t = "remove" === e.value ? "" : e.value;
        r.execCommand("mceTableApplyCellStyle", !1, ((n = {})[o] = t, n));
      }
    }];
  }
  function tl(n) {
    return function () {
      var e = n.queryCommandValue("mceTableRowType");
      n.execCommand("mceTableRowType", !1, {
        type: "header" === e ? "body" : "header"
      });
    };
  }
  function rl(n) {
    return function () {
      var e = n.queryCommandValue("mceTableColType");
      n.execCommand("mceTableColType", !1, {
        type: "th" === e ? "td" : "th"
      });
    };
  }
  function ol(e) {
    return Pf.concat((0 < (n = Bf(ri(e))).length ? q.some({
      name: "class",
      type: "listbox",
      label: "Class",
      items: n
    }) : q.none()).toArray());
    var n;
  }
  function ul(e, n) {
    var t = [{
      name: "borderstyle",
      type: "listbox",
      label: "Border style",
      items: [{
        text: "Select...",
        value: ""
      }].concat(Bf(Yu(e)))
    }, {
      name: "bordercolor",
      type: "colorinput",
      label: "Border color"
    }, {
      name: "backgroundcolor",
      type: "colorinput",
      label: "Background color"
    }];
    return {
      title: "Advanced",
      name: "advanced",
      items: "cell" === n ? [{
        name: "borderwidth",
        type: "input",
        label: "Border width"
      }].concat(t) : t
    };
  }
  function il(u) {
    return function (t, r) {
      var o = t.dom;
      return {
        setAttrib: function setAttrib(e, n) {
          u && !n || o.setAttrib(r, e, n);
        },
        setStyle: function setStyle(e, n) {
          u && !n || o.setStyle(r, e, n);
        },
        setFormat: function setFormat(e, n) {
          u && !n || ("" === n ? t.formatter.remove(e, {
            value: null
          }, r, !0) : t.formatter.apply(e, {
            value: n
          }, r));
        }
      };
    };
  }
  function cl(n) {
    return function (e) {
      return Ae(e, "rgb") ? n.toHex(e) : e;
    };
  }
  function ll(e, n) {
    var t = Ve.fromDom(n);
    return {
      borderwidth: Gn(t, "border-width").getOr(""),
      borderstyle: Gn(t, "border-style").getOr(""),
      bordercolor: Gn(t, "border-color").map(cl(e)).getOr(""),
      backgroundcolor: Gn(t, "background-color").map(cl(e)).getOr("")
    };
  }
  function al(e) {
    var o = e[0];
    return A(e.slice(1), function (e) {
      A(Ue(o), function (r) {
        ae(e, function (e, n) {
          var t = o[r];
          "" !== t && r === n && t !== e && (o[r] = "");
        });
      });
    }), o;
  }
  function fl(e, n, t, r) {
    return w(e, function (e) {
      return !u(t.formatter.matchNode(r, n + e));
    }).getOr("");
  }
  function sl(e, t) {
    var n = $t.fromTable(e);
    return O(k($t.justCells(n), function (n) {
      return R(t, function (e) {
        return ce(n.element, e);
      });
    }), function (e) {
      return {
        element: e.element.dom,
        column: $t.getColumnAt(n, e.column).map(function (e) {
          return e.element.dom;
        })
      };
    });
  }
  function ml(e, n, r, t) {
    var l = t.getData();
    t.close(), e.undoManager.transact(function () {
      var o,
        u = e,
        i = n,
        t = r,
        c = se(o = l, function (e, n) {
          return t[n] !== e;
        });
      0 < ge(c) && 1 <= i.length && rt(i[0]).each(function (e) {
        var s,
          m,
          d,
          n = sl(e, i),
          t = 0 < ge(se(c, function (e, n) {
            return "scope" !== n && "celltype" !== n;
          })),
          r = Ke(c, "celltype");
        (t || Ke(c, "scope")) && (s = u, m = o, d = 1 === n.length, A(n, function (e) {
          var n,
            t,
            r,
            o,
            u,
            i,
            c = e.element,
            l = d ? Nf.normal(s, c) : Nf.ifTruthy(s, c),
            a = e.column.map(function (e) {
              return d ? Nf.normal(s, e) : Nf.ifTruthy(s, e);
            }).getOr(l),
            f = m;
          (n = l).setAttrib("scope", f.scope), n.setAttrib("class", f["class"]), n.setStyle("height", eu(f.height)), a.setStyle("width", eu(f.width)), Zu(s) && ((t = l).setFormat("tablecellbackgroundcolor", (r = m).backgroundcolor), t.setFormat("tablecellbordercolor", r.bordercolor), t.setFormat("tablecellborderstyle", r.borderstyle), t.setFormat("tablecellborderwidth", eu(r.borderwidth))), d && (Vc(s, c), o = s, u = c, Rf.each("top middle bottom".split(" "), function (e) {
            o.formatter.remove("valign" + e, {}, u);
          })), m.halign && Hc(s, c, m.halign), !m.valign || (i = m.valign) && s.formatter.apply("valign" + i, {}, c);
        })), r && u.execCommand("mceTableCellType", !1, {
          type: o.celltype,
          no_events: !0
        }), Gu(u, e.dom, {
          structure: r,
          style: t
        });
      }), e.focus();
    });
  }
  function dl(e, n) {
    var t,
      l,
      r,
      o,
      u,
      i = Ql(n);
    0 !== i.length && (l = e, t = al(rt((r = i)[0]).map(function (e) {
      return O(sl(e, r), function (e) {
        return t = l, r = e.element, o = Zu(l), u = e.column, i = t.dom, c = u.getOr(r), _K({
          width: n(c, "width"),
          height: n(r, "height"),
          scope: i.getAttrib(r, "scope"),
          celltype: r.nodeName.toLowerCase(),
          "class": i.getAttrib(r, "class", ""),
          halign: zf(t, r),
          valign: Lf(t, r)
        }, o ? ll(i, r) : {});
        function n(e, n) {
          return i.getStyle(e, n) || i.getAttrib(e, n);
        }
        var t, r, o, u, i, c;
      });
    }).getOrDie()), o = {
      type: "tabpanel",
      tabs: [{
        title: "General",
        name: "general",
        items: ol(e)
      }, ul(e, "cell")]
    }, u = {
      type: "panel",
      items: [{
        type: "grid",
        columns: 2,
        items: ol(e)
      }]
    }, e.windowManager.open({
      title: "Cell Properties",
      size: "normal",
      body: Zu(e) ? o : u,
      buttons: [{
        type: "cancel",
        name: "cancel",
        text: "Cancel"
      }, {
        type: "submit",
        name: "save",
        text: "Save",
        primary: !0
      }],
      initialData: t,
      onSubmit: P(ml, e, i, t)
    }));
  }
  function gl(e) {
    return _f.concat((0 < (n = Bf(e.getParam("table_row_class_list", [], "array"))).length ? q.some({
      name: "class",
      type: "listbox",
      label: "Class",
      items: n
    }) : q.none()).toArray());
    var n;
  }
  function pl(s, m, d, e) {
    var g = e.getData();
    e.close(), s.undoManager.transact(function () {
      var e,
        n,
        t,
        i,
        c,
        l,
        a,
        r = s,
        o = m,
        u = d,
        f = se(e = g, function (e, n) {
          return u[n] !== e;
        });
      0 < ge(f) && (n = Ke(f, "type"), (t = !n || 1 < ge(f)) && (i = r, c = e, l = u, a = 1 === o.length, A(o, function (e) {
        var n,
          t,
          r,
          o = a ? Nf.normal(i, e) : Nf.ifTruthy(i, e),
          u = c;
        (n = o).setAttrib("class", u["class"]), n.setStyle("height", eu(u.height)), ei(i) && ((t = o).setStyle("background-color", (r = c).backgroundcolor), t.setStyle("border-color", r.bordercolor), t.setStyle("border-style", r.borderstyle)), c.align !== l.align && (Vc(i, e), Hc(i, e, c.align));
      })), n && r.execCommand("mceTableRowType", !1, {
        type: e.type,
        no_events: !0
      }), rt(Ve.fromDom(o[0])).each(function (e) {
        return Gu(r, e.dom, {
          structure: n,
          style: t
        });
      })), s.focus();
    });
  }
  function bl(i) {
    var e,
      t,
      n,
      r,
      o,
      u,
      c,
      l = (e = tu(i), t = Xl.selected, r = (n = Jl(e)).bind(function (e) {
        return rt(e);
      }).map(ot), Wn(n, r, function (n, e) {
        return k(e, function (e) {
          return R(Xo(e.dom.cells), function (e) {
            return "1" === Pn(e, t) || ce(e, n);
          });
        });
      }).getOr([]));
    0 !== l.length && (o = al(O(l, function (e) {
      return n = i, t = e.dom, r = ei(i), u = n.dom, _K({
        height: u.getStyle(t, "height") || u.getAttrib(t, "height"),
        "class": u.getAttrib(t, "class", ""),
        type: rt(Ve.fromDom(o = t)).map(function (e) {
          var n = {
            selection: Xo(o.cells)
          };
          return Tf(e, n);
        }).getOr(""),
        align: zf(n, t)
      }, r ? ll(u, t) : {});
      var n, t, r, o, u;
    })), u = {
      type: "tabpanel",
      tabs: [{
        title: "General",
        name: "general",
        items: gl(i)
      }, ul(i, "row")]
    }, c = {
      type: "panel",
      items: [{
        type: "grid",
        columns: 2,
        items: gl(i)
      }]
    }, i.windowManager.open({
      title: "Row Properties",
      size: "normal",
      body: ei(i) ? u : c,
      buttons: [{
        type: "cancel",
        name: "cancel",
        text: "Cancel"
      }, {
        type: "submit",
        name: "save",
        text: "Save",
        primary: !0
      }],
      initialData: o,
      onSubmit: P(pl, i, O(l, function (e) {
        return e.dom;
      }), o)
    }));
  }
  function hl(u, i, t, e) {
    var c = u.dom,
      l = e.getData(),
      a = se(l, function (e, n) {
        return t[n] !== e;
      });
    e.close(), "" === l["class"] && delete l["class"], u.undoManager.transact(function () {
      var e, n, t, r, o;
      i || (e = parseInt(l.cols, 10) || 1, n = parseInt(l.rows, 10) || 1, i = zc(u, e, n, 0, 0)), 0 < ge(a) && (function (e, n, t) {
        var r,
          o = e.dom,
          u = {},
          i = {};
        if (u["class"] = t["class"], i.height = eu(t.height), o.getAttrib(n, "width") && !ti(e) ? u.width = (r = t.width) ? r.replace(/px$/, "") : "" : i.width = eu(t.width), ti(e) ? (i["border-width"] = eu(t.border), i["border-spacing"] = eu(t.cellspacing)) : (u.border = t.border, u.cellpadding = t.cellpadding, u.cellspacing = t.cellspacing), ti(e) && n.children) for (var c = 0; c < n.children.length; c++) Wf(o, n.children[c], {
          "border-width": eu(t.border),
          padding: eu(t.cellpadding)
        }), ni(e) && Wf(o, n.children[c], {
          "border-color": t.bordercolor
        });
        ni(e) && (i["background-color"] = t.backgroundcolor, i["border-color"] = t.bordercolor, i["border-style"] = t.borderstyle), u.style = o.serializeStyle(_K(_K({}, Qu(e)), i)), o.setAttribs(n, _K(_K({}, Ju(e)), u));
      }(u, i, l), ((t = c.select("caption", i)[0]) && !l.caption || !t && l.caption) && u.execCommand("mceTableToggleCaption"), "" === l.align ? Vc(u, i) : Hc(u, i, l.align)), u.focus(), u.addVisual(), 0 < ge(a) && (o = !(r = Ke(a, "caption")) || 1 < ge(a), Gu(u, i, {
        structure: r,
        style: o
      }));
    });
  }
  function vl(e, n) {
    var t,
      r,
      o,
      u,
      i,
      c,
      l,
      a,
      f,
      s,
      m,
      d,
      g,
      p,
      b,
      h,
      v,
      w,
      y,
      C = e.dom,
      S = (o = ni(r = e), a = Qu(r), f = Ju(r), s = o ? (u = r.dom, {
        borderstyle: pe(a, "border-style").getOr(""),
        bordercolor: cl(u)(pe(a, "border-color").getOr("")),
        backgroundcolor: cl(u)(pe(a, "background-color").getOr(""))
      }) : {}, _K(_K(_K(_K(_K(_K({}, {
        height: "",
        width: "100%",
        cellspacing: "",
        cellpadding: "",
        caption: !1,
        "class": "",
        align: "",
        border: ""
      }), a), f), s), (l = a["border-width"], ti(r) && l ? {
        border: l
      } : pe(f, "border").fold(function () {
        return {};
      }, function (e) {
        return {
          border: e
        };
      }))), (i = pe(a, "border-spacing").or(pe(f, "cellspacing")).fold(function () {
        return {};
      }, function (e) {
        return {
          cellspacing: e
        };
      }), c = pe(a, "border-padding").or(pe(f, "cellpadding")).fold(function () {
        return {};
      }, function (e) {
        return {
          cellpadding: e
        };
      }), _K(_K({}, i), c))));
    !1 === n ? (t = C.getParent(e.selection.getStart(), "table", e.getBody())) ? (d = t, g = ni(m = e), v = m.dom, w = ti(m) ? v.getStyle(d, "border-spacing") || v.getAttrib(d, "cellspacing") : v.getAttrib(d, "cellspacing") || v.getStyle(d, "border-spacing"), y = ti(m) ? Fc(v, d, "padding") || v.getAttrib(d, "cellpadding") : v.getAttrib(d, "cellpadding") || Fc(v, d, "padding"), S = _K({
      width: v.getStyle(d, "width") || v.getAttrib(d, "width"),
      height: v.getStyle(d, "height") || v.getAttrib(d, "height"),
      cellspacing: w,
      cellpadding: y,
      border: (p = v, h = Gn(Ve.fromDom(b = d), "border-width"), ti(m) && h.isSome() ? h.getOr("") : p.getAttrib(b, "border") || Fc(m.dom, b, "border-width") || Fc(m.dom, b, "border")),
      caption: !!v.select("caption", d)[0],
      "class": v.getAttrib(d, "class", ""),
      align: zf(m, d)
    }, g ? ll(v, d) : {})) : ni(e) && (S.borderstyle = "", S.bordercolor = "", S.backgroundcolor = "") : (S.cols = "1", S.rows = "1", ni(e) && (S.borderstyle = "", S.bordercolor = "", S.backgroundcolor = ""));
    var T = Bf(oi(e));
    0 < T.length && S["class"] && (S["class"] = S["class"].replace(/\s*mce\-item\-table\s*/g, ""));
    var x,
      R,
      D,
      O,
      A = {
        type: "grid",
        columns: 2,
        items: (x = T, R = n ? [{
          type: "input",
          name: "cols",
          label: "Cols",
          inputMode: "numeric"
        }, {
          type: "input",
          name: "rows",
          label: "Rows",
          inputMode: "numeric"
        }] : [], D = e.getParam("table_appearance_options", !0, "boolean") ? [{
          type: "input",
          name: "cellspacing",
          label: "Cell spacing",
          inputMode: "numeric"
        }, {
          type: "input",
          name: "cellpadding",
          label: "Cell padding",
          inputMode: "numeric"
        }, {
          type: "input",
          name: "border",
          label: "Border width"
        }, {
          type: "label",
          label: "Caption",
          items: [{
            type: "checkbox",
            name: "caption",
            label: "Show caption"
          }]
        }] : [], O = 0 < x.length ? [{
          type: "listbox",
          name: "class",
          label: "Class",
          items: x
        }] : [], R.concat([{
          type: "input",
          name: "width",
          label: "Width"
        }, {
          type: "input",
          name: "height",
          label: "Height"
        }]).concat(D).concat([{
          type: "listbox",
          name: "align",
          label: "Alignment",
          items: [{
            text: "None",
            value: ""
          }, {
            text: "Left",
            value: "left"
          }, {
            text: "Center",
            value: "center"
          }, {
            text: "Right",
            value: "right"
          }]
        }]).concat(O))
      },
      k = ni(e) ? {
        type: "tabpanel",
        tabs: [{
          title: "General",
          name: "general",
          items: [A]
        }, ul(e, "table")]
      } : {
        type: "panel",
        items: [A]
      };
    e.windowManager.open({
      title: "Table Properties",
      size: "normal",
      body: k,
      onSubmit: P(hl, e, t, S),
      buttons: [{
        type: "cancel",
        name: "cancel",
        text: "Cancel"
      }, {
        type: "submit",
        name: "save",
        text: "Save",
        primary: !0
      }],
      initialData: S
    });
  }
  function wl(e) {
    return Yl(tu(e), Zo(e));
  }
  function yl(l, n, e, a, t) {
    function u(e) {
      return rt(e, d);
    }
    function f(t) {
      return Jl(tu(e = l), Zo(e)).bind(function (n) {
        return u(n).map(function (e) {
          return t(e, n);
        });
      });
      var e;
    }
    function s(e) {
      l.focus();
    }
    function r(r, o) {
      return void 0 === o && (o = !1), f(function (e, n) {
        var t = ou(a, e, n);
        r(e, t, o).each(s);
      });
    }
    function o() {
      return f(function (e, n) {
        var t,
          r,
          o,
          u = ou(a, e, n),
          i = $o(E, Ve.fromDom(l.getDoc()), q.none());
        return t = u, r = i, _i(o = $t.fromTable(e), t).bind(function (e) {
          var n = Ei(N(gt(Mi(o, r, !1)).rows.slice(e[0].row, e[e.length - 1].row + e[e.length - 1].rowspan), function (e) {
            var n = k(e.cells, function (e) {
              return !e.isLocked;
            });
            return 0 < n.length ? [_K(_K({}, e), {
              cells: n
            })] : [];
          }));
          return jn(0 < n.length, n);
        }).map(function (e) {
          return O(e, function (e) {
            var t = ar(e.element);
            return A(e.cells, function (e) {
              var n = fr(e.element);
              Oi(n, "colspan", e.colspan, 1), Oi(n, "rowspan", e.rowspan, 1), Xt(t, n);
            }), t;
          });
        });
      });
    }
    function i() {
      return f(function (e, n) {
        var t,
          l,
          r = ou(a, e, n);
        return t = r, Wi(l = $t.fromTable(e), t).map(function (e) {
          var r,
            o,
            n = e[e.length - 1],
            t = e[0].column,
            u = n.column + n.colspan,
            i = function (e, t, r) {
              if ($t.hasColumns(e)) {
                var n = O(k($t.justColumns(e), function (e) {
                    return e.column >= t && e.column < r;
                  }), function (e) {
                    var n = fr(e.element);
                    return jc(n, "span", r - t), n;
                  }),
                  o = Ve.fromTag("colgroup");
                return It(o, n), [o];
              }
              return [];
            }(l, t, u),
            c = (r = t, o = u, O(l.all, function (e) {
              var n = O(k(e.cells, function (e) {
                  return e.column >= r && e.column < o;
                }), function (e) {
                  var n = fr(e.element);
                  return jc(n, "colspan", o - r), n;
                }),
                t = Ve.fromTag("tr");
              return It(t, n), t;
            }));
          return X(X([], i, !0), c, !0);
        });
      });
    }
    function c(c, e) {
      return e().each(function (e) {
        var i = O(e, fr);
        f(function (e, n) {
          var t,
            r,
            o = Ko(Ve.fromDom(l.getDoc())),
            u = (t = i, r = o, {
              selection: ru(a),
              clipboard: t,
              generators: r
            });
          c(e, u).each(s);
        });
      });
    }
    function m(t) {
      return function (e, n) {
        return pe(n, "type").each(function (e) {
          r(t(e), n.no_events);
        });
      };
    }
    var d = Zo(l);
    ae({
      mceTableSplitCells: function mceTableSplitCells() {
        return r(n.unmergeCells);
      },
      mceTableMergeCells: function mceTableMergeCells() {
        return r(n.mergeCells);
      },
      mceTableInsertRowBefore: function mceTableInsertRowBefore() {
        return r(n.insertRowsBefore);
      },
      mceTableInsertRowAfter: function mceTableInsertRowAfter() {
        return r(n.insertRowsAfter);
      },
      mceTableInsertColBefore: function mceTableInsertColBefore() {
        return r(n.insertColumnsBefore);
      },
      mceTableInsertColAfter: function mceTableInsertColAfter() {
        return r(n.insertColumnsAfter);
      },
      mceTableDeleteCol: function mceTableDeleteCol() {
        return r(n.deleteColumn);
      },
      mceTableDeleteRow: function mceTableDeleteRow() {
        return r(n.deleteRow);
      },
      mceTableCutCol: function mceTableCutCol() {
        return i().each(function (e) {
          t.setColumns(e), r(n.deleteColumn);
        });
      },
      mceTableCutRow: function mceTableCutRow() {
        return o().each(function (e) {
          t.setRows(e), r(n.deleteRow);
        });
      },
      mceTableCopyCol: function mceTableCopyCol() {
        return i().each(function (e) {
          return t.setColumns(e);
        });
      },
      mceTableCopyRow: function mceTableCopyRow() {
        return o().each(function (e) {
          return t.setRows(e);
        });
      },
      mceTablePasteColBefore: function mceTablePasteColBefore() {
        return c(n.pasteColsBefore, t.getColumns);
      },
      mceTablePasteColAfter: function mceTablePasteColAfter() {
        return c(n.pasteColsAfter, t.getColumns);
      },
      mceTablePasteRowBefore: function mceTablePasteRowBefore() {
        return c(n.pasteRowsBefore, t.getRows);
      },
      mceTablePasteRowAfter: function mceTablePasteRowAfter() {
        return c(n.pasteRowsAfter, t.getRows);
      },
      mceTableDelete: function mceTableDelete() {
        return wl(l).each(function (e) {
          rt(e, d).filter(p(d)).each(function (e) {
            var n,
              t = Ve.fromText("");
            Dt(e, t), Yt(e), l.dom.isEmpty(l.getBody()) ? (l.setContent(""), l.selection.setCursorLocation()) : ((n = l.dom.createRng()).setStart(t.dom, 0), n.setEnd(t.dom, 0), l.selection.setRng(n), l.nodeChanged());
          });
        });
      },
      mceTableCellToggleClass: function mceTableCellToggleClass(e, r) {
        f(function (e) {
          var n = Ql(a),
            t = z(n, function (e) {
              return l.formatter.match("tablecellclass", {
                value: r
              }, e.dom);
            }) ? l.formatter.remove : l.formatter.apply;
          A(n, function (e) {
            return t("tablecellclass", {
              value: r
            }, e.dom);
          }), Gu(l, e.dom, Ca);
        });
      },
      mceTableToggleClass: function mceTableToggleClass(e, n) {
        f(function (e) {
          l.formatter.toggle("tableclass", {
            value: n
          }, e.dom), Gu(l, e.dom, Ca);
        });
      },
      mceTableToggleCaption: function mceTableToggleCaption() {
        wl(l).each(function (n) {
          rt(n, d).each(function (r) {
            An(r, "caption").fold(function () {
              var e,
                n,
                t = Ve.fromTag("caption");
              Xt(t, Ve.fromText("Caption")), n = t, an(e = r, 0).fold(function () {
                Xt(e, n);
              }, function (e) {
                Rt(e, n);
              }), l.selection.setCursorLocation(t.dom, 0);
            }, function (e) {
              en("caption")(n) && ie("td", r).each(function (e) {
                return l.selection.setCursorLocation(e.dom, 0);
              }), Yt(e);
            }), Gu(l, r.dom, Sa);
          });
        });
      },
      mceTableSizingMode: function mceTableSizingMode(e, n) {
        return t = n, wl(l).each(function (e) {
          Ia(l) || ka(l) || ui(l) || rt(e, d).each(function (e) {
            "relative" !== t || Bl(e) ? "fixed" !== t || Ml(e) ? "responsive" !== t || El(e) || Ea(e) : Ma(e) : Ba(e), nu(e), Gu(l, e.dom, Sa);
          });
        });
        var t;
      },
      mceTableCellType: m(function (e) {
        return "th" === e ? n.makeCellsHeader : n.unmakeCellsHeader;
      }),
      mceTableColType: m(function (e) {
        return "th" === e ? n.makeColumnsHeader : n.unmakeColumnsHeader;
      }),
      mceTableRowType: m(function (e) {
        switch (e) {
          case "header":
            return n.makeRowsHeader;
          case "footer":
            return n.makeRowsFooter;
          default:
            return n.makeRowsBody;
        }
      })
    }, function (e, n) {
      return l.addCommand(n, e);
    }), ae({
      mceTableProps: P(vl, l, !1),
      mceTableRowProps: P(bl, l),
      mceTableCellProps: P(dl, l, a)
    }, function (e, n) {
      return l.addCommand(n, function () {
        return e();
      });
    }), l.addCommand("mceInsertTable", function (e, n) {
      g(n) && 0 < Ue(n).length ? Lc(l, n.rows, n.columns, n.options, "Invalid values for mceInsertTable - rows and columns values are required to insert a table.") : vl(l, !0);
    }), l.addCommand("mceTableApplyCellStyle", function (e, n) {
      function r(e) {
        return "tablecell" + e.toLowerCase().replace("-", "");
      }
      var o, t;
      !g(n) || 0 !== (o = Ql(a)).length && (function (e) {
        for (var n in e) if (Ge.call(e, n)) return;
        return 1;
      }(t = se(n, function (e, n) {
        return l.formatter.has(r(n)) && T(e);
      })) || (ae(t, function (n, t) {
        A(o, function (e) {
          Nf.normal(l, e.dom).setFormat(r(t), n);
        });
      }), u(o[0]).each(function (e) {
        return Gu(l, e.dom, Ca);
      })));
    });
  }
  function Cl(t, e) {
    return rt(t, e).bind(function (e) {
      var n = nt(e);
      return b(n, function (e) {
        return ce(t, e);
      }).map(function (e) {
        return {
          index: e,
          all: n
        };
      });
    });
  }
  function Sl(e, n) {
    var t = e.document.createRange();
    return t.selectNode(n.dom), t;
  }
  function Tl(e, n) {
    var t = e.document.createRange();
    return Jf(t, n), t;
  }
  function xl(e, n, t) {
    var r,
      o = e.document.createRange(),
      u = o;
    return n.fold(function (e) {
      u.setStartBefore(e.dom);
    }, function (e, n) {
      u.setStart(e.dom, n);
    }, function (e) {
      u.setStartAfter(e.dom);
    }), r = o, t.fold(function (e) {
      r.setEndBefore(e.dom);
    }, function (e, n) {
      r.setEnd(e.dom, n);
    }, function (e) {
      r.setEndAfter(e.dom);
    }), o;
  }
  function Rl(e, n, t, r, o) {
    var u = e.document.createRange();
    return u.setStart(n.dom, t), u.setEnd(r.dom, o), u;
  }
  function Dl(e) {
    return {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      width: e.width,
      height: e.height
    };
  }
  function Ol(e, n, t) {
    return n(Ve.fromDom(t.startContainer), t.startOffset, Ve.fromDom(t.endContainer), t.endOffset);
  }
  function Al(e, n) {
    var o,
      t,
      r,
      u = (o = e, n.match({
        domRange: function domRange(e) {
          return {
            ltr: C(e),
            rtl: q.none
          };
        },
        relative: function relative(e, n) {
          return {
            ltr: Y(function () {
              return xl(o, e, n);
            }),
            rtl: Y(function () {
              return q.some(xl(o, n, e));
            })
          };
        },
        exact: function exact(e, n, t, r) {
          return {
            ltr: Y(function () {
              return Rl(o, e, n, t, r);
            }),
            rtl: Y(function () {
              return q.some(Rl(o, t, r, e, n));
            })
          };
        }
      }));
    return (r = (t = u).ltr()).collapsed ? t.rtl().filter(function (e) {
      return !1 === e.collapsed;
    }).map(function (e) {
      return Qf.rtl(Ve.fromDom(e.endContainer), e.endOffset, Ve.fromDom(e.startContainer), e.startOffset);
    }).getOrThunk(function () {
      return Ol(0, Qf.ltr, r);
    }) : Ol(0, Qf.ltr, r);
  }
  function kl(u, e) {
    return Al(u, e).match({
      ltr: function ltr(e, n, t, r) {
        var o = u.document.createRange();
        return o.setStart(e.dom, n), o.setEnd(t.dom, r), o;
      },
      rtl: function rtl(e, n, t, r) {
        var o = u.document.createRange();
        return o.setStart(t.dom, r), o.setEnd(e.dom, n), o;
      }
    });
  }
  function Il(e, n) {
    return {
      parent: C(q.from(e.dom.documentElement).map(Ve.fromDom).getOr(e)),
      view: C(e),
      origin: C(uo(0, 0)),
      isResizable: n
    };
  }
  function Bl(e) {
    return yo(e).exists(function (e) {
      return _l.test(e);
    });
  }
  function Ml(e) {
    return yo(e).exists(function (e) {
      return Wl.test(e);
    });
  }
  function El(e) {
    return yo(e).isNone();
  }
  function Pl() {
    return {
      transformRow: S,
      transformCell: Si
    };
  }
  function Nl(o, u) {
    function r(e) {
      if (sc(e)) return Ka((t = {
        element: e
      }).element) ? o.colgroup(t) : o.row(t);
      var n,
        t,
        r = (n = u(e), $a(n.element) ? o.col(n) : o.cell(n));
      return i = q.some({
        item: e,
        replacement: r
      }), r;
    }
    void 0 === u && (u = mc);
    var i = q.none();
    return {
      getOrInit: function getOrInit(n, t) {
        return i.fold(function () {
          return r(n);
        }, function (e) {
          return t(n, e.item) ? e.replacement : r(n);
        });
      }
    };
  }
  function zl(r) {
    return function (t) {
      function u(e) {
        var n = t.replace(e, r, "td" === r ? {
          scope: null
        } : {});
        return i.push({
          item: e,
          sub: n
        }), n;
      }
      var i = [];
      return {
        replaceOrInit: function replaceOrInit(n, t) {
          return sc(n) || $a(n) ? n : (r = n, o = t, w(i, function (e) {
            return o(e.item, r);
          }).fold(function () {
            return u(n);
          }, function (e) {
            return t(n, e.item) ? e.sub : u(n);
          }));
          var r, o;
        }
      };
    };
  }
  function Ll(r) {
    return {
      unmerge: function unmerge(t) {
        var e = dc(t);
        return e.each(function (e) {
          return Mn(t, "scope", e);
        }), function () {
          var n = r.cell({
            element: t,
            colspan: 1,
            rowspan: 1
          });
          return $n(n, "width"), $n(t, "width"), e.each(function (e) {
            return Mn(n, "scope", e);
          }), n;
        };
      },
      merge: function merge(r) {
        return $n(r[0], "width"), function () {
          var e = _n(O(r, dc));
          if (0 === e.length) return q.none();
          var n = e[0],
            t = ["row", "col"];
          return R(e, function (e) {
            return e !== n && y(t, e);
          }) ? q.none() : q.from(n);
        }().fold(function () {
          return Wt(r[0], "scope");
        }, function (e) {
          return Mn(r[0], "scope", e + "group");
        }), C(r[0]);
      }
    };
  }
  var _l = /(\d+(\.\d+)?)%/,
    Wl = /(\d+(\.\d+)?)px|em/,
    jl = en("col"),
    Fl = C(_l),
    Hl = en("col"),
    Vl = function Vl(r) {
      return yo(r).fold(function () {
        return e = Eo(t = r, vr), n = C(0), {
          width: e,
          pixelWidth: e,
          getWidths: function getWidths(e, n) {
            return Bo(e, t, n);
          },
          getCellDelta: n,
          singleColumnWidth: C([0]),
          minCellWidth: n,
          setElementWidth: E,
          adjustTableWidth: E,
          isRelative: !0,
          label: "none"
        };
        var t, e, n;
      }, function (e) {
        return n = r, t = e, (null !== Fl().exec(t) ? Po : No)(n);
        var n, t;
      });
    },
    ql = No,
    Ul = Po,
    Gl = ["img", "br"],
    $l = function $l(e, u) {
      var i = function i(e) {
        for (var n = ln(e), t = n.length - 1; 0 <= t; t--) {
          var r = n[t];
          if (u(r)) return q.some(r);
          var o = i(r);
          if (o.isSome()) return o;
        }
        return q.none();
      };
      return i(e);
    },
    Kl = {
      scope: ["row", "col"]
    },
    Xl = {
      selected: "data-mce-selected",
      selectedSelector: "td[data-mce-selected],th[data-mce-selected]",
      firstSelected: "data-mce-first-selected",
      firstSelectedSelector: "td[data-mce-first-selected],th[data-mce-first-selected]",
      lastSelected: "data-mce-last-selected",
      lastSelectedSelector: "td[data-mce-last-selected],th[data-mce-last-selected]"
    },
    Yl = uu("th,td,caption"),
    Jl = uu("th,td"),
    Ql = ru,
    Zl = Lr([{
      none: []
    }, {
      only: ["index"]
    }, {
      left: ["index", "next"]
    }, {
      middle: ["prev", "index", "next"]
    }, {
      right: ["prev", "index"]
    }]),
    ea = _K({}, Zl),
    na = mu(function (e) {
      return e < 0;
    }),
    ta = mu(x),
    ra = Lr([{
      invalid: ["raw"]
    }, {
      pixels: ["value"]
    }, {
      percent: ["value"]
    }]),
    oa = _K(_K({}, ra), {
      from: function from(e) {
        return ee(e, "%") ? pu("%", ra.percent, e) : ee(e, "px") ? pu("px", ra.pixels, e) : ra.invalid(e);
      }
    }),
    ua = function ua(e) {
      if (0 === e.length) return e;
      var n,
        t,
        r = I(e, function (e, n) {
          var t = oa.from(n).fold(function () {
            return {
              value: n,
              remainder: 0
            };
          }, function (e) {
            return n = e, {
              value: (t = Math.floor(n)) + "px",
              remainder: n - t
            };
            var n, t;
          }, function (e) {
            return {
              value: e + "%",
              remainder: 0
            };
          });
          return {
            output: [t.value].concat(e.output),
            remainder: e.remainder + t.remainder
          };
        }, {
          output: [],
          remainder: 0
        }),
        o = r.output;
      return o.slice(0, o.length - 1).concat([(n = o[o.length - 1], t = Math.round(r.remainder), oa.from(n).fold(C(n), function (e) {
        return e + t + "px";
      }, function (e) {
        return e + t + "%";
      }))]);
    },
    ia = oa.from,
    ca = Ru(["compare", "extract", "mutate", "sink"]),
    la = Ru(["element", "start", "stop", "destroy"]),
    aa = Ru(["forceDrop", "drop", "move", "delayDrop"]),
    fa = function fa(e, n, t, r) {
      e.dom.removeEventListener(n, t, r);
    },
    sa = x,
    ma = Ou,
    da = Eu("ephox-dragster").resolve,
    ga = ca({
      compare: function compare(e, n) {
        return uo(n.left - e.left, n.top - e.top);
      },
      extract: function extract(e) {
        return q.some(uo(e.x, e.y));
      },
      sink: function sink(e, n) {
        var t,
          r,
          o,
          u = (t = n, r = _K({
            layerClass: da("blocker")
          }, t), Mn(o = Ve.fromTag("div"), "role", "presentation"), qn(o, {
            position: "fixed",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%"
          }), Bu(o, da("blocker")), Bu(o, r.layerClass), {
            element: C(o),
            destroy: function destroy() {
              Yt(o);
            }
          }),
          i = Au(u.element(), "mousedown", e.forceDrop),
          c = Au(u.element(), "mouseup", e.drop),
          l = Au(u.element(), "mousemove", e.move),
          a = Au(u.element(), "mouseout", e.delayDrop);
        return la({
          element: u.element,
          start: function start(e) {
            Xt(e, u.element());
          },
          stop: function stop() {
            Yt(u.element());
          },
          destroy: function destroy() {
            u.destroy(), c.unbind(), l.unbind(), a.unbind(), i.unbind();
          }
        });
      },
      mutate: function mutate(e, n) {
        e.mutate(n.left, n.top);
      }
    }),
    pa = function pa(e) {
      return e.dom.contentEditable;
    },
    ba = Eu("ephox-snooker").resolve,
    ha = ba("resizer-bar"),
    va = ba("resizer-rows"),
    wa = ba("resizer-cols"),
    ya = ba("resizer-bar-dragging"),
    Ca = {
      structure: !1,
      style: !0
    },
    Sa = {
      structure: !0,
      style: !1
    },
    Ta = {
      structure: !0,
      style: !0
    },
    xa = {
      "border-collapse": "collapse",
      width: "100%"
    },
    Ra = D(5, function (e) {
      var n = e + 1 + "px";
      return {
        title: n,
        value: n
      };
    }),
    Da = O(["Solid", "Dotted", "Dashed", "Double", "Groove", "Ridge", "Inset", "Outset", "None", "Hidden"], function (e) {
      return {
        title: e,
        value: e.toLowerCase()
      };
    }),
    Oa = {
      border: "1"
    },
    Aa = "preservetable",
    ka = function ka(e) {
      return "fixed" === $u(e) || !1 === Ku(e);
    },
    Ia = function Ia(e) {
      return "responsive" === $u(e);
    },
    Ba = function Ba(e) {
      var n = Ro(e);
      wu(e, q.some(n), q.none()), gi(e);
    },
    Ma = function Ma(e) {
      var n = vr(e) + "px";
      wu(e, q.some(n), q.none()), gi(e);
    },
    Ea = function Ea(e) {
      $n(e, "width");
      var n = tt(e);
      A(0 < n.length ? n : nt(e), function (e) {
        $n(e, "width"), gi(e);
      }), gi(e);
    },
    Pa = "bar-",
    Na = function Na(n, e, t) {
      return n.property().isText(e) && 0 === n.property().getText(e).trim().length || n.property().isComment(e) ? t(e).bind(function (e) {
        return Na(n, e, t).orThunk(function () {
          return q.some(e);
        });
      }) : q.none();
    },
    za = function za(e, n) {
      var t = Na(e, n, e.query().prevSibling).getOr(n);
      if (e.property().isText(t)) return hi(t, vi(e, t));
      var r = e.property().children(t);
      return 0 < r.length ? za(e, r[r.length - 1]) : hi(t, vi(e, t));
    },
    La = za,
    _a = Zt(),
    Wa = en("th"),
    ja = function ja(e) {
      var n = k(e, function (e) {
        return Wa(e.element);
      });
      return 0 === n.length ? q.some("td") : n.length === e.length ? q.some("th") : q.none();
    },
    Fa = xi,
    Ha = Ri,
    Va = Di,
    qa = function qa(t) {
      return {
        isValue: x,
        isError: v,
        getOr: C(t),
        getOrThunk: C(t),
        getOrDie: C(t),
        or: function or(e) {
          return qa(t);
        },
        orThunk: function orThunk(e) {
          return qa(t);
        },
        fold: function fold(e, n) {
          return n(t);
        },
        map: function map(e) {
          return qa(e(t));
        },
        mapError: function mapError(e) {
          return qa(t);
        },
        each: function each(e) {
          e(t);
        },
        bind: function bind(e) {
          return e(t);
        },
        exists: function exists(e) {
          return e(t);
        },
        forall: function forall(e) {
          return e(t);
        },
        toOptional: function toOptional() {
          return q.some(t);
        }
      };
    },
    Ua = function Ua(t) {
      return {
        isValue: v,
        isError: x,
        getOr: S,
        getOrThunk: function getOrThunk(e) {
          return e();
        },
        getOrDie: function getOrDie() {
          return e = String(t), function () {
            throw new Error(e);
          }();
          var e;
        },
        or: S,
        orThunk: function orThunk(e) {
          return e();
        },
        fold: function fold(e, n) {
          return e(t);
        },
        map: function map(e) {
          return Ua(t);
        },
        mapError: function mapError(e) {
          return Ua(e(t));
        },
        each: E,
        bind: function bind(e) {
          return Ua(t);
        },
        exists: v,
        forall: x,
        toOptional: q.none
      };
    },
    Ga = {
      value: qa,
      error: Ua,
      fromOption: function fromOption(e, n) {
        return e.fold(function () {
          return Ua(n);
        }, qa);
      }
    },
    $a = en("col"),
    Ka = en("colgroup"),
    Xa = ["body", "p", "div", "article", "aside", "figcaption", "figure", "footer", "header", "nav", "section", "ol", "ul", "table", "thead", "tfoot", "tbody", "caption", "tr", "td", "th", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "address"],
    Ya = Zt(),
    Ja = Sc("thead", !0),
    Qa = Sc("tbody", !1),
    Za = Sc("tfoot", !1),
    ef = zl("th"),
    nf = zl("td"),
    tf = zi(function (e, n, t, r) {
      var o = n[0].row;
      return yc(I(Cc(n), function (e, n) {
        return {
          grid: nc(e.grid, o, n.row + e.delta, t, r.getOrInit),
          delta: e.delta + 1
        };
      }, {
        grid: e,
        delta: 0
      }).grid, o, n[0].column);
    }, _i, E, E, Nl),
    rf = zi(function (e, n, t, r) {
      var o = Cc(n),
        u = o[o.length - 1],
        i = u.row + u.rowspan;
      return yc(I(o, function (e, n) {
        return nc(e, i, n.row, t, r.getOrInit);
      }, e), i, n[0].column);
    }, _i, E, E, Nl),
    of = zi(function (e, n, t, r) {
      var o = n.details,
        u = fc(o),
        i = u[0].column;
      return yc(I(u, function (e, n) {
        return {
          grid: tc(e.grid, i, n.column + e.delta, t, r.getOrInit),
          delta: e.delta + 1
        };
      }, {
        grid: e,
        delta: 0
      }).grid, o[0].row, i);
    }, kc(!0), Rc, E, Nl),
    uf = zi(function (e, n, t, r) {
      var o = n.details,
        u = o[o.length - 1],
        i = u.column + u.colspan;
      return yc(I(fc(o), function (e, n) {
        return tc(e, i, n.column, t, r.getOrInit);
      }, e), o[0].row, i);
    }, kc(!1), Rc, E, Nl),
    cf = zi(function (e, n, t, r) {
      var o,
        u,
        i = fc(n.details),
        c = (o = e, u = O(i, function (e) {
          return e.column;
        }), N(o, function (e) {
          var n = e.cells,
            t = I(u, function (e, n) {
              return 0 <= n && n < e.length ? e.slice(0, n).concat(e.slice(n + 1)) : e;
            }, n);
          return 0 < t.length ? [ye(e.element, t, e.section, e.isNew)] : [];
        })),
        l = 0 < c.length ? c[0].cells.length - 1 : 0;
      return yc(c, i[0].row, Math.min(i[0].column, l));
    }, function (n, e) {
      return Wi(n, e).map(function (e) {
        return {
          details: e,
          pixelDelta: -Ac(n, e)
        };
      });
    }, Rc, vc, Nl),
    lf = zi(function (e, n, t, r) {
      var o,
        u,
        i,
        c,
        l = Cc(n),
        a = (o = l[0].row, u = l[l.length - 1].row, c = (i = gt(e)).rows, i.cols.concat(c.slice(0, o)).concat(c.slice(u + 1))),
        f = 0 < a.length ? a.length - 1 : 0;
      return yc(a, Math.min(n[0].row, f), n[0].column);
    }, _i, E, vc, Nl),
    af = zi(function (e, n, t, r) {
      return yc(lc(e, O(fc(n), function (e) {
        return e.column;
      }), !0, t, r.replaceOrInit), n[0].row, n[0].column);
    }, Wi, E, E, ef),
    ff = zi(function (e, n, t, r) {
      return yc(lc(e, O(fc(n), function (e) {
        return e.column;
      }), !1, t, r.replaceOrInit), n[0].row, n[0].column);
    }, Wi, E, E, nf),
    sf = zi(Ja, Wi, E, E, ef),
    mf = zi(Qa, Wi, E, E, nf),
    df = zi(Za, Wi, E, E, nf),
    gf = zi(function (e, n, t, r) {
      return yc(ac(e, n, t, r.replaceOrInit), n[0].row, n[0].column);
    }, Wi, E, E, ef),
    pf = zi(function (e, n, t, r) {
      return yc(ac(e, n, t, r.replaceOrInit), n[0].row, n[0].column);
    }, Wi, E, E, nf),
    bf = zi(function (e, n, t, r) {
      var o = n.cells;
      return bc(o), wc(function (e, n, t) {
        var r = gt(e).rows;
        if (0 === r.length) return e;
        for (var o = n.startRow; o <= n.finishRow; o++) for (var u = n.startCol; u <= n.finishCol; u++) {
          var i = r[o],
            c = st(i, u).isLocked;
          ft(i, u, we(t(), !1, c));
        }
        return e;
      }(e, n.bounds, r.merge(o)), q.from(o[0]));
    }, Fi, xc, E, Ll),
    hf = zi(function (e, n, t, r) {
      return wc(I(n, function (e, n) {
        return Vi(e, n, t, r.unmerge(n));
      }, e), q.from(n[0]));
    }, Hi, xc, E, Ll),
    vf = zi(function (e, n, t, r) {
      var o,
        u,
        i = (o = n.clipboard, u = n.generators, Mi($t.fromTable(o), u, !0));
      return Qi({
        row: n.row,
        column: n.column
      }, e, i, n.generators, t).fold(function () {
        return wc(e, q.some(n.element));
      }, function (e) {
        return yc(e, n.row, n.column);
      });
    }, function (n, t) {
      return et(t.element).bind(function (e) {
        return Pi(n, e).map(function (e) {
          return _K(_K({}, e), {
            generators: t.generators,
            clipboard: t.clipboard
          });
        });
      });
    }, xc, E, Nl),
    wf = zi(function (e, n, t, r) {
      var o = gt(e).rows,
        u = n.cells[0].column,
        i = o[n.cells[0].row];
      return yc(Zi(u, e, Tc(n.clipboard, n.generators, i), n.generators, t), n.cells[0].row, n.cells[0].column);
    }, Ic(!0), E, E, Nl),
    yf = zi(function (e, n, t, r) {
      var o = gt(e).rows,
        u = n.cells[n.cells.length - 1].column + n.cells[n.cells.length - 1].colspan,
        i = o[n.cells[0].row];
      return yc(Zi(u, e, Tc(n.clipboard, n.generators, i), n.generators, t), n.cells[0].row, n.cells[0].column);
    }, Ic(!1), E, E, Nl),
    Cf = zi(function (e, n, t, r) {
      var o = gt(e).rows,
        u = n.cells[0].row,
        i = o[u];
      return yc(ec(u, e, Tc(n.clipboard, n.generators, i), n.generators, t), n.cells[0].row, n.cells[0].column);
    }, Li, E, E, Nl),
    Sf = zi(function (e, n, t, r) {
      var o = gt(e).rows,
        u = n.cells[n.cells.length - 1].row + n.cells[n.cells.length - 1].rowspan,
        i = o[n.cells[0].row];
      return yc(ec(u, e, Tc(n.clipboard, n.generators, i), n.generators, t), n.cells[0].row, n.cells[0].column);
    }, Li, E, E, Nl),
    Tf = function Tf(e, n) {
      var i = $t.fromTable(e);
      return _i(i, n).bind(function (e) {
        var n = e[e.length - 1],
          o = e[0].row,
          u = n.row + n.rowspan;
        return function () {
          var e = O(i.all.slice(o, u), function (e) {
              return Ci(e).type;
            }),
            n = y(e, "header"),
            t = y(e, "footer");
          if (n || t) {
            var r = y(e, "body");
            return !n || r || t ? n || r || !t ? q.none() : q.some("footer") : q.some("header");
          }
          return q.some("body");
        }();
      }).getOr("");
    },
    xf = {
      styles: {
        "border-collapse": "collapse",
        width: "100%"
      },
      attributes: {
        border: "1"
      },
      colGroups: !1
    },
    Rf = tinymce.util.Tools.resolve("tinymce.util.Tools"),
    Df = [{
      text: "None",
      value: ""
    }, {
      text: "Top",
      value: "top"
    }, {
      text: "Middle",
      value: "middle"
    }, {
      text: "Bottom",
      value: "bottom"
    }],
    Of = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    Af = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    kf = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)/,
    If = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d?(?:\.\d+)?)\)/,
    Bf = function Bf(e) {
      return O(e, function (e) {
        var n = e.text || e.title;
        return Qc(e) ? {
          text: n,
          items: Bf(e.menu)
        } : {
          text: n,
          value: e.value
        };
      });
    },
    Mf = function Mf(t, r, e, o, a) {
      return O(e, function (e) {
        var u,
          i,
          c,
          l,
          n = e.text || e.title;
        return Qc(e) ? {
          type: "nestedmenuitem",
          text: n,
          getSubmenuItems: function getSubmenuItems() {
            return Mf(t, r, e.menu, o, a);
          }
        } : {
          text: n,
          type: "togglemenuitem",
          onAction: function onAction() {
            return a(e.value);
          },
          onSetup: (u = t, i = r, c = o, l = e.value, function (t) {
            function e() {
              function e(e) {
                return u.formatter.match(c, {
                  value: l
                }, e.dom, o);
              }
              var n = Ql(i);
              o ? (t.setActive(!R(n, e)), r.set(u.formatter.formatChanged(c, function (e) {
                return t.setActive(!e);
              }, !0))) : (t.setActive(z(n, e)), r.set(u.formatter.formatChanged(c, t.setActive, !1, {
                value: l
              })));
            }
            var r = Yc(function (e) {
                return e.unbind();
              }),
              o = !ne(l);
            return u.initialized ? e() : u.on("init", e), r.clear;
          })
        };
      });
    },
    Ef = function Ef(e) {
      return N(e, function (e) {
        return Qc(e) ? [_K(_K({}, e), {
          menu: Ef(e.menu)
        })] : ne(e.value) ? [e] : [];
      });
    },
    Pf = [{
      name: "width",
      type: "input",
      label: "Width"
    }, {
      name: "height",
      type: "input",
      label: "Height"
    }, {
      name: "celltype",
      type: "listbox",
      label: "Cell type",
      items: [{
        text: "Cell",
        value: "td"
      }, {
        text: "Header cell",
        value: "th"
      }]
    }, {
      name: "scope",
      type: "listbox",
      label: "Scope",
      items: [{
        text: "None",
        value: ""
      }, {
        text: "Row",
        value: "row"
      }, {
        text: "Column",
        value: "col"
      }, {
        text: "Row group",
        value: "rowgroup"
      }, {
        text: "Column group",
        value: "colgroup"
      }]
    }, {
      name: "halign",
      type: "listbox",
      label: "Horizontal align",
      items: [{
        text: "None",
        value: ""
      }, {
        text: "Left",
        value: "left"
      }, {
        text: "Center",
        value: "center"
      }, {
        text: "Right",
        value: "right"
      }]
    }, {
      name: "valign",
      type: "listbox",
      label: "Vertical align",
      items: Df
    }],
    Nf = {
      normal: il(!1),
      ifTruthy: il(!0)
    },
    zf = P(fl, ["left", "center", "right"], "align"),
    Lf = P(fl, ["top", "middle", "bottom"], "valign"),
    _f = [{
      type: "listbox",
      name: "type",
      label: "Row type",
      items: [{
        text: "Header",
        value: "header"
      }, {
        text: "Body",
        value: "body"
      }, {
        text: "Footer",
        value: "footer"
      }]
    }, {
      type: "listbox",
      name: "align",
      label: "Alignment",
      items: [{
        text: "None",
        value: ""
      }, {
        text: "Left",
        value: "left"
      }, {
        text: "Center",
        value: "center"
      }, {
        text: "Right",
        value: "right"
      }]
    }, {
      label: "Height",
      name: "height",
      type: "input"
    }],
    Wf = function Wf(e, n, t, r) {
      if ("TD" === n.tagName || "TH" === n.tagName) T(t) ? e.setStyle(n, t, r) : e.setStyle(n, t);else if (n.children) for (var o = 0; o < n.children.length; o++) Wf(e, n.children[o], t, r);
    },
    jf = {
      remove_similar: !0,
      inherit: !1
    },
    Ff = _K({
      selector: "td,th"
    }, jf),
    Hf = {
      tablecellbackgroundcolor: _K({
        styles: {
          backgroundColor: "%value"
        }
      }, Ff),
      tablecellverticalalign: _K({
        styles: {
          "vertical-align": "%value"
        }
      }, Ff),
      tablecellbordercolor: _K({
        styles: {
          borderColor: "%value"
        }
      }, Ff),
      tablecellclass: _K({
        classes: ["%value"]
      }, Ff),
      tableclass: _K({
        selector: "table",
        classes: ["%value"]
      }, jf),
      tablecellborderstyle: _K({
        styles: {
          borderStyle: "%value"
        }
      }, Ff),
      tablecellborderwidth: _K({
        styles: {
          borderWidth: "%value"
        }
      }, Ff)
    },
    Vf = Lr([{
      none: ["current"]
    }, {
      first: ["current"]
    }, {
      middle: ["current", "target"]
    }, {
      last: ["current"]
    }]),
    qf = _K(_K({}, Vf), {
      none: function none(e) {
        return Vf.none(e = void 0 === e ? void 0 : e);
      }
    }),
    Uf = function Uf(e, n, t, r, o) {
      void 0 === o && (o = x);
      var u = 1 === r;
      if (!u && t <= 0) return qf.first(e[0]);
      if (u && t >= e.length - 1) return qf.last(e[e.length - 1]);
      var i = t + r,
        c = e[i];
      return o(c) ? qf.middle(n, c) : Uf(e, n, i, r, o);
    },
    Gf = function Gf(e, n, t, r) {
      return {
        start: e,
        soffset: n,
        finish: t,
        foffset: r
      };
    },
    $f = Lr([{
      before: ["element"]
    }, {
      on: ["element", "offset"]
    }, {
      after: ["element"]
    }]),
    Kf = {
      before: $f.before,
      on: $f.on,
      after: $f.after,
      cata: function cata(e, n, t, r) {
        return e.fold(n, t, r);
      },
      getStart: function getStart(e) {
        return e.fold(S, S, S);
      }
    },
    Xf = Lr([{
      domRange: ["rng"]
    }, {
      relative: ["startSitu", "finishSitu"]
    }, {
      exact: ["start", "soffset", "finish", "foffset"]
    }]),
    Yf = {
      domRange: Xf.domRange,
      relative: Xf.relative,
      exact: Xf.exact,
      exactFromRange: function exactFromRange(e) {
        return Xf.exact(e.start, e.soffset, e.finish, e.foffset);
      },
      getWin: function getWin(e) {
        var n = e.match({
          domRange: function domRange(e) {
            return Ve.fromDom(e.startContainer);
          },
          relative: function relative(e, n) {
            return Kf.getStart(e);
          },
          exact: function exact(e, n, t, r) {
            return e;
          }
        });
        return Ve.fromDom(tn(n).dom.defaultView);
      },
      range: Gf
    },
    Jf = function Jf(e, n) {
      return e.selectNodeContents(n.dom);
    },
    Qf = Lr([{
      ltr: ["start", "soffset", "finish", "foffset"]
    }, {
      rtl: ["start", "soffset", "finish", "foffset"]
    }]);
  function Zf(e, n, t) {
    return n >= e.left && n <= e.right && t >= e.top && t <= e.bottom;
  }
  function es(t, r, e, n, o) {
    function l(e) {
      var n = t.dom.createRange();
      return n.setStart(r.dom, e), n.collapse(!0), n;
    }
    var u = Et(r).length,
      i = function (e, n, t, r) {
        if (0 === r) return 0;
        if (e === t) return r - 1;
        for (var o = t, u = 1; u < r; u++) {
          var i = l(u).getBoundingClientRect(),
            c = Math.abs(e - i.left);
          if (n <= i.bottom) {
            if (n < i.top || o < c) return u - 1;
            o = c;
          }
        }
        return 0;
      }(e, n, o.right, u);
    return l(i);
  }
  function ns(e, n) {
    return n - e.left < e.right - n;
  }
  function ts(e, n, t) {
    var r = e.dom.createRange();
    return r.selectNode(n.dom), r.collapse(t), r;
  }
  function rs(n, e, t) {
    var r = n.dom.createRange();
    r.selectNode(e.dom);
    var o = ns(r.getBoundingClientRect(), t);
    return (!0 === o ? Wo : jo)(e).map(function (e) {
      return ts(n, e, o);
    });
  }
  function os(e, n, t) {
    var r = ns(n.dom.getBoundingClientRect(), t);
    return q.some(ts(e, n, r));
  }
  function us(e, n) {
    var t = Ye(e);
    return "input" === t ? Kf.after(e) : y(["br", "img"], t) ? 0 === n ? Kf.before(e) : Kf.after(e) : Kf.on(e, n);
  }
  function is(e, n) {
    var t = e.fold(Kf.before, us, Kf.after),
      r = n.fold(Kf.before, us, Kf.after);
    return Yf.relative(t, r);
  }
  function cs(e, n, t, r) {
    var o = us(e, n),
      u = us(t, r);
    return Yf.relative(o, u);
  }
  function ls(e) {
    return q.from(e.getSelection());
  }
  function as(e, n) {
    ls(e).each(function (e) {
      e.removeAllRanges(), e.addRange(n);
    });
  }
  function fs(e, n, t, r, o) {
    as(e, Rl(e, n, t, r, o));
  }
  function ss(l, e) {
    return Al(l, e).match({
      ltr: function ltr(e, n, t, r) {
        fs(l, e, n, t, r);
      },
      rtl: function rtl(o, u, i, c) {
        ls(l).each(function (e) {
          if (e.setBaseAndExtent) e.setBaseAndExtent(o.dom, u, i.dom, c);else if (e.extend) try {
            t = i, r = c, (n = e).collapse(o.dom, u), n.extend(t.dom, r);
          } catch (e) {
            fs(l, i, c, o, u);
          } else fs(l, i, c, o, u);
          var n, t, r;
        });
      }
    });
  }
  function ms(e, n, t, r, o) {
    ss(e, cs(n, t, r, o));
  }
  function ds(e, n, t) {
    ss(e, is(n, t));
  }
  function gs(e) {
    if (0 < e.rangeCount) {
      var n = e.getRangeAt(0),
        t = e.getRangeAt(e.rangeCount - 1);
      return q.some(Gf(Ve.fromDom(n.startContainer), n.startOffset, Ve.fromDom(t.endContainer), t.endOffset));
    }
    return q.none();
  }
  function ps(e) {
    if (null === e.anchorNode || null === e.focusNode) return gs(e);
    var n,
      t,
      r,
      o,
      u,
      i,
      c,
      l,
      a,
      f,
      s,
      m = Ve.fromDom(e.anchorNode),
      d = Ve.fromDom(e.focusNode);
    return n = m, t = e.anchorOffset, r = d, o = e.focusOffset, i = t, c = r, l = o, (a = nn(u = n).dom.createRange()).setStart(u.dom, i), a.setEnd(c.dom, l), f = a, s = ce(n, r) && t === o, f.collapsed && !s ? q.some(Gf(m, e.anchorOffset, d, e.focusOffset)) : gs(e);
  }
  function bs(e, n, t) {
    as(e, ((t = void 0 === t || t) ? Tl : Sl)(e, n));
  }
  function hs(e) {
    return ls(e).filter(function (e) {
      return 0 < e.rangeCount;
    }).bind(ps).map(function (e) {
      return Yf.exact(e.start, e.soffset, e.finish, e.foffset);
    });
  }
  function vs(e, n, t) {
    return Zs(e, n, (o = Nu, Cl(r = t, void 0).fold(function () {
      return qf.none(r);
    }, function (e) {
      return Uf(e.all, r, e.index, 1, o);
    })));
    var r, o;
  }
  function ws(e, n) {
    var t = kl(e, n);
    return Gf(Ve.fromDom(t.startContainer), t.startOffset, Ve.fromDom(t.endContainer), t.endOffset);
  }
  function ys(e, n) {
    return {
      item: e,
      mode: n
    };
  }
  function Cs(e, n, t, r) {
    return void 0 === r && (r = Ks), e.property().parent(n).map(function (e) {
      return ys(e, r);
    });
  }
  function Ss(n) {
    return function (e) {
      return 0 === n.property().children(e).length;
    };
  }
  function Ts(e, n) {
    return am(sm, e, Ss(sm), n);
  }
  function xs(e, n) {
    return fm(sm, e, Ss(sm), n);
  }
  function Rs(e) {
    return In(e, "tr");
  }
  function Ds(e) {
    return "br" === Ye(e);
  }
  function Os(e, n, t, r) {
    var o, u, i, c, l, a, f;
    return (Ds(n) ? (o = e, (i = r).traverse(u = n).orThunk(function () {
      return pm(u, i.gather, o);
    }).map(i.relative)) : (c = e, l = r, an(a = n, f = t).filter(Ds).orThunk(function () {
      return an(a, f - 1).filter(Ds);
    }).bind(function (e) {
      return l.traverse(e).fold(function () {
        return pm(e, l.gather, c).map(l.relative);
      }, function (e) {
        return rn(r = e).bind(function (n) {
          var t = ln(n);
          return gm(t, r).map(function (e) {
            return {
              parent: n,
              children: t,
              element: r,
              index: e
            };
          });
        }).map(function (e) {
          return Kf.on(e.parent, e.index);
        });
        var r;
      });
    }))).map(function (e) {
      return {
        start: e,
        finish: e
      };
    });
  }
  function As(e, n) {
    return {
      left: e.left,
      top: e.top + n,
      right: e.right,
      bottom: e.bottom + n
    };
  }
  function ks(e, n) {
    return {
      left: e.left,
      top: e.top - n,
      right: e.right,
      bottom: e.bottom - n
    };
  }
  function Is(e, n, t) {
    return {
      left: e.left + n,
      top: e.top + t,
      right: e.right + n,
      bottom: e.bottom + t
    };
  }
  function Bs(e) {
    return {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom
    };
  }
  function Ms(e, n) {
    return q.some(e.getRect(n));
  }
  function Es(e, n, t) {
    return gn(n) ? Ms(e, n).map(Bs) : pn(n) ? (r = e, o = n, (0 <= (u = t) && u < Lo(o) ? r.getRangedRect(o, u, o, u + 1) : 0 < u ? r.getRangedRect(o, u - 1, o, u) : q.none()).map(Bs)) : q.none();
    var r, o, u;
  }
  function Ps(e, n) {
    return gn(n) ? Ms(e, n).map(Bs) : pn(n) ? e.getRangedRect(n, 0, n, Lo(n)).map(Bs) : q.none();
  }
  function Ns(n, e, r) {
    return Rn(function (e, n) {
      return n(e);
    }, Dn, e, gc, void 0).fold(v, function (e) {
      return Ps(n, e).exists(function (e) {
        return (n = r).left < (t = e).left || Math.abs(t.right - n.left) < 1 || n.left > t.right;
        var n, t;
      });
    });
  }
  function zs(n, t, e) {
    var r,
      o = n.move(e, 5),
      u = vm(t, n, e, o, 100).getOr(o),
      i = u,
      c = t;
    return ((r = n).point(i) > c.getInnerHeight() ? q.some(r.point(i) - c.getInnerHeight()) : r.point(i) < 0 ? q.some(-r.point(i)) : q.none()).fold(function () {
      return t.situsFromPoint(u.left, n.point(u));
    }, function (e) {
      return t.scrollBy(0, e), t.situsFromPoint(u.left, n.point(u) - e);
    });
  }
  function Ls(a, f, s, e, m) {
    return In(e, "td,th", f).bind(function (l) {
      return In(l, "table", f).bind(function (e) {
        return n = e, Dn(m, function (e) {
          return rn(e).exists(function (e) {
            return ce(e, n);
          });
        }, void 0).isSome() ? (o = t = a, u = r = f, i = c = s, o.getSelection().bind(function (r) {
          return Os(u, r.finish, r.foffset, i).fold(function () {
            return q.some(hi(r.finish, r.foffset));
          }, function (e) {
            var n = o.fromSitus(e),
              t = dm.verify(o, r.finish, r.foffset, n.finish, n.foffset, i.failure, u);
            return dm.cata(t, function (e) {
              return q.none();
            }, function () {
              return q.none();
            }, function (e) {
              return q.some(hi(e, 0));
            }, function (e) {
              return q.some(hi(e, Lo(e)));
            });
          });
        }).bind(function (e) {
          return ym(t, r, e.element, e.offset, c, 20).map(t.fromSitus);
        }).bind(function (n) {
          return In(n.finish, "td,th", f).map(function (e) {
            return {
              start: l,
              finish: e,
              range: n
            };
          });
        })) : q.none();
        var o, u, i, n, t, r, c;
      });
    });
  }
  function _s(e, n, t, r, o, u) {
    return He().browser.isIE() ? q.none() : u(r, n).orThunk(function () {
      return Ls(e, n, t, r, o).map(function (e) {
        var n = e.range;
        return nm(q.some(rm(n.start, n.soffset, n.finish, n.foffset)), !0);
      });
    });
  }
  function Ws(e, r) {
    return In(e, "tr", r).bind(function (t) {
      return In(t, "table", r).bind(function (e) {
        var n = dn(e, "tr");
        return ce(t, n[0]) ? am(sm, e, function (e) {
          return jo(e).isSome();
        }, r).map(function (e) {
          var n = Lo(e);
          return nm(q.some(rm(e, n, e, n)), !0);
        }) : q.none();
      });
    });
  }
  function js(e, r) {
    return In(e, "tr", r).bind(function (t) {
      return In(t, "table", r).bind(function (e) {
        var n = dn(e, "tr");
        return ce(t, n[n.length - 1]) ? fm(sm, e, function (e) {
          return Wo(e).isSome();
        }, r).map(function (e) {
          return nm(q.some(rm(e, 0, e, 0)), !0);
        }) : q.none();
      });
    });
  }
  function Fs(e, n, t, r, o, u, i) {
    return Ls(e, t, r, o, u).bind(function (e) {
      return om(n, t, e.start, e.finish, i);
    });
  }
  function Hs(e, n) {
    return In(e, "td,th", n);
  }
  function Vs(n) {
    return function (e) {
      return e === n;
    };
  }
  function qs(e) {
    return 37 <= e && e <= 40;
  }
  function Us(l) {
    return {
      elementFromPoint: function elementFromPoint(e, n) {
        return Ve.fromPoint(Ve.fromDom(l.document), e, n);
      },
      getRect: function getRect(e) {
        return e.dom.getBoundingClientRect();
      },
      getRangedRect: function getRangedRect(e, n, t, r) {
        var o,
          u,
          i,
          c = Yf.exact(e, n, t, r);
        return i = (o = kl(l, c)).getClientRects(), 0 < (u = 0 < i.length ? i[0] : o.getBoundingClientRect()).width || 0 < u.height ? q.some(u).map(Dl) : q.none();
      },
      getSelection: function getSelection() {
        return hs(l).map(function (e) {
          return ws(l, e);
        });
      },
      fromSitus: function fromSitus(e) {
        var n = Yf.relative(e.start, e.finish);
        return ws(l, n);
      },
      situsFromPoint: function situsFromPoint(e, n) {
        return t = e, r = n, o = Ve.fromDom(l.document), Js(o, t, r).map(function (e) {
          return Gf(Ve.fromDom(e.startContainer), e.startOffset, Ve.fromDom(e.endContainer), e.endOffset);
        }).map(function (e) {
          return tm(e.start, e.soffset, e.finish, e.foffset);
        });
        var t, r, o;
      },
      clearSelection: function clearSelection() {
        ls(l).each(function (e) {
          return e.removeAllRanges();
        });
      },
      collapseSelection: function collapseSelection(i) {
        void 0 === i && (i = !1), hs(l).each(function (e) {
          return e.fold(function (e) {
            return e.collapse(i);
          }, function (e, n) {
            var t = i ? e : n;
            ds(l, t, t);
          }, function (e, n, t, r) {
            var o = i ? e : t,
              u = i ? n : r;
            ms(l, o, u, o, u);
          });
        });
      },
      setSelection: function setSelection(e) {
        ms(l, e.start, e.soffset, e.finish, e.foffset);
      },
      setRelativeSelection: function setRelativeSelection(e, n) {
        ds(l, e, n);
      },
      selectNode: function selectNode(e) {
        bs(l, e, !1);
      },
      selectContents: function selectContents(e) {
        bs(l, e);
      },
      getInnerHeight: function getInnerHeight() {
        return l.innerHeight;
      },
      getScrollY: function getScrollY() {
        var e = Ve.fromDom(l.document),
          n = void 0 !== e ? e.dom : document,
          t = n.body.scrollLeft || n.documentElement.scrollLeft,
          r = n.body.scrollTop || n.documentElement.scrollTop;
        return uo(t, r).top;
      },
      scrollBy: function scrollBy(e, n) {
        var t,
          r = e,
          o = n,
          u = Ve.fromDom(l.document);
        (t = (void 0 !== u ? u.dom : document).defaultView) && t.scrollBy(r, o);
      }
    };
  }
  function Gs(e, n) {
    return {
      rows: e,
      cols: n
    };
  }
  function $s(e) {
    return !1 === Mu(Ve.fromDom(e.target), "ephox-snooker-resizer-bar");
  }
  Qf.ltr, Qf.rtl;
  function Ks(e, n, t, r) {
    return void 0 === r && (r = um), t.sibling(e, n).map(function (e) {
      return ys(e, r);
    });
  }
  function Xs(o, u, n) {
    function t(e) {
      Wt(e, o.selected), Wt(e, o.firstSelected), Wt(e, o.lastSelected);
    }
    function i(e) {
      Mn(e, o.selected, "1");
    }
    function c(e) {
      r(e), n();
    }
    function r(e) {
      A(dn(e, o.selectedSelector + "," + o.firstSelectedSelector + "," + o.lastSelectedSelector), t);
    }
    return {
      clearBeforeUpdate: r,
      clear: c,
      selectRange: function selectRange(e, n, t, r) {
        c(e), A(n, i), Mn(t, o.firstSelected, "1"), Mn(r, o.lastSelected, "1"), u(n, t, r);
      },
      selectedSelector: o.selectedSelector,
      firstSelectedSelector: o.firstSelectedSelector,
      lastSelectedSelector: o.lastSelectedSelector
    };
  }
  var Ys = function Ys(e, n, t, r) {
      return pn(n) ? (u = n, i = t, c = r, (l = (o = e).dom.createRange()).selectNode(u.dom), H(l.getClientRects(), function (e) {
        return Zf(e, i, c) ? q.some(e) : q.none();
      }).map(function (e) {
        return es(o, u, i, c, e);
      })) : (f = n, s = t, m = r, d = (a = e).dom.createRange(), H(ln(f), function (e) {
        return d.selectNode(e.dom), Zf(d.getBoundingClientRect(), s, m) ? Ys(a, e, s, m) : q.none();
      }));
      var o, u, i, c, l, a, f, s, m, d;
    },
    Js = document.caretPositionFromPoint ? function (t, e, n) {
      var r, o;
      return q.from(null === (o = (r = t.dom).caretPositionFromPoint) || void 0 === o ? void 0 : o.call(r, e, n)).bind(function (e) {
        if (null === e.offsetNode) return q.none();
        var n = t.dom.createRange();
        return n.setStart(e.offsetNode, e.offset), n.collapse(), q.some(n);
      });
    } : document.caretRangeFromPoint ? function (e, n, t) {
      var r, o;
      return q.from(null === (o = (r = e.dom).caretRangeFromPoint) || void 0 === o ? void 0 : o.call(r, n, t));
    } : function (o, u, n) {
      return Ve.fromPoint(o, u, n).bind(function (r) {
        function e() {
          return e = o, t = u, (0 === ln(n = r).length ? os : rs)(e, n, t);
          var e, n, t;
        }
        return 0 === ln(r).length ? e() : function (e, n, t, r) {
          var o = e.dom.createRange();
          o.selectNode(n.dom);
          var u = o.getBoundingClientRect();
          return function (e, n, t, r) {
            var o = e.dom.createRange();
            o.selectNode(n.dom);
            var u = o.getBoundingClientRect(),
              i = Math.max(u.left, Math.min(u.right, t)),
              c = Math.max(u.top, Math.min(u.bottom, r));
            return Ys(e, n, i, c);
          }(e, n, Math.max(u.left, Math.min(u.right, t)), Math.max(u.top, Math.min(u.bottom, r)));
        }(o, r, u, n).orThunk(e);
      });
    },
    Qs = tinymce.util.Tools.resolve("tinymce.util.VK"),
    Zs = function Zs(n, t, e) {
      return e.fold(q.none, q.none, function (e, n) {
        return Wo(n).map(function (e) {
          return u = Yf.exact(e, 0, e, 0), t = u, o = Yf.getWin(t).dom, r = t.match({
            domRange: function domRange(e) {
              var n = Ve.fromDom(e.startContainer),
                t = Ve.fromDom(e.endContainer);
              return cs(n, e.startOffset, t, e.endOffset);
            },
            relative: is,
            exact: cs
          }), Al(o, r).match({
            ltr: n,
            rtl: n
          });
          function n(e, n, t, r) {
            return Rl(o, e, n, t, r);
          }
          var t, o, r, u;
        });
      }, function (e) {
        return n.execCommand("mceTableInsertRowAfter"), vs(n, t, e);
      });
    },
    em = ["table", "li", "dl"],
    nm = function nm(e, n) {
      return {
        selection: e,
        kill: n
      };
    },
    tm = function tm(e, n, t, r) {
      return {
        start: Kf.on(e, n),
        finish: Kf.on(t, r)
      };
    },
    rm = tm,
    om = function om(t, e, r, n, o) {
      return ce(r, n) ? q.none() : tr(r, n, e).bind(function (e) {
        var n = e.boxes.getOr([]);
        return 1 < n.length ? (o(t, n, e.start, e.finish), q.some(nm(q.some(rm(r, 0, r, Lo(r))), !0))) : q.none();
      });
    },
    um = function um(e, n, t, r) {
      void 0 === r && (r = um);
      var o = e.property().children(n);
      return t.first(o).map(function (e) {
        return ys(e, r);
      });
    },
    im = [{
      current: Cs,
      next: Ks,
      fallback: q.none()
    }, {
      current: Ks,
      next: um,
      fallback: q.some(Cs)
    }, {
      current: um,
      next: um,
      fallback: q.some(Ks)
    }],
    cm = function cm(n, t, r, o, e) {
      return w(e = void 0 === e ? im : e, function (e) {
        return e.current === r;
      }).bind(function (e) {
        return e.current(n, t, o, e.next).orThunk(function () {
          return e.fallback.bind(function (e) {
            return cm(n, t, e, o);
          });
        });
      });
    },
    lm = function lm(n, e, t, r, o, u) {
      return cm(n, e, r, o).bind(function (e) {
        return u(e.item) ? q.none() : t(e.item) ? q.some(e.item) : lm(n, e.item, t, e.mode, o, u);
      });
    },
    am = function am(e, n, t, r) {
      return lm(e, n, t, Ks, {
        sibling: function sibling(e, n) {
          return e.query().prevSibling(n);
        },
        first: function first(e) {
          return 0 < e.length ? q.some(e[e.length - 1]) : q.none();
        }
      }, r);
    },
    fm = function fm(e, n, t, r) {
      return lm(e, n, t, Ks, {
        sibling: function sibling(e, n) {
          return e.query().nextSibling(n);
        },
        first: function first(e) {
          return 0 < e.length ? q.some(e[0]) : q.none();
        }
      }, r);
    },
    sm = Zt(),
    mm = Lr([{
      none: ["message"]
    }, {
      success: []
    }, {
      failedUp: ["cell"]
    }, {
      failedDown: ["cell"]
    }]),
    dm = _K(_K({}, mm), {
      verify: function verify(i, e, n, t, r, c, o) {
        return In(t, "td,th", o).bind(function (u) {
          return In(e, "td,th", o).map(function (o) {
            return ce(u, o) ? ce(t, u) && Lo(u) === r ? c(o) : mm.none("in same cell") : er(Rs, [u, o]).fold(function () {
              return n = u, t = (e = i).getRect(o), (r = e.getRect(n)).right > t.left && r.left < t.right ? mm.success() : c(o);
              var e, n, t, r;
            }, function (e) {
              return c(o);
            });
          });
        }).getOr(mm.none("default"));
      },
      cata: function cata(e, n, t, r, o) {
        return e.fold(n, t, r, o);
      }
    }),
    gm = function gm(e, n) {
      return b(e, P(ce, n));
    },
    pm = function pm(e, n, t) {
      return n(e, t).bind(function (e) {
        return pn(e) && 0 === Et(e).trim().length ? pm(e, n, t) : q.some(e);
      });
    },
    bm = Lr([{
      none: []
    }, {
      retry: ["caret"]
    }]),
    hm = {
      point: function point(e) {
        return e.bottom;
      },
      adjuster: function adjuster(e, n, t, r, o) {
        var u = As(o, 5);
        return Math.abs(t.bottom - r.bottom) < 1 || t.top > o.bottom ? bm.retry(u) : t.top === o.bottom ? bm.retry(As(o, 1)) : Ns(e, n, o) ? bm.retry(Is(u, 5, 0)) : bm.none();
      },
      move: As,
      gather: xs
    },
    vm = function vm(t, r, o, u, i) {
      return 0 === i ? q.some(u) : (n = t, c = u.left, l = r.point(u), n.elementFromPoint(c, l).filter(function (e) {
        return "table" === Ye(e);
      }).isSome() ? (e = i - 1, vm(t, r, o, r.move(u, 5), e)) : t.situsFromPoint(u.left, r.point(u)).bind(function (e) {
        return e.start.fold(q.none, function (n) {
          return Ps(t, n).bind(function (e) {
            return r.adjuster(t, n, e, o, u).fold(q.none, function (e) {
              return vm(t, r, o, e, i - 1);
            });
          }).orThunk(function () {
            return q.some(u);
          });
        }, q.none);
      }));
      var e, n, c, l;
    },
    wm = {
      tryUp: P(zs, {
        point: function point(e) {
          return e.top;
        },
        adjuster: function adjuster(e, n, t, r, o) {
          var u = ks(o, 5);
          return Math.abs(t.top - r.top) < 1 || t.bottom < o.top ? bm.retry(u) : t.bottom === o.top ? bm.retry(ks(o, 1)) : Ns(e, n, o) ? bm.retry(Is(u, 5, 0)) : bm.none();
        },
        move: ks,
        gather: Ts
      }),
      tryDown: P(zs, hm),
      ieTryUp: function ieTryUp(e, n) {
        return e.situsFromPoint(n.left, n.top - 5);
      },
      ieTryDown: function ieTryDown(e, n) {
        return e.situsFromPoint(n.left, n.bottom + 5);
      },
      getJumpSize: C(5)
    },
    ym = function ym(r, o, u, i, c, l) {
      return 0 === l ? q.none() : Tm(r, o, u, i, c).bind(function (e) {
        var n = r.fromSitus(e),
          t = dm.verify(r, u, i, n.finish, n.foffset, c.failure, o);
        return dm.cata(t, function () {
          return q.none();
        }, function () {
          return q.some(e);
        }, function (e) {
          return ce(u, e) && 0 === i ? Cm(r, u, i, ks, c) : ym(r, o, e, 0, c, l - 1);
        }, function (e) {
          return ce(u, e) && i === Lo(e) ? Cm(r, u, i, As, c) : ym(r, o, e, Lo(e), c, l - 1);
        });
      });
    },
    Cm = function Cm(n, e, t, r, o) {
      return Es(n, e, t).bind(function (e) {
        return Sm(n, o, r(e, wm.getJumpSize()));
      });
    },
    Sm = function Sm(e, n, t) {
      var r = He().browser;
      return r.isChrome() || r.isSafari() || r.isFirefox() || r.isEdge() ? n.otherRetry(e, t) : r.isIE() ? n.ieRetry(e, t) : q.none();
    },
    Tm = function Tm(n, e, t, r, o) {
      return Es(n, t, r).bind(function (e) {
        return Sm(n, o, e);
      });
    },
    xm = {
      traverse: cn,
      gather: xs,
      relative: Kf.before,
      otherRetry: wm.tryDown,
      ieRetry: wm.ieTryDown,
      failure: dm.failedDown
    },
    Rm = {
      traverse: un,
      gather: Ts,
      relative: Kf.before,
      otherRetry: wm.tryUp,
      ieRetry: wm.ieTryUp,
      failure: dm.failedUp
    },
    Dm = Vs(38),
    Om = Vs(40),
    Am = {
      isBackward: Vs(37),
      isForward: Vs(39)
    },
    km = {
      isBackward: Vs(39),
      isForward: Vs(37)
    },
    Im = tinymce.util.Tools.resolve("tinymce.Env");
  function Bm(I, B, e) {
    var M = Xs(Xl, function (l, a, f) {
      e.targets().each(function (c) {
        rt(a).each(function (e) {
          var n,
            o,
            u,
            t = fi(I),
            r = $o(E, Ve.fromDom(I.getDoc()), t),
            i = (n = c, o = r, _i(u = $t.fromTable(e), n).map(function (e) {
              var n,
                t,
                r = Mi(u, o, !1);
              return {
                upOrLeftCells: N(Ei(r.slice(0, (n = e)[n.length - 1].row + 1)), function (e) {
                  return O(e.cells.slice(0, n[n.length - 1].column + 1), function (e) {
                    return e.element;
                  });
                }),
                downOrRightCells: N(Ei(r.slice((t = e)[0].row + t[0].rowspan - 1, r.length)), function (e) {
                  return O(e.cells.slice(t[0].column + t[0].colspan - 1, e.cells.length), function (e) {
                    return e.element;
                  });
                })
              };
            }));
          I.fire("TableSelectionChange", {
            cells: l,
            start: a,
            finish: f,
            otherCells: i
          });
        });
      });
    }, function () {
      I.fire("TableSelectionClear");
    });
    return I.on("init", function (e) {
      var n,
        t,
        r,
        o,
        u,
        i,
        m,
        d,
        g,
        a,
        c,
        l,
        f,
        s,
        p,
        b,
        h = I.getWin(),
        v = Yo(I),
        w = Zo(I),
        y = (n = Us(h), {
          clearstate: (c = n, l = v, f = w, s = M, p = Jc(), (t = {
            clearstate: b = p.clear,
            mousedown: function mousedown(e) {
              s.clear(l), Hs(e.target, f).each(p.set);
            },
            mouseover: function mouseover(e) {
              x(e);
            },
            mouseup: function mouseup(e) {
              x(e), b();
            }
          }).clearstate),
          mousedown: t.mousedown,
          mouseover: t.mouseover,
          mouseup: t.mouseup
        }),
        C = (a = Us(h), {
          keydown: function keydown(e, n, t, r, o, i) {
            var u = e.raw,
              c = u.which,
              l = !0 === u.shiftKey;
            return rr(m, g.selectedSelector).fold(function () {
              return qs(c) && !l && g.clearBeforeUpdate(m), Om(c) && l ? P(Fs, a, m, d, xm, r, n, g.selectRange) : Dm(c) && l ? P(Fs, a, m, d, Rm, r, n, g.selectRange) : Om(c) ? P(_s, a, d, xm, r, n, js) : Dm(c) ? P(_s, a, d, Rm, r, n, Ws) : q.none;
            }, function (u) {
              function e(e) {
                return function () {
                  return H(e, function (e) {
                    return n = e.rows, t = e.cols, r = m, ur(u, n, t, (o = g).firstSelectedSelector, o.lastSelectedSelector).map(function (e) {
                      return o.clearBeforeUpdate(r), o.selectRange(r, e.boxes, e.start, e.finish), e.boxes;
                    });
                    var n, t, r, o;
                  }).fold(function () {
                    return or(m, g.firstSelectedSelector, g.lastSelectedSelector).map(function (e) {
                      var n = Om(c) || i.isForward(c) ? Kf.after : Kf.before;
                      return a.setRelativeSelection(Kf.on(e.first, 0), n(e.table)), g.clear(m), nm(q.none(), !0);
                    });
                  }, function (e) {
                    return q.some(nm(q.none(), !0));
                  });
                };
              }
              return Om(c) && l ? e([Gs(1, 0)]) : Dm(c) && l ? e([Gs(-1, 0)]) : i.isBackward(c) && l ? e([Gs(0, -1), Gs(-1, 0)]) : i.isForward(c) && l ? e([Gs(0, 1), Gs(1, 0)]) : qs(c) && !l ? T : q.none;
            })();
          },
          keyup: function keyup(c, l, a, f, s) {
            return rr(m, g.selectedSelector).fold(function () {
              var t,
                r,
                e,
                o,
                u,
                n = c.raw,
                i = n.which;
              return !0 === n.shiftKey && qs(i) ? (t = m, r = d, u = g.selectRange, ce(e = l, o = f) && a === s ? q.none() : In(e, "td,th", r).bind(function (n) {
                return In(o, "td,th", r).bind(function (e) {
                  return om(t, r, n, e, u);
                });
              })) : q.none();
            }, q.none);
          }
        }),
        S = (r = m = v, o = d = w, u = g = M, i = Us(h), function (e, t) {
          u.clearBeforeUpdate(r), tr(e, t, o).each(function (e) {
            var n = e.boxes.getOr([]);
            u.selectRange(r, n, e.start, e.finish), i.selectContents(t), i.collapseSelection();
          });
        });
      function T() {
        return g.clear(m), q.none();
      }
      function x(i) {
        p.on(function (e) {
          s.clearBeforeUpdate(l), Hs(i.target, f).each(function (u) {
            tr(e, u, f).each(function (e) {
              var n,
                t,
                r,
                o = e.boxes.getOr([]);
              1 === o.length ? (n = o[0], t = "false" === pa(n), r = Ln(Pu(i.target), n, ce), t && r && (s.selectRange(l, o, n, n), c.selectContents(n))) : 1 < o.length && (s.selectRange(l, o, e.start, e.finish), c.selectContents(u));
            });
          });
        });
      }
      function R(e, n) {
        !0 === e.raw.shiftKey && (n.kill && e.kill(), n.selection.each(function (e) {
          var n = Yf.relative(e.start, e.finish),
            t = kl(h, n);
          I.selection.setRng(t);
        }));
      }
      function D(e) {
        return 0 === e.button;
      }
      I.on("TableSelectorChange", function (e) {
        return S(e.start, e.finish);
      });
      var O,
        A,
        k = (O = Xc(Ve.fromDom(v)), A = Xc(0), {
          touchEnd: function touchEnd(e) {
            var n,
              t,
              r = Ve.fromDom(e.target);
            "td" !== Ye(r) && "th" !== Ye(r) || (n = O.get(), t = A.get(), ce(n, r) && e.timeStamp - t < 300 && (e.preventDefault(), S(r, r))), O.set(r), A.set(e.timeStamp);
          }
        });
      I.on("dragstart", function (e) {
        y.clearstate();
      }), I.on("mousedown", function (e) {
        D(e) && $s(e) && y.mousedown(ma(e));
      }), I.on("mouseover", function (e) {
        var n;
        (void 0 === (n = e).buttons || Im.browser.isEdge() && 0 === n.buttons || 0 != (1 & n.buttons)) && $s(e) && y.mouseover(ma(e));
      }), I.on("mouseup", function (e) {
        D(e) && $s(e) && y.mouseup(ma(e));
      }), I.on("touchend", k.touchEnd), I.on("keyup", function (e) {
        var n,
          t,
          r,
          o = ma(e);
        o.raw.shiftKey && qs(o.raw.which) && (n = I.selection.getRng(), t = Ve.fromDom(n.startContainer), r = Ve.fromDom(n.endContainer), C.keyup(o, t, n.startOffset, r, n.endOffset).each(function (e) {
          R(o, e);
        }));
      }), I.on("keydown", function (e) {
        var n = ma(e);
        B().each(function (e) {
          return e.hideBars();
        });
        var t = I.selection.getRng(),
          r = Ve.fromDom(t.startContainer),
          o = Ve.fromDom(t.endContainer),
          u = Sr(Am, km)(Ve.fromDom(I.selection.getStart()));
        C.keydown(n, r, t.startOffset, o, t.endOffset, u).each(function (e) {
          R(n, e);
        }), B().each(function (e) {
          return e.showBars();
        });
      }), I.on("NodeChange", function () {
        var e = I.selection;
        er(rt, [Ve.fromDom(e.getStart()), Ve.fromDom(e.getEnd())]).fold(function () {
          return M.clear(v);
        }, E);
      });
    }), {
      clear: M.clear
    };
  }
  function Mm(o, u) {
    function n(n) {
      return d.forall(function (e) {
        return !e[n];
      });
    }
    function e() {
      return Yl(tu(o), Zo(o)).bind(function (r) {
        return Wn(rt(r), Yl(Ve.fromDom(o.selection.getEnd()), Zo(o)).bind(rt), function (e, n) {
          return ce(e, n) ? g(r) ? q.some({
            element: t = r,
            mergable: q.none(),
            unmergable: q.none(),
            selection: [t]
          }) : q.some(ou(u, e, r)) : q.none();
          var t;
        }).bind(S);
      });
    }
    function t(r) {
      return rt(r.element).map(function (e) {
        var t = $t.fromTable(e),
          n = B(_i(t, r).getOr([]), function (e, n) {
            return n.isLocked && (e.onAny = !0, 0 === n.column ? e.onFirst = !0 : n.column + n.colspan >= t.grid.columns && (e.onLast = !0)), e;
          }, {
            onAny: !1,
            onFirst: !1,
            onLast: !1
          });
        return {
          mergeable: Fi(t, r).isSome(),
          unmergeable: Hi(t, r).isSome(),
          locked: n
        };
      });
    }
    function r() {
      s.set(Y(e)()), d = s.get().bind(t), A(m.get(), function (e) {
        return e();
      });
    }
    function i(n) {
      return n(), m.set(m.get().concat([n])), function () {
        m.set(k(m.get(), function (e) {
          return e !== n;
        }));
      };
    }
    function c(n, t) {
      return i(function () {
        return s.get().fold(function () {
          n.setDisabled(!0);
        }, function (e) {
          n.setDisabled(t(e));
        });
      });
    }
    function l(n, t, r) {
      return i(function () {
        return s.get().fold(function () {
          n.setDisabled(!0), n.setActive(!1);
        }, function (e) {
          n.setDisabled(t(e)), n.setActive(r(e));
        });
      });
    }
    function a(n) {
      return d.exists(function (e) {
        return e.locked[n];
      });
    }
    function f(n, t) {
      return function (e) {
        return l(e, function (e) {
          return g(e.element);
        }, function () {
          return o.queryCommandValue(n) === t;
        });
      };
    }
    var s = Xc(q.none()),
      m = Xc([]),
      d = q.none(),
      g = en("caption"),
      p = f("mceTableRowType", "header"),
      b = f("mceTableColType", "th");
    return o.on("NodeChange ExecCommand TableSelectorChange", r), {
      onSetupTable: function onSetupTable(e) {
        return c(e, function (e) {
          return !1;
        });
      },
      onSetupCellOrRow: function onSetupCellOrRow(e) {
        return c(e, function (e) {
          return g(e.element);
        });
      },
      onSetupColumn: function onSetupColumn(n) {
        return function (e) {
          return c(e, function (e) {
            return g(e.element) || a(n);
          });
        };
      },
      onSetupPasteable: function onSetupPasteable(n) {
        return function (e) {
          return c(e, function (e) {
            return g(e.element) || n().isNone();
          });
        };
      },
      onSetupPasteableColumn: function onSetupPasteableColumn(n, t) {
        return function (e) {
          return c(e, function (e) {
            return g(e.element) || n().isNone() || a(t);
          });
        };
      },
      onSetupMergeable: function onSetupMergeable(e) {
        return c(e, function (e) {
          return n("mergeable");
        });
      },
      onSetupUnmergeable: function onSetupUnmergeable(e) {
        return c(e, function (e) {
          return n("unmergeable");
        });
      },
      resetTargets: r,
      onSetupTableWithCaption: function onSetupTableWithCaption(e) {
        return l(e, v, function (e) {
          return rt(e.element, Zo(o)).exists(function (e) {
            return An(e, "caption").isSome();
          });
        });
      },
      onSetupTableRowHeaders: p,
      onSetupTableColumnHeaders: b,
      targets: s.get
    };
  }
  Yr.add("table", function (c) {
    var e,
      n,
      t,
      r,
      o,
      u,
      i,
      l,
      a,
      f,
      s,
      m,
      d = (e = function e() {
        return Yo(c);
      }, n = function n() {
        return Jl(tu(c), Zo(c));
      }, t = Xl.selectedSelector, {
        get: function get() {
          return Ur(e(), t).fold(function () {
            return n().fold($r, Xr);
          }, function (e) {
            return Kr(e);
          });
        }
      }),
      g = Mm(c, d),
      p = bi(c),
      b = Bm(c, p.lazyResize, g),
      h = Ec(c, b, p.lazyWire),
      v = (r = Jc(), o = Jc(), {
        getRows: r.get,
        setRows: function setRows(e) {
          e.fold(r.clear, r.set), o.clear();
        },
        clearRows: r.clear,
        getColumns: o.get,
        setColumns: function setColumns(e) {
          e.fold(o.clear, o.set), r.clear();
        },
        clearColumns: o.clear
      });
    return yl(c, h, 0, d, v), f = h, s = d, m = Zo(a = c), ae({
      mceTableRowType: function mceTableRowType() {
        return w(f.getTableRowType);
      },
      mceTableCellType: function mceTableCellType() {
        return w(f.getTableCellType);
      },
      mceTableColType: function mceTableColType() {
        return w(f.getTableColType);
      }
    }, function (e, n) {
      return a.addQueryValueHandler(n, e);
    }), iu(c, d, h), function (n, e, t, r) {
      function o(e) {
        return function () {
          return n.execCommand(e);
        };
      }
      function u(e) {
        n.execCommand("mceInsertTable", !1, {
          rows: e.numRows,
          columns: e.numColumns
        });
      }
      var i = {
          text: "Table properties",
          onSetup: t.onSetupTable,
          onAction: o("mceTableProps")
        },
        c = {
          text: "Delete table",
          icon: "table-delete-table",
          onSetup: t.onSetupTable,
          onAction: o("mceTableDelete")
        };
      n.ui.registry.addMenuItem("tableinsertrowbefore", {
        text: "Insert row before",
        icon: "table-insert-row-above",
        onAction: o("mceTableInsertRowBefore"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuItem("tableinsertrowafter", {
        text: "Insert row after",
        icon: "table-insert-row-after",
        onAction: o("mceTableInsertRowAfter"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuItem("tabledeleterow", {
        text: "Delete row",
        icon: "table-delete-row",
        onAction: o("mceTableDeleteRow"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuItem("tablerowprops", {
        text: "Row properties",
        icon: "table-row-properties",
        onAction: o("mceTableRowProps"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuItem("tablecutrow", {
        text: "Cut row",
        icon: "cut-row",
        onAction: o("mceTableCutRow"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuItem("tablecopyrow", {
        text: "Copy row",
        icon: "duplicate-row",
        onAction: o("mceTableCopyRow"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuItem("tablepasterowbefore", {
        text: "Paste row before",
        icon: "paste-row-before",
        onAction: o("mceTablePasteRowBefore"),
        onSetup: t.onSetupPasteable(r.getRows)
      }), n.ui.registry.addMenuItem("tablepasterowafter", {
        text: "Paste row after",
        icon: "paste-row-after",
        onAction: o("mceTablePasteRowAfter"),
        onSetup: t.onSetupPasteable(r.getRows)
      });
      var l = {
        type: "nestedmenuitem",
        text: "Row",
        getSubmenuItems: C("tableinsertrowbefore tableinsertrowafter tabledeleterow tablerowprops | tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter")
      };
      n.ui.registry.addMenuItem("tableinsertcolumnbefore", {
        text: "Insert column before",
        icon: "table-insert-column-before",
        onAction: o("mceTableInsertColBefore"),
        onSetup: t.onSetupColumn("onFirst")
      }), n.ui.registry.addMenuItem("tableinsertcolumnafter", {
        text: "Insert column after",
        icon: "table-insert-column-after",
        onAction: o("mceTableInsertColAfter"),
        onSetup: t.onSetupColumn("onLast")
      }), n.ui.registry.addMenuItem("tabledeletecolumn", {
        text: "Delete column",
        icon: "table-delete-column",
        onAction: o("mceTableDeleteCol"),
        onSetup: t.onSetupColumn("onAny")
      }), n.ui.registry.addMenuItem("tablecutcolumn", {
        text: "Cut column",
        icon: "cut-column",
        onAction: o("mceTableCutCol"),
        onSetup: t.onSetupColumn("onAny")
      }), n.ui.registry.addMenuItem("tablecopycolumn", {
        text: "Copy column",
        icon: "duplicate-column",
        onAction: o("mceTableCopyCol"),
        onSetup: t.onSetupColumn("onAny")
      }), n.ui.registry.addMenuItem("tablepastecolumnbefore", {
        text: "Paste column before",
        icon: "paste-column-before",
        onAction: o("mceTablePasteColBefore"),
        onSetup: t.onSetupPasteableColumn(r.getColumns, "onFirst")
      }), n.ui.registry.addMenuItem("tablepastecolumnafter", {
        text: "Paste column after",
        icon: "paste-column-after",
        onAction: o("mceTablePasteColAfter"),
        onSetup: t.onSetupPasteableColumn(r.getColumns, "onLast")
      });
      var a = {
        type: "nestedmenuitem",
        text: "Column",
        getSubmenuItems: C("tableinsertcolumnbefore tableinsertcolumnafter tabledeletecolumn | tablecutcolumn tablecopycolumn tablepastecolumnbefore tablepastecolumnafter")
      };
      n.ui.registry.addMenuItem("tablecellprops", {
        text: "Cell properties",
        icon: "table-cell-properties",
        onAction: o("mceTableCellProps"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuItem("tablemergecells", {
        text: "Merge cells",
        icon: "table-merge-cells",
        onAction: o("mceTableMergeCells"),
        onSetup: t.onSetupMergeable
      }), n.ui.registry.addMenuItem("tablesplitcells", {
        text: "Split cell",
        icon: "table-split-cells",
        onAction: o("mceTableSplitCells"),
        onSetup: t.onSetupUnmergeable
      });
      var f = {
        type: "nestedmenuitem",
        text: "Cell",
        getSubmenuItems: C("tablecellprops tablemergecells tablesplitcells")
      };
      !1 === n.getParam("table_grid", !0, "boolean") ? n.ui.registry.addMenuItem("inserttable", {
        text: "Table",
        icon: "table",
        onAction: o("mceInsertTable")
      }) : n.ui.registry.addNestedMenuItem("inserttable", {
        text: "Table",
        icon: "table",
        getSubmenuItems: function getSubmenuItems() {
          return [{
            type: "fancymenuitem",
            fancytype: "inserttable",
            onAction: u
          }];
        }
      }), n.ui.registry.addMenuItem("inserttabledialog", {
        text: "Insert table",
        icon: "table",
        onAction: o("mceInsertTable")
      }), n.ui.registry.addMenuItem("tableprops", i), n.ui.registry.addMenuItem("deletetable", c), n.ui.registry.addNestedMenuItem("row", l), n.ui.registry.addNestedMenuItem("column", a), n.ui.registry.addNestedMenuItem("cell", f), n.ui.registry.addContextMenu("table", {
        update: function update() {
          return t.resetTargets(), t.targets().fold(C(""), function (e) {
            return "caption" === Ye(e.element) ? "tableprops deletetable" : "cell row column | advtablesort | tableprops deletetable";
          });
        }
      });
      var s = Ef(oi(n));
      0 !== s.length && n.ui.registry.addNestedMenuItem("tableclass", {
        icon: "table-classes",
        text: "Table styles",
        getSubmenuItems: function getSubmenuItems() {
          return Mf(n, e, s, "tableclass", function (e) {
            return n.execCommand("mceTableToggleClass", !1, e);
          });
        },
        onSetup: t.onSetupTable
      });
      var m = Ef(ri(n));
      0 !== m.length && n.ui.registry.addNestedMenuItem("tablecellclass", {
        icon: "table-cell-classes",
        text: "Cell styles",
        getSubmenuItems: function getSubmenuItems() {
          return Mf(n, e, m, "tablecellclass", function (e) {
            return n.execCommand("mceTableCellToggleClass", !1, e);
          });
        },
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addNestedMenuItem("tablecellvalign", {
        icon: "vertical-align",
        text: "Vertical align",
        getSubmenuItems: function getSubmenuItems() {
          return Mf(n, e, Df, "tablecellverticalalign", Zc(n, "vertical-align"));
        },
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addNestedMenuItem("tablecellborderwidth", {
        icon: "border-width",
        text: "Border width",
        getSubmenuItems: function getSubmenuItems() {
          return Mf(n, e, Xu(n), "tablecellborderwidth", Zc(n, "border-width"));
        },
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addNestedMenuItem("tablecellborderstyle", {
        icon: "border-style",
        text: "Border style",
        getSubmenuItems: function getSubmenuItems() {
          return Mf(n, e, Yu(n), "tablecellborderstyle", Zc(n, "border-style"));
        },
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addToggleMenuItem("tablecaption", {
        icon: "table-caption",
        text: "Table caption",
        onAction: o("mceTableToggleCaption"),
        onSetup: t.onSetupTableWithCaption
      }), n.ui.registry.addNestedMenuItem("tablecellbackgroundcolor", {
        icon: "cell-background-color",
        text: "Background color",
        getSubmenuItems: function getSubmenuItems() {
          return nl(n, si(n), "background-color");
        },
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addNestedMenuItem("tablecellbordercolor", {
        icon: "cell-border-color",
        text: "Border color",
        getSubmenuItems: function getSubmenuItems() {
          return nl(n, mi(n), "border-color");
        },
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addToggleMenuItem("tablerowheader", {
        text: "Row header",
        icon: "table-top-header",
        onAction: tl(n),
        onSetup: t.onSetupTableRowHeaders
      }), n.ui.registry.addToggleMenuItem("tablecolheader", {
        text: "Column header",
        icon: "table-left-header",
        onAction: rl(n),
        onSetup: t.onSetupTableColumnHeaders
      });
    }(c, d, g, v), function (n, e, t, r) {
      function o(e) {
        return function () {
          return n.execCommand(e);
        };
      }
      n.ui.registry.addMenuButton("table", {
        tooltip: "Table",
        icon: "table",
        fetch: function fetch(e) {
          return e("inserttable | cell row column | advtablesort | tableprops deletetable");
        }
      }), n.ui.registry.addButton("tableprops", {
        tooltip: "Table properties",
        onAction: o("mceTableProps"),
        icon: "table",
        onSetup: t.onSetupTable
      }), n.ui.registry.addButton("tabledelete", {
        tooltip: "Delete table",
        onAction: o("mceTableDelete"),
        icon: "table-delete-table",
        onSetup: t.onSetupTable
      }), n.ui.registry.addButton("tablecellprops", {
        tooltip: "Cell properties",
        onAction: o("mceTableCellProps"),
        icon: "table-cell-properties",
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addButton("tablemergecells", {
        tooltip: "Merge cells",
        onAction: o("mceTableMergeCells"),
        icon: "table-merge-cells",
        onSetup: t.onSetupMergeable
      }), n.ui.registry.addButton("tablesplitcells", {
        tooltip: "Split cell",
        onAction: o("mceTableSplitCells"),
        icon: "table-split-cells",
        onSetup: t.onSetupUnmergeable
      }), n.ui.registry.addButton("tableinsertrowbefore", {
        tooltip: "Insert row before",
        onAction: o("mceTableInsertRowBefore"),
        icon: "table-insert-row-above",
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addButton("tableinsertrowafter", {
        tooltip: "Insert row after",
        onAction: o("mceTableInsertRowAfter"),
        icon: "table-insert-row-after",
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addButton("tabledeleterow", {
        tooltip: "Delete row",
        onAction: o("mceTableDeleteRow"),
        icon: "table-delete-row",
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addButton("tablerowprops", {
        tooltip: "Row properties",
        onAction: o("mceTableRowProps"),
        icon: "table-row-properties",
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addButton("tableinsertcolbefore", {
        tooltip: "Insert column before",
        onAction: o("mceTableInsertColBefore"),
        icon: "table-insert-column-before",
        onSetup: t.onSetupColumn("onFirst")
      }), n.ui.registry.addButton("tableinsertcolafter", {
        tooltip: "Insert column after",
        onAction: o("mceTableInsertColAfter"),
        icon: "table-insert-column-after",
        onSetup: t.onSetupColumn("onLast")
      }), n.ui.registry.addButton("tabledeletecol", {
        tooltip: "Delete column",
        onAction: o("mceTableDeleteCol"),
        icon: "table-delete-column",
        onSetup: t.onSetupColumn("onAny")
      }), n.ui.registry.addButton("tablecutrow", {
        tooltip: "Cut row",
        icon: "cut-row",
        onAction: o("mceTableCutRow"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addButton("tablecopyrow", {
        tooltip: "Copy row",
        icon: "duplicate-row",
        onAction: o("mceTableCopyRow"),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addButton("tablepasterowbefore", {
        tooltip: "Paste row before",
        icon: "paste-row-before",
        onAction: o("mceTablePasteRowBefore"),
        onSetup: t.onSetupPasteable(r.getRows)
      }), n.ui.registry.addButton("tablepasterowafter", {
        tooltip: "Paste row after",
        icon: "paste-row-after",
        onAction: o("mceTablePasteRowAfter"),
        onSetup: t.onSetupPasteable(r.getRows)
      }), n.ui.registry.addButton("tablecutcol", {
        tooltip: "Cut column",
        icon: "cut-column",
        onAction: o("mceTableCutCol"),
        onSetup: t.onSetupColumn("onAny")
      }), n.ui.registry.addButton("tablecopycol", {
        tooltip: "Copy column",
        icon: "duplicate-column",
        onAction: o("mceTableCopyCol"),
        onSetup: t.onSetupColumn("onAny")
      }), n.ui.registry.addButton("tablepastecolbefore", {
        tooltip: "Paste column before",
        icon: "paste-column-before",
        onAction: o("mceTablePasteColBefore"),
        onSetup: t.onSetupPasteableColumn(r.getColumns, "onFirst")
      }), n.ui.registry.addButton("tablepastecolafter", {
        tooltip: "Paste column after",
        icon: "paste-column-after",
        onAction: o("mceTablePasteColAfter"),
        onSetup: t.onSetupPasteableColumn(r.getColumns, "onLast")
      }), n.ui.registry.addButton("tableinsertdialog", {
        tooltip: "Insert table",
        onAction: o("mceInsertTable"),
        icon: "table"
      });
      var u = Ef(oi(n));
      0 !== u.length && n.ui.registry.addMenuButton("tableclass", {
        icon: "table-classes",
        tooltip: "Table styles",
        fetch: el(n, e, u, "tableclass", function (e) {
          return n.execCommand("mceTableToggleClass", !1, e);
        }),
        onSetup: t.onSetupTable
      });
      var i = Ef(ri(n));
      0 !== i.length && n.ui.registry.addMenuButton("tablecellclass", {
        icon: "table-cell-classes",
        tooltip: "Cell styles",
        fetch: el(n, e, i, "tablecellclass", function (e) {
          return n.execCommand("mceTableCellToggleClass", !1, e);
        }),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuButton("tablecellvalign", {
        icon: "vertical-align",
        tooltip: "Vertical align",
        fetch: el(n, e, Df, "tablecellverticalalign", Zc(n, "vertical-align")),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuButton("tablecellborderwidth", {
        icon: "border-width",
        tooltip: "Border width",
        fetch: el(n, e, Xu(n), "tablecellborderwidth", Zc(n, "border-width")),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuButton("tablecellborderstyle", {
        icon: "border-style",
        tooltip: "Border style",
        fetch: el(n, e, Yu(n), "tablecellborderstyle", Zc(n, "border-style")),
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addToggleButton("tablecaption", {
        tooltip: "Table caption",
        onAction: o("mceTableToggleCaption"),
        icon: "table-caption",
        onSetup: t.onSetupTableWithCaption
      }), n.ui.registry.addMenuButton("tablecellbackgroundcolor", {
        icon: "cell-background-color",
        tooltip: "Background color",
        fetch: function fetch(e) {
          return e(nl(n, si(n), "background-color"));
        },
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addMenuButton("tablecellbordercolor", {
        icon: "cell-border-color",
        tooltip: "Border color",
        fetch: function fetch(e) {
          return e(nl(n, mi(n), "border-color"));
        },
        onSetup: t.onSetupCellOrRow
      }), n.ui.registry.addToggleButton("tablerowheader", {
        tooltip: "Row header",
        icon: "table-top-header",
        onAction: tl(n),
        onSetup: t.onSetupTableRowHeaders
      }), n.ui.registry.addToggleButton("tablecolheader", {
        tooltip: "Column header",
        icon: "table-left-header",
        onAction: rl(n),
        onSetup: t.onSetupTableColumnHeaders
      });
    }(c, d, g, v), 0 < (l = (i = c).getParam("table_toolbar", "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol")).length && i.ui.registry.addContextToolbar("table", {
      predicate: function predicate(e) {
        return i.dom.is(e, "table") && i.getBody().contains(e);
      },
      items: l,
      scope: "node",
      position: "node"
    }), c.on("PreInit", function () {
      c.serializer.addTempAttr(Xl.firstSelected), c.serializer.addTempAttr(Xl.lastSelected), c.formatter.register(Hf);
    }), c.getParam("table_tab_navigation", !0, "boolean") && c.on("keydown", function (e) {
      var n,
        t,
        r,
        o,
        u = c,
        i = b;
      (n = e).keyCode === Qs.TAB && (t = Yo(u), r = function r(e) {
        var n = Ye(e);
        return ce(e, t) || y(em, n);
      }, o = u.selection.getRng(), et(Ve.fromDom(n.shiftKey ? o.startContainer : o.endContainer), r).each(function (e) {
        n.preventDefault(), rt(e, r).each(i.clear), u.selection.collapse(n.shiftKey), (n.shiftKey ? function (e, n, t) {
          return Zs(e, n, (o = Nu, Cl(r = t, void 0).fold(function () {
            return qf.none();
          }, function (e) {
            return Uf(e.all, r, e.index, -1, o);
          })));
          var r, o;
        } : vs)(u, r, e).each(function (e) {
          u.selection.setRng(e);
        });
      }));
    }), c.on("remove", function () {
      p.destroy();
    }), {
      insertTable: (u = c, function (e, n, t) {
        var r = Lc(u, n, e, t = void 0 === t ? {} : t, "Invalid values for insertTable - rows and columns values are required to insert a table.");
        return u.undoManager.add(), r;
      }),
      setClipboardRows: Wc(v.setRows),
      getClipboardRows: _c(v.getRows),
      setClipboardCols: Wc(v.setColumns),
      getClipboardCols: _c(v.getColumns),
      resizeHandler: p,
      selectionTargets: g
    };
    function w(r) {
      return Jl(tu(a)).bind(function (t) {
        return rt(t, m).map(function (e) {
          var n = ou(s, e, t);
          return r(e, n);
        });
      }).getOr("");
    }
  });
}();
/*__ESM_BODY_END__*/