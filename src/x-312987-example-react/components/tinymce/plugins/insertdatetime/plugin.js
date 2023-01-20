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

  function l(e) {
    return e.getParam("insertdatetime_timeformat", e.translate("%H:%M:%S"));
  }
  function s(e) {
    return e.getParam("insertdatetime_formats", ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"]);
  }
  function r(e, t) {
    if ((e = "" + e).length < t) for (var n = 0; n < t - e.length; n++) e = "0" + e;
    return e;
  }
  function d(e, t, n) {
    return void 0 === n && (n = new Date()), (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace("%D", "%m/%d/%Y")).replace("%r", "%I:%M:%S %p")).replace("%Y", "" + n.getFullYear())).replace("%y", "" + n.getYear())).replace("%m", r(n.getMonth() + 1, 2))).replace("%d", r(n.getDate(), 2))).replace("%H", "" + r(n.getHours(), 2))).replace("%M", "" + r(n.getMinutes(), 2))).replace("%S", "" + r(n.getSeconds(), 2))).replace("%I", "" + ((n.getHours() + 11) % 12 + 1))).replace("%p", n.getHours() < 12 ? "AM" : "PM")).replace("%B", "" + e.translate(u[n.getMonth()]))).replace("%b", "" + e.translate(o[n.getMonth()]))).replace("%A", "" + e.translate(i[n.getDay()]))).replace("%a", "" + e.translate(a[n.getDay()]))).replace("%%", "%");
  }
  function p(e, t) {
    var n, r, a, i, o, u;
    e.getParam("insertdatetime_element", !1) ? (n = d(e, t), r = /%[HMSIp]/.test(t) ? d(e, "%Y-%m-%dT%H:%M") : d(e, "%Y-%m-%d"), (a = e.dom.getParent(e.selection.getStart(), "time")) ? (o = a, u = (i = e).dom.create("time", {
      datetime: r
    }, n), o.parentNode.insertBefore(u, o), i.dom.remove(o), i.selection.select(u, !0), i.selection.collapse(!1)) : e.insertContent('<time datetime="' + r + '">' + n + "</time>")) : e.insertContent(d(e, t));
  }
  var e = tinymce.util.Tools.resolve("tinymce.PluginManager"),
    a = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),
    i = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),
    o = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    u = "January February March April May June July August September October November December".split(" "),
    g = tinymce.util.Tools.resolve("tinymce.util.Tools");
  e.add("insertdatetime", function (e) {
    var n, r, t, a, i, o, u, c;
    function m(e) {
      return r.execCommand("mceInsertDate", !1, e);
    }
    (n = e).addCommand("mceInsertDate", function (e, t) {
      p(n, null != t ? t : n.getParam("insertdatetime_dateformat", n.translate("%Y-%m-%d")));
    }), n.addCommand("mceInsertTime", function (e, t) {
      p(n, null != t ? t : l(n));
    }), u = s(r = e), t = 0 < (o = s(i = r)).length ? o[0] : l(i), a = t, c = {
      get: function get() {
        return a;
      },
      set: function set(e) {
        a = e;
      }
    }, r.ui.registry.addSplitButton("insertdatetime", {
      icon: "insert-time",
      tooltip: "Insert date/time",
      select: function select(e) {
        return e === c.get();
      },
      fetch: function fetch(e) {
        e(g.map(u, function (e) {
          return {
            type: "choiceitem",
            text: d(r, e),
            value: e
          };
        }));
      },
      onAction: function onAction(e) {
        m(c.get());
      },
      onItemAction: function onItemAction(e, t) {
        c.set(t), m(t);
      }
    }), r.ui.registry.addNestedMenuItem("insertdatetime", {
      icon: "insert-time",
      text: "Date/time",
      getSubmenuItems: function getSubmenuItems() {
        return g.map(u, function (e) {
          return {
            type: "menuitem",
            text: d(r, e),
            onAction: (t = e, function () {
              c.set(t), m(t);
            })
          };
          var t;
        });
      }
    });
  });
}();
/*__ESM_BODY_END__*/