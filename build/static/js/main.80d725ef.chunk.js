(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(18),s=c.n(a),i=(c(30),c(6)),r=c(3),l=(c(31),c(0)),j=function(){var e,t=(new Date).getHours();return e=t>=1&&t<=11?"Good Morning!":t>=12&&t<=17?"Good Afternoon!":"Good Evening!",Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"header-bg"}),Object(l.jsx)("h1",{children:e}),Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:Object(l.jsx)("polygon",{fill:"#161e29",points:"0,100 100,0 100,100"})})]})},u=c(9),d=c.n(u),b=c(19),p=c(20),O=c.n(p),x=function(){var e=Object(n.useState)([""]),t=Object(r.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("https://api.quotable.io/random?maxLength=50");case 2:t=e.sent,o(t.data.content);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(l.jsxs)("div",{className:"quote",children:[Object(l.jsx)("p",{className:"title",children:"Quote of the day:"}),Object(l.jsx)("p",{className:"quote-txt",children:c})]})},f=c(4),m=c(21),h=c.n(m),v=c(22),g=c.n(v),N=c(23),S=c.n(N),C=c(24),k=c.n(C),y=function(e){var t=e.todo,c=e.index,n=e.completeTodo,o=e.removeTodo,a=e.editTodo;return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)(f.Icon,{icon:h.a,className:t.isCompleted?"circles circles-clicked":"circles",onClick:function(){return n(c)}}),Object(l.jsx)(f.Icon,{icon:S.a,className:t.isCompleted?"tick":"no-tick"}),Object(l.jsx)("p",{className:t.isCompleted?"completed":"",children:t.text}),Object(l.jsx)(f.Icon,{icon:k.a,className:"pencil",onClick:function(){return a(c,t)}}),Object(l.jsx)(f.Icon,{icon:g.a,className:"cross",onClick:function(){return o(c)}})]})},T=function(e){var t=e.addTodo,c=Object(n.useState)(""),o=Object(r.a)(c,2),a=o[0],s=o[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&(t(a),s(""))},children:[Object(l.jsx)("input",{type:"text",className:"input",placeholder:"Add a task",value:a,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("p",{className:"character-count",children:"Max characters: 20"})]})},w=c(25),I=c.n(w);var F=function(){var e=JSON.parse(localStorage.getItem("todos"));Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}));var t=Object(n.useState)(e||[]),c=Object(r.a)(t,2),o=c[0],a=c[1],s=function(e){var t=Object(i.a)(o);t[e].isCompleted=!0,a(t)},u=function(e){var t=Object(i.a)(o);t.splice(e,1),a(t)},d=Object(n.useState)(!1),b=Object(r.a)(d,2),p=b[0],O=b[1],m=Object(n.useState)(""),h=Object(r.a)(m,2),v=h[0],g=h[1],N=function(e,t){O(!0),g(t.text),u(e)},S=function(e){e.preventDefault(),v&&(!function(e){var t=[].concat(Object(i.a)(o),[{text:e}]);a(t)}(v),O(!1))},C={};return C.display=p?"":"none",Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(j,{}),Object(l.jsx)(x,{}),Object(l.jsxs)("div",{className:"todo-list",children:[Object(l.jsx)("p",{className:"title",children:"Tasks:"}),o.map((function(e,t){return Object(l.jsx)(y,{index:t,todo:e,completeTodo:s,removeTodo:u,editTodo:N},t)}))]}),Object(l.jsxs)("form",{onSubmit:S,style:C,className:"edit-form",children:[Object(l.jsx)("input",{type:"text",className:"test",value:v,onChange:function(e){g(e.target.value)},maxLength:"20"}),Object(l.jsx)(f.Icon,{icon:I.a,className:"save",style:{color:"#FFF",fontSize:"23px"},onClick:S})]}),Object(l.jsx)(T,{addTodo:function(e){var t=[].concat(Object(i.a)(o),[{text:e}]);a(t)}})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),o(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.80d725ef.chunk.js.map