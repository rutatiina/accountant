(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{vkGg:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s);function r(t,e,a,s,n,r,i){try{var c=t[r](i),o=c.value}catch(t){return void a(t)}c.done?e(o):Promise.resolve(o).then(s,n)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var i=t.apply(e,a);function c(t){r(i,s,n,c,o,"next",t)}function o(t){r(i,s,n,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{pageTitle:"Create Vehicle Make",urlPost:"/workshop/vehicles/makes",attributes:{},selectedMechanics:[],mechanics:[],vehicles:[]}},mounted:function(){this.$root.appMenu("workshop"),this.$root.appFetchGlobalsCountries(),this.fetchAttributes()},watch:{},methods:{fetchAttributes:function(){var t=this;return i(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get(t.$route.fullPath).then((function(e){t.pageTitle=e.data.pageTitle,t.urlPost=e.data.urlPost,t.attributes=e.data.attributes})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},appFetchVehicles:function(){var t=this;return i(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/workshop/vehicles/vue-search-select").then((function(e){t.vehicles=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},fetchMechanics:function(t){var e=this;return i(n.a.mark((function a(){var s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return",!1);case 2:return s={search:[{column:"name",value:t="-initiate-"===t?"":t},{column:"display_name",value:t},{column:"types",value:"mechanic"}]},a.prev=4,a.next=7,axios.post("/contacts/search",s).then((function(t){e.mechanics=t.data.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 7:return a.abrupt("return",a.sent);case 10:a.prev=10,a.t0=a.catch(4),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[4,10]])})))()},setMechanics:function(t,e,a){this.selectedMechanics=t,this.attributes.mechanics=t.map((function(t){return t.id}))},formSubmit:function(t){t.preventDefault();var e=this;PNotify.removeAll();var a={title:!1,text:"Please wait as we do our thing",addclass:"bg-warning-400 border-warning-400",hide:!1,buttons:{closer:!1,sticker:!1}},s=new PNotify(a);axios.post(e.urlPost,this.attributes).then((function(t){a.text=t.data.messages.join("\n"),!0===t.data.status?(a.title="Success",a.type="success",a.addclass="bg-success-400 border-success-400",e.attributes={name:"",code:"",country:""}):(a.title="! Error",a.type="error",a.addclass="bg-warning-400 border-warning-400"),s.update(a),s.get().click((function(){s.remove()}))})).catch((function(t){e.response=t}))}},ready:function(){},beforeUpdate:function(){},updated:function(){}},o=a("KHd+"),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-file-plus"}),t._v("\n                    "+t._s(t.pageTitle)+"\n                ")])])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Workshop")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Vehicles")]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Make")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Create")])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/workshop/vehicles/makes"}},[a("i",{staticClass:"icon-task mr-1"}),t._v("\n                        Vehicles Makes\n                    ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("form",{staticClass:"max-width-820",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.formSubmit}},[a("fieldset",{},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                Make Name\n                            ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.attributes.name,expression:"attributes.name"}],staticClass:"form-control ",attrs:{type:"text",placeholder:"Make name"},domProps:{value:t.attributes.name},on:{input:function(e){e.target.composing||t.$set(t.attributes,"name",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"}),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"icon-folder-plus3 mr-1"}),t._v(" "+t._s(t.pageTitle)+"\n                            ")])])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])}],!1,null,null,null);e.default=l.exports}}]);