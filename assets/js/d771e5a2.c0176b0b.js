/*! For license information please see d771e5a2.c0176b0b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[69392],{17122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>C,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=t(24246),r=t(71670),l=t(48375),s=t(86386),o=t(11674);const i={id:"systrace",title:"Systrace"},c=void 0,d={unversionedId:"systrace",id:"version-0.72/systrace",title:"Systrace",description:"Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.",source:"@site/versioned_docs/version-0.72/systrace.md",sourceDirName:".",slug:"/systrace",permalink:"/docs/systrace",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/systrace.md",tags:[],version:"0.72",frontMatter:{id:"systrace",title:"Systrace"},sidebar:"api",previous:{title:"StyleSheet",permalink:"/docs/stylesheet"},next:{title:"Transforms",permalink:"/docs/transforms"}},u={},p=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>installReactHook()</code>",id:"installreacthook",level:3},{value:"<code>setEnabled()</code>",id:"setenabled",level:3},{value:"<code>isEnabled()</code>",id:"isenabled",level:3},{value:"<code>beginEvent()</code>",id:"beginevent",level:3},{value:"<code>endEvent()</code>",id:"endevent",level:3},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",level:3},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",level:3},{value:"<code>counterEvent()</code>",id:"counterevent",level:3}];function h(e){const n=Object.assign({p:"p",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",pre:"pre"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Systrace"})," is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Systrace"})," allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler."]}),"\n",(0,a.jsxs)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,a.jsx)(s.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Systrace Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%20%7B%5Cn%5Cn%20%20const%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%5Cn%20%20%20%20Systrace.beginEvent('event_label')%5Cn%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20const%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.endEvent()%5Cn%20%20%7D%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%5C%22%20onPress%3D%7B()%3D%3E%20enableProfiling()%7D%2F%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%5C%22Stop%20capturing%5C%22%20onPress%3D%7B()%3D%3E%20stopProfiling()%7D%20color%3D%5C%22%23FF0000%5C%22%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})}),(0,a.jsx)(s.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"Systrace Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%5Cn%20%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%5Cn%20%20%20%20Systrace.beginEvent('event_label')%5Cn%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Systrace.endEvent()%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%5C%22%20onPress%3D%7B()%3D%3E%20this.enableProfiling()%7D%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Stop%20capturing%5C%22%20onPress%3D%7B()%3D%3E%20this.stopProfiling()%7D%20color%3D%5C%22%23FF0000%5C%22%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23fff'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.h3,{id:"installreacthook",children:(0,a.jsx)(n.code,{children:"installReactHook()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static installReactHook(useFiber)\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"setenabled",children:(0,a.jsx)(n.code,{children:"setEnabled()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static setEnabled(enabled)\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"isenabled",children:(0,a.jsx)(n.code,{children:"isEnabled()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static isEnabled()\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"beginevent",children:(0,a.jsx)(n.code,{children:"beginEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static beginEvent(profileName?, args?)\n"})}),"\n",(0,a.jsx)(n.p,{children:"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"endevent",children:(0,a.jsx)(n.code,{children:"endEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static endEvent()\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"beginasyncevent",children:(0,a.jsx)(n.code,{children:"beginAsyncEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static beginAsyncEvent(profileName?)\n"})}),"\n",(0,a.jsx)(n.p,{children:"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"endasyncevent",children:(0,a.jsx)(n.code,{children:"endAsyncEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static endAsyncEvent(profileName?, cookie?)\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"counterevent",children:(0,a.jsx)(n.code,{children:"counterEvent()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static counterEvent(profileName?, value?)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Register the value to the profileName on the systrace timeline."})]})}const C=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},11674:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(27378),r=t(38944);const l={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&d(e,t,n[t]);if(o)for(var t of o(n))c.call(n,t)&&d(e,t,n[t]);return e};function p({children:e,hidden:n,className:t}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(l.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>Z});var a=t(27378),r=t(38944),l=t(12112),s=t(3620),o=t(69490),i=t(14953),c=t(27886),d=t(7106),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))v.call(n,t)&&b(e,t,n[t]);if(C)for(var t of C(n))f.call(n,t)&&b(e,t,n[t]);return e},y=(e,n)=>p(e,h(n));function g(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function x(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return g(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function E({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,s.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(y(m({},t.location),{search:n.toString()}))}),[r,t])]}function w(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=x(e),[s,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!E({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,u]=j({queryString:t,groupId:r}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),C=(()=>{const e=null!=c?c:p;return E({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{C&&i(C)}),[C]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!E({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var D=t(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var A=Object.defineProperty,S=Object.defineProperties,B=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,_=(e,n,t)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,I=(e,n)=>{for(var t in n||(n={}))P.call(n,t)&&_(e,t,n[t]);if(O)for(var t of O(n))N.call(n,t)&&_(e,t,n[t]);return e},T=(e,n)=>S(e,B(n));function V({className:e,block:n,selectedValue:t,selectValue:s,tabValues:o}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,a=i.indexOf(n),r=o[a].value;r!==t&&(c(n),s(r))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=null!=(n=i[t])?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=null!=(t=i[n])?t:i[i.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},o.map((({value:e,label:n,attributes:l})=>a.createElement("li",T(I({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>i.push(e),onKeyDown:u,onClick:d},l),{className:(0,r.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function F({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function R(e){const n=w(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},a.createElement(V,I(I({},e),n)),a.createElement(F,I(I({},e),n)))}function Z(e){const n=(0,D.Z)();return a.createElement(R,I({key:String(n)},e),g(e.children))}},71426:(e,n,t)=>{var a=t(27378),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,l={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,a)&&!i.hasOwnProperty(a)&&(l[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===l[a]&&(l[a]=n[a]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:o.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>l});var a=t(27378);const r=a.createContext({});function l(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||s:l(e),a.createElement(r.Provider,{value:o},n)}}}]);