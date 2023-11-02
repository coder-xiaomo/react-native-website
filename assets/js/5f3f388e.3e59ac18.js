/*! For license information please see 5f3f388e.3e59ac18.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[49697],{13811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>C,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=t(24246),a=t(71670);const o={id:"toastandroid",title:"ToastAndroid"},i=void 0,d={unversionedId:"toastandroid",id:"version-0.71/toastandroid",title:"ToastAndroid",description:"\u672c\u6a21\u5757\u5c06\u539f\u751f\u7684 ToastAndroid \u6a21\u5757\u5bfc\u51fa\u4e3a\u4e00\u4e2a JS \u6a21\u5757\uff0c\u7528\u4e8e\u5728 Android \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u60ac\u6d6e\u7684\u63d0\u793a\u4fe1\u606f\u3002\u672c\u6a21\u5757\u5305\u542b\u4e00\u4e2ashow\u65b9\u6cd5\u63a5\u53d7\u4ee5\u4e0b\u7684\u53c2\u6570\uff1a",source:"@site/versioned_docs/version-0.71/toastandroid.md",sourceDirName:".",slug:"/toastandroid",permalink:"/docs/0.71/toastandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/toastandroid.md",tags:[],version:"0.71",frontMatter:{id:"toastandroid",title:"ToastAndroid"},sidebar:"api",previous:{title:"PermissionsAndroid",permalink:"/docs/0.71/permissionsandroid"},next:{title:"ActionSheetIOS",permalink:"/docs/0.71/actionsheetios"}},r={},c=[{value:"Imperative hack",id:"imperative-hack",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>show()</code>",id:"show",level:3},{value:"<code>showWithGravity()</code>",id:"showwithgravity",level:3},{value:"<code>showWithGravityAndOffset()</code>",id:"showwithgravityandoffset",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>SHORT</code>",id:"short",level:3},{value:"<code>LONG</code>",id:"long",level:3},{value:"<code>TOP</code>",id:"top",level:3},{value:"<code>BOTTOM</code>",id:"bottom",level:3},{value:"<code>CENTER</code>",id:"center",level:3}];function l(e){const n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",em:"em",div:"div",h3:"h3",hr:"hr",h1:"h1",h2:"h2",pre:"pre"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u672c\u6a21\u5757\u5c06\u539f\u751f\u7684 ToastAndroid \u6a21\u5757\u5bfc\u51fa\u4e3a\u4e00\u4e2a JS \u6a21\u5757\uff0c\u7528\u4e8e\u5728 Android \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u60ac\u6d6e\u7684\u63d0\u793a\u4fe1\u606f\u3002\u672c\u6a21\u5757\u5305\u542b\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"show"}),"\u65b9\u6cd5\u63a5\u53d7\u4ee5\u4e0b\u7684\u53c2\u6570\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"message"})," \u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5c06\u8981\u663e\u793a\u7684\u6587\u672c\u5185\u5bb9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"duration"})," \u63d0\u793a\u4fe1\u606f\u6301\u7eed\u663e\u793a\u7684\u65f6\u95f4\u3002\u53ef\u4ee5\u662f",(0,s.jsx)(n.code,{children:"ToastAndroid.SHORT"}),"\u6216\u8005",(0,s.jsx)(n.code,{children:"ToastAndroid.LONG"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd8\u6709\u4e00\u4e2a\u540d\u4e3a",(0,s.jsx)(n.code,{children:"showWithGravity"}),"\u7684\u65b9\u6cd5\u53ef\u4ee5\u6307\u5b9a\u5f39\u51fa\u7684\u4f4d\u7f6e\u3002\u53ef\u9009\u9879\u6709\uff1aToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER."]}),"\n",(0,s.jsx)(n.p,{children:"The 'showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)' method adds the ability to specify an offset with in pixels."}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Toast Android API Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%2C%20StatusBar%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20showToast%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.show(%5C%22A%20pikachu%20appeared%20nearby%20!%5C%22%2C%20ToastAndroid.SHORT)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20showToastWithGravity%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.showWithGravity(%5Cn%20%20%20%20%20%20%5C%22All%20Your%20Base%20Are%20Belong%20To%20Us%5C%22%2C%5Cn%20%20%20%20%20%20ToastAndroid.SHORT%2C%5Cn%20%20%20%20%20%20ToastAndroid.CENTER%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20showToastWithGravityAndOffset%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20ToastAndroid.showWithGravityAndOffset(%5Cn%20%20%20%20%20%20%5C%22A%20wild%20toast%20appeared!%5C%22%2C%5Cn%20%20%20%20%20%20ToastAndroid.LONG%2C%5Cn%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%5Cn%20%20%20%20%20%2025%2C%5Cn%20%20%20%20%20%2050%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Toast%5C%22%20onPress%3D%7B()%20%3D%3E%20showToast()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Toggle%20Toast%20With%20Gravity%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravity()%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Toggle%20Toast%20With%20Gravity%20%26%20Offset%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravityAndOffset()%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23888888%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(n.h3,{id:"imperative-hack",children:"Imperative hack"}),"\n",(0,s.jsx)(n.p,{children:"The ToastAndroid API is imperative, but there is a way to expose a declarative component from it as in this example:"}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Advanced Toast Android API Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%2C%20StatusBar%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Toast%20%3D%20(%7B%20visible%2C%20message%20%7D)%20%3D%3E%20%7B%5Cn%20%20if%20(visible)%20%7B%5Cn%20%20%20%20ToastAndroid.showWithGravityAndOffset(%5Cn%20%20%20%20%20%20message%2C%5Cn%20%20%20%20%20%20ToastAndroid.LONG%2C%5Cn%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%5Cn%20%20%20%20%20%2025%2C%5Cn%20%20%20%20%20%2050%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20return%20null%3B%5Cn%20%20%7D%5Cn%20%20return%20null%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BvisibleToast%2C%20setvisibleToast%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20setvisibleToast(false)%2C%20%5BvisibleToast%5D)%3B%5Cn%5Cn%20%20const%20handleButtonPress%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20setvisibleToast(true)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CToast%20visible%3D%7BvisibleToast%7D%20message%3D%5C%22Example%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Toast%5C%22%20onPress%3D%7B()%20%3D%3E%20handleButtonPress()%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20StatusBar.currentHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23888888%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"show",children:(0,s.jsx)(n.code,{children:"show()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static show(message, duration)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"showwithgravity",children:(0,s.jsx)(n.code,{children:"showWithGravity()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static showWithGravity(message, duration, gravity)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"showwithgravityandoffset",children:(0,s.jsx)(n.code,{children:"showWithGravityAndOffset()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,s.jsx)(n.h3,{id:"short",children:(0,s.jsx)(n.code,{children:"SHORT"})}),"\n",(0,s.jsx)(n.p,{children:"Indicates the duration on the screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"ToastAndroid.SHORT;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"long",children:(0,s.jsx)(n.code,{children:"LONG"})}),"\n",(0,s.jsx)(n.p,{children:"Indicates the duration on the screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"ToastAndroid.LONG;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"top",children:(0,s.jsx)(n.code,{children:"TOP"})}),"\n",(0,s.jsx)(n.p,{children:"Indicates the position on the screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"ToastAndroid.TOP;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"bottom",children:(0,s.jsx)(n.code,{children:"BOTTOM"})}),"\n",(0,s.jsx)(n.p,{children:"Indicates the position on the screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"ToastAndroid.BOTTOM;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"center",children:(0,s.jsx)(n.code,{children:"CENTER"})}),"\n",(0,s.jsx)(n.p,{children:"Indicates the position on the screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"ToastAndroid.CENTER;\n"})})]})}const C=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},71426:(e,n,t)=>{var s=t(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,o={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,s)&&!r.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:a,type:e,key:c,ref:l,props:o,_owner:d.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>o});var s=t(27378);const a=s.createContext({});function o(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:o(e),s.createElement(a.Provider,{value:d},n)}}}]);