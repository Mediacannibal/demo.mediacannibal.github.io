!function(n){function r(r){for(var t,A,i=r[0],l=r[1],c=r[2],s=0,u=[];s<i.length;s++)A=i[s],Object.prototype.hasOwnProperty.call(o,A)&&o[A]&&u.push(o[A][0]),o[A]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(d&&d(r);u.length;)u.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var n,r=0;r<a.length;r++){for(var e=a[r],t=!0,i=1;i<e.length;i++){var l=e[i];0!==o[l]&&(t=!1)}t&&(a.splice(r--,1),n=A(A.s=e[0]))}return n}var t={},o={6:0},a=[];function A(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,A),e.l=!0,e.exports}A.e=function(n){var r=[],e=o[n];if(0!==e)if(e)r.push(e[2]);else{var t=new Promise((function(r,t){e=o[n]=[r,t]}));r.push(e[2]=t);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,A.nc&&i.setAttribute("nonce",A.nc),i.src=function(n){return A.p+""+({}[n]||n)+".2b471e4001db83e9a358.js"}(n);var l=new Error;a=function(r){i.onerror=i.onload=null,clearTimeout(c);var e=o[n];if(0!==e){if(e){var t=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+t+": "+a+")",l.name="ChunkLoadError",l.type=t,l.request=a,e[1](l)}o[n]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(r)},A.m=n,A.c=t,A.d=function(n,r,e){A.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},A.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},A.t=function(n,r){if(1&r&&(n=A(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(A.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)A.d(e,t,function(r){return n[r]}.bind(null,t));return e},A.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return A.d(r,"a",r),r},A.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},A.p="./",A.oe=function(n){throw console.error(n),n};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var c=0;c<i.length;c++)r(i[c]);var d=l;a.push([441,4,10,7,5,9,8]),e()}({135:function(n,r,e){"use strict";var t=e(139),o=e.n(t),a=e(140),A=e.n(a)()(o.a);A.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),A.push([n.i,".back_color_main {\r\n    background-color: #f1fdfd;\r\n    height: 100vh;\r\n}\r\n\r\n.PageTitle_OrangeU {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(255, 166, 0);\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.PageTitle_U {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.bgimgtop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 0;\r\n    height: 41vh;\r\n    background-color: #f1fdfd;\r\n}\r\n\r\n.bgbottombluebar {\r\n    background-color: #00253a;\r\n    height: 11vh;\r\n}\r\n\r\n.pageDescription_Text {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 4.6vw;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    margin-top: 5%;\r\n    width: 80%;\r\n    margin: 5% 10%;\r\n    z-index: 1;\r\n}\r\n\r\n/* popUp Style */\r\n\r\n.popup_container {\r\n    align-self: center;\r\n    width: 75vw;\r\n    display: grid;\r\n}\r\n\r\n.popup_Title {\r\n    font-size: 3vh;\r\n    text-align: center;\r\n    padding: 2vh 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.popup_Text {\r\n    font-size: 2.4vh;\r\n    text-align: center;\r\n    padding: 3vh 0;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n.popup_source {\r\n    font-size: 2.1vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #f7941d;\r\n}\r\n\r\n.popup {\r\n    background-color: #f1fdfd;\r\n    z-index: 200;\r\n    padding: 3vh 5vw;\r\n    border-radius: 2vw;\r\n    border-color: #f7941d;\r\n    border-width: 1vw;\r\n    border-style: solid;\r\n}\r\n\r\n.popup_bg {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #000000df;\r\n    z-index: 200;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.button_container {\r\n    align-self: center;\r\n}\r\n\r\n.button_text {\r\n    font-size: 2.5vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n/* Continue Button Style */\r\n\r\n.continue_button_Orange {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: #f7941d;\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.continue_button_Green {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: rgb(5, 138, 27);\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.popup_continue_buttonContainer {\r\n    display: grid;\r\n    padding: 4.2vh 0;\r\n}\r\n\r\n/* Options Button Style */\r\n\r\n.option_button_Orange {\r\n    background-color: #f7941d;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n}\r\n\r\n.option_button_Green {\r\n    background-color: #72c84c;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n}\r\n\r\n.rotateimg180 {\r\n    display: inline-flex;\r\n    -webkit-transform: rotate(180deg);\r\n    -moz-transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n    -o-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n}","",{version:3,sources:["webpack://./src/components/app.css"],names:[],mappings:"AACA;IACI,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;IACd,0BAA0B;IAC1B,uCAAuC;IACvC,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;IACd,0BAA0B;IAC1B,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,UAAU;IACV,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,UAAU;IACV,cAAc;IACd,UAAU;AACd;;AAEA,gBAAgB;;AAEhB;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,MAAM;IACN,OAAO;IACP,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;AAClB;;AAEA,0BAA0B;;AAE1B;IACI,cAAc;IACd,oBAAoB;IACpB,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,iCAAiC;IACjC,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,yBAAyB;;AAEzB;IACI,yBAAyB;IACzB,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,iCAAiC;IACjC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,yBAAyB;AAC7B",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');\r\n.back_color_main {\r\n    background-color: #f1fdfd;\r\n    height: 100vh;\r\n}\r\n\r\n.PageTitle_OrangeU {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(255, 166, 0);\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.PageTitle_U {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.bgimgtop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 0;\r\n    height: 41vh;\r\n    background-color: #f1fdfd;\r\n}\r\n\r\n.bgbottombluebar {\r\n    background-color: #00253a;\r\n    height: 11vh;\r\n}\r\n\r\n.pageDescription_Text {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 4.6vw;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    margin-top: 5%;\r\n    width: 80%;\r\n    margin: 5% 10%;\r\n    z-index: 1;\r\n}\r\n\r\n/* popUp Style */\r\n\r\n.popup_container {\r\n    align-self: center;\r\n    width: 75vw;\r\n    display: grid;\r\n}\r\n\r\n.popup_Title {\r\n    font-size: 3vh;\r\n    text-align: center;\r\n    padding: 2vh 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.popup_Text {\r\n    font-size: 2.4vh;\r\n    text-align: center;\r\n    padding: 3vh 0;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n.popup_source {\r\n    font-size: 2.1vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #f7941d;\r\n}\r\n\r\n.popup {\r\n    background-color: #f1fdfd;\r\n    z-index: 200;\r\n    padding: 3vh 5vw;\r\n    border-radius: 2vw;\r\n    border-color: #f7941d;\r\n    border-width: 1vw;\r\n    border-style: solid;\r\n}\r\n\r\n.popup_bg {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #000000df;\r\n    z-index: 200;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.button_container {\r\n    align-self: center;\r\n}\r\n\r\n.button_text {\r\n    font-size: 2.5vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n/* Continue Button Style */\r\n\r\n.continue_button_Orange {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: #f7941d;\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.continue_button_Green {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: rgb(5, 138, 27);\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.popup_continue_buttonContainer {\r\n    display: grid;\r\n    padding: 4.2vh 0;\r\n}\r\n\r\n/* Options Button Style */\r\n\r\n.option_button_Orange {\r\n    background-color: #f7941d;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n}\r\n\r\n.option_button_Green {\r\n    background-color: #72c84c;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n}\r\n\r\n.rotateimg180 {\r\n    display: inline-flex;\r\n    -webkit-transform: rotate(180deg);\r\n    -moz-transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n    -o-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n}"],sourceRoot:""}]),r.a=A},441:function(n,r,e){"use strict";e.r(r);var t=e(1),o=e.n(t),a=e(145),A=e.n(a),i=(e(203),e(433),e(79)),l="#0062ff",c=i.default.div.withConfig({displayName:"Loader__Wrapper",componentId:"sc-132zml8-0"})(["display:flex;justify-content:center;align-items:center;height:",";margin:0 auto;"],(function(n){return"none"===n.height?"none":"98vh"})),d=i.default.svg.withConfig({displayName:"Loader__Svg",componentId:"sc-132zml8-1"})(["@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(270deg);}}animation:rotate 1.4s linear infinite;"]),s=i.default.circle.withConfig({displayName:"Loader__Circle",componentId:"sc-132zml8-2"})(["@keyframes colors{0%{stroke:",";}100%{stroke:",";}}@keyframes dash{0%{stroke-dashoffset:187;}50%{stroke-dashoffset:46.75;transform:rotate(135deg);}100%{stroke-dashoffset:187;transform:rotate(450deg);}}stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;animation:dash 1.4s ease-in-out infinite,colors 5.6s ease-in-out infinite;"],l,l),u=function(n){return o.a.createElement(c,n,o.a.createElement(d,{width:"30px",height:"30px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement(s,{fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))},f=e(81),g=e(14),p=e(191),B=e(449),h=e(450),C=e(138),I=e.n(C),m=e(135),b={insert:"head",singleton:!1},v=(I()(m.a,b),m.a.locals,o.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(18)]).then(e.bind(null,814))}))),y=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(23),e.e(26),e.e(12)]).then(e.bind(null,815))})),w=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(1),e.e(15)]).then(e.bind(null,816))})),k=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(1),e.e(19)]).then(e.bind(null,817))})),x=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(1),e.e(14)]).then(e.bind(null,818))})),E=o.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(20)]).then(e.bind(null,812))})),_=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(11),e.e(21),e.e(22),e.e(13)]).then(e.bind(null,811))})),z=o.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(25)]).then(e.bind(null,819))})),P=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(1),e.e(16)]).then(e.bind(null,820))})),O=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(1),e.e(17)]).then(e.bind(null,813))})),j=o.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(24)]).then(e.bind(null,821))})),S=function(){return o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(u,null)},o.a.createElement(f.b,null,o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/"},o.a.createElement(E,null)),o.a.createElement(g.a,{exact:!0,path:"/ActivityScreen/:id"},o.a.createElement(_,null)),o.a.createElement(g.a,{exact:!0,path:"/ClueListScreen"},o.a.createElement(x,null)),o.a.createElement(g.a,{exact:!0,path:"/TaskScreen/:id"},o.a.createElement(v,null)),o.a.createElement(g.a,{exact:!0,path:"/QuizScreen/:id"},o.a.createElement(k,null)),o.a.createElement(g.a,{exact:!0,path:"/CluesScreen/:id"},o.a.createElement(y,null)),o.a.createElement(g.a,{exact:!0,path:"/Rewardscreen/:id"},o.a.createElement(w,null)),o.a.createElement(g.a,{exact:!0,path:"/StartScreen"},o.a.createElement(z,null)),o.a.createElement(g.a,{exact:!0,path:"/CompletionScreen"},o.a.createElement(j,null)),o.a.createElement(g.a,{exact:!0,path:"/VideoScreen/:id"},o.a.createElement(O,null)),o.a.createElement(g.a,{exact:!0,path:"/TaskListScreen"},o.a.createElement(B.a,{theme:Object(h.a)(p.blue)},o.a.createElement(P,null))))))},T=e(194);A.a.render(o.a.createElement(f.a,{forceRefresh:!0},o.a.createElement(T.Normalize,null),o.a.createElement(S,null)),document.getElementById("root"))}});
//# sourceMappingURL=main~21833f8f.2b471e4001db83e9a358.js.map