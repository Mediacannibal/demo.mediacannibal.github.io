(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{786:function(e,n,t){"use strict";var r=t(139),a=t.n(r),i=t(140),o=t.n(i)()(a.a);o.push([e.i," .background {\n     background-color: #3998ac;\n     display: grid;\n     height: 100vh;\n }\n\n .topband {\n     background-color: #00243a;\n     border-style: solid;\n     border-color: #ff9400;\n     border-width: 6px 0 6px;\n     width: 100vw;\n     height: 37vh;\n     margin-top: 21%;\n     display: flex;\n     align-items: center;\n     justify-content: center;\n }\n\n .bottomband {\n     background-color: #FFFFFF;\n     width: 80vw;\n     height: 49vh;\n     align-self: end;\n     justify-self: center;\n     justify-items: center;\n     display: grid;\n }\n\n .videoplayer {\n     height: inherit;\n     width: inherit;\n     text-align: center;\n }\n\n .startscannericon {\n     width: 20vw;\n     height: 20vw;\n     margin-top: 6%;\n     align-self: center;\n }\n\n .starttextcontainer {\n     font-size: 2.9vh;\n     font-weight: 600;\n     width: 100%;\n     text-align: center;\n }","",{version:3,sources:["webpack://./src/components/StartScreen/style.css"],names:[],mappings:"CAAC;KACI,yBAAyB;KACzB,aAAa;KACb,aAAa;CACjB;;CAEA;KACI,yBAAyB;KACzB,mBAAmB;KACnB,qBAAqB;KACrB,uBAAuB;KACvB,YAAY;KACZ,YAAY;KACZ,eAAe;KACf,aAAa;KACb,mBAAmB;KACnB,uBAAuB;CAC3B;;CAEA;KACI,yBAAyB;KACzB,WAAW;KACX,YAAY;KACZ,eAAe;KACf,oBAAoB;KACpB,qBAAqB;KACrB,aAAa;CACjB;;CAEA;KACI,eAAe;KACf,cAAc;KACd,kBAAkB;CACtB;;CAEA;KACI,WAAW;KACX,YAAY;KACZ,cAAc;KACd,kBAAkB;CACtB;;CAEA;KACI,gBAAgB;KAChB,gBAAgB;KAChB,WAAW;KACX,kBAAkB;CACtB",sourcesContent:[" .background {\n     background-color: #3998ac;\n     display: grid;\n     height: 100vh;\n }\n\n .topband {\n     background-color: #00243a;\n     border-style: solid;\n     border-color: #ff9400;\n     border-width: 6px 0 6px;\n     width: 100vw;\n     height: 37vh;\n     margin-top: 21%;\n     display: flex;\n     align-items: center;\n     justify-content: center;\n }\n\n .bottomband {\n     background-color: #FFFFFF;\n     width: 80vw;\n     height: 49vh;\n     align-self: end;\n     justify-self: center;\n     justify-items: center;\n     display: grid;\n }\n\n .videoplayer {\n     height: inherit;\n     width: inherit;\n     text-align: center;\n }\n\n .startscannericon {\n     width: 20vw;\n     height: 20vw;\n     margin-top: 6%;\n     align-self: center;\n }\n\n .starttextcontainer {\n     font-size: 2.9vh;\n     font-weight: 600;\n     width: 100%;\n     text-align: center;\n }"],sourceRoot:""}]),n.a=o},787:function(e,n,t){e.exports=t.p+"69392b7b786e1cc2f4db80622f63076d.png"},819:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(138),o=t.n(i),c=t(786),l={insert:"head",singleton:!1},s=(o()(c.a,l),c.a.locals,t(787)),A=t(14),d=t(471),u=t(451);function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}n.default=function(){var e=h(Object(r.useState)(!0),2),n=e[0],t=e[1],i=Object(A.f)();Object(r.useEffect)((function(){null===localStorage.getItem("isFirsttime")&&Object(u.b)(),setTimeout((function(){null===localStorage.getItem("ShownIntroscreen")?(localStorage.setItem("ShownIntroscreen","true"),t(!1)):i.replace("/TaskListScreen")}),1e3)}),[]);window.innerHeight;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("div",{className:"background"},a.a.createElement("div",{className:"topband"},a.a.createElement("div",{className:"videoplayer"},a.a.createElement("iframe",{src:"https://player.vimeo.com/video/506001369?byline=false&playsinline=false&title=false",width:"100%",height:"100%",frameBorder:"0"}))),a.a.createElement("div",{className:"bottomband"},a.a.createElement("img",{onClick:function(){i.replace("/ClueListScreen")},className:"startscannericon",src:s}),a.a.createElement("div",{className:"starttextcontainer"},a.a.createElement("div",{className:"starttext"},"- Scan the QR code"),a.a.createElement("div",{className:"starttext"},"- Watch the 2 min Video"),a.a.createElement("div",{className:"starttext"},"- Have fun with the quiz"),a.a.createElement("div",{className:"starttext"},"- Excel at the activity")))),n?a.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",top:"0",zIndex:10,backgroundColor:"#00243a"}},a.a.createElement(d.a,null)):null))}}}]);
//# sourceMappingURL=25.0eb59997e7e4b5618102.js.map