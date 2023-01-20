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

  function l(t) {
    return t.getParam("noneditable_noneditable_class", "mceNonEditable");
  }
  function u(e) {
    return function (t) {
      return -1 !== (" " + t.attr("class") + " ").indexOf(e);
    };
  }
  function e(e) {
    var t,
      r = "contenteditable",
      n = " " + f.trim(e.getParam("noneditable_editable_class", "mceEditable")) + " ",
      a = " " + f.trim(l(e)) + " ",
      i = u(n),
      o = u(a),
      c = (t = e.getParam("noneditable_regexp", [])) && t.constructor === RegExp ? [t] : t;
    e.on("PreInit", function () {
      0 < c.length && e.on("BeforeSetContent", function (t) {
        !function (t, e, n) {
          var r = e.length,
            a = n.content;
          if ("raw" !== n.format) {
            for (; r--;) a = a.replace(e[r], function (i, o, c) {
              return function (t) {
                var e = arguments,
                  n = e[e.length - 2],
                  r = 0 < n ? o.charAt(n - 1) : "";
                if ('"' === r) return t;
                if (">" === r) {
                  var a = o.lastIndexOf("<", n);
                  if (-1 !== a && -1 !== o.substring(a, n).indexOf('contenteditable="false"')) return t;
                }
                return '<span class="' + c + '" data-mce-content="' + i.dom.encode(e[0]) + '">' + i.dom.encode("string" == typeof e[1] ? e[1] : e[0]) + "</span>";
              };
            }(t, a, l(t)));
            n.content = a;
          }
        }(e, c, t);
      }), e.parser.addAttributeFilter("class", function (t) {
        for (var e, n = t.length; n--;) e = t[n], i(e) ? e.attr(r, "true") : o(e) && e.attr(r, "false");
      }), e.serializer.addAttributeFilter(r, function (t) {
        for (var e, n = t.length; n--;) e = t[n], (i(e) || o(e)) && (0 < c.length && e.attr("data-mce-content") ? (e.name = "#text", e.type = 3, e.raw = !0, e.value = e.attr("data-mce-content")) : e.attr(r, null));
      });
    });
  }
  var t = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    f = tinymce.util.Tools.resolve("tinymce.util.Tools");
  t.add("noneditable", function (t) {
    e(t);
  });
}();
/*__ESM_BODY_END__*/