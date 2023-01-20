"use strict";

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

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager");
  function i(t, e, n) {
    if (n || 2 === arguments.length) for (var r, o = 0, l = e.length; o < l; o++) !r && o in e || ((r = r || Array.prototype.slice.call(e, 0, o))[o] = e[o]);
    return t.concat(r || Array.prototype.slice.call(e));
  }
  function n(t) {
    return t.replace(e, "").trim();
  }
  function z(t, e) {
    return n(t) === n(e);
  }
  function P(t) {
    return Math.round(72 * parseInt(t, 10) / 96) + "pt";
  }
  function T(t, e, n) {
    var r = n.createRng();
    r.selectNodeContents(t), r.setEndBefore(e);
    var o = r.cloneContents(),
      l = null;
    return o.textContent.length && (1 === o.childNodes.length && 1 === o.childElementCount ? l = t.firstElementChild : (l = n.create("span"), r.surroundContents(l))), l;
  }
  function r(t) {
    var o,
      e,
      n,
      r,
      l,
      i,
      s,
      c,
      a,
      f,
      u,
      d,
      g,
      h,
      m,
      y,
      S,
      p,
      C,
      E = t.target,
      v = t.command,
      x = t.value;
    "FontSize" === v ? (l = x, m = E.dom, S = [], (C = (p = (y = E.selection).getSelectedBlocks()).filter(function (t) {
      return m.is(t, "li");
    })).length && (i = y.getStart(), (s = m.getParent(i, "li")) && 1 === C.length && z(s.innerText, y.getContent({
      format: "text"
    })) && S.push(s), 1 < p.length && (c = y.getRng().cloneRange(), s && ((a = m.createRng()).selectNodeContents(s), a.compareBoundaryPoints(c.END_TO_END, c) < 0 ? (f = T(s, y.getStart(), m)) && (u = P(m.win.getComputedStyle(f).fontSize), m.setStyle(f, "font-size", u)) : C.shift()), d = y.getEnd(), (g = m.getParent(d, "li")) && s !== g && ((h = m.createRng()).selectNodeContents(g), c.setStart(h.startContainer, h.startOffset), z(g.innerText, c.cloneContents().textContent) || C.pop()), S = C), S.forEach(function (t) {
      return m.setStyle(t, "font-size", l);
    }))) : "InsertOrderedList" !== v && "InsertUnorderedList" !== v || (o = E.dom, (r = (n = (e = E.selection.getSelectedBlocks()).filter(function (t) {
      return o.is(t, "li");
    }))[0].querySelector('span[data-mce-type="format-caret"] > span')) ? o.setStyle(n[0], "font-size", o.getStyle(r, "font-size")) : e.filter(function (t) {
      return t.lastChild === t.lastElementChild;
    }).forEach(function (t) {
      var e,
        n,
        r = o.getStyle(t.lastElementChild, "font-size");
      r && ((e = T(t, t.lastElementChild, o)) && (n = P(o.win.getComputedStyle(e).fontSize), o.setStyle(e, "font-size", n)), o.setStyle(t, "font-size", r));
    }));
  }
  var e = /[\u200B-\u200D\uFEFF]/g;
  t.add("listitem_fix", function (t) {
    var e, n;
    (e = t).on("ExecCommand", r), e.on("PastePostProcess", (n = e, function (t) {
      var l = n.dom;
      i([], t.node.querySelectorAll("li"), !0).filter(function (t) {
        return t.children.length;
      }).forEach(function (t) {
        for (var e, n = i([], t.querySelectorAll(":first-child"), !0), r = 0; r < n.length; ++r) {
          var o = n[r];
          if (l.is(o, "li")) return;
          if (l.is(o, "span")) {
            e = o;
            break;
          }
        }
        e && (t.style.cssText = e.style.cssText, l.replace(l.create("text", {}, e.innerHTML), e));
      });
    }));
  });
}();
/*__ESM_BODY_END__*/