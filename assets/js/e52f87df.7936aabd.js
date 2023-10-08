/*! For license information please see e52f87df.7936aabd.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[97485],{62151:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=i(24246),n=i(71670),o=i(35405);const r={id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},s=void 0,c={unversionedId:"native-modules-intro",id:"version-0.70/native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb",description:"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.",source:"@site/versioned_docs/version-0.70/native-modules-intro.md",sourceDirName:".",slug:"/native-modules-intro",permalink:"/docs/0.70/native-modules-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-intro.md",tags:[],version:"0.70",frontMatter:{id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce",permalink:"/docs/0.70/hermes"},next:{title:"Android \u539f\u751f\u6a21\u5757",permalink:"/docs/0.70/native-modules-android"}},l={},d=[{value:"\u521b\u5efa\u539f\u751f\u6a21\u5757",id:"\u521b\u5efa\u539f\u751f\u6a21\u5757",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2}];function u(e){const t=Object.assign({p:"p",h2:"h2",ol:"ol",li:"li",a:"a"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.ZP,{}),"\n",(0,a.jsx)(t.p,{children:"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing."}),"\n",(0,a.jsx)(t.p,{children:"The NativeModule system exposes instances of Java/Objective-C/C++ (native) classes to JavaScript (JS) as JS objects, thereby allowing you to execute arbitrary native code from within JS. While we don't expect this feature to be part of the usual development process, it is essential that it exists. If React Native doesn't export a native API that your JS app needs you should be able to export it yourself!"}),"\n",(0,a.jsx)(t.h2,{id:"\u521b\u5efa\u539f\u751f\u6a21\u5757",children:"\u521b\u5efa\u539f\u751f\u6a21\u5757"}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to write a native module for your React Native application:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Directly within your React Native application\u2019s iOS/Android projects"}),"\n",(0,a.jsx)(t.li,{children:"As a NPM package that can be installed as a dependency by your/other React Native applications"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This guide will first walk you through implementing a native module directly within a React Native application. However the native module you build in the following guide can be distributed as an NPM package. Check out the ",(0,a.jsx)(t.a,{href:"native-modules-setup",children:"Setting Up a Native Module as a NPM Package"})," guide if you are interested in doing so."]}),"\n",(0,a.jsx)(t.h2,{id:"\u6559\u7a0b",children:"\u6559\u7a0b"}),"\n",(0,a.jsxs)(t.p,{children:["In the following sections we will walk you through guides on how to build a native module directly within a React Native application. As a prerequisite, you will need a React Native application to work within. You can follow the steps ",(0,a.jsx)(t.a,{href:"getting-started",children:"here"})," to setup a React Native application if you do not already have one."]}),"\n",(0,a.jsx)(t.p,{children:"Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application."}),"\n",(0,a.jsxs)(t.p,{children:["In the following sections you will create such a Calendar native module for both ",(0,a.jsx)(t.a,{href:"native-modules-android",children:"Android"})," and ",(0,a.jsx)(t.a,{href:"native-modules-ios",children:"iOS"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},35405:(e,t,i)=>{i.d(t,{ZP:()=>r});var a=i(24246),n=i(71670);function o(e){const t=Object.assign({admonition:"admonition",p:"p",a:"a"},(0,n.ah)(),e.components);return(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ",(0,a.jsx)(t.a,{href:"./the-new-architecture/pillars-turbomodules",children:"TurboModule"})," and ",(0,a.jsx)(t.a,{href:"./the-new-architecture/pillars-fabric-components",children:"Fabric Components"})," to achieve similar results."]})})}const r=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},71426:(e,t,i)=>{var a=i(27378),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,i){var a,o={},l=null,d=null;for(a in void 0!==i&&(l=""+i),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:n,type:e,key:l,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},24246:(e,t,i)=>{e.exports=i(71426)},71670:(e,t,i)=>{i.d(t,{Zo:()=>s,ah:()=>o});var a=i(27378);const n=a.createContext({});function o(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function s({components:e,children:t,disableParentContext:i}){let s;return s=i?"function"==typeof e?e({}):e||r:o(e),a.createElement(n.Provider,{value:s},t)}}}]);