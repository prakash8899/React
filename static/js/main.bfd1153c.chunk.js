(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(14),i=c.n(n),a=c(5),r=c.n(a),j=c(15),l=c(3),d=(c(22),c(16)),o=c.n(d),b=c(0);var h=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),a=Object(l.a)(i,2),d=a[0],h=a[1],x=Object(s.useState)([]),O=Object(l.a)(x,2),p=O[0],f=O[1],u=Object(s.useState)(!0),m=Object(l.a)(u,2),v=m[0],y=m[1],g=Object(s.useState)("paid"),N=Object(l.a)(g,2),S=N[0],C=N[1],w=Object(s.useState)(!1),z=Object(l.a)(w,2),k=(z[0],z[1]),D=Object(s.useState)(!0),L=Object(l.a)(D,2),E=L[0],R=L[1];function I(){return(I=Object(j.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences/").then((function(e){h(e.data.free),f(e.data.paid)}));case 3:k(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),R(!E);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"heading",children:[Object(b.jsx)("h1",{children:"Welcome"}),Object(b.jsx)("h3",{children:"\u2014 Conference \u2014"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{style:{fontSize:"20px",padding:"10px 20px"},children:"Search by City or Title : "})," ",Object(b.jsx)("input",{className:"sbox",type:"text",placeholder:"Hyderbad",value:c,onChange:function(e){var t=e.target.value;n(t)}}),Object(b.jsxs)("button",{classname:"toggle",onClick:function(){y(!v),C("paid"===S?"free":"paid")},children:["Click for ",S," service"]})]}),!1===E?Object(b.jsx)("div",{className:"broken",children:"Invalid 404 error"}):v?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)("h1",{className:"tit",children:"Free Courses"}),d.filter((function(e){var t=e.confName,s=e.city;return""===c||t.toString().toLowerCase().includes(c)||s.toString().toLowerCase().includes(c.toString().toLowerCase())?t:void 0})).map((function(e){var t=e.confName,c=e.confEndDate,s=e.confStartDate,n=e.imageURL,i=e.entryType,a=e.confUrl,r=e.city,j=n.replace(/['"]+/g,"");return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("article",{className:"xyz",children:Object(b.jsxs)("article",{children:[Object(b.jsxs)("h2",{children:["Conference Name : ",Object(b.jsx)("span",{children:t})]}),Object(b.jsx)("div",{className:"Service",children:Object(b.jsxs)("h2",{style:{color:"crimson"},children:[i," service"]})}),Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:j,alt:"noImage"})}),Object(b.jsx)("div",{className:"city",children:Object(b.jsx)("p",{children:r?Object(b.jsx)("span",{children:r}):Object(b.jsx)("span",{children:"...Randam city ..."})})}),Object(b.jsx)("a",{href:a,children:"Register Now"}),Object(b.jsxs)("div",{className:"iline",children:[Object(b.jsx)("div",{style:{float:"left"},children:Object(b.jsxs)("p",{children:["Start Date : ",Object(b.jsx)("span",{style:{fontSize:"20px"},children:s})]})}),Object(b.jsx)("div",{style:{float:"right"},children:Object(b.jsxs)("p",{children:["End Date : ",Object(b.jsx)("span",{style:{fontSize:"20px"},children:c})]})})]})]})]})})})}))]})}):Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)("h1",{className:"tit",children:"Paid Courses"}),p.filter((function(e){var t=e.confName,s=e.city;return""===c||t.toString().toLowerCase().includes(c)||s.toString().toLowerCase().includes(c.toString().toLowerCase())?t:void 0})).map((function(e){var t=e.confName,c=e.confEndDate,s=e.confStartDate,n=e.imageURL,i=e.entryType,a=e.confUrl,r=e.city,j=n.replace(/['"]+/g,"");return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("article",{className:"xyz",children:Object(b.jsxs)("article",{children:[Object(b.jsxs)("h2",{children:["Confrence Name : ",Object(b.jsx)("span",{children:t})]}),Object(b.jsx)("div",{className:"Service",children:Object(b.jsxs)("h2",{style:{color:"crimson"},children:[i," service"]})}),Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:j,alt:"noImage"})}),Object(b.jsx)("div",{className:"city",children:Object(b.jsx)("p",{children:r?Object(b.jsx)("span",{children:r}):Object(b.jsx)("span",{children:"...Randam city ..."})})}),Object(b.jsx)("a",{href:a,children:"Register Now"}),Object(b.jsxs)("div",{className:"iline",children:[Object(b.jsx)("div",{style:{float:"left"},children:Object(b.jsxs)("p",{children:["Start Date : ",Object(b.jsx)("span",{style:{fontSize:"20px"},children:s})]})}),Object(b.jsx)("div",{style:{float:"right"},children:Object(b.jsxs)("p",{children:["End Date : ",Object(b.jsx)("span",{style:{fontSize:"20px"},children:c})]})})]})]})]})})})}))]})})]})};i.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bfd1153c.chunk.js.map