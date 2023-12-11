/*! For license information please see b5a7fd43.c071010a.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1710],{30198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(24246),a=r(71670);r(48375),r(86386),r(11674);const n={id:"platformcolor",title:"PlatformColor"},l=void 0,s={id:"platformcolor",title:"PlatformColor",description:"You can use the PlatformColor function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the PlatformColor function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.",source:"@site/versioned_docs/version-0.72/platformcolor.md",sourceDirName:".",slug:"/platformcolor",permalink:"/docs/0.72/platformcolor",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/platformcolor.md",tags:[],version:"0.72",frontMatter:{id:"platformcolor",title:"PlatformColor"},sidebar:"api",previous:{title:"Platform",permalink:"/docs/0.72/platform"},next:{title:"RootTag",permalink:"/docs/0.72/roottag"}},i={},c=[{value:"Supported colors",id:"supported-colors",level:3},{value:"Example",id:"example",level:2}];function u(e){const t=Object.assign({pre:"pre",code:"code",p:"p",h3:"h3",ul:"ul",li:"li",a:"a",h2:"h2",div:"div",blockquote:"blockquote",strong:"strong"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"PlatformColor(color1, [color2, ...colorN]);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You can use the ",(0,o.jsx)(t.code,{children:"PlatformColor"})," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",(0,o.jsx)(t.code,{children:"PlatformColor"})," function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application."]}),"\n",(0,o.jsxs)(t.p,{children:["If you pass more than one string value to the ",(0,o.jsx)(t.code,{children:"PlatformColor"})," function, it will treat the first value as the default and the rest as fallback."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"PlatformColor('bogusName', 'linkColor');\n"})}),"\n",(0,o.jsx)(t.p,{children:"Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components."}),"\n",(0,o.jsx)(t.h3,{id:"supported-colors",children:"Supported colors"}),"\n",(0,o.jsx)(t.p,{children:"For a full list of the types of system colors supported, see:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Android:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://developer.android.com/reference/android/R.attr",children:"R.attr"})," - ",(0,o.jsx)(t.code,{children:"?attr"})," prefix"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://developer.android.com/reference/android/R.color",children:"R.color"})," - ",(0,o.jsx)(t.code,{children:"@android:color"})," prefix"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["iOS (Objective-C and Swift notations):","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors",children:"UIColor Standard Colors"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors",children:"UIColor UI Element Colors"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.div,{class:"snack-player","data-snack-name":"PlatformColor Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Platform%2C%5Cn%20%20PlatformColor%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%5Cn%20%20%20%20%20%20I%20am%20a%20special%20label%20color!%5Cn%20%20%20%20%3C%2FText%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20padding%3A%2016%2C%5Cn%20%20%20%20...Platform.select(%7B%5Cn%20%20%20%20%20%20ios%3A%20%7B%5Cn%20%20%20%20%20%20%20%20color%3A%20PlatformColor('label')%2C%5Cn%20%20%20%20%20%20%20%20backgroundColor%3A%5Cn%20%20%20%20%20%20%20%20%20%20PlatformColor('systemTealColor')%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20android%3A%20%7B%5Cn%20%20%20%20%20%20%20%20color%3A%20PlatformColor('%3Fandroid%3Aattr%2FtextColor')%2C%5Cn%20%20%20%20%20%20%20%20backgroundColor%3A%5Cn%20%20%20%20%20%20%20%20%20%20PlatformColor('%40android%3Acolor%2Fholo_blue_bright')%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20default%3A%20%7B%20color%3A%20'black'%20%7D%5Cn%20%20%20%20%7D)%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,o.jsxs)(t.p,{children:["The string value provided to the ",(0,o.jsx)(t.code,{children:"PlatformColor"})," function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a ",(0,o.jsx)(t.code,{children:"Platform.OS === 'platform'"})," or a ",(0,o.jsx)(t.code,{children:"Platform.select()"}),", as shown on the example above."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," You can find a complete example that demonstrates proper, intended use of ",(0,o.jsx)(t.code,{children:"PlatformColor"})," in ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js",children:"PlatformColorExample.js"}),"."]}),"\n"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}},11674:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(63445);const a=!!o.Z.canUseDOM&&navigator.platform.startsWith("Mac"),n=!!o.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"native",defaultOs:a?"macos":n?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,r)=>{r.d(t,{Z:()=>p});var o=r(27378),a=r(38944);const n={tabItem:"tabItem_wHwb"};var l=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&u(e,r,t[r]);return e};function p({children:e,hidden:t,className:r}){return o.createElement("div",d({role:"tabpanel",className:(0,a.Z)(n.tabItem,r)},{hidden:t}),e)}},48375:(e,t,r)=>{r.d(t,{Z:()=>Z});var o=r(27378),a=r(38944),n=r(12112),l=r(3620),s=r(69490),i=r(14953),c=r(27886),u=r(7106),d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&v(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&v(e,r,t[r]);return e},g=(e,t)=>p(e,f(t));function y(e){var t,r;return null!=(r=null==(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?r:[]}function x(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return y(e).map((({props:{value:e,label:t,attributes:r,default:o}})=>({value:e,label:t,attributes:r,default:o})))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j({value:e,tabValues:t}){return t.some((t=>t.value===e))}function w({queryString:e=!1,groupId:t}){const r=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(g(C({},r.location),{search:t.toString()}))}),[a,r])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=x(e),[l,i]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const o=null!=(r=t.find((e=>e.default)))?r:t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[c,d]=w({queryString:r,groupId:a}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,u.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:p;return j({value:e,tabValues:n})?e:null})();(0,s.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!j({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,n]),tabValues:n}}var O=r(14185);const P={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var E=Object.defineProperty,S=Object.defineProperties,_=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,V=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&T(e,r,t[r]);if(A)for(var r of A(t))I.call(t,r)&&T(e,r,t[r]);return e},B=(e,t)=>S(e,_(t));function N({className:e,block:t,selectedValue:r,selectValue:l,tabValues:s}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.o5)(),u=e=>{const t=e.currentTarget,o=i.indexOf(t),a=s[o].value;a!==r&&(c(t),l(a))},d=e=>{var t,r;let o=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;o=null!=(t=i[r])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;o=null!=(r=i[t])?r:i[i.length-1];break}}null==o||o.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:n})=>o.createElement("li",B(V({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>i.push(e),onKeyDown:d,onClick:u},n),{className:(0,a.Z)("tabs__item",P.tabItem,null==n?void 0:n.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function q({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function R(e){const t=k(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",P.tabList)},o.createElement(N,V(V({},e),t)),o.createElement(q,V(V({},e),t)))}function Z(e){const t=(0,O.Z)();return o.createElement(R,V({key:String(t)},e),y(e.children))}},71426:(e,t,r)=>{var o=r(27378),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,n={},c=null,u=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,o)&&!i.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:a,type:e,key:c,ref:u,props:n,_owner:s.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>n});var o=r(27378);const a=o.createContext({});function n(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||l:n(e),o.createElement(a.Provider,{value:s},t)}}}]);