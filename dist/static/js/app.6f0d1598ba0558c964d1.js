webpackJsonp([6],{"+lNe":function(t,n){},DBXE:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAA9CAYAAACJHwR2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYFJREFUeNrs211KAlEYgOEm3US3bUFagJdtQjFbTwsQdCOtoB+XkBdB4HV0G/UFE8gwjB0VZs70PPAhjnMYGHg9g2Bx+XJ/BmTlqnx9Sl147t5BNgYxq5jHclblMcFDD2Nfxsx2js3KYwPBQ/9in9Z8Nk2JfuheQhaP8ZOGc36/COYxn3Z46G/sSTu94CH/2Hejb/whT/CQT+yvNedWj02aohc85BP7uOb8cUr0god8Yt/UrNmkRC94yDf25OgFD3nHnhS94KF9iyNj/0v0C8FD+0YxNyeIfV/0P9cYCR665ZjY90Vvh4eWrWPuYj5ink8QezX6h5j38hrrwv/hIStflfdFymI7PPwjggfBA4IHBA8IHhA8IHhA8IDgAcEDggcED4IHBA8IHhA8IHhA8IDgAcEDggcEDwgeBA8IHhA8IHhA8IDgAcEDggcEDwgeEDwIHhA8IHhA8IDggY4YxlzHLGMu3A7o/w4vdvBID3Tc9pDgbw9ZCLTqLWaeuuhbgAEAog5KSKmdDdcAAAAASUVORK5CYII="},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("IvJb"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=e("C7Lr")({name:"App"},r,!1,function(t){e("iJeu")},null,null).exports,s=e("zO6J");a.a.use(s.a);var o=new s.a({mode:"history",scrollBehavior:function(t,n,e){return e||{x:0,y:0}},routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return e.e(3).then(e.bind(null,"26dS"))}},{path:"/about-me",name:"about-me",component:function(){return e.e(5).then(e.bind(null,"ENRc"))}},{path:"/web-xlf",name:"web-xlf",component:function(){return e.e(0).then(e.bind(null,"NS92"))}},{path:"/web-yxy",name:"web-yxy",component:function(){return e.e(0).then(e.bind(null,"NS92"))}},{path:"/mobile-index",name:"mobile-index",component:function(){return e.e(2).then(e.bind(null,"KMkx"))}},{path:"/plane-index",name:"plane-index",component:function(){return e.e(4).then(e.bind(null,"A5y9"))}},{path:"/hand-index",name:"hand-index",component:function(){return e.e(1).then(e.bind(null,"xKNw"))}}]}),l={name:"l-button",props:{width:{type:String,default:""},router:{type:String,default:""}},data:function(){return{}},methods:{gopage:function(){this.router&&this.$router.push(this.router)}}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"l-button",style:{width:this.width},on:{click:this.gopage}},[this._t("default")],2)},staticRenderFns:[]};var u=e("C7Lr")(l,c,!1,function(t){e("Z7yN")},"data-v-b67d5a7a",null).exports,d={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"l-side-nav"},[a("img",{staticClass:"nav-name",attrs:{src:e("noPg")},on:{click:function(n){t.$router.push("home")}}}),t._v(" "),a("ul",{staticClass:"nav-ul"},t._l(t.nav,function(n,e){return a("router-link",{key:n.router,staticClass:"nav-li",class:n.router,attrs:{to:n.router,tag:"li"}},[a("div",{staticClass:"item",style:{top:52*e/192+"rem"}}),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(n.name))])])})),t._v(" "),a("div",{staticClass:"nav-line"})])},staticRenderFns:[]};var A=e("C7Lr")({name:"l-side-nav",computed:{nav:function(){var t=this,n=[{name:"Web",router:"web-xlf"},{name:"手机端",router:"mobile-index"},{name:"平面",router:"plane-index"},{name:"手绘",router:"hand-index"},{name:"LOGO",router:"logo-index"}],e=n.findIndex(function(n){var e=n.router;return-1!==t.$route.name.indexOf(e.split("-")[0])});return n.splice(e,1),n}},methods:{}},d,!1,function(t){e("+lNe")},"data-v-0dc6626b",null).exports,m={name:"l-tab",props:{tab:{type:Array,default:[]}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"l-tab"},[e("ul",{staticClass:"tab-ul"},t._l(t.tab,function(n){return e("router-link",{key:n.router,staticClass:"tab-li",attrs:{to:n.router,"active-class":"tab-curr-li",tag:"li"}},[e("div",{staticClass:"tab-name"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"tab-line"})])}))])},staticRenderFns:[]};var g=e("C7Lr")(m,v,!1,function(t){e("bm6x")},"data-v-76ff8ac6",null).exports,p={name:"home-footer",methods:{toTop:function(){var t=0,n=setInterval(function(){var e=(t=document.body.scrollTop||document.documentElement.scrollTop)/10;0!=document.body.scrollTop?document.body.scrollTop-=e:document.documentElement.scrollTop-=e,0==t&&clearInterval(n),document.body.scrollTop||document.documentElement.scrollTop},50)}},computed:{hand:function(){return"hand-index"===this.$route.name}}},h={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"home-footer",style:{"padding-bottom":"hand-index"===t.$route.name?"0":"0.57rem"}},[a("div",{staticClass:"contact-me",class:{"hand-me":t.hand}},[a("div",{staticClass:"me-text"},[t._v("联系我")]),t._v(" "),a("div",{staticClass:"me-line"})]),t._v(" "),a("div",{staticClass:"contact-way",class:{"hand-way":t.hand}},[t._m(0),t._v(" "),a("div",{staticClass:"right"},["home"===t.$route.name?a("l-button",{attrs:{width:"1.66666rem"}},[t._v("我的简历")]):a("div",{staticClass:"to-top",on:{click:t.toTop}},[a("img",{staticClass:"img",attrs:{src:e("DBXE"),alt:""}}),t._v(" "),a("div",{staticClass:"text",class:{"hand-text":t.hand}},[t._v("回到顶部")])])],1)]),t._v(" "),a("div",{staticClass:"footer-tips",class:{"hand-tips":t.hand}},[a("span",[t._v("如果刘帆的作品站没有带给你一个好心情，请通过上面的联系方式进行投诉哦")]),t._v(" "),a("img",{staticClass:"smile",attrs:{src:e("eCkW"),alt:""}})])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("ul",{staticClass:"left"},[n("li",{staticClass:"left-li"},[this._v("电话：15283819858")]),this._v(" "),n("li",{staticClass:"left-li"},[this._v("QQ：627317307")]),this._v(" "),n("li",{staticClass:"left-li"},[this._v("邮箱：liufan94@163.com")])])}]};var b=e("C7Lr")(p,h,!1,function(t){e("tPV0")},"data-v-1296c658",null).exports,f={name:"l-banner",props:{bg:{type:String,default:""}}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"l-banner",style:{"background-color":this.bg}},[this._t("default")],2)},staticRenderFns:[]};var x=e("C7Lr")(f,C,!1,function(t){e("w3yx")},"data-v-0959ea70",null).exports;a.a.component("l-button",u),a.a.component("l-tab",g),a.a.component("l-side-nav",A),a.a.component("l-banner",x),a.a.component("l-footer",b),a.a.config.productionTip=!1,new a.a({el:"#app",router:o,components:{App:i},template:"<App/>"})},Z7yN:function(t,n){},bm6x:function(t,n){},eCkW:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNrsVoGNwjAMTCMWYIX+COkIrFBG+BVgBBjhO0I7wjNCGeG7Qkfo2+j6KlFoSBykF4olK5YVn892CS6maVIxUlVVScfY9/2oEkgKPC3I/036pdKJGE9HdvFAB3eyJrtOMJUkeLGT+STtSC+wpZIETwu6yMkb0p2kmynxtAXckv54YjjRhX6oHSu6eRBMJQrPxdU1mWEFgBMbdHAWtg06HDoVKd4d18IYcwLgFb4S9g5P5X6RnF+cknwfFimn/4ligvDIv8pVU8ARo91ivHO3rlYhNYIaBy/2lSHTicHzcdW4dMbIRpwDAu0XZ8BdZSX5+9aJwDbgBQvGW+Na8AaALrWkR1y42ctEDOr7d37mjhRvjetm+e3N5Cmgc3TLSzJkFRHgPeRaxO5m/1G0eiPJxeRicjG5mFxMLuaVsnkFKFZ13wZ9diyzIvkVYAAA5tgVVRwMmgAAAABJRU5ErkJggg=="},iJeu:function(t,n){},noPg:function(t,n){t.exports="data:image/png;base64,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"},tPV0:function(t,n){},w3yx:function(t,n){}},["NHnr"]);