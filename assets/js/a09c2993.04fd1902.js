(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(104)),i=["components"],c={title:"Introduction",slug:"/"},l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Templater is a template language that lets you insert variables and functions results into your notes. It will also let you execute JavaScript code manipulating those variables and functions.",source:"@site/docs/introduction.md",slug:"/",permalink:"/Templater/docs/",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/introduction.md",version:"current",sidebar:"docs",next:{title:"Installation",permalink:"/Templater/docs/installation"}},u=[{value:"Quick Example",id:"quick-example",children:[]}],p={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater"},"Templater")," is a template language that lets you insert ",Object(o.b)("strong",{parentName:"p"},"variables")," and ",Object(o.b)("strong",{parentName:"p"},"functions")," results into your notes. It will also let you execute JavaScript code manipulating those variables and functions."),Object(o.b)("p",null,"With ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater"},"Templater"),", you will be able to create powerful templates to automate manual tasks."),Object(o.b)("h2",{id:"quick-example"},"Quick Example"),Object(o.b)("p",null,"The following template file, that is using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater"},"Templater")," template syntax:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'---\ncreation date: <% tp.file.creation_date() %>\nmodification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>\n---\n\n<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>\n\n# <% tp.file.title %>\n\n<% tp.web.daily_quote() %>\n')),Object(o.b)("p",null," Will produce the following result when inserted:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"---\ncreation date: 2021-01-07 17:20\nmodification date: Thursday 7th January 2021 17:20:43\n---\n\n<< [[2021-04-08]] | [[2021-04-10]] >>\n\n# Test Test\n\n> Do the best you can until you know better. Then when you know better, do better.\n> &mdash; <cite>Maya Angelou</cite>\n")))}s.isMDXComponent=!0}}]);