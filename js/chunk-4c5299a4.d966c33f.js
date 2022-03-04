(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c5299a4"],{"6a06":function(t,e,a){"use strict";a("985d")},"985d":function(t,e,a){},ce99:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-container"},[a("Sidebar"),a("form",{staticClass:"setting-form",on:{submit:t.handleSubmit}},[t._m(0),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" 帳號 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"accountName",staticStyle:{"font-size":"25px"},attrs:{type:"accountName"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),a("label",{staticClass:"error-text"},[t._v(" 帳號不存在！ ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" 名稱 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"name",staticStyle:{"font-size":"25px"},attrs:{type:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("label",{staticClass:"error-text"},[t._v(" 名稱不存在！ ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email",staticStyle:{"font-size":"25px"},attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{staticClass:"error-text"},[t._v(" Email不存在！ ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" 密碼 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",staticStyle:{"font-size":"25px"},attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{staticClass:"error-text"},[t._v(" 密碼不存在！ ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" 密碼確認 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordCheck,expression:"passwordCheck"}],staticClass:"passwordCheck",staticStyle:{"font-size":"25px"},attrs:{type:"password"},domProps:{value:t.passwordCheck},on:{input:function(e){e.target.composing||(t.passwordCheck=e.target.value)}}}),a("label",{staticClass:"error-text"},[t._v(" 密碼確認錯誤！ ")])]),a("button",{staticClass:"saveBtn",attrs:{disabled:t.isProcessing}},[t._v("儲存")])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-header"},[a("span",{staticClass:"form-title"},[t._v("帳戶設定")])])}],n=a("1da1"),i=(a("96cf"),a("b0c0"),a("ac1f"),a("00b4"),a("d9e2"),a("5ea5")),o=a("1602"),c={data:function(){return{account:"",name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.account){e.next=4;break}return t.$bus.$emit("toast",{icon:"error",title:"請填入想更改的帳號"}),e.abrupt("return");case 4:if(t.name){e.next=9;break}return t.$bus.$emit("toast",{icon:"error",title:"請填入名稱"}),e.abrupt("return");case 9:t.name.length>50&&t.$bus.$emit("toast",{icon:"error",title:"字數超出上限！"});case 10:if(t.email){e.next=15;break}return t.$bus.$emit("toast",{icon:"error",title:"請填入 Email"}),e.abrupt("return");case 15:if(/[^@\s]+@[^@\s]+\.[^@\s]+/.test(t.email)){e.next=18;break}return t.$bus.$emit("toast",{icon:"error",title:"Email 格式錯誤"}),e.abrupt("return");case 18:if(t.password){e.next=23;break}return t.$bus.$emit("toast",{icon:"error",title:"請填入密碼"}),e.abrupt("return");case 23:if(!(t.password.length<4)){e.next=26;break}return t.$bus.$emit("toast",{icon:"error",title:"密碼至少要有四個字"}),e.abrupt("return");case 26:if(t.passwordCheck){e.next=31;break}return t.$bus.$emit("toast",{icon:"error",title:"請再次確認密碼"}),e.abrupt("return");case 31:if(t.password===t.passwordCheck){e.next=34;break}return t.$bus.$emit("toast",{icon:"error",title:"密碼與密碼確認輸入內容不同"}),e.abrupt("return");case 34:return t.isProcessing=!0,e.next=37,o["a"].editAccount({account:t.account,name:t.name,email:t.email,password:t.password});case 37:if(a=e.sent,s=a.data,console.log(s),"success"!==s.status){e.next=45;break}t.$bus.$emit("toast",{icon:"success",title:"資料修改成功"}),t.isProcessing=!1,e.next=47;break;case 45:throw t.$bus.$emit("toast",{icon:"error",title:"".concat(s.message)}),new Error(s.message);case 47:e.next=54;break;case 49:e.prev=49,e.t0=e["catch"](0),t.isProcessing=!1,console.log(e.t0),t.$bus.$emit("toast",{icon:"error",title:"".concat(data.message)});case 54:case"end":return e.stop()}}),e,null,[[0,49]])})))()},fetchAccount:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,n,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].getCurrent();case 3:a=e.sent,s=a.data,"success"!==s.status&&t.$bus.$emit("toast",{icon:"error",title:"無法取得資料"}),r=s.data,n=r.account,i=r.name,c=r.email,t.account=n,t.name=i,t.email=c,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0),t.$bus.$emit({title:"".concat(e.t0)});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}},created:function(){this.fetchAccount()},components:{Sidebar:i["a"]}},u=c,l=(a("6a06"),a("2877")),m=Object(l["a"])(u,s,r,!1,null,"228741a5",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-4c5299a4.d966c33f.js.map