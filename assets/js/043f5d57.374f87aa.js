/*! For license information please see 043f5d57.374f87aa.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[35853],{64e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(24246),c=n(71670);const i={id:"inputaccessoryview",title:"InputAccessoryView"},r=void 0,o={id:"inputaccessoryview",title:"InputAccessoryView",description:"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.",source:"@site/versioned_docs/version-0.71/inputaccessoryview.md",sourceDirName:".",slug:"/inputaccessoryview",permalink:"/docs/0.71/inputaccessoryview",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/inputaccessoryview.md",tags:[],version:"0.71",frontMatter:{id:"inputaccessoryview",title:"InputAccessoryView"},sidebar:"\u7ec4\u4ef6",previous:{title:"TouchableNativeFeedback",permalink:"/docs/0.71/touchablenativefeedback"},next:{title:"SafeAreaView",permalink:"/docs/0.71/safeareaview"}},a={},d=[{value:"Props",id:"props",level:2},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>nativeID</code>",id:"nativeid",level:3},{value:"<code>style</code>",id:"style",level:3}];function l(e){const t=Object.assign({p:"p",code:"code",div:"div",a:"a",hr:"hr",h1:"h1",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a ",(0,s.jsx)(t.code,{children:"TextInput"})," has focus. This component can be used to create custom toolbars."]}),"\n",(0,s.jsxs)(t.p,{children:["To use this component wrap your custom toolbar with the InputAccessoryView component, and set a ",(0,s.jsx)(t.code,{children:"nativeID"}),". Then, pass that ",(0,s.jsx)(t.code,{children:"nativeID"})," as the ",(0,s.jsx)(t.code,{children:"inputAccessoryViewID"})," of whatever ",(0,s.jsx)(t.code,{children:"TextInput"})," you desire. A simple example:"]}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"InputAccessoryView","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Button%2C%20InputAccessoryView%2C%20ScrollView%2C%20TextInput%20%7D%20from%20'react-native'%3B%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20inputAccessoryViewID%20%3D%20'uniqueID'%3B%5Cn%20%20const%20initialText%20%3D%20''%3B%5Cn%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState(initialText)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3C%3E%5Cn%20%20%20%20%20%20%3CScrollView%20keyboardDismissMode%3D%5C%22interactive%5C%22%3E%5Cn%20%20%20%20%20%20%20%20%3CTextInput%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2016%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2050%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20inputAccessoryViewID%3D%7BinputAccessoryViewID%7D%5Cn%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BsetText%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7Btext%7D%5Cn%20%20%20%20%20%20%20%20%20%20placeholder%3D%7B'Please%20type%20here%E2%80%A6'%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%20%20%20%20%3CInputAccessoryView%20nativeID%3D%7BinputAccessoryViewID%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setText(initialText)%7D%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Clear%20text%5C%22%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FInputAccessoryView%3E%5Cn%20%20%20%20%3C%2F%3E%5Cn%20%20)%3B%5Cn%7D%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsxs)(t.p,{children:["This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a ",(0,s.jsx)(t.code,{children:"TextInput"})," with the ",(0,s.jsx)(t.code,{children:"InputAccessoryView"})," component, and don't set a ",(0,s.jsx)(t.code,{children:"nativeID"}),". For an example, look at ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/InputAccessoryView/InputAccessoryViewExample.js",children:"InputAccessoryViewExample.js"}),"."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(t.h3,{id:"backgroundcolor",children:(0,s.jsx)(t.code,{children:"backgroundColor"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/0.71/colors",children:"color"})})})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"nativeid",children:(0,s.jsx)(t.code,{children:"nativeID"})}),"\n",(0,s.jsxs)(t.p,{children:["An ID which is used to associate this ",(0,s.jsx)(t.code,{children:"InputAccessoryView"})," to specified TextInput(s)."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"string"})})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"style",children:(0,s.jsx)(t.code,{children:"style"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/0.71/view-style-props",children:"style"})})})})]}),"\n",(0,s.jsx)(t.h1,{id:"\u5df2\u77e5\u95ee\u9898",children:"\u5df2\u77e5\u95ee\u9898"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/facebook/react-native/issues/18997",children:"react-native#18997"}),": \u4e0d\u652f\u6301\u591a\u884c\u7684",(0,s.jsx)(t.code,{children:"TextInput"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/facebook/react-native/issues/20157",children:"react-native#20157"}),": \u4e0d\u80fd\u548c\u5e95\u90e8 tab \u680f\u4e00\u8d77\u4f7f\u7528"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var s=n(27378),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,i={},d=null,l=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,s)&&!a.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:c,type:e,key:d,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var s=n(27378);const c=s.createContext({});function i(e){const t=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:i(e),s.createElement(c.Provider,{value:o},t)}}}]);