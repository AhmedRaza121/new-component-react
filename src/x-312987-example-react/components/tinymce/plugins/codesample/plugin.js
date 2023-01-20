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

  function o(e) {
    return function () {
      return e;
    };
  }
  function e(e) {
    return e;
  }
  function n() {
    return l;
  }
  var t = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    s = o(!1),
    i = o(!0),
    l = {
      fold: function fold(e, n) {
        return e();
      },
      isSome: s,
      isNone: i,
      getOr: e,
      getOrThunk: a,
      getOrDie: function getOrDie(e) {
        throw new Error(e || "error: getOrDie called on none.");
      },
      getOrNull: o(null),
      getOrUndefined: o(void 0),
      or: e,
      orThunk: a,
      map: n,
      each: function each() {},
      bind: n,
      exists: s,
      forall: i,
      filter: function filter() {
        return l;
      },
      toArray: function toArray() {
        return [];
      },
      toString: o("none()")
    };
  function a(e) {
    return e();
  }
  function u(e) {
    return e && "PRE" === e.nodeName && -1 !== e.className.indexOf("language-");
  }
  function c(t) {
    return function (e, n) {
      return t(n);
    };
  }
  var d = function d(t) {
      function e() {
        return r;
      }
      function n(e) {
        return e(t);
      }
      var a = o(t),
        r = {
          fold: function fold(e, n) {
            return n(t);
          },
          isSome: i,
          isNone: s,
          getOr: a,
          getOrThunk: a,
          getOrDie: a,
          getOrNull: a,
          getOrUndefined: a,
          or: e,
          orThunk: e,
          map: function map(e) {
            return d(e(t));
          },
          each: function each(e) {
            e(t);
          },
          bind: n,
          exists: n,
          forall: n,
          filter: function filter(e) {
            return e(t) ? r : l;
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
    p = {
      some: d,
      none: n,
      from: function from(e) {
        return null == e ? l : d(e);
      }
    },
    g = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
    r = "undefined" != typeof window ? window : Function("return this;")(),
    b = {},
    m = {
      exports: b
    },
    f = {};
  function h(e) {
    return r.Prism && e.getParam("codesample_global_prismjs", !1, "boolean") ? r.Prism : k;
  }
  function y(e) {
    var n = e.selection ? e.selection.getNode() : null;
    return u(n) ? p.some(n) : p.none();
  }
  function w(s) {
    var t,
      e,
      n = s.getParam("codesample_languages") || [{
        text: "HTML/XML",
        value: "markup"
      }, {
        text: "JavaScript",
        value: "javascript"
      }, {
        text: "CSS",
        value: "css"
      }, {
        text: "PHP",
        value: "php"
      }, {
        text: "Ruby",
        value: "ruby"
      }, {
        text: "Python",
        value: "python"
      }, {
        text: "Java",
        value: "java"
      }, {
        text: "C",
        value: "c"
      }, {
        text: "C#",
        value: "csharp"
      }, {
        text: "C++",
        value: "cpp"
      }],
      a = (0 < (e = n).length ? p.some(e[0]) : p.none()).fold(o(""), function (e) {
        return e.value;
      }),
      r = (t = a, y(s).fold(function () {
        return t;
      }, function (e) {
        var n = e.className.match(/language-(\w+)/);
        return n ? n[1] : t;
      })),
      i = y(s).fold(o(""), function (e) {
        return e.textContent;
      });
    s.windowManager.open({
      title: "Insert/Edit Code Sample",
      size: "large",
      body: {
        type: "panel",
        items: [{
          type: "selectbox",
          name: "language",
          label: "Language",
          items: n
        }, {
          type: "textarea",
          name: "code",
          label: "Code view"
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
        language: r,
        code: i
      },
      onSubmit: function onSubmit(e) {
        var n = e.getData(),
          t = s,
          a = n.language,
          r = n.code;
        t.undoManager.transact(function () {
          var e = y(t);
          return r = g.DOM.encode(r), e.fold(function () {
            t.insertContent('<pre id="__new" class="language-' + a + '">' + r + "</pre>"), t.selection.select(t.$("#__new").removeAttr("id")[0]);
          }, function (e) {
            t.dom.setAttrib(e, "class", "language-" + a), e.innerHTML = r, h(t).highlightElement(e), t.selection.select(e);
          });
        }), e.close();
      }
    });
  }
  !function (e, n) {
    var t,
      a,
      r = window.Prism;
    window.Prism = {
      manual: !0
    }, t = this, a = function a() {
      var e,
        n,
        h,
        t,
        a,
        r,
        s,
        i,
        o,
        l,
        u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : f,
        c = {
          exports: {}
        };
      function y(e, n) {
        return "___" + e.toUpperCase() + n + "___";
      }
      return e = c, n = function (u) {
        var c = /\blang(?:uage)?-([\w-]+)\b/i,
          n = 0,
          e = {},
          j = {
            manual: u.Prism && u.Prism.manual,
            disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
            util: {
              encode: function e(n) {
                return n instanceof T ? new T(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              },
              type: function type(e) {
                return Object.prototype.toString.call(e).slice(8, -1);
              },
              objId: function objId(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                  value: ++n
                }), e.__id;
              },
              clone: function t(e, a) {
                var r, n;
                switch (a = a || {}, j.util.type(e)) {
                  case "Object":
                    if (n = j.util.objId(e), a[n]) return a[n];
                    for (var s in r = {}, a[n] = r, e) e.hasOwnProperty(s) && (r[s] = t(e[s], a));
                    return r;
                  case "Array":
                    return n = j.util.objId(e), a[n] || (r = [], a[n] = r, e.forEach(function (e, n) {
                      r[n] = t(e, a);
                    }), r);
                  default:
                    return e;
                }
              },
              getLanguage: function getLanguage(e) {
                for (; e && !c.test(e.className);) e = e.parentElement;
                return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
              },
              currentScript: function currentScript() {
                if ("undefined" == typeof document) return null;
                if ("currentScript" in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (e) {
                  var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
                  if (n) {
                    var t,
                      a = document.getElementsByTagName("script");
                    for (t in a) if (a[t].src == n) return a[t];
                  }
                  return null;
                }
              },
              isActive: function isActive(e, n, t) {
                for (var a = "no-" + n; e;) {
                  var r = e.classList;
                  if (r.contains(n)) return !0;
                  if (r.contains(a)) return !1;
                  e = e.parentElement;
                }
                return !!t;
              }
            },
            languages: {
              plain: e,
              plaintext: e,
              text: e,
              txt: e,
              extend: function extend(e, n) {
                var t,
                  a = j.util.clone(j.languages[e]);
                for (t in n) a[t] = n[t];
                return a;
              },
              insertBefore: function insertBefore(t, e, n, a) {
                var r,
                  s = (a = a || j.languages)[t],
                  i = {};
                for (r in s) if (s.hasOwnProperty(r)) {
                  if (r == e) for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                  n.hasOwnProperty(r) || (i[r] = s[r]);
                }
                var l = a[t];
                return a[t] = i, j.languages.DFS(j.languages, function (e, n) {
                  n === l && e != t && (this[e] = i);
                }), i;
              },
              DFS: function e(n, t, a, r) {
                r = r || {};
                var s,
                  i,
                  o,
                  l = j.util.objId;
                for (s in n) n.hasOwnProperty(s) && (t.call(n, s, n[s], a || s), i = n[s], "Object" !== (o = j.util.type(i)) || r[l(i)] ? "Array" !== o || r[l(i)] || (r[l(i)] = !0, e(i, t, s, r)) : (r[l(i)] = !0, e(i, t, null, r)));
              }
            },
            plugins: {},
            highlightAll: function highlightAll(e, n) {
              j.highlightAllUnder(document, e, n);
            },
            highlightAllUnder: function highlightAllUnder(e, n, t) {
              var a = {
                callback: t,
                container: e,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
              };
              j.hooks.run("before-highlightall", a), a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)), j.hooks.run("before-all-elements-highlight", a);
              for (var r, s = 0; r = a.elements[s++];) j.highlightElement(r, !0 === n, a.callback);
            },
            highlightElement: function highlightElement(e, n, t) {
              var a = j.util.getLanguage(e),
                r = j.languages[a];
              e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + a;
              var s = e.parentElement;
              s && "pre" === s.nodeName.toLowerCase() && (s.className = s.className.replace(c, "").replace(/\s+/g, " ") + " language-" + a);
              var i,
                o = {
                  element: e,
                  language: a,
                  grammar: r,
                  code: e.textContent
                };
              function l(e) {
                o.highlightedCode = e, j.hooks.run("before-insert", o), o.element.innerHTML = o.highlightedCode, j.hooks.run("after-highlight", o), j.hooks.run("complete", o), t && t.call(o.element);
              }
              if (j.hooks.run("before-sanity-check", o), (s = o.element.parentElement) && "pre" === s.nodeName.toLowerCase() && !s.hasAttribute("tabindex") && s.setAttribute("tabindex", "0"), !o.code) return j.hooks.run("complete", o), void (t && t.call(o.element));
              j.hooks.run("before-highlight", o), o.grammar ? n && u.Worker ? ((i = new Worker(j.filename)).onmessage = function (e) {
                l(e.data);
              }, i.postMessage(JSON.stringify({
                language: o.language,
                code: o.code,
                immediateClose: !0
              }))) : l(j.highlight(o.code, o.grammar, o.language)) : l(j.util.encode(o.code));
            },
            highlight: function highlight(e, n, t) {
              var a = {
                code: e,
                grammar: n,
                language: t
              };
              return j.hooks.run("before-tokenize", a), a.tokens = j.tokenize(a.code, a.grammar), j.hooks.run("after-tokenize", a), T.stringify(j.util.encode(a.tokens), a.language);
            },
            tokenize: function tokenize(e, n) {
              var t = n.rest;
              if (t) {
                for (var a in t) n[a] = t[a];
                delete n.rest;
              }
              var r = new s();
              return N(r, r.head, e), function e(n, t, a, r, s, i) {
                for (var o in a) if (a.hasOwnProperty(o) && a[o]) for (var l = a[o], l = Array.isArray(l) ? l : [l], u = 0; u < l.length; ++u) {
                  if (i && i.cause == o + "," + u) return;
                  var c,
                    d = l[u],
                    p = d.inside,
                    g = !!d.lookbehind,
                    b = !!d.greedy,
                    m = d.alias;
                  b && !d.pattern.global && (c = d.pattern.toString().match(/[imsuy]*$/)[0], d.pattern = RegExp(d.pattern.source, c + "g"));
                  for (var f = d.pattern || d, h = r.next, y = s; h !== t.tail && !(i && y >= i.reach); y += h.value.length, h = h.next) {
                    var w = h.value;
                    if (t.length > n.length) return;
                    if (!(w instanceof T)) {
                      var k,
                        v = 1;
                      if (b) {
                        if (!(k = O(f, y, n, g))) break;
                        var _ = k.index,
                          x = k.index + k[0].length,
                          F = y;
                        for (F += h.value.length; F <= _;) F += (h = h.next).value.length;
                        if (y = F -= h.value.length, h.value instanceof T) continue;
                        for (var P = h; P !== t.tail && (F < x || "string" == typeof P.value); P = P.next) v++, F += P.value.length;
                        v--, w = n.slice(y, F), k.index -= y;
                      } else if (!(k = O(f, 0, w, g))) continue;
                      var _ = k.index,
                        A = k[0],
                        S = w.slice(0, _),
                        $ = w.slice(_ + A.length),
                        z = y + w.length;
                      i && z > i.reach && (i.reach = z);
                      var E = h.prev;
                      S && (E = N(t, E, S), y += S.length), function (e, n, t) {
                        for (var a = n.next, r = 0; r < t && a !== e.tail; r++) a = a.next;
                        (n.next = a).prev = n, e.length -= r;
                      }(t, E, v);
                      var C,
                        h = N(t, E, new T(o, p ? j.tokenize(A, p) : A, m, A));
                      $ && N(t, h, $), 1 < v && (e(n, t, a, h.prev, y, C = {
                        cause: o + "," + u,
                        reach: z
                      }), i && C.reach > i.reach && (i.reach = C.reach));
                    }
                  }
                }
              }(e, r, n, r.head, 0), function (e) {
                for (var n = [], t = e.head.next; t !== e.tail;) n.push(t.value), t = t.next;
                return n;
              }(r);
            },
            hooks: {
              all: {},
              add: function add(e, n) {
                var t = j.hooks.all;
                t[e] = t[e] || [], t[e].push(n);
              },
              run: function run(e, n) {
                var t = j.hooks.all[e];
                if (t && t.length) for (var a, r = 0; a = t[r++];) a(n);
              }
            },
            Token: T
          };
        function T(e, n, t, a) {
          this.type = e, this.content = n, this.alias = t, this.length = 0 | (a || "").length;
        }
        function O(e, n, t, a) {
          e.lastIndex = n;
          var r,
            s = e.exec(t);
          return s && a && s[1] && (r = s[1].length, s.index += r, s[0] = s[0].slice(r)), s;
        }
        function s() {
          var e = {
              value: null,
              prev: null,
              next: null
            },
            n = {
              value: null,
              prev: e,
              next: null
            };
          e.next = n, this.head = e, this.tail = n, this.length = 0;
        }
        function N(e, n, t) {
          var a = n.next,
            r = {
              value: t,
              prev: n,
              next: a
            };
          return n.next = r, a.prev = r, e.length++, r;
        }
        if (u.Prism = j, T.stringify = function n(e, t) {
          if ("string" == typeof e) return e;
          if (Array.isArray(e)) {
            var a = "";
            return e.forEach(function (e) {
              a += n(e, t);
            }), a;
          }
          var r = {
              type: e.type,
              content: n(e.content, t),
              tag: "span",
              classes: ["token", e.type],
              attributes: {},
              language: t
            },
            s = e.alias;
          s && (Array.isArray(s) ? Array.prototype.push.apply(r.classes, s) : r.classes.push(s)), j.hooks.run("wrap", r);
          var i,
            o = "";
          for (i in r.attributes) o += " " + i + '="' + (r.attributes[i] || "").replace(/"/g, "&quot;") + '"';
          return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + o + ">" + r.content + "</" + r.tag + ">";
        }, !u.document) return u.addEventListener && (j.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
          var n = JSON.parse(e.data),
            t = n.language,
            a = n.code,
            r = n.immediateClose;
          u.postMessage(j.highlight(a, j.languages[t], t)), r && u.close();
        }, !1)), j;
        var t,
          a = j.util.currentScript();
        function r() {
          j.manual || j.highlightAll();
        }
        return a && (j.filename = a.src, a.hasAttribute("data-manual") && (j.manual = !0)), j.manual || ("loading" === (t = document.readyState) || "interactive" === t && a && a.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16)), j;
      }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}), e.exports && (e.exports = n), void 0 !== u && (u.Prism = n), Prism.languages.clike = {
        comment: [{
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        }, {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }],
        string: {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: !0
        },
        "class-name": {
          pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: !0,
          inside: {
            punctuation: /[.\\]/
          }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        "boolean": /\b(?:true|false)\b/,
        "function": /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
      }, h = Prism, Object.defineProperties(h.languages["markup-templating"] = {}, {
        buildPlaceholders: {
          value: function value(a, r, e, s) {
            var i;
            a.language === r && (i = a.tokenStack = [], a.code = a.code.replace(e, function (e) {
              if ("function" == typeof s && !s(e)) return e;
              for (var n, t = i.length; -1 !== a.code.indexOf(n = y(r, t));) ++t;
              return i[t] = e, n;
            }), a.grammar = h.languages.markup);
          }
        },
        tokenizePlaceholders: {
          value: function value(g, b) {
            var m, f;
            g.language === b && g.tokenStack && (g.grammar = h.languages[b], m = 0, f = Object.keys(g.tokenStack), function e(n) {
              for (var t = 0; t < n.length && !(m >= f.length); t++) {
                var a,
                  r,
                  s,
                  i,
                  o,
                  l,
                  u,
                  c,
                  d,
                  p = n[t];
                "string" == typeof p || p.content && "string" == typeof p.content ? (a = f[m], r = g.tokenStack[a], s = "string" == typeof p ? p : p.content, i = y(b, a), -1 < (o = s.indexOf(i)) && (++m, l = s.substring(0, o), u = new h.Token(b, h.tokenize(r, g.grammar), "language-" + b, r), c = s.substring(o + i.length), d = [], l && d.push.apply(d, e([l])), d.push(u), c && d.push.apply(d, e([c])), "string" == typeof p ? n.splice.apply(n, [t, 1].concat(d)) : p.content = d)) : p.content && e(p.content);
              }
              return n;
            }(g.tokens));
          }
        }
      }), Prism.languages.c = Prism.languages.extend("clike", {
        comment: {
          pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
          greedy: !0
        },
        "class-name": {
          pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
          lookbehind: !0
        },
        keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
        "function": /\b[a-z_]\w*(?=\s*\()/i,
        number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
        operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
      }), Prism.languages.insertBefore("c", "string", {
        macro: {
          pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
          lookbehind: !0,
          greedy: !0,
          alias: "property",
          inside: {
            string: [{
              pattern: /^(#\s*include\s*)<[^>]+>/,
              lookbehind: !0
            }, Prism.languages.c.string],
            comment: Prism.languages.c.comment,
            "macro-name": [{
              pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
              lookbehind: !0
            }, {
              pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
              lookbehind: !0,
              alias: "function"
            }],
            directive: {
              pattern: /^(#\s*)[a-z]+/,
              lookbehind: !0,
              alias: "keyword"
            },
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: {
              pattern: /\S[\s\S]*/,
              inside: Prism.languages.c
            }
          }
        },
        constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
      }), delete Prism.languages.c["boolean"], t = Prism, a = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, r = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
        return a.source;
      }), t.languages.cpp = t.languages.extend("c", {
        "class-name": [{
          pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
            return a.source;
          })),
          lookbehind: !0
        }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
        keyword: a,
        number: {
          pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
          greedy: !0
        },
        operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        "boolean": /\b(?:true|false)\b/
      }), t.languages.insertBefore("cpp", "string", {
        module: {
          pattern: RegExp(/(\b(?:module|import)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
            return r;
          }) + ")"),
          lookbehind: !0,
          greedy: !0,
          inside: {
            string: /^[<"][\s\S]+/,
            operator: /:/,
            punctuation: /\./
          }
        },
        "raw-string": {
          pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
          alias: "string",
          greedy: !0
        }
      }), t.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
          pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
          inside: {
            "function": /^\w+/,
            generic: {
              pattern: /<[\s\S]+/,
              alias: "class-name",
              inside: t.languages.cpp
            }
          }
        }
      }), t.languages.insertBefore("cpp", "operator", {
        "double-colon": {
          pattern: /::/,
          alias: "punctuation"
        }
      }), t.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
          pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
          lookbehind: !0,
          greedy: !0,
          inside: t.languages.extend("cpp", {})
        }
      }), t.languages.insertBefore("inside", "double-colon", {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
      }, t.languages.cpp["base-clause"]), function (t) {
        function a(e, t) {
          return e.replace(/<<(\d+)>>/g, function (e, n) {
            return "(?:" + t[+n] + ")";
          });
        }
        function r(e, n, t) {
          return RegExp(a(e, n), t || "");
        }
        function e(e, n) {
          for (var t = 0; t < n; t++) e = e.replace(/<<self>>/g, function () {
            return "(?:" + e + ")";
          });
          return e.replace(/<<self>>/g, "[^\\s\\S]");
        }
        var n = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
          s = "class enum interface record struct",
          i = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
          o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
        function l(e) {
          return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
        }
        var u = l(s),
          c = RegExp(l(n + " " + s + " " + i + " " + o)),
          d = l(s + " " + i + " " + o),
          p = l(n + " " + s + " " + o),
          g = e(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2),
          b = e(/\((?:[^()]|<<self>>)*\)/.source, 2),
          m = /@?\b[A-Za-z_]\w*\b/.source,
          f = a(/<<0>>(?:\s*<<1>>)?/.source, [m, g]),
          h = a(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [d, f]),
          y = /\[\s*(?:,\s*)*\]/.source,
          w = a(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [h, y]),
          k = a(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [g, b, y]),
          v = a(/\(<<0>>+(?:,<<0>>+)+\)/.source, [k]),
          _ = a(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [v, h, y]),
          x = {
            keyword: c,
            punctuation: /[<>()?,.:[\]]/
          },
          F = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,
          P = /"(?:\\.|[^\\"\r\n])*"/.source;
        t.languages.csharp = t.languages.extend("clike", {
          string: [{
            pattern: r(/(^|[^$\\])<<0>>/.source, [/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source]),
            lookbehind: !0,
            greedy: !0
          }, {
            pattern: r(/(^|[^@$\\])<<0>>/.source, [P]),
            lookbehind: !0,
            greedy: !0
          }, {
            pattern: RegExp(F),
            greedy: !0,
            alias: "character"
          }],
          "class-name": [{
            pattern: r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [h]),
            lookbehind: !0,
            inside: x
          }, {
            pattern: r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [m, _]),
            lookbehind: !0,
            inside: x
          }, {
            pattern: r(/(\busing\s+)<<0>>(?=\s*=)/.source, [m]),
            lookbehind: !0
          }, {
            pattern: r(/(\b<<0>>\s+)<<1>>/.source, [u, f]),
            lookbehind: !0,
            inside: x
          }, {
            pattern: r(/(\bcatch\s*\(\s*)<<0>>/.source, [h]),
            lookbehind: !0,
            inside: x
          }, {
            pattern: r(/(\bwhere\s+)<<0>>/.source, [m]),
            lookbehind: !0
          }, {
            pattern: r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [w]),
            lookbehind: !0,
            inside: x
          }, {
            pattern: r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [_, p, m]),
            inside: x
          }],
          keyword: c,
          number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
          operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
          punctuation: /\?\.?|::|[{}[\];(),.:]/
        }), t.languages.insertBefore("csharp", "number", {
          range: {
            pattern: /\.\./,
            alias: "operator"
          }
        }), t.languages.insertBefore("csharp", "punctuation", {
          "named-parameter": {
            pattern: r(/([(,]\s*)<<0>>(?=\s*:)/.source, [m]),
            lookbehind: !0,
            alias: "punctuation"
          }
        }), t.languages.insertBefore("csharp", "class-name", {
          namespace: {
            pattern: r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [m]),
            lookbehind: !0,
            inside: {
              punctuation: /\./
            }
          },
          "type-expression": {
            pattern: r(/(\b(?:default|typeof|sizeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [b]),
            lookbehind: !0,
            alias: "class-name",
            inside: x
          },
          "return-type": {
            pattern: r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [_, h]),
            inside: x,
            alias: "class-name"
          },
          "constructor-invocation": {
            pattern: r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [_]),
            lookbehind: !0,
            inside: x,
            alias: "class-name"
          },
          "generic-method": {
            pattern: r(/<<0>>\s*<<1>>(?=\s*\()/.source, [m, g]),
            inside: {
              "function": r(/^<<0>>/.source, [m]),
              generic: {
                pattern: RegExp(g),
                alias: "class-name",
                inside: x
              }
            }
          },
          "type-list": {
            pattern: r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [u, f, m, _, c.source, b, /\bnew\s*\(\s*\)/.source]),
            lookbehind: !0,
            inside: {
              "record-arguments": {
                pattern: r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [f, b]),
                lookbehind: !0,
                greedy: !0,
                inside: t.languages.csharp
              },
              keyword: c,
              "class-name": {
                pattern: RegExp(_),
                greedy: !0,
                inside: x
              },
              punctuation: /[,()]/
            }
          },
          preprocessor: {
            pattern: /(^[\t ]*)#.*/m,
            lookbehind: !0,
            alias: "property",
            inside: {
              directive: {
                pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                lookbehind: !0,
                alias: "keyword"
              }
            }
          }
        });
        var A = P + "|" + F,
          S = a(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [A]),
          $ = e(a(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [S]), 2),
          z = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,
          E = a(/<<0>>(?:\s*\(<<1>>*\))?/.source, [h, $]);
        t.languages.insertBefore("csharp", "class-name", {
          attribute: {
            pattern: r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [z, E]),
            lookbehind: !0,
            greedy: !0,
            inside: {
              target: {
                pattern: r(/^<<0>>(?=\s*:)/.source, [z]),
                alias: "keyword"
              },
              "attribute-arguments": {
                pattern: r(/\(<<0>>*\)/.source, [$]),
                inside: t.languages.csharp
              },
              "class-name": {
                pattern: RegExp(h),
                inside: {
                  punctuation: /\./
                }
              },
              punctuation: /[:,]/
            }
          }
        });
        var C = /:[^}\r\n]+/.source,
          j = e(a(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [S]), 2),
          T = a(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [j, C]),
          O = e(a(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [A]), 2),
          N = a(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [O, C]);
        function B(e, n) {
          return {
            interpolation: {
              pattern: r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [e]),
              lookbehind: !0,
              inside: {
                "format-string": {
                  pattern: r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [n, C]),
                  lookbehind: !0,
                  inside: {
                    punctuation: /^:/
                  }
                },
                punctuation: /^\{|\}$/,
                expression: {
                  pattern: /[\s\S]+/,
                  alias: "language-csharp",
                  inside: t.languages.csharp
                }
              }
            },
            string: /[\s\S]+/
          };
        }
        t.languages.insertBefore("csharp", "string", {
          "interpolation-string": [{
            pattern: r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [T]),
            lookbehind: !0,
            greedy: !0,
            inside: B(T, j)
          }, {
            pattern: r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [N]),
            lookbehind: !0,
            greedy: !0,
            inside: B(N, O)
          }]
        });
      }(Prism), Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp, function (e) {
        var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        e.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
              rule: /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: "selector"
              },
              keyword: {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: !0
              }
            }
          },
          url: {
            pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: !0,
            inside: {
              "function": /^url/i,
              punctuation: /^\(|\)$/,
              string: {
                pattern: RegExp("^" + n.source + "$"),
                alias: "url"
              }
            }
          },
          selector: {
            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + n.source + ")*(?=\\s*\\{)"),
            lookbehind: !0
          },
          string: {
            pattern: n,
            greedy: !0
          },
          property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
          },
          important: /!important\b/i,
          "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
          },
          punctuation: /[(){};:,]/
        }, e.languages.css.atrule.inside.rest = e.languages.css;
        var t = e.languages.markup;
        t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
      }(Prism), s = Prism, i = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, o = /(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, l = {
        pattern: RegExp(o + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
        lookbehind: !0,
        inside: {
          namespace: {
            pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
            inside: {
              punctuation: /\./
            }
          },
          punctuation: /\./
        }
      }, s.languages.java = s.languages.extend("clike", {
        "class-name": [l, {
          pattern: RegExp(o + /[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),
          lookbehind: !0,
          inside: l.inside
        }],
        keyword: i,
        "function": [s.languages.clike["function"], {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: !0
        }],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
          pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
          lookbehind: !0
        }
      }), s.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
          pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
          greedy: !0,
          alias: "string"
        }
      }), s.languages.insertBefore("java", "class-name", {
        annotation: {
          pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
          lookbehind: !0,
          alias: "punctuation"
        },
        generics: {
          pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
          inside: {
            "class-name": l,
            keyword: i,
            punctuation: /[<>(),.:]/,
            operator: /[?&|]/
          }
        },
        namespace: {
          pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function () {
            return i.source;
          })),
          lookbehind: !0,
          inside: {
            punctuation: /\./
          }
        }
      }), Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [Prism.languages.clike["class-name"], {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
          lookbehind: !0
        }],
        keyword: [{
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        }, {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }],
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
          pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: !0,
              alias: "language-regex",
              inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        parameter: [{
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: Prism.languages.javascript
        }, {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: Prism.languages.javascript
        }, {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: Prism.languages.javascript
        }, {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: Prism.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      }), Prism.languages.insertBefore("javascript", "string", {
        hashbang: {
          pattern: /^#!.*/,
          greedy: !0,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: !0,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: !0,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism.languages.javascript
              }
            },
            string: /[\s\S]+/
          }
        }
      }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript, Prism.languages.markup = {
        comment: {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: !0
        },
        prolog: {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: !0
        },
        doctype: {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: !0,
              greedy: !0,
              inside: null
            },
            string: {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
          }
        },
        cdata: {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: !0
        },
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                punctuation: /^<\/?/,
                namespace: /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [{
                  pattern: /^=/,
                  alias: "attr-equals"
                }, /"|'/]
              }
            },
            punctuation: /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                namespace: /^[^\s>\/:]+:/
              }
            }
          }
        },
        entity: [{
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        }, /&#x?[\da-f]{1,8};/i]
      }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
      }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        value: function value(e, n) {
          var t = {};
          t["language-" + n] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[n]
          }, t.cdata = /^<!\[CDATA\[|\]\]>$/i;
          var a = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: t
            }
          };
          a["language-" + n] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[n]
          };
          var r = {};
          r[e] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
              return e;
            }), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: a
          }, Prism.languages.insertBefore("markup", "cdata", r);
        }
      }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        value: function value(e, n) {
          Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
            lookbehind: !0,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  value: {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: !0,
                    alias: [n, "language-" + n],
                    inside: Prism.languages[n]
                  },
                  punctuation: [{
                    pattern: /^=/,
                    alias: "attr-equals"
                  }, /"|'/]
                }
              }
            }
          });
        }
      }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, function (n) {
        var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
          t = [{
            pattern: /\b(?:false|true)\b/i,
            alias: "boolean"
          }, {
            pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
            greedy: !0,
            lookbehind: !0
          }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
          a = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          r = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
          s = /[{}\[\](),:;]/;
        n.languages.php = {
          delimiter: {
            pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
            alias: "important"
          },
          comment: e,
          variable: /\$+(?:\w+\b|(?=\{))/i,
          "package": {
            pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            lookbehind: !0,
            inside: {
              punctuation: /\\/
            }
          },
          "class-name-definition": {
            pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
            lookbehind: !0,
            alias: "class-name"
          },
          "function-definition": {
            pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
            lookbehind: !0,
            alias: "function"
          },
          keyword: [{
            pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i,
            alias: "type-casting",
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i,
            alias: "type-hint",
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i,
            alias: "type-hint",
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i,
            alias: "return-type",
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i,
            alias: "return-type",
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i,
            alias: "type-declaration",
            greedy: !0
          }, {
            pattern: /(\|\s*)(?:null|false)\b/i,
            alias: "type-declaration",
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /\b(?:parent|self|static)(?=\s*::)/i,
            alias: "static-context",
            greedy: !0
          }, {
            pattern: /(\byield\s+)from\b/i,
            lookbehind: !0
          }, /\bclass\b/i, {
            pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
            lookbehind: !0
          }],
          "argument-name": {
            pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,
            lookbehind: !0
          },
          "class-name": [{
            pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
            greedy: !0
          }, {
            pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            lookbehind: !0,
            inside: {
              punctuation: /\\/
            }
          }, {
            pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            inside: {
              punctuation: /\\/
            }
          }, {
            pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            lookbehind: !0,
            inside: {
              punctuation: /\\/
            }
          }, {
            pattern: /\b[a-z_]\w*(?=\s*\$)/i,
            alias: "type-declaration",
            greedy: !0
          }, {
            pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
            alias: ["class-name-fully-qualified", "type-declaration"],
            greedy: !0,
            inside: {
              punctuation: /\\/
            }
          }, {
            pattern: /\b[a-z_]\w*(?=\s*::)/i,
            alias: "static-context",
            greedy: !0
          }, {
            pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
            alias: ["class-name-fully-qualified", "static-context"],
            greedy: !0,
            inside: {
              punctuation: /\\/
            }
          }, {
            pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
            alias: "type-hint",
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
            alias: ["class-name-fully-qualified", "type-hint"],
            greedy: !0,
            lookbehind: !0,
            inside: {
              punctuation: /\\/
            }
          }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
            alias: "return-type",
            greedy: !0,
            lookbehind: !0
          }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            alias: ["class-name-fully-qualified", "return-type"],
            greedy: !0,
            lookbehind: !0,
            inside: {
              punctuation: /\\/
            }
          }],
          constant: t,
          "function": {
            pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
            lookbehind: !0,
            inside: {
              punctuation: /\\/
            }
          },
          property: {
            pattern: /(->\s*)\w+/,
            lookbehind: !0
          },
          number: a,
          operator: r,
          punctuation: s
        };
        var i = {
            pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
            lookbehind: !0,
            inside: n.languages.php
          },
          o = [{
            pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
            alias: "nowdoc-string",
            greedy: !0,
            inside: {
              delimiter: {
                pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                alias: "symbol",
                inside: {
                  punctuation: /^<<<'?|[';]$/
                }
              }
            }
          }, {
            pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
              delimiter: {
                pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                alias: "symbol",
                inside: {
                  punctuation: /^<<<"?|[";]$/
                }
              },
              interpolation: i
            }
          }, {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            alias: "backtick-quoted-string",
            greedy: !0
          }, {
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            alias: "single-quoted-string",
            greedy: !0
          }, {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            alias: "double-quoted-string",
            greedy: !0,
            inside: {
              interpolation: i
            }
          }];
        n.languages.insertBefore("php", "variable", {
          string: o,
          attribute: {
            pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
            greedy: !0,
            inside: {
              "attribute-content": {
                pattern: /^(#\[)[\s\S]+(?=\]$)/,
                lookbehind: !0,
                inside: {
                  comment: e,
                  string: o,
                  "attribute-class-name": [{
                    pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                    alias: "class-name",
                    greedy: !0,
                    lookbehind: !0
                  }, {
                    pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                    alias: ["class-name", "class-name-fully-qualified"],
                    greedy: !0,
                    lookbehind: !0,
                    inside: {
                      punctuation: /\\/
                    }
                  }],
                  constant: t,
                  number: a,
                  operator: r,
                  punctuation: s
                }
              },
              delimiter: {
                pattern: /^#\[|\]$/,
                alias: "punctuation"
              }
            }
          }
        }), n.hooks.add("before-tokenize", function (e) {
          /<\?/.test(e.code) && n.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi);
        }), n.hooks.add("after-tokenize", function (e) {
          n.languages["markup-templating"].tokenizePlaceholders(e, "php");
        });
      }(Prism), Prism.languages.python = {
        comment: {
          pattern: /(^|[^\\])#.*/,
          lookbehind: !0
        },
        "string-interpolation": {
          pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
          greedy: !0,
          inside: {
            interpolation: {
              pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
              lookbehind: !0,
              inside: {
                "format-spec": {
                  pattern: /(:)[^:(){}]+(?=\}$)/,
                  lookbehind: !0
                },
                "conversion-option": {
                  pattern: /![sra](?=[:}]$)/,
                  alias: "punctuation"
                },
                rest: null
              }
            },
            string: /[\s\S]+/
          }
        },
        "triple-quoted-string": {
          pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
          greedy: !0,
          alias: "string"
        },
        string: {
          pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
          greedy: !0
        },
        "function": {
          pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
          lookbehind: !0
        },
        "class-name": {
          pattern: /(\bclass\s+)\w+/i,
          lookbehind: !0
        },
        decorator: {
          pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im,
          lookbehind: !0,
          alias: ["annotation", "punctuation"],
          inside: {
            punctuation: /\./
          }
        },
        keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
        builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        "boolean": /\b(?:True|False|None)\b/,
        number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?\b/i,
        operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
        punctuation: /[{}[\];(),.:]/
      }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python, function (e) {
        e.languages.ruby = e.languages.extend("clike", {
          comment: [/#.*/, {
            pattern: /^=begin\s[\s\S]*?^=end/m,
            greedy: !0
          }],
          "class-name": {
            pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
              punctuation: /[.\\]/
            }
          },
          keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
        });
        var n = {
          pattern: /#\{[^}]+\}/,
          inside: {
            delimiter: {
              pattern: /^#\{|\}$/,
              alias: "tag"
            },
            rest: e.languages.ruby
          }
        };
        delete e.languages.ruby["function"], e.languages.insertBefore("ruby", "keyword", {
          regex: [{
            pattern: RegExp(/%r/.source + "(?:" + [/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /\((?:[^()\\]|\\[\s\S])*\)/.source, /\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source, /\[(?:[^\[\]\\]|\\[\s\S])*\]/.source, /<(?:[^<>\\]|\\[\s\S])*>/.source].join("|") + ")" + /[egimnosux]{0,6}/.source),
            greedy: !0,
            inside: {
              interpolation: n
            }
          }, {
            pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              interpolation: n
            }
          }],
          variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
          symbol: {
            pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
            lookbehind: !0
          },
          "method-definition": {
            pattern: /(\bdef\s+)[\w.]+/,
            lookbehind: !0,
            inside: {
              "function": /\w+$/,
              rest: e.languages.ruby
            }
          }
        }), e.languages.insertBefore("ruby", "number", {
          builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
          constant: /\b[A-Z]\w*(?:[?!]|\b)/
        }), e.languages.ruby.string = [{
          pattern: RegExp(/%[qQiIwWxs]?/.source + "(?:" + [/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /\((?:[^()\\]|\\[\s\S])*\)/.source, /\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/.source, /\[(?:[^\[\]\\]|\\[\s\S])*\]/.source, /<(?:[^<>\\]|\\[\s\S])*>/.source].join("|") + ")"),
          greedy: !0,
          inside: {
            interpolation: n
          }
        }, {
          pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
          greedy: !0,
          inside: {
            interpolation: n
          }
        }, {
          pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: "heredoc-string",
          greedy: !0,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?[a-z_]\w*|[a-z_]\w*$/i,
              alias: "symbol",
              inside: {
                punctuation: /^<<[-~]?/
              }
            },
            interpolation: n
          }
        }, {
          pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: "heredoc-string",
          greedy: !0,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?'[a-z_]\w*'|[a-z_]\w*$/i,
              alias: "symbol",
              inside: {
                punctuation: /^<<[-~]?'|'$/
              }
            }
          }
        }], e.languages.rb = e.languages.ruby;
      }(Prism), {
        boltExport: c.exports
      };
    }, "object" == _typeof(e) && void 0 !== n ? n.exports = a() : (t = "undefined" != typeof globalThis ? globalThis : t || self).EphoxContactWrapper = a();
    window.Prism;
    window.Prism = r;
  }(b, m);
  var k = m.exports.boltExport;
  t.add("codesample", function (n) {
    var t, r, a, s;
    function e() {
      return s.execCommand("codesample");
    }
    r = (t = n).$, t.on("PreProcess", function (e) {
      r("pre[contenteditable=false]", e.node).filter(c(u)).each(function (e, n) {
        var t = r(n),
          a = n.textContent;
        t.attr("class", r.trim(t.attr("class"))), t.removeAttr("contentEditable"), t.empty().append(r("<code></code>").each(function () {
          this.textContent = a;
        }));
      });
    }), t.on("SetContent", function () {
      var e = r("pre").filter(c(u)).filter(function (e, n) {
        return "false" !== n.contentEditable;
      });
      e.length && t.undoManager.transact(function () {
        e.each(function (e, n) {
          r(n).find("br").each(function (e, n) {
            n.parentNode.replaceChild(t.getDoc().createTextNode("\n"), n);
          }), n.contentEditable = "false", n.innerHTML = t.dom.encode(n.textContent), h(t).highlightElement(n), n.className = r.trim(n.className);
        });
      });
    }), (s = n).ui.registry.addToggleButton("codesample", {
      icon: "code-sample",
      tooltip: "Insert/edit code sample",
      onAction: e,
      onSetup: function onSetup(t) {
        function e() {
          var e, n;
          t.setActive((n = (e = s).selection.getStart(), e.dom.is(n, 'pre[class*="language-"]')));
        }
        return s.on("NodeChange", e), function () {
          return s.off("NodeChange", e);
        };
      }
    }), s.ui.registry.addMenuItem("codesample", {
      text: "Code sample...",
      icon: "code-sample",
      onAction: e
    }), (a = n).addCommand("codesample", function () {
      var e = a.selection.getNode();
      a.selection.isCollapsed() || u(e) ? w(a) : a.formatter.toggle("code");
    }), n.on("dblclick", function (e) {
      u(e.target) && w(n);
    });
  });
}();
/*__ESM_BODY_END__*/