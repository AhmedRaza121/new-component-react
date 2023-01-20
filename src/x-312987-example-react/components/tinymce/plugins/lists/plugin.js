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
      return n = _typeof(t = e), (null === t ? "null" : "object" == n && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : n) === r;
      var t, n;
    };
  }
  function t(t) {
    return function (e) {
      return _typeof(e) === t;
    };
  }
  function u() {}
  function S(e) {
    return function () {
      return e;
    };
  }
  function n(e) {
    return e;
  }
  function r(e, t) {
    return e === t;
  }
  function y(t) {
    return function (e) {
      return !t(e);
    };
  }
  function o() {
    return p;
  }
  var i = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    a = e("string"),
    O = e("object"),
    s = e("array"),
    c = t("boolean"),
    f = t("function"),
    d = t("number"),
    l = S(!1),
    m = S(!0),
    p = {
      fold: function fold(e, t) {
        return e();
      },
      isSome: l,
      isNone: m,
      getOr: n,
      getOrThunk: g,
      getOrDie: function getOrDie(e) {
        throw new Error(e || "error: getOrDie called on none.");
      },
      getOrNull: S(null),
      getOrUndefined: S(void 0),
      or: n,
      orThunk: g,
      map: o,
      each: u,
      bind: o,
      exists: l,
      forall: m,
      filter: function filter() {
        return p;
      },
      toArray: function toArray() {
        return [];
      },
      toString: S("none()")
    };
  function g(e) {
    return e();
  }
  function C(e, t) {
    for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
      var i = e[o];
      r[o] = t(i, o);
    }
    return r;
  }
  function b(e, t) {
    for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
  }
  function L(e, t) {
    for (var n = [], r = 0, o = e.length; r < o; r++) {
      var i = e[r];
      t(i, r) && n.push(i);
    }
    return n;
  }
  function v(e, n, r) {
    return b(e, function (e, t) {
      r = n(r, e, t);
    }), r;
  }
  function h(e, t, n) {
    for (var r = 0, o = e.length; r < o; r++) {
      var i = e[r];
      if (t(i, r)) return E.some(i);
      if (n(i, r)) break;
    }
    return E.none();
  }
  function N(e, t) {
    return h(e, t, l);
  }
  function T(e, t) {
    return function (e) {
      for (var t = [], n = 0, r = e.length; n < r; ++n) {
        if (!s(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
        P.apply(t, e[n]);
      }
      return t;
    }(C(e, t));
  }
  function D(e) {
    var t = I.call(e, 0);
    return t.reverse(), t;
  }
  function x(e, t) {
    return 0 <= t && t < e.length ? E.some(e[t]) : E.none();
  }
  function A(e) {
    return x(e, 0);
  }
  function w(e) {
    return x(e, e.length - 1);
  }
  var k = function k(n) {
      function e() {
        return o;
      }
      function t(e) {
        return e(n);
      }
      var r = S(n),
        o = {
          fold: function fold(e, t) {
            return t(n);
          },
          isSome: m,
          isNone: l,
          getOr: r,
          getOrThunk: r,
          getOrDie: r,
          getOrNull: r,
          getOrUndefined: r,
          or: e,
          orThunk: e,
          map: function map(e) {
            return k(e(n));
          },
          each: function each(e) {
            e(n);
          },
          bind: t,
          exists: t,
          forall: t,
          filter: function filter(e) {
            return e(n) ? o : p;
          },
          toArray: function toArray() {
            return [n];
          },
          toString: function toString() {
            return "some(" + n + ")";
          }
        };
      return o;
    },
    E = {
      some: k,
      none: o,
      from: function from(e) {
        return null == e ? p : k(e);
      }
    },
    I = Array.prototype.slice,
    P = Array.prototype.push,
    _B = function B() {
      return (_B = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
    };
  function R(r, e) {
    return function (e) {
      for (var t = 0; t < e.length; t++) {
        var n = function (t) {
          var n = t.brand.toLowerCase();
          return N(r, function (e) {
            var t;
            return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
          }).map(function (e) {
            return {
              current: e.name,
              version: G.nu(parseInt(t.version, 10), 0)
            };
          });
        }(e[t]);
        if (n.isSome()) return n;
      }
      return E.none();
    }(e.brands);
  }
  function M(e, t) {
    var n = String(t).toLowerCase();
    return N(e, function (e) {
      return e.search(n);
    });
  }
  function U(e, t) {
    return -1 !== e.indexOf(t);
  }
  function _(t) {
    return function (e) {
      return U(e, t);
    };
  }
  function $(e) {
    return window.matchMedia(e).matches;
  }
  function F(e, t) {
    return e.dom === t.dom;
  }
  function H(e, t) {
    return le().browser.isIE() ? (n = e.dom, r = t.dom, o = Node.DOCUMENT_POSITION_CONTAINED_BY, 0 != (n.compareDocumentPosition(r) & o)) : (i = e.dom) !== (a = t.dom) && i.contains(a);
    var n, r, o, i, a;
  }
  function j(e, t) {
    for (var n = ye(e), r = 0, o = n.length; r < o; r++) {
      var i = n[r];
      t(e[i], i);
    }
  }
  function K() {
    return Z(0, 0);
  }
  function V(e) {
    function t(e) {
      return function () {
        return n === e;
      };
    }
    var n = e.current,
      r = e.version;
    return {
      current: n,
      version: r,
      isEdge: t("Edge"),
      isChrome: t("Chrome"),
      isIE: t("IE"),
      isOpera: t("Opera"),
      isFirefox: t(ne),
      isSafari: t("Safari")
    };
  }
  function W(e) {
    function t(e) {
      return function () {
        return n === e;
      };
    }
    var n = e.current,
      r = e.version;
    return {
      current: n,
      version: r,
      isWindows: t(ie),
      isiOS: t("iOS"),
      isAndroid: t(ae),
      isOSX: t("OSX"),
      isLinux: t("Linux"),
      isSolaris: t(se),
      isFreeBSD: t(ue),
      isChromeOS: t(ce)
    };
  }
  function Q(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  }
  var X,
    q,
    z,
    Y,
    Z = function Z(e, t) {
      return {
        major: e,
        minor: t
      };
    },
    G = {
      nu: Z,
      detect: function detect(e, t) {
        var n,
          r,
          o = String(t).toLowerCase();
        return 0 === e.length ? K() : (r = function (e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (r.test(t)) return r;
          }
        }(e, n = o)) ? Z(i(1), i(2)) : {
          major: 0,
          minor: 0
        };
        function i(e) {
          return Number(n.replace(r, "$" + e));
        }
      },
      unknown: K
    },
    J = (X = /^\s+|\s+$/g, function (e) {
      return e.replace(X, "");
    }),
    ee = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
    te = {
      browsers: S([{
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function search(e) {
          return U(e, "edge/") && U(e, "chrome") && U(e, "safari") && U(e, "applewebkit");
        }
      }, {
        name: "Chrome",
        brand: "Chromium",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, ee],
        search: function search(e) {
          return U(e, "chrome") && !U(e, "chromeframe");
        }
      }, {
        name: "IE",
        versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
        search: function search(e) {
          return U(e, "msie") || U(e, "trident");
        }
      }, {
        name: "Opera",
        versionRegexes: [ee, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: _("opera")
      }, {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: _("firefox")
      }, {
        name: "Safari",
        versionRegexes: [ee, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: function search(e) {
          return (U(e, "safari") || U(e, "mobile/")) && U(e, "applewebkit");
        }
      }]),
      oses: S([{
        name: "Windows",
        search: _("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      }, {
        name: "iOS",
        search: function search(e) {
          return U(e, "iphone") || U(e, "ipad");
        },
        versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
      }, {
        name: "Android",
        search: _("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      }, {
        name: "OSX",
        search: _("mac os x"),
        versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
      }, {
        name: "Linux",
        search: _("linux"),
        versionRegexes: []
      }, {
        name: "Solaris",
        search: _("sunos"),
        versionRegexes: []
      }, {
        name: "FreeBSD",
        search: _("freebsd"),
        versionRegexes: []
      }, {
        name: "ChromeOS",
        search: _("cros"),
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
      }])
    },
    ne = "Firefox",
    re = function re() {
      return V({
        current: void 0,
        version: G.unknown()
      });
    },
    oe = V,
    ie = (S("Edge"), S("Chrome"), S("IE"), S("Opera"), S(ne), S("Safari"), "Windows"),
    ae = "Android",
    se = "Solaris",
    ue = "FreeBSD",
    ce = "ChromeOS",
    fe = function fe() {
      return W({
        current: void 0,
        version: G.unknown()
      });
    },
    de = W,
    le = (S(ie), S("iOS"), S(ae), S("Linux"), S("OSX"), S(se), S(ue), S(ce), Y = !(q = function q() {
      return e = navigator.userAgent, t = E.from(navigator.userAgentData), n = $, g = te.browsers(), v = te.oses(), h = t.bind(function (e) {
        return R(g, e);
      }).orThunk(function () {
        return M(g, n = e).map(function (e) {
          var t = G.detect(e.versionRegexes, n);
          return {
            current: e.name,
            version: t
          };
        });
        var n;
      }).fold(re, oe), y = M(v, r = e).map(function (e) {
        var t = G.detect(e.versionRegexes, r);
        return {
          current: e.name,
          version: t
        };
      }).fold(fe, de), {
        browser: h,
        os: y,
        deviceType: (i = h, a = e, s = n, u = (o = y).isiOS() && !0 === /ipad/i.test(a), c = o.isiOS() && !u, d = (f = o.isiOS() || o.isAndroid()) || s("(pointer:coarse)"), l = u || !c && f && s("(min-device-width:768px)"), m = c || f && !l, p = i.isSafari() && o.isiOS() && !1 === /safari/i.test(a), {
          isiPad: S(u),
          isiPhone: S(c),
          isTablet: S(l),
          isPhone: S(m),
          isTouch: S(d),
          isAndroid: o.isAndroid,
          isiOS: o.isiOS,
          isWebView: S(p),
          isDesktop: S(!m && !l && !p)
        })
      };
      var e, t, n, r, o, i, a, s, u, c, f, d, l, m, p, g, v, h, y;
    }), function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return Y || (Y = !0, z = q.apply(null, e)), z;
    }),
    me = {
      fromHtml: function fromHtml(e, t) {
        var n = (t || document).createElement("div");
        if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
        return Q(n.childNodes[0]);
      },
      fromTag: function fromTag(e, t) {
        var n = (t || document).createElement(e);
        return Q(n);
      },
      fromText: function fromText(e, t) {
        var n = (t || document).createTextNode(e);
        return Q(n);
      },
      fromDom: Q,
      fromPoint: function fromPoint(e, t, n) {
        return E.from(e.dom.elementFromPoint(t, n)).map(Q);
      }
    },
    pe = function pe(e, t) {
      var n = e.dom;
      if (1 !== n.nodeType) return !1;
      var r = n;
      if (void 0 !== r.matches) return r.matches(t);
      if (void 0 !== r.msMatchesSelector) return r.msMatchesSelector(t);
      if (void 0 !== r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
      if (void 0 !== r.mozMatchesSelector) return r.mozMatchesSelector(t);
      throw new Error("Browser lacks native selectors");
    },
    ge = tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),
    ve = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),
    he = tinymce.util.Tools.resolve("tinymce.util.VK"),
    ye = Object.keys;
  function Se(e) {
    return e.dom.nodeName.toLowerCase();
  }
  function Ce(t) {
    return function (e) {
      return Bt(e) && Se(e) === t;
    };
  }
  function be(e, t) {
    var n = e.dom;
    j(t, function (e, t) {
      !function (e, t, n) {
        if (!(a(n) || c(n) || d(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
        e.setAttribute(t, n + "");
      }(n, t, e);
    });
  }
  function Ne(e) {
    return v(e.dom.attributes, function (e, t) {
      return e[t.name] = t.value, e;
    }, {});
  }
  function Oe(e) {
    return E.from(e.dom.parentNode).map(me.fromDom);
  }
  function Le(e) {
    return C(e.dom.childNodes, me.fromDom);
  }
  function Te(e, t) {
    var n = e.dom.childNodes;
    return E.from(n[t]).map(me.fromDom);
  }
  function De(e) {
    return Te(e, 0);
  }
  function xe(e) {
    return Te(e, e.dom.childNodes.length - 1);
  }
  function Ae(t, n) {
    Oe(t).each(function (e) {
      e.dom.insertBefore(n.dom, t.dom);
    });
  }
  function we(e, t) {
    e.dom.appendChild(t.dom);
  }
  function ke(t, e) {
    b(e, function (e) {
      we(t, e);
    });
  }
  function Ee(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  }
  function Ie(e) {
    return me.fromDom(e.dom.cloneNode(!0));
  }
  function Pe(e, t) {
    var n,
      r,
      o = (n = e, be(r = me.fromTag(t), Ne(n)), r);
    return Ae(e, o), ke(o, Le(e)), Ee(e), o;
  }
  function Be(t) {
    return function (e) {
      return e && e.nodeName.toLowerCase() === t;
    };
  }
  function Re(t) {
    return function (e) {
      return e && t.test(e.nodeName);
    };
  }
  function Me(e) {
    return e && 3 === e.nodeType;
  }
  function Ue(e, t) {
    return t && e.schema.getTextBlockElements()[t.nodeName];
  }
  function _e(e, t) {
    return e && e.nodeName in t;
  }
  function $e(e, t, n) {
    var r = e.isEmpty(t);
    return !(n && 0 < e.select("span[data-mce-type=bookmark]", t).length) && r;
  }
  function Fe(e, t) {
    return e.isChildOf(t, e.getRoot());
  }
  function He(e, t) {
    var n,
      r,
      o,
      i,
      a = e.dom,
      s = e.schema.getBlockElements(),
      u = a.createFragment(),
      c = !1 === (n = e.getParam("forced_root_block", "p")) ? "" : !0 === n ? "p" : n;
    if (c && ((o = a.create(c)).tagName === c.toUpperCase() && a.setAttribs(o, e.getParam("forced_root_block_attrs", {})), _e(t.firstChild, s) || u.appendChild(o)), t) for (; r = t.firstChild;) {
      var f = r.nodeName;
      i || "SPAN" === f && "bookmark" === r.getAttribute("data-mce-type") || (i = !0), _e(r, s) ? (u.appendChild(r), o = null) : c ? (o || (o = a.create(c), u.appendChild(o)), o.appendChild(r)) : u.appendChild(r);
    }
    return c ? i || o.appendChild(a.create("br", {
      "data-mce-bogus": "1"
    })) : u.appendChild(a.create("br")), u;
  }
  function je(e) {
    Qt(e) && Pe(e, "dd");
  }
  function Ke(r, e, t) {
    b(t, "Indent" === e ? je : function (e) {
      return t = r, Wt(n = e) ? Pe(n, "dt") : Qt(n) && Oe(n).each(function (e) {
        return function (e, t, n) {
          var r = Vt.select('span[data-mce-type="bookmark"]', t),
            o = He(e, n),
            i = Vt.createRng();
          i.setStartAfter(n), i.setEndAfter(t);
          for (var a, s = i.extractContents(), u = s.firstChild; u; u = u.firstChild) if ("LI" === u.nodeName && e.dom.isEmpty(u)) {
            Vt.remove(u);
            break;
          }
          e.dom.isEmpty(s) || Vt.insertAfter(s, t), Vt.insertAfter(o, t), $e(e.dom, n.parentNode) && (a = n.parentNode, Mt.each(r, function (e) {
            a.parentNode.insertBefore(e, n.parentNode);
          }), Vt.remove(a)), Vt.remove(n), $e(e.dom, t) && Vt.remove(t);
        }(t, e.dom, n.dom);
      }), 0;
      var t, n;
    });
  }
  function Ve(e, t) {
    if (Me(e)) return {
      container: e,
      offset: t
    };
    var n = ge.getNode(e, t);
    return Me(n) ? {
      container: n,
      offset: t >= e.childNodes.length ? n.data.length : 0
    } : n.previousSibling && Me(n.previousSibling) ? {
      container: n.previousSibling,
      offset: n.previousSibling.data.length
    } : n.nextSibling && Me(n.nextSibling) ? {
      container: n.nextSibling,
      offset: 0
    } : {
      container: e,
      offset: t
    };
  }
  function We(e) {
    var t = e.cloneRange(),
      n = Ve(e.startContainer, e.startOffset);
    t.setStart(n.container, n.offset);
    var r = Ve(e.endContainer, e.endOffset);
    return t.setEnd(r.container, r.offset), t;
  }
  function Qe(e, t) {
    var n = t || e.selection.getStart(!0);
    return e.dom.getParent(n, "OL,UL,DL", qt(e, n));
  }
  function Xe(e) {
    var t,
      n,
      r = e.selection.getSelectedBlocks();
    return L((t = e, n = Mt.map(r, function (e) {
      return t.dom.getParent(e, "li,dd,dt", qt(t, e)) || e;
    }), Xt.unique(n)), Ft);
  }
  function qe(e, t) {
    return w(e.dom.getParents(t, "ol,ul", qt(e, t)));
  }
  function ze(e, t, n) {
    return void 0 === n && (n = r), e.exists(function (e) {
      return n(e, t);
    });
  }
  function Ye(e, t, n) {
    return e.isSome() && t.isSome() ? E.some(n(e.getOrDie(), t.getOrDie())) : E.none();
  }
  function Ze(e, t, n) {
    return e.fire("ListMutation", {
      action: t,
      element: n
    });
  }
  function Ge(e, t) {
    we(e.item, t.list);
  }
  function Je(e, t) {
    for (var n = 0; n < e.length - 1; n++) (function (e, t, n) {
      if (!a(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
      void 0 !== e.style && f(e.style.getPropertyValue) && e.style.setProperty(t, n);
    })(e[n].item.dom, "list-style-type", "none");
    w(e).each(function (e) {
      be(e.list, t.listAttributes), be(e.item, t.itemAttributes), ke(e.item, t.content);
    });
  }
  function et(u, e, c) {
    var t = e.slice(0, c.depth);
    return w(t).each(function (e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        s = (t = c.itemAttributes, n = c.content, be(r = me.fromTag("li", u), t), ke(r, n), r);
      we((o = e).list, s), o.item = s, a = c, Se((i = e).list) !== a.listType && (i.list = Pe(i.list, a.listType)), be(i.list, a.listAttributes);
    }), t;
  }
  function tt(e, t, n) {
    var r,
      o = function (e, t, n) {
        for (var r, o, i, a = [], s = 0; s < n; s++) a.push((o = t.listType, we((i = {
          list: me.fromTag(o, r = e),
          item: me.fromTag("li", r)
        }).list, i.item), i));
        return a;
      }(e, n, n.depth - t.length);
    return function (e) {
      for (var t = 1; t < e.length; t++) Ge(e[t - 1], e[t]);
    }(o), Je(o, n), r = o, Ye(w(t), A(r), Ge), t.concat(o);
  }
  function nt(e) {
    return pe(e, "OL,UL");
  }
  function rt(e) {
    return De(e).exists(nt);
  }
  function ot(e) {
    return 0 < e.depth;
  }
  function it(e) {
    return e.isSelected;
  }
  function at(s) {
    return b(s, function (a, e) {
      function t(e) {
        return e.depth === i && !e.dirty;
      }
      function n(e) {
        return e.depth < i;
      }
      var r, o, i;
      i = (r = s)[o = e].depth, h(D(r.slice(0, o)), t, n).orThunk(function () {
        return h(r.slice(o + 1), t, n);
      }).fold(function () {
        var e, t, n, r, o, i;
        a.dirty && (a.listAttributes = (e = a.listAttributes, n = function n(e, t) {
          return "start" !== t;
        }, r = t = {}, o = function o(e, t) {
          r[t] = e;
        }, i = u, j(e, function (e, t) {
          (n(e, t) ? o : i)(e, t);
        }), t));
      }, function (e) {
        var t = e;
        a.listType = t.listType, a.listAttributes = _B({}, t.listAttributes);
      });
    }), s;
  }
  function st(n, a, s, u) {
    return De(u).filter(nt).fold(function () {
      a.each(function (e) {
        F(e.start, u) && s.set(!0);
      });
      var r,
        o,
        i,
        e = (r = u, o = n, i = s.get(), Oe(r).filter(Bt).map(function (e) {
          return {
            depth: o,
            dirty: !1,
            isSelected: i,
            content: (n = Le(t = r), C(xe(t).exists(nt) ? n.slice(0, -1) : n, Ie)),
            itemAttributes: Ne(r),
            listAttributes: Ne(e),
            listType: Se(e)
          };
          var t, n;
        }));
      a.each(function (e) {
        F(e.end, u) && s.set(!1);
      });
      var t = xe(u).filter(nt).map(function (e) {
        return Yt(n, a, s, e);
      }).getOr([]);
      return e.toArray().concat(t);
    }, function (e) {
      return Yt(n, a, s, e);
    });
  }
  function ut(o, e) {
    return C(at(e), function (e) {
      var t,
        n,
        r = (t = e.content, n = document.createDocumentFragment(), b(t, function (e) {
          n.appendChild(e.dom);
        }), me.fromDom(n));
      return me.fromDom(He(o, r.dom));
    });
  }
  function ct(e, t) {
    var n = at(t),
      r = e.contentDocument;
    return A(v(n, function (e, t) {
      return (t.depth > e.length ? tt : et)(r, e, t);
    }, [])).map(function (e) {
      return e.list;
    }).toArray();
  }
  function ft(e, t) {
    b(L(e, it), function (e) {
      return function (e) {
        switch (t) {
          case "Indent":
            e.depth++;
            break;
          case "Outdent":
            e.depth--;
            break;
          case "Flatten":
            e.depth = 0;
        }
        e.dirty = !0;
      }(e), 0;
    });
  }
  function dt(e, t) {
    var n,
      r,
      o,
      i,
      a,
      s,
      u,
      c,
      f,
      d,
      l,
      m,
      p,
      g = C((i = qe(o = r = e, o.selection.getStart()), a = L(o.selection.getSelectedBlocks(), _t), s = i.toArray().concat(a), zt(r, s)), me.fromDom),
      v = C(L(Xe(e), Ht), me.fromDom),
      h = !1;
    return (g.length || v.length) && (n = e.selection.getBookmark(), c = t, b((f = g, p = C(Xe(u = e), me.fromDom), d = Ye(N(p, y(rt)), N(D(p), y(rt)), function (e, t) {
      return {
        start: e,
        end: t
      };
    }), l = !1, m = {
      get: function get() {
        return l;
      },
      set: function set(e) {
        l = e;
      }
    }, C(f, function (e) {
      return {
        sourceList: e,
        entries: Yt(0, d, m, e)
      };
    })), function (e) {
      ft(e.entries, c);
      var t,
        n,
        r = (t = u, T(function (e, t) {
          if (0 === e.length) return [];
          for (var n = t(e[0]), r = [], o = [], i = 0, a = e.length; i < a; i++) {
            var s = e[i],
              u = t(s);
            u !== n && (r.push(o), o = []), n = u, o.push(s);
          }
          return 0 !== o.length && r.push(o), r;
        }(e.entries, ot), function (e) {
          return (A(e).exists(ot) ? ct : ut)(t, e);
        }));
      b(r, function (e) {
        Ze(u, "Indent" === c ? "IndentList" : "OutdentList", e.dom);
      }), n = e.sourceList, b(r, function (e) {
        Ae(n, e);
      }), Ee(e.sourceList);
    }), Ke(e, t, v), e.selection.moveToBookmark(n), e.selection.setRng(We(e.selection.getRng())), e.nodeChanged(), h = !0), h;
  }
  function lt(e) {
    return dt(e, "Indent");
  }
  function mt(e) {
    return dt(e, "Outdent");
  }
  function pt(e) {
    return dt(e, "Flatten");
  }
  function gt(o) {
    function e(e) {
      var t,
        n = o[e ? "startContainer" : "endContainer"],
        r = o[e ? "startOffset" : "endOffset"];
      1 === n.nodeType && (t = Gt.create("span", {
        "data-mce-type": "bookmark"
      }), n.hasChildNodes() ? (r = Math.min(r, n.childNodes.length - 1), e ? n.insertBefore(t, n.childNodes[r]) : Gt.insertAfter(t, n.childNodes[r])) : n.appendChild(t), n = t, r = 0), i[e ? "startContainer" : "endContainer"] = n, i[e ? "startOffset" : "endOffset"] = r;
    }
    var i = {};
    return e(!0), o.collapsed || e(), i;
  }
  function vt(o) {
    function e(e) {
      var t,
        n = t = o[e ? "startContainer" : "endContainer"],
        r = o[e ? "startOffset" : "endOffset"];
      n && (1 === n.nodeType && (r = function (e) {
        for (var t = e.parentNode.firstChild, n = 0; t;) {
          if (t === e) return n;
          1 === t.nodeType && "bookmark" === t.getAttribute("data-mce-type") || n++, t = t.nextSibling;
        }
        return -1;
      }(n), n = n.parentNode, Gt.remove(t), !n.hasChildNodes() && Gt.isBlock(n) && n.appendChild(Gt.create("br"))), o[e ? "startContainer" : "endContainer"] = n, o[e ? "startOffset" : "endOffset"] = r);
    }
    e(!0), e();
    var t = Gt.createRng();
    return t.setStart(o.startContainer, o.startOffset), o.endContainer && t.setEnd(o.endContainer, o.endOffset), We(t);
  }
  function ht(e) {
    switch (e) {
      case "UL":
        return "ToggleUlList";
      case "OL":
        return "ToggleOlList";
      case "DL":
        return "ToggleDLList";
    }
  }
  function yt(e) {
    return /\btox\-/.test(e.className);
  }
  function St(e, n, r) {
    function t(e) {
      var t = h(e.parents, Ut, jt).filter(function (e) {
        return e.nodeName === n && !yt(e);
      }).isSome();
      r(t);
    }
    return t({
      parents: e.dom.getParents(e.selection.getNode())
    }), e.on("NodeChange", t), function () {
      return e.off("NodeChange", t);
    };
  }
  function Ct(n, e) {
    Mt.each(e, function (e, t) {
      n.setAttribute(t, e);
    });
  }
  function bt(e, t, n) {
    var r,
      o,
      i,
      a = n["list-style-type"] || null;
    e.setStyle(t, "list-style-type", a), r = e, Ct(o = t, (i = n)["list-attributes"]), Mt.each(r.select("li", o), function (e) {
      Ct(e, i["list-item-attributes"]);
    });
  }
  function Nt(e, t, n, r) {
    var o = t[n ? "startContainer" : "endContainer"],
      i = t[n ? "startOffset" : "endOffset"];
    for (1 === o.nodeType && (o = o.childNodes[Math.min(i, o.childNodes.length - 1)] || o), !n && Kt(o.nextSibling) && (o = o.nextSibling); o.parentNode !== r;) {
      if (Ue(e, o)) return o;
      if (/^(TD|TH)$/.test(o.parentNode.nodeName)) return o;
      o = o.parentNode;
    }
    return o;
  }
  function Ot(u, c, f) {
    var e,
      t,
      n = u.selection.getRng(),
      d = "LI",
      r = qt(u, u.selection.getStart(!0)),
      l = u.dom;
    "false" !== l.getContentEditable(u.selection.getNode()) && ("DL" === (c = c.toUpperCase()) && (d = "DT"), e = gt(n), t = function (n, e, r) {
      for (var o, i = [], a = n.dom, t = Nt(n, e, !0, r), s = Nt(n, e, !1, r), u = [], c = t; c && (u.push(c), c !== s); c = c.nextSibling);
      return Mt.each(u, function (e) {
        if (Ue(n, e)) return i.push(e), void (o = null);
        if (a.isBlock(e) || Kt(e)) return Kt(e) && a.remove(e), void (o = null);
        var t = e.nextSibling;
        Zt.isBookmarkNode(e) && (Ut(t) || Ue(n, t) || !t && e.parentNode === r) ? o = null : (o || (o = a.create("p"), e.parentNode.insertBefore(o, e), i.push(o)), o.appendChild(e));
      }), i;
    }(u, n, r), Mt.each(t, function (e) {
      var t,
        n,
        r,
        o,
        i,
        a = e.previousSibling,
        s = e.parentNode;
      Ft(s) || (a && Ut(a) && a.nodeName === c && (o = f, l.getStyle(a, "list-style-type") === (i = null === (i = o ? o["list-style-type"] : "") ? "" : i)) ? (t = a, e = l.rename(e, d), a.appendChild(e)) : (t = l.create(c), e.parentNode.insertBefore(t, e), t.appendChild(e), e = l.rename(e, d)), n = l, r = e, Mt.each(["margin", "margin-right", "margin-bottom", "margin-left", "margin-top", "padding", "padding-right", "padding-bottom", "padding-left", "padding-top"], function (e) {
        var t;
        return n.setStyle(r, ((t = {})[e] = "", t));
      }), bt(l, t, f), Jt(u.dom, t));
    }), u.selection.setRng(vt(e)));
  }
  function Lt(e, t, n) {
    return a = n, (i = t) && a && Ut(i) && i.nodeName === a.nodeName && (o = n, (r = e).getStyle(t, "list-style-type", !0) === r.getStyle(o, "list-style-type", !0)) && t.className === n.className;
    var r, o, i, a;
  }
  function Tt(e, t, n) {
    var r,
      o,
      i,
      a,
      s,
      u,
      c,
      f,
      d,
      l,
      m,
      p,
      g,
      v,
      h,
      y,
      S,
      C = Qe(e),
      b = (f = Qe(c = e), d = c.selection.getSelectedBlocks(), f && 1 === d.length && d[0] === f ? L(f.querySelectorAll("ol,ul,dl"), Ut) : L(d, function (e) {
        return Ut(e) && f !== e;
      })),
      N = O(n) ? n : {};
    0 < b.length ? (l = e, p = b, g = t, v = N, (S = Ut(m = C)) && m.nodeName === g && !en(v) ? pt(l) : (Ot(l, g, v), h = gt(l.selection.getRng()), y = S ? function (e, t) {
      for (var n, r = 0, o = t.length; r < o; r++) !n && r in t || ((n = n || Array.prototype.slice.call(t, 0, r))[r] = t[r]);
      return e.concat(n || Array.prototype.slice.call(t));
    }([m], p, !0) : p, Mt.each(y, function (e) {
      var t,
        n,
        r = l,
        o = g,
        i = v;
      (t = e).nodeName !== o ? (n = r.dom.rename(t, o), bt(r.dom, n, i), Ze(r, ht(o), n)) : (bt(r.dom, t, i), Ze(r, ht(o), t));
    }), l.selection.setRng(vt(h)))) : (i = t, a = N, (o = C) !== (r = e).getBody() && (o ? o.nodeName !== i || en(a) || yt(o) ? (s = gt(r.selection.getRng()), bt(r.dom, o, a), u = r.dom.rename(o, i), Jt(r.dom, u), r.selection.setRng(vt(s)), Ot(r, i, a), Ze(r, ht(i), u)) : pt(r) : (Ot(r, i, a), Ze(r, ht(i), o))));
  }
  function Dt(e, t, n, r) {
    var o = t.startContainer,
      i = t.startOffset;
    if (Me(o) && (n ? i < o.data.length : 0 < i)) return o;
    var a = e.schema.getNonEmptyElements();
    1 === o.nodeType && (o = ge.getNode(o, i));
    var s,
      u,
      c = new ve(o, r);
    for (n && (s = e.dom, Kt(u = o) && s.isBlock(u.nextSibling) && !Kt(u.previousSibling) && c.next()); o = c[n ? "next" : "prev2"]();) {
      if ("LI" === o.nodeName && !o.hasChildNodes()) return o;
      if (a[o.nodeName]) return o;
      if (Me(o) && 0 < o.data.length) return o;
    }
  }
  function xt(e, t) {
    var n = t.childNodes;
    return 1 === n.length && !Ut(n[0]) && e.isBlock(n[0]);
  }
  function At(t, e, n) {
    var r,
      o,
      i,
      a = e.parentNode;
    Fe(t, e) && Fe(t, n) && (Ut(n.lastChild) && (r = n.lastChild), a === n.lastChild && Kt(a.previousSibling) && t.remove(a.previousSibling), (o = n.lastChild) && Kt(o) && e.hasChildNodes() && t.remove(o), $e(t, n, !0) && t.$(n).empty(), function (e, t, n) {
      var r,
        o,
        i,
        a = xt(e, n) ? n.firstChild : n;
      if (xt(o = e, i = t) && o.remove(i.firstChild, !0), !$e(e, t, !0)) for (; r = t.firstChild;) a.appendChild(r);
    }(t, e, n), r && n.appendChild(r), i = H(me.fromDom(n), me.fromDom(e)) ? t.getParents(e, Ut, n) : [], t.remove(e), b(i, function (e) {
      $e(t, e) && e !== t.getRoot() && t.remove(e);
    }));
  }
  function wt(c, f) {
    var e = c.dom,
      t = c.selection,
      n = t.getStart(),
      r = qt(c, n),
      d = e.getParent(t.getStart(), "LI", r);
    if (d) {
      var o = d.parentNode;
      if (o === c.getBody() && $e(e, o)) return 1;
      var l = We(t.getRng()),
        m = e.getParent(Dt(c, l, f, r), "LI", r);
      if (m && m !== d) return c.undoManager.transact(function () {
        var e, t, n, r, o, i, a, s, u;
        f ? (t = l, n = m, r = d, (u = (e = c).dom).isEmpty(r) ? (a = n, (i = e).dom.$(s = r).empty(), At(i.dom, a, s), i.selection.setCursorLocation(s, 0)) : (o = gt(t), At(u, n, r), e.selection.setRng(vt(o)))) : d.parentNode.firstChild === d ? mt(c) : function (e, t, n) {
          var r = gt(l);
          At(e.dom, t, n);
          var o = vt(r);
          e.selection.setRng(o);
        }(c, d, m);
      }), 1;
      if (!m && !f && 0 === l.startOffset && 0 === l.endOffset) return c.undoManager.transact(function () {
        pt(c);
      }), 1;
    }
  }
  function kt(e, t) {
    return e.selection.isCollapsed() ? wt(i = e, a = t) || function (r, o) {
      var i = r.dom,
        e = r.selection.getStart(),
        a = qt(r, e),
        s = i.getParent(e, i.isBlock, a);
      if (s && i.isEmpty(s)) {
        var t = We(r.selection.getRng()),
          u = i.getParent(Dt(r, t, o, a), "LI", a);
        if (u) return r.undoManager.transact(function () {
          var e,
            t = s,
            n = (e = i).getParent(t.parentNode, e.isBlock, a);
          e.remove(t), n && e.isEmpty(n) && e.remove(n), Jt(i, u.parentNode), r.selection.select(u, !0), r.selection.collapse(o);
        }), 1;
      }
    }(i, a) : (r = (n = e).selection.getStart(), o = qt(n, r), (n.dom.getParent(r, "LI,DT,DD", o) || 0 < Xe(n).length) && (n.undoManager.transact(function () {
      var i, e, t;
      n.execCommand("Delete"), i = n.dom, e = n.getBody(), t = Mt.grep(i.select("ol,ul", e)), Mt.each(t, function (e) {
        var t,
          n,
          r,
          o = i;
        "LI" === (r = (t = e).parentNode).nodeName && r.firstChild === t && ((n = r.previousSibling) && "LI" === n.nodeName ? (n.appendChild(t), $e(o, r) && tn.remove(r)) : tn.setStyle(r, "listStyleType", "none")), Ut(r) && (n = r.previousSibling) && "LI" === n.nodeName && n.appendChild(t);
      });
    }), 1));
    var n, r, o, i, a;
  }
  function Et(e) {
    return v(C(D(J(e).split("")), function (e, t) {
      var n = e.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
      return Math.pow(26, t) * n;
    }), function (e, t) {
      return e + t;
    }, 0);
  }
  function It(t, n) {
    return function () {
      var e = Qe(t);
      return e && e.nodeName === n;
    };
  }
  function Pt(o) {
    o.addCommand("mceListProps", function () {
      var t, e, n, r;
      r = Qe(t = o), $t(r) && t.windowManager.open({
        title: "List Properties",
        body: {
          type: "panel",
          items: [{
            type: "input",
            name: "start",
            label: "Start list at number",
            inputMode: "numeric"
          }]
        },
        initialData: {
          start: (e = {
            start: t.dom.getAttrib(r, "start", "1"),
            listStyleType: E.some(t.dom.getStyle(r, "list-style-type"))
          }, n = parseInt(e.start, 10), ze(e.listStyleType, "upper-alpha") ? nn(n) : ze(e.listStyleType, "lower-alpha") ? nn(n).toLowerCase() : e.start)
        },
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
        onSubmit: function onSubmit(e) {
          !function (e) {
            switch (/^[0-9]+$/.test(t = e) ? 2 : /^[A-Z]+$/.test(t) ? 0 : /^[a-z]+$/.test(t) ? 1 : 0 < t.length ? 4 : 3) {
              case 2:
                return E.some({
                  listStyleType: E.none(),
                  start: e
                });
              case 0:
                return E.some({
                  listStyleType: E.some("upper-alpha"),
                  start: Et(e).toString()
                });
              case 1:
                return E.some({
                  listStyleType: E.some("lower-alpha"),
                  start: Et(e).toString()
                });
              case 3:
                return E.some({
                  listStyleType: E.none(),
                  start: ""
                });
              case 4:
                return E.none();
            }
            var t;
          }(e.getData().start).each(function (e) {
            t.execCommand("mceListUpdate", !1, {
              attrs: {
                start: "1" === e.start ? "" : e.start
              },
              styles: {
                "list-style-type": e.listStyleType.getOr("")
              }
            });
          }), e.close();
        }
      });
    });
  }
  "undefined" != typeof window || Function("return this;")();
  function Bt(e) {
    return 1 === e.dom.nodeType;
  }
  var Rt = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
    Mt = tinymce.util.Tools.resolve("tinymce.util.Tools"),
    Ut = Re(/^(OL|UL|DL)$/),
    _t = Re(/^(OL|UL)$/),
    $t = Be("ol"),
    Ft = Re(/^(LI|DT|DD)$/),
    Ht = Re(/^(DT|DD)$/),
    jt = Re(/^(TH|TD)$/),
    Kt = Be("br"),
    Vt = Rt.DOM,
    Wt = Ce("dd"),
    Qt = Ce("dt"),
    Xt = tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),
    qt = function qt(e, t) {
      var n = e.dom.getParents(t, "TD,TH");
      return 0 < n.length ? n[0] : e.getBody();
    },
    zt = function zt(t, e) {
      var n = C(e, function (e) {
        return qe(t, e).getOr(e);
      });
      return Xt.unique(n);
    },
    Yt = function Yt(t, n, r, e) {
      return T(Le(e), function (e) {
        return (nt(e) ? Yt : st)(t + 1, n, r, e);
      });
    },
    Zt = tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),
    Gt = Rt.DOM,
    Jt = function Jt(e, t) {
      var n,
        r = t.nextSibling;
      if (Lt(e, t, r)) {
        for (; n = r.firstChild;) t.appendChild(n);
        e.remove(r);
      }
      if (Lt(e, t, r = t.previousSibling)) {
        for (; n = r.lastChild;) t.insertBefore(n, t.firstChild);
        e.remove(r);
      }
    },
    en = function en(e) {
      return "list-style-type" in e;
    },
    tn = Rt.DOM,
    nn = function nn(e) {
      if (--e < 0) return "";
      var t = e % 26,
        n = Math.floor(e / 26);
      return nn(n) + String.fromCharCode("A".charCodeAt(0) + t);
    };
  i.add("lists", function (e) {
    var n, t, r, o, i, a, s, u;
    return !1 === e.hasPlugin("rtc", !0) ? ((a = e).getParam("lists_indent_on_tab", !0) && (s = a).on("keydown", function (e) {
      e.keyCode !== he.TAB || he.metaKeyPressed(e) || s.undoManager.transact(function () {
        (e.shiftKey ? mt : lt)(s) && e.preventDefault();
      });
    }), (u = a).on("keydown", function (e) {
      e.keyCode === he.BACKSPACE ? kt(u, !1) && e.preventDefault() : e.keyCode === he.DELETE && kt(u, !0) && e.preventDefault();
    }), (i = e).on("BeforeExecCommand", function (e) {
      var t = e.command.toLowerCase();
      "indent" === t ? lt(i) : "outdent" === t && mt(i);
    }), i.addCommand("InsertUnorderedList", function (e, t) {
      Tt(i, "UL", t);
    }), i.addCommand("InsertOrderedList", function (e, t) {
      Tt(i, "OL", t);
    }), i.addCommand("InsertDefinitionList", function (e, t) {
      Tt(i, "DL", t);
    }), i.addCommand("RemoveList", function () {
      pt(i);
    }), Pt(i), i.addCommand("mceListUpdate", function (e, t) {
      var n, r, o;
      O(t) && (r = t, o = Qe(n = i), n.undoManager.transact(function () {
        O(r.styles) && n.dom.setStyles(o, r.styles), O(r.attrs) && j(r.attrs, function (e, t) {
          return n.dom.setAttrib(o, t, e);
        });
      }));
    }), i.addQueryStateHandler("InsertUnorderedList", It(i, "UL")), i.addQueryStateHandler("InsertOrderedList", It(i, "OL")), i.addQueryStateHandler("InsertDefinitionList", It(i, "DL"))) : Pt(e), (o = e).hasPlugin("advlist") || (o.ui.registry.addToggleButton("numlist", {
      icon: "ordered-list",
      active: !1,
      tooltip: "Numbered list",
      onAction: c("InsertOrderedList"),
      onSetup: function onSetup(e) {
        return St(o, "OL", e.setActive);
      }
    }), o.ui.registry.addToggleButton("bullist", {
      icon: "unordered-list",
      active: !1,
      tooltip: "Bullet list",
      onAction: c("InsertUnorderedList"),
      onSetup: function onSetup(e) {
        return St(o, "UL", e.setActive);
      }
    })), t = {
      text: "List properties...",
      icon: "ordered-list",
      onAction: function onAction() {
        return n.execCommand("mceListProps");
      },
      onSetup: function onSetup(t) {
        return St(n, "OL", function (e) {
          return t.setDisabled(!e);
        });
      }
    }, (n = e).ui.registry.addMenuItem("listprops", t), n.ui.registry.addContextMenu("lists", {
      update: function update(e) {
        var t = Qe(n, e);
        return $t(t) ? ["listprops"] : [];
      }
    }), r = e, {
      backspaceDelete: function backspaceDelete(e) {
        kt(r, e);
      }
    };
    function c(e) {
      return function () {
        return o.execCommand(e);
      };
    }
  });
}();
/*__ESM_BODY_END__*/