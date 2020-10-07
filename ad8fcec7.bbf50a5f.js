(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),r=(a(0),a(254)),o={id:"staking-introduction",title:"Phase 0 Overview",keywords:["staking","overview","ssn","seed node","signing up","zilliqa"],description:"Staking Phase 0 Overview"},c={id:"staking/phase0/staking-introduction",isDocsHomePage:!1,title:"Phase 0 Overview",description:"Staking Phase 0 Overview",source:"@site/docs/staking/phase0/staking-introduction.md",permalink:"/docs/staking/phase0/staking-introduction",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/staking/phase0/staking-introduction.md",sidebar:"StakingSidebar",previous:{title:"Disclaimer",permalink:"/docs/staking/staking-disclaimer"},next:{title:"Setting up the SSN",permalink:"/docs/staking/phase0/staking-getting-started"}},s=[{value:"About Zilliqa Staking Program",id:"about-zilliqa-staking-program",children:[]},{value:"Who Can Run a Zilliqa SSN",id:"who-can-run-a-zilliqa-ssn",children:[]},{value:"Minimum Hardware Requirements",id:"minimum-hardware-requirements",children:[]},{value:"Signing Up As a Staked Seed Node Operator",id:"signing-up-as-a-staked-seed-node-operator",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Staking Phase 0 notice")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Phase 0 of Zilliqa Seed node Staking program will conclude on 8 Oct 2020. After the mainnet upgrade to ",Object(r.b)("inlineCode",{parentName:"p"},"v6.4.0"),", the verifier of the staking will no longer be active. All node operator are adviced to withdraw thweir stake deposit upon the conclusion of phase 0 staking."))),Object(r.b)("h2",{id:"about-zilliqa-staking-program"},"About Zilliqa Staking Program"),Object(r.b)("p",null,"In this initial phase of the Zilliqa staking program, staking is done through a seed node and a smart contract on the Zilliqa blockchain. The seed node operator who wishes to host an SSN will need to register with the Zilliqa team and deposit a certain minimum number of $ZIL into the staking smart contract. The seed node operator will then receive blockchain rewards at regular intervals according to the performance of its SSN, and in proportion to the amount of $ZIL deposited in the contract during those intervals."),Object(r.b)("p",null,"Staked seed nodes are expected to provide API service to anyone to be eligible for these rewards. There will also be no hard slashing in this phase of the program."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"More details on the rationale and design of the program can be found in the Zilliqa Improvement Proposal (ZIP) ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-3.md"}),"documentation"),"."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you wish to learn more about our seed node staking contract, you may want to check out the contract over at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/staking-contract"}),"staking-contract Github Repository"),"."))),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Disclaimer")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Please read our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../staking-disclaimer"}),"Disclaimer")," page carefully before participating in our staking program."))),Object(r.b)("h2",{id:"who-can-run-a-zilliqa-ssn"},"Who Can Run a Zilliqa SSN"),Object(r.b)("p",null,"The seed node operator candidates we are looking to get involved with the staked seed node program are "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"existing exchanges, "),Object(r.b)("li",{parentName:"ul"},"wallet and explorer providers, and "),Object(r.b)("li",{parentName:"ul"},"eligible operators from within the Zilliqa community.")),Object(r.b)("h2",{id:"minimum-hardware-requirements"},"Minimum Hardware Requirements"),Object(r.b)("p",null,"Ensuring your node meets the minimum hardware requirements is important. Having your staked seed node run without disruption will both enable you to get the maximum possible stake reward and guarantee to the users of your node that they can enjoy a seamless experience of the API service provided."),Object(r.b)("p",null,"At the moment, the minimum hardware requirements are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"x64 Ubuntu operating system (e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"Ubuntu 16.04.05 LTS"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Ubuntu 18.04.4 LTS"),")"),Object(r.b)("li",{parentName:"ul"},"Quad-core server-grade processor (e.g., Intel Xeon Skylake family)"),Object(r.b)("li",{parentName:"ul"},"16GB RAM"),Object(r.b)("li",{parentName:"ul"},"300GB SSD"),Object(r.b)("li",{parentName:"ul"},"200Mbps (up/down) bandwidth"),Object(r.b)("li",{parentName:"ul"},"24/7 uptime"),Object(r.b)("li",{parentName:"ul"},"Public IP address"),Object(r.b)("li",{parentName:"ul"},"Domain name"),Object(r.b)("li",{parentName:"ul"},"Valid SSL certificate")),Object(r.b)("h2",{id:"signing-up-as-a-staked-seed-node-operator"},"Signing Up As a Staked Seed Node Operator"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This step is optional for those who are already in touch with us"))),Object(r.b)("p",null,"For interested party who wishes to run a staked seed node and is able to provides the following service: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"run a staked seed node "),Object(r.b)("li",{parentName:"ul"},"providing staking service to the community. ")),Object(r.b)("p",null,"Please fill this form ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://forms.gle/GxuHXxPFD4BzcGZp6"}),"https://forms.gle/GxuHXxPFD4BzcGZp6"),". We will follow up with the rest of the steps."),Object(r.b)("p",null,"For any other enquiries, please reach out to us via email at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:staking@zilliqa.com"}),"staking@zilliqa.com"),"."))}d.isMDXComponent=!0},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,u=b["".concat(o,".").concat(m)]||b[m]||p[m]||r;return a?i.a.createElement(u,c(c({ref:t},l),{},{components:a})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);