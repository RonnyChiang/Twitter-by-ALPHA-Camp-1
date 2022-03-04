(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d944f45"],{"3ccb":function(t,e,s){"use strict";s("bb94")},"4eed":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Toast"),a("form",{staticClass:"regist-container",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[a("img",{staticClass:"logo",attrs:{src:s("155f")}}),a("span",{staticClass:"page-title"},[t._v(" 建立你的帳號 ")]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" 帳號 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"account",staticStyle:{"font-size":"25px"},attrs:{type:"text",autocomplete:"username"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),a("label",{staticClass:"error-text",class:{visible:t.accountHint}},[t._v(" 請輸入帳號！ ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" 名稱 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"name",staticStyle:{"font-size":"25px"},attrs:{type:"name",autocomplete:"nickname"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("label",{staticClass:"error-text"},[t._v(" 請輸入名稱！ ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email",staticStyle:{"font-size":"25px"},attrs:{type:"email",autocomplete:"email"},domProps:{value:t.email},on:{blur:t.emailFormat,input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{staticClass:"error-text",class:[{visible:t.emailHint}]},[t._v(" "+t._s(t.emailHint?"Email格式錯誤":"Email 已重複註冊！")+" ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" 密碼 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",staticStyle:{"font-size":"25px"},attrs:{type:"password",autocomplete:"new-password"},domProps:{value:t.password},on:{blur:t.passwordLength,input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{staticClass:"error-text",class:{visible:t.passwordHint}},[t._v(" 密碼至少要有四個字 ")])]),a("div",{staticClass:"input-container"},[a("label",{staticClass:"input-title"},[t._v(" 密碼確認 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordCheck,expression:"passwordCheck"}],staticClass:"passwordCheck",staticStyle:{"font-size":"25px"},attrs:{type:"password",autocomplete:"new-password"},domProps:{value:t.passwordCheck},on:{blur:t.checkPassword,input:function(e){e.target.composing||(t.passwordCheck=e.target.value)}}}),a("label",{staticClass:"error-text",class:{visible:t.checkHint}},[t._v(" 密碼確認錯誤！ ")])]),a("button",{staticClass:"regist-btn",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" 註冊 ")]),a("div",{staticClass:"cancel-link"},[a("p",{staticClass:"cancel"},[a("router-link",{attrs:{to:"/login"}},[t._v(" 取消 ")])],1)])])],1)},i=[],r=s("1da1"),n=(s("96cf"),s("ac1f"),s("00b4"),s("b0c0"),s("d9e2"),s("0eb4")),o=s("7696"),c={components:{Toast:n["a"]},data:function(){return{account:"",accountHint:!1,name:"",email:"",emailHint:!1,password:"",passwordHint:!1,passwordCheck:"",checkHint:!1,isProcessing:!1}},methods:{emailFormat:function(){var t=/[^@\s]+@[^@\s]+\.[^@\s]+/;this.email&&!t.test(this.email)?(this.$bus.$emit("toast",{icon:"error",title:"Email 格式錯誤"}),this.emailHint=!0):this.emailHint=!1},passwordLength:function(){this.password&&this.password.length<4?(this.$bus.$emit("toast",{icon:"error",title:"密碼至少要有四個字"}),this.passwordHint=!0):this.passwordHint=!1},checkPassword:function(){this.password&&this.passwordCheck&&this.password!==this.passwordCheck?this.checkHint=!0:this.checkHint=!1},handleSubmit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.account){e.next=4;break}return t.$bus.$emit("toast",{icon:"error",title:"請填入想註冊的帳號"}),e.abrupt("return");case 4:if(t.name){e.next=9;break}return t.$bus.$emit("toast",{icon:"error",title:"請填入名稱"}),e.abrupt("return");case 9:t.name.length>50&&t.$bus.$emit("toast",{icon:"error",title:"字數超出上限！"});case 10:if(t.email){e.next=13;break}return t.$bus.$emit("toast",{icon:"error",title:"請填入 Email"}),e.abrupt("return");case 13:if(t.password){e.next=18;break}return t.$bus.$emit("toast",{icon:"error",title:"請填入密碼"}),e.abrupt("return");case 18:if(!(t.password.length<4)){e.next=21;break}return t.$bus.$emit("toast",{icon:"error",title:"密碼至少要有四個字"}),e.abrupt("return");case 21:if(t.passwordCheck){e.next=26;break}return t.$bus.$emit("toast",{icon:"error",title:"請再次確認密碼"}),e.abrupt("return");case 26:if(t.password===t.passwordCheck){e.next=29;break}return t.$bus.$emit("toast",{icon:"error",title:"密碼與密碼確認輸入內容不同"}),e.abrupt("return");case 29:return t.isProcessing=!0,e.next=32,o["a"].signUp({account:t.account,name:t.name,email:t.email,password:t.password});case 32:if(s=e.sent,a=s.data,"error"!==a.status){e.next=37;break}throw t.$bus.$emit("toast",{icon:"error",title:"".concat(a.message)}),new Error(a.message);case 37:t.$bus.$emit("toast",{icon:"success",title:"註冊成功"}),t.$router.push({name:"user-login"}),t.isProcessing=!1,e.next=47;break;case 42:e.prev=42,e.t0=e["catch"](0),t.isProcessing=!1,console.log(e.t0),t.$bus.$emit({title:"".concat(e.t0)});case 47:case"end":return e.stop()}}),e,null,[[0,42]])})))()}}},l=c,u=(s("3ccb"),s("2877")),p=Object(u["a"])(l,a,i,!1,null,"350e2145",null);e["default"]=p.exports},bb94:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3d944f45.c3db61ca.js.map