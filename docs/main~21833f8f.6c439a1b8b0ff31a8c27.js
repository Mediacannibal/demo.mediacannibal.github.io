!function(n){function r(r){for(var t,A,a=r[0],l=r[1],c=r[2],s=0,f=[];s<a.length;s++)A=a[s],Object.prototype.hasOwnProperty.call(o,A)&&o[A]&&f.push(o[A][0]),o[A]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(d&&d(r);f.length;)f.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var n,r=0;r<i.length;r++){for(var e=i[r],t=!0,a=1;a<e.length;a++){var l=e[a];0!==o[l]&&(t=!1)}t&&(i.splice(r--,1),n=A(A.s=e[0]))}return n}var t={},o={6:0},i=[];function A(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,A),e.l=!0,e.exports}A.e=function(n){var r=[],e=o[n];if(0!==e)if(e)r.push(e[2]);else{var t=new Promise((function(r,t){e=o[n]=[r,t]}));r.push(e[2]=t);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,A.nc&&a.setAttribute("nonce",A.nc),a.src=function(n){return A.p+""+({}[n]||n)+".6c439a1b8b0ff31a8c27.js"}(n);var l=new Error;i=function(r){a.onerror=a.onload=null,clearTimeout(c);var e=o[n];if(0!==e){if(e){var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+t+": "+i+")",l.name="ChunkLoadError",l.type=t,l.request=i,e[1](l)}o[n]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(r)},A.m=n,A.c=t,A.d=function(n,r,e){A.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},A.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},A.t=function(n,r){if(1&r&&(n=A(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(A.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)A.d(e,t,function(r){return n[r]}.bind(null,t));return e},A.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return A.d(r,"a",r),r},A.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},A.p="./",A.oe=function(n){throw console.error(n),n};var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=r,a=a.slice();for(var c=0;c<a.length;c++)r(a[c]);var d=l;i.push([441,4,10,7,5,9,8]),e()}({135:function(n,r,e){"use strict";var t=e(139),o=e.n(t),i=e(140),A=e.n(i)()(o.a);A.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),A.push([n.i,".whenblock-ui__wrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 99999;\r\n    display: none;\r\n}\r\n\r\n/* @media screen and (min-aspect-ratio: 3/4) {\r\n    .full-content__wrapper {\r\n        overflow: hidden;\r\n        position: fixed;\r\n        height: 100%;\r\n        width: 100%;\r\n        background: #00253a;\r\n    }\r\n    .block-ui__wrapper {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 99999;\r\n        display: none;\r\n    }\r\n    .whenblock-ui__wrapper {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 99999;\r\n        color: #f7941d;\r\n        font-size: 2vw;\r\n        font-weight: 500;\r\n        font-family: poppins;\r\n        display: block;\r\n        display: -webkit-box;\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        flex-direction: column;\r\n        -webkit-box-pack: center;\r\n        -webkit-justify-content: center;\r\n        -moz-box-pack: center;\r\n        -ms-flex-pack: center;\r\n        justify-content: center;\r\n        -webkit-box-align: center;\r\n        -webkit-align-items: center;\r\n        -moz-box-align: center;\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n    }\r\n} */\r\n\r\n@keyframes zoominout {\r\n    0% {\r\n        transform: scale(1, 1);\r\n    }\r\n    50% {\r\n        transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n        transform: scale(1, 1);\r\n    }\r\n}\r\n\r\n.back_color_main {\r\n    background-color: #f1fdfd;\r\n    height: 100vh;\r\n}\r\n\r\n.PageTitle_OrangeU {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(255, 166, 0);\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.PageTitle_U {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.bgimgtop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 0;\r\n    height: 41vh;\r\n    background-color: #f1fdfd;\r\n}\r\n\r\n.bgbottombluebar {\r\n    background-color: #00253a;\r\n    height: 11vh;\r\n}\r\n\r\n.pageDescription_Text {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 4.6vw;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    width: 80%;\r\n    margin: 5% 10%;\r\n    z-index: 1;\r\n}\r\n\r\n/* popUp Style */\r\n\r\n.popup_container {\r\n    align-self: center;\r\n    width: 75vw;\r\n    display: grid;\r\n}\r\n\r\n.popup_Title {\r\n    font-size: 3vh;\r\n    text-align: center;\r\n    padding: 2vh 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.popup_Text {\r\n    font-size: 2.4vh;\r\n    text-align: center;\r\n    padding: 3vh 0;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n.popup_source {\r\n    font-size: 2.1vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #f7941d;\r\n}\r\n\r\n.popup {\r\n    background-color: #f1fdfd;\r\n    z-index: 200;\r\n    padding: 3vh 5vw;\r\n    border-radius: 2vw;\r\n    border-color: #f7941d;\r\n    border-width: 1vw;\r\n    border-style: solid;\r\n}\r\n\r\n.popup_bg {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #000000df;\r\n    z-index: 200;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.button_container {\r\n    align-self: center;\r\n}\r\n\r\n.button_text {\r\n    font-size: 2.5vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n/* Continue Button Style */\r\n\r\n.continue_button_Orange {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: #f7941d;\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.continue_button_Green {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: rgb(5, 138, 27);\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.popup_continue_buttonContainer {\r\n    display: grid;\r\n    padding: 4.2vh 0;\r\n}\r\n\r\n/* Options Button Style */\r\n\r\n.option_button_Orange {\r\n    background-color: #f7941d;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.option_button_Green {\r\n    background-color: #72c84c;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.rotateimg180 {\r\n    display: inline-flex;\r\n    -webkit-transform: rotate(180deg);\r\n    -moz-transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n    -o-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n}\r\n\r\n/* forward arrow button */\r\n\r\n.forword_button_position{\r\n    display: grid;\r\n    align-self: center;\r\n}\r\n\r\n.forword_button {\r\n    width: 8vw;\r\n    height: 6vh;\r\n    object-fit: contain;\r\n    justify-self: center;\r\n}","",{version:3,sources:["webpack://./src/components/app.css"],names:[],mappings:"AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,cAAc;IACd,aAAa;AACjB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA8CG;;AAEH;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,0BAA0B;IAC9B;IACA;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;IACd,0BAA0B;IAC1B,uCAAuC;IACvC,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;IACd,0BAA0B;IAC1B,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,UAAU;IACV,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,cAAc;IACd,UAAU;AACd;;AAEA,gBAAgB;;AAEhB;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,MAAM;IACN,OAAO;IACP,2BAA2B;IAC3B,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;AAClB;;AAEA,0BAA0B;;AAE1B;IACI,cAAc;IACd,oBAAoB;IACpB,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,iCAAiC;IACjC,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA,yBAAyB;;AAEzB;IACI,yBAAyB;IACzB,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,iCAAiC;IACjC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA,yBAAyB;;AAEzB;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,oBAAoB;AACxB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');\r\n.whenblock-ui__wrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 99999;\r\n    display: none;\r\n}\r\n\r\n/* @media screen and (min-aspect-ratio: 3/4) {\r\n    .full-content__wrapper {\r\n        overflow: hidden;\r\n        position: fixed;\r\n        height: 100%;\r\n        width: 100%;\r\n        background: #00253a;\r\n    }\r\n    .block-ui__wrapper {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 99999;\r\n        display: none;\r\n    }\r\n    .whenblock-ui__wrapper {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 99999;\r\n        color: #f7941d;\r\n        font-size: 2vw;\r\n        font-weight: 500;\r\n        font-family: poppins;\r\n        display: block;\r\n        display: -webkit-box;\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        flex-direction: column;\r\n        -webkit-box-pack: center;\r\n        -webkit-justify-content: center;\r\n        -moz-box-pack: center;\r\n        -ms-flex-pack: center;\r\n        justify-content: center;\r\n        -webkit-box-align: center;\r\n        -webkit-align-items: center;\r\n        -moz-box-align: center;\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n    }\r\n} */\r\n\r\n@keyframes zoominout {\r\n    0% {\r\n        transform: scale(1, 1);\r\n    }\r\n    50% {\r\n        transform: scale(1.1, 1.1);\r\n    }\r\n    100% {\r\n        transform: scale(1, 1);\r\n    }\r\n}\r\n\r\n.back_color_main {\r\n    background-color: #f1fdfd;\r\n    height: 100vh;\r\n}\r\n\r\n.PageTitle_OrangeU {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-decoration-color: rgb(255, 166, 0);\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.PageTitle_U {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 6vw;\r\n    text-decoration: underline;\r\n    text-underline-offset: 0.6vh;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.bgimgtop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 0;\r\n    height: 41vh;\r\n    background-color: #f1fdfd;\r\n}\r\n\r\n.bgbottombluebar {\r\n    background-color: #00253a;\r\n    height: 11vh;\r\n}\r\n\r\n.pageDescription_Text {\r\n    display: block;\r\n    color: #01003c;\r\n    font-size: 4.6vw;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    width: 80%;\r\n    margin: 5% 10%;\r\n    z-index: 1;\r\n}\r\n\r\n/* popUp Style */\r\n\r\n.popup_container {\r\n    align-self: center;\r\n    width: 75vw;\r\n    display: grid;\r\n}\r\n\r\n.popup_Title {\r\n    font-size: 3vh;\r\n    text-align: center;\r\n    padding: 2vh 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.popup_Text {\r\n    font-size: 2.4vh;\r\n    text-align: center;\r\n    padding: 3vh 0;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n.popup_source {\r\n    font-size: 2.1vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #f7941d;\r\n}\r\n\r\n.popup {\r\n    background-color: #f1fdfd;\r\n    z-index: 200;\r\n    padding: 3vh 5vw;\r\n    border-radius: 2vw;\r\n    border-color: #f7941d;\r\n    border-width: 1vw;\r\n    border-style: solid;\r\n}\r\n\r\n.popup_bg {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #000000df;\r\n    z-index: 200;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.button_container {\r\n    align-self: center;\r\n}\r\n\r\n.button_text {\r\n    font-size: 2.5vh;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    color: #01003c;\r\n}\r\n\r\n/* Continue Button Style */\r\n\r\n.continue_button_Orange {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: #f7941d;\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.continue_button_Green {\r\n    padding: 1.5vh;\r\n    justify-self: center;\r\n    background-color: rgb(5, 138, 27);\r\n    border-radius: 2vw;\r\n    border-color: transparent;\r\n}\r\n\r\n.popup_continue_buttonContainer {\r\n    display: grid;\r\n    padding: 4.2vh 0;\r\n}\r\n\r\n/* Options Button Style */\r\n\r\n.option_button_Orange {\r\n    background-color: #f7941d;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.option_button_Green {\r\n    background-color: #72c84c;\r\n    width: 60vw;\r\n    font-size: 4vw;\r\n    font-weight: 500;\r\n    padding: 2vh 0;\r\n    border-radius: 1.5vw;\r\n    margin: 1vh 0;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.rotateimg180 {\r\n    display: inline-flex;\r\n    -webkit-transform: rotate(180deg);\r\n    -moz-transform: rotate(180deg);\r\n    -ms-transform: rotate(180deg);\r\n    -o-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n}\r\n\r\n/* forward arrow button */\r\n\r\n.forword_button_position{\r\n    display: grid;\r\n    align-self: center;\r\n}\r\n\r\n.forword_button {\r\n    width: 8vw;\r\n    height: 6vh;\r\n    object-fit: contain;\r\n    justify-self: center;\r\n}"],sourceRoot:""}]),r.a=A},441:function(n,r,e){"use strict";e.r(r);var t=e(1),o=e.n(t),i=e(145),A=e.n(i),a=(e(203),e(433),e(79)),l="#0062ff",c=a.default.div.withConfig({displayName:"Loader__Wrapper",componentId:"sc-132zml8-0"})(["display:flex;justify-content:center;align-items:center;height:",";margin:0 auto;"],(function(n){return"none"===n.height?"none":"98vh"})),d=a.default.svg.withConfig({displayName:"Loader__Svg",componentId:"sc-132zml8-1"})(["@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(270deg);}}animation:rotate 1.4s linear infinite;"]),s=a.default.circle.withConfig({displayName:"Loader__Circle",componentId:"sc-132zml8-2"})(["@keyframes colors{0%{stroke:",";}100%{stroke:",";}}@keyframes dash{0%{stroke-dashoffset:187;}50%{stroke-dashoffset:46.75;transform:rotate(135deg);}100%{stroke-dashoffset:187;transform:rotate(450deg);}}stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;animation:dash 1.4s ease-in-out infinite,colors 5.6s ease-in-out infinite;"],l,l),f=function(n){return o.a.createElement(c,n,o.a.createElement(d,{width:"30px",height:"30px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement(s,{fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))},p=e(81),u=e(14),g=e(191),h=e(449),B=e(450),C=e(138),b=e.n(C),m=e(135),I={insert:"head",singleton:!1},w=(b()(m.a,I),m.a.locals,o.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(19)]).then(e.bind(null,812))}))),y=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(23),e.e(26),e.e(12)]).then(e.bind(null,813))})),x=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(1),e.e(15)]).then(e.bind(null,814))})),v=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(1),e.e(18)]).then(e.bind(null,815))})),k=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(1),e.e(14)]).then(e.bind(null,816))})),_=o.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(20)]).then(e.bind(null,810))})),z=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(11),e.e(21),e.e(22),e.e(13)]).then(e.bind(null,809))})),E=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(1),e.e(24)]).then(e.bind(null,817))})),j=o.a.lazy((function(){return Promise.all([e.e(0),e.e(2),e.e(3),e.e(1),e.e(16)]).then(e.bind(null,818))})),P=o.a.lazy((function(){return Promise.all([e.e(0),e.e(3),e.e(1),e.e(17)]).then(e.bind(null,811))})),O=o.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(25)]).then(e.bind(null,819))})),S=function(){return o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(f,null)},o.a.createElement(p.b,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/"},o.a.createElement(_,null)),o.a.createElement(u.a,{exact:!0,path:"/ActivityScreen/:id"},o.a.createElement(z,null)),o.a.createElement(u.a,{exact:!0,path:"/ClueListScreen"},o.a.createElement(k,null)),o.a.createElement(u.a,{exact:!0,path:"/TaskScreen/:id"},o.a.createElement(w,null)),o.a.createElement(u.a,{exact:!0,path:"/QuizScreen/:id"},o.a.createElement(v,null)),o.a.createElement(u.a,{exact:!0,path:"/CluesScreen/:id"},o.a.createElement(y,null)),o.a.createElement(u.a,{exact:!0,path:"/Rewardscreen/:id"},o.a.createElement(x,null)),o.a.createElement(u.a,{exact:!0,path:"/StartScreen"},o.a.createElement(E,null)),o.a.createElement(u.a,{exact:!0,path:"/CompletionScreen"},o.a.createElement(O,null)),o.a.createElement(u.a,{exact:!0,path:"/VideoScreen/:id"},o.a.createElement(P,null)),o.a.createElement(u.a,{exact:!0,path:"/TaskListScreen"},o.a.createElement(h.a,{theme:Object(B.a)(g.blue)},o.a.createElement(j,null))))))},U=e(194);A.a.render(o.a.createElement(p.a,{forceRefresh:!0},o.a.createElement(U.Normalize,null),o.a.createElement(S,null)),document.getElementById("root"))}});
//# sourceMappingURL=main~21833f8f.6c439a1b8b0ff31a8c27.js.map