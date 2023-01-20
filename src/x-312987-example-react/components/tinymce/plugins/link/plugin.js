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

  function t(r) {
    return function (t) {
      return e = _typeof(n = t), (null === n ? "null" : "object" == e && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == e && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : e) === r;
      var n, e;
    };
  }
  function n(n) {
    return function (t) {
      return _typeof(t) === n;
    };
  }
  function h() {}
  function i(t) {
    return function () {
      return t;
    };
  }
  function e(t) {
    return t;
  }
  function r(t, n) {
    return t === n;
  }
  function o() {
    return v;
  }
  var u,
    a = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    c = tinymce.util.Tools.resolve("tinymce.util.VK"),
    l = t("string"),
    d = t("array"),
    p = function p(t) {
      return u === t;
    },
    f = n("boolean"),
    s = n("function"),
    m = i(!1),
    g = i(!(u = null)),
    v = {
      fold: function fold(t, n) {
        return t();
      },
      isSome: m,
      isNone: g,
      getOr: e,
      getOrThunk: y,
      getOrDie: function getOrDie(t) {
        throw new Error(t || "error: getOrDie called on none.");
      },
      getOrNull: i(null),
      getOrUndefined: i(void 0),
      or: e,
      orThunk: y,
      map: o,
      each: h,
      bind: o,
      exists: m,
      forall: g,
      filter: function filter() {
        return v;
      },
      toArray: function toArray() {
        return [];
      },
      toString: i("none()")
    };
  function y(t) {
    return t();
  }
  function k(t, o, i) {
    return function (t) {
      for (var n, e = 0, r = t.length; e < r; e++) n = t[e], i = o(i, n, e);
    }(t), i;
  }
  function x(t) {
    for (var n = [], e = 0, r = t.length; e < r; ++e) {
      if (!d(t[e])) throw new Error("Arr.flatten item " + e + " was not an array, input: " + t);
      at.apply(n, t[e]);
    }
    return n;
  }
  function b(t, n) {
    for (var e = 0; e < t.length; e++) {
      var r = n(t[e], e);
      if (r.isSome()) return r;
    }
    return it.none();
  }
  function O(t, n, e) {
    return void 0 === e && (e = r), t.exists(function (t) {
      return e(t, n);
    });
  }
  function w(t, n) {
    return t ? it.some(n) : it.none();
  }
  function C(t) {
    var n = t.getParam("link_assume_external_targets", !1);
    return f(n) && n ? 1 : !l(n) || "http" !== n && "https" !== n ? 0 : n;
  }
  function N(t) {
    return t.getParam("default_link_target");
  }
  function A(t) {
    return t.getParam("target_list", !0);
  }
  function T(t) {
    return t.getParam("rel_list", [], "array");
  }
  function P(t) {
    return t.getParam("allow_unsafe_link_target", !1, "boolean");
  }
  function S(t) {
    return l(t.value) ? t.value : "";
  }
  function _(n) {
    return void 0 === n && (n = S), function (t) {
      return it.from(t).map(function (t) {
        return ct(t, n);
      });
    };
  }
  function R(t, i, u, a) {
    return function (t) {
      for (var n = mt(t), e = 0, r = n.length; e < r; e++) {
        var o = n[e];
        !function (t, n) {
          (i(t, n) ? u : a)(t, n);
        }(t[o], o);
      }
    }(t), 1;
  }
  function D(t, n) {
    return gt.call(t, n);
  }
  function L(t) {
    return t && "a" === t.nodeName.toLowerCase();
  }
  function E(t) {
    return L(t) && !!pt(t);
  }
  function M(t, n) {
    if (t.collapsed) return [];
    for (var e = t.cloneContents(), r = new dt(e.firstChild, e), o = [], i = e.firstChild; n(i) && o.push(i), i = r.next(););
    return o;
  }
  function U(t) {
    return /^\w+:/i.test(t);
  }
  function B(t, n) {
    function e(t) {
      return t.filter(function (t) {
        return -1 === lt.inArray(o, t);
      });
    }
    var r,
      o = ["noopener"],
      i = t ? t.split(/\s+/) : [],
      u = n ? 0 < (r = e(r = i)).length ? r.concat(o) : o : e(i);
    return 0 < u.length ? lt.trim(u.sort().join(" ")) : "";
  }
  function I(t, n) {
    return n = n || t.selection.getNode(), vt(n) ? t.dom.select("a[href]", n)[0] : t.dom.getParent(n, "a[href]");
  }
  function K(t, n) {
    return (n ? n.innerText || n.textContent : t.getContent({
      format: "text"
    })).replace(/\uFEFF/g, "");
  }
  function z(t) {
    return 0 < lt.grep(t, E).length;
  }
  function j(t) {
    var n = t.schema.getTextInlineElements();
    return 0 === M(t.selection.getRng(), function (t) {
      return 1 === t.nodeType && !L(t) && !D(n, t.nodeName.toLowerCase());
    }).length;
  }
  function V(l, c, f) {
    var t,
      n,
      e,
      r,
      o,
      i,
      u,
      s = l.selection.getNode(),
      m = I(l, s),
      g = (n = l, e = k(["title", "rel", "class", "target"], function (n, e) {
        return t[e].each(function (t) {
          n[e] = 0 < t.length ? t : null;
        }), n;
      }, {
        href: (t = f).href
      }), u = _st({}, e), 0 < T(n).length || !1 !== P(n) || (r = B(u.rel, "_blank" === u.target), u.rel = r || null), it.from(u.target).isNone() && !1 === A(n) && (u.target = N(n)), u.href = (o = u.href, "http" !== (i = C(n)) && "https" !== i || U(o) ? o : i + "://" + o), u);
    l.undoManager.transact(function () {
      var n, t, e, r, o, i, u, a;
      f.href === c.href && c.attach(), m ? (l.focus(), o = l, i = m, u = f.text, a = g, u.each(function (t) {
        D(i, "innerText") ? i.innerText = t : i.textContent = t;
      }), o.dom.setAttribs(i, a), o.selection.select(i)) : (n = l, e = f.text, r = g, vt(t = s) ? kt(n, t, r) : e.fold(function () {
        n.execCommand("mceInsertLink", !1, r);
      }, function (t) {
        n.insertContent(n.dom.createHTML("a", r, n.dom.encode(t)));
      }));
    });
  }
  function q(t, n, e) {
    var r,
      o,
      i,
      u,
      a,
      l,
      c,
      f,
      s,
      m,
      g = (r = t, o = e.href, _st(_st({}, e), {
        href: ht.isDomSafe(o, "a", r.settings) ? o : ""
      }));
    t.hasPlugin("rtc", !0) ? t.execCommand("createlink", !1, (a = g["class"], l = g.href, c = g.rel, f = g.target, s = g.text, m = g.title, R({
      "class": a.getOrNull(),
      href: l,
      rel: c.getOrNull(),
      target: f.getOrNull(),
      text: s.getOrNull(),
      title: m.getOrNull()
    }, function (t, n) {
      return !1 === p(t);
    }, (i = u = {}, function (t, n) {
      i[n] = t;
    }), h), u)) : V(t, n, g);
  }
  function F(t) {
    var l;
    t.hasPlugin("rtc", !0) ? t.execCommand("unlink") : (l = t).undoManager.transact(function () {
      var t,
        n,
        e,
        r,
        o,
        i,
        u,
        a = l.selection.getNode();
      vt(a) ? yt(l, a) : (n = (t = l).dom, r = (e = t.selection).getBookmark(), o = e.getRng().cloneRange(), i = n.getParent(o.startContainer, "a[href]", t.getBody()), u = n.getParent(o.endContainer, "a[href]", t.getBody()), i && o.setStartBefore(i), u && o.setEndAfter(u), e.setRng(o), t.execCommand("unlink"), e.moveToBookmark(r)), l.focus();
    });
  }
  function W(t) {
    var n = t.href;
    return 0 < n.indexOf("@") && -1 === n.indexOf("/") && -1 === n.indexOf("mailto:") ? it.some({
      message: "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",
      preprocess: function preprocess(t) {
        return _st(_st({}, t), {
          href: "mailto:" + n
        });
      }
    }) : it.none();
  }
  function H(t, n, e) {
    var r = t.getAttrib(n, e);
    return null !== r && 0 < r.length ? it.some(r) : it.none();
  }
  function G(d) {
    var t,
      n = I(t = d);
    Tt(t, n).then(function (t) {
      var n,
        e,
        i,
        u,
        r = function r(t) {
          var e = t.getData();
          if (!e.url.value) return F(i), void t.close();
          function n(n) {
            return it.from(e[n]).filter(function (t) {
              return !O(u.anchor[n], t);
            });
          }
          var r = {
              href: e.url.value,
              text: n("text"),
              target: n("target"),
              rel: n("rel"),
              "class": n("linkClass"),
              title: n("title")
            },
            o = {
              href: e.url.value,
              attach: void 0 !== e.url.meta && e.url.meta.attach ? e.url.meta.attach : h
            };
          Ct(i, r).then(function (t) {
            q(i, o, t);
          }), t.close();
        },
        o = i = d,
        a = (n = u = t).anchor.text.map(function () {
          return {
            name: "text",
            type: "input",
            label: "Text to display"
          };
        }).toArray(),
        l = n.flags.titleEnabled ? [{
          name: "title",
          type: "input",
          label: "Title"
        }] : [],
        c = it.from(N(o)),
        f = n.anchor,
        s = {
          url: {
            value: e = f.url.getOr(""),
            meta: {
              original: {
                value: e
              }
            }
          },
          text: f.text.getOr(""),
          title: f.title.getOr(""),
          anchor: e,
          link: e,
          rel: f.rel.getOr(""),
          target: f.target.or(c).getOr(""),
          linkClass: f.linkClass.getOr("")
        },
        m = n.catalogs,
        g = bt(s, m);
      return {
        title: "Insert/Edit Link",
        size: "normal",
        body: {
          type: "panel",
          items: x([[{
            name: "url",
            type: "urlinput",
            filetype: "file",
            label: "URL"
          }], a, l, function (t) {
            for (var n = [], e = function e(t) {
                n.push(t);
              }, r = 0; r < t.length; r++) t[r].each(e);
            return n;
          }([m.anchor.map(ft.createUi("anchor", "Anchors")), m.rels.map(ft.createUi("rel", "Rel")), m.targets.map(ft.createUi("target", "Open link in...")), m.link.map(ft.createUi("link", "Link list")), m.classes.map(ft.createUi("linkClass", "Class"))])])
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
        initialData: s,
        onChange: function onChange(n, t) {
          var e = t.name;
          g.onChange(n.getData, {
            name: e
          }).each(function (t) {
            n.setData(t);
          });
        },
        onSubmit: r
      };
    }).then(function (t) {
      d.windowManager.open(t);
    });
  }
  function J(t, n) {
    return t.dom.getParent(n, "a[href]");
  }
  function X(t) {
    return J(t, t.selection.getStart());
  }
  function $(t, n) {
    var e, r;
    n && (e = pt(n), /^#/.test(e) ? (r = t.$(e)).length && t.selection.scrollIntoView(r[0], !0) : function (t) {
      var n = document.createElement("a");
      n.target = "_blank", n.href = t, n.rel = "noreferrer noopener";
      var e,
        r,
        o = document.createEvent("MouseEvents");
      o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e = n, r = o, document.body.appendChild(e), e.dispatchEvent(r), document.body.removeChild(e);
    }(n.href));
  }
  function Q(t) {
    return function () {
      G(t);
    };
  }
  function Y(t) {
    return function () {
      $(t, X(t));
    };
  }
  function Z(t, n) {
    return t.on("NodeChange", n), function () {
      return t.off("NodeChange", n);
    };
  }
  function tt(e) {
    return function (t) {
      function n() {
        return t.setActive(!e.mode.isReadOnly() && null !== I(e, e.selection.getNode()));
      }
      return n(), Z(e, n);
    };
  }
  function nt(e) {
    return function (t) {
      function n() {
        return t.setDisabled(null === I(e, e.selection.getNode()));
      }
      return n(), Z(e, n);
    };
  }
  function et(r) {
    return function (n) {
      function e(t) {
        return z(t) || 0 < M(r.selection.getRng(), E).length;
      }
      var t = r.dom.getParents(r.selection.getStart());
      return n.setDisabled(!e(t)), Z(r, function (t) {
        return n.setDisabled(!e(t.parents));
      });
    };
  }
  function rt(t) {
    var n = x(function (t, n) {
      for (var e = t.length, r = new Array(e), o = 0; o < e; o++) {
        var i = t[o];
        r[o] = n(i, o);
      }
      return r;
    }(t.dom.select("a:not([href])"), function (t) {
      var n = t.name || t.id;
      return n ? [{
        text: n,
        value: "#" + n
      }] : [];
    }));
    return 0 < n.length ? it.some([{
      text: "None",
      value: ""
    }].concat(n)) : it.none();
  }
  var ot = function ot(e) {
      function t() {
        return o;
      }
      function n(t) {
        return t(e);
      }
      var r = i(e),
        o = {
          fold: function fold(t, n) {
            return n(e);
          },
          isSome: g,
          isNone: m,
          getOr: r,
          getOrThunk: r,
          getOrDie: r,
          getOrNull: r,
          getOrUndefined: r,
          or: t,
          orThunk: t,
          map: function map(t) {
            return ot(t(e));
          },
          each: function each(t) {
            t(e);
          },
          bind: n,
          exists: n,
          forall: n,
          filter: function filter(t) {
            return t(e) ? o : v;
          },
          toArray: function toArray() {
            return [e];
          },
          toString: function toString() {
            return "some(" + e + ")";
          }
        };
      return o;
    },
    it = {
      some: ot,
      none: o,
      from: function from(t) {
        return null == t ? v : ot(t);
      }
    },
    ut = Array.prototype.indexOf,
    at = Array.prototype.push,
    lt = tinymce.util.Tools.resolve("tinymce.util.Tools"),
    ct = function ct(t, i) {
      var u = [];
      return lt.each(t, function (t) {
        var n,
          e,
          r,
          o = l((n = t).text) ? n.text : l(n.title) ? n.title : "";
        void 0 !== t.menu ? (e = ct(t.menu, i), u.push({
          text: o,
          items: e
        })) : (r = i(t), u.push({
          text: o,
          value: r
        }));
      }), u;
    },
    ft = {
      sanitize: function sanitize(t) {
        return _(S)(t);
      },
      sanitizeWith: _,
      createUi: function createUi(n, e) {
        return function (t) {
          return {
            name: n,
            type: "listbox",
            label: e,
            items: t
          };
        };
      },
      getValue: S
    },
    _st = function st() {
      return (_st = Object.assign || function (t) {
        for (var n, e = 1, r = arguments.length; e < r; e++) for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        return t;
      }).apply(this, arguments);
    },
    mt = Object.keys,
    gt = Object.hasOwnProperty,
    dt = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),
    ht = tinymce.util.Tools.resolve("tinymce.util.URI"),
    pt = function pt(t) {
      return t.getAttribute("data-mce-href") || t.getAttribute("href");
    },
    vt = function vt(t) {
      return t && "FIGURE" === t.nodeName && /\bimage\b/i.test(t.className);
    },
    yt = function yt(t, n) {
      var e,
        r = t.dom.select("img", n)[0];
      !r || (e = t.dom.getParents(r, "a[href]", n)[0]) && (e.parentNode.insertBefore(r, e), t.dom.remove(e));
    },
    kt = function kt(t, n, e) {
      var r,
        o = t.dom.select("img", n)[0];
      o && (r = t.dom.create("a", e), o.parentNode.insertBefore(r, o), r.appendChild(o));
    },
    xt = function xt(e, t) {
      return b(t, function (t) {
        return D(n = t, "items") && void 0 !== n.items && null !== n.items ? xt(e, t.items) : w(t.value === e, t);
        var n;
      });
    },
    bt = function bt(t, c) {
      function f(t, n) {
        var e,
          r,
          o,
          i,
          u,
          a,
          l = ("link" === (e = n.name) ? c.link : "anchor" === e ? c.anchor : it.none()).getOr([]);
        return r = s.text, o = n.name, i = l, u = t[o], a = 0 < r.length, void 0 !== u ? xt(u, i).map(function (t) {
          return {
            url: {
              value: t.value,
              meta: {
                text: a ? r : t.text,
                attach: h
              }
            },
            text: a ? r : t.text
          };
        }) : it.none();
      }
      var s = {
        text: t.text,
        title: t.title
      };
      return {
        onChange: function onChange(t, n) {
          var e,
            r,
            o,
            i,
            u,
            a,
            l = n.name;
          return "url" === l ? (r = t(), o = r.url, u = w(s.text.length <= 0, it.from(o.meta.text).getOr(o.value)), i = r.url, a = w(s.title.length <= 0, it.from(i.meta.title).getOr("")), u.isSome() || a.isSome() ? it.some(_st(_st({}, u.map(function (t) {
            return {
              text: t
            };
          }).getOr({})), a.map(function (t) {
            return {
              title: t
            };
          }).getOr({}))) : it.none()) : (e = ["anchor", "link"], -1 < ut.call(e, l) ? f(t(), n) : ("text" !== l && "title" !== l || (s[l] = t()[l]), it.none()));
        }
      };
    },
    Ot = tinymce.util.Tools.resolve("tinymce.util.Delay"),
    wt = tinymce.util.Tools.resolve("tinymce.util.Promise"),
    Ct = function Ct(u, a) {
      return b([W, (e = C(u), r = u.getParam("link_default_protocol", "http", "string"), function (t) {
        var n = t.href;
        return 1 === e && !U(n) || 0 === e && /^\s*www(\.|\d\.)/i.test(n) ? it.some({
          message: "The URL you entered seems to be an external link. Do you want to add the required " + r + ":// prefix?",
          preprocess: function preprocess(t) {
            return _st(_st({}, t), {
              href: r + "://" + n
            });
          }
        }) : it.none();
      })], function (t) {
        return t(a);
      }).fold(function () {
        return wt.resolve(a);
      }, function (i) {
        return new wt(function (n) {
          var e = u,
            t = i.message,
            r = function r(t) {
              n(t ? i.preprocess(a) : a);
            },
            o = e.selection.getRng();
          Ot.setEditorTimeout(e, function () {
            e.windowManager.confirm(t, function (t) {
              e.selection.setRng(o), r(t);
            });
          });
        });
      });
      var e, r;
    },
    Nt = tinymce.util.Tools.resolve("tinymce.util.XHR"),
    At = [{
      text: "Current window",
      value: ""
    }, {
      text: "New window",
      value: "_blank"
    }],
    Tt = function Tt(m, g) {
      return t = (e = m).getParam("link_list"), new wt(function (n) {
        l(t) ? Nt.send({
          url: t,
          success: function success(t) {
            return n(function (t) {
              try {
                return it.some(JSON.parse(t));
              } catch (t) {
                return it.none();
              }
            }(t));
          },
          error: function error(t) {
            return n(it.none());
          }
        }) : s(t) ? t(function (t) {
          return n(it.some(t));
        }) : n(it.from(t));
      }).then(function (t) {
        return t.bind(ft.sanitizeWith(n)).map(function (t) {
          return 0 < t.length ? [{
            text: "None",
            value: ""
          }].concat(t) : t;
        });
      }).then(function (t) {
        var n,
          e,
          r,
          o,
          i,
          u,
          a,
          l,
          c,
          f,
          s = (e = g, r = (n = m).dom, o = j(n) ? it.some(K(n.selection, e)) : it.none(), i = e ? it.some(r.getAttrib(e, "href")) : it.none(), u = e ? it.from(r.getAttrib(e, "target")) : it.none(), a = H(r, e, "rel"), l = H(r, e, "class"), {
            url: i,
            text: o,
            title: H(r, e, "title"),
            target: u,
            rel: a,
            linkClass: l
          });
        return {
          anchor: s,
          catalogs: {
            targets: (f = A(m), d(f) ? ft.sanitize(f).orThunk(function () {
              return it.some(At);
            }) : !1 === f ? it.none() : it.some(At)),
            rels: function (t, n) {
              var e = T(t);
              if (0 < e.length) {
                var r = O(n, "_blank");
                return (!1 === P(t) ? ft.sanitizeWith(function (t) {
                  return B(ft.getValue(t), r);
                }) : ft.sanitize)(e);
              }
              return it.none();
            }(m, s.target),
            classes: 0 < (c = m.getParam("link_class_list", [], "array")).length ? ft.sanitize(c) : it.none(),
            anchor: rt(m),
            link: t
          },
          optNode: it.from(g),
          flags: {
            titleEnabled: m.getParam("link_title", !0, "boolean")
          }
        };
      });
      function n(t) {
        return e.convertURL(t.value || t.url, "href");
      }
      var e, t;
    };
  a.add("link", function (t) {
    var n, e, r, o, i, u, a;
    function l(t) {
      var n = a.selection.getNode();
      return t.setDisabled(!I(a, n)), h;
    }
    (n = t).ui.registry.addToggleButton("link", {
      icon: "link",
      tooltip: "Insert/edit link",
      onAction: Q(n),
      onSetup: tt(n)
    }), n.ui.registry.addButton("openlink", {
      icon: "new-tab",
      tooltip: "Open link",
      onAction: Y(n),
      onSetup: nt(n)
    }), n.ui.registry.addButton("unlink", {
      icon: "unlink",
      tooltip: "Remove link",
      onAction: function onAction() {
        return F(n);
      },
      onSetup: et(n)
    }), (e = t).ui.registry.addMenuItem("openlink", {
      text: "Open link",
      icon: "new-tab",
      onAction: Y(e),
      onSetup: nt(e)
    }), e.ui.registry.addMenuItem("link", {
      icon: "link",
      text: "Link...",
      shortcut: "Meta+K",
      onAction: Q(e)
    }), e.ui.registry.addMenuItem("unlink", {
      icon: "unlink",
      text: "Remove link",
      onAction: function onAction() {
        return F(e);
      },
      onSetup: et(e)
    }), (r = t).ui.registry.addContextMenu("link", {
      update: function update(t) {
        return z(r.dom.getParents(t, "a")) ? "link unlink openlink" : "link";
      }
    }), (a = t).ui.registry.addContextForm("quicklink", {
      launch: {
        type: "contextformtogglebutton",
        icon: "link",
        tooltip: "Link",
        onSetup: tt(a)
      },
      label: "Link",
      predicate: function predicate(t) {
        return !!I(a, t) && a.getParam("link_context_toolbar", !1, "boolean");
      },
      initValue: function initValue() {
        var t = I(a);
        return t ? pt(t) : "";
      },
      commands: [{
        type: "contextformtogglebutton",
        icon: "link",
        tooltip: "Link",
        primary: !0,
        onSetup: function onSetup(t) {
          var n = a.selection.getNode();
          return t.setActive(!!I(a, n)), tt(a)(t);
        },
        onAction: function onAction(t) {
          var n = t.getValue(),
            e = function (t) {
              var n = I(a),
                e = j(a);
              if (n || !e) return it.none();
              var r = K(a.selection, n);
              return it.some(0 < r.length ? r : t);
            }(n);
          q(a, {
            href: n,
            attach: h
          }, {
            href: n,
            text: e,
            title: it.none(),
            rel: it.none(),
            target: it.none(),
            "class": it.none()
          }), a.selection.collapse(!1), t.hide();
        }
      }, {
        type: "contextformbutton",
        icon: "unlink",
        tooltip: "Remove link",
        onSetup: l,
        onAction: function onAction(t) {
          F(a), t.hide();
        }
      }, {
        type: "contextformbutton",
        icon: "new-tab",
        tooltip: "Open link",
        onSetup: l,
        onAction: function onAction(t) {
          Y(a)(), t.hide();
        }
      }]
    }), (u = t).on("click", function (t) {
      var n = J(u, t.target);
      n && c.metaKeyPressed(t) && (t.preventDefault(), $(u, n));
    }), u.on("keydown", function (t) {
      var n = X(u);
      n && 13 === t.keyCode && !0 === t.altKey && !1 === t.shiftKey && !1 === t.ctrlKey && !1 === t.metaKey && (t.preventDefault(), $(u, n));
    }), (o = t).addCommand("mceLink", function () {
      o.getParam("link_quicklink", !1, "boolean") ? o.fire("contexttoolbar-show", {
        toolbarKey: "quicklink"
      }) : Q(o)();
    }), (i = t).addShortcut("Meta+K", "", function () {
      i.execCommand("mceLink");
    });
  });
}();
/*__ESM_BODY_END__*/