(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a(0),r=a(7),c=a(1);function o(){var e=Object(n.useContext)(r.a),t=e.state,a=e.dispatch;return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({type:"LOGOUT"})},children:["Logged in as: ",Object(c.jsx)("b",{children:t.user.username}),Object(c.jsx)("input",{type:"submit",value:"Logout"})]})}},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),s=(a(94),a(4)),i=a(11),d=a(7),l=a(139),j=a(137),u=a(83),b=a(1);function O(e){var t=e.handleClose,a=e.show,r=Object(n.useContext)(d.a).dispatch,c=Object(n.useState)(""),o=Object(s.a)(c,2),O=o[0],h=o[1],x=Object(n.useState)(!1),p=Object(s.a)(x,2),m=p[0],g=p[1],f=Object(n.useState)(""),v=Object(s.a)(f,2),C=v[0],y=v[1];var w=Object(i.b)((function(e,t){return{url:"/auth/login",method:"post",data:{username:e,password:t}}})),k=Object(s.a)(w,2),T=k[0],L=k[1];return Object(n.useEffect)((function(){T&&!1===T.isLoading&&(T.data||T.error)&&(T.error?(g(!0),alert("failed")):(g(!1),console.log("Just logged in: "+T.data._id),r({type:"LOGIN",id:T.data._id,username:O,access_token:T.data.access_token})))}),[T]),Object(b.jsx)(l.a,{show:a,onHide:t,children:Object(b.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),L(O,C),t()},children:[Object(b.jsx)(l.a.Header,{closeButton:!0,children:Object(b.jsx)(l.a.Title,{children:"Login"})}),Object(b.jsxs)(l.a.Body,{children:[Object(b.jsx)(j.a.Label,{htmlFor:"login-username",children:"Username:"}),Object(b.jsx)(j.a.Control,{type:"text",value:O,onChange:function(e){h(e.target.value)},name:"login-username",id:"login-username"}),Object(b.jsx)(j.a.Label,{htmlFor:"login-password",children:"Password:"}),Object(b.jsx)(j.a.Control,{type:"password",value:C,onChange:function(e){y(e.target.value)},name:"login-password",id:"login-password"}),m&&Object(b.jsx)(j.a.Text,{style:{color:"red"},children:"Invalid username or password"})]}),Object(b.jsxs)(l.a.Footer,{children:[Object(b.jsx)(u.a,{variant:"secondary",onClick:t,children:"Cancel"}),Object(b.jsx)(u.a,{variant:"primary",disabled:0===O.length,type:"submit",children:"Login"})]})]})})}a(116);var h=a(2);function x(e){var t=e.show,a=e.handleClose,r=Object(n.useContext)(d.a).dispatch,c=Object(n.useState)(""),o=Object(s.a)(c,2),O=(o[0],o[1]),x=Object(n.useState)({username:"",password:"",passwordRepeat:""}),p=Object(s.a)(x,2),m=p[0],g=p[1],f=Object(i.b)((function(e,t){return{url:"/auth/register",method:"post",data:{username:e,password:t,passwordRepeat:t}}})),v=Object(s.a)(f,2),C=v[0],y=v[1];return Object(n.useEffect)((function(){C&&C.data&&r({type:"REGISTER",username:C.data.username})}),[C]),Object(n.useEffect)((function(){C&&!1===C.isLoading&&(C.data||C.error)&&(C.error?(console.log(C),O("Registration failed, please try again later."),alert("fail")):(console.log(C),O("Registration successful. You may now login"),alert("success")))}),[C]),Object(b.jsx)(l.a,{show:t,onHide:a,children:Object(b.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),y(m.username,m.password),a()},children:[Object(b.jsx)(l.a.Header,{closeButton:!0,children:Object(b.jsx)(l.a.Title,{children:"Register"})}),Object(b.jsxs)(l.a.Body,{children:[Object(b.jsx)(j.a.Label,{htmlFor:"register-username",children:"Username:"}),Object(b.jsx)(j.a.Control,{type:"text",value:m.username,onChange:function(e){return g(Object(h.a)(Object(h.a)({},m),{},{username:e.target.value}))},name:"register-username",id:"register-username"}),Object(b.jsx)(j.a.Label,{htmlFor:"register-password",children:"Password:"}),Object(b.jsx)(j.a.Control,{type:"password",name:"register-password",id:"register-password",value:m.password,onChange:function(e){return g(Object(h.a)(Object(h.a)({},m),{},{password:e.target.value}))}}),Object(b.jsx)(j.a.Label,{htmlFor:"register-password-repeat",children:"Repeat password:"}),Object(b.jsx)(j.a.Control,{type:"password",name:"register-password-repeat",id:"register-password-repeat",value:m.passwordRepeat,onChange:function(e){return g(Object(h.a)(Object(h.a)({},m),{},{passwordRepeat:e.target.value}))}})]}),Object(b.jsxs)(l.a.Footer,{children:[Object(b.jsx)(u.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(b.jsx)(u.a,{variant:"primary",type:"submit",disabled:0===m.username.length||0===m.password.length||m.password!==m.passwordRepeat,children:"Register"})]})]})})}function p(){var e=Object(n.useContext)(d.a).state,t=Object(n.useState)(!1),c=Object(s.a)(t,2),o=c[0],i=c[1],l=Object(n.useState)(!1),j=Object(s.a)(l,2),h=j[0],p=j[1],m=r.a.lazy((function(){return Promise.resolve().then(a.bind(null,116))}));return e.user.username?Object(b.jsx)(m,{}):Object(b.jsxs)("div",{className:"justify-content-end",children:[Object(b.jsx)(u.a,{variant:"link",onClick:function(e){return i(!0)},children:"Login"}),Object(b.jsx)(O,{show:o,handleClose:function(){return i(!1)}}),Object(b.jsx)(u.a,{variant:"link",onClick:function(e){return p(!0)},children:"Register"}),Object(b.jsx)(x,{show:h,handleClose:function(){return p(!1)}}),Object(b.jsx)(x,{})]})}var m=a(35),g=a.n(m),f=a(72),v=a(12),C=a(130),y=a(131),w=a(82),k=a(141),T=a(132),L=a(133),S=a(134),E=a(84),_=a.n(E);function A(e){var t,a=e.name,r=e.description,c=e.dateCreated,o=e.completed,l=e.dateCompleted,j=e.id,O=e.author,h=e.short,x=void 0!==h&&h,p=e.long,m=void 0!==p&&p,E=e.td,A=void 0!==E&&E,D=Object(n.useContext)(d.b),F=D.primaryColor,R=D.secondaryColor,B=D.padding,H=D.border,z=D.margin,P=D.textAlign,I=D.color,N=D.boxShadow,U=D.backgroundColor,G=Object(n.useContext)(d.a),M=G.state,J=G.dispatch,Y=r,V=Object(v.d)(),W="";x&&r.length>30&&(Y=r.substring(0,30)+"...");var X=Object(i.b)((function(){return{url:"users/getname/"+O,method:"get"}})),q=Object(s.a)(X,2),K=q[0],Q=q[1];Object(n.useEffect)((function(){Q()}),[O]),K.data&&(W=K.data.username),t=M.user.id;var Z=Object(i.b)((function(e){var a=e.name,n=e.dateCreated,r=e.description,c=e.completed,o=e.dateCompleted,s=e.id;return{url:"/todo/delete/"+s,method:"delete",headers:{Authorization:M.user.access_token},data:{author:t,name:a,dateCreated:n,description:r,completed:c,dateCompleted:o,id:s}}})),$=Object(s.a)(Z,2),ee=($[0],$[1]),te=Object(i.b)((function(e){var a=e.c,n=e.cur;return{url:"/todo/toggle/"+j+"/"+a,method:"put",headers:{Authorization:M.user.access_token},data:{author:t,completed:a,dateCompleted:n}}})),ae=Object(s.a)(te,2),ne=(ae[0],ae[1]);function re(){return(re=Object(f.a)(g.a.mark((function e(n){var o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Is it getting here: "+n),console.log(t+" : "+O),t===O&&(console.log("actual:"+n),o=new Date,s=o.getFullYear()+"-"+o.getMonth()+"-"+o.getDate()+" at "+o.toLocaleTimeString(),ne({name:a,description:r,dateCreated:c,c:n,cur:s,id:j}),J({type:"COMPLETE_TODO",name:a,description:r,dateCreated:c,completed:!n,cur:s,id:j}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==O){e.next=7;break}return console.log("remove button hit. Attempting to remove todo #"+j),e.next=4,ee({name:a,dateCreated:c,description:r,completed:o,dateCompleted:l,id:j});case 4:return e.next=6,J({type:"DELETE_TODO",id:j});case 6:A&&V.navigate("/");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V.navigate("/todo/"+j);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)(C.a,{style:{textAlign:P},children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)(w.a,{}),Object(b.jsx)(w.a,{children:Object(b.jsx)(k.a,{style:{background:F,color:I,padding:B,border:H,margin:z,boxShadow:N,width:"inherit"},children:Object(b.jsxs)(k.a.Body,{children:[Object(b.jsx)(k.a.Title,{children:Object(b.jsx)(v.a,{href:"/todo/"+j,children:Object(b.jsx)("h2",{style:{color:R,textAlign:P},children:a})})}),Object(b.jsxs)("h3",{children:["Author: ",W," "]}),Object(b.jsxs)(k.a.Text,{children:[Object(b.jsxs)("div",{style:{background:R,border:H,margin:z,width:"66vh",height:"inherit"},children:[Object(b.jsxs)(y.a,{children:[Object(b.jsx)(w.a,{children:Object(b.jsx)(T.a,{style:{fontSize:"7vh",color:U,paddingRight:"1vh"}})}),Object(b.jsx)(w.a,{xs:6,xm:6,xl:6,children:Y}),Object(b.jsx)(w.a,{})]}),o?Object(b.jsxs)(y.a,{children:[Object(b.jsx)(w.a,{children:Object(b.jsx)(L.a,{style:{fontSize:"7vh",color:U,paddingRight:"1vh"}})}),Object(b.jsx)(w.a,{xs:6,xm:6,xl:6,children:Object(b.jsxs)(y.a,{children:[Object(b.jsxs)(w.a,{xs:6,xm:6,xl:6,children:["Created on: ",c.substring(0,18)+c.substring(21)]}),Object(b.jsxs)(w.a,{xs:6,xm:6,xl:6,children:["Completed on: ",l.substring(0,18)+c.substring(21)]})]})}),Object(b.jsx)(w.a,{})]}):Object(b.jsxs)(y.a,{children:[Object(b.jsx)(w.a,{children:Object(b.jsx)(S.a,{style:{fontSize:"7vh",color:U,paddingRight:"1vh"}})}),Object(b.jsxs)(w.a,{style:{textAlign:"left"},xs:9,xm:9,xl:9,children:["Created on: ",c.substring(0,18)+c.substring(21)]})]})]}),x&&Object(b.jsx)("div",{style:{paddingBottom:"1vh"},children:Object(b.jsx)(u.a,{onClick:function(){return oe.apply(this,arguments)},children:"View full todo"})}),t===O&&Object(b.jsx)("form",{style:{paddingBottom:"1vh"},onSubmit:function(e){e.preventDefault(),function(){ce.apply(this,arguments)}()},children:Object(b.jsx)(u.a,{width:120,type:"button onClick={handleRemove()}",children:"Delete Todo"})}),t===O&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{children:"Complete?"}),Object(b.jsx)(_.a,{height:25,width:"inherit",onstyle:"success",offstyle:"danger",onlabel:"Done",offlabel:"X",checked:o,value:o,onChange:function(e){!function(e){re.apply(this,arguments)}(e)}})]})]})]})})}),Object(b.jsx)(w.a,{})]})})}var D=r.a.memo(A);function F(){var e=Object(n.useContext)(d.b),t=e.primaryColor,a=e.secondaryColor,r=Object(n.useContext)(d.b).textAlign,c=Object(n.useContext)(d.a).state,o=c.todos,s=c.user;return Object(b.jsxs)("div",{style:{paddingTop:"10vh",textAlign:r,minHeight:"100vh"},children:[void 0!==s.username&&Object(b.jsx)("h1",{style:{color:t},children:"Todo List"}),void 0===s.username&&Object(b.jsx)("h2",{style:{color:a,paddingTop:"30vh",height:"100vh"},children:"Sign in to see your todos."}),0===o.length&&void 0!==s.username&&Object(b.jsx)("h2",{style:{paddingTop:"30vh",height:"100vh"},children:"No todos found for current user."}),o.length>0&&void 0!==s.username&&Object(b.jsx)("div",{children:o.map((function(e,t){return Object(n.createElement)(D,Object(h.a)(Object(h.a)({short:!0,id:e._id},e),{},{key:"Todo-"+t}))}))})]})}function R(e){var t=e.handelClose,a=e.show,r=Object(n.useContext)(d.b),c=(r.primaryColor,r.secondaryColor,r.padding,r.border,r.margin,r.textAlign,r.color,r.boxShadow,Object(n.useContext)(d.a)),o=c.state,O=c.dispatch,h=new Date,x=h.getFullYear()+"-"+h.getMonth()+"-"+h.getDate()+" at "+h.toLocaleTimeString(),p=Object(n.useState)(""),m=Object(s.a)(p,2),g=m[0],f=m[1],v=Object(n.useState)(x),C=Object(s.a)(v,1)[0],y=Object(n.useState)(""),w=Object(s.a)(y,2),k=w[0],T=w[1],L=Object(n.useState)(!1),S=Object(s.a)(L,1)[0],E=Object(n.useState)("Not Complete"),_=Object(s.a)(E,1)[0],A=o.user;var D=Object(n.useState)(!1),F=Object(s.a)(D,2),R=F[0],B=F[1];console.log("user: "+A.id);var H=Object(i.b)((function(e){var t=e.name,a=e.dateCreated,n=e.description,r=e.completed,c=e.dateCompleted,s=e.author;return{url:"/todo/",method:"post",headers:{Authorization:o.user.access_token},data:{name:t,dateCreated:a,description:n,completed:r,dateCompleted:c,author:s}}})),z=Object(s.a)(H,2),P=z[0],I=z[1];return Object(n.useEffect)((function(){P&&!1===P.isLoading&&(P.data||P.error)&&(P.error?(B(!0),alert("failed")):(console.log(P.data),O({type:"CREATE_TODO",name:P.data.name,dateCreated:P.data.dateCreated,description:P.data.description,completed:P.data.complete,dateCompleted:P.data.dateCompleted})))}),[P]),Object(b.jsx)(l.a,{show:a,onHide:t,children:Object(b.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),console.log("user: "+A.id),I({name:g,dateCreated:C,description:k,completed:S,dateCompleted:_,author:A.id}),t()},children:[Object(b.jsx)(l.a.Header,{closeButton:!0,children:Object(b.jsx)(l.a.Title,{children:"Create Todo"})}),Object(b.jsxs)(l.a.Body,{children:[Object(b.jsx)(j.a.Label,{htmlFor:"create-title",children:"Title:"}),Object(b.jsx)(j.a.Control,{type:"text",value:g,onChange:function(e){f(e.target.value)},name:"create-title",id:"create-title"}),Object(b.jsx)(j.a.Label,{htmlFor:"login-password",children:"Description:"}),Object(b.jsx)(j.a.Control,{type:"text",value:k,onChange:function(e){T(e.target.value)},name:"create-title",id:"create-title"}),R&&Object(b.jsx)(j.a.Text,{style:{color:"red"},children:"Please enter a title or description."})]}),Object(b.jsxs)(l.a.Footer,{children:[Object(b.jsx)(u.a,{variant:"secondary",onClick:t,children:"Cancel"}),Object(b.jsx)(u.a,{variant:"primary",type:"submit",disabled:0===g.length||0===k.length,children:"Submit"})]})]})})}function B(){var e=Object(n.useContext)(d.a),t=e.state,a=e.dispatch,r=Object(i.b)((function(){return{url:"/todo/",method:"get",headers:{Authorization:t.user.access_token}}})),c=Object(s.a)(r,2),o=c[0],l=c[1],j=(o.data,o.isLoading);return Object(n.useEffect)((function(){t.user.access_token&&l()}),[]),Object(n.useEffect)((function(){l()}),[t.user.access_token]),Object(n.useEffect)((function(){o&&!1===o.isLoading&&o.data&&a({type:"FETCH_TODOS",todos:o.data.todos.reverse()})}),[o]),Object(b.jsxs)(b.Fragment,{children:[j&&"Todos loading..."," ",Object(b.jsx)(F,{})]})}var H=a(33);function z(e,t){switch(t.type){case"LOGIN":case"REGISTER":return{username:t.username,access_token:t.access_token,id:t.id};case"LOGOUT":return{id:void 0,username:void 0,access_token:void 0};default:return e}}function P(e,t){e.slice();switch(t.type){case"CREATE_TODO":return[{_id:t.id,name:t.name,description:t.description,dateCreated:t.dateCreated,dateCompleted:t.dateCompleted,completed:t.completed}].concat(Object(H.a)(e));case"DELETE_TODO":console.log("deleting item: "+t.id);var a=e.filter((function(e){return e._id!==t.id}));return Object(H.a)(a);case"COMPLETE_TODO":return console.log("Complete js on "+t.id),e.map((function(e){return e._id===t.id&&(e.completed=!t.completed,e.dateCompleted=t.cur),console.log(e),e}));case"FETCH_TODOS":return t.todos;default:return e}}function I(e,t){return{user:z(e.user,t),todos:P(e.todos,t)}}var N=function(e){var t=e.text,a=Object(n.useContext)(d.b);return Object(b.jsx)(v.a,{style:{textDecoration:"none"},href:"/",children:Object(b.jsx)("h1",{style:{color:a.primaryColor},children:t})})},U=a(136);function G(e){var t=e.theme,a=e.active,n=e.onClick;return Object(b.jsx)("span",{onClick:n,style:{cursor:"pointer",paddingLeft:8,fontWeight:a?"bold":"normal"},children:Object(b.jsx)("span",{style:{color:t.primaryColor},children:t.name})})}function M(e){var t=e.theme,a=e.setTheme,r=Object(i.b)((function(){return{url:"/themes/",method:"get"}})),c=Object(s.a)(r,2),o=c[0],d=c[1];Object(n.useEffect)(d,[]);var l={},j=l.data,u=l.isLoading;function O(e){return e.primaryColor===t.primaryColor&&e.secondaryColor===t.secondaryColor}return o.data&&(j=o.data.themes),Object(b.jsxs)(b.Fragment,{children:[u&&" Loading themes...",Object(b.jsx)(U.a,{title:"ChangeTheme",id:"basic-nav-dropdown",children:j&&j.map((function(e,t){return Object(b.jsx)(U.a.Item,{children:Object(b.jsx)(G,{theme:e,active:O(e),onClick:function(){return a(e)}},"theme-"+t)})}))})]})}var J=a(138),Y=a(140);function V(e){var t=e.setTheme,a=Object(n.useContext)(d.b),c=Object(n.useContext)(d.a).state.user,o=Object(n.useState)("Todo list"),i=Object(s.a)(o,2),l=(i[0],i[1]),j=Object(n.useState)(!1),O=Object(s.a)(j,2),h=O[0],x=O[1];return Object(n.useEffect)((function(){c?(l("".concat(c.username,"\u2019s Todo List")),document.title="".concat(c.username,"\u2019s Todo List")):(l("Todo List"),document.title="Todo List")}),[c]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(J.a,{fixed:"top",bg:"light",expand:"lg",children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(J.a.Brand,{href:"/",children:Object(b.jsx)(N,{text:"Home"})}),Object(b.jsx)(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsxs)(J.a.Collapse,{id:"basic-navbar-nav",children:[Object(b.jsxs)(Y.a,{justify:!0,className:"me-auto",children:[c.username&&Object(b.jsx)(u.a,{variant:"link",onClick:function(e){return x(!0)},children:"Create New Todo"}),Object(b.jsx)(R,{show:h,handelClose:function(){return x(!1)}}),Object(b.jsx)(R,{}),Object(b.jsx)(Y.a.Link,{children:Object(b.jsx)(v.a,{href:"/users",children:"Users"})}),Object(b.jsx)(M,{theme:a,setTheme:t})]}),Object(b.jsx)(r.a.Suspense,{fallback:"Loading...",children:Object(b.jsx)(p,{})})]})]})})})}var W=a(14);function X(e){var t=e.id,a=Object(n.useContext)(d.a).state,r=Object(i.b)((function(){return{url:"/todo/id/".concat(t),data:{id:t},headers:{Authorization:a.user.access_token},method:"get"}})),c=Object(s.a)(r,2),o=c[0],l=c[1];Object(n.useEffect)(l,[t]);var j=Object(n.useContext)(d.b).textAlign,u=Object(v.d)();return Object(b.jsxs)(C.a,{style:{padding:"15vh",minHeight:"100vh"},children:[Object(b.jsx)("div",{children:Object(b.jsx)(v.a,{onClick:function(){return u.goBack()},children:"Back"})}),Object(b.jsxs)("div",{style:{textAlign:j},children:[o&&o.data?Object(b.jsx)(D,Object(h.a)({long:!0,td:!0,id:t},o.data)):"Loading...",Object(b.jsx)("hr",{})]})]})}var q=a(135);function K(e){var t=e.username,a=e.todos,r=e._id,c=Object(n.useContext)(d.b),o=c.primaryColor,l=c.secondaryColor,j=c.padding,u=c.border,O=c.margin,h=(c.textAlign,c.color,c.boxShadow),x=Object(n.useContext)(d.a),p=x.state,m=x.dispatch,g=(a.data,a.isLoading,Object(i.b)((function(){return{url:"/users/todos/"+r,method:"get",data:{id:r}}}),[])),f=Object(s.a)(g,2),T=f[0],L=f[1];Object(n.useEffect)((function(){L()}),[p.user.access_token]),Object(n.useEffect)((function(){a&&!1===a.isLoading&&a.data&&m({type:"FETCH_TODOS",todos:a.data.todos.reverse()})}),[T]);T.data&&T.data.todos;var S="/users/"+r+"/"+t;return Object(b.jsx)(C.a,{children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)(w.a,{}),Object(b.jsx)(w.a,{children:Object(b.jsx)(k.a,{style:{width:"inherit",background:l,color:o,padding:j,border:u,margin:O,boxShadow:h},children:Object(b.jsxs)(k.a.Body,{children:[Object(b.jsxs)(k.a.Title,{children:[Object(b.jsx)(w.a,{children:Object(b.jsx)(q.a,{style:{color:"white"}})}),Object(b.jsx)(w.a,{style:{color:o},children:t})]}),Object(b.jsx)(k.a.Text,{children:Object(b.jsx)(v.a,{href:S,children:Object(b.jsxs)("li",{children:[t,"'s profile"]})})})]})})}),Object(b.jsx)(w.a,{})]})})}var Q=r.a.memo(K);function Z(){var e=Object(n.useContext)(d.a).state,t=Object(i.b)((function(){return{url:"/users/",headers:{Authorization:e.user.access_token},method:"get"}})),a=Object(s.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)(c,[]);var o=Object(n.useContext)(d.b).textAlign,l=Object(v.d)();console.log(r);var j=[];return r.data?(j=r.data.users,console.log(j)):j=[{username:"there are no users in the system"}],Object(b.jsxs)(C.a,{style:{padding:"15vh"},children:[Object(b.jsx)("div",{children:Object(b.jsx)(v.a,{onClick:function(){return l.goBack()},children:"Back"})}),Object(b.jsxs)("div",{style:{textAlign:o},children:[Object(b.jsx)("h1",{children:"  "}),r&&r.data?j.map((function(e){return Object(b.jsx)(Q,Object(h.a)({},e))})):"Loading...",Object(b.jsx)("hr",{})]})]})}function $(e){var t=e.username,a=e.id,r=Object(n.useContext)(d.a),c=r.state,o=r.dispatch,l=Object(i.b)((function(){return{url:"/users/todos/"+a,method:"get",data:{id:a}}})),j=Object(s.a)(l,2),u=j[0],O=j[1];u.data,u.isLoading;Object(n.useEffect)((function(){O()}),[c.user.access_token]),Object(n.useEffect)((function(){u&&!1===u.isLoading&&u.data&&o({type:"FETCH_TODOS",todos:u.data.todos.reverse()})}),[u]);var x=[];u.data&&(x=u.data.todos);var p=Object(n.useContext)(d.b).textAlign,m=Object(v.d)();return Object(b.jsxs)(C.a,{style:{padding:"15vh"},children:[Object(b.jsx)("div",{children:Object(b.jsx)(v.a,{onClick:function(){return m.goBack()},children:"Back"})}),Object(b.jsxs)("div",{style:{textAlign:p},children:[Object(b.jsxs)("h1",{children:[t,"'s Todos"]}),u&&0===x.length&&Object(b.jsx)("div",{children:"User has not created any todos "}),u&&u.data?x.length>0&&x.map((function(e,t){return Object(n.createElement)(D,Object(h.a)(Object(h.a)({completed:e.completed,id:e._id},e),{},{key:"Todo-"+t}))})):"Loading...",Object(b.jsx)("hr",{})]})]})}a(122);var ee=function(){var e=Object(n.useReducer)(I,{user:{},todos:[]}),t=Object(s.a)(e,2),a=t[0],r=t[1],c=(a.user,Object(n.useState)({primaryColor:"deepskyblue",secondaryColor:"coral",color:"black",backgroundColor:"powderblue",textAlign:"center",border:"1px solid black",margin:"10px",padding:"5px",boxShadow:"2px 5px #888888"})),o=Object(s.a)(c,2),i=o[0],l=o[1],j=i.backgroundColor,u=i.color,O=Object(W.f)({"/":Object(W.g)({view:Object(b.jsx)(B,{})}),"/todo/create":Object(W.g)({view:Object(b.jsx)(R,{})}),"/users":Object(W.g)({view:Object(b.jsx)(Z,{})}),"/users/:id/:username":Object(W.g)((function(e){return{view:Object(b.jsx)($,{username:e.params.username,id:e.params.id})}})),"/todo/:id":Object(W.g)((function(e){return{view:Object(b.jsx)(X,{id:e.params.id})}}))});return Object(b.jsx)(d.b.Provider,{value:i,children:Object(b.jsx)(d.a.Provider,{value:{state:a,dispatch:r},children:Object(b.jsx)("div",{id:"main",style:{backgroundColor:j,color:u},children:Object(b.jsx)(v.b,{routes:O,children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(V,{setTheme:l}),Object(b.jsx)("hr",{}),Object(b.jsx)(v.c,{})]})})})})})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},ae=a(48),ne=a.n(ae).a.create({baseURL:"/"});o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{value:ne,children:Object(b.jsx)(ee,{})})}),document.getElementById("root")),te()},7:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),c=r.a.createContext({primaryColor:"deepskyblue",secondaryColor:"coral",color:"blue",backgroundColor:"powderblue",textAlign:"center"}),o=r.a.createContext({state:{},dispatch:function(){}})},94:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.beea1982.chunk.js.map