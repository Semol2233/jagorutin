(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bf3a7a1"],{"3e7c":function(t,a,e){"use strict";var s=e("6ec2"),n=e.n(s);n.a},"615b":function(t,a,e){},"6b9a":function(t,a,e){"use strict";var s=e("8031"),n=e.n(s);n.a},"6ec2":function(t,a,e){},8031:function(t,a,e){},"99d9":function(t,a,e){"use strict";e.d(a,"a",(function(){return o})),e.d(a,"b",(function(){return i}));var s=e("b0af"),n=e("80d2"),o=Object(n["g"])("v-card__actions"),r=Object(n["g"])("v-card__subtitle"),i=Object(n["g"])("v-card__text"),c=Object(n["g"])("v-card__title");s["a"]},a974:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template-page"},[e("v-row",[e("v-col",{attrs:{cols:"8"}},[e("div",{staticClass:"mt-4 mb-2 ml-5 download-container"},[e("v-btn",{attrs:{color:"primary"},on:{click:t.downloadNow}},[t._v("Download")]),e("h1",[t._v("Extra Data 3 col")])],1),e("div",{staticClass:"routine-container"},[e("div",{ref:"routine",staticClass:"routine routine--template5",attrs:{id:"routine"}},[e("div",{staticClass:"datse"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.routineDate,expression:"routineDate"}],staticClass:"date-input",attrs:{type:"text"},domProps:{value:t.routineDate},on:{input:function(a){a.target.composing||(t.routineDate=a.target.value)}}})]),e("table",{staticClass:"routine-table"},[e("thead",[e("tr",[e("th",{staticClass:"column1"},[t._v("শ্রেণী")]),e("th",{staticClass:"column2"},[t._v("বিষয়")]),e("th",{staticClass:"column3"},[t._v(" সময় "),e("span",{staticClass:"font-normal"},[t._v("(সকাল)")])])])]),e("tbody",[e("tr",{staticClass:"prak-row"}),t._l(t.routine,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"column1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.class,expression:"r.class"}],staticClass:"table-input",attrs:{type:"text"},domProps:{value:a.class},on:{input:function(e){e.target.composing||t.$set(a,"class",e.target.value)}}})]),e("td",{staticClass:"column2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.subject,expression:"r.subject"}],staticClass:"table-input",attrs:{type:"text"},domProps:{value:a.subject},on:{input:function(e){e.target.composing||t.$set(a,"subject",e.target.value)}}})]),e("td",{staticClass:"column3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.duration,expression:"r.duration"}],staticClass:"table-input",attrs:{type:"text"},domProps:{value:a.duration},on:{input:function(e){e.target.composing||t.$set(a,"duration",e.target.value)}}})])])}))],2)])])])]),e("v-col",{attrs:{cols:"4"}},[e("googledrive")],1)],1)],1)},n=[],o=(e("ac1f"),e("5319"),e("c0e9")),r=e.n(o),i=e("aa0a"),c={components:{googledrive:i["a"]},data:function(){return{routineDate:"২২ এপ্রিলের সময়সুচি",coronaBreak:"জাতীয় সঙ্গীত ও করোনা সচেতনতা (সকাল ১১ঃ০০-১১ঃ০৫)",prakPrathomik:{class:"প্রাক-প্রাথমিক",subject1:"ক্রিয়াকালাপ ভিডিও",subject2:" আনন্দদায়ক শিখন (পুনঃপ্রচার)",duration:"০৯.০০-০৯.২০"},routine:[{class:"২য়",subject:"ইংরেজি (পুনঃপ্রচার)",duration:"০৯.৪০-১০.০০"},{class:"৪র্থ",subject:"বিজ্ঞান",duration:"১০.২০-১০.৪০"},{class:"৫ম",subject:"ইংরেজি",duration:"১০.৪০-১১.০০"}]}},mounted:function(){},methods:{downloadNow:function(){var t=this;this.$refs.routine.style.border="none",r()(this.$refs.routine).then((function(a){var e=document.createElement("a");e.href=a.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"),e.download="template1.jpg",e.click(),t.$refs.routine.style.border="1px solid #000"}))}}},l=c,u=(e("6b9a"),e("2877")),d=e("6544"),v=e.n(d),m=e("8336"),p=e("62ad"),f=e("0fd9"),h=Object(u["a"])(l,s,n,!1,null,null,null);a["default"]=h.exports;v()(h,{VBtn:m["a"],VCol:p["a"],VRow:f["a"]})},aa0a:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[e("v-card-text",[e("div"),e("p",{staticClass:"display-1 text--primary"},[t._v(" Help Text Bangla ")]),e("div",{staticClass:"text--primary"},t._l(t.items,(function(a){return e("li",{key:a.datas},[e("h3",[t._v(" "+t._s(a.datas)+" ")])])})),0)]),e("v-card-actions")],1)],1)},n=[],o=(e("ac1f"),e("5319"),e("c0e9")),r=e.n(o),i={components:{},data:function(){return{items:[{datas:" ১০.৪৫ - ১১.০৫ -- বাংলাদেশ ও বিশ্বপরিচয় + বিজ্ঞান "},{datas:"  ১১.২৫ - ১২.০৫ -- বাংলাদেশ ও বিশ্বপরিচয় + বিজ্ঞান  "},{datas:" ১২.০৫ - ১২.৪৫ -- ইংরেজি + বাংলাদেশ ও বিশ্বপরিচয় "},{datas:" ১২.৪৫ - ০১.২৫ --ইংরেজি +  হিসাববিজ্ঞান  "},{datas:" ১.২৫-২.১০ -- বাংলাদেশ ও বিশ্বপরিচয় + গণিত "},{datas:" ১০.৪০-১০মাদ্রসা রুটিন ৬ থেকে ১০ শ্রেণী কারিগরি ঘরে বসে কারিগরি ক্রিয়াকলাপভিত্তিকআনন্দদায়ক শিখন"}]}},mounted:function(){},methods:{downloadNow:function(){var t=this;this.$refs.routine.style.border="none",r()(this.$refs.routine).then((function(a){var e=document.createElement("a");e.href=a.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"),e.download="template1.jpg",e.click(),t.$refs.routine.style.border="1px solid #000"}))}}},c=i,l=(e("3e7c"),e("2877")),u=e("6544"),d=e.n(u),v=e("b0af"),m=e("99d9"),p=Object(l["a"])(c,s,n,!1,null,null,null);a["a"]=p.exports;d()(p,{VCard:v["a"],VCardActions:m["a"],VCardText:m["b"]})},b0af:function(t,a,e){"use strict";e("0481"),e("4069"),e("a9e3");var s=e("5530"),n=(e("615b"),e("10d2")),o=e("297c"),r=e("1c87"),i=e("58df");a["a"]=Object(i["a"])(o["a"],r["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(s["a"])({"v-card":!0},r["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var a=this.generateRouteLink(),e=a.tag,s=a.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-7bf3a7a1.0aefac6e.js.map