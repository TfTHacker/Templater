(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return n?a.a.createElement(d,s(s({ref:t},u),{},{components:n})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/templater_user_templates-36f6900a86474cd90e46f4ec3f836b0b.png"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(104)),i={title:"System Command User Functions"},s={unversionedId:"user-functions/system-user-functions",id:"user-functions/system-user-functions",isDocsHomePage:!1,title:"System Command User Functions",description:"This type of user functions allows you to execute system commands and retrieve their output.",source:"@site/docs/user-functions/system-user-functions.md",slug:"/user-functions/system-user-functions",permalink:"/Templater/docs/user-functions/system-user-functions",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/user-functions/system-user-functions.md",version:"current",sidebar:"docs",previous:{title:"Script User Functions",permalink:"/Templater/docs/user-functions/script-user-functions"},next:{title:"Overview",permalink:"/Templater/docs/commands"}},c=[{value:"Define a System Command User Function",id:"define-a-system-command-user-function",children:[]},{value:"Functions Arguments",id:"functions-arguments",children:[]},{value:"Internal variables / functions in system commands",id:"internal-variables--functions-in-system-commands",children:[]}],u={toc:c};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This type of user functions allows you to execute system commands and retrieve their output."),Object(o.b)("p",null,"System command user functions need to be enabled in Templater's settings."),Object(o.b)("h2",{id:"define-a-system-command-user-function"},"Define a System Command User Function"),Object(o.b)("p",null,"To define a new system command user function, you need to define a ",Object(o.b)("strong",{parentName:"p"},"function name"),", associated with a ",Object(o.b)("strong",{parentName:"p"},"system command"),"."),Object(o.b)("p",null,"To do that, go to the plugin's settings and click ",Object(o.b)("inlineCode",{parentName:"p"},"Add User Function"),"."),Object(o.b)("p",null,"Once this is done, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater"},"Templater")," will create a user function named after what you defined, that will execute your system command and return its output."),Object(o.b)("p",null,"Just like internal functions, user functions are available under the ",Object(o.b)("inlineCode",{parentName:"p"},"tp")," JavaScript object, and more specifically under the ",Object(o.b)("inlineCode",{parentName:"p"},"tp.user")," object."),Object(o.b)("p",null,Object(o.b)("img",{alt:"user_templates",src:n(180).default})),Object(o.b)("h2",{id:"functions-arguments"},"Functions Arguments"),Object(o.b)("p",null,"You can pass optional arguments to user functions. They must be passed as a single JavaScript object containing properties and their corresponding values: ",Object(o.b)("inlineCode",{parentName:"p"},"{arg1: value1, arg2: value2, ...}"),"."),Object(o.b)("p",null,"These arguments will be made available for your programs / scripts in the form of ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Environment_variable"},"environment variables"),"."),Object(o.b)("p",null,"In our previous example, this would give the following command declaration: ",Object(o.b)("inlineCode",{parentName:"p"},'<% tp.user.echo({a: "value 1", b: "value 2"})'),". "),Object(o.b)("p",null,"If our system command was calling a bash script, we would be able to access variables ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"b")," using ",Object(o.b)("inlineCode",{parentName:"p"},"$a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"$b"),"."),Object(o.b)("h2",{id:"internal-variables--functions-in-system-commands"},"Internal variables / functions in system commands"),Object(o.b)("p",null,"You can use internal variables / functions inside your system command. The internal variables / functions will be replaced by their results before your system command gets executed."),Object(o.b)("p",null,"You still need to use commands to call internal variables / functions."),Object(o.b)("p",null,"For example, if you configured the system command ",Object(o.b)("inlineCode",{parentName:"p"},"cat <% tp.file.path() %>"),", it would be replaced with ",Object(o.b)("inlineCode",{parentName:"p"},"cat /path/to/file")," before the system command gets executed."))}l.isMDXComponent=!0}}]);