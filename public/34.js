(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Q03x:function(t,a,e){"use strict";e.r(a);var s={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.$root.appMenu("accounting"),this.tableData.initiate=!0;void 0===this.$route.query.page?this.tableData.url=this.$router.currentRoute.path:this.tableData.url=this.$router.currentRoute.path+"?page="+this.$route.query.page},methods:{onRowClick:function(t){return!1}},ready:function(){},beforeUpdate:function(){},updated:function(){InputsCheckboxesRadios.initComponents()}},i=e("KHd+"),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("Banking")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Banks")])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"header-elements d-none"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/banking/banks/create"}},[e("i",{staticClass:"icon-library2 mr-1"}),t._v("\n                        New Bank\n                    ")])],1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("loading-animation"),t._v(" "),e("div",{staticClass:"card shadow-none rounded-0 border-0"},[this.$root.loading||0!=t.tableData.payload.data.length?t._e():e("div",{staticClass:"card-body"},[t._m(2)]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[e("tbody",[t._m(3),t._v(" "),t._l(t.tableData.payload.data,(function(a){return e("tr",{on:{click:function(e){return t.onRowClick(a)}}},[e("td",{staticClass:"cursor-pointer font-weight-semibold"},[t._v(t._s(a.name))]),t._v(" "),e("td",{staticClass:"cursor-pointer"},[t._v(t._s(a.country))]),t._v(" "),e("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(a.login_url))])])}))],2)]),t._v(" "),e("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-library2 mr-2"}),this._v(" "),a("span",{staticClass:"font-weight-semibold"},[this._v("Banks")])]),this._v(" "),a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",[a("i",{staticClass:"icon-files-empty mr-2"}),this._v("\n                    No records found\n                ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",{staticClass:"table-active"},[a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[this._v("Name")]),this._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[this._v("Country")]),this._v(" "),a("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[this._v("Login URL")])])}],!1,null,null,null);a.default=n.exports}}]);