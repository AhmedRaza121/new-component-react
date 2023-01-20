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

  function l(e, r) {
    var n = e.fire("insertCustomChar", {
      chr: r
    }).chr;
    e.execCommand("mceInsertContent", !1, n);
  }
  function i(e) {
    return function () {
      return e;
    };
  }
  function e(e) {
    return e;
  }
  function r() {
    return c;
  }
  var t,
    g,
    n = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    a = function a(e) {
      return n = _typeof(r = e), (null === r ? "null" : "object" == n && (Array.prototype.isPrototypeOf(r) || r.constructor && "Array" === r.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(r) || r.constructor && "String" === r.constructor.name) ? "string" : n) === t;
      var r, n;
    },
    m = i(!(t = "array")),
    o = i(!(g = null)),
    c = {
      fold: function fold(e, r) {
        return e();
      },
      isSome: m,
      isNone: o,
      getOr: e,
      getOrThunk: u,
      getOrDie: function getOrDie(e) {
        throw new Error(e || "error: getOrDie called on none.");
      },
      getOrNull: i(null),
      getOrUndefined: i(void 0),
      or: e,
      orThunk: u,
      map: r,
      each: function each() {},
      bind: r,
      exists: m,
      forall: o,
      filter: function filter() {
        return c;
      },
      toArray: function toArray() {
        return [];
      },
      toString: i("none()")
    };
  function u(e) {
    return e();
  }
  function f(e, r) {
    for (var n = e.length, t = new Array(n), a = 0; a < n; a++) {
      var i = e[a];
      t[a] = r(i, a);
    }
    return t;
  }
  function s(e) {
    return A(e) ? x.grep(e, function (e) {
      return A(e) && 2 === e.length;
    }) : "function" == typeof e ? e() : [];
  }
  function h(e) {
    var r = function (e, r) {
      var n = e.getParam("charmap");
      n && (r = [{
        name: O,
        characters: s(n)
      }]);
      var t = e.getParam("charmap_append");
      if (t) {
        var a = x.grep(r, function (e) {
          return e.name === O;
        });
        return a.length ? (a[0].characters = [].concat(a[0].characters).concat(s(t)), r) : r.concat({
          name: O,
          characters: s(t)
        });
      }
      return r;
    }(e, [{
      name: "Currency",
      characters: [[36, "dollar sign"], [162, "cent sign"], [8364, "euro sign"], [163, "pound sign"], [165, "yen sign"], [164, "currency sign"], [8352, "euro-currency sign"], [8353, "colon sign"], [8354, "cruzeiro sign"], [8355, "french franc sign"], [8356, "lira sign"], [8357, "mill sign"], [8358, "naira sign"], [8359, "peseta sign"], [8360, "rupee sign"], [8361, "won sign"], [8362, "new sheqel sign"], [8363, "dong sign"], [8365, "kip sign"], [8366, "tugrik sign"], [8367, "drachma sign"], [8368, "german penny symbol"], [8369, "peso sign"], [8370, "guarani sign"], [8371, "austral sign"], [8372, "hryvnia sign"], [8373, "cedi sign"], [8374, "livre tournois sign"], [8375, "spesmilo sign"], [8376, "tenge sign"], [8377, "indian rupee sign"], [8378, "turkish lira sign"], [8379, "nordic mark sign"], [8380, "manat sign"], [8381, "ruble sign"], [20870, "yen character"], [20803, "yuan character"], [22291, "yuan character, in hong kong and taiwan"], [22278, "yen/yuan character variant one"]]
    }, {
      name: "Text",
      characters: [[169, "copyright sign"], [174, "registered sign"], [8482, "trade mark sign"], [8240, "per mille sign"], [181, "micro sign"], [183, "middle dot"], [8226, "bullet"], [8230, "three dot leader"], [8242, "minutes / feet"], [8243, "seconds / inches"], [167, "section sign"], [182, "paragraph sign"], [223, "sharp s / ess-zed"]]
    }, {
      name: "Quotations",
      characters: [[8249, "single left-pointing angle quotation mark"], [8250, "single right-pointing angle quotation mark"], [171, "left pointing guillemet"], [187, "right pointing guillemet"], [8216, "left single quotation mark"], [8217, "right single quotation mark"], [8220, "left double quotation mark"], [8221, "right double quotation mark"], [8218, "single low-9 quotation mark"], [8222, "double low-9 quotation mark"], [60, "less-than sign"], [62, "greater-than sign"], [8804, "less-than or equal to"], [8805, "greater-than or equal to"], [8211, "en dash"], [8212, "em dash"], [175, "macron"], [8254, "overline"], [164, "currency sign"], [166, "broken bar"], [168, "diaeresis"], [161, "inverted exclamation mark"], [191, "turned question mark"], [710, "circumflex accent"], [732, "small tilde"], [176, "degree sign"], [8722, "minus sign"], [177, "plus-minus sign"], [247, "division sign"], [8260, "fraction slash"], [215, "multiplication sign"], [185, "superscript one"], [178, "superscript two"], [179, "superscript three"], [188, "fraction one quarter"], [189, "fraction one half"], [190, "fraction three quarters"]]
    }, {
      name: "Mathematical",
      characters: [[402, "function / florin"], [8747, "integral"], [8721, "n-ary sumation"], [8734, "infinity"], [8730, "square root"], [8764, "similar to"], [8773, "approximately equal to"], [8776, "almost equal to"], [8800, "not equal to"], [8801, "identical to"], [8712, "element of"], [8713, "not an element of"], [8715, "contains as member"], [8719, "n-ary product"], [8743, "logical and"], [8744, "logical or"], [172, "not sign"], [8745, "intersection"], [8746, "union"], [8706, "partial differential"], [8704, "for all"], [8707, "there exists"], [8709, "diameter"], [8711, "backward difference"], [8727, "asterisk operator"], [8733, "proportional to"], [8736, "angle"]]
    }, {
      name: "Extended Latin",
      characters: [[192, "A - grave"], [193, "A - acute"], [194, "A - circumflex"], [195, "A - tilde"], [196, "A - diaeresis"], [197, "A - ring above"], [256, "A - macron"], [198, "ligature AE"], [199, "C - cedilla"], [200, "E - grave"], [201, "E - acute"], [202, "E - circumflex"], [203, "E - diaeresis"], [274, "E - macron"], [204, "I - grave"], [205, "I - acute"], [206, "I - circumflex"], [207, "I - diaeresis"], [298, "I - macron"], [208, "ETH"], [209, "N - tilde"], [210, "O - grave"], [211, "O - acute"], [212, "O - circumflex"], [213, "O - tilde"], [214, "O - diaeresis"], [216, "O - slash"], [332, "O - macron"], [338, "ligature OE"], [352, "S - caron"], [217, "U - grave"], [218, "U - acute"], [219, "U - circumflex"], [220, "U - diaeresis"], [362, "U - macron"], [221, "Y - acute"], [376, "Y - diaeresis"], [562, "Y - macron"], [222, "THORN"], [224, "a - grave"], [225, "a - acute"], [226, "a - circumflex"], [227, "a - tilde"], [228, "a - diaeresis"], [229, "a - ring above"], [257, "a - macron"], [230, "ligature ae"], [231, "c - cedilla"], [232, "e - grave"], [233, "e - acute"], [234, "e - circumflex"], [235, "e - diaeresis"], [275, "e - macron"], [236, "i - grave"], [237, "i - acute"], [238, "i - circumflex"], [239, "i - diaeresis"], [299, "i - macron"], [240, "eth"], [241, "n - tilde"], [242, "o - grave"], [243, "o - acute"], [244, "o - circumflex"], [245, "o - tilde"], [246, "o - diaeresis"], [248, "o slash"], [333, "o macron"], [339, "ligature oe"], [353, "s - caron"], [249, "u - grave"], [250, "u - acute"], [251, "u - circumflex"], [252, "u - diaeresis"], [363, "u - macron"], [253, "y - acute"], [254, "thorn"], [255, "y - diaeresis"], [563, "y - macron"], [913, "Alpha"], [914, "Beta"], [915, "Gamma"], [916, "Delta"], [917, "Epsilon"], [918, "Zeta"], [919, "Eta"], [920, "Theta"], [921, "Iota"], [922, "Kappa"], [923, "Lambda"], [924, "Mu"], [925, "Nu"], [926, "Xi"], [927, "Omicron"], [928, "Pi"], [929, "Rho"], [931, "Sigma"], [932, "Tau"], [933, "Upsilon"], [934, "Phi"], [935, "Chi"], [936, "Psi"], [937, "Omega"], [945, "alpha"], [946, "beta"], [947, "gamma"], [948, "delta"], [949, "epsilon"], [950, "zeta"], [951, "eta"], [952, "theta"], [953, "iota"], [954, "kappa"], [955, "lambda"], [956, "mu"], [957, "nu"], [958, "xi"], [959, "omicron"], [960, "pi"], [961, "rho"], [962, "final sigma"], [963, "sigma"], [964, "tau"], [965, "upsilon"], [966, "phi"], [967, "chi"], [968, "psi"], [969, "omega"]]
    }, {
      name: "Symbols",
      characters: [[8501, "alef symbol"], [982, "pi symbol"], [8476, "real part symbol"], [978, "upsilon - hook symbol"], [8472, "Weierstrass p"], [8465, "imaginary part"]]
    }, {
      name: "Arrows",
      characters: [[8592, "leftwards arrow"], [8593, "upwards arrow"], [8594, "rightwards arrow"], [8595, "downwards arrow"], [8596, "left right arrow"], [8629, "carriage return"], [8656, "leftwards double arrow"], [8657, "upwards double arrow"], [8658, "rightwards double arrow"], [8659, "downwards double arrow"], [8660, "left right double arrow"], [8756, "therefore"], [8834, "subset of"], [8835, "superset of"], [8836, "not a subset of"], [8838, "subset of or equal to"], [8839, "superset of or equal to"], [8853, "circled plus"], [8855, "circled times"], [8869, "perpendicular"], [8901, "dot operator"], [8968, "left ceiling"], [8969, "right ceiling"], [8970, "left floor"], [8971, "right floor"], [9001, "left-pointing angle bracket"], [9002, "right-pointing angle bracket"], [9674, "lozenge"], [9824, "black spade suit"], [9827, "black club suit"], [9829, "black heart suit"], [9830, "black diamond suit"], [8194, "en space"], [8195, "em space"], [8201, "thin space"], [8204, "zero width non-joiner"], [8205, "zero width joiner"], [8206, "left-to-right mark"], [8207, "right-to-left mark"]]
    }]);
    return 1 < r.length ? [{
      name: "All",
      characters: function (e) {
        for (var r = [], n = 0, t = e.length; n < t; ++n) {
          if (!a(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
          C.apply(r, e[n]);
        }
        return r;
      }(f(r, function (e) {
        return e.characters;
      }))
    }].concat(r) : r;
  }
  function p(e) {
    var r = e;
    return {
      get: function get() {
        return r;
      },
      set: function set(e) {
        r = e;
      }
    };
  }
  function d(e, r) {
    return -1 !== e.indexOf(r);
  }
  function y() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    if (q) return q.apply(void 0, e);
    for (var n = [], t = "", a = 0, i = e.length; a !== i; ++a) {
      var o = +e[a];
      if (!(o < 1114111 && o >>> 0 === o)) throw RangeError("Invalid code point: " + o);
      16383 <= (o <= 65535 ? n.push(o) : (o -= 65536, n.push(55296 + (o >> 10), o % 1024 + 56320))) && (t += String.fromCharCode.apply(null, n), n.length = 0);
    }
    return t + String.fromCharCode.apply(null, n);
  }
  function v(e, r) {
    var c = [],
      u = r.toLowerCase();
    return function (e) {
      for (var r, n, t, a, i = 0, o = e.length; i < o; i++) r = e[i], a = t = n = a = t = n = void 0, n = r[0], t = r[1], a = u, (d(y(n).toLowerCase(), a) || d(t.toLowerCase(), a) || d(t.toLowerCase().replace(/\s+/g, ""), a)) && c.push(r);
    }(e.characters), f(c, function (e) {
      return {
        text: e[1],
        value: y(e[0]),
        icon: y(e[0])
      };
    });
  }
  function w(n, a) {
    function r() {
      return [{
        label: "Search",
        type: "input",
        name: S
      }, {
        type: "collection",
        name: "results"
      }];
    }
    var t,
      i,
      o = 1 === a.length ? p(O) : p("All"),
      c = (t = function t(e) {
        var r = e.getData().pattern,
          n = e,
          t = r;
        (function (e, r, n) {
          for (var t = 0, a = e.length; t < a; t++) {
            var i = e[t];
            if (r(i, t)) return k.some(i);
            if (n(i, t)) break;
          }
          return k.none();
        })(a, function (e) {
          return e.name === o.get();
        }, m).each(function (e) {
          var r = v(e, t);
          n.setData({
            results: r
          });
        });
      }, i = null, {
        cancel: u,
        throttle: function throttle() {
          for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
          u(), i = setTimeout(function () {
            i = null, t.apply(null, e);
          }, 40);
        }
      });
    function u() {
      g === i || (clearTimeout(i), i = null);
    }
    var e = 1 === a.length ? {
        type: "panel",
        items: r()
      } : {
        type: "tabpanel",
        tabs: f(a, function (e) {
          return {
            title: e.name,
            name: e.name,
            items: r()
          };
        })
      },
      s = {
        pattern: "",
        results: v(a[0], "")
      };
    n.windowManager.open({
      title: "Special Character",
      size: "normal",
      body: e,
      buttons: [{
        type: "cancel",
        name: "close",
        text: "Close",
        primary: !0
      }],
      initialData: s,
      onAction: function onAction(e, r) {
        "results" === r.name && (l(n, r.value), e.close());
      },
      onTabChange: function onTabChange(e, r) {
        o.set(r.newTabName), c.throttle(e);
      },
      onChange: function onChange(e, r) {
        r.name === S && c.throttle(e);
      }
    }).focus(S);
  }
  var b = function b(n) {
      function e() {
        return a;
      }
      function r(e) {
        return e(n);
      }
      var t = i(n),
        a = {
          fold: function fold(e, r) {
            return r(n);
          },
          isSome: o,
          isNone: m,
          getOr: t,
          getOrThunk: t,
          getOrDie: t,
          getOrNull: t,
          getOrUndefined: t,
          or: e,
          orThunk: e,
          map: function map(e) {
            return b(e(n));
          },
          each: function each(e) {
            e(n);
          },
          bind: r,
          exists: r,
          forall: r,
          filter: function filter(e) {
            return e(n) ? a : c;
          },
          toArray: function toArray() {
            return [n];
          },
          toString: function toString() {
            return "some(" + n + ")";
          }
        };
      return a;
    },
    k = {
      some: b,
      none: r,
      from: function from(e) {
        return null == e ? c : b(e);
      }
    },
    C = Array.prototype.push,
    x = tinymce.util.Tools.resolve("tinymce.util.Tools"),
    A = x.isArray,
    O = "User Defined",
    q = String.fromCodePoint,
    S = "pattern",
    T = tinymce.util.Tools.resolve("tinymce.util.Promise");
  n.add("charmap", function (e) {
    var r,
      n,
      t,
      a,
      i,
      o = h(e),
      c = o;
    return (r = e).addCommand("mceShowCharmap", function () {
      w(r, c);
    }), (n = e).ui.registry.addButton("charmap", {
      icon: "insert-character",
      tooltip: "Special character",
      onAction: function onAction() {
        return n.execCommand("mceShowCharmap");
      }
    }), n.ui.registry.addMenuItem("charmap", {
      icon: "insert-character",
      text: "Special character...",
      onAction: function onAction() {
        return n.execCommand("mceShowCharmap");
      }
    }), t = e, a = o[0], t.ui.registry.addAutocompleter("charmap", {
      ch: ":",
      columns: "auto",
      minChars: 2,
      fetch: function fetch(n, e) {
        return new T(function (e, r) {
          e(v(a, n));
        });
      },
      onAction: function onAction(e, r, n) {
        t.selection.setRng(r), t.insertContent(n), e.hide();
      }
    }), i = e, {
      getCharMap: function getCharMap() {
        return h(i);
      },
      insertChar: function insertChar(e) {
        l(i, e);
      }
    };
  });
}();
/*__ESM_BODY_END__*/