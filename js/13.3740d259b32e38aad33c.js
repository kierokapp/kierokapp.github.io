webpackJsonp([13],{292:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i(315),s=i(316),n=i(0),r=n(e.a,s.a,!1,null,null,null);a.default=r.exports},315:function(t,a,i){"use strict";var e=i(14);a.a={name:"rating-card",props:{reviews:Number,title:String},data:function(){return{stars:0,totalReviews:this.reviews,totalRating:0,opinion:""}},methods:{openModal:function(){this.$refs.modal.open()},rate:function(t){this.stars=t},cancel:function(){this.stars=0,this.$refs.modal.close()},submit:function(){this.$emit("rated"),this.$refs.modal.close(function(){e.X.create.positive("¡Gracias por tu comentario!")})},getValue:function(){return this.stars},getComment:function(){return this.opinion}}}},316:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("q-card",{staticClass:"bg-white text-center"},[i("q-list",[i("q-item",{staticClass:"text-center"},[i("q-item-side",[i("q-item-tile",[i("span",{staticClass:"no-margin",staticStyle:{"font-size":"2.5em"}},[t._v("4.5")])])],1),t._v(" "),i("q-item-main",[i("q-item-tile",{on:{click:t.openModal}},[i("q-rating",{staticStyle:{"font-size":"2em","margin-bottom":"0.5em","margin-top":"0"},attrs:{color:"primary",value:t.stars,max:5,icon:"grade"},on:{change:t.rate}})],1),t._v(" "),i("q-item-tile",{staticClass:"text-right"},[i("small",{staticClass:"text-faded"},[t._v(t._s(t.reviews)+" opiniones")])])],1)],1)],1),t._v(" "),i("q-modal",{ref:"modal",attrs:{minimized:""}},[i("q-card",{staticClass:"no-margin",attrs:{flat:""}},[i("q-item",{staticClass:"bg-green text-white",staticStyle:{"border-radius":"0"}},[i("q-item-side",[i("img",{staticClass:"avatar",attrs:{src:"/statics/product.jpg"}})]),t._v(" "),i("q-item-main",[i("h6",{staticClass:"on-right ellipsis"},[t._v(t._s(t.title))])])],1),t._v(" "),i("q-card-main",[i("div",{staticClass:"text-center"},[i("div",[i("q-chip",{attrs:{icon:"stars",color:"green",small:""}},[i("strong",[t._v(t._s(t.stars))])])],1),t._v(" "),i("q-rating",{staticStyle:{"font-size":"2em"},attrs:{color:"primary",value:t.stars,max:5,icon:"grade"},on:{change:t.rate}})],1),t._v(" "),i("q-input",{attrs:{type:"textarea","float-label":"Comentario","max-height":100,"min-rows":3},model:{value:t.opinion,callback:function(a){t.opinion=a},expression:"opinion"}})],1),t._v(" "),i("q-card-actions",{attrs:{align:"end"}},[i("q-btn",{attrs:{color:"negative",outline:"",flat:"",small:""},on:{click:t.cancel}},[t._v("\n          Cancelar\n        ")]),t._v(" "),i("q-btn",{staticClass:"no-shadow",attrs:{color:"positive"},on:{click:t.submit}},[t._v("\n          Calificar\n        ")])],1)],1)],1)],1)},s=[],n={render:e,staticRenderFns:s};a.a=n}});