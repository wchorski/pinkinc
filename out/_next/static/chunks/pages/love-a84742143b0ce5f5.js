(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{3400:function(a,b,c){"use strict";c.d(b,{w:function(){return k}}),c(7294);var d=c(3299),e=c(1664),f=c.n(e),g=c(3750),h=c(9521),i=h.ZP.div.withConfig({displayName:"Navbarstyled__StyledNavBar",componentId:"sc-b4958r-0"})(["width:100%;position:sticky;top:0rem;margin-bottom:1rem;z-index:500;.nav-bg-main{background-color:var(--color-base);max-width:var(--width-cont);margin:0 auto;display:flex;flex-direction:column;justify-content:flex-start;}.nav-bg-sub{display:flex;flex-direction:column;align-items:center;}nav.main{display:flex;align-items:center;a:hover{opacity:.6;}.App-logo{padding:.4rem;width:70px;&:hover{opacity:.6;}}ul{list-style-type:none;display:flex;margin:0;padding:0;li{display:flex;justify-content:center;align-items:center;a{font-size:1rem;text-align:center;padding:1rem .8rem;display:inline-block;color:white;}}li:hover{background-color:var(--color-highlight);a{color:black;}}}}nav.sub{margin-left:auto;display:flex;top:3.4rem;> *{margin-right:1rem;}a{color:white;}button{margin:0;padding:0;}ul{list-style-type:none;display:flex;justify-content:flex-end;padding:0;margin:0;}.btnSearch{padding:.3rem;}.userCred{background-color:var(--color-highlight);border-radius:40px;padding:0 .7rem;margin-left:1rem;display:flex;align-items:center;span{font-size:15px;color:grey;margin-right:1rem;}}}"]),j=c(5893),k=function(){var a,b,c,e=(0,d.useSession)(),h=e.data,k=e.status;return(0,j.jsxs)(i,{children:[(0,j.jsx)("div",{className:"nav-bg-main",children:(0,j.jsx)("nav",{className:"main",children:(0,j.jsxs)("ul",{children:[(0,j.jsxs)("li",{children:[" ",(0,j.jsx)(f(),{href:"/",children:" Home "})," "]},1),(0,j.jsxs)("li",{children:[" ",(0,j.jsx)(f(),{href:"/love",children:" Love "})," "]},2),(0,j.jsxs)("li",{children:[" ",(0,j.jsx)(f(),{href:"/register",children:" register "})," "]},3)]})})}),(0,j.jsx)("div",{className:"nav-bg-sub",children:(0,j.jsxs)("nav",{className:"sub",children:[h&&"authenticated"===k&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g.dTH,{style:{color:null===(a=h.user)|| void 0===a?void 0:a.color,fontSize:"30px"}}),(0,j.jsx)(f(),{href:"/users/".concat(null===(b=h.user)|| void 0===b?void 0:b.email),children:null===(c=h.user)|| void 0===c?void 0:c.name}),(0,j.jsx)(f(),{href:"/api/auth/signout",children:(0,j.jsx)("a",{onClick:function(a){a.preventDefault(),(0,d.signOut)()},className:"btn",children:"Sign Out"})})]}),!h&&"unauthenticated"===k&&(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(f(),{href:"/api/auth/signin",children:(0,j.jsx)("a",{onClick:function(a){a.preventDefault(),(0,d.signIn)()},className:"btn",children:"Sign In"})})})]})})]})}},2282:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return q},default:function(){return r}});var d=c(29),e=c(7794),f=c.n(e),g=c(7294),h=c(3299),i=c(9352),j=c(8193),k=c(5893),l=function(a){return(0,k.jsx)("span",{className:"ico",children:(0,k.jsx)(j.lo,{style:{color:"".concat(a.color)}})})},m=c(3400),n=c(6775),o=c(5376);n.kL.register(n.qi,n.u,n.De);var p=function(a){var b=a.importData,c=(0,g.useState)(),d=c[0],e=c[1],f=function(a){e({labels:a.map(function(a){return a.name}),datasets:[{label:"Heart count",data:a.map(function(a){return a.heartCount}),backgroundColor:a.map(function(a){return a.color}),borderColor:"black",borderWidth:1}]})};return(0,g.useEffect)(function(){console.log(b),f(b)},[b]),(0,k.jsx)(k.Fragment,{children:d&&(0,k.jsx)("div",{children:(0,k.jsx)("div",{className:"chart-cont",style:{maxWidth:"40em"},children:(0,k.jsx)(o.by,{data:d,options:{cutout:"10%"}})})})})},q=!0;function r(a){var b,c,e=a.hearts,j=(0,h.useSession)(),n=j.data,o=j.status,q=(0,g.useState)([]);q[0],q[1];var r,s,t=(0,g.useState)([]),u=t[0],v=t[1],w=(0,g.useState)(0),x=w[0],y=w[1],z=(0,g.useState)(0),A=z[0],B=z[1],C=function(a,b){var c=a.filter(function(a){return a.id===b})[0];return c&&B(c.heartCount),c},D=(r=(0,d.Z)(f().mark(function a(b){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}},a)})),s=(0,d.Z)(f().mark(function a(b){var c,d;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B(function(a){return++a}),a.next=3,fetch("/api/users/".concat(null==n?void 0:n.user.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({heartCount:A,_id:n.user.id})});case 3:return c=a.sent,a.next=6,c.json();case 6:d=a.sent;case 7:case"end":return a.stop()}},a)})),function(a){return s.apply(this,arguments)}),E=function(){u.map(function(a){y(function(b){return b+a.heartCount})})};return(0,g.useEffect)(function(){var a=JSON.parse(e);return v(a),function(){console.log("return")}},[e,n]),(0,g.useEffect)(function(){return E(),function(){console.log("return")}},[u,e]),(0,g.useEffect)(function(){return n&&(B(n.user.heartCount),C(u,n.user.id)),function(){console.log("return")}},[n,u]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.w,{}),(0,k.jsxs)("div",{className:"haiku",children:[(0,k.jsx)("p",{children:"Friends forever in time"}),(0,k.jsx)("p",{children:"Bonded by our hearts and souls"}),(0,k.jsx)("p",{children:"Love forever lasting!"}),(0,k.jsx)("a",{href:"https://www.familyfriendpoems.com/collection/love-haiku-poems/",children:"- Sandy Maloof "})]}),"authenticated"===o&&u&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("h2",{children:[(0,k.jsx)(l,{color:null===(b=n.user)|| void 0===b?void 0:b.color})," ",A]}),(0,k.jsx)("div",{className:"scoreboard",children:u.map(function(a){return(0,k.jsxs)("div",{className:"user",style:{borderBottom:"solid 5px ".concat(a.color)},children:[(0,k.jsx)("h3",{style:{color:a.color},children:a.name})," ",(0,k.jsx)("span",{children:a.heartCount})]},a._id)})}),(0,k.jsxs)("div",{className:"heart-cont",children:[(0,k.jsx)(p,{importData:u}),(0,k.jsx)("button",{onClick:function(a){var b;return D(null===(b=n.user)|| void 0===b?void 0:b.color)},className:"btn-heart","aria-label":"Add 1 Heart",style:{backgroundColor:null===(c=n.user)|| void 0===c?void 0:c.color},children:(0,k.jsx)(i.WZk,{})})]}),(0,k.jsxs)("h2",{children:[x," total hearts "]})]}),"loading"===o&&(0,k.jsx)("h3",{children:"Loading..."}),"unauthenticated"===o&&(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("h2",{children:" *Must be logged in to add Love* "})})]})}},9679:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/love",function(){return c(2282)}])}},function(a){a.O(0,[13,757,937,617,664,353,389,774,888,179],function(){var b;return a(a.s=9679)}),_N_E=a.O()}])