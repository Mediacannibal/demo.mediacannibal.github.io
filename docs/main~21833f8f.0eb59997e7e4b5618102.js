!function(n){function e(e){for(var o,A,i=e[0],l=e[1],c=e[2],s=0,u=[];s<i.length;s++)A=i[s],Object.prototype.hasOwnProperty.call(r,A)&&r[A]&&u.push(r[A][0]),r[A]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(d&&d(e);u.length;)u.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),n=A(A.s=t[0]))}return n}var o={},r={6:0},a=[];function A(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,A),t.l=!0,t.exports}A.e=function(n){var e=[],t=r[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,o){t=r[n]=[e,o]}));e.push(t[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,A.nc&&i.setAttribute("nonce",A.nc),i.src=function(n){return A.p+""+({}[n]||n)+".0eb59997e7e4b5618102.js"}(n);var l=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(c);var t=r[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,t[1](l)}r[n]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},A.m=n,A.c=o,A.d=function(n,e,t){A.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},A.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},A.t=function(n,e){if(1&e&&(n=A(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)A.d(t,o,function(e){return n[e]}.bind(null,o));return t},A.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return A.d(e,"a",e),e},A.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},A.p="./",A.oe=function(n){throw console.error(n),n};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;a.push([441,4,10,7,5,9,8]),t()}({135:function(n,e,t){"use strict";var o=t(139),r=t.n(o),a=t(140),A=t.n(a)()(r.a);A.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),A.push([n.i,".back_color_main {\n    background-color: #f1fdfd;\n    height: 100vh;\n}\n\n.PageTitle_OrangeU {\n    display: block;\n    color: #01003c;\n    font-size: 6vw;\n    text-decoration: underline;\n    text-decoration-color: rgb(255, 166, 0);\n    text-underline-offset: 0.6vh;\n    font-weight: 600;\n    text-align: center;\n    z-index: 1;\n}\n\n.PageTitle_U {\n    display: block;\n    color: #01003c;\n    font-size: 6vw;\n    text-decoration: underline;\n    text-underline-offset: 0.6vh;\n    font-weight: 600;\n    text-align: center;\n}\n\n.bgimgtop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 0;\n    height: 41vh;\n    background-color: #f1fdfd;\n}\n\n.bgbottombluebar {\n    background-color: #00253a;\n    height: 11vh;\n}\n\n.pageDescription_Text {\n    display: block;\n    color: #01003c;\n    font-size: 4.6vw;\n    text-align: center;\n    font-weight: 500;\n    margin-top: 5%;\n    width: 80%;\n    margin: 5% 10%;\n    z-index: 1;\n}\n\n/* popUp Style */\n\n.popup_container {\n    align-self: center;\n    width: 75vw;\n    display: grid;\n}\n\n.popup_Title {\n    font-size: 3vh;\n    text-align: center;\n    padding: 2vh 0;\n    font-weight: 600;\n}\n\n.popup_Text {\n    font-size: 2.4vh;\n    text-align: center;\n    padding: 3vh 0;\n    font-weight: 500;\n    color: #01003c;\n}\n\n.popup_source {\n    font-size: 2.1vh;\n    text-align: center;\n    font-weight: 500;\n    color: #f7941d;\n}\n\n.popup {\n    background-color: #f1fdfd;\n    z-index: 200;\n    padding: 3vh 5vw;\n    border-radius: 2vw;\n    border-color: #f7941d;\n    border-width: 1vw;\n    border-style: solid;\n}\n\n.popup_bg {\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: #000000df;\n    z-index: 200;\n    display: flex;\n    justify-content: center;\n}\n\n.button_container {\n    align-self: center;\n}\n\n.button_text {\n    font-size: 2.5vh;\n    text-align: center;\n    font-weight: 500;\n    color: #01003c;\n}\n\n/* Continue Button Style */\n\n.continue_button_Orange {\n    padding: 1.5vh;\n    justify-self: center;\n    background-color: #f7941d;\n    border-radius: 2vw;\n    border-color: transparent;\n}\n\n.continue_button_Green {\n    padding: 1.5vh;\n    justify-self: center;\n    background-color: rgb(5, 138, 27);\n    border-radius: 2vw;\n    border-color: transparent;\n}\n\n.popup_continue_buttonContainer {\n    display: grid;\n    padding: 4.2vh 0;\n}\n\n/* Options Button Style */\n\n.option_button_Orange {\n    background-color: #f7941d;\n    width: 60vw;\n    font-size: 4vw;\n    font-weight: 500;\n    padding: 2vh 0;\n    border-radius: 1.5vw;\n    margin: 1vh 0;\n    text-align: center;\n}\n\n.option_button_Green {\n    background-color: #72c84c;\n    width: 60vw;\n    font-size: 4vw;\n    font-weight: 500;\n    padding: 2vh 0;\n    border-radius: 1.5vw;\n    margin: 1vh 0;\n    text-align: center;\n}\n\n.rotateimg180 {\n    display: inline-flex;\n    -webkit-transform: rotate(180deg);\n    -moz-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    -o-transform: rotate(180deg);\n    transform: rotate(180deg);\n}","",{version:3,sources:["webpack://./src/components/app.css"],names:[],mappings:"AACA;IACI,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;IACd,0BAA0B;IAC1B,uCAAuC;IACvC,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;IACd,0BAA0B;IAC1B,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,UAAU;IACV,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,UAAU;IACV,cAAc;IACd,UAAU;AACd;;AAEA,gBAAgB;;AAEhB;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,MAAM;IACN,OAAO;IACP,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;AAClB;;AAEA,0BAA0B;;AAE1B;IACI,cAAc;IACd,oBAAoB;IACpB,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,iCAAiC;IACjC,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,yBAAyB;;AAEzB;IACI,yBAAyB;IACzB,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,iCAAiC;IACjC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,yBAAyB;AAC7B",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');\n.back_color_main {\n    background-color: #f1fdfd;\n    height: 100vh;\n}\n\n.PageTitle_OrangeU {\n    display: block;\n    color: #01003c;\n    font-size: 6vw;\n    text-decoration: underline;\n    text-decoration-color: rgb(255, 166, 0);\n    text-underline-offset: 0.6vh;\n    font-weight: 600;\n    text-align: center;\n    z-index: 1;\n}\n\n.PageTitle_U {\n    display: block;\n    color: #01003c;\n    font-size: 6vw;\n    text-decoration: underline;\n    text-underline-offset: 0.6vh;\n    font-weight: 600;\n    text-align: center;\n}\n\n.bgimgtop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 0;\n    height: 41vh;\n    background-color: #f1fdfd;\n}\n\n.bgbottombluebar {\n    background-color: #00253a;\n    height: 11vh;\n}\n\n.pageDescription_Text {\n    display: block;\n    color: #01003c;\n    font-size: 4.6vw;\n    text-align: center;\n    font-weight: 500;\n    margin-top: 5%;\n    width: 80%;\n    margin: 5% 10%;\n    z-index: 1;\n}\n\n/* popUp Style */\n\n.popup_container {\n    align-self: center;\n    width: 75vw;\n    display: grid;\n}\n\n.popup_Title {\n    font-size: 3vh;\n    text-align: center;\n    padding: 2vh 0;\n    font-weight: 600;\n}\n\n.popup_Text {\n    font-size: 2.4vh;\n    text-align: center;\n    padding: 3vh 0;\n    font-weight: 500;\n    color: #01003c;\n}\n\n.popup_source {\n    font-size: 2.1vh;\n    text-align: center;\n    font-weight: 500;\n    color: #f7941d;\n}\n\n.popup {\n    background-color: #f1fdfd;\n    z-index: 200;\n    padding: 3vh 5vw;\n    border-radius: 2vw;\n    border-color: #f7941d;\n    border-width: 1vw;\n    border-style: solid;\n}\n\n.popup_bg {\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: #000000df;\n    z-index: 200;\n    display: flex;\n    justify-content: center;\n}\n\n.button_container {\n    align-self: center;\n}\n\n.button_text {\n    font-size: 2.5vh;\n    text-align: center;\n    font-weight: 500;\n    color: #01003c;\n}\n\n/* Continue Button Style */\n\n.continue_button_Orange {\n    padding: 1.5vh;\n    justify-self: center;\n    background-color: #f7941d;\n    border-radius: 2vw;\n    border-color: transparent;\n}\n\n.continue_button_Green {\n    padding: 1.5vh;\n    justify-self: center;\n    background-color: rgb(5, 138, 27);\n    border-radius: 2vw;\n    border-color: transparent;\n}\n\n.popup_continue_buttonContainer {\n    display: grid;\n    padding: 4.2vh 0;\n}\n\n/* Options Button Style */\n\n.option_button_Orange {\n    background-color: #f7941d;\n    width: 60vw;\n    font-size: 4vw;\n    font-weight: 500;\n    padding: 2vh 0;\n    border-radius: 1.5vw;\n    margin: 1vh 0;\n    text-align: center;\n}\n\n.option_button_Green {\n    background-color: #72c84c;\n    width: 60vw;\n    font-size: 4vw;\n    font-weight: 500;\n    padding: 2vh 0;\n    border-radius: 1.5vw;\n    margin: 1vh 0;\n    text-align: center;\n}\n\n.rotateimg180 {\n    display: inline-flex;\n    -webkit-transform: rotate(180deg);\n    -moz-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    -o-transform: rotate(180deg);\n    transform: rotate(180deg);\n}"],sourceRoot:""}]),e.a=A},441:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),a=t(145),A=t.n(a),i=(t(203),t(433),t(79)),l="#0062ff",c=i.default.div.withConfig({displayName:"Loader__Wrapper",componentId:"sc-132zml8-0"})(["display:flex;justify-content:center;align-items:center;height:",";margin:0 auto;"],(function(n){return"none"===n.height?"none":"98vh"})),d=i.default.svg.withConfig({displayName:"Loader__Svg",componentId:"sc-132zml8-1"})(["@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(270deg);}}animation:rotate 1.4s linear infinite;"]),s=i.default.circle.withConfig({displayName:"Loader__Circle",componentId:"sc-132zml8-2"})(["@keyframes colors{0%{stroke:",";}100%{stroke:",";}}@keyframes dash{0%{stroke-dashoffset:187;}50%{stroke-dashoffset:46.75;transform:rotate(135deg);}100%{stroke-dashoffset:187;transform:rotate(450deg);}}stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;animation:dash 1.4s ease-in-out infinite,colors 5.6s ease-in-out infinite;"],l,l),u=function(n){return r.a.createElement(c,n,r.a.createElement(d,{width:"30px",height:"30px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement(s,{fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))},f=t(81),g=t(14),p=t(191),B=t(449),h=t(450),C=t(138),I=t.n(C),m=t(135),b={insert:"head",singleton:!1},v=(I()(m.a,b),m.a.locals,r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(18)]).then(t.bind(null,814))}))),y=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(23),t.e(26),t.e(12)]).then(t.bind(null,815))})),w=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(1),t.e(15)]).then(t.bind(null,816))})),k=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(1),t.e(19)]).then(t.bind(null,817))})),x=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(1),t.e(14)]).then(t.bind(null,818))})),E=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(20)]).then(t.bind(null,812))})),_=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(11),t.e(21),t.e(22),t.e(13)]).then(t.bind(null,811))})),z=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(25)]).then(t.bind(null,819))})),P=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(1),t.e(16)]).then(t.bind(null,820))})),O=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(1),t.e(17)]).then(t.bind(null,813))})),j=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(24)]).then(t.bind(null,821))})),S=function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(u,null)},r.a.createElement(f.b,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(E,null)),r.a.createElement(g.a,{exact:!0,path:"/ActivityScreen/:id"},r.a.createElement(_,null)),r.a.createElement(g.a,{exact:!0,path:"/ClueListScreen"},r.a.createElement(x,null)),r.a.createElement(g.a,{exact:!0,path:"/TaskScreen/:id"},r.a.createElement(v,null)),r.a.createElement(g.a,{exact:!0,path:"/QuizScreen/:id"},r.a.createElement(k,null)),r.a.createElement(g.a,{exact:!0,path:"/CluesScreen/:id"},r.a.createElement(y,null)),r.a.createElement(g.a,{exact:!0,path:"/Rewardscreen/:id"},r.a.createElement(w,null)),r.a.createElement(g.a,{exact:!0,path:"/StartScreen"},r.a.createElement(z,null)),r.a.createElement(g.a,{exact:!0,path:"/CompletionScreen"},r.a.createElement(j,null)),r.a.createElement(g.a,{exact:!0,path:"/VideoScreen/:id"},r.a.createElement(O,null)),r.a.createElement(g.a,{exact:!0,path:"/TaskListScreen"},r.a.createElement(B.a,{theme:Object(h.a)(p.blue)},r.a.createElement(P,null))))))},T=t(194);A.a.render(r.a.createElement(f.a,{forceRefresh:!0},r.a.createElement(T.Normalize,null),r.a.createElement(S,null)),document.getElementById("root"))}});
//# sourceMappingURL=main~21833f8f.0eb59997e7e4b5618102.js.map