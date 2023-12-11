/*! For license information please see c8789a67.cda33c5f.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[36857],{94045:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=n(24246),a=n(71670),l=n(48375),s=n(86386),o=n(11674);const c={id:"appearance",title:"Appearance"},i=void 0,d={id:"appearance",title:"Appearance",description:"Appearance \u6a21\u5757\u63d0\u4f9b\u4e86\u5173\u4e8e\u7528\u6237\u5916\u89c2\u504f\u597d\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u4ed6\u4eec\u559c\u6b22\u7684\u989c\u8272\u65b9\u6848\uff08\u660e\u4eae\u6216\u6697\u9ed1\uff09\u3002",source:"@site/../cndocs/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/next/appearance",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appearance.md",tags:[],version:"current",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"api",previous:{title:"Animated.ValueXY",permalink:"/docs/next/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/next/appregistry"}},u={},h=[{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getColorScheme()</code>",id:"getcolorscheme",level:3},{value:"<code>setColorScheme()</code>",id:"setcolorscheme",level:3},{value:"<code>addChangeListener()</code>",id:"addchangelistener",level:3}];function p(e){const r=Object.assign({pre:"pre",code:"code",p:"p",h4:"h4",blockquote:"blockquote",a:"a",h2:"h2",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"import { Appearance } from 'react-native';\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Appearance"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u5173\u4e8e\u7528\u6237\u5916\u89c2\u504f\u597d\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u4ed6\u4eec\u559c\u6b22\u7684\u989c\u8272\u65b9\u6848\uff08\u660e\u4eae\u6216\u6697\u9ed1\uff09\u3002"]}),"\n",(0,t.jsx)(r.h4,{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",children:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"}),"\n",(0,t.jsxs)(l.Z,{groupId:"guide",defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),children:[(0,t.jsx)(s.Z,{value:"web",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Appearance"})," API\u7684\u7075\u611f\u6765\u81ea W3C \u7684",(0,t.jsx)(r.a,{href:"https://drafts.csswg.org/mediaqueries-5/",children:"\u5a92\u4f53\u67e5\u8be2\u8349\u6848"}),"\u3002\u989c\u8272\u65b9\u6848\u504f\u597d\u662f\u57fa\u4e8e",(0,t.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",children:[(0,t.jsx)(r.code,{children:"prefers-color-scheme"})," CSS\u5a92\u4f53\u7279\u6027"]}),"\u3002"]}),"\n"]})}),(0,t.jsx)(s.Z,{value:"android",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["\u7528\u6237\u5bf9\u989c\u8272\u65b9\u6848\u7684\u504f\u597d\u5c06\u6620\u5c04\u5230 Android 10\uff08API \u7ea7\u522b 29\uff09\u53ca\u66f4\u9ad8\u7248\u672c\u8bbe\u5907\u4e0a\u7528\u6237\u7684\u6d45\u8272\u6216",(0,t.jsx)(r.a,{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme",children:"\u6df1\u8272\u4e3b\u9898"}),"\u504f\u597d\u3002"]}),"\n"]})}),(0,t.jsx)(s.Z,{value:"ios",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["\u989c\u8272\u65b9\u6848\u504f\u597d\u5c06\u4e0e\u7528\u6237\u5728 iOS 13 \u53ca\u66f4\u9ad8\u7248\u672c\u8bbe\u5907\u4e0a\u7684\u6d45\u8272\u6216",(0,t.jsx)(r.a,{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/",children:"\u6df1\u8272\u6a21\u5f0f"}),"\u504f\u597d\u76f8\u5339\u914d\u3002"]}),"\n"]})})]}),"\n",(0,t.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Appearance"})," \u6a21\u5757\u7528\u6765\u68c0\u6d4b\u7528\u6237\u662f\u5426\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\uff08\u591c\u95f4\u6a21\u5f0f\uff09\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // \u7528\u6237\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5c3d\u7ba1\u989c\u8272\u65b9\u6848\u53ef\u4ee5\u7acb\u5373\u4f7f\u7528\uff0c\u4f46\u8fd9\u53ef\u80fd\u4f1a\u53d1\u751f\u53d8\u5316\uff08\u4f8b\u5982\uff0c\u5728\u65e5\u51fa\u6216\u65e5\u843d\u65f6\u8ba1\u5212\u66f4\u6539\u989c\u8272\u65b9\u6848\uff09\u3002\u4efb\u4f55\u4f9d\u8d56\u4e8e\u7528\u6237\u9996\u9009\u989c\u8272\u65b9\u6848\u7684\u6e32\u67d3\u903b\u8f91\u6216\u6837\u5f0f\u90fd\u5e94\u8be5\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u7f13\u5b58\u503c\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(r.a,{href:"usecolorscheme",children:(0,t.jsx)(r.code,{children:"useColorScheme"})})," React\u94a9\u5b50\uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u5e76\u8ba2\u9605\u4e86\u989c\u8272\u65b9\u6848\u66f4\u65b0\uff0c\u6216\u8005\u60a8\u53ef\u4ee5\u4f7f\u7528\u5185\u8054\u6837\u5f0f\u800c\u4e0d\u662f\u5728",(0,t.jsx)(r.code,{children:"StyleSheet"}),"\u4e2d\u8bbe\u7f6e\u503c\u3002"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,t.jsx)(r.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,t.jsx)(r.h3,{id:"getcolorscheme",children:(0,t.jsx)(r.code,{children:"getColorScheme()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"static getColorScheme(): 'light' | 'dark' | null;\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u6307\u793a\u5f53\u524d\u7528\u6237\u9996\u9009\u7684\u989c\u8272\u65b9\u6848\u3002\u8be5\u503c\u53ef\u80fd\u4f1a\u5728\u4ee5\u540e\u66f4\u65b0\uff0c\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u7528\u6237\u64cd\u4f5c\uff08\u4f8b\u5982\u8bbe\u5907\u8bbe\u7f6e\u4e2d\u7684\u4e3b\u9898\u9009\u62e9\uff09\u6216\u6309\u8ba1\u5212\u8fdb\u884c\uff08\u4f8b\u5982\u9075\u5faa\u65e5/\u591c\u5468\u671f\u7684\u6d45\u8272\u548c\u6df1\u8272\u4e3b\u9898\uff09\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u652f\u6301\u7684\u989c\u8272\u65b9\u6848\uff1a"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u53d6\u503c"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"light"'})}),(0,t.jsx)(r.td,{children:"\u7528\u6237\u9009\u62e9\u4e86\u6d45\u8272\u6a21\u5f0f\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"dark"'})}),(0,t.jsx)(r.td,{children:"\u7528\u6237\u9009\u62e9\u4e86\u6df1\u8272\u6a21\u5f0f\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"null"})}),(0,t.jsx)(r.td,{children:"\u7528\u6237\u6ca1\u6709\u660e\u786e\u9009\u62e9\u67d0\u79cd\u6a21\u5f0f\u3002"})]})]})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u6ce8\u610f\uff1a"})," \u5728\u4f7f\u7528 chrome \u8c03\u8bd5\u65f6\uff0c",(0,t.jsx)(r.code,{children:"getColorScheme()"}),"\u5c06\u59cb\u7ec8\u8fd4\u56de",(0,t.jsx)(r.code,{children:"light"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003",(0,t.jsx)(r.a,{href:"usecolorscheme",children:(0,t.jsx)(r.code,{children:"useColorScheme"})}),"\u3002"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"setcolorscheme",children:(0,t.jsx)(r.code,{children:"setColorScheme()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"static setColorScheme('light' | 'dark' | null): void;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5f3a\u5236\u5e94\u7528\u7a0b\u5e8f\u59cb\u7ec8\u91c7\u7528\u6d45\u8272\u6216\u6df1\u8272\u754c\u9762\u98ce\u683c\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,t.jsx)(r.code,{children:"null"}),"\uff0c\u8fd9\u5c06\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u7ee7\u627f\u7cfb\u7edf\u7684\u754c\u9762\u98ce\u683c\u3002\u5982\u679c\u60a8\u5206\u914d\u4e86\u4e0d\u540c\u7684\u503c\uff0c\u5219\u65b0\u6837\u5f0f\u5c06\u9002\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u53ca\u5176\u5185\u90e8\u7684\u6240\u6709\u539f\u751f\u5143\u7d20\uff08\u8b66\u62a5\u3001\u9009\u62e9\u5668\u7b49\uff09\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u652f\u6301\u7684\u989c\u8272\u65b9\u6848\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"light"}),"\uff1a\u4f7f\u7528\u6d45\u8272\u7528\u6237\u754c\u9762\u98ce\u683c\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"dark"}),"\uff1a\u4f7f\u7528\u6df1\u8272\u7528\u6237\u754c\u9762\u98ce\u683c\u3002"]}),"\n",(0,t.jsx)(r.li,{children:"null\uff1a\u9075\u5faa\u7cfb\u7edf\u7684\u754c\u9762\u98ce\u683c\u3002"}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u6ce8\u610f\uff1a\u6b64\u66f4\u6539\u4e0d\u4f1a\u5f71\u54cd\u7cfb\u7edf\u9009\u62e9\u7684\u754c\u9762\u98ce\u683c\u6216\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bbe\u7f6e\u7684\u4efb\u4f55\u6837\u5f0f\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"addchangelistener",children:(0,t.jsx)(r.code,{children:"addChangeListener()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"static addChangeListener(\n  listener: (preferences: {colorScheme: 'light' | 'dark' | null}) => void,\n): NativeEventSubscription;\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u5f53\u5916\u89c2\u9996\u9009\u9879\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1\u3002"})]})}const b=function(e={}){const{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},11674:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(63445);const a=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:a?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,r,n)=>{n.d(r,{Z:()=>h});var t=n(27378),a=n(38944);const l={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,r,n)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&d(e,n,r[n]);if(o)for(var n of o(r))i.call(r,n)&&d(e,n,r[n]);return e};function h({children:e,hidden:r,className:n}){return t.createElement("div",u({role:"tabpanel",className:(0,a.Z)(l.tabItem,n)},{hidden:r}),e)}},48375:(e,r,n)=>{n.d(r,{Z:()=>M});var t=n(27378),a=n(38944),l=n(12112),s=n(3620),o=n(69490),c=n(14953),i=n(27886),d=n(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,v=(e,r,n)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,x=(e,r)=>{for(var n in r||(r={}))f.call(r,n)&&v(e,n,r[n]);if(b)for(var n of b(r))m.call(r,n)&&v(e,n,r[n]);return e},j=(e,r)=>h(e,p(r));function g(e){var r,n;return null!=(n=null==(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:r.filter(Boolean))?n:[]}function y(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=r?r:function(e){return g(e).map((({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t})))}(n);return function(e){const r=(0,i.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function w({value:e,tabValues:r}){return r.some((r=>r.value===e))}function k({queryString:e=!1,groupId:r}){const n=(0,s.k6)(),a=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,c._X)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace(j(x({},n.location),{search:r.toString()}))}),[a,n])]}function O(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,l=y(e),[s,c]=(0,t.useState)((()=>function({defaultValue:e,tabValues:r}){var n;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=null!=(n=r.find((e=>e.default)))?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[i,u]=k({queryString:n,groupId:a}),[h,p]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,d.Nk)(r);return[n,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:a}),b=(()=>{const e=null!=i?i:h;return w({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!w({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var S=n(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var C=Object.defineProperty,I=Object.defineProperties,_=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,V=(e,r,n)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,q=(e,r)=>{for(var n in r||(r={}))A.call(r,n)&&V(e,n,r[n]);if(P)for(var n of P(r))N.call(r,n)&&V(e,n,r[n]);return e},T=(e,r)=>I(e,_(r));function Z({className:e,block:r,selectedValue:n,selectValue:s,tabValues:o}){const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),a=o[t].value;a!==n&&(i(r),s(a))},u=e=>{var r,n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=null!=(n=c[r])?n:c[c.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},e)},o.map((({value:e,label:r,attributes:l})=>t.createElement("li",T(q({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:u,onClick:d},l),{className:(0,a.Z)("tabs__item",E.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=r?r:e))))}function D({lazy:e,children:r,selectedValue:n}){const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function L(e){const r=O(e);return t.createElement("div",{className:(0,a.Z)("tabs-container",E.tabList)},t.createElement(Z,q(q({},e),r)),t.createElement(D,q(q({},e),r)))}function M(e){const r=(0,S.Z)();return t.createElement(L,q({key:String(r)},e),g(e.children))}},71426:(e,r,n)=>{var t=n(27378),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,l={},i=null,d=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,t)&&!c.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===l[t]&&(l[t]=r[t]);return{$$typeof:a,type:e,key:i,ref:d,props:l,_owner:o.current}}r.Fragment=l,r.jsx=i,r.jsxs=i},24246:(e,r,n)=>{e.exports=n(71426)},71670:(e,r,n)=>{n.d(r,{Zo:()=>o,ah:()=>l});var t=n(27378);const a=t.createContext({});function l(e){const r=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function o({components:e,children:r,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:l(e),t.createElement(a.Provider,{value:o},r)}}}]);