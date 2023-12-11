/*! For license information please see ae6fccdb.e12296f9.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[57100],{4228:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=n(24246),t=n(71670);const d={id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"},i=void 0,l={id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/progress-bar-android instead.",source:"@site/versioned_docs/version-0.72/progressbarandroid.md",sourceDirName:".",slug:"/progressbarandroid",permalink:"/docs/0.72/progressbarandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/progressbarandroid.md",tags:[],version:"0.72",frontMatter:{id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"}},o={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Props",id:"props",level:2},{value:"<code>animating</code>",id:"animating",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>indeterminate</code>",id:"indeterminate",level:3},{value:"<code>progress</code>",id:"progress",level:3},{value:"<code>styleAttr</code>",id:"styleattr",level:3},{value:"<code>testID</code>",id:"testid",level:3}];function a(e){const r=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",h3:"h3",div:"div",hr:"hr",h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u5df2\u8fc7\u65f6\u3002"})," Use ",(0,s.jsx)(r.a,{href:"https://github.com/react-native-community/progress-bar-android",children:"@react-native-community/progress-bar-android"})," instead."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5c01\u88c5\u4e86 Android \u5e73\u53f0\u4e0a\u7684",(0,s.jsx)(r.code,{children:"ProgressBar"}),"\u7684 React \u7ec4\u4ef6\u3002\u8fd9\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u7528\u6765\u8868\u793a\u5e94\u7528\u6b63\u5728\u52a0\u8f7d\u6216\u8005\u6709\u4e9b\u4e8b\u60c5\u6b63\u5728\u8fdb\u884c\u4e2d\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(r.div,{class:"snack-player","data-snack-name":"ProgressBarAndroid","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7BView%2C%20StyleSheet%2C%20ProgressBarAndroid%2C%20Text%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3ECircle%20Progress%20Indicator%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EHorizontal%20Progress%20Indicator%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%5C%22Horizontal%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Indicator%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%5C%22Horizontal%5C%22%20color%3D%5C%22%232196F3%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EFixed%20Progress%20Value%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CProgressBarAndroid%5Cn%20%20%20%20%20%20%20%20%20%20styleAttr%3D%5C%22Horizontal%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20indeterminate%3D%7Bfalse%7D%5Cn%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%20%20example%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%2024%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(r.h3,{id:"animating",children:(0,s.jsx)(r.code,{children:"animating"})}),"\n",(0,s.jsx)(r.p,{children:"\u662f\u5426\u663e\u793a\u8fdb\u5ea6\u6761\uff08\u9ed8\u8ba4\u4e3a true \u663e\u793a\uff09\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"color",children:(0,s.jsx)(r.code,{children:"color"})}),"\n",(0,s.jsx)(r.p,{children:"\u8fdb\u5ea6\u6761\u7684\u989c\u8272\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/0.72/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"indeterminate",children:(0,s.jsx)(r.code,{children:"indeterminate"})}),"\n",(0,s.jsxs)(r.p,{children:["\u51b3\u5b9a\u8fdb\u5ea6\u6761\u662f\u5426\u8981\u663e\u793a\u4e00\u4e2a\u4e0d\u786e\u5b9a\u7684\u8fdb\u5ea6\u3002\u6ce8\u610f\u8fd9\u4e2a\u5728 styleAttr \u662f Horizontal \u7684\u65f6\u5019\u5fc5\u987b\u662f false\uff0c\u5e76\u4e14\u9700\u8981\u8bbe\u7f6e",(0,s.jsx)(r.code,{children:"progress"}),"\u503c\u3002"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"indeterminateType"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"progress",children:(0,s.jsx)(r.code,{children:"progress"})}),"\n",(0,s.jsx)(r.p,{children:"\u5f53\u524d\u7684\u8fdb\u5ea6\u503c\uff08\u5728 0 \u5230 1 \u4e4b\u95f4\uff09\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"styleattr",children:(0,s.jsx)(r.code,{children:"styleAttr"})}),"\n",(0,s.jsx)(r.p,{children:"\u8fdb\u5ea6\u6761\u7684\u6837\u5f0f\u3002\u53ef\u53d6\u503c\u6709\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Horizontal"}),"\n",(0,s.jsx)(r.li,{children:"Normal (default)"}),"\n",(0,s.jsx)(r.li,{children:"Small"}),"\n",(0,s.jsx)(r.li,{children:"Large"}),"\n",(0,s.jsx)(r.li,{children:"Inverse"}),"\n",(0,s.jsx)(r.li,{children:"SmallInverse"}),"\n",(0,s.jsx)(r.li,{children:"LargeInverse"}),"\n"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"enum('Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse')"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"testid",children:(0,s.jsx)(r.code,{children:"testID"})}),"\n",(0,s.jsx)(r.p,{children:"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u8fd9\u4e2a\u89c6\u56fe\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},71426:(e,r,n)=>{var s=n(27378),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,d={},c=null,a=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,s)&&!o.hasOwnProperty(s)&&(d[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===d[s]&&(d[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:a,props:d,_owner:l.current}}r.Fragment=d,r.jsx=c,r.jsxs=c},24246:(e,r,n)=>{e.exports=n(71426)},71670:(e,r,n)=>{n.d(r,{Zo:()=>l,ah:()=>d});var s=n(27378);const t=s.createContext({});function d(e){const r=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function l({components:e,children:r,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:d(e),s.createElement(t.Provider,{value:l},r)}}}]);