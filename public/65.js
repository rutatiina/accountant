(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{RxoX:function(t,a,e){"use strict";e.r(a);var s={watch:{"$route.query.page":function(t){this.tableData.url="/crbt/statements?page="+t}},mounted:function(){this.$root.appMenu("crbt"),this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45);void 0===this.$route.query.page?this.tableData.url="/crbt/statements":this.tableData.url="/crbt/statements?page="+this.$route.query.page},methods:{tableRowDestroy:function(t){console.log(t)},importStatementData:function(t){PNotify.removeAll();var a=this.$root.PNotifySettings,e=new PNotify(a);axios.post("/crbt/statements/"+t+"/import").then((function(t){a.text=t.data.message,!0===t.data.status?(a.title="Success",a.type="success",a.addclass="bg-success-400 border-success-400"):(a.title="Error!",a.type="error",a.addclass="bg-warning-400 border-warning-400"),e.update(a),e.get().click((function(){e.remove()}))})).catch((function(t){console.log(t)})).finally((function(t){}))}}},i=e("KHd+"),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),e("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"breadcrumb"},[e("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[e("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),e("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),e("span",{staticClass:"breadcrumb-item"},[t._v("CRBT")]),t._v(" "),e("span",{staticClass:"breadcrumb-item active"},[t._v("Upload Report")])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"header-elements"},[e("div",{staticClass:"breadcrumb justify-content-center"},[e("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:"/crbt/statements/upload"}},[e("i",{staticClass:"icon-file-upload mr-2"}),t._v("\n                        Upload Statement\n                    ")])],1)])])]),t._v(" "),e("div",{staticClass:"content border-0 p-0"},[e("loading-animation"),t._v(" "),e("div",{staticClass:"card shadow-none rounded-0 border-0"},[this.$root.loading||0!=t.tableData.payload.data.length?t._e():e("div",{staticClass:"card-body"},[t._m(2)]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[e("tbody",[t._m(3),t._v(" "),t._l(t.tableData.payload.data,(function(a){return e("tr",[e("th",{attrs:{scope:"row"}},[e("div",{staticClass:"dropdown"},[t._m(4,!0),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("a",{staticClass:"dropdown-item font-weight-semibold",attrs:{href:"/crbt/statements/"+a.id+"/revenue-calculations-preview"}},[e("i",{staticClass:"icon-cash3 text-danger"}),t._v(" Preview Revenue Calculation\n                                    ")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"/crbt/statements/"+a.id+"/map"}},[e("i",{staticClass:"icon-cog6"}),t._v(" Map fields")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.importStatementData(a.id)}}},[e("i",{staticClass:"icon-import"}),t._v(" Import Data")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.tableRowDestroy(a.id)}}},[e("i",{staticClass:"icon-trash text-danger"}),t._v(" Delete")])])])]),t._v(" "),e("td",{staticClass:"col-md-6"},[e("router-link",{attrs:{to:"/crbt/statements/"+a.id+"/transactions"}},[t._v("\n                                "+t._s(a.file_name)+"\n                            ")])],1),t._v(" "),e("td",{attrs:{nowrap:""}},[t._v(t._s(a.created_at))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.file_rows)))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(a.file_size)))])])}))],2)]),t._v(" "),e("div",{staticClass:"card card-body border-0 text-center"},[e("ul",{staticClass:"pagination pagination-separated pagination-rounded align-self-center"},[e("li",{staticClass:"page-item"},[e("router-link",{staticClass:"page-link",attrs:{to:"/crbt/statements?page="+(t.tableData.payload.current_page-1)}},[t._v("←   Prev")])],1),t._v(" "),t._l(t.tableData.payload.last_page,(function(a){return a<=5?e("li",{staticClass:"page-item",class:[t.tableData.payload.current_page==a?t.tableData.activeClass:"",t.tableData.errorClass]},[e("router-link",{staticClass:"page-link",attrs:{to:"/crbt/statements?page="+a}},[t._v(t._s(a))])],1):t._e()})),t._v(" "),e("li",{staticClass:"page-item"},[e("router-link",{staticClass:"page-link",attrs:{to:"/crbt/statements?page="+(t.tableData.payload.current_page+1)}},[t._v("Next   →")])],1)],2)])])])],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-file-plus"}),this._v("\n                    CRBT Statements\n                ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[a("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",[a("i",{staticClass:"icon-files-empty mr-2"}),this._v("\n                    No records found\n                ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-active"},[e("th",{staticClass:"font-weight-bold",staticStyle:{width:"32px"},attrs:{scope:"col"}},[t._v(" # ")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),e("th",{staticClass:"font-weight-bold",attrs:{scope:"col"}},[t._v("Created")]),t._v(" "),e("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col"}},[t._v("Rows")]),t._v(" "),e("th",{staticClass:"font-weight-bold text-right",attrs:{scope:"col",nowrap:""}},[t._v("File size")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"list-icons-item dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[a("i",{staticClass:"icon-stack3"})])}],!1,null,null,null);a.default=r.exports}}]);