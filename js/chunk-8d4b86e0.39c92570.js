(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d4b86e0","chunk-185827cc"],{"0183":function(t,e,s){"use strict";s("f4eb")},"404c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("Sidebar"),s("div",{staticClass:"profile-container"},[s("ProfileArea"),s("div",{staticClass:"hidden-gap"}),s("UsersNavTabs"),s("div",{staticClass:"tweet-list"},[s("router-view")],1)],1),s("RightColumn"),s("ReplyModal")],1)},r=[],n=s("5ea5"),i=s("dc59"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-list"},[s("div",{staticClass:"nav-tabs"},[s("button",{staticClass:"nav-item tweet",attrs:{type:"button"}},[s("router-link",{staticClass:"nav-link",attrs:{to:{path:"/users/"+t.$route.params.id+"/tweet"}}},[t._v(" 推文 ")])],1),s("button",{staticClass:"nav-item reply"},[s("router-link",{staticClass:"nav-link",attrs:{to:{path:"/users/"+t.$route.params.id+"/reply"}}},[t._v(" 推文與回覆 ")])],1),s("button",{staticClass:"nav-item like"},[s("router-link",{staticClass:"nav-link",attrs:{to:{path:"/users/"+t.$route.params.id+"/like"}}},[t._v(" 喜歡的內容 ")])],1)])])},o=[],l={data:function(){return{}}},u=l,d=(s("8335"),s("2877")),p=Object(d["a"])(u,c,o,!1,null,"d08a0186",null),v=p.exports,f=s("9f98"),k=s("dac4"),m=s("2797"),C={components:{Sidebar:n["a"],RightColumn:i["a"],ProfileArea:k["a"],UsersNavTabs:v,OtherUserTweet:f["default"],ReplyModal:m["a"]},data:function(){return{isActive:!0}}},w=C,h=(s("89a9"),Object(d["a"])(w,a,r,!1,null,"8c6c4cfe",null));e["default"]=h.exports},8335:function(t,e,s){"use strict";s("8ff2")},"89a9":function(t,e,s){"use strict";s("cb4c")},"8ff2":function(t,e,s){},"9f98":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tweet-container"},[t.noReply?a("div",{staticClass:"noReply"},[a("span",[t._v(" 目前沒有任何推文 ")])]):a("div",{staticClass:"tweet-list"},t._l(t.tweets,(function(e){return a("div",{key:e.id,staticClass:"tweet-item"},[a("div",{staticClass:"user-avatar"},[a("router-link",{attrs:{to:{path:"/users/"+e.userId}}},[a("img",{staticClass:"avatar-img",attrs:{src:e.User.avatar}})])],1),a("div",{staticClass:"post-content"},[a("router-link",{attrs:{to:{path:"/users/"+e.userId}}},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"user-name"},[t._v(t._s(e.User.name))]),a("div",{staticClass:"user-accountName"},[t._v("@"+t._s(e.User.account))]),a("div",{staticClass:"post-time"},[t._v("‧"+t._s(t._f("fromNow")(e.createdAt)))])])]),a("span",{staticClass:"tweet-content"},[t._v(" "+t._s(e.description)+" ")]),a("div",{staticClass:"icon-item"},[a("button",{staticClass:"reply",on:{click:function(s){return t.$bus.$emit("replyModal",e.id)}}},[a("img",{staticClass:"reply-icon",attrs:{src:s("0e9d")}}),a("span",{staticClass:"replay-count"},[t._v(t._s(e.replyCount))])]),a("div",{staticClass:"like-item"},[e.isLiked?a("button",{staticClass:"like",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.deleteLikes(e)}}},[a("img",{staticClass:"like-icon",attrs:{src:s("e654"),alt:""}}),a("span",[t._v(t._s(e.likeCount))])]):a("button",{staticClass:"like",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addLikes(e)}}},[a("img",{staticClass:"like-icon",attrs:{src:s("fc55"),alt:"/"}}),a("span",[t._v(t._s(e.likeCount))])])])])],1)])})),0)])},r=[],n=s("1da1"),i=(s("d9e2"),s("96cf"),s("1602")),c=s("2708"),o=s("51d0"),l={mixins:[c["a"]],data:function(){return{tweets:[],noReply:!0}},created:function(){var t=this.$route.params.id;this.fetchTweets(t)},beforeRouteUpdate:function(t,e,s){var a=t.params.id;this.fetchTweets(a),s()},methods:{fetchTweets:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,r,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,i["a"].getUserTweetList(t);case 3:a=s.sent,r=a.data,n=r,e.tweets=n,t===t?e.noReply=!1:"error"===r.status&&(e.noReply=!0),s.next=14;break;case 10:s.prev=10,s.t0=s["catch"](0),e.noReply=!0,console.log("error");case 14:case"end":return s.stop()}}),s,null,[[0,10]])})))()},addLikes:function(t){return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].addLike(t.id);case 3:s=e.sent,s.data,t.isLiked=!t.isLiked,t.likeCount+=1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},deleteLikes:function(t){return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].deleteLike(t.id);case 3:if(s=e.sent,a=s.data,"success"===a.status){e.next=7;break}throw new Error(a.message);case 7:t.isLiked=!t.isLiked,t.likeCount-=1,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log("error2");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},u=l,d=(s("0183"),s("2877")),p=Object(d["a"])(u,a,r,!1,null,"a869ae70",null);e["default"]=p.exports},cb4c:function(t,e,s){},f4eb:function(t,e,s){}}]);
//# sourceMappingURL=chunk-8d4b86e0.39c92570.js.map