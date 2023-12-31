/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], e)
        : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
    "use strict";
    function e(t, e) {
        (t.prototype = Object.create(e.prototype)),
            ((t.prototype.constructor = t).__proto__ = e);
    }
    function i(t) {
        if (void 0 === t)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
            );
        return t;
    }
    function n(t) {
        return "string" == typeof t;
    }
    function r(t) {
        return "function" == typeof t;
    }
    function s(t) {
        return "number" == typeof t;
    }
    function o(t) {
        return void 0 === t;
    }
    function a(t) {
        return "object" == typeof t;
    }
    function l(t) {
        return !1 !== t;
    }
    function u() {
        return "undefined" != typeof window;
    }
    function c(t) {
        return r(t) || n(t);
    }
    function h(t) {
        return (St = we(t, ce)) && Bi;
    }
    function d(t, e) {
        return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
        );
    }
    function f(t, e) {
        return !e && console.warn(t);
    }
    function p(t, e) {
        return (t && (ce[t] = e) && St && (St[t] = e)) || ce;
    }
    function g() {
        return 0;
    }
    function v(t) {
        var e,
            i,
            n = t[0];
        if ((a(n) || r(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (i = xe.length; i-- && !xe[i].targetTest(n); );
            e = xe[i];
        }
        for (i = t.length; i--; )
            (t[i] && (t[i]._gsap || (t[i]._gsap = new Ve(t[i], e)))) ||
                t.splice(i, 1);
        return t;
    }
    function m(t) {
        return t._gsap || v(Ae(t))[0]._gsap;
    }
    function y(t, e, i) {
        return (i = t[e]) && r(i)
            ? t[e]()
            : (o(i) && t.getAttribute && t.getAttribute(e)) || i;
    }
    function _(t, e) {
        return (t = t.split(",")).forEach(e) || t;
    }
    function x(t) {
        return Math.round(1e5 * t) / 1e5 || 0;
    }
    function b(t) {
        return Math.round(1e7 * t) / 1e7 || 0;
    }
    function w(t, e) {
        var i = e.charAt(0),
            n = parseFloat(e.substr(2));
        return (
            (t = parseFloat(t)),
            "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
        );
    }
    function T(t, e) {
        for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
        return n < i;
    }
    function S() {
        var t,
            e,
            i = ge.length,
            n = ge.slice(0);
        for (ve = {}, t = ge.length = 0; t < i; t++)
            (e = n[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function E(t, e, i, n) {
        ge.length && !yt && S(),
            t.render(e, i, n || (yt && e < 0 && (t._initted || t._startAt))),
            ge.length && !yt && S();
    }
    function k(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(le).length < 2
            ? e
            : n(t)
            ? t.trim()
            : t;
    }
    function C(t) {
        return t;
    }
    function O(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t;
    }
    function A(t, e) {
        for (var i in e)
            "__proto__" !== i &&
                "constructor" !== i &&
                "prototype" !== i &&
                (t[i] = a(e[i]) ? A(t[i] || (t[i] = {}), e[i]) : e[i]);
        return t;
    }
    function M(t, e) {
        var i,
            n = {};
        for (i in t) i in e || (n[i] = t[i]);
        return n;
    }
    function P(t) {
        var e = t.parent || xt,
            i = t.keyframes
                ? (function (t) {
                      return function (e, i) {
                          for (var n in i)
                              n in e ||
                                  ("duration" === n && t) ||
                                  "ease" === n ||
                                  (e[n] = i[n]);
                      };
                  })(ie(t.keyframes))
                : O;
        if (l(t.inherit))
            for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
        return t;
    }
    function L(t, e, i, n, r) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var s,
            o = t[n];
        if (r) for (s = e[r]; o && o[r] > s; ) o = o._prev;
        return (
            o
                ? ((e._next = o._next), (o._next = e))
                : ((e._next = t[i]), (t[i] = e)),
            e._next ? (e._next._prev = e) : (t[n] = e),
            (e._prev = o),
            (e.parent = e._dp = t),
            e
        );
    }
    function D(t, e, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var r = e._prev,
            s = e._next;
        r ? (r._next = s) : t[i] === e && (t[i] = s),
            s ? (s._prev = r) : t[n] === e && (t[n] = r),
            (e._next = e._prev = e.parent = null);
    }
    function z(t, e) {
        !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
            (t._act = 0);
    }
    function I(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
        return t;
    }
    function B(t, e, i, n) {
        return (
            t._startAt &&
            (yt
                ? t._startAt.revert(de)
                : (t.vars.immediateRender && !t.vars.autoRevert) ||
                  t._startAt.render(e, !0, n))
        );
    }
    function Y(t) {
        return t._repeat ? Te(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    }
    function X(t, e) {
        return (
            (t - e._start) * e._ts +
            (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
    }
    function R(t) {
        return (t._end = b(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || Gt) || 0)
        ));
    }
    function N(t, e) {
        var i = t._dp;
        return (
            i &&
                i.smoothChildTiming &&
                t._ts &&
                ((t._start = b(
                    i._time -
                        (0 < t._ts
                            ? e / t._ts
                            : ((t._dirty ? t.totalDuration() : t._tDur) - e) /
                              -t._ts)
                )),
                R(t),
                i._dirty || I(i, t)),
            t
        );
    }
    function q(t, e) {
        var i;
        if (
            ((e._time || (e._initted && !e._dur)) &&
                ((i = X(t.rawTime(), e)),
                (!e._dur || Ce(0, e.totalDuration(), i) - e._tTime > Gt) &&
                    e.render(i, !0)),
            I(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
            if (t._dur < t.duration())
                for (i = t; i._dp; )
                    0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
            t._zTime = -Gt;
        }
    }
    function W(t, e, i, n) {
        return (
            e.parent && z(e),
            (e._start = b(
                (s(i) ? i : i || t !== xt ? ke(t, i, e) : t._time) + e._delay
            )),
            (e._end = b(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            L(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Se(e) || (t._recent = e),
            n || q(t, e),
            t._ts < 0 && N(t, t._tTime),
            t
        );
    }
    function F(t, e) {
        return (
            (ce.ScrollTrigger || d("scrollTrigger", e)) &&
            ce.ScrollTrigger.create(e, t)
        );
    }
    function j(t, e, i, n, r) {
        return (
            ei(t, e, r),
            t._initted
                ? !i &&
                  t._pt &&
                  !yt &&
                  ((t._dur && !1 !== t.vars.lazy) ||
                      (!t._dur && t.vars.lazy)) &&
                  kt !== Be.frame
                    ? (ge.push(t), (t._lazy = [r, n]), 1)
                    : void 0
                : 1
        );
    }
    function H(t, e, i, n) {
        var r = t._repeat,
            s = b(e) || 0,
            o = t._tTime / t._tDur;
        return (
            o && !n && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = r ? (r < 0 ? 1e10 : b(s * (r + 1) + t._rDelay * r)) : s),
            0 < o && !n && N(t, (t._tTime = t._tDur * o)),
            t.parent && R(t),
            i || I(t.parent, t),
            t
        );
    }
    function V(t) {
        return t instanceof Ze ? I(t) : H(t, t._dur);
    }
    function U(t, e, i) {
        var n,
            r,
            o = s(e[1]),
            a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            u = e[a];
        if ((o && (u.duration = e[1]), (u.parent = i), t)) {
            for (n = u, r = i; r && !("immediateRender" in n); )
                (n = r.vars.defaults || {}),
                    (r = l(r.vars.inherit) && r.parent);
            (u.immediateRender = l(n.immediateRender)),
                t < 2 ? (u.runBackwards = 1) : (u.startAt = e[a - 1]);
        }
        return new si(e[0], u, e[1 + a]);
    }
    function G(t, e) {
        return t || 0 === t ? e(t) : e;
    }
    function Z(t, e) {
        return n(t) && (e = ue.exec(t)) ? e[1] : "";
    }
    function $(t, e) {
        return (
            t &&
            a(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && a(t[0]))) &&
            !t.nodeType &&
            t !== bt
        );
    }
    function Q(t) {
        return (
            (t = Ae(t)[0] || f("Invalid scope") || {}),
            function (e) {
                var i = t.current || t.nativeElement || t;
                return Ae(
                    e,
                    i.querySelectorAll
                        ? i
                        : i === t
                        ? f("Invalid scope") || Tt.createElement("div")
                        : t
                );
            }
        );
    }
    function K(t) {
        return t.sort(function () {
            return 0.5 - Math.random();
        });
    }
    function J(t) {
        if (r(t)) return t;
        var e = a(t) ? t : { each: t },
            i = We(e.ease),
            s = e.from || 0,
            o = parseFloat(e.base) || 0,
            l = {},
            u = 0 < s && s < 1,
            c = isNaN(s) || u,
            h = e.axis,
            d = s,
            f = s;
        return (
            n(s)
                ? (d = f = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
                : !u && c && ((d = s[0]), (f = s[1])),
            function (t, n, r) {
                var a,
                    u,
                    p,
                    g,
                    v,
                    m,
                    y,
                    _,
                    x,
                    w = (r || e).length,
                    T = l[w];
                if (!T) {
                    if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, Ut])[1])) {
                        for (
                            y = -Ut;
                            y < (y = r[x++].getBoundingClientRect().left) &&
                            x < w;

                        );
                        x--;
                    }
                    for (
                        T = l[w] = [],
                            a = c ? Math.min(x, w) * d - 0.5 : s % x,
                            u =
                                x === Ut
                                    ? 0
                                    : c
                                    ? (w * f) / x - 0.5
                                    : (s / x) | 0,
                            _ = Ut,
                            m = y = 0;
                        m < w;
                        m++
                    )
                        (p = (m % x) - a),
                            (g = u - ((m / x) | 0)),
                            (T[m] = v =
                                h
                                    ? Math.abs("y" === h ? g : p)
                                    : Kt(p * p + g * g)),
                            y < v && (y = v),
                            v < _ && (_ = v);
                    "random" === s && K(T),
                        (T.max = y - _),
                        (T.min = _),
                        (T.v = w =
                            (parseFloat(e.amount) ||
                                parseFloat(e.each) *
                                    (w < x
                                        ? w - 1
                                        : h
                                        ? "y" === h
                                            ? w / x
                                            : x
                                        : Math.max(x, w / x)) ||
                                0) * ("edges" === s ? -1 : 1)),
                        (T.b = w < 0 ? o - w : o),
                        (T.u = Z(e.amount || e.each) || 0),
                        (i = i && w < 0 ? qe(i) : i);
                }
                return (
                    (w = (T[t] - T.min) / T.max || 0),
                    b(T.b + (i ? i(w) : w) * T.v) + T.u
                );
            }
        );
    }
    function tt(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (i) {
            var n = b(Math.round(parseFloat(i) / t) * t * e);
            return (n - (n % 1)) / e + (s(i) ? 0 : Z(i));
        };
    }
    function et(t, e) {
        var i,
            n,
            o = ie(t);
        return (
            !o &&
                a(t) &&
                ((i = o = t.radius || Ut),
                t.values
                    ? ((t = Ae(t.values)), (n = !s(t[0])) && (i *= i))
                    : (t = tt(t.increment))),
            G(
                e,
                o
                    ? r(t)
                        ? function (e) {
                              return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                          }
                        : function (e) {
                              for (
                                  var r,
                                      o,
                                      a = parseFloat(n ? e.x : e),
                                      l = parseFloat(n ? e.y : 0),
                                      u = Ut,
                                      c = 0,
                                      h = t.length;
                                  h--;

                              )
                                  (r = n
                                      ? (r = t[h].x - a) * r +
                                        (o = t[h].y - l) * o
                                      : Math.abs(t[h] - a)) < u &&
                                      ((u = r), (c = h));
                              return (
                                  (c = !i || u <= i ? t[c] : e),
                                  n || c === e || s(e) ? c : c + Z(e)
                              );
                          }
                    : tt(t)
            )
        );
    }
    function it(t, e, i, n) {
        return G(ie(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
            return ie(t)
                ? t[~~(Math.random() * t.length)]
                : (i = i || 1e-5) &&
                      (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                      Math.floor(
                          Math.round(
                              (t - i / 2 + Math.random() * (e - t + 0.99 * i)) /
                                  i
                          ) *
                              i *
                              n
                      ) / n;
        });
    }
    function nt(t, e, i) {
        return G(i, function (i) {
            return t[~~e(i)];
        });
    }
    function rt(t) {
        for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            (n = t.indexOf(")", e)),
                (r = "[" === t.charAt(e + 7)),
                (i = t.substr(e + 7, n - e - 7).match(r ? le : ne)),
                (o +=
                    t.substr(s, e - s) +
                    it(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
                (s = n + 1);
        return o + t.substr(s, t.length - s);
    }
    function st(t, e, i) {
        var n,
            r,
            s,
            o = t.labels,
            a = Ut;
        for (n in o)
            (r = o[n] - e) < 0 == !!i &&
                r &&
                a > (r = Math.abs(r)) &&
                ((s = n), (a = r));
        return s;
    }
    function ot(t) {
        return (
            z(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!yt),
            t.progress() < 1 && Pe(t, "onInterrupt"),
            t
        );
    }
    function at(t, e, i) {
        return (
            ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
                ? e + (i - e) * t * 6
                : t < 0.5
                ? i
                : 3 * t < 2
                ? e + (i - e) * (2 / 3 - t) * 6
                : e) *
                Le +
                0.5) |
            0
        );
    }
    function lt(t, e, i) {
        var n,
            r,
            o,
            a,
            l,
            u,
            c,
            h,
            d,
            f,
            p = t ? (s(t) ? [t >> 16, (t >> 8) & Le, t & Le] : 0) : De.black;
        if (!p) {
            if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), De[t])
            )
                p = De[t];
            else if ("#" === t.charAt(0)) {
                if (
                    (t.length < 6 &&
                        (t =
                            "#" +
                            (n = t.charAt(1)) +
                            n +
                            (r = t.charAt(2)) +
                            r +
                            (o = t.charAt(3)) +
                            o +
                            (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                    9 === t.length)
                )
                    return [
                        (p = parseInt(t.substr(1, 6), 16)) >> 16,
                        (p >> 8) & Le,
                        p & Le,
                        parseInt(t.substr(7), 16) / 255,
                    ];
                p = [
                    (t = parseInt(t.substr(1), 16)) >> 16,
                    (t >> 8) & Le,
                    t & Le,
                ];
            } else if ("hsl" === t.substr(0, 3))
                if (((p = f = t.match(ne)), e)) {
                    if (~t.indexOf("="))
                        return (
                            (p = t.match(re)),
                            i && p.length < 4 && (p[3] = 1),
                            p
                        );
                } else
                    (a = (+p[0] % 360) / 360),
                        (l = p[1] / 100),
                        (n =
                            2 * (u = p[2] / 100) -
                            (r = u <= 0.5 ? u * (l + 1) : u + l - u * l)),
                        3 < p.length && (p[3] *= 1),
                        (p[0] = at(a + 1 / 3, n, r)),
                        (p[1] = at(a, n, r)),
                        (p[2] = at(a - 1 / 3, n, r));
            else p = t.match(ne) || De.transparent;
            p = p.map(Number);
        }
        return (
            e &&
                !f &&
                ((n = p[0] / Le),
                (r = p[1] / Le),
                (o = p[2] / Le),
                (u = ((c = Math.max(n, r, o)) + (h = Math.min(n, r, o))) / 2),
                c === h
                    ? (a = l = 0)
                    : ((d = c - h),
                      (l = 0.5 < u ? d / (2 - c - h) : d / (c + h)),
                      (a =
                          c === n
                              ? (r - o) / d + (r < o ? 6 : 0)
                              : c === r
                              ? (o - n) / d + 2
                              : (n - r) / d + 4),
                      (a *= 60)),
                (p[0] = ~~(a + 0.5)),
                (p[1] = ~~(100 * l + 0.5)),
                (p[2] = ~~(100 * u + 0.5))),
            i && p.length < 4 && (p[3] = 1),
            p
        );
    }
    function ut(t) {
        var e = [],
            i = [],
            n = -1;
        return (
            t.split(ze).forEach(function (t) {
                var r = t.match(se) || [];
                e.push.apply(e, r), i.push((n += r.length + 1));
            }),
            (e.c = i),
            e
        );
    }
    function ct(t, e, i) {
        var n,
            r,
            s,
            o,
            a = "",
            l = (t + a).match(ze),
            u = e ? "hsla(" : "rgba(",
            c = 0;
        if (!l) return t;
        if (
            ((l = l.map(function (t) {
                return (
                    (t = lt(t, e, 1)) &&
                    u +
                        (e
                            ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                            : t.join(",")) +
                        ")"
                );
            })),
            i && ((s = ut(t)), (n = i.c).join(a) !== s.c.join(a)))
        )
            for (o = (r = t.replace(ze, "1").split(se)).length - 1; c < o; c++)
                a +=
                    r[c] +
                    (~n.indexOf(c)
                        ? l.shift() || u + "0,0,0,0)"
                        : (s.length ? s : l.length ? l : i).shift());
        if (!r)
            for (o = (r = t.split(ze)).length - 1; c < o; c++) a += r[c] + l[c];
        return a + r[o];
    }
    function ht(t) {
        var e,
            i = t.join(" ");
        if (((ze.lastIndex = 0), ze.test(i)))
            return (
                (e = Ie.test(i)),
                (t[1] = ct(t[1], e)),
                (t[0] = ct(t[0], e, ut(t[1]))),
                !0
            );
    }
    function dt(t, e) {
        for (var i, n = t._first; n; )
            n instanceof Ze
                ? dt(n, e)
                : !n.vars.yoyoEase ||
                  (n._yoyo && n._repeat) ||
                  n._yoyo === e ||
                  (n.timeline
                      ? dt(n.timeline, e)
                      : ((i = n._ease),
                        (n._ease = n._yEase),
                        (n._yEase = i),
                        (n._yoyo = e))),
                (n = n._next);
    }
    function ft(t, e, i, n) {
        void 0 === i &&
            (i = function (t) {
                return 1 - e(1 - t);
            }),
            void 0 === n &&
                (n = function (t) {
                    return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
        var r,
            s = { easeIn: e, easeOut: i, easeInOut: n };
        return (
            _(t, function (t) {
                for (var e in ((Xe[t] = ce[t] = s),
                (Xe[(r = t.toLowerCase())] = i),
                s))
                    Xe[
                        r +
                            ("easeIn" === e
                                ? ".in"
                                : "easeOut" === e
                                ? ".out"
                                : ".inOut")
                    ] = Xe[t + "." + e] = s[e];
            }),
            s
        );
    }
    function pt(t) {
        return function (e) {
            return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t(2 * (e - 0.5)) / 2;
        };
    }
    function gt(t, e, i) {
        function n(t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * te((t - o) * s) + 1;
        }
        var r = 1 <= e ? e : 1,
            s = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
            o = (s / Zt) * (Math.asin(1 / r) || 0),
            a =
                "out" === t
                    ? n
                    : "in" === t
                    ? function (t) {
                          return 1 - n(1 - t);
                      }
                    : pt(n);
        return (
            (s = Zt / s),
            (a.config = function (e, i) {
                return gt(t, e, i);
            }),
            a
        );
    }
    function vt(t, e) {
        function i(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
        }
        void 0 === e && (e = 1.70158);
        var n =
            "out" === t
                ? i
                : "in" === t
                ? function (t) {
                      return 1 - i(1 - t);
                  }
                : pt(i);
        return (
            (n.config = function (e) {
                return vt(t, e);
            }),
            n
        );
    }
    var mt,
        yt,
        _t,
        xt,
        bt,
        wt,
        Tt,
        St,
        Et,
        kt,
        Ct,
        Ot,
        At,
        Mt,
        Pt,
        Lt,
        Dt,
        zt,
        It,
        Bt,
        Yt,
        Xt,
        Rt,
        Nt,
        qt,
        Wt,
        Ft,
        jt,
        Ht = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
        },
        Vt = { duration: 0.5, overwrite: !1, delay: 0 },
        Ut = 1e8,
        Gt = 1 / Ut,
        Zt = 2 * Math.PI,
        $t = Zt / 4,
        Qt = 0,
        Kt = Math.sqrt,
        Jt = Math.cos,
        te = Math.sin,
        ee =
            ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
        ie = Array.isArray,
        ne = /(?:-?\.?\d|\.)+/gi,
        re = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        se = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        oe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ae = /[+-]=-?[.\d]+/,
        le = /[^,'"\[\]\s]+/gi,
        ue = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ce = {},
        he = { suppressEvents: !0, isStart: !0, kill: !1 },
        de = { suppressEvents: !0, kill: !1 },
        fe = { suppressEvents: !0 },
        pe = {},
        ge = [],
        ve = {},
        me = {},
        ye = {},
        _e = 30,
        xe = [],
        be = "",
        we = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        },
        Te = function (t, e) {
            var i = Math.floor((t /= e));
            return t && i === t ? i - 1 : i;
        },
        Se = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
        },
        Ee = { _start: 0, endTime: g, totalDuration: g },
        ke = function t(e, i, r) {
            var s,
                o,
                a,
                l = e.labels,
                u = e._recent || Ee,
                c = e.duration() >= Ut ? u.endTime(!1) : e._dur;
            return n(i) && (isNaN(i) || i in l)
                ? ((o = i.charAt(0)),
                  (a = "%" === i.substr(-1)),
                  (s = i.indexOf("=")),
                  "<" === o || ">" === o
                      ? (0 <= s && (i = i.replace(/=/, "")),
                        ("<" === o ? u._start : u.endTime(0 <= u._repeat)) +
                            (parseFloat(i.substr(1)) || 0) *
                                (a ? (s < 0 ? u : r).totalDuration() / 100 : 1))
                      : s < 0
                      ? (i in l || (l[i] = c), l[i])
                      : ((o = parseFloat(i.charAt(s - 1) + i.substr(s + 1))),
                        a &&
                            r &&
                            (o =
                                (o / 100) * (ie(r) ? r[0] : r).totalDuration()),
                        1 < s ? t(e, i.substr(0, s - 1), r) + o : c + o))
                : null == i
                ? c
                : +i;
        },
        Ce = function (t, e, i) {
            return i < t ? t : e < i ? e : i;
        },
        Oe = [].slice,
        Ae = function (t, e, i) {
            return _t && !e && _t.selector
                ? _t.selector(t)
                : !n(t) || i || (!wt && Ye())
                ? ie(t)
                    ? (function (t, e, i) {
                          return (
                              void 0 === i && (i = []),
                              t.forEach(function (t) {
                                  return (n(t) && !e) || $(t, 1)
                                      ? i.push.apply(i, Ae(t))
                                      : i.push(t);
                              }) || i
                          );
                      })(t, i)
                    : $(t)
                    ? Oe.call(t, 0)
                    : t
                    ? [t]
                    : []
                : Oe.call((e || Tt).querySelectorAll(t), 0);
        },
        Me = function (t, e, i, n, r) {
            var s = e - t,
                o = n - i;
            return G(r, function (e) {
                return i + (((e - t) / s) * o || 0);
            });
        },
        Pe = function (t, e, i) {
            var n,
                r,
                s,
                o = t.vars,
                a = o[e],
                l = _t,
                u = t._ctx;
            if (a)
                return (
                    (n = o[e + "Params"]),
                    (r = o.callbackScope || t),
                    i && ge.length && S(),
                    u && (_t = u),
                    (s = n ? a.apply(r, n) : a.call(r)),
                    (_t = l),
                    s
                );
        },
        Le = 255,
        De = {
            aqua: [0, Le, Le],
            lime: [0, Le, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Le],
            navy: [0, 0, 128],
            white: [Le, Le, Le],
            olive: [128, 128, 0],
            yellow: [Le, Le, 0],
            orange: [Le, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Le, 0, 0],
            pink: [Le, 192, 203],
            cyan: [0, Le, Le],
            transparent: [Le, Le, Le, 0],
        },
        ze = (function () {
            var t,
                e =
                    "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in De) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
        })(),
        Ie = /hsl[a]?\(/,
        Be =
            ((It = Date.now),
            (Bt = 500),
            (Yt = 33),
            (Xt = It()),
            (Rt = Xt),
            (qt = Nt = 1e3 / 240),
            (Lt = {
                time: 0,
                frame: 0,
                tick: function () {
                    Fe(!0);
                },
                deltaRatio: function (t) {
                    return Dt / (1e3 / (t || 60));
                },
                wake: function () {
                    Et &&
                        (!wt &&
                            u() &&
                            ((bt = wt = window),
                            (Tt = bt.document || {}),
                            (ce.gsap = Bi),
                            (bt.gsapVersions || (bt.gsapVersions = [])).push(
                                Bi.version
                            ),
                            h(
                                St ||
                                    bt.GreenSockGlobals ||
                                    (!bt.gsap && bt) ||
                                    {}
                            ),
                            (Pt = bt.requestAnimationFrame)),
                        At && Lt.sleep(),
                        (Mt =
                            Pt ||
                            function (t) {
                                return setTimeout(
                                    t,
                                    (qt - 1e3 * Lt.time + 1) | 0
                                );
                            }),
                        (Ot = 1),
                        Fe(2));
                },
                sleep: function () {
                    (Pt ? bt.cancelAnimationFrame : clearTimeout)(At),
                        (Ot = 0),
                        (Mt = g);
                },
                lagSmoothing: function (t, e) {
                    (Bt = t || 1 / 0), (Yt = Math.min(e || 33, Bt));
                },
                fps: function (t) {
                    (Nt = 1e3 / (t || 240)), (qt = 1e3 * Lt.time + Nt);
                },
                add: function (t, e, i) {
                    var n = e
                        ? function (e, i, r, s) {
                              t(e, i, r, s), Lt.remove(n);
                          }
                        : t;
                    return Lt.remove(t), Wt[i ? "unshift" : "push"](n), Ye(), n;
                },
                remove: function (t, e) {
                    ~(e = Wt.indexOf(t)) && Wt.splice(e, 1) && e <= zt && zt--;
                },
                _listeners: (Wt = []),
            })),
        Ye = function () {
            return !Ot && Be.wake();
        },
        Xe = {},
        Re = /^[\d.\-M][\d.\-,\s]/,
        Ne = /["']/g,
        qe = function (t) {
            return function (e) {
                return 1 - t(1 - e);
            };
        },
        We = function (t, e) {
            return (
                (t &&
                    (r(t)
                        ? t
                        : Xe[t] ||
                          (function (t) {
                              var e = (t + "").split("("),
                                  i = Xe[e[0]];
                              return i && 1 < e.length && i.config
                                  ? i.config.apply(
                                        null,
                                        ~t.indexOf("{")
                                            ? [
                                                  (function (t) {
                                                      for (
                                                          var e,
                                                              i,
                                                              n,
                                                              r = {},
                                                              s = t
                                                                  .substr(
                                                                      1,
                                                                      t.length -
                                                                          3
                                                                  )
                                                                  .split(":"),
                                                              o = s[0],
                                                              a = 1,
                                                              l = s.length;
                                                          a < l;
                                                          a++
                                                      )
                                                          (i = s[a]),
                                                              (e =
                                                                  a !== l - 1
                                                                      ? i.lastIndexOf(
                                                                            ","
                                                                        )
                                                                      : i.length),
                                                              (n = i.substr(
                                                                  0,
                                                                  e
                                                              )),
                                                              (r[o] = isNaN(n)
                                                                  ? n
                                                                        .replace(
                                                                            Ne,
                                                                            ""
                                                                        )
                                                                        .trim()
                                                                  : +n),
                                                              (o = i
                                                                  .substr(e + 1)
                                                                  .trim());
                                                      return r;
                                                  })(e[1]),
                                              ]
                                            : (function (t) {
                                                  var e = t.indexOf("(") + 1,
                                                      i = t.indexOf(")"),
                                                      n = t.indexOf("(", e);
                                                  return t.substring(
                                                      e,
                                                      ~n && n < i
                                                          ? t.indexOf(
                                                                ")",
                                                                i + 1
                                                            )
                                                          : i
                                                  );
                                              })(t)
                                                  .split(",")
                                                  .map(k)
                                    )
                                  : Xe._CE && Re.test(t)
                                  ? Xe._CE("", t)
                                  : i;
                          })(t))) ||
                e
            );
        };
    function Fe(t) {
        var e,
            i,
            n,
            r,
            s = It() - Rt,
            o = !0 === t;
        if (
            (Bt < s && (Xt += s - Yt),
            (0 < (e = (n = (Rt += s) - Xt) - qt) || o) &&
                ((r = ++Lt.frame),
                (Dt = n - 1e3 * Lt.time),
                (Lt.time = n /= 1e3),
                (qt += e + (Nt <= e ? 4 : Nt - e)),
                (i = 1)),
            o || (At = Mt(Fe)),
            i)
        )
            for (zt = 0; zt < Wt.length; zt++) Wt[zt](n, Dt, r, t);
    }
    function je(t) {
        return t < jt
            ? Ft * t * t
            : t < 0.7272727272727273
            ? Ft * Math.pow(t - 1.5 / 2.75, 2) + 0.75
            : t < 0.9090909090909092
            ? Ft * (t -= 2.25 / 2.75) * t + 0.9375
            : Ft * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
    }
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var i = e < 5 ? e + 1 : e;
        ft(
            t + ",Power" + (i - 1),
            e
                ? function (t) {
                      return Math.pow(t, i);
                  }
                : function (t) {
                      return t;
                  },
            function (t) {
                return 1 - Math.pow(1 - t, i);
            },
            function (t) {
                return t < 0.5
                    ? Math.pow(2 * t, i) / 2
                    : 1 - Math.pow(2 * (1 - t), i) / 2;
            }
        );
    }),
        (Xe.Linear.easeNone = Xe.none = Xe.Linear.easeIn),
        ft("Elastic", gt("in"), gt("out"), gt()),
        (Ft = 7.5625),
        (jt = 1 / 2.75),
        ft(
            "Bounce",
            function (t) {
                return 1 - je(1 - t);
            },
            je
        ),
        ft("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        ft("Circ", function (t) {
            return -(Kt(1 - t * t) - 1);
        }),
        ft("Sine", function (t) {
            return 1 === t ? 1 : 1 - Jt(t * $t);
        }),
        ft("Back", vt("in"), vt("out"), vt()),
        (Xe.SteppedEase =
            Xe.steps =
            ce.SteppedEase =
                {
                    config: function (t, e) {
                        void 0 === t && (t = 1);
                        var i = 1 / t,
                            n = t + (e ? 0 : 1),
                            r = e ? 1 : 0;
                        return function (t) {
                            return (((n * Ce(0, 0.99999999, t)) | 0) + r) * i;
                        };
                    },
                }),
        (Vt.ease = Xe["quad.out"]),
        _(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
                return (be += t + "," + t + "Params,");
            }
        );
    var He,
        Ve = function (t, e) {
            (this.id = Qt++),
                ((t._gsap = this).target = t),
                (this.harness = e),
                (this.get = e ? e.get : y),
                (this.set = e ? e.getSetter : hi);
        },
        Ue =
            (((He = Ge.prototype).delay = function (t) {
                return t || 0 === t
                    ? (this.parent &&
                          this.parent.smoothChildTiming &&
                          this.startTime(this._start + t - this._delay),
                      (this._delay = t),
                      this)
                    : this._delay;
            }),
            (He.duration = function (t) {
                return arguments.length
                    ? this.totalDuration(
                          0 < this._repeat
                              ? t + (t + this._rDelay) * this._repeat
                              : t
                      )
                    : this.totalDuration() && this._dur;
            }),
            (He.totalDuration = function (t) {
                return arguments.length
                    ? ((this._dirty = 0),
                      H(
                          this,
                          this._repeat < 0
                              ? t
                              : (t - this._repeat * this._rDelay) /
                                    (this._repeat + 1)
                      ))
                    : this._tDur;
            }),
            (He.totalTime = function (t, e) {
                if ((Ye(), !arguments.length)) return this._tTime;
                var i = this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                    for (
                        N(this, t), !i._dp || i.parent || q(i, this);
                        i && i.parent;

                    )
                        i.parent._time !==
                            i._start +
                                (0 <= i._ts
                                    ? i._tTime / i._ts
                                    : (i.totalDuration() - i._tTime) /
                                      -i._ts) && i.totalTime(i._tTime, !0),
                            (i = i.parent);
                    !this.parent &&
                        this._dp.autoRemoveChildren &&
                        ((0 < this._ts && t < this._tDur) ||
                            (this._ts < 0 && 0 < t) ||
                            (!this._tDur && !t)) &&
                        W(this._dp, this, this._start - this._delay);
                }
                return (
                    (this._tTime !== t ||
                        (!this._dur && !e) ||
                        (this._initted && Math.abs(this._zTime) === Gt) ||
                        (!t &&
                            !this._initted &&
                            (this.add || this._ptLookup))) &&
                        (this._ts || (this._pTime = t), E(this, t, e)),
                    this
                );
            }),
            (He.time = function (t, e) {
                return arguments.length
                    ? this.totalTime(
                          Math.min(this.totalDuration(), t + Y(this)) %
                              (this._dur + this._rDelay) || (t ? this._dur : 0),
                          e
                      )
                    : this._time;
            }),
            (He.totalProgress = function (t, e) {
                return arguments.length
                    ? this.totalTime(this.totalDuration() * t, e)
                    : this.totalDuration()
                    ? Math.min(1, this._tTime / this._tDur)
                    : this.ratio;
            }),
            (He.progress = function (t, e) {
                return arguments.length
                    ? this.totalTime(
                          this.duration() *
                              (!this._yoyo || 1 & this.iteration()
                                  ? t
                                  : 1 - t) +
                              Y(this),
                          e
                      )
                    : this.duration()
                    ? Math.min(1, this._time / this._dur)
                    : this.ratio;
            }),
            (He.iteration = function (t, e) {
                var i = this.duration() + this._rDelay;
                return arguments.length
                    ? this.totalTime(this._time + (t - 1) * i, e)
                    : this._repeat
                    ? Te(this._tTime, i) + 1
                    : 1;
            }),
            (He.timeScale = function (t) {
                if (!arguments.length) return this._rts === -Gt ? 0 : this._rts;
                if (this._rts === t) return this;
                var e =
                    this.parent && this._ts
                        ? X(this.parent._time, this)
                        : this._tTime;
                return (
                    (this._rts = +t || 0),
                    (this._ts = this._ps || t === -Gt ? 0 : this._rts),
                    this.totalTime(Ce(-this._delay, this._tDur, e), !0),
                    R(this),
                    (function (t) {
                        for (var e = t.parent; e && e.parent; )
                            (e._dirty = 1), e.totalDuration(), (e = e.parent);
                        return t;
                    })(this)
                );
            }),
            (He.paused = function (t) {
                return arguments.length
                    ? (this._ps !== t &&
                          ((this._ps = t)
                              ? ((this._pTime =
                                    this._tTime ||
                                    Math.max(-this._delay, this.rawTime())),
                                (this._ts = this._act = 0))
                              : (Ye(),
                                (this._ts = this._rts),
                                this.totalTime(
                                    this.parent &&
                                        !this.parent.smoothChildTiming
                                        ? this.rawTime()
                                        : this._tTime || this._pTime,
                                    1 === this.progress() &&
                                        Math.abs(this._zTime) !== Gt &&
                                        (this._tTime -= Gt)
                                ))),
                      this)
                    : this._ps;
            }),
            (He.startTime = function (t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return (
                        !e ||
                            (!e._sort && this.parent) ||
                            W(e, this, t - this._delay),
                        this
                    );
                }
                return this._start;
            }),
            (He.endTime = function (t) {
                return (
                    this._start +
                    (l(t) ? this.totalDuration() : this.duration()) /
                        Math.abs(this._ts || 1)
                );
            }),
            (He.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e
                    ? t &&
                      (!this._ts ||
                          (this._repeat &&
                              this._time &&
                              this.totalProgress() < 1))
                        ? this._tTime % (this._dur + this._rDelay)
                        : this._ts
                        ? X(e.rawTime(t), this)
                        : this._tTime
                    : this._tTime;
            }),
            (He.revert = function (t) {
                void 0 === t && (t = fe);
                var e = yt;
                return (
                    (yt = t),
                    (this._initted || this._startAt) &&
                        (this.timeline && this.timeline.revert(t),
                        this.totalTime(-0.01, t.suppressEvents)),
                    "nested" !== this.data && !1 !== t.kill && this.kill(),
                    (yt = e),
                    this
                );
            }),
            (He.globalTime = function (t) {
                for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                    (i = e._start + i / (e._ts || 1)), (e = e._dp);
                return !this.parent && this._sat
                    ? this._sat.vars.immediateRender
                        ? -1
                        : this._sat.globalTime(t)
                    : i;
            }),
            (He.repeat = function (t) {
                return arguments.length
                    ? ((this._repeat = t === 1 / 0 ? -2 : t), V(this))
                    : -2 === this._repeat
                    ? 1 / 0
                    : this._repeat;
            }),
            (He.repeatDelay = function (t) {
                if (arguments.length) {
                    var e = this._time;
                    return (this._rDelay = t), V(this), e ? this.time(e) : this;
                }
                return this._rDelay;
            }),
            (He.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (He.seek = function (t, e) {
                return this.totalTime(ke(this, t), l(e));
            }),
            (He.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, l(e));
            }),
            (He.play = function (t, e) {
                return (
                    null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                );
            }),
            (He.reverse = function (t, e) {
                return (
                    null != t && this.seek(t || this.totalDuration(), e),
                    this.reversed(!0).paused(!1)
                );
            }),
            (He.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
            }),
            (He.resume = function () {
                return this.paused(!1);
            }),
            (He.reversed = function (t) {
                return arguments.length
                    ? (!!t !== this.reversed() &&
                          this.timeScale(-this._rts || (t ? -Gt : 0)),
                      this)
                    : this._rts < 0;
            }),
            (He.invalidate = function () {
                return (
                    (this._initted = this._act = 0), (this._zTime = -Gt), this
                );
            }),
            (He.isActive = function () {
                var t,
                    e = this.parent || this._dp,
                    i = this._start;
                return !(
                    e &&
                    !(
                        this._ts &&
                        this._initted &&
                        e.isActive() &&
                        (t = e.rawTime(!0)) >= i &&
                        t < this.endTime(!0) - Gt
                    )
                );
            }),
            (He.eventCallback = function (t, e, i) {
                var n = this.vars;
                return 1 < arguments.length
                    ? (e
                          ? ((n[t] = e),
                            i && (n[t + "Params"] = i),
                            "onUpdate" === t && (this._onUpdate = e))
                          : delete n[t],
                      this)
                    : n[t];
            }),
            (He.then = function (t) {
                var e = this;
                return new Promise(function (i) {
                    function n() {
                        var t = e.then;
                        (e.then = null),
                            r(s) &&
                                (s = s(e)) &&
                                (s.then || s === e) &&
                                (e.then = t),
                            i(s),
                            (e.then = t);
                    }
                    var s = r(t) ? t : C;
                    (e._initted && 1 === e.totalProgress() && 0 <= e._ts) ||
                    (!e._tTime && e._ts < 0)
                        ? n()
                        : (e._prom = n);
                });
            }),
            (He.kill = function () {
                ot(this);
            }),
            Ge);
    function Ge(t) {
        (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            H(this, +t.duration, 1, 1),
            (this.data = t.data),
            _t && (this._ctx = _t).data.push(this),
            Ot || Be.wake();
    }
    O(Ue.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Gt,
        _prom: 0,
        _ps: !1,
        _rts: 1,
    });
    var Ze = (function (t) {
        function o(e, n) {
            var r;
            return (
                void 0 === e && (e = {}),
                ((r = t.call(this, e) || this).labels = {}),
                (r.smoothChildTiming = !!e.smoothChildTiming),
                (r.autoRemoveChildren = !!e.autoRemoveChildren),
                (r._sort = l(e.sortChildren)),
                xt && W(e.parent || xt, i(r), n),
                e.reversed && r.reverse(),
                e.paused && r.paused(!0),
                e.scrollTrigger && F(i(r), e.scrollTrigger),
                r
            );
        }
        e(o, t);
        var a = o.prototype;
        return (
            (a.to = function (t, e, i) {
                return U(0, arguments, this), this;
            }),
            (a.from = function (t, e, i) {
                return U(1, arguments, this), this;
            }),
            (a.fromTo = function (t, e, i, n) {
                return U(2, arguments, this), this;
            }),
            (a.set = function (t, e, i) {
                return (
                    (e.duration = 0),
                    (e.parent = this),
                    P(e).repeatDelay || (e.repeat = 0),
                    (e.immediateRender = !!e.immediateRender),
                    new si(t, e, ke(this, i), 1),
                    this
                );
            }),
            (a.call = function (t, e, i) {
                return W(this, si.delayedCall(0, t, e), i);
            }),
            (a.staggerTo = function (t, e, i, n, r, s, o) {
                return (
                    (i.duration = e),
                    (i.stagger = i.stagger || n),
                    (i.onComplete = s),
                    (i.onCompleteParams = o),
                    (i.parent = this),
                    new si(t, i, ke(this, r)),
                    this
                );
            }),
            (a.staggerFrom = function (t, e, i, n, r, s, o) {
                return (
                    (i.runBackwards = 1),
                    (P(i).immediateRender = l(i.immediateRender)),
                    this.staggerTo(t, e, i, n, r, s, o)
                );
            }),
            (a.staggerFromTo = function (t, e, i, n, r, s, o, a) {
                return (
                    (n.startAt = i),
                    (P(n).immediateRender = l(n.immediateRender)),
                    this.staggerTo(t, e, n, r, s, o, a)
                );
            }),
            (a.render = function (t, e, i) {
                var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h,
                    d,
                    f,
                    p,
                    g = this._time,
                    v = this._dirty ? this.totalDuration() : this._tDur,
                    m = this._dur,
                    y = t <= 0 ? 0 : b(t),
                    _ = this._zTime < 0 != t < 0 && (this._initted || !m);
                if (
                    (this !== xt && v < y && 0 <= t && (y = v),
                    y !== this._tTime || i || _)
                ) {
                    if (
                        (g !== this._time &&
                            m &&
                            ((y += this._time - g), (t += this._time - g)),
                        (n = y),
                        (h = this._start),
                        (l = !(c = this._ts)),
                        _ &&
                            (m || (g = this._zTime),
                            (!t && e) || (this._zTime = t)),
                        this._repeat)
                    ) {
                        if (
                            ((f = this._yoyo),
                            (a = m + this._rDelay),
                            this._repeat < -1 && t < 0)
                        )
                            return this.totalTime(100 * a + t, e, i);
                        if (
                            ((n = b(y % a)),
                            y === v
                                ? ((o = this._repeat), (n = m))
                                : ((o = ~~(y / a)) &&
                                      o === y / a &&
                                      ((n = m), o--),
                                  m < n && (n = m)),
                            (d = Te(this._tTime, a)),
                            !g && this._tTime && d !== o && (d = o),
                            f && 1 & o && ((n = m - n), (p = 1)),
                            o !== d && !this._lock)
                        ) {
                            var x = f && 1 & d,
                                w = x === (f && 1 & o);
                            if (
                                (o < d && (x = !x),
                                (g = x ? 0 : m),
                                (this._lock = 1),
                                (this.render(
                                    g || (p ? 0 : b(o * a)),
                                    e,
                                    !m
                                )._lock = 0),
                                (this._tTime = y),
                                !e && this.parent && Pe(this, "onRepeat"),
                                this.vars.repeatRefresh &&
                                    !p &&
                                    (this.invalidate()._lock = 1),
                                (g && g !== this._time) ||
                                    l != !this._ts ||
                                    (this.vars.onRepeat &&
                                        !this.parent &&
                                        !this._act))
                            )
                                return this;
                            if (
                                ((m = this._dur),
                                (v = this._tDur),
                                w &&
                                    ((this._lock = 2),
                                    (g = x ? m : -1e-4),
                                    this.render(g, !0),
                                    this.vars.repeatRefresh &&
                                        !p &&
                                        this.invalidate()),
                                (this._lock = 0),
                                !this._ts && !l)
                            )
                                return this;
                            dt(this, p);
                        }
                    }
                    if (
                        (this._hasPause &&
                            !this._forcing &&
                            this._lock < 2 &&
                            (u = (function (t, e, i) {
                                var n;
                                if (e < i)
                                    for (n = t._first; n && n._start <= i; ) {
                                        if (
                                            "isPause" === n.data &&
                                            n._start > e
                                        )
                                            return n;
                                        n = n._next;
                                    }
                                else
                                    for (n = t._last; n && n._start >= i; ) {
                                        if (
                                            "isPause" === n.data &&
                                            n._start < e
                                        )
                                            return n;
                                        n = n._prev;
                                    }
                            })(this, b(g), b(n))) &&
                            (y -= n - (n = u._start)),
                        (this._tTime = y),
                        (this._time = n),
                        (this._act = !c),
                        this._initted ||
                            ((this._onUpdate = this.vars.onUpdate),
                            (this._initted = 1),
                            (this._zTime = t),
                            (g = 0)),
                        !g &&
                            n &&
                            !e &&
                            (Pe(this, "onStart"), this._tTime !== y))
                    )
                        return this;
                    if (g <= n && 0 <= t)
                        for (r = this._first; r; ) {
                            if (
                                ((s = r._next),
                                (r._act || n >= r._start) && r._ts && u !== r)
                            ) {
                                if (r.parent !== this)
                                    return this.render(t, e, i);
                                if (
                                    (r.render(
                                        0 < r._ts
                                            ? (n - r._start) * r._ts
                                            : (r._dirty
                                                  ? r.totalDuration()
                                                  : r._tDur) +
                                                  (n - r._start) * r._ts,
                                        e,
                                        i
                                    ),
                                    n !== this._time || (!this._ts && !l))
                                ) {
                                    (u = 0), s && (y += this._zTime = -Gt);
                                    break;
                                }
                            }
                            r = s;
                        }
                    else {
                        r = this._last;
                        for (var T = t < 0 ? t : n; r; ) {
                            if (
                                ((s = r._prev),
                                (r._act || T <= r._end) && r._ts && u !== r)
                            ) {
                                if (r.parent !== this)
                                    return this.render(t, e, i);
                                if (
                                    (r.render(
                                        0 < r._ts
                                            ? (T - r._start) * r._ts
                                            : (r._dirty
                                                  ? r.totalDuration()
                                                  : r._tDur) +
                                                  (T - r._start) * r._ts,
                                        e,
                                        i || (yt && (r._initted || r._startAt))
                                    ),
                                    n !== this._time || (!this._ts && !l))
                                ) {
                                    (u = 0),
                                        s && (y += this._zTime = T ? -Gt : Gt);
                                    break;
                                }
                            }
                            r = s;
                        }
                    }
                    if (
                        u &&
                        !e &&
                        (this.pause(),
                        (u.render(g <= n ? 0 : -Gt)._zTime = g <= n ? 1 : -1),
                        this._ts)
                    )
                        return (this._start = h), R(this), this.render(t, e, i);
                    this._onUpdate && !e && Pe(this, "onUpdate", !0),
                        ((y === v && this._tTime >= this.totalDuration()) ||
                            (!y && g)) &&
                            ((h !== this._start &&
                                Math.abs(c) === Math.abs(this._ts)) ||
                                this._lock ||
                                ((!t && m) ||
                                    !(
                                        (y === v && 0 < this._ts) ||
                                        (!y && this._ts < 0)
                                    ) ||
                                    z(this, 1),
                                e ||
                                    (t < 0 && !g) ||
                                    (!y && !g && v) ||
                                    (Pe(
                                        this,
                                        y === v && 0 <= t
                                            ? "onComplete"
                                            : "onReverseComplete",
                                        !0
                                    ),
                                    !this._prom ||
                                        (y < v && 0 < this.timeScale()) ||
                                        this._prom())));
                }
                return this;
            }),
            (a.add = function (t, e) {
                var i = this;
                if ((s(e) || (e = ke(this, e, t)), !(t instanceof Ue))) {
                    if (ie(t))
                        return (
                            t.forEach(function (t) {
                                return i.add(t, e);
                            }),
                            this
                        );
                    if (n(t)) return this.addLabel(t, e);
                    if (!r(t)) return this;
                    t = si.delayedCall(0, t);
                }
                return this !== t ? W(this, t, e) : this;
            }),
            (a.getChildren = function (t, e, i, n) {
                void 0 === t && (t = !0),
                    void 0 === e && (e = !0),
                    void 0 === i && (i = !0),
                    void 0 === n && (n = -Ut);
                for (var r = [], s = this._first; s; )
                    s._start >= n &&
                        (s instanceof si
                            ? e && r.push(s)
                            : (i && r.push(s),
                              t && r.push.apply(r, s.getChildren(!0, e, i)))),
                        (s = s._next);
                return r;
            }),
            (a.getById = function (t) {
                for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                    if (e[i].vars.id === t) return e[i];
            }),
            (a.remove = function (t) {
                return n(t)
                    ? this.removeLabel(t)
                    : r(t)
                    ? this.killTweensOf(t)
                    : (D(this, t),
                      t === this._recent && (this._recent = this._last),
                      I(this));
            }),
            (a.totalTime = function (e, i) {
                return arguments.length
                    ? ((this._forcing = 1),
                      !this._dp &&
                          this._ts &&
                          (this._start = b(
                              Be.time -
                                  (0 < this._ts
                                      ? e / this._ts
                                      : (this.totalDuration() - e) / -this._ts)
                          )),
                      t.prototype.totalTime.call(this, e, i),
                      (this._forcing = 0),
                      this)
                    : this._tTime;
            }),
            (a.addLabel = function (t, e) {
                return (this.labels[t] = ke(this, e)), this;
            }),
            (a.removeLabel = function (t) {
                return delete this.labels[t], this;
            }),
            (a.addPause = function (t, e, i) {
                var n = si.delayedCall(0, e || g, i);
                return (
                    (n.data = "isPause"),
                    (this._hasPause = 1),
                    W(this, n, ke(this, t))
                );
            }),
            (a.removePause = function (t) {
                var e = this._first;
                for (t = ke(this, t); e; )
                    e._start === t && "isPause" === e.data && z(e),
                        (e = e._next);
            }),
            (a.killTweensOf = function (t, e, i) {
                for (var n = this.getTweensOf(t, i), r = n.length; r--; )
                    Ke !== n[r] && n[r].kill(t, e);
                return this;
            }),
            (a.getTweensOf = function (t, e) {
                for (var i, n = [], r = Ae(t), o = this._first, a = s(e); o; )
                    o instanceof si
                        ? T(o._targets, r) &&
                          (a
                              ? (!Ke || (o._initted && o._ts)) &&
                                o.globalTime(0) <= e &&
                                o.globalTime(o.totalDuration()) > e
                              : !e || o.isActive()) &&
                          n.push(o)
                        : (i = o.getTweensOf(r, e)).length &&
                          n.push.apply(n, i),
                        (o = o._next);
                return n;
            }),
            (a.tweenTo = function (t, e) {
                e = e || {};
                var i,
                    n = this,
                    r = ke(n, t),
                    s = e.startAt,
                    o = e.onStart,
                    a = e.onStartParams,
                    l = e.immediateRender,
                    u = si.to(
                        n,
                        O(
                            {
                                ease: e.ease || "none",
                                lazy: !1,
                                immediateRender: !1,
                                time: r,
                                overwrite: "auto",
                                duration:
                                    e.duration ||
                                    Math.abs(
                                        (r -
                                            (s && "time" in s
                                                ? s.time
                                                : n._time)) /
                                            n.timeScale()
                                    ) ||
                                    Gt,
                                onStart: function () {
                                    if ((n.pause(), !i)) {
                                        var t =
                                            e.duration ||
                                            Math.abs(
                                                (r -
                                                    (s && "time" in s
                                                        ? s.time
                                                        : n._time)) /
                                                    n.timeScale()
                                            );
                                        u._dur !== t &&
                                            H(u, t, 0, 1).render(
                                                u._time,
                                                !0,
                                                !0
                                            ),
                                            (i = 1);
                                    }
                                    o && o.apply(u, a || []);
                                },
                            },
                            e
                        )
                    );
                return l ? u.render(0) : u;
            }),
            (a.tweenFromTo = function (t, e, i) {
                return this.tweenTo(
                    e,
                    O({ startAt: { time: ke(this, t) } }, i)
                );
            }),
            (a.recent = function () {
                return this._recent;
            }),
            (a.nextLabel = function (t) {
                return void 0 === t && (t = this._time), st(this, ke(this, t));
            }),
            (a.previousLabel = function (t) {
                return (
                    void 0 === t && (t = this._time), st(this, ke(this, t), 1)
                );
            }),
            (a.currentLabel = function (t) {
                return arguments.length
                    ? this.seek(t, !0)
                    : this.previousLabel(this._time + Gt);
            }),
            (a.shiftChildren = function (t, e, i) {
                void 0 === i && (i = 0);
                for (var n, r = this._first, s = this.labels; r; )
                    r._start >= i && ((r._start += t), (r._end += t)),
                        (r = r._next);
                if (e) for (n in s) s[n] >= i && (s[n] += t);
                return I(this);
            }),
            (a.invalidate = function (e) {
                var i = this._first;
                for (this._lock = 0; i; ) i.invalidate(e), (i = i._next);
                return t.prototype.invalidate.call(this, e);
            }),
            (a.clear = function (t) {
                void 0 === t && (t = !0);
                for (var e, i = this._first; i; )
                    (e = i._next), this.remove(i), (i = e);
                return (
                    this._dp && (this._time = this._tTime = this._pTime = 0),
                    t && (this.labels = {}),
                    I(this)
                );
            }),
            (a.totalDuration = function (t) {
                var e,
                    i,
                    n,
                    r = 0,
                    s = this,
                    o = s._last,
                    a = Ut;
                if (arguments.length)
                    return s.timeScale(
                        (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                            (s.reversed() ? -t : t)
                    );
                if (s._dirty) {
                    for (n = s.parent; o; )
                        (e = o._prev),
                            o._dirty && o.totalDuration(),
                            a < (i = o._start) && s._sort && o._ts && !s._lock
                                ? ((s._lock = 1),
                                  (W(s, o, i - o._delay, 1)._lock = 0))
                                : (a = i),
                            i < 0 &&
                                o._ts &&
                                ((r -= i),
                                ((!n && !s._dp) ||
                                    (n && n.smoothChildTiming)) &&
                                    ((s._start += i / s._ts),
                                    (s._time -= i),
                                    (s._tTime -= i)),
                                s.shiftChildren(-i, !1, -1 / 0),
                                (a = 0)),
                            o._end > r && o._ts && (r = o._end),
                            (o = e);
                    H(s, s === xt && s._time > r ? s._time : r, 1, 1),
                        (s._dirty = 0);
                }
                return s._tDur;
            }),
            (o.updateRoot = function (t) {
                if (
                    (xt._ts && (E(xt, X(t, xt)), (kt = Be.frame)),
                    Be.frame >= _e)
                ) {
                    _e += Ht.autoSleep || 120;
                    var e = xt._first;
                    if (
                        (!e || !e._ts) &&
                        Ht.autoSleep &&
                        Be._listeners.length < 2
                    ) {
                        for (; e && !e._ts; ) e = e._next;
                        e || Be.sleep();
                    }
                }
            }),
            o
        );
    })(Ue);
    function $e(t, e, i, s, o, l) {
        var u, c, h, d;
        if (
            me[t] &&
            !1 !==
                (u = new me[t]()).init(
                    o,
                    u.rawVars
                        ? e[t]
                        : (function (t, e, i, s, o) {
                              if (
                                  (r(t) && (t = ii(t, o, e, i, s)),
                                  !a(t) ||
                                      (t.style && t.nodeType) ||
                                      ie(t) ||
                                      ee(t))
                              )
                                  return n(t) ? ii(t, o, e, i, s) : t;
                              var l,
                                  u = {};
                              for (l in t) u[l] = ii(t[l], o, e, i, s);
                              return u;
                          })(e[t], s, o, l, i),
                    i,
                    s,
                    l
                ) &&
            ((i._pt = c =
                new _i(i._pt, o, t, 0, 1, u.render, u, 0, u.priority)),
            i !== Ct)
        )
            for (
                h = i._ptLookup[i._targets.indexOf(o)], d = u._props.length;
                d--;

            )
                h[u._props[d]] = c;
        return u;
    }
    function Qe(t, e, i, n) {
        var r,
            s,
            o = e.ease || n || "power1.inOut";
        if (ie(e))
            (s = i[t] || (i[t] = [])),
                e.forEach(function (t, i) {
                    return s.push({
                        t: (i / (e.length - 1)) * 100,
                        v: t,
                        e: o,
                    });
                });
        else
            for (r in e)
                (s = i[r] || (i[r] = [])),
                    "ease" === r || s.push({ t: parseFloat(t), v: e[r], e: o });
    }
    O(Ze.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Ke,
        Je,
        ti = function (t, e, i, s, o, a, l, u, c, h) {
            r(s) && (s = s(o || 0, t, a));
            var f,
                p = t[e],
                g =
                    "get" !== i
                        ? i
                        : r(p)
                        ? c
                            ? t[
                                  e.indexOf("set") || !r(t["get" + e.substr(3)])
                                      ? e
                                      : "get" + e.substr(3)
                              ](c)
                            : t[e]()
                        : p,
                v = r(p) ? (c ? ci : ui) : li;
            if (
                (n(s) &&
                    (~s.indexOf("random(") && (s = rt(s)),
                    "=" === s.charAt(1) &&
                        ((!(f = w(g, s) + (Z(g) || 0)) && 0 !== f) || (s = f))),
                !h || g !== s || Je)
            )
                return isNaN(g * s) || "" === s
                    ? (p || e in t || d(e, s),
                      function (t, e, i, n, r, s, o) {
                          var a,
                              l,
                              u,
                              c,
                              h,
                              d,
                              f,
                              p,
                              g = new _i(this._pt, t, e, 0, 1, pi, null, r),
                              v = 0,
                              m = 0;
                          for (
                              g.b = i,
                                  g.e = n,
                                  i += "",
                                  (f = ~(n += "").indexOf("random(")) &&
                                      (n = rt(n)),
                                  s &&
                                      (s((p = [i, n]), t, e),
                                      (i = p[0]),
                                      (n = p[1])),
                                  l = i.match(oe) || [];
                              (a = oe.exec(n));

                          )
                              (c = a[0]),
                                  (h = n.substring(v, a.index)),
                                  u
                                      ? (u = (u + 1) % 5)
                                      : "rgba(" === h.substr(-5) && (u = 1),
                                  c !== l[m++] &&
                                      ((d = parseFloat(l[m - 1]) || 0),
                                      (g._pt = {
                                          _next: g._pt,
                                          p: h || 1 === m ? h : ",",
                                          s: d,
                                          c:
                                              "=" === c.charAt(1)
                                                  ? w(d, c) - d
                                                  : parseFloat(c) - d,
                                          m: u && u < 4 ? Math.round : 0,
                                      }),
                                      (v = oe.lastIndex));
                          return (
                              (g.c =
                                  v < n.length ? n.substring(v, n.length) : ""),
                              (g.fp = o),
                              (ae.test(n) || f) && (g.e = 0),
                              (this._pt = g)
                          );
                      }.call(this, t, e, g, s, v, u || Ht.stringFilter, c))
                    : ((f = new _i(
                          this._pt,
                          t,
                          e,
                          +g || 0,
                          s - (g || 0),
                          "boolean" == typeof p ? fi : di,
                          0,
                          v
                      )),
                      c && (f.fp = c),
                      l && f.modifier(l, this, t),
                      (this._pt = f));
        },
        ei = function t(e, i, n) {
            var r,
                s,
                o,
                a,
                u,
                c,
                h,
                d,
                f,
                p,
                g,
                y,
                _,
                x = e.vars,
                b = x.ease,
                w = x.startAt,
                T = x.immediateRender,
                E = x.lazy,
                k = x.onUpdate,
                C = x.onUpdateParams,
                A = x.callbackScope,
                P = x.runBackwards,
                L = x.yoyoEase,
                D = x.keyframes,
                I = x.autoRevert,
                B = e._dur,
                Y = e._startAt,
                X = e._targets,
                R = e.parent,
                N = R && "nested" === R.data ? R.vars.targets : X,
                q = "auto" === e._overwrite && !mt,
                W = e.timeline;
            if (
                (!W || (D && b) || (b = "none"),
                (e._ease = We(b, Vt.ease)),
                (e._yEase = L ? qe(We(!0 === L ? b : L, Vt.ease)) : 0),
                L &&
                    e._yoyo &&
                    !e._repeat &&
                    ((L = e._yEase), (e._yEase = e._ease), (e._ease = L)),
                (e._from = !W && !!x.runBackwards),
                !W || (D && !x.stagger))
            ) {
                if (
                    ((y = (d = X[0] ? m(X[0]).harness : 0) && x[d.prop]),
                    (r = M(x, pe)),
                    Y &&
                        (Y._zTime < 0 && Y.progress(1),
                        i < 0 && P && T && !I
                            ? Y.render(-1, !0)
                            : Y.revert(P && B ? de : he),
                        (Y._lazy = 0)),
                    w)
                ) {
                    if (
                        (z(
                            (e._startAt = si.set(
                                X,
                                O(
                                    {
                                        data: "isStart",
                                        overwrite: !1,
                                        parent: R,
                                        immediateRender: !0,
                                        lazy: !Y && l(E),
                                        startAt: null,
                                        delay: 0,
                                        onUpdate: k,
                                        onUpdateParams: C,
                                        callbackScope: A,
                                        stagger: 0,
                                    },
                                    w
                                )
                            ))
                        ),
                        (e._startAt._dp = 0),
                        (e._startAt._sat = e),
                        i < 0 && (yt || (!T && !I)) && e._startAt.revert(de),
                        T && B && i <= 0 && n <= 0)
                    )
                        return void (i && (e._zTime = i));
                } else if (P && B && !Y)
                    if (
                        (i && (T = !1),
                        (o = O(
                            {
                                overwrite: !1,
                                data: "isFromStart",
                                lazy: T && !Y && l(E),
                                immediateRender: T,
                                stagger: 0,
                                parent: R,
                            },
                            r
                        )),
                        y && (o[d.prop] = y),
                        z((e._startAt = si.set(X, o))),
                        (e._startAt._dp = 0),
                        (e._startAt._sat = e),
                        i < 0 &&
                            (yt
                                ? e._startAt.revert(de)
                                : e._startAt.render(-1, !0)),
                        (e._zTime = i),
                        T)
                    ) {
                        if (!i) return;
                    } else t(e._startAt, Gt, Gt);
                for (
                    e._pt = e._ptCache = 0, E = (B && l(E)) || (E && !B), s = 0;
                    s < X.length;
                    s++
                ) {
                    if (
                        ((h = (u = X[s])._gsap || v(X)[s]._gsap),
                        (e._ptLookup[s] = p = {}),
                        ve[h.id] && ge.length && S(),
                        (g = N === X ? s : N.indexOf(u)),
                        d &&
                            !1 !== (f = new d()).init(u, y || r, e, g, N) &&
                            ((e._pt = a =
                                new _i(
                                    e._pt,
                                    u,
                                    f.name,
                                    0,
                                    1,
                                    f.render,
                                    f,
                                    0,
                                    f.priority
                                )),
                            f._props.forEach(function (t) {
                                p[t] = a;
                            }),
                            f.priority && (c = 1)),
                        !d || y)
                    )
                        for (o in r)
                            me[o] && (f = $e(o, r, e, g, u, N))
                                ? f.priority && (c = 1)
                                : (p[o] = a =
                                      ti.call(
                                          e,
                                          u,
                                          o,
                                          "get",
                                          r[o],
                                          g,
                                          N,
                                          0,
                                          x.stringFilter
                                      ));
                    e._op && e._op[s] && e.kill(u, e._op[s]),
                        q &&
                            e._pt &&
                            ((Ke = e),
                            xt.killTweensOf(u, p, e.globalTime(i)),
                            (_ = !e.parent),
                            (Ke = 0)),
                        e._pt && E && (ve[h.id] = 1);
                }
                c && yi(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = k),
                (e._initted = (!e._op || e._pt) && !_),
                D && i <= 0 && W.render(Ut, !0, !0);
        },
        ii = function (t, e, i, s, o) {
            return r(t)
                ? t.call(e, i, s, o)
                : n(t) && ~t.indexOf("random(")
                ? rt(t)
                : t;
        },
        ni = be + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        ri = {};
    _(ni + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (ri[t] = 1);
    });
    var si = (function (t) {
        function r(e, n, r, o) {
            var u;
            "number" == typeof n && ((r.duration = n), (n = r), (r = null));
            var h,
                d,
                p,
                g,
                m,
                y,
                _,
                x,
                w = (u = t.call(this, o ? n : P(n)) || this).vars,
                T = w.duration,
                S = w.delay,
                E = w.immediateRender,
                k = w.stagger,
                C = w.overwrite,
                A = w.keyframes,
                L = w.defaults,
                D = w.scrollTrigger,
                z = w.yoyoEase,
                I = n.parent || xt,
                B = (ie(e) || ee(e) ? s(e[0]) : "length" in n) ? [e] : Ae(e);
            if (
                ((u._targets = B.length
                    ? v(B)
                    : f(
                          "GSAP target " +
                              e +
                              " not found. https://greensock.com",
                          !Ht.nullTargetWarn
                      ) || []),
                (u._ptLookup = []),
                (u._overwrite = C),
                A || k || c(T) || c(S))
            ) {
                if (
                    ((n = u.vars),
                    (h = u.timeline =
                        new Ze({
                            data: "nested",
                            defaults: L || {},
                            targets:
                                I && "nested" === I.data ? I.vars.targets : B,
                        })).kill(),
                    (h.parent = h._dp = i(u)),
                    (h._start = 0),
                    k || c(T) || c(S))
                ) {
                    if (((g = B.length), (_ = k && J(k)), a(k)))
                        for (m in k)
                            ~ni.indexOf(m) && ((x = x || {})[m] = k[m]);
                    for (d = 0; d < g; d++)
                        ((p = M(n, ri)).stagger = 0),
                            z && (p.yoyoEase = z),
                            x && we(p, x),
                            (y = B[d]),
                            (p.duration = +ii(T, i(u), d, y, B)),
                            (p.delay = (+ii(S, i(u), d, y, B) || 0) - u._delay),
                            !k &&
                                1 === g &&
                                p.delay &&
                                ((u._delay = S = p.delay),
                                (u._start += S),
                                (p.delay = 0)),
                            h.to(y, p, _ ? _(d, y, B) : 0),
                            (h._ease = Xe.none);
                    h.duration() ? (T = S = 0) : (u.timeline = 0);
                } else if (A) {
                    P(O(h.vars.defaults, { ease: "none" })),
                        (h._ease = We(A.ease || n.ease || "none"));
                    var Y,
                        X,
                        R,
                        N = 0;
                    if (ie(A))
                        A.forEach(function (t) {
                            return h.to(B, t, ">");
                        }),
                            h.duration();
                    else {
                        for (m in ((p = {}), A))
                            "ease" === m ||
                                "easeEach" === m ||
                                Qe(m, A[m], p, A.easeEach);
                        for (m in p)
                            for (
                                Y = p[m].sort(function (t, e) {
                                    return t.t - e.t;
                                }),
                                    d = N = 0;
                                d < Y.length;
                                d++
                            )
                                ((R = {
                                    ease: (X = Y[d]).e,
                                    duration:
                                        ((X.t - (d ? Y[d - 1].t : 0)) / 100) *
                                        T,
                                })[m] = X.v),
                                    h.to(B, R, N),
                                    (N += R.duration);
                        h.duration() < T &&
                            h.to({}, { duration: T - h.duration() });
                    }
                }
                T || u.duration((T = h.duration()));
            } else u.timeline = 0;
            return (
                !0 !== C || mt || ((Ke = i(u)), xt.killTweensOf(B), (Ke = 0)),
                W(I, i(u), r),
                n.reversed && u.reverse(),
                n.paused && u.paused(!0),
                (E ||
                    (!T &&
                        !A &&
                        u._start === b(I._time) &&
                        l(E) &&
                        (function t(e) {
                            return !e || (e._ts && t(e.parent));
                        })(i(u)) &&
                        "nested" !== I.data)) &&
                    ((u._tTime = -Gt), u.render(Math.max(0, -S) || 0)),
                D && F(i(u), D),
                u
            );
        }
        e(r, t);
        var o = r.prototype;
        return (
            (o.render = function (t, e, i) {
                var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h,
                    d = this._time,
                    f = this._tDur,
                    p = this._dur,
                    g = t < 0,
                    v = f - Gt < t && !g ? f : t < Gt ? 0 : t;
                if (p) {
                    if (
                        v !== this._tTime ||
                        !t ||
                        i ||
                        (!this._initted && this._tTime) ||
                        (this._startAt && this._zTime < 0 != g)
                    ) {
                        if (((n = v), (c = this.timeline), this._repeat)) {
                            if (
                                ((o = p + this._rDelay), this._repeat < -1 && g)
                            )
                                return this.totalTime(100 * o + t, e, i);
                            if (
                                ((n = b(v % o)),
                                v === f
                                    ? ((s = this._repeat), (n = p))
                                    : ((s = ~~(v / o)) &&
                                          s === v / o &&
                                          ((n = p), s--),
                                      p < n && (n = p)),
                                (l = this._yoyo && 1 & s) &&
                                    ((h = this._yEase), (n = p - n)),
                                (a = Te(this._tTime, o)),
                                n === d && !i && this._initted)
                            )
                                return (this._tTime = v), this;
                            s !== a &&
                                (c && this._yEase && dt(c, l),
                                !this.vars.repeatRefresh ||
                                    l ||
                                    this._lock ||
                                    ((this._lock = i = 1),
                                    (this.render(
                                        b(o * s),
                                        !0
                                    ).invalidate()._lock = 0)));
                        }
                        if (!this._initted) {
                            if (j(this, g ? t : n, i, e, v))
                                return (this._tTime = 0), this;
                            if (d !== this._time) return this;
                            if (p !== this._dur) return this.render(t, e, i);
                        }
                        if (
                            ((this._tTime = v),
                            (this._time = n),
                            !this._act &&
                                this._ts &&
                                ((this._act = 1), (this._lazy = 0)),
                            (this.ratio = u = (h || this._ease)(n / p)),
                            this._from && (this.ratio = u = 1 - u),
                            n &&
                                !d &&
                                !e &&
                                (Pe(this, "onStart"), this._tTime !== v))
                        )
                            return this;
                        for (r = this._pt; r; ) r.r(u, r.d), (r = r._next);
                        (c &&
                            c.render(
                                t < 0
                                    ? t
                                    : !n && l
                                    ? -Gt
                                    : c._dur * c._ease(n / this._dur),
                                e,
                                i
                            )) ||
                            (this._startAt && (this._zTime = t)),
                            this._onUpdate &&
                                !e &&
                                (g && B(this, t, 0, i), Pe(this, "onUpdate")),
                            this._repeat &&
                                s !== a &&
                                this.vars.onRepeat &&
                                !e &&
                                this.parent &&
                                Pe(this, "onRepeat"),
                            (v !== this._tDur && v) ||
                                this._tTime !== v ||
                                (g && !this._onUpdate && B(this, t, 0, !0),
                                (!t && p) ||
                                    !(
                                        (v === this._tDur && 0 < this._ts) ||
                                        (!v && this._ts < 0)
                                    ) ||
                                    z(this, 1),
                                e ||
                                    (g && !d) ||
                                    !(v || d || l) ||
                                    (Pe(
                                        this,
                                        v === f
                                            ? "onComplete"
                                            : "onReverseComplete",
                                        !0
                                    ),
                                    !this._prom ||
                                        (v < f && 0 < this.timeScale()) ||
                                        this._prom()));
                    }
                } else
                    !(function (t, e, i, n) {
                        var r,
                            s,
                            o,
                            a = t.ratio,
                            l =
                                e < 0 ||
                                (!e &&
                                    ((!t._start &&
                                        (function t(e) {
                                            var i = e.parent;
                                            return (
                                                i &&
                                                i._ts &&
                                                i._initted &&
                                                !i._lock &&
                                                (i.rawTime() < 0 || t(i))
                                            );
                                        })(t) &&
                                        (t._initted || !Se(t))) ||
                                        ((t._ts < 0 || t._dp._ts < 0) &&
                                            !Se(t))))
                                    ? 0
                                    : 1,
                            u = t._rDelay,
                            c = 0;
                        if (
                            (u &&
                                t._repeat &&
                                ((c = Ce(0, t._tDur, e)),
                                (s = Te(c, u)),
                                t._yoyo && 1 & s && (l = 1 - l),
                                s !== Te(t._tTime, u) &&
                                    ((a = 1 - l),
                                    t.vars.repeatRefresh &&
                                        t._initted &&
                                        t.invalidate())),
                            l !== a ||
                                yt ||
                                n ||
                                t._zTime === Gt ||
                                (!e && t._zTime))
                        ) {
                            if (!t._initted && j(t, e, n, i, c)) return;
                            for (
                                o = t._zTime,
                                    t._zTime = e || (i ? Gt : 0),
                                    i = i || (e && !o),
                                    t.ratio = l,
                                    t._from && (l = 1 - l),
                                    t._time = 0,
                                    t._tTime = c,
                                    r = t._pt;
                                r;

                            )
                                r.r(l, r.d), (r = r._next);
                            e < 0 && B(t, e, 0, !0),
                                t._onUpdate && !i && Pe(t, "onUpdate"),
                                c &&
                                    t._repeat &&
                                    !i &&
                                    t.parent &&
                                    Pe(t, "onRepeat"),
                                (e >= t._tDur || e < 0) &&
                                    t.ratio === l &&
                                    (l && z(t, 1),
                                    i ||
                                        yt ||
                                        (Pe(
                                            t,
                                            l
                                                ? "onComplete"
                                                : "onReverseComplete",
                                            !0
                                        ),
                                        t._prom && t._prom()));
                        } else t._zTime || (t._zTime = e);
                    })(this, t, e, i);
                return this;
            }),
            (o.targets = function () {
                return this._targets;
            }),
            (o.invalidate = function (e) {
                return (
                    (e && this.vars.runBackwards) || (this._startAt = 0),
                    (this._pt =
                        this._op =
                        this._onUpdate =
                        this._lazy =
                        this.ratio =
                            0),
                    (this._ptLookup = []),
                    this.timeline && this.timeline.invalidate(e),
                    t.prototype.invalidate.call(this, e)
                );
            }),
            (o.resetTo = function (t, e, i, n) {
                Ot || Be.wake(), this._ts || this.play();
                var r = Math.min(
                    this._dur,
                    (this._dp._time - this._start) * this._ts
                );
                return (
                    this._initted || ei(this, r),
                    (function (t, e, i, n, r, s, o) {
                        var a,
                            l,
                            u,
                            c,
                            h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                        if (!h)
                            for (
                                h = t._ptCache[e] = [],
                                    u = t._ptLookup,
                                    c = t._targets.length;
                                c--;

                            ) {
                                if ((a = u[c][e]) && a.d && a.d._pt)
                                    for (
                                        a = a.d._pt;
                                        a && a.p !== e && a.fp !== e;

                                    )
                                        a = a._next;
                                if (!a)
                                    return (
                                        (Je = 1),
                                        (t.vars[e] = "+=0"),
                                        ei(t, o),
                                        (Je = 0),
                                        1
                                    );
                                h.push(a);
                            }
                        for (c = h.length; c--; )
                            ((a = (l = h[c])._pt || l).s =
                                (!n && 0 !== n) || r
                                    ? a.s + (n || 0) + s * a.c
                                    : n),
                                (a.c = i - a.s),
                                l.e && (l.e = x(i) + Z(l.e)),
                                l.b && (l.b = a.s + Z(l.b));
                    })(this, t, e, i, n, this._ease(r / this._dur), r)
                        ? this.resetTo(t, e, i, n)
                        : (N(this, 0),
                          this.parent ||
                              L(
                                  this._dp,
                                  this,
                                  "_first",
                                  "_last",
                                  this._dp._sort ? "_start" : 0
                              ),
                          this.render(0))
                );
            }),
            (o.kill = function (t, e) {
                if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
                    return (
                        (this._lazy = this._pt = 0),
                        this.parent ? ot(this) : this
                    );
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return (
                        this.timeline.killTweensOf(
                            t,
                            e,
                            Ke && !0 !== Ke.vars.overwrite
                        )._first || ot(this),
                        this.parent &&
                            i !== this.timeline.totalDuration() &&
                            H(
                                this,
                                (this._dur * this.timeline._tDur) / i,
                                0,
                                1
                            ),
                        this
                    );
                }
                var r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    c,
                    h = this._targets,
                    d = t ? Ae(t) : h,
                    f = this._ptLookup,
                    p = this._pt;
                if (
                    (!e || "all" === e) &&
                    (function (t, e) {
                        for (
                            var i = t.length, n = i === e.length;
                            n && i-- && t[i] === e[i];

                        );
                        return i < 0;
                    })(h, d)
                )
                    return "all" === e && (this._pt = 0), ot(this);
                for (
                    r = this._op = this._op || [],
                        "all" !== e &&
                            (n(e) &&
                                ((l = {}),
                                _(e, function (t) {
                                    return (l[t] = 1);
                                }),
                                (e = l)),
                            (e = (function (t, e) {
                                var i,
                                    n,
                                    r,
                                    s,
                                    o = t[0] ? m(t[0]).harness : 0,
                                    a = o && o.aliases;
                                if (!a) return e;
                                for (n in ((i = we({}, e)), a))
                                    if ((n in i))
                                        for (
                                            r = (s = a[n].split(",")).length;
                                            r--;

                                        )
                                            i[s[r]] = i[n];
                                return i;
                            })(h, e))),
                        c = h.length;
                    c--;

                )
                    if (~d.indexOf(h[c]))
                        for (l in ((s = f[c]),
                        "all" === e
                            ? ((r[c] = e), (a = s), (o = {}))
                            : ((o = r[c] = r[c] || {}), (a = e)),
                        a))
                            (u = s && s[l]) &&
                                (("kill" in u.d && !0 !== u.d.kill(l)) ||
                                    D(this, u, "_pt"),
                                delete s[l]),
                                "all" !== o && (o[l] = 1);
                return this._initted && !this._pt && p && ot(this), this;
            }),
            (r.to = function (t, e, i) {
                return new r(t, e, i);
            }),
            (r.from = function (t, e) {
                return U(1, arguments);
            }),
            (r.delayedCall = function (t, e, i, n) {
                return new r(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: n,
                });
            }),
            (r.fromTo = function (t, e, i) {
                return U(2, arguments);
            }),
            (r.set = function (t, e) {
                return (
                    (e.duration = 0),
                    e.repeatDelay || (e.repeat = 0),
                    new r(t, e)
                );
            }),
            (r.killTweensOf = function (t, e, i) {
                return xt.killTweensOf(t, e, i);
            }),
            r
        );
    })(Ue);
    function oi(t, e, i) {
        return t.setAttribute(e, i);
    }
    function ai(t, e, i, n) {
        n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
    }
    O(si.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
    }),
        _("staggerTo,staggerFrom,staggerFromTo", function (t) {
            si[t] = function () {
                var e = new Ze(),
                    i = Oe.call(arguments, 0);
                return (
                    i.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
                    e[t].apply(e, i)
                );
            };
        });
    var li = function (t, e, i) {
            return (t[e] = i);
        },
        ui = function (t, e, i) {
            return t[e](i);
        },
        ci = function (t, e, i, n) {
            return t[e](n.fp, i);
        },
        hi = function (t, e) {
            return r(t[e]) ? ui : o(t[e]) && t.setAttribute ? oi : li;
        },
        di = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        fi = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        pi = function (t, e) {
            var i = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; i; )
                    (n =
                        i.p +
                        (i.m
                            ? i.m(i.s + i.c * t)
                            : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
                        n),
                        (i = i._next);
                n += e.c;
            }
            e.set(e.t, e.p, n, e);
        },
        gi = function (t, e) {
            for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
        },
        vi = function (t, e, i, n) {
            for (var r, s = this._pt; s; )
                (r = s._next), s.p === n && s.modifier(t, e, i), (s = r);
        },
        mi = function (t) {
            for (var e, i, n = this._pt; n; )
                (i = n._next),
                    (n.p === t && !n.op) || n.op === t
                        ? D(this, n, "_pt")
                        : n.dep || (e = 1),
                    (n = i);
            return !e;
        },
        yi = function (t) {
            for (var e, i, n, r, s = t._pt; s; ) {
                for (e = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
                (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s),
                    (s._next = i) ? (i._prev = s) : (r = s),
                    (s = e);
            }
            t._pt = n;
        },
        _i =
            ((xi.prototype.modifier = function (t, e, i) {
                (this.mSet = this.mSet || this.set),
                    (this.set = ai),
                    (this.m = t),
                    (this.mt = i),
                    (this.tween = e);
            }),
            xi);
    function xi(t, e, i, n, r, s, o, a, l) {
        (this.t = e),
            (this.s = n),
            (this.c = r),
            (this.p = i),
            (this.r = s || di),
            (this.d = o || this),
            (this.set = a || li),
            (this.pr = l || 0),
            (this._next = t) && (t._prev = this);
    }
    function bi(t) {
        return (Ei[t] || ki).map(function (t) {
            return t();
        });
    }
    function wi() {
        var t = Date.now(),
            e = [];
        2 < t - Ci &&
            (bi("matchMediaInit"),
            Si.forEach(function (t) {
                var i,
                    n,
                    r,
                    s,
                    o = t.queries,
                    a = t.conditions;
                for (n in o)
                    (i = bt.matchMedia(o[n]).matches) && (r = 1),
                        i !== a[n] && ((a[n] = i), (s = 1));
                s && (t.revert(), r && e.push(t));
            }),
            bi("matchMediaRevert"),
            e.forEach(function (t) {
                return t.onMatch(t);
            }),
            (Ci = t),
            bi("matchMedia"));
    }
    _(
        be +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
            return (pe[t] = 1);
        }
    ),
        (ce.TweenMax = ce.TweenLite = si),
        (ce.TimelineLite = ce.TimelineMax = Ze),
        (xt = new Ze({
            sortChildren: !1,
            defaults: Vt,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
        })),
        (Ht.stringFilter = ht);
    var Ti,
        Si = [],
        Ei = {},
        ki = [],
        Ci = 0,
        Oi =
            (((Ti = Ai.prototype).add = function (t, e, i) {
                function n() {
                    var t,
                        n = _t,
                        o = s.selector;
                    return (
                        n && n !== s && n.data.push(s),
                        i && (s.selector = Q(i)),
                        (_t = s),
                        r((t = e.apply(s, arguments))) && s._r.push(t),
                        (_t = n),
                        (s.selector = o),
                        (s.isReverted = !1),
                        t
                    );
                }
                r(t) && ((i = e), (e = t), (t = r));
                var s = this;
                return (s.last = n), t === r ? n(s) : t ? (s[t] = n) : n;
            }),
            (Ti.ignore = function (t) {
                var e = _t;
                (_t = null), t(this), (_t = e);
            }),
            (Ti.getTweens = function () {
                var t = [];
                return (
                    this.data.forEach(function (e) {
                        return e instanceof Ai
                            ? t.push.apply(t, e.getTweens())
                            : e instanceof si &&
                                  !(e.parent && "nested" === e.parent.data) &&
                                  t.push(e);
                    }),
                    t
                );
            }),
            (Ti.clear = function () {
                this._r.length = this.data.length = 0;
            }),
            (Ti.kill = function (t, e) {
                var i = this;
                if (t) {
                    var n = this.getTweens();
                    this.data.forEach(function (t) {
                        "isFlip" === t.data &&
                            (t.revert(),
                            t.getChildren(!0, !0, !1).forEach(function (t) {
                                return n.splice(n.indexOf(t), 1);
                            }));
                    }),
                        n
                            .map(function (t) {
                                return { g: t.globalTime(0), t: t };
                            })
                            .sort(function (t, e) {
                                return e.g - t.g || -1;
                            })
                            .forEach(function (e) {
                                return e.t.revert(t);
                            }),
                        this.data.forEach(function (e) {
                            return (
                                !(e instanceof Ue) && e.revert && e.revert(t)
                            );
                        }),
                        this._r.forEach(function (e) {
                            return e(t, i);
                        }),
                        (this.isReverted = !0);
                } else
                    this.data.forEach(function (t) {
                        return t.kill && t.kill();
                    });
                if ((this.clear(), e)) {
                    var r = Si.indexOf(this);
                    ~r && Si.splice(r, 1);
                }
            }),
            (Ti.revert = function (t) {
                this.kill(t || {});
            }),
            Ai);
    function Ai(t, e) {
        (this.selector = e && Q(e)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            t && this.add(t);
    }
    var Mi,
        Pi =
            (((Mi = Li.prototype).add = function (t, e, i) {
                a(t) || (t = { matches: t });
                var n,
                    r,
                    s,
                    o = new Oi(0, i || this.scope),
                    l = (o.conditions = {});
                for (r in (this.contexts.push(o),
                (e = o.add("onMatch", e)),
                (o.queries = t)))
                    "all" === r
                        ? (s = 1)
                        : (n = bt.matchMedia(t[r])) &&
                          (Si.indexOf(o) < 0 && Si.push(o),
                          (l[r] = n.matches) && (s = 1),
                          n.addListener
                              ? n.addListener(wi)
                              : n.addEventListener("change", wi));
                return s && e(o), this;
            }),
            (Mi.revert = function (t) {
                this.kill(t || {});
            }),
            (Mi.kill = function (t) {
                this.contexts.forEach(function (e) {
                    return e.kill(t, !0);
                });
            }),
            Li);
    function Li(t) {
        (this.contexts = []), (this.scope = t);
    }
    var Di = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            e.forEach(function (t) {
                return (function (t) {
                    var e = (t = (!t.name && t.default) || t).name,
                        i = r(t),
                        n =
                            e && !i && t.init
                                ? function () {
                                      this._props = [];
                                  }
                                : t,
                        s = {
                            init: g,
                            render: gi,
                            add: ti,
                            kill: mi,
                            modifier: vi,
                            rawVars: 0,
                        },
                        o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: hi,
                            aliases: {},
                            register: 0,
                        };
                    if ((Ye(), t !== n)) {
                        if (me[e]) return;
                        O(n, O(M(t, s), o)),
                            we(n.prototype, we(s, M(t, o))),
                            (me[(n.prop = e)] = n),
                            t.targetTest && (xe.push(n), (pe[e] = 1)),
                            (e =
                                ("css" === e
                                    ? "CSS"
                                    : e.charAt(0).toUpperCase() + e.substr(1)) +
                                "Plugin");
                    }
                    p(e, n), t.register && t.register(Bi, n, _i);
                })(t);
            });
        },
        timeline: function (t) {
            return new Ze(t);
        },
        getTweensOf: function (t, e) {
            return xt.getTweensOf(t, e);
        },
        getProperty: function (t, e, i, r) {
            n(t) && (t = Ae(t)[0]);
            var s = m(t || {}).get,
                o = i ? C : k;
            return (
                "native" === i && (i = ""),
                t
                    ? e
                        ? o(((me[e] && me[e].get) || s)(t, e, i, r))
                        : function (e, i, n) {
                              return o(((me[e] && me[e].get) || s)(t, e, i, n));
                          }
                    : t
            );
        },
        quickSetter: function (t, e, i) {
            if (1 < (t = Ae(t)).length) {
                var n = t.map(function (t) {
                        return Bi.quickSetter(t, e, i);
                    }),
                    r = n.length;
                return function (t) {
                    for (var e = r; e--; ) n[e](t);
                };
            }
            t = t[0] || {};
            var s = me[e],
                o = m(t),
                a = (o.harness && (o.harness.aliases || {})[e]) || e,
                l = s
                    ? function (e) {
                          var n = new s();
                          (Ct._pt = 0),
                              n.init(t, i ? e + i : e, Ct, 0, [t]),
                              n.render(1, n),
                              Ct._pt && gi(1, Ct);
                      }
                    : o.set(t, a);
            return s
                ? l
                : function (e) {
                      return l(t, a, i ? e + i : e, o, 1);
                  };
        },
        quickTo: function (t, e, i) {
            function n(t, i, n) {
                return s.resetTo(e, t, i, n);
            }
            var r,
                s = Bi.to(
                    t,
                    we((((r = {})[e] = "+=0.1"), (r.paused = !0), r), i || {})
                );
            return (n.tween = s), n;
        },
        isTweening: function (t) {
            return 0 < xt.getTweensOf(t, !0).length;
        },
        defaults: function (t) {
            return (
                t && t.ease && (t.ease = We(t.ease, Vt.ease)), A(Vt, t || {})
            );
        },
        config: function (t) {
            return A(Ht, t || {});
        },
        registerEffect: function (t) {
            var e = t.name,
                i = t.effect,
                n = t.plugins,
                r = t.defaults,
                s = t.extendTimeline;
            (n || "").split(",").forEach(function (t) {
                return (
                    t &&
                    !me[t] &&
                    !ce[t] &&
                    f(e + " effect requires " + t + " plugin.")
                );
            }),
                (ye[e] = function (t, e, n) {
                    return i(Ae(t), O(e || {}, r), n);
                }),
                s &&
                    (Ze.prototype[e] = function (t, i, n) {
                        return this.add(
                            ye[e](t, a(i) ? i : (n = i) && {}, this),
                            n
                        );
                    });
        },
        registerEase: function (t, e) {
            Xe[t] = We(e);
        },
        parseEase: function (t, e) {
            return arguments.length ? We(t, e) : Xe;
        },
        getById: function (t) {
            return xt.getById(t);
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i,
                n,
                r = new Ze(t);
            for (
                r.smoothChildTiming = l(t.smoothChildTiming),
                    xt.remove(r),
                    r._dp = 0,
                    r._time = r._tTime = xt._time,
                    i = xt._first;
                i;

            )
                (n = i._next),
                    (!e &&
                        !i._dur &&
                        i instanceof si &&
                        i.vars.onComplete === i._targets[0]) ||
                        W(r, i, i._start - i._delay),
                    (i = n);
            return W(xt, r, 0), r;
        },
        context: function (t, e) {
            return t ? new Oi(t, e) : _t;
        },
        matchMedia: function (t) {
            return new Pi(t);
        },
        matchMediaRefresh: function () {
            return (
                Si.forEach(function (t) {
                    var e,
                        i,
                        n = t.conditions;
                    for (i in n) n[i] && ((n[i] = !1), (e = 1));
                    e && t.revert();
                }) || wi()
            );
        },
        addEventListener: function (t, e) {
            var i = Ei[t] || (Ei[t] = []);
            ~i.indexOf(e) || i.push(e);
        },
        removeEventListener: function (t, e) {
            var i = Ei[t],
                n = i && i.indexOf(e);
            0 <= n && i.splice(n, 1);
        },
        utils: {
            wrap: function t(e, i, n) {
                var r = i - e;
                return ie(e)
                    ? nt(e, t(0, e.length), i)
                    : G(n, function (t) {
                          return ((r + ((t - e) % r)) % r) + e;
                      });
            },
            wrapYoyo: function t(e, i, n) {
                var r = i - e,
                    s = 2 * r;
                return ie(e)
                    ? nt(e, t(0, e.length - 1), i)
                    : G(n, function (t) {
                          return (
                              e +
                              (r < (t = (s + ((t - e) % s)) % s || 0)
                                  ? s - t
                                  : t)
                          );
                      });
            },
            distribute: J,
            random: it,
            snap: et,
            normalize: function (t, e, i) {
                return Me(t, e, 0, 1, i);
            },
            getUnit: Z,
            clamp: function (t, e, i) {
                return G(i, function (i) {
                    return Ce(t, e, i);
                });
            },
            splitColor: lt,
            toArray: Ae,
            selector: Q,
            mapRange: Me,
            pipe: function () {
                for (
                    var t = arguments.length, e = new Array(t), i = 0;
                    i < t;
                    i++
                )
                    e[i] = arguments[i];
                return function (t) {
                    return e.reduce(function (t, e) {
                        return e(t);
                    }, t);
                };
            },
            unitize: function (t, e) {
                return function (i) {
                    return t(parseFloat(i)) + (e || Z(i));
                };
            },
            interpolate: function t(e, i, r, s) {
                var o = isNaN(e + i)
                    ? 0
                    : function (t) {
                          return (1 - t) * e + t * i;
                      };
                if (!o) {
                    var a,
                        l,
                        u,
                        c,
                        h,
                        d = n(e),
                        f = {};
                    if ((!0 === r && (s = 1) && (r = null), d))
                        (e = { p: e }), (i = { p: i });
                    else if (ie(e) && !ie(i)) {
                        for (u = [], c = e.length, h = c - 2, l = 1; l < c; l++)
                            u.push(t(e[l - 1], e[l]));
                        c--,
                            (o = function (t) {
                                t *= c;
                                var e = Math.min(h, ~~t);
                                return u[e](t - e);
                            }),
                            (r = i);
                    } else s || (e = we(ie(e) ? [] : {}, e));
                    if (!u) {
                        for (a in i) ti.call(f, e, a, "get", i[a]);
                        o = function (t) {
                            return gi(t, f) || (d ? e.p : e);
                        };
                    }
                }
                return G(r, o);
            },
            shuffle: K,
        },
        install: h,
        effects: ye,
        ticker: Be,
        updateRoot: Ze.updateRoot,
        plugins: me,
        globalTimeline: xt,
        core: {
            PropTween: _i,
            globals: p,
            Tween: si,
            Timeline: Ze,
            Animation: Ue,
            getCache: m,
            _removeLinkedListItem: D,
            reverting: function () {
                return yt;
            },
            context: function (t) {
                return t && _t && (_t.data.push(t), (t._ctx = _t)), _t;
            },
            suppressOverwrites: function (t) {
                return (mt = t);
            },
        },
    };
    function zi(t, e) {
        for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
            i = i._next;
        return i;
    }
    function Ii(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function (t, i, r) {
                r._onInit = function (t) {
                    var r, s;
                    if (
                        (n(i) &&
                            ((r = {}),
                            _(i, function (t) {
                                return (r[t] = 1);
                            }),
                            (i = r)),
                        e)
                    ) {
                        for (s in ((r = {}), i)) r[s] = e(i[s]);
                        i = r;
                    }
                    !(function (t, e) {
                        var i,
                            n,
                            r,
                            s = t._targets;
                        for (i in e)
                            for (n = s.length; n--; )
                                (r = (r = t._ptLookup[n][i]) && r.d) &&
                                    (r._pt && (r = zi(r, i)),
                                    r &&
                                        r.modifier &&
                                        r.modifier(e[i], t, s[n], i));
                    })(t, i);
                };
            },
        };
    }
    _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (Di[t] = si[t]);
    }),
        Be.add(Ze.updateRoot),
        (Ct = Di.to({}, { duration: 0 }));
    var Bi =
        Di.registerPlugin(
            {
                name: "attr",
                init: function (t, e, i, n, r) {
                    var s, o, a;
                    for (s in ((this.tween = i), e))
                        (a = t.getAttribute(s) || ""),
                            ((o = this.add(
                                t,
                                "setAttribute",
                                (a || 0) + "",
                                e[s],
                                n,
                                r,
                                0,
                                0,
                                s
                            )).op = s),
                            (o.b = a),
                            this._props.push(s);
                },
                render: function (t, e) {
                    for (var i = e._pt; i; )
                        yt ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
                            (i = i._next);
                },
            },
            {
                name: "endArray",
                init: function (t, e) {
                    for (var i = e.length; i--; )
                        this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
                },
            },
            Ii("roundProps", tt),
            Ii("modifiers"),
            Ii("snap", et)
        ) || Di;
    function Yi(t, e) {
        return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
        );
    }
    function Xi(t, e) {
        return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
        );
    }
    function Ri(t, e) {
        return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
        );
    }
    function Ni(t, e) {
        var i = e.s + e.c * t;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    }
    function qi(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function Wi(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function Fi(t, e, i) {
        return (t.style[e] = i);
    }
    function ji(t, e, i) {
        return t.style.setProperty(e, i);
    }
    function Hi(t, e, i) {
        return (t._gsap[e] = i);
    }
    function Vi(t, e, i) {
        return (t._gsap.scaleX = t._gsap.scaleY = i);
    }
    function Ui(t, e, i, n, r) {
        var s = t._gsap;
        (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
    }
    function Gi(t, e, i, n, r) {
        var s = t._gsap;
        (s[e] = i), s.renderTransform(r, s);
    }
    function Zi(t, e) {
        var i = this,
            n = this.target,
            r = n.style;
        if (t in Un) {
            if (
                ((this.tfm = this.tfm || {}),
                "transform" !== t &&
                    (~(t = tr[t] || t).indexOf(",")
                        ? t.split(",").forEach(function (t) {
                              return (i.tfm[t] = ar(n, t));
                          })
                        : (this.tfm[t] = n._gsap.x ? n._gsap[t] : ar(n, t))),
                0 <= this.props.indexOf(er))
            )
                return;
            n._gsap.svg &&
                ((this.svgo = n.getAttribute("data-svg-origin")),
                this.props.push(ir, e, "")),
                (t = er);
        }
        (r || e) && this.props.push(t, e, r[t]);
    }
    function $i(t) {
        t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
    }
    function Qi() {
        var t,
            e,
            i = this.props,
            n = this.target,
            r = n.style,
            s = n._gsap;
        for (t = 0; t < i.length; t += 3)
            i[t + 1]
                ? (n[i[t]] = i[t + 2])
                : i[t + 2]
                ? (r[i[t]] = i[t + 2])
                : r.removeProperty(i[t].replace(Qn, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg &&
                (s.renderTransform(),
                n.setAttribute("data-svg-origin", this.svgo || "")),
                !(t = Cn()) || t.isStart || r[er] || ($i(r), (s.uncache = 1));
        }
    }
    function Ki(t, e) {
        var i = { target: t, props: [], revert: Qi, save: Zi };
        return (
            e &&
                e.split(",").forEach(function (t) {
                    return i.save(t);
                }),
            i
        );
    }
    function Ji(t, e) {
        var i = wn.createElementNS
            ? wn.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                      /^https/,
                      "http"
                  ),
                  t
              )
            : wn.createElement(t);
        return i.style ? i : wn.createElement(t);
    }
    function tn(t, e, i) {
        var n = getComputedStyle(t);
        return (
            n[e] ||
            n.getPropertyValue(e.replace(Qn, "-$1").toLowerCase()) ||
            n.getPropertyValue(e) ||
            (!i && tn(t, rr(e) || e, 1)) ||
            ""
        );
    }
    function en() {
        "undefined" != typeof window &&
            window.document &&
            ((bn = window),
            (wn = bn.document),
            (Tn = wn.documentElement),
            (En = Ji("div") || { style: {} }),
            Ji("div"),
            (er = rr(er)),
            (ir = er + "Origin"),
            (En.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
            (On = !!rr("perspective")),
            (Cn = Bi.core.reverting),
            (Sn = 1));
    }
    function nn(t) {
        var e,
            i = Ji(
                "svg",
                (this.ownerSVGElement &&
                    this.ownerSVGElement.getAttribute("xmlns")) ||
                    "http://www.w3.org/2000/svg"
            ),
            n = this.parentNode,
            r = this.nextSibling,
            s = this.style.cssText;
        if (
            (Tn.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            t)
        )
            try {
                (e = this.getBBox()),
                    (this._gsapBBox = this.getBBox),
                    (this.getBBox = nn);
            } catch (t) {}
        else this._gsapBBox && (e = this._gsapBBox());
        return (
            n && (r ? n.insertBefore(this, r) : n.appendChild(this)),
            Tn.removeChild(i),
            (this.style.cssText = s),
            e
        );
    }
    function rn(t, e) {
        for (var i = e.length; i--; )
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    }
    function sn(t) {
        var e;
        try {
            e = t.getBBox();
        } catch (i) {
            e = nn.call(t, !0);
        }
        return (
            (e && (e.width || e.height)) ||
                t.getBBox === nn ||
                (e = nn.call(t, !0)),
            !e || e.width || e.x || e.y
                ? e
                : {
                      x: +rn(t, ["x", "cx", "x1"]) || 0,
                      y: +rn(t, ["y", "cy", "y1"]) || 0,
                      width: 0,
                      height: 0,
                  }
        );
    }
    function on(t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !sn(t));
    }
    function an(t, e) {
        if (e) {
            var i = t.style;
            e in Un && e !== ir && (e = er),
                i.removeProperty
                    ? (("ms" !== e.substr(0, 2) &&
                          "webkit" !== e.substr(0, 6)) ||
                          (e = "-" + e),
                      i.removeProperty(e.replace(Qn, "-$1").toLowerCase()))
                    : i.removeAttribute(e);
        }
    }
    function ln(t, e, i, n, r, s) {
        var o = new _i(t._pt, e, i, 0, 1, s ? Wi : qi);
        return ((t._pt = o).b = n), (o.e = r), t._props.push(i), o;
    }
    function un(t, e, i, n) {
        var r,
            s,
            o,
            a,
            l = parseFloat(i) || 0,
            u = (i + "").trim().substr((l + "").length) || "px",
            c = En.style,
            h = Kn.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            f = (d ? "client" : "offset") + (h ? "Width" : "Height"),
            p = "px" === n,
            g = "%" === n;
        return n === u || !l || sr[n] || sr[u]
            ? l
            : ("px" === u || p || (l = un(t, e, i, "px")),
              (a = t.getCTM && on(t)),
              (!g && "%" !== u) || (!Un[e] && !~e.indexOf("adius"))
                  ? ((c[h ? "width" : "height"] = 100 + (p ? u : n)),
                    (s =
                        ~e.indexOf("adius") ||
                        ("em" === n && t.appendChild && !d)
                            ? t
                            : t.parentNode),
                    a && (s = (t.ownerSVGElement || {}).parentNode),
                    (s && s !== wn && s.appendChild) || (s = wn.body),
                    (o = s._gsap) &&
                    g &&
                    o.width &&
                    h &&
                    o.time === Be.time &&
                    !o.uncache
                        ? x((l / o.width) * 100)
                        : ((!g && "%" !== u) ||
                              or[tn(s, "display")] ||
                              (c.position = tn(t, "position")),
                          s === t && (c.position = "static"),
                          s.appendChild(En),
                          (r = En[f]),
                          s.removeChild(En),
                          (c.position = "absolute"),
                          h &&
                              g &&
                              (((o = m(s)).time = Be.time), (o.width = s[f])),
                          x(p ? (r * l) / 100 : r && l ? (100 / r) * l : 0)))
                  : ((r = a ? t.getBBox()[h ? "width" : "height"] : t[f]),
                    x(g ? (l / r) * 100 : (l / 100) * r)));
    }
    function cn(t, e, i, n) {
        if (!i || "none" === i) {
            var r = rr(e, t, 1),
                s = r && tn(t, r, 1);
            s && s !== i
                ? ((e = r), (i = s))
                : "borderColor" === e && (i = tn(t, "borderTopColor"));
        }
        var o,
            a,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            v,
            m = new _i(this._pt, t.style, e, 0, 1, pi),
            y = 0,
            _ = 0;
        if (
            ((m.b = i),
            (m.e = n),
            (i += ""),
            "auto" == (n += "") &&
                ((t.style[e] = n), (n = tn(t, e) || n), (t.style[e] = i)),
            ht((o = [i, n])),
            (n = o[1]),
            (l = (i = o[0]).match(se) || []),
            (n.match(se) || []).length)
        ) {
            for (; (a = se.exec(n)); )
                (d = a[0]),
                    (p = n.substring(y, a.index)),
                    c
                        ? (c = (c + 1) % 5)
                        : ("rgba(" !== p.substr(-5) &&
                              "hsla(" !== p.substr(-5)) ||
                          (c = 1),
                    d !== (h = l[_++] || "") &&
                        ((u = parseFloat(h) || 0),
                        (v = h.substr((u + "").length)),
                        "=" === d.charAt(1) && (d = w(u, d) + v),
                        (f = parseFloat(d)),
                        (g = d.substr((f + "").length)),
                        (y = se.lastIndex - g.length),
                        g ||
                            ((g = g || Ht.units[e] || v),
                            y === n.length && ((n += g), (m.e += g))),
                        v !== g && (u = un(t, e, h, g) || 0),
                        (m._pt = {
                            _next: m._pt,
                            p: p || 1 === _ ? p : ",",
                            s: u,
                            c: f - u,
                            m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                        }));
            m.c = y < n.length ? n.substring(y, n.length) : "";
        } else m.r = "display" === e && "none" === n ? Wi : qi;
        return ae.test(n) && (m.e = 0), (this._pt = m);
    }
    function hn(t) {
        var e = t.split(" "),
            i = e[0],
            n = e[1] || "50%";
        return (
            ("top" !== i && "bottom" !== i && "left" !== n && "right" !== n) ||
                ((t = i), (i = n), (n = t)),
            (e[0] = lr[i] || i),
            (e[1] = lr[n] || n),
            e.join(" ")
        );
    }
    function dn(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i,
                n,
                r,
                s = e.t,
                o = s.style,
                a = e.u,
                l = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
            else
                for (r = (a = a.split(",")).length; -1 < --r; )
                    (i = a[r]),
                        Un[i] &&
                            ((n = 1), (i = "transformOrigin" === i ? ir : er)),
                        an(s, i);
            n &&
                (an(s, er),
                l &&
                    (l.svg && s.removeAttribute("transform"),
                    dr(s, 1),
                    (l.uncache = 1),
                    $i(o)));
        }
    }
    function fn(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function pn(t) {
        var e = tn(t, er);
        return fn(e) ? cr : e.substr(7).match(re).map(x);
    }
    function gn(t, e) {
        var i,
            n,
            r,
            s,
            o = t._gsap || m(t),
            a = t.style,
            l = pn(t);
        return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (l = [
                  (r = t.transform.baseVal.consolidate().matrix).a,
                  r.b,
                  r.c,
                  r.d,
                  r.e,
                  r.f,
              ]).join(",")
                ? cr
                : l
            : (l !== cr ||
                  t.offsetParent ||
                  t === Tn ||
                  o.svg ||
                  ((r = a.display),
                  (a.display = "block"),
                  ((i = t.parentNode) && t.offsetParent) ||
                      ((s = 1), (n = t.nextElementSibling), Tn.appendChild(t)),
                  (l = pn(t)),
                  r ? (a.display = r) : an(t, "display"),
                  s &&
                      (n
                          ? i.insertBefore(t, n)
                          : i
                          ? i.appendChild(t)
                          : Tn.removeChild(t))),
              e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    }
    function vn(t, e, i, n, r, s) {
        var o,
            a,
            l,
            u = t._gsap,
            c = r || gn(t, !0),
            h = u.xOrigin || 0,
            d = u.yOrigin || 0,
            f = u.xOffset || 0,
            p = u.yOffset || 0,
            g = c[0],
            v = c[1],
            m = c[2],
            y = c[3],
            _ = c[4],
            x = c[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            T = parseFloat(b[1]) || 0;
        i
            ? c !== cr &&
              (a = g * y - v * m) &&
              ((l = w * (-v / a) + T * (g / a) - (g * x - v * _) / a),
              (w = w * (y / a) + T * (-m / a) + (m * x - y * _) / a),
              (T = l))
            : ((w =
                  (o = sn(t)).x +
                  (~b[0].indexOf("%") ? (w / 100) * o.width : w)),
              (T =
                  o.y +
                  (~(b[1] || b[0]).indexOf("%") ? (T / 100) * o.height : T))),
            n || (!1 !== n && u.smooth)
                ? ((_ = w - h),
                  (x = T - d),
                  (u.xOffset = f + (_ * g + x * m) - _),
                  (u.yOffset = p + (_ * v + x * y) - x))
                : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = w),
            (u.yOrigin = T),
            (u.smooth = !!n),
            (u.origin = e),
            (u.originIsAbsolute = !!i),
            (t.style[ir] = "0px 0px"),
            s &&
                (ln(s, u, "xOrigin", h, w),
                ln(s, u, "yOrigin", d, T),
                ln(s, u, "xOffset", f, u.xOffset),
                ln(s, u, "yOffset", p, u.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + T);
    }
    function mn(t, e, i) {
        var n = Z(e);
        return x(parseFloat(e) + parseFloat(un(t, "x", i + "px", n))) + n;
    }
    function yn(t, e, i, r, s) {
        var o,
            a,
            l = 360,
            u = n(s),
            c = parseFloat(s) * (u && ~s.indexOf("rad") ? Gn : 1) - r,
            h = r + c + "deg";
        return (
            u &&
                ("short" === (o = s.split("_")[1]) &&
                    (c %= l) != c % 180 &&
                    (c += c < 0 ? l : -l),
                "cw" === o && c < 0
                    ? (c = ((c + 36e9) % l) - ~~(c / l) * l)
                    : "ccw" === o &&
                      0 < c &&
                      (c = ((c - 36e9) % l) - ~~(c / l) * l)),
            (t._pt = a = new _i(t._pt, e, i, r, c, Xi)),
            (a.e = h),
            (a.u = "deg"),
            t._props.push(i),
            a
        );
    }
    function _n(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
    }
    function xn(t, e, i) {
        var n,
            r,
            s,
            o,
            a,
            l,
            u,
            c = _n({}, i._gsap),
            h = i.style;
        for (r in (c.svg
            ? ((s = i.getAttribute("transform")),
              i.setAttribute("transform", ""),
              (h[er] = e),
              (n = dr(i, 1)),
              an(i, er),
              i.setAttribute("transform", s))
            : ((s = getComputedStyle(i)[er]),
              (h[er] = e),
              (n = dr(i, 1)),
              (h[er] = s)),
        Un))
            (s = c[r]) !== (o = n[r]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) <
                    0 &&
                ((a = Z(s) !== (u = Z(o)) ? un(i, r, s, u) : parseFloat(s)),
                (l = parseFloat(o)),
                (t._pt = new _i(t._pt, n, r, a, l - a, Yi)),
                (t._pt.u = u || 0),
                t._props.push(r));
        _n(n, c);
    }
    (si.version = Ze.version = Bi.version = "3.11.4"), (Et = 1), u() && Ye();
    var bn,
        wn,
        Tn,
        Sn,
        En,
        kn,
        Cn,
        On,
        An = Xe.Power0,
        Mn = Xe.Power1,
        Pn = Xe.Power2,
        Ln = Xe.Power3,
        Dn = Xe.Power4,
        zn = Xe.Linear,
        In = Xe.Quad,
        Bn = Xe.Cubic,
        Yn = Xe.Quart,
        Xn = Xe.Quint,
        Rn = Xe.Strong,
        Nn = Xe.Elastic,
        qn = Xe.Back,
        Wn = Xe.SteppedEase,
        Fn = Xe.Bounce,
        jn = Xe.Sine,
        Hn = Xe.Expo,
        Vn = Xe.Circ,
        Un = {},
        Gn = 180 / Math.PI,
        Zn = Math.PI / 180,
        $n = Math.atan2,
        Qn = /([A-Z])/g,
        Kn = /(left|right|width|margin|padding|x)/i,
        Jn = /[\s,\(]\S/,
        tr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
        },
        er = "transform",
        ir = er + "Origin",
        nr = "O,Moz,ms,Ms,Webkit".split(","),
        rr = function (t, e, i) {
            var n = (e || En).style,
                r = 5;
            if (t in n && !i) return t;
            for (
                t = t.charAt(0).toUpperCase() + t.substr(1);
                r-- && !(nr[r] + t in n);

            );
            return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? nr[r] : "") + t;
        },
        sr = { deg: 1, rad: 1, turn: 1 },
        or = { grid: 1, flex: 1 },
        ar = function (t, e, i, n) {
            var r;
            return (
                Sn || en(),
                e in tr &&
                    "transform" !== e &&
                    ~(e = tr[e]).indexOf(",") &&
                    (e = e.split(",")[0]),
                Un[e] && "transform" !== e
                    ? ((r = dr(t, n)),
                      (r =
                          "transformOrigin" !== e
                              ? r[e]
                              : r.svg
                              ? r.origin
                              : fr(tn(t, ir)) + " " + r.zOrigin + "px"))
                    : ((r = t.style[e]) &&
                          "auto" !== r &&
                          !n &&
                          !~(r + "").indexOf("calc(")) ||
                      (r =
                          (ur[e] && ur[e](t, e, i)) ||
                          tn(t, e) ||
                          y(t, e) ||
                          ("opacity" === e ? 1 : 0)),
                i && !~(r + "").trim().indexOf(" ") ? un(t, e, r, i) + i : r
            );
        },
        lr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
        },
        ur = {
            clearProps: function (t, e, i, n, r) {
                if ("isFromStart" !== r.data) {
                    var s = (t._pt = new _i(t._pt, e, i, 0, 0, dn));
                    return (
                        (s.u = n),
                        (s.pr = -10),
                        (s.tween = r),
                        t._props.push(i),
                        1
                    );
                }
            },
        },
        cr = [1, 0, 0, 1, 0, 0],
        hr = {},
        dr = function (t, e) {
            var i = t._gsap || new Ve(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n,
                r,
                s,
                o,
                a,
                l,
                u,
                c,
                h,
                d,
                f,
                p,
                g,
                v,
                m,
                y,
                _,
                b,
                w,
                T,
                S,
                E,
                k,
                C,
                O,
                A,
                M,
                P,
                L,
                D,
                z,
                I,
                B = t.style,
                Y = i.scaleX < 0,
                X = "deg",
                R = getComputedStyle(t),
                N = tn(t, ir) || "0";
            return (
                (n = r = s = l = u = c = h = d = f = 0),
                (o = a = 1),
                (i.svg = !(!t.getCTM || !on(t))),
                R.translate &&
                    (("none" === R.translate &&
                        "none" === R.scale &&
                        "none" === R.rotate) ||
                        (B[er] =
                            ("none" !== R.translate
                                ? "translate3d(" +
                                  (R.translate + " 0 0")
                                      .split(" ")
                                      .slice(0, 3)
                                      .join(", ") +
                                  ") "
                                : "") +
                            ("none" !== R.rotate
                                ? "rotate(" + R.rotate + ") "
                                : "") +
                            ("none" !== R.scale
                                ? "scale(" + R.scale.split(" ").join(",") + ") "
                                : "") +
                            ("none" !== R[er] ? R[er] : "")),
                    (B.scale = B.rotate = B.translate = "none")),
                (v = gn(t, i.svg)),
                i.svg &&
                    ((C = i.uncache
                        ? ((O = t.getBBox()),
                          (N =
                              i.xOrigin -
                              O.x +
                              "px " +
                              (i.yOrigin - O.y) +
                              "px"),
                          "")
                        : !e && t.getAttribute("data-svg-origin")),
                    vn(
                        t,
                        C || N,
                        !!C || i.originIsAbsolute,
                        !1 !== i.smooth,
                        v
                    )),
                (p = i.xOrigin || 0),
                (g = i.yOrigin || 0),
                v !== cr &&
                    ((b = v[0]),
                    (w = v[1]),
                    (T = v[2]),
                    (S = v[3]),
                    (n = E = v[4]),
                    (r = k = v[5]),
                    6 === v.length
                        ? ((o = Math.sqrt(b * b + w * w)),
                          (a = Math.sqrt(S * S + T * T)),
                          (l = b || w ? $n(w, b) * Gn : 0),
                          (h = T || S ? $n(T, S) * Gn + l : 0) &&
                              (a *= Math.abs(Math.cos(h * Zn))),
                          i.svg &&
                              ((n -= p - (p * b + g * T)),
                              (r -= g - (p * w + g * S))))
                        : ((I = v[6]),
                          (D = v[7]),
                          (M = v[8]),
                          (P = v[9]),
                          (L = v[10]),
                          (z = v[11]),
                          (n = v[12]),
                          (r = v[13]),
                          (s = v[14]),
                          (u = (m = $n(I, L)) * Gn),
                          m &&
                              ((C =
                                  E * (y = Math.cos(-m)) +
                                  M * (_ = Math.sin(-m))),
                              (O = k * y + P * _),
                              (A = I * y + L * _),
                              (M = E * -_ + M * y),
                              (P = k * -_ + P * y),
                              (L = I * -_ + L * y),
                              (z = D * -_ + z * y),
                              (E = C),
                              (k = O),
                              (I = A)),
                          (c = (m = $n(-T, L)) * Gn),
                          m &&
                              ((y = Math.cos(-m)),
                              (z = S * (_ = Math.sin(-m)) + z * y),
                              (b = C = b * y - M * _),
                              (w = O = w * y - P * _),
                              (T = A = T * y - L * _)),
                          (l = (m = $n(w, b)) * Gn),
                          m &&
                              ((C =
                                  b * (y = Math.cos(m)) +
                                  w * (_ = Math.sin(m))),
                              (O = E * y + k * _),
                              (w = w * y - b * _),
                              (k = k * y - E * _),
                              (b = C),
                              (E = O)),
                          u &&
                              359.9 < Math.abs(u) + Math.abs(l) &&
                              ((u = l = 0), (c = 180 - c)),
                          (o = x(Math.sqrt(b * b + w * w + T * T))),
                          (a = x(Math.sqrt(k * k + I * I))),
                          (m = $n(E, k)),
                          (h = 2e-4 < Math.abs(m) ? m * Gn : 0),
                          (f = z ? 1 / (z < 0 ? -z : z) : 0)),
                    i.svg &&
                        ((C = t.getAttribute("transform")),
                        (i.forceCSS =
                            t.setAttribute("transform", "") || !fn(tn(t, er))),
                        C && t.setAttribute("transform", C))),
                90 < Math.abs(h) &&
                    Math.abs(h) < 270 &&
                    (Y
                        ? ((o *= -1),
                          (h += l <= 0 ? 180 : -180),
                          (l += l <= 0 ? 180 : -180))
                        : ((a *= -1), (h += h <= 0 ? 180 : -180))),
                (e = e || i.uncache),
                (i.x =
                    n -
                    ((i.xPercent =
                        n &&
                        ((!e && i.xPercent) ||
                            (Math.round(t.offsetWidth / 2) === Math.round(-n)
                                ? -50
                                : 0)))
                        ? (t.offsetWidth * i.xPercent) / 100
                        : 0) +
                    "px"),
                (i.y =
                    r -
                    ((i.yPercent =
                        r &&
                        ((!e && i.yPercent) ||
                            (Math.round(t.offsetHeight / 2) === Math.round(-r)
                                ? -50
                                : 0)))
                        ? (t.offsetHeight * i.yPercent) / 100
                        : 0) +
                    "px"),
                (i.z = s + "px"),
                (i.scaleX = x(o)),
                (i.scaleY = x(a)),
                (i.rotation = x(l) + X),
                (i.rotationX = x(u) + X),
                (i.rotationY = x(c) + X),
                (i.skewX = h + X),
                (i.skewY = d + X),
                (i.transformPerspective = f + "px"),
                (i.zOrigin = parseFloat(N.split(" ")[2]) || 0) &&
                    (B[ir] = fr(N)),
                (i.xOffset = i.yOffset = 0),
                (i.force3D = Ht.force3D),
                (i.renderTransform = i.svg ? _r : On ? yr : pr),
                (i.uncache = 0),
                i
            );
        },
        fr = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
        },
        pr = function (t, e) {
            (e.z = "0px"),
                (e.rotationY = e.rotationX = "0deg"),
                (e.force3D = 0),
                yr(t, e);
        },
        gr = "0deg",
        vr = "0px",
        mr = ") ",
        yr = function (t, e) {
            var i = e || this,
                n = i.xPercent,
                r = i.yPercent,
                s = i.x,
                o = i.y,
                a = i.z,
                l = i.rotation,
                u = i.rotationY,
                c = i.rotationX,
                h = i.skewX,
                d = i.skewY,
                f = i.scaleX,
                p = i.scaleY,
                g = i.transformPerspective,
                v = i.force3D,
                m = i.target,
                y = i.zOrigin,
                _ = "",
                x = ("auto" === v && t && 1 !== t) || !0 === v;
            if (y && (c !== gr || u !== gr)) {
                var b,
                    w = parseFloat(u) * Zn,
                    T = Math.sin(w),
                    S = Math.cos(w);
                (w = parseFloat(c) * Zn),
                    (s = mn(m, s, T * (b = Math.cos(w)) * -y)),
                    (o = mn(m, o, -Math.sin(w) * -y)),
                    (a = mn(m, a, S * b * -y + y));
            }
            g !== vr && (_ += "perspective(" + g + mr),
                (n || r) && (_ += "translate(" + n + "%, " + r + "%) "),
                (!x && s === vr && o === vr && a === vr) ||
                    (_ +=
                        a !== vr || x
                            ? "translate3d(" + s + ", " + o + ", " + a + ") "
                            : "translate(" + s + ", " + o + mr),
                l !== gr && (_ += "rotate(" + l + mr),
                u !== gr && (_ += "rotateY(" + u + mr),
                c !== gr && (_ += "rotateX(" + c + mr),
                (h === gr && d === gr) || (_ += "skew(" + h + ", " + d + mr),
                (1 === f && 1 === p) || (_ += "scale(" + f + ", " + p + mr),
                (m.style[er] = _ || "translate(0, 0)");
        },
        _r = function (t, e) {
            var i,
                n,
                r,
                s,
                o,
                a = e || this,
                l = a.xPercent,
                u = a.yPercent,
                c = a.x,
                h = a.y,
                d = a.rotation,
                f = a.skewX,
                p = a.skewY,
                g = a.scaleX,
                v = a.scaleY,
                m = a.target,
                y = a.xOrigin,
                _ = a.yOrigin,
                b = a.xOffset,
                w = a.yOffset,
                T = a.forceCSS,
                S = parseFloat(c),
                E = parseFloat(h);
            (d = parseFloat(d)),
                (f = parseFloat(f)),
                (p = parseFloat(p)) && ((f += p = parseFloat(p)), (d += p)),
                d || f
                    ? ((d *= Zn),
                      (f *= Zn),
                      (i = Math.cos(d) * g),
                      (n = Math.sin(d) * g),
                      (r = Math.sin(d - f) * -v),
                      (s = Math.cos(d - f) * v),
                      f &&
                          ((p *= Zn),
                          (o = Math.tan(f - p)),
                          (r *= o = Math.sqrt(1 + o * o)),
                          (s *= o),
                          p &&
                              ((o = Math.tan(p)),
                              (i *= o = Math.sqrt(1 + o * o)),
                              (n *= o))),
                      (i = x(i)),
                      (n = x(n)),
                      (r = x(r)),
                      (s = x(s)))
                    : ((i = g), (s = v), (n = r = 0)),
                ((S && !~(c + "").indexOf("px")) ||
                    (E && !~(h + "").indexOf("px"))) &&
                    ((S = un(m, "x", c, "px")), (E = un(m, "y", h, "px"))),
                (y || _ || b || w) &&
                    ((S = x(S + y - (y * i + _ * r) + b)),
                    (E = x(E + _ - (y * n + _ * s) + w))),
                (l || u) &&
                    ((S = x(S + (l / 100) * (o = m.getBBox()).width)),
                    (E = x(E + (u / 100) * o.height))),
                (o =
                    "matrix(" +
                    i +
                    "," +
                    n +
                    "," +
                    r +
                    "," +
                    s +
                    "," +
                    S +
                    "," +
                    E +
                    ")"),
                m.setAttribute("transform", o),
                T && (m.style[er] = o);
        };
    _("padding,margin,Width,Radius", function (t, e) {
        var i = "Right",
            n = "Bottom",
            r = "Left",
            s = (
                e < 3 ? ["Top", i, n, r] : ["Top" + r, "Top" + i, n + i, n + r]
            ).map(function (i) {
                return e < 2 ? t + i : "border" + i + t;
            });
        ur[1 < e ? "border" + t : t] = function (t, e, i, n, r) {
            var o, a;
            if (arguments.length < 4)
                return (
                    (o = s.map(function (e) {
                        return ar(t, e, i);
                    })),
                    5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
                );
            (o = (n + "").split(" ")),
                (a = {}),
                s.forEach(function (t, e) {
                    return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
                }),
                t.init(e, a, r);
        };
    });
    var xr,
        br,
        wr = {
            name: "css",
            register: en,
            targetTest: function (t) {
                return t.style && t.nodeType;
            },
            init: function (t, e, i, r, s) {
                var o,
                    a,
                    l,
                    u,
                    c,
                    h,
                    f,
                    p,
                    g,
                    v,
                    m,
                    y,
                    _,
                    x,
                    b,
                    T,
                    S = this._props,
                    E = t.style,
                    k = i.vars.startAt;
                for (f in (Sn || en(),
                (this.styles = this.styles || Ki(t)),
                (T = this.styles.props),
                (this.tween = i),
                e))
                    if (
                        "autoRound" !== f &&
                        ((a = e[f]), !me[f] || !$e(f, e, i, r, t, s))
                    )
                        if (
                            ((c = typeof a),
                            (h = ur[f]),
                            "function" === c &&
                                (c = typeof (a = a.call(i, r, t, s))),
                            "string" === c &&
                                ~a.indexOf("random(") &&
                                (a = rt(a)),
                            h)
                        )
                            h(this, t, f, a, i) && (b = 1);
                        else if ("--" === f.substr(0, 2))
                            (o = (
                                getComputedStyle(t).getPropertyValue(f) + ""
                            ).trim()),
                                (a += ""),
                                (ze.lastIndex = 0),
                                ze.test(o) || ((p = Z(o)), (g = Z(a))),
                                g
                                    ? p !== g && (o = un(t, f, o, g) + g)
                                    : p && (a += p),
                                this.add(E, "setProperty", o, a, r, s, 0, 0, f),
                                S.push(f),
                                T.push(f, 0, E[f]);
                        else if ("undefined" !== c) {
                            if (
                                (k && f in k
                                    ? (n(
                                          (o =
                                              "function" == typeof k[f]
                                                  ? k[f].call(i, r, t, s)
                                                  : k[f])
                                      ) &&
                                          ~o.indexOf("random(") &&
                                          (o = rt(o)),
                                      Z(o + "") ||
                                          (o +=
                                              Ht.units[f] || Z(ar(t, f)) || ""),
                                      "=" === (o + "").charAt(1) &&
                                          (o = ar(t, f)))
                                    : (o = ar(t, f)),
                                (u = parseFloat(o)),
                                (v =
                                    "string" === c &&
                                    "=" === a.charAt(1) &&
                                    a.substr(0, 2)) && (a = a.substr(2)),
                                (l = parseFloat(a)),
                                f in tr &&
                                    ("autoAlpha" === f &&
                                        (1 === u &&
                                            "hidden" === ar(t, "visibility") &&
                                            l &&
                                            (u = 0),
                                        T.push("visibility", 0, E.visibility),
                                        ln(
                                            this,
                                            E,
                                            "visibility",
                                            u ? "inherit" : "hidden",
                                            l ? "inherit" : "hidden",
                                            !l
                                        )),
                                    "scale" !== f &&
                                        "transform" !== f &&
                                        ~(f = tr[f]).indexOf(",") &&
                                        (f = f.split(",")[0])),
                                (m = f in Un))
                            )
                                if (
                                    (this.styles.save(f),
                                    y ||
                                        (((_ = t._gsap).renderTransform &&
                                            !e.parseTransform) ||
                                            dr(t, e.parseTransform),
                                        (x = !1 !== e.smoothOrigin && _.smooth),
                                        ((y = this._pt =
                                            new _i(
                                                this._pt,
                                                E,
                                                er,
                                                0,
                                                1,
                                                _.renderTransform,
                                                _,
                                                0,
                                                -1
                                            )).dep = 1)),
                                    "scale" === f)
                                )
                                    (this._pt = new _i(
                                        this._pt,
                                        _,
                                        "scaleY",
                                        _.scaleY,
                                        (v ? w(_.scaleY, v + l) : l) -
                                            _.scaleY || 0,
                                        Yi
                                    )),
                                        (this._pt.u = 0),
                                        S.push("scaleY", f),
                                        (f += "X");
                                else {
                                    if ("transformOrigin" === f) {
                                        T.push(ir, 0, E[ir]),
                                            (a = hn(a)),
                                            _.svg
                                                ? vn(t, a, 0, x, 0, this)
                                                : ((g =
                                                      parseFloat(
                                                          a.split(" ")[2]
                                                      ) || 0) !== _.zOrigin &&
                                                      ln(
                                                          this,
                                                          _,
                                                          "zOrigin",
                                                          _.zOrigin,
                                                          g
                                                      ),
                                                  ln(this, E, f, fr(o), fr(a)));
                                        continue;
                                    }
                                    if ("svgOrigin" === f) {
                                        vn(t, a, 1, x, 0, this);
                                        continue;
                                    }
                                    if (f in hr) {
                                        yn(this, _, f, u, v ? w(u, v + a) : a);
                                        continue;
                                    }
                                    if ("smoothOrigin" === f) {
                                        ln(this, _, "smooth", _.smooth, a);
                                        continue;
                                    }
                                    if ("force3D" === f) {
                                        _[f] = a;
                                        continue;
                                    }
                                    if ("transform" === f) {
                                        xn(this, a, t);
                                        continue;
                                    }
                                }
                            else f in E || (f = rr(f) || f);
                            if (
                                m ||
                                ((l || 0 === l) &&
                                    (u || 0 === u) &&
                                    !Jn.test(a) &&
                                    f in E)
                            )
                                (l = l || 0),
                                    (p = (o + "").substr((u + "").length)) !==
                                        (g =
                                            Z(a) ||
                                            (f in Ht.units
                                                ? Ht.units[f]
                                                : p)) && (u = un(t, f, o, g)),
                                    (this._pt = new _i(
                                        this._pt,
                                        m ? _ : E,
                                        f,
                                        u,
                                        (v ? w(u, v + l) : l) - u,
                                        m ||
                                        ("px" !== g && "zIndex" !== f) ||
                                        !1 === e.autoRound
                                            ? Yi
                                            : Ni
                                    )),
                                    (this._pt.u = g || 0),
                                    p !== g &&
                                        "%" !== g &&
                                        ((this._pt.b = o), (this._pt.r = Ri));
                            else if (f in E)
                                cn.call(this, t, f, o, v ? v + a : a);
                            else if (f in t)
                                this.add(t, f, o || t[f], v ? v + a : a, r, s);
                            else if ("parseTransform" !== f) {
                                d(f, a);
                                continue;
                            }
                            m ||
                                (f in E
                                    ? T.push(f, 0, E[f])
                                    : T.push(f, 1, o || t[f])),
                                S.push(f);
                        }
                b && yi(this);
            },
            render: function (t, e) {
                if (e.tween._time || !Cn())
                    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
                else e.styles.revert();
            },
            get: ar,
            aliases: tr,
            getSetter: function (t, e, i) {
                var n = tr[e];
                return (
                    n && n.indexOf(",") < 0 && (e = n),
                    e in Un && e !== ir && (t._gsap.x || ar(t, "x"))
                        ? i && kn === i
                            ? "scale" === e
                                ? Vi
                                : Hi
                            : (kn = i || {}) && ("scale" === e ? Ui : Gi)
                        : t.style && !o(t.style[e])
                        ? Fi
                        : ~e.indexOf("-")
                        ? ji
                        : hi(t, e)
                );
            },
            core: { _removeProperty: an, _getMatrix: gn },
        };
    (Bi.utils.checkPrefix = rr),
        (Bi.core.getStyleSaver = Ki),
        (br = _(
            "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
                "," +
                (xr = "rotation,rotationX,rotationY,skewX,skewY") +
                ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            function (t) {
                Un[t] = 1;
            }
        )),
        _(xr, function (t) {
            (Ht.units[t] = "deg"), (hr[t] = 1);
        }),
        (tr[br[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + xr),
        _(
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
            function (t) {
                var e = t.split(":");
                tr[e[1]] = br[e[0]];
            }
        ),
        _(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
                Ht.units[t] = "px";
            }
        ),
        Bi.registerPlugin(wr);
    var Tr = Bi.registerPlugin(wr) || Bi,
        Sr = Tr.core.Tween;
    (t.Back = qn),
        (t.Bounce = Fn),
        (t.CSSPlugin = wr),
        (t.Circ = Vn),
        (t.Cubic = Bn),
        (t.Elastic = Nn),
        (t.Expo = Hn),
        (t.Linear = zn),
        (t.Power0 = An),
        (t.Power1 = Mn),
        (t.Power2 = Pn),
        (t.Power3 = Ln),
        (t.Power4 = Dn),
        (t.Quad = In),
        (t.Quart = Yn),
        (t.Quint = Xn),
        (t.Sine = jn),
        (t.SteppedEase = Wn),
        (t.Strong = Rn),
        (t.TimelineLite = Ze),
        (t.TimelineMax = Ze),
        (t.TweenLite = si),
        (t.TweenMax = Sr),
        (t.default = Tr),
        (t.gsap = Tr),
        "undefined" == typeof window || window !== t
            ? Object.defineProperty(t, "__esModule", { value: !0 })
            : delete t.default;
}),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
            ? e(exports)
            : "function" == typeof define && define.amd
            ? define(["exports"], e)
            : e(((t = t || self).window = t.window || {}));
    })(this, function (t) {
        "use strict";
        function e(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
            }
        }
        function i() {
            return (
                v ||
                ("undefined" != typeof window &&
                    (v = window.gsap) &&
                    v.registerPlugin &&
                    v)
            );
        }
        function n(t, e) {
            return ~L.indexOf(t) && L[L.indexOf(t) + 1][e];
        }
        function r(t) {
            return !!~E.indexOf(t);
        }
        function s(t, e, i, n, r) {
            return t.addEventListener(e, i, { passive: !n, capture: !!r });
        }
        function o(t, e, i, n) {
            return t.removeEventListener(e, i, !!n);
        }
        function a() {
            return (k && k.isPressed) || P.cache++;
        }
        function l(t, e) {
            function i(n) {
                if (n || 0 === n) {
                    A && (y.history.scrollRestoration = "manual");
                    var r = k && k.isPressed;
                    (n = i.v = Math.round(n) || (k && k.iOS ? 1 : 0)),
                        t(n),
                        (i.cacheID = P.cache),
                        r && z("ss", n);
                } else (e || P.cache !== i.cacheID || z("ref")) && ((i.cacheID = P.cache), (i.v = t()));
                return i.v + i.offset;
            }
            return (i.offset = 0), t && i;
        }
        function u(t) {
            return (
                v.utils.toArray(t)[0] ||
                ("string" == typeof t && !1 !== v.config().nullTargetWarn
                    ? console.warn("Element not found:", t)
                    : null)
            );
        }
        function c(t, e) {
            var i = e.s,
                s = e.sc;
            r(t) && (t = _.scrollingElement || x);
            var o = P.indexOf(t),
                u = s === X.sc ? 1 : 2;
            ~o || (o = P.push(t) - 1),
                P[o + u] || t.addEventListener("scroll", a);
            var c = P[o + u],
                h =
                    c ||
                    (P[o + u] =
                        l(n(t, i), !0) ||
                        (r(t)
                            ? s
                            : l(function (e) {
                                  return arguments.length ? (t[i] = e) : t[i];
                              })));
            return (
                (h.target = t),
                c ||
                    (h.smooth =
                        "smooth" === v.getProperty(t, "scrollBehavior")),
                h
            );
        }
        function h(t, e, i) {
            function n(t, e) {
                var n = D();
                e || l < n - o
                    ? ((s = r), (r = t), (a = o), (o = n))
                    : i
                    ? (r += t)
                    : (r = s + ((t - s) / (n - a)) * (o - a));
            }
            var r = t,
                s = t,
                o = D(),
                a = o,
                l = e || 50,
                u = Math.max(500, 3 * l);
            return {
                update: n,
                reset: function () {
                    (s = r = i ? 0 : r), (a = o = 0);
                },
                getVelocity: function (t) {
                    var e = a,
                        l = s,
                        c = D();
                    return (
                        (!t && 0 !== t) || t === r || n(t),
                        o === a || u < c - a
                            ? 0
                            : ((r + (i ? l : -l)) / ((i ? c : o) - e)) * 1e3
                    );
                },
            };
        }
        function d(t, e) {
            return (
                e && !t._gsapAllow && t.preventDefault(),
                t.changedTouches ? t.changedTouches[0] : t
            );
        }
        function f(t) {
            var e = Math.max.apply(Math, t),
                i = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(i) ? e : i;
        }
        function p() {
            (S = v.core.globals().ScrollTrigger) &&
                S.core &&
                (function () {
                    var t = S.core,
                        e = t.bridge || {},
                        i = t._scrollers,
                        n = t._proxies;
                    i.push.apply(i, P),
                        n.push.apply(n, L),
                        (P = i),
                        (L = n),
                        (z = function (t, i) {
                            return e[t](i);
                        });
                })();
        }
        function g(t) {
            return (
                (v = t || i()) &&
                    "undefined" != typeof document &&
                    document.body &&
                    ((y = window),
                    (x = (_ = document).documentElement),
                    (b = _.body),
                    (E = [y, _, x, b]),
                    v.utils.clamp,
                    (O = v.core.context || function () {}),
                    (T = "onpointerenter" in b ? "pointer" : "mouse"),
                    (w = R.isTouch =
                        y.matchMedia &&
                        y.matchMedia("(hover: none), (pointer: coarse)").matches
                            ? 1
                            : "ontouchstart" in y ||
                              0 < navigator.maxTouchPoints ||
                              0 < navigator.msMaxTouchPoints
                            ? 2
                            : 0),
                    (C = R.eventTypes =
                        (
                            "ontouchstart" in x
                                ? "touchstart,touchmove,touchcancel,touchend"
                                : "onpointerdown" in x
                                ? "pointerdown,pointermove,pointercancel,pointerup"
                                : "mousedown,mousemove,mouseup,mouseup"
                        ).split(",")),
                    setTimeout(function () {
                        return (A = 0);
                    }, 500),
                    p(),
                    (m = 1)),
                m
            );
        }
        var v,
            m,
            y,
            _,
            x,
            b,
            w,
            T,
            S,
            E,
            k,
            C,
            O,
            A = 1,
            M = [],
            P = [],
            L = [],
            D = Date.now,
            z = function (t, e) {
                return e;
            },
            I = "scrollLeft",
            B = "scrollTop",
            Y = {
                s: I,
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: l(function (t) {
                    return arguments.length
                        ? y.scrollTo(t, X.sc())
                        : y.pageXOffset || _[I] || x[I] || b[I] || 0;
                }),
            },
            X = {
                s: B,
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: Y,
                sc: l(function (t) {
                    return arguments.length
                        ? y.scrollTo(Y.sc(), t)
                        : y.pageYOffset || _[B] || x[B] || b[B] || 0;
                }),
            };
        (Y.op = X), (P.cache = 0);
        var R =
            ((N.prototype.init = function (t) {
                m ||
                    g(v) ||
                    console.warn("Please gsap.registerPlugin(Observer)"),
                    S || p();
                var e = t.tolerance,
                    i = t.dragMinimum,
                    n = t.type,
                    l = t.target,
                    E = t.lineHeight,
                    A = t.debounce,
                    P = t.preventDefault,
                    L = t.onStop,
                    z = t.onStopDelay,
                    I = t.ignore,
                    B = t.wheelSpeed,
                    R = t.event,
                    N = t.onDragStart,
                    q = t.onDragEnd,
                    W = t.onDrag,
                    F = t.onPress,
                    j = t.onRelease,
                    H = t.onRight,
                    V = t.onLeft,
                    U = t.onUp,
                    G = t.onDown,
                    Z = t.onChangeX,
                    $ = t.onChangeY,
                    Q = t.onChange,
                    K = t.onToggleX,
                    J = t.onToggleY,
                    tt = t.onHover,
                    et = t.onHoverEnd,
                    it = t.onMove,
                    nt = t.ignoreCheck,
                    rt = t.isNormalizer,
                    st = t.onGestureStart,
                    ot = t.onGestureEnd,
                    at = t.onWheel,
                    lt = t.onEnable,
                    ut = t.onDisable,
                    ct = t.onClick,
                    ht = t.scrollSpeed,
                    dt = t.capture,
                    ft = t.allowClicks,
                    pt = t.lockAxis,
                    gt = t.onLockAxis;
                function vt() {
                    return ($t = D());
                }
                function mt(t, e) {
                    return (
                        ((Xt.event = t) && I && ~I.indexOf(t.target)) ||
                        (e && Ht && "touch" !== t.pointerType) ||
                        (nt && nt(t, e))
                    );
                }
                function yt() {
                    var t = (Xt.deltaX = f(Gt)),
                        i = (Xt.deltaY = f(Zt)),
                        n = Math.abs(t) >= e,
                        r = Math.abs(i) >= e;
                    Q && (n || r) && Q(Xt, t, i, Gt, Zt),
                        n &&
                            (H && 0 < Xt.deltaX && H(Xt),
                            V && Xt.deltaX < 0 && V(Xt),
                            Z && Z(Xt),
                            K && Xt.deltaX < 0 != Rt < 0 && K(Xt),
                            (Rt = Xt.deltaX),
                            (Gt[0] = Gt[1] = Gt[2] = 0)),
                        r &&
                            (G && 0 < Xt.deltaY && G(Xt),
                            U && Xt.deltaY < 0 && U(Xt),
                            $ && $(Xt),
                            J && Xt.deltaY < 0 != Nt < 0 && J(Xt),
                            (Nt = Xt.deltaY),
                            (Zt[0] = Zt[1] = Zt[2] = 0)),
                        (zt || Dt) &&
                            (it && it(Xt), Dt && (W(Xt), (Dt = !1)), (zt = !1)),
                        Bt && !(Bt = !1) && gt && gt(Xt),
                        It && (at(Xt), (It = !1)),
                        (Pt = 0);
                }
                function _t(t, e, i) {
                    (Gt[i] += t),
                        (Zt[i] += e),
                        Xt._vx.update(t),
                        Xt._vy.update(e),
                        A ? (Pt = Pt || requestAnimationFrame(yt)) : yt();
                }
                function xt(t, e) {
                    pt &&
                        !Yt &&
                        ((Xt.axis = Yt = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                        (Bt = !0)),
                        "y" !== Yt && ((Gt[2] += t), Xt._vx.update(t, !0)),
                        "x" !== Yt && ((Zt[2] += e), Xt._vy.update(e, !0)),
                        A ? (Pt = Pt || requestAnimationFrame(yt)) : yt();
                }
                function bt(t) {
                    if (!mt(t, 1)) {
                        var e = (t = d(t, P)).clientX,
                            n = t.clientY,
                            r = e - Xt.x,
                            s = n - Xt.y,
                            o = Xt.isDragging;
                        (Xt.x = e),
                            (Xt.y = n),
                            (o ||
                                Math.abs(Xt.startX - e) >= i ||
                                Math.abs(Xt.startY - n) >= i) &&
                                (W && (Dt = !0),
                                o || (Xt.isDragging = !0),
                                xt(r, s),
                                o || (N && N(Xt)));
                    }
                }
                function wt(t) {
                    if (!mt(t, 1)) {
                        o(rt ? l : Ut, C[1], bt, !0);
                        var e = !isNaN(Xt.y - Xt.startY),
                            i =
                                Xt.isDragging &&
                                (3 < Math.abs(Xt.x - Xt.startX) ||
                                    3 < Math.abs(Xt.y - Xt.startY)),
                            n = d(t);
                        !i &&
                            e &&
                            (Xt._vx.reset(),
                            Xt._vy.reset(),
                            P &&
                                ft &&
                                v.delayedCall(0.08, function () {
                                    if (300 < D() - $t && !t.defaultPrevented)
                                        if (t.target.click) t.target.click();
                                        else if (Ut.createEvent) {
                                            var e =
                                                Ut.createEvent("MouseEvents");
                                            e.initMouseEvent(
                                                "click",
                                                !0,
                                                !0,
                                                y,
                                                1,
                                                n.screenX,
                                                n.screenY,
                                                n.clientX,
                                                n.clientY,
                                                !1,
                                                !1,
                                                !1,
                                                !1,
                                                0,
                                                null
                                            ),
                                                t.target.dispatchEvent(e);
                                        }
                                })),
                            (Xt.isDragging =
                                Xt.isGesturing =
                                Xt.isPressed =
                                    !1),
                            L && !rt && Lt.restart(!0),
                            q && i && q(Xt),
                            j && j(Xt, i);
                    }
                }
                function Tt(t) {
                    return (
                        t.touches &&
                        1 < t.touches.length &&
                        (Xt.isGesturing = !0) &&
                        st(t, Xt.isDragging)
                    );
                }
                function St() {
                    return (Xt.isGesturing = !1) || ot(Xt);
                }
                function Et(t) {
                    if (!mt(t)) {
                        var e = qt(),
                            i = Wt();
                        _t((e - Ft) * ht, (i - jt) * ht, 1),
                            (Ft = e),
                            (jt = i),
                            L && Lt.restart(!0);
                    }
                }
                function kt(t) {
                    if (!mt(t)) {
                        (t = d(t, P)), at && (It = !0);
                        var e =
                            (1 === t.deltaMode
                                ? E
                                : 2 === t.deltaMode
                                ? y.innerHeight
                                : 1) * B;
                        _t(t.deltaX * e, t.deltaY * e, 0),
                            L && !rt && Lt.restart(!0);
                    }
                }
                function Ct(t) {
                    if (!mt(t)) {
                        var e = t.clientX,
                            i = t.clientY,
                            n = e - Xt.x,
                            r = i - Xt.y;
                        (Xt.x = e), (Xt.y = i), (zt = !0), (n || r) && xt(n, r);
                    }
                }
                function Ot(t) {
                    (Xt.event = t), tt(Xt);
                }
                function At(t) {
                    (Xt.event = t), et(Xt);
                }
                function Mt(t) {
                    return mt(t) || (d(t, P) && ct(Xt));
                }
                (this.target = l = u(l) || x),
                    (this.vars = t),
                    (I = I && v.utils.toArray(I)),
                    (e = e || 1e-9),
                    (i = i || 0),
                    (B = B || 1),
                    (ht = ht || 1),
                    (n = n || "wheel,touch,pointer"),
                    (A = !1 !== A),
                    (E =
                        E ||
                        parseFloat(y.getComputedStyle(b).lineHeight) ||
                        22);
                var Pt,
                    Lt,
                    Dt,
                    zt,
                    It,
                    Bt,
                    Yt,
                    Xt = this,
                    Rt = 0,
                    Nt = 0,
                    qt = c(l, Y),
                    Wt = c(l, X),
                    Ft = qt(),
                    jt = Wt(),
                    Ht =
                        ~n.indexOf("touch") &&
                        !~n.indexOf("pointer") &&
                        "pointerdown" === C[0],
                    Vt = r(l),
                    Ut = l.ownerDocument || _,
                    Gt = [0, 0, 0],
                    Zt = [0, 0, 0],
                    $t = 0,
                    Qt = (Xt.onPress = function (t) {
                        mt(t, 1) ||
                            ((Xt.axis = Yt = null),
                            Lt.pause(),
                            (Xt.isPressed = !0),
                            (t = d(t)),
                            (Rt = Nt = 0),
                            (Xt.startX = Xt.x = t.clientX),
                            (Xt.startY = Xt.y = t.clientY),
                            Xt._vx.reset(),
                            Xt._vy.reset(),
                            s(rt ? l : Ut, C[1], bt, P, !0),
                            (Xt.deltaX = Xt.deltaY = 0),
                            F && F(Xt));
                    });
                (Lt = Xt._dc =
                    v
                        .delayedCall(z || 0.25, function () {
                            Xt._vx.reset(),
                                Xt._vy.reset(),
                                Lt.pause(),
                                L && L(Xt);
                        })
                        .pause()),
                    (Xt.deltaX = Xt.deltaY = 0),
                    (Xt._vx = h(0, 50, !0)),
                    (Xt._vy = h(0, 50, !0)),
                    (Xt.scrollX = qt),
                    (Xt.scrollY = Wt),
                    (Xt.isDragging = Xt.isGesturing = Xt.isPressed = !1),
                    O(this),
                    (Xt.enable = function (t) {
                        return (
                            Xt.isEnabled ||
                                (s(Vt ? Ut : l, "scroll", a),
                                0 <= n.indexOf("scroll") &&
                                    s(Vt ? Ut : l, "scroll", Et, P, dt),
                                0 <= n.indexOf("wheel") &&
                                    s(l, "wheel", kt, P, dt),
                                ((0 <= n.indexOf("touch") && w) ||
                                    0 <= n.indexOf("pointer")) &&
                                    (s(l, C[0], Qt, P, dt),
                                    s(Ut, C[2], wt),
                                    s(Ut, C[3], wt),
                                    ft && s(l, "click", vt, !1, !0),
                                    ct && s(l, "click", Mt),
                                    st && s(Ut, "gesturestart", Tt),
                                    ot && s(Ut, "gestureend", St),
                                    tt && s(l, T + "enter", Ot),
                                    et && s(l, T + "leave", At),
                                    it && s(l, T + "move", Ct)),
                                (Xt.isEnabled = !0),
                                t && t.type && Qt(t),
                                lt && lt(Xt)),
                            Xt
                        );
                    }),
                    (Xt.disable = function () {
                        Xt.isEnabled &&
                            (M.filter(function (t) {
                                return t !== Xt && r(t.target);
                            }).length || o(Vt ? Ut : l, "scroll", a),
                            Xt.isPressed &&
                                (Xt._vx.reset(),
                                Xt._vy.reset(),
                                o(rt ? l : Ut, C[1], bt, !0)),
                            o(Vt ? Ut : l, "scroll", Et, dt),
                            o(l, "wheel", kt, dt),
                            o(l, C[0], Qt, dt),
                            o(Ut, C[2], wt),
                            o(Ut, C[3], wt),
                            o(l, "click", vt, !0),
                            o(l, "click", Mt),
                            o(Ut, "gesturestart", Tt),
                            o(Ut, "gestureend", St),
                            o(l, T + "enter", Ot),
                            o(l, T + "leave", At),
                            o(l, T + "move", Ct),
                            (Xt.isEnabled = Xt.isPressed = Xt.isDragging = !1),
                            ut && ut(Xt));
                    }),
                    (Xt.kill = Xt.revert =
                        function () {
                            Xt.disable();
                            var t = M.indexOf(Xt);
                            0 <= t && M.splice(t, 1), k === Xt && (k = 0);
                        }),
                    M.push(Xt),
                    rt && r(l) && (k = Xt),
                    Xt.enable(R);
            }),
            (function (t, i, n) {
                i && e(t.prototype, i), n && e(t, n);
            })(N, [
                {
                    key: "velocityX",
                    get: function () {
                        return this._vx.getVelocity();
                    },
                },
                {
                    key: "velocityY",
                    get: function () {
                        return this._vy.getVelocity();
                    },
                },
            ]),
            N);
        function N(t) {
            this.init(t);
        }
        function q() {
            return (Nt = 1);
        }
        function W() {
            return (Nt = 0);
        }
        function F(t) {
            return t;
        }
        function j(t) {
            return Math.round(1e5 * t) / 1e5 || 0;
        }
        function H() {
            return "undefined" != typeof window;
        }
        function V() {
            return Ct || (H() && (Ct = window.gsap) && Ct.registerPlugin && Ct);
        }
        function U(t) {
            return !!~Dt.indexOf(t);
        }
        function G(t) {
            return (
                n(t, "getBoundingClientRect") ||
                (U(t)
                    ? function () {
                          return (
                              (He.width = At.innerWidth),
                              (He.height = At.innerHeight),
                              He
                          );
                      }
                    : function () {
                          return Ee(t);
                      })
            );
        }
        function Z(t, e) {
            var i = e.s,
                r = e.d2,
                s = e.d,
                o = e.a;
            return (i = "scroll" + r) && (o = n(t, i))
                ? o() - G(t)()[s]
                : U(t)
                ? (Pt[i] || Lt[i]) -
                  (At["inner" + r] || Pt["client" + r] || Lt["client" + r])
                : t[i] - t["offset" + r];
        }
        function $(t, e) {
            for (var i = 0; i < Ht.length; i += 3)
                (e && !~e.indexOf(Ht[i + 1])) || t(Ht[i], Ht[i + 1], Ht[i + 2]);
        }
        function Q(t) {
            return "string" == typeof t;
        }
        function K(t) {
            return "function" == typeof t;
        }
        function J(t) {
            return "number" == typeof t;
        }
        function tt(t) {
            return "object" == typeof t;
        }
        function et(t, e, i) {
            return t && t.progress(e ? 0 : 1) && i && t.pause();
        }
        function it(t, e) {
            if (t.enabled) {
                var i = e(t);
                i && i.totalTime && (t.callbackAnimation = i);
            }
        }
        function nt(t) {
            return At.getComputedStyle(t);
        }
        function rt(t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t;
        }
        function st(t, e) {
            var i = e.d2;
            return t["offset" + i] || t["client" + i] || 0;
        }
        function ot(t) {
            var e,
                i = [],
                n = t.labels,
                r = t.duration();
            for (e in n) i.push(n[e] / r);
            return i;
        }
        function at(t) {
            var e = Ct.utils.snap(t),
                i =
                    Array.isArray(t) &&
                    t.slice(0).sort(function (t, e) {
                        return t - e;
                    });
            return i
                ? function (t, n, r) {
                      var s;
                      if ((void 0 === r && (r = 0.001), !n)) return e(t);
                      if (0 < n) {
                          for (t -= r, s = 0; s < i.length; s++)
                              if (i[s] >= t) return i[s];
                          return i[s - 1];
                      }
                      for (s = i.length, t += r; s--; )
                          if (i[s] <= t) return i[s];
                      return i[0];
                  }
                : function (i, n, r) {
                      void 0 === r && (r = 0.001);
                      var s = e(i);
                      return !n || Math.abs(s - i) < r || s - i < 0 == n < 0
                          ? s
                          : e(n < 0 ? i - t : i + t);
                  };
        }
        function lt(t, e, i, n) {
            return i.split(",").forEach(function (i) {
                return t(e, i, n);
            });
        }
        function ut(t, e, i, n, r) {
            return t.addEventListener(e, i, { passive: !n, capture: !!r });
        }
        function ct(t, e, i, n) {
            return t.removeEventListener(e, i, !!n);
        }
        function ht(t, e, i) {
            return i && i.wheelHandler && t(e, "wheel", i);
        }
        function dt(t, e) {
            if (Q(t)) {
                var i = t.indexOf("="),
                    n = ~i
                        ? (t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1))
                        : 0;
                ~i &&
                    (t.indexOf("%") > i && (n *= e / 100),
                    (t = t.substr(0, i - 1))),
                    (t =
                        n +
                        (t in Oe
                            ? Oe[t] * e
                            : ~t.indexOf("%")
                            ? (parseFloat(t) * e) / 100
                            : parseFloat(t) || 0));
            }
            return t;
        }
        function ft(t, e, i, r, s, o, a, l) {
            var u = s.startColor,
                c = s.endColor,
                h = s.fontSize,
                d = s.indent,
                f = s.fontWeight,
                p = Mt.createElement("div"),
                g = U(i) || "fixed" === n(i, "pinType"),
                v = -1 !== t.indexOf("scroller"),
                m = g ? Lt : i,
                y = -1 !== t.indexOf("start"),
                _ = y ? u : c,
                x =
                    "border-color:" +
                    _ +
                    ";font-size:" +
                    h +
                    ";color:" +
                    _ +
                    ";font-weight:" +
                    f +
                    ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
                (x += "position:" + ((v || l) && g ? "fixed;" : "absolute;")),
                (!v && !l && g) ||
                    (x +=
                        (r === X ? fe : pe) +
                        ":" +
                        (o + parseFloat(d)) +
                        "px;"),
                a &&
                    (x +=
                        "box-sizing:border-box;text-align:left;width:" +
                        a.offsetWidth +
                        "px;"),
                (p._isStart = y),
                p.setAttribute(
                    "class",
                    "gsap-marker-" + t + (e ? " marker-" + e : "")
                ),
                (p.style.cssText = x),
                (p.innerText = e || 0 === e ? t + "-" + e : t),
                m.children[0]
                    ? m.insertBefore(p, m.children[0])
                    : m.appendChild(p),
                (p._offset = p["offset" + r.op.d2]),
                Ae(p, 0, r, y),
                p
            );
        }
        function pt() {
            return 34 < le() - ce && (ne = ne || requestAnimationFrame(Ne));
        }
        function gt() {
            (Zt && Zt.isPressed && !(Zt.startX > Lt.clientWidth)) ||
                (P.cache++,
                Zt ? (ne = ne || requestAnimationFrame(Ne)) : Ne(),
                ce || ze("scrollStart"),
                (ce = le()));
        }
        function vt() {
            (Kt = At.innerWidth), (Qt = At.innerHeight);
        }
        function mt() {
            P.cache++,
                Rt ||
                    Gt ||
                    Mt.fullscreenElement ||
                    Mt.webkitFullscreenElement ||
                    ($t &&
                        Kt === At.innerWidth &&
                        !(
                            Math.abs(At.innerHeight - Qt) >
                            0.25 * At.innerHeight
                        )) ||
                    zt.restart(!0);
        }
        function yt() {
            return ct(Ue, "scrollEnd", yt) || Ye(!0);
        }
        function _t(t) {
            for (var e = 0; e < Ie.length; e += 5)
                (!t || (Ie[e + 4] && Ie[e + 4].query === t)) &&
                    ((Ie[e].style.cssText = Ie[e + 1]),
                    Ie[e].getBBox &&
                        Ie[e].setAttribute("transform", Ie[e + 2] || ""),
                    (Ie[e + 3].uncache = 1));
        }
        function xt(t, e) {
            var i;
            for (Wt = 0; Wt < Me.length; Wt++)
                !(i = Me[Wt]) ||
                    (e && i._ctx !== e) ||
                    (t ? i.kill(1) : i.revert(!0, !0));
            e && _t(e), e || ze("revert");
        }
        function bt(t, e) {
            P.cache++,
                (!e && re) ||
                    P.forEach(function (t) {
                        return K(t) && t.cacheID++ && (t.rec = 0);
                    }),
                Q(t) && (At.history.scrollRestoration = ee = t);
        }
        function wt(t, e, i, n) {
            if (!t._gsap.swappedIn) {
                for (var r, s = qe.length, o = e.style, a = t.style; s--; )
                    o[(r = qe[s])] = i[r];
                (o.position =
                    "absolute" === i.position ? "absolute" : "relative"),
                    "inline" === i.display && (o.display = "inline-block"),
                    (a[pe] = a[fe] = "auto"),
                    (o.flexBasis = i.flexBasis || "auto"),
                    (o.overflow = "visible"),
                    (o.boxSizing = "border-box"),
                    (o[ge] = st(t, Y) + Se),
                    (o[ve] = st(t, X) + Se),
                    (o[be] = a[we] = a.top = a.left = "0"),
                    je(n),
                    (a[ge] = a.maxWidth = i[ge]),
                    (a[ve] = a.maxHeight = i[ve]),
                    (a[be] = i[be]),
                    t.parentNode !== e &&
                        (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                    (t._gsap.swappedIn = !0);
            }
        }
        function Tt(t) {
            for (var e = We.length, i = t.style, n = [], r = 0; r < e; r++)
                n.push(We[r], i[We[r]]);
            return (n.t = t), n;
        }
        function St(t, e, i, n, r, s, o, a, l, c, h, d, f) {
            K(t) && (t = t(a)),
                Q(t) &&
                    "max" === t.substr(0, 3) &&
                    (t =
                        d +
                        ("=" === t.charAt(4) ? dt("0" + t.substr(3), i) : 0));
            var p,
                g,
                v,
                m = f ? f.time() : 0;
            if ((f && f.seek(0), J(t))) o && Ae(o, i, n, !0);
            else {
                K(e) && (e = e(a));
                var y,
                    _,
                    x,
                    b,
                    w = (t || "0").split(" ");
                (v = u(e) || Lt),
                    ((y = Ee(v) || {}) && (y.left || y.top)) ||
                        "none" !== nt(v).display ||
                        ((b = v.style.display),
                        (v.style.display = "block"),
                        (y = Ee(v)),
                        b
                            ? (v.style.display = b)
                            : v.style.removeProperty("display")),
                    (_ = dt(w[0], y[n.d])),
                    (x = dt(w[1] || "0", i)),
                    (t = y[n.p] - l[n.p] - c + _ + r - x),
                    o && Ae(o, x, n, i - x < 20 || (o._isStart && 20 < x)),
                    (i -= i - x);
            }
            if (s) {
                var T = t + i,
                    S = s._isStart;
                (p = "scroll" + n.d2),
                    Ae(
                        s,
                        T,
                        n,
                        (S && 20 < T) ||
                            (!S &&
                                (h
                                    ? Math.max(Lt[p], Pt[p])
                                    : s.parentNode[p]) <=
                                    T + 1)
                    ),
                    h &&
                        ((l = Ee(o)),
                        h &&
                            (s.style[n.op.p] =
                                l[n.op.p] - n.op.m - s._offset + Se));
            }
            return (
                f &&
                    v &&
                    ((p = Ee(v)),
                    f.seek(d),
                    (g = Ee(v)),
                    (f._caScrollDist = p[n.p] - g[n.p]),
                    (t = (t / f._caScrollDist) * d)),
                f && f.seek(m),
                f ? t : Math.round(t)
            );
        }
        function Et(t, e, i, n) {
            if (t.parentNode !== e) {
                var r,
                    s,
                    o = t.style;
                if (e === Lt) {
                    for (r in ((t._stOrig = o.cssText), (s = nt(t))))
                        +r ||
                            Ve.test(r) ||
                            !s[r] ||
                            "string" != typeof o[r] ||
                            "0" === r ||
                            (o[r] = s[r]);
                    (o.top = i), (o.left = n);
                } else o.cssText = t._stOrig;
                (Ct.core.getCache(t).uncache = 1), e.appendChild(t);
            }
        }
        function kt(t, e) {
            function i(e, a, l, u, c) {
                var h = i.tween,
                    d = a.onComplete;
                return (
                    (l = l || s()),
                    (c = (u && c) || 0),
                    (u = u || e - l),
                    h && h.kill(),
                    (n = Math.round(l)),
                    (a[o] = e),
                    ((a.modifiers = {})[o] = function (t) {
                        return (
                            (t = Math.round(s())) !== n &&
                            t !== r &&
                            3 < Math.abs(t - n) &&
                            3 < Math.abs(t - r)
                                ? (h.kill(), (i.tween = 0))
                                : (t = l + u * h.ratio + c * h.ratio * h.ratio),
                            (r = n),
                            (n = Math.round(t))
                        );
                    }),
                    (a.onUpdate = function () {
                        P.cache++, Ne();
                    }),
                    (a.onComplete = function () {
                        (i.tween = 0), d && d.call(h);
                    }),
                    (h = i.tween = Ct.to(t, a))
                );
            }
            var n,
                r,
                s = c(t, e),
                o = "_scroll" + e.p2;
            return (
                ((t[o] = s).wheelHandler = function () {
                    return i.tween && i.tween.kill() && (i.tween = 0);
                }),
                ut(t, "wheel", s.wheelHandler),
                i
            );
        }
        (R.version = "3.11.4"),
            (R.create = function (t) {
                return new R(t);
            }),
            (R.register = g),
            (R.getAll = function () {
                return M.slice();
            }),
            (R.getById = function (t) {
                return M.filter(function (e) {
                    return e.vars.id === t;
                })[0];
            }),
            i() && v.registerPlugin(R);
        var Ct,
            Ot,
            At,
            Mt,
            Pt,
            Lt,
            Dt,
            zt,
            It,
            Bt,
            Yt,
            Xt,
            Rt,
            Nt,
            qt,
            Wt,
            Ft,
            jt,
            Ht,
            Vt,
            Ut,
            Gt,
            Zt,
            $t,
            Qt,
            Kt,
            Jt,
            te,
            ee,
            ie,
            ne,
            re,
            se,
            oe,
            ae = 1,
            le = Date.now,
            ue = le(),
            ce = 0,
            he = 0,
            de = Math.abs,
            fe = "right",
            pe = "bottom",
            ge = "width",
            ve = "height",
            me = "Right",
            ye = "Left",
            _e = "Top",
            xe = "Bottom",
            be = "padding",
            we = "margin",
            Te = "Width",
            Se = "px",
            Ee = function (t, e) {
                var i =
                        e &&
                        "matrix(1, 0, 0, 1, 0, 0)" !== nt(t)[qt] &&
                        Ct.to(t, {
                            x: 0,
                            y: 0,
                            xPercent: 0,
                            yPercent: 0,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                        }).progress(1),
                    n = t.getBoundingClientRect();
                return i && i.progress(0).kill(), n;
            },
            ke = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal",
            },
            Ce = { toggleActions: "play", anticipatePin: 0 },
            Oe = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
            Ae = function (t, e, i, n) {
                var r = { display: "block" },
                    s = i[n ? "os2" : "p2"],
                    o = i[n ? "p2" : "os2"];
                (t._isFlipped = n),
                    (r[i.a + "Percent"] = n ? -100 : 0),
                    (r[i.a] = n ? "1px" : 0),
                    (r["border" + s + Te] = 1),
                    (r["border" + o + Te] = 0),
                    (r[i.p] = e + "px"),
                    Ct.set(t, r);
            },
            Me = [],
            Pe = {},
            Le = {},
            De = [],
            ze = function (t) {
                return (
                    (Le[t] &&
                        Le[t].map(function (t) {
                            return t();
                        })) ||
                    De
                );
            },
            Ie = [],
            Be = 0,
            Ye = function (t, e) {
                if (!ce || t) {
                    (re = Ue.isRefreshing = !0),
                        P.forEach(function (t) {
                            return K(t) && t.cacheID++ && (t.rec = t());
                        });
                    var i = ze("refreshInit");
                    Vt && Ue.sort(),
                        e || xt(),
                        P.forEach(function (t) {
                            K(t) &&
                                (t.smooth &&
                                    (t.target.style.scrollBehavior = "auto"),
                                t(0));
                        }),
                        Me.slice(0).forEach(function (t) {
                            return t.refresh();
                        }),
                        Me.forEach(function (t, e) {
                            if (t._subPinOffset && t.pin) {
                                var i = t.vars.horizontal
                                        ? "offsetWidth"
                                        : "offsetHeight",
                                    n = t.pin[i];
                                t.revert(!0, 1),
                                    t.adjustPinSpacing(t.pin[i] - n),
                                    t.revert(!1, 1);
                            }
                        }),
                        Me.forEach(function (t) {
                            return (
                                "max" === t.vars.end &&
                                t.setPositions(
                                    t.start,
                                    Math.max(t.start + 1, Z(t.scroller, t._dir))
                                )
                            );
                        }),
                        i.forEach(function (t) {
                            return t && t.render && t.render(-1);
                        }),
                        P.forEach(function (t) {
                            K(t) &&
                                (t.smooth &&
                                    requestAnimationFrame(function () {
                                        return (t.target.style.scrollBehavior =
                                            "smooth");
                                    }),
                                t.rec && t(t.rec));
                        }),
                        bt(ee, 1),
                        zt.pause(),
                        Be++,
                        Ne(2),
                        Me.forEach(function (t) {
                            return K(t.vars.onRefresh) && t.vars.onRefresh(t);
                        }),
                        (re = Ue.isRefreshing = !1),
                        ze("refresh");
                } else ut(Ue, "scrollEnd", yt);
            },
            Xe = 0,
            Re = 1,
            Ne = function (t) {
                if (!re || 2 === t) {
                    (Ue.isUpdating = !0), oe && oe.update(0);
                    var e = Me.length,
                        i = le(),
                        n = 50 <= i - ue,
                        r = e && Me[0].scroll();
                    if (
                        ((Re = r < Xe ? -1 : 1),
                        (Xe = r),
                        n &&
                            (ce &&
                                !Nt &&
                                200 < i - ce &&
                                ((ce = 0), ze("scrollEnd")),
                            (Yt = ue),
                            (ue = i)),
                        Re < 0)
                    ) {
                        for (Wt = e; 0 < Wt--; ) Me[Wt] && Me[Wt].update(0, n);
                        Re = 1;
                    } else
                        for (Wt = 0; Wt < e; Wt++)
                            Me[Wt] && Me[Wt].update(0, n);
                    Ue.isUpdating = !1;
                }
                ne = 0;
            },
            qe = [
                "left",
                "top",
                pe,
                fe,
                we + xe,
                we + me,
                we + _e,
                we + ye,
                "display",
                "flexShrink",
                "float",
                "zIndex",
                "gridColumnStart",
                "gridColumnEnd",
                "gridRowStart",
                "gridRowEnd",
                "gridArea",
                "justifySelf",
                "alignSelf",
                "placeSelf",
                "order",
            ],
            We = qe.concat([
                ge,
                ve,
                "boxSizing",
                "max" + Te,
                "maxHeight",
                "position",
                we,
                be,
                be + _e,
                be + me,
                be + xe,
                be + ye,
            ]),
            Fe = /([A-Z])/g,
            je = function (t) {
                if (t) {
                    var e,
                        i,
                        n = t.t.style,
                        r = t.length,
                        s = 0;
                    for (
                        (t.t._gsap || Ct.core.getCache(t.t)).uncache = 1;
                        s < r;
                        s += 2
                    )
                        (i = t[s + 1]),
                            (e = t[s]),
                            i
                                ? (n[e] = i)
                                : n[e] &&
                                  n.removeProperty(
                                      e.replace(Fe, "-$1").toLowerCase()
                                  );
                }
            },
            He = { left: 0, top: 0 },
            Ve = /(webkit|moz|length|cssText|inset)/i,
            Ue =
                ((Ge.prototype.init = function (t, e) {
                    if (
                        ((this.progress = this.start = 0),
                        this.vars && this.kill(!0, !0),
                        he)
                    ) {
                        var i,
                            r,
                            s,
                            o,
                            a,
                            l,
                            h,
                            d,
                            f,
                            p,
                            g,
                            v,
                            m,
                            y,
                            _,
                            x,
                            b,
                            w,
                            T,
                            S,
                            E,
                            k,
                            C,
                            O,
                            A,
                            M,
                            D,
                            z,
                            I,
                            B,
                            R,
                            N,
                            q,
                            W,
                            H,
                            V,
                            $,
                            lt,
                            ht,
                            pt = (t = rt(
                                Q(t) || J(t) || t.nodeType ? { trigger: t } : t,
                                Ce
                            )).onUpdate,
                            vt = t.toggleClass,
                            _t = t.id,
                            xt = t.onToggle,
                            bt = t.onRefresh,
                            Ot = t.scrub,
                            Dt = t.trigger,
                            zt = t.pin,
                            Xt = t.pinSpacing,
                            qt = t.invalidateOnRefresh,
                            Ft = t.anticipatePin,
                            jt = t.onScrubComplete,
                            Ht = t.onSnapComplete,
                            Gt = t.once,
                            Zt = t.snap,
                            $t = t.pinReparent,
                            Qt = t.pinSpacer,
                            Kt = t.containerAnimation,
                            Jt = t.fastScrollEnd,
                            ee = t.preventOverlaps,
                            ne =
                                t.horizontal ||
                                (t.containerAnimation && !1 !== t.horizontal)
                                    ? Y
                                    : X,
                            ue = !Ot && 0 !== Ot,
                            fe = u(t.scroller || At),
                            pe = Ct.core.getCache(fe),
                            Oe = U(fe),
                            Ae =
                                "fixed" ===
                                ("pinType" in t
                                    ? t.pinType
                                    : n(fe, "pinType") || (Oe && "fixed")),
                            Le = [
                                t.onEnter,
                                t.onLeave,
                                t.onEnterBack,
                                t.onLeaveBack,
                            ],
                            De = ue && t.toggleActions.split(" "),
                            ze = "markers" in t ? t.markers : Ce.markers,
                            Ie = Oe
                                ? 0
                                : parseFloat(nt(fe)["border" + ne.p2 + Te]) ||
                                  0,
                            Xe = this,
                            Ne =
                                t.onRefreshInit &&
                                function () {
                                    return t.onRefreshInit(Xe);
                                },
                            qe = (function (t, e, i) {
                                var r = i.d,
                                    s = i.d2,
                                    o = i.a;
                                return (o = n(t, "getBoundingClientRect"))
                                    ? function () {
                                          return o()[r];
                                      }
                                    : function () {
                                          return (
                                              (e
                                                  ? At["inner" + s]
                                                  : t["client" + s]) || 0
                                          );
                                      };
                            })(fe, Oe, ne),
                            We = (function (t, e) {
                                return !e || ~L.indexOf(t)
                                    ? G(t)
                                    : function () {
                                          return He;
                                      };
                            })(fe, Oe),
                            Fe = 0,
                            Ve = 0,
                            Ue = c(fe, ne);
                        if (
                            (te(Xe),
                            (Xe._dir = ne),
                            (Ft *= 45),
                            (Xe.scroller = fe),
                            (Xe.scroll = Kt ? Kt.time.bind(Kt) : Ue),
                            (o = Ue()),
                            (Xe.vars = t),
                            (e = e || t.animation),
                            "refreshPriority" in t &&
                                ((Vt = 1),
                                -9999 === t.refreshPriority && (oe = Xe)),
                            (pe.tweenScroll = pe.tweenScroll || {
                                top: kt(fe, X),
                                left: kt(fe, Y),
                            }),
                            (Xe.tweenTo = i = pe.tweenScroll[ne.p]),
                            (Xe.scrubDuration = function (t) {
                                (N = J(t) && t)
                                    ? R
                                        ? R.duration(t)
                                        : (R = Ct.to(e, {
                                              ease: "expo",
                                              totalProgress: "+=0.001",
                                              duration: N,
                                              paused: !0,
                                              onComplete: function () {
                                                  return jt && jt(Xe);
                                              },
                                          }))
                                    : (R && R.progress(1).kill(), (R = 0));
                            }),
                            e &&
                                ((e.vars.lazy = !1),
                                e._initted ||
                                    (!1 !== e.vars.immediateRender &&
                                        !1 !== t.immediateRender &&
                                        e.duration() &&
                                        e.render(0, !0, !0)),
                                (Xe.animation = e.pause()),
                                (e.scrollTrigger = Xe).scrubDuration(Ot),
                                (I = 0),
                                (_t = _t || e.vars.id)),
                            Me.push(Xe),
                            Zt &&
                                ((tt(Zt) && !Zt.push) || (Zt = { snapTo: Zt }),
                                "scrollBehavior" in Lt.style &&
                                    Ct.set(Oe ? [Lt, Pt] : fe, {
                                        scrollBehavior: "auto",
                                    }),
                                P.forEach(function (t) {
                                    return (
                                        K(t) &&
                                        t.target ===
                                            (Oe
                                                ? Mt.scrollingElement || Pt
                                                : fe) &&
                                        (t.smooth = !1)
                                    );
                                }),
                                (s = K(Zt.snapTo)
                                    ? Zt.snapTo
                                    : "labels" === Zt.snapTo
                                    ? (function (t) {
                                          return function (e) {
                                              return Ct.utils.snap(ot(t), e);
                                          };
                                      })(e)
                                    : "labelsDirectional" === Zt.snapTo
                                    ? (function (t) {
                                          return function (e, i) {
                                              return at(ot(t))(e, i.direction);
                                          };
                                      })(e)
                                    : !1 !== Zt.directional
                                    ? function (t, e) {
                                          return at(Zt.snapTo)(
                                              t,
                                              le() - Ve < 500 ? 0 : e.direction
                                          );
                                      }
                                    : Ct.utils.snap(Zt.snapTo)),
                                (q = tt(
                                    (q = Zt.duration || { min: 0.1, max: 2 })
                                )
                                    ? Bt(q.min, q.max)
                                    : Bt(q, q)),
                                (W = Ct.delayedCall(
                                    Zt.delay || N / 2 || 0.1,
                                    function () {
                                        var t = Ue(),
                                            n = le() - Ve < 500,
                                            r = i.tween;
                                        if (
                                            !(
                                                n ||
                                                Math.abs(Xe.getVelocity()) < 10
                                            ) ||
                                            r ||
                                            Nt ||
                                            Fe === t
                                        )
                                            Xe.isActive &&
                                                Fe !== t &&
                                                W.restart(!0);
                                        else {
                                            var o = (t - l) / m,
                                                a =
                                                    e && !ue
                                                        ? e.totalProgress()
                                                        : o,
                                                u = n
                                                    ? 0
                                                    : ((a - B) / (le() - Yt)) *
                                                          1e3 || 0,
                                                c = Ct.utils.clamp(
                                                    -o,
                                                    1 - o,
                                                    (de(u / 2) * u) / 0.185
                                                ),
                                                d =
                                                    o +
                                                    (!1 === Zt.inertia ? 0 : c),
                                                f = Bt(0, 1, s(d, Xe)),
                                                p = Math.round(l + f * m),
                                                g = Zt.onStart,
                                                v = Zt.onInterrupt,
                                                y = Zt.onComplete;
                                            if (t <= h && l <= t && p !== t) {
                                                if (
                                                    r &&
                                                    !r._initted &&
                                                    r.data <= de(p - t)
                                                )
                                                    return;
                                                !1 === Zt.inertia &&
                                                    (c = f - o),
                                                    i(
                                                        p,
                                                        {
                                                            duration: q(
                                                                de(
                                                                    (0.185 *
                                                                        Math.max(
                                                                            de(
                                                                                d -
                                                                                    a
                                                                            ),
                                                                            de(
                                                                                f -
                                                                                    a
                                                                            )
                                                                        )) /
                                                                        u /
                                                                        0.05 ||
                                                                        0
                                                                )
                                                            ),
                                                            ease:
                                                                Zt.ease ||
                                                                "power3",
                                                            data: de(p - t),
                                                            onInterrupt:
                                                                function () {
                                                                    return (
                                                                        W.restart(
                                                                            !0
                                                                        ) &&
                                                                        v &&
                                                                        v(Xe)
                                                                    );
                                                                },
                                                            onComplete:
                                                                function () {
                                                                    Xe.update(),
                                                                        (Fe =
                                                                            Ue()),
                                                                        (I = B =
                                                                            e &&
                                                                            !ue
                                                                                ? e.totalProgress()
                                                                                : Xe.progress),
                                                                        Ht &&
                                                                            Ht(
                                                                                Xe
                                                                            ),
                                                                        y &&
                                                                            y(
                                                                                Xe
                                                                            );
                                                                },
                                                        },
                                                        t,
                                                        c * m,
                                                        p - t - c * m
                                                    ),
                                                    g && g(Xe, i.tween);
                                            }
                                        }
                                    }
                                ).pause())),
                            _t && (Pe[_t] = Xe),
                            (ht =
                                (ht =
                                    (Dt = Xe.trigger = u(Dt || zt)) &&
                                    Dt._gsap &&
                                    Dt._gsap.stRevert) && ht(Xe)),
                            (zt = !0 === zt ? Dt : u(zt)),
                            Q(vt) && (vt = { targets: Dt, className: vt }),
                            zt &&
                                (!1 === Xt ||
                                    Xt === we ||
                                    (Xt =
                                        !(
                                            !Xt &&
                                            zt.parentNode &&
                                            zt.parentNode.style &&
                                            "flex" === nt(zt.parentNode).display
                                        ) && be),
                                (Xe.pin = zt),
                                (r = Ct.core.getCache(zt)).spacer
                                    ? (y = r.pinState)
                                    : (Qt &&
                                          ((Qt = u(Qt)) &&
                                              !Qt.nodeType &&
                                              (Qt =
                                                  Qt.current ||
                                                  Qt.nativeElement),
                                          (r.spacerIsNative = !!Qt),
                                          Qt && (r.spacerState = Tt(Qt))),
                                      (r.spacer = b =
                                          Qt || Mt.createElement("div")),
                                      b.classList.add("pin-spacer"),
                                      _t && b.classList.add("pin-spacer-" + _t),
                                      (r.pinState = y = Tt(zt))),
                                !1 !== t.force3D && Ct.set(zt, { force3D: !0 }),
                                (Xe.spacer = b = r.spacer),
                                (z = nt(zt)),
                                (C = z[Xt + ne.os2]),
                                (T = Ct.getProperty(zt)),
                                (S = Ct.quickSetter(zt, ne.a, Se)),
                                wt(zt, b, z),
                                (x = Tt(zt))),
                            ze)
                        ) {
                            (v = tt(ze) ? rt(ze, ke) : ke),
                                (p = ft("scroller-start", _t, fe, ne, v, 0)),
                                (g = ft("scroller-end", _t, fe, ne, v, 0, p)),
                                (w = p["offset" + ne.op.d2]);
                            var Ze = u(n(fe, "content") || fe);
                            (d = this.markerStart =
                                ft("start", _t, Ze, ne, v, w, 0, Kt)),
                                (f = this.markerEnd =
                                    ft("end", _t, Ze, ne, v, w, 0, Kt)),
                                Kt && (lt = Ct.quickSetter([d, f], ne.a, Se)),
                                Ae ||
                                    (L.length &&
                                        !0 === n(fe, "fixedMarkers")) ||
                                    ((function (t) {
                                        var e = nt(t).position;
                                        t.style.position =
                                            "absolute" === e || "fixed" === e
                                                ? e
                                                : "relative";
                                    })(Oe ? Lt : fe),
                                    Ct.set([p, g], { force3D: !0 }),
                                    (A = Ct.quickSetter(p, ne.a, Se)),
                                    (D = Ct.quickSetter(g, ne.a, Se)));
                        }
                        if (Kt) {
                            var $e = Kt.vars.onUpdate,
                                Qe = Kt.vars.onUpdateParams;
                            Kt.eventCallback("onUpdate", function () {
                                Xe.update(0, 0, 1), $e && $e.apply(Qe || []);
                            });
                        }
                        (Xe.previous = function () {
                            return Me[Me.indexOf(Xe) - 1];
                        }),
                            (Xe.next = function () {
                                return Me[Me.indexOf(Xe) + 1];
                            }),
                            (Xe.revert = function (t, i) {
                                if (!i) return Xe.kill(!0);
                                var n = !1 !== t || !Xe.enabled,
                                    r = Rt;
                                n !== Xe.isReverted &&
                                    (n &&
                                        ((V = Math.max(
                                            Ue(),
                                            Xe.scroll.rec || 0
                                        )),
                                        (H = Xe.progress),
                                        ($ = e && e.progress())),
                                    d &&
                                        [d, f, p, g].forEach(function (t) {
                                            return (t.style.display = n
                                                ? "none"
                                                : "block");
                                        }),
                                    n && ((Rt = 1), Xe.update(n)),
                                    !zt ||
                                        ($t && Xe.isActive) ||
                                        (n
                                            ? (function (t, e, i) {
                                                  je(i);
                                                  var n = t._gsap;
                                                  if (n.spacerIsNative)
                                                      je(n.spacerState);
                                                  else if (t._gsap.swappedIn) {
                                                      var r = e.parentNode;
                                                      r &&
                                                          (r.insertBefore(t, e),
                                                          r.removeChild(e));
                                                  }
                                                  t._gsap.swappedIn = !1;
                                              })(zt, b, y)
                                            : wt(zt, b, nt(zt), O)),
                                    n || Xe.update(n),
                                    (Rt = r),
                                    (Xe.isReverted = n));
                            }),
                            (Xe.refresh = function (n, r) {
                                if ((!Rt && Xe.enabled) || r)
                                    if (zt && n && ce) ut(Ge, "scrollEnd", yt);
                                    else {
                                        !re && Ne && Ne(Xe),
                                            (Rt = 1),
                                            (Ve = le()),
                                            i.tween &&
                                                (i.tween.kill(), (i.tween = 0)),
                                            R && R.pause(),
                                            qt &&
                                                e &&
                                                e
                                                    .revert({ kill: !1 })
                                                    .invalidate(),
                                            Xe.isReverted || Xe.revert(!0, !0),
                                            (Xe._subPinOffset = !1);
                                        for (
                                            var s,
                                                v,
                                                w,
                                                S,
                                                C,
                                                A,
                                                P,
                                                L,
                                                D,
                                                z,
                                                I,
                                                B = qe(),
                                                N = We(),
                                                q = Kt
                                                    ? Kt.duration()
                                                    : Z(fe, ne),
                                                F = 0,
                                                j = 0,
                                                U = t.end,
                                                G = t.endTrigger || Dt,
                                                tt =
                                                    t.start ||
                                                    (0 !== t.start && Dt
                                                        ? zt
                                                            ? "0 0"
                                                            : "0 100%"
                                                        : 0),
                                                et = (Xe.pinnedContainer =
                                                    t.pinnedContainer &&
                                                    u(t.pinnedContainer)),
                                                it =
                                                    (Dt &&
                                                        Math.max(
                                                            0,
                                                            Me.indexOf(Xe)
                                                        )) ||
                                                    0,
                                                rt = it;
                                            rt--;

                                        )
                                            (A = Me[rt]).end ||
                                                A.refresh(0, 1) ||
                                                (Rt = 1),
                                                !(P = A.pin) ||
                                                    (P !== Dt && P !== zt) ||
                                                    A.isReverted ||
                                                    ((z = z || []).unshift(A),
                                                    A.revert(!0, !0)),
                                                A !== Me[rt] && (it--, rt--);
                                        for (
                                            K(tt) && (tt = tt(Xe)),
                                                l =
                                                    St(
                                                        tt,
                                                        Dt,
                                                        B,
                                                        ne,
                                                        Ue(),
                                                        d,
                                                        p,
                                                        Xe,
                                                        N,
                                                        Ie,
                                                        Ae,
                                                        q,
                                                        Kt
                                                    ) || (zt ? -0.001 : 0),
                                                K(U) && (U = U(Xe)),
                                                Q(U) &&
                                                    !U.indexOf("+=") &&
                                                    (~U.indexOf(" ")
                                                        ? (U =
                                                              (Q(tt)
                                                                  ? tt.split(
                                                                        " "
                                                                    )[0]
                                                                  : "") + U)
                                                        : ((F = dt(
                                                              U.substr(2),
                                                              B
                                                          )),
                                                          (U = Q(tt)
                                                              ? tt
                                                              : l + F),
                                                          (G = Dt))),
                                                h =
                                                    Math.max(
                                                        l,
                                                        St(
                                                            U ||
                                                                (G
                                                                    ? "100% 0"
                                                                    : q),
                                                            G,
                                                            B,
                                                            ne,
                                                            Ue() + F,
                                                            f,
                                                            g,
                                                            Xe,
                                                            N,
                                                            Ie,
                                                            Ae,
                                                            q,
                                                            Kt
                                                        )
                                                    ) || -0.001,
                                                m =
                                                    h - l ||
                                                    ((l -= 0.01) && 0.001),
                                                F = 0,
                                                rt = it;
                                            rt--;

                                        )
                                            (P = (A = Me[rt]).pin) &&
                                                A.start - A._pinPush <= l &&
                                                !Kt &&
                                                0 < A.end &&
                                                ((s = A.end - A.start),
                                                ((P === Dt &&
                                                    A.start - A._pinPush < l) ||
                                                    P === et) &&
                                                    !J(tt) &&
                                                    (F += s * (1 - A.progress)),
                                                P === zt && (j += s));
                                        if (
                                            ((l += F),
                                            (h += F),
                                            (Xe._pinPush = j),
                                            d &&
                                                F &&
                                                (((s = {})[ne.a] = "+=" + F),
                                                et && (s[ne.p] = "-=" + Ue()),
                                                Ct.set([d, f], s)),
                                            zt)
                                        )
                                            (s = nt(zt)),
                                                (S = ne === X),
                                                (w = Ue()),
                                                (E = parseFloat(T(ne.a)) + j),
                                                !q &&
                                                    1 < h &&
                                                    ((I = {
                                                        style: (I = (
                                                            Oe
                                                                ? Mt.scrollingElement ||
                                                                  Pt
                                                                : fe
                                                        ).style),
                                                        value: I[
                                                            "overflow" +
                                                                ne.a.toUpperCase()
                                                        ],
                                                    })[
                                                        "overflow" +
                                                            ne.a.toUpperCase()
                                                    ] = "scroll"),
                                                wt(zt, b, s),
                                                (x = Tt(zt)),
                                                (v = Ee(zt, !0)),
                                                (L = Ae && c(fe, S ? Y : X)()),
                                                Xt &&
                                                    (((O = [
                                                        Xt + ne.os2,
                                                        m + j + Se,
                                                    ]).t = b),
                                                    (rt =
                                                        Xt === be
                                                            ? st(zt, ne) + m + j
                                                            : 0) &&
                                                        O.push(ne.d, rt + Se),
                                                    je(O),
                                                    et &&
                                                        Me.forEach(function (
                                                            t
                                                        ) {
                                                            t.pin === et &&
                                                                !1 !==
                                                                    t.vars
                                                                        .pinSpacing &&
                                                                (t._subPinOffset =
                                                                    !0);
                                                        }),
                                                    Ae && Ue(V)),
                                                Ae &&
                                                    (((C = {
                                                        top:
                                                            v.top +
                                                            (S ? w - l : L) +
                                                            Se,
                                                        left:
                                                            v.left +
                                                            (S ? L : w - l) +
                                                            Se,
                                                        boxSizing: "border-box",
                                                        position: "fixed",
                                                    })[ge] = C.maxWidth =
                                                        Math.ceil(v.width) +
                                                        Se),
                                                    (C[ve] = C.maxHeight =
                                                        Math.ceil(v.height) +
                                                        Se),
                                                    (C[we] =
                                                        C[we + _e] =
                                                        C[we + me] =
                                                        C[we + xe] =
                                                        C[we + ye] =
                                                            "0"),
                                                    (C[be] = s[be]),
                                                    (C[be + _e] = s[be + _e]),
                                                    (C[be + me] = s[be + me]),
                                                    (C[be + xe] = s[be + xe]),
                                                    (C[be + ye] = s[be + ye]),
                                                    (_ = (function (t, e, i) {
                                                        for (
                                                            var n,
                                                                r = [],
                                                                s = t.length,
                                                                o = i ? 8 : 0;
                                                            o < s;
                                                            o += 2
                                                        )
                                                            (n = t[o]),
                                                                r.push(
                                                                    n,
                                                                    n in e
                                                                        ? e[n]
                                                                        : t[
                                                                              o +
                                                                                  1
                                                                          ]
                                                                );
                                                        return (r.t = t.t), r;
                                                    })(y, C, $t)),
                                                    re && Ue(0)),
                                                e
                                                    ? ((D = e._initted),
                                                      Ut(1),
                                                      e.render(
                                                          e.duration(),
                                                          !0,
                                                          !0
                                                      ),
                                                      (k = T(ne.a) - E + m + j),
                                                      (M = 1 < Math.abs(m - k)),
                                                      Ae &&
                                                          M &&
                                                          _.splice(
                                                              _.length - 2,
                                                              2
                                                          ),
                                                      e.render(0, !0, !0),
                                                      D || e.invalidate(!0),
                                                      e.parent ||
                                                          e.totalTime(
                                                              e.totalTime()
                                                          ),
                                                      Ut(0))
                                                    : (k = m),
                                                I &&
                                                    (I.value
                                                        ? (I.style[
                                                              "overflow" +
                                                                  ne.a.toUpperCase()
                                                          ] = I.value)
                                                        : I.style.removeProperty(
                                                              "overflow-" + ne.a
                                                          ));
                                        else if (Dt && Ue() && !Kt)
                                            for (
                                                v = Dt.parentNode;
                                                v && v !== Lt;

                                            )
                                                v._pinOffset &&
                                                    ((l -= v._pinOffset),
                                                    (h -= v._pinOffset)),
                                                    (v = v.parentNode);
                                        z &&
                                            z.forEach(function (t) {
                                                return t.revert(!1, !0);
                                            }),
                                            (Xe.start = l),
                                            (Xe.end = h),
                                            (o = a = re ? V : Ue()),
                                            Kt ||
                                                re ||
                                                (o < V && Ue(V),
                                                (Xe.scroll.rec = 0)),
                                            Xe.revert(!1, !0),
                                            W &&
                                                ((Fe = -1),
                                                Xe.isActive && Ue(l + m * H),
                                                W.restart(!0)),
                                            (Rt = 0),
                                            e &&
                                                ue &&
                                                (e._initted || $) &&
                                                e.progress() !== $ &&
                                                e
                                                    .progress($, !0)
                                                    .render(e.time(), !0, !0),
                                            (H === Xe.progress && !Kt) ||
                                                (e &&
                                                    !ue &&
                                                    e.totalProgress(H, !0),
                                                (Xe.progress =
                                                    (o - l) / m === H ? 0 : H)),
                                            zt &&
                                                Xt &&
                                                (b._pinOffset = Math.round(
                                                    Xe.progress * k
                                                )),
                                            bt && !re && bt(Xe);
                                    }
                            }),
                            (Xe.getVelocity = function () {
                                return ((Ue() - a) / (le() - Yt)) * 1e3 || 0;
                            }),
                            (Xe.endAnimation = function () {
                                et(Xe.callbackAnimation),
                                    e &&
                                        (R
                                            ? R.progress(1)
                                            : e.paused()
                                            ? ue || et(e, Xe.direction < 0, 1)
                                            : et(e, e.reversed()));
                            }),
                            (Xe.labelToScroll = function (t) {
                                return (
                                    (e &&
                                        e.labels &&
                                        (l || Xe.refresh() || l) +
                                            (e.labels[t] / e.duration()) * m) ||
                                    0
                                );
                            }),
                            (Xe.getTrailing = function (t) {
                                var e = Me.indexOf(Xe),
                                    i =
                                        0 < Xe.direction
                                            ? Me.slice(0, e).reverse()
                                            : Me.slice(e + 1);
                                return (
                                    Q(t)
                                        ? i.filter(function (e) {
                                              return (
                                                  e.vars.preventOverlaps === t
                                              );
                                          })
                                        : i
                                ).filter(function (t) {
                                    return 0 < Xe.direction
                                        ? t.end <= l
                                        : t.start >= h;
                                });
                            }),
                            (Xe.update = function (t, n, r) {
                                if (!Kt || r || t) {
                                    var s,
                                        u,
                                        c,
                                        d,
                                        f,
                                        g,
                                        v,
                                        y = re ? V : Xe.scroll(),
                                        w = t ? 0 : (y - l) / m,
                                        T = w < 0 ? 0 : 1 < w ? 1 : w || 0,
                                        O = Xe.progress;
                                    if (
                                        (n &&
                                            ((a = o),
                                            (o = Kt ? Ue() : y),
                                            Zt &&
                                                ((B = I),
                                                (I =
                                                    e && !ue
                                                        ? e.totalProgress()
                                                        : T))),
                                        Ft &&
                                            !T &&
                                            zt &&
                                            !Rt &&
                                            !ae &&
                                            ce &&
                                            l <
                                                y +
                                                    ((y - a) / (le() - Yt)) *
                                                        Ft &&
                                            (T = 1e-4),
                                        T !== O && Xe.enabled)
                                    ) {
                                        if (
                                            ((d =
                                                (f =
                                                    (s = Xe.isActive =
                                                        !!T && T < 1) !=
                                                    (!!O && O < 1)) ||
                                                !!T != !!O),
                                            (Xe.direction = O < T ? 1 : -1),
                                            (Xe.progress = T),
                                            d &&
                                                !Rt &&
                                                ((u =
                                                    T && !O
                                                        ? 0
                                                        : 1 === T
                                                        ? 1
                                                        : 1 === O
                                                        ? 2
                                                        : 3),
                                                ue &&
                                                    ((c =
                                                        (!f &&
                                                            "none" !==
                                                                De[u + 1] &&
                                                            De[u + 1]) ||
                                                        De[u]),
                                                    (v =
                                                        e &&
                                                        ("complete" === c ||
                                                            "reset" === c ||
                                                            c in e)))),
                                            ee &&
                                                (f || v) &&
                                                (v || Ot || !e) &&
                                                (K(ee)
                                                    ? ee(Xe)
                                                    : Xe.getTrailing(
                                                          ee
                                                      ).forEach(function (t) {
                                                          return t.endAnimation();
                                                      })),
                                            ue ||
                                                (!R || Rt || ae
                                                    ? e &&
                                                      e.totalProgress(T, !!Rt)
                                                    : (R._dp._time -
                                                          R._start !==
                                                          R._time &&
                                                          R.render(
                                                              R._dp._time -
                                                                  R._start
                                                          ),
                                                      R.resetTo
                                                          ? R.resetTo(
                                                                "totalProgress",
                                                                T,
                                                                e._tTime /
                                                                    e._tDur
                                                            )
                                                          : ((R.vars.totalProgress =
                                                                T),
                                                            R.invalidate().restart()))),
                                            zt)
                                        )
                                            if (
                                                (t &&
                                                    Xt &&
                                                    (b.style[Xt + ne.os2] = C),
                                                Ae)
                                            ) {
                                                if (d) {
                                                    if (
                                                        ((g =
                                                            !t &&
                                                            O < T &&
                                                            y < h + 1 &&
                                                            y + 1 >= Z(fe, ne)),
                                                        $t)
                                                    )
                                                        if (t || (!s && !g))
                                                            Et(zt, b);
                                                        else {
                                                            var P = Ee(zt, !0),
                                                                L = y - l;
                                                            Et(
                                                                zt,
                                                                Lt,
                                                                P.top +
                                                                    (ne === X
                                                                        ? L
                                                                        : 0) +
                                                                    Se,
                                                                P.left +
                                                                    (ne === X
                                                                        ? 0
                                                                        : L) +
                                                                    Se
                                                            );
                                                        }
                                                    je(s || g ? _ : x),
                                                        (M && T < 1 && s) ||
                                                            S(
                                                                E +
                                                                    (1 !== T ||
                                                                    g
                                                                        ? 0
                                                                        : k)
                                                            );
                                                }
                                            } else S(j(E + k * T));
                                        !Zt ||
                                            i.tween ||
                                            Rt ||
                                            ae ||
                                            W.restart(!0),
                                            vt &&
                                                (f ||
                                                    (Gt &&
                                                        T &&
                                                        (T < 1 || !ie))) &&
                                                It(vt.targets).forEach(
                                                    function (t) {
                                                        return t.classList[
                                                            s || Gt
                                                                ? "add"
                                                                : "remove"
                                                        ](vt.className);
                                                    }
                                                ),
                                            !pt || ue || t || pt(Xe),
                                            d && !Rt
                                                ? (ue &&
                                                      (v &&
                                                          ("complete" === c
                                                              ? e
                                                                    .pause()
                                                                    .totalProgress(
                                                                        1
                                                                    )
                                                              : "reset" === c
                                                              ? e
                                                                    .restart(!0)
                                                                    .pause()
                                                              : "restart" === c
                                                              ? e.restart(!0)
                                                              : e[c]()),
                                                      pt && pt(Xe)),
                                                  (!f && ie) ||
                                                      (xt && f && it(Xe, xt),
                                                      Le[u] && it(Xe, Le[u]),
                                                      Gt &&
                                                          (1 === T
                                                              ? Xe.kill(!1, 1)
                                                              : (Le[u] = 0)),
                                                      f ||
                                                          (Le[
                                                              (u =
                                                                  1 === T
                                                                      ? 1
                                                                      : 3)
                                                          ] &&
                                                              it(Xe, Le[u]))),
                                                  Jt &&
                                                      !s &&
                                                      Math.abs(
                                                          Xe.getVelocity()
                                                      ) > (J(Jt) ? Jt : 2500) &&
                                                      (et(Xe.callbackAnimation),
                                                      R
                                                          ? R.progress(1)
                                                          : et(
                                                                e,
                                                                "reverse" === c
                                                                    ? 1
                                                                    : !T,
                                                                1
                                                            )))
                                                : ue && pt && !Rt && pt(Xe);
                                    }
                                    if (D) {
                                        var z = Kt
                                            ? (y / Kt.duration()) *
                                              (Kt._caScrollDist || 0)
                                            : y;
                                        A(z + (p._isFlipped ? 1 : 0)), D(z);
                                    }
                                    lt &&
                                        lt(
                                            (-y / Kt.duration()) *
                                                (Kt._caScrollDist || 0)
                                        );
                                }
                            }),
                            (Xe.enable = function (t, e) {
                                Xe.enabled ||
                                    ((Xe.enabled = !0),
                                    ut(fe, "resize", mt),
                                    ut(Oe ? Mt : fe, "scroll", gt),
                                    Ne && ut(Ge, "refreshInit", Ne),
                                    !1 !== t &&
                                        ((Xe.progress = H = 0),
                                        (o = a = Fe = Ue())),
                                    !1 !== e && Xe.refresh());
                            }),
                            (Xe.getTween = function (t) {
                                return t && i ? i.tween : R;
                            }),
                            (Xe.setPositions = function (t, e) {
                                zt &&
                                    ((E += t - l),
                                    (k += e - t - m),
                                    Xt === be &&
                                        Xe.adjustPinSpacing(e - t - m)),
                                    (Xe.start = l = t),
                                    (Xe.end = h = e),
                                    (m = e - t),
                                    Xe.update();
                            }),
                            (Xe.adjustPinSpacing = function (t) {
                                if (O) {
                                    var e = O.indexOf(ne.d) + 1;
                                    (O[e] = parseFloat(O[e]) + t + Se),
                                        (O[1] = parseFloat(O[1]) + t + Se),
                                        je(O);
                                }
                            }),
                            (Xe.disable = function (t, e) {
                                if (
                                    Xe.enabled &&
                                    (!1 !== t && Xe.revert(!0, !0),
                                    (Xe.enabled = Xe.isActive = !1),
                                    e || (R && R.pause()),
                                    (V = 0),
                                    r && (r.uncache = 1),
                                    Ne && ct(Ge, "refreshInit", Ne),
                                    W &&
                                        (W.pause(),
                                        i.tween &&
                                            i.tween.kill() &&
                                            (i.tween = 0)),
                                    !Oe)
                                ) {
                                    for (var n = Me.length; n--; )
                                        if (
                                            Me[n].scroller === fe &&
                                            Me[n] !== Xe
                                        )
                                            return;
                                    ct(fe, "resize", mt), ct(fe, "scroll", gt);
                                }
                            }),
                            (Xe.kill = function (i, n) {
                                Xe.disable(i, n),
                                    R && !n && R.kill(),
                                    _t && delete Pe[_t];
                                var s = Me.indexOf(Xe);
                                0 <= s && Me.splice(s, 1),
                                    s === Wt && 0 < Re && Wt--,
                                    (s = 0),
                                    Me.forEach(function (t) {
                                        return (
                                            t.scroller === Xe.scroller &&
                                            (s = 1)
                                        );
                                    }),
                                    s || re || (Xe.scroll.rec = 0),
                                    e &&
                                        ((e.scrollTrigger = null),
                                        i && e.revert({ kill: !1 }),
                                        n || e.kill()),
                                    d &&
                                        [d, f, p, g].forEach(function (t) {
                                            return (
                                                t.parentNode &&
                                                t.parentNode.removeChild(t)
                                            );
                                        }),
                                    oe === Xe && (oe = 0),
                                    zt &&
                                        (r && (r.uncache = 1),
                                        (s = 0),
                                        Me.forEach(function (t) {
                                            return t.pin === zt && s++;
                                        }),
                                        s || (r.spacer = 0)),
                                    t.onKill && t.onKill(Xe);
                            }),
                            Xe.enable(!1, !1),
                            ht && ht(Xe),
                            e && e.add && !m
                                ? Ct.delayedCall(0.01, function () {
                                      return l || h || Xe.refresh();
                                  }) &&
                                  (m = 0.01) &&
                                  (l = h = 0)
                                : Xe.refresh(),
                            zt &&
                                (function () {
                                    if (se !== Be) {
                                        var t = (se = Be);
                                        requestAnimationFrame(function () {
                                            return t === Be && Ye(!0);
                                        });
                                    }
                                })();
                    } else this.update = this.refresh = this.kill = F;
                }),
                (Ge.register = function (t) {
                    return (
                        Ot ||
                            ((Ct = t || V()),
                            H() && window.document && Ge.enable(),
                            (Ot = he)),
                        Ot
                    );
                }),
                (Ge.defaults = function (t) {
                    if (t) for (var e in t) Ce[e] = t[e];
                    return Ce;
                }),
                (Ge.disable = function (t, e) {
                    (he = 0),
                        Me.forEach(function (i) {
                            return i[e ? "kill" : "disable"](t);
                        }),
                        ct(At, "wheel", gt),
                        ct(Mt, "scroll", gt),
                        clearInterval(Xt),
                        ct(Mt, "touchcancel", F),
                        ct(Lt, "touchstart", F),
                        lt(ct, Mt, "pointerdown,touchstart,mousedown", q),
                        lt(ct, Mt, "pointerup,touchend,mouseup", W),
                        zt.kill(),
                        $(ct);
                    for (var i = 0; i < P.length; i += 3)
                        ht(ct, P[i], P[i + 1]), ht(ct, P[i], P[i + 2]);
                }),
                (Ge.enable = function () {
                    if (
                        ((At = window),
                        (Mt = document),
                        (Pt = Mt.documentElement),
                        (Lt = Mt.body),
                        Ct &&
                            ((It = Ct.utils.toArray),
                            (Bt = Ct.utils.clamp),
                            (te = Ct.core.context || F),
                            (Ut = Ct.core.suppressOverwrites || F),
                            (ee = At.history.scrollRestoration || "auto"),
                            Ct.core.globals("ScrollTrigger", Ge),
                            Lt))
                    ) {
                        (he = 1),
                            R.register(Ct),
                            (Ge.isTouch = R.isTouch),
                            (Jt =
                                R.isTouch &&
                                /(iPad|iPhone|iPod|Mac)/g.test(
                                    navigator.userAgent
                                )),
                            ut(At, "wheel", gt),
                            (Dt = [At, Mt, Pt, Lt]),
                            Ct.matchMedia
                                ? ((Ge.matchMedia = function (t) {
                                      var e,
                                          i = Ct.matchMedia();
                                      for (e in t) i.add(e, t[e]);
                                      return i;
                                  }),
                                  Ct.addEventListener(
                                      "matchMediaInit",
                                      function () {
                                          return xt();
                                      }
                                  ),
                                  Ct.addEventListener(
                                      "matchMediaRevert",
                                      function () {
                                          return _t();
                                      }
                                  ),
                                  Ct.addEventListener(
                                      "matchMedia",
                                      function () {
                                          Ye(0, 1), ze("matchMedia");
                                      }
                                  ),
                                  Ct.matchMedia(
                                      "(orientation: portrait)",
                                      function () {
                                          return vt(), vt;
                                      }
                                  ))
                                : console.warn("Requires GSAP 3.11.0 or later"),
                            vt(),
                            ut(Mt, "scroll", gt);
                        var t,
                            e,
                            i = Lt.style,
                            n = i.borderTopStyle,
                            r = Ct.core.Animation.prototype;
                        for (
                            r.revert ||
                                Object.defineProperty(r, "revert", {
                                    value: function () {
                                        return this.time(-0.01, !0);
                                    },
                                }),
                                i.borderTopStyle = "solid",
                                t = Ee(Lt),
                                X.m = Math.round(t.top + X.sc()) || 0,
                                Y.m = Math.round(t.left + Y.sc()) || 0,
                                n
                                    ? (i.borderTopStyle = n)
                                    : i.removeProperty("border-top-style"),
                                Xt = setInterval(pt, 250),
                                Ct.delayedCall(0.5, function () {
                                    return (ae = 0);
                                }),
                                ut(Mt, "touchcancel", F),
                                ut(Lt, "touchstart", F),
                                lt(
                                    ut,
                                    Mt,
                                    "pointerdown,touchstart,mousedown",
                                    q
                                ),
                                lt(ut, Mt, "pointerup,touchend,mouseup", W),
                                qt = Ct.utils.checkPrefix("transform"),
                                We.push(qt),
                                Ot = le(),
                                zt = Ct.delayedCall(0.2, Ye).pause(),
                                Ht = [
                                    Mt,
                                    "visibilitychange",
                                    function () {
                                        var t = At.innerWidth,
                                            e = At.innerHeight;
                                        Mt.hidden
                                            ? ((Ft = t), (jt = e))
                                            : (Ft === t && jt === e) || mt();
                                    },
                                    Mt,
                                    "DOMContentLoaded",
                                    Ye,
                                    At,
                                    "load",
                                    Ye,
                                    At,
                                    "resize",
                                    mt,
                                ],
                                $(ut),
                                Me.forEach(function (t) {
                                    return t.enable(0, 1);
                                }),
                                e = 0;
                            e < P.length;
                            e += 3
                        )
                            ht(ct, P[e], P[e + 1]), ht(ct, P[e], P[e + 2]);
                    }
                }),
                (Ge.config = function (t) {
                    "limitCallbacks" in t && (ie = !!t.limitCallbacks);
                    var e = t.syncInterval;
                    (e && clearInterval(Xt)) ||
                        ((Xt = e) && setInterval(pt, e)),
                        "ignoreMobileResize" in t &&
                            ($t = 1 === Ge.isTouch && t.ignoreMobileResize),
                        "autoRefreshEvents" in t &&
                            ($(ct) || $(ut, t.autoRefreshEvents || "none"),
                            (Gt =
                                -1 ===
                                (t.autoRefreshEvents + "").indexOf("resize")));
                }),
                (Ge.scrollerProxy = function (t, e) {
                    var i = u(t),
                        n = P.indexOf(i),
                        r = U(i);
                    ~n && P.splice(n, r ? 6 : 2),
                        e &&
                            (r
                                ? L.unshift(At, e, Lt, e, Pt, e)
                                : L.unshift(i, e));
                }),
                (Ge.clearMatchMedia = function (t) {
                    Me.forEach(function (e) {
                        return (
                            e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                        );
                    });
                }),
                (Ge.isInViewport = function (t, e, i) {
                    var n = (Q(t) ? u(t) : t).getBoundingClientRect(),
                        r = n[i ? ge : ve] * e || 0;
                    return i
                        ? 0 < n.right - r && n.left + r < At.innerWidth
                        : 0 < n.bottom - r && n.top + r < At.innerHeight;
                }),
                (Ge.positionInViewport = function (t, e, i) {
                    Q(t) && (t = u(t));
                    var n = t.getBoundingClientRect(),
                        r = n[i ? ge : ve],
                        s =
                            null == e
                                ? r / 2
                                : e in Oe
                                ? Oe[e] * r
                                : ~e.indexOf("%")
                                ? (parseFloat(e) * r) / 100
                                : parseFloat(e) || 0;
                    return i
                        ? (n.left + s) / At.innerWidth
                        : (n.top + s) / At.innerHeight;
                }),
                (Ge.killAll = function (t) {
                    if (
                        (Me.slice(0).forEach(function (t) {
                            return "ScrollSmoother" !== t.vars.id && t.kill();
                        }),
                        !0 !== t)
                    ) {
                        var e = Le.killAll || [];
                        (Le = {}),
                            e.forEach(function (t) {
                                return t();
                            });
                    }
                }),
                Ge);
        function Ge(t, e) {
            Ot ||
                Ge.register(Ct) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                this.init(t, e);
        }
        function Ze(t, e, i, n) {
            return (
                n < e ? t(n) : e < 0 && t(0),
                n < i ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1
            );
        }
        function $e(t, e) {
            !0 === e
                ? t.style.removeProperty("touch-action")
                : (t.style.touchAction =
                      !0 === e
                          ? "auto"
                          : e
                          ? "pan-" + e + (R.isTouch ? " pinch-zoom" : "")
                          : "none"),
                t === Pt && $e(Lt, e);
        }
        function Qe(t) {
            var e,
                i = t.event,
                n = t.target,
                r = t.axis,
                s = (i.changedTouches ? i.changedTouches[0] : i).target,
                o = s._gsap || Ct.core.getCache(s),
                a = le();
            if (!o._isScrollT || 2e3 < a - o._isScrollT) {
                for (
                    ;
                    s &&
                    s !== Lt &&
                    ((s.scrollHeight <= s.clientHeight &&
                        s.scrollWidth <= s.clientWidth) ||
                        (!ti[(e = nt(s)).overflowY] && !ti[e.overflowX]));

                )
                    s = s.parentNode;
                (o._isScroll =
                    s &&
                    s !== n &&
                    !U(s) &&
                    (ti[(e = nt(s)).overflowY] || ti[e.overflowX])),
                    (o._isScrollT = a);
            }
            (!o._isScroll && "x" !== r) ||
                (i.stopPropagation(), (i._gsapAllow = !0));
        }
        function Ke(t, e, i, n) {
            return R.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: (n = n && Qe),
                onPress: n,
                onDrag: n,
                onScroll: n,
                onEnable: function () {
                    return i && ut(Mt, R.eventTypes[0], ii, !1, !0);
                },
                onDisable: function () {
                    return ct(Mt, R.eventTypes[0], ii, !0);
                },
            });
        }
        (Ue.version = "3.11.4"),
            (Ue.saveStyles = function (t) {
                return t
                    ? It(t).forEach(function (t) {
                          if (t && t.style) {
                              var e = Ie.indexOf(t);
                              0 <= e && Ie.splice(e, 5),
                                  Ie.push(
                                      t,
                                      t.style.cssText,
                                      t.getBBox && t.getAttribute("transform"),
                                      Ct.core.getCache(t),
                                      te()
                                  );
                          }
                      })
                    : Ie;
            }),
            (Ue.revert = function (t, e) {
                return xt(!t, e);
            }),
            (Ue.create = function (t, e) {
                return new Ue(t, e);
            }),
            (Ue.refresh = function (t) {
                return t ? mt() : (Ot || Ue.register()) && Ye(!0);
            }),
            (Ue.update = function (t) {
                return ++P.cache && Ne(!0 === t ? 2 : 0);
            }),
            (Ue.clearScrollMemory = bt),
            (Ue.maxScroll = function (t, e) {
                return Z(t, e ? Y : X);
            }),
            (Ue.getScrollFunc = function (t, e) {
                return c(u(t), e ? Y : X);
            }),
            (Ue.getById = function (t) {
                return Pe[t];
            }),
            (Ue.getAll = function () {
                return Me.filter(function (t) {
                    return "ScrollSmoother" !== t.vars.id;
                });
            }),
            (Ue.isScrolling = function () {
                return !!ce;
            }),
            (Ue.snapDirectional = at),
            (Ue.addEventListener = function (t, e) {
                var i = Le[t] || (Le[t] = []);
                ~i.indexOf(e) || i.push(e);
            }),
            (Ue.removeEventListener = function (t, e) {
                var i = Le[t],
                    n = i && i.indexOf(e);
                0 <= n && i.splice(n, 1);
            }),
            (Ue.batch = function (t, e) {
                function i(t, e) {
                    var i = [],
                        n = [],
                        r = Ct.delayedCall(o, function () {
                            e(i, n), (i = []), (n = []);
                        }).pause();
                    return function (t) {
                        i.length || r.restart(!0),
                            i.push(t.trigger),
                            n.push(t),
                            a <= i.length && r.progress(1);
                    };
                }
                var n,
                    r = [],
                    s = {},
                    o = e.interval || 0.016,
                    a = e.batchMax || 1e9;
                for (n in e)
                    s[n] =
                        "on" === n.substr(0, 2) &&
                        K(e[n]) &&
                        "onRefreshInit" !== n
                            ? i(0, e[n])
                            : e[n];
                return (
                    K(a) &&
                        ((a = a()),
                        ut(Ue, "refresh", function () {
                            return (a = e.batchMax());
                        })),
                    It(t).forEach(function (t) {
                        var e = {};
                        for (n in s) e[n] = s[n];
                        (e.trigger = t), r.push(Ue.create(e));
                    }),
                    r
                );
            });
        var Je,
            ti = { auto: 1, scroll: 1 },
            ei = /(input|label|select|textarea)/i,
            ii = function (t) {
                var e = ei.test(t.target.tagName);
                (e || Je) && ((t._gsapAllow = !0), (Je = e));
            };
        (Ue.sort = function (t) {
            return Me.sort(
                t ||
                    function (t, e) {
                        return (
                            -1e6 * (t.vars.refreshPriority || 0) +
                            t.start -
                            (e.start + -1e6 * (e.vars.refreshPriority || 0))
                        );
                    }
            );
        }),
            (Ue.observe = function (t) {
                return new R(t);
            }),
            (Ue.normalizeScroll = function (t) {
                if (void 0 === t) return Zt;
                if (!0 === t && Zt) return Zt.enable();
                if (!1 === t) return Zt && Zt.kill();
                var e =
                    t instanceof R
                        ? t
                        : (function (t) {
                              function e() {
                                  return (l = !1);
                              }
                              function i() {
                                  (o = Z(y, X)),
                                      (M = Bt(Jt ? 1 : 0, o)),
                                      g && (A = Bt(0, Z(y, Y))),
                                      (a = Be);
                              }
                              function n() {
                                  (b._gsap.y =
                                      j(parseFloat(b._gsap.y) + w.offset) +
                                      "px"),
                                      (b.style.transform =
                                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                                          parseFloat(b._gsap.y) +
                                          ", 0, 1)"),
                                      (w.offset = w.cacheID = 0);
                              }
                              function r() {
                                  i(),
                                      h.isActive() &&
                                          h.vars.scrollY > o &&
                                          (w() > o
                                              ? h.progress(1) && w(o)
                                              : h.resetTo("scrollY", o));
                              }
                              tt(t) || (t = {}),
                                  (t.preventDefault =
                                      t.isNormalizer =
                                      t.allowClicks =
                                          !0),
                                  t.type || (t.type = "wheel,touch"),
                                  (t.debounce = !!t.debounce),
                                  (t.id = t.id || "normalizer");
                              var s,
                                  o,
                                  a,
                                  l,
                                  h,
                                  d,
                                  f,
                                  p,
                                  g = t.normalizeScrollX,
                                  v = t.momentum,
                                  m = t.allowNestedScroll,
                                  y = u(t.target) || Pt,
                                  _ = Ct.core.globals().ScrollSmoother,
                                  x = _ && _.get(),
                                  b =
                                      Jt &&
                                      ((t.content && u(t.content)) ||
                                          (x &&
                                              !1 !== t.content &&
                                              !x.smooth() &&
                                              x.content())),
                                  w = c(y, X),
                                  T = c(y, Y),
                                  S = 1,
                                  E =
                                      (R.isTouch && At.visualViewport
                                          ? At.visualViewport.scale *
                                            At.visualViewport.width
                                          : At.outerWidth) / At.innerWidth,
                                  k = 0,
                                  C = K(v)
                                      ? function () {
                                            return v(s);
                                        }
                                      : function () {
                                            return v || 2.8;
                                        },
                                  O = Ke(y, t.type, !0, m),
                                  A = F,
                                  M = F;
                              return (
                                  b && Ct.set(b, { y: "+=0" }),
                                  (t.ignoreCheck = function (t) {
                                      return (
                                          (Jt &&
                                              "touchmove" === t.type &&
                                              (function () {
                                                  if (l) {
                                                      requestAnimationFrame(e);
                                                      var t = j(s.deltaY / 2),
                                                          i = M(w.v - t);
                                                      if (
                                                          b &&
                                                          i !== w.v + w.offset
                                                      ) {
                                                          w.offset = i - w.v;
                                                          var r = j(
                                                              (parseFloat(
                                                                  b && b._gsap.y
                                                              ) || 0) - w.offset
                                                          );
                                                          (b.style.transform =
                                                              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                                                              r +
                                                              ", 0, 1)"),
                                                              (b._gsap.y =
                                                                  r + "px"),
                                                              (w.cacheID =
                                                                  P.cache),
                                                              Ne();
                                                      }
                                                      return !0;
                                                  }
                                                  w.offset && n(), (l = !0);
                                              })()) ||
                                          (1.05 < S &&
                                              "touchstart" !== t.type) ||
                                          s.isGesturing ||
                                          (t.touches && 1 < t.touches.length)
                                      );
                                  }),
                                  (t.onPress = function () {
                                      var t = S;
                                      (S = j(
                                          ((At.visualViewport &&
                                              At.visualViewport.scale) ||
                                              1) / E
                                      )),
                                          h.pause(),
                                          t !== S &&
                                              $e(y, 1.01 < S || (!g && "x")),
                                          (d = T()),
                                          (f = w()),
                                          i(),
                                          (a = Be);
                                  }),
                                  (t.onRelease = t.onGestureStart =
                                      function (t, e) {
                                          if ((w.offset && n(), e)) {
                                              P.cache++;
                                              var i,
                                                  s,
                                                  a = C();
                                              g &&
                                                  ((s =
                                                      (i = T()) +
                                                      (0.05 *
                                                          a *
                                                          -t.velocityX) /
                                                          0.227),
                                                  (a *= Ze(T, i, s, Z(y, Y))),
                                                  (h.vars.scrollX = A(s))),
                                                  (s =
                                                      (i = w()) +
                                                      (0.05 *
                                                          a *
                                                          -t.velocityY) /
                                                          0.227),
                                                  (a *= Ze(w, i, s, Z(y, X))),
                                                  (h.vars.scrollY = M(s)),
                                                  h
                                                      .invalidate()
                                                      .duration(a)
                                                      .play(0.01),
                                                  ((Jt &&
                                                      h.vars.scrollY >= o) ||
                                                      o - 1 <= i) &&
                                                      Ct.to(
                                                          {},
                                                          {
                                                              onUpdate: r,
                                                              duration: a,
                                                          }
                                                      );
                                          } else p.restart(!0);
                                      }),
                                  (t.onWheel = function () {
                                      h._ts && h.pause(),
                                          1e3 < le() - k &&
                                              ((a = 0), (k = le()));
                                  }),
                                  (t.onChange = function (t, e, r, s, o) {
                                      if (
                                          (Be !== a && i(),
                                          e &&
                                              g &&
                                              T(
                                                  A(
                                                      s[2] === e
                                                          ? d + (t.startX - t.x)
                                                          : T() + e - s[1]
                                                  )
                                              ),
                                          r)
                                      ) {
                                          w.offset && n();
                                          var l = o[2] === r,
                                              u = l
                                                  ? f + t.startY - t.y
                                                  : w() + r - o[1],
                                              c = M(u);
                                          l && u !== c && (f += c - u), w(c);
                                      }
                                      (r || e) && Ne();
                                  }),
                                  (t.onEnable = function () {
                                      $e(y, !g && "x"),
                                          Ue.addEventListener("refresh", r),
                                          ut(At, "resize", r),
                                          w.smooth &&
                                              ((w.target.style.scrollBehavior =
                                                  "auto"),
                                              (w.smooth = T.smooth = !1)),
                                          O.enable();
                                  }),
                                  (t.onDisable = function () {
                                      $e(y, !0),
                                          ct(At, "resize", r),
                                          Ue.removeEventListener("refresh", r),
                                          O.kill();
                                  }),
                                  (t.lockAxis = !1 !== t.lockAxis),
                                  ((s = new R(t)).iOS = Jt) && !w() && w(1),
                                  Jt && Ct.ticker.add(F),
                                  (p = s._dc),
                                  (h = Ct.to(s, {
                                      ease: "power4",
                                      paused: !0,
                                      scrollX: g ? "+=0.1" : "+=0",
                                      scrollY: "+=0.1",
                                      onComplete: p.vars.onComplete,
                                  })),
                                  s
                              );
                          })(t);
                return (
                    Zt && Zt.target === e.target && Zt.kill(),
                    U(e.target) && (Zt = e),
                    e
                );
            }),
            (Ue.core = {
                _getVelocityProp: h,
                _inputObserver: Ke,
                _scrollers: P,
                _proxies: L,
                bridge: {
                    ss: function () {
                        ce || ze("scrollStart"), (ce = le());
                    },
                    ref: function () {
                        return Rt;
                    },
                },
            }),
            V() && Ct.registerPlugin(Ue),
            (t.ScrollTrigger = Ue),
            (t.default = Ue),
            "undefined" == typeof window || window !== t
                ? Object.defineProperty(t, "__esModule", { value: !0 })
                : delete t.default;
    }),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
            ? e(exports)
            : "function" == typeof define && define.amd
            ? define(["exports"], e)
            : e(
                  ((t =
                      "undefined" != typeof globalThis
                          ? globalThis
                          : t || self).Popper = {})
              );
    })(this, function (t) {
        "use strict";
        function e(t) {
            if (null == t) return window;
            if ("[object Window]" !== t.toString()) {
                var e = t.ownerDocument;
                return (e && e.defaultView) || window;
            }
            return t;
        }
        function i(t) {
            return t instanceof e(t).Element || t instanceof Element;
        }
        function n(t) {
            return t instanceof e(t).HTMLElement || t instanceof HTMLElement;
        }
        function r(t) {
            return (
                "undefined" != typeof ShadowRoot &&
                (t instanceof e(t).ShadowRoot || t instanceof ShadowRoot)
            );
        }
        var s = Math.max,
            o = Math.min,
            a = Math.round;
        function l() {
            var t = navigator.userAgentData;
            return null != t && t.brands
                ? t.brands
                      .map(function (t) {
                          return t.brand + "/" + t.version;
                      })
                      .join(" ")
                : navigator.userAgent;
        }
        function u() {
            return !/^((?!chrome|android).)*safari/i.test(l());
        }
        function c(t, r, s) {
            void 0 === r && (r = !1), void 0 === s && (s = !1);
            var o = t.getBoundingClientRect(),
                l = 1,
                c = 1;
            r &&
                n(t) &&
                ((l = (t.offsetWidth > 0 && a(o.width) / t.offsetWidth) || 1),
                (c =
                    (t.offsetHeight > 0 && a(o.height) / t.offsetHeight) || 1));
            var h = (i(t) ? e(t) : window).visualViewport,
                d = !u() && s,
                f = (o.left + (d && h ? h.offsetLeft : 0)) / l,
                p = (o.top + (d && h ? h.offsetTop : 0)) / c,
                g = o.width / l,
                v = o.height / c;
            return {
                width: g,
                height: v,
                top: p,
                right: f + g,
                bottom: p + v,
                left: f,
                x: f,
                y: p,
            };
        }
        function h(t) {
            var i = e(t);
            return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
        }
        function d(t) {
            return t ? (t.nodeName || "").toLowerCase() : null;
        }
        function f(t) {
            return (
                (i(t) ? t.ownerDocument : t.document) || window.document
            ).documentElement;
        }
        function p(t) {
            return c(f(t)).left + h(t).scrollLeft;
        }
        function g(t) {
            return e(t).getComputedStyle(t);
        }
        function v(t) {
            var e = g(t),
                i = e.overflow,
                n = e.overflowX,
                r = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(i + r + n);
        }
        function m(t, i, r) {
            void 0 === r && (r = !1);
            var s,
                o,
                l = n(i),
                u =
                    n(i) &&
                    (function (t) {
                        var e = t.getBoundingClientRect(),
                            i = a(e.width) / t.offsetWidth || 1,
                            n = a(e.height) / t.offsetHeight || 1;
                        return 1 !== i || 1 !== n;
                    })(i),
                g = f(i),
                m = c(t, u, r),
                y = { scrollLeft: 0, scrollTop: 0 },
                _ = { x: 0, y: 0 };
            return (
                (l || (!l && !r)) &&
                    (("body" !== d(i) || v(g)) &&
                        (y =
                            (s = i) !== e(s) && n(s)
                                ? {
                                      scrollLeft: (o = s).scrollLeft,
                                      scrollTop: o.scrollTop,
                                  }
                                : h(s)),
                    n(i)
                        ? (((_ = c(i, !0)).x += i.clientLeft),
                          (_.y += i.clientTop))
                        : g && (_.x = p(g))),
                {
                    x: m.left + y.scrollLeft - _.x,
                    y: m.top + y.scrollTop - _.y,
                    width: m.width,
                    height: m.height,
                }
            );
        }
        function y(t) {
            var e = c(t),
                i = t.offsetWidth,
                n = t.offsetHeight;
            return (
                Math.abs(e.width - i) <= 1 && (i = e.width),
                Math.abs(e.height - n) <= 1 && (n = e.height),
                { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
            );
        }
        function _(t) {
            return "html" === d(t)
                ? t
                : t.assignedSlot ||
                      t.parentNode ||
                      (r(t) ? t.host : null) ||
                      f(t);
        }
        function x(t) {
            return ["html", "body", "#document"].indexOf(d(t)) >= 0
                ? t.ownerDocument.body
                : n(t) && v(t)
                ? t
                : x(_(t));
        }
        function b(t, i) {
            var n;
            void 0 === i && (i = []);
            var r = x(t),
                s = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
                o = e(r),
                a = s ? [o].concat(o.visualViewport || [], v(r) ? r : []) : r,
                l = i.concat(a);
            return s ? l : l.concat(b(_(a)));
        }
        function w(t) {
            return ["table", "td", "th"].indexOf(d(t)) >= 0;
        }
        function T(t) {
            return n(t) && "fixed" !== g(t).position ? t.offsetParent : null;
        }
        function S(t) {
            for (
                var i = e(t), s = T(t);
                s && w(s) && "static" === g(s).position;

            )
                s = T(s);
            return s &&
                ("html" === d(s) ||
                    ("body" === d(s) && "static" === g(s).position))
                ? i
                : s ||
                      (function (t) {
                          var e = /firefox/i.test(l());
                          if (
                              /Trident/i.test(l()) &&
                              n(t) &&
                              "fixed" === g(t).position
                          )
                              return null;
                          var i = _(t);
                          for (
                              r(i) && (i = i.host);
                              n(i) && ["html", "body"].indexOf(d(i)) < 0;

                          ) {
                              var s = g(i);
                              if (
                                  "none" !== s.transform ||
                                  "none" !== s.perspective ||
                                  "paint" === s.contain ||
                                  -1 !==
                                      ["transform", "perspective"].indexOf(
                                          s.willChange
                                      ) ||
                                  (e && "filter" === s.willChange) ||
                                  (e && s.filter && "none" !== s.filter)
                              )
                                  return i;
                              i = i.parentNode;
                          }
                          return null;
                      })(t) ||
                      i;
        }
        var E = "top",
            k = "bottom",
            C = "right",
            O = "left",
            A = "auto",
            M = [E, k, C, O],
            P = "start",
            L = "end",
            D = "viewport",
            z = "popper",
            I = M.reduce(function (t, e) {
                return t.concat([e + "-" + P, e + "-" + L]);
            }, []),
            B = [].concat(M, [A]).reduce(function (t, e) {
                return t.concat([e, e + "-" + P, e + "-" + L]);
            }, []),
            Y = [
                "beforeRead",
                "read",
                "afterRead",
                "beforeMain",
                "main",
                "afterMain",
                "beforeWrite",
                "write",
                "afterWrite",
            ];
        function X(t) {
            var e = new Map(),
                i = new Set(),
                n = [];
            function r(t) {
                i.add(t.name),
                    []
                        .concat(t.requires || [], t.requiresIfExists || [])
                        .forEach(function (t) {
                            if (!i.has(t)) {
                                var n = e.get(t);
                                n && r(n);
                            }
                        }),
                    n.push(t);
            }
            return (
                t.forEach(function (t) {
                    e.set(t.name, t);
                }),
                t.forEach(function (t) {
                    i.has(t.name) || r(t);
                }),
                n
            );
        }
        function R(t) {
            return t.split("-")[0];
        }
        function N(t, e) {
            var i = e.getRootNode && e.getRootNode();
            if (t.contains(e)) return !0;
            if (i && r(i)) {
                var n = e;
                do {
                    if (n && t.isSameNode(n)) return !0;
                    n = n.parentNode || n.host;
                } while (n);
            }
            return !1;
        }
        function q(t) {
            return Object.assign({}, t, {
                left: t.x,
                top: t.y,
                right: t.x + t.width,
                bottom: t.y + t.height,
            });
        }
        function W(t, n, r) {
            return n === D
                ? q(
                      (function (t, i) {
                          var n = e(t),
                              r = f(t),
                              s = n.visualViewport,
                              o = r.clientWidth,
                              a = r.clientHeight,
                              l = 0,
                              c = 0;
                          if (s) {
                              (o = s.width), (a = s.height);
                              var h = u();
                              (h || (!h && "fixed" === i)) &&
                                  ((l = s.offsetLeft), (c = s.offsetTop));
                          }
                          return { width: o, height: a, x: l + p(t), y: c };
                      })(t, r)
                  )
                : i(n)
                ? (function (t, e) {
                      var i = c(t, !1, "fixed" === e);
                      return (
                          (i.top = i.top + t.clientTop),
                          (i.left = i.left + t.clientLeft),
                          (i.bottom = i.top + t.clientHeight),
                          (i.right = i.left + t.clientWidth),
                          (i.width = t.clientWidth),
                          (i.height = t.clientHeight),
                          (i.x = i.left),
                          (i.y = i.top),
                          i
                      );
                  })(n, r)
                : q(
                      (function (t) {
                          var e,
                              i = f(t),
                              n = h(t),
                              r =
                                  null == (e = t.ownerDocument)
                                      ? void 0
                                      : e.body,
                              o = s(
                                  i.scrollWidth,
                                  i.clientWidth,
                                  r ? r.scrollWidth : 0,
                                  r ? r.clientWidth : 0
                              ),
                              a = s(
                                  i.scrollHeight,
                                  i.clientHeight,
                                  r ? r.scrollHeight : 0,
                                  r ? r.clientHeight : 0
                              ),
                              l = -n.scrollLeft + p(t),
                              u = -n.scrollTop;
                          return (
                              "rtl" === g(r || i).direction &&
                                  (l +=
                                      s(i.clientWidth, r ? r.clientWidth : 0) -
                                      o),
                              { width: o, height: a, x: l, y: u }
                          );
                      })(f(t))
                  );
        }
        function F(t, e, r, a) {
            var l =
                    "clippingParents" === e
                        ? (function (t) {
                              var e = b(_(t)),
                                  r =
                                      ["absolute", "fixed"].indexOf(
                                          g(t).position
                                      ) >= 0 && n(t)
                                          ? S(t)
                                          : t;
                              return i(r)
                                  ? e.filter(function (t) {
                                        return (
                                            i(t) && N(t, r) && "body" !== d(t)
                                        );
                                    })
                                  : [];
                          })(t)
                        : [].concat(e),
                u = [].concat(l, [r]),
                c = u[0],
                h = u.reduce(function (e, i) {
                    var n = W(t, i, a);
                    return (
                        (e.top = s(n.top, e.top)),
                        (e.right = o(n.right, e.right)),
                        (e.bottom = o(n.bottom, e.bottom)),
                        (e.left = s(n.left, e.left)),
                        e
                    );
                }, W(t, c, a));
            return (
                (h.width = h.right - h.left),
                (h.height = h.bottom - h.top),
                (h.x = h.left),
                (h.y = h.top),
                h
            );
        }
        function j(t) {
            return t.split("-")[1];
        }
        function H(t) {
            return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
        }
        function V(t) {
            var e,
                i = t.reference,
                n = t.element,
                r = t.placement,
                s = r ? R(r) : null,
                o = r ? j(r) : null,
                a = i.x + i.width / 2 - n.width / 2,
                l = i.y + i.height / 2 - n.height / 2;
            switch (s) {
                case E:
                    e = { x: a, y: i.y - n.height };
                    break;
                case k:
                    e = { x: a, y: i.y + i.height };
                    break;
                case C:
                    e = { x: i.x + i.width, y: l };
                    break;
                case O:
                    e = { x: i.x - n.width, y: l };
                    break;
                default:
                    e = { x: i.x, y: i.y };
            }
            var u = s ? H(s) : null;
            if (null != u) {
                var c = "y" === u ? "height" : "width";
                switch (o) {
                    case P:
                        e[u] = e[u] - (i[c] / 2 - n[c] / 2);
                        break;
                    case L:
                        e[u] = e[u] + (i[c] / 2 - n[c] / 2);
                }
            }
            return e;
        }
        function U(t) {
            return Object.assign(
                {},
                { top: 0, right: 0, bottom: 0, left: 0 },
                t
            );
        }
        function G(t, e) {
            return e.reduce(function (e, i) {
                return (e[i] = t), e;
            }, {});
        }
        function Z(t, e) {
            void 0 === e && (e = {});
            var n = e,
                r = n.placement,
                s = void 0 === r ? t.placement : r,
                o = n.strategy,
                a = void 0 === o ? t.strategy : o,
                l = n.boundary,
                u = void 0 === l ? "clippingParents" : l,
                h = n.rootBoundary,
                d = void 0 === h ? D : h,
                p = n.elementContext,
                g = void 0 === p ? z : p,
                v = n.altBoundary,
                m = void 0 !== v && v,
                y = n.padding,
                _ = void 0 === y ? 0 : y,
                x = U("number" != typeof _ ? _ : G(_, M)),
                b = g === z ? "reference" : z,
                w = t.rects.popper,
                T = t.elements[m ? b : g],
                S = F(
                    i(T) ? T : T.contextElement || f(t.elements.popper),
                    u,
                    d,
                    a
                ),
                O = c(t.elements.reference),
                A = V({
                    reference: O,
                    element: w,
                    strategy: "absolute",
                    placement: s,
                }),
                P = q(Object.assign({}, w, A)),
                L = g === z ? P : O,
                I = {
                    top: S.top - L.top + x.top,
                    bottom: L.bottom - S.bottom + x.bottom,
                    left: S.left - L.left + x.left,
                    right: L.right - S.right + x.right,
                },
                B = t.modifiersData.offset;
            if (g === z && B) {
                var Y = B[s];
                Object.keys(I).forEach(function (t) {
                    var e = [C, k].indexOf(t) >= 0 ? 1 : -1,
                        i = [E, k].indexOf(t) >= 0 ? "y" : "x";
                    I[t] += Y[i] * e;
                });
            }
            return I;
        }
        var $ = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Q() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return !e.some(function (t) {
                return !(t && "function" == typeof t.getBoundingClientRect);
            });
        }
        function K(t) {
            void 0 === t && (t = {});
            var e = t,
                n = e.defaultModifiers,
                r = void 0 === n ? [] : n,
                s = e.defaultOptions,
                o = void 0 === s ? $ : s;
            return function (t, e, n) {
                void 0 === n && (n = o);
                var s,
                    a,
                    l = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, $, o),
                        modifiersData: {},
                        elements: { reference: t, popper: e },
                        attributes: {},
                        styles: {},
                    },
                    u = [],
                    c = !1,
                    h = {
                        state: l,
                        setOptions: function (n) {
                            var s = "function" == typeof n ? n(l.options) : n;
                            d(),
                                (l.options = Object.assign(
                                    {},
                                    o,
                                    l.options,
                                    s
                                )),
                                (l.scrollParents = {
                                    reference: i(t)
                                        ? b(t)
                                        : t.contextElement
                                        ? b(t.contextElement)
                                        : [],
                                    popper: b(e),
                                });
                            var a,
                                c,
                                f = (function (t) {
                                    var e = X(t);
                                    return Y.reduce(function (t, i) {
                                        return t.concat(
                                            e.filter(function (t) {
                                                return t.phase === i;
                                            })
                                        );
                                    }, []);
                                })(
                                    ((a = [].concat(r, l.options.modifiers)),
                                    (c = a.reduce(function (t, e) {
                                        var i = t[e.name];
                                        return (
                                            (t[e.name] = i
                                                ? Object.assign({}, i, e, {
                                                      options: Object.assign(
                                                          {},
                                                          i.options,
                                                          e.options
                                                      ),
                                                      data: Object.assign(
                                                          {},
                                                          i.data,
                                                          e.data
                                                      ),
                                                  })
                                                : e),
                                            t
                                        );
                                    }, {})),
                                    Object.keys(c).map(function (t) {
                                        return c[t];
                                    }))
                                );
                            return (
                                (l.orderedModifiers = f.filter(function (t) {
                                    return t.enabled;
                                })),
                                l.orderedModifiers.forEach(function (t) {
                                    var e = t.name,
                                        i = t.options,
                                        n = void 0 === i ? {} : i,
                                        r = t.effect;
                                    if ("function" == typeof r) {
                                        var s = r({
                                            state: l,
                                            name: e,
                                            instance: h,
                                            options: n,
                                        });
                                        u.push(s || function () {});
                                    }
                                }),
                                h.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!c) {
                                var t = l.elements,
                                    e = t.reference,
                                    i = t.popper;
                                if (Q(e, i)) {
                                    (l.rects = {
                                        reference: m(
                                            e,
                                            S(i),
                                            "fixed" === l.options.strategy
                                        ),
                                        popper: y(i),
                                    }),
                                        (l.reset = !1),
                                        (l.placement = l.options.placement),
                                        l.orderedModifiers.forEach(function (
                                            t
                                        ) {
                                            return (l.modifiersData[t.name] =
                                                Object.assign({}, t.data));
                                        });
                                    for (
                                        var n = 0;
                                        n < l.orderedModifiers.length;
                                        n++
                                    )
                                        if (!0 !== l.reset) {
                                            var r = l.orderedModifiers[n],
                                                s = r.fn,
                                                o = r.options,
                                                a = void 0 === o ? {} : o,
                                                u = r.name;
                                            "function" == typeof s &&
                                                (l =
                                                    s({
                                                        state: l,
                                                        options: a,
                                                        name: u,
                                                        instance: h,
                                                    }) || l);
                                        } else (l.reset = !1), (n = -1);
                                }
                            }
                        },
                        update:
                            ((s = function () {
                                return new Promise(function (t) {
                                    h.forceUpdate(), t(l);
                                });
                            }),
                            function () {
                                return (
                                    a ||
                                        (a = new Promise(function (t) {
                                            Promise.resolve().then(function () {
                                                (a = void 0), t(s());
                                            });
                                        })),
                                    a
                                );
                            }),
                        destroy: function () {
                            d(), (c = !0);
                        },
                    };
                if (!Q(t, e)) return h;
                function d() {
                    u.forEach(function (t) {
                        return t();
                    }),
                        (u = []);
                }
                return (
                    h.setOptions(n).then(function (t) {
                        !c && n.onFirstUpdate && n.onFirstUpdate(t);
                    }),
                    h
                );
            };
        }
        var J = { passive: !0 },
            tt = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (t) {
                    var i = t.state,
                        n = t.instance,
                        r = t.options,
                        s = r.scroll,
                        o = void 0 === s || s,
                        a = r.resize,
                        l = void 0 === a || a,
                        u = e(i.elements.popper),
                        c = [].concat(
                            i.scrollParents.reference,
                            i.scrollParents.popper
                        );
                    return (
                        o &&
                            c.forEach(function (t) {
                                t.addEventListener("scroll", n.update, J);
                            }),
                        l && u.addEventListener("resize", n.update, J),
                        function () {
                            o &&
                                c.forEach(function (t) {
                                    t.removeEventListener(
                                        "scroll",
                                        n.update,
                                        J
                                    );
                                }),
                                l &&
                                    u.removeEventListener(
                                        "resize",
                                        n.update,
                                        J
                                    );
                        }
                    );
                },
                data: {},
            },
            et = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function (t) {
                    var e = t.state,
                        i = t.name;
                    e.modifiersData[i] = V({
                        reference: e.rects.reference,
                        element: e.rects.popper,
                        strategy: "absolute",
                        placement: e.placement,
                    });
                },
                data: {},
            },
            it = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function nt(t) {
            var i,
                n = t.popper,
                r = t.popperRect,
                s = t.placement,
                o = t.variation,
                l = t.offsets,
                u = t.position,
                c = t.gpuAcceleration,
                h = t.adaptive,
                d = t.roundOffsets,
                p = t.isFixed,
                v = l.x,
                m = void 0 === v ? 0 : v,
                y = l.y,
                _ = void 0 === y ? 0 : y,
                x = "function" == typeof d ? d({ x: m, y: _ }) : { x: m, y: _ };
            (m = x.x), (_ = x.y);
            var b = l.hasOwnProperty("x"),
                w = l.hasOwnProperty("y"),
                T = O,
                A = E,
                M = window;
            if (h) {
                var P = S(n),
                    D = "clientHeight",
                    z = "clientWidth";
                P === e(n) &&
                    "static" !== g((P = f(n))).position &&
                    "absolute" === u &&
                    ((D = "scrollHeight"), (z = "scrollWidth")),
                    (s === E || ((s === O || s === C) && o === L)) &&
                        ((A = k),
                        (_ -=
                            (p && P === M && M.visualViewport
                                ? M.visualViewport.height
                                : P[D]) - r.height),
                        (_ *= c ? 1 : -1)),
                    (s !== O && ((s !== E && s !== k) || o !== L)) ||
                        ((T = C),
                        (m -=
                            (p && P === M && M.visualViewport
                                ? M.visualViewport.width
                                : P[z]) - r.width),
                        (m *= c ? 1 : -1));
            }
            var I,
                B = Object.assign({ position: u }, h && it),
                Y =
                    !0 === d
                        ? (function (t) {
                              var e = t.x,
                                  i = t.y,
                                  n = window.devicePixelRatio || 1;
                              return {
                                  x: a(e * n) / n || 0,
                                  y: a(i * n) / n || 0,
                              };
                          })({ x: m, y: _ })
                        : { x: m, y: _ };
            return (
                (m = Y.x),
                (_ = Y.y),
                c
                    ? Object.assign(
                          {},
                          B,
                          (((I = {})[A] = w ? "0" : ""),
                          (I[T] = b ? "0" : ""),
                          (I.transform =
                              (M.devicePixelRatio || 1) <= 1
                                  ? "translate(" + m + "px, " + _ + "px)"
                                  : "translate3d(" + m + "px, " + _ + "px, 0)"),
                          I)
                      )
                    : Object.assign(
                          {},
                          B,
                          (((i = {})[A] = w ? _ + "px" : ""),
                          (i[T] = b ? m + "px" : ""),
                          (i.transform = ""),
                          i)
                      )
            );
        }
        var rt = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (t) {
                    var e = t.state,
                        i = t.options,
                        n = i.gpuAcceleration,
                        r = void 0 === n || n,
                        s = i.adaptive,
                        o = void 0 === s || s,
                        a = i.roundOffsets,
                        l = void 0 === a || a,
                        u = {
                            placement: R(e.placement),
                            variation: j(e.placement),
                            popper: e.elements.popper,
                            popperRect: e.rects.popper,
                            gpuAcceleration: r,
                            isFixed: "fixed" === e.options.strategy,
                        };
                    null != e.modifiersData.popperOffsets &&
                        (e.styles.popper = Object.assign(
                            {},
                            e.styles.popper,
                            nt(
                                Object.assign({}, u, {
                                    offsets: e.modifiersData.popperOffsets,
                                    position: e.options.strategy,
                                    adaptive: o,
                                    roundOffsets: l,
                                })
                            )
                        )),
                        null != e.modifiersData.arrow &&
                            (e.styles.arrow = Object.assign(
                                {},
                                e.styles.arrow,
                                nt(
                                    Object.assign({}, u, {
                                        offsets: e.modifiersData.arrow,
                                        position: "absolute",
                                        adaptive: !1,
                                        roundOffsets: l,
                                    })
                                )
                            )),
                        (e.attributes.popper = Object.assign(
                            {},
                            e.attributes.popper,
                            { "data-popper-placement": e.placement }
                        ));
                },
                data: {},
            },
            st = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function (t) {
                    var e = t.state;
                    Object.keys(e.elements).forEach(function (t) {
                        var i = e.styles[t] || {},
                            r = e.attributes[t] || {},
                            s = e.elements[t];
                        n(s) &&
                            d(s) &&
                            (Object.assign(s.style, i),
                            Object.keys(r).forEach(function (t) {
                                var e = r[t];
                                !1 === e
                                    ? s.removeAttribute(t)
                                    : s.setAttribute(t, !0 === e ? "" : e);
                            }));
                    });
                },
                effect: function (t) {
                    var e = t.state,
                        i = {
                            popper: {
                                position: e.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0",
                            },
                            arrow: { position: "absolute" },
                            reference: {},
                        };
                    return (
                        Object.assign(e.elements.popper.style, i.popper),
                        (e.styles = i),
                        e.elements.arrow &&
                            Object.assign(e.elements.arrow.style, i.arrow),
                        function () {
                            Object.keys(e.elements).forEach(function (t) {
                                var r = e.elements[t],
                                    s = e.attributes[t] || {},
                                    o = Object.keys(
                                        e.styles.hasOwnProperty(t)
                                            ? e.styles[t]
                                            : i[t]
                                    ).reduce(function (t, e) {
                                        return (t[e] = ""), t;
                                    }, {});
                                n(r) &&
                                    d(r) &&
                                    (Object.assign(r.style, o),
                                    Object.keys(s).forEach(function (t) {
                                        r.removeAttribute(t);
                                    }));
                            });
                        }
                    );
                },
                requires: ["computeStyles"],
            },
            ot = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function (t) {
                    var e = t.state,
                        i = t.options,
                        n = t.name,
                        r = i.offset,
                        s = void 0 === r ? [0, 0] : r,
                        o = B.reduce(function (t, i) {
                            return (
                                (t[i] = (function (t, e, i) {
                                    var n = R(t),
                                        r = [O, E].indexOf(n) >= 0 ? -1 : 1,
                                        s =
                                            "function" == typeof i
                                                ? i(
                                                      Object.assign({}, e, {
                                                          placement: t,
                                                      })
                                                  )
                                                : i,
                                        o = s[0],
                                        a = s[1];
                                    return (
                                        (o = o || 0),
                                        (a = (a || 0) * r),
                                        [O, C].indexOf(n) >= 0
                                            ? { x: a, y: o }
                                            : { x: o, y: a }
                                    );
                                })(i, e.rects, s)),
                                t
                            );
                        }, {}),
                        a = o[e.placement],
                        l = a.x,
                        u = a.y;
                    null != e.modifiersData.popperOffsets &&
                        ((e.modifiersData.popperOffsets.x += l),
                        (e.modifiersData.popperOffsets.y += u)),
                        (e.modifiersData[n] = o);
                },
            },
            at = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function lt(t) {
            return t.replace(/left|right|bottom|top/g, function (t) {
                return at[t];
            });
        }
        var ut = { start: "end", end: "start" };
        function ct(t) {
            return t.replace(/start|end/g, function (t) {
                return ut[t];
            });
        }
        function ht(t, e) {
            void 0 === e && (e = {});
            var i = e,
                n = i.placement,
                r = i.boundary,
                s = i.rootBoundary,
                o = i.padding,
                a = i.flipVariations,
                l = i.allowedAutoPlacements,
                u = void 0 === l ? B : l,
                c = j(n),
                h = c
                    ? a
                        ? I
                        : I.filter(function (t) {
                              return j(t) === c;
                          })
                    : M,
                d = h.filter(function (t) {
                    return u.indexOf(t) >= 0;
                });
            0 === d.length && (d = h);
            var f = d.reduce(function (e, i) {
                return (
                    (e[i] = Z(t, {
                        placement: i,
                        boundary: r,
                        rootBoundary: s,
                        padding: o,
                    })[R(i)]),
                    e
                );
            }, {});
            return Object.keys(f).sort(function (t, e) {
                return f[t] - f[e];
            });
        }
        var dt = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name;
                if (!e.modifiersData[n]._skip) {
                    for (
                        var r = i.mainAxis,
                            s = void 0 === r || r,
                            o = i.altAxis,
                            a = void 0 === o || o,
                            l = i.fallbackPlacements,
                            u = i.padding,
                            c = i.boundary,
                            h = i.rootBoundary,
                            d = i.altBoundary,
                            f = i.flipVariations,
                            p = void 0 === f || f,
                            g = i.allowedAutoPlacements,
                            v = e.options.placement,
                            m = R(v),
                            y =
                                l ||
                                (m !== v && p
                                    ? (function (t) {
                                          if (R(t) === A) return [];
                                          var e = lt(t);
                                          return [ct(t), e, ct(e)];
                                      })(v)
                                    : [lt(v)]),
                            _ = [v].concat(y).reduce(function (t, i) {
                                return t.concat(
                                    R(i) === A
                                        ? ht(e, {
                                              placement: i,
                                              boundary: c,
                                              rootBoundary: h,
                                              padding: u,
                                              flipVariations: p,
                                              allowedAutoPlacements: g,
                                          })
                                        : i
                                );
                            }, []),
                            x = e.rects.reference,
                            b = e.rects.popper,
                            w = new Map(),
                            T = !0,
                            S = _[0],
                            M = 0;
                        M < _.length;
                        M++
                    ) {
                        var L = _[M],
                            D = R(L),
                            z = j(L) === P,
                            I = [E, k].indexOf(D) >= 0,
                            B = I ? "width" : "height",
                            Y = Z(e, {
                                placement: L,
                                boundary: c,
                                rootBoundary: h,
                                altBoundary: d,
                                padding: u,
                            }),
                            X = I ? (z ? C : O) : z ? k : E;
                        x[B] > b[B] && (X = lt(X));
                        var N = lt(X),
                            q = [];
                        if (
                            (s && q.push(Y[D] <= 0),
                            a && q.push(Y[X] <= 0, Y[N] <= 0),
                            q.every(function (t) {
                                return t;
                            }))
                        ) {
                            (S = L), (T = !1);
                            break;
                        }
                        w.set(L, q);
                    }
                    if (T)
                        for (
                            var W = function (t) {
                                    var e = _.find(function (e) {
                                        var i = w.get(e);
                                        if (i)
                                            return i
                                                .slice(0, t)
                                                .every(function (t) {
                                                    return t;
                                                });
                                    });
                                    if (e) return (S = e), "break";
                                },
                                F = p ? 3 : 1;
                            F > 0 && "break" !== W(F);
                            F--
                        );
                    e.placement !== S &&
                        ((e.modifiersData[n]._skip = !0),
                        (e.placement = S),
                        (e.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        };
        function ft(t, e, i) {
            return s(t, o(e, i));
        }
        var pt = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var e = t.state,
                        i = t.options,
                        n = t.name,
                        r = i.mainAxis,
                        a = void 0 === r || r,
                        l = i.altAxis,
                        u = void 0 !== l && l,
                        c = i.boundary,
                        h = i.rootBoundary,
                        d = i.altBoundary,
                        f = i.padding,
                        p = i.tether,
                        g = void 0 === p || p,
                        v = i.tetherOffset,
                        m = void 0 === v ? 0 : v,
                        _ = Z(e, {
                            boundary: c,
                            rootBoundary: h,
                            padding: f,
                            altBoundary: d,
                        }),
                        x = R(e.placement),
                        b = j(e.placement),
                        w = !b,
                        T = H(x),
                        A = "x" === T ? "y" : "x",
                        M = e.modifiersData.popperOffsets,
                        L = e.rects.reference,
                        D = e.rects.popper,
                        z =
                            "function" == typeof m
                                ? m(
                                      Object.assign({}, e.rects, {
                                          placement: e.placement,
                                      })
                                  )
                                : m,
                        I =
                            "number" == typeof z
                                ? { mainAxis: z, altAxis: z }
                                : Object.assign({ mainAxis: 0, altAxis: 0 }, z),
                        B = e.modifiersData.offset
                            ? e.modifiersData.offset[e.placement]
                            : null,
                        Y = { x: 0, y: 0 };
                    if (M) {
                        if (a) {
                            var X,
                                N = "y" === T ? E : O,
                                q = "y" === T ? k : C,
                                W = "y" === T ? "height" : "width",
                                F = M[T],
                                V = F + _[N],
                                U = F - _[q],
                                G = g ? -D[W] / 2 : 0,
                                $ = b === P ? L[W] : D[W],
                                Q = b === P ? -D[W] : -L[W],
                                K = e.elements.arrow,
                                J = g && K ? y(K) : { width: 0, height: 0 },
                                tt = e.modifiersData["arrow#persistent"]
                                    ? e.modifiersData["arrow#persistent"]
                                          .padding
                                    : { top: 0, right: 0, bottom: 0, left: 0 },
                                et = tt[N],
                                it = tt[q],
                                nt = ft(0, L[W], J[W]),
                                rt = w
                                    ? L[W] / 2 - G - nt - et - I.mainAxis
                                    : $ - nt - et - I.mainAxis,
                                st = w
                                    ? -L[W] / 2 + G + nt + it + I.mainAxis
                                    : Q + nt + it + I.mainAxis,
                                ot = e.elements.arrow && S(e.elements.arrow),
                                at = ot
                                    ? "y" === T
                                        ? ot.clientTop || 0
                                        : ot.clientLeft || 0
                                    : 0,
                                lt =
                                    null != (X = null == B ? void 0 : B[T])
                                        ? X
                                        : 0,
                                ut = F + st - lt,
                                ct = ft(
                                    g ? o(V, F + rt - lt - at) : V,
                                    F,
                                    g ? s(U, ut) : U
                                );
                            (M[T] = ct), (Y[T] = ct - F);
                        }
                        if (u) {
                            var ht,
                                dt = "x" === T ? E : O,
                                pt = "x" === T ? k : C,
                                gt = M[A],
                                vt = "y" === A ? "height" : "width",
                                mt = gt + _[dt],
                                yt = gt - _[pt],
                                _t = -1 !== [E, O].indexOf(x),
                                xt =
                                    null != (ht = null == B ? void 0 : B[A])
                                        ? ht
                                        : 0,
                                bt = _t
                                    ? mt
                                    : gt - L[vt] - D[vt] - xt + I.altAxis,
                                wt = _t
                                    ? gt + L[vt] + D[vt] - xt - I.altAxis
                                    : yt,
                                Tt =
                                    g && _t
                                        ? (function (t, e, i) {
                                              var n = ft(t, e, i);
                                              return n > i ? i : n;
                                          })(bt, gt, wt)
                                        : ft(g ? bt : mt, gt, g ? wt : yt);
                            (M[A] = Tt), (Y[A] = Tt - gt);
                        }
                        e.modifiersData[n] = Y;
                    }
                },
                requiresIfExists: ["offset"],
            },
            gt = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (t) {
                    var e,
                        i = t.state,
                        n = t.name,
                        r = t.options,
                        s = i.elements.arrow,
                        o = i.modifiersData.popperOffsets,
                        a = R(i.placement),
                        l = H(a),
                        u = [O, C].indexOf(a) >= 0 ? "height" : "width";
                    if (s && o) {
                        var c = (function (t, e) {
                                return U(
                                    "number" !=
                                        typeof (t =
                                            "function" == typeof t
                                                ? t(
                                                      Object.assign(
                                                          {},
                                                          e.rects,
                                                          {
                                                              placement:
                                                                  e.placement,
                                                          }
                                                      )
                                                  )
                                                : t)
                                        ? t
                                        : G(t, M)
                                );
                            })(r.padding, i),
                            h = y(s),
                            d = "y" === l ? E : O,
                            f = "y" === l ? k : C,
                            p =
                                i.rects.reference[u] +
                                i.rects.reference[l] -
                                o[l] -
                                i.rects.popper[u],
                            g = o[l] - i.rects.reference[l],
                            v = S(s),
                            m = v
                                ? "y" === l
                                    ? v.clientHeight || 0
                                    : v.clientWidth || 0
                                : 0,
                            _ = p / 2 - g / 2,
                            x = c[d],
                            b = m - h[u] - c[f],
                            w = m / 2 - h[u] / 2 + _,
                            T = ft(x, w, b),
                            A = l;
                        i.modifiersData[n] =
                            (((e = {})[A] = T), (e.centerOffset = T - w), e);
                    }
                },
                effect: function (t) {
                    var e = t.state,
                        i = t.options.element,
                        n = void 0 === i ? "[data-popper-arrow]" : i;
                    null != n &&
                        ("string" != typeof n ||
                            (n = e.elements.popper.querySelector(n))) &&
                        N(e.elements.popper, n) &&
                        (e.elements.arrow = n);
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"],
            };
        function vt(t, e, i) {
            return (
                void 0 === i && (i = { x: 0, y: 0 }),
                {
                    top: t.top - e.height - i.y,
                    right: t.right - e.width + i.x,
                    bottom: t.bottom - e.height + i.y,
                    left: t.left - e.width - i.x,
                }
            );
        }
        function mt(t) {
            return [E, C, k, O].some(function (e) {
                return t[e] >= 0;
            });
        }
        var yt = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function (t) {
                    var e = t.state,
                        i = t.name,
                        n = e.rects.reference,
                        r = e.rects.popper,
                        s = e.modifiersData.preventOverflow,
                        o = Z(e, { elementContext: "reference" }),
                        a = Z(e, { altBoundary: !0 }),
                        l = vt(o, n),
                        u = vt(a, r, s),
                        c = mt(l),
                        h = mt(u);
                    (e.modifiersData[i] = {
                        referenceClippingOffsets: l,
                        popperEscapeOffsets: u,
                        isReferenceHidden: c,
                        hasPopperEscaped: h,
                    }),
                        (e.attributes.popper = Object.assign(
                            {},
                            e.attributes.popper,
                            {
                                "data-popper-reference-hidden": c,
                                "data-popper-escaped": h,
                            }
                        ));
                },
            },
            _t = K({ defaultModifiers: [tt, et, rt, st] }),
            xt = [tt, et, rt, st, ot, dt, pt, gt, yt],
            bt = K({ defaultModifiers: xt });
        (t.applyStyles = st),
            (t.arrow = gt),
            (t.computeStyles = rt),
            (t.createPopper = bt),
            (t.createPopperLite = _t),
            (t.defaultModifiers = xt),
            (t.detectOverflow = Z),
            (t.eventListeners = tt),
            (t.flip = dt),
            (t.hide = yt),
            (t.offset = ot),
            (t.popperGenerator = K),
            (t.popperOffsets = et),
            (t.preventOverflow = pt),
            Object.defineProperty(t, "__esModule", { value: !0 });
    });
var VanillaTilt = (function () {
    "use strict";
    class t {
        constructor(e, i = {}) {
            if (!(e instanceof Node))
                throw (
                    "Can't initialize VanillaTilt because " +
                    e +
                    " is not a Node."
                );
            (this.width = null),
                (this.height = null),
                (this.clientWidth = null),
                (this.clientHeight = null),
                (this.left = null),
                (this.top = null),
                (this.gammazero = null),
                (this.betazero = null),
                (this.lastgammazero = null),
                (this.lastbetazero = null),
                (this.transitionTimeout = null),
                (this.updateCall = null),
                (this.event = null),
                (this.updateBind = this.update.bind(this)),
                (this.resetBind = this.reset.bind(this)),
                (this.element = e),
                (this.settings = this.extendSettings(i)),
                (this.reverse = this.settings.reverse ? -1 : 1),
                (this.resetToStart = t.isSettingTrue(
                    this.settings["reset-to-start"]
                )),
                (this.glare = t.isSettingTrue(this.settings.glare)),
                (this.glarePrerender = t.isSettingTrue(
                    this.settings["glare-prerender"]
                )),
                (this.fullPageListening = t.isSettingTrue(
                    this.settings["full-page-listening"]
                )),
                (this.gyroscope = t.isSettingTrue(this.settings.gyroscope)),
                (this.gyroscopeSamples = this.settings.gyroscopeSamples),
                (this.elementListener = this.getElementListener()),
                this.glare && this.prepareGlare(),
                this.fullPageListening && this.updateClientSize(),
                this.addEventListeners(),
                this.reset(),
                !1 === this.resetToStart &&
                    ((this.settings.startX = 0), (this.settings.startY = 0));
        }
        static isSettingTrue(t) {
            return "" === t || !0 === t || 1 === t;
        }
        getElementListener() {
            if (this.fullPageListening) return window.document;
            if ("string" == typeof this.settings["mouse-event-element"]) {
                const t = document.querySelector(
                    this.settings["mouse-event-element"]
                );
                if (t) return t;
            }
            return this.settings["mouse-event-element"] instanceof Node
                ? this.settings["mouse-event-element"]
                : this.element;
        }
        addEventListeners() {
            (this.onMouseEnterBind = this.onMouseEnter.bind(this)),
                (this.onMouseMoveBind = this.onMouseMove.bind(this)),
                (this.onMouseLeaveBind = this.onMouseLeave.bind(this)),
                (this.onWindowResizeBind = this.onWindowResize.bind(this)),
                (this.onDeviceOrientationBind =
                    this.onDeviceOrientation.bind(this)),
                this.elementListener.addEventListener(
                    "mouseenter",
                    this.onMouseEnterBind
                ),
                this.elementListener.addEventListener(
                    "mouseleave",
                    this.onMouseLeaveBind
                ),
                this.elementListener.addEventListener(
                    "mousemove",
                    this.onMouseMoveBind
                ),
                (this.glare || this.fullPageListening) &&
                    window.addEventListener("resize", this.onWindowResizeBind),
                this.gyroscope &&
                    window.addEventListener(
                        "deviceorientation",
                        this.onDeviceOrientationBind
                    );
        }
        removeEventListeners() {
            this.elementListener.removeEventListener(
                "mouseenter",
                this.onMouseEnterBind
            ),
                this.elementListener.removeEventListener(
                    "mouseleave",
                    this.onMouseLeaveBind
                ),
                this.elementListener.removeEventListener(
                    "mousemove",
                    this.onMouseMoveBind
                ),
                this.gyroscope &&
                    window.removeEventListener(
                        "deviceorientation",
                        this.onDeviceOrientationBind
                    ),
                (this.glare || this.fullPageListening) &&
                    window.removeEventListener(
                        "resize",
                        this.onWindowResizeBind
                    );
        }
        destroy() {
            clearTimeout(this.transitionTimeout),
                null !== this.updateCall &&
                    cancelAnimationFrame(this.updateCall),
                this.reset(),
                this.removeEventListeners(),
                (this.element.vanillaTilt = null),
                delete this.element.vanillaTilt,
                (this.element = null);
        }
        onDeviceOrientation(t) {
            if (null === t.gamma || null === t.beta) return;
            this.updateElementPosition(),
                this.gyroscopeSamples > 0 &&
                    ((this.lastgammazero = this.gammazero),
                    (this.lastbetazero = this.betazero),
                    null === this.gammazero
                        ? ((this.gammazero = t.gamma), (this.betazero = t.beta))
                        : ((this.gammazero =
                              (t.gamma + this.lastgammazero) / 2),
                          (this.betazero = (t.beta + this.lastbetazero) / 2)),
                    (this.gyroscopeSamples -= 1));
            const e =
                    this.settings.gyroscopeMaxAngleX -
                    this.settings.gyroscopeMinAngleX,
                i =
                    this.settings.gyroscopeMaxAngleY -
                    this.settings.gyroscopeMinAngleY,
                n = e / this.width,
                r = i / this.height,
                s =
                    (t.gamma -
                        (this.settings.gyroscopeMinAngleX + this.gammazero)) /
                    n,
                o =
                    (t.beta -
                        (this.settings.gyroscopeMinAngleY + this.betazero)) /
                    r;
            null !== this.updateCall && cancelAnimationFrame(this.updateCall),
                (this.event = {
                    clientX: s + this.left,
                    clientY: o + this.top,
                }),
                (this.updateCall = requestAnimationFrame(this.updateBind));
        }
        onMouseEnter() {
            this.updateElementPosition(),
                (this.element.style.willChange = "transform"),
                this.setTransition();
        }
        onMouseMove(t) {
            null !== this.updateCall && cancelAnimationFrame(this.updateCall),
                (this.event = t),
                (this.updateCall = requestAnimationFrame(this.updateBind));
        }
        onMouseLeave() {
            this.setTransition(),
                this.settings.reset && requestAnimationFrame(this.resetBind);
        }
        reset() {
            this.onMouseEnter(),
                this.fullPageListening
                    ? (this.event = {
                          clientX:
                              ((this.settings.startX + this.settings.max) /
                                  (2 * this.settings.max)) *
                              this.clientWidth,
                          clientY:
                              ((this.settings.startY + this.settings.max) /
                                  (2 * this.settings.max)) *
                              this.clientHeight,
                      })
                    : (this.event = {
                          clientX:
                              this.left +
                              ((this.settings.startX + this.settings.max) /
                                  (2 * this.settings.max)) *
                                  this.width,
                          clientY:
                              this.top +
                              ((this.settings.startY + this.settings.max) /
                                  (2 * this.settings.max)) *
                                  this.height,
                      });
            let t = this.settings.scale;
            (this.settings.scale = 1),
                this.update(),
                (this.settings.scale = t),
                this.resetGlare();
        }
        resetGlare() {
            this.glare &&
                ((this.glareElement.style.transform =
                    "rotate(180deg) translate(-50%, -50%)"),
                (this.glareElement.style.opacity = "0"));
        }
        getValues() {
            let t, e;
            return (
                this.fullPageListening
                    ? ((t = this.event.clientX / this.clientWidth),
                      (e = this.event.clientY / this.clientHeight))
                    : ((t = (this.event.clientX - this.left) / this.width),
                      (e = (this.event.clientY - this.top) / this.height)),
                (t = Math.min(Math.max(t, 0), 1)),
                (e = Math.min(Math.max(e, 0), 1)),
                {
                    tiltX: (
                        this.reverse *
                        (this.settings.max - t * this.settings.max * 2)
                    ).toFixed(2),
                    tiltY: (
                        this.reverse *
                        (e * this.settings.max * 2 - this.settings.max)
                    ).toFixed(2),
                    percentageX: 100 * t,
                    percentageY: 100 * e,
                    angle:
                        Math.atan2(
                            this.event.clientX - (this.left + this.width / 2),
                            -(this.event.clientY - (this.top + this.height / 2))
                        ) *
                        (180 / Math.PI),
                }
            );
        }
        updateElementPosition() {
            let t = this.element.getBoundingClientRect();
            (this.width = this.element.offsetWidth),
                (this.height = this.element.offsetHeight),
                (this.left = t.left),
                (this.top = t.top);
        }
        update() {
            let t = this.getValues();
            (this.element.style.transform =
                "perspective(" +
                this.settings.perspective +
                "px) rotateX(" +
                ("x" === this.settings.axis ? 0 : t.tiltY) +
                "deg) rotateY(" +
                ("y" === this.settings.axis ? 0 : t.tiltX) +
                "deg) scale3d(" +
                this.settings.scale +
                ", " +
                this.settings.scale +
                ", " +
                this.settings.scale +
                ")"),
                this.glare &&
                    ((this.glareElement.style.transform = `rotate(${t.angle}deg) translate(-50%, -50%)`),
                    (this.glareElement.style.opacity =
                        "" +
                        (t.percentageY * this.settings["max-glare"]) / 100)),
                this.element.dispatchEvent(
                    new CustomEvent("tiltChange", { detail: t })
                ),
                (this.updateCall = null);
        }
        prepareGlare() {
            if (!this.glarePrerender) {
                const t = document.createElement("div");
                t.classList.add("js-tilt-glare");
                const e = document.createElement("div");
                e.classList.add("js-tilt-glare-inner"),
                    t.appendChild(e),
                    this.element.appendChild(t);
            }
            (this.glareElementWrapper =
                this.element.querySelector(".js-tilt-glare")),
                (this.glareElement = this.element.querySelector(
                    ".js-tilt-glare-inner"
                )),
                this.glarePrerender ||
                    (Object.assign(this.glareElementWrapper.style, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        "pointer-events": "none",
                        "border-radius": "inherit",
                    }),
                    Object.assign(this.glareElement.style, {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        "pointer-events": "none",
                        "background-image":
                            "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                        transform: "rotate(180deg) translate(-50%, -50%)",
                        "transform-origin": "0% 0%",
                        opacity: "0",
                    }),
                    this.updateGlareSize());
        }
        updateGlareSize() {
            if (this.glare) {
                const t =
                    2 *
                    (this.element.offsetWidth > this.element.offsetHeight
                        ? this.element.offsetWidth
                        : this.element.offsetHeight);
                Object.assign(this.glareElement.style, {
                    width: `${t}px`,
                    height: `${t}px`,
                });
            }
        }
        updateClientSize() {
            (this.clientWidth =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth),
                (this.clientHeight =
                    window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight);
        }
        onWindowResize() {
            this.updateGlareSize(), this.updateClientSize();
        }
        setTransition() {
            clearTimeout(this.transitionTimeout),
                (this.element.style.transition =
                    this.settings.speed + "ms " + this.settings.easing),
                this.glare &&
                    (this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`),
                (this.transitionTimeout = setTimeout(() => {
                    (this.element.style.transition = ""),
                        this.glare && (this.glareElement.style.transition = "");
                }, this.settings.speed));
        }
        extendSettings(t) {
            let e = {
                    reverse: !1,
                    max: 15,
                    startX: 0,
                    startY: 0,
                    perspective: 1e3,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                    scale: 1,
                    speed: 300,
                    transition: !0,
                    axis: null,
                    glare: !1,
                    "max-glare": 1,
                    "glare-prerender": !1,
                    "full-page-listening": !1,
                    "mouse-event-element": null,
                    reset: !0,
                    "reset-to-start": !0,
                    gyroscope: !0,
                    gyroscopeMinAngleX: -45,
                    gyroscopeMaxAngleX: 45,
                    gyroscopeMinAngleY: -45,
                    gyroscopeMaxAngleY: 45,
                    gyroscopeSamples: 10,
                },
                i = {};
            for (var n in e)
                if (n in t) i[n] = t[n];
                else if (this.element.hasAttribute("data-tilt-" + n)) {
                    let t = this.element.getAttribute("data-tilt-" + n);
                    try {
                        i[n] = JSON.parse(t);
                    } catch (e) {
                        i[n] = t;
                    }
                } else i[n] = e[n];
            return i;
        }
        static init(e, i) {
            e instanceof Node && (e = [e]),
                e instanceof NodeList && (e = [].slice.call(e)),
                e instanceof Array &&
                    e.forEach((e) => {
                        "vanillaTilt" in e || (e.vanillaTilt = new t(e, i));
                    });
        }
    }
    return (
        "undefined" != typeof document &&
            ((window.VanillaTilt = t),
            t.init(document.querySelectorAll("[data-tilt]"))),
        t
    );
})();
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : ((t = t || self).GLightbox = e());
})(this, function () {
    "use strict";
    function t(e) {
        return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                  })(e);
    }
    function e(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
        }
    }
    function n(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    var r = Date.now();
    function s() {
        var t = {},
            e = !0,
            i = 0,
            n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
            ((e = arguments[0]), i++);
        for (
            var r = function (i) {
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) &&
                        (e &&
                        "[object Object]" ===
                            Object.prototype.toString.call(i[n])
                            ? (t[n] = s(!0, t[n], i[n]))
                            : (t[n] = i[n]));
            };
            i < n;
            i++
        ) {
            var o = arguments[i];
            r(o);
        }
        return t;
    }
    function o(t, e) {
        if (
            ((E(t) || t === window || t === document) && (t = [t]),
            C(t) || O(t) || (t = [t]),
            0 != P(t))
        )
            if (C(t) && !O(t))
                for (
                    var i = t.length, n = 0;
                    n < i && !1 !== e.call(t[n], t[n], n, t);
                    n++
                );
            else if (O(t))
                for (var r in t)
                    if (M(t, r) && !1 === e.call(t[r], t[r], r, t)) break;
    }
    function a(t) {
        var e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
            i =
                arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
            n = (t[r] = t[r] || []),
            s = { all: n, evt: null, found: null };
        return (
            e &&
                i &&
                P(n) > 0 &&
                o(n, function (t, n) {
                    if (t.eventName == e && t.fn.toString() == i.toString())
                        return (s.found = !0), (s.evt = n), !1;
                }),
            s
        );
    }
    function l(t) {
        var e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
            i = e.onElement,
            n = e.withCallback,
            r = e.avoidDuplicate,
            s = void 0 === r || r,
            l = e.once,
            u = void 0 !== l && l,
            c = e.useCapture,
            h = void 0 !== c && c,
            d = arguments.length > 2 ? arguments[2] : void 0,
            f = i || [];
        function p(t) {
            T(n) && n.call(d, t, this), u && p.destroy();
        }
        return (
            S(f) && (f = document.querySelectorAll(f)),
            (p.destroy = function () {
                o(f, function (e) {
                    var i = a(e, t, p);
                    i.found && i.all.splice(i.evt, 1),
                        e.removeEventListener && e.removeEventListener(t, p, h);
                });
            }),
            o(f, function (e) {
                var i = a(e, t, p);
                ((e.addEventListener && s && !i.found) || !s) &&
                    (e.addEventListener(t, p, h),
                    i.all.push({ eventName: t, fn: p }));
            }),
            p
        );
    }
    function u(t, e) {
        o(e.split(" "), function (e) {
            return t.classList.add(e);
        });
    }
    function c(t, e) {
        o(e.split(" "), function (e) {
            return t.classList.remove(e);
        });
    }
    function h(t, e) {
        return t.classList.contains(e);
    }
    function d(t, e) {
        for (; t !== document.body; ) {
            if (!(t = t.parentElement)) return !1;
            if (
                "function" == typeof t.matches
                    ? t.matches(e)
                    : t.msMatchesSelector(e)
            )
                return t;
        }
    }
    function f(t) {
        var e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!t || "" === e) return !1;
        if ("none" === e) return T(i) && i(), !1;
        var n = _(),
            r = e.split(" ");
        o(r, function (e) {
            u(t, "g" + e);
        }),
            l(n, {
                onElement: t,
                avoidDuplicate: !1,
                once: !0,
                withCallback: function (t, e) {
                    o(r, function (t) {
                        c(e, "g" + t);
                    }),
                        T(i) && i();
                },
            });
    }
    function p(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === e)
            return (
                (t.style.webkitTransform = ""),
                (t.style.MozTransform = ""),
                (t.style.msTransform = ""),
                (t.style.OTransform = ""),
                (t.style.transform = ""),
                !1
            );
        (t.style.webkitTransform = e),
            (t.style.MozTransform = e),
            (t.style.msTransform = e),
            (t.style.OTransform = e),
            (t.style.transform = e);
    }
    function g(t) {
        t.style.display = "block";
    }
    function v(t) {
        t.style.display = "none";
    }
    function m(t) {
        var e = document.createDocumentFragment(),
            i = document.createElement("div");
        for (i.innerHTML = t; i.firstChild; ) e.appendChild(i.firstChild);
        return e;
    }
    function y() {
        return {
            width:
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
            height:
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
        };
    }
    function _() {
        var t,
            e = document.createElement("fakeelement"),
            i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd",
            };
        for (t in i) if (void 0 !== e.style[t]) return i[t];
    }
    function x(t, e, i, n) {
        if (t()) e();
        else {
            var r;
            i || (i = 100);
            var s = setInterval(function () {
                t() && (clearInterval(s), r && clearTimeout(r), e());
            }, i);
            n &&
                (r = setTimeout(function () {
                    clearInterval(s);
                }, n));
        }
    }
    function b(t, e, i) {
        if (A(t)) console.error("Inject assets error");
        else if ((T(e) && ((i = e), (e = !1)), S(e) && e in window))
            T(i) && i();
        else {
            var n;
            if (-1 !== t.indexOf(".css")) {
                if (
                    (n = document.querySelectorAll('link[href="' + t + '"]')) &&
                    n.length > 0
                )
                    return void (T(i) && i());
                var r = document.getElementsByTagName("head")[0],
                    s = r.querySelectorAll('link[rel="stylesheet"]'),
                    o = document.createElement("link");
                return (
                    (o.rel = "stylesheet"),
                    (o.type = "text/css"),
                    (o.href = t),
                    (o.media = "all"),
                    s ? r.insertBefore(o, s[0]) : r.appendChild(o),
                    void (T(i) && i())
                );
            }
            if (
                (n = document.querySelectorAll('script[src="' + t + '"]')) &&
                n.length > 0
            ) {
                if (T(i)) {
                    if (S(e))
                        return (
                            x(
                                function () {
                                    return void 0 !== window[e];
                                },
                                function () {
                                    i();
                                }
                            ),
                            !1
                        );
                    i();
                }
            } else {
                var a = document.createElement("script");
                (a.type = "text/javascript"),
                    (a.src = t),
                    (a.onload = function () {
                        if (T(i)) {
                            if (S(e))
                                return (
                                    x(
                                        function () {
                                            return void 0 !== window[e];
                                        },
                                        function () {
                                            i();
                                        }
                                    ),
                                    !1
                                );
                            i();
                        }
                    }),
                    document.body.appendChild(a);
            }
        }
    }
    function w() {
        return (
            "navigator" in window &&
            window.navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
            )
        );
    }
    function T(t) {
        return "function" == typeof t;
    }
    function S(t) {
        return "string" == typeof t;
    }
    function E(t) {
        return !(!t || !t.nodeType || 1 != t.nodeType);
    }
    function k(t) {
        return Array.isArray(t);
    }
    function C(t) {
        return t && t.length && isFinite(t.length);
    }
    function O(e) {
        return "object" === t(e) && null != e && !T(e) && !k(e);
    }
    function A(t) {
        return null == t;
    }
    function M(t, e) {
        return null !== t && hasOwnProperty.call(t, e);
    }
    function P(t) {
        if (O(t)) {
            if (t.keys) return t.keys().length;
            var e = 0;
            for (var i in t) M(t, i) && e++;
            return e;
        }
        return t.length;
    }
    function L(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
    }
    function D() {
        var t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : -1,
            e = document.querySelectorAll(
                ".gbtn[data-taborder]:not(.disabled)"
            );
        if (!e.length) return !1;
        if (1 == e.length) return e[0];
        "string" == typeof t && (t = parseInt(t));
        var i = [];
        o(e, function (t) {
            i.push(t.getAttribute("data-taborder"));
        });
        var n = Math.max.apply(
                Math,
                i.map(function (t) {
                    return parseInt(t);
                })
            ),
            r = t < 0 ? 1 : t + 1;
        r > n && (r = "1");
        var s = i.filter(function (t) {
                return t >= parseInt(r);
            }),
            a = s.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(a, '"]'));
    }
    function z(t) {
        if (t.events.hasOwnProperty("keyboard")) return !1;
        t.events.keyboard = l("keydown", {
            onElement: window,
            withCallback: function (e, i) {
                var n = (e = e || window.event).keyCode;
                if (9 == n) {
                    var r = document.querySelector(".gbtn.focused");
                    if (!r) {
                        var s =
                            !(
                                !document.activeElement ||
                                !document.activeElement.nodeName
                            ) &&
                            document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == s || "textarea" == s || "button" == s)
                            return;
                    }
                    e.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!r) {
                        var a = D();
                        return void (a && (a.focus(), u(a, "focused")));
                    }
                    var l = D(r.getAttribute("data-taborder"));
                    c(r, "focused"), l && (l.focus(), u(l, "focused"));
                }
                39 == n && t.nextSlide(),
                    37 == n && t.prevSlide(),
                    27 == n && t.close();
            },
        });
    }
    function I(t) {
        return Math.sqrt(t.x * t.x + t.y * t.y);
    }
    var B = (function () {
        function t(i) {
            e(this, t), (this.handlers = []), (this.el = i);
        }
        return (
            n(t, [
                {
                    key: "add",
                    value: function (t) {
                        this.handlers.push(t);
                    },
                },
                {
                    key: "del",
                    value: function (t) {
                        t || (this.handlers = []);
                        for (var e = this.handlers.length; e >= 0; e--)
                            this.handlers[e] === t &&
                                this.handlers.splice(e, 1);
                    },
                },
                {
                    key: "dispatch",
                    value: function () {
                        for (var t = 0, e = this.handlers.length; t < e; t++) {
                            var i = this.handlers[t];
                            "function" == typeof i &&
                                i.apply(this.el, arguments);
                        }
                    },
                },
            ]),
            t
        );
    })();
    function Y(t, e) {
        var i = new B(t);
        return i.add(e), i;
    }
    var X = (function () {
        function t(i, n) {
            e(this, t),
                (this.element =
                    "string" == typeof i ? document.querySelector(i) : i),
                (this.start = this.start.bind(this)),
                (this.move = this.move.bind(this)),
                (this.end = this.end.bind(this)),
                (this.cancel = this.cancel.bind(this)),
                this.element.addEventListener("touchstart", this.start, !1),
                this.element.addEventListener("touchmove", this.move, !1),
                this.element.addEventListener("touchend", this.end, !1),
                this.element.addEventListener("touchcancel", this.cancel, !1),
                (this.preV = { x: null, y: null }),
                (this.pinchStartLen = null),
                (this.zoom = 1),
                (this.isDoubleTap = !1);
            var r = function () {};
            (this.rotate = Y(this.element, n.rotate || r)),
                (this.touchStart = Y(this.element, n.touchStart || r)),
                (this.multipointStart = Y(
                    this.element,
                    n.multipointStart || r
                )),
                (this.multipointEnd = Y(this.element, n.multipointEnd || r)),
                (this.pinch = Y(this.element, n.pinch || r)),
                (this.swipe = Y(this.element, n.swipe || r)),
                (this.tap = Y(this.element, n.tap || r)),
                (this.doubleTap = Y(this.element, n.doubleTap || r)),
                (this.longTap = Y(this.element, n.longTap || r)),
                (this.singleTap = Y(this.element, n.singleTap || r)),
                (this.pressMove = Y(this.element, n.pressMove || r)),
                (this.twoFingerPressMove = Y(
                    this.element,
                    n.twoFingerPressMove || r
                )),
                (this.touchMove = Y(this.element, n.touchMove || r)),
                (this.touchEnd = Y(this.element, n.touchEnd || r)),
                (this.touchCancel = Y(this.element, n.touchCancel || r)),
                (this.translateContainer = this.element),
                (this._cancelAllHandler = this.cancelAll.bind(this)),
                window.addEventListener("scroll", this._cancelAllHandler),
                (this.delta = null),
                (this.last = null),
                (this.now = null),
                (this.tapTimeout = null),
                (this.singleTapTimeout = null),
                (this.longTapTimeout = null),
                (this.swipeTimeout = null),
                (this.x1 = this.x2 = this.y1 = this.y2 = null),
                (this.preTapPosition = { x: null, y: null });
        }
        return (
            n(t, [
                {
                    key: "start",
                    value: function (t) {
                        if (t.touches)
                            if (
                                t.target &&
                                t.target.nodeName &&
                                ["a", "button", "input"].indexOf(
                                    t.target.nodeName.toLowerCase()
                                ) >= 0
                            )
                                console.log(
                                    "ignore drag for this touched element",
                                    t.target.nodeName.toLowerCase()
                                );
                            else {
                                (this.now = Date.now()),
                                    (this.x1 = t.touches[0].pageX),
                                    (this.y1 = t.touches[0].pageY),
                                    (this.delta =
                                        this.now - (this.last || this.now)),
                                    this.touchStart.dispatch(t, this.element),
                                    null !== this.preTapPosition.x &&
                                        ((this.isDoubleTap =
                                            this.delta > 0 &&
                                            this.delta <= 250 &&
                                            Math.abs(
                                                this.preTapPosition.x - this.x1
                                            ) < 30 &&
                                            Math.abs(
                                                this.preTapPosition.y - this.y1
                                            ) < 30),
                                        this.isDoubleTap &&
                                            clearTimeout(
                                                this.singleTapTimeout
                                            )),
                                    (this.preTapPosition.x = this.x1),
                                    (this.preTapPosition.y = this.y1),
                                    (this.last = this.now);
                                var e = this.preV;
                                if (t.touches.length > 1) {
                                    this._cancelLongTap(),
                                        this._cancelSingleTap();
                                    var i = {
                                        x: t.touches[1].pageX - this.x1,
                                        y: t.touches[1].pageY - this.y1,
                                    };
                                    (e.x = i.x),
                                        (e.y = i.y),
                                        (this.pinchStartLen = I(e)),
                                        this.multipointStart.dispatch(
                                            t,
                                            this.element
                                        );
                                }
                                (this._preventTap = !1),
                                    (this.longTapTimeout = setTimeout(
                                        function () {
                                            this.longTap.dispatch(
                                                t,
                                                this.element
                                            ),
                                                (this._preventTap = !0);
                                        }.bind(this),
                                        750
                                    ));
                            }
                    },
                },
                {
                    key: "move",
                    value: function (t) {
                        if (t.touches) {
                            var e = this.preV,
                                i = t.touches.length,
                                n = t.touches[0].pageX,
                                r = t.touches[0].pageY;
                            if (((this.isDoubleTap = !1), i > 1)) {
                                var s = t.touches[1].pageX,
                                    o = t.touches[1].pageY,
                                    a = {
                                        x: t.touches[1].pageX - n,
                                        y: t.touches[1].pageY - r,
                                    };
                                null !== e.x &&
                                    (this.pinchStartLen > 0 &&
                                        ((t.zoom = I(a) / this.pinchStartLen),
                                        this.pinch.dispatch(t, this.element)),
                                    (t.angle = (function (t, e) {
                                        var i = (function (t, e) {
                                            var i = I(t) * I(e);
                                            if (0 === i) return 0;
                                            var n =
                                                (function (t, e) {
                                                    return (
                                                        t.x * e.x + t.y * e.y
                                                    );
                                                })(t, e) / i;
                                            return (
                                                n > 1 && (n = 1), Math.acos(n)
                                            );
                                        })(t, e);
                                        return (
                                            (function (t, e) {
                                                return t.x * e.y - e.x * t.y;
                                            })(t, e) > 0 && (i *= -1),
                                            (180 * i) / Math.PI
                                        );
                                    })(a, e)),
                                    this.rotate.dispatch(t, this.element)),
                                    (e.x = a.x),
                                    (e.y = a.y),
                                    null !== this.x2 && null !== this.sx2
                                        ? ((t.deltaX =
                                              (n - this.x2 + s - this.sx2) / 2),
                                          (t.deltaY =
                                              (r - this.y2 + o - this.sy2) / 2))
                                        : ((t.deltaX = 0), (t.deltaY = 0)),
                                    this.twoFingerPressMove.dispatch(
                                        t,
                                        this.element
                                    ),
                                    (this.sx2 = s),
                                    (this.sy2 = o);
                            } else {
                                if (null !== this.x2) {
                                    (t.deltaX = n - this.x2),
                                        (t.deltaY = r - this.y2);
                                    var l = Math.abs(this.x1 - this.x2),
                                        u = Math.abs(this.y1 - this.y2);
                                    (l > 10 || u > 10) &&
                                        (this._preventTap = !0);
                                } else (t.deltaX = 0), (t.deltaY = 0);
                                this.pressMove.dispatch(t, this.element);
                            }
                            this.touchMove.dispatch(t, this.element),
                                this._cancelLongTap(),
                                (this.x2 = n),
                                (this.y2 = r),
                                i > 1 && t.preventDefault();
                        }
                    },
                },
                {
                    key: "end",
                    value: function (t) {
                        if (t.changedTouches) {
                            this._cancelLongTap();
                            var e = this;
                            t.touches.length < 2 &&
                                (this.multipointEnd.dispatch(t, this.element),
                                (this.sx2 = this.sy2 = null)),
                                (this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
                                (this.y2 && Math.abs(this.y1 - this.y2) > 30)
                                    ? ((t.direction = this._swipeDirection(
                                          this.x1,
                                          this.x2,
                                          this.y1,
                                          this.y2
                                      )),
                                      (this.swipeTimeout = setTimeout(
                                          function () {
                                              e.swipe.dispatch(t, e.element);
                                          },
                                          0
                                      )))
                                    : ((this.tapTimeout = setTimeout(
                                          function () {
                                              e._preventTap ||
                                                  e.tap.dispatch(t, e.element),
                                                  e.isDoubleTap &&
                                                      (e.doubleTap.dispatch(
                                                          t,
                                                          e.element
                                                      ),
                                                      (e.isDoubleTap = !1));
                                          },
                                          0
                                      )),
                                      e.isDoubleTap ||
                                          (e.singleTapTimeout = setTimeout(
                                              function () {
                                                  e.singleTap.dispatch(
                                                      t,
                                                      e.element
                                                  );
                                              },
                                              250
                                          ))),
                                this.touchEnd.dispatch(t, this.element),
                                (this.preV.x = 0),
                                (this.preV.y = 0),
                                (this.zoom = 1),
                                (this.pinchStartLen = null),
                                (this.x1 = this.x2 = this.y1 = this.y2 = null);
                        }
                    },
                },
                {
                    key: "cancelAll",
                    value: function () {
                        (this._preventTap = !0),
                            clearTimeout(this.singleTapTimeout),
                            clearTimeout(this.tapTimeout),
                            clearTimeout(this.longTapTimeout),
                            clearTimeout(this.swipeTimeout);
                    },
                },
                {
                    key: "cancel",
                    value: function (t) {
                        this.cancelAll(),
                            this.touchCancel.dispatch(t, this.element);
                    },
                },
                {
                    key: "_cancelLongTap",
                    value: function () {
                        clearTimeout(this.longTapTimeout);
                    },
                },
                {
                    key: "_cancelSingleTap",
                    value: function () {
                        clearTimeout(this.singleTapTimeout);
                    },
                },
                {
                    key: "_swipeDirection",
                    value: function (t, e, i, n) {
                        return Math.abs(t - e) >= Math.abs(i - n)
                            ? t - e > 0
                                ? "Left"
                                : "Right"
                            : i - n > 0
                            ? "Up"
                            : "Down";
                    },
                },
                {
                    key: "on",
                    value: function (t, e) {
                        this[t] && this[t].add(e);
                    },
                },
                {
                    key: "off",
                    value: function (t, e) {
                        this[t] && this[t].del(e);
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        return (
                            this.singleTapTimeout &&
                                clearTimeout(this.singleTapTimeout),
                            this.tapTimeout && clearTimeout(this.tapTimeout),
                            this.longTapTimeout &&
                                clearTimeout(this.longTapTimeout),
                            this.swipeTimeout &&
                                clearTimeout(this.swipeTimeout),
                            this.element.removeEventListener(
                                "touchstart",
                                this.start
                            ),
                            this.element.removeEventListener(
                                "touchmove",
                                this.move
                            ),
                            this.element.removeEventListener(
                                "touchend",
                                this.end
                            ),
                            this.element.removeEventListener(
                                "touchcancel",
                                this.cancel
                            ),
                            this.rotate.del(),
                            this.touchStart.del(),
                            this.multipointStart.del(),
                            this.multipointEnd.del(),
                            this.pinch.del(),
                            this.swipe.del(),
                            this.tap.del(),
                            this.doubleTap.del(),
                            this.longTap.del(),
                            this.singleTap.del(),
                            this.pressMove.del(),
                            this.twoFingerPressMove.del(),
                            this.touchMove.del(),
                            this.touchEnd.del(),
                            this.touchCancel.del(),
                            (this.preV =
                                this.pinchStartLen =
                                this.zoom =
                                this.isDoubleTap =
                                this.delta =
                                this.last =
                                this.now =
                                this.tapTimeout =
                                this.singleTapTimeout =
                                this.longTapTimeout =
                                this.swipeTimeout =
                                this.x1 =
                                this.x2 =
                                this.y1 =
                                this.y2 =
                                this.preTapPosition =
                                this.rotate =
                                this.touchStart =
                                this.multipointStart =
                                this.multipointEnd =
                                this.pinch =
                                this.swipe =
                                this.tap =
                                this.doubleTap =
                                this.longTap =
                                this.singleTap =
                                this.pressMove =
                                this.touchMove =
                                this.touchEnd =
                                this.touchCancel =
                                this.twoFingerPressMove =
                                    null),
                            window.removeEventListener(
                                "scroll",
                                this._cancelAllHandler
                            ),
                            null
                        );
                    },
                },
            ]),
            t
        );
    })();
    function R(t) {
        var e = (function () {
                var t,
                    e = document.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                    };
                for (t in i) if (void 0 !== e.style[t]) return i[t];
            })(),
            i =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
            n = h(t, "gslide-media") ? t : t.querySelector(".gslide-media"),
            r = d(n, ".ginner-container"),
            s = t.querySelector(".gslide-description");
        i > 769 && (n = r),
            u(n, "greset"),
            p(n, "translate3d(0, 0, 0)"),
            l(e, {
                onElement: n,
                once: !0,
                withCallback: function (t, e) {
                    c(n, "greset");
                },
            }),
            (n.style.opacity = ""),
            s && (s.style.opacity = "");
    }
    function N(t) {
        if (t.events.hasOwnProperty("touch")) return !1;
        var e,
            i,
            n,
            r = y(),
            s = r.width,
            o = r.height,
            a = !1,
            l = null,
            f = null,
            g = null,
            v = !1,
            m = 1,
            _ = 1,
            x = !1,
            b = !1,
            w = null,
            T = null,
            S = null,
            E = null,
            k = 0,
            C = 0,
            O = !1,
            A = !1,
            M = {},
            P = {},
            L = 0,
            D = 0,
            z = document.getElementById("glightbox-slider"),
            I = document.querySelector(".goverlay"),
            B = new X(z, {
                touchStart: function (e) {
                    if (
                        ((a = !0),
                        (h(e.targetTouches[0].target, "ginner-container") ||
                            d(e.targetTouches[0].target, ".gslide-desc") ||
                            "a" ==
                                e.targetTouches[0].target.nodeName.toLowerCase()) &&
                            (a = !1),
                        d(e.targetTouches[0].target, ".gslide-inline") &&
                            !h(
                                e.targetTouches[0].target.parentNode,
                                "gslide-inline"
                            ) &&
                            (a = !1),
                        a)
                    ) {
                        if (
                            ((P = e.targetTouches[0]),
                            (M.pageX = e.targetTouches[0].pageX),
                            (M.pageY = e.targetTouches[0].pageY),
                            (L = e.targetTouches[0].clientX),
                            (D = e.targetTouches[0].clientY),
                            (l = t.activeSlide),
                            (f = l.querySelector(".gslide-media")),
                            (n = l.querySelector(".gslide-inline")),
                            (g = null),
                            h(f, "gslide-image") &&
                                (g = f.querySelector("img")),
                            (window.innerWidth ||
                                document.documentElement.clientWidth ||
                                document.body.clientWidth) > 769 &&
                                (f = l.querySelector(".ginner-container")),
                            c(I, "greset"),
                            e.pageX > 20 && e.pageX < window.innerWidth - 20)
                        )
                            return;
                        e.preventDefault();
                    }
                },
                touchMove: function (r) {
                    if (a && ((P = r.targetTouches[0]), !x && !b)) {
                        if (n && n.offsetHeight > o) {
                            var l = M.pageX - P.pageX;
                            if (Math.abs(l) <= 13) return !1;
                        }
                        v = !0;
                        var u,
                            c = r.targetTouches[0].clientX,
                            h = r.targetTouches[0].clientY,
                            d = L - c,
                            m = D - h;
                        if (
                            (Math.abs(d) > Math.abs(m)
                                ? ((O = !1), (A = !0))
                                : ((A = !1), (O = !0)),
                            (e = P.pageX - M.pageX),
                            (k = (100 * e) / s),
                            (i = P.pageY - M.pageY),
                            (C = (100 * i) / o),
                            O &&
                                g &&
                                ((u = 1 - Math.abs(i) / o),
                                (I.style.opacity = u),
                                t.settings.touchFollowAxis && (k = 0)),
                            A &&
                                ((u = 1 - Math.abs(e) / s),
                                (f.style.opacity = u),
                                t.settings.touchFollowAxis && (C = 0)),
                            !g)
                        )
                            return p(f, "translate3d(".concat(k, "%, 0, 0)"));
                        p(
                            f,
                            "translate3d(".concat(k, "%, ").concat(C, "%, 0)")
                        );
                    }
                },
                touchEnd: function () {
                    if (a) {
                        if (((v = !1), b || x)) return (S = w), void (E = T);
                        var e = Math.abs(parseInt(C)),
                            i = Math.abs(parseInt(k));
                        if (!(e > 29 && g))
                            return e < 29 && i < 25
                                ? (u(I, "greset"), (I.style.opacity = 1), R(f))
                                : void 0;
                        t.close();
                    }
                },
                multipointEnd: function () {
                    setTimeout(function () {
                        x = !1;
                    }, 50);
                },
                multipointStart: function () {
                    (x = !0), (m = _ || 1);
                },
                pinch: function (t) {
                    if (!g || v) return !1;
                    (x = !0), (g.scaleX = g.scaleY = m * t.zoom);
                    var e = m * t.zoom;
                    if (((b = !0), e <= 1))
                        return (
                            (b = !1),
                            (e = 1),
                            (E = null),
                            (S = null),
                            (w = null),
                            (T = null),
                            void g.setAttribute("style", "")
                        );
                    e > 4.5 && (e = 4.5),
                        (g.style.transform = "scale3d("
                            .concat(e, ", ")
                            .concat(e, ", 1)")),
                        (_ = e);
                },
                pressMove: function (t) {
                    if (b && !x) {
                        var e = P.pageX - M.pageX,
                            i = P.pageY - M.pageY;
                        S && (e += S), E && (i += E), (w = e), (T = i);
                        var n = "translate3d("
                            .concat(e, "px, ")
                            .concat(i, "px, 0)");
                        _ &&
                            (n += " scale3d("
                                .concat(_, ", ")
                                .concat(_, ", 1)")),
                            p(g, n);
                    }
                },
                swipe: function (e) {
                    if (!b)
                        if (x) x = !1;
                        else {
                            if ("Left" == e.direction) {
                                if (t.index == t.elements.length - 1)
                                    return R(f);
                                t.nextSlide();
                            }
                            if ("Right" == e.direction) {
                                if (0 == t.index) return R(f);
                                t.prevSlide();
                            }
                        }
                },
            });
        t.events.touch = B;
    }
    var q = (function () {
            function t(i, n) {
                var r = this,
                    s =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null;
                if (
                    (e(this, t),
                    (this.img = i),
                    (this.slide = n),
                    (this.onclose = s),
                    this.img.setZoomEvents)
                )
                    return !1;
                (this.active = !1),
                    (this.zoomedIn = !1),
                    (this.dragging = !1),
                    (this.currentX = null),
                    (this.currentY = null),
                    (this.initialX = null),
                    (this.initialY = null),
                    (this.xOffset = 0),
                    (this.yOffset = 0),
                    this.img.addEventListener(
                        "mousedown",
                        function (t) {
                            return r.dragStart(t);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "mouseup",
                        function (t) {
                            return r.dragEnd(t);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "mousemove",
                        function (t) {
                            return r.drag(t);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "click",
                        function (t) {
                            return r.slide.classList.contains("dragging-nav")
                                ? (r.zoomOut(), !1)
                                : r.zoomedIn
                                ? void (
                                      r.zoomedIn &&
                                      !r.dragging &&
                                      r.zoomOut()
                                  )
                                : r.zoomIn();
                        },
                        !1
                    ),
                    (this.img.setZoomEvents = !0);
            }
            return (
                n(t, [
                    {
                        key: "zoomIn",
                        value: function () {
                            var t = this.widowWidth();
                            if (!(this.zoomedIn || t <= 768)) {
                                var e = this.img;
                                if (
                                    (e.setAttribute(
                                        "data-style",
                                        e.getAttribute("style")
                                    ),
                                    (e.style.maxWidth = e.naturalWidth + "px"),
                                    (e.style.maxHeight =
                                        e.naturalHeight + "px"),
                                    e.naturalWidth > t)
                                ) {
                                    var i = t / 2 - e.naturalWidth / 2;
                                    this.setTranslate(
                                        this.img.parentNode,
                                        i,
                                        0
                                    );
                                }
                                this.slide.classList.add("zoomed"),
                                    (this.zoomedIn = !0);
                            }
                        },
                    },
                    {
                        key: "zoomOut",
                        value: function () {
                            this.img.parentNode.setAttribute("style", ""),
                                this.img.setAttribute(
                                    "style",
                                    this.img.getAttribute("data-style")
                                ),
                                this.slide.classList.remove("zoomed"),
                                (this.zoomedIn = !1),
                                (this.currentX = null),
                                (this.currentY = null),
                                (this.initialX = null),
                                (this.initialY = null),
                                (this.xOffset = 0),
                                (this.yOffset = 0),
                                this.onclose &&
                                    "function" == typeof this.onclose &&
                                    this.onclose();
                        },
                    },
                    {
                        key: "dragStart",
                        value: function (t) {
                            t.preventDefault(),
                                this.zoomedIn
                                    ? ("touchstart" === t.type
                                          ? ((this.initialX =
                                                t.touches[0].clientX -
                                                this.xOffset),
                                            (this.initialY =
                                                t.touches[0].clientY -
                                                this.yOffset))
                                          : ((this.initialX =
                                                t.clientX - this.xOffset),
                                            (this.initialY =
                                                t.clientY - this.yOffset)),
                                      t.target === this.img &&
                                          ((this.active = !0),
                                          this.img.classList.add("dragging")))
                                    : (this.active = !1);
                        },
                    },
                    {
                        key: "dragEnd",
                        value: function (t) {
                            var e = this;
                            t.preventDefault(),
                                (this.initialX = this.currentX),
                                (this.initialY = this.currentY),
                                (this.active = !1),
                                setTimeout(function () {
                                    (e.dragging = !1),
                                        (e.img.isDragging = !1),
                                        e.img.classList.remove("dragging");
                                }, 100);
                        },
                    },
                    {
                        key: "drag",
                        value: function (t) {
                            this.active &&
                                (t.preventDefault(),
                                "touchmove" === t.type
                                    ? ((this.currentX =
                                          t.touches[0].clientX - this.initialX),
                                      (this.currentY =
                                          t.touches[0].clientY - this.initialY))
                                    : ((this.currentX =
                                          t.clientX - this.initialX),
                                      (this.currentY =
                                          t.clientY - this.initialY)),
                                (this.xOffset = this.currentX),
                                (this.yOffset = this.currentY),
                                (this.img.isDragging = !0),
                                (this.dragging = !0),
                                this.setTranslate(
                                    this.img,
                                    this.currentX,
                                    this.currentY
                                ));
                        },
                    },
                    {
                        key: "onMove",
                        value: function (t) {
                            if (this.zoomedIn) {
                                var e = t.clientX - this.img.naturalWidth / 2,
                                    i = t.clientY - this.img.naturalHeight / 2;
                                this.setTranslate(this.img, e, i);
                            }
                        },
                    },
                    {
                        key: "setTranslate",
                        value: function (t, e, i) {
                            t.style.transform =
                                "translate3d(" + e + "px, " + i + "px, 0)";
                        },
                    },
                    {
                        key: "widowWidth",
                        value: function () {
                            return (
                                window.innerWidth ||
                                document.documentElement.clientWidth ||
                                document.body.clientWidth
                            );
                        },
                    },
                ]),
                t
            );
        })(),
        W = (function () {
            function t() {
                var i = this,
                    n =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                e(this, t);
                var r = n.dragEl,
                    s = n.toleranceX,
                    o = void 0 === s ? 40 : s,
                    a = n.toleranceY,
                    l = void 0 === a ? 65 : a,
                    u = n.slide,
                    c = void 0 === u ? null : u,
                    h = n.instance,
                    d = void 0 === h ? null : h;
                (this.el = r),
                    (this.active = !1),
                    (this.dragging = !1),
                    (this.currentX = null),
                    (this.currentY = null),
                    (this.initialX = null),
                    (this.initialY = null),
                    (this.xOffset = 0),
                    (this.yOffset = 0),
                    (this.direction = null),
                    (this.lastDirection = null),
                    (this.toleranceX = o),
                    (this.toleranceY = l),
                    (this.toleranceReached = !1),
                    (this.dragContainer = this.el),
                    (this.slide = c),
                    (this.instance = d),
                    this.el.addEventListener(
                        "mousedown",
                        function (t) {
                            return i.dragStart(t);
                        },
                        !1
                    ),
                    this.el.addEventListener(
                        "mouseup",
                        function (t) {
                            return i.dragEnd(t);
                        },
                        !1
                    ),
                    this.el.addEventListener(
                        "mousemove",
                        function (t) {
                            return i.drag(t);
                        },
                        !1
                    );
            }
            return (
                n(t, [
                    {
                        key: "dragStart",
                        value: function (t) {
                            if (this.slide.classList.contains("zoomed"))
                                this.active = !1;
                            else {
                                "touchstart" === t.type
                                    ? ((this.initialX =
                                          t.touches[0].clientX - this.xOffset),
                                      (this.initialY =
                                          t.touches[0].clientY - this.yOffset))
                                    : ((this.initialX =
                                          t.clientX - this.xOffset),
                                      (this.initialY =
                                          t.clientY - this.yOffset));
                                var e = t.target.nodeName.toLowerCase();
                                t.target.classList.contains("nodrag") ||
                                d(t.target, ".nodrag") ||
                                -1 !==
                                    [
                                        "input",
                                        "select",
                                        "textarea",
                                        "button",
                                        "a",
                                    ].indexOf(e)
                                    ? (this.active = !1)
                                    : (t.preventDefault(),
                                      (t.target === this.el ||
                                          ("img" !== e &&
                                              d(t.target, ".gslide-inline"))) &&
                                          ((this.active = !0),
                                          this.el.classList.add("dragging"),
                                          (this.dragContainer = d(
                                              t.target,
                                              ".ginner-container"
                                          ))));
                            }
                        },
                    },
                    {
                        key: "dragEnd",
                        value: function (t) {
                            var e = this;
                            t && t.preventDefault(),
                                (this.initialX = 0),
                                (this.initialY = 0),
                                (this.currentX = null),
                                (this.currentY = null),
                                (this.initialX = null),
                                (this.initialY = null),
                                (this.xOffset = 0),
                                (this.yOffset = 0),
                                (this.active = !1),
                                this.doSlideChange &&
                                    ((this.instance.preventOutsideClick = !0),
                                    "right" == this.doSlideChange &&
                                        this.instance.prevSlide(),
                                    "left" == this.doSlideChange &&
                                        this.instance.nextSlide()),
                                this.doSlideClose && this.instance.close(),
                                this.toleranceReached ||
                                    this.setTranslate(
                                        this.dragContainer,
                                        0,
                                        0,
                                        !0
                                    ),
                                setTimeout(function () {
                                    (e.instance.preventOutsideClick = !1),
                                        (e.toleranceReached = !1),
                                        (e.lastDirection = null),
                                        (e.dragging = !1),
                                        (e.el.isDragging = !1),
                                        e.el.classList.remove("dragging"),
                                        e.slide.classList.remove(
                                            "dragging-nav"
                                        ),
                                        (e.dragContainer.style.transform = ""),
                                        (e.dragContainer.style.transition = "");
                                }, 100);
                        },
                    },
                    {
                        key: "drag",
                        value: function (t) {
                            if (this.active) {
                                t.preventDefault(),
                                    this.slide.classList.add("dragging-nav"),
                                    "touchmove" === t.type
                                        ? ((this.currentX =
                                              t.touches[0].clientX -
                                              this.initialX),
                                          (this.currentY =
                                              t.touches[0].clientY -
                                              this.initialY))
                                        : ((this.currentX =
                                              t.clientX - this.initialX),
                                          (this.currentY =
                                              t.clientY - this.initialY)),
                                    (this.xOffset = this.currentX),
                                    (this.yOffset = this.currentY),
                                    (this.el.isDragging = !0),
                                    (this.dragging = !0),
                                    (this.doSlideChange = !1),
                                    (this.doSlideClose = !1);
                                var e = Math.abs(this.currentX),
                                    i = Math.abs(this.currentY);
                                if (
                                    e > 0 &&
                                    e >= Math.abs(this.currentY) &&
                                    (!this.lastDirection ||
                                        "x" == this.lastDirection)
                                ) {
                                    (this.yOffset = 0),
                                        (this.lastDirection = "x"),
                                        this.setTranslate(
                                            this.dragContainer,
                                            this.currentX,
                                            0
                                        );
                                    var n = this.shouldChange();
                                    if (
                                        (!this.instance.settings.dragAutoSnap &&
                                            n &&
                                            (this.doSlideChange = n),
                                        this.instance.settings.dragAutoSnap &&
                                            n)
                                    )
                                        return (
                                            (this.instance.preventOutsideClick =
                                                !0),
                                            (this.toleranceReached = !0),
                                            (this.active = !1),
                                            (this.instance.preventOutsideClick =
                                                !0),
                                            this.dragEnd(null),
                                            "right" == n &&
                                                this.instance.prevSlide(),
                                            void (
                                                "left" == n &&
                                                this.instance.nextSlide()
                                            )
                                        );
                                }
                                if (
                                    this.toleranceY > 0 &&
                                    i > 0 &&
                                    i >= e &&
                                    (!this.lastDirection ||
                                        "y" == this.lastDirection)
                                ) {
                                    (this.xOffset = 0),
                                        (this.lastDirection = "y"),
                                        this.setTranslate(
                                            this.dragContainer,
                                            0,
                                            this.currentY
                                        );
                                    var r = this.shouldClose();
                                    return (
                                        !this.instance.settings.dragAutoSnap &&
                                            r &&
                                            (this.doSlideClose = !0),
                                        void (
                                            this.instance.settings
                                                .dragAutoSnap &&
                                            r &&
                                            this.instance.close()
                                        )
                                    );
                                }
                            }
                        },
                    },
                    {
                        key: "shouldChange",
                        value: function () {
                            var t = !1;
                            if (Math.abs(this.currentX) >= this.toleranceX) {
                                var e = this.currentX > 0 ? "right" : "left";
                                (("left" == e &&
                                    this.slide !==
                                        this.slide.parentNode.lastChild) ||
                                    ("right" == e &&
                                        this.slide !==
                                            this.slide.parentNode
                                                .firstChild)) &&
                                    (t = e);
                            }
                            return t;
                        },
                    },
                    {
                        key: "shouldClose",
                        value: function () {
                            var t = !1;
                            return (
                                Math.abs(this.currentY) >= this.toleranceY &&
                                    (t = !0),
                                t
                            );
                        },
                    },
                    {
                        key: "setTranslate",
                        value: function (t, e, i) {
                            var n =
                                arguments.length > 3 &&
                                void 0 !== arguments[3] &&
                                arguments[3];
                            (t.style.transition = n ? "all .2s ease" : ""),
                                (t.style.transform = "translate3d("
                                    .concat(e, "px, ")
                                    .concat(i, "px, 0)"));
                        },
                    },
                ]),
                t
            );
        })();
    function F(t, e, i, n) {
        var r = t.querySelector(".gslide-media"),
            s = new Image(),
            o = "gSlideTitle_" + i,
            a = "gSlideDesc_" + i;
        s.addEventListener(
            "load",
            function () {
                T(n) && n();
            },
            !1
        ),
            (s.src = e.href),
            "" != e.sizes &&
                "" != e.srcset &&
                ((s.sizes = e.sizes), (s.srcset = e.srcset)),
            (s.alt = ""),
            A(e.alt) || "" === e.alt || (s.alt = e.alt),
            "" !== e.title && s.setAttribute("aria-labelledby", o),
            "" !== e.description && s.setAttribute("aria-describedby", a),
            e.hasOwnProperty("_hasCustomWidth") &&
                e._hasCustomWidth &&
                (s.style.width = e.width),
            e.hasOwnProperty("_hasCustomHeight") &&
                e._hasCustomHeight &&
                (s.style.height = e.height),
            r.insertBefore(s, r.firstChild);
    }
    function j(t, e, i, n) {
        var r = this,
            s = t.querySelector(".ginner-container"),
            o = "gvideo" + i,
            a = t.querySelector(".gslide-media"),
            l = this.getAllPlayers();
        u(s, "gvideo-container"),
            a.insertBefore(
                m('<div class="gvideo-wrapper"></div>'),
                a.firstChild
            );
        var c = t.querySelector(".gvideo-wrapper");
        b(this.settings.plyr.css, "Plyr");
        var h = e.href,
            d = null == e ? void 0 : e.videoProvider,
            f = !1;
        (a.style.maxWidth = e.width),
            b(this.settings.plyr.js, "Plyr", function () {
                if (
                    (!d && h.match(/vimeo\.com\/([0-9]*)/) && (d = "vimeo"),
                    !d &&
                        (h.match(
                            /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                        ) ||
                            h.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                            h.match(
                                /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                            )) &&
                        (d = "youtube"),
                    "local" === d || !d)
                ) {
                    d = "local";
                    var s = '<video id="' + o + '" ';
                    (s += 'style="background:#000; max-width: '.concat(
                        e.width,
                        ';" '
                    )),
                        (s += 'preload="metadata" '),
                        (s += 'x-webkit-airplay="allow" '),
                        (s += "playsinline "),
                        (s += "controls "),
                        (s += 'class="gvideo-local">'),
                        (s += '<source src="'.concat(h, '">')),
                        (f = m((s += "</video>")));
                }
                var a =
                    f ||
                    m(
                        '<div id="'
                            .concat(o, '" data-plyr-provider="')
                            .concat(d, '" data-plyr-embed-id="')
                            .concat(h, '"></div>')
                    );
                u(c, "".concat(d, "-video gvideo")),
                    c.appendChild(a),
                    c.setAttribute("data-id", o),
                    c.setAttribute("data-index", i);
                var p = M(r.settings.plyr, "config")
                        ? r.settings.plyr.config
                        : {},
                    g = new Plyr("#" + o, p);
                g.on("ready", function (t) {
                    (l[o] = t.detail.plyr), T(n) && n();
                }),
                    x(
                        function () {
                            return (
                                t.querySelector("iframe") &&
                                "true" ==
                                    t.querySelector("iframe").dataset.ready
                            );
                        },
                        function () {
                            r.resize(t);
                        }
                    ),
                    g.on("enterfullscreen", H),
                    g.on("exitfullscreen", H);
            });
    }
    function H(t) {
        var e = d(t.target, ".gslide-media");
        "enterfullscreen" === t.type && u(e, "fullscreen"),
            "exitfullscreen" === t.type && c(e, "fullscreen");
    }
    function V(t, e, i, n) {
        var r,
            s = this,
            o = t.querySelector(".gslide-media"),
            a = !(!M(e, "href") || !e.href) && e.href.split("#").pop().trim(),
            c = !(!M(e, "content") || !e.content) && e.content;
        if (
            c &&
            (S(c) &&
                (r = m('<div class="ginlined-content">'.concat(c, "</div>"))),
            E(c))
        ) {
            "none" == c.style.display && (c.style.display = "block");
            var h = document.createElement("div");
            (h.className = "ginlined-content"), h.appendChild(c), (r = h);
        }
        if (a) {
            var d = document.getElementById(a);
            if (!d) return !1;
            var f = d.cloneNode(!0);
            (f.style.height = e.height),
                (f.style.maxWidth = e.width),
                u(f, "ginlined-content"),
                (r = f);
        }
        if (!r)
            return (
                console.error("Unable to append inline slide content", e), !1
            );
        (o.style.height = e.height),
            (o.style.width = e.width),
            o.appendChild(r),
            (this.events["inlineclose" + a] = l("click", {
                onElement: o.querySelectorAll(".gtrigger-close"),
                withCallback: function (t) {
                    t.preventDefault(), s.close();
                },
            })),
            T(n) && n();
    }
    function U(t, e, i, n) {
        var r = t.querySelector(".gslide-media"),
            s = (function (t) {
                var e = t.url,
                    i = t.allow,
                    n = t.callback,
                    r = t.appendTo,
                    s = document.createElement("iframe");
                return (
                    (s.className = "vimeo-video gvideo"),
                    (s.src = e),
                    (s.style.width = "100%"),
                    (s.style.height = "100%"),
                    i && s.setAttribute("allow", i),
                    (s.onload = function () {
                        (s.onload = null), u(s, "node-ready"), T(n) && n();
                    }),
                    r && r.appendChild(s),
                    s
                );
            })({ url: e.href, callback: n });
        (r.parentNode.style.maxWidth = e.width),
            (r.parentNode.style.height = e.height),
            r.appendChild(s);
    }
    var G = (function () {
            function t() {
                var i =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                e(this, t),
                    (this.defaults = {
                        href: "",
                        sizes: "",
                        srcset: "",
                        title: "",
                        type: "",
                        videoProvider: "",
                        description: "",
                        alt: "",
                        descPosition: "bottom",
                        effect: "",
                        width: "",
                        height: "",
                        content: !1,
                        zoomable: !0,
                        draggable: !0,
                    }),
                    O(i) && (this.defaults = s(this.defaults, i));
            }
            return (
                n(t, [
                    {
                        key: "sourceType",
                        value: function (t) {
                            var e = t;
                            return null !==
                                (t = t.toLowerCase()).match(
                                    /\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/
                                )
                                ? "image"
                                : t.match(
                                      /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                                  ) ||
                                  t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                                  t.match(
                                      /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                                  ) ||
                                  t.match(/vimeo\.com\/([0-9]*)/) ||
                                  null !== t.match(/\.(mp4|ogg|webm|mov)/)
                                ? "video"
                                : null !== t.match(/\.(mp3|wav|wma|aac|ogg)/)
                                ? "audio"
                                : t.indexOf("#") > -1 &&
                                  "" !== e.split("#").pop().trim()
                                ? "inline"
                                : t.indexOf("goajax=true") > -1
                                ? "ajax"
                                : "external";
                        },
                    },
                    {
                        key: "parseConfig",
                        value: function (t, e) {
                            var i = this,
                                n = s(
                                    { descPosition: e.descPosition },
                                    this.defaults
                                );
                            if (O(t) && !E(t)) {
                                M(t, "type") ||
                                    (M(t, "content") && t.content
                                        ? (t.type = "inline")
                                        : M(t, "href") &&
                                          (t.type = this.sourceType(t.href)));
                                var r = s(n, t);
                                return this.setSize(r, e), r;
                            }
                            var a = "",
                                l = t.getAttribute("data-glightbox"),
                                u = t.nodeName.toLowerCase();
                            if (
                                ("a" === u && (a = t.href),
                                "img" === u && ((a = t.src), (n.alt = t.alt)),
                                (n.href = a),
                                o(n, function (r, s) {
                                    M(e, s) && "width" !== s && (n[s] = e[s]);
                                    var o = t.dataset[s];
                                    A(o) || (n[s] = i.sanitizeValue(o));
                                }),
                                n.content && (n.type = "inline"),
                                !n.type && a && (n.type = this.sourceType(a)),
                                A(l))
                            ) {
                                if (!n.title && "a" == u) {
                                    var c = t.title;
                                    A(c) || "" === c || (n.title = c);
                                }
                                if (!n.title && "img" == u) {
                                    var h = t.alt;
                                    A(h) || "" === h || (n.title = h);
                                }
                            } else {
                                var d = [];
                                o(n, function (t, e) {
                                    d.push(";\\s?" + e);
                                }),
                                    (d = d.join("\\s?:|")),
                                    "" !== l.trim() &&
                                        o(n, function (t, e) {
                                            var r = l,
                                                s = new RegExp(
                                                    "s?" +
                                                        e +
                                                        "s?:s?(.*?)(" +
                                                        d +
                                                        "s?:|$)"
                                                ),
                                                o = r.match(s);
                                            if (o && o.length && o[1]) {
                                                var a = o[1]
                                                    .trim()
                                                    .replace(/;\s*$/, "");
                                                n[e] = i.sanitizeValue(a);
                                            }
                                        });
                            }
                            if (
                                n.description &&
                                "." === n.description.substring(0, 1)
                            ) {
                                var f;
                                try {
                                    f = document.querySelector(
                                        n.description
                                    ).innerHTML;
                                } catch (t) {
                                    if (!(t instanceof DOMException)) throw t;
                                }
                                f && (n.description = f);
                            }
                            if (!n.description) {
                                var p = t.querySelector(".glightbox-desc");
                                p && (n.description = p.innerHTML);
                            }
                            return (
                                this.setSize(n, e, t), (this.slideConfig = n), n
                            );
                        },
                    },
                    {
                        key: "setSize",
                        value: function (t, e) {
                            var i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                        ? arguments[2]
                                        : null,
                                n =
                                    "video" == t.type
                                        ? this.checkSize(e.videosWidth)
                                        : this.checkSize(e.width),
                                r = this.checkSize(e.height);
                            return (
                                (t.width =
                                    M(t, "width") && "" !== t.width
                                        ? this.checkSize(t.width)
                                        : n),
                                (t.height =
                                    M(t, "height") && "" !== t.height
                                        ? this.checkSize(t.height)
                                        : r),
                                i &&
                                    "image" == t.type &&
                                    ((t._hasCustomWidth = !!i.dataset.width),
                                    (t._hasCustomHeight = !!i.dataset.height)),
                                t
                            );
                        },
                    },
                    {
                        key: "checkSize",
                        value: function (t) {
                            return L(t) ? "".concat(t, "px") : t;
                        },
                    },
                    {
                        key: "sanitizeValue",
                        value: function (t) {
                            return "true" !== t && "false" !== t
                                ? t
                                : "true" === t;
                        },
                    },
                ]),
                t
            );
        })(),
        Z = (function () {
            function t(i, n, r) {
                e(this, t),
                    (this.element = i),
                    (this.instance = n),
                    (this.index = r);
            }
            return (
                n(t, [
                    {
                        key: "setContent",
                        value: function () {
                            var t = this,
                                e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : null,
                                i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                            if (h(e, "loaded")) return !1;
                            var n = this.instance.settings,
                                r = this.slideConfig,
                                s = w();
                            T(n.beforeSlideLoad) &&
                                n.beforeSlideLoad({
                                    index: this.index,
                                    slide: e,
                                    player: !1,
                                });
                            var o = r.type,
                                a = r.descPosition,
                                l = e.querySelector(".gslide-media"),
                                c = e.querySelector(".gslide-title"),
                                d = e.querySelector(".gslide-desc"),
                                f = e.querySelector(".gdesc-inner"),
                                p = i,
                                g = "gSlideTitle_" + this.index,
                                v = "gSlideDesc_" + this.index;
                            if (
                                (T(n.afterSlideLoad) &&
                                    (p = function () {
                                        T(i) && i(),
                                            n.afterSlideLoad({
                                                index: t.index,
                                                slide: e,
                                                player: t.instance.getSlidePlayerInstance(
                                                    t.index
                                                ),
                                            });
                                    }),
                                "" == r.title && "" == r.description
                                    ? f &&
                                      f.parentNode.parentNode.removeChild(
                                          f.parentNode
                                      )
                                    : (c && "" !== r.title
                                          ? ((c.id = g),
                                            (c.innerHTML = r.title))
                                          : c.parentNode.removeChild(c),
                                      d && "" !== r.description
                                          ? ((d.id = v),
                                            s && n.moreLength > 0
                                                ? ((r.smallDescription =
                                                      this.slideShortDesc(
                                                          r.description,
                                                          n.moreLength,
                                                          n.moreText
                                                      )),
                                                  (d.innerHTML =
                                                      r.smallDescription),
                                                  this.descriptionEvents(d, r))
                                                : (d.innerHTML = r.description))
                                          : d.parentNode.removeChild(d),
                                      u(l.parentNode, "desc-".concat(a)),
                                      u(
                                          f.parentNode,
                                          "description-".concat(a)
                                      )),
                                u(l, "gslide-".concat(o)),
                                u(e, "loaded"),
                                "video" !== o)
                            ) {
                                if ("external" !== o)
                                    return "inline" === o
                                        ? (V.apply(this.instance, [
                                              e,
                                              r,
                                              this.index,
                                              p,
                                          ]),
                                          void (
                                              r.draggable &&
                                              new W({
                                                  dragEl: e.querySelector(
                                                      ".gslide-inline"
                                                  ),
                                                  toleranceX: n.dragToleranceX,
                                                  toleranceY: n.dragToleranceY,
                                                  slide: e,
                                                  instance: this.instance,
                                              })
                                          ))
                                        : void ("image" !== o
                                              ? T(p) && p()
                                              : F(
                                                    e,
                                                    r,
                                                    this.index,
                                                    function () {
                                                        var i =
                                                            e.querySelector(
                                                                "img"
                                                            );
                                                        r.draggable &&
                                                            new W({
                                                                dragEl: i,
                                                                toleranceX:
                                                                    n.dragToleranceX,
                                                                toleranceY:
                                                                    n.dragToleranceY,
                                                                slide: e,
                                                                instance:
                                                                    t.instance,
                                                            }),
                                                            r.zoomable &&
                                                                i.naturalWidth >
                                                                    i.offsetWidth &&
                                                                (u(
                                                                    i,
                                                                    "zoomable"
                                                                ),
                                                                new q(
                                                                    i,
                                                                    e,
                                                                    function () {
                                                                        t.instance.resize();
                                                                    }
                                                                )),
                                                            T(p) && p();
                                                    }
                                                ));
                                U.apply(this, [e, r, this.index, p]);
                            } else
                                j.apply(this.instance, [e, r, this.index, p]);
                        },
                    },
                    {
                        key: "slideShortDesc",
                        value: function (t) {
                            var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 50,
                                i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2],
                                n = document.createElement("div");
                            n.innerHTML = t;
                            var r = n.innerText,
                                s = i;
                            if ((t = r.trim()).length <= e) return t;
                            var o = t.substr(0, e - 1);
                            return s
                                ? ((n = null),
                                  o +
                                      '... <a href="#" class="desc-more">' +
                                      i +
                                      "</a>")
                                : o;
                        },
                    },
                    {
                        key: "descriptionEvents",
                        value: function (t, e) {
                            var i = this,
                                n = t.querySelector(".desc-more");
                            if (!n) return !1;
                            l("click", {
                                onElement: n,
                                withCallback: function (t, n) {
                                    t.preventDefault();
                                    var r = document.body,
                                        s = d(n, ".gslide-desc");
                                    if (!s) return !1;
                                    (s.innerHTML = e.description),
                                        u(r, "gdesc-open");
                                    var o = l("click", {
                                        onElement: [
                                            r,
                                            d(s, ".gslide-description"),
                                        ],
                                        withCallback: function (t, n) {
                                            "a" !==
                                                t.target.nodeName.toLowerCase() &&
                                                (c(r, "gdesc-open"),
                                                u(r, "gdesc-closed"),
                                                (s.innerHTML =
                                                    e.smallDescription),
                                                i.descriptionEvents(s, e),
                                                setTimeout(function () {
                                                    c(r, "gdesc-closed");
                                                }, 400),
                                                o.destroy());
                                        },
                                    });
                                },
                            });
                        },
                    },
                    {
                        key: "create",
                        value: function () {
                            return m(this.instance.settings.slideHTML);
                        },
                    },
                    {
                        key: "getConfig",
                        value: function () {
                            E(this.element) ||
                                this.element.hasOwnProperty("draggable") ||
                                (this.element.draggable =
                                    this.instance.settings.draggable);
                            var t = new G(
                                this.instance.settings.slideExtraAttributes
                            );
                            return (
                                (this.slideConfig = t.parseConfig(
                                    this.element,
                                    this.instance.settings
                                )),
                                this.slideConfig
                            );
                        },
                    },
                ]),
                t
            );
        })(),
        $ = w(),
        Q =
            null !== w() ||
            void 0 !== document.createTouch ||
            "ontouchstart" in window ||
            "onmsgesturechange" in window ||
            navigator.msMaxTouchPoints,
        K = document.getElementsByTagName("html")[0],
        J = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "1200px",
            height: "80vh",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.12/plyr.css",
                js: "https://cdn.plyr.io/3.6.12/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: { enabled: !0, iosNative: !0 },
                    youtube: {
                        noCookie: !0,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        transparent: !1,
                    },
                },
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: { in: "fadeIn", out: "fadeOut" },
                zoom: { in: "zoomIn", out: "zoomOut" },
                slide: { in: "slideInRight", out: "slideOutLeft" },
                slideBack: { in: "slideInLeft", out: "slideOutRight" },
                none: { in: "none", out: "none" },
            },
            svg: {
                close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
            },
            slideHTML:
                '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
            lightboxHTML:
                '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>',
        },
        tt = (function () {
            function t() {
                var i =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                e(this, t),
                    (this.customOptions = i),
                    (this.settings = s(J, i)),
                    (this.effectsClasses = this.getAnimationClasses()),
                    (this.videoPlayers = {}),
                    (this.apiEvents = []),
                    (this.fullElementsList = !1);
            }
            return (
                n(t, [
                    {
                        key: "init",
                        value: function () {
                            var t = this,
                                e = this.getSelector();
                            e &&
                                (this.baseEvents = l("click", {
                                    onElement: e,
                                    withCallback: function (e, i) {
                                        e.preventDefault(), t.open(i);
                                    },
                                })),
                                (this.elements = this.getElements());
                        },
                    },
                    {
                        key: "open",
                        value: function () {
                            var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : null,
                                e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null;
                            if (0 === this.elements.length) return !1;
                            (this.activeSlide = null),
                                (this.prevActiveSlideIndex = null),
                                (this.prevActiveSlide = null);
                            var i = L(e) ? e : this.settings.startAt;
                            if (E(t)) {
                                var n = t.getAttribute("data-gallery");
                                n &&
                                    ((this.fullElementsList = this.elements),
                                    (this.elements = this.getGalleryElements(
                                        this.elements,
                                        n
                                    ))),
                                    A(i) &&
                                        (i = this.getElementIndex(t)) < 0 &&
                                        (i = 0);
                            }
                            L(i) || (i = 0),
                                this.build(),
                                f(
                                    this.overlay,
                                    "none" === this.settings.openEffect
                                        ? "none"
                                        : this.settings.cssEfects.fade.in
                                );
                            var r = document.body,
                                s =
                                    window.innerWidth -
                                    document.documentElement.clientWidth;
                            if (s > 0) {
                                var o = document.createElement("style");
                                (o.type = "text/css"),
                                    (o.className = "gcss-styles"),
                                    (o.innerText =
                                        ".gscrollbar-fixer {margin-right: ".concat(
                                            s,
                                            "px}"
                                        )),
                                    document.head.appendChild(o),
                                    u(r, "gscrollbar-fixer");
                            }
                            u(r, "glightbox-open"),
                                u(K, "glightbox-open"),
                                $ &&
                                    (u(document.body, "glightbox-mobile"),
                                    (this.settings.slideEffect = "slide")),
                                this.showSlide(i, !0),
                                1 === this.elements.length
                                    ? (u(
                                          this.prevButton,
                                          "glightbox-button-hidden"
                                      ),
                                      u(
                                          this.nextButton,
                                          "glightbox-button-hidden"
                                      ))
                                    : (c(
                                          this.prevButton,
                                          "glightbox-button-hidden"
                                      ),
                                      c(
                                          this.nextButton,
                                          "glightbox-button-hidden"
                                      )),
                                (this.lightboxOpen = !0),
                                this.trigger("open"),
                                T(this.settings.onOpen) &&
                                    this.settings.onOpen(),
                                Q && this.settings.touchNavigation && N(this),
                                this.settings.keyboardNavigation && z(this);
                        },
                    },
                    {
                        key: "openAt",
                        value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0;
                            this.open(null, t);
                        },
                    },
                    {
                        key: "showSlide",
                        value: function () {
                            var t = this,
                                e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0,
                                i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                            g(this.loader), (this.index = parseInt(e));
                            var n =
                                this.slidesContainer.querySelector(".current");
                            n && c(n, "current"), this.slideAnimateOut();
                            var r =
                                this.slidesContainer.querySelectorAll(
                                    ".gslide"
                                )[e];
                            if (h(r, "loaded"))
                                this.slideAnimateIn(r, i), v(this.loader);
                            else {
                                g(this.loader);
                                var s = this.elements[e],
                                    o = {
                                        index: this.index,
                                        slide: r,
                                        slideNode: r,
                                        slideConfig: s.slideConfig,
                                        slideIndex: this.index,
                                        trigger: s.node,
                                        player: null,
                                    };
                                this.trigger("slide_before_load", o),
                                    s.instance.setContent(r, function () {
                                        v(t.loader),
                                            t.resize(),
                                            t.slideAnimateIn(r, i),
                                            t.trigger("slide_after_load", o);
                                    });
                            }
                            (this.slideDescription = r.querySelector(
                                ".gslide-description"
                            )),
                                (this.slideDescriptionContained =
                                    this.slideDescription &&
                                    h(
                                        this.slideDescription.parentNode,
                                        "gslide-media"
                                    )),
                                this.settings.preload &&
                                    (this.preloadSlide(e + 1),
                                    this.preloadSlide(e - 1)),
                                this.updateNavigationClasses(),
                                (this.activeSlide = r);
                        },
                    },
                    {
                        key: "preloadSlide",
                        value: function (t) {
                            var e = this;
                            if (t < 0 || t > this.elements.length - 1)
                                return !1;
                            if (A(this.elements[t])) return !1;
                            var i =
                                this.slidesContainer.querySelectorAll(
                                    ".gslide"
                                )[t];
                            if (h(i, "loaded")) return !1;
                            var n = this.elements[t],
                                r = n.type,
                                s = {
                                    index: t,
                                    slide: i,
                                    slideNode: i,
                                    slideConfig: n.slideConfig,
                                    slideIndex: t,
                                    trigger: n.node,
                                    player: null,
                                };
                            this.trigger("slide_before_load", s),
                                "video" === r || "external" === r
                                    ? setTimeout(function () {
                                          n.instance.setContent(i, function () {
                                              e.trigger("slide_after_load", s);
                                          });
                                      }, 200)
                                    : n.instance.setContent(i, function () {
                                          e.trigger("slide_after_load", s);
                                      });
                        },
                    },
                    {
                        key: "prevSlide",
                        value: function () {
                            this.goToSlide(this.index - 1);
                        },
                    },
                    {
                        key: "nextSlide",
                        value: function () {
                            this.goToSlide(this.index + 1);
                        },
                    },
                    {
                        key: "goToSlide",
                        value: function () {
                            var t =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0];
                            if (
                                ((this.prevActiveSlide = this.activeSlide),
                                (this.prevActiveSlideIndex = this.index),
                                !this.loop() &&
                                    (t < 0 || t > this.elements.length - 1))
                            )
                                return !1;
                            t < 0
                                ? (t = this.elements.length - 1)
                                : t >= this.elements.length && (t = 0),
                                this.showSlide(t);
                        },
                    },
                    {
                        key: "insertSlide",
                        value: function () {
                            var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : -1;
                            e < 0 && (e = this.elements.length);
                            var i = new Z(t, this, e),
                                n = i.getConfig(),
                                r = s({}, n),
                                o = i.create(),
                                a = this.elements.length - 1;
                            (r.index = e),
                                (r.node = !1),
                                (r.instance = i),
                                (r.slideConfig = n),
                                this.elements.splice(e, 0, r);
                            var l = null,
                                u = null;
                            if (this.slidesContainer) {
                                if (e > a) this.slidesContainer.appendChild(o);
                                else {
                                    var c =
                                        this.slidesContainer.querySelectorAll(
                                            ".gslide"
                                        )[e];
                                    this.slidesContainer.insertBefore(o, c);
                                }
                                ((this.settings.preload &&
                                    0 == this.index &&
                                    0 == e) ||
                                    this.index - 1 == e ||
                                    this.index + 1 == e) &&
                                    this.preloadSlide(e),
                                    0 === this.index &&
                                        0 === e &&
                                        (this.index = 1),
                                    this.updateNavigationClasses(),
                                    (l =
                                        this.slidesContainer.querySelectorAll(
                                            ".gslide"
                                        )[e]),
                                    (u = this.getSlidePlayerInstance(e)),
                                    (r.slideNode = l);
                            }
                            this.trigger("slide_inserted", {
                                index: e,
                                slide: l,
                                slideNode: l,
                                slideConfig: n,
                                slideIndex: e,
                                trigger: null,
                                player: u,
                            }),
                                T(this.settings.slideInserted) &&
                                    this.settings.slideInserted({
                                        index: e,
                                        slide: l,
                                        player: u,
                                    });
                        },
                    },
                    {
                        key: "removeSlide",
                        value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : -1;
                            if (t < 0 || t > this.elements.length - 1)
                                return !1;
                            var e =
                                this.slidesContainer &&
                                this.slidesContainer.querySelectorAll(
                                    ".gslide"
                                )[t];
                            e &&
                                (this.getActiveSlideIndex() == t &&
                                    (t == this.elements.length - 1
                                        ? this.prevSlide()
                                        : this.nextSlide()),
                                e.parentNode.removeChild(e)),
                                this.elements.splice(t, 1),
                                this.trigger("slide_removed", t),
                                T(this.settings.slideRemoved) &&
                                    this.settings.slideRemoved(t);
                        },
                    },
                    {
                        key: "slideAnimateIn",
                        value: function (t, e) {
                            var i = this,
                                n = t.querySelector(".gslide-media"),
                                r = t.querySelector(".gslide-description"),
                                s = {
                                    index: this.prevActiveSlideIndex,
                                    slide: this.prevActiveSlide,
                                    slideNode: this.prevActiveSlide,
                                    slideIndex: this.prevActiveSlide,
                                    slideConfig: A(this.prevActiveSlideIndex)
                                        ? null
                                        : this.elements[
                                              this.prevActiveSlideIndex
                                          ].slideConfig,
                                    trigger: A(this.prevActiveSlideIndex)
                                        ? null
                                        : this.elements[
                                              this.prevActiveSlideIndex
                                          ].node,
                                    player: this.getSlidePlayerInstance(
                                        this.prevActiveSlideIndex
                                    ),
                                },
                                o = {
                                    index: this.index,
                                    slide: this.activeSlide,
                                    slideNode: this.activeSlide,
                                    slideConfig:
                                        this.elements[this.index].slideConfig,
                                    slideIndex: this.index,
                                    trigger: this.elements[this.index].node,
                                    player: this.getSlidePlayerInstance(
                                        this.index
                                    ),
                                };
                            if (
                                (n.offsetWidth > 0 &&
                                    r &&
                                    (v(r), (r.style.display = "")),
                                c(t, this.effectsClasses),
                                e)
                            )
                                f(
                                    t,
                                    this.settings.cssEfects[
                                        this.settings.openEffect
                                    ].in,
                                    function () {
                                        i.settings.autoplayVideos &&
                                            i.slidePlayerPlay(t),
                                            i.trigger("slide_changed", {
                                                prev: s,
                                                current: o,
                                            }),
                                            T(i.settings.afterSlideChange) &&
                                                i.settings.afterSlideChange.apply(
                                                    i,
                                                    [s, o]
                                                );
                                    }
                                );
                            else {
                                var a = this.settings.slideEffect,
                                    l =
                                        "none" !== a
                                            ? this.settings.cssEfects[a].in
                                            : a;
                                this.prevActiveSlideIndex > this.index &&
                                    "slide" == this.settings.slideEffect &&
                                    (l = this.settings.cssEfects.slideBack.in),
                                    f(t, l, function () {
                                        i.settings.autoplayVideos &&
                                            i.slidePlayerPlay(t),
                                            i.trigger("slide_changed", {
                                                prev: s,
                                                current: o,
                                            }),
                                            T(i.settings.afterSlideChange) &&
                                                i.settings.afterSlideChange.apply(
                                                    i,
                                                    [s, o]
                                                );
                                    });
                            }
                            setTimeout(function () {
                                i.resize(t);
                            }, 100),
                                u(t, "current");
                        },
                    },
                    {
                        key: "slideAnimateOut",
                        value: function () {
                            if (!this.prevActiveSlide) return !1;
                            var t = this.prevActiveSlide;
                            c(t, this.effectsClasses), u(t, "prev");
                            var e = this.settings.slideEffect,
                                i =
                                    "none" !== e
                                        ? this.settings.cssEfects[e].out
                                        : e;
                            this.slidePlayerPause(t),
                                this.trigger("slide_before_change", {
                                    prev: {
                                        index: this.prevActiveSlideIndex,
                                        slide: this.prevActiveSlide,
                                        slideNode: this.prevActiveSlide,
                                        slideIndex: this.prevActiveSlideIndex,
                                        slideConfig: A(
                                            this.prevActiveSlideIndex
                                        )
                                            ? null
                                            : this.elements[
                                                  this.prevActiveSlideIndex
                                              ].slideConfig,
                                        trigger: A(this.prevActiveSlideIndex)
                                            ? null
                                            : this.elements[
                                                  this.prevActiveSlideIndex
                                              ].node,
                                        player: this.getSlidePlayerInstance(
                                            this.prevActiveSlideIndex
                                        ),
                                    },
                                    current: {
                                        index: this.index,
                                        slide: this.activeSlide,
                                        slideNode: this.activeSlide,
                                        slideIndex: this.index,
                                        slideConfig:
                                            this.elements[this.index]
                                                .slideConfig,
                                        trigger: this.elements[this.index].node,
                                        player: this.getSlidePlayerInstance(
                                            this.index
                                        ),
                                    },
                                }),
                                T(this.settings.beforeSlideChange) &&
                                    this.settings.beforeSlideChange.apply(
                                        this,
                                        [
                                            {
                                                index: this
                                                    .prevActiveSlideIndex,
                                                slide: this.prevActiveSlide,
                                                player: this.getSlidePlayerInstance(
                                                    this.prevActiveSlideIndex
                                                ),
                                            },
                                            {
                                                index: this.index,
                                                slide: this.activeSlide,
                                                player: this.getSlidePlayerInstance(
                                                    this.index
                                                ),
                                            },
                                        ]
                                    ),
                                this.prevActiveSlideIndex > this.index &&
                                    "slide" == this.settings.slideEffect &&
                                    (i = this.settings.cssEfects.slideBack.out),
                                f(t, i, function () {
                                    var e =
                                            t.querySelector(
                                                ".ginner-container"
                                            ),
                                        i = t.querySelector(".gslide-media"),
                                        n = t.querySelector(
                                            ".gslide-description"
                                        );
                                    (e.style.transform = ""),
                                        (i.style.transform = ""),
                                        c(i, "greset"),
                                        (i.style.opacity = ""),
                                        n && (n.style.opacity = ""),
                                        c(t, "prev");
                                });
                        },
                    },
                    {
                        key: "getAllPlayers",
                        value: function () {
                            return this.videoPlayers;
                        },
                    },
                    {
                        key: "getSlidePlayerInstance",
                        value: function (t) {
                            var e = "gvideo" + t,
                                i = this.getAllPlayers();
                            return !(!M(i, e) || !i[e]) && i[e];
                        },
                    },
                    {
                        key: "stopSlideVideo",
                        value: function (t) {
                            if (E(t)) {
                                var e = t.querySelector(".gvideo-wrapper");
                                e && (t = e.getAttribute("data-index"));
                            }
                            console.log(
                                "stopSlideVideo is deprecated, use slidePlayerPause"
                            );
                            var i = this.getSlidePlayerInstance(t);
                            i && i.playing && i.pause();
                        },
                    },
                    {
                        key: "slidePlayerPause",
                        value: function (t) {
                            if (E(t)) {
                                var e = t.querySelector(".gvideo-wrapper");
                                e && (t = e.getAttribute("data-index"));
                            }
                            var i = this.getSlidePlayerInstance(t);
                            i && i.playing && i.pause();
                        },
                    },
                    {
                        key: "playSlideVideo",
                        value: function (t) {
                            if (E(t)) {
                                var e = t.querySelector(".gvideo-wrapper");
                                e && (t = e.getAttribute("data-index"));
                            }
                            console.log(
                                "playSlideVideo is deprecated, use slidePlayerPlay"
                            );
                            var i = this.getSlidePlayerInstance(t);
                            i && !i.playing && i.play();
                        },
                    },
                    {
                        key: "slidePlayerPlay",
                        value: function (t) {
                            var e;
                            if (
                                !$ ||
                                (null !== (e = this.settings.plyr.config) &&
                                    void 0 !== e &&
                                    e.muted)
                            ) {
                                if (E(t)) {
                                    var i = t.querySelector(".gvideo-wrapper");
                                    i && (t = i.getAttribute("data-index"));
                                }
                                var n = this.getSlidePlayerInstance(t);
                                n &&
                                    !n.playing &&
                                    (n.play(),
                                    this.settings.autofocusVideos &&
                                        n.elements.container.focus());
                            }
                        },
                    },
                    {
                        key: "setElements",
                        value: function (t) {
                            var e = this;
                            this.settings.elements = !1;
                            var i = [];
                            t &&
                                t.length &&
                                o(t, function (t, n) {
                                    var r = new Z(t, e, n),
                                        o = r.getConfig(),
                                        a = s({}, o);
                                    (a.slideConfig = o),
                                        (a.instance = r),
                                        (a.index = n),
                                        i.push(a);
                                }),
                                (this.elements = i),
                                this.lightboxOpen &&
                                    ((this.slidesContainer.innerHTML = ""),
                                    this.elements.length &&
                                        (o(this.elements, function () {
                                            var t = m(e.settings.slideHTML);
                                            e.slidesContainer.appendChild(t);
                                        }),
                                        this.showSlide(0, !0)));
                        },
                    },
                    {
                        key: "getElementIndex",
                        value: function (t) {
                            var e = !1;
                            return (
                                o(this.elements, function (i, n) {
                                    if (M(i, "node") && i.node == t)
                                        return (e = n), !0;
                                }),
                                e
                            );
                        },
                    },
                    {
                        key: "getElements",
                        value: function () {
                            var t = this,
                                e = [];
                            (this.elements = this.elements
                                ? this.elements
                                : []),
                                !A(this.settings.elements) &&
                                    k(this.settings.elements) &&
                                    this.settings.elements.length &&
                                    o(this.settings.elements, function (i, n) {
                                        var r = new Z(i, t, n),
                                            o = r.getConfig(),
                                            a = s({}, o);
                                        (a.node = !1),
                                            (a.index = n),
                                            (a.instance = r),
                                            (a.slideConfig = o),
                                            e.push(a);
                                    });
                            var i = !1;
                            return (
                                this.getSelector() &&
                                    (i = document.querySelectorAll(
                                        this.getSelector()
                                    )),
                                i
                                    ? (o(i, function (i, n) {
                                          var r = new Z(i, t, n),
                                              o = r.getConfig(),
                                              a = s({}, o);
                                          (a.node = i),
                                              (a.index = n),
                                              (a.instance = r),
                                              (a.slideConfig = o),
                                              (a.gallery =
                                                  i.getAttribute(
                                                      "data-gallery"
                                                  )),
                                              e.push(a);
                                      }),
                                      e)
                                    : e
                            );
                        },
                    },
                    {
                        key: "getGalleryElements",
                        value: function (t, e) {
                            return t.filter(function (t) {
                                return t.gallery == e;
                            });
                        },
                    },
                    {
                        key: "getSelector",
                        value: function () {
                            return (
                                !this.settings.elements &&
                                (this.settings.selector &&
                                "data-" ==
                                    this.settings.selector.substring(0, 5)
                                    ? "*[".concat(this.settings.selector, "]")
                                    : this.settings.selector)
                            );
                        },
                    },
                    {
                        key: "getActiveSlide",
                        value: function () {
                            return this.slidesContainer.querySelectorAll(
                                ".gslide"
                            )[this.index];
                        },
                    },
                    {
                        key: "getActiveSlideIndex",
                        value: function () {
                            return this.index;
                        },
                    },
                    {
                        key: "getAnimationClasses",
                        value: function () {
                            var t = [];
                            for (var e in this.settings.cssEfects)
                                if (this.settings.cssEfects.hasOwnProperty(e)) {
                                    var i = this.settings.cssEfects[e];
                                    t.push("g".concat(i.in)),
                                        t.push("g".concat(i.out));
                                }
                            return t.join(" ");
                        },
                    },
                    {
                        key: "build",
                        value: function () {
                            var t = this;
                            if (this.built) return !1;
                            var e = document.body.childNodes,
                                i = [];
                            o(e, function (t) {
                                t.parentNode == document.body &&
                                    "#" !== t.nodeName.charAt(0) &&
                                    t.hasAttribute &&
                                    !t.hasAttribute("aria-hidden") &&
                                    (i.push(t),
                                    t.setAttribute("aria-hidden", "true"));
                            });
                            var n = M(this.settings.svg, "next")
                                    ? this.settings.svg.next
                                    : "",
                                r = M(this.settings.svg, "prev")
                                    ? this.settings.svg.prev
                                    : "",
                                s = M(this.settings.svg, "close")
                                    ? this.settings.svg.close
                                    : "",
                                a = this.settings.lightboxHTML;
                            (a = m(
                                (a = (a = (a = a.replace(
                                    /{nextSVG}/g,
                                    n
                                )).replace(/{prevSVG}/g, r)).replace(
                                    /{closeSVG}/g,
                                    s
                                ))
                            )),
                                document.body.appendChild(a);
                            var c = document.getElementById("glightbox-body");
                            this.modal = c;
                            var f = c.querySelector(".gclose");
                            (this.prevButton = c.querySelector(".gprev")),
                                (this.nextButton = c.querySelector(".gnext")),
                                (this.overlay = c.querySelector(".goverlay")),
                                (this.loader = c.querySelector(".gloader")),
                                (this.slidesContainer =
                                    document.getElementById(
                                        "glightbox-slider"
                                    )),
                                (this.bodyHiddenChildElms = i),
                                (this.events = {}),
                                u(
                                    this.modal,
                                    "glightbox-" + this.settings.skin
                                ),
                                this.settings.closeButton &&
                                    f &&
                                    (this.events.close = l("click", {
                                        onElement: f,
                                        withCallback: function (e, i) {
                                            e.preventDefault(), t.close();
                                        },
                                    })),
                                f &&
                                    !this.settings.closeButton &&
                                    f.parentNode.removeChild(f),
                                this.nextButton &&
                                    (this.events.next = l("click", {
                                        onElement: this.nextButton,
                                        withCallback: function (e, i) {
                                            e.preventDefault(), t.nextSlide();
                                        },
                                    })),
                                this.prevButton &&
                                    (this.events.prev = l("click", {
                                        onElement: this.prevButton,
                                        withCallback: function (e, i) {
                                            e.preventDefault(), t.prevSlide();
                                        },
                                    })),
                                this.settings.closeOnOutsideClick &&
                                    (this.events.outClose = l("click", {
                                        onElement: c,
                                        withCallback: function (e, i) {
                                            t.preventOutsideClick ||
                                                h(
                                                    document.body,
                                                    "glightbox-mobile"
                                                ) ||
                                                d(
                                                    e.target,
                                                    ".ginner-container"
                                                ) ||
                                                d(e.target, ".gbtn") ||
                                                h(e.target, "gnext") ||
                                                h(e.target, "gprev") ||
                                                t.close();
                                        },
                                    })),
                                o(this.elements, function (e, i) {
                                    t.slidesContainer.appendChild(
                                        e.instance.create()
                                    ),
                                        (e.slideNode =
                                            t.slidesContainer.querySelectorAll(
                                                ".gslide"
                                            )[i]);
                                }),
                                Q && u(document.body, "glightbox-touch"),
                                (this.events.resize = l("resize", {
                                    onElement: window,
                                    withCallback: function () {
                                        t.resize();
                                    },
                                })),
                                (this.built = !0);
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : null;
                            if (
                                (t = t || this.activeSlide) &&
                                !h(t, "zoomed")
                            ) {
                                var e = y(),
                                    i = t.querySelector(".gvideo-wrapper"),
                                    n = t.querySelector(".gslide-image"),
                                    r = this.slideDescription,
                                    s = e.width,
                                    o = e.height;
                                if (
                                    (s <= 768
                                        ? u(document.body, "glightbox-mobile")
                                        : c(document.body, "glightbox-mobile"),
                                    i || n)
                                ) {
                                    var a = !1;
                                    if (
                                        (r &&
                                            (h(r, "description-bottom") ||
                                                h(r, "description-top")) &&
                                            !h(r, "gabsolute") &&
                                            (a = !0),
                                        n)
                                    )
                                        if (s <= 768) n.querySelector("img");
                                        else if (a) {
                                            var l = r.offsetHeight,
                                                d = n.querySelector("img");
                                            d.setAttribute(
                                                "style",
                                                "max-height: calc(100vh - ".concat(
                                                    l,
                                                    "px)"
                                                )
                                            ),
                                                r.setAttribute(
                                                    "style",
                                                    "max-width: ".concat(
                                                        d.offsetWidth,
                                                        "px;"
                                                    )
                                                );
                                        }
                                    if (i) {
                                        var f = M(
                                            this.settings.plyr.config,
                                            "ratio"
                                        )
                                            ? this.settings.plyr.config.ratio
                                            : "";
                                        if (!f) {
                                            var p = i.clientWidth,
                                                g = i.clientHeight,
                                                v = p / g;
                                            f = ""
                                                .concat(p / v, ":")
                                                .concat(g / v);
                                        }
                                        var m = f.split(":"),
                                            _ = this.settings.videosWidth,
                                            x = this.settings.videosWidth,
                                            b =
                                                (x =
                                                    L(_) ||
                                                    -1 !== _.indexOf("px")
                                                        ? parseInt(_)
                                                        : -1 !== _.indexOf("vw")
                                                        ? (s * parseInt(_)) /
                                                          100
                                                        : -1 !== _.indexOf("vh")
                                                        ? (o * parseInt(_)) /
                                                          100
                                                        : -1 !== _.indexOf("%")
                                                        ? (s * parseInt(_)) /
                                                          100
                                                        : parseInt(
                                                              i.clientWidth
                                                          )) /
                                                (parseInt(m[0]) /
                                                    parseInt(m[1]));
                                        if (
                                            ((b = Math.floor(b)),
                                            a && (o -= r.offsetHeight),
                                            x > s || b > o || (o < b && s > x))
                                        ) {
                                            var w = i.offsetWidth,
                                                T = i.offsetHeight,
                                                S = o / T,
                                                E = {
                                                    width: w * S,
                                                    height: T * S,
                                                };
                                            i.parentNode.setAttribute(
                                                "style",
                                                "max-width: ".concat(
                                                    E.width,
                                                    "px"
                                                )
                                            ),
                                                a &&
                                                    r.setAttribute(
                                                        "style",
                                                        "max-width: ".concat(
                                                            E.width,
                                                            "px;"
                                                        )
                                                    );
                                        } else
                                            (i.parentNode.style.maxWidth =
                                                "".concat(_)),
                                                a &&
                                                    r.setAttribute(
                                                        "style",
                                                        "max-width: ".concat(
                                                            _,
                                                            ";"
                                                        )
                                                    );
                                    }
                                }
                            }
                        },
                    },
                    {
                        key: "reload",
                        value: function () {
                            this.init();
                        },
                    },
                    {
                        key: "updateNavigationClasses",
                        value: function () {
                            var t = this.loop();
                            c(this.nextButton, "disabled"),
                                c(this.prevButton, "disabled"),
                                0 == this.index && this.elements.length - 1 == 0
                                    ? (u(this.prevButton, "disabled"),
                                      u(this.nextButton, "disabled"))
                                    : 0 !== this.index || t
                                    ? this.index !== this.elements.length - 1 ||
                                      t ||
                                      u(this.nextButton, "disabled")
                                    : u(this.prevButton, "disabled");
                        },
                    },
                    {
                        key: "loop",
                        value: function () {
                            var t = M(this.settings, "loopAtEnd")
                                ? this.settings.loopAtEnd
                                : null;
                            return (t = M(this.settings, "loop")
                                ? this.settings.loop
                                : t);
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            var t = this;
                            if (!this.lightboxOpen) {
                                if (this.events) {
                                    for (var e in this.events)
                                        this.events.hasOwnProperty(e) &&
                                            this.events[e].destroy();
                                    this.events = null;
                                }
                                return !1;
                            }
                            if (this.closing) return !1;
                            (this.closing = !0),
                                this.slidePlayerPause(this.activeSlide),
                                this.fullElementsList &&
                                    (this.elements = this.fullElementsList),
                                this.bodyHiddenChildElms.length &&
                                    o(this.bodyHiddenChildElms, function (t) {
                                        t.removeAttribute("aria-hidden");
                                    }),
                                u(this.modal, "glightbox-closing"),
                                f(
                                    this.overlay,
                                    "none" == this.settings.openEffect
                                        ? "none"
                                        : this.settings.cssEfects.fade.out
                                ),
                                f(
                                    this.activeSlide,
                                    this.settings.cssEfects[
                                        this.settings.closeEffect
                                    ].out,
                                    function () {
                                        if (
                                            ((t.activeSlide = null),
                                            (t.prevActiveSlideIndex = null),
                                            (t.prevActiveSlide = null),
                                            (t.built = !1),
                                            t.events)
                                        ) {
                                            for (var e in t.events)
                                                t.events.hasOwnProperty(e) &&
                                                    t.events[e].destroy();
                                            t.events = null;
                                        }
                                        var i = document.body;
                                        c(K, "glightbox-open"),
                                            c(
                                                i,
                                                "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"
                                            ),
                                            t.modal.parentNode.removeChild(
                                                t.modal
                                            ),
                                            t.trigger("close"),
                                            T(t.settings.onClose) &&
                                                t.settings.onClose();
                                        var n =
                                            document.querySelector(
                                                ".gcss-styles"
                                            );
                                        n && n.parentNode.removeChild(n),
                                            (t.lightboxOpen = !1),
                                            (t.closing = null);
                                    }
                                );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.close(),
                                this.clearAllEvents(),
                                this.baseEvents && this.baseEvents.destroy();
                        },
                    },
                    {
                        key: "on",
                        value: function (t, e) {
                            var i =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                            if (!t || !T(e))
                                throw new TypeError(
                                    "Event name and callback must be defined"
                                );
                            this.apiEvents.push({
                                evt: t,
                                once: i,
                                callback: e,
                            });
                        },
                    },
                    {
                        key: "once",
                        value: function (t, e) {
                            this.on(t, e, !0);
                        },
                    },
                    {
                        key: "trigger",
                        value: function (t) {
                            var e = this,
                                i =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null,
                                n = [];
                            o(this.apiEvents, function (e, r) {
                                var s = e.evt,
                                    o = e.once,
                                    a = e.callback;
                                s == t && (a(i), o && n.push(r));
                            }),
                                n.length &&
                                    o(n, function (t) {
                                        return e.apiEvents.splice(t, 1);
                                    });
                        },
                    },
                    {
                        key: "clearAllEvents",
                        value: function () {
                            this.apiEvents.splice(0, this.apiEvents.length);
                        },
                    },
                    {
                        key: "version",
                        value: function () {
                            return "3.1.0";
                        },
                    },
                ]),
                t
            );
        })();
    return function () {
        var t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
            e = new tt(t);
        return e.init(), e;
    };
});
