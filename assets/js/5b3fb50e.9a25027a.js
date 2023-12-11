/*! For license information please see 5b3fb50e.9a25027a.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[87197],{48946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(24246),i=n(71670);const s={id:"xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0"},a=void 0,c={id:"xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0",description:"This document refers to the architecture of the new renderer, Fabric, that is in active roll-out.",source:"@site/versioned_docs/version-0.73/xplat-implementation.md",sourceDirName:".",slug:"/xplat-implementation",permalink:"/docs/xplat-implementation",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/xplat-implementation.md",tags:[],version:"0.73",frontMatter:{id:"xplat-implementation",title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0"}},o={},l=[{value:"React Native \u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf",id:"react-native-\u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf",level:4}];function d(e){const t=Object.assign({blockquote:"blockquote",p:"p",a:"a",h4:"h4",ul:"ul",li:"li",code:"code",strong:"strong",img:"img"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This document refers to the architecture of the new renderer, ",(0,r.jsx)(t.a,{href:"fabric-renderer",children:"Fabric"}),", that is in active roll-out."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"react-native-\u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf",children:"React Native \u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u4e0a\u4e00\u4ee3 React Native \u6e32\u67d3\u5668\u4e2d\uff0cReact \u5f71\u5b50\u6811\u3001\u5e03\u5c40\u903b\u8f91\u3001\u89c6\u56fe\u62cd\u5e73\u7b97\u6cd5\u662f\u5728\u5404\u4e2a\u5e73\u53f0\u5355\u72ec\u5b9e\u73b0\u7684\u3002\u5f53\u524d\u7684\u6e32\u67d3\u5668\u7684\u8bbe\u8ba1\u4e0a\u91c7\u7528\u7684\u662f\u8de8\u5e73\u53f0\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5171\u4eab\u4e86\u6838\u5fc3\u7684 C++ \u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(t.p,{children:"React Native \u56e2\u961f\u8ba1\u5212\u5c06\u52a8\u753b\u7cfb\u7edf\u52a0\u5165\u5230\u6e32\u67d3\u7cfb\u7edf\u4e2d\uff0c\u5e76\u5c06 React Native \u7684\u6e32\u67d3\u7cfb\u7edf\u6269\u5c55\u5230\u65b0\u7684\u5e73\u53f0\uff0c\u4f8b\u5982 Windows\u3001\u6e38\u620f\u673a\u3001\u7535\u89c6\u7b49\u7b49\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528 C++ \u4f5c\u4e3a\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf\u6709\u51e0\u4e2a\u8981\u70b9\u3002\u9996\u5148\uff0c\u5355\u4e00\u5b9e\u73b0\u964d\u4f4e\u4e86\u5f00\u53d1\u548c\u7ef4\u62a4\u6210\u672c\u3002\u5176\u6b21\uff0c\u5b83\u63d0\u5347\u4e86\u521b\u5efa React \u5f71\u5b50\u6811\u7684\u6027\u80fd\uff0c\u540c\u65f6\u5728 Android \u4e0a\uff0c\u4e5f\u56e0\u4e3a\u4e0d\u518d\u4f7f\u7528 JNI for Yoga\uff0c\u964d\u4f4e\u4e86 Yoga \u6e32\u67d3\u5f15\u64ce\u7684\u5f00\u9500\uff0c\u5e03\u5c40\u8ba1\u7b97\u7684\u6027\u80fd\u4e5f\u6709\u6240\u63d0\u5347\u3002\u6700\u540e\uff0c\u6bcf\u4e2a React \u5f71\u5b50\u8282\u70b9\u5728 C++ \u4e2d\u5360\u7528\u7684\u5185\u5b58\uff0c\u6bd4\u5728 Kotlin \u6216 Swift \u4e2d\u5360\u7528\u7684\u8981\u5c0f\u3002"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u540d\u8bcd\u89e3\u91ca"}),"\n",(0,r.jsx)(t.p,{children:"Java Native Interface (JNI)\uff1a\u4e00\u4e2a\u7528 Java \u5199\u7684 API\uff0c\u7528\u4e8e\u5728 Java \u4e2d\u5199 native(\u8bd1\u6ce8\uff1a\u6307\u8c03\u7528 C++) \u65b9\u6cd5\u3002\u4f5c\u7528\u662f\u5b9e\u73b0 Fabric \u7684 C++ \u6838\u5fc3\u548c Android \u7684\u901a\u4fe1\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"React Native \u56e2\u961f\u8fd8\u4f7f\u7528\u4e86\u5f3a\u5236\u4e0d\u53ef\u53d8\u7684 C++ \u7279\u6027\uff0c\u6765\u786e\u4fdd\u5e76\u53d1\u8bbf\u95ee\u65f6\u5171\u4eab\u8d44\u6e90\u5373\u4fbf\u4e0d\u52a0\u9501\u4fdd\u62a4\uff0c\u4e5f\u4e0d\u4f1a\u6709\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4f46\u5728 Android \u7aef\u8fd8\u6709\u4e24\u79cd\u4f8b\u5916\uff0c\u6e32\u67d3\u5668\u4f9d\u7136\u4f1a\u6709 JNI \u7684\u5f00\u9500\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u590d\u6742\u89c6\u56fe\uff0c\u6bd4\u5982 Text\u3001TextInput \u7b49\uff0c\u4f9d\u7136\u4f1a\u4f7f\u7528 JNI \u6765\u4f20\u8f93\u5c5e\u6027 props\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u5728\u6302\u8f7d\u9636\u6bb5\u4f9d\u7136\u4f1a\u4f7f\u7528 JNI \u6765\u53d1\u9001\u53d8\u66f4\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["React Native \u56e2\u961f\u5728\u63a2\u7d22\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"ByteBuffer"})," \u5e8f\u5217\u5316\u6570\u636e\u8fd9\u79cd\u65b0\u7684\u673a\u5236\uff0c\u6765\u66ff\u6362 ",(0,r.jsx)(t.code,{children:"ReadableMap"}),"\uff0c\u51cf\u5c11 JNI \u7684\u5f00\u9500\u3002\u76ee\u6807\u662f\u5c06 JNI \u7684\u5f00\u9500\u51cf\u5c11 35~50%\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u6e32\u67d3\u5668\u63d0\u4f9b\u4e86 C++ \u4e0e\u4e24\u8fb9\u901a\u4fe1\u7684 API\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"(i)"})," \u4e0e React \u901a\u4fe1"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"(ii)"})," \u4e0e\u5bbf\u4e3b\u5e73\u53f0\u901a\u4fe1"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5173\u4e8e ",(0,r.jsxs)(t.strong,{children:["(i) ",(0,r.jsx)(t.strong,{children:"React \u4e0e\u6e32\u67d3\u5668\u7684\u901a\u4fe1\uff0c\u5305\u62ec"}),"\u6e32\u67d3\uff08render\uff09"]})," React \u6811\u548c\u76d1\u542c",(0,r.jsx)(t.strong,{children:"\u4e8b\u4ef6\uff08event\uff09"}),"\uff0c\u6bd4\u5982 ",(0,r.jsx)(t.code,{children:"onLayout"}),"\u3001",(0,r.jsx)(t.code,{children:"onKeyPress"}),"\u3001touch \u7b49\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5173\u4e8e ",(0,r.jsx)(t.strong,{children:"(ii) ** React Native \u6e32\u67d3\u5668\u4e0e\u5bbf\u4e3b\u5e73\u53f0\u7684\u901a\u4fe1\uff0c\u5305\u62ec\u5728\u5c4f\u5e55\u4e0a"}),"\u6302\u8f7d\uff08mount\uff09",(0,r.jsx)(t.strong,{children:"\u5bbf\u4e3b\u89c6\u56fe\uff0c\u5305\u62ec create\u3001insert\u3001update\u3001delete \u5bbf\u4e3b\u89c6\u56fe\uff0c\u548c\u76d1\u542c\u7528\u6237\u5728\u5bbf\u4e3b\u5e73\u53f0\u4ea7\u751f\u7684"}),"\u4e8b\u4ef6\uff08event\uff09**\u3002"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://reactnative.dev/assets/images/xplat-implementation-diagram-7611cf9dfb6d15667365630147d83ca5.png",alt:"Cross-platform implementation diagram"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var r=n(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>s});var r=n(27378);const i=r.createContext({});function s(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:s(e),r.createElement(i.Provider,{value:c},t)}}}]);