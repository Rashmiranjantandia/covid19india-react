(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{108:function(t,n,e){"use strict";var r=e(2),i=e(83),a=i.a?r.useLayoutEffect:r.useEffect,c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),n=t[0],e=t[1],i=Object(r.useState)(c),o=i[0],u=i[1],l=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,e=n.x,r=n.y,i=n.width,a=n.height,c=n.top,o=n.left,l=n.bottom,f=n.right;u({x:e,y:r,width:i,height:a,top:c,left:o,bottom:l,right:f})}}))}),[]);return a((function(){if(n)return l.observe(n),function(){l.disconnect()}}),[n]),[e,o]}:function(){return[i.b,c]}},127:function(t,n,e){"use strict";n.a=function(t){for(var n;n=t.sourceEvent;)t=n;return t}},145:function(t,n,e){"use strict";e.d(n,"b",(function(){return d})),e.d(n,"a",(function(){return h}));var r=Array.prototype.slice,i=function(t){return t},a=1e-6;function c(t){return"translate("+t+",0)"}function o(t){return"translate(0,"+t+")"}function u(t){return function(n){return+t(n)}}function l(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function f(){return!this.__axis}function s(t,n){var e=[],s=null,d=null,h=6,b=6,j=3,m="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,g=1===t||4===t?-1:1,v=4===t||2===t?"x":"y",O=1===t||3===t?c:o;function p(r){var c=null==s?n.ticks?n.ticks.apply(n,e):n.domain():s,o=null==d?n.tickFormat?n.tickFormat.apply(n,e):i:d,p=Math.max(h,0)+j,x=n.range(),y=+x[0]+m,k=+x[x.length-1]+m,M=(n.bandwidth?l:u)(n.copy(),m),A=r.selection?r.selection():r,w=A.selectAll(".domain").data([null]),E=A.selectAll(".tick").data(c,n).order(),N=E.exit(),S=E.enter().append("g").attr("class","tick"),T=E.select("line"),C=E.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),E=E.merge(S),T=T.merge(S.append("line").attr("stroke","currentColor").attr(v+"2",g*h)),C=C.merge(S.append("text").attr("fill","currentColor").attr(v,g*p).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==A&&(w=w.transition(r),E=E.transition(r),T=T.transition(r),C=C.transition(r),N=N.transition(r).attr("opacity",a).attr("transform",(function(t){return isFinite(t=M(t))?O(t+m):this.getAttribute("transform")})),S.attr("opacity",a).attr("transform",(function(t){var n=this.parentNode.__axis;return O((n&&isFinite(n=n(t))?n:M(t))+m)}))),N.remove(),w.attr("d",4===t||2===t?b?"M"+g*b+","+y+"H"+m+"V"+k+"H"+g*b:"M"+m+","+y+"V"+k:b?"M"+y+","+g*b+"V"+m+"H"+k+"V"+g*b:"M"+y+","+m+"H"+k),E.attr("opacity",1).attr("transform",(function(t){return O(M(t)+m)})),T.attr(v+"2",g*h),C.attr(v,g*p).text(o),A.filter(f).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),A.each((function(){this.__axis=M}))}return p.scale=function(t){return arguments.length?(n=t,p):n},p.ticks=function(){return e=r.call(arguments),p},p.tickArguments=function(t){return arguments.length?(e=null==t?[]:r.call(t),p):e.slice()},p.tickValues=function(t){return arguments.length?(s=null==t?null:r.call(t),p):s&&s.slice()},p.tickFormat=function(t){return arguments.length?(d=t,p):d},p.tickSize=function(t){return arguments.length?(h=b=+t,p):h},p.tickSizeInner=function(t){return arguments.length?(h=+t,p):h},p.tickSizeOuter=function(t){return arguments.length?(b=+t,p):b},p.tickPadding=function(t){return arguments.length?(j=+t,p):j},p.offset=function(t){return arguments.length?(m=+t,p):m},p}function d(t){return s(2,t)}function h(t){return s(3,t)}},173:function(t,n,e){"use strict";e.d(n,"b",(function(){return b})),e.d(n,"a",(function(){return j}));var r=e(687),i=e(711),a=e(121),c=e(101),o=e(92);function u(t){return Math.log(t)}function l(t){return Math.exp(t)}function f(t){return-Math.log(-t)}function s(t){return-Math.exp(-t)}function d(t){return isFinite(t)?+("1e"+t):t<0?0:t}function h(t){return function(n){return-t(-n)}}function b(t){var n,e,c=t(u,l),o=c.domain,b=10;function j(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(b),e=function(t){return 10===t?d:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(b),o()[0]<0?(n=h(n),e=h(e),t(f,s)):t(u,l),c}return c.base=function(t){return arguments.length?(b=+t,j()):b},c.domain=function(t){return arguments.length?(o(t),j()):o()},c.ticks=function(t){var i,a=o(),c=a[0],u=a[a.length-1];(i=u<c)&&(d=c,c=u,u=d);var l,f,s,d=n(c),h=n(u),j=null==t?10:+t,m=[];if(!(b%1)&&h-d<j){if(d=Math.floor(d),h=Math.ceil(h),c>0){for(;d<=h;++d)for(f=1,l=e(d);f<b;++f)if(!((s=l*f)<c)){if(s>u)break;m.push(s)}}else for(;d<=h;++d)for(f=b-1,l=e(d);f>=1;--f)if(!((s=l*f)<c)){if(s>u)break;m.push(s)}2*m.length<j&&(m=Object(r.a)(c,u,j))}else m=Object(r.a)(d,h,Math.min(h-d,j)).map(e);return i?m.reverse():m},c.tickFormat=function(t,r){if(null==r&&(r=10===b?".0e":","),"function"!==typeof r&&(r=Object(i.a)(r)),t===1/0)return r;null==t&&(t=10);var a=Math.max(1,b*t/c.ticks().length);return function(t){var i=t/e(Math.round(n(t)));return i*b<b-.5&&(i*=b),i<=a?r(t):""}},c.nice=function(){return o(Object(a.a)(o(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},c}function j(){var t=b(Object(c.d)()).domain([1,10]);return t.copy=function(){return Object(c.a)(t,j()).base(t.base())},o.b.apply(t,arguments),t}},178:function(t,n,e){"use strict";var r=e(127);n.a=function(t,n){if(t=Object(r.a)(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(n.getScreenCTM().inverse())).x,i.y]}if(n.getBoundingClientRect){var a=n.getBoundingClientRect();return[t.clientX-a.left-n.clientLeft,t.clientY-a.top-n.clientTop]}}return[t.pageX,t.pageY]}},659:function(t,n,e){"use strict";var r=e(689),i=e(125),a=e(124),c=e(140),o=e(172),u=e(141);n.a=function(t,n,e){var l=null,f=Object(a.a)(!0),s=null,d=c.a,h=null;function b(a){var c,o,u,b,j,m=(a=Object(i.a)(a)).length,g=!1,v=new Array(m),O=new Array(m);for(null==s&&(h=d(j=Object(r.a)())),c=0;c<=m;++c){if(!(c<m&&f(b=a[c],c,a))===g)if(g=!g)o=c,h.areaStart(),h.lineStart();else{for(h.lineEnd(),h.lineStart(),u=c-1;u>=o;--u)h.point(v[u],O[u]);h.lineEnd(),h.areaEnd()}g&&(v[c]=+t(b,c,a),O[c]=+n(b,c,a),h.point(l?+l(b,c,a):v[c],e?+e(b,c,a):O[c]))}if(j)return h=null,j+""||null}function j(){return Object(o.a)().defined(f).curve(d).context(s)}return t="function"===typeof t?t:void 0===t?u.a:Object(a.a)(+t),n="function"===typeof n?n:void 0===n?Object(a.a)(0):Object(a.a)(+n),e="function"===typeof e?e:void 0===e?u.b:Object(a.a)(+e),b.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(a.a)(+n),l=null,b):t},b.x0=function(n){return arguments.length?(t="function"===typeof n?n:Object(a.a)(+n),b):t},b.x1=function(t){return arguments.length?(l=null==t?null:"function"===typeof t?t:Object(a.a)(+t),b):l},b.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(a.a)(+t),e=null,b):n},b.y0=function(t){return arguments.length?(n="function"===typeof t?t:Object(a.a)(+t),b):n},b.y1=function(t){return arguments.length?(e=null==t?null:"function"===typeof t?t:Object(a.a)(+t),b):e},b.lineX0=b.lineY0=function(){return j().x(t).y(n)},b.lineY1=function(){return j().x(t).y(e)},b.lineX1=function(){return j().x(l).y(n)},b.defined=function(t){return arguments.length?(f="function"===typeof t?t:Object(a.a)(!!t),b):f},b.curve=function(t){return arguments.length?(d=t,null!=s&&(h=d(s)),b):d},b.context=function(t){return arguments.length?(null==t?s=h=null:h=d(s=t),b):s},b}},702:function(t,n,e){"use strict";e.r(n);var r=e(37),i=e(7),a=e(20),c=e(84),o=e.n(c),u=e(126),l=e(643),f=e(642),s=e(145),d=e(120),h=e(709),b=e(143),j=e(173),m=e(178),g=e(688),v=e(659),O=e(690),p=e(172),x=(e(100),e(72)),y=e(82),k=e.n(y),M=e(2),A=e(726),w=e(108),E=e(18),N=15,S=35,T=25,C=25,V=.7;function F(t){var n=t.statistics,e=t.timeseries,c=t.dates,y=t.endDate,k=t.chartType,F=t.isUniform,H=t.isLog,R=t.isMovingAverage,z=Object(A.a)().t,P=Object(M.useRef)([]),Y=Object(w.a)(),_=Object(r.a)(Y,2),L=_[0],X=_[1],D=X.width,U=X.height,G=Object(M.useState)(c[c.length-1]),I=Object(r.a)(G,2),B=I[0],J=I[1];Object(M.useEffect)((function(){J(c[c.length-1])}),[c]);var q=Object(M.useMemo)((function(){var t=c.length,n=Object(x.a)(Object(a.k)(c[t-1]),Object(a.k)(c[0])),e=D-S;return Math.max(0,e-C)/(1.25*n)<4}),[D,c]),K=Object(M.useMemo)((function(){var t=c.length,n=D-S;return Object(h.a)().clamp(!0).domain([Object(a.k)(c[0]||y),Object(a.k)(c[t-1]||y)]).range([C,n])}),[D,y,c]),Q=Object(M.useMemo)((function(){var t=U-T,r=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.domain();return n?t.domain([e[0],e[0]*Math.pow(e[1]/e[0],1.4285714285714286)]):t.domain([e[0],e[0]+(e[1]-e[0])/V]),t},o=Math.min(0,Object(u.a)(c,(function(t){return Object(a.h)(e[t],k,"active",{movingAverage:R})}))||0),f=Math.max(1,Object(l.a)(c,(function(t){return Math.max(Object(a.h)(e[t],k,"confirmed",{movingAverage:R}),Object(a.h)(e[t],k,"recovered",{movingAverage:R}),Object(a.h)(e[t],k,"deceased",{movingAverage:R}))}))||0),s=r(Object(b.a)().clamp(!0).domain([o,f]).range([t,N]).nice(4)),d=r(Object(j.a)().clamp(!0).domain([Math.max(1,o),Math.max(10,f)]).range([t,N]).nice(4),!0);return n.map((function(n){if(F&&"total"===k&&H&&i.r.includes(n))return d;if(F&&i.r.includes(n))return s;var o=Math.min(0,Object(u.a)(c,(function(t){return Object(a.h)(e[t],k,n,{movingAverage:R})}))||0),f=Math.max(1,Object(l.a)(c,(function(t){return Object(a.h)(e[t],k,n,{movingAverage:R})}))||0);return"total"===k&&H?r(Object(j.a)().clamp(!0).domain([Math.max(1,o),Math.max(10,f)]).range([t,N]).nice(4),!0):r(Object(b.a)().clamp(!0).domain(["total"===k||"active"!==n?0:o,"%"===i.w[n].format?Math.min(100,f):f]).range([t,N]).nice(4))}))}),[U,k,F,H,R,n,c,e]);Object(M.useEffect)((function(){if(D&&U){var t=c.length,r=D-S,o=U-T,u="delta"===k&&!R,l=function(t){return t.attr("class","x-axis").call(Object(s.a)(K).ticks(function(t){return t<480?4:6}(D)))},h=function(t,n){t.attr("class","x-axis2").call(Object(s.a)(K).tickValues([]).tickSize(0)).select(".domain").style("transform","translate3d(0, ".concat(n(0),"px, 0)")),n(0)!==o?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},b=function(t,n,e){return t.attr("class","y-axis").call(Object(s.b)(n).ticks(4).tickFormat((function(t){return Object(a.e)(t,e)})).tickPadding(4))};n.forEach((function(n,f){var s=P.current[f],m=Object(g.a)(s),y=m.transition().duration(i.c),M=Q[f],A=i.w[n].color,w="%"===i.w[n].format?"%":"short";m.select(".x-axis").style("transform","translate3d(0, ".concat(o,"px, 0)")).transition(y).call(l),m.select(".x-axis2").transition(y).call(h,M),m.select(".y-axis").style("transform","translate3d(".concat(r,"px, 0, 0)")).transition(y).call(b,M,w),m.selectAll("circle.normal").data(q?[]:c,(function(t){return t})).join((function(t){return t.append("circle").attr("class","normal").attr("fill",A).attr("stroke",A).attr("cx",(function(t){return K(Object(a.k)(t))})).attr("cy",(function(t){return M(u?0:Object(a.h)(e[t],k,n,{movingAverage:R}))})).attr("r",2)})).transition(y).attr("cx",(function(t){return K(Object(a.k)(t))})).attr("cy",(function(t){return M(Object(a.h)(e[t],k,n,{movingAverage:R}))}));var E=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(v.a)().curve(O.a).x((function(t){return K(Object(a.k)(t))})).y0(M(0)).y1(r?M(0):function(t){return M(Object(a.h)(e[t],k,n))})(t)};m.selectAll(".trend-area").data(t&&"delta"===k&&q?[c]:[]).join((function(t){return t.append("path").attr("class","trend-area").call((function(t){return t.attr("d",(function(t){return E(t,!0)})).transition(y).attr("d",E)}))}),(function(t){return t.call((function(t){return t.transition(y).attrTween("d",(function(t){var n=Object(g.a)(this).attr("d"),e=E(t);return Object(d.interpolatePath)(n,e)}))}))}),(function(t){return t.call((function(t){return t.transition(y).attr("d",(function(t){return E(t,!0)})).remove()}))})).transition(y).attr("opacity",R?.3:1),m.selectAll(".stem").data(t&&"delta"===k&&!q?c:[],(function(t){return t})).join((function(t){return t.append("line").attr("class","stem").attr("stroke-width",4).attr("x1",(function(t){return K(Object(a.k)(t))})).attr("y1",M(0)).attr("x2",(function(t){return K(Object(a.k)(t))})).attr("y2",M(0))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(y).attr("x1",(function(t){return K(Object(a.k)(t))})).attr("x2",(function(t){return K(Object(a.k)(t))})).attr("y1",M(0)).attr("y2",M(0)).remove()}))})).transition(y).attr("x1",(function(t){return K(Object(a.k)(t))})).attr("y1",M(0)).attr("x2",(function(t){return K(Object(a.k)(t))})).attr("y2",(function(t){return M(Object(a.h)(e[t],k,n))})).attr("opacity",R?.2:1);var N=Object(p.a)().curve(O.a).x((function(t){return K(Object(a.k)(t))})).y((function(t){return M(Object(a.h)(e[t],k,n,{movingAverage:R}))}));m.selectAll(".trend").data(t&&("total"===k||R)?[c]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke-width",4).attr("d",N).call((function(t){return t.transition(y).attr("opacity",1)}))}),(function(t){return t.call((function(t){return t.attr("opacity",1).transition(y).attrTween("d",(function(t){var n=Object(g.a)(this).attr("d"),e=N(t);return Object(d.interpolatePath)(n,e)}))}))}),(function(t){return t.call((function(t){return t.transition(y).attr("opacity",0).remove()}))})).attr("stroke",A+(q?"99":"50")),m.selectAll("*").attr("pointer-events","none"),m.on("mousemove",j).on("touchmove",(function(t){return j(t.touches[0])})).on("mouseout touchend",x)}))}function j(t){var n=Object(m.a)(t)[0],e=K.invert(n);if(!isNaN(e)){var r=(0,Object(f.a)((function(t){return Object(a.k)(t)})).left)(c,e,1),i=c[r-1],o=c[r];J(e-Object(a.k)(i)<Object(a.k)(o)-e?i:o)}}function x(n){J(c[t-1])}}),[D,U,k,R,q,K,Q,n,c,e]),Object(M.useEffect)((function(){n.forEach((function(t,n){var r=P.current[n],c=Object(g.a)(r),o=i.w[t].color,u=Q[n],l=c.transition().duration(i.c);c.selectAll("circle.condensed").data(q&&B?[B]:[],(function(t){return t})).join((function(n){return n.append("circle").attr("class","condensed").attr("fill",o).attr("stroke",o).attr("pointer-events","none").attr("cx",(function(t){return K(Object(a.k)(t))})).attr("cy",(function(n){return u(Object(a.h)(e[n],k,t,{movingAverage:R}))})).attr("r",4)})).transition(l).attr("cx",(function(t){return K(Object(a.k)(t))})).attr("cy",(function(n){return u(Object(a.h)(e[n],k,t,{movingAverage:R}))})),q||c.selectAll("circle").attr("r",(function(t){return t===B?4:2}))}))}),[k,R,q,B,K,Q,n,e]);var W=Object(M.useCallback)((function(t){if(B){var n=Object(a.h)(null===e||void 0===e?void 0:e[B],k,t,{movingAverage:R});if(!i.p.includes(t)||0!==n){var r=c[c.findIndex((function(t){return t===B}))-1];return n-Object(a.h)(null===e||void 0===e?void 0:e[r],k,t,{movingAverage:R})}}}),[e,c,B,k,R]),Z=Object(M.useMemo)((function(){return n.map((function(t,n){return{animationDelay:"".concat(250*n,"ms")}}))}),[n]);return Object(E.jsx)("div",{className:"Timeseries",children:n.map((function(t,n){var r=W(t,n),c=i.w[t];return Object(E.jsxs)("div",{className:o()("svg-parent fadeInUp","is-".concat(t)),style:Z[n],ref:0===n?L:null,children:[B&&Object(E.jsxs)("div",{className:o()("stats","is-".concat(t)),children:[Object(E.jsx)("h5",{className:"title",children:z(Object(a.a)(c.displayName))}),Object(E.jsx)("h5",{children:Object(a.c)(B,"dd MMMM")}),Object(E.jsxs)("div",{className:"stats-bottom",children:[Object(E.jsx)("h2",{children:Object(a.e)(Object(a.h)(null===e||void 0===e?void 0:e[B],k,t,{movingAverage:R}),"short"!==c.format?c.format:"int",t)}),Object(E.jsx)("h6",{children:"".concat(r>0?"+":"").concat(Object(a.e)(r,"short"!==c.format?c.format:"int",t))})]})]}),Object(E.jsxs)("svg",{ref:function(t){P.current[n]=t},preserveAspectRatio:"xMidYMid meet",children:[Object(E.jsx)("g",{className:"x-axis"}),Object(E.jsx)("g",{className:"x-axis2"}),Object(E.jsx)("g",{className:"y-axis"})]})]},t)}))})}var H=function(t,n){return!!k()(n.chartType,t.chartType)&&(!!k()(n.isUniform,t.isUniform)&&(!!k()(n.isLog,t.isLog)&&(!!k()(n.isMovingAverage,t.isMovingAverage)&&(!!k()(n.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&(!!k()(n.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(!!k()(n.endDate,t.endDate)&&(!!k()(n.statistics,t.statistics)&&!!k()(n.dates,t.dates))))))))};n.default=Object(M.memo)(F,H)}}]);
//# sourceMappingURL=19.c5470e98.chunk.js.map