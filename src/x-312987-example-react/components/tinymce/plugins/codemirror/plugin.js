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

  function e(t) {
    return function (e) {
      return _typeof(e) === t;
    };
  }
  function i(e) {
    return function () {
      return e;
    };
  }
  function t(e) {
    return e;
  }
  function n() {
    return f;
  }
  var o,
    r = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    _c = function c() {
      return (_c = Object.assign || function (e) {
        for (var t, n = 1, o = arguments.length; n < o; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
    },
    u = function u(e) {
      return n = _typeof(t = e), (null === t ? "null" : "object" == n && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : n) === o;
      var t, n;
    },
    a = e("boolean"),
    s = e("function"),
    d = e("number"),
    l = i(!(o = "string")),
    m = i(!0),
    f = {
      fold: function fold(e, t) {
        return e();
      },
      isSome: l,
      isNone: m,
      getOr: t,
      getOrThunk: g,
      getOrDie: function getOrDie(e) {
        throw new Error(e || "error: getOrDie called on none.");
      },
      getOrNull: i(null),
      getOrUndefined: i(void 0),
      or: t,
      orThunk: g,
      map: n,
      each: function each() {},
      bind: n,
      exists: l,
      forall: m,
      filter: function filter() {
        return f;
      },
      toArray: function toArray() {
        return [];
      },
      toString: i("none()")
    };
  function g(e) {
    return e();
  }
  function p(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  }
  var v = function v(n) {
      function e() {
        return r;
      }
      function t(e) {
        return e(n);
      }
      var o = i(n),
        r = {
          fold: function fold(e, t) {
            return t(n);
          },
          isSome: m,
          isNone: l,
          getOr: o,
          getOrThunk: o,
          getOrDie: o,
          getOrNull: o,
          getOrUndefined: o,
          or: e,
          orThunk: e,
          map: function map(e) {
            return v(e(n));
          },
          each: function each(e) {
            e(n);
          },
          bind: t,
          exists: t,
          forall: t,
          filter: function filter(e) {
            return e(n) ? r : f;
          },
          toArray: function toArray() {
            return [n];
          },
          toString: function toString() {
            return "some(" + n + ")";
          }
        };
      return r;
    },
    h = {
      some: v,
      none: n,
      from: function from(e) {
        return null == e ? f : v(e);
      }
    },
    M = {
      fromHtml: function fromHtml(e, t) {
        var n = (t || document).createElement("div");
        if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
        return p(n.childNodes[0]);
      },
      fromTag: function fromTag(e, t) {
        var n = (t || document).createElement(e);
        return p(n);
      },
      fromText: function fromText(e, t) {
        var n = (t || document).createTextNode(e);
        return p(n);
      },
      fromDom: p,
      fromPoint: function fromPoint(e, t, n) {
        return h.from(e.dom.elementFromPoint(t, n)).map(p);
      }
    };
  function y(t) {
    return function (e) {
      return e.dom.nodeType === t;
    };
  }
  function b(e, t, n) {
    !function (e, t, n) {
      if (!(u(n) || a(n) || d(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
      e.setAttribute(t, n + "");
    }(e.dom, t, n);
  }
  function N(e) {
    return D(e) ? e : M.fromDom(e.dom.ownerDocument);
  }
  function C(e) {
    return h.from(e.dom.parentNode).map(M.fromDom);
  }
  function w(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  }
  function k(e) {
    return e.stopPropagation();
  }
  function T(A, E) {
    return new _(function (e) {
      var t,
        T = V.get(E.editorId),
        S = M.fromDom(A);
      (function (e, t, n) {
        if (!u(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
        void 0 !== e.style && s(e.style.getPropertyValue) && e.style.setProperty(t, n);
      })(S.dom, "width", "100%"), C(S).filter(x).each(function (e) {
        var t,
          n,
          o,
          r,
          i,
          u,
          c = "sn-codemirror";
        void 0 !== (t = e).dom.classList ? t.dom.classList.add(c) : (o = c, u = (void 0 === (i = null === (r = (n = t).dom.getAttribute("class")) ? void 0 : r) || "" === i ? [] : i.split(" ")).concat([o]), b(n, "class", u.join(" ")));
      }), t = E.baseUrl, new _(function (e) {
        return tinymce.ScriptLoader.loadScript(t + "/codemirror.min.js", function () {
          return e(CodeMirror);
        });
      }).then(function (e) {
        var t,
          n,
          o,
          r,
          i,
          u,
          c,
          a,
          s,
          d,
          l,
          m,
          f,
          g,
          p,
          v,
          h = (t = e, n = A, o = E, r = T, l = P(M.fromDom(r.getElement())), i = I(m = l) && null != m.dom.host ? l : M.fromDom(N(l).dom.body), s = t, d = i, c = {
            lineWrapping: o.lineWrapping,
            lineNumbers: o.lineNumbers,
            foldGutter: o.foldGutter,
            theme: o.theme,
            direction: o.direction,
            matchTags: {
              bothTags: !0
            },
            keyMap: "sublime",
            gutters: o.gutter ? ["CodeMirror-linenumbers", "CodeMirror-foldgutter"] : [],
            extraKeys: {
              "Alt-F": "findPersistent",
              "Ctrl-J": "toMatchingTag",
              "Ctrl-B": "selectNextOccurrence",
              "'<'": (u = {
                completeAfter: C,
                completeIfAfterLt: function completeIfAfterLt(t) {
                  return C(t, function () {
                    var e = t.getCursor();
                    return "<" === t.getRange(s.Pos(e.line, e.ch - 1), e);
                  });
                },
                completeIfInTag: function completeIfInTag(o) {
                  return C(o, function () {
                    var e = o.getTokenAt(o.getCursor()),
                      t = "string" === e.type,
                      n = /['"]/.test(e.string.charAt(e.string.length - 1));
                    return !(t && (!n || 1 === e.string.length)) && s.innerMode(o.getMode(), e.state).state.tagName;
                  });
                }
              }).completeAfter,
              "'/'": u.completeIfAfterLt,
              "' '": u.completeIfInTag,
              "'='": u.completeIfInTag,
              "Ctrl-Q": function CtrlQ(e) {
                return e.foldCode(e.getCursor());
              }
            },
            mode: "text/html",
            value: ""
          }, a = t(n, c), n.addEventListener("keyup", k), n.addEventListener("keydown", k), n.addEventListener("keypress", k), j.setTimeout(function () {
            a.focus(), o.cursor && a.doc.setCursor(o.cursor);
          }), j.setTimeout(function () {
            return a.refresh();
          }, 200), {
            cmi: a,
            unbind: function unbind() {
              n.removeEventListener("keyup", k), n.removeEventListener("keydown", k), n.removeEventListener("keypress", k);
            }
          }),
          y = h.cmi,
          b = h.unbind;
        function C(e, t) {
          return t && !t() || j.setTimeout(function () {
            e.state.completionActive || e.showHint({
              completeSingle: !1,
              container: d.dom
            });
          }, 100), s.Pass;
        }
        return f = y, p = {
          Esc: function Esc(e) {
            return e.addKeyMap(v), CodeMirror.pass;
          }
        }, v = {
          Tab: function Tab(e) {
            return w(0), e.removeKeyMap(v), !1;
          },
          "Shift-Tab": function ShiftTab(e) {
            return w(1), e.removeKeyMap(v), !1;
          },
          "default": function _default(e) {
            return e.removeKeyMap(v), CodeMirror.pass;
          }
        }, (g = S).dom.addEventListener("focus", f.focus()), g.dom.setAttribute("data-alloy-tabstop", "true"), f.addKeyMap(p), _.resolve({
          getValue: function getValue() {
            return function (e, t, n) {
              var o,
                r,
                i,
                u,
                c,
                a,
                s,
                d,
                l,
                m,
                f,
                g,
                p,
                v = n.doc;
              v.somethingSelected() && v.setCursor(v.getCursor()), r = (o = n).getCursor(), (i = o.getTokenAt(r, !0)) && "atom" === i.type && i.end !== r.ch && o.doc.setCursor({
                line: r.line,
                ch: i.start
              }), u = e, m = (l = (c = n).getCursor()).line, f = l.ch, g = c.getViewport(), (p = u.findMatchingTag(c, l, g)) && (a = void 0, s = "open" === p.at, d = p[p.at][s ? "to" : "from"], !s || d.line === m && d.ch === f ? s || d.line === m && d.ch === f || (a = {
                line: p.close.from.line,
                ch: p.close.from.ch
              }) : a = {
                line: p.open.to.line,
                ch: p.open.to.ch
              }, a && c.doc.setCursor(a));
              var h,
                y = n.getCursor(),
                b = y.line,
                C = y.ch,
                w = n.getLine(b);
              return 0 === C || C === w.length || (h = n.getModeAt(y, !0).name) && "xml" !== h || v.replaceSelection('<span id="' + t + '"></span>'), {
                id: t,
                value: n.doc.getValue()
              };
            }(e, T.dom.uniqueId(), y);
          },
          setValue: function setValue(e) {
            return y.doc.setValue(e);
          },
          destroy: b
        });
        function w(e) {
          var t = g.dom.getRootNode().querySelectorAll(".tox-dialog__footer .tox-button");
          2 === t.length && t[e].focus();
        }
      }).then(e);
    });
  }
  function S(e) {
    return !(!(t = e.dom) || !t.hasAttribute) && t.hasAttribute("data-mce-bogus");
    var t;
  }
  function A(e, t) {
    var n,
      o = M.fromHtml(U),
      i = function (e, t) {
        for (var n = i.dom, o = s(t) ? t : l; n.parentNode;) {
          var n = n.parentNode,
            r = M.fromDom(n);
          if (e(r)) return h.some(r);
          if (o(r)) break;
        }
        return h.none();
      }((i = M.fromDom(e), S), t).getOr(i),
      r = o;
    return C(n = i).each(function (e) {
      e.dom.insertBefore(r.dom, n.dom);
    }), o;
  }
  function E(e, t) {
    return {
      line: e,
      ch: t
    };
  }
  function O(e, o) {
    var r,
      l,
      u = {
        onSubmit: function onSubmit(e) {
          var t = e.id,
            n = e.value;
          r.focus(), r.undoManager.transact(function () {
            r.setContent(n);
          });
          var o = r.dom.select("span#" + t)[0];
          o ? (r.selection.scrollIntoView(o), r.selection.setCursorLocation(o, 0), r.dom.remove(o)) : r.selection.setCursorLocation(), r.nodeChanged();
        },
        processContent: (l = r = e, function () {
          var i,
            u,
            c,
            a,
            s,
            d,
            e = function () {
              for (var e = (i = l, u = M.fromDom(i.getBody()), c = i.selection.getBookmark(), a = c.hasOwnProperty("name") ? i.dom.select(c.name)[c.index] : i.dom.select("#" + c.id + "_start")[0], s = h.from(a).map(function (e) {
                  return A(e, function (e) {
                    return e.dom.isEqualNode(u.dom);
                  });
                }), d = i.getContent({
                  source_view: !0
                }), s.each(w), i.selection.moveToBookmark(c), d).split(/\r?\n/), t = e.length, n = 0; n < t; ++n) {
                var o = e[n],
                  r = o.indexOf(U);
                if (0 <= r) return o === U ? 0 === n ? E(n, 0) : E(n - 1, e[n - 1].length) : E(n, r);
              }
              return E(0, 0);
            }();
          return {
            content: l.getContent({
              source_view: !0
            }),
            cursor: e
          };
        })
      };
    return {
      open: function open() {
        var i,
          t = e,
          n = o;
        new _(function (e) {
          e(_c(_c({}, K), {
            baseUrl: n,
            direction: t.getBody().dir || "ltr",
            editorId: t.id,
            theme: t.settings._do_not_use_is_dark_theme ? "tomorrow-night-eighties" : "default"
          }));
        }).then((i = u, function (e) {
          var t = i.processContent(),
            n = t.content,
            o = t.cursor,
            r = _c(_c({}, e), {
              cursor: o
            });
          return {
            title: "Source Code",
            size: "large",
            body: {
              type: "panel",
              items: [{
                name: "codeview",
                type: "customeditor",
                tag: "div",
                scriptId: H,
                scriptUrl: r.baseUrl + "/customeditor.min.js",
                settings: r
              }]
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
            initialData: {
              codeview: n
            },
            onSubmit: function onSubmit(e) {
              i.onSubmit(e.getData().codeview), e.close();
            }
          };
        })).then(e.windowManager.open).then(L);
      }
    };
  }
  "undefined" != typeof window || Function("return this;")();
  function L() {
    B.add(H, T);
  }
  var x = y(1),
    D = y(9),
    I = y(11),
    P = s(Element.prototype.attachShadow) && s(Node.prototype.getRootNode) ? function (e) {
      return M.fromDom(e.dom.getRootNode());
    } : N,
    _ = tinymce.util.Tools.resolve("tinymce.util.Promise"),
    V = tinymce.util.Tools.resolve("tinymce.EditorManager"),
    B = tinymce.util.Tools.resolve("tinymce.Resource"),
    j = tinymce.util.Tools.resolve("tinymce.util.Delay"),
    K = {
      lineWrapping: !0,
      lineNumbers: !0,
      foldGutter: !0,
      gutter: !0,
      matchBrackets: !0,
      styleActiveLine: !0,
      indentUnit: 1,
      tabSize: 1
    },
    U = "\x3c!--sn_cursor--\x3e",
    H = "plugins.codemirrror.customeditor";
  r.add("codemirror", function (e, t) {
    var n;
    (n = e).ui.registry.addToggleButton("code", {
      icon: "sourcecode",
      tooltip: "Source code",
      onAction: function onAction() {
        return n.execCommand("mceCodeEditor");
      }
    }), n.ui.registry.addMenuItem("code", {
      icon: "sourcecode",
      text: "Source code",
      onAction: function onAction() {
        return n.execCommand("mceCodeEditor");
      }
    }), e.addCommand("mceCodeEditor", O(e, t).open);
  });
}();
/*__ESM_BODY_END__*/