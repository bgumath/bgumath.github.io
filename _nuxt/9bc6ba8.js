(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{543:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return h}));var n=r(544),o=r(2),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),h=Object(o.h)("v-card__title");n.a},544:function(e,t,r){"use strict";r(12),r(8),r(11),r(14),r(10),r(15);var n=r(3),o=(r(27),r(177),r(545),r(118)),c=r(238),l=r(101),d=r(7);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=c.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},545:function(e,t,r){},556:function(e,t,r){"use strict";r.r(t);var n=r(16),o=(r(69),r(62),r(11),r(12),r(77)),c=r(241),l=r(350),d={props:{person:{type:o.a,required:!0}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.person.photo){t.next=4;break}return t.next=3,l.a.find(e.person.photo.id);case 3:e.photo=t.sent.data;case 4:return t.next=6,c.a.where({member_id:e.person.id}).all();case 6:e.researchGroups=t.sent.data;case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{photo:null,researchGroups:[],webidUrls:{scholars:"https://scholars.bgu.ac.il/display/",arxiv:"https://arxiv.org/a/",gs:"https://scholar.google.com/citations?user=",mathscinet:"https://mathscinet.ams.org/mathscinet/MRAuthorID/",orcid:"https://orcid.org/",scopus:"https://scopus.com/authid/detail.uri?authorId=",wos:"https://publons.com/researcher/"}}},computed:{},methods:{webidUrl:function(e){return this.person[e]?this.webidUrls[e]+this.person[e]:void 0},webids:function(){var e=this;return Object.keys(this.webidUrls).filter((function(t){return e.person[t]}))}}},h=r(34),v=r(43),f=r.n(v),m=r(222),_=r(544),w=r(551),x=r(217),O=r(172),y=r(218),P=r(135),j=r(37),k=r(114),V=r(552),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-row",[e.photo?r("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[r("v-img",{attrs:{src:e.photo.fullUrl()}})],1):e._e(),e._v(" "),r("v-col",[r("div",{domProps:{innerHTML:e._s(e.person.interestsHtml())}}),e._v(" "),e.researchGroups.length>0?r("div",[r("h5",[e._v(e._s(e.$tt("researchGroups")))]),e._v(" "),r("ul",e._l(e.researchGroups,(function(t){return r("li",{key:t.id},[r("NuxtLink",{attrs:{to:t.webPage()}},[e._v(e._s(t))])],1)})),0)]):e._e()]),e._v(" "),r("v-col",[e.webids().length>0?r("div",[r("h5",[e._v(e._s(e.$tt("webids")))]),e._v(" "),r("v-list",{attrs:{dense:""}},e._l(e.webids(),(function(t){return r("v-list-item",{key:t,attrs:{href:e.webidUrl(t)}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"secondary"},domProps:{textContent:e._s("$vuetify.icons."+t)}})],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(e.person[t])}})],1)],1)})),1)],1):e._e()])],1)],1)}),[],!1,null,"ce649984",null);t.default=component.exports;f()(component,{VAvatar:m.a,VCard:_.a,VCol:w.a,VIcon:x.a,VImg:O.a,VList:y.a,VListItem:P.a,VListItemContent:j.a,VListItemIcon:k.a,VListItemTitle:j.c,VRow:V.a})},566:function(e,t,r){"use strict";r.r(t);var n=r(16),o=(r(69),{props:{who:{type:Object,required:!0}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.who.scope.all();case 2:e.people=t.sent.data,e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{expanded:[],loading:!0,search:"",footerProps:{itemsPerPageOptions:[-1,10,30,50],pagination:{itemsPerPage:100},options:{itemsPerPage:-1},showFirstLastPage:!0},headers:[{text:this.$i18n.t("name"),align:"start",value:"fullName"},{text:this.$i18n.t("email"),align:"start",value:"email"},{text:this.$i18n.t("office"),align:"start",value:"office"},{text:this.$i18n.t("phone"),align:"start",value:"phone"},{text:"",value:"data-table-expand"}],people:[]}},computed:{}}),c=r(34),l=r(43),d=r.n(l),h=r(544),v=r(543),f=r(631),m=r(538),_=r(526),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("v-card",[r("v-card-title",[r("h4",[e._v(e._s(e.$i18n.t("components.people."+e.who.title)))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{label:"Search","append-icon":"mdi-magnify","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-data-table",{attrs:{headers:e.headers,items:e.people,"fixed-header":"","multi-sort":"",search:e.search,"footer-props":e.footerProps,"show-expand":"","expanded.sync":"expanded"},scopedSlots:e._u([{key:"item.fullName",fn:function(t){var r=t.item;return[e._v("\n        "+e._s(r.fullName(e.$i18n))+"\n      ")]}},{key:"expanded-item",fn:function(e){var t=e.headers,n=e.item;return[r("td",{attrs:{colspan:t.length}},[r("PeopleTableDetails",{attrs:{person:n}})],1)]}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{PeopleTableDetails:r(556).default}),d()(component,{VCard:h.a,VCardTitle:v.d,VDataTable:f.a,VSpacer:m.a,VTextField:_.a})}}]);