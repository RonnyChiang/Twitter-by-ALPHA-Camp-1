(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b44872d6"],{"026d":function(t,e,s){"use strict";s("c21b")},"2b3d":function(t,e,s){"use strict";s("3ca3");var r,a=s("23e7"),n=s("83ab"),i=s("0d3b"),o=s("da84"),c=s("0366"),l=s("e330"),u=s("37e8").f,h=s("6eeb"),f=s("19aa"),p=s("1a2d"),m=s("60da"),d=s("4df4"),v=s("4dae"),g=s("6547").codeAt,C=s("5fb2"),w=s("577e"),b=s("d44e"),H=s("d6d6"),x=s("9861"),L=s("69f3"),P=L.set,k=L.getterFor("URL"),y=x.URLSearchParams,_=x.getState,$=o.URL,U=o.TypeError,S=o.parseInt,R=Math.floor,F=Math.pow,V=l("".charAt),B=l(/./.exec),I=l([].join),M=l(1..toString),j=l([].pop),q=l([].push),Z=l("".replace),A=l([].shift),O=l("".split),E=l("".slice),N=l("".toLowerCase),z=l([].unshift),D="Invalid authority",J="Invalid scheme",T="Invalid host",G="Invalid port",K=/[a-z]/i,Q=/[\d+-.a-z]/i,W=/\d/,X=/^0x/i,Y=/^[0-7]+$/,tt=/^\d+$/,et=/^[\da-f]+$/i,st=/[\0\t\n\r #%/:<>?@[\\\]^|]/,rt=/[\0\t\n\r #/:<>?@[\\\]^|]/,at=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,nt=/[\t\n\r]/g,it=function(t){var e,s,r,a,n,i,o,c=O(t,".");if(c.length&&""==c[c.length-1]&&c.length--,e=c.length,e>4)return t;for(s=[],r=0;r<e;r++){if(a=c[r],""==a)return t;if(n=10,a.length>1&&"0"==V(a,0)&&(n=B(X,a)?16:8,a=E(a,8==n?1:2)),""===a)i=0;else{if(!B(10==n?tt:8==n?Y:et,a))return t;i=S(a,n)}q(s,i)}for(r=0;r<e;r++)if(i=s[r],r==e-1){if(i>=F(256,5-e))return null}else if(i>255)return null;for(o=j(s),r=0;r<s.length;r++)o+=s[r]*F(256,3-r);return o},ot=function(t){var e,s,r,a,n,i,o,c=[0,0,0,0,0,0,0,0],l=0,u=null,h=0,f=function(){return V(t,h)};if(":"==f()){if(":"!=V(t,1))return;h+=2,l++,u=l}while(f()){if(8==l)return;if(":"!=f()){e=s=0;while(s<4&&B(et,f()))e=16*e+S(f(),16),h++,s++;if("."==f()){if(0==s)return;if(h-=s,l>6)return;r=0;while(f()){if(a=null,r>0){if(!("."==f()&&r<4))return;h++}if(!B(W,f()))return;while(B(W,f())){if(n=S(f(),10),null===a)a=n;else{if(0==a)return;a=10*a+n}if(a>255)return;h++}c[l]=256*c[l]+a,r++,2!=r&&4!=r||l++}if(4!=r)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;c[l++]=e}else{if(null!==u)return;h++,l++,u=l}}if(null!==u){i=l-u,l=7;while(0!=l&&i>0)o=c[l],c[l--]=c[u+i-1],c[u+--i]=o}else if(8!=l)return;return c},ct=function(t){for(var e=null,s=1,r=null,a=0,n=0;n<8;n++)0!==t[n]?(a>s&&(e=r,s=a),r=null,a=0):(null===r&&(r=n),++a);return a>s&&(e=r,s=a),e},lt=function(t){var e,s,r,a;if("number"==typeof t){for(e=[],s=0;s<4;s++)z(e,t%256),t=R(t/256);return I(e,".")}if("object"==typeof t){for(e="",r=ct(t),s=0;s<8;s++)a&&0===t[s]||(a&&(a=!1),r===s?(e+=s?":":"::",a=!0):(e+=M(t[s],16),s<7&&(e+=":")));return"["+e+"]"}return t},ut={},ht=m({},ut,{" ":1,'"':1,"<":1,">":1,"`":1}),ft=m({},ht,{"#":1,"?":1,"{":1,"}":1}),pt=m({},ft,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),mt=function(t,e){var s=g(t,0);return s>32&&s<127&&!p(e,t)?t:encodeURIComponent(t)},dt={ftp:21,file:null,http:80,https:443,ws:80,wss:443},vt=function(t,e){var s;return 2==t.length&&B(K,V(t,0))&&(":"==(s=V(t,1))||!e&&"|"==s)},gt=function(t){var e;return t.length>1&&vt(E(t,0,2))&&(2==t.length||"/"===(e=V(t,2))||"\\"===e||"?"===e||"#"===e)},Ct=function(t){return"."===t||"%2e"===N(t)},wt=function(t){return t=N(t),".."===t||"%2e."===t||".%2e"===t||"%2e%2e"===t},bt={},Ht={},xt={},Lt={},Pt={},kt={},yt={},_t={},$t={},Ut={},St={},Rt={},Ft={},Vt={},Bt={},It={},Mt={},jt={},qt={},Zt={},At={},Ot=function(t,e,s){var r,a,n,i=w(t);if(e){if(a=this.parse(i),a)throw U(a);this.searchParams=null}else{if(void 0!==s&&(r=new Ot(s,!0)),a=this.parse(i,null,r),a)throw U(a);n=_(new y),n.bindURL(this),this.searchParams=n}};Ot.prototype={type:"URL",parse:function(t,e,s){var a,n,i,o,c=this,l=e||bt,u=0,h="",f=!1,m=!1,g=!1;t=w(t),e||(c.scheme="",c.username="",c.password="",c.host=null,c.port=null,c.path=[],c.query=null,c.fragment=null,c.cannotBeABaseURL=!1,t=Z(t,at,"")),t=Z(t,nt,""),a=d(t);while(u<=a.length){switch(n=a[u],l){case bt:if(!n||!B(K,n)){if(e)return J;l=xt;continue}h+=N(n),l=Ht;break;case Ht:if(n&&(B(Q,n)||"+"==n||"-"==n||"."==n))h+=N(n);else{if(":"!=n){if(e)return J;h="",l=xt,u=0;continue}if(e&&(c.isSpecial()!=p(dt,h)||"file"==h&&(c.includesCredentials()||null!==c.port)||"file"==c.scheme&&!c.host))return;if(c.scheme=h,e)return void(c.isSpecial()&&dt[c.scheme]==c.port&&(c.port=null));h="","file"==c.scheme?l=Vt:c.isSpecial()&&s&&s.scheme==c.scheme?l=Lt:c.isSpecial()?l=_t:"/"==a[u+1]?(l=Pt,u++):(c.cannotBeABaseURL=!0,q(c.path,""),l=qt)}break;case xt:if(!s||s.cannotBeABaseURL&&"#"!=n)return J;if(s.cannotBeABaseURL&&"#"==n){c.scheme=s.scheme,c.path=v(s.path),c.query=s.query,c.fragment="",c.cannotBeABaseURL=!0,l=At;break}l="file"==s.scheme?Vt:kt;continue;case Lt:if("/"!=n||"/"!=a[u+1]){l=kt;continue}l=$t,u++;break;case Pt:if("/"==n){l=Ut;break}l=jt;continue;case kt:if(c.scheme=s.scheme,n==r)c.username=s.username,c.password=s.password,c.host=s.host,c.port=s.port,c.path=v(s.path),c.query=s.query;else if("/"==n||"\\"==n&&c.isSpecial())l=yt;else if("?"==n)c.username=s.username,c.password=s.password,c.host=s.host,c.port=s.port,c.path=v(s.path),c.query="",l=Zt;else{if("#"!=n){c.username=s.username,c.password=s.password,c.host=s.host,c.port=s.port,c.path=v(s.path),c.path.length--,l=jt;continue}c.username=s.username,c.password=s.password,c.host=s.host,c.port=s.port,c.path=v(s.path),c.query=s.query,c.fragment="",l=At}break;case yt:if(!c.isSpecial()||"/"!=n&&"\\"!=n){if("/"!=n){c.username=s.username,c.password=s.password,c.host=s.host,c.port=s.port,l=jt;continue}l=Ut}else l=$t;break;case _t:if(l=$t,"/"!=n||"/"!=V(h,u+1))continue;u++;break;case $t:if("/"!=n&&"\\"!=n){l=Ut;continue}break;case Ut:if("@"==n){f&&(h="%40"+h),f=!0,i=d(h);for(var C=0;C<i.length;C++){var b=i[C];if(":"!=b||g){var H=mt(b,pt);g?c.password+=H:c.username+=H}else g=!0}h=""}else if(n==r||"/"==n||"?"==n||"#"==n||"\\"==n&&c.isSpecial()){if(f&&""==h)return D;u-=d(h).length+1,h="",l=St}else h+=n;break;case St:case Rt:if(e&&"file"==c.scheme){l=It;continue}if(":"!=n||m){if(n==r||"/"==n||"?"==n||"#"==n||"\\"==n&&c.isSpecial()){if(c.isSpecial()&&""==h)return T;if(e&&""==h&&(c.includesCredentials()||null!==c.port))return;if(o=c.parseHost(h),o)return o;if(h="",l=Mt,e)return;continue}"["==n?m=!0:"]"==n&&(m=!1),h+=n}else{if(""==h)return T;if(o=c.parseHost(h),o)return o;if(h="",l=Ft,e==Rt)return}break;case Ft:if(!B(W,n)){if(n==r||"/"==n||"?"==n||"#"==n||"\\"==n&&c.isSpecial()||e){if(""!=h){var x=S(h,10);if(x>65535)return G;c.port=c.isSpecial()&&x===dt[c.scheme]?null:x,h=""}if(e)return;l=Mt;continue}return G}h+=n;break;case Vt:if(c.scheme="file","/"==n||"\\"==n)l=Bt;else{if(!s||"file"!=s.scheme){l=jt;continue}if(n==r)c.host=s.host,c.path=v(s.path),c.query=s.query;else if("?"==n)c.host=s.host,c.path=v(s.path),c.query="",l=Zt;else{if("#"!=n){gt(I(v(a,u),""))||(c.host=s.host,c.path=v(s.path),c.shortenPath()),l=jt;continue}c.host=s.host,c.path=v(s.path),c.query=s.query,c.fragment="",l=At}}break;case Bt:if("/"==n||"\\"==n){l=It;break}s&&"file"==s.scheme&&!gt(I(v(a,u),""))&&(vt(s.path[0],!0)?q(c.path,s.path[0]):c.host=s.host),l=jt;continue;case It:if(n==r||"/"==n||"\\"==n||"?"==n||"#"==n){if(!e&&vt(h))l=jt;else if(""==h){if(c.host="",e)return;l=Mt}else{if(o=c.parseHost(h),o)return o;if("localhost"==c.host&&(c.host=""),e)return;h="",l=Mt}continue}h+=n;break;case Mt:if(c.isSpecial()){if(l=jt,"/"!=n&&"\\"!=n)continue}else if(e||"?"!=n)if(e||"#"!=n){if(n!=r&&(l=jt,"/"!=n))continue}else c.fragment="",l=At;else c.query="",l=Zt;break;case jt:if(n==r||"/"==n||"\\"==n&&c.isSpecial()||!e&&("?"==n||"#"==n)){if(wt(h)?(c.shortenPath(),"/"==n||"\\"==n&&c.isSpecial()||q(c.path,"")):Ct(h)?"/"==n||"\\"==n&&c.isSpecial()||q(c.path,""):("file"==c.scheme&&!c.path.length&&vt(h)&&(c.host&&(c.host=""),h=V(h,0)+":"),q(c.path,h)),h="","file"==c.scheme&&(n==r||"?"==n||"#"==n))while(c.path.length>1&&""===c.path[0])A(c.path);"?"==n?(c.query="",l=Zt):"#"==n&&(c.fragment="",l=At)}else h+=mt(n,ft);break;case qt:"?"==n?(c.query="",l=Zt):"#"==n?(c.fragment="",l=At):n!=r&&(c.path[0]+=mt(n,ut));break;case Zt:e||"#"!=n?n!=r&&("'"==n&&c.isSpecial()?c.query+="%27":c.query+="#"==n?"%23":mt(n,ut)):(c.fragment="",l=At);break;case At:n!=r&&(c.fragment+=mt(n,ht));break}u++}},parseHost:function(t){var e,s,r;if("["==V(t,0)){if("]"!=V(t,t.length-1))return T;if(e=ot(E(t,1,-1)),!e)return T;this.host=e}else if(this.isSpecial()){if(t=C(t),B(st,t))return T;if(e=it(t),null===e)return T;this.host=e}else{if(B(rt,t))return T;for(e="",s=d(t),r=0;r<s.length;r++)e+=mt(s[r],ut);this.host=e}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return p(dt,this.scheme)},shortenPath:function(){var t=this.path,e=t.length;!e||"file"==this.scheme&&1==e&&vt(t[0],!0)||t.length--},serialize:function(){var t=this,e=t.scheme,s=t.username,r=t.password,a=t.host,n=t.port,i=t.path,o=t.query,c=t.fragment,l=e+":";return null!==a?(l+="//",t.includesCredentials()&&(l+=s+(r?":"+r:"")+"@"),l+=lt(a),null!==n&&(l+=":"+n)):"file"==e&&(l+="//"),l+=t.cannotBeABaseURL?i[0]:i.length?"/"+I(i,"/"):"",null!==o&&(l+="?"+o),null!==c&&(l+="#"+c),l},setHref:function(t){var e=this.parse(t);if(e)throw U(e);this.searchParams.update()},getOrigin:function(){var t=this.scheme,e=this.port;if("blob"==t)try{return new Et(t.path[0]).origin}catch(s){return"null"}return"file"!=t&&this.isSpecial()?t+"://"+lt(this.host)+(null!==e?":"+e:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(w(t)+":",bt)},getUsername:function(){return this.username},setUsername:function(t){var e=d(w(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var s=0;s<e.length;s++)this.username+=mt(e[s],pt)}},getPassword:function(){return this.password},setPassword:function(t){var e=d(w(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var s=0;s<e.length;s++)this.password+=mt(e[s],pt)}},getHost:function(){var t=this.host,e=this.port;return null===t?"":null===e?lt(t):lt(t)+":"+e},setHost:function(t){this.cannotBeABaseURL||this.parse(t,St)},getHostname:function(){var t=this.host;return null===t?"":lt(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,Rt)},getPort:function(){var t=this.port;return null===t?"":w(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(t=w(t),""==t?this.port=null:this.parse(t,Ft))},getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+I(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,Mt))},getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){t=w(t),""==t?this.query=null:("?"==V(t,0)&&(t=E(t,1)),this.query="",this.parse(t,Zt)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){t=w(t),""!=t?("#"==V(t,0)&&(t=E(t,1)),this.fragment="",this.parse(t,At)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var Et=function(t){var e=f(this,Nt),s=H(arguments.length,1)>1?arguments[1]:void 0,r=P(e,new Ot(t,!1,s));n||(e.href=r.serialize(),e.origin=r.getOrigin(),e.protocol=r.getProtocol(),e.username=r.getUsername(),e.password=r.getPassword(),e.host=r.getHost(),e.hostname=r.getHostname(),e.port=r.getPort(),e.pathname=r.getPathname(),e.search=r.getSearch(),e.searchParams=r.getSearchParams(),e.hash=r.getHash())},Nt=Et.prototype,zt=function(t,e){return{get:function(){return k(this)[t]()},set:e&&function(t){return k(this)[e](t)},configurable:!0,enumerable:!0}};if(n&&u(Nt,{href:zt("serialize","setHref"),origin:zt("getOrigin"),protocol:zt("getProtocol","setProtocol"),username:zt("getUsername","setUsername"),password:zt("getPassword","setPassword"),host:zt("getHost","setHost"),hostname:zt("getHostname","setHostname"),port:zt("getPort","setPort"),pathname:zt("getPathname","setPathname"),search:zt("getSearch","setSearch"),searchParams:zt("getSearchParams"),hash:zt("getHash","setHash")}),h(Nt,"toJSON",(function(){return k(this).serialize()}),{enumerable:!0}),h(Nt,"toString",(function(){return k(this).serialize()}),{enumerable:!0}),$){var Dt=$.createObjectURL,Jt=$.revokeObjectURL;Dt&&h(Et,"createObjectURL",c(Dt,$)),Jt&&h(Et,"revokeObjectURL",c(Jt,$))}b(Et,"URL"),a({global:!0,forced:!i,sham:!n},{URL:Et})},"5fb2":function(t,e,s){"use strict";var r=s("da84"),a=s("e330"),n=2147483647,i=36,o=1,c=26,l=38,u=700,h=72,f=128,p="-",m=/[^\0-\u007E]/,d=/[.\u3002\uFF0E\uFF61]/g,v="Overflow: input needs wider integers to process",g=i-o,C=r.RangeError,w=a(d.exec),b=Math.floor,H=String.fromCharCode,x=a("".charCodeAt),L=a([].join),P=a([].push),k=a("".replace),y=a("".split),_=a("".toLowerCase),$=function(t){var e=[],s=0,r=t.length;while(s<r){var a=x(t,s++);if(a>=55296&&a<=56319&&s<r){var n=x(t,s++);56320==(64512&n)?P(e,((1023&a)<<10)+(1023&n)+65536):(P(e,a),s--)}else P(e,a)}return e},U=function(t){return t+22+75*(t<26)},S=function(t,e,s){var r=0;t=s?b(t/u):t>>1,t+=b(t/e);while(t>g*c>>1)t=b(t/g),r+=i;return b(r+(g+1)*t/(t+l))},R=function(t){var e=[];t=$(t);var s,r,a=t.length,l=f,u=0,m=h;for(s=0;s<t.length;s++)r=t[s],r<128&&P(e,H(r));var d=e.length,g=d;d&&P(e,p);while(g<a){var w=n;for(s=0;s<t.length;s++)r=t[s],r>=l&&r<w&&(w=r);var x=g+1;if(w-l>b((n-u)/x))throw C(v);for(u+=(w-l)*x,l=w,s=0;s<t.length;s++){if(r=t[s],r<l&&++u>n)throw C(v);if(r==l){var k=u,y=i;while(1){var _=y<=m?o:y>=m+c?c:y-m;if(k<_)break;var R=k-_,F=i-_;P(e,H(U(_+R%F))),k=b(R/F),y+=i}P(e,H(U(k))),m=S(u,x,g==d),u=0,g++}}u++,l++}return L(e,"")};t.exports=function(t){var e,s,r=[],a=y(k(_(t),d,"."),".");for(e=0;e<a.length;e++)s=a[e],P(r,w(m,s)?"xn--"+R(s):s);return L(r,".")}},"9a69":function(t,e,s){"use strict";s("cdc6")},c21b:function(t,e,s){},cdc6:function(t,e,s){},dac4:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-area"},[s("div",{staticClass:"header d-flex align-items-center"},[s("button",{staticClass:"previous d-flex justify-content-center align-items-center",on:{click:function(e){return t.$router.go(-1)}}},[s("svg",{attrs:{width:"17",height:"14",viewBox:"0 0 17 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z",fill:"black"}})])]),s("div",[s("h3",{staticClass:"name"},[t._v(t._s(t.name))]),s("p",[t._v(t._s(t.tweetCount)+" 推文")])])]),s("div",{staticClass:"user-photo"},[s("img",{staticClass:"cover",attrs:{src:t._f("nullCover")(t.cover),alt:"預設的使用者封面"}}),s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t._f("nullAvatar")(t.avatar),alt:"預設的使用者頭像"}}),s("div",{staticClass:"mask"})])]),s("div",{staticClass:"user-info"},[s("div",{staticClass:"toolbar d-flex justify-content-end align-items-center"},[t.isSelf?t._e():[s("button",{staticClass:"message"},[s("svg",{attrs:{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"17.5",cy:"17.5",r:"17",stroke:"#FF6600"}}),s("path",{attrs:{d:"M23.8438 9.64062H11.1562C9.82888 9.64062 8.75 10.7204 8.75 12.0486V22.9817C8.75 24.31 9.82888 25.3906 11.1562 25.3906H23.8438C25.1711 25.3906 26.25 24.31 26.25 22.9817V12.0486C26.25 10.7204 25.1711 9.64062 23.8438 9.64062ZM11.1562 10.9531H23.8438C24.4475 10.9531 24.9375 11.4431 24.9375 12.0469V12.6716L17.8937 17.3678C17.6549 17.5253 17.346 17.527 17.1063 17.366L10.0625 12.6716V12.0469C10.0625 11.4431 10.5525 10.9531 11.1562 10.9531V10.9531ZM23.8438 24.0764H11.1562C10.5525 24.0764 10.0625 23.5864 10.0625 22.9826V14.2099L16.3975 18.4361C16.7326 18.6601 17.1168 18.7721 17.5 18.7721C17.885 18.7721 18.2674 18.6601 18.6025 18.437L24.9375 14.2108V22.98C24.9375 23.5838 24.4475 24.0738 23.8438 24.0738V24.0764Z",fill:"#FF6600"}})])]),t.isNotify?s("button",{staticClass:"notify-active"},[s("svg",{attrs:{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"17.5",cy:"17.5",r:"17",fill:"#FF6600",stroke:"#FF6600"}}),s("path",{attrs:{d:"M27.6584 7.1313C27.3302 6.9703 26.9391 7.10505 26.7781 7.4288L24.2721 12.4828L22.782 10.899C22.5344 10.6339 22.1187 10.6225 21.8545 10.871C21.5902 11.1195 21.578 11.536 21.8265 11.7985L23.9641 14.07C24.0892 14.2013 24.2616 14.2757 24.4419 14.2757C24.4734 14.2757 24.5057 14.273 24.5381 14.2687C24.7507 14.2372 24.9336 14.1024 25.0299 13.9099L27.9541 8.01242C28.1151 7.68692 27.9821 7.29317 27.6566 7.13217L27.6584 7.1313ZM23.6404 21.5469C23.5677 21.4909 21.8519 20.125 21.8816 16.5069C21.9009 14.378 21.1991 12.4854 19.9076 11.1782C18.7491 10.0057 17.1811 9.35555 15.4924 9.34767H15.481C13.7922 9.35642 12.2242 10.0039 11.0657 11.1782C9.7751 12.4863 9.07335 14.3789 9.09085 16.5087C9.12235 20.125 7.40823 21.49 7.34085 21.5425C7.11335 21.7114 7.01973 22.0063 7.1081 22.2758C7.19735 22.5453 7.44935 22.7264 7.7311 22.7264H11.3011C11.3781 24.9752 13.22 26.7864 15.488 26.7864C17.756 26.7864 19.5987 24.9752 19.6749 22.7264H23.2466C23.5266 22.7264 23.7751 22.5462 23.8652 22.2802C23.9554 22.0142 23.8635 21.7175 23.6412 21.5469H23.6404ZM15.4871 24.9489C14.2324 24.9489 13.2121 23.9628 13.1386 22.7264H17.8356C17.7612 23.9628 16.7419 24.9489 15.4871 24.9489Z",fill:"white"}})])]):t._e(),t.isNotify?t._e():s("button",{staticClass:"notify"},[s("svg",{attrs:{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"17.5",cy:"17.5",r:"17",stroke:"#FF6600"}}),s("path",{attrs:{d:"M27.3351 9.85253H25.2132V7.72803C25.2132 7.36578 24.9192 7.07178 24.557 7.07178C24.1947 7.07178 23.9007 7.36578 23.9007 7.72803V9.85253H21.7788C21.4166 9.85253 21.1226 10.1457 21.1226 10.5088C21.1226 10.8719 21.4166 11.165 21.7788 11.165H23.9016V13.286C23.9016 13.6483 24.1956 13.9423 24.5578 13.9423C24.9201 13.9423 25.2141 13.6483 25.2141 13.286V11.165H27.336C27.6991 11.165 27.9922 10.8702 27.9922 10.5088C27.9922 10.1474 27.6982 9.85253 27.336 9.85253H27.3351ZM21.8838 16.5078C21.9013 14.378 21.1996 12.4854 19.9081 11.179C18.7496 10.0048 17.1816 9.35553 15.4928 9.34765H15.4815C13.7927 9.3564 12.2247 10.0039 11.0662 11.1782C9.77559 12.4863 9.07384 14.3789 9.09134 16.5087C9.12284 20.125 7.40872 21.49 7.34134 21.5425C7.11384 21.7114 7.02022 22.0063 7.10859 22.2758C7.19784 22.5453 7.44984 22.7264 7.73159 22.7264H11.8581C11.9543 24.6742 13.5556 26.2325 15.5278 26.2325C17.5001 26.2325 19.1005 24.675 19.1976 22.7264H23.2445C23.5245 22.7264 23.773 22.5462 23.8631 22.2802C23.9532 22.0142 23.8631 21.7175 23.64 21.5469C23.5682 21.4909 21.8523 20.125 21.883 16.5069L21.8838 16.5078ZM15.527 24.92C14.2792 24.92 13.2642 23.9488 13.1697 22.7255H17.8842C17.7897 23.9505 16.7747 24.9192 15.527 24.9192V24.92ZM9.14822 21.4139C9.76247 20.4558 10.4231 18.8729 10.403 16.4982C10.3881 14.6939 10.9402 13.1732 11.9998 12.1013C12.9125 11.1773 14.1506 10.6663 15.4876 10.661C16.8237 10.6672 18.0627 11.1773 18.9745 12.1013C20.0332 13.174 20.5845 14.6939 20.5696 16.4982C20.5503 18.8729 21.2101 20.4558 21.827 21.4139H9.14822V21.4139Z",fill:"#FF6600"}})])]),s("button",{staticClass:"follow",class:{active:t.isFollowed},on:{click:t.toggleFollow}},[t._v(" "+t._s(t.isFollowed?"正在跟隨":"跟隨")+" ")])],t.isSelf?s("button",{staticClass:"edit",on:{click:function(e){return t.$bus.$emit("profileEditModal",!0)}}},[t._v(" 編輯個人資料 ")]):t._e()],2),s("h3",{staticClass:"name"},[t._v(t._s(t.name))]),s("p",{staticClass:"account"},[t._v("@"+t._s(t.account))]),s("p",{staticClass:"description"},[t._v(" "+t._s(t._f("nullDescribe")(t.introduction))+" ")]),s("div",{staticClass:"follow d-flex"},[s("router-link",{attrs:{to:"/user/"+this.id+"/following"}},[s("p",[t._v(t._s(t.followingCount)+"個 "),s("span",[t._v("跟隨中")])])]),s("router-link",{attrs:{to:"/user/"+this.id+"/follower"}},[s("p",[t._v(t._s(t.followerCount)+"位 "),s("span",[t._v("跟隨者")])])])],1)]),s("ProfileEditModal")],1)},a=[],n=s("1da1"),i=s("5530"),o=(s("96cf"),s("b0c0"),s("1602")),c=s("604d"),l=s("2708"),u=s("2f62"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"modal",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.modal=!1}}},[s("transition",{attrs:{name:"slide"}},[s("form",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"modal-dialog",on:{submit:function(e){return e.preventDefault(),t.submitProfile.apply(null,arguments)},click:function(e){e.stopPropagation(),t.modal=!0}}},[s("div",{staticClass:"modal-header d-flex align-items-center justify-content-between"},[s("div",{staticClass:"d-flex align-items-center"},[s("button",{staticClass:"close d-flex justify-content-center align-items-center",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.modal=!1}}},[s("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M9.41387 7.99988L15.2069 2.20687C15.5969 1.81687 15.5969 1.18388 15.2069 0.792875C14.8169 0.401875 14.1839 0.402875 13.7929 0.792875L7.99988 6.58588L2.20687 0.792875C1.81687 0.402875 1.18388 0.402875 0.792875 0.792875C0.401875 1.18288 0.402875 1.81587 0.792875 2.20687L6.58588 7.99988L0.792875 13.7929C0.402875 14.1829 0.402875 14.8159 0.792875 15.2069C0.987875 15.4019 1.24287 15.4999 1.49987 15.4999C1.75687 15.4999 2.01187 15.4019 2.20687 15.2069L7.99988 9.41387L13.7929 15.2069C13.9879 15.4019 14.2429 15.4999 14.4999 15.4999C14.7569 15.4999 15.0119 15.4019 15.2069 15.2069C15.5969 14.8169 15.5969 14.1839 15.2069 13.7929L9.41387 7.99988Z",fill:"#FF6600"}})])]),s("h3",{staticClass:"title"},[t._v("編輯個人資料")])]),s("button",{staticClass:"save",attrs:{type:"submit",disabled:t.isProcessing},on:{mouseenter:t.saveHint}},[t._v(" 儲存 ")])]),s("hr"),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"user-cover"},[t.coverImg?t._e():s("p",{staticClass:"uploadHint"},[t._v("尚未上傳任何封面圖片")]),t.coverImg?s("img",{attrs:{src:t.coverImg,alt:"預設的使用者封面"}}):t._e(),s("div",{staticClass:"mask d-flex justify-content-center align-items-center"},[s("label",{staticClass:"camera d-flex justify-content-center align-items-center",attrs:{for:"upload-cover"}},[s("input",{staticClass:"d-none",attrs:{type:"file",id:"upload-cover",name:"cover",accept:"image/*"},on:{change:t.coverChange}}),s("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z",fill:"white"}}),s("path",{attrs:{d:"M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699V6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z",fill:"white"}})])]),s("button",{staticClass:"delete d-flex justify-content-center align-items-center",attrs:{type:"button"},on:{click:function(e){t.coverImg=""}}},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z",fill:"white"}})])])])]),s("div",{staticClass:"avatar"},[t.avatarImg?s("img",{attrs:{src:t.avatarImg,alt:"預設的使用者頭像"}}):t._e(),t.avatarImg?t._e():s("p",{staticClass:"uploadHint"},[t._v("尚未上傳頭像")]),s("div",{staticClass:"mask d-flex justify-content-center align-items-center",on:{mouseover:function(e){t.avatarHint=!0},mouseleave:function(e){t.avatarHint=!1}}},[s("label",{directives:[{name:"show",rawName:"v-show",value:!t.avatarImg,expression:"!avatarImg"}],staticClass:"camera d-flex justify-content-center align-items-center",attrs:{for:"upload-avatar"}},[s("input",{staticClass:"d-none",attrs:{type:"file",id:"upload-avatar",name:"avatar",accept:"image/*"},on:{change:t.avatarChange}}),s("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z",fill:"white"}}),s("path",{attrs:{d:"M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699V6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z",fill:"white"}})])]),t.avatarImg?s("button",{staticClass:"delete d-flex justify-content-center align-items-center",attrs:{type:"button"},on:{click:function(e){t.avatarImg=""}}},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z",fill:"white"}})])]):t._e(),s("transition",{attrs:{name:"hint"}},[t.avatarHint?s("span",{staticClass:"avatar-hint"},[t._v("頭像圖片建議解析度為 150 × 150 像素以上")]):t._e()])],1)]),s("div",{staticClass:"form-area"},[s("div",{staticClass:"form-row d-flex flex-column",class:{invalid:t.nameHint},attrs:{for:"name"}},[s("label",{attrs:{for:"name"}},[t._v("名稱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",name:"name",maxlength:"50"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.nameHint?s("p",{staticClass:"error-hint"},[t._v("字數超出上限！")]):t._e(),s("p",[t._v(t._s(t.nameCount)+"/50")])]),s("div",{staticClass:"form-row d-flex flex-column",class:{invalid:t.descriptionHint}},[s("label",{attrs:{for:"description"}},[t._v("自我介紹")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{id:"description",name:"introduction",maxlength:"160",autofocus:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),t.descriptionHint?s("p",{staticClass:"error-hint"},[t._v("字數超出上限！")]):t._e(),s("p",[t._v(t._s(t.descriptionCount)+"/160")])])])])])])],1)])},f=[],p=(s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("9861"),s("a4d3"),s("e01a"),s("d9e2"),{data:function(){return{modal:!1,id:-1,coverImg:"",avatarImg:"",name:"",nameHint:!1,description:"",descriptionHint:!1,avatarHint:!1,isProcessing:!1}},methods:{coverChange:function(t){var e=t.target.files;if(e){var s=window.URL.createObjectURL(e[0]);this.coverImg=s}},avatarChange:function(t){var e=t.target.files;if(e){var s=window.URL.createObjectURL(e[0]);this.avatarImg=s}},saveHint:function(){this.coverImg||this.$bus.$emit("toast",{icon:"success",title:"取消編輯，可回復原本封面圖片"}),this.avatarImg||this.$bus.$emit("toast",{icon:"success",title:"取消編輯，可回復原本頭像"}),this.name&&this.description||this.$bus.$emit("toast",{icon:"success",title:"取消編輯，可以回覆原本資料"})},fetchProfile:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,r,a,n,i,c,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].getCurrent();case 3:if(s=e.sent,r=s.data,"success"===r.status){e.next=8;break}throw t.$bus.$emit("toast",{icon:"error",title:"無法取得個人資料"}),new Error(r.message);case 8:a=r.data,n=a.id,i=a.cover,c=a.avatar,l=a.name,u=a.introduction,t.id=n,t.coverImg=i,t.avatarImg=c,t.name=l,t.description=u,e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](0),console.log(e.t0),t.$bus.$emit("toast",{icon:"error",title:"".concat(e.t0)});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))()},submitProfile:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var r,a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(s.prev=0,!e.coverImg&&e.$bus.$emit("toast",{title:"如果沒有封面圖片，我們會隨機產生酷酷的幾何封面喔！"}),!e.avatarImg&&e.$bus.$emit("toast",{title:"如果沒有設定頭像圖片，我們會隨機產生文青的插畫頭像呦～"}),!(e.name&&e.name.length>50)){s.next=7;break}return e.nameHint=!0,e.$bus.$emit("toast",{icon:"error",title:"名稱字數超出上限"}),s.abrupt("return");case 7:if(!(e.description&&e.description.length>160)){s.next=11;break}return e.descriptionHint=!0,e.$bus.$emit("toast",{icon:"error",title:"自我介紹字數超出上限"}),s.abrupt("return");case 11:return e.isProcessing=!0,r=new FormData(t.target),s.next=15,o["a"].editProfile({userId:e.id,formData:r});case 15:if(a=s.sent,n=a.data,"success"!==n.status){s.next=25;break}e.$bus.$emit("toast",{icon:"success",title:"已儲存成功！！"}),e.isProcessing=!1,e.$bus.$emit("submit-profile",!0),e.$router.push({path:"/profile"}),e.modal=!1,s.next=26;break;case 25:throw new Error(n.message);case 26:s.next=33;break;case 28:s.prev=28,s.t0=s["catch"](0),e.isProcessing=!1,console.log(s.t0),e.$bus.$emit("toast",{icon:"error",title:"".concat(s.t0)});case 33:case"end":return s.stop()}}),s,null,[[0,28]])})))()}},computed:{nameCount:function(){return this.name?(this.name.length>=160&&(this.descriptionHint=!0),this.name.length<=160&&(this.descriptionHint=!1),this.name.length):0},descriptionCount:function(){return this.description?(this.description.length>=160&&(this.descriptionHint=!0),this.description.length<=160&&(this.descriptionHint=!1),this.description.length):0}},created:function(){var t=this;this.fetchProfile(),this.$bus.$on("profileEditModal",(function(){t.modal=!0}))},beforeDestroy:function(){}}),m=p,d=(s("9a69"),s("2877")),v=Object(d["a"])(m,h,f,!1,null,"29290fcc",null),g=v.exports,C={components:{ProfileEditModal:g},data:function(){return{id:-1,name:"",tweetCount:0,account:"",introduction:"",followingCount:"",followerCount:"",cover:"",avatar:"",isNotify:!0,isFollowed:"",isSelf:""}},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),methods:{fetchAccount:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,r,a,n,i,c,l,u,h,f,p,m,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=-1,s=t.$route.params.id?t.$route.params.id:t.currentUser.id,e.next=5,o["a"].getProfile({userId:s});case 5:r=e.sent,a=r.data,n=a.name,i=a.tweetCount,c=a.account,l=a.introduction,u=a.followingCount,h=a.followerCount,f=a.cover,p=a.avatar,m=a.isFollowed,d=a.isSelf,t.id=s,t.name=n,t.account=c,t.tweetCount=i,t.introduction=l,t.followingCount=u,t.followerCount=h,t.cover=f,t.avatar=p,t.isFollowed=m,t.isSelf=d,e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))()},toggleFollow:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.isFollowed){e.next=9;break}return e.next=4,c["a"].addFollow(t.id);case 4:s=e.sent,r=s.data,"success"===r.status&&(t.isFollowed=!0,t.followerCount++,t.$bus.$emit("toast",{icon:"success",title:"追隨成功"})),e.next=14;break;case 9:return e.next=11,c["a"].deleteFollow(t.id);case 11:a=e.sent,n=a.data,"success"===n.status&&(t.isFollowed=!1,t.followerCount--,t.$bus.$emit("toast",{icon:"success",title:"取消追隨成功"}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()}},mixins:[l["b"],l["c"]],filters:{nullDescribe:function(t){return t||"趕快寫點什麼讓大家認識你吧！！"}},created:function(){var t=this;this.fetchAccount(),this.$bus.$on("submit-profile",(function(){t.fetchAccount()}))},watch:{"$route.path":function(){this.fetchAccount()},currentUser:function(){this.fetchAccount()}}},w=C,b=(s("026d"),Object(d["a"])(w,r,a,!1,null,"39ed3045",null));e["a"]=b.exports}}]);
//# sourceMappingURL=chunk-b44872d6.e7335021.js.map