(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{wDfH:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),n=a.n(s);function i(t,e,a,s,n,i,l){try{var o=t[i](l),r=o.value}catch(t){return void a(t)}o.done?e(r):Promise.resolve(r).then(s,n)}function l(t){return function(){var e=this,a=arguments;return new Promise((function(s,n){var l=t.apply(e,a);function o(t){i(l,s,n,o,r,"next",t)}function r(t){i(l,s,n,o,r,"throw",t)}o(void 0)}))}}var o={data:function(){return{loadingContactBills:!1,paymentMadeContacts:[],paymentMadeOnBills:!0,paymentMadeAutoSetItemsTotalCheckbox:!1,paymentMadeDebitAccounts:[],paymentMadeAmountUnallocated:0,txnAttributes:{total:0,items:[]}}},computed:{paymentMadeTotalDue:function(){var t=this,e=0;return t.txnAttributes.items.forEach((function(a){void 0!==a.bill&&void 0!==a.bill.balance&&(e+=t.rgNumber(a.bill.balance))})),e}},watch:{paymentMadeContacts:function(){this.fetchContactBills()},paymentMadeAutoSetItemsTotalCheckbox:function(){this.paymentMadeAutoSetItemsTotal()},"txnAttributes.total":function(){this.paymentMadeAutoSetItemsTotal()}},created:function(){this.pageTitle="Edit payment",this.pageAction="Edit"},mounted:function(){this.paymentMadeEditData(),this.txnFetchCustomers("-initiate-"),this.fetchReceiptDebitAccounts(),this.txnFetchPaymentModes()},methods:{paymentMadeEditData:function(){var t=this;return l(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get(t.$route.fullPath).then((function(e){t.pageTitle=e.data.pageTitle,t.pageAction=e.data.pageAction,t.txnAttributes=e.data.txnAttributes,t.txnUrlStore=e.data.txnUrlStore,t.txnOnSave(e.data.txnAttributes.status,!1)})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},fetchContactBills:function(){var t=this;return l(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],t.paymentMadeContacts.forEach((function(t){a.push(t.id)})),0!==a.length){e.next=6;break}return t.loadingContactBills=!1,t.txnAttributes.items=[],e.abrupt("return",!1);case 6:return e.prev=6,t.loadingContactBills=!0,e.next=10,axios.post("/payments-made/bills",{contact_ids:a}).then((function(e){t.loadingContactBills=!1,!0===e.data.status?(t.txnAttributes.items=e.data.items,t.paymentMadeAutoSetItemsTotal()):t.txnAttributes.items=[]})).catch((function(t){console.log(t)})).finally((function(t){}));case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(6),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})))()},fetchReceiptDebitAccounts:function(){var t=this;return l(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/payments-made/credit-accounts").then((function(e){t.paymentMadeDebitAccounts=e.data})).catch((function(t){console.log(t)})).finally((function(t){}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},paymentMadeContactsOnSelect:function(t,e){this.paymentMadeContacts=t},paymentMadeContactInput:function(t,e){this.txnContactSelect(t,e),this.paymentMadeContacts=[],this.paymentMadeContacts.push(t)},paymentMadeAutoSetItemsTotal:function(){var t=this;if(this.paymentMadeAutoSetItemsTotalCheckbox){var e=this.rgNumber(this.txnAttributes.total),a=0;this.txnAttributes.items.forEach((function(s){s.amount=0,s.paidInFull=!1,a=t.rgNumber(s.bill.balance),e>=a?s.amount=a.toFixed(2):e<a&&e>0&&(s.amount=e.toFixed(2)),e=t.rgNumber(t.rgNumber(e)-t.rgNumber(a))}))}this.paymentMadeItemsTotal()},paymentMadeItemsTotal:function(){var t=this,e=0;t.txnAttributes.items.forEach((function(a){e+=t.rgNumber(a.amount)})),t.paymentMadeAmountUnallocated=t.txnAttributes.total-e},paymentMadeItemRateReset:function(t){this.txnAttributes.items[t].amount=0,this.txnAttributes.items[t].paidInFull=!1,this.paymentMadeAutoSetItemsTotalCheckbox=!1,this.paymentMadeItemsTotal()},paymentMadeItemPaidInFull:function(t){this.paymentMadeAutoSetItemsTotalCheckbox=!1,this.txnAttributes.items[t].paidInFull&&(this.txnAttributes.items[t].amount=this.rgNumber(this.txnAttributes.items[t].bill.balance).toFixed(this.$root.tenant.decimal_places)),this.paymentMadeItemsTotal()},paymentMadeAllItemsRateReset:function(){this.txnAttributes.items.forEach((function(t){t.amount=0,t.paidInFull=!1})),this.paymentMadeAutoSetItemsTotalCheckbox=!1,this.paymentMadeItemsTotal()},paymentMadeAllItemsPaidInFull:function(){var t=this;t.paymentMadeAutoSetItemsTotalCheckbox=!1,t.txnAttributes.items.forEach((function(e){e.paidInFull=!0,e.amount=t.rgNumber(e.bill.balance).toFixed(t.$root.tenant.decimal_places)})),t.paymentMadeItemsTotal()}},beforeUpdate:function(){},updated:function(){},destroyed:function(){}},r=a("KHd+"),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"page-header page-header-light"},[a("div",{staticClass:"page-header-content header-elements-md-inline"},[a("div",{staticClass:"page-title d-flex"},[a("h4",[a("i",{staticClass:"icon-file-plus"}),t._v("\n                        "+t._s(t.pageTitle)+"\n                    ")])])]),t._v(" "),a("div",{staticClass:"breadcrumb-line breadcrumb-line-light header-elements-md-inline"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"breadcrumb"},[a("a",{staticClass:"breadcrumb-item",attrs:{href:"/"}},[a("i",{staticClass:"icon-home2 mr-2"}),t._v(" "),a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v(" "+t._s(t._f("truncate")(this.$root.tenant.name,30))+" ")])]),t._v(" "),a("span",{staticClass:"breadcrumb-item"},[t._v("Receipt")]),t._v(" "),a("span",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.pageAction))])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"header-elements"},[a("div",{staticClass:"breadcrumb justify-content-center"},[a("router-link",{staticClass:" btn btn-danger btn-sm rounded-round font-weight-bold",attrs:{to:t.txnUrlStore}},[a("i",{staticClass:"icon-drawer3 mr-2"}),t._v("\n                            Receipts\n                        ")])],1)])])]),t._v(" "),a("div",{staticClass:"content border-0 padding-0"},[a("div",{staticClass:"card shadow-none rounded-0 border-0"},[a("div",{staticClass:"card-body p-0"},[a("loading-animation"),t._v(" "),this.$root.loading?t._e():a("form",{staticClass:"max-width-1040",staticStyle:{"margin-bottom":"100px"},attrs:{action:"",method:"post",autocomplete:"off"},on:{submit:t.txnFormSubmit}},[a("fieldset",{staticClass:"select_contact_required",attrs:{id:"fieldset_select_contact"}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-lg-2 text-danger text-danger"},[t._v("Customer *")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnContacts,"option-value":"id","option-text":"display_name",placeholder:"select contact"},on:{searchchange:t.txnFetchCustomers,input:t.paymentMadeContactInput},model:{value:t.txnAttributes.contact,callback:function(e){t.$set(t.txnAttributes,"contact",e)},expression:"txnAttributes.contact"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id,expression:"txnAttributes.contact_id"}],staticClass:"col-lg-1 p-0"},[a("model-list-select",{staticClass:"rounded-0",attrs:{list:t.txnAttributes.contact.currencies,"option-value":"code","option-text":"code",placeholder:"select currency"},model:{value:t.txnAttributes.contact.currency,callback:function(e){t.$set(t.txnAttributes.contact,"currency",e)},expression:"txnAttributes.contact.currency"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.txnAttributes.contact_id&&t.txnAttributes.base_currency!=t.txnAttributes.quote_currency,expression:"txnAttributes.contact_id && txnAttributes.base_currency != txnAttributes.quote_currency"}],staticClass:"col-lg-3 pr-0"},[a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.exchange_rate,expression:"txnAttributes.exchange_rate"}],staticClass:"form-control text-right rounded-0",attrs:{type:"text",placeholder:"Exchange rate"},domProps:{value:t.txnAttributes.exchange_rate},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"exchange_rate",e.target.value)}}})])])])]),t._v(" "),a("fieldset",{},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Number & Date *\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.number,expression:"txnAttributes.number"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"number",placeholder:"Offer number"},domProps:{value:t.txnAttributes.number},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"number",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-lg-2",attrs:{title:"Bill date"}},[a("date-picker",{staticClass:"font-weight-bold rounded-0 w-100 h-100",attrs:{valueType:"format",lang:t.vue2DatePicker.lang,placeholder:"Bill date"},model:{value:t.txnAttributes.date,callback:function(e){t.$set(t.txnAttributes,"date",e)},expression:"txnAttributes.date"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Reference\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.reference,expression:"txnAttributes.reference"}],staticClass:"form-control rounded-0",attrs:{type:"text",name:"reference",placeholder:"Enter reference"},domProps:{value:t.txnAttributes.reference},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"reference",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Amount paid *\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text font-weight-bold rounded-0"},[t._v("\n                                                "+t._s(t.txnAttributes.base_currency)+"\n                                            ")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.total,expression:"txnAttributes.total"}],staticClass:"form-control font-weight-semibold text-right rounded-0",attrs:{type:"text",placeholder:"Amount paid"},domProps:{value:t.txnAttributes.total},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"total",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-lg-5 col-form-label"},[a("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentMadeAutoSetItemsTotalCheckbox,expression:"paymentMadeAutoSetItemsTotalCheckbox"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"txn-auto-pay"},domProps:{checked:Array.isArray(t.paymentMadeAutoSetItemsTotalCheckbox)?t._i(t.paymentMadeAutoSetItemsTotalCheckbox,null)>-1:t.paymentMadeAutoSetItemsTotalCheckbox},on:{change:function(e){var a=t.paymentMadeAutoSetItemsTotalCheckbox,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.paymentMadeAutoSetItemsTotalCheckbox=a.concat([null])):i>-1&&(t.paymentMadeAutoSetItemsTotalCheckbox=a.slice(0,i).concat(a.slice(i+1)))}else t.paymentMadeAutoSetItemsTotalCheckbox=n}}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"txn-auto-pay"}},[t._v("Auto pay bill(s)")])])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label text-danger"},[t._v("\n                                    Payment mode *\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-5"},[a("model-select",{staticClass:"rounded-0",attrs:{options:t.txnPaymentModes,placeholder:"Select payment mode"},model:{value:t.txnAttributes.payment_mode,callback:function(e){t.$set(t.txnAttributes,"payment_mode",e)},expression:"txnAttributes.payment_mode"}})],1),t._v(" "),a("label",{staticClass:"col-lg-1 col-form-label text-right bg-light border rounded-left border-right-0 text-danger",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                    Paid through *\n                                ")]),t._v(" "),a("div",{staticClass:"col-lg-4 pl-0"},[a("model-list-select",{staticClass:"rounded-0",attrs:{list:t.paymentMadeDebitAccounts,"option-value":"code","option-text":"name",placeholder:"select account"},model:{value:t.txnAttributes.credit_financial_account_code,callback:function(e){t.$set(t.txnAttributes,"credit_financial_account_code",e)},expression:"txnAttributes.credit_financial_account_code"}})],1)])]),t._v(" "),t.paymentMadeOnBills?a("div",{staticClass:"card mb-0"},[a("fieldset",[a("div",{staticClass:"form-group row mb-0 mt-0"},[a("label",{staticClass:"col-lg-2 col-form-label text-right border-0 rounded-left",staticStyle:{"white-space":"nowrap"}},[t._v("\n                                        Show bills to\n                                    ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("multi-list-select",{staticClass:"border-0 rounded-0",attrs:{list:t.txnContacts,"option-value":"id","option-text":"display_name","selected-items":t.paymentMadeContacts,placeholder:"Select customer / contact"},on:{select:t.paymentMadeContactsOnSelect,searchchange:t.txnFetchContacts}})],1)])]),t._v(" "),a("hr",{staticClass:"m-0"}),t._v(" "),a("table",{staticClass:"table"},[a("thead",{staticClass:"thead-default"},[a("tr",[t._m(2),t._v(" "),a("th",{staticClass:"h6",attrs:{width:""}},[t._v("\n                                        Bill#\n                                        "),a("small",{staticClass:"pull-right pt-5"},[a("a",{attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.paymentMadeAllItemsPaidInFull(e)}}},[t._v("(Pay all\n                                                fully)")])])]),t._v(" "),a("th",{staticClass:"h6 text-right",attrs:{width:""}},[t._v("Bill amount")]),t._v(" "),a("th",{staticClass:"h6 text-right",attrs:{width:""}},[t._v("Amount due")]),t._v(" "),a("th",{staticClass:"h6 text-left",attrs:{width:""}},[t._v("\n                                        Receipt amount\n                                        "),a("small",{staticClass:"pull-right pt-5"},[a("a",{attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.paymentMadeAllItemsRateReset(e)}}},[t._v("(Clear\n                                                amounts)")])])])])]),t._v(" "),a("tbody",[t.loadingContactBills?a("tr",[t._m(3)]):t._e(),t._v(" "),t.loadingContactBills||"object"==typeof t.txnAttributes.contact?t._e():a("tr",[t._m(4)]),t._v(" "),!t.loadingContactBills&&t.paymentMadeContacts.length>0&&0===t.txnAttributes.items.length?a("tr",[t._m(5)]):t._e(),t._v(" "),t._l(t.txnAttributes.items,(function(e,s){return!t.loadingContactBills&&e.bill?a("tr",[a("td",{},[a("span",{staticClass:"text-semibold"},[t._v(t._s(e.bill.date))]),a("br"),t._v(" "),a("span",{staticClass:"text-muted text-size-small"},[t._v("Due "+t._s(e.bill.due_date))])]),t._v(" "),a("td",{},[a("div",{staticClass:"text-nowrap h6"},[a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(e.bill.number))]),t._v(" -\n                                            "),a("span",[t._v(t._s(e.bill.contact_name))])]),t._v(" "),a("div",{staticClass:"custom-control custom-checkbox custom-control-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.paidInFull,expression:"item.paidInFull"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"contact-bill-"+e.bill.id},domProps:{checked:Array.isArray(e.paidInFull)?t._i(e.paidInFull,null)>-1:e.paidInFull},on:{change:[function(a){var s=e.paidInFull,n=a.target,i=!!n.checked;if(Array.isArray(s)){var l=t._i(s,null);n.checked?l<0&&t.$set(e,"paidInFull",s.concat([null])):l>-1&&t.$set(e,"paidInFull",s.slice(0,l).concat(s.slice(l+1)))}else t.$set(e,"paidInFull",i)},function(e){return t.paymentMadeItemPaidInFull(s)}]}}),t._v(" "),a("label",{staticClass:"custom-control-label",attrs:{for:"contact-bill-"+e.bill.id},model:{value:e.paidInFull,callback:function(a){t.$set(e,"paidInFull",a)},expression:"item.paidInFull"}},[t._v("Paid in full")])])]),t._v(" "),a("td",{staticClass:"text-right"},[a("span",{staticClass:"text-primary font-weight-semibold"},[t._v(t._s(t.rgNumberFormat(e.bill.total,2)))]),t._v(" "),a("small",[t._v(t._s(e.bill.base_currency))])]),t._v(" "),a("td",{staticClass:"text-right h6"},[a("span",{staticClass:"text-danger font-weight-semibold"},[t._v(t._s(t.rgNumberFormat(e.bill.balance,2)))]),t._v(" "),a("small",[t._v(t._s(e.bill.base_currency))])]),t._v(" "),a("td",{staticClass:"text-right align-middle"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text rounded-0"},[t._v(t._s(e.bill.base_currency))])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"item.amount"}],staticClass:"form-control font-weight-semibold text-right rounded-0",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.amount},on:{keyup:t.paymentMadeItemsTotal,input:function(a){a.target.composing||t.$set(e,"amount",a.target.value)}}}),t._v(" "),a("span",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline bg-danger border-danger text-danger-800 btn-icon rounded-0",attrs:{type:"button",title:"Delete row"},on:{click:function(e){return t.paymentMadeItemRateReset(s)}}},[a("i",{staticClass:"icon-cross3"})])])])])]):t._e()}))],2),t._v(" "),a("tfoot",[t.txnAttributes.items.length>0?a("tr",[a("td",{staticClass:"text-bold",attrs:{colspan:"3"}}),t._v(" "),a("td",{staticClass:"pl-15 text-bold"},[t.txnAttributes.base_currency?a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                            "+t._s(t.txnAttributes.base_currency)+"\n                                        ")]):t._e(),t._v("\n                                        Total due\n                                    ")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.rgNumberFormat(t.paymentMadeTotalDue,2)))])]):t._e(),t._v(" "),t.txnAttributes.items.length>0?a("tr",[a("td",{staticClass:"p-15 no-border",attrs:{colspan:"3"}}),t._v(" "),a("td",{staticClass:"p-15 no-border-right text-bold size4of5"},[t.txnAttributes.base_currency?a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                            "+t._s(t.txnAttributes.base_currency)+"\n                                        ")]):t._e(),t._v("\n                                        Amount Received\n                                    ")]),t._v(" "),a("td",{staticClass:"no-border-left font-weight-bold h4 text-right"},[t._v("\n                                        "+t._s(t.rgNumberFormat(t.txnAttributes.total,2))+"\n                                    ")])]):t._e(),t._v(" "),t.txnAttributes.items.length>0&&t.paymentMadeAmountUnallocated?a("tr",[a("td",{staticClass:"p-15 no-border",attrs:{colspan:"3"}}),t._v(" "),a("td",{staticClass:"p-15 no-border-right text-bold size4of5 text-danger"},[t.txnAttributes.base_currency?a("span",{staticClass:"badge badge-primary badge-pill font-weight-bold rg-breadcrumb-item-tenant-name"},[t._v("\n                                            "+t._s(t.txnAttributes.base_currency)+"\n                                        ")]):t._e(),t._v("\n                                        Amount unallocated\n                                    ")]),t._v(" "),a("td",{staticClass:"no-border-left h5 text-right text-danger"},[t._v("\n                                        "+t._s(t.rgNumberFormat(t.paymentMadeAmountUnallocated,2))+"\n                                    ")])]):t._e()])])]):t._e(),t._v(" "),a("fieldset",{staticClass:"mt-3"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-form-label col-lg-2"},[t._v("Attach files")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("input",{ref:"filesAttached",staticClass:"form-control border-0 p-1 h-auto",attrs:{type:"file",multiple:""}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-2 col-form-label"},[t._v("\n                                    Notes\n                                    ")]),t._v(" "),a("div",{staticClass:"col-lg-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txnAttributes.notes,expression:"txnAttributes.notes"}],staticClass:"form-control rounded-0",attrs:{rows:"2",placeholder:"Notes"},domProps:{value:t.txnAttributes.notes},on:{input:function(e){e.target.composing||t.$set(t.txnAttributes,"notes",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"text-left col-md-10 offset-md-2 p-0"},[a("div",{staticClass:"btn-group ml-1"},[t._m(6),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-left"},[a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("draft",!1)}}},[a("i",{staticClass:"icon-file-text3"}),t._v(" Save as draft\n                                    ")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!1)}}},[a("i",{staticClass:"icon-file-check2"}),t._v(" Save and approve\n                                    ")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.txnOnSave("approved",!0)}}},[a("i",{staticClass:"icon-mention"}),t._v(" Save, approve and send\n                                    ")])])]),t._v(" "),a("button",{staticClass:"btn btn-danger font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"icon-file-plus2 mr-1"}),t._v(" "+t._s(t.txnSubmitBtnText)+"\n                            ")])])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header-elements-toggle text-default d-md-none",attrs:{href:"#"}},[e("i",{staticClass:"icon-more"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text rounded-0"},[this._v("Exchange rate:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"h6",attrs:{width:""}},[this._v("Date / "),e("span",{staticClass:"text-muted text-size-small"},[this._v("Due")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center",attrs:{colspan:"5"}},[e("h1",[e("i",{staticClass:"icon-spinner2 spinner"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center",attrs:{colspan:"5"}},[e("h4",[this._v("Please select contact to continue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"text-center text-danger",attrs:{colspan:"5"}},[e("h4",[this._v("Oops: No bills found")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-outline bg-purple-300 border-purple-300 text-purple-800 btn-icon border-2 dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[e("i",{staticClass:"icon-cog"})])}],!1,null,null,null);e.default=c.exports}}]);