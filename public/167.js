(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{"9I6/":function(t,e,a){"use strict";a.r(e);var s={data:function(){return{}},watch:{"$route.query.page":function(t){this.tableData.url=this.$router.currentRoute.path+"?page="+t}},mounted:function(){this.$root.appMenu("accounting"),this.tableData.searchColumnOptions=[{value:"date",text:"Date"},{value:"number",text:"Document No"},{value:"reference",text:"Reference"},{value:"contact_name",text:"Contact name"},{value:"status",text:"Status"},{value:"expiry_date",text:"Expiry date"}],this.tableData.initiate=!0,this.tableRecordsPerPage(230,80,45);void 0===this.$route.query.page?this.tableData.url="/pos/orders":this.tableData.url="/pos/orders?page="+this.$route.query.page},methods:{onRowClick:function(t){void 0!==this.$route.params.id&&this.$route.params.id==t.id||(this.$router.push({name:"posOrder",params:{id:t.id}}),this.$root.showSideBarRight=!0)}},ready:function(){},beforeUpdate:function(){},updated:function(){InputsCheckboxesRadios.initComponents()}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[t._m(0),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("POS")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v("Orderss")])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("button",{staticClass:"btn btn-outline btn-primary border-primary text-primary-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{type:"button"},on:{click:t.tableDataUpdate}},[a("i",{staticClass:"fas fa-sync mr-1"}),t._v(" Refresh\n                    ")]),t._v(" "),t._m(2)])])])]),t._v(" "),a("div",{staticClass:"content border-0 p-0"},[a("loading-animation"),t._v(" "),a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[t._m(3),t._v(" "),a("rg-tables-state"),t._v(" "),a("tbody",t._l(t.tableData.payload.data,(function(e){return a("tr",{on:{click:function(a){return t.onRowClick(e)}}},[a("td",{staticClass:"cursor-pointer font-weight-semibold text-right text-nowrap pr-0"},[t._v(t._s(e.currency))]),t._v(" "),a("td",{staticClass:"cursor-pointer font-weight-bold text-right text-nowrap"},[t._v(t._s(t.rgNumberFormat(e.total,2)))]),t._v(" "),a("td",{staticClass:"cursor-pointer font-weight-semibold text-right text-nowrap"},[t._v(t._s(t.rgNumberFormat(e.cash_tendered,2)))]),t._v(" "),a("td",{staticClass:"cursor-pointer font-weight-semibold text-right text-nowrap"},[t._v(t._s(t.rgNumberFormat(e.cash_change,2)))]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(e.date))]),t._v(" "),a("td",{staticClass:"cursor-pointer",attrs:{nowrap:""}},[t._v(t._s(e.time))]),t._v(" "),a("td",{staticClass:"cursor-pointer"},[t._v(t._s(e.number))]),t._v(" "),a("td",{staticClass:"cursor-pointer text-uppercase"},[t._v(t._s(e.payment_mode))])])})),0)],1),t._v(" "),a("rg-tables-pagination",{attrs:{"table-data-prop":t.tableData}})],1)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-content header-elements-md-inline"},[e("div",{staticClass:"page-title d-flex"},[e("h4",[e("i",{staticClass:"icon-drawer3 mr-2"}),this._v(" "),e("span",{staticClass:"font-weight-semibold"},[this._v("POS Orders")])]),this._v(" "),e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-outline btn-success border-success text-success-800 border-2 btn-sm rounded font-weight-bold mr-2",attrs:{href:"/pos"}},[e("i",{staticClass:"icon-files-empty2 mr-1"}),this._v(" Point of sales\n                    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table-active"},[a("th",{staticClass:"col-auto font-weight-bold pr-0 text-center"},[a("i",{staticClass:"icon-cash3"})]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}},[t._v("Total")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}},[t._v("Cash")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold text-right",attrs:{nowrap:""}},[t._v("Change")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold"},[t._v("Date")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold"},[t._v("Time")]),t._v(" "),a("th",{staticClass:"col-auto font-weight-bold",attrs:{nowrap:""}},[t._v("Document No")]),t._v(" "),a("th",{staticClass:"col font-weight-bold",attrs:{nowrap:""}},[t._v("Payment mode")])])])}],!1,null,null,null);e.default=i.exports}}]);