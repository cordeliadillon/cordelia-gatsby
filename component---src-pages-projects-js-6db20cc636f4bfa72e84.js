/*! For license information please see component---src-pages-projects-js-6db20cc636f4bfa72e84.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"16l3":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),s=a.n(r),n=a("TSYQ"),l=a.n(n),i=a("9eSz"),c=a.n(i),o=a("Bl7J"),m=a("vrFN"),d=a("MX0m"),p=a.n(d),f=["Accessibility","Code","Comics","Photography"],u=function(e){var t=e.data;return s.a.createElement(s.a.Fragment,null,s.a.createElement("article",{className:"jsx-1589584260 "+(l()("project-card",{"project-card--featured":t.frontmatter.featured})||"")},s.a.createElement("div",{className:"jsx-1589584260"},s.a.createElement("h2",{className:"jsx-1589584260 f3"},t.frontmatter.link?s.a.createElement("a",{href:t.frontmatter.link,className:"jsx-1589584260"},t.frontmatter.title):t.frontmatter.title),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html},className:"jsx-1589584260"}),s.a.createElement("small",{className:"jsx-1589584260 project-card-footer"},s.a.createElement("span",{className:"jsx-1589584260"},"Status: ",t.frontmatter.status),s.a.createElement("span",{"aria-hidden":"true",className:"jsx-1589584260 b"}," · "),s.a.createElement("span",{className:"jsx-1589584260"},"Tags: ",t.frontmatter.tags.join(", ")))),s.a.createElement("div",{className:"jsx-1589584260"},t.frontmatter.image?s.a.createElement(c.a,{className:"rounded",alt:t.frontmatter.alt?t.frontmatter.alt:"",fluid:Object.assign({},t.frontmatter.image.childImageSharp.fluid,{aspectRatio:1.5})}):null)),s.a.createElement(p.a,{id:"1589584260"},[".project-card.jsx-1589584260{padding:1em;display:grid;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}",".project-card--featured.jsx-1589584260{grid-column:1 / span 2;grid-template-columns:3fr 2fr;grid-gap:2rem 2rem;}",".project-card.jsx-1589584260>div.jsx-1589584260:nth-child(2){grid-row:1;grid-column:1;-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;}",".project-card.jsx-1589584260 p.jsx-1589584260 a.jsx-1589584260{font-weight:bold;}","@media (max-width:850px){.project-card--featured.jsx-1589584260{grid-column:1;grid-template-columns:1fr;grid-gap:0;}}"]))};t.default=function(e){var t=e.data,a=Object(r.useState)([]),n=a[0],l=a[1],i=Object(r.useState)(!0),c=i[0],d=i[1];return s.a.createElement(o.a,null,s.a.createElement(m.a,{title:"Projects"}),s.a.createElement("h1",{className:"jsx-4123100891 ma0 pa0 f1"},"Projects"),s.a.createElement("div",{className:"jsx-4123100891 project-header"},s.a.createElement("span",{className:"jsx-4123100891 dib mr2"},"Filter:"),s.a.createElement("ul",{className:"jsx-4123100891 dib project-filters f7"},s.a.createElement("li",{className:"jsx-4123100891 dib pv1 ml2"},s.a.createElement("button",{"aria-pressed":c,"aria-disabled":c,onClick:function(){d(!0),l([])},className:"jsx-4123100891 br-pill"},"All Projects")),f.map((function(e,t){var a=n.includes(e);return s.a.createElement("li",{key:t,className:"jsx-4123100891 dib pv1 ml2"},s.a.createElement("button",{"aria-pressed":a,onClick:function(){return function(e){if(n.includes(e)){var t=n.filter((function(t){return t!==e}));d(0===t.length),l(t)}else l(n.concat(e)),d(!1)}(e)},className:"jsx-4123100891 br-pill ph2"},e))})))),s.a.createElement("div",{className:"jsx-4123100891 project-container"},t.allMarkdownRemark.edges.map((function(e,t){if(!c){for(var a=!1,r=0;r<n.length;r++)if(e.node.frontmatter.tags.includes(n[r])){a=!0;break}if(!a)return null}return s.a.createElement(u,{key:t,data:e.node})}))),s.a.createElement(p.a,{id:"4123100891"},[".project-container.jsx-4123100891{display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem 2rem;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}",".project-filters.jsx-4123100891{margin:0;padding:5px 0;}",".project-filters.jsx-4123100891 li.jsx-4123100891{list-style-type:none;color:black;border-bottom:5px solid transparent;}",".project-filters.jsx-4123100891 li.jsx-4123100891:focus-within{border-bottom:5px solid var(--text);}",".project-filters.jsx-4123100891 button.jsx-4123100891{background-color:transparent;font-family:var(--font-display);color:var(--text);cursor:pointer;border:2px solid transparent;}",".project-filters.jsx-4123100891 button.jsx-4123100891:focus{outline:none;}",'.project-filters.jsx-4123100891 button[aria-pressed="true"].jsx-4123100891{background-color:var(--text);border-color:2px solid var(--text);color:var(--background);}',"@media (max-width:850px){.project-container.jsx-4123100891{grid-template-columns:1fr;}}"]))}},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var l=s.apply(null,r);l&&e.push(l)}else if("object"===n)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=component---src-pages-projects-js-6db20cc636f4bfa72e84.js.map