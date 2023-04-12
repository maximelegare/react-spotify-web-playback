var dt = Object.defineProperty;
var ut = (e, r, n) => r in e ? dt(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n;
var w = (e, r, n) => (ut(e, typeof r != "symbol" ? r + "" : r, n), n);
import * as _ from "react";
import c, { createElement as ft, memo as X, useRef as H, useEffect as W, useState as K, useCallback as Ze, PureComponent as ht, createRef as pt } from "react";
function He(e) {
  return function(r) {
    return typeof r === e;
  };
}
var mt = He("function"), gt = function(e) {
  return e === null;
}, Me = function(e) {
  return Object.prototype.toString.call(e).slice(8, -1) === "RegExp";
}, Ce = function(e) {
  return !yt(e) && !gt(e) && (mt(e) || typeof e == "object");
}, yt = He("undefined"), xe = globalThis && globalThis.__values || function(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, n = r && e[r], t = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && t >= e.length && (e = void 0), { value: e && e[t++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function vt(e, r) {
  var n = e.length;
  if (n !== r.length)
    return !1;
  for (var t = n; t-- !== 0; )
    if (!$(e[t], r[t]))
      return !1;
  return !0;
}
function bt(e, r) {
  if (e.byteLength !== r.byteLength)
    return !1;
  for (var n = new DataView(e.buffer), t = new DataView(r.buffer), a = e.byteLength; a--; )
    if (n.getUint8(a) !== t.getUint8(a))
      return !1;
  return !0;
}
function xt(e, r) {
  var n, t, a, i;
  if (e.size !== r.size)
    return !1;
  try {
    for (var s = xe(e.entries()), o = s.next(); !o.done; o = s.next()) {
      var l = o.value;
      if (!r.has(l[0]))
        return !1;
    }
  } catch (u) {
    n = { error: u };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (n)
        throw n.error;
    }
  }
  try {
    for (var d = xe(e.entries()), f = d.next(); !f.done; f = d.next()) {
      var l = f.value;
      if (!$(l[1], r.get(l[0])))
        return !1;
    }
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      f && !f.done && (i = d.return) && i.call(d);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return !0;
}
function wt(e, r) {
  var n, t;
  if (e.size !== r.size)
    return !1;
  try {
    for (var a = xe(e.entries()), i = a.next(); !i.done; i = a.next()) {
      var s = i.value;
      if (!r.has(s[0]))
        return !1;
    }
  } catch (o) {
    n = { error: o };
  } finally {
    try {
      i && !i.done && (t = a.return) && t.call(a);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return !0;
}
function $(e, r) {
  if (e === r)
    return !0;
  if (e && Ce(e) && r && Ce(r)) {
    if (e.constructor !== r.constructor)
      return !1;
    if (Array.isArray(e) && Array.isArray(r))
      return vt(e, r);
    if (e instanceof Map && r instanceof Map)
      return xt(e, r);
    if (e instanceof Set && r instanceof Set)
      return wt(e, r);
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(r))
      return bt(e, r);
    if (Me(e) && Me(r))
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    var n = Object.keys(e), t = Object.keys(r);
    if (n.length !== t.length)
      return !1;
    for (var a = n.length; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, n[a]))
        return !1;
    for (var a = n.length; a-- !== 0; ) {
      var i = n[a];
      if (!(i === "_owner" && e.$$typeof) && !$(e[i], r[i]))
        return !1;
    }
    return !0;
  }
  return Number.isNaN(e) && Number.isNaN(r) ? !0 : e === r;
}
var Ie = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};
function St(e, r) {
  return !!(e === r || Ie(e) && Ie(r));
}
function Et(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!St(e[n], r[n]))
      return !1;
  return !0;
}
function kt(e, r) {
  r === void 0 && (r = Et);
  var n = null;
  function t() {
    for (var a = [], i = 0; i < arguments.length; i++)
      a[i] = arguments[i];
    if (n && n.lastThis === this && r(a, n.lastArgs))
      return n.lastResult;
    var s = e.apply(this, a);
    return n = {
      lastResult: s,
      lastArgs: a,
      lastThis: this
    }, s;
  }
  return t.clear = function() {
    n = null;
  }, t;
}
var Mt = /[A-Z]/g, Ct = function(e) {
  for (var r = 5381, n = e.length; n; )
    r = r * 33 ^ e.charCodeAt(--n);
  return "_" + (r >>> 0).toString(36);
}, It = function(e) {
  e = e || {};
  var r = e.assign || Object.assign, n = typeof window == "object";
  process.env.NODE_ENV !== "production" && n && (typeof document != "object" || !document.getElementsByTagName("HTML")) && console.error(
    'nano-css detected browser environment because of "window" global, but "document" global seems to be defective.'
  );
  var t = r({
    raw: "",
    pfx: "_",
    client: n,
    assign: r,
    stringify: JSON.stringify,
    kebab: function(a) {
      return a.replace(Mt, "-$&").toLowerCase();
    },
    decl: function(a, i) {
      return a = t.kebab(a), a + ":" + i + ";";
    },
    hash: function(a) {
      return Ct(t.stringify(a));
    },
    selector: function(a, i) {
      return a + (i[0] === ":" ? "" : " ") + i;
    },
    putRaw: function(a) {
      t.raw += a;
    }
  }, e);
  return t.client && (t.sh || document.head.appendChild(t.sh = document.createElement("style")), process.env.NODE_ENV !== "production" && (t.sh.setAttribute("data-nano-css-dev", ""), t.shTest = document.createElement("style"), t.shTest.setAttribute("data-nano-css-dev-tests", ""), document.head.appendChild(t.shTest)), t.putRaw = function(a) {
    if (process.env.NODE_ENV === "production") {
      var i = t.sh.sheet;
      try {
        i.insertRule(a, i.cssRules.length);
      } catch {
      }
    } else {
      try {
        t.shTest.sheet.insertRule(a, t.shTest.sheet.cssRules.length);
      } catch (s) {
        e.verbose && console.error(s);
      }
      t.sh.appendChild(document.createTextNode(a));
    }
  }), t.put = function(a, i, s) {
    var o = "", l, d, f = [];
    for (l in i)
      d = i[l], d instanceof Object && !(d instanceof Array) ? f.push(l) : process.env.NODE_ENV !== "production" && !t.sourcemaps ? o += "    " + t.decl(l, d, a, s) + `
` : o += t.decl(l, d, a, s);
    o && (process.env.NODE_ENV !== "production" && !t.sourcemaps ? o = `
` + a + ` {
` + o + `}
` : o = a + "{" + o + "}", t.putRaw(s ? s + "{" + o + "}" : o));
    for (var u = 0; u < f.length; u++)
      l = f[u], l[0] === "@" && l !== "@font-face" ? t.putAt(a, i[l], l) : t.put(t.selector(a, l), i[l], s);
  }, t.putAt = t.put, t;
}, We = {};
We.addon = function(e) {
  var r = {};
  e.cache = function(n) {
    if (!n)
      return "";
    var t = e.hash(n);
    return r[t] || (r[t] = e.rule(n, t)), r[t];
  };
};
var ce, Ae;
function J() {
  if (Ae)
    return ce;
  Ae = 1;
  var e = "nano-css";
  return ce = function(n, t, a) {
    for (var i = [], s = 0; s < a.length; s++) {
      var o = a[s];
      t[o] || i.push(o);
    }
    if (i.length) {
      for (var l = 'Addon "' + n + '" is missing the following dependencies:', d = 0; d < i.length; d++)
        l += `
 require("` + e + "/addon/" + i[d] + '").addon(nano);';
      throw new Error(l);
    }
  }, ce;
}
var At = We.addon, Dt = function(e) {
  e.cache || At(e), process.env.NODE_ENV !== "production" && J()("jsx", e, ["rule", "cache"]), e.jsx = function(r, n, t) {
    var a, i = typeof r == "string";
    process.env.NODE_ENV !== "production" && (a = e.rule(n, t));
    var s = function(o) {
      a || (a = e.rule(n, t));
      var l = o, d = l.$as, f = l.$ref;
      process.env.NODE_ENV !== "production" && (l = e.assign({}, o));
      var u = e.cache(o.css);
      return delete l.css, delete l.$as, (i || d) && (delete l.$ref, l.ref = f), l.className = (o.className || "") + a + u, i || d ? e.h(d || r, l) : r(l);
    };
    return process.env.NODE_ENV !== "production" && t && (s.displayName = "jsx(" + t + ")"), s;
  };
}, Rt = function(e, r) {
  process.env.NODE_ENV !== "production" && J()("keyframes", e, ["putRaw", "put"]), r = e.assign({
    prefixes: ["-webkit-", "-moz-", "-o-", ""]
  }, r || {});
  var n = r.prefixes;
  e.client && document.head.appendChild(e.ksh = document.createElement("style"));
  var t = e.putAt;
  e.putAt = function(a, i, s) {
    if (s[1] === "k") {
      var o = "";
      for (var l in i) {
        var d = i[l], f = "";
        for (var u in d)
          f += e.decl(u, d[u]);
        o += l + "{" + f + "}";
      }
      for (var m = 0; m < n.length; m++) {
        var b = n[m], p = s.replace("@keyframes", "@" + b + "keyframes") + "{" + o + "}";
        e.client ? e.ksh.appendChild(document.createTextNode(p)) : e.putRaw(p);
      }
      return;
    }
    t(a, i, s);
  }, e.keyframes = function(a, i) {
    return i || (i = e.hash(a)), i = e.pfx + i, e.putAt("", a, "@keyframes " + i), i;
  };
}, Tt = function(e) {
  e.selector = function(r, n) {
    var t = r.split(","), a = [], i = n.split(","), s = t.length, o = i.length, l, d, f, u, m, b;
    for (l = 0; l < o; l++)
      if (f = i[l], u = f.indexOf("&"), u > -1)
        for (d = 0; d < s; d++)
          m = t[d], b = f.replace(/&/g, m), a.push(b);
      else
        for (d = 0; d < s; d++)
          m = t[d], m ? a.push(m + " " + f) : a.push(f);
    return a.join(",");
  };
}, Pt = function(e) {
  process.env.NODE_ENV !== "production" && J()("rule", e, ["put"]);
  var r;
  process.env.NODE_ENV !== "production" && (r = {}), e.rule = function(n, t) {
    if (process.env.NODE_ENV !== "production" && t) {
      if (typeof t != "string")
        throw new TypeError(
          'nano-css block name must be a string. For example, use nano.rule({color: "red", "RedText").'
        );
      r[t] && console.error('Block name "' + t + '" used more than once.'), r[t] = 1;
    }
    return t = t || e.hash(n), t = e.pfx + t, e.put("." + t, n), " " + t;
  };
}, Ot = function(e) {
  process.env.NODE_ENV !== "production" && J()("style", e, ["jsx"]), e.style = function(r, n, t, a) {
    var i = e.jsx(r, n, a), s = function(o) {
      var l = o;
      return process.env.NODE_ENV !== "production" && (l = Object.assign({}, o)), t && (l.css = t(o)), i(l);
    };
    return process.env.NODE_ENV !== "production" && (a || typeof r == "function") && (s.displayName = "style(" + (a || r.displayName || r.name) + ")"), s;
  };
}, De = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], _t = function(e) {
  process.env.NODE_ENV !== "production" && J()("styled", e, ["style"]);
  for (var r = function(a) {
    return function(i, s, o) {
      return e.style(a, i, s, o);
    };
  }, n, t = 0; t < De.length; t++)
    n = De[t], r[n] = r(n);
  e.styled = r;
};
const B = It({ h: ft });
Pt(B);
Rt(B);
Dt(B);
Ot(B);
_t(B);
Tt(B);
const { keyframes: Nt, put: on, styled: P } = B, h = (e) => typeof e == "number" ? `${e}px` : e, zt = P("div")(
  {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    "pointer-events": "none"
  },
  ({ style: e }) => {
    let r = {
      bottom: 0,
      position: "absolute",
      right: 0,
      width: "auto"
    };
    return e.layout === "responsive" && (r = {
      "@media (max-width: 767px)": r,
      "@media (min-width: 768px)": {
        height: h(e.h)
      }
    }), {
      height: h(32),
      ...r
    };
  },
  "ActionsRSWP"
);
function Lt(e) {
  const { children: r, layout: n, styles: t } = e;
  return /* @__PURE__ */ c.createElement(zt, { "data-component-name": "Actions", style: { h: t.height, layout: n } }, r);
}
const $t = X(Lt);
function Re(e) {
  return typeof e != "object" || e === null ? 0 : Array.isArray(e) ? 2 : Vt(e) ? 1 : e instanceof Set ? 3 : e instanceof Map ? 4 : 5;
}
function jt(e) {
  const r = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const t of [
      ...Object.keys(n),
      ...Object.getOwnPropertySymbols(n)
    ])
      r.add(t);
  return r;
}
function Bt(e, r) {
  return typeof e == "object" && Object.prototype.propertyIsEnumerable.call(e, r);
}
function Xe(e) {
  return {
    *[Symbol.iterator]() {
      for (const r of e)
        for (const n of r)
          yield n;
    }
  };
}
const Te = /* @__PURE__ */ new Set([
  "[object Object]",
  "[object Module]"
]);
function Vt(e) {
  if (!Te.has(Object.prototype.toString.call(e)))
    return !1;
  const { constructor: r } = e;
  if (r === void 0)
    return !0;
  const n = r.prototype;
  return !(n === null || typeof n != "object" || !Te.has(Object.prototype.toString.call(n)) || !n.hasOwnProperty("isPrototypeOf"));
}
const de = {
  mergeMaps: Jt,
  mergeSets: Kt,
  mergeArrays: Gt,
  mergeRecords: qt,
  mergeOthers: Ge
}, V = {
  defaultMerge: Symbol("deepmerge-ts: default merge"),
  skip: Symbol("deepmerge-ts: skip")
};
function Ut(e, r) {
  return r;
}
function Pe(...e) {
  return Yt({})(...e);
}
function Yt(e, r) {
  const n = Ft(e, t);
  function t(...a) {
    return qe(a, n, r);
  }
  return t;
}
function Ft(e, r) {
  var n, t;
  return {
    defaultMergeFunctions: de,
    mergeFunctions: {
      ...de,
      ...Object.fromEntries(Object.entries(e).filter(([a, i]) => Object.prototype.hasOwnProperty.call(de, a)).map(([a, i]) => i === !1 ? [a, Ge] : [a, i]))
    },
    metaDataUpdater: (n = e.metaDataUpdater) !== null && n !== void 0 ? n : Ut,
    deepmerge: r,
    useImplicitDefaultMerging: (t = e.enableImplicitDefaultMerging) !== null && t !== void 0 ? t : !1,
    actions: V
  };
}
function qe(e, r, n) {
  if (e.length === 0)
    return;
  if (e.length === 1)
    return ue(e, r, n);
  const t = Re(e[0]);
  if (t !== 0 && t !== 5) {
    for (let a = 1; a < e.length; a++)
      if (Re(e[a]) !== t)
        return ue(e, r, n);
  }
  switch (t) {
    case 1:
      return Zt(e, r, n);
    case 2:
      return Ht(e, r, n);
    case 3:
      return Wt(e, r, n);
    case 4:
      return Xt(e, r, n);
    default:
      return ue(e, r, n);
  }
}
function Zt(e, r, n) {
  const t = r.mergeFunctions.mergeRecords(e, r, n);
  return t === V.defaultMerge || r.useImplicitDefaultMerging && t === void 0 && r.mergeFunctions.mergeRecords !== r.defaultMergeFunctions.mergeRecords ? r.defaultMergeFunctions.mergeRecords(e, r, n) : t;
}
function Ht(e, r, n) {
  const t = r.mergeFunctions.mergeArrays(e, r, n);
  return t === V.defaultMerge || r.useImplicitDefaultMerging && t === void 0 && r.mergeFunctions.mergeArrays !== r.defaultMergeFunctions.mergeArrays ? r.defaultMergeFunctions.mergeArrays(e) : t;
}
function Wt(e, r, n) {
  const t = r.mergeFunctions.mergeSets(e, r, n);
  return t === V.defaultMerge || r.useImplicitDefaultMerging && t === void 0 && r.mergeFunctions.mergeSets !== r.defaultMergeFunctions.mergeSets ? r.defaultMergeFunctions.mergeSets(e) : t;
}
function Xt(e, r, n) {
  const t = r.mergeFunctions.mergeMaps(e, r, n);
  return t === V.defaultMerge || r.useImplicitDefaultMerging && t === void 0 && r.mergeFunctions.mergeMaps !== r.defaultMergeFunctions.mergeMaps ? r.defaultMergeFunctions.mergeMaps(e) : t;
}
function ue(e, r, n) {
  const t = r.mergeFunctions.mergeOthers(e, r, n);
  return t === V.defaultMerge || r.useImplicitDefaultMerging && t === void 0 && r.mergeFunctions.mergeOthers !== r.defaultMergeFunctions.mergeOthers ? r.defaultMergeFunctions.mergeOthers(e) : t;
}
function qt(e, r, n) {
  const t = {};
  for (const a of jt(e)) {
    const i = [];
    for (const l of e)
      Bt(l, a) && i.push(l[a]);
    if (i.length === 0)
      continue;
    const s = r.metaDataUpdater(n, {
      key: a,
      parents: e
    }), o = qe(i, r, s);
    o !== V.skip && (a === "__proto__" ? Object.defineProperty(t, a, {
      value: o,
      configurable: !0,
      enumerable: !0,
      writable: !0
    }) : t[a] = o);
  }
  return t;
}
function Gt(e) {
  return e.flat();
}
function Kt(e) {
  return new Set(Xe(e));
}
function Jt(e) {
  return new Map(Xe(e));
}
function Ge(e) {
  return e[e.length - 1];
}
var Oe = globalThis && globalThis.__read || function(e, r) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var t = n.call(e), a, i = [], s;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = t.next()).done; )
      i.push(a.value);
  } catch (o) {
    s = { error: o };
  } finally {
    try {
      a && !a.done && (n = t.return) && n.call(t);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, Qt = globalThis && globalThis.__spreadArray || function(e, r, n) {
  if (n || arguments.length === 2)
    for (var t = 0, a = r.length, i; t < a; t++)
      (i || !(t in r)) && (i || (i = Array.prototype.slice.call(r, 0, t)), i[t] = r[t]);
  return e.concat(i || Array.prototype.slice.call(r));
};
function ae(e) {
  var r, n, t, a, i, s, o;
  return {
    axis: (r = e == null ? void 0 : e.axis) !== null && r !== void 0 ? r : "x",
    xMax: (n = e == null ? void 0 : e.xMax) !== null && n !== void 0 ? n : 100,
    xMin: (t = e == null ? void 0 : e.xMin) !== null && t !== void 0 ? t : 0,
    xStep: (a = e == null ? void 0 : e.xStep) !== null && a !== void 0 ? a : 1,
    yMax: (i = e == null ? void 0 : e.yMax) !== null && i !== void 0 ? i : 100,
    yMin: (s = e == null ? void 0 : e.yMin) !== null && s !== void 0 ? s : 0,
    yStep: (o = e == null ? void 0 : e.yStep) !== null && o !== void 0 ? o : 1
  };
}
function q(e, r) {
  if ("touches" in e) {
    var n = Oe(Qt([], Oe(Array.from(e.touches)), !1), 1), t = n[0];
    return {
      x: t ? t.clientX : r.x,
      y: t ? t.clientY : r.y
    };
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function fe(e, r, n) {
  var t = ae(r), a = t.axis, i = t.xMax, s = t.xMin, o = t.xStep, l = t.yMax, d = t.yMin, f = t.yStep, u = (n == null ? void 0 : n.getBoundingClientRect()) || {}, m = u.height, b = m === void 0 ? i : m, p = u.width, S = p === void 0 ? l : p, g = e.x, y = e.y, v = 0, E = 0;
  return g < 0 && (g = 0), g > S && (g = S), y < 0 && (y = 0), y > b && (y = b), (a === "x" || a === "xy") && (v = Math.round(g / S * (i - s))), (a === "y" || a === "xy") && (E = Math.round(y / b * (l - d))), {
    x: Ne(v, o),
    y: Ne(E, f)
  };
}
function te(e, r) {
  var n = r[e] || 0, t = e === "x" ? r.xMin : r.yMin, a = e === "x" ? r.xMax : r.yMax;
  return _e(t) && n < t ? t : _e(a) && n > a ? a : n;
}
function _e(e) {
  return typeof e == "number";
}
function re(e) {
  return typeof e > "u";
}
function A(e) {
  return typeof e == "number" ? e : parseInt(e, 10);
}
function er(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  var t = {};
  for (var a in e)
    ({}).hasOwnProperty.call(e, a) && (r.includes(a) || (t[a] = e[a]));
  return t;
}
function Ne(e, r) {
  return Math.ceil(e / r) * r;
}
var M = globalThis && globalThis.__assign || function() {
  return M = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, M.apply(this, arguments);
}, tr = {
  height: "20px",
  padding: "6px",
  rangeColor: "#007bff",
  thumbBorder: "2px solid #000",
  thumbBorderRadius: "4px",
  thumbBorderRadiusXY: "50%",
  thumbColor: "#fff",
  thumbSize: "10px",
  thumbSizeXY: "20px",
  thumbSpace: "6px",
  trackBorderRadius: "3px",
  trackColor: "#ccc",
  width: "20px"
};
function rr(e) {
  var r = Pe(tr, e ? e.options : {}), n = {
    boxSizing: "border-box",
    display: "inline-block",
    padding: r.padding,
    transition: "height 0.4s, width 0.4s"
  }, t = {
    backgroundColor: r.trackColor,
    borderRadius: r.trackBorderRadius,
    boxSizing: "border-box",
    height: "100%",
    position: "relative",
    width: "100%"
  }, a = {
    backgroundColor: r.rangeColor,
    borderRadius: r.trackBorderRadius,
    position: "absolute"
  }, i = {
    boxSizing: "border-box",
    height: r.height,
    position: "absolute",
    transition: "height 0.4s, width 0.4s",
    width: r.width
  }, s = {
    backgroundColor: r.thumbColor,
    border: r.thumbBorder,
    borderRadius: r.thumbBorderRadius,
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    transition: "height 0.4s, width 0.4s"
  }, o = {
    rail: i,
    rangeX: M(M({}, a), { height: "100%", top: 0 }),
    rangeXY: M(M({}, a), { bottom: 0 }),
    rangeY: M(M({}, a), { bottom: 0, left: 0, width: "100%" }),
    sliderX: M(M({}, n), { height: A(r.height) + A(r.padding) * 2, width: "100%" }),
    sliderXY: M(M({}, n), { height: "100%", width: "100%" }),
    sliderY: M(M({}, n), { height: "100%", width: A(r.width) + A(r.padding) * 2 }),
    thumbX: M(M({}, s), { height: A(r.height) + A(r.thumbSpace), left: -(A(r.thumbSize) / 2), top: -(A(r.thumbSpace) / 2), width: r.thumbSize }),
    thumbXY: M(M({}, s), { backgroundColor: "transparent", border: r.thumbBorder, borderRadius: r.thumbBorderRadiusXY, bottom: -(A(r.thumbSizeXY) / 2), height: r.thumbSizeXY, left: -(A(r.thumbSizeXY) / 2), position: "absolute", width: r.thumbSizeXY }),
    thumbY: M(M({}, s), { bottom: -(A(r.thumbSize) / 2), height: r.thumbSize, left: -(A(r.thumbSpace) / 2), width: A(r.width) + A(r.thumbSpace) }),
    trackX: M(M({}, t), { height: r.height }),
    trackXY: M(M({}, t), { height: "100%", minHeight: "50px", width: "100%" }),
    trackY: M(M({}, t), { height: "100%", minHeight: "50px", width: r.width })
  };
  return Pe(o, e || {});
}
var nr = globalThis && globalThis.__extends || function() {
  var e = function(r, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, a) {
      t.__proto__ = a;
    } || function(t, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }, e(r, n);
  };
  return function(r, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(r, n);
    function t() {
      this.constructor = r;
    }
    r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
  };
}(), L = globalThis && globalThis.__assign || function() {
  return L = Object.assign || function(e) {
    for (var r, n = 1, t = arguments.length; n < t; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, L.apply(this, arguments);
}, ar = (
  /** @class */
  function(e) {
    nr(r, e);
    function r(n) {
      var t = e.call(this, n) || this;
      return t.lastCoordinates = { x: 0, y: 0 }, t.mounted = !1, t.offset = { x: 0, y: 0 }, t.start = { x: 0, y: 0 }, t.getDragPosition = function(a) {
        var i = a.x, s = a.y;
        return {
          x: i + t.start.x - t.offset.x,
          y: t.offset.y + t.start.y - s
        };
      }, t.updateOptions = function(a) {
        var i, s, o, l, d, f, u, m, b = a.x, p = a.y, S = t, g = S.rail, y = S.track;
        t.start = {
          x: (s = (i = g.current) === null || i === void 0 ? void 0 : i.offsetLeft) !== null && s !== void 0 ? s : 0,
          y: ((l = (o = y.current) === null || o === void 0 ? void 0 : o.offsetHeight) !== null && l !== void 0 ? l : 0) - ((f = (d = g.current) === null || d === void 0 ? void 0 : d.offsetTop) !== null && f !== void 0 ? f : 0) - ((m = (u = g.current) === null || u === void 0 ? void 0 : u.offsetHeight) !== null && m !== void 0 ? m : 0)
        }, t.lastCoordinates = { x: b, y: p }, t.offset = { x: b, y: p };
      }, t.updatePosition = function(a) {
        t.setState(fe(a, t.props, t.slider.current));
      }, t.handleBlur = function() {
        document.removeEventListener("keydown", t.handleKeydown);
      }, t.handleClickTrack = function(a) {
        var i = t.props.onAfterEnd, s = t.state.isDragging;
        if (s)
          t.mounted && t.setState({ isDragging: !1 });
        else {
          var o = a.currentTarget, l = q(a, t.lastCoordinates), d = l.x, f = l.y, u = o.getBoundingClientRect(), m = u.bottom, b = u.left, p = {
            x: d - b,
            y: m - f
          };
          t.lastCoordinates = { x: d, y: f }, t.updatePosition(p), i && i(fe(p, t.props, t.slider.current), t.props);
        }
      }, t.handleDrag = function(a) {
        a.preventDefault();
        var i = q(a, t.lastCoordinates);
        t.updatePosition(t.getDragPosition(i)), t.lastCoordinates = i;
      }, t.handleDragEnd = function(a) {
        a.preventDefault();
        var i = t.props, s = i.onAfterEnd, o = i.onDragEnd, l = fe(t.getDragPosition(q(a, t.lastCoordinates)), t.props, t.slider.current);
        document.removeEventListener("mousemove", t.handleDrag), document.removeEventListener("mouseup", t.handleDragEnd), document.removeEventListener("touchmove", t.handleDrag), document.removeEventListener("touchend", t.handleDragEnd), document.removeEventListener("touchcancel", t.handleDragEnd), o && o(l, t.props), s && s(l, t.props);
      }, t.handleFocus = function() {
        document.addEventListener("keydown", t.handleKeydown, { passive: !1 });
      }, t.handleKeydown = function(a) {
        var i = t.state, s = i.x, o = i.y, l = t.props, d = l.x, f = l.y, u = ae(t.props), m = u.axis, b = u.xMax, p = u.xMin, S = u.xStep, g = u.yMax, y = u.yMin, v = u.yStep, E = { down: "ArrowDown", left: "ArrowLeft", up: "ArrowUp", right: "ArrowRight" };
        if (Object.values(E).includes(a.code)) {
          a.preventDefault();
          var x = {
            x: re(d) ? s : te("x", t.props),
            y: re(f) ? o : te("y", t.props)
          }, C = x.x - S <= p ? p : x.x - S, k = x.x + S >= b ? b : x.x + S, T = x.y - v <= y ? y : x.y - v, N = x.y + v >= g ? g : x.y + v;
          switch (a.code) {
            case E.up: {
              m === "x" ? x.x = k : x.y = N;
              break;
            }
            case E.down: {
              m === "x" ? x.x = C : x.y = T;
              break;
            }
            case E.left: {
              m === "y" ? x.y = T : x.x = C;
              break;
            }
            case E.right:
            default: {
              m === "y" ? x.y = N : x.x = k;
              break;
            }
          }
          t.setState(x);
        }
      }, t.handleMouseDown = function(a) {
        a.preventDefault(), t.updateOptions(q(a, t.lastCoordinates)), t.setState({ isDragging: !0 }), document.addEventListener("mousemove", t.handleDrag), document.addEventListener("mouseup", t.handleDragEnd);
      }, t.handleTouchStart = function(a) {
        a.preventDefault(), t.updateOptions(q(a, t.lastCoordinates)), document.addEventListener("touchmove", t.handleDrag, { passive: !1 }), document.addEventListener("touchend", t.handleDragEnd, { passive: !1 }), document.addEventListener("touchcancel", t.handleDragEnd, { passive: !1 });
      }, t.slider = _.createRef(), t.rail = _.createRef(), t.track = _.createRef(), t.state = {
        isDragging: !1,
        x: te("x", n),
        y: te("y", n)
      }, t;
    }
    return r.prototype.componentDidMount = function() {
      this.mounted = !0;
    }, r.prototype.componentDidUpdate = function(n, t) {
      var a = this.state, i = a.x, s = a.y, o = this.props.onChange, l = t.x, d = t.y;
      o && (i !== l || s !== d) && o({ x: i, y: s }, this.props);
    }, r.prototype.componentWillUnmount = function() {
      this.mounted = !1;
    }, Object.defineProperty(r.prototype, "position", {
      get: function() {
        var n = ae(this.props), t = n.axis, a = n.xMax, i = n.xMin, s = n.yMax, o = n.yMin, l = (this.y - o) / (s - o) * 100, d = (this.x - i) / (a - i) * 100;
        return l > 100 && (l = 100), l < 0 && (l = 0), t === "x" && (l = 0), d > 100 && (d = 100), d < 0 && (d = 0), t === "y" && (d = 0), { x: d, y: l };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "styles", {
      get: function() {
        var n = this.props.styles;
        return rr(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "x", {
      get: function() {
        var n = this.state.x, t = this.props.x;
        return re(t) ? n : t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "y", {
      get: function() {
        var n = this.state.y, t = this.props.y;
        return re(t) ? n : t;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.render = function() {
      var n = this.props, t = n.axis, a = n.className, i = n.xMax, s = n.xMin, o = n.yMax, l = n.yMin, d = er(this.props, "axis", "className", "onAfterEnd", "onChange", "onDragEnd", "styles", "x", "xMin", "xMax", "xStep", "y", "yMin", "yMax", "yStep"), f = this.position, u = f.x, m = f.y, b = { left: "".concat(u, "%"), bottom: "".concat(m, "%") }, p = {}, S, g, y, v, E, x = i, C = s, k = this.x;
      return t === "x" && (p.width = "".concat(u, "%"), y = this.styles.sliderX, S = "horizontal", g = this.styles.rangeX, E = this.styles.trackX, v = this.styles.thumbX), t === "y" && (p.height = "".concat(m, "%"), y = this.styles.sliderY, g = this.styles.rangeY, E = this.styles.trackY, v = this.styles.thumbY, S = "vertical", x = o, C = l, k = this.y), t === "xy" && (p.height = "".concat(m, "%"), p.width = "".concat(u, "%"), y = this.styles.sliderXY, g = this.styles.rangeXY, E = this.styles.trackXY, v = this.styles.thumbXY), _.createElement(
        "div",
        L({ ref: this.slider, className: a, style: y }, d),
        _.createElement(
          "div",
          {
            ref: this.track,
            className: a && "".concat(a, "__track"),
            onClick: this.handleClickTrack,
            role: "presentation",
            // @ts-ignore We can't use React's events because the listeners
            style: E
          },
          _.createElement("div", { className: a && "".concat(a, "__range"), style: L(L({}, p), g) }),
          _.createElement(
            "div",
            {
              ref: this.rail,
              onMouseDown: this.handleMouseDown,
              onTouchStart: this.handleTouchStart,
              // @ts-ignore We can't use React's events because the listeners
              role: "presentation",
              // @ts-ignore We can't use React's events because the listeners
              style: L(L({}, this.styles.rail), b)
            },
            _.createElement("span", { "aria-label": "slider handle", "aria-orientation": S, "aria-valuemax": x, "aria-valuemin": C, "aria-valuenow": k, className: a && "".concat(a, "__thumb"), onBlur: this.handleBlur, onFocus: this.handleFocus, role: "slider", style: v, tabIndex: 0 })
          )
        )
      );
    }, r.defaultProps = ae(), r;
  }(_.Component)
);
const we = ar;
function he(e) {
  const { album: r, artists: n, duration_ms: t, id: a, name: i, uri: s } = e;
  return {
    artists: n,
    durationMs: t,
    id: a ?? "",
    image: Ke(r),
    name: i,
    uri: s
  };
}
function Ke(e) {
  var n;
  const r = Math.max(...e.images.map((t) => t.width || 0));
  return ((n = e.images.find((t) => t.width === r)) == null ? void 0 : n.url) || "";
}
function ir(e) {
  return typeof e == "number";
}
function or() {
  return new Promise((e, r) => {
    if (document.getElementById("spotify-player"))
      e();
    else {
      const t = document.createElement("script");
      t.id = "spotify-player", t.type = "text/javascript", t.async = !1, t.defer = !0, t.src = "https://sdk.scdn.co/spotify-player.js", t.onload = () => e(), t.onerror = (a) => r(new Error(`loadScript: ${a.message}`)), document.head.appendChild(t);
    }
  });
}
function ze(e) {
  const r = Math.floor(e / 1e3 % 60), n = Math.floor(e / (1e3 * 60) % 60), t = Math.floor(e / (1e3 * 60 * 60) % 24), a = [];
  return t > 0 ? a.push(
    `${t}`.padStart(2, "0"),
    `${n}`.padStart(2, "0"),
    `${r}`.padStart(2, "0")
  ) : a.push(`${n}`, `${r}`.padStart(2, "0")), a.join(":");
}
function Le(e) {
  return ir(e) ? e > 1 ? e / 100 : e : 1;
}
function sr(e, r = 2) {
  const n = 10 ** r;
  return Math.round(e * n) / n;
}
function $e(e) {
  const r = ["album", "artist", "playlist", "show", "track"];
  if (e && e.indexOf(":") > -1) {
    const [n, t, a] = e.split(":");
    if (n === "spotify" && r.indexOf(t) >= 0 && a.length === 22)
      return !0;
  }
  return !1;
}
const lr = P("div")(
  {
    alignItems: "center",
    display: "flex",
    fontSize: h(12),
    transition: "height 0.3s",
    zIndex: 10
  },
  ({ style: e }) => ({
    '[class^="rswp_"]': {
      color: e.c,
      lineHeight: 1,
      minWidth: h(32)
    },
    ".rswp_progress": {
      textAlign: "right"
    },
    ".rswp_duration": {
      textAlign: "left"
    }
  }),
  "SliderRSWP"
);
function cr(e) {
  const { durationMs: r, isMagnified: n, onChangeRange: t, onToggleMagnify: a, position: i, progressMs: s, styles: o } = e, l = async ({ x: f }) => {
    t(f);
  }, d = o.sliderHeight + 6;
  return /* @__PURE__ */ c.createElement(
    lr,
    {
      "data-component-name": "Slider",
      "data-position": i,
      onMouseEnter: a,
      onMouseLeave: a,
      style: {
        c: o.color,
        sliderHeight: o.sliderHeight
      }
    },
    /* @__PURE__ */ c.createElement("div", { className: "rswp_progress", style: { fontFamily: o.sliderDurationFontFamily, fontSize: o.sliderDurationFontSize } }, ze(s)),
    /* @__PURE__ */ c.createElement(
      we,
      {
        axis: "x",
        className: "slider",
        "data-component-name": "progress-bar",
        onChange: l,
        styles: {
          options: {
            thumbBorder: 0,
            thumbBorderRadius: o.sliderHandleBorderRadius,
            thumbColor: o.sliderHandleColor,
            thumbSize: n ? d + 4 : d,
            height: n ? o.sliderHeight + 4 : o.sliderHeight,
            padding: "0px 13px",
            rangeColor: o.sliderColor,
            trackBorderRadius: o.sliderTrackBorderRadius,
            trackColor: o.sliderTrackColor
          }
        },
        x: i,
        xMax: 100,
        xMin: 0,
        xStep: 0.1
      }
    ),
    /* @__PURE__ */ c.createElement("div", { className: "rswp_duration", style: { fontFamily: o.sliderDurationFontFamily, fontSize: o.sliderDurationFontSize } }, ze(r))
  );
}
const dr = X(cr);
function ur(e) {
  const {
    // devices,
    durationMs: r,
    // isExternalDevice,
    isMagnified: n,
    // isPlaying,
    // layout,
    // locale,
    // nextTracks,
    onChangeRange: t,
    // onClickNext,
    // onClickPrevious,
    // onClickTogglePlay,
    onToggleMagnify: a,
    position: i,
    // previousTracks,
    progressMs: s,
    styles: o
    // volume,
  } = e;
  return /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(
    dr,
    {
      durationMs: r,
      isMagnified: n,
      onChangeRange: t,
      onToggleMagnify: a,
      position: i,
      progressMs: s,
      styles: o
    }
  ));
}
const fr = X(ur);
function hr(e) {
  const { children: r, isActive: n, onClick: t, ...a } = e, i = H(null), s = H(!1), o = H((l) => {
    const d = i.current;
    l.type === "touchend" && (s.current = !0), !(l.type === "click" && s.current) && d && !d.contains(l.target) && t();
  });
  return W(() => {
    const { current: l } = o;
    return n && (document.addEventListener("touchend", l, !0), document.addEventListener("click", l, !0)), () => {
      document.removeEventListener("touchend", l, !0), document.removeEventListener("click", l, !0);
    };
  }, [n]), /* @__PURE__ */ c.createElement("div", { ref: i, ...a }, r);
}
const Je = X(hr);
function pr(e) {
  return /* @__PURE__ */ c.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...e }, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M57 4c3.864 0 7 3.136 7 7v42a7 7 0 0 1-7 7H31a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h26ZM16 54v6H8v-6h8Zm41-44H31a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM44 32a8 8 0 1 1 0 16 8 8 0 0 1 0-16ZM16 4v6H7a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h9v6H7a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h9Zm28 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}
function mr(e) {
  return /* @__PURE__ */ c.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...e }, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M7.226 10.323a7.228 7.228 0 0 1 7.226-7.226h35.096a7.228 7.228 0 0 1 7.226 7.226V37.16a7.226 7.226 0 0 1-7.226 7.226H14.452a7.226 7.226 0 0 1-7.226-7.226V10.323Zm7.226-1.033c-.57 0-1.033.462-1.033 1.033V37.16c0 .57.463 1.033 1.033 1.033h35.096c.57 0 1.033-.463 1.033-1.033V10.323c0-.57-.463-1.033-1.033-1.033H14.452ZM0 57.806a3.097 3.097 0 0 1 3.097-3.096h57.806a3.097 3.097 0 0 1 0 6.193H3.097A3.097 3.097 0 0 1 0 57.806Z",
      fill: "currentColor"
    }
  ));
}
function gr(e) {
  return /* @__PURE__ */ c.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...e }, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M44.8 0a9.6 9.6 0 0 1 9.6 9.6v44.8a9.6 9.6 0 0 1-9.6 9.6H19.2a9.6 9.6 0 0 1-9.6-9.6V9.6A9.6 9.6 0 0 1 19.2 0h25.6Zm0 6.4H19.2A3.2 3.2 0 0 0 16 9.6v44.8a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V9.6a3.2 3.2 0 0 0-3.2-3.2ZM32 43.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}
function yr(e) {
  return /* @__PURE__ */ c.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...e }, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M45 4c3.864 0 7 3.136 7 7v42a7 7 0 0 1-7 7H19a7 7 0 0 1-7-7V11c0-3.864 3.136-7 7-7h26Zm0 6H19a1 1 0 0 0-1 1v42a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM32 32a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0-16a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
      fill: "currentColor"
    }
  ));
}
const vr = P("div")(
  {
    "pointer-events": "all",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 20,
    "> div": {
      backgroundColor: "#000",
      borderRadius: h(8),
      color: "#fff",
      filter: "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5))",
      fontSize: h(14),
      padding: h(16),
      position: "absolute",
      textAlign: "left",
      "> p": {
        fontWeight: "bold",
        marginBottom: h(8),
        marginTop: h(16),
        whiteSpace: "nowrap"
      },
      button: {
        alignItems: "center",
        display: "flex",
        whiteSpace: "nowrap",
        "&:not(:last-of-type)": {
          marginBottom: h(12)
        },
        span: {
          display: "inline-block",
          marginLeft: h(4)
        }
      },
      "> span": {
        background: "transparent",
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        content: '""',
        display: "block",
        height: 0,
        position: "absolute",
        width: 0
      }
    },
    "> button": {
      alignItems: "center",
      display: "flex",
      fontSize: h(24),
      height: h(32),
      justifyContent: "center",
      width: h(32)
    }
  },
  ({ style: e }) => {
    const r = e.layout === "compact", n = r ? {
      bottom: "120%",
      left: 0
    } : {
      [e.p]: "120%",
      left: 0,
      "@media (min-width: 768px)": {
        left: "auto",
        right: 0
      }
    }, t = r ? {
      bottom: `-${h(6)}`,
      borderTop: "6px solid #000",
      left: h(10)
    } : {
      [e.p === "top" ? "border-bottom" : "border-top"]: "6px solid #000",
      [e.p]: "-6px",
      left: h(10),
      "@media (min-width: 768px)": {
        left: "auto",
        right: h(10)
      }
    };
    return {
      "> button": {
        color: e.c
      },
      "> div": {
        ...n,
        "> span": t
      }
    };
  },
  "DevicesRSWP"
), br = P("div")({
  p: {
    whiteSpace: "nowrap",
    "&:nth-of-type(1)": {
      fontWeight: "bold",
      marginBottom: h(8)
    },
    "&:nth-of-type(2)": {
      alignItems: "center",
      display: "flex",
      span: {
        display: "inline-block",
        marginLeft: h(4)
      }
    }
  }
});
function pe(e) {
  return e.toLowerCase().includes("speaker") ? /* @__PURE__ */ c.createElement(yr, null) : e.toLowerCase().includes("computer") ? /* @__PURE__ */ c.createElement(mr, null) : /* @__PURE__ */ c.createElement(gr, null);
}
function xr(e) {
  const {
    currentDeviceId: r,
    deviceId: n,
    devices: t,
    layout: a,
    locale: i,
    onClickDevice: s,
    open: o,
    playerPosition: l,
    styles: { color: d }
  } = e, [f, u] = K(o), m = (y) => {
    const { dataset: v } = y.currentTarget;
    v.id && (s(v.id), u(!1));
  }, b = Ze(() => {
    u((y) => !y);
  }, []), { currentDevice: p, otherDevices: S } = t.reduce(
    (y, v) => (v.id === r ? y.currentDevice = v : y.otherDevices.push(v), y),
    { currentDevice: null, otherDevices: [] }
  );
  let g = /* @__PURE__ */ c.createElement(pr, null);
  return n && p && p.id !== n && (g = pe(p.type)), /* @__PURE__ */ c.createElement(Je, { isActive: f, onClick: b }, /* @__PURE__ */ c.createElement(
    vr,
    {
      "data-component-name": "Devices",
      "data-device-id": r,
      style: {
        c: d,
        layout: a,
        p: l
      }
    },
    !!t.length && /* @__PURE__ */ c.createElement(c.Fragment, null, f && /* @__PURE__ */ c.createElement("div", null, p && /* @__PURE__ */ c.createElement(br, null, /* @__PURE__ */ c.createElement("p", null, i.currentDevice), /* @__PURE__ */ c.createElement("p", null, pe(p.type), /* @__PURE__ */ c.createElement("span", null, p.name))), !!S.length && /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("p", null, i.otherDevices), S.map((y) => /* @__PURE__ */ c.createElement(
      "button",
      {
        key: y.id,
        "aria-label": y.name,
        "data-id": y.id,
        onClick: m,
        type: "button"
      },
      pe(y.type),
      /* @__PURE__ */ c.createElement("span", null, y.name)
    ))), /* @__PURE__ */ c.createElement("span", null)), /* @__PURE__ */ c.createElement(
      "button",
      {
        "aria-label": i.devices,
        onClick: b,
        title: i.devices,
        type: "button"
      },
      g
    ))
  ));
}
const wr = P("div")(
  {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
  },
  ({ style: e }) => ({
    backgroundColor: e.bgColor,
    borderTop: `1px solid ${e.errorColor}`,
    color: e.errorColor,
    height: h(e.h)
  }),
  "ErrorRSWP"
);
function Sr({
  children: e,
  styles: { bgColor: r, errorColor: n, height: t }
}) {
  return /* @__PURE__ */ c.createElement(wr, { "data-component-name": "ErrorMessage", style: { bgColor: r, errorColor: n, h: t } }, e);
}
const Er = ["h", "s", "l"], Qe = ["r", "g", "b"];
function I(e, r) {
  if (e)
    return;
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error("invariant requires an error message argument");
  let n;
  if (r)
    n = new Error(r);
  else
    throw new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
  throw n.name = "colorizr", n;
}
function et(e) {
  if (!tt(e))
    return !1;
  const r = Object.entries(e);
  return !!r.length && r.every(([n, t]) => Er.includes(n) && t >= 0 && t <= (n === "h" ? 360 : 100));
}
function G(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function tt(e) {
  if (!e)
    return !1;
  const { toString: r } = Object.prototype, n = Object.getPrototypeOf(e);
  return r.call(e) === "[object Object]" && (n === null || n === Object.getPrototypeOf({}));
}
function rt(e) {
  if (!tt(e))
    return !1;
  const r = Object.entries(e);
  return !!r.length && r.every(([n, t]) => Qe.includes(n) && t >= 0 && t <= 255);
}
function je(e) {
  return Array.isArray(e) && e.length === 3 && e.every((r) => r >= 0 && r <= 255);
}
function U(e) {
  return typeof e == "string";
}
function me(e, r) {
  if (I(G(e), "Input is not a number"), Qe.includes(r))
    return Math.max(Math.min(e, 255), 0);
  if (["s", "l"].includes(r))
    return Math.max(Math.min(e, 100), 0);
  if (r === "h")
    return Math.max(Math.min(e, 360), 0);
  throw new Error("Invalid type");
}
const R = {
  amount: "amount must be a number",
  left: "left is required and must be a string",
  right: "right is required and must be a string",
  input: "input is required",
  inputString: "input is required and must be a string",
  invalid: "invalid input",
  options: "invalid options"
};
function j(e, r = 2) {
  const n = 10 ** r;
  return Math.round(e * n) / n;
}
function nt(e, r = !0) {
  return U(e) ? r ? /^#([\da-f]{3,4}|[\da-f]{6,8})$/i.test(e) : /^#([\da-f]{3}|[\da-f]{6})$/i.test(e) : !1;
}
function kr(e) {
  I(U(e), R.inputString);
  const r = e.replace("#", "");
  let n = r;
  return (r.length === 3 || r.length === 4) && (n = "", [...r].forEach((t) => {
    n += t + t;
  })), n = `#${n}`, I(nt(n), "invalid hex"), n;
}
function oe(e) {
  I(U(e), R.inputString);
  const r = kr(e).substr(1);
  return {
    r: parseInt(String(r.charAt(0)) + r.charAt(1), 16),
    g: parseInt(String(r.charAt(2)) + r.charAt(3), 16),
    b: parseInt(String(r.charAt(4)) + r.charAt(5), 16)
  };
}
function at(e) {
  I(!!e, R.input);
  let r = e;
  Array.isArray(e) && (r = { r: e[0], g: e[1], b: e[2] }), I(rt(r), R.invalid);
  const n = me(r.r, "r") / 255, t = me(r.g, "g") / 255, a = me(r.b, "b") / 255, i = Math.min(n, t, a), s = Math.max(n, t, a), o = s - i;
  let l = 0, d;
  const f = (s + i) / 2;
  let u;
  switch (s) {
    case n:
      u = o ? (t - a) / o : 0, l = 60 * u;
      break;
    case t:
      u = (a - n) / o, l = 60 * u + 120;
      break;
    case a:
      u = (n - t) / o, l = 60 * u + 240;
      break;
  }
  return l < 0 && (l = 360 + l), i === s ? d = 0 : d = f < 0.5 ? o / (2 * f) : o / (2 - 2 * f), {
    h: Math.abs(+(l % 360).toFixed(2)),
    s: +(d * 100).toFixed(2),
    l: +(f * 100).toFixed(2)
  };
}
function it(e) {
  return I(U(e), R.inputString), at(oe(e));
}
function ge(e, r, n) {
  I(G(e) && G(r) && G(n), "point, chroma and h are required");
  let t = n;
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? j(e + (r - e) * 6 * t, 4) : t < 1 / 2 ? j(r, 4) : t < 2 / 3 ? j(e + (r - e) * (2 / 3 - t) * 6, 4) : j(e, 4);
}
function ot(e) {
  I(!!e, R.inputString), I(et(e), "invalid input");
  const r = j(e.h) / 360, n = j(e.s) / 100, t = j(e.l) / 100;
  let a, i, s, o, l;
  return n === 0 ? (a = t, i = t, s = t) : (l = t < 0.5 ? t * (1 + n) : t + n - t * n, o = 2 * t - l, a = ge(o, l, r + 1 / 3), i = ge(o, l, r), s = ge(o, l, r - 1 / 3)), {
    r: Math.round(a * 255),
    g: Math.round(i * 255),
    b: Math.round(s * 255)
  };
}
function st(e) {
  I(!!e, R.input), I(je(e) || rt(e), R.invalid);
  let r, n, t;
  return je(e) ? [r, n, t] = e : { r, g: n, b: t } = e, `#${[r.toString(16), n.toString(16), t.toString(16)].map((i) => i.length === 1 ? `0${i}` : i).join("")}`;
}
function Mr(e) {
  return I(et(e), R.invalid), st(ot(e));
}
const Cr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgrey: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  grey: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#d3d3d3",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370d8",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#d87093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function lt(e, r) {
  I(U(e), R.inputString);
  let n;
  const t = Cr[e.toLowerCase()] || e;
  if (nt(t))
    switch (r) {
      case "hsl": {
        n = it(t);
        break;
      }
      case "rgb": {
        n = oe(t);
        break;
      }
      default: {
        n = t;
        break;
      }
    }
  else {
    const a = t.match(/(hsl|rgb)a?\((\d+)(?:,\s*|\s+)(\d+)%?(?:,\s*|\s+)(\d+)%?[^)]*\)/i);
    I(Array.isArray(a), "invalid CSS string"), I(a.length === 5, "invalid CSS string");
    const [, i, s, o, l] = a;
    let d, f, u;
    switch (i === "hsl" ? (f = {
      h: parseInt(s, 10),
      s: parseInt(o, 10),
      l: parseInt(l, 10)
    }, d = Mr(f), u = ot(f)) : (u = {
      r: parseInt(s, 10),
      g: parseInt(o, 10),
      b: parseInt(l, 10)
    }, d = st(u), f = at(u)), r) {
      case "hsl": {
        n = f;
        break;
      }
      case "rgb": {
        n = u;
        break;
      }
      case "hex":
      default: {
        n = d;
        break;
      }
    }
  }
  return n;
}
function Be(e, r = 10, n = "rgb") {
  I(U(e), R.inputString), I(G(r), R.amount);
  const t = lt(e), a = (100 - r) / 100;
  if (n === "rgb") {
    const { r: i, g: s, b: o } = oe(t);
    return `rgba(${i}, ${s}, ${o}, ${a})`;
  }
  if (n === "hsl") {
    const { h: i, s, l: o } = it(t);
    return `hsla(${i}, ${s}%, ${o}%, ${a})`;
  }
  return `${t}${Math.round(a * 255).toString(16)}`;
}
function Ir(e) {
  I(U(e), R.inputString);
  const { r, g: n, b: t } = oe(lt(e));
  return (r * 299 + n * 587 + t * 114) / 1e3 >= 128 ? "#000000" : "#ffffff";
}
function Ar(e) {
  return /* @__PURE__ */ c.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...e }, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M63.673 16.52A17.676 17.676 0 0 0 49.197 2.563c-5.4-.861-10.891.852-14.844 4.63a3.43 3.43 0 0 1-4.672 0C22.956.689 12.305.62 5.498 7.039c-6.808 6.419-7.366 17.055-1.268 24.15l24.246 28.894a4.623 4.623 0 0 0 7.078 0L59.8 31.19a17.328 17.328 0 0 0 3.873-14.66v-.008Z",
      fill: "currentColor"
    }
  ));
}
function Dr(e) {
  return /* @__PURE__ */ c.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 64 64", width: "1em", ...e }, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M5.944 7.206C13.271.3 24.723.34 31.999 7.3A18.924 18.924 0 0 1 48.02 2.32h.008a19.068 19.068 0 0 1 15.617 15.071v.013A18.759 18.759 0 0 1 59.47 33.26L37.573 59.353a7.288 7.288 0 0 1-8.642 1.916 7.276 7.276 0 0 1-2.498-1.912l-21.901-26.1c-6.55-7.671-5.93-19.131 1.408-26.051h.004Zm13.04 1.04a12.726 12.726 0 0 0-9.737 20.997l.021.02 21.905 26.105c.316.372.84.488 1.284.285.143-.066.27-.164.372-.285l21.934-26.137a12.565 12.565 0 0 0 2.808-10.625 12.875 12.875 0 0 0-10.534-10.17 12.714 12.714 0 0 0-10.785 3.37l-.029.029a6.198 6.198 0 0 1-8.444 0l-.037-.033a12.727 12.727 0 0 0-8.758-3.556Z",
      fill: "currentColor"
    }
  ));
}
function Rr({ bgColor: e, ...r }) {
  return /* @__PURE__ */ c.createElement("svg", { height: "1em", preserveAspectRatio: "xMidYMid", viewBox: "0 0 512 160", width: "3.2em", ...r }, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M79.655 0C35.664 0 0 35.663 0 79.654c0 43.993 35.664 79.653 79.655 79.653 43.996 0 79.656-35.66 79.656-79.653 0-43.988-35.66-79.65-79.657-79.65L79.655 0Zm36.53 114.884a4.963 4.963 0 0 1-6.83 1.646c-18.702-11.424-42.246-14.011-69.973-7.676a4.967 4.967 0 0 1-5.944-3.738 4.958 4.958 0 0 1 3.734-5.945c30.343-6.933 56.37-3.948 77.367 8.884a4.965 4.965 0 0 1 1.645 6.83Zm9.75-21.689c-1.799 2.922-5.622 3.845-8.543 2.047-21.41-13.16-54.049-16.972-79.374-9.284a6.219 6.219 0 0 1-7.75-4.138 6.22 6.22 0 0 1 4.141-7.745c28.929-8.778 64.892-4.526 89.48 10.583 2.92 1.798 3.843 5.622 2.045 8.538Zm.836-22.585C101.1 55.362 58.742 53.96 34.231 61.4c-3.936 1.194-8.098-1.028-9.29-4.964a7.453 7.453 0 0 1 4.965-9.294c28.137-8.542 74.912-6.892 104.469 10.655a7.441 7.441 0 0 1 2.606 10.209c-2.092 3.54-6.677 4.707-10.206 2.605h-.004Zm89.944 2.922c-13.754-3.28-16.198-5.581-16.198-10.418 0-4.57 4.299-7.645 10.7-7.645 6.202 0 12.347 2.336 18.796 7.143.19.145.437.203.675.165a.888.888 0 0 0 .6-.367l6.715-9.466a.903.903 0 0 0-.171-1.225c-7.676-6.157-16.313-9.15-26.415-9.15-14.848 0-25.225 8.911-25.225 21.662 0 13.673 8.95 18.515 24.417 22.252 13.155 3.031 15.38 5.57 15.38 10.11 0 5.032-4.49 8.161-11.718 8.161-8.028 0-14.582-2.71-21.906-9.046a.932.932 0 0 0-.656-.218.89.89 0 0 0-.619.313l-7.533 8.96a.906.906 0 0 0 .086 1.256c8.522 7.61 19.004 11.624 30.323 11.624 16 0 26.339-8.742 26.339-22.277.028-11.421-6.81-17.746-23.561-21.821l-.029-.013Zm59.792-13.564c-6.934 0-12.622 2.732-17.321 8.33v-6.3c0-.498-.4-.903-.894-.903h-12.318a.899.899 0 0 0-.894.902v70.009c0 .494.4.903.894.903h12.318a.901.901 0 0 0 .894-.903v-22.097c4.699 5.26 10.387 7.838 17.32 7.838 12.89 0 25.94-9.92 25.94-28.886.019-18.97-13.032-28.894-25.93-28.894l-.01.001Zm11.614 28.893c0 9.653-5.945 16.397-14.468 16.397-8.418 0-14.772-7.048-14.772-16.397 0-9.35 6.354-16.397 14.772-16.397 8.38 0 14.468 6.893 14.468 16.396Zm47.759-28.893c-16.598 0-29.601 12.78-29.601 29.1 0 16.143 12.917 28.784 29.401 28.784 16.655 0 29.696-12.736 29.696-28.991 0-16.2-12.955-28.89-29.496-28.89v-.003Zm0 45.385c-8.827 0-15.485-7.096-15.485-16.497 0-9.444 6.43-16.298 15.285-16.298 8.884 0 15.58 7.093 15.58 16.504 0 9.443-6.468 16.291-15.38 16.291Zm64.937-44.258h-13.554V47.24c0-.497-.4-.902-.894-.902H374.05a.906.906 0 0 0-.904.902v13.855h-5.916a.899.899 0 0 0-.894.902v10.584a.9.9 0 0 0 .894.903h5.916v27.39c0 11.062 5.508 16.674 16.38 16.674 4.413 0 8.075-.914 11.528-2.873a.88.88 0 0 0 .457-.78v-10.083a.896.896 0 0 0-.428-.76.873.873 0 0 0-.876-.039c-2.368 1.19-4.66 1.741-7.229 1.741-3.947 0-5.716-1.798-5.716-5.812V73.49h13.554a.899.899 0 0 0 .894-.903V62.003a.873.873 0 0 0-.884-.903l-.01-.005Zm47.217.054v-1.702c0-5.006 1.921-7.238 6.22-7.238 2.57 0 4.633.51 6.945 1.28a.895.895 0 0 0 1.18-.858l-.001-10.377a.891.891 0 0 0-.637-.865c-2.435-.726-5.555-1.47-10.235-1.47-11.367 0-17.388 6.405-17.388 18.516v2.606h-5.916a.906.906 0 0 0-.904.902v10.638c0 .497.41.903.904.903h5.916v42.237c0 .504.41.904.904.904h12.308c.504 0 .904-.4.904-.904V73.487h11.5l17.616 42.234c-1.998 4.433-3.967 5.317-6.65 5.317-2.168 0-4.46-.646-6.79-1.93a.98.98 0 0 0-.714-.067.896.896 0 0 0-.533.485l-4.175 9.16a.9.9 0 0 0 .39 1.17c4.356 2.359 8.284 3.367 13.145 3.367 9.093 0 14.125-4.242 18.548-15.637l21.364-55.204a.88.88 0 0 0-.095-.838.878.878 0 0 0-.733-.392h-12.822a.901.901 0 0 0-.856.605l-13.136 37.509-14.382-37.534a.898.898 0 0 0-.837-.58h-21.04v-.003Zm-27.375-.054h-12.318a.907.907 0 0 0-.903.902v53.724c0 .504.409.904.903.904h12.318c.495 0 .904-.4.904-.904v-53.72a.9.9 0 0 0-.904-.903v-.003Zm-6.088-24.464c-4.88 0-8.836 3.95-8.836 8.828a8.835 8.835 0 0 0 8.836 8.836c4.88 0 8.827-3.954 8.827-8.836a8.83 8.83 0 0 0-8.827-8.828Z",
      fill: Ir(e)
    }
  ));
}
function Ve(e) {
  return {
    currentDevice: "Current device",
    devices: "Devices",
    next: "Next",
    otherDevices: "Select other device",
    pause: "Pause",
    play: "Play",
    previous: "Previous",
    removeTrack: "Remove from your favorites",
    saveTrack: "Save to your favorites",
    title: "{name} on SPOTIFY",
    volume: "Volume",
    ...e
  };
}
function Ue(e) {
  return {
    activeColor: "#1cb954",
    altColor: "#ccc",
    bgColor: "#fff",
    color: "#333",
    errorColor: "#ff0026",
    height: 80,
    loaderColor: "#ccc",
    loaderSize: 32,
    sliderColor: "#666",
    sliderHandleBorderRadius: "50%",
    sliderHandleColor: "#000",
    sliderHeight: 4,
    sliderTrackBorderRadius: 4,
    sliderTrackColor: "#ccc",
    trackArtistColor: "#666",
    trackNameColor: "#333",
    ...e
  };
}
function ne(e) {
  const [, r = "", n = ""] = e.split(":");
  return `https://open.spotify.com/${r}/${n}`;
}
function Ye(e, r) {
  return r.replace("{name}", e);
}
function ye(e) {
  const [, r = ""] = e.split(":");
  return r;
}
function Tr(e) {
  const r = (i) => window.matchMedia(i).matches, [n, t] = K(r(e));
  function a() {
    t(r(e));
  }
  return W(() => {
    const i = window.matchMedia(e);
    a();
    try {
      i.addEventListener("change", a);
    } catch {
      i.addListener(a);
    }
    return () => {
      try {
        i.removeEventListener("change", a);
      } catch {
        i.removeListener(a);
      }
    };
  }, [e]), n;
}
function ct(e) {
  const r = H();
  return W(() => {
    r.current = e;
  }, [e]), r.current;
}
async function Pr(e, r) {
  const n = Array.isArray(r) ? r : [r];
  return fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${n}`, {
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((t) => t.json());
}
async function Fe(e) {
  return fetch("https://api.spotify.com/v1/me/player/devices", {
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((r) => r.json());
}
async function ve(e) {
  return fetch("https://api.spotify.com/v1/me/player", {
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then((r) => r.status === 204 ? null : r.json());
}
async function Or(e) {
  return fetch("https://api.spotify.com/v1/me/player/pause", {
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function be(e, { context_uri: r, deviceId: n, offset: t = 0, uris: a }) {
  let i;
  if (r) {
    const s = r.indexOf("artist") >= 0;
    let o;
    s || (o = { position: t }), i = JSON.stringify({ context_uri: r, offset: o });
  } else
    Array.isArray(a) && a.length && (i = JSON.stringify({ uris: a, offset: { position: t } }));
  return fetch(`https://api.spotify.com/v1/me/player/play?device_id=${n}`, {
    body: i,
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function _r(e, r) {
  const n = Array.isArray(r) ? r : [r];
  return fetch("https://api.spotify.com/v1/me/tracks", {
    body: JSON.stringify(n),
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "DELETE"
  });
}
async function Nr(e, r) {
  const n = Array.isArray(r) ? r : [r];
  return fetch("https://api.spotify.com/v1/me/tracks", {
    body: JSON.stringify({ ids: n }),
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function zr(e, r) {
  return fetch(`https://api.spotify.com/v1/me/player/seek?position_ms=${r}`, {
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function Lr(e, r, n) {
  return fetch("https://api.spotify.com/v1/me/player", {
    body: JSON.stringify({ device_ids: [r], play: n }),
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
async function $r(e, r) {
  return fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${r}`, {
    headers: {
      Authorization: `Bearer ${e}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
}
const ie = 64, Se = 32, jr = P("div")(
  {
    textAlign: "left",
    "> a": {
      display: "inline-flex",
      textDecoration: "none",
      minHeigth: h(64),
      minWidth: h(64),
      "&:hover": {
        textDecoration: "underline"
      }
    },
    button: {
      alignItems: "center",
      display: "flex",
      fontSize: h(16),
      height: h(Se + 8),
      justifyContent: "center",
      width: h(Se)
    }
  },
  ({ style: e }) => {
    const r = e.layout === "compact", n = {};
    return r ? (n.borderBottom = `1px solid ${Be(e.c, 40)}`, n["> a"] = {
      display: "flex",
      margin: "0 auto",
      maxWidth: h(640),
      paddingBottom: "100%",
      position: "relative",
      img: {
        display: "block",
        bottom: 0,
        left: 0,
        maxWidth: "100%",
        position: "absolute",
        right: 0,
        top: 0
      }
    }) : (n.alignItems = "center", n.display = "flex", n.minHeight = h(80), n["@media (max-width: 767px)"] = {
      borderBottom: `1px solid ${Be(e.c, 40)}`,
      paddingLeft: h(8),
      display: "none",
      width: "100%"
    }, n.img = {
      height: h(ie),
      width: h(ie)
    }, n["&.rswp__active"] = {
      "@media (max-width: 767px)": {
        display: "flex"
      }
    }), {
      button: {
        color: e.c,
        "&.rswp__active": {
          color: e.activeColor
        }
      },
      ...n
    };
  },
  "InfoRSWP"
), Br = P("div")(
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "> a": {
      fontSize: h(22),
      marginTop: h(4)
    }
  },
  ({ style: e }) => {
    const r = e.layout === "compact", n = {};
    return r ? (n.padding = h(8), n.width = "100%") : (n.minHeight = h(ie), e.hideCoverArt ? n.width = "100%" : (n.marginLeft = h(8), n.width = `calc(100% - ${h(ie + 8)})`)), n;
  },
  "ContentWrapperRSWP"
), Vr = P("div")(
  {
    display: "flex",
    justifyContent: "start",
    '[data-type="title-artist-wrapper"]': {
      overflow: "hidden",
      div: {
        marginLeft: `-${h(8)}`,
        whiteSpace: "nowrap"
      }
    },
    p: {
      fontSize: h(14),
      lineHeight: 1.3,
      paddingLeft: h(8),
      paddingRight: h(8),
      width: "100%",
      "&:nth-of-type(1)": {
        alignItems: "center",
        display: "inline-flex"
      },
      "&:nth-of-type(2)": {
        fontSize: h(12)
      }
    },
    span: {
      display: "inline-block"
    }
  },
  ({ style: e }) => ({
    '[data-type="title-artist-wrapper"]': {
      color: e.trackNameColor,
      maxWidth: `calc(100% - ${h(e.showSaveIcon ? Se : 0)})`,
      div: {
        "-webkit-mask-image": `linear-gradient(90deg,transparent 0, ${e.bgColor} 6px, ${e.bgColor} calc(100% - 12px),transparent)`
      }
    },
    p: {
      "&:nth-of-type(1)": {
        color: e.trackNameColor,
        a: {
          color: e.trackNameColor
        }
      },
      "&:nth-of-type(2)": {
        color: e.trackArtistColor,
        a: {
          color: e.trackArtistColor
        }
      }
    }
  }),
  "ContentRSWP"
);
function Ur(e) {
  const {
    hideAttribution: r,
    hideCoverArt: n,
    isActive: t,
    layout: a,
    locale: i,
    onFavoriteStatusChange: s,
    showSaveIcon: o,
    styles: { activeColor: l, bgColor: d, color: f, height: u, trackArtistColor: m, trackNameColor: b },
    token: p,
    track: { artists: S = [], id: g, image: y, name: v, uri: E },
    updateSavedStatus: x
  } = e, [C, k] = K(!1), T = H(!1), N = ct(g), Y = (O) => {
    T.current && k(O);
  }, se = async () => {
    if (!T.current)
      return;
    x && g && x((ee) => {
      Y(ee);
    });
    const O = await Pr(p, g), [le] = O || [!1];
    Y(le), s(C);
  };
  W(() => (T.current = !0, o && g && se(), () => {
    T.current = !1;
  }), []), W(() => {
    o && N !== g && g && (Y(!1), se());
  });
  const F = async () => {
    C ? (await _r(p, g), Y(!1)) : (await Nr(p, g), Y(!0)), s(!C);
  }, Q = Ye(v, i.title);
  let Ee;
  o && g && (Ee = /* @__PURE__ */ c.createElement(
    "button",
    {
      "aria-label": C ? i.removeTrack : i.saveTrack,
      className: C ? "rswp__active" : void 0,
      onClick: F,
      title: C ? i.removeTrack : i.saveTrack,
      type: "button"
    },
    C ? /* @__PURE__ */ c.createElement(Ar, null) : /* @__PURE__ */ c.createElement(Dr, null)
  ));
  const ke = [];
  return t && ke.push("rswp__active"), g ? /* @__PURE__ */ c.createElement(
    jr,
    {
      className: ke.join(" "),
      "data-component-name": "Info",
      style: {
        activeColor: l,
        c: f,
        h: u,
        layout: a,
        showSaveIcon: o
      }
    },
    !n && /* @__PURE__ */ c.createElement(
      "a",
      {
        "aria-label": Q,
        href: ne(E),
        rel: "noreferrer",
        target: "_blank",
        title: Q
      },
      /* @__PURE__ */ c.createElement("img", { alt: v, src: y })
    ),
    /* @__PURE__ */ c.createElement(
      Br,
      {
        style: {
          hideCoverArt: n,
          layout: a,
          showSaveIcon: o
        }
      },
      !!v && /* @__PURE__ */ c.createElement(
        Vr,
        {
          style: {
            bgColor: d,
            layout: a,
            showSaveIcon: o,
            trackArtistColor: m,
            trackNameColor: b
          }
        },
        /* @__PURE__ */ c.createElement("div", { "data-type": "title-artist-wrapper" }, /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("p", null, /* @__PURE__ */ c.createElement("span", null, /* @__PURE__ */ c.createElement(
          "a",
          {
            "aria-label": Q,
            href: ne(E),
            rel: "noreferrer",
            target: "_blank",
            title: Q
          },
          v
        ))), /* @__PURE__ */ c.createElement("p", { title: S.map((O) => O.name).join(", ") }, S.map((O, le) => {
          const ee = Ye(O.name, i.title);
          return /* @__PURE__ */ c.createElement("span", { key: O.uri }, le ? ", " : "", /* @__PURE__ */ c.createElement(
            "a",
            {
              "aria-label": ee,
              href: ne(O.uri),
              rel: "noreferrer",
              target: "_blank",
              title: ee
            },
            O.name
          ));
        })))),
        Ee
      ),
      !r && /* @__PURE__ */ c.createElement(
        "a",
        {
          "aria-label": "Play on Spotify",
          href: ne(E),
          rel: "noreferrer",
          target: "_blank"
        },
        /* @__PURE__ */ c.createElement(Rr, { bgColor: d })
      )
    )
  ) : /* @__PURE__ */ c.createElement("div", null);
}
const Yr = X(Ur), Fr = P("div")(
  {
    alignItems: "center",
    display: "flex",
    jsutifyContent: "center",
    position: "relative",
    "> div": {
      borderRadius: "50%",
      borderStyle: "solid",
      borderWidth: 0,
      boxSizing: "border-box",
      height: 0,
      left: "50%",
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: 0
    }
  },
  ({ style: e }) => {
    const r = Nt({
      "0%": {
        height: 0,
        width: 0
      },
      "30%": {
        borderWidth: h(8),
        height: h(e.loaderSize),
        opacity: 1,
        width: h(e.loaderSize)
      },
      "100%": {
        borderWidth: 0,
        height: h(e.loaderSize),
        opacity: 0,
        width: h(e.loaderSize)
      }
    });
    return {
      height: h(e.h),
      "> div": {
        animation: `${r} 1.15s infinite cubic-bezier(0.215, 0.61, 0.355, 1)`,
        borderColor: e.loaderColor,
        height: h(e.loaderSize),
        width: h(e.loaderSize)
      }
    };
  },
  "LoaderRSWP"
);
function Zr({ styles: { height: e, loaderColor: r, loaderSize: n } }) {
  return /* @__PURE__ */ c.createElement(Fr, { "data-component-name": "Loader", style: { h: e, loaderColor: r, loaderSize: n } }, /* @__PURE__ */ c.createElement("div", null));
}
function Hr(e) {
  return /* @__PURE__ */ c.createElement(
    "svg",
    {
      "data-component-name": "VolumeHigh",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...e
    },
    /* @__PURE__ */ c.createElement(
      "path",
      {
        d: "M37.963 3.402a2.989 2.989 0 0 1 1.5 2.596v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0ZM45 9.542a23.008 23.008 0 0 1 0 44.912V48.25a17.008 17.008 0 0 0 0-32.508Zm-11.532 1.656-23.2 13.4a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6ZM45 22.238a11 11 0 0 1 0 19.52v-19.52Z",
        fill: "currentColor"
      }
    )
  );
}
function Wr(e) {
  return /* @__PURE__ */ c.createElement(
    "svg",
    {
      "data-component-name": "VolumeLow",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...e
    },
    /* @__PURE__ */ c.createElement(
      "path",
      {
        d: "M37.963 3.398a3 3 0 0 1 1.5 2.6v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0v-.004Zm-27.696 21.2a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6l-23.2 13.4ZM45 41.758v-19.52a11 11 0 0 1 0 19.52Z",
        fill: "currentColor"
      }
    )
  );
}
function Xr(e) {
  return /* @__PURE__ */ c.createElement(
    "svg",
    {
      "data-component-name": "VolumeMid",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...e
    },
    /* @__PURE__ */ c.createElement(
      "path",
      {
        d: "M37.963 3.398a3 3 0 0 1 1.5 2.6v52a3 3 0 0 1-4.5 2.6l-27.7-16C.32 40.572-2.06 31.688 1.943 24.73a14.556 14.556 0 0 1 5.32-5.328l27.7-16a3 3 0 0 1 3 0v-.004Zm-27.696 21.2a8.556 8.556 0 0 0 0 14.8l23.2 13.4v-41.6l-23.2 13.4ZM45 48.946a18.008 18.008 0 0 0 0-33.896v6.6a11.996 11.996 0 0 1 0 20.7v6.596Z",
        fill: "currentColor"
      }
    )
  );
}
function qr(e) {
  return /* @__PURE__ */ c.createElement(
    "svg",
    {
      "data-component-name": "VolumeMute",
      height: "1em",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 64 64",
      width: "1em",
      ...e
    },
    /* @__PURE__ */ c.createElement(
      "path",
      {
        d: "M34.963 3.402a3 3 0 0 1 4.5 2.6v7.624a19.03 19.03 0 0 0-6 2.776v-5.2l-23.2 13.4a8.57 8.57 0 0 0-3.12 3.128 8.564 8.564 0 0 0 3.124 11.68l23.196 13.392v-5.2a18.92 18.92 0 0 0 6 2.776v7.624a3 3 0 0 1-4.5 2.596l-27.7-16a14.556 14.556 0 0 1-5.32-5.328C-2.06 32.313.32 23.428 7.263 19.402l27.7-16Zm17.354 17.6a3 3 0 0 1 2.122 5.12l-5.88 5.88 5.876 5.88a3 3 0 0 1-4.24 4.24l-5.88-5.88-5.88 5.88a3 3 0 1 1-4.385-4.095l6.025-6.025-5.876-5.88a3 3 0 0 1 4.236-4.24l5.88 5.88 5.88-5.88a3 3 0 0 1 2.122-.88Z",
        fill: "currentColor"
      }
    )
  );
}
const Gr = P("div")(
  {
    display: "none",
    "pointer-events": "all",
    position: "relative",
    zIndex: 20,
    "> div": {
      alignItems: "center",
      backgroundColor: "#000",
      borderRadius: h(4),
      color: "#fff",
      display: "flex",
      filter: "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5))",
      flexDirection: "column",
      left: "-4px",
      padding: h(16),
      position: "absolute",
      "> span": {
        background: "transparent",
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        content: '""',
        display: "block",
        height: 0,
        position: "absolute",
        width: 0
      }
    },
    "> button": {
      alignItems: "center",
      display: "flex",
      fontSize: h(24),
      height: h(32),
      justifyContent: "center",
      width: h(32)
    },
    "@media (any-pointer: fine)": {
      display: "block"
    }
  },
  ({ style: e }) => {
    const r = e.layout === "compact", n = r ? {
      bottom: `-${h(6)}`,
      borderTop: "6px solid #000"
    } : {
      [e.p === "top" ? "border-bottom" : "border-top"]: "6px solid #000",
      [e.p]: "-6px"
    };
    return {
      "> button": {
        color: e.c
      },
      "> div": {
        [r ? "bottom" : e.p]: "130%",
        "> span": n
      }
    };
  },
  "VolumeRSWP"
), Kr = P("div")(
  {
    display: "none",
    padding: `0 ${h(8)}`,
    "pointer-events": "all",
    "> div": {
      display: "flex",
      padding: `0 ${h(5)}`,
      width: h(100)
    },
    "> span": {
      display: "flex",
      fontSize: h(24)
    },
    "@media (any-pointer: fine)": {
      alignItems: "center",
      display: "flex"
    }
  },
  ({ style: e }) => ({
    color: e.c
  }),
  "VolumeInlineRSWP"
);
function Jr(e) {
  const { inlineVolume: r, layout: n, locale: t, playerPosition: a, setVolume: i, styles: s, volume: o } = e, [l, d] = K(!1), [f, u] = K(o), m = H(), b = ct(o), p = Tr("(min-width: 768px)"), S = n === "responsive" && r && p;
  W(() => {
    b !== o && o !== f && u(o);
  }, [b, o, f]);
  const g = Ze(() => {
    d((x) => !x);
  }, []), y = ({ x, y: C }) => {
    const T = Math.round(S ? x : C) / 100;
    clearTimeout(m.current), i(T), u(T);
  }, v = () => {
    setTimeout(() => {
      d(!1);
    }, 100);
  };
  let E = /* @__PURE__ */ c.createElement(Hr, null);
  return o === 0 ? E = /* @__PURE__ */ c.createElement(qr, null) : o <= 0.4 ? E = /* @__PURE__ */ c.createElement(Wr, null) : o <= 0.7 && (E = /* @__PURE__ */ c.createElement(Xr, null)), S ? /* @__PURE__ */ c.createElement(Kr, { "data-component-name": "Volume", "data-value": o, style: { c: s.color } }, /* @__PURE__ */ c.createElement("span", null, E), /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(
    we,
    {
      axis: "x",
      className: "volume",
      "data-component-name": "volume-bar",
      onAfterEnd: v,
      onChange: y,
      styles: {
        options: {
          thumbBorder: 0,
          thumbBorderRadius: s.sliderHandleBorderRadius,
          thumbColor: s.sliderHandleColor,
          height: s.sliderHeight,
          padding: 0,
          rangeColor: s.sliderColor,
          trackBorderRadius: s.sliderTrackBorderRadius,
          trackColor: s.sliderTrackColor
        }
      },
      x: o * 100,
      xMax: 100,
      xMin: 0
    }
  ))) : /* @__PURE__ */ c.createElement(Je, { isActive: l, onClick: g }, /* @__PURE__ */ c.createElement(
    Gr,
    {
      "data-component-name": "Volume",
      "data-value": o,
      style: { c: s.color, layout: n, p: a }
    },
    l && /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement(
      we,
      {
        axis: "y",
        className: "volume",
        "data-component-name": "volume-bar",
        onAfterEnd: v,
        onChange: y,
        styles: {
          options: {
            padding: 0,
            rangeColor: "#fff",
            thumbBorder: 0,
            thumbBorderRadius: 12,
            thumbColor: "#fff",
            thumbSize: 12,
            trackColor: "rgba(255, 255, 255, 0.5)",
            width: 6
          }
        },
        y: o * 100,
        yMax: 100,
        yMin: 0
      }
    ), /* @__PURE__ */ c.createElement("span", null)),
    /* @__PURE__ */ c.createElement(
      "button",
      {
        "aria-label": t.volume,
        onClick: g,
        title: t.volume,
        type: "button"
      },
      E
    )
  ));
}
const Qr = P("div")(
  {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
    "> *": {
      width: "100%"
    }
  },
  ({ style: e }) => {
    let r = {};
    return e.layout === "responsive" && (r = {
      "> *": {
        "@media (min-width: 768px)": {
          width: "33.3333%"
        }
      },
      "@media (min-width: 768px)": {
        flexDirection: "row",
        padding: `0 ${h(8)}`
      }
    }), {
      ...r
    };
  },
  "WrapperRSWP"
);
function en({
  children: e,
  layout: r
  //  styles
}) {
  return /* @__PURE__ */ c.createElement(Qr, { "data-component-name": "Wrapper", style: { layout: r } }, e);
}
const tn = X(en), z = {
  ACCOUNT: "account",
  AUTHENTICATION: "authentication",
  INITIALIZATION: "initialization",
  PLAYBACK: "playback",
  PLAYER: "player"
}, D = {
  ERROR: "ERROR",
  IDLE: "IDLE",
  INITIALIZING: "INITIALIZING",
  READY: "READY",
  RUNNING: "RUNNING",
  UNSUPPORTED: "UNSUPPORTED"
}, Z = {
  DEVICE: "device_update",
  FAVORITE: "favorite_update",
  PLAYER: "player_update",
  PROGRESS: "progress_update",
  STATUS: "status_update",
  TRACK: "track_update"
};
class rn extends ht {
  constructor(n) {
    super(n);
    w(this, "isMounted", !1);
    w(this, "emptyTrack", {
      artists: [],
      durationMs: 0,
      id: "",
      image: "",
      name: "",
      uri: ""
    });
    w(this, "locale");
    w(this, "player");
    w(this, "playerProgressInterval");
    w(this, "playerSyncInterval");
    w(this, "ref", pt());
    w(this, "renderInlineActions", !1);
    w(this, "resizeTimeout");
    w(this, "seekUpdateInterval", 100);
    w(this, "styles");
    w(this, "syncTimeout");
    // eslint-disable-next-line unicorn/consistent-function-scoping
    w(this, "getPlayOptions", kt((n) => {
      const t = {
        context_uri: void 0,
        uris: void 0
      };
      if (n) {
        const a = Array.isArray(n) ? n : [n];
        if (!a.every((i) => $e(i)))
          return console.error("Invalid URI"), t;
        a.some((i) => ye(i) === "track") ? (a.every((i) => ye(i) === "track") || console.warn("You can't mix tracks URIs with other types"), t.uris = a.filter((i) => $e(i) && ye(i) === "track")) : (a.length > 1 && console.warn("Albums, Artists, Playlists and Podcasts can't have multiple URIs"), t.context_uri = a[0]);
      }
      return t;
    }));
    w(this, "handleChangeRange", async (n) => {
      const { track: t } = this.state, { callback: a } = this.props;
      let i = 0;
      try {
        const s = n / 100;
        let o = {};
        if (this.isExternalPlayer)
          i = Math.round(t.durationMs * s), await zr(this.token, i), o = {
            position: n,
            progressMs: i
          };
        else if (this.player) {
          const l = await this.player.getCurrentState();
          l ? (i = Math.round(l.track_window.current_track.duration_ms * s), await this.player.seek(i), o = {
            position: n,
            progressMs: i
          }) : o = { position: 0 };
        }
        this.updateState(o), a && a({
          ...this.state,
          ...o,
          type: Z.PROGRESS
        });
      } catch (s) {
        console.error(s);
      }
    });
    // private handleClickTogglePlay = async () => {
    //   const { isActive } = this.state;
    //   try {
    //     await this.togglePlay(!this.isExternalPlayer && !isActive);
    //   } catch (error) {
    //     // eslint-disable-next-line no-console
    //     console.error(error);
    //   }
    // };
    // private handleClickPrevious = async () => {
    //   try {
    //     /* istanbul ignore else */
    //     if (this.isExternalPlayer) {
    //       await previous(this.token);
    //       this.syncTimeout = window.setTimeout(() => {
    //         this.syncDevice();
    //       }, 300);
    //     } else if (this.player) {
    //       await this.player.previousTrack();
    //     }
    //   } catch (error) {
    //     // eslint-disable-next-line no-console
    //     console.error(error);
    //   }
    // };
    // private handleClickNext = async () => {
    //   try {
    //     /* istanbul ignore else */
    //     if (this.isExternalPlayer) {
    //       await next(this.token);
    //       this.syncTimeout = window.setTimeout(() => {
    //         this.syncDevice();
    //       }, 300);
    //     } else if (this.player) {
    //       await this.player.nextTrack();
    //     }
    //   } catch (error) {
    //     // eslint-disable-next-line no-console
    //     console.error(error);
    //   }
    // };
    w(this, "handleClickDevice", async (n) => {
      const { isUnsupported: t } = this.state, { autoPlay: a, persistDeviceSelection: i } = this.props;
      this.updateState({ currentDeviceId: n });
      try {
        if (await Lr(this.token, n), i && sessionStorage.setItem("rswpDeviceId", n), t) {
          await this.syncDevice();
          const s = await ve(this.token);
          s && !s.is_playing && a && await this.togglePlay(!0);
        }
      } catch (s) {
        console.error(s);
      }
    });
    w(this, "handleFavoriteStatusChange", (n) => {
      const { isSaved: t } = this.state;
      this.updateState({ isSaved: n }), t !== n && this.handleCallback({
        ...this.state,
        isSaved: n,
        type: Z.FAVORITE
      });
    });
    w(this, "handlePlayerErrors", async (n, t) => {
      const { status: a } = this.state, i = n === z.PLAYBACK, s = n === z.INITIALIZATION;
      let o = a, l = [];
      this.player && !i && (this.player.disconnect(), this.player = void 0), s ? (o = D.UNSUPPORTED, { devices: l = [] } = await Fe(this.token)) : i || (o = D.ERROR), this.updateState({
        devices: l,
        error: t,
        errorType: n,
        isInitializing: !1,
        isUnsupported: s,
        status: o
      });
    });
    w(this, "handlePlayerStateChanges", async (n) => {
      var t;
      try {
        if (n) {
          const {
            paused: a,
            position: i,
            track_window: { current_track: s, next_tracks: o, previous_tracks: l }
          } = n, d = !a, f = await ((t = this.player) == null ? void 0 : t.getVolume()) || 100;
          let u = {};
          i === 0 && s && (u = {
            nextTracks: o.map(he),
            position: 0,
            previousTracks: l.map(he),
            track: he(s)
          }), this.updateState({
            error: "",
            errorType: null,
            isActive: !0,
            isPlaying: d,
            progressMs: i,
            volume: sr(f),
            ...u
          });
        } else
          this.isExternalPlayer ? await this.syncDevice() : this.updateState({
            isActive: !1,
            isPlaying: !1,
            nextTracks: [],
            position: 0,
            previousTracks: [],
            track: {
              artists: [],
              durationMs: 0,
              id: "",
              image: "",
              name: "",
              uri: ""
            }
          });
      } catch (a) {
        console.error(a);
      }
    });
    w(this, "handlePlayerStatus", async ({ device_id: n }) => {
      const { currentDeviceId: t, devices: a } = await this.initializeDevices(n);
      this.updateState({
        currentDeviceId: t,
        deviceId: n,
        devices: a,
        isInitializing: !1,
        status: n ? D.READY : D.IDLE
      });
    });
    w(this, "handleResize", () => {
      const { layout: n = "responsive" } = this.props;
      clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(() => {
        this.renderInlineActions = window.innerWidth >= 768 && n === "responsive", this.forceUpdate();
      }, 100);
    });
    w(this, "handleToggleMagnify", () => {
      const { magnifySliderOnHover: n } = this.props;
      n && this.updateState((t) => ({ isMagnified: !t.isMagnified }));
    });
    w(this, "initializePlayer", () => {
      const { volume: n } = this.state, {
        getOAuthToken: t = (i) => {
          i(this.token);
        },
        name: a = "Spotify Web Player"
      } = this.props;
      window.Spotify && (this.updateState({
        error: "",
        errorType: null,
        isInitializing: !0
      }), this.player = new window.Spotify.Player({
        getOAuthToken: t,
        name: a,
        volume: n
      }), this.player.addListener("ready", this.handlePlayerStatus), this.player.addListener("not_ready", this.handlePlayerStatus), this.player.addListener("player_state_changed", this.handlePlayerStateChanges), this.player.addListener(
        "initialization_error",
        (i) => this.handlePlayerErrors(z.INITIALIZATION, i.message)
      ), this.player.addListener(
        "authentication_error",
        (i) => this.handlePlayerErrors(z.AUTHENTICATION, i.message)
      ), this.player.addListener(
        "account_error",
        (i) => this.handlePlayerErrors(z.ACCOUNT, i.message)
      ), this.player.addListener(
        "playback_error",
        (i) => this.handlePlayerErrors(z.PLAYBACK, i.message)
      ), this.player.addListener("autoplay_failed", async () => {
        console.log("Autoplay is not allowed by the browser autoplay rules");
      }), this.player.connect());
    });
    w(this, "setExternalDevice", (n) => {
      this.updateState({ currentDeviceId: n, isPlaying: !0 });
    });
    w(this, "setVolume", async (n) => {
      this.isExternalPlayer ? (await $r(this.token, Math.round(n * 100)), await this.syncDevice()) : this.player && await this.player.setVolume(n), this.updateState({ volume: n });
    });
    w(this, "syncDevice", async () => {
      if (!this.isMounted)
        return;
      const { deviceId: n } = this.state;
      try {
        const t = await ve(this.token);
        let a = this.emptyTrack;
        if (!t)
          throw new Error("No player");
        t.item && (a = {
          artists: t.item.artists,
          durationMs: t.item.duration_ms,
          id: t.item.id,
          image: Ke(t.item.album),
          name: t.item.name,
          uri: t.item.uri
        }), this.updateState({
          error: "",
          errorType: null,
          isActive: !0,
          isPlaying: t.is_playing,
          nextTracks: [],
          previousTracks: [],
          progressMs: t.item ? t.progress_ms : 0,
          status: D.READY,
          track: a,
          volume: Le(t.device.volume_percent)
        });
      } catch (t) {
        const a = {
          isActive: !1,
          isPlaying: !1,
          position: 0,
          track: this.emptyTrack
        };
        if (n) {
          this.updateState({
            currentDeviceId: n,
            ...a
          });
          return;
        }
        this.updateState({
          error: t.message,
          errorType: z.PLAYER,
          status: D.ERROR,
          ...a
        });
      }
    });
    w(this, "toggleOffset", async () => {
      const { currentDeviceId: n } = this.state, { offset: t, uris: a } = this.props;
      typeof t == "number" && Array.isArray(a) && await be(this.token, { deviceId: n, offset: t, uris: a });
    });
    w(this, "togglePlay", async (n = !1) => {
      const { currentDeviceId: t, isPlaying: a, needsUpdate: i } = this.state, { offset: s, uris: o } = this.props, l = n || i, d = this.getPlayOptions(o);
      try {
        this.isExternalPlayer ? (a ? (await Or(this.token), this.updateState({ isPlaying: !1 })) : await be(this.token, {
          deviceId: t,
          offset: s,
          ...l ? d : void 0
        }), this.syncTimeout = window.setTimeout(() => {
          this.syncDevice();
        }, 300)) : this.player && (await this.player.activateElement(), !await this.player.getCurrentState() && !!(d.context_uri || d.uris) || l ? (await be(this.token, {
          deviceId: t,
          offset: s,
          ...l ? d : void 0
        }), await this.player.togglePlay()) : await this.player.togglePlay()), i && this.updateState({ needsUpdate: !1 });
      } catch (f) {
        console.error(f);
      }
    });
    w(this, "updateSeekBar", async () => {
      if (!this.isMounted)
        return;
      const { progressMs: n, track: t } = this.state;
      try {
        if (this.isExternalPlayer) {
          let a = n / t.durationMs;
          a = Number(((Number.isFinite(a) ? a : 0) * 100).toFixed(1)), this.updateState({
            position: a,
            progressMs: n + this.seekUpdateInterval
          });
        } else if (this.player) {
          const a = await this.player.getCurrentState();
          if (a) {
            const i = a.position, s = Number(
              (i / a.track_window.current_track.duration_ms * 100).toFixed(1)
            );
            this.updateState({
              position: s,
              progressMs: i + this.seekUpdateInterval
            });
          }
        }
      } catch (a) {
        console.error(a);
      }
    });
    w(this, "updateState", (n) => {
      this.isMounted && this.setState(n);
    });
    this.state = {
      currentDeviceId: "",
      deviceId: "",
      devices: [],
      error: "",
      errorType: null,
      isActive: !1,
      isInitializing: !1,
      isMagnified: !1,
      isPlaying: !1,
      isSaved: !1,
      isUnsupported: !1,
      needsUpdate: !1,
      nextTracks: [],
      playerPosition: "bottom",
      position: 0,
      previousTracks: [],
      progressMs: 0,
      status: D.IDLE,
      track: this.emptyTrack,
      volume: Le(n.initialVolume) || 1
    }, this.locale = Ve(n.locale), this.styles = Ue(n.styles);
  }
  async componentDidMount() {
    var t;
    this.isMounted = !0;
    const { top: n = 0 } = ((t = this.ref.current) == null ? void 0 : t.getBoundingClientRect()) || {};
    this.updateState({
      playerPosition: n > window.innerHeight / 2 ? "bottom" : "top",
      status: D.INITIALIZING
    }), window.onSpotifyWebPlaybackSDKReady ? this.initializePlayer() : window.onSpotifyWebPlaybackSDKReady = this.initializePlayer, await or(), window.addEventListener("resize", this.handleResize), this.handleResize();
  }
  async componentDidUpdate(n, t) {
    const { currentDeviceId: a, deviceId: i, isInitializing: s, isPlaying: o, status: l, track: d } = this.state, {
      autoPlay: f,
      layout: u,
      locale: m,
      offset: b,
      play: p,
      showSaveIcon: S,
      styles: g,
      syncExternalDevice: y,
      uris: v
    } = this.props, E = t.status !== D.READY && l === D.READY, x = !$(n.layout, u), C = !$(n.locale, m), k = !$(n.styles, g), T = !$(n.uris, v), N = this.getPlayOptions(v);
    if (!!a && !!(N.context_uri || N.uris) && (E && (f || p)) ? (await this.togglePlay(!0), o || this.updateState({ isPlaying: !0 }), this.isExternalPlayer && (this.syncTimeout = window.setTimeout(() => {
      this.syncDevice();
    }, 600))) : T ? o || p ? await this.togglePlay(!0) : this.updateState({ needsUpdate: !0 }) : n.play !== p && p !== o && await this.togglePlay(!d.id), t.status !== l && this.handleCallback({
      ...this.state,
      type: Z.STATUS
    }), t.currentDeviceId !== a && a && (E || this.handleCallback({
      ...this.state,
      type: Z.DEVICE
    }), await this.toggleSyncInterval(this.isExternalPlayer), await this.updateSeekBar()), t.track.id !== d.id && d.id && (this.handleCallback({
      ...this.state,
      type: Z.TRACK
    }), S && this.updateState({ isSaved: !1 })), t.isPlaying !== o && (this.toggleProgressBar(), await this.toggleSyncInterval(this.isExternalPlayer), this.handleCallback({
      ...this.state,
      type: Z.PLAYER
    })), n.offset !== b && await this.toggleOffset(), t.isInitializing && !s && y && !v) {
      const F = await ve(this.token);
      F && F.is_playing && F.device.id !== i && this.setExternalDevice(F.device.id);
    }
    x && this.handleResize(), C && (this.locale = Ve(m)), k && (this.styles = Ue(g));
  }
  async componentWillUnmount() {
    this.isMounted = !1, this.player && this.player.disconnect(), clearInterval(this.playerSyncInterval), clearInterval(this.playerProgressInterval), clearTimeout(this.syncTimeout), window.removeEventListener("resize", this.handleResize);
  }
  handleCallback(n) {
    const { callback: t } = this.props;
    t && t(n);
  }
  get token() {
    const { token: n } = this.props;
    return n;
  }
  async initializeDevices(n) {
    const { persistDeviceSelection: t } = this.props, { devices: a } = await Fe(this.token);
    let i = n;
    if (t) {
      const s = sessionStorage.getItem("rswpDeviceId");
      !s || !a.some((o) => o.id === s) ? sessionStorage.setItem("rswpDeviceId", i) : i = s;
    }
    return { currentDeviceId: i, devices: a };
  }
  get isExternalPlayer() {
    const { currentDeviceId: n, deviceId: t, status: a } = this.state;
    return n && n !== t || a === D.UNSUPPORTED;
  }
  async toggleSyncInterval(n) {
    const { syncExternalDeviceInterval: t } = this.props;
    try {
      this.isExternalPlayer && n && !this.playerSyncInterval && (await this.syncDevice(), clearInterval(this.playerSyncInterval), this.playerSyncInterval = window.setInterval(
        this.syncDevice,
        t * 1e3
      )), (!n || !this.isExternalPlayer) && this.playerSyncInterval && (clearInterval(this.playerSyncInterval), this.playerSyncInterval = void 0);
    } catch (a) {
      console.error(a);
    }
  }
  toggleProgressBar() {
    const { isPlaying: n } = this.state;
    n ? this.playerProgressInterval || (this.playerProgressInterval = window.setInterval(
      this.updateSeekBar,
      this.seekUpdateInterval
    )) : this.playerProgressInterval && (clearInterval(this.playerProgressInterval), this.playerProgressInterval = void 0);
  }
  render() {
    const {
      currentDeviceId: n,
      deviceId: t,
      devices: a,
      error: i,
      isActive: s,
      isMagnified: o,
      // isPlaying,
      isUnsupported: l,
      // nextTracks,
      playerPosition: d,
      position: f,
      // previousTracks,
      progressMs: u,
      status: m,
      track: b,
      volume: p
    } = this.state, {
      hideAttribution: S = !1,
      hideCoverArt: g = !1,
      inlineVolume: y = !0,
      layout: v = "responsive",
      showSaveIcon: E,
      updateSavedStatus: x
    } = this.props, C = [D.READY, D.UNSUPPORTED].includes(m), k = {
      main: /* @__PURE__ */ c.createElement(Zr, { styles: this.styles })
    };
    return C ? (k.info || (k.info = /* @__PURE__ */ c.createElement(
      Yr,
      {
        hideAttribution: S,
        hideCoverArt: g,
        isActive: s,
        layout: v,
        locale: this.locale,
        onFavoriteStatusChange: this.handleFavoriteStatusChange,
        showSaveIcon: E,
        styles: this.styles,
        token: this.token,
        track: b,
        updateSavedStatus: x
      }
    )), k.devices = /* @__PURE__ */ c.createElement(
      xr,
      {
        currentDeviceId: n,
        deviceId: t,
        devices: a,
        layout: v,
        locale: this.locale,
        onClickDevice: this.handleClickDevice,
        open: l && !t,
        playerPosition: d,
        styles: this.styles
      }
    ), k.volume = n ? /* @__PURE__ */ c.createElement(
      Jr,
      {
        inlineVolume: y,
        layout: v,
        locale: this.locale,
        playerPosition: d,
        setVolume: this.setVolume,
        styles: this.styles,
        volume: p
      }
    ) : null, this.renderInlineActions && (k.actions = /* @__PURE__ */ c.createElement($t, { layout: v, styles: this.styles }, k.devices, k.volume)), k.controls = /* @__PURE__ */ c.createElement(
      fr,
      {
        durationMs: b.durationMs,
        isMagnified: o,
        onChangeRange: this.handleChangeRange,
        onToggleMagnify: this.handleToggleMagnify,
        position: f,
        progressMs: u,
        styles: this.styles
      }
    ), k.main = /* @__PURE__ */ c.createElement(tn, { layout: v, styles: this.styles }, k.controls)) : k.info && (k.main = k.info), m === D.ERROR && (k.main = /* @__PURE__ */ c.createElement(Sr, { styles: this.styles }, i)), // <Player ref={this.ref} data-ready={isReady} styles={this.styles}>
    /* @__PURE__ */ c.createElement("div", null, k.main);
  }
}
// eslint-disable-next-line react/static-property-placement
w(rn, "defaultProps", {
  autoPlay: !1,
  initialVolume: 1,
  magnifySliderOnHover: !1,
  name: "Spotify Web Player",
  persistDeviceSelection: !1,
  showSaveIcon: !1,
  syncExternalDeviceInterval: 5,
  syncExternalDevice: !1
});
export {
  rn as SpotifyWebPlayer
};
