(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b561cc"],{"615b":function(t,a,e){},"879d":function(t,a,e){},"99d9":function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return r}));var s=e("b0af"),n=e("80d2"),i=Object(n["g"])("v-card__actions"),o=Object(n["g"])("v-card__subtitle"),r=Object(n["g"])("v-card__text"),c=Object(n["g"])("v-card__title");s["a"]},a3fe:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"template-page"},[e("v-row",[e("v-col",{attrs:{cols:"8"}},[e("div",{staticClass:"mt-4 mb-2 ml-5 download-container"},[e("v-btn",{attrs:{color:"primary"},on:{click:t.downloadNow}},[t._v("Download")])],1),e("div",{staticClass:"routine-container"},[e("div",{ref:"routine",staticClass:"routine routine--template  ",attrs:{id:"routine"}},[e("div",{staticClass:"date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.routineDate,expression:"routineDate"}],staticClass:"date-input",attrs:{type:"text"},domProps:{value:t.routineDate},on:{input:function(a){a.target.composing||(t.routineDate=a.target.value)}}})]),e("table",{staticClass:"routine-table"},[e("thead",[e("tr",[e("th",{staticClass:"column1"},[t._v("শ্রেণী")]),e("th",{staticClass:"column2"},[t._v("বিষয়")]),e("th",{staticClass:"column3"},[t._v("সময়")])])]),e("tbody",t._l(t.routine,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"column1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.class,expression:"r.class"}],staticClass:"table-input",attrs:{type:"text"},domProps:{value:a.class},on:{input:function(e){e.target.composing||t.$set(a,"class",e.target.value)}}})]),e("td",{staticClass:"column2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.subject,expression:"r.subject"}],staticClass:"table-input",attrs:{type:"text"},domProps:{value:a.subject},on:{input:function(e){e.target.composing||t.$set(a,"subject",e.target.value)}}})]),e("td",{staticClass:"column3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.duration,expression:"r.duration"}],staticClass:"table-input",attrs:{type:"text"},domProps:{value:a.duration},on:{input:function(e){e.target.composing||t.$set(a,"duration",e.target.value)}}})])])})),0)])])]),e("b-container")],1),e("v-col",{attrs:{cols:"4"}},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[e("v-card-text",[e("div"),e("p",{staticClass:"display-1 text--primary"},[t._v(" Help Text Bangla ")]),e("div",{staticClass:"text--primary"},t._l(t.items,(function(a){return e("li",{key:a.datas},[e("h3",[t._v(" "+t._s(a.datas)+" ")])])})),0)]),e("v-card-actions")],1)],1)],1)],1)},n=[],i=(e("ac1f"),e("5319"),e("c0e9")),o=e.n(i),r={components:{},data:function(){return{routineDate:"২২ এপ্রিলের সময়সুচি",routine:[{class:"৭ম",subject:"আরবি ২য় পত্র",duration:"বিকাল ৪.০০ - ৪.২০"},{class:"৮ম",subject:"আরবি ২য় পত্র",duration:"বিকাল ৪.২০ - ৪.৪০"},{class:"৯ম",subject:"আরবি ২য় পত্র",duration:"বিকাল ৪.৪০ - ৫.০০"}],items:[{datas:" ১০.৪৫ - ১১.০৫ -- বাংলাদেশ ও বিশ্বপরিচয় + বিজ্ঞান "},{datas:"  ১১.২৫ - ১২.০৫ -- বাংলাদেশ ও বিশ্বপরিচয় + বিজ্ঞান  "},{datas:" ১২.০৫ - ১২.৪৫ -- ইংরেজি + বাংলাদেশ ও বিশ্বপরিচয় "},{datas:" ১২.৪৫ - ০১.২৫ --ইংরেজি +  হিসাববিজ্ঞান  "},{datas:" ১.২৫-২.১০ -- বাংলাদেশ ও বিশ্বপরিচয় + গণিত "},{datas:" ১০.৪০-১০মাদ্রসা রুটিন ৬ থেকে ১০ শ্রেণী কারিগরি ঘরে বসে কারিগরি ক্রিয়াকলাপভিত্তিকআনন্দদায়ক শিখন"}]}},mounted:function(){},methods:{downloadNow:function(){var t=this;this.$refs.routine.style.border="none",o()(this.$refs.routine).then((function(a){var e=document.createElement("a");e.href=a.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"),e.download="template1.jpg",e.click(),t.$refs.routine.style.border="1px solid #000"}))}}},c=r,l=(e("be25"),e("2877")),d=e("6544"),u=e.n(d),v=e("8336"),p=e("b0af"),m=e("99d9"),b=e("62ad"),h=e("0fd9"),g=Object(l["a"])(c,s,n,!1,null,null,null);a["default"]=g.exports;u()(g,{VBtn:v["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCol:b["a"],VRow:h["a"]})},b0af:function(t,a,e){"use strict";e("0481"),e("4069"),e("a9e3");var s=e("5530"),n=(e("615b"),e("10d2")),i=e("297c"),o=e("1c87"),r=e("58df");a["a"]=Object(r["a"])(i["a"],o["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(s["a"])({"v-card":!0},o["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var a=this.generateRouteLink(),e=a.tag,s=a.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},be25:function(t,a,e){"use strict";var s=e("879d"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-32b561cc.eea0bb02.js.map