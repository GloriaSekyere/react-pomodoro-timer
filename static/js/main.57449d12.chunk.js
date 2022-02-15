(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{24:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),r=c(11),l=c.n(r),s=c(3),a=(c(9),c(5)),i=c(0),d=function(e){return Object(i.jsx)("button",{onClick:e.handleClick,className:"  \n        bg-".concat(e.backgroundColor,"\n        hover:bg-").concat(e.hoverBackgroundColor,"\n        border-").concat(e.borderColor,"\n        before:bg-").concat(e.beforeColor,"\n        after:bg-").concat(e.afterColor,"\n        text-").concat(e.textColor,"\n        control-button"),children:e.children})},b=function(){return Object(i.jsx)("nav",{className:"bg-gray-100 p-9 border-b-2 border-gray-300 md:h-30 md:p-0 md:flex md:flex-shrink-0 md:items-center",children:Object(i.jsxs)("div",{className:"md:flex md:justify-between md:w-custom60 md:px-8 lg:p-0 md:m-auto",children:[Object(i.jsx)(s.b,{to:"/",className:"block text-4xl font-bold",children:"TomatoTimer"}),Object(i.jsxs)("div",{className:"divide-y divide-gray-600 md:divide-y-0 md:divide-x md:divide-gray-600 mt-8 md:flex md:justify-end md:flex-grow md:mt-0",children:[Object(i.jsx)(s.b,{to:"/log",className:"nav-link",children:"Log"}),Object(i.jsx)(s.b,{to:"/faq",className:"nav-link",children:"FAQ"}),Object(i.jsx)(s.b,{to:"/settings",className:"nav-link",children:"Settings"}),Object(i.jsx)(s.b,{to:"/",className:"nav-link",children:"Tweet about us!"})]})]})})};var j=function(e){return Object(i.jsx)("button",{onClick:e.handleClick,className:"blue-button w-".concat(e.width," py-").concat(e.padding," text-").concat(e.size," lg:text-").concat(e.lgSize,"\n      mt-").concat(e.marginTop," lg:w-").concat(e.lgWidth),children:e.content})},m=function(e){return Object(i.jsx)("div",{className:"bg-gray-200 w-11/12 h-auto border-solid border-1 border-gray-400 mx-auto mt-6 p-6 lg:w-custom18",children:e.children})},x=function(){return Object(i.jsxs)(m,{children:[Object(i.jsx)("p",{className:"font-bold text-lg",children:"Keyboard Shortcuts"}),Object(i.jsxs)("ul",{className:"list-disc ml-6 mt-2",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("kbd",{className:"font-bold",children:"SPACE"})," Start or Stop the timer"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("kbd",{className:"font-bold",children:"ALT + P"})," Pomodoro"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("kbd",{className:"font-bold",children:"ALT + S"})," Short Break"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("kbd",{className:"font-bold",children:"ALT + L"})," Long Break"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("kbd",{className:"font-bold",children:"ALT + R"})," Reset Timer"]})]})]})},u=function(){return Object(i.jsxs)(m,{children:[Object(i.jsx)("p",{className:"font-bold text-lg",children:"Notifications"}),Object(i.jsx)("p",{className:"text-gray-500 py-2",children:"You can change the audio tone and volume via Settings "}),Object(i.jsx)("p",{className:"text-gray-500 py-2",children:"Desktop Notifications are currently supported in Chrome, Firefox and Safari"}),Object(i.jsx)(j,{size:"sm",padding:"1",content:"Enable Desktop Alerts",marginTop:"2",lgWidth:"40",lgSize:"xs"})]})},h=function(){return Object(i.jsxs)(m,{children:[Object(i.jsx)("p",{className:"font-bold text-lg",children:"Settings"}),Object(i.jsx)("p",{className:"text-gray-500 py-2",children:"You can set custom times, audio tone and volume via Settings."})]})};var g=function(){var e=Object(o.useState)(1500),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)(c),l=Object(a.a)(r,2),s=l[0],m=l[1],g=Object(o.useState)(!1),f=Object(a.a)(g,2),O=f[0],p=f[1];Object(o.useEffect)((function(){if(O){var e=setInterval((function(){m((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}}),[O]);var k=Math.floor(s/60),v=Math.ceil(s%60);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{}),Object(i.jsxs)("div",{className:"pt-7 px-4 divide-x divide-blue-300 flex  justify-center items-center w-full mx-auto md:w-custom50",children:[Object(i.jsx)(j,{width:"1/3",padding:"1.5",content:"Pomodoro",handleClick:function(){n(1500),m(1500),p(!0)}}),Object(i.jsx)(j,{width:"1/3",padding:"1.5",content:"Short Break",handleClick:function(){n(300),m(300),p(!0)}}),Object(i.jsx)(j,{width:"1/3",padding:"1.5",content:"Long Break",handleClick:function(){n(600),m(600),p(!0)}})]}),Object(i.jsx)("div",{className:"my-10 mx-auto w-full h-30 flex justify-center items-center",children:Object(i.jsxs)("span",{className:"font-bold block text-8xl",children:[k.toString().length<2?"0".concat(k):k,":",v.toString().length<2?"0".concat(v):v]})}),Object(i.jsxs)("div",{className:"flex flex-col w-full px-8 mx-auto md:justify-between md:flex-row md:w-custom26 lg:w-custom28",children:[Object(i.jsx)(d,{backgroundColor:"green-200",hoverBackgroundColor:"green-300",borderColor:"green-400",beforeColor:"green-100",afterColor:"green-300",textColor:"white",handleClick:function(){p(!0)},children:"Start"}),Object(i.jsx)(d,{backgroundColor:"red-200",hoverBackgroundColor:"red-300",borderColor:"red-400",beforeColor:"red-100",afterColor:"red-300",textColor:"white",handleClick:function(){p(!1)},children:"Stop"}),Object(i.jsx)(d,{backgroundColor:"gray-300",hoverBackgroundColor:"gray-400",borderColor:"gray-400",beforeColor:"gray-100",afterColor:"gray-400",handleClick:function(){switch(c){case 1500:case 300:case 600:m(c)}},children:"Reset"})]}),Object(i.jsxs)("div",{className:"flex flex-col w-full mx-auto lg:flex-row lg:justify-between lg:items-start lg:w-custom60",children:[Object(i.jsx)(x,{}),Object(i.jsx)(u,{}),Object(i.jsx)(h,{})]})]})};l.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(s.a,{children:Object(i.jsx)(g,{})})}),document.getElementById("root"))},9:function(e,t,c){}},[[24,1,2]]]);
//# sourceMappingURL=main.57449d12.chunk.js.map