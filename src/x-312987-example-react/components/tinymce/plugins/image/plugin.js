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
  function I(e) {
    return !(null == e);
  }
  function l() {}
  function i(e) {
    return function () {
      return e;
    };
  }
  function n(e) {
    return e;
  }
  function r() {
    return g;
  }
  var a,
    o = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    _x = function x() {
      return (_x = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }).apply(this, arguments);
    },
    L = e("string"),
    s = e("object"),
    c = e("array"),
    O = t("boolean"),
    N = t("function"),
    u = t("number"),
    m = i(!1),
    d = i(!(a = null)),
    g = {
      fold: function fold(e, t) {
        return e();
      },
      isSome: m,
      isNone: d,
      getOr: n,
      getOrThunk: p,
      getOrDie: function getOrDie(e) {
        throw new Error(e || "error: getOrDie called on none.");
      },
      getOrNull: i(null),
      getOrUndefined: i(void 0),
      or: n,
      orThunk: p,
      map: r,
      each: l,
      bind: r,
      exists: m,
      forall: d,
      filter: function filter() {
        return g;
      },
      toArray: function toArray() {
        return [];
      },
      toString: i("none()")
    };
  function p(e) {
    return e();
  }
  function f(e, i, o, l) {
    return function (e) {
      for (var t = y(e), n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        !function (e, t) {
          (i(e, t) ? o : l)(e, t);
        }(e[a], a);
      }
    }(e), 1;
  }
  function b(e, t) {
    return v.call(e, t);
  }
  function P(e) {
    for (var t = [], n = 0, r = e.length; n < r; ++n) {
      if (!c(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
      w.apply(t, e[n]);
    }
    return t;
  }
  function R(e) {
    return 0 < e.length ? _.some(e[0]) : _.none();
  }
  var h = function h(n) {
      function e() {
        return a;
      }
      function t(e) {
        return e(n);
      }
      var r = i(n),
        a = {
          fold: function fold(e, t) {
            return t(n);
          },
          isSome: d,
          isNone: m,
          getOr: r,
          getOrThunk: r,
          getOrDie: r,
          getOrNull: r,
          getOrUndefined: r,
          or: e,
          orThunk: e,
          map: function map(e) {
            return h(e(n));
          },
          each: function each(e) {
            e(n);
          },
          bind: t,
          exists: t,
          forall: t,
          filter: function filter(e) {
            return e(n) ? a : g;
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
    _ = {
      some: h,
      none: r,
      from: function from(e) {
        return null == e ? g : h(e);
      }
    },
    y = Object.keys,
    v = Object.hasOwnProperty,
    w = Array.prototype.push;
  function D(e, t, n) {
    !function (e, t, n) {
      if (!(L(n) || O(n) || u(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
      e.setAttribute(t, n + "");
    }(e.dom, t, n);
  }
  function k(e) {
    return e.getParam("image_dimensions", !0, "boolean");
  }
  function A(e, t) {
    return Math.max(parseInt(e, 10), parseInt(t, 10));
  }
  function z(e) {
    return e && e.replace(/px$/, "");
  }
  function S(e) {
    return 0 < e.length && /^[0-9]+$/.test(e) && (e += "px"), e;
  }
  function j(e) {
    if (e.margin) {
      var t = String(e.margin).split(" ");
      switch (t.length) {
        case 1:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[0], e["margin-bottom"] = e["margin-bottom"] || t[0], e["margin-left"] = e["margin-left"] || t[0];
          break;
        case 2:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[0], e["margin-left"] = e["margin-left"] || t[1];
          break;
        case 3:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[2], e["margin-left"] = e["margin-left"] || t[1];
          break;
        case 4:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[2], e["margin-left"] = e["margin-left"] || t[3];
      }
      delete e.margin;
    }
    return e;
  }
  function B(r) {
    return new Ae(function (e, t) {
      var n = new FileReader();
      n.onload = function () {
        e(n.result);
      }, n.onerror = function () {
        t(n.error.message);
      }, n.readAsDataURL(r);
    });
  }
  function U(e) {
    return "IMG" === e.nodeName && (e.hasAttribute("data-mce-object") || e.hasAttribute("data-mce-placeholder"));
  }
  function E(e, t) {
    return Se.isDomSafe(t, "img", e.settings);
  }
  function M(e) {
    return e.style.marginLeft && e.style.marginRight && e.style.marginLeft === e.style.marginRight ? z(e.style.marginLeft) : "";
  }
  function F(e) {
    return e.style.marginTop && e.style.marginBottom && e.style.marginTop === e.style.marginBottom ? z(e.style.marginTop) : "";
  }
  function H(e) {
    return e.style.borderWidth ? z(e.style.borderWidth) : "";
  }
  function T(e, t) {
    return e.hasAttribute(t) ? e.getAttribute(t) : "";
  }
  function G(e, t) {
    return e.style[t] || "";
  }
  function C(e) {
    return null !== e.parentNode && "FIGURE" === e.parentNode.nodeName;
  }
  function W(e, t, n) {
    "" === n ? e.removeAttribute(t) : e.setAttribute(t, n);
  }
  function V(e, t) {
    var n = e.getAttribute("style"),
      r = t(null !== n ? n : "");
    0 < r.length ? (e.setAttribute("style", r), e.setAttribute("data-mce-style", r)) : e.removeAttribute("style");
  }
  function $(e, r) {
    return function (e, t, n) {
      e.style[t] ? (e.style[t] = S(n), V(e, r)) : W(e, t, n);
    };
  }
  function Z(e, t) {
    return e.style[t] ? z(e.style[t]) : T(e, t);
  }
  function J(e, t) {
    var n = S(t);
    e.style.marginLeft = n, e.style.marginRight = n;
  }
  function K(e, t) {
    var n = S(t);
    e.style.marginTop = n, e.style.marginBottom = n;
  }
  function X(e, t) {
    var n = S(t);
    e.style.borderWidth = n;
  }
  function q(e, t) {
    e.style.borderStyle = t;
  }
  function Q(e) {
    return "FIGURE" === e.nodeName;
  }
  function Y(e) {
    return 0 === Te.getAttrib(e, "alt").length && "presentation" === Te.getAttrib(e, "role");
  }
  function ee() {
    return {
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      "class": "",
      style: "",
      caption: !1,
      hspace: "",
      vspace: "",
      border: "",
      borderStyle: "",
      isDecorative: !1
    };
  }
  function te(e, t) {
    return {
      src: T(t, "src"),
      alt: Y(n = t) ? "" : T(n, "alt"),
      title: T(t, "title"),
      width: Z(t, "width"),
      height: Z(t, "height"),
      "class": T(t, "class"),
      style: e(T(t, "style")),
      caption: C(t),
      hspace: M(t),
      vspace: F(t),
      border: H(t),
      borderStyle: G(t, "borderStyle"),
      isDecorative: Y(t)
    };
    var n;
  }
  function ne(e, t, n, r, a) {
    n[r] !== t[r] && a(e, r, n[r]);
  }
  function re(r, a) {
    return function (e, t, n) {
      r(e, n), V(e, a);
    };
  }
  function ae(e, t) {
    var n = j(e.dom.styles.parse(t)),
      r = e.dom.styles.parse(e.dom.styles.serialize(n));
    return e.dom.styles.serialize(r);
  }
  function ie(e) {
    var t = e.selection.getNode(),
      n = e.dom.getParent(t, "figure.image");
    return n ? e.dom.select("img", n)[0] : t && ("IMG" !== t.nodeName || U(t)) ? null : t;
  }
  function oe(n, e) {
    var r,
      t,
      a = n.dom,
      i = (f(n.schema.getTextBlockElements(), function (e, t) {
        return !n.schema.isValidChild(t, "figure");
      }, (r = t = {}, function (e, t) {
        r[t] = e;
      }), l), t),
      o = a.getParent(e.parentNode, function (e) {
        return b(t = i, n = e.nodeName) && null != t[n];
        var t, n;
      }, n.getBody());
    return o ? a.split(o, e) : e;
  }
  function le(r, e) {
    var t = function (e) {
      var t = document.createElement("img");
      if (Ie(function (e) {
        return ae(r, e);
      }, _x(_x({}, e), {
        caption: !1
      }), t), Ce(t, e.alt, e.isDecorative), e.caption) {
        var n = Te.create("figure", {
          "class": "image"
        });
        return n.appendChild(t), n.appendChild(Te.create("figcaption", {
          contentEditable: "true"
        }, "Caption")), n.contentEditable = "false", n;
      }
      return t;
    }(e);
    r.dom.setAttrib(t, "data-mce-id", "__mcenew"), r.focus(), r.selection.setContent(t.outerHTML);
    var n,
      a = r.dom.select('*[data-mce-id="__mcenew"]')[0];
    r.dom.setAttrib(a, "data-mce-id", null), Q(a) ? (n = oe(r, a), r.selection.select(n)) : r.selection.select(a);
  }
  function se(t, e) {
    var n,
      r,
      a,
      i,
      o,
      l,
      s,
      c,
      u,
      m,
      d,
      g,
      p,
      f,
      b,
      h = ie(t);
    function y() {
      f.onload = f.onerror = null, g.selection && (g.selection.select(f), g.nodeChanged());
    }
    h ? (n = te(function (e) {
      return ae(t, e);
    }, h), r = _x(_x({}, n), e), s = t, c = r.src, a = _x(_x({}, r), {
      src: E(s, c) ? c : ""
    }), r.src ? (m = a, b = ie(u = t), Ie(function (e) {
      return ae(u, e);
    }, m, b), u.dom.setAttrib(b, "src", b.getAttribute("src")), Q(b.parentNode) ? (d = b.parentNode, oe(u, d), u.selection.select(b.parentNode)) : (u.selection.select(b), g = u, p = m, (f = b).onload = function () {
      p.width || p.height || !k(g) || g.dom.setAttribs(f, {
        width: String(f.clientWidth),
        height: String(f.clientHeight)
      }), y();
    }, f.onerror = y)) : (i = t, (o = h) && (l = i.dom.is(o.parentNode, "figure.image") ? o.parentNode : o, i.dom.remove(l), i.focus(), i.nodeChanged(), i.dom.isEmpty(i.getBody()) && (i.setContent(""), i.selection.setCursorLocation())))) : e.src && le(t, _x(_x({}, ee()), e));
  }
  function ce(e) {
    return L(e.value) ? e.value : "";
  }
  function ue(t) {
    return void 0 === t && (t = ce), function (e) {
      return e ? _.from(e).map(function (e) {
        return Ne(e, t);
      }) : _.none();
    };
  }
  function me(e) {
    var t = e.imageList.map(function (e) {
        return {
          name: "images",
          type: "listbox",
          label: "Image list",
          items: e
        };
      }),
      n = {
        name: "alt",
        type: "input",
        label: "Alternative description",
        disabled: e.hasAccessibilityOptions && e.image.isDecorative
      },
      r = e.classList.map(function (e) {
        return {
          name: "classes",
          type: "listbox",
          label: "Class",
          items: e
        };
      });
    return P([[{
      name: "src",
      type: "urlinput",
      filetype: "image",
      label: "Source"
    }], t.toArray(), e.hasAccessibilityOptions && e.hasDescription ? [{
      type: "label",
      label: "Accessibility",
      items: [{
        name: "isDecorative",
        type: "checkbox",
        label: "Image is decorative"
      }]
    }] : [], e.hasDescription ? [n] : [], e.hasImageTitle ? [{
      name: "title",
      type: "input",
      label: "Image title"
    }] : [], e.hasDimensions ? [{
      name: "dimensions",
      type: "sizeinput"
    }] : [], [_x(_x({}, e.classList.isSome() && e.hasImageCaption ? {
      type: "grid",
      columns: 2
    } : {
      type: "panel"
    }), {
      items: P([r.toArray(), e.hasImageCaption ? [{
        type: "label",
        label: "Caption",
        items: [{
          type: "checkbox",
          name: "caption",
          label: "Show caption"
        }]
      }] : []])
    })]]);
  }
  function de(e) {
    return {
      src: {
        value: e.src,
        meta: {}
      },
      images: e.src,
      alt: e.alt,
      title: e.title,
      dimensions: {
        width: e.width,
        height: e.height
      },
      classes: e["class"],
      caption: e.caption,
      style: e.style,
      vspace: e.vspace,
      border: e.border,
      hspace: e.hspace,
      borderstyle: e.borderStyle,
      fileinput: [],
      libraryfile: [],
      isDecorative: e.isDecorative
    };
  }
  function ge(e, t) {
    return {
      src: e.src.value,
      alt: 0 === e.alt.length && t ? null : e.alt,
      title: e.title,
      width: e.dimensions.width,
      height: e.dimensions.height,
      "class": e.classes,
      style: e.style,
      caption: e.caption,
      hspace: e.hspace,
      vspace: e.vspace,
      border: e.border,
      borderStyle: e.borderstyle,
      isDecorative: e.isDecorative
    };
  }
  function pe(e, t, n, r) {
    var a, i, o, l, s, c, u, m, d, g, p, f, b, h, y, v, w, D, A, S, U, T, C, I, x;
    U = t, C = (T = r).getData(), I = U, x = C.src.value, (/^(?:[a-zA-Z]+:)?\/\//.test(x) ? _.none() : I.prependURL.bind(function (e) {
      return x.substring(0, e.length) !== e ? _.some(e + x) : _.none();
    })).each(function (e) {
      T.setData({
        src: {
          value: e,
          meta: C.src.meta
        }
      });
    }), b = t, A = (h = r).getData(), void 0 !== (S = A.src.meta) && (y = xe({}, A), w = y, D = S, (v = b).hasDescription && L(D.alt) && (w.alt = D.alt), v.hasAccessibilityOptions && (w.isDecorative = D.isDecorative || w.isDecorative || !1), v.hasImageTitle && L(D.title) && (w.title = D.title), v.hasDimensions && (L(D.width) && (w.dimensions.width = D.width), L(D.height) && (w.dimensions.height = D.height)), L(D["class"]) && Ee(v.classList, D["class"]).each(function (e) {
      w.classes = e.value;
    }), v.hasImageCaption && O(D.caption) && (w.caption = D.caption), v.hasAdvTab && (L(D.style) && (w.style = D.style), L(D.vspace) && (w.vspace = D.vspace), L(D.border) && (w.border = D.border), L(D.hspace) && (w.hspace = D.hspace), L(D.borderstyle) && (w.borderstyle = D.borderstyle)), h.setData(y)), a = e, i = t, o = n, c = (s = (l = r).getData()).src.value, (u = s.src.meta || {}).width || u.height || !i.hasDimensions || (0 < c.length ? a.imageSize(c).then(function (e) {
      o.open && l.setData({
        dimensions: e
      });
    })["catch"](function (e) {
      return console.error(e);
    }) : l.setData({
      dimensions: {
        width: "",
        height: ""
      }
    })), m = t, d = n, p = (g = r).getData(), f = Ee(m.imageList, p.src.value), d.prevImage = f, g.setData({
      images: f.map(function (e) {
        return e.value;
      }).getOr("")
    });
  }
  function fe(_, k, E) {
    return function (e, t) {
      var n, r, a, i, o, l, s, c, u, m, d, g, p, f, b, h, y, v, w, D, A, S, U, T, C, I, x, L, O, N, P;
      "src" === t.name ? pe(_, k, E, e) : "images" === t.name ? (c = _, u = k, m = E, g = (d = e).getData(), (p = Ee(u.imageList, g.images)).each(function (e) {
        "" === g.alt || m.prevImage.map(function (e) {
          return e.text === g.alt;
        }).getOr(!1) ? "" === e.value ? d.setData({
          src: e,
          alt: m.prevAlt
        }) : d.setData({
          src: e,
          alt: e.text
        }) : d.setData({
          src: e
        });
      }), m.prevImage = p, pe(c, u, m, d)) : "alt" === t.name ? E.prevAlt = e.getData().alt : "style" === t.name ? (o = _, s = (l = e).getData(), x = o.parseStyle, L = o.serializeStyle, N = j(x((O = s).style)), (P = xe({}, O)).vspace = N["margin-top"] && N["margin-bottom"] && N["margin-top"] === N["margin-bottom"] ? z(String(N["margin-top"])) : "", P.hspace = N["margin-right"] && N["margin-left"] && N["margin-right"] === N["margin-left"] ? z(String(N["margin-right"])) : "", P.border = N["border-width"] ? z(String(N["border-width"])) : "", P.borderstyle = N["border-style"] ? String(N["border-style"]) : "", P.style = L(x(L(N))), l.setData(P)) : "vspace" === t.name || "hspace" === t.name || "border" === t.name || "borderstyle" === t.name ? (n = _, a = xe(de(k.image), (r = e).getData()), T = n.normalizeCss, C = ge(a, !1), W(I = document.createElement("img"), "style", C.style), !M(I) && "" === C.hspace || J(I, C.hspace), !F(I) && "" === C.vspace || K(I, C.vspace), !H(I) && "" === C.border || X(I, C.border), !G(I, "borderStyle") && "" === C.borderStyle || q(I, C.borderStyle), i = T(I.getAttribute("style")), r.setData({
        style: i
      })) : "fileinput" === t.name ? (w = _, D = k, A = E, U = (S = e).getData(), S.block("Uploading image"), R(U.fileinput).fold(function () {
        S.unblock();
      }, function (n) {
        function r() {
          S.unblock(), URL.revokeObjectURL(i);
        }
        function a(e) {
          S.setData({
            src: {
              value: e,
              meta: {}
            }
          }), S.showTab("general"), pe(w, D, A, S);
        }
        var i = URL.createObjectURL(n);
        B(n).then(function (e) {
          var t = w.createBlobCache(n, i, e);
          D.automaticUploads ? w.uploadImage(t).then(function (e) {
            a(e.url), r();
          })["catch"](function (e) {
            r(), w.alertErr(e);
          }) : (w.addToBlobCache(t), a(t.blobUri()), S.unblock());
        });
      })) : "isDecorative" === t.name ? e.getData().isDecorative ? e.disable("alt") : e.enable("alt") : "libraryfile" === t.name && (f = _, b = k, h = E, v = (y = e).getData(), y.block("Uploading image"), R(v.libraryfile).fold(function () {
        y.unblock();
      }, function (r) {
        var a = URL.createObjectURL(r);
        B(r).then(function (e) {
          var t,
            n = f.createBlobCache(r, a, e);
          f.addToBlobCache(n), t = n.blobUri(), y.setData({
            src: {
              value: t,
              meta: {}
            }
          }), y.showTab("general"), pe(f, b, h, y), y.unblock();
        });
      }));
    };
  }
  function be(T) {
    var t,
      n,
      r,
      a,
      i,
      o,
      l,
      s,
      c,
      C = {
        onSubmit: function onSubmit(n) {
          return function (e) {
            var t = xe(de(n.image), e.getData());
            c.execCommand("mceUpdateImage", !1, ge(t, n.hasAccessibilityOptions)), c.editorUpload.uploadImagesAuto(), e.close();
          };
        },
        imageSize: function imageSize(e) {
          return E(s, e) ? (a = s.documentBaseURI.toAbsolute(e), new Ae(function (t) {
            function n(e) {
              r.onload = r.onerror = null, r.parentNode && r.parentNode.removeChild(r), t(e);
            }
            var r = document.createElement("img");
            r.onload = function () {
              var e = A(r.width, r.clientWidth),
                t = A(r.height, r.clientHeight);
              n(Ae.resolve({
                width: e,
                height: t
              }));
            }, r.onerror = function () {
              n(Ae.reject("Failed to get image dimensions for: " + a));
            };
            var e = r.style;
            e.visibility = "hidden", e.position = "fixed", e.bottom = e.left = "0px", e.width = e.height = "auto", document.body.appendChild(r), r.src = a;
          }).then(function (e) {
            return {
              width: String(e.width),
              height: String(e.height)
            };
          })) : Ae.resolve({
            width: "",
            height: ""
          });
          var a;
        },
        addToBlobCache: function addToBlobCache(e) {
          l.editorUpload.blobCache.add(e);
        },
        createBlobCache: function createBlobCache(e, t, n) {
          return o.editorUpload.blobCache.create({
            blob: e,
            blobUri: t,
            name: e.name ? e.name.replace(/\.[^\.]+$/, "") : null,
            filename: e.name,
            base64: n.split(",")[1]
          });
        },
        alertErr: function alertErr(e) {
          i.windowManager.alert(e);
        },
        normalizeCss: function normalizeCss(e) {
          return ae(a, e);
        },
        parseStyle: function parseStyle(e) {
          return r.dom.parseStyle(e);
        },
        serializeStyle: function serializeStyle(e, t) {
          return n.dom.serializeStyle(e, t);
        },
        uploadImage: (t = n = r = a = i = o = l = s = c = T, function (e) {
          return Le(t).upload([e], !1).then(function (e) {
            return 0 === e.length ? Ae.reject("Failed to upload image") : !1 === e[0].status ? Ae.reject(e[0].error.message) : e[0];
          });
        }),
        getEditor: function getEditor() {
          return T;
        }
      };
    return {
      open: function open() {
        var s, r, t, e, n, a, i, o, l, c, u, m, d, g, p, f, b, h, y, v, w, D, A, S, U;
        r = T, c = _e(function (e) {
          return r.convertURL(e.value || e.url, "src");
        }), u = new Ae(function (t) {
          var n = function n(e) {
              t(c(e).map(function (e) {
                return P([[{
                  text: "None",
                  value: ""
                }], e]);
              }));
            },
            e = r.getParam("image_list", !1);
          L(e) ? Ue.send({
            url: e,
            success: function success(e) {
              n(JSON.parse(e));
            }
          }) : N(e) ? e(n) : n(e);
        }), m = ke(r.getParam("image_class_list")), d = r.getParam("image_advtab", !1, "boolean"), g = r.getParam("image_uploadtab", !0, "boolean"), p = I(r.getParam("images_upload_url")), f = I(r.getParam("images_upload_handler")), b = (e = ie(t = r)) ? te(function (e) {
          return ae(t, e);
        }, e) : ee(), h = r.getParam("image_description", !0, "boolean"), y = r.getParam("image_title", !1, "boolean"), v = k(r), w = r.getParam("image_caption", !1, "boolean"), D = r.getParam("a11y_advanced_options", !1, "boolean"), A = r.getParam("automatic_uploads", !0, "boolean"), S = _.some(r.getParam("image_prepend_url", "", "string")).filter(function (e) {
          return L(e) && 0 < e.length;
        }), a = (n = r.getParam("sn_settings", {}, "object").image || {}).allowLibraryUploads, i = n.showLibraryTab, o = n.libraryFilePicker, l = n.labels, U = {
          allowLibraryUploads: void 0 === a || a,
          showLibraryTab: void 0 !== i && i,
          libraryFilePicker: void 0 === o ? function (e) {
            return e(null);
          } : o,
          labels: _x({
            tabName: "Image Library",
            dropzone: "Upload to Public Library",
            search: "Search Library"
          }, void 0 === l ? {} : l)
        }, u.then(function (e) {
          return {
            image: b,
            imageList: e,
            classList: m,
            hasAdvTab: d,
            hasUploadTab: g,
            hasUploadUrl: p,
            hasUploadHandler: f,
            hasDescription: h,
            hasImageTitle: y,
            hasDimensions: v,
            hasImageCaption: w,
            prependURL: S,
            hasAccessibilityOptions: D,
            automaticUploads: A,
            libraryTab: U
          };
        }).then((s = C, function (e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            l = {
              prevImage: Ee((t = e).imageList, t.image.src),
              prevAlt: t.image.alt,
              open: !0
            };
          return {
            title: "Insert/Edit Image",
            size: "normal",
            body: (o = e).hasAdvTab || o.hasUploadUrl || o.hasUploadHandler ? {
              type: "tabpanel",
              tabs: P([[je(o)], o.hasAdvTab ? [Re(o)] : [], o.hasUploadTab && (o.hasUploadUrl || o.hasUploadHandler) ? [Me(o)] : [], o.libraryTab.showLibraryTab ? [ze(o)] : []])
            } : {
              type: "panel",
              items: Be(o)
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
            initialData: de(e.image),
            onSubmit: s.onSubmit(e),
            onChange: fe(s, e, l),
            onAction: (r = s, a = e, function (t, e) {
              "librarysearch" === e.name && a.libraryTab.libraryFilePicker(r.getEditor(), function (e) {
                t.setData({
                  src: {
                    value: e,
                    meta: {}
                  }
                }), t.showTab("general"), pe(r, a, i, t);
              });
            }),
            onClose: (n = i = l, function () {
              n.open = !1;
            })
          };
        })).then(T.windowManager.open);
      }
    };
  }
  function he(i) {
    return function (e) {
      for (var t = e.length, n = function n(e) {
          e.attr("contenteditable", i ? "true" : null);
        }; t--;) {
        var r,
          a = e[t];
        (r = a.attr("class")) && /\bimage\b/.test(r) && (a.attr("contenteditable", i ? "false" : null), Oe.each(a.getAll("figcaption"), n));
      }
    };
  }
  "undefined" != typeof window || Function("return this;")();
  function ye(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  }
  var ve,
    we = ye,
    De = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
    Ae = tinymce.util.Tools.resolve("tinymce.util.Promise"),
    Se = tinymce.util.Tools.resolve("tinymce.util.URI"),
    Ue = tinymce.util.Tools.resolve("tinymce.util.XHR"),
    Te = De.DOM,
    Ce = function Ce(e, t, n) {
      n ? (Te.setAttrib(e, "role", "presentation"), D(we(e), "alt", "")) : (a === t ? we(e).dom.removeAttribute("alt") : D(we(e), "alt", t), "presentation" === Te.getAttrib(e, "role") && Te.setAttrib(e, "role", ""));
    },
    Ie = function Ie(e, t, n) {
      var r = te(e, n);
      ne(n, r, t, "caption", function (e, t, n) {
        return C(r = e) ? (o = r.parentNode, Te.insertAfter(r, o), Te.remove(o)) : (a = r, i = Te.create("figure", {
          "class": "image"
        }), Te.insertAfter(i, a), i.appendChild(a), i.appendChild(Te.create("figcaption", {
          contentEditable: "true"
        }, "Caption")), i.contentEditable = "false"), 0;
        var r, a, i, o;
      }), ne(n, r, t, "src", W), ne(n, r, t, "title", W), ne(n, r, t, "width", $(0, e)), ne(n, r, t, "height", $(0, e)), ne(n, r, t, "class", W), ne(n, r, t, "style", re(function (e, t) {
        return W(e, "style", t), 0;
      }, e)), ne(n, r, t, "hspace", re(J, e)), ne(n, r, t, "vspace", re(K, e)), ne(n, r, t, "border", re(X, e)), ne(n, r, t, "borderStyle", re(q, e)), t.alt === r.alt && t.isDecorative === r.isDecorative || Ce(n, t.alt, t.isDecorative);
    },
    xe = (ve = function ve(e, t) {
      return s(e) && s(t) ? xe(e, t) : t;
    }, function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      if (0 === e.length) throw new Error("Can't merge zero objects");
      for (var n = {}, r = 0; r < e.length; r++) {
        var a,
          i = e[r];
        for (a in i) b(i, a) && (n[a] = ve(n[a], i[a]));
      }
      return n;
    }),
    Le = tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),
    Oe = tinymce.util.Tools.resolve("tinymce.util.Tools"),
    Ne = function Ne(e, i) {
      var o = [];
      return Oe.each(e, function (e) {
        var t,
          n,
          r,
          a = L((t = e).text) ? t.text : L(t.title) ? t.title : "";
        void 0 !== e.menu ? (n = Ne(e.menu, i), o.push({
          text: a,
          items: n
        })) : (r = i(e), o.push({
          text: a,
          value: r
        }));
      }), o;
    },
    Pe = function Pe(e, a) {
      return function (e) {
        for (var t, n = 0; n < e.length; n++) {
          var r = b(t = e[n], "items") ? Pe(t.items, a) : t.value === a ? _.some(t) : _.none();
          if (r.isSome()) return r;
        }
        return _.none();
      }(e);
    },
    _e = ue,
    ke = function ke(e) {
      return ue(ce)(e);
    },
    Ee = function Ee(e, t) {
      return e.bind(function (e) {
        return Pe(e, t);
      });
    },
    Re = function Re(e) {
      return {
        title: "Advanced",
        name: "advanced",
        items: [{
          type: "input",
          label: "Style",
          name: "style"
        }, {
          type: "grid",
          columns: 2,
          items: [{
            type: "input",
            label: "Vertical space",
            name: "vspace",
            inputMode: "numeric"
          }, {
            type: "input",
            label: "Horizontal space",
            name: "hspace",
            inputMode: "numeric"
          }, {
            type: "input",
            label: "Border width",
            name: "border",
            inputMode: "numeric"
          }, {
            type: "listbox",
            name: "borderstyle",
            label: "Border style",
            items: [{
              text: "Select...",
              value: ""
            }, {
              text: "Solid",
              value: "solid"
            }, {
              text: "Dotted",
              value: "dotted"
            }, {
              text: "Dashed",
              value: "dashed"
            }, {
              text: "Double",
              value: "double"
            }, {
              text: "Groove",
              value: "groove"
            }, {
              text: "Ridge",
              value: "ridge"
            }, {
              text: "Inset",
              value: "inset"
            }, {
              text: "Outset",
              value: "outset"
            }, {
              text: "None",
              value: "none"
            }, {
              text: "Hidden",
              value: "hidden"
            }]
          }]
        }]
      };
    },
    ze = function ze(e) {
      var t = e.libraryTab,
        n = t.allowLibraryUploads,
        r = t.labels,
        a = r.tabName,
        i = r.dropZone,
        o = r.search,
        l = [{
          type: "label",
          label: o,
          items: [{
            type: "button",
            name: "librarysearch",
            text: o,
            icon: "search"
          }]
        }];
      return n && l.push({
        type: "dropzone",
        name: "libraryfile",
        label: i
      }), {
        title: a,
        name: "librarytab",
        items: l
      };
    },
    je = function je(e) {
      return {
        title: "General",
        name: "general",
        items: me(e)
      };
    },
    Be = me,
    Me = function Me(e) {
      return {
        title: "Upload",
        name: "upload",
        items: [{
          type: "dropzone",
          name: "fileinput"
        }]
      };
    };
  o.add("image", function (e) {
    var t, n, r;
    (t = e).on("PreInit", function () {
      t.parser.addNodeFilter("figure", he(!0)), t.serializer.addNodeFilter("figure", he(!1));
    }), (n = e).ui.registry.addToggleButton("image", {
      icon: "image",
      tooltip: "Insert/edit image",
      onAction: be(n).open,
      onSetup: function onSetup(e) {
        return e.setActive(I(ie(n))), n.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image", e.setActive).unbind;
      }
    }), n.ui.registry.addMenuItem("image", {
      icon: "image",
      text: "Image...",
      onAction: be(n).open
    }), n.ui.registry.addContextMenu("image", {
      update: function update(e) {
        return Q(e) || "IMG" === e.nodeName && !U(e) ? ["image"] : [];
      }
    }), (r = e).addCommand("mceImage", be(r).open), r.addCommand("mceUpdateImage", function (e, t) {
      r.undoManager.transact(function () {
        return se(r, t);
      });
    });
  });
}();
/*__ESM_BODY_END__*/