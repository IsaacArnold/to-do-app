(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(18),a=n.n(s),i=(n(30),n(6)),r=n(3),l=(n(31),n(0)),j=function(){var e,t=(new Date).getHours();return e=t>=1&&t<=11?"Good Morning!":t>=12&&t<=17?"Good Afternoon!":"Good Evening!",Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"header-bg"}),Object(l.jsx)("h1",{children:e}),Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:Object(l.jsx)("polygon",{fill:"#161e29",points:"0,100 100,0 100,100"})})]})},u=n(9),d=n.n(u),b=n(19),p=n(20),O=n.n(p),f=function(){var e=Object(c.useState)([""]),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("https://api.quotable.io/random?maxLength=50");case 2:t=e.sent,o(t.data.content);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"quote",children:[Object(l.jsx)("p",{className:"title",children:"Quote of the day:"}),Object(l.jsx)("p",{className:"quote-txt",children:n})]})},x=n(4),m=n(21),v=n.n(m),h=n(22),g=n.n(h),N=n(23),S=n.n(N),C=n(24),k=n.n(C),y=function(e){var t=e.todo,n=e.index,c=e.completeTodo,o=e.removeTodo,s=e.editTodo;return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)(x.Icon,{icon:v.a,className:t.isCompleted?"circles circles-clicked":"circles",onClick:function(){return c(n)}}),Object(l.jsx)(x.Icon,{icon:S.a,className:t.isCompleted?"tick":"no-tick"}),Object(l.jsx)("p",{className:t.isCompleted?"completed":"",children:t.text}),Object(l.jsx)(x.Icon,{icon:k.a,className:"pencil",onClick:function(){return s(n,t)}}),Object(l.jsx)(x.Icon,{icon:g.a,className:"cross",onClick:function(){return o(n)}})]})},T=function(e){var t=e.addTodo,n=Object(c.useState)(""),o=Object(r.a)(n,2),s=o[0],a=o[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),s&&(t(s),a(""))},children:Object(l.jsx)("input",{type:"text",className:"input",placeholder:"Add a task",value:s,onChange:function(e){a(e.target.value)}})})},w=n(25),I=n.n(w);var F=function(){var e=JSON.parse(localStorage.getItem("todos"));Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}));var t=Object(c.useState)(e||[]),n=Object(r.a)(t,2),o=n[0],s=n[1],a=function(e){var t=Object(i.a)(o);t[e].isCompleted=!0,s(t)},u=function(e){var t=Object(i.a)(o);t.splice(e,1),s(t)},d=Object(c.useState)(!1),b=Object(r.a)(d,2),p=b[0],O=b[1],m=Object(c.useState)(""),v=Object(r.a)(m,2),h=v[0],g=v[1],N=function(e,t){O(!0),g(t.text),u(e)},S=function(e){e.preventDefault(),h&&(!function(e){var t=[].concat(Object(i.a)(o),[{text:e}]);s(t)}(h),O(!1))},C={};return C.display=p?"":"none",Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(j,{}),Object(l.jsx)(f,{}),Object(l.jsxs)("div",{className:"todo-list",children:[Object(l.jsx)("p",{className:"title",children:"Tasks:"}),o.map((function(e,t){return Object(l.jsx)(y,{index:t,todo:e,completeTodo:a,removeTodo:u,editTodo:N},t)}))]}),Object(l.jsxs)("form",{onSubmit:S,style:C,className:"edit-form",children:[Object(l.jsx)("input",{type:"text",className:"test",value:h,onChange:function(e){g(e.target.value)}}),Object(l.jsx)(x.Icon,{icon:I.a,className:"save",style:{color:"#FFF",fontSize:"23px"},onClick:S})]}),Object(l.jsx)(T,{addTodo:function(e){var t=[].concat(Object(i.a)(o),[{text:e}]);s(t)}})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.5d4c3a1b.chunk.js.map