/*! For license information please see 3380ced1.246a15e9.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51316],{6123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(24246),r=n(71670);const a={id:"view-flattening",title:"\u89c6\u56fe\u62cd\u5e73"},c=void 0,o={unversionedId:"view-flattening",id:"version-0.71/view-flattening",title:"\u89c6\u56fe\u62cd\u5e73",description:"This document refers to the architecture of the new renderer, Fabric, that is in active roll-out.",source:"@site/versioned_docs/version-0.71/view-flattening.md",sourceDirName:".",slug:"/view-flattening",permalink:"/docs/0.71/view-flattening",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/view-flattening.md",tags:[],version:"0.71",frontMatter:{id:"view-flattening",title:"\u89c6\u56fe\u62cd\u5e73"}},s={},l=[{value:"\u89c6\u56fe\u62cd\u5e73\uff08View Flattening\uff09\u662f React Native \u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5\u3002",id:"\u89c6\u56fe\u62cd\u5e73view-flattening\u662f-react-native-\u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5",level:4}];function d(e){const t=Object.assign({blockquote:"blockquote",p:"p",a:"a",h4:"h4",code:"code",pre:"pre",img:"img"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["This document refers to the architecture of the new renderer, ",(0,i.jsx)(t.a,{href:"fabric-renderer",children:"Fabric"}),", that is in active roll-out."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"\u89c6\u56fe\u62cd\u5e73view-flattening\u662f-react-native-\u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5",children:"\u89c6\u56fe\u62cd\u5e73\uff08View Flattening\uff09\u662f React Native \u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5\u3002"}),"\n",(0,i.jsx)(t.p,{children:"React API \u5728\u8bbe\u8ba1\u4e0a\u5e0c\u671b\u901a\u8fc7\u7ec4\u5408\u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u7ec4\u4ef6\u58f0\u660e\u548c\u91cd\u7528\uff0c\u8fd9\u4e3a\u66f4\u7b80\u5355\u7684\u5f00\u53d1\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u597d\u7684\u6a21\u578b\u3002\u4f46\u662f\u5728\u5b9e\u73b0\u4e2d\uff0cAPI \u7684\u8fd9\u4e9b\u7279\u6027\u4f1a\u5bfc\u81f4\u4e00\u4e9b React \u5143\u7d20\u4f1a\u5d4c\u5957\u5730\u5f88\u6df1\uff0c\u800c\u5176\u4e2d\u5927\u90e8\u5206 React \u5143\u7d20\u8282\u70b9\u53ea\u4f1a\u5f71\u54cd\u89c6\u56fe\u5e03\u5c40\uff0c\u5e76\u4e0d\u4f1a\u5728\u5c4f\u5e55\u4e2d\u6e32\u67d3\u4efb\u4f55\u5185\u5bb9\u3002\u8fd9\u5c31\u662f\u6240\u8c13\u7684**\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d**\u7c7b\u578b\u8282\u70b9\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0cReact \u5143\u7d20\u6811\u7684\u8282\u70b9\u6570\u91cf\u548c\u5c4f\u5e55\u4e0a\u7684\u89c6\u56fe\u6570\u91cf\u5e94\u8be5\u662f 1:1 \u7684\u5173\u7cfb\u3002\u4f46\u662f\uff0c\u6e32\u67d3\u4e00\u4e2a\u5f88\u6df1\u7684\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u7684 React \u5143\u7d20\u4f1a\u5bfc\u81f4\u6027\u80fd\u53d8\u6162\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u4e3e\u4e2a\u5f88\u5e38\u89c1\u7684\u4f8b\u5b50\uff0c\u4f8b\u5b50\u4e2d\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u89c6\u56fe\u5bfc\u81f4\u4e86\u6027\u80fd\u635f\u8017\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u60f3\u8c61\u4e00\u4e0b\uff0c\u4f60\u8981\u6e32\u67d3\u4e00\u4e2a\u6807\u9898\u3002\u4f60\u6709\u4e00\u4e2a\u5e94\u7528\uff0c\u5e94\u7528\u4e2d\u62e5\u6709\u5916\u8fb9\u8ddd ",(0,i.jsx)(t.code,{children:"ContainerComponent"}),"\u7684\u5bb9\u5668\u7ec4\u4ef6\uff0c\u5bb9\u5668\u7ec4\u4ef6\u7684\u5b50\u7ec4\u4ef6\u662f ",(0,i.jsx)(t.code,{children:"TitleComponent"})," \u6807\u9898\u7ec4\u4ef6\uff0c\u6807\u9898\u7ec4\u4ef6\u5305\u62ec\u4e00\u4e2a\u56fe\u7247\u548c\u4e00\u884c\u6587\u5b57\u3002React \u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"function MyComponent() {\n  return (\n    <View>                          // ReactAppComponent\n      <View style={{margin: 10}} /> // ContainerComponent\n        <View style={{margin: 10}}> // TitleComponent\n          <Image {...} />\n          <Text {...}>This is a title</Text>\n        </View>\n      </View>\n    </View>\n  );\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"React Native \u5728\u6e32\u67d3\u65f6\uff0c\u4f1a\u751f\u6210\u4ee5\u4e0b\u4e09\u68f5\u6811\uff1a"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://reactnative.dev/assets/images/diagram-one-3f2f9d7a2fa9d97b6b86fa3bd9b886d1.png",alt:"Diagram one"})}),"\n",(0,i.jsx)(t.p,{children:"\u6ce8\u610f\u89c6\u56fe 2 \u548c\u89c6\u56fe 3 \u662f\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u7684\u89c6\u56fe\uff0c\u56e0\u4e3a\u5b83\u4eec\u5728\u5c4f\u5e55\u4e0a\u6e32\u67d3\u53ea\u662f\u4e3a\u4e86\u63d0\u4f9b 10 \u50cf\u7d20\u7684\u5916\u8fb9\u8ddd\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u4e3a\u4e86\u63d0\u5347 React \u5143\u7d20\u6811\u4e2d\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u7c7b\u578b\u7684\u6027\u80fd\uff0c\u6e32\u67d3\u5668\u5b9e\u73b0\u4e86\u4e00\u79cd\u89c6\u56fe\u62cd\u5e73\u7684\u673a\u5236\u6765\u5408\u5e76\u6216\u62cd\u5e73\u8fd9\u7c7b\u8282\u70b9\uff0c\u51cf\u5c11\u5c4f\u5e55\u4e2d\u5bbf\u4e3b\u89c6\u56fe\u7684\u5c42\u7ea7\u6df1\u5ea6\u3002\u8be5\u7b97\u6cd5\u8003\u8651\u5230\u4e86\u5982\u4e0b\u5c5e\u6027\uff0c\u6bd4\u5982  ",(0,i.jsx)(t.code,{children:"margin"}),", ",(0,i.jsx)(t.code,{children:"padding"}),", ",(0,i.jsx)(t.code,{children:"backgroundColor"}),", ",(0,i.jsx)(t.code,{children:"opacity"}),"\u7b49\u7b49\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u89c6\u56fe\u62cd\u5e73\u7b97\u6cd5\u662f\u6e32\u67d3\u5668\u7684\u5bf9\u6bd4\uff08diffing\uff09\u9636\u6bb5\u7684\u4e00\u90e8\u5206\uff0c\u8fd9\u6837\u8bbe\u8ba1\u7684\u597d\u5904\u662f\u6211\u4eec\u4e0d\u9700\u8981\u989d\u5916\u7684 CPU \u8017\u65f6\uff0c\u6765\u62cd\u5e73 React \u5143\u7d20\u6811\u4e2d\u201c\u53ea\u53c2\u4e0e\u5e03\u5c40\u201d\u7684\u89c6\u56fe\u3002\u6b64\u5916\uff0c\u4f5c\u4e3a C++ \u6838\u5fc3\u7684\u4e00\u90e8\u5206\uff0c\u89c6\u56fe\u62cd\u5e73\u7b97\u6cd5\u9ed8\u8ba4\u662f\u5168\u5e73\u53f0\u5171\u7528\u7684\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u89c6\u56fe 2 \u548c\u89c6\u56fe 3 \u4f1a\u4f5c\u4e3a\u201c\u5bf9\u6bd4\u7b97\u6cd5\u201d\uff08diffing algorithm\uff09\u7684\u4e00\u90e8\u5206\u88ab\u62cd\u5e73\uff0c\u800c\u5b83\u4eec\u7684\u6837\u5f0f\u7ed3\u679c\u4f1a\u88ab\u5408\u5e76\u5230\u89c6\u56fe 1 \u4e2d\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://reactnative.dev/assets/images/diagram-two-b87959980d29e4a303465a3d0ac82c73.png",alt:"Diagram two"})}),"\n",(0,i.jsx)(t.p,{children:"\u867d\u7136\uff0c\u8fd9\u79cd\u4f18\u5316\u8ba9\u6e32\u67d3\u5668\u5c11\u521b\u5efa\u548c\u6e32\u67d3\u4e24\u4e2a\u5bbf\u4e3b\u89c6\u56fe\uff0c\u4f46\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u770b\u5c4f\u5e55\u5185\u5bb9\u6ca1\u6709\u4efb\u4f55\u533a\u522b\u3002"})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var i=n(27378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,a={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,i)&&!s.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>a});var i=n(27378);const r=i.createContext({});function a(e){const t=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:a(e),i.createElement(r.Provider,{value:o},t)}}}]);