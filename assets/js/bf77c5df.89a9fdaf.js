/*! For license information please see bf77c5df.89a9fdaf.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[12835],{37673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(24246),i=t(71670);const s={id:"timers",title:"\u5b9a\u65f6\u5668"},a=void 0,c={id:"timers",title:"\u5b9a\u65f6\u5668",description:"\u5b9a\u65f6\u5668\u662f\u4e00\u4e2a\u5e94\u7528\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u90e8\u5206\u3002React Native \u5b9e\u73b0\u4e86\u548c\u6d4f\u89c8\u5668\u4e00\u81f4\u7684\u5b9a\u65f6\u5668 Timer\u3002",source:"@site/versioned_docs/version-0.70/timers.md",sourceDirName:".",slug:"/timers",permalink:"/docs/0.70/timers",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/timers.md",tags:[],version:"0.70",frontMatter:{id:"timers",title:"\u5b9a\u65f6\u5668"},sidebar:"docs",previous:{title:"JavaScript \u73af\u5883",permalink:"/docs/0.70/javascript-environment"},next:{title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce",permalink:"/docs/0.70/hermes"}},o={},l=[{value:"\u5b9a\u65f6\u5668",id:"\u5b9a\u65f6\u5668",level:2},{value:"InteractionManager",id:"interactionmanager",level:2},{value:"\u52a1\u5fc5\u5728\u5378\u8f7d\u7ec4\u4ef6\u524d\u6e05\u9664\u5b9a\u65f6\u5668\uff01",id:"\u52a1\u5fc5\u5728\u5378\u8f7d\u7ec4\u4ef6\u524d\u6e05\u9664\u5b9a\u65f6\u5668",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5b9a\u65f6\u5668\u662f\u4e00\u4e2a\u5e94\u7528\u4e2d\u975e\u5e38\u91cd\u8981\u7684\u90e8\u5206\u3002React Native \u5b9e\u73b0\u4e86\u548c\u6d4f\u89c8\u5668\u4e00\u81f4\u7684",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers",children:"\u5b9a\u65f6\u5668 Timer"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9a\u65f6\u5668",children:"\u5b9a\u65f6\u5668"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"setTimeout, clearTimeout"}),"\n",(0,r.jsx)(n.li,{children:"setInterval, clearInterval"}),"\n",(0,r.jsx)(n.li,{children:"setImmediate, clearImmediate"}),"\n",(0,r.jsx)(n.li,{children:"requestAnimationFrame, cancelAnimationFrame"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"requestAnimationFrame(fn)"}),"\u548c",(0,r.jsx)(n.code,{children:"setTimeout(fn, 0)"}),"\u4e0d\u540c\uff0c\u524d\u8005\u4f1a\u5728\u6bcf\u5e27\u5237\u65b0\u4e4b\u540e\u6267\u884c\u4e00\u6b21\uff0c\u800c\u540e\u8005\u5219\u4f1a\u5c3d\u53ef\u80fd\u5feb\u7684\u6267\u884c\uff08\u5728 iPhone5S \u4e0a\u6709\u53ef\u80fd\u6bcf\u79d2 1000 \u6b21\u4ee5\u4e0a\uff09\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"setImmediate"}),"\u5219\u4f1a\u5728\u5f53\u524d JavaScript \u6267\u884c\u5757\u7ed3\u675f\u7684\u65f6\u5019\u6267\u884c\uff0c\u5c31\u5728\u5c06\u8981\u53d1\u9001\u6279\u91cf\u54cd\u5e94\u6570\u636e\u5230\u539f\u751f\u4e4b\u524d\u3002\u6ce8\u610f\u5982\u679c\u4f60\u5728",(0,r.jsx)(n.code,{children:"setImmediate"}),"\u7684\u56de\u8c03\u51fd\u6570\u4e2d\u53c8\u6267\u884c\u4e86",(0,r.jsx)(n.code,{children:"setImmediate"}),"\uff0c\u5b83\u4f1a\u7d27\u63a5\u7740\u7acb\u523b\u6267\u884c\uff0c\u800c\u4e0d\u4f1a\u5728\u8c03\u7528\u4e4b\u524d\u7b49\u5f85\u539f\u751f\u4ee3\u7801\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"\u7684\u5b9e\u73b0\u5c31\u4f7f\u7528\u4e86",(0,r.jsx)(n.code,{children:"setImmediate"}),"\u6765\u6267\u884c\u5f02\u6b65\u8c03\u7528\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"interactionmanager",children:"InteractionManager"}),"\n",(0,r.jsxs)(n.p,{children:["\u539f\u751f\u5e94\u7528\u611f\u89c9\u5982\u6b64\u6d41\u7545\u7684\u4e00\u4e2a\u91cd\u8981\u539f\u56e0\u5c31\u662f\u5728\u4e92\u52a8\u548c\u52a8\u753b\u7684\u8fc7\u7a0b\u4e2d\u907f\u514d\u7e41\u91cd\u7684\u64cd\u4f5c\u3002\u5728 React Native \u91cc\uff0c\u6211\u4eec\u76ee\u524d\u53d7\u5230\u9650\u5236\uff0c\u56e0\u4e3a\u6211\u4eec\u53ea\u6709\u4e00\u4e2a JavaScript \u6267\u884c\u7ebf\u7a0b\u3002\u4e0d\u8fc7\u4f60\u53ef\u4ee5\u7528",(0,r.jsx)(n.code,{children:"InteractionManager"}),"\u6765\u786e\u4fdd\u5728\u6267\u884c\u7e41\u91cd\u5de5\u4f5c\u4e4b\u524d\u6240\u6709\u7684\u4ea4\u4e92\u548c\u52a8\u753b\u90fd\u5df2\u7ecf\u5904\u7406\u5b8c\u6bd5\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5e94\u7528\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4ee3\u7801\u6765\u5b89\u6392\u4e00\u4e2a\u4efb\u52a1\uff0c\u4f7f\u5176\u5728\u4ea4\u4e92\u7ed3\u675f\u4e4b\u540e\u6267\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"InteractionManager.runAfterInteractions(() => {\n  // ...\u9700\u8981\u957f\u65f6\u95f4\u540c\u6b65\u6267\u884c\u7684\u4efb\u52a1...\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u6765\u628a\u5b83\u548c\u4e4b\u524d\u7684\u51e0\u4e2a\u4efb\u52a1\u5b89\u6392\u65b9\u6cd5\u5bf9\u6bd4\u4e00\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"requestAnimationFrame(): \u7528\u6765\u6267\u884c\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u63a7\u5236\u89c6\u56fe\u52a8\u753b\u7684\u4ee3\u7801"}),"\n",(0,r.jsx)(n.li,{children:"setImmediate/setTimeout/setInterval(): \u5728\u7a0d\u540e\u6267\u884c\u4ee3\u7801\u3002\u6ce8\u610f\u8fd9\u6709\u53ef\u80fd\u4f1a\u5ef6\u8fdf\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684\u52a8\u753b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"runAfterInteractions(): \u5728\u7a0d\u540e\u6267\u884c\u4ee3\u7801\uff0c\u4e0d\u4f1a\u5ef6\u8fdf\u5f53\u524d\u8fdb\u884c\u7684\u52a8\u753b\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u89e6\u6478\u5904\u7406\u7cfb\u7edf\u4f1a\u628a\u4e00\u4e2a\u6216\u591a\u4e2a\u8fdb\u884c\u4e2d\u7684\u89e6\u6478\u64cd\u4f5c\u8ba4\u5b9a\u4e3a'\u4ea4\u4e92'\uff0c\u5e76\u4e14\u4f1a\u5c06",(0,r.jsx)(n.code,{children:"runAfterInteractions()"}),"\u7684\u56de\u8c03\u51fd\u6570\u5ef6\u8fdf\u6267\u884c\uff0c\u76f4\u5230\u6240\u6709\u7684\u89e6\u6478\u64cd\u4f5c\u90fd\u7ed3\u675f\u6216\u53d6\u6d88\u4e86\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"InteractionManager \u8fd8\u5141\u8bb8\u5e94\u7528\u6ce8\u518c\u52a8\u753b\uff0c\u5728\u52a8\u753b\u5f00\u59cb\u65f6\u521b\u5efa\u4e00\u4e2a\u4ea4\u4e92\u201c\u53e5\u67c4\u201d\uff0c\u7136\u540e\u5728\u7ed3\u675f\u7684\u65f6\u5019\u6e05\u9664\u5b83\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const handle = InteractionManager.createInteractionHandle();\n// \u6267\u884c\u52a8\u753b... (`runAfterInteractions`\u4e2d\u7684\u4efb\u52a1\u73b0\u5728\u5f00\u59cb\u6392\u961f\u7b49\u5019)\n// \u5728\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\nInteractionManager.clearInteractionHandle(handle);\n// \u5728\u6240\u6709\u53e5\u67c4\u90fd\u6e05\u9664\u4e4b\u540e\uff0c\u73b0\u5728\u5f00\u59cb\u4f9d\u5e8f\u6267\u884c\u961f\u5217\u4e2d\u7684\u4efb\u52a1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u52a1\u5fc5\u5728\u5378\u8f7d\u7ec4\u4ef6\u524d\u6e05\u9664\u5b9a\u65f6\u5668",children:"\u52a1\u5fc5\u5728\u5378\u8f7d\u7ec4\u4ef6\u524d\u6e05\u9664\u5b9a\u65f6\u5668\uff01"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u53d1\u73b0\u5f88\u591a React Native \u5e94\u7528\u53d1\u751f\u81f4\u547d\u9519\u8bef\uff08\u95ea\u9000\uff09\u662f\u4e0e\u8ba1\u65f6\u5668\u6709\u5173\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u662f\u5728\u67d0\u4e2a\u7ec4\u4ef6\u88ab\u5378\u8f7d\uff08unmount\uff09\u4e4b\u540e\uff0c\u8ba1\u65f6\u5668\u5374\u4ecd\u7136\u5728\u8fd0\u884c\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ea\u9700\u94ed\u8bb0",(0,r.jsx)(n.code,{children:"\u5728unmount\u7ec4\u4ef6\u65f6\u6e05\u9664\uff08clearTimeout/clearInterval\uff09\u6240\u6709\u7528\u5230\u7684\u5b9a\u65f6\u5668"}),"\u5373\u53ef\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import React, { Component } from "react";\n\nexport default class Hello extends Component {\n  componentDidMount() {\n    this.timer = setTimeout(() => {\n      console.log("\u628a\u4e00\u4e2a\u5b9a\u65f6\u5668\u7684\u5f15\u7528\u6302\u5728this\u4e0a");\n    }, 500);\n  }\n  componentWillUnmount() {\n    // \u8bf7\u6ce8\u610fUn"m"ount\u7684m\u662f\u5c0f\u5199\n\n    // \u5982\u679c\u5b58\u5728this.timer\uff0c\u5219\u4f7f\u7528clearTimeout\u6e05\u7a7a\u3002\n    // \u5982\u679c\u4f60\u4f7f\u7528\u591a\u4e2atimer\uff0c\u90a3\u4e48\u7528\u591a\u4e2a\u53d8\u91cf\uff0c\u6216\u8005\u7528\u4e2a\u6570\u7ec4\u6765\u4fdd\u5b58\u5f15\u7528\uff0c\u7136\u540e\u9010\u4e2aclear\n    this.timer && clearTimeout(this.timer);\n  }\n}\n'})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},71426:(e,n,t)=>{var r=t(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!o.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>s});var r=t(27378);const i=r.createContext({});function s(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:s(e),r.createElement(i.Provider,{value:c},n)}}}]);