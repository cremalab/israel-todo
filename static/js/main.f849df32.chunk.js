(this["webpackJsonpcrema-app-web"]=this["webpackJsonpcrema-app-web"]||[]).push([[0],{42:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),l=n(17),i=n.n(l),r=(n(42),n(26)),o=n(3),s=n(30),d=n(6),j=n(21),u=n(14),b=n(31),h=n.n(b),C=n(10),O=n(19),f=Object(j.b)({name:"todos",initialState:{value:[]},reducers:{addTodo:function(e,t){e.value=[].concat(Object(O.a)(e.value),[t.payload])},deleteTodo:function(e,t){e.value=e.value.filter((function(e){return e.id!==t.payload}))},editTodo:function(e,t){var n=e.value.map((function(e){return e.id===t.payload.id?Object(C.a)(Object(C.a)({},e),t.payload):e}));e.value=n},toggleTodo:function(e,t){var n=e.value.map((function(e){return e.id===t.payload?Object(C.a)(Object(C.a)({},e),{},{isCompleted:!e.isCompleted}):e}));e.value=n}}}),m=f.actions,p=m.addTodo,x=m.deleteTodo,v=m.editTodo,g=m.toggleTodo,w=f.reducer,y=Object(d.b)({todos:w}),k={key:"root",version:1,storage:h.a},N=Object(u.g)(k,y),L=Object(j.a)({reducer:N,middleware:Object(j.c)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})}),M=Object(u.h)(L),T=n(32),E=n.n(T),S=(n(45),n(46),n(1));function Z(e){return Object(S.jsx)("div",{className:"sticky",children:e.children})}function H(){return Object(S.jsx)(Z,{children:Object(S.jsxs)("div",{id:"header",children:[Object(S.jsx)(E.a,{className:"menu-icon"}),Object(S.jsx)("h4",{id:"header-title",children:"My Tasks"})]})})}var P,I,F;n(53);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function V(e,t){var n=e.title,a=e.titleId,l=B(e,["title","titleId"]);return c.createElement("svg",A({width:280,height:280,viewBox:"0 0 280 280",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},l),n?c.createElement("title",{id:a},n):null,P||(P=c.createElement("circle",{opacity:.15253,cx:140,cy:140,r:140,fill:"#4158C4"})),I||(I=c.createElement("g",{clipPath:"url(#clip0)"},c.createElement("path",{d:"M116.8 123.267H163.466V129.933H116.8V123.267Z",fill:"#4158C4"}),c.createElement("path",{d:"M132.133 114.267L116.8 98.9333L123.466 92.6L132.133 101.267L156.8 76.6L163.466 83.2666L132.133 114.267Z",fill:"#4158C4"}),c.createElement("path",{d:"M97.2941 160L95.8566 168.188H102.013L101.232 172.656H95.1066L91.5754 193.688C91.5129 194.229 91.5025 194.729 91.5441 195.188C91.69 196.812 92.5754 197.625 94.2004 197.625C94.8879 197.625 95.8045 197.521 96.9504 197.312L96.5129 202.031C95.1587 202.406 93.7837 202.594 92.3879 202.594C90.1379 202.552 88.4504 201.729 87.3254 200.125C86.2004 198.5 85.7629 196.323 86.0129 193.594L89.4504 172.656H83.4816L84.2629 168.188H90.2316L91.6691 160H97.2941ZM121.608 167.562C124.442 167.604 126.869 168.375 128.89 169.875C130.911 171.375 132.4 173.448 133.358 176.094C134.338 178.719 134.671 181.594 134.358 184.719L134.296 185.406C133.9 188.698 132.921 191.677 131.358 194.344C129.796 196.99 127.775 199.052 125.296 200.531C122.817 202.01 120.098 202.708 117.14 202.625C114.327 202.583 111.9 201.812 109.858 200.312C107.838 198.812 106.358 196.771 105.421 194.188C104.483 191.604 104.15 188.76 104.421 185.656C104.733 182.156 105.681 179.01 107.265 176.219C108.848 173.427 110.879 171.271 113.358 169.75C115.858 168.208 118.608 167.479 121.608 167.562ZM110.108 185.688C109.963 187 109.963 188.365 110.108 189.781C110.317 192.24 111.046 194.198 112.296 195.656C113.567 197.115 115.254 197.875 117.358 197.938C119.233 198 120.963 197.542 122.546 196.562C124.129 195.562 125.463 194.062 126.546 192.062C127.629 190.062 128.327 187.844 128.64 185.406C128.806 183.49 128.838 181.875 128.733 180.562C128.483 178.042 127.723 176.052 126.452 174.594C125.181 173.135 123.494 172.365 121.39 172.281C118.473 172.219 115.994 173.365 113.952 175.719C111.911 178.073 110.65 181.156 110.171 184.969L110.108 185.688ZM140.673 185.031C141.089 181.594 142.037 178.49 143.517 175.719C144.996 172.948 146.819 170.875 148.985 169.5C151.152 168.125 153.537 167.469 156.142 167.531C159.912 167.615 162.808 168.99 164.829 171.656L168.079 154H173.735L165.423 202H160.267L160.86 198.375C158.194 201.292 154.902 202.708 150.985 202.625C147.86 202.542 145.371 201.323 143.517 198.969C141.662 196.594 140.662 193.417 140.517 189.438C140.454 188.208 140.506 186.74 140.673 185.031ZM146.11 188.281C146.048 191.26 146.579 193.573 147.704 195.219C148.829 196.865 150.475 197.708 152.642 197.75C155.912 197.896 158.819 196.25 161.36 192.812L164.048 177.188C162.798 174.104 160.527 172.521 157.235 172.438C155.006 172.375 153.037 173.052 151.329 174.469C149.642 175.865 148.35 177.833 147.454 180.375C146.579 182.896 146.131 185.531 146.11 188.281ZM193.612 167.562C196.445 167.604 198.873 168.375 200.893 169.875C202.914 171.375 204.404 173.448 205.362 176.094C206.341 178.719 206.675 181.594 206.362 184.719L206.3 185.406C205.904 188.698 204.925 191.677 203.362 194.344C201.8 196.99 199.779 199.052 197.3 200.531C194.82 202.01 192.102 202.708 189.143 202.625C186.331 202.583 183.904 201.812 181.862 200.312C179.841 198.812 178.362 196.771 177.425 194.188C176.487 191.604 176.154 188.76 176.425 185.656C176.737 182.156 177.685 179.01 179.268 176.219C180.852 173.427 182.883 171.271 185.362 169.75C187.862 168.208 190.612 167.479 193.612 167.562ZM182.112 185.688C181.966 187 181.966 188.365 182.112 189.781C182.32 192.24 183.05 194.198 184.3 195.656C185.57 197.115 187.258 197.875 189.362 197.938C191.237 198 192.966 197.542 194.55 196.562C196.133 195.562 197.466 194.062 198.55 192.062C199.633 190.062 200.331 187.844 200.643 185.406C200.81 183.49 200.841 181.875 200.737 180.562C200.487 178.042 199.727 176.052 198.456 174.594C197.185 173.135 195.498 172.365 193.393 172.281C190.477 172.219 187.998 173.365 185.956 175.719C183.914 178.073 182.654 181.156 182.175 184.969L182.112 185.688Z",fill:"#4158C4"}))),F||(F=c.createElement("defs",null,c.createElement("clipPath",{id:"clip0"},c.createElement("rect",{width:152,height:144,fill:"white",transform:"translate(69 63)"})))))}var D=c.forwardRef(V);n.p;function W(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsx)(D,{})})}),Object(S.jsxs)("div",{className:"welcome-section",children:[Object(S.jsx)("h2",{children:"Welcome!"}),Object(S.jsx)("p",{children:"Get things done with Todo."}),Object(S.jsx)(r.b,{to:"/todo",className:"link",children:Object(S.jsx)("button",{children:Object(S.jsx)("span",{children:"Get Started"})})})]})]})}var G=n(18);function J(e){var t=e.children;return Object(S.jsx)(G.a,{store:L,children:t})}var R,z,Y,$,q,K=n(9);n(59);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function X(e,t){var n=e.title,a=e.titleId,l=U(e,["title","titleId"]);return c.createElement("svg",Q({width:320,height:72,viewBox:"0 0 320 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},l),n?c.createElement("title",{id:a},n):null,R||(R=c.createElement("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H316C318.209 0 320 1.79086 320 4V68C320 70.2091 318.209 72 316 72H4C1.79086 72 0 70.2091 0 68V4Z",fill:"#4158C4",fillOpacity:.1})),z||(z=c.createElement("rect",{x:72,y:40,width:120,height:8,rx:4,fill:"#4158C4",fillOpacity:.1})),Y||(Y=c.createElement("rect",{x:72,y:24,width:224,height:8,rx:4,fill:"#4158C4",fillOpacity:.1})),$||($=c.createElement("path",{d:"M36 26C30.48 26 26 30.48 26 36C26 41.52 30.48 46 36 46C41.52 46 46 41.52 46 36C46 30.48 41.52 26 36 26ZM34 41L29 36L30.41 34.59L34 38.17L41.59 30.58L43 32L34 41Z",fill:"#4158C4",fillOpacity:.3})),q||(q=c.createElement("path",{d:"M36 26C30.48 26 26 30.48 26 36C26 41.52 30.48 46 36 46C41.52 46 46 41.52 46 36C46 30.48 41.52 26 36 26ZM34 41L29 36L30.41 34.59L34 38.17L41.59 30.58L43 32L34 41Z",fill:"#4158C4",fillOpacity:.3})))}var _=c.forwardRef(X),ee=(n.p,function(){return Object(G.b)()}),te=G.c;n(60);function ne(e){var t=e.className,n=e.children;return Object(S.jsx)("div",{className:"".concat(t," card"),children:n})}n(61);function ce(e){var t=e.open,n=e.children;return t?Object(S.jsx)("div",{className:"modal",children:n}):null}n(62);function ae(e){return Object(S.jsx)("button",{className:"primary-small primary-small-text",onClick:e.onClick,children:e.name})}n(63);function le(e){return Object(S.jsx)("button",{className:"secondary-small secondary-small-text",onClick:e.onCancel,children:e.name})}var ie=n(34),re=n.n(ie);n(64);function oe(e){var t=e.onChange,n=e.onSave,c=e.onCancel,a=e.title,l=e.todoText,i=e.onDelete;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("h5",{children:a}),i?Object(S.jsx)("div",{className:"col",children:Object(S.jsx)(re.a,{onClick:i,"data-testid":"delete-button"})}):null]}),Object(S.jsx)("input",{id:"Task-input",type:"text",value:l,placeholder:"Task description",onChange:function(e){return t(e.target.value)}}),Object(S.jsxs)("div",{className:"btn-div",children:[Object(S.jsx)(le,{name:"Cancel",onCancel:c}),Object(S.jsx)(ae,{name:"Save",onClick:function(){return n()}})]})]})}function se(e){var t=e.todo,n=e.closeModal,a=e.showModal;Object(c.useEffect)((function(){s(t)}),[t]);var l=ee(),i=Object(c.useState)(t),r=Object(K.a)(i,2),o=r[0],s=r[1],d=Object(c.useState)(!1),j=Object(K.a)(d,2),u=j[0],b=j[1],h=function(){b(!1)};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(ce,{open:a,children:Object(S.jsx)(ne,{children:Object(S.jsx)(oe,{onChange:function(e){if(t){var n=Object(C.a)(Object(C.a)({},t),{},{todo:e});s(n)}},title:"Edit Task",onSave:function(){o&&l(v(o)),n()},onCancel:n,onDelete:function(){b(!0)},todoText:null===o||void 0===o?void 0:o.todo})})}),Object(S.jsx)(ce,{open:u,children:Object(S.jsxs)(ne,{children:[Object(S.jsx)("div",{className:"row",children:Object(S.jsx)("h5",{children:"Please confirm you would like to delete the todo."})}),Object(S.jsxs)("div",{className:"btn-div",children:[Object(S.jsx)(le,{name:"Cancel",onCancel:function(){h(),n()}}),Object(S.jsx)(ae,{name:"Confirm",onClick:function(){return(null===t||void 0===t?void 0:t.id)&&l(x(null===t||void 0===t?void 0:t.id)),h(),void n()}})]})]})})]})}var de=n(81);function je(e){var t=e.showModal,n=e.closeModal,a=ee(),l=Object(c.useState)(""),i=Object(K.a)(l,2),r=i[0],o=i[1];return Object(S.jsx)(ce,{open:t,children:Object(S.jsx)(ne,{children:Object(S.jsx)(oe,{onChange:function(e){o(e)},title:"New Task",onSave:function(){var e={id:Object(de.a)(),todo:r,isCompleted:!1};r?(a(p(e)),n(),o("")):alert("You must Enter todo to save!")},onCancel:n})})})}n(65);var ue=n(35),be=n.n(ue),he=n(36),Ce=n.n(he);function Oe(e){var t=e.isCompleted?" text completed-text":"text";return Object(S.jsx)("div",{className:"todo-card",children:Object(S.jsxs)("div",{className:"card-content",children:[Object(S.jsx)("div",{className:"ellipse-div",onClick:e.handleIconClick,"data-testid":"complete-button",children:e.clicked?Object(S.jsx)(be.a,{className:"ellipse"}):Object(S.jsx)(Ce.a,{className:"ellipse"})}),Object(S.jsx)("div",{className:"text-date-section",onClick:e.edit,children:Object(S.jsx)("p",{className:t,children:e.todo})})]})})}function fe(e){var t=e.markAsCompleted,n=e.isCompleted,c=e.editTask,a=te((function(e){return e.todos}));return Object(S.jsx)(S.Fragment,{children:a.value.filter((function(e){return function(e){return n?e.isCompleted:!e.isCompleted}(e)})).map((function(e){var n=e.todo,a=e.id,l=e.isCompleted;return Object(S.jsx)(Oe,{edit:function(){return c({todo:n,id:a,isCompleted:l})},todo:n,handleIconClick:function(){t(a)},clicked:l,isCompleted:l},a)}))})}function me(){var e=te((function(e){return e.todos})),t=ee(),n=Object(c.useState)(!1),a=Object(K.a)(n,2),l=a[0],i=a[1],r=Object(c.useState)(!1),o=Object(K.a)(r,2),s=o[0],d=o[1],j=Object(c.useState)(),u=Object(K.a)(j,2),b=u[0],h=u[1],C=function(){i(!0)},O=function(e){h(e),d(!0)},f=function(e){t(g(e))};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsxs)("div",{className:"todos",children:[e.value.length>0?Object(S.jsx)("h3",{className:"titles",children:"Active Tasks"}):Object(S.jsxs)("div",{className:"empty-state-container",children:[Object(S.jsx)("h3",{className:"initial-state",children:"Create a task with the button below."}),Object(S.jsx)(_,{})]}),Object(S.jsx)(fe,{markAsCompleted:f,editTask:O}),e.value.length>0?Object(S.jsx)("button",{className:"new-task-btn",onClick:C,children:Object(S.jsx)("span",{id:"btn-text",children:"Create New Task"})}):Object(S.jsx)("div",{className:"empty-state-btn-container",children:Object(S.jsx)(ae,{name:"Create New Task",onClick:C})}),Object(S.jsx)(je,{closeModal:function(){i(!l)},showModal:l}),Object(S.jsx)(se,{closeModal:function(){d(!1)},showEditModal:s,todo:b,showModal:s})]})}),Object(S.jsx)("div",{className:"wrapper-completed",children:Object(S.jsxs)("div",{className:"completed-todos",children:[e.value.length>0?Object(S.jsx)("h3",{className:"titles",children:"Completed Tasks"}):null,Object(S.jsx)(fe,{isCompleted:!0,markAsCompleted:f,editTask:O})]})})]})}function pe(){return Object(S.jsx)(r.a,{children:Object(S.jsx)(J,{children:Object(S.jsxs)(s.a,{persistor:M,loading:null,children:[Object(S.jsx)(o.a,{exact:!0,path:"/",children:Object(S.jsx)(W,{})}),Object(S.jsxs)(o.a,{exact:!0,path:"/todo",children:[Object(S.jsx)(H,{}),Object(S.jsx)(me,{})]})]})})})}n(66);var xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),l(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),xe()}},[[68,1,2]]]);
//# sourceMappingURL=main.f849df32.chunk.js.map