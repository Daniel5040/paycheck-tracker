"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-43858369"], {
  1331: function _(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = (0, n.regex)("integer", /(^[0-9]*$)|(^-[0-9]+$)/);
    t.default = a;
  },
  "159b": function b(e, t, r) {
    var n = r("da84"),
        a = r("fdbc"),
        o = r("17c2"),
        i = r("9112");

    for (var u in a) {
      var c = n[u],
          s = c && c.prototype;
      if (s && s.forEach !== o) try {
        i(s, "forEach", o);
      } catch (d) {
        s.forEach = o;
      }
    }
  },
  "17c2": function c2(e, t, r) {
    "use strict";

    var n = r("b727").forEach,
        a = r("a640"),
        o = r("ae40"),
        i = a("forEach"),
        u = o("forEach");
    e.exports = i && u ? [].forEach : function (e) {
      return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
    };
  },
  "2a12": function a12(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e) {
      return (0, n.withParams)({
        type: "maxLength",
        max: e
      }, function (t) {
        return !(0, n.req)(t) || (0, n.len)(t) <= e;
      });
    };

    t.default = a;
  },
  "2d4d": function d4d(e, t, r) {},
  3360: function _(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }

      return (0, n.withParams)({
        type: "and"
      }, function () {
        for (var e = this, r = arguments.length, n = new Array(r), a = 0; a < r; a++) {
          n[a] = arguments[a];
        }

        return t.length > 0 && t.reduce(function (t, r) {
          return t && r.apply(e, n);
        }, !0);
      });
    };

    t.default = a;
  },
  "3a54": function a54(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = (0, n.regex)("alphaNum", /^[a-zA-Z0-9]*$/);
    t.default = a;
  },
  "3d01": function d01(e, t, r) {
    "use strict";

    var n = r("ed4e"),
        a = r.n(n);
    a.a;
  },
  4160: function _(e, t, r) {
    "use strict";

    var n = r("23e7"),
        a = r("17c2");
    n({
      target: "Array",
      proto: !0,
      forced: [].forEach != a
    }, {
      forEach: a
    });
  },
  "45b8": function b8(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = (0, n.regex)("numeric", /^[0-9]*$/);
    t.default = a;
  },
  "46bc": function bc(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e) {
      return (0, n.withParams)({
        type: "maxValue",
        max: e
      }, function (t) {
        return !(0, n.req)(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +e;
      });
    };

    t.default = a;
  },
  "4de4": function de4(e, t, r) {
    "use strict";

    var n = r("23e7"),
        a = r("b727").filter,
        o = r("1dde"),
        i = r("ae40"),
        u = o("filter"),
        c = i("filter");
    n({
      target: "Array",
      proto: !0,
      forced: !u || !c
    }, {
      filter: function filter(e) {
        return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  },
  "535d": function d(e, t, r) {},
  5530: function _(e, t, r) {
    "use strict";

    r.d(t, "a", function () {
      return o;
    });
    r("a4d3"), r("4de4"), r("4160"), r("e439"), r("dbb4"), r("b64b"), r("159b");

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function a(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(r), !0).forEach(function (t) {
          n(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }
  },
  "5d75": function d75(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,
        o = (0, n.regex)("email", a);
    t.default = o;
  },
  "5db3": function db3(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e) {
      return (0, n.withParams)({
        type: "minLength",
        min: e
      }, function (t) {
        return !(0, n.req)(t) || (0, n.len)(t) >= e;
      });
    };

    t.default = a;
  },
  6235: function _(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = (0, n.regex)("alpha", /^[a-zA-Z]*$/);
    t.default = a;
  },
  6417: function _(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e) {
      return (0, n.withParams)({
        type: "not"
      }, function (t, r) {
        return !(0, n.req)(t) || !e.call(this, t, r);
      });
    };

    t.default = a;
  },
  "6e78": function e78(e, t, r) {},
  7102: function _(e, t, r) {
    "use strict";

    var n = r("2d4d"),
        a = r.n(n);
    a.a;
  },
  "772d": function d(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
        o = (0, n.regex)("url", a);
    t.default = o;
  },
  "78ef": function ef(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "withParams", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), t.regex = t.ref = t.len = t.req = void 0;
    var n = a(r("8750"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(e) {
      return o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, o(e);
    }

    var i = function i(e) {
      if (Array.isArray(e)) return !!e.length;
      if (void 0 === e || null === e) return !1;
      if (!1 === e) return !0;
      if (e instanceof Date) return !isNaN(e.getTime());

      if ("object" === o(e)) {
        for (var t in e) {
          return !0;
        }

        return !1;
      }

      return !!String(e).length;
    };

    t.req = i;

    var u = function u(e) {
      return Array.isArray(e) ? e.length : "object" === o(e) ? Object.keys(e).length : String(e).length;
    };

    t.len = u;

    var c = function c(e, t, r) {
      return "function" === typeof e ? e.call(t, r) : r[e];
    };

    t.ref = c;

    var s = function s(e, t) {
      return (0, n.default)({
        type: e
      }, function (e) {
        return !i(e) || t.test(e);
      });
    };

    t.regex = s;
  },
  8602: function _(e, t, r) {
    "use strict";

    var n = r("6e78"),
        a = r.n(n);
    a.a;
  },
  8750: function _(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = "web" === Object({
      NODE_ENV: "production",
      BASE_URL: "/"
    }).BUILD ? r("cb69").withParams : r("0234").withParams,
        a = n;
    t.default = a;
  },
  "91d3": function d3(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ":";
      return (0, n.withParams)({
        type: "macAddress"
      }, function (t) {
        if (!(0, n.req)(t)) return !0;
        if ("string" !== typeof t) return !1;
        var r = "string" === typeof e && "" !== e ? t.split(e) : 12 === t.length || 16 === t.length ? t.match(/.{2}/g) : null;
        return null !== r && (6 === r.length || 8 === r.length) && r.every(o);
      });
    };

    t.default = a;

    var o = function o(e) {
      return e.toLowerCase().match(/^[0-9a-f]{2}$/);
    };
  },
  a640: function a640(e, t, r) {
    "use strict";

    var n = r("d039");

    e.exports = function (e, t) {
      var r = [][e];
      return !!r && n(function () {
        r.call(null, t || function () {
          throw 1;
        }, 1);
      });
    };
  },
  aa82: function aa82(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e) {
      return (0, n.withParams)({
        type: "requiredIf",
        prop: e
      }, function (t, r) {
        return !(0, n.ref)(e, this, r) || (0, n.req)(t);
      });
    };

    t.default = a;
  },
  b4d2: function b4d2(e, t, r) {
    "use strict";

    var n = r("535d"),
        a = r.n(n);
    a.a;
  },
  b5ae: function b5ae(e, t, r) {
    "use strict";

    function n(e) {
      return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, n(e);
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "alpha", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(t, "alphaNum", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(t, "numeric", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(t, "between", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(t, "email", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(t, "ipAddress", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(t, "macAddress", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(t, "maxLength", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(t, "minLength", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(t, "required", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(t, "requiredIf", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(t, "requiredUnless", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(t, "sameAs", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(t, "url", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(t, "or", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(t, "and", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(t, "not", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(t, "minValue", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    }), Object.defineProperty(t, "maxValue", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(t, "integer", {
      enumerable: !0,
      get: function get() {
        return $.default;
      }
    }), Object.defineProperty(t, "decimal", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), t.helpers = void 0;

    var a = C(r("6235")),
        o = C(r("3a54")),
        i = C(r("45b8")),
        u = C(r("ec11")),
        c = C(r("5d75")),
        s = C(r("c99d")),
        d = C(r("91d3")),
        f = C(r("2a12")),
        l = C(r("5db3")),
        p = C(r("d4f4")),
        v = C(r("aa82")),
        m = C(r("e652")),
        y = C(r("b6cb")),
        b = C(r("772d")),
        h = C(r("d294")),
        g = C(r("3360")),
        _ = C(r("6417")),
        w = C(r("eb66")),
        P = C(r("46bc")),
        $ = C(r("1331")),
        O = C(r("c301")),
        j = x(r("78ef"));

    function k() {
      if ("function" !== typeof WeakMap) return null;
      var e = new WeakMap();
      return k = function k() {
        return e;
      }, e;
    }

    function x(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" !== n(e) && "function" !== typeof e) return {
        default: e
      };
      var t = k();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
          i && (i.get || i.set) ? Object.defineProperty(r, o, i) : r[o] = e[o];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function C(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    t.helpers = j;
  },
  b64b: function b64b(e, t, r) {
    var n = r("23e7"),
        a = r("7b0b"),
        o = r("df75"),
        i = r("d039"),
        u = i(function () {
      o(1);
    });
    n({
      target: "Object",
      stat: !0,
      forced: u
    }, {
      keys: function keys(e) {
        return o(a(e));
      }
    });
  },
  b6cb: function b6cb(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e) {
      return (0, n.withParams)({
        type: "sameAs",
        eq: e
      }, function (t, r) {
        return t === (0, n.ref)(e, this, r);
      });
    };

    t.default = a;
  },
  c301: function c301(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = (0, n.regex)("decimal", /^[-]?\d*(\.\d+)?$/);
    t.default = a;
  },
  c99d: function c99d(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = (0, n.withParams)({
      type: "ipAddress"
    }, function (e) {
      if (!(0, n.req)(e)) return !0;
      if ("string" !== typeof e) return !1;
      var t = e.split(".");
      return 4 === t.length && t.every(o);
    });
    t.default = a;

    var o = function o(e) {
      if (e.length > 3 || 0 === e.length) return !1;
      if ("0" === e[0] && "0" !== e) return !1;
      if (!e.match(/^\d+$/)) return !1;
      var t = 0 | +e;
      return t >= 0 && t <= 255;
    };
  },
  cb69: function cb69(e, t, r) {
    "use strict";

    (function (e) {
      function r(e) {
        return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, r(e);
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.withParams = void 0;

      var n = "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : {},
          a = function a(e, t) {
        return "object" === r(e) && void 0 !== t ? t : e(function () {});
      },
          o = n.vuelidate ? n.vuelidate.withParams : a;

      t.withParams = o;
    }).call(this, r("c8ba"));
  },
  d294: function d294(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }

      return (0, n.withParams)({
        type: "or"
      }, function () {
        for (var e = this, r = arguments.length, n = new Array(r), a = 0; a < r; a++) {
          n[a] = arguments[a];
        }

        return t.length > 0 && t.reduce(function (t, r) {
          return t || r.apply(e, n);
        }, !1);
      });
    };

    t.default = a;
  },
  d4f4: function d4f4(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = r("78ef"),
        a = (0, n.withParams)({
      type: "required"
    }, function (e) {
      return "string" === typeof e ? (0, n.req)(e.trim()) : (0, n.req)(e);
    });
    t.default = a;
  },
  d879: function d879(e, t, r) {
    "use strict";

    r.r(t);

    var n = function n() {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;
      return r("div", {
        staticClass: "container"
      }, [r("h1", {
        staticClass: "title"
      }, [e._v("Create")]), r("span", {
        staticClass: "text"
      }, [e._v(" Here you can create a new paycheck or workday. ")]), r("div", {
        staticClass: "cards"
      }, e._l(e.slots, function (t, n) {
        return r("BaseCard", {
          key: n,
          nativeOn: {
            click: function click(t) {
              return e.click(n);
            }
          },
          scopedSlots: e._u([{
            key: "icon",
            fn: function fn() {
              return [r("span", {
                staticClass: "material-icons md-40"
              }, [e._v(e._s(t.icon))])];
            },
            proxy: !0
          }, {
            key: "text",
            fn: function fn() {
              return [r("span", {
                staticClass: "text"
              }, [e._v(e._s(t.text))])];
            },
            proxy: !0
          }], null, !0)
        }, [r("h4", [e._v(e._s(t.title))])]);
      }), 1), r("CreateOverlay", {
        attrs: {
          modal: e.modal
        },
        on: {
          closeModal: e.closeModal
        }
      })], 1);
    },
        a = [],
        o = r("ff7d"),
        i = function i() {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;
      return r("div", [e.modal.showModal ? r("div", {
        staticClass: "modal-overlay",
        on: {
          click: function click(t) {
            return e.$emit("closeModal");
          }
        }
      }) : e._e(), r("transition", {
        attrs: {
          name: "fade",
          mode: "out-in"
        }
      }, [e.modal.showPaycheck ? r("CreateAddPaycheck", {
        staticClass: "modal",
        attrs: {
          id: e.userInfo.id
        },
        on: {
          closeModal: function closeModal(t) {
            return e.$emit("closeModal");
          }
        }
      }) : e._e()], 1), r("transition", {
        attrs: {
          name: "fade",
          mode: "out-in"
        }
      }, [e.modal.showWorkday ? r("CreateAddWorkday", {
        staticClass: "modal",
        attrs: {
          id: e.userInfo.id
        },
        on: {
          closeModal: function closeModal(t) {
            return e.$emit("closeModal");
          }
        }
      }) : e._e()], 1)], 1);
    },
        u = [],
        c = function c() {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;
      return r("form", {
        staticClass: "container-modal",
        on: {
          submit: function submit(e) {
            e.preventDefault();
          }
        }
      }, [e.error ? r("span", {
        staticClass: "error form-title"
      }, [e._v(e._s(e.error))]) : e._e(), r("h2", [e._v("Add Paycheck")]), r("datetime", {
        class: {
          "input-error": e.$v.start.$error,
          date: e.$v.start.$error
        },
        attrs: {
          placeholder: "Start Date",
          type: "date",
          "input-style": e.input
        },
        on: {
          blur: function blur(t) {
            return e.$v.start.$touch();
          }
        },
        model: {
          value: e.$v.start.$model,
          callback: function callback(t) {
            e.$set(e.$v.start, "$model", "string" === typeof t ? t.trim() : t);
          },
          expression: "$v.start.$model"
        }
      }), e.$v.start.$error && e.start ? r("div", {
        staticClass: "error"
      }, [e.$v.start.required ? e._e() : r("span", [e._v("Field is required")])]) : e._e(), r("datetime", {
        class: {
          "input-error": e.$v.end.$error,
          date: e.$v.end.$error
        },
        attrs: {
          placeholder: "End Date",
          type: "date",
          "input-style": e.input
        },
        on: {
          blur: function blur(t) {
            return e.$v.end.$touch();
          }
        },
        model: {
          value: e.$v.end.$model,
          callback: function callback(t) {
            e.$set(e.$v.end, "$model", "string" === typeof t ? t.trim() : t);
          },
          expression: "$v.end.$model"
        }
      }), e.$v.end.$error && e.end ? r("div", {
        staticClass: "error"
      }, [e.$v.end.required ? e._e() : r("span", [e._v("Field is required")])]) : e._e(), r("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.paycheckError,
          expression: "paycheckError"
        }],
        staticClass: "error"
      }, [e._v(e._s(e.paycheckError))]), r("button", {
        class: {
          disabled: e.$v.$invalid
        },
        attrs: {
          disabled: e.$v.$invalid
        },
        on: {
          click: e.submitForm
        }
      }, [e._v(" Create ")])], 1);
    },
        s = [],
        d = (r("96cf"), r("1da1")),
        f = r("5530"),
        l = r("2f62"),
        p = r("b5ae"),
        v = r("859b"),
        m = (r("d355"), {
      name: "CreateAddPaycheck",
      components: {
        datetime: v["Datetime"]
      },
      props: ["id"],
      data: function data() {
        return {
          start: "",
          end: "",
          error: null,
          input: {
            "font-size": "0.9rem",
            background: "transparent",
            border: "none",
            "border-bottom": "1px solid #414a53",
            outline: "none",
            padding: "15px 5px",
            "padding-bottom": "5px",
            margin: "10px 0",
            "text-align": "start"
          }
        };
      },
      validations: {
        start: {
          required: p["required"]
        },
        end: {
          required: p["required"]
        }
      },
      methods: Object(f["a"])(Object(f["a"])({}, Object(l["b"])(["createPaycheck", "getPaychecks", "logoutWorkday"])), {}, {
        submitForm: function submitForm() {
          var e = this;
          return Object(d["a"])(regeneratorRuntime.mark(function t() {
            var r;
            return regeneratorRuntime.wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    if (e.$v.$touch(), !e.$v.$invalid) {
                      t.next = 5;
                      break;
                    }

                    e.error = "Please fill the form correctly.", t.next = 10;
                    break;

                  case 5:
                    return r = {
                      start: e.start,
                      end: e.end,
                      user: e.id
                    }, t.next = 8, e.createPaycheck(r);

                  case 8:
                    setTimeout(function () {
                      return e.error = null;
                    }, 500), e.paycheckError || (e.getPaychecks(e.id), e.logoutWorkday(), e.$emit("closeModal"));

                  case 10:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          }))();
        }
      }),
      computed: Object(l["c"])(["paycheckError"])
    }),
        y = m,
        b = (r("7102"), r("2877")),
        h = Object(b["a"])(y, c, s, !1, null, "3d8af941", null),
        g = h.exports,
        _ = function _() {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;
      return r("form", {
        staticClass: "container-modal",
        on: {
          submit: function submit(e) {
            e.preventDefault();
          }
        }
      }, [e.error ? r("span", {
        staticClass: "error form-title"
      }, [e._v(e._s(e.error))]) : e._e(), r("h2", [e._v("Add Workday")]), r("datetime", {
        class: {
          "input-error": e.$v.start.$error,
          date: e.$v.start.$error
        },
        attrs: {
          "use12-hour": "",
          placeholder: "Start Date",
          type: "datetime",
          "input-style": e.input
        },
        on: {
          blur: function blur(t) {
            return e.$v.start.$touch();
          }
        },
        model: {
          value: e.$v.start.$model,
          callback: function callback(t) {
            e.$set(e.$v.start, "$model", "string" === typeof t ? t.trim() : t);
          },
          expression: "$v.start.$model"
        }
      }), e.$v.start.$error && e.start ? r("div", {
        staticClass: "error"
      }, [e.$v.start.required ? e._e() : r("span", [e._v("Field is required")])]) : e._e(), r("datetime", {
        class: {
          "input-error": e.$v.end.$error,
          date: e.$v.end.$error
        },
        attrs: {
          "use12-hour": "",
          placeholder: "End Date",
          type: "datetime",
          "input-style": e.input
        },
        on: {
          blur: function blur(t) {
            return e.$v.end.$touch();
          }
        },
        model: {
          value: e.$v.end.$model,
          callback: function callback(t) {
            e.$set(e.$v.end, "$model", "string" === typeof t ? t.trim() : t);
          },
          expression: "$v.end.$model"
        }
      }), e.$v.end.$error && e.end ? r("div", {
        staticClass: "error"
      }, [e.$v.end.required ? e._e() : r("span", [e._v("Field is required")])]) : e._e(), r("transition", {
        attrs: {
          name: "down",
          mode: "out-in"
        }
      }, [r("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.showTips,
          expression: "showTips"
        }]
      }, [r("input", {
        directives: [{
          name: "model",
          rawName: "v-model.trim",
          value: e.credit,
          expression: "credit",
          modifiers: {
            trim: !0
          }
        }],
        staticClass: "input",
        attrs: {
          placeholder: "Credit Total",
          type: "text"
        },
        domProps: {
          value: e.credit
        },
        on: {
          input: function input(t) {
            t.target.composing || (e.credit = t.target.value.trim());
          },
          blur: function blur(t) {
            return e.$forceUpdate();
          }
        }
      }), r("input", {
        directives: [{
          name: "model",
          rawName: "v-model.trim",
          value: e.cash,
          expression: "cash",
          modifiers: {
            trim: !0
          }
        }],
        staticClass: "input",
        attrs: {
          placeholder: "Cash Total",
          type: "text"
        },
        domProps: {
          value: e.cash
        },
        on: {
          input: function input(t) {
            t.target.composing || (e.cash = t.target.value.trim());
          },
          blur: function blur(t) {
            return e.$forceUpdate();
          }
        }
      })])]), r("div", {
        staticClass: "tips",
        on: {
          click: function click(t) {
            e.showTips = !e.showTips;
          }
        }
      }, [r("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.showTips,
          expression: "!showTips"
        }],
        staticClass: "text"
      }, [e._v("Any tips? (Cash or Credit)")]), r("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.showTips,
          expression: "showTips"
        }],
        staticClass: "text"
      }, [e._v("Close")])]), r("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.workdayError,
          expression: "workdayError"
        }],
        staticClass: "error"
      }, [e._v(e._s(e.workdayError))]), r("button", {
        class: {
          disabled: e.$v.$invalid
        },
        attrs: {
          disabled: e.$v.$invalid
        },
        on: {
          click: e.submitForm
        }
      }, [e._v(" Create ")])], 1);
    },
        w = [],
        P = {
      name: "CreateAddWorkday",
      components: {
        datetime: v["Datetime"]
      },
      props: ["id"],
      data: function data() {
        return {
          start: "",
          end: "",
          credit: "",
          cash: "",
          error: null,
          showTips: !1,
          input: {
            "font-size": "0.9rem",
            background: "transparent",
            border: "none",
            "border-bottom": "1px solid #414a53",
            outline: "none",
            padding: "15px 5px",
            "padding-bottom": "5px",
            margin: "10px 0",
            "text-align": "start"
          }
        };
      },
      validations: {
        start: {
          required: p["required"]
        },
        end: {
          required: p["required"]
        }
      },
      methods: Object(f["a"])(Object(f["a"])({}, Object(l["b"])(["createWorkday", "updatePaycheck", "getPaychecks", "getWorkdays"])), {}, {
        submitForm: function submitForm() {
          var e = this;
          return Object(d["a"])(regeneratorRuntime.mark(function t() {
            var r;
            return regeneratorRuntime.wrap(function (t) {
              while (1) {
                switch (t.prev = t.next) {
                  case 0:
                    if (e.$v.$touch(), !e.$v.$invalid) {
                      t.next = 5;
                      break;
                    }

                    e.error = "Please fill the form correctly", t.next = 16;
                    break;

                  case 5:
                    return r = {
                      start: e.start,
                      end: e.end,
                      credit: e.credit ? +e.credit : 0,
                      cash: e.cash ? +e.cash : 0,
                      paycheck: e.paycheckActive._id,
                      user: e.id
                    }, t.next = 8, e.createWorkday(r);

                  case 8:
                    if (setTimeout(function () {
                      return e.error = null;
                    }, 500), e.workdayError) {
                      t.next = 16;
                      break;
                    }

                    return t.next = 12, e.updatePaycheck({
                      userId: e.id,
                      paycheckId: e.paycheckActive._id
                    });

                  case 12:
                    return t.next = 14, e.getPaychecks(e.id);

                  case 14:
                    e.getWorkdays(e.paycheckActive._id), e.$emit("closeModal");

                  case 16:
                  case "end":
                    return t.stop();
                }
              }
            }, t);
          }))();
        }
      }),
      computed: Object(l["c"])(["workdayError", "paycheckActive"])
    },
        $ = P,
        O = (r("b4d2"), Object(b["a"])($, _, w, !1, null, "6ecf73fd", null)),
        j = O.exports,
        k = {
      name: "CreateOverlay",
      components: {
        CreateAddPaycheck: g,
        CreateAddWorkday: j
      },
      props: ["modal"],
      computed: Object(l["c"])(["userInfo"])
    },
        x = k,
        C = Object(b["a"])(x, i, u, !1, null, "73310d9e", null),
        M = C.exports,
        q = {
      name: "NewPaycheck",
      components: {
        BaseCard: o["a"],
        CreateOverlay: M
      },
      data: function data() {
        return {
          slots: [{
            icon: "date_range",
            title: "Paycheck",
            text: "Create paycheck"
          }, {
            icon: "today",
            title: "Workday",
            text: "Create Workday"
          }],
          modal: {
            showModal: !1,
            showPaycheck: !1,
            showWorkday: !1
          }
        };
      },
      methods: {
        click: function click(e) {
          switch (this.modal.showModal = !0, e) {
            case 0:
              this.modal.showPaycheck = !0;
              break;

            case 1:
              this.modal.showWorkday = !0;
              break;

            default:
              break;
          }
        },
        closeModal: function closeModal() {
          for (var e in this.modal) {
            this.modal[e] = !1;
          }
        }
      }
    },
        A = q,
        E = (r("8602"), Object(b["a"])(A, n, a, !1, null, "e0fcef0a", null));

    t["default"] = E.exports;
  },
  dbb4: function dbb4(e, t, r) {
    var n = r("23e7"),
        a = r("83ab"),
        o = r("56ef"),
        i = r("fc6a"),
        u = r("06cf"),
        c = r("8418");
    n({
      target: "Object",
      stat: !0,
      sham: !a
    }, {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
        var t,
            r,
            n = i(e),
            a = u.f,
            s = o(n),
            d = {},
            f = 0;

        while (s.length > f) {
          r = a(n, t = s[f++]), void 0 !== r && c(d, t, r);
        }

        return d;
      }
    });
  },
  e439: function e439(e, t, r) {
    var n = r("23e7"),
        a = r("d039"),
        o = r("fc6a"),
        i = r("06cf").f,
        u = r("83ab"),
        c = a(function () {
      i(1);
    }),
        s = !u || c;
    n({
      target: "Object",
      stat: !0,
      forced: s,
      sham: !u
    }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
        return i(o(e), t);
      }
    });
  },
  e652: function e652(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e) {
      return (0, n.withParams)({
        type: "requiredUnless",
        prop: e
      }, function (t, r) {
        return !!(0, n.ref)(e, this, r) || (0, n.req)(t);
      });
    };

    t.default = a;
  },
  eb66: function eb66(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e) {
      return (0, n.withParams)({
        type: "minValue",
        min: e
      }, function (t) {
        return !(0, n.req)(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +e;
      });
    };

    t.default = a;
  },
  ec11: function ec11(e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var n = r("78ef"),
        a = function a(e, t) {
      return (0, n.withParams)({
        type: "between",
        min: e,
        max: t
      }, function (r) {
        return !(0, n.req)(r) || (!/\s/.test(r) || r instanceof Date) && +e <= +r && +t >= +r;
      });
    };

    t.default = a;
  },
  ed4e: function ed4e(e, t, r) {},
  ff7d: function ff7d(e, t, r) {
    "use strict";

    var n = function n() {
      var e = this,
          t = e.$createElement,
          r = e._self._c || t;
      return r("div", {
        staticClass: "card-container"
      }, [e._t("icon"), e._t("default"), e._t("text")], 2);
    },
        a = [],
        o = {
      name: "BaseCard"
    },
        i = o,
        u = (r("3d01"), r("2877")),
        c = Object(u["a"])(i, n, a, !1, null, "6c793914", null);

    t["a"] = c.exports;
  }
}]);