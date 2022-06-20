(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var o=c(8),n=c.n(o),s=(c(14),c(15),c(16),c(1)),a=c.n(s),i=c(9),l=c(2),r=c(0),d=a.a.createContext({todos:[],setTodos:function(){},finishedTodos:[],setFinishedTodos:function(){},activeTodos:[],setActiveTodos:function(){},visibleTodoses:[],setVisibleTodoses:function(){}}),u=function(e){var t=e.children,c=Object(s.useState)(JSON.parse(localStorage.getItem("todo")||"[]")),o=Object(l.a)(c,2),n=o[0],a=o[1],i=Object(s.useState)([]),u=Object(l.a)(i,2),j=u[0],b=u[1],O=Object(s.useState)([]),f=Object(l.a)(O,2),h=f[0],m=f[1],p=Object(s.useState)([]),x=Object(l.a)(p,2),v=x[0],g=x[1];Object(s.useEffect)((function(){localStorage.setItem("todo",JSON.stringify(n)),m(n.filter((function(e){return e.completed}))),g(n.filter((function(e){return!e.completed})))}),[n]);var T={todos:n,setTodos:a,finishedTodos:h,setFinishedTodos:m,activeTodos:v,setActiveTodos:g,visibleTodoses:j,setVisibleTodoses:b};return Object(r.jsx)(d.Provider,{value:T,children:t})},j=(c(18),a.a.memo((function(){var e=Object(s.useContext)(d),t=e.todos,c=e.setTodos,o=Object(s.useState)(""),n=Object(l.a)(o,2),a=n[0],u=n[1];return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault();var o={id:+new Date,title:a,completed:!1};o.title&&(c([].concat(Object(i.a)(t),[o])),u(""))},children:Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){u(e.target.value)},className:"new-todo","data-cy":"createTodo",placeholder:"What needs to be done?"})})}))),b=c(3),O=c(4),f=c.n(O),h=(c(19),function(e){var t=e.el,c=Object(s.useContext)(d),o=c.todos,n=c.setTodos,a=Object(s.useState)(!1),i=Object(l.a)(a,2),u=i[0],j=i[1],O=Object(s.useState)(t.title),h=Object(l.a)(O,2),m=h[0],p=h[1],x=function(){n(o.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{title:m}):e})))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("li",{className:f()({completed:t.completed,editing:u}),children:[Object(r.jsxs)("div",{className:"view",children:[Object(r.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){return e=t.id,void n(o.map((function(t){return t.id===e?Object(b.a)(Object(b.a)({},t),{},{completed:!t.completed}):t})));var e},className:"toggle"}),Object(r.jsx)("label",{onDoubleClick:function(){j(!0)},children:t.title}),Object(r.jsx)("button",{type:"button","data-cy":"deleteTodo",className:"destroy",onClick:function(){return e=t.id,void n(o.filter((function(t){return t.id!==e})));var e}})]}),Object(r.jsx)("input",{type:"text",id:"editTodo",value:m,onChange:function(e){return p(e.target.value)},className:"edit",ref:function(e){return e&&e.focus()},onBlur:function(){j(!1),x()},onKeyDown:function(e){switch(e.key){case"Enter":j(!1),x();break;case"Escape":p(t.title),j(!1)}}})]},t.id)})}),m=a.a.memo((function(){var e=Object(s.useContext)(d),t=e.todos,c=e.setTodos,o=Object(s.useContext)(d).visibleTodoses,n=t.filter((function(e){return!e.completed}));return Object(r.jsxs)(r.Fragment,{children:[0!==t.length&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"checkbox",checked:0===n.length,onChange:function(e){return function(e){c(t.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{completed:e})})))}(e.target.checked)},id:"toggle-all","data-cy":"toggleAll",className:"toggle-all"}),Object(r.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"})]}),Object(r.jsx)("ul",{className:"todo-list","data-cy":"todoList",children:o.map((function(e){return Object(r.jsx)(h,{el:e},e.id)}))})]})})),p=a.a.memo((function(){var e=Object(s.useContext)(d),t=e.todos,c=e.setTodos,o=e.finishedTodos,n=Object(s.useContext)(d),a=n.activeTodos,i=n.setVisibleTodoses,u=Object(s.useState)("all"),j=Object(l.a)(u,2),b=j[0],O=j[1];return Object(s.useEffect)((function(){switch(b){case"active":i(a);break;case"completed":i(o);break;default:i(t)}}),[b,t,o]),Object(r.jsx)(r.Fragment,{children:t.length>0&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsx)("span",{"data-cy":"todosCounter",className:"todo-count",children:"".concat(a.length," items left")}),Object(r.jsxs)("ul",{className:"filters",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#/",className:f()({selected:"all"===b}),onClick:function(){return O("all")},children:"All"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#/active",className:f()({selected:"active"===b}),onClick:function(){return O("active")},children:"Active"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#/completed",className:f()({selected:"completed"===b}),onClick:function(){return O("completed")},children:"Completed"})})]}),o.length>0&&Object(r.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){return c(a)},children:"Clear completed"})]})})})})),x=function(){return Object(r.jsx)(u,{children:Object(r.jsxs)("section",{className:"todoapp",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:"todos"}),Object(r.jsx)(j,{})]}),Object(r.jsx)("section",{className:"main",children:Object(r.jsx)(m,{})}),Object(r.jsx)(p,{})]})})};n.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.a6ca3fad.chunk.js.map