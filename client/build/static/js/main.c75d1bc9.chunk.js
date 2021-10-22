(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),s=n.n(c),i=(n(27),n(0)),o=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:"Expense Tracker"})})},u=n(4),l=n.n(u),j=n(10),d=n(6),p=n(22),b=n(3);var O=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(b.a)(Object(b.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:[].concat(Object(p.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.payload});default:return e}},x=n(11),h=n.n(x),f={transactions:[],error:null,loading:!0},m=Object(a.createContext)(f),v=function(e){var t=e.children,n=Object(a.useReducer)(O,f),r=Object(d.a)(n,2),c=r[0],s=r[1];function o(){return(o=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/v1/transactions");case 3:t=e.sent,s({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({type:"GET_TRANSACTIONS",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/v1/transactions/".concat(t));case 3:s({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s({type:"GET_TRANSACTIONS",payload:e.t0.response.data.error});case 9:s({type:"DELETE_TRANSACTION",payload:t});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(){return(p=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,h.a.post("/api/v1/transactions",t,n);case 4:a=e.sent,s({type:"ADD_TRANSACTION",payload:a.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"GET_TRANSACTIONS",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(i.jsx)(m.Provider,{value:{transactions:c.transactions,error:c.error,loading:c.loading,getTransactions:function(){return o.apply(this,arguments)},deleteTransaction:function(e){return u.apply(this,arguments)},addTransaction:function(e){return p.apply(this,arguments)}},children:t})};function T(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var y=function(){var e=Object(a.useContext)(m).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsxs)("h1",{id:"balance",children:["\u20a6",T(e)]})]})},N=function(){var e=Object(a.useContext)(m).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsxs)("p",{id:"money-plus",className:"money plus",children:["\u20a6",T(t)]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsxs)("p",{id:"money-minus",className:"money minus",children:["\u20a6",T(n)]})]})]})},A=function(e){var t=e.transaction,n=Object(a.useContext)(m).deleteTransaction,r=t.amount<0?"-":"+";return Object(i.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(i.jsxs)("span",{children:[r,"\u20a6",T(Math.abs(t.amount))]}),Object(i.jsx)("button",{onClick:function(){return n(t._id)},className:"delete-btn",children:"x"})]})},C=function(){var e=Object(a.useContext)(m),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{id:"list",className:"list",children:t.map((function(e){return Object(i.jsx)(A,{transaction:e},e.id)}))})]})},E=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("0"),s=Object(d.a)(c,2),o=s[0],u=s[1],l=Object(a.useContext)(m).addTransaction;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+o};l(t)},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{type:"number",value:o,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var S=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(v,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(y,{}),Object(i.jsx)(N,{}),Object(i.jsx)(C,{}),Object(i.jsx)(E,{})]})]})})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c75d1bc9.chunk.js.map