(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{459:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(461),c=r(2),o=Object(c.g)("v-card__actions"),l=Object(c.g)("v-card__subtitle"),d=Object(c.g)("v-card__text"),v=Object(c.g)("v-card__title");n.a},461:function(t,e,r){"use strict";r(10),r(7),r(11),r(13),r(9),r(14);var n=r(3),c=(r(26),r(171),r(463),r(116)),o=r(225),l=r(100),d=r(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(o.a,l.a,c.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},c.a.options.computed.classes.call(this))},styles:function(){var style=f({},c.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},463:function(t,e,r){},470:function(t,e,r){"use strict";var n=r(0),c=r(23);r(474),r(104);e.a=c.a.extend({static:{jsonapiType:"roles"},attrs:{usersRoles:Object(n.d)(),users:Object(n.d)("users"),name:Object(n.b)(),resourceType:Object(n.b)(),createdAt:Object(n.b)({persist:!1}),updatedAt:Object(n.b)({persist:!1}),visibility:Object(n.b)(),titleI18n:Object(n.b)(),descriptionI18n:Object(n.b)(),email:Object(n.b)(),web:Object(n.b)(),allowedLocales:Object(n.b)()},methods:{toString:function(){return this.titleI18n[this.$i18n.locale]}}})},474:function(t,e,r){"use strict";var n=r(0),c=r(23);r(104),r(470),c.a.extend({static:{jsonapiType:"users_roles"},attrs:{user:Object(n.c)("users"),role:Object(n.c)("roles"),createdAt:Object(n.b)({persist:!1}),updatedAt:Object(n.b)({persist:!1}),allowedLocales:Object(n.b)()}})},608:function(t,e,r){"use strict";r.r(e);var n={props:{object:{type:r(470).a,required:!0}},data:function(){return{}}},c=r(33),o=r(42),l=r.n(o),d=r(209),v=r(211),f=r(461),h=r(459),j=r(205),m=r(167),O=r(206),_=r(132),y=r(39),w=r(112),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{light:"",rounded:"",hover:"",elevation:"10"}},[r("v-card-title",{attrs:{dir:"auto"}},[r("span",{staticClass:"info--text",attrs:{dir:"auto"}},[t._v(t._s(t.object))])]),t._v(" "),t._l(t.object.users,(function(e){return r("div",[r("v-btn",{attrs:{text:"",color:"text-none accent",to:e.web,dir:"auto",nuxt:""}},[t._v("\n      "+t._s(e)+"\n    ")]),t._v(" "),r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e.photo?r("div",[r("v-avatar",{staticClass:"ma-3",attrs:{size:"128",tile:""}},[r("v-img",{attrs:{src:e.photo.web}})],1)],1):t._e(),t._v(" "),r("div",[r("v-list",{staticClass:"transparent",attrs:{dense:""}},[r("v-list-item",{attrs:{href:e.mailto()}},[r("v-list-item-icon",[r("v-icon",[t._v("$email")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-subtitle",[t._v("\n                "+t._s(e.fullEmail())+"\n              ")])],1)],1),t._v(" "),e.phone?r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v("$phone")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-subtitle",[t._v(t._s(e.phone))])],1)],1):t._e(),t._v(" "),e.office?r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v("$office")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-subtitle",[t._v(t._s(e.office))])],1)],1):t._e()],1)],1)])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:d.a,VBtn:v.a,VCard:f.a,VCardTitle:h.d,VIcon:j.a,VImg:m.a,VList:O.a,VListItem:_.a,VListItemContent:y.a,VListItemIcon:w.a,VListItemSubtitle:y.b})}}]);