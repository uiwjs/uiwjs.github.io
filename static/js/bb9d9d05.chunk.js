(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var a=n(8),r=n(18),c=n(14),l=n(22),s=n(15),i=n(16),o=n(17),u=n(4),p=n(5),d=n(3),f=n.n(d),b=n(2),h=n.n(b),v=n(19),m=n.n(v),y=n(110),O=(n(104),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r))),Object(p.a)(Object(u.a)(Object(u.a)(n)),"renderSvgPaths",function(e){var t=y[e];return null==t?null:t.map(function(e,t){return f.a.createElement("path",{key:t,d:e,fillRule:"evenodd"})})}),n}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,c=e.color,l=e.type,s=e.spin,i=e.verticalAlign,o=e.tagName,u=void 0===o?"span":o,d=Object(r.a)(e,["prefixCls","className","color","type","spin","verticalAlign","tagName"]),b=null;if(null==l||"boolean"==typeof l)return null;b="string"!=typeof l?f.a.cloneElement(l,{fill:c}):f.a.createElement("svg",{fill:c,viewBox:"0 0 20 20"},this.renderSvgPaths(l)),d.style=Object(a.a)({fill:"currentColor"},d.style);var h=Object(a.a)({},d,{className:m()(t,n,"".concat(t,"-").concat(i),Object(p.a)({},"".concat(t,"-spin"),s))});return f.a.createElement(u,h,b)}}]),t}(f.a.PureComponent));O.propTypes={prefixCls:h.a.string,type:h.a.oneOfType([h.a.element,h.a.string]),style:h.a.object,verticalAlign:h.a.oneOf(["middle","baseline"]),spin:h.a.bool},O.defaultProps={prefixCls:"w-icon",style:{},verticalAlign:"middle",spin:!1}},109:function(e,t,n){},114:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(23),r=n(5),c=n(18),l=n(14),s=n(22),i=n(15),o=n(16),u=n(17),p=n(3),d=n.n(p),f=n(2),b=n.n(f),h=n(19),v=n.n(h),m=(n(109),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,s=t.children,i=t.dashed,o=t.type,u=Object(c.a)(t,["prefixCls","className","children","dashed","type"]),p=v()(l,n,"".concat(n,"-").concat(o),(e={},Object(r.a)(e,"".concat(n,"-with-text"),s),Object(r.a)(e,"".concat(n,"-dashed"),!!i),e));return d.a.createElement("div",Object(a.a)({className:p},u),s&&d.a.createElement("span",{className:"".concat(n,"-inner-text")},s))}}]),t}(d.a.PureComponent));m.propTypes={prefixCls:b.a.string,type:b.a.string,dashed:b.a.bool},m.defaultProps={prefixCls:"w-divider",type:"horizontal",dashed:!1}},143:function(e,t,n){},280:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(23),r=n(5),c=n(18),l=n(14),s=n(22),i=n(15),o=n(16),u=n(17),p=n(3),d=n.n(p),f=n(2),b=n.n(f),h=n(19),v=n.n(h),m=(n(143),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,l=e.title,s=e.children,i=(e.capsule,e.color),o=e.titleColor,u=e.disabled,p=Object(c.a)(e,["prefixCls","className","title","children","capsule","color","titleColor","disabled"]),f=v()("".concat(t),n,Object(r.a)({"w-disabled":u},"".concat(t,"-capsule"),l&&s)),b={borderColor:i};l&&i?(b.backgroundColor=i,b.color="#fff"):b.color=i;var h={};return o&&(h.backgroundColor=o||i,h.borderColor=o||i),d.a.createElement("span",Object(a.a)({className:f},p),l&&d.a.createElement("span",{style:h,className:"".concat(t,"-title")},l),s&&d.a.createElement("span",{style:b,className:"".concat(t,"-content")},s))}}]),t}(d.a.Component));m.propTypes={prefixCls:b.a.string,color:b.a.string,disabled:b.a.bool,title:b.a.oneOfType([b.a.node,b.a.string])},m.defaultProps={prefixCls:"w-tag",disabled:!1,title:""}},612:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var a=n(59),r=n.n(a),c=n(60),l=n.n(c),s=n(9),i=n.n(s),o=n(12),u=n.n(o),p=n(10),d=n.n(p),f=n(11),b=n.n(f),h=n(13),v=n.n(h),m=n(37),y=n.n(m),O=n(106),j=n.n(O),g=n(280),C=n(114),x=n(105),w=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=d()(this,(e=b()(t)).call.apply(e,[this].concat(r))),j()(y()(y()(n)),"path","packages/core/src/tag/README.md"),j()(y()(y()(n)),"dependencies",{Tag:g.a,Divider:C.a,Icon:x.a}),n}return v()(t,e),u()(t,[{key:"renderPage",value:function(){var e=l()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(349).then(n.t.bind(null,584,7));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n(107).a)}}]);