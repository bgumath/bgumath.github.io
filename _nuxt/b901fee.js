(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{637:function(e,t,r){"use strict";r.r(t);r(12),r(8),r(11),r(14),r(10),r(15);var n=r(3),c=(r(62),r(29),r(72),r(23),r(561));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={components:{},props:{object:{type:Object,required:!0},assoc:{type:Object,required:!0},field:{type:String,required:!0}},data:function(){var e=this;return{checked:this.object[this.field].find((function(t){return t.id===e.assoc.id}))}},computed:d(d({},Object(c.a)(["editing"])),{},{fieldIds:function(){return this.field.replace(/s$/,"Ids")},isWritable:function(){return this.editing&&this.object.isWritable(this.fieldIds)},icon:function(){return this.checked?"check2-square":"x-square"},variant:function(){return this.checked?"dark":"danger"}}),methods:{update:function(){var e=this;this.object.save({with:"".concat(this.field,".id")}).then((function(t){t?e.$ui.notify("".concat(e.object,": successfully updated ").concat(e.field)):e.$ui.showErrors(e.object)})).catch((function(t){return e.$ui.showResponseErrors(t)}))}}},l=r(34),component=Object(l.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isWritable?r("b-form-checkbox",{attrs:{inline:""},on:{change:function(t){return e.update()}},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}):r("b-icon",{attrs:{icon:e.icon,variant:e.variant}})}),[],!1,null,null,null);t.default=component.exports}}]);