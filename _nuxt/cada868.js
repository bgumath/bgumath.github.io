(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{459:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return d}));var n=r(461),c=r(2),o=Object(c.g)("v-card__actions"),l=Object(c.g)("v-card__subtitle"),f=Object(c.g)("v-card__text"),d=Object(c.g)("v-card__title");n.a},461:function(t,e,r){"use strict";r(10),r(7),r(11),r(13),r(9),r(14);var n=r(3),c=(r(26),r(171),r(463),r(116)),o=r(225),l=r(100),f=r(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(o.a,l.a,c.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},c.a.options.computed.classes.call(this))},styles:function(){var style=v({},c.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},463:function(t,e,r){},468:function(t,e,r){},471:function(t,e,r){"use strict";r(468)},473:function(t,e,r){"use strict";r(7),r(11),r(13),r(14);var n=r(3),c=(r(26),r(10),r(28),r(71),r(308),r(19),r(36),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(40),r(29),r(9),r(72),r(307),r(1)),o=r(80),l=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(O),offset:Object.keys(y),order:Object.keys(j)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var n=r[t],c=m(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})},474:function(t,e,r){"use strict";r(7),r(11),r(13),r(14);var n=r(3),c=(r(29),r(41),r(22),r(10),r(28),r(71),r(308),r(19),r(36),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(40),r(9),r(307),r(1)),o=r(80),l=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=["start","end","center"];function y(t,e){return v.reduce((function(r,n){return r[t+Object(l.t)(n)]=e(),r}),{})}var j=function(t){return[].concat(O,["baseline","stretch"]).includes(t)},h=y("align",(function(){return{type:String,default:null,validator:j}})),m=function(t){return[].concat(O,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:m}})),S=function(t){return[].concat(O,["space-between","space-around","stretch"]).includes(t)},P=y("alignContent",(function(){return{type:String,default:null,validator:S}})),C={align:Object.keys(h),justify:Object.keys(w),alignContent:Object.keys(P)},k={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,r){var n=k[t];if(null!=r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return(n+="-".concat(r)).toLowerCase()}}var D=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},h),{},{justify:{type:String,default:null,validator:m}},w),{},{alignContent:{type:String,default:null,validator:S}},P),render:function(t,e){var r=e.props,data=e.data,c=e.children,l="";for(var f in r)l+=String(r[f]);var d=D.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var n=r[t],c=_(e,t,n);c&&d.push(c)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),D.set(l,d)}(),t(r.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},476:function(t,e,r){"use strict";r.r(e);r(28),r(71);var n={props:{posts:{type:Array,required:!0}},methods:{title:function(t){return t.title||t.slug.replace(/-/g," ")}}},c=(r(471),r(33)),o=r(42),l=r.n(o),f=r(461),d=r(459),v=r(473),O=r(451),y=r(474),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.posts.length>0?r("div",{staticClass:"my-2"},[r("v-row",{staticClass:"pa-4",attrs:{align:"center",justify:"space-around"}},t._l(t.posts,(function(e){return r("v-col",{key:e.id,attrs:{cols:"auto"}},[r("article",{staticClass:"prose"},[r("v-card",{attrs:{light:"",rounded:"",hover:""}},[r("v-card-title",{staticClass:"text-h5",attrs:{dir:"auto"}},[t._v("\n            "+t._s(t.title(e))+"\n          ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{attrs:{dir:"auto"}},[r("nuxt-content",{attrs:{document:e}})],1)],1)],1)])})),1)],1):t._e()}),[],!1,null,"07e45bb6",null);e.default=component.exports;l()(component,{VCard:f.a,VCardText:d.c,VCardTitle:d.d,VCol:v.a,VDivider:O.a,VRow:y.a})}}]);