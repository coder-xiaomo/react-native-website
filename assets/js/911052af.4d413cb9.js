/*! For license information please see 911052af.4d413cb9.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[14317],{67877:(e,r,n)=>{n.d(r,{ZP:()=>c});var t=n(24246),i=n(71670);function s(e){const r=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(r.admonition,{title:"\u6ce8\u610f",type:"caution",children:[(0,t.jsxs)(r.p,{children:["\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,t.jsx)(r.strong,{children:"\u5b9e\u9a8c\u6027"}),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,t.jsx)(r.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"}),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"]}),(0,t.jsxs)(r.p,{children:["\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,t.jsx)(r.strong,{children:"\u624b\u52a8\u6b65\u9aa4"}),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002"]})]})}const c=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}},51888:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=n(24246),i=n(71670),s=n(67877);const c={id:"new-architecture-intro",title:"\u8fc1\u79fb\u5230\u65b0\u67b6\u6784"},o=void 0,a={unversionedId:"new-architecture-intro",id:"version-0.72/new-architecture-intro",title:"\u8fc1\u79fb\u5230\u65b0\u67b6\u6784",description:"This migration guide is designed for React Native library authors and application developers. It outlines the steps you need to follow to roll out the new Architecture, composed by the new NativeModule system (TurboModule) and the new Renderer (Fabric) to your Android and iOS libraries and apps.",source:"@site/versioned_docs/version-0.72/new-architecture-intro.md",sourceDirName:".",slug:"/new-architecture-intro",permalink:"/docs/new-architecture-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-intro.md",tags:[],version:"0.72",frontMatter:{id:"new-architecture-intro",title:"\u8fc1\u79fb\u5230\u65b0\u67b6\u6784"},sidebar:"docs",previous:{title:"\u4f7f Fabric \u7ec4\u4ef6\u4e0e\u4f20\u7edf\u539f\u751f\u7ec4\u4ef6\u517c\u5bb9",permalink:"/docs/the-new-architecture/backward-compatibility-fabric-components"},next:{title:"\u5728\u5e93\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c",permalink:"/docs/new-architecture-library-intro"}},l={},d=[{value:"Table of Contents",id:"table-of-contents",level:2}];function h(e){const r=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.ZP,{}),"\n",(0,t.jsx)(r.h1,{id:"getting-started-with-the-new-architecture",children:"Getting Started with the New Architecture"}),"\n",(0,t.jsxs)(r.p,{children:["This migration guide is designed for React Native ",(0,t.jsx)(r.strong,{children:"library authors"})," and ",(0,t.jsx)(r.strong,{children:"application developers"}),". It outlines the steps you need to follow to roll out the new Architecture, composed by the ",(0,t.jsx)(r.strong,{children:"new NativeModule system (TurboModule) and the new Renderer (Fabric)"})," to your ",(0,t.jsx)(r.strong,{children:"Android"})," and ",(0,t.jsx)(r.strong,{children:"iOS"})," libraries and apps."]}),"\n",(0,t.jsx)(r.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsx)(r.p,{children:"The guide is divided into five sections:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Supporting the New Architecture in your Library"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-library-intro",children:"Prerequisites for Supporting the New Architecture in JavaScript"})}),"\n",(0,t.jsxs)(r.li,{children:["Enabling the New Architecture in your Library","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-library-android",children:"Android"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-library-ios",children:"iOS"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Supporting the New Architecture in your App"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-app-intro",children:"Prerequisites for Supporting the New Architecture in your App"})}),"\n",(0,t.jsxs)(r.li,{children:["Enabling the New NativeModule System (TurboModule) in your App","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-app-modules-android",children:"Android"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-app-modules-ios",children:"iOS"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Enabling the New Renderer (Fabric) in your App","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-app-renderer-android",children:"Android"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-app-renderer-ios",children:"iOS"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"react-18-and-react-native",children:(0,t.jsx)(r.strong,{children:"React 18 & React Native"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-troubleshooting",children:(0,t.jsx)(r.strong,{children:"Troubleshooting"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"new-architecture-appendix",children:(0,t.jsx)(r.strong,{children:"Appendix"})})}),"\n"]})]})}const u=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},71426:(e,r,n)=>{var t=n(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:o.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},24246:(e,r,n)=>{e.exports=n(71426)},71670:(e,r,n)=>{n.d(r,{Zo:()=>o,ah:()=>s});var t=n(27378);const i=t.createContext({});function s(e){const r=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function o({components:e,children:r,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:s(e),t.createElement(i.Provider,{value:o},r)}}}]);