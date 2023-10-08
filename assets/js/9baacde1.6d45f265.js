/*! For license information please see 9baacde1.6d45f265.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64039],{2082:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=r(24246),t=r(71670);const i={id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"},o=void 0,d={unversionedId:"progressviewios",id:"version-0.71/progressviewios",title:"\ud83d\udea7 ProgressViewIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/progress-view instead.",source:"@site/versioned_docs/version-0.71/progressviewios.md",sourceDirName:".",slug:"/progressviewios",permalink:"/docs/0.71/progressviewios",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/progressviewios.md",tags:[],version:"0.71",frontMatter:{id:"progressviewios",title:"\ud83d\udea7 ProgressViewIOS"}},c={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Props",id:"props",level:2},{value:"<code>progress</code>",id:"progress",level:3},{value:"<code>progressImage</code>",id:"progressimage",level:3},{value:"<code>progressTintColor</code>",id:"progresstintcolor",level:3},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",level:3},{value:"<code>trackImage</code>",id:"trackimage",level:3},{value:"<code>trackTintColor</code>",id:"tracktintcolor",level:3}];function a(e){const s=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",h3:"h3",div:"div",hr:"hr",h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u5df2\u8fc7\u65f6\u3002"})," Use ",(0,n.jsx)(s.a,{href:"https://github.com/react-native-community/progress-view",children:"@react-native-community/progress-view"})," instead."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4f7f\u7528",(0,n.jsx)(s.code,{children:"ProgressViewIOS"}),"\u6765\u5728 iOS \u4e0a\u6e32\u67d3\u4e00\u4e2a UIProgressView\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(s.div,{class:"snack-player","data-snack-name":"ProgressViewIOS","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20ProgressViewIOS%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%200%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%20style%3D%7Bstyles.progress%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Bar%20-%2050%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%5Cn%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%5C%22%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EProgress%20Bar%20-%20100%25%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressViewIOS%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.progress%7D%5Cn%20%20%20%20%20%20%20%20%20%20progressTintColor%3D%5C%22black%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20progress%3D%7B1%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20example%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%20%20progress%3A%20%7B%5Cn%20%20%20%20width%3A%20200%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,n.jsx)(s.h2,{id:"props",children:"Props"}),"\n",(0,n.jsx)(s.h3,{id:"progress",children:(0,n.jsx)(s.code,{children:"progress"})}),"\n",(0,n.jsx)(s.p,{children:"\u5f53\u524d\u7684\u8fdb\u5ea6\u503c\uff080 \u5230 1 \u4e4b\u95f4\uff09\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{children:"\u5fc5\u9700"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"number"}),(0,n.jsx)(s.td,{children:"\u5426"})]})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"progressimage",children:(0,n.jsx)(s.code,{children:"progressImage"})}),"\n",(0,n.jsx)(s.p,{children:"\u4e00\u4e2a\u53ef\u4ee5\u62c9\u4f38\u7684\u56fe\u7247\uff0c\u7528\u4e8e\u663e\u793a\u8fdb\u5ea6\u6761\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{children:"\u5fc5\u9700"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Image.propTypes.source"}),(0,n.jsx)(s.td,{children:"\u5426"})]})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"progresstintcolor",children:(0,n.jsx)(s.code,{children:"progressTintColor"})}),"\n",(0,n.jsx)(s.p,{children:"\u8fdb\u5ea6\u6761\u672c\u8eab\u67d3\u4e0a\u7684\u989c\u8272\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{children:"\u5fc5\u9700"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"\u5426"})]})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"progressviewstyle",children:(0,n.jsx)(s.code,{children:"progressViewStyle"})}),"\n",(0,n.jsx)(s.p,{children:"\u8fdb\u5ea6\u6761\u7684\u6837\u5f0f\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{children:"\u5fc5\u9700"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"enum('default', 'bar')"}),(0,n.jsx)(s.td,{children:"\u5426"})]})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"trackimage",children:(0,n.jsx)(s.code,{children:"trackImage"})}),"\n",(0,n.jsx)(s.p,{children:"\u4e00\u4e2a\u53ef\u62c9\u4f38\u7684\u56fe\u7247\uff0c\u7528\u4e8e\u663e\u793a\u8fdb\u5ea6\u6761\u540e\u9762\u7684\u8f68\u9053\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{children:"\u5fc5\u9700"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Image.propTypes.source"}),(0,n.jsx)(s.td,{children:"\u5426"})]})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"tracktintcolor",children:(0,n.jsx)(s.code,{children:"trackTintColor"})}),"\n",(0,n.jsx)(s.p,{children:"\u8fdb\u5ea6\u6761\u8f68\u9053\u67d3\u4e0a\u7684\u989c\u8272\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{children:"\u5fc5\u9700"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"\u5426"})]})})]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},71426:(e,s,r)=>{var n=r(27378),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,r){var n,i={},l=null,a=null;for(n in void 0!==r&&(l=""+r),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(a=s.ref),s)o.call(s,n)&&!c.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:t,type:e,key:l,ref:a,props:i,_owner:d.current}}s.Fragment=i,s.jsx=l,s.jsxs=l},24246:(e,s,r)=>{e.exports=r(71426)},71670:(e,s,r)=>{r.d(s,{Zo:()=>d,ah:()=>i});var n=r(27378);const t=n.createContext({});function i(e){const s=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function d({components:e,children:s,disableParentContext:r}){let d;return d=r?"function"==typeof e?e({}):e||o:i(e),n.createElement(t.Provider,{value:d},s)}}}]);