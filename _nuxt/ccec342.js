(window.webpackJsonp=window.webpackJsonp||[]).push([[29,15],{546:function(e,t,r){},548:function(e,t,r){"use strict";r(546)},549:function(e,t,r){"use strict";r.r(t);var n={},o=(r(548),r(34)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{role:"banner"}},[r("h1",[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},556:function(e,t,r){"use strict";r.r(t);var n=r(16),o=(r(69),r(62),r(11),r(12),r(77)),l=r(241),c=r(350),d={props:{person:{type:o.a,required:!0}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.person.photo){t.next=4;break}return t.next=3,c.a.find(e.person.photo.id);case 3:e.photo=t.sent.data;case 4:return t.next=6,l.a.where({member_id:e.person.id}).all();case 6:e.researchGroups=t.sent.data;case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{photo:null,researchGroups:[],webidUrls:{scholars:"https://scholars.bgu.ac.il/display/",arxiv:"https://arxiv.org/a/",gs:"https://scholar.google.com/citations?user=",mathscinet:"https://mathscinet.ams.org/mathscinet/MRAuthorID/",orcid:"https://orcid.org/",scopus:"https://scopus.com/authid/detail.uri?authorId=",wos:"https://publons.com/researcher/"}}},computed:{},methods:{webidUrl:function(e){return this.person[e]?this.webidUrls[e]+this.person[e]:void 0},webids:function(){var e=this;return Object.keys(this.webidUrls).filter((function(t){return e.person[t]}))}}},h=r(34),v=r(43),f=r.n(v),m=r(222),_=r(544),x=r(551),w=r(217),V=r(172),P=r(218),k=r(135),$=r(37),y=r(114),T=r(552),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-row",[e.photo?r("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[r("v-img",{attrs:{src:e.photo.fullUrl()}})],1):e._e(),e._v(" "),r("v-col",[r("div",{domProps:{innerHTML:e._s(e.person.interestsHtml())}}),e._v(" "),e.researchGroups.length>0?r("div",[r("h5",[e._v(e._s(e.$tt("researchGroups")))]),e._v(" "),r("ul",e._l(e.researchGroups,(function(t){return r("li",{key:t.id},[r("NuxtLink",{attrs:{to:t.webPage()}},[e._v(e._s(t))])],1)})),0)]):e._e()]),e._v(" "),r("v-col",[e.webids().length>0?r("div",[r("h5",[e._v(e._s(e.$tt("webids")))]),e._v(" "),r("v-list",{attrs:{dense:""}},e._l(e.webids(),(function(t){return r("v-list-item",{key:t,attrs:{href:e.webidUrl(t)}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"secondary"},domProps:{textContent:e._s("$vuetify.icons."+t)}})],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(e.person[t])}})],1)],1)})),1)],1):e._e()])],1)],1)}),[],!1,null,"ce649984",null);t.default=component.exports;f()(component,{VAvatar:m.a,VCard:_.a,VCol:x.a,VIcon:w.a,VImg:V.a,VList:P.a,VListItem:k.a,VListItemContent:$.a,VListItemIcon:y.a,VListItemTitle:$.c,VRow:T.a})},566:function(e,t,r){"use strict";r.r(t);var n=r(16),o=(r(69),{props:{who:{type:Object,required:!0}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.who.scope.all();case 2:e.people=t.sent.data,e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{expanded:[],loading:!0,search:"",footerProps:{itemsPerPageOptions:[-1,10,30,50],pagination:{itemsPerPage:100},options:{itemsPerPage:-1},showFirstLastPage:!0},headers:[{text:this.$i18n.t("name"),align:"start",value:"fullName"},{text:this.$i18n.t("email"),align:"start",value:"email"},{text:this.$i18n.t("office"),align:"start",value:"office"},{text:this.$i18n.t("phone"),align:"start",value:"phone"},{text:"",value:"data-table-expand"}],people:[]}},computed:{}}),l=r(34),c=r(43),d=r.n(c),h=r(544),v=r(543),f=r(631),m=r(538),_=r(526),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("v-card",[r("v-card-title",[r("h4",[e._v(e._s(e.$i18n.t("components.people."+e.who.title)))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{label:"Search","append-icon":"mdi-magnify","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-data-table",{attrs:{headers:e.headers,items:e.people,"fixed-header":"","multi-sort":"",search:e.search,"footer-props":e.footerProps,"show-expand":"","expanded.sync":"expanded"},scopedSlots:e._u([{key:"item.fullName",fn:function(t){var r=t.item;return[e._v("\n        "+e._s(r.fullName(e.$i18n))+"\n      ")]}},{key:"expanded-item",fn:function(e){var t=e.headers,n=e.item;return[r("td",{attrs:{colspan:t.length}},[r("PeopleTableDetails",{attrs:{person:n}})],1)]}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{PeopleTableDetails:r(556).default}),d()(component,{VCard:h.a,VCardTitle:v.d,VDataTable:f.a,VSpacer:m.a,VTextField:_.a})},633:function(e,t,r){"use strict";r.r(t);var n=r(77),o={data:function(){return{tab:null,groups:[{title:"regular",scope:n.a.members()},{title:"retired",scope:n.a.members()}]}}},l=r(34),c=r(43),d=r.n(c),h=r(627),v=r(647),f=r(643),m=r(623),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("PageHeader",[e._v(e._s(e.$i18n.t("components.people.members")))]),e._v(" "),r("v-tabs",{attrs:{grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.groups,(function(t){return r("v-tab",{key:t.title},[e._v("\n      "+e._s(e.$i18n.t("components.people."+t.title))+"\n    ")])})),1),e._v(" "),r("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.groups,(function(e){return r("v-tab-item",{key:e.title},[r("PeopleTable",{attrs:{who:e}})],1)})),1)],1)}),[],!1,null,"18fcd2f8",null);t.default=component.exports;d()(component,{PageHeader:r(549).default,PeopleTable:r(566).default}),d()(component,{VTab:h.a,VTabItem:v.a,VTabs:f.a,VTabsItems:m.a})}}]);