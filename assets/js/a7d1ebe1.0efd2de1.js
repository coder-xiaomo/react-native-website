/*! For license information please see a7d1ebe1.0efd2de1.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[22734],{94272:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=n(24246),a=n(71670),l=n(48375),s=n(86386),o=n(11674);const c={id:"appearance",title:"Appearance"},i=void 0,d={unversionedId:"appearance",id:"version-0.71/appearance",title:"Appearance",description:"The Appearance module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).",source:"@site/versioned_docs/version-0.71/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/0.71/appearance",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appearance.md",tags:[],version:"0.71",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"api",previous:{title:"Animated.ValueXY",permalink:"/docs/0.71/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/0.71/appregistry"}},u={},h=[{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getColorScheme()</code>",id:"getcolorscheme",level:3},{value:"<code>addChangeListener()</code>",id:"addchangelistener",level:3},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",level:3}];function p(e){const r=Object.assign({pre:"pre",code:"code",p:"p",h4:"h4",blockquote:"blockquote",a:"a",h2:"h2",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"import { Appearance } from 'react-native';\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"Appearance"})," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."]}),"\n",(0,t.jsx)(r.h4,{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",children:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"}),"\n",(0,t.jsxs)(l.Z,{groupId:"guide",defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),children:[(0,t.jsx)(s.Z,{value:"web",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"Appearance"})," API is inspired by the ",(0,t.jsx)(r.a,{href:"https://drafts.csswg.org/mediaqueries-5/",children:"Media Queries draft"})," from the W3C. The color scheme preference is modeled after the ",(0,t.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",children:[(0,t.jsx)(r.code,{children:"prefers-color-scheme"})," CSS media feature"]}),"."]}),"\n"]})}),(0,t.jsx)(s.Z,{value:"android",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The color scheme preference will map to the user's Light or ",(0,t.jsx)(r.a,{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme",children:"Dark theme"})," preference on Android 10 (API level 29) devices and higher."]}),"\n"]})}),(0,t.jsx)(s.Z,{value:"ios",children:(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The color scheme preference will map to the user's Light or ",(0,t.jsx)(r.a,{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/",children:"Dark Mode"})," preference on iOS 13 devices and higher."]}),"\n"]})})]}),"\n",(0,t.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Appearance"})," \u6a21\u5757\u7528\u6765\u68c0\u6d4b\u7528\u6237\u662f\u5426\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\uff08\u591c\u95f4\u6a21\u5f0f\uff09\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // \u7528\u6237\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",(0,t.jsx)(r.a,{href:"usecolorscheme",children:(0,t.jsx)(r.code,{children:"useColorScheme"})})," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",(0,t.jsx)(r.code,{children:"StyleSheet"}),"."]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,t.jsx)(r.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,t.jsx)(r.h3,{id:"getcolorscheme",children:(0,t.jsx)(r.code,{children:"getColorScheme()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"static getColorScheme()\n"})}),"\n",(0,t.jsx)(r.p,{children:"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."}),"\n",(0,t.jsx)(r.p,{children:"Supported color schemes:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u53d6\u503c"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"light"'})}),(0,t.jsx)(r.td,{children:"\u7528\u6237\u9009\u62e9\u4e86\u6d45\u8272\u6a21\u5f0f\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:'"dark"'})}),(0,t.jsx)(r.td,{children:"\u7528\u6237\u9009\u62e9\u4e86\u6df1\u8272\u6a21\u5f0f\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"null"})}),(0,t.jsx)(r.td,{children:"\u7528\u6237\u6ca1\u6709\u660e\u786e\u9009\u62e9\u67d0\u79cd\u6a21\u5f0f\u3002"})]})]})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u6ce8\u610f\uff1a"})," \u5728\u4f7f\u7528 chrome \u8c03\u8bd5\u65f6\uff0c",(0,t.jsx)(r.code,{children:"getColorScheme()"}),"\u5c06\u59cb\u7ec8\u8fd4\u56de",(0,t.jsx)(r.code,{children:"light"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003",(0,t.jsx)(r.a,{href:"usecolorscheme",children:(0,t.jsx)(r.code,{children:"useColorScheme"})}),"\u3002"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"addchangelistener",children:(0,t.jsx)(r.code,{children:"addChangeListener()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"static addChangeListener(listener)\n"})}),"\n",(0,t.jsx)(r.p,{children:"Add an event handler that is fired when appearance preferences change."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"removechangelistener",children:(0,t.jsx)(r.code,{children:"removeChangeListener()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"static removeChangeListener(listener)\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u79fb\u9664\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002"})]})}const m=function(e={}){const{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},11674:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(63445);const a=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:a?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,r,n)=>{n.d(r,{Z:()=>h});var t=n(27378),a=n(38944);const l={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,r,n)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&d(e,n,r[n]);if(o)for(var n of o(r))i.call(r,n)&&d(e,n,r[n]);return e};function h({children:e,hidden:r,className:n}){return t.createElement("div",u({role:"tabpanel",className:(0,a.Z)(l.tabItem,n)},{hidden:r}),e)}},48375:(e,r,n)=>{n.d(r,{Z:()=>M});var t=n(27378),a=n(38944),l=n(12112),s=n(3620),o=n(69490),c=n(14953),i=n(27886),d=n(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,r,n)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,g=(e,r)=>{for(var n in r||(r={}))b.call(r,n)&&v(e,n,r[n]);if(m)for(var n of m(r))f.call(r,n)&&v(e,n,r[n]);return e},j=(e,r)=>h(e,p(r));function x(e){var r,n;return null!=(n=null==(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:r.filter(Boolean))?n:[]}function y(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=r?r:function(e){return x(e).map((({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t})))}(n);return function(e){const r=(0,i.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function w({value:e,tabValues:r}){return r.some((r=>r.value===e))}function k({queryString:e=!1,groupId:r}){const n=(0,s.k6)(),a=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,c._X)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace(j(g({},n.location),{search:r.toString()}))}),[a,n])]}function O(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,l=y(e),[s,c]=(0,t.useState)((()=>function({defaultValue:e,tabValues:r}){var n;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=null!=(n=r.find((e=>e.default)))?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[i,u]=k({queryString:n,groupId:a}),[h,p]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,d.Nk)(r);return[n,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:a}),m=(()=>{const e=null!=i?i:h;return w({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!w({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var S=n(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var C=Object.defineProperty,I=Object.defineProperties,_=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,V=(e,r,n)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,N=(e,r)=>{for(var n in r||(r={}))T.call(r,n)&&V(e,n,r[n]);if(A)for(var n of A(r))P.call(r,n)&&V(e,n,r[n]);return e},q=(e,r)=>I(e,_(r));function D({className:e,block:r,selectedValue:n,selectValue:s,tabValues:o}){const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),a=o[t].value;a!==n&&(i(r),s(a))},u=e=>{var r,n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=null!=(n=c[r])?n:c[c.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},e)},o.map((({value:e,label:r,attributes:l})=>t.createElement("li",q(N({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:u,onClick:d},l),{className:(0,a.Z)("tabs__item",E.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=r?r:e))))}function L({lazy:e,children:r,selectedValue:n}){const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function Z(e){const r=O(e);return t.createElement("div",{className:(0,a.Z)("tabs-container",E.tabList)},t.createElement(D,N(N({},e),r)),t.createElement(L,N(N({},e),r)))}function M(e){const r=(0,S.Z)();return t.createElement(Z,N({key:String(r)},e),x(e.children))}},71426:(e,r,n)=>{var t=n(27378),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,l={},i=null,d=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,t)&&!c.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===l[t]&&(l[t]=r[t]);return{$$typeof:a,type:e,key:i,ref:d,props:l,_owner:o.current}}r.Fragment=l,r.jsx=i,r.jsxs=i},24246:(e,r,n)=>{e.exports=n(71426)},71670:(e,r,n)=>{n.d(r,{Zo:()=>o,ah:()=>l});var t=n(27378);const a=t.createContext({});function l(e){const r=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function o({components:e,children:r,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:l(e),t.createElement(a.Provider,{value:o},r)}}}]);