(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ce686d0"],{1103:function(t,e,s){},2703:function(t,e,s){"use strict";s("1103")},"585e":function(t,e,s){},cd56:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("Sidebar"),s("div",{staticClass:"main"},[t._m(0),s("div",{directives:[{name:"modal",rawName:"v-modal",value:t.tweet,expression:"tweet"}],staticClass:"tweet-area"},[s("div",{staticClass:"user-avatar"},[s("router-link",{attrs:{to:"/profile"}},[s("img",{staticClass:"avatar",attrs:{src:t._f("nullAvatar")(t.currentUser.avatar),alt:"預設的頭像"}})])],1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tweet,expression:"tweet"}],staticClass:"text-area",attrs:{type:"text",placeholder:"有什麼新鮮事？"},domProps:{value:t.tweet},on:{input:function(e){e.target.composing||(t.tweet=e.target.value)}}}),s("button",{staticClass:"tweet-btn",attrs:{disabled:t.isProcessing,type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitTweet.apply(null,arguments)}}},[t._v(" 推文 ")])]),s("MainTweetList")],1),s("RightColumn"),s("ReplyModal")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-header"},[s("span",{staticClass:"title"},[t._v("首頁")])])}],n=s("1da1"),i=s("5530"),c=(s("96cf"),s("d9e2"),s("5ea5")),o=s("dc59"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},t._l(t.tweets,(function(e){return a("div",{key:e.id,staticClass:"tweet-list"},[a("div",{staticClass:"tweet-item"},[a("div",{staticClass:"user-avatar"},[a("router-link",{attrs:{to:{path:"/users/"+e.userId}}},[a("img",{staticClass:"avatar-img",attrs:{src:e.User.avatar,alt:"/"}})])],1),a("div",{staticClass:"post-content"},[a("router-link",{attrs:{to:{path:"/users/"+e.userId}}},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"user-name"},[t._v(t._s(e.User.name))]),a("div",{staticClass:"user-accountName"},[t._v(t._s(e.User.account))]),a("div",{staticClass:"post-time"},[t._v("‧"+t._s(t._f("fromNow")(e.createdAt)))])])]),a("router-link",{staticClass:"tweet-content",attrs:{to:{path:"/tweets/"+e.id}}},[a("span",{staticClass:"tweet-content"},[t._v(" "+t._s(e.description)+" ")])]),a("div",{staticClass:"icon-item"},[a("button",{staticClass:"reply d-flex",on:{click:function(s){return t.$bus.$emit("replyModal",e.id)}}},[a("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M8.77881 1.40127L6.18631 1.39502H6.18506C3.45131 1.39502 1.31006 3.53689 1.31006 6.27127C1.31006 8.83252 3.30131 10.775 5.97568 10.8775V13.27C5.97568 13.3375 6.00318 13.4488 6.05068 13.5219C6.13943 13.6625 6.29068 13.7388 6.44568 13.7388C6.53193 13.7388 6.61881 13.715 6.69693 13.665C6.86193 13.56 10.7426 11.0775 11.7519 10.2238C12.9407 9.21752 13.6519 7.74252 13.6538 6.27877V6.26814C13.6501 3.53877 11.5101 1.40127 8.77881 1.40064V1.40127ZM11.1457 9.50877C10.4369 10.1088 8.10693 11.6369 6.91318 12.4106V10.4188C6.91318 10.16 6.70381 9.95002 6.44443 9.95002H6.19693C3.90943 9.95002 2.24818 8.40252 2.24818 6.27127C2.24818 4.06252 3.97818 2.33252 6.18568 2.33252L8.77756 2.33877H8.77881C10.9863 2.33877 12.7163 4.06752 12.7176 6.27377C12.7157 7.46752 12.1288 8.67627 11.1463 9.50877H11.1457Z",fill:"#657786"}})]),a("span",{staticClass:"replay-count"},[t._v(t._s(e.replyCount))])]),a("div",{staticClass:"like-item"},[e.isLiked?a("button",{staticClass:"like",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.deleteLikes(e)}}},[a("img",{staticClass:"like-icon",attrs:{src:s("e654"),alt:""}}),a("span",[t._v(t._s(e.likeCount))])]):a("button",{staticClass:"like",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addLikes(e)}}},[a("img",{staticClass:"like-icon",attrs:{src:s("fc55"),alt:"/"}}),a("span",[t._v(t._s(e.likeCount))])])])])],1)])])})),0)},l=[],d=s("51d0"),p=s("2708"),v={mixins:[p["a"]],data:function(){return{tweets:[]}},created:function(){var t=this.$route.params.queryId;this.fetchTweets({queryId:t})},methods:{fetchTweets:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,d["a"].getTweets({id:t});case 3:a=s.sent,r=a.data,e.tweets=r,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),console.log("error");case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()},addLikes:function(t){return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].addLike(t.id);case 3:s=e.sent,s.data,t.isLiked=!t.isLiked,t.likeCount+=1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},deleteLikes:function(t){return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].deleteLike(t.id);case 3:if(s=e.sent,a=s.data,"success"===a.status){e.next=7;break}throw new Error(a.message);case 7:t.isLiked=!t.isLiked,t.likeCount-=1,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log("error2");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},beforeMount:function(){var t=this;this.$bus.$on("fetch-MainTweetList",(function(){t.fetchTweets()}))}},m=v,w=(s("d934"),s("2877")),f=Object(w["a"])(m,u,l,!1,null,"207ab8f2",null),C=f.exports,b=s("2f62"),h=s("7482"),k=s("2797"),g={mixins:[p["b"]],data:function(){return{tweet:"",isProcessing:!1}},components:{Sidebar:c["a"],RightColumn:o["a"],MainTweetList:C,ReplyModal:k["a"]},computed:Object(i["a"])({},Object(b["b"])(["currentUser"])),methods:{submitTweet:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.tweet){e.next=5;break}return t.tweetHint="empty",t.$bus.$emit("toast",{icon:"error",title:"內容不可空白"}),e.abrupt("return");case 5:if(!(t.tweet.length>140)){e.next=9;break}return t.tweetHint="empty",t.$bus.$emit("toast",{icon:"error",title:"字數不可超過 140 字"}),e.abrupt("return");case 9:return t.isProcessing=!0,e.next=12,h["a"].submitTweet({description:t.tweet});case 12:if(s=e.sent,a=s.data,console.log(a),"success"!==a.status){e.next=22;break}t.tweet="",t.$bus.$emit("fetch-MainTweetList",!0),t.$bus.$emit("toast",{icon:"success",title:"推文發送成功"}),t.isProcessing=!1,e.next=23;break;case 22:throw new Error(a.message);case 23:e.next=30;break;case 25:e.prev=25,e.t0=e["catch"](0),console.log(e.t0),t.isProcessing=!1,t.$bus.$emit("toast",{icon:"error",title:"".concat(e.t0)});case 30:case"end":return e.stop()}}),e,null,[[0,25]])})))()}}},x=g,_=(s("2703"),Object(w["a"])(x,a,r,!1,null,"5b5954ad",null));e["default"]=_.exports},d934:function(t,e,s){"use strict";s("585e")}}]);
//# sourceMappingURL=chunk-6ce686d0.bddf6887.js.map