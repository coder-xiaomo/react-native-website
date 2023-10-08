/*! For license information please see cf9d5ce2.dffb10c6.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[93484],{59849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(24246),c=t(71670);const r={id:"checkbox",title:"\ud83d\udea7 CheckBox"},d=void 0,o={unversionedId:"checkbox",id:"version-0.72/checkbox",title:"\ud83d\udea7 CheckBox",description:"Removed. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.72/checkbox.md",sourceDirName:".",slug:"/checkbox",permalink:"/docs/checkbox",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/checkbox.md",tags:[],version:"0.72",frontMatter:{id:"checkbox",title:"\ud83d\udea7 CheckBox"}},i={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>testID</code>",id:"testid",level:3},{value:"<code>value</code>",id:"value",level:3}];function a(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Removed."})," Use one of the ",(0,s.jsx)(n.a,{href:"https://reactnative.directory/?search=checkbox",children:"community packages"})," instead."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6e32\u67d3\u4e00\u4e2a\u5355\u9009\u6846\uff08\u76ee\u524d\u4ec5 Android \u53ef\u7528\uff09\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["This is a controlled component that requires an ",(0,s.jsx)(n.code,{children:"onValueChange"})," callback that updates the ",(0,s.jsx)(n.code,{children:"value"})," prop in order for the component to reflect user actions. If the ",(0,s.jsx)(n.code,{children:"value"})," prop is not updated, the component will continue to render the supplied ",(0,s.jsx)(n.code,{children:"value"})," prop instead of the expected result of any user actions."]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"CheckBox Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20CheckBox%2C%20Text%2C%20StyleSheet%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BisSelected%2C%20setSelection%5D%20%3D%20useState(false)%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.checkboxContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CCheckBox%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BisSelected%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BsetSelection%7D%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.checkbox%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3EDo%20you%20like%20React%20Native%3F%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CText%3EIs%20CheckBox%20selected%3A%20%7BisSelected%20%3F%20%5C%22%F0%9F%91%8D%5C%22%20%3A%20%5C%22%F0%9F%91%8E%5C%22%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20checkboxContainer%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20marginBottom%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%20%20checkbox%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ee7\u627f\u6240\u6709",(0,s.jsx)(n.a,{href:"view#props",children:"View \u7684 Props"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"disabled",children:(0,s.jsx)(n.code,{children:"disabled"})}),"\n",(0,s.jsxs)(n.p,{children:["If true the user won't be able to toggle the checkbox. Default value is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onchange",children:(0,s.jsx)(n.code,{children:"onChange"})}),"\n",(0,s.jsx)(n.p,{children:"Used in case the props change removes the component."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onvaluechange",children:(0,s.jsx)(n.code,{children:"onValueChange"})}),"\n",(0,s.jsx)(n.p,{children:"Invoked with the new value when the value changes."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"testid",children:(0,s.jsx)(n.code,{children:"testID"})}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u6b64\u89c6\u56fe\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"value",children:(0,s.jsx)(n.code,{children:"value"})}),"\n",(0,s.jsxs)(n.p,{children:["The value of the checkbox. If true the checkbox will be turned on. Default value is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"\u5426"})]})})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},71426:(e,n,t)=>{var s=t(27378),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,r={},l=null,a=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:c,type:e,key:l,ref:a,props:r,_owner:o.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(27378);const c=s.createContext({});function r(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||d:r(e),s.createElement(c.Provider,{value:o},n)}}}]);