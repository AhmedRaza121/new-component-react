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

  function a(e) {
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
  function e(t) {
    return function (e) {
      return r = _typeof(n = e), (null === n ? "null" : "object" == r && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == r && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : r) === t;
      var n, r;
    };
  }
  function n(n) {
    return function (e) {
      return _typeof(e) === n;
    };
  }
  function c(e) {
    return !(null == e);
  }
  function s() {}
  function y(e) {
    return function () {
      return e;
    };
  }
  function r(e) {
    return e;
  }
  var t = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    l = e("string"),
    d = e("array"),
    o = n("boolean"),
    h = n("function"),
    i = n("number");
  function u() {
    return m;
  }
  var v = y(!1),
    f = y(!0),
    m = {
      fold: function fold(e, n) {
        return e();
      },
      isSome: v,
      isNone: f,
      getOr: r,
      getOrThunk: g,
      getOrDie: function getOrDie(e) {
        throw new Error(e || "error: getOrDie called on none.");
      },
      getOrNull: y(null),
      getOrUndefined: y(void 0),
      or: r,
      orThunk: g,
      map: u,
      each: s,
      bind: u,
      exists: v,
      forall: f,
      filter: function filter() {
        return m;
      },
      toArray: function toArray() {
        return [];
      },
      toString: y("none()")
    };
  function g(e) {
    return e();
  }
  function p(e) {
    function n() {
      return r.get().each(e);
    }
    var r = a(A.none());
    return {
      clear: function clear() {
        n(), r.set(A.none());
      },
      isSet: function isSet() {
        return r.get().isSome();
      },
      get: function get() {
        return r.get();
      },
      set: function set(e) {
        n(), r.set(A.some(e));
      }
    };
  }
  function w() {
    return p(function (e) {
      return e.unbind();
    });
  }
  function C(e, n) {
    for (var r = e.length, t = new Array(r), o = 0; o < r; o++) {
      var i = e[o];
      t[o] = n(i, o);
    }
    return t;
  }
  function D(e, n) {
    for (var r = 0, t = e.length; r < t; r++) n(e[r], r);
  }
  function b(e, n) {
    for (var r = [], t = 0, o = e.length; t < o; t++) {
      var i = e[t];
      n(i, t) && r.push(i);
    }
    return r;
  }
  function S(e, n) {
    return function (e, n, r) {
      for (var t = 0, o = e.length; t < o; t++) {
        var i = e[t];
        if (n(i, t)) return A.some(i);
        if (r(i, t)) break;
      }
      return A.none();
    }(e, n, v);
  }
  function x(e, n) {
    return -1 !== e.indexOf(n);
  }
  function E(e) {
    return void 0 !== e.style && h(e.style.getPropertyValue);
  }
  function O(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  }
  var F = function F(r) {
      function e() {
        return o;
      }
      function n(e) {
        return e(r);
      }
      var t = y(r),
        o = {
          fold: function fold(e, n) {
            return n(r);
          },
          isSome: f,
          isNone: v,
          getOr: t,
          getOrThunk: t,
          getOrDie: t,
          getOrNull: t,
          getOrUndefined: t,
          or: e,
          orThunk: e,
          map: function map(e) {
            return F(e(r));
          },
          each: function each(e) {
            e(r);
          },
          bind: n,
          exists: n,
          forall: n,
          filter: function filter(e) {
            return e(r) ? o : m;
          },
          toArray: function toArray() {
            return [r];
          },
          toString: function toString() {
            return "some(" + r + ")";
          }
        };
      return o;
    },
    A = {
      some: F,
      none: u,
      from: function from(e) {
        return null == e ? m : F(e);
      }
    },
    _T = function T() {
      return (_T = Object.assign || function (e) {
        for (var n, r = 1, t = arguments.length; r < t; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        return e;
      }).apply(this, arguments);
    },
    k = Array.prototype.push,
    R = Object.keys,
    L = {
      fromHtml: function fromHtml(e, n) {
        var r = (n || document).createElement("div");
        if (r.innerHTML = e, !r.hasChildNodes() || 1 < r.childNodes.length) throw console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
        return O(r.childNodes[0]);
      },
      fromTag: function fromTag(e, n) {
        var r = (n || document).createElement(e);
        return O(r);
      },
      fromText: function fromText(e, n) {
        var r = (n || document).createTextNode(e);
        return O(r);
      },
      fromDom: O,
      fromPoint: function fromPoint(e, n, r) {
        return A.from(e.dom.elementFromPoint(n, r)).map(O);
      }
    };
  function P(n) {
    return function (e) {
      return e.dom.nodeType === n;
    };
  }
  function M(t, e) {
    return function (e) {
      for (var n = 0; n < e.length; n++) {
        var r = function (n) {
          var r = n.brand.toLowerCase();
          return S(t, function (e) {
            var n;
            return r === (null === (n = e.brand) || void 0 === n ? void 0 : n.toLowerCase());
          }).map(function (e) {
            return {
              current: e.name,
              version: he.nu(parseInt(n.version, 10), 0)
            };
          });
        }(e[n]);
        if (r.isSome()) return r;
      }
      return A.none();
    }(e.brands);
  }
  function N(e, n) {
    var r = String(n).toLowerCase();
    return S(e, function (e) {
      return e.search(r);
    });
  }
  function H(n) {
    return function (e) {
      return x(e, n);
    };
  }
  function W(e) {
    return window.matchMedia(e).matches;
  }
  function q(e, n) {
    var r = e.dom;
    if (1 !== r.nodeType) return !1;
    var t = r;
    if (void 0 !== t.matches) return t.matches(n);
    if (void 0 !== t.msMatchesSelector) return t.msMatchesSelector(n);
    if (void 0 !== t.webkitMatchesSelector) return t.webkitMatchesSelector(n);
    if (void 0 !== t.mozMatchesSelector) return t.mozMatchesSelector(n);
    throw new Error("Browser lacks native selectors");
  }
  function I(e) {
    return L.fromDom(e.dom.ownerDocument);
  }
  function j(e) {
    var n,
      r = Re(e);
    return me(n = r) && c(n.dom.host) ? A.some(r) : A.none();
  }
  function B(e) {
    return L.fromDom(e.dom.host);
  }
  function V(e, n, r) {
    !function (e, n, r) {
      if (!(l(r) || o(r) || i(r))) throw console.error("Invalid call to Attribute.set. Key ", n, ":: Value ", r, ":: Element ", e), new Error("Attribute value was not simple");
      e.setAttribute(n, r + "");
    }(e.dom, n, r);
  }
  function X(e, n) {
    var r = e.dom.getAttribute(n);
    return null === r ? void 0 : r;
  }
  function _(e, n) {
    e.dom.removeAttribute(n);
  }
  function z(e, n) {
    var u = e.dom;
    !function (e) {
      for (var n, r = R(e), t = 0, o = r.length; t < o; t++) {
        var i = r[t];
        n = e[i], function (e, n, r) {
          if (!l(r)) throw console.error("Invalid call to CSS.set. Property ", n, ":: Value ", r, ":: Element ", e), new Error("CSS value must be a string: " + r);
          E(e) && e.style.setProperty(n, r);
        }(u, i, n);
      }
    }(n);
  }
  function U(e) {
    function n() {
      return e.stopPropagation();
    }
    function r() {
      return e.preventDefault();
    }
    var t,
      o,
      i = L.fromDom(function (e) {
        if (Ae() && c(e.target)) {
          var n = L.fromDom(e.target);
          if (se(n) && Le(n) && e.composed && e.composedPath) {
            var r = e.composedPath();
            if (r) return 0 < (t = r).length ? A.some(t[0]) : A.none();
          }
        }
        var t;
        return A.from(e.target);
      }(e).getOr(e.target)),
      u = (t = r, o = n, function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return t(o.apply(null, e));
      });
    return {
      target: i,
      x: e.clientX,
      y: e.clientY,
      stop: n,
      prevent: r,
      kill: u,
      raw: e
    };
  }
  function $(e, n, r) {
    return o = n, i = !1, u = He, c = r, a = function a(e) {
      u(e) && c(U(e));
    }, (t = e).dom.addEventListener(o, a, i), {
      unbind: function (t) {
        for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
        return function () {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          var r = o.concat(e);
          return t.apply(null, r);
        };
      }(Ne, t, o, a, i)
    };
    var t, o, i, u, c, a;
  }
  function K(e) {
    var n = void 0 === e ? window : e;
    return ke().browser.isFirefox() ? A.none() : A.from(n.visualViewport);
  }
  function Y(e, n, r, t) {
    return {
      x: e,
      y: n,
      width: r,
      height: t,
      right: e + r,
      bottom: n + t
    };
  }
  function G(r, t, e) {
    return K(e).map(function (e) {
      function n(e) {
        return t(U(e));
      }
      return e.addEventListener(r, n), {
        unbind: function unbind() {
          return e.removeEventListener(r, n);
        }
      };
    }).getOrThunk(function () {
      return {
        unbind: s
      };
    });
  }
  function J(e, n) {
    e.fire("FullscreenStateChanged", {
      state: n
    });
  }
  function Q(e) {
    return e.getParam("fullscreen_native", !1, "boolean");
  }
  function Z(e) {
    return e.dom === (void 0 !== (n = I(e).dom).fullscreenElement ? n.fullscreenElement : void 0 !== n.msFullscreenElement ? n.msFullscreenElement : void 0 !== n.webkitFullscreenElement ? n.webkitFullscreenElement : null);
    var n;
  }
  function ee(e, n) {
    return t = function t(e) {
      return q(e, n);
    }, b((r = e, A.from(r.dom.parentNode).map(L.fromDom).map(Ce).map(function (e) {
      return b(e, function (e) {
        return r.dom !== e.dom;
      });
    }).getOr([])), t);
    var r, t;
  }
  function ne(o, e, n) {
    function r(t) {
      return function (e) {
        var n = X(e, "style"),
          r = void 0 === n ? "no-styles" : n.trim();
        r === t || (V(e, Ve, r), z(e, o.parseStyle(t)));
      };
    }
    var t,
      i,
      u,
      c,
      a,
      s,
      l = (s = function s(e) {
        return q(e, "*");
      }, b(function (e, n) {
        for (var r = h(n) ? n : v, t = e.dom, o = []; null !== t.parentNode && void 0 !== t.parentNode;) {
          var i = t.parentNode,
            u = L.fromDom(i);
          if (o.push(u), !0 === r(u)) break;
          t = i;
        }
        return o;
      }(e, void 0), s)),
      f = function (e) {
        for (var n = [], r = 0, t = e.length; r < t; ++r) {
          if (!d(e[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + e);
          k.apply(n, e[r]);
        }
        return n;
      }(C(l, function (e) {
        return ee(e, "*:not(.tox-silver-sink)");
      })),
      m = (i = "background-color", u = (t = n).dom, void 0 !== (a = "" !== (c = window.getComputedStyle(u).getPropertyValue(i)) || Pe(t) ? c : Me(u, i)) && "" !== a ? "background-color:" + a + "!important" : "background-color:rgb(255,255,255)!important;");
    D(f, r("display:none!important;")), D(l, r(Xe + _e + m)), r((!0 === ze ? "" : Xe) + _e + m)(e);
  }
  function re(r, t) {
    return function (n) {
      function e(e) {
        return n.setActive(e.state);
      }
      return n.setActive(null !== t.get()), r.on("FullscreenStateChanged", e), function () {
        return r.off("FullscreenStateChanged", e);
      };
    };
  }
  "undefined" != typeof window || Function("return this;")();
  function te() {
    return de(0, 0);
  }
  function oe(e) {
    function n(e) {
      return function () {
        return r === e;
      };
    }
    var r = e.current,
      t = e.version;
    return {
      current: r,
      version: t,
      isEdge: n("Edge"),
      isChrome: n("Chrome"),
      isIE: n("IE"),
      isOpera: n("Opera"),
      isFirefox: n(pe),
      isSafari: n("Safari")
    };
  }
  function ie(e) {
    function n(e) {
      return function () {
        return r === e;
      };
    }
    var r = e.current,
      t = e.version;
    return {
      current: r,
      version: t,
      isWindows: n(be),
      isiOS: n("iOS"),
      isAndroid: n(Se),
      isOSX: n("OSX"),
      isLinux: n("Linux"),
      isSolaris: n(xe),
      isFreeBSD: n(Ee),
      isChromeOS: n(Oe)
    };
  }
  var ue,
    ce,
    ae,
    se = P(1),
    le = P(3),
    fe = P(9),
    me = P(11),
    de = function de(e, n) {
      return {
        major: e,
        minor: n
      };
    },
    he = {
      nu: de,
      detect: function detect(e, n) {
        var r,
          t,
          o = String(n).toLowerCase();
        return 0 === e.length ? te() : (t = function (e, n) {
          for (var r = 0; r < e.length; r++) {
            var t = e[r];
            if (t.test(n)) return t;
          }
        }(e, r = o)) ? de(i(1), i(2)) : {
          major: 0,
          minor: 0
        };
        function i(e) {
          return Number(r.replace(t, "$" + e));
        }
      },
      unknown: te
    },
    ve = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
    ge = {
      browsers: y([{
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function search(e) {
          return x(e, "edge/") && x(e, "chrome") && x(e, "safari") && x(e, "applewebkit");
        }
      }, {
        name: "Chrome",
        brand: "Chromium",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, ve],
        search: function search(e) {
          return x(e, "chrome") && !x(e, "chromeframe");
        }
      }, {
        name: "IE",
        versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
        search: function search(e) {
          return x(e, "msie") || x(e, "trident");
        }
      }, {
        name: "Opera",
        versionRegexes: [ve, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: H("opera")
      }, {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: H("firefox")
      }, {
        name: "Safari",
        versionRegexes: [ve, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: function search(e) {
          return (x(e, "safari") || x(e, "mobile/")) && x(e, "applewebkit");
        }
      }]),
      oses: y([{
        name: "Windows",
        search: H("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      }, {
        name: "iOS",
        search: function search(e) {
          return x(e, "iphone") || x(e, "ipad");
        },
        versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
      }, {
        name: "Android",
        search: H("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      }, {
        name: "OSX",
        search: H("mac os x"),
        versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
      }, {
        name: "Linux",
        search: H("linux"),
        versionRegexes: []
      }, {
        name: "Solaris",
        search: H("sunos"),
        versionRegexes: []
      }, {
        name: "FreeBSD",
        search: H("freebsd"),
        versionRegexes: []
      }, {
        name: "ChromeOS",
        search: H("cros"),
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
      }])
    },
    pe = "Firefox",
    we = function we() {
      return oe({
        current: void 0,
        version: he.unknown()
      });
    },
    ye = oe,
    be = (y("Edge"), y("Chrome"), y("IE"), y("Opera"), y(pe), y("Safari"), "Windows"),
    Se = "Android",
    xe = "Solaris",
    Ee = "FreeBSD",
    Oe = "ChromeOS",
    Fe = function Fe() {
      return ie({
        current: void 0,
        version: he.unknown()
      });
    },
    Te = ie,
    ke = (y(be), y("iOS"), y(Se), y("Linux"), y("OSX"), y(xe), y(Ee), y(Oe), ae = !(ue = function ue() {
      return e = navigator.userAgent, n = A.from(navigator.userAgentData), r = W, v = ge.browsers(), g = ge.oses(), p = n.bind(function (e) {
        return M(v, e);
      }).orThunk(function () {
        return N(v, r = e).map(function (e) {
          var n = he.detect(e.versionRegexes, r);
          return {
            current: e.name,
            version: n
          };
        });
        var r;
      }).fold(we, ye), w = N(g, t = e).map(function (e) {
        var n = he.detect(e.versionRegexes, t);
        return {
          current: e.name,
          version: n
        };
      }).fold(Fe, Te), {
        browser: p,
        os: w,
        deviceType: (i = p, u = e, c = r, a = (o = w).isiOS() && !0 === /ipad/i.test(u), s = o.isiOS() && !a, f = (l = o.isiOS() || o.isAndroid()) || c("(pointer:coarse)"), m = a || !s && l && c("(min-device-width:768px)"), d = s || l && !m, h = i.isSafari() && o.isiOS() && !1 === /safari/i.test(u), {
          isiPad: y(a),
          isiPhone: y(s),
          isTablet: y(m),
          isPhone: y(d),
          isTouch: y(f),
          isAndroid: o.isAndroid,
          isiOS: o.isiOS,
          isWebView: y(h),
          isDesktop: y(!d && !m && !h)
        })
      };
      var e, n, r, t, o, i, u, c, a, s, l, f, m, d, h, v, g, p, w;
    }), function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      return ae || (ae = !0, ce = ue.apply(null, e)), ce;
    }),
    Ce = function Ce(e) {
      return C(e.dom.childNodes, L.fromDom);
    },
    De = h(Element.prototype.attachShadow) && h(Node.prototype.getRootNode),
    Ae = y(De),
    Re = De ? function (e) {
      return L.fromDom(e.dom.getRootNode());
    } : function (e) {
      return fe(e) ? e : I(e);
    },
    Le = function Le(e) {
      return c(e.dom.shadowRoot);
    },
    Pe = function Pe(e) {
      var n = le(e) ? e.dom.parentNode : e.dom;
      if (null == n || null === n.ownerDocument) return !1;
      var r,
        t,
        o = n.ownerDocument;
      return j(L.fromDom(n)).fold(function () {
        return o.body.contains(n);
      }, (r = Pe, t = B, function (e) {
        return r(t(e));
      }));
    },
    Me = function Me(e, n) {
      return E(e) ? e.style.getPropertyValue(n) : "";
    },
    Ne = function Ne(e, n, r, t) {
      e.dom.removeEventListener(n, r, t);
    },
    He = f,
    We = function We(r, t) {
      return {
        left: r,
        top: t,
        translate: function translate(e, n) {
          return We(r + e, t + n);
        }
      };
    },
    qe = We,
    Ie = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
    je = tinymce.util.Tools.resolve("tinymce.Env"),
    Be = tinymce.util.Tools.resolve("tinymce.util.Delay"),
    Ve = "data-ephox-mobile-fullscreen-style",
    Xe = "position:absolute!important;",
    _e = "top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",
    ze = je.os.isAndroid(),
    Ue = Ie.DOM,
    $e = K().fold(function () {
      return {
        bind: s,
        unbind: s
      };
    }, function (n) {
      var r,
        t = (r = p(s), _T(_T({}, r), {
          on: function on(e) {
            return r.get().each(e);
          }
        })),
        o = w(),
        i = w(),
        u = Be.throttle(function () {
          document.body.scrollTop = 0, document.documentElement.scrollTop = 0, window.requestAnimationFrame(function () {
            t.on(function (e) {
              return z(e, {
                top: n.offsetTop + "px",
                left: n.offsetLeft + "px",
                height: n.height + "px",
                width: n.width + "px"
              });
            });
          });
        }, 50);
      return {
        bind: function bind(e) {
          t.set(e), u(), o.set(G("resize", u)), i.set(G("scroll", u));
        },
        unbind: function unbind() {
          t.on(function () {
            o.clear(), i.clear();
          }), t.clear();
        }
      };
    }),
    Ke = function Ke(o, i) {
      function u(n) {
        n(w, "tox-fullscreen"), n(y, "tox-fullscreen"), n(b, "tox-fullscreen"), j(S).map(function (e) {
          return B(e).dom;
        }).each(function (e) {
          n(e, "tox-fullscreen"), n(e, "tox-shadowhost");
        });
      }
      function e() {
        var r, e, n, t;
        F && (r = o.dom, e = "[" + Ve + "]", D(1 !== (n = t = document).nodeType && 9 !== n.nodeType && 11 !== n.nodeType || 0 === n.childElementCount ? [] : C(t.querySelectorAll(e), L.fromDom), function (e) {
          var n = X(e, Ve);
          "no-styles" !== n ? z(e, r.parseStyle(n)) : _(e, "style"), _(e, Ve);
        })), u(Ue.removeClass), $e.unbind(), A.from(i.get()).each(function (e) {
          return e.fullscreenChangeHandler.unbind();
        });
      }
      var n,
        r,
        t,
        c,
        a,
        s,
        l,
        f,
        m,
        d,
        h,
        v,
        g,
        p,
        w = document.body,
        y = document.documentElement,
        b = o.getContainer(),
        S = L.fromDom(b),
        x = j(s = L.fromDom(o.getElement())).map(B).getOrThunk(function () {
          var e = I(s).dom.body;
          if (null == e) throw new Error("Body is not available yet");
          return L.fromDom(e);
        }),
        E = i.get(),
        O = L.fromDom(o.getBody()),
        F = je.deviceType.isTouch(),
        T = b.style,
        k = o.iframeElement.style;
      E ? (E.fullscreenChangeHandler.unbind(), Q(o) && Z(x) && ((c = I(x).dom).exitFullscreen ? c.exitFullscreen() : c.msExitFullscreen ? c.msExitFullscreen() : c.webkitCancelFullScreen && c.webkitCancelFullScreen()), k.width = E.iframeWidth, k.height = E.iframeHeight, T.width = E.containerWidth, T.height = E.containerHeight, T.top = E.containerTop, T.left = E.containerLeft, t = E.scrollPos, window.scrollTo(t.x, t.y), i.set(null), J(o, !1), e(), o.off("remove", e)) : (n = $(I(x), void 0 !== document.fullscreenElement ? "fullscreenchange" : void 0 !== document.msFullscreenElement ? "MSFullscreenChange" : void 0 !== document.webkitFullscreenElement ? "webkitfullscreenchange" : "fullscreenchange", function (e) {
        Q(o) && (Z(x) || null === i.get() || Ke(o, i));
      }), r = {
        scrollPos: (l = window, v = void 0 === l ? window : l, g = v.document, d = (m = void 0 !== (f = L.fromDom(g)) ? f.dom : document).body.scrollLeft || m.documentElement.scrollLeft, h = m.body.scrollTop || m.documentElement.scrollTop, p = qe(d, h), K(v).fold(function () {
          var e = v.document.documentElement,
            n = e.clientWidth,
            r = e.clientHeight;
          return Y(p.left, p.top, n, r);
        }, function (e) {
          return Y(Math.max(e.pageLeft, p.left), Math.max(e.pageTop, p.top), e.width, e.height);
        })),
        containerWidth: T.width,
        containerHeight: T.height,
        containerTop: T.top,
        containerLeft: T.left,
        iframeWidth: k.width,
        iframeHeight: k.height,
        fullscreenChangeHandler: n
      }, F && ne(o.dom, S, O), k.width = k.height = "100%", T.width = T.height = "", u(Ue.addClass), $e.bind(S), o.on("remove", e), i.set(r), Q(o) && ((a = x.dom).requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.webkitRequestFullScreen && a.webkitRequestFullScreen()), J(o, !0));
    };
  t.add("fullscreen", function (e) {
    var n,
      r,
      t,
      o,
      i,
      u = a(null);
    return e.inline || (r = u, (n = e).addCommand("mceFullScreen", function () {
      Ke(n, r);
    }), (t = e).ui.registry.addToggleMenuItem("fullscreen", {
      text: "Fullscreen",
      icon: "fullscreen",
      shortcut: "Meta+Shift+F",
      onAction: c,
      onSetup: re(t, o = u)
    }), t.ui.registry.addToggleButton("fullscreen", {
      tooltip: "Fullscreen",
      icon: "fullscreen",
      onAction: c,
      onSetup: re(t, o)
    }), e.addShortcut("Meta+Shift+F", "", "mceFullScreen")), i = u, {
      isFullscreen: function isFullscreen() {
        return null !== i.get();
      }
    };
    function c() {
      return t.execCommand("mceFullScreen");
    }
  });
}();
/*__ESM_BODY_END__*/