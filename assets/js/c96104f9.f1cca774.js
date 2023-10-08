/*! For license information please see c96104f9.f1cca774.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[52357],{8011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(24246),s=n(71670);const o={id:"app-extensions",title:"iOS \u5e94\u7528\u5c0f\u7ec4\u4ef6"},r=void 0,a={unversionedId:"app-extensions",id:"version-0.72/app-extensions",title:"iOS \u5e94\u7528\u5c0f\u7ec4\u4ef6",description:"\u5c0f\u7ec4\u4ef6\u5141\u8bb8\u60a8\u5728\u4e3b\u8981\u5e94\u7528\u7a0b\u5e8f\u4e4b\u5916\u63d0\u4f9b\u81ea\u5b9a\u4e49\u529f\u80fd\u548c\u5185\u5bb9\u3002iOS\u4e0a\u6709\u4e0d\u540c\u7c7b\u578b\u7684\u5e94\u7528\u5c0f\u7ec4\u4ef6\uff0c\u5b83\u4eec\u90fd\u5728App Extension\u7f16\u7a0b\u6307\u5357\u4e2d\u8fdb\u884c\u4e86\u4ecb\u7ecd\u3002\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u7b80\u8981\u4ecb\u7ecd\u5982\u4f55\u5728iOS\u4e0a\u5229\u7528\u5e94\u7528\u5c0f\u7ec4\u4ef6\u7684\u4f18\u52bf\u3002",source:"@site/versioned_docs/version-0.72/app-extensions.md",sourceDirName:".",slug:"/app-extensions",permalink:"/docs/app-extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/app-extensions.md",tags:[],version:"0.72",frontMatter:{id:"app-extensions",title:"iOS \u5e94\u7528\u5c0f\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",permalink:"/docs/communication-ios"},next:{title:"\u4e0a\u67b6 App Store",permalink:"/docs/publishing-to-app-store"}},c={},d=[{value:"\u5c0f\u7ec4\u4ef6\u4e2d\u7684\u5185\u5b58\u4f7f\u7528",id:"\u5c0f\u7ec4\u4ef6\u4e2d\u7684\u5185\u5b58\u4f7f\u7528",level:2},{value:"\u793a\u4f8b\u5c0f\u7ec4\u4ef6\uff1aToday",id:"\u793a\u4f8b\u5c0f\u7ec4\u4ef6today",level:3},{value:"\u5176\u4ed6\u7c7b\u578b\u7684\u5c0f\u7ec4\u4ef6",id:"\u5176\u4ed6\u7c7b\u578b\u7684\u5c0f\u7ec4\u4ef6",level:3}];function p(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",img:"img"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["\u5c0f\u7ec4\u4ef6\u5141\u8bb8\u60a8\u5728\u4e3b\u8981\u5e94\u7528\u7a0b\u5e8f\u4e4b\u5916\u63d0\u4f9b\u81ea\u5b9a\u4e49\u529f\u80fd\u548c\u5185\u5bb9\u3002iOS\u4e0a\u6709\u4e0d\u540c\u7c7b\u578b\u7684\u5e94\u7528\u5c0f\u7ec4\u4ef6\uff0c\u5b83\u4eec\u90fd\u5728",(0,i.jsx)(t.a,{href:"https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214-CH20-SW1",children:"App Extension\u7f16\u7a0b\u6307\u5357"}),"\u4e2d\u8fdb\u884c\u4e86\u4ecb\u7ecd\u3002\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u7b80\u8981\u4ecb\u7ecd\u5982\u4f55\u5728iOS\u4e0a\u5229\u7528\u5e94\u7528\u5c0f\u7ec4\u4ef6\u7684\u4f18\u52bf\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u5c0f\u7ec4\u4ef6\u4e2d\u7684\u5185\u5b58\u4f7f\u7528",children:"\u5c0f\u7ec4\u4ef6\u4e2d\u7684\u5185\u5b58\u4f7f\u7528"}),"\n",(0,i.jsx)(t.p,{children:"\u7531\u4e8e\u8fd9\u4e9b\u5c0f\u7ec4\u4ef6\u662f\u5728\u5e38\u89c4\u5e94\u7528\u7a0b\u5e8f\u6c99\u76d2\u4e4b\u5916\u52a0\u8f7d\u7684\uff0c\u56e0\u6b64\u5f88\u6709\u53ef\u80fd\u540c\u65f6\u52a0\u8f7d\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u5c0f\u7ec4\u4ef6\u3002\u6b63\u5982\u60a8\u6240\u9884\u671f\u7684\u90a3\u6837\uff0c\u8fd9\u4e9b\u5c0f\u7ec4\u4ef6\u5177\u6709\u8f83\u5c0f\u7684\u5185\u5b58\u4f7f\u7528\u9650\u5236\u3002\u5728\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\u6269\u5c55\u65f6\uff0c\u8bf7\u7262\u8bb0\u8fd9\u4e00\u70b9\u3002\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u5b9e\u9645\u8bbe\u5907\u4e0a\u6d4b\u8bd5\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5c24\u5176\u662f\u5728\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\u5c0f\u7ec4\u4ef6\u65f6\u66f4\u4e3a\u91cd\u8981\uff1a\u592a\u9891\u7e41\u5730\uff0c\u5f00\u53d1\u4eba\u5458\u4f1a\u53d1\u73b0\u4ed6\u4eec\u7684\u5c0f\u7ec4\u4ef6\u5728 iOS \u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u826f\u597d\uff0c\u4f46\u7528\u6237\u62a5\u544a\u79f0\u5b83\u4eec\u65e0\u6cd5\u52a0\u8f7d\u5230\u5b9e\u9645\u8bbe\u5907\u4e0a\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u6211\u4eec\u5f3a\u70c8\u63a8\u8350\u60a8\u89c2\u770bConrad Kramer\u5173\u4e8e",(0,i.jsx)(t.a,{href:"https://cocoaheads.tv/memory-use-in-extensions-by-conrad-kramer/",children:"\u5c0f\u7ec4\u4ef6\u4e2d\u7684\u5185\u5b58\u4f7f\u7528"})," \u7684\u6f14\u8bb2\u4ee5\u4e86\u89e3\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u3002"]}),"\n",(0,i.jsx)(t.h3,{id:"\u793a\u4f8b\u5c0f\u7ec4\u4ef6today",children:"\u793a\u4f8b\u5c0f\u7ec4\u4ef6\uff1aToday"}),"\n",(0,i.jsx)(t.p,{children:"\u4e00\u4e2a Today \u5c0f\u7ec4\u4ef6\u7684\u5185\u5b58\u9650\u5236\u662f16 MB\u3002\u4e8b\u5b9e\u4e0a\uff0c\u4f7f\u7528 React Native \u5b9e\u73b0\u7684 Today \u5c0f\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u5de5\u4f5c\u4e0d\u53ef\u9760\uff0c\u56e0\u4e3a\u5185\u5b58\u4f7f\u7528\u91cf\u5f80\u5f80\u8fc7\u9ad8\u3002\u5982\u679c\u4f60\u7684 Today \u5c0f\u7ec4\u4ef6\u8d85\u51fa\u4e86\u5185\u5b58\u9650\u5236\uff0c\u5b83\u5c06\u663e\u793a\u201c\u65e0\u6cd5\u52a0\u8f7d\u201d\u7684\u6d88\u606f\uff1a"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(22334).Z+"",width:"1242",height:"497"})}),"\n",(0,i.jsxs)(t.p,{children:["\u59cb\u7ec8\u786e\u4fdd\u5728\u771f\u5b9e\u8bbe\u5907\u4e0a\u6d4b\u8bd5\u60a8\u7684\u5e94\u7528\u5c0f\u7ec4\u4ef6\uff0c\u4f46\u8981\u6ce8\u610f\u8fd9\u53ef\u80fd\u8fd8\u4e0d\u8db3\u591f\uff0c\u7279\u522b\u662f\u5728\u5904\u7406 Today \u5c0f\u7ec4\u4ef6\u65f6\u3002\u8c03\u8bd5\u914d\u7f6e\u6784\u5efa\u66f4\u6709\u53ef\u80fd\u8d85\u51fa\u5185\u5b58\u9650\u5236\uff0c\u800c\u53d1\u5e03\u914d\u7f6e\u6784\u5efa\u5219\u4e0d\u4f1a\u7acb\u5373\u5931\u8d25\u3002\u6211\u4eec\u5f3a\u70c8\u63a8\u8350\u60a8\u4f7f\u7528",(0,i.jsx)(t.a,{href:"https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/index.html",children:"Xcode \u7684 Instruments"}),"\u6765\u5206\u6790\u60a8\u7684\u771f\u5b9e\u4e16\u754c\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\uff0c\u56e0\u4e3a\u5f88\u53ef\u80fd\u60a8\u7684\u53d1\u5e03\u914d\u7f6e\u6784\u5efa\u975e\u5e38\u63a5\u8fd116 MB \u7684\u9650\u5236\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u6267\u884c\u5e38\u89c1\u64cd\u4f5c\uff08\u4f8b\u5982\u4ece API \u83b7\u53d6\u6570\u636e\uff09\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u8d85\u8fc7 16 MB \u7684\u9650\u5236\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u8981\u5c1d\u8bd5\u6269\u5c55 React Native Today \u5c0f\u7ec4\u4ef6\u5b9e\u73b0\u7684\u793a\u4f8b\u9879\u76ee\uff0c\u8bf7\u53c2\u8003",(0,i.jsx)(t.a,{href:"https://github.com/matejkriz/react-native-today-widget/",children:"react-native-today-widget"}),"\u3002"]}),"\n",(0,i.jsx)(t.h3,{id:"\u5176\u4ed6\u7c7b\u578b\u7684\u5c0f\u7ec4\u4ef6",children:"\u5176\u4ed6\u7c7b\u578b\u7684\u5c0f\u7ec4\u4ef6"}),"\n",(0,i.jsxs)(t.p,{children:["\u5176\u4ed6\u7c7b\u578b\u7684\u5c0f\u7ec4\u4ef6\u6bd4 Today \u5177\u6709\u66f4\u5927\u7684\u5185\u5b58\u9650\u5236\u3002\u4f8b\u5982\uff0c\u81ea\u5b9a\u4e49\u952e\u76d8\u5c0f\u7ec4\u4ef6\u9650\u5236\u4e3a48 MB\uff0c\u5171\u4eab\u5c0f\u7ec4\u4ef6\u9650\u5236\u4e3a120 MB\u3002\u4f7f\u7528React Native\u5b9e\u73b0\u6b64\u7c7b\u5e94\u7528\u7a0b\u5e8f\u5c0f\u7ec4\u4ef6\u66f4\u53ef\u884c\u3002\u4e00\u4e2a\u6982\u5ff5\u9a8c\u8bc1\u793a\u4f8b\u662f",(0,i.jsx)(t.a,{href:"https://github.com/andrewsardone/react-native-ios-share-extension",children:"react-native-ios-share-extension"}),"\u3002"]})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(p,e)})):p(e)}},71426:(e,t,n)=>{var i=n(27378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,o={},d=null,p=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:s,type:e,key:d,ref:p,props:o,_owner:a.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},22334:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/TodayWidgetUnableToLoad-b931f8be6eeb72c037338b9ab9766477.jpg"},71670:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var i=n(27378);const s=i.createContext({});function o(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||r:o(e),i.createElement(s.Provider,{value:a},t)}}}]);