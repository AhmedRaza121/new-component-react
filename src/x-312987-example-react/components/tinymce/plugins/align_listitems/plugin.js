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

  tinymce.util.Tools.resolve("tinymce.PluginManager").add("align_listitems", function (e) {
    function r(t) {
      return t ? e.dom.setStyle(t, "list-style-position", "inside") : null;
    }
    e.on("ExecCommand", function (t) {
      var e,
        n = t.command,
        o = t.target;
      switch (n) {
        case "InsertOrderedList":
          e = "ol";
          break;
        case "InsertUnorderedList":
          e = "ul";
          break;
        default:
          return;
      }
      r(o.selection.getStart().closest(e));
    }), e.on("PastePostProcess", function (t) {
      !function (t, e) {
        for (var n, o = 0, r = e.length; o < r; o++) !n && o in e || ((n = n || Array.prototype.slice.call(e, 0, o))[o] = e[o]);
        return t.concat(n || Array.prototype.slice.call(e));
      }([], t.node.querySelectorAll("ol,ul"), !0).forEach(r);
    });
  });
}();
/*__ESM_BODY_END__*/