"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-ecd2938a"], {
  "5e8b": function e8b(t, e, a) {},
  "6f2b": function f2b(t, e, a) {
    "use strict";

    var c = a("b04a"),
        s = a.n(c);
    s.a;
  },
  ad56: function ad56(t, e, a) {
    "use strict";

    a.r(e);

    var c = function c() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", {
        staticClass: "container"
      }, [a("h1", {
        staticClass: "title"
      }, [t._v("Paycheck List")]), a("div", {
        staticClass: "dates"
      }, [a("div", [a("p", {
        staticClass: "text"
      }, [t._v("Start date")]), a("datetime", {
        attrs: {
          type: "date",
          "input-style": t.input
        },
        model: {
          value: t.start,
          callback: function callback(e) {
            t.start = "string" === typeof e ? e.trim() : e;
          },
          expression: "start"
        }
      })], 1), a("div", [a("p", {
        staticClass: "text"
      }, [t._v("End date")]), a("datetime", {
        attrs: {
          type: "date",
          "input-style": t.input
        },
        model: {
          value: t.end,
          callback: function callback(e) {
            t.end = "string" === typeof e ? e.trim() : e;
          },
          expression: "end"
        }
      })], 1)]), t.paychecks.length ? a("div", {
        staticClass: "m10"
      }, [a("span", {
        staticClass: "orange"
      }, [t._v(" Double tap a paycheck to see detailed information ")]), t._l(t.paychecks, function (e) {
        return a("PaycheckList", {
          key: e._id,
          attrs: {
            paycheck: e
          },
          on: {
            deletePaycheck: t.deletePaycheck
          },
          nativeOn: {
            dblclick: function dblclick(a) {
              return t.click(e._id);
            }
          }
        });
      })], 2) : a("span", {
        staticClass: "orange m10"
      }, [t._v(" No paychecks available yet ")])]);
    },
        s = [],
        n = (a("99af"), a("4160"), a("159b"), a("5530")),
        i = function i() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", {
        staticClass: "box"
      }, [a("div", {
        staticClass: "row"
      }, [a("div", {
        staticClass: "col"
      }, [a("span", {
        staticClass: "text left"
      }, [t._v("Hours")]), a("span", {
        staticClass: "text left"
      }, [t._v(" " + t._s(t._f("decimal")(t.paycheck.hours + t.paycheck.overtime)) + " ")])]), a("div", {
        staticClass: "col"
      }, [a("span", {
        staticClass: "text right"
      }, [t._v("Pay period")]), a("span", {
        staticClass: "text right"
      }, [t._v(" " + t._s(t._f("formatDate")(t.paycheck.start)) + " - " + t._s(t._f("formatDate")(t.paycheck.end)) + ", " + t._s(t._f("year")(t.paycheck.end)) + " ")])])]), a("div", {
        staticClass: "row"
      }, [a("div", {
        staticClass: "col"
      }, [a("span", {
        staticClass: "text left"
      }, [t._v("Net pay")]), a("span", {
        staticClass: "text left money"
      }, [t._v(" $" + t._s(t._f("money")(t.paycheck.cash + t.paycheck.credit)) + " ")])]), a("button", {
        staticClass: "small-btn",
        on: {
          click: function click(e) {
            return t.deleteBtn(t.paycheck._id);
          }
        }
      }, [t._v(" delete ")])])]);
    },
        r = [],
        o = (a("fb6a"), a("a9e3"), a("35b3"), a("b680"), a("c1df")),
        l = a.n(o),
        d = a("2f62"),
        h = {
      name: "PaycheckList",
      props: ["paycheck"],
      filters: {
        decimal: function decimal(t) {
          return Math.round(100 * (t + Number.EPSILON)) / 100;
        },
        money: function money(t) {
          for (var e = t.toFixed(2), a = 0, c = e.length - 4; c > 0; c--) {
            2 === a && (e = e.slice(0, c) + "," + e.slice(c), a = 0), a++;
          }

          return e;
        },
        formatDate: function formatDate(t) {
          return l()(t).format("MMM D");
        },
        year: function year(t) {
          return l()(t).format("YYYY");
        }
      },
      methods: Object(n["a"])(Object(n["a"])({}, Object(d["b"])(["deletePaycheck"])), {}, {
        deleteBtn: function deleteBtn(t) {
          var e = confirm("Are you sure?");
          e && (this.deletePaycheck(t), this.$emit("deletePaycheck"));
        }
      })
    },
        u = h,
        f = (a("dcad"), a("2877")),
        p = Object(f["a"])(u, i, r, !1, null, "6514f8c5", null),
        y = p.exports,
        k = a("859b"),
        m = (a("d355"), {
      name: "Paychecks",
      components: {
        Datetime: k["Datetime"],
        PaycheckList: y
      },
      data: function data() {
        return {
          start: "",
          end: "",
          paychecks: [],
          input: {
            width: "100px",
            "font-size": "0.9rem",
            background: "transparent",
            border: "none",
            "border-bottom": "1px solid #414a53",
            outline: "none",
            padding: "15px 5px",
            "padding-bottom": "5px",
            margin: "0"
          }
        };
      },
      methods: Object(n["a"])(Object(n["a"])({}, Object(d["b"])(["getPaychecks"])), {}, {
        addZero: function addZero(t) {
          return t < 10 ? "0".concat(t + 1) : t + 1;
        },
        click: function click(t) {
          this.$router.push({
            path: "/paychecks/detail/".concat(t)
          });
        },
        filterPaychecks: function filterPaychecks() {
          var t = [],
              e = new Date(this.start).getTime(),
              a = new Date(this.end).getTime();
          return this.paycheckList.forEach(function (c) {
            var s = new Date(c.start).getTime();
            s >= e && s <= a && t.push(c);
          }), t;
        },
        deletePaycheck: function deletePaycheck() {
          var t = this;
          setTimeout(function () {
            t.paychecks = t.filterPaychecks(), t.getPaychecks(t.userInfo.id);
          }, 500);
        }
      }),
      computed: Object(d["c"])(["paycheckList", "userInfo"]),
      beforeMount: function beforeMount() {
        var t = this,
            e = new Date(),
            a = e.getFullYear(),
            c = this.addZero(e.getMonth() - 2),
            s = this.addZero(e.getMonth() + 1),
            n = "".concat(a, "-").concat(c, "-02T00:00:00.000Z"),
            i = "".concat(a, "-").concat(s, "-02T00:00:00.000Z");
        this.start = n, this.end = i, setTimeout(function () {
          return t.paychecks = t.filterPaychecks();
        }, 500);
      },
      watch: {
        start: function start() {
          this.paychecks = this.filterPaychecks();
        },
        end: function end() {
          this.paychecks = this.filterPaychecks();
        }
      }
    }),
        b = m,
        v = (a("6f2b"), Object(f["a"])(b, c, s, !1, null, "7108f2b1", null));

    e["default"] = v.exports;
  },
  b04a: function b04a(t, e, a) {},
  dcad: function dcad(t, e, a) {
    "use strict";

    var c = a("5e8b"),
        s = a.n(c);
    s.a;
  }
}]);