(this["webpackJsonpquick-dollas"]=this["webpackJsonpquick-dollas"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"backend_url":"localhost:9000"}')},41:function(e,t,n){},46:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),r=n(20),i=n.n(r),o=(n(41),n(9)),j=(n(42),n(21)),l=n(30),d=n(22),h=n(7),u=n(16),b=n(15),O=n(13),p=n(10),x=n(19),g=n(6),f=n(17),m=n(27);var v=function(e){var t=e.userID,n=new Date,s=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0"),i=n.getFullYear();n=i+"-"+r+"-"+s;var j=Object(a.useState)([]),l=Object(o.a)(j,2),d=l[0],h=l[1],v=Object(a.useState)({amount:0,category:null,date:n,description:""}),y=Object(o.a)(v,2),N=y[0],S=y[1];Object(a.useEffect)((function(){console.log("id in fetch",t),fetch("http://".concat(m.backend_url,"/get-categories"),{method:"POST",body:JSON.stringify({user_id:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){return h(JSON.parse(e))})).catch((function(e){return e}))}),[t]);var T=function(e){S(Object(b.a)(Object(b.a)({},N),{},Object(u.a)({},e.target.name,e.target.value)))},C=d.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(c.jsx)(x.a,{className:"add-expense",children:Object(c.jsx)(O.a,{children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)("span",{className:"page-title",children:"Add Transaction"}),Object(c.jsxs)(g.a,{className:"mt-3 mx-4",children:[Object(c.jsxs)(g.a.Group,{className:"mt-4",children:[Object(c.jsx)(g.a.Label,{children:"Amount"}),Object(c.jsx)(g.a.Control,{type:"number",value:N.amount,name:"amount",onChange:T})]}),Object(c.jsxs)(g.a.Group,{className:"mt-4",children:[Object(c.jsx)(g.a.Label,{children:"Category"}),Object(c.jsx)(g.a.Control,{as:"select",value:N.category,name:"category",onChange:T,children:C})]}),Object(c.jsxs)(g.a.Group,{className:"mt-4",children:[Object(c.jsx)(g.a.Label,{children:"Date"}),Object(c.jsx)(g.a.Control,{type:"text",value:N.date,name:"date",onChange:T,placeholder:"YEAR-MONTH-DAY"})]}),Object(c.jsxs)(g.a.Group,{className:"mt-4",children:[Object(c.jsx)(g.a.Label,{children:"Description"}),Object(c.jsx)(g.a.Control,{type:"text",value:N.description,name:"description",onChange:T,placeholder:"desc"})]})]}),Object(c.jsx)(f.a,{onClick:function(){console.log("amount:",N.amount,"-- category:",N.category,"-- description:",N.description),fetch("http://".concat(m.backend_url,"/add-transaction"),{method:"PUT",body:JSON.stringify({trans_info:N,user_id:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return e}))},children:"Add"})]})})})},y=n(23),N=n(27);var S=function(e){var t=e.userID,n=function(){console.log("id in fetch",t),fetch("http://".concat(N.backend_url,"/get-categories"),{method:"POST",body:JSON.stringify({user_id:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){return j(JSON.parse(e))})).catch((function(e){return e}))},s=Object(a.useState)([]),r=Object(o.a)(s,2),i=r[0],j=r[1],l=Object(a.useState)({name:"",is_expense:!0,user_id:t}),d=Object(o.a)(l,2),h=d[0],m=d[1],v=Object(a.useState)(!1),S=Object(o.a)(v,2),T=S[0],C=S[1];Object(a.useEffect)((function(){n()}),[t]);var _=function(e){console.log(e.target.name,e.target.value),m(Object(b.a)(Object(b.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))},A=function(e){var t;t=e.target.id,fetch("http://".concat(N.backend_url,"/delete-category"),{method:"DELETE",body:JSON.stringify({id:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return e})),C(!0),setTimeout((function(){n(),console.log("not loading"),C(!1)}),1e3)},E=i.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.is_expense?"Expense":"Income"}),Object(c.jsx)("td",{children:Object(c.jsx)(f.a,{onClick:A,id:e.id,children:"DELETE"})})]},e.id)})),D=Object(c.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Category"}),Object(c.jsx)("th",{children:"Type"}),Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:E})]}),k=Object(c.jsxs)("div",{className:"mt-3",children:[Object(c.jsxs)(g.a,{children:[Object(c.jsxs)(g.a.Group,{children:[Object(c.jsx)(g.a.Label,{children:"Name"}),Object(c.jsx)(g.a.Control,{type:"text",value:h.name,name:"name",onChange:_,placeholder:"Name of category"})]}),Object(c.jsxs)(g.a.Group,{children:[Object(c.jsx)(g.a.Label,{children:"Type"}),Object(c.jsxs)(g.a.Control,{as:"select",value:h.is_expense,name:"is_expense",onChange:_,children:[Object(c.jsx)("option",{value:!0,children:"Expense"}),Object(c.jsx)("option",{value:!1,children:"Income"})]})]})]}),Object(c.jsx)(f.a,{onClick:function(){fetch("http://".concat(N.backend_url,"/add-category"),{method:"PUT",body:JSON.stringify(h),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return e})),C(!0),setTimeout((function(){n(),C(!1)}),1e3)},children:"Add"})]});return Object(c.jsxs)(x.a,{className:"categories",children:[Object(c.jsx)(O.a,{children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)("div",{className:"page-title",children:"Categories"}),Object(c.jsxs)("div",{className:"mt-3",children:[T?Object(c.jsx)("div",{children:"Loading..."}):null,D]})]})}),Object(c.jsx)(O.a,{children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)("div",{className:"page-title mt-5",children:"Add Category"}),k]})})]})},T=n(27),C=[31,28,31,30,31,30,31,31,30,31,30,31];var _=function(e){var t=e.userID,n=function(){fetch("http://".concat(T.backend_url,"/get-transactions"),{method:"POST",body:JSON.stringify({start:_.start,end:_.end,user_id:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){return l(JSON.parse(e))})).catch((function(e){return e}))},s=function(){fetch("http://".concat(T.backend_url,"/get-categories"),{method:"POST",body:JSON.stringify({user_id:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){return v(JSON.parse(e))})).catch((function(e){return e}))},r=Object(a.useState)([]),i=Object(o.a)(r,2),j=i[0],l=i[1],d=Object(a.useState)([]),h=Object(o.a)(d,2),m=h[0],v=h[1],N=Object(a.useState)(function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),c=e.getFullYear();return e=c+"-"+n+"-"+t,parseInt(t)<=15?{start:c+"-"+n+"-01",end:c+"-"+n+"-15"}:{start:c+"-"+n+"-15",end:c+"-"+n+"-"+String(C[parseInt(n)-1])}}()),S=Object(o.a)(N,2),_=S[0],A=S[1],E=Object(a.useState)(!1),D=Object(o.a)(E,2),k=D[0],L=D[1];Object(a.useEffect)((function(){n(),s()}),[t]);var I=function(e){A(Object(b.a)(Object(b.a)({},_),{},Object(u.a)({},e.target.name,e.target.value)))},J=function(e){var t;t=e.target.id,fetch("http://".concat(T.backend_url,"/delete-transaction"),{method:"DELETE",body:JSON.stringify({id:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return e})),L(!0),setTimeout((function(){s(),n(),L(!1)}),1e3)},G=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(g.a,{children:[Object(c.jsxs)(g.a.Group,{children:[Object(c.jsx)(g.a.Label,{children:"Start"}),Object(c.jsx)(g.a.Control,{type:"text",value:_.start,name:"start",onChange:I,placeholder:"YEAR-MONTH-DAY"})]}),Object(c.jsxs)(g.a.Group,{children:[Object(c.jsx)(g.a.Label,{children:"End"}),Object(c.jsx)(g.a.Control,{type:"text",value:_.end,name:"end",onChange:I,placeholder:"YEAR-MONTH-DAY"})]})]}),Object(c.jsx)(f.a,{onClick:function(){n(),s()},children:"Submit"})]}),P=j.map((function(e){var t=m.find((function(t){return t.id===e.category_id}))||{is_expense:!0};return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.description}),Object(c.jsx)("td",{children:"$"+e.amount}),Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:e.date&&e.date.substring(0,10)}),Object(c.jsx)("td",{className:t.is_expense?"":"green",children:t.is_expense?"Expense":"Income"}),Object(c.jsx)("td",{children:Object(c.jsx)(f.a,{onClick:J,id:e.id,children:"DELETE"})})]},e.id)})),Y=Object(c.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Description"}),Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Category"}),Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{children:"Type"}),Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:P})]});return Object(c.jsxs)(x.a,{className:"edit-categories",children:[Object(c.jsx)(O.a,{children:Object(c.jsx)(p.a,{className:"page-title",children:"Transactions"})}),Object(c.jsx)(O.a,{className:"mt-5",children:Object(c.jsxs)(p.a,{children:[k?Object(c.jsx)("div",{children:"*LOADING*"}):null,G]})}),Object(c.jsx)(O.a,{className:"mt-5",children:Object(c.jsx)(p.a,{children:Y})}),Object(c.jsx)(O.a,{className:"mt-5",children:Object(c.jsx)(p.a,{children:function(){var e=0;return j.forEach((function(t){(m.find((function(e){return e.id===t.category_id}))||{is_expense:!0}).is_expense?e+=t.amount:e-=t.amount})),Object(c.jsxs)("div",{children:["You spent $",e," between ",_.start," and ",_.end]})}()})})]})};n(46);var A=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(),i=Object(o.a)(r,2),u=i[0],b=i[1],O=Object(a.useState)(),p=Object(o.a)(O,2),x=p[0],g=p[1];return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"app h-100",children:[Object(c.jsxs)(j.a,{className:"bg-purp",children:[Object(c.jsx)(j.a.Brand,{children:"Quick Dollas"}),Object(c.jsx)(j.a.Text,{className:"ml-2",children:Object(c.jsx)(d.b,{to:"/",children:"Add Transaction"})}),Object(c.jsx)(j.a.Text,{className:"ml-2",children:Object(c.jsx)(d.b,{to:"/categories",children:"Categories"})}),Object(c.jsx)(j.a.Text,{className:"ml-2",children:Object(c.jsx)(d.b,{to:"/expenses",children:"Transactions"})}),Object(c.jsx)("div",{className:"google-stuff",children:n?Object(c.jsx)(l.GoogleLogout,{clientId:"180544136485-bildtjala9v81f48f6uq90epp6l7dhnt.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(e){s(!1)}}):Object(c.jsx)(l.GoogleLogin,{className:"mr-2",clientId:"180544136485-bildtjala9v81f48f6uq90epp6l7dhnt.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:function(e){console.log("in function"),console.log("user",e);var t=e.getBasicProfile();console.log("res ",e.getAuthResponse()),console.log("token",e.getAuthResponse().id_token),s(!0),b(t.getId()),g(t.getName())},onFailure:function(e){return console.log("error with google stuff",e)},cookiePolicy:"single_host_origin",isSignedIn:!0})})]}),Object(c.jsx)("div",{children:x?null:"Please sign in to use the app"}),n?Object(c.jsx)("div",{className:"mt-4",children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/categories",children:Object(c.jsx)("div",{children:Object(c.jsx)(S,{userID:u})})}),Object(c.jsx)(h.a,{path:"/expenses",children:Object(c.jsx)("div",{children:Object(c.jsx)(_,{userID:u})})}),Object(c.jsx)(h.a,{path:"/",children:Object(c.jsx)(v,{userID:u})})]})}):null]})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.ac5010e9.chunk.js.map