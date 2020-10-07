(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),i=(a(0),a(254)),o={id:"staking-commission-management",title:"Commission Management",keywords:["staking","ssn","smart contract","zilliqa","node operator","commission"],description:"Commission management"},c={id:"staking/phase1/ssn-operator/staking-commission-management",isDocsHomePage:!1,title:"Commission Management",description:"Commission management",source:"@site/docs/staking/phase1/ssn-operator/staking-ssn-commission-management.md",permalink:"/docs/staking/phase1/ssn-operator/staking-commission-management",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/staking/phase1/ssn-operator/staking-ssn-commission-management.md",sidebar:"StakingSidebar",previous:{title:"Enrolment of SSN into Staking Smart Contract",permalink:"/docs/staking/phase1/ssn-operator/staking-ssn-enrollment"},next:{title:"SSN Maintenance (WIP)",permalink:"/docs/staking/phase1/ssn-operator/staking-ssn-maintenance"}},b=[{value:"Update Commission Rate",id:"update-commission-rate",children:[{value:"Description",id:"description",children:[]},{value:"Pre-condition",id:"pre-condition",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Transition",id:"transition",children:[]},{value:"Sample Code",id:"sample-code",children:[]}]},{value:"Withdraw Commission",id:"withdraw-commission",children:[{value:"Description",id:"description-1",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Transition",id:"transition-1",children:[]},{value:"Sample Code",id:"sample-code-1",children:[]}]},{value:"Update Address for Receiving Commission",id:"update-address-for-receiving-commission",children:[{value:"Description",id:"description-2",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Transition",id:"transition-2",children:[]},{value:"Sample Code",id:"sample-code-2",children:[]}]}],s={rightToc:b};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"The operations available to delegators on the smart contract are as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#update-commission-rate"}),"Update commission rate")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#withdraw-commission"}),"Withdraw commission")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#update-address-for-receiving-commission"}),"Update address for receiving commission"))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Commission and commission change rate in the staking smart contract are represented by ",Object(i.b)("inlineCode",{parentName:"p"},"uint128"),". The last 7 digits represent the decimal points. As such, if the percentage is 5.2%, then the value of the commission will be 5.2 x 10^7 represented as an integer)."))),Object(i.b)("h2",{id:"update-commission-rate"},"Update Commission Rate"),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"UpdateComm")," allows the SSN operator to update the commission to a new rate. The delta of rate changes must not exceed ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-11.md#staking-parameters"}),"max commission change rate")," (",Object(i.b)("inlineCode",{parentName:"p"},"maxcommchangerate"),") per cycle. This is to prevent flash changing and allow for a more gradual adjustment of the commission rate. Finally, the new rate must be less than or equal to ",Object(i.b)("inlineCode",{parentName:"p"},"maxcommchangerate"),"."),Object(i.b)("h3",{id:"pre-condition"},"Pre-condition"),Object(i.b)("p",null,"The node operator must not have change commission rate in the current cycle."),Object(i.b)("h3",{id:"parameter"},"Parameter"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"new_rate"),": the new commission rate"),Object(i.b)("h3",{id:"transition"},"Transition"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"transition UpdateComm(new_rate: Uint128)\n")),Object(i.b)("h3",{id:"sample-code"},"Sample Code"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Language"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Link to Sample Code"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NodeJS"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Java"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Golang"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")))),Object(i.b)("h2",{id:"withdraw-commission"},"Withdraw Commission"),Object(i.b)("h3",{id:"description-1"},"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"WithdrawComm")," allows the SSN operator to withdraw all the commission earned to the commission receiving address ",Object(i.b)("inlineCode",{parentName:"p"},"rec_addr"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Regardless of whether the receiving address has been updated or not, this operation can only be called from the SSN operator address."))),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h3",{id:"transition-1"},"Transition"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"transition WithdrawComm()\n")),Object(i.b)("h3",{id:"sample-code-1"},"Sample Code"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Language"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Link to Sample Code"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NodeJS"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Java"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Golang"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")))),Object(i.b)("h2",{id:"update-address-for-receiving-commission"},"Update Address for Receiving Commission"),Object(i.b)("h3",{id:"description-2"},"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"UpdateReceivedAddr")," changes the receiving commission address to a new address."),Object(i.b)("h3",{id:"parameters-1"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"new_addr"),": the new address for receiving commission when calling ",Object(i.b)("inlineCode",{parentName:"p"},"WithdrawComm")," transition"),Object(i.b)("h3",{id:"transition-2"},"Transition"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"transition UpdateReceivedAddr(new_addr: ByStr20)\n")),Object(i.b)("h3",{id:"sample-code-2"},"Sample Code"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Language"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Link to Sample Code"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NodeJS"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Java"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Golang"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coming soon")))))}m.isMDXComponent=!0},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=m(a),p=n,O=l["".concat(o,".").concat(p)]||l[p]||d[p]||i;return a?r.a.createElement(O,c(c({ref:t},s),{},{components:a})):r.a.createElement(O,c({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);