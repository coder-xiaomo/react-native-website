/*! For license information please see 64c7b138.74bb762c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[95014],{67637:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=s(24246),t=s(71670);const c={id:"switch",title:"Switch"},d=void 0,i={unversionedId:"switch",id:"version-0.71/switch",title:"Switch",description:"\u8de8\u5e73\u53f0\u901a\u7528\u7684\u201c\u5f00\u5173\u201d\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-0.71/switch.md",sourceDirName:".",slug:"/switch",permalink:"/docs/0.71/switch",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/switch.md",tags:[],version:"0.71",frontMatter:{id:"switch",title:"Switch"},sidebar:"\u7ec4\u4ef6",previous:{title:"StatusBar",permalink:"/docs/0.71/statusbar"},next:{title:"Text",permalink:"/docs/0.71/text"}},o={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:'<code>ios_backgroundColor</code> <div class="label ios">iOS</div>',id:"ios_backgroundcolor-ios",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",level:3},{value:"<code>trackColor</code>",id:"trackcolor",level:3},{value:"<code>value</code>",id:"value",level:3}];function a(e){const n=Object.assign({p:"p",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u8de8\u5e73\u53f0\u901a\u7528\u7684\u201c\u5f00\u5173\u201d\u7ec4\u4ef6\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u201c\u53d7\u63a7\u7ec4\u4ef6\u201d\uff08controlled component\uff09\u3002\u4f60\u5fc5\u987b\u4f7f\u7528",(0,r.jsx)(n.code,{children:"onValueChange"}),"\u56de\u8c03\u6765\u66f4\u65b0",(0,r.jsx)(n.code,{children:"value"}),"\u5c5e\u6027\u4ee5\u54cd\u5e94\u7528\u6237\u7684\u64cd\u4f5c\u3002\u5982\u679c\u4e0d\u66f4\u65b0",(0,r.jsx)(n.code,{children:"value"}),"\u5c5e\u6027\uff0c\u7ec4\u4ef6\u53ea\u4f1a\u6309\u4e00\u5f00\u59cb\u7ed9\u5b9a\u7684",(0,r.jsx)(n.code,{children:"value"}),"\u503c\u6765\u6e32\u67d3\u4e14\u4fdd\u6301\u4e0d\u53d8\uff0c\u770b\u4e0a\u53bb\u5c31\u50cf\u5b8c\u5168\u70b9\u4e0d\u52a8\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"Switch","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20Switch%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BisEnabled%2C%20setIsEnabled%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20setIsEnabled(previousState%20%3D%3E%20!previousState)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CSwitch%5Cn%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%5C%22%23767577%5C%22%2C%20true%3A%20%5C%22%2381b0ff%5C%22%20%7D%7D%5Cn%20%20%20%20%20%20%20%20thumbColor%3D%7BisEnabled%20%3F%20%5C%22%23f5dd4b%5C%22%20%3A%20%5C%22%23f4f3f4%5C%22%7D%5Cn%20%20%20%20%20%20%20%20ios_backgroundColor%3D%5C%22%233e3e3e%5C%22%5Cn%20%20%20%20%20%20%20%20onValueChange%3D%7BtoggleSwitch%7D%5Cn%20%20%20%20%20%20%20%20value%3D%7BisEnabled%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,r.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,r.jsx)(n.h3,{id:"view-props",children:(0,r.jsx)(n.a,{href:"/docs/0.71/view#props",children:"View Props"})}),"\n",(0,r.jsxs)(n.p,{children:["Inherits ",(0,r.jsx)(n.a,{href:"/docs/0.71/view#props",children:"View Props"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"disabled",children:(0,r.jsx)(n.code,{children:"disabled"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4e3a",(0,r.jsx)(n.code,{children:"true"}),"\u5219\u7981\u7528\u6b64\u7ec4\u4ef6\u7684\u4ea4\u4e92\u3002"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"ios_backgroundcolor-ios",children:[(0,r.jsx)(n.code,{children:"ios_backgroundColor"})," ",(0,r.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,r.jsxs)(n.p,{children:["On iOS, custom color for the background. This background color can be seen either when the switch value is ",(0,r.jsx)(n.code,{children:"false"})," or when the switch is disabled (and the switch is translucent)."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/0.71/colors",children:"color"})})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onchange",children:(0,r.jsx)(n.code,{children:"onChange"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u503c\u6539\u53d8\u7684\u65f6\u5019\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u4e8b\u4ef6\u3002 If you want to only receive the new value, use ",(0,r.jsx)(n.code,{children:"onValueChange"})," instead."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"function"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onvaluechange",children:(0,r.jsx)(n.code,{children:"onValueChange"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u503c\u6539\u53d8\u7684\u65f6\u5019\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u65b0\u7684\u503c\u3002 If you want to instead receive an event, use ",(0,r.jsx)(n.code,{children:"onChange"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"function"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"thumbcolor",children:(0,r.jsx)(n.code,{children:"thumbColor"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u5173\u4e0a\u5706\u5f62\u6309\u94ae\u7684\u80cc\u666f\u989c\u8272\u3002\u5728 iOS \u4e0a\u8bbe\u7f6e\u6b64\u989c\u8272\u4f1a\u4e22\u5931\u6309\u94ae\u7684\u6295\u5f71\u6548\u679c\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/0.71/colors",children:"color"})})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"trackcolor",children:(0,r.jsx)(n.code,{children:"trackColor"})}),"\n",(0,r.jsx)(n.p,{children:"\u5173\u95ed\u72b6\u6001\u65f6\u7684\u8fb9\u6846\u989c\u8272(iOS)\u6216\u80cc\u666f\u989c\u8272(Android)\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"iOS"}),": When the switch value is ",(0,r.jsx)(n.code,{children:"false"}),", the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",(0,r.jsx)(n.a,{href:"/docs/0.71/switch#ios_backgroundColor",children:(0,r.jsx)(n.code,{children:"ios_backgroundColor"})}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"Type"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"md object: {false: [color](colors), true: [color](colors)}"})})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"value",children:(0,r.jsx)(n.code,{children:"value"})}),"\n",(0,r.jsx)(n.p,{children:"\u8868\u793a\u6b64\u5f00\u5173\u662f\u5426\u6253\u5f00\u3002\u9ed8\u8ba4\u4e3a false\uff08\u5173\u95ed\u72b6\u6001\uff09\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{children:"bool"})})})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},71426:(e,n,s)=>{var r=s(27378),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var r,c={},l=null,a=null;for(r in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,r)&&!o.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:t,type:e,key:l,ref:a,props:c,_owner:i.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var r=s(27378);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||d:c(e),r.createElement(t.Provider,{value:i},n)}}}]);