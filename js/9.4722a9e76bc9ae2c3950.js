webpackJsonp([9],{295:function(t,e,a){"use strict";function r(t){a(323)}Object.defineProperty(e,"__esModule",{value:!0});var o=a(325),i=a(326),s=a(0),l=r,n=s(o.a,i.a,!1,l,null,null);e.default=n.exports},323:function(t,e,a){var r=a(324);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(287)("1caf8447",r,!0)},324:function(t,e,a){e=t.exports=a(286)(void 0),e.push([t.i,"",""])},325:function(t,e,a){"use strict";var r=a(14);e.a={name:"index",components:{QLayout:r.A,QToolbar:r.U,QToolbarTitle:r.V,QBtn:r.d,QIcon:r.s,QList:r.B,QListHeader:r.C,QSideLink:r.O,QItemSide:r.y,QItemMain:r.w,QSearch:r.M,QAutocomplete:r.c,QCard:r.e,QCardTitle:r.j,QCardMedia:r.h,QParallax:r.F,QModal:r.D,QModalLayout:r.E},data:function(){return{search:"",isSearching:!1}}}},326:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{ref:"layout",attrs:{reveal:"",view:"lHh Lpr fff","left-class":{"bg-grey-2":!0}}},[a("q-toolbar",{attrs:{slot:"header"},slot:"header"},[a("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.layout.toggleLeft()}}},[a("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),a("q-search",{attrs:{inverted:"",color:"none",placeholder:"Buscar en Minas, Lavalleja"},on:{click:function(e){t.isSearching=!0},focus:function(e){t.isSearching=!0},blur:function(e){t.isSearching=!1}}}),t._v(" "),a("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.layout.toggleLeft()}}},[a("q-icon",{attrs:{name:"location_on"}})],1)],1),t._v(" "),a("q-card",{staticClass:"no-margin",attrs:{square:"",flat:""}},[a("q-card-media",{attrs:{"overlay-position":"full"}},[a("q-parallax",{attrs:{src:"statics/cities/minas2.jpg",height:150}},[a("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("Loading...")])]),t._v(" "),a("q-card-title",{attrs:{slot:"overlay"},slot:"overlay"},[a("div",[t._v("¡Buenas tardes!")]),t._v(" "),a("br"),t._v(" "),a("q-search",{attrs:{inverted:"",color:"primary",placeholder:"Buscar en Minas, Lavalleja"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"left"},slot:"left"},[a("q-toolbar",[a("q-toolbar-title",[t._v("\n        Menú principal\n      ")]),t._v(" "),a("q-icon",{attrs:{name:"close"}})],1),t._v(" "),a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-list-header",[t._v("Essential Links")]),t._v(" "),a("q-side-link",{attrs:{to:"/",item:""}},[a("q-item-side",{attrs:{icon:"folder",inverted:"",color:"grey-6"}}),t._v(" "),a("q-item-main",{attrs:{label:"Mis publicaciones"}})],1),t._v(" "),a("q-side-link",{attrs:{to:"/",item:""}},[a("q-item-side",{attrs:{icon:"record_voice_over",inverted:"",color:"grey-6"}}),t._v(" "),a("q-item-main",{attrs:{label:"Mi catálogo"}})],1),t._v(" "),a("q-side-link",{attrs:{to:"/",item:""}},[a("q-item-side",{attrs:{icon:"chat",inverted:"",color:"grey-6"}}),t._v(" "),a("q-item-main",{attrs:{label:"Gitter Channel"}})],1),t._v(" "),a("q-side-link",{attrs:{to:"/",item:""}},[a("q-item-side",{attrs:{icon:"rss feed",inverted:"",color:"grey-6"}}),t._v(" "),a("q-item-main",{attrs:{label:"Twitter"}})],1)],1)],1),t._v(" "),a("router-view"),t._v(" "),a("q-modal",{ref:"layoutModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.isSearching,callback:function(e){t.isSearching=e},expression:"isSearching"}},[a("q-modal-layout",[a("q-toolbar",{attrs:{slot:"header"},slot:"header"},[a("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.layoutModal.close()}}},[a("q-icon",{attrs:{name:"keyboard_arrow_left"}})],1),t._v(" "),a("div",{staticClass:"q-toolbar-title"},[t._v("\n          Header\n        ")])],1),t._v(" "),a("q-toolbar",{attrs:{slot:"header"},slot:"header"},[a("q-search",{attrs:{inverted:"",color:"none"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("q-toolbar",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"q-toolbar-title"},[t._v("\n          Footer\n        ")])]),t._v(" "),a("div",{staticClass:"layout-padding"},[a("h1",[t._v("Modal")]),t._v(" "),a("q-btn",{attrs:{color:"primary"},on:{click:function(e){t.$refs.layoutModal.close()}}},[t._v("Close")]),t._v(" "),t._l(15,function(e){return a("p",{staticClass:"caption"},[t._v("This is a Modal presenting a Layout.")])})],2)],1)],1)],1)},o=[],i={render:r,staticRenderFns:o};e.a=i}});