/*! For license information please see ac524e79.397474b9.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[57682],{14563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(24246),i=n(71670);const s={id:"clipboard",title:"\ud83d\udea7 Clipboard"},a=void 0,c={id:"clipboard",title:"\ud83d\udea7 Clipboard",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.73/clipboard.md",sourceDirName:".",slug:"/clipboard",permalink:"/docs/clipboard",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/clipboard.md",tags:[],version:"0.73",frontMatter:{id:"clipboard",title:"\ud83d\udea7 Clipboard"}},o={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getString()</code>",id:"getstring",level:3},{value:"<code>setString()</code>",id:"setstring",level:3}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Deprecated."})," Use one of the ",(0,r.jsx)(t.a,{href:"https://reactnative.directory/?search=clipboard",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Clipboard"}),"\u7ec4\u4ef6\u53ef\u4ee5\u5728 iOS \u548c Android \u7684\u526a\u8d34\u677f\u4e2d\u8bfb\u5199\u5185\u5bb9\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(t.div,{class:"snack-player","data-snack-name":"Clipboard API Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%5Cnimport%20%7B%20SafeAreaView%2C%20View%2C%20Text%2C%20TouchableOpacity%2C%20Clipboard%2C%20StyleSheet%20%7D%20from%20'react-native'%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BcopiedText%2C%20setCopiedText%5D%20%3D%20useState('')%5Cn%20%20const%20copyToClipboard%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Clipboard.setString('hello%20world')%5Cn%20%20%7D%5Cn%20%20const%20fetchCopiedText%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20text%20%3D%20await%20Clipboard.getString()%5Cn%20%20%20%20setCopiedText(text)%5Cn%20%20%7D%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7B%7B%20flex%3A%201%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20copyToClipboard()%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EClick%20here%20to%20copy%20to%20Clipboard%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20fetchCopiedText()%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EView%20copied%20text%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.copiedText%7D%3E%7BcopiedText%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%5Cn%7D%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%5Cn%20%20%7D%2C%5Cn%20%20copiedText%3A%20%7B%5Cn%20%20%20%20marginTop%3A%2010%2C%5Cn%20%20%20%20color%3A%20'red'%5Cn%20%20%7D%5Cn%7D)%5Cnexport%20default%20App%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,r.jsx)(t.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,r.jsx)(t.h3,{id:"getstring",children:(0,r.jsx)(t.code,{children:"getString()"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"static getString()\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u83b7\u53d6\u526a\u8d34\u677f\u7684\u6587\u672c\u5185\u5bb9\u3002\u8fd4\u56de\u4e00\u4e2a",(0,r.jsx)(t.code,{children:"Promise"}),"\uff0c\u7136\u540e\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u8bfb\u53d6\u526a\u8d34\u677f\u5185\u5bb9\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"async _getContent() {\n  const content = await Clipboard.getString();\n}\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"setstring",children:(0,r.jsx)(t.code,{children:"setString()"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"static setString(content)\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8bbe\u7f6e\u526a\u8d34\u677f\u7684\u6587\u672c\u5185\u5bb9\uff0c\u7136\u540e\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u8bbe\u7f6e\u526a\u8d34\u677f\u5185\u5bb9\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"_setContent() {\n  Clipboard.setString('hello world');\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u540d\u79f0"}),(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"content"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"The content to be stored in the clipboard"})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Notice"})}),"\n",(0,r.jsxs)(t.p,{children:["Be careful when you're trying to copy to clipboard any data except ",(0,r.jsx)(t.code,{children:"string"})," and ",(0,r.jsx)(t.code,{children:"number"}),", some data need additional stringification. For example, if you will try to copy array - Android will raise an exception, but iOS will not."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var r=n(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>s});var r=n(27378);const i=r.createContext({});function s(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:s(e),r.createElement(i.Provider,{value:c},t)}}}]);