(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var c=a(2),n=a(0),s=a.n(n),r=a(12),i=a.n(r),o=(a(33),a(10)),l=a(4),j=a(11),b=a(45).a.create({baseURL:"https://dummyjson.com"}),d=a(26);var p=function(){var t=Object(l.g)().search;return s.a.useMemo((function(){return new URLSearchParams(t)}),[t])};function u(t){var e=p(),a=e.get("page"),s=e.get("size"),r=[2,5,10,20],i=Object(n.useState)(s?Number(s):r[0]),l=Object(o.a)(i,2),j=l[0],b=l[1],u=Object(n.useState)(a?(a-1)*j:0),g=Object(o.a)(u,2),h=g[0],O=g[1];return Object(c.jsx)(d.a,{first:h,rows:j,totalRecords:t.total,rowsPerPageOptions:r,onPageChange:function(e){O(e.first),b(e.rows),t.onPageChange(e)}})}var g=function(){var t=s.a.useState([]),e=Object(o.a)(t,2),a=e[0],n=e[1],r=s.a.useState(0),i=Object(o.a)(r,2),d=i[0],g=i[1],h=Object(l.f)(),O=p(),m=O.get("page"),v=O.get("size");s.a.useEffect((function(){b.get("/products?skip=".concat(0!==m?m-1:m,"&limit=").concat(v||2)).then((function(t){n(t.data.products),g(t.data.total)}))}),[]);return Object(c.jsxs)("div",{className:"list-wrapper",children:[Object(c.jsx)("ul",{className:"list",children:null===a||void 0===a?void 0:a.map((function(t){return Object(c.jsxs)("li",{className:"list-item",children:[Object(c.jsx)("p",{children:t.title}),Object(c.jsx)("img",{style:{height:"90px"},alt:"img",src:t.thumbnail}),Object(c.jsx)("br",{}),Object(c.jsx)(j.b,{to:"/react-paginator/list/item/".concat(t.id),children:"more"})]},t.id)}))}),Object(c.jsx)(u,{total:d,onPageChange:function(t){h.push({pathname:"/react-paginator/list",search:0===t.page?2===t.rows?"":"?size=".concat(t.rows):2===t.rows?"?page=".concat(t.page+1):"?page=".concat(t.page+1,"&size=").concat(t.rows)}),b.get("/products?skip=".concat(t.page,"&limit=").concat(t.rows)).then((function(t){var e=t.data.products;(null===e||void 0===e?void 0:e.length)&&n(e),g(t.data.total)}))}})]})};function h(){var t=s.a.useState(),e=Object(o.a)(t,2),a=e[0],n=e[1],r=Object(l.h)().id;return s.a.useEffect((function(){b.get("/products/".concat(r)).then((function(t){n(t.data),console.log(t.data)}))}),[]),Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("p",{children:null===a||void 0===a?void 0:a.title}),Object(c.jsx)("img",{src:null===a||void 0===a?void 0:a.thumbnail,alt:"img"})]})}var O=function(){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-3",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(j.b,{className:"navbar-brand",to:"/react-paginator",children:"REACT"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(c.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(c.jsx)("li",{className:"nav-item dropdown",children:Object(c.jsx)(j.b,{className:"nav-link",to:"/react-paginator/list",children:"Products"})})})})]})})};var m=function(){return Object(c.jsx)(j.a,{children:Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(O,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/react-paginator/list/item/:id",children:Object(c.jsx)(h,{})}),Object(c.jsx)(l.a,{path:"/react-paginator/list",children:Object(c.jsx)(g,{})}),Object(c.jsx)(l.a,{path:"/react-paginator",children:Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("h1",{children:"WELCOME"})})})]})]})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.92c34778.chunk.js.map