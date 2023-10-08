/*! For license information please see 68381642.75c52c8c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[69324],{18892:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=t(24246),r=t(71670),s=t(48375),i=t(86386),l=t(11674);const o={id:"share",title:"Share"},c=void 0,d={unversionedId:"share",id:"version-0.71/share",title:"Share",description:"\u793a\u4f8b",source:"@site/versioned_docs/version-0.71/share.md",sourceDirName:".",slug:"/share",permalink:"/docs/0.71/share",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/share.md",tags:[],version:"0.71",frontMatter:{id:"share",title:"Share"},sidebar:"api",previous:{title:"RootTag",permalink:"/docs/0.71/roottag"},next:{title:"StyleSheet",permalink:"/docs/0.71/stylesheet"}},u={},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>share()</code>",id:"share",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>sharedAction</code>",id:"sharedaction",level:3},{value:'<code>dismissedAction</code> <div class="label ios">iOS</div>',id:"dismissedaction-ios",level:3}];function p(e){const a=Object.assign({h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",code:"code",pre:"pre",p:"p",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsxs)(s.Z,{groupId:"syntax",defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,children:[(0,n.jsx)(i.Z,{value:"functional",children:(0,n.jsx)(a.div,{class:"snack-player","data-snack-name":"Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20ShareExample%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%5Cn%20%20%20%20%20%20%7D)%3B%5Cn%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20dismissed%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20alert(error.message)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20onPress%3D%7BonShare%7D%20title%3D%5C%22Share%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnexport%20default%20ShareExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})}),(0,n.jsx)(i.Z,{value:"classical",children:(0,n.jsx)(a.div,{class:"snack-player","data-snack-name":"Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20ShareExample%20extends%20Component%20%7B%5Cn%20%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%5Cn%20%20%20%20try%20%7B%5Cn%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%5Cn%20%20%20%20%20%20%20%20message%3A%5Cn%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%5Cn%20%20%20%20%20%20%7D)%3B%5Cn%5Cn%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%5Cn%20%20%20%20%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%5Cn%20%20%20%20%20%20%20%20%2F%2F%20dismissed%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D%20catch%20(error)%20%7B%5Cn%20%20%20%20%20%20alert(error.message)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bthis.onShare%7D%20title%3D%5C%22Share%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnexport%20default%20ShareExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,n.jsx)(a.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,n.jsx)(a.h3,{id:"share",children:(0,n.jsx)(a.code,{children:"share()"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"static share(content, options)\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u6253\u5f00\u4e00\u4e2a\u5bf9\u8bdd\u6846\u6765\u5206\u4eab\u6587\u672c\u5185\u5bb9\u3002"}),"\n",(0,n.jsxs)(a.p,{children:["\u5728 iOS \u4e2d\uff0c\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u6700\u7ec8\u4f1a\u89e3\u6790\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u6709",(0,n.jsx)(a.code,{children:"action"}),"\u548c",(0,n.jsx)(a.code,{children:"activityType"}),"\u4e24\u4e2a\u5c5e\u6027\u3002\u5982\u679c\u7528\u6237\u53d6\u6d88\u5bf9\u8bdd\u6846\uff0c\u5219 Promise \u4ecd\u5c06\u88ab\u89e3\u6790\uff0c\u6700\u7ec8\u8fd4\u56de\u7684",(0,n.jsx)(a.code,{children:"action"}),"\u5c5e\u6027\u4f1a\u662f",(0,n.jsx)(a.code,{children:"Share.dismissedAction"}),"\uff0c\u800c\u5176\u4ed6\u5c5e\u6027\u4e3a undefined\u3002Note that some share options will not appear or work on the iOS simulator."]}),"\n",(0,n.jsxs)(a.p,{children:["\u5728 Android \u4e2d\u540c\u6837\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u4f46\u8fd4\u56de\u7684",(0,n.jsx)(a.code,{children:"action"}),"\u59cb\u7ec8\u4e3a",(0,n.jsx)(a.code,{children:"Share.sharedAction"}),"\u3002"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"\u5c5e\u6027\uff1a"})}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"\u540d\u79f0"}),(0,n.jsx)(a.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(a.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsxs)(a.td,{children:["content ",(0,n.jsx)("div",{className:"label basic required",children:"\u5fc5\u9700"})]}),(0,n.jsx)(a.td,{children:"object"}),(0,n.jsxs)(a.td,{children:[(0,n.jsx)(a.code,{children:"message"})," - \u8981\u5206\u4eab\u7684\u6d88\u606f",(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"url"})," - \u8981\u5206\u4eab\u7684\u7f51\u5740 ",(0,n.jsx)("div",{class:"label ios",children:"iOS"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"title"})," - \u6d88\u606f\u7684\u6807\u9898 ",(0,n.jsx)("div",{class:"label android",children:"Android"}),(0,n.jsx)("hr",{}),(0,n.jsx)(a.code,{children:"url"}),"\u6216",(0,n.jsx)(a.code,{children:"message"}),"\u81f3\u5c11\u8981\u63d0\u4f9b\u4e00\u4e2a"]})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"options"}),(0,n.jsx)(a.td,{children:"object"}),(0,n.jsxs)(a.td,{children:[(0,n.jsx)(a.code,{children:"dialogTitle"})," ",(0,n.jsx)("div",{class:"label android",children:"Android"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"excludedActivityTypes"})," ",(0,n.jsx)("div",{class:"label ios",children:"iOS"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"subject"})," - \u901a\u8fc7\u90ae\u4ef6\u5206\u4eab\u7684\u6807\u9898 ",(0,n.jsx)("div",{class:"label ios",children:"iOS"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.code,{children:"tintColor"})," ",(0,n.jsx)("div",{class:"label ios",children:"iOS"})]})]})]})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,n.jsx)(a.h3,{id:"sharedaction",children:(0,n.jsx)(a.code,{children:"sharedAction"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"static sharedAction\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u8868\u793a\u5185\u5bb9\u5df2\u6210\u529f\u5206\u4eab\u3002"}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsxs)(a.h3,{id:"dismissedaction-ios",children:[(0,n.jsx)(a.code,{children:"dismissedAction"})," ",(0,n.jsx)("div",{class:"label ios",children:"iOS"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",children:"static dismissedAction\n"})}),"\n",(0,n.jsx)(a.p,{children:"\u8868\u793a\u5bf9\u8bdd\u6846\u88ab\u53d6\u6d88\u3002"})]})}const b=function(e={}){const{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},11674:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(27378),r=t(38944);const s={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&d(e,t,a[t]);if(l)for(var t of l(a))c.call(a,t)&&d(e,t,a[t]);return e};function h({children:e,hidden:a,className:t}){return n.createElement("div",u({role:"tabpanel",className:(0,r.Z)(s.tabItem,t)},{hidden:a}),e)}},48375:(e,a,t)=>{t.d(a,{Z:()=>R});var n=t(27378),r=t(38944),s=t(12112),i=t(3620),l=t(69490),o=t(14953),c=t(27886),d=t(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))v.call(a,t)&&f(e,t,a[t]);if(b)for(var t of b(a))m.call(a,t)&&f(e,t,a[t]);return e},j=(e,a)=>h(e,p(a));function C(e){var a,t;return null!=(t=null==(a=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))?t:[]}function y(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=a?a:function(e){return C(e).map((({props:{value:e,label:a,attributes:t,default:n}})=>({value:e,label:a,attributes:t,default:n})))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function g({value:e,tabValues:a}){return a.some((a=>a.value===e))}function w({queryString:e=!1,groupId:a}){const t=(0,i.k6)(),r=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a});return[(0,o._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace(j(x({},t.location),{search:a.toString()}))}),[r,t])]}function D(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=y(e),[i,o]=(0,n.useState)((()=>function({defaultValue:e,tabValues:a}){var t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[c,u]=w({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(a);return[t,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:r}),b=(()=>{const e=null!=c?c:h;return g({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var S=t(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var B=Object.defineProperty,O=Object.defineProperties,E=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,P=(e,a,t)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,V=(e,a)=>{for(var t in a||(a={}))T.call(a,t)&&P(e,t,a[t]);if(A)for(var t of A(a))_.call(a,t)&&P(e,t,a[t]);return e},I=(e,a)=>O(e,E(a));function N({className:e,block:a,selectedValue:t,selectValue:i,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const a=e.currentTarget,n=o.indexOf(a),r=l[n].value;r!==t&&(c(a),i(r))},u=e=>{var a,t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=null!=(a=o[t])?a:o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=null!=(t=o[a])?t:o[o.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},l.map((({value:e,label:a,attributes:s})=>n.createElement("li",I(V({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>o.push(e),onKeyDown:u,onClick:d},s),{className:(0,r.Z)("tabs__item",k.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e})}),null!=a?a:e))))}function F({lazy:e,children:a,selectedValue:t}){const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function Z(e){const a=D(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},n.createElement(N,V(V({},e),a)),n.createElement(F,V(V({},e),a)))}function R(e){const a=(0,S.Z)();return n.createElement(Z,V({key:String(a)},e),C(e.children))}},71426:(e,a,t)=>{var n=t(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var n,s={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)i.call(a,n)&&!o.hasOwnProperty(n)&&(s[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:l.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},24246:(e,a,t)=>{e.exports=t(71426)},71670:(e,a,t)=>{t.d(a,{Zo:()=>l,ah:()=>s});var n=t(27378);const r=n.createContext({});function s(e){const a=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const i={};function l({components:e,children:a,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:s(e),n.createElement(r.Provider,{value:l},a)}}}]);