/*! For license information please see f35dcbe0.f163ea7b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[48013],{47307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(24246),n=r(71670);const o={id:"architecture-overview",title:"\u67b6\u6784\u6982\u89c8",slug:"/overview"},c=void 0,s={unversionedId:"architecture-overview",id:"architecture-overview",title:"\u67b6\u6784\u6982\u89c8",description:"Welcome to the Architecture Overview! If you're getting started with React Native, please refer to Guides section. Continue reading to learn how internals of React Native work!",source:"@site/architecture/architecture-overview.md",sourceDirName:".",slug:"/overview",permalink:"/architecture/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/architecture/architecture-overview.md",tags:[],version:"current",frontMatter:{id:"architecture-overview",title:"\u67b6\u6784\u6982\u89c8",slug:"/overview"},sidebar:"architecture",next:{title:"Fabric",permalink:"/architecture/fabric-renderer"}},a={},l=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2}];function h(e){const t=Object.assign({admonition:"admonition",p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Welcome to the Architecture Overview! If you're getting started with React Native, please refer to ",(0,i.jsx)("a",{href:"/docs/getting-started",children:"Guides"})," section. Continue reading to learn how internals of React Native work!"]}),(0,i.jsx)(t.p,{children:"\u672c\u6587\u6863\u8fd8\u5728\u6301\u7eed\u66f4\u65b0\u4e2d\u3002Please make sure to come back later to check for new information."})]}),"\n",(0,i.jsxs)(t.p,{children:["Architecture Overview is intended to share conceptual overview of how React Native's internals work. \u76ee\u6807\u8bfb\u8005\u4e3b\u8981\u662f\u751f\u6001\u5e93\u7684\u5f00\u53d1\u8005\u3001\u6838\u5fc3\u8d21\u732e\u8005\u548c\u7279\u522b\u6709\u597d\u5947\u5fc3\u7684\u4eba\u3002 If you are an app developer, it is not a requirement to be familiar with this material to be effective with React Native. You can still benefit from the overview as it will give you insights into how React Native works under the hood. Feel free to share your feedback on the ",(0,i.jsx)("a",{href:"https://github.com/reactwg/react-native-new-architecture/discussions/9",children:"discussion inside the working group"})," for this section."]}),"\n",(0,i.jsx)(t.h2,{id:"\u76ee\u5f55",children:"\u76ee\u5f55"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u6e32\u67d3","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"fabric-renderer",children:"Fabric \u6e32\u67d3\u5668"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"render-pipeline",children:"\u6e32\u67d3\u6d41\u6c34\u7ebf"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"xplat-implementation",children:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"view-flattening",children:"\u89c6\u56fe\u62cd\u5e73"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"threading-model",children:"\u7ebf\u7a0b\u6a21\u578b"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Build Tools","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"bundled-hermes",children:"Bundled Hermes"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"glossary",children:"\u672f\u8bed\u8868"})}),"\n"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},71426:(e,t,r)=>{var i=r(27378),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var i,o={},l=null,h=null;for(i in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)c.call(t,i)&&!a.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:n,type:e,key:l,ref:h,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>o});var i=r(27378);const n=i.createContext({});function o(e){const t=i.useContext(n);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:o(e),i.createElement(n.Provider,{value:s},t)}}}]);