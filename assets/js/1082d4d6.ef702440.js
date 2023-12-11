/*! For license information please see 1082d4d6.ef702440.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[46330],{67325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(24246),n=r(71670);r(48375),r(86386),r(11674);const i={id:"libraries",title:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."},l=void 0,o={id:"libraries",title:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps.",source:"@site/versioned_docs/version-0.71/libraries.md",sourceDirName:".",slug:"/libraries",permalink:"/docs/0.71/libraries",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/libraries.md",tags:[],version:"0.71",frontMatter:{id:"libraries",title:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/0.71/testing-overview"},next:{title:"\u4f7f\u7528 TypeScript",permalink:"/docs/0.71/typescript"}},s={},c=[{value:"\u9009\u62e9\u4e00\u4e2a\u5305\u7ba1\u7406\u5668",id:"\u9009\u62e9\u4e00\u4e2a\u5305\u7ba1\u7406\u5668",level:2},{value:"\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",id:"\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",level:2},{value:"\u94fe\u63a5 iOS \u539f\u751f\u4ee3\u7801",id:"\u94fe\u63a5-ios-\u539f\u751f\u4ee3\u7801",level:2},{value:"\u94fe\u63a5 Android \u539f\u751f\u4ee3\u7801",id:"\u94fe\u63a5-android-\u539f\u751f\u4ee3\u7801",level:2},{value:"\u641c\u7d22\u7b2c\u4e09\u65b9\u5e93",id:"\u641c\u7d22\u7b2c\u4e09\u65b9\u5e93",level:2},{value:"\u5224\u65ad\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027",id:"\u5224\u65ad\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027",level:2},{value:"\u5b83\u652f\u6301 React Native \u5417\uff1f",id:"\u5b83\u652f\u6301-react-native-\u5417",level:3},{value:"\u5b83\u652f\u6301\u67d0\u4e2a\u7cfb\u7edf\u5e73\u53f0\u5417\uff1f",id:"\u5b83\u652f\u6301\u67d0\u4e2a\u7cfb\u7edf\u5e73\u53f0\u5417",level:3},{value:"\u5b83\u652f\u6301\u6211\u7684 React Native \u7684\u7248\u672c\u5417?",id:"\u5b83\u652f\u6301\u6211\u7684-react-native-\u7684\u7248\u672c\u5417",level:3}];function u(e){const t=Object.assign({p:"p",a:"a",h2:"h2",blockquote:"blockquote",code:"code",pre:"pre",h3:"h3",em:"em"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["React Native \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u5185\u7f6e\u7684",(0,a.jsx)(t.a,{href:"components-and-apis",children:"\u6838\u5fc3\u7ec4\u4ef6\u548c API"}),"\uff0c\u4f46\u5e76\u4e0d\u5c40\u9650\u4e8e\u6b64\u3002React Native \u6709\u4e00\u4e2a\u5e9e\u5927\u7684\u793e\u533a\uff0c\u5982\u679c\u6838\u5fc3\u7ec4\u4ef6\u548c API \u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u4f60\u5b8c\u5168\u53ef\u4ee5\u53bb\u793e\u533a\u7684\u5e7f\u9614\u5929\u5730\u4e2d\u5bfb\u6c42\u5408\u9002\u7684\u7b2c\u4e09\u65b9\u5e93\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u9009\u62e9\u4e00\u4e2a\u5305\u7ba1\u7406\u5668",children:"\u9009\u62e9\u4e00\u4e2a\u5305\u7ba1\u7406\u5668"}),"\n",(0,a.jsxs)(t.p,{children:["React Native libraries are typically installed from the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/",children:"npm registry"})," using a Node.js package manager such as ",(0,a.jsx)(t.a,{href:"https://docs.npmjs.com/cli/npm",children:"npm CLI"})," or ",(0,a.jsx)(t.a,{href:"https://classic.yarnpkg.com/en/",children:"Yarn \u7ecf\u5178\u7248(v1)"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"If you have Node.js installed on your computer then you already have the npm CLI installed. Some developers prefer to use Yarn Classic for slightly faster install times and additional advanced features like Workspaces. Both tools work great with React Native. We will assume npm for the rest of this guide for simplicity of explanation."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\ud83d\udca1 \u5728 JavaScript \u793e\u533a\uff0c\u201c\u5e93\uff08library\uff09\u201d\u548c\u201c\u5305\uff08package\uff09\u201d\u8fd9\u4e24\u4e2a\u672f\u8bed\u4e00\u76f4\u662f\u6df7\u7528\u7684\uff0c\u53ef\u89c6\u4e3a\u7b49\u540c\u3002"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",children:"\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"}),"\n",(0,a.jsxs)(t.p,{children:["To install a library in your project, navigate to your project directory in your terminal and run ",(0,a.jsx)(t.code,{children:"npm install <name-of-the-library>"}),". Let's try this with ",(0,a.jsx)(t.code,{children:"react-native-webview"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install react-native-webview\n"})}),"\n",(0,a.jsx)(t.p,{children:"The library that we installed includes native code, and we need to link to our app before we use it."}),"\n",(0,a.jsx)(t.h2,{id:"\u94fe\u63a5-ios-\u539f\u751f\u4ee3\u7801",children:"\u94fe\u63a5 iOS \u539f\u751f\u4ee3\u7801"}),"\n",(0,a.jsx)(t.p,{children:"React Native uses CocoaPods to manage iOS project dependencies and most React Native libraries follow this same convention. If a library you are using does not, then please refer to their README for additional instruction. In most cases, the following instructions will apply."}),"\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.code,{children:"pod install"})," in our ",(0,a.jsx)(t.code,{children:"ios"})," directory in order to link it to our native iOS project. A shortcut for doing this without switching to the ",(0,a.jsx)(t.code,{children:"ios"})," directory is to run ",(0,a.jsx)(t.code,{children:"npx pod-install"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx pod-install\n"})}),"\n",(0,a.jsx)(t.p,{children:"Once this is complete, re-build the app binary to start using your new library:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx react-native run-ios\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u94fe\u63a5-android-\u539f\u751f\u4ee3\u7801",children:"\u94fe\u63a5 Android \u539f\u751f\u4ee3\u7801"}),"\n",(0,a.jsx)(t.p,{children:"React Native uses Gradle to manage Android project dependencies. After you install a library with native dependencies, you will need to re-build the app binary to use your new library:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx react-native run-android\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u641c\u7d22\u7b2c\u4e09\u65b9\u5e93",children:"\u641c\u7d22\u7b2c\u4e09\u65b9\u5e93"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://reactnative.directory",children:"React Native Directory"})," is a searchable database of libraries built specifically for React Native. This is the first place to look for a library for your React Native app."]}),"\n",(0,a.jsxs)(t.p,{children:["Many of the libraries you will find on the directory are from ",(0,a.jsx)(t.a,{href:"https://github.com/react-native-community/",children:"React Native Community"})," or ",(0,a.jsx)(t.a,{href:"https://docs.expo.io/versions/latest/",children:"Expo"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Libraries built by the React Native Community are driven by volunteers and individuals at companies that depend on React Native. They often support iOS, tvOS, Android, Windows, but this varies across projects. Many of the libraries in this organization were once React Native Core Components and APIs."}),"\n",(0,a.jsxs)(t.p,{children:["Libraries built by Expo are all written in TypeScript and support iOS, Android, and react-native-web wherever possible. They usually require that you first install ",(0,a.jsx)(t.a,{href:"https://github.com/expo/expo/tree/master/packages/react-native-unimodules",children:"react-native-unimodules"})," in order to use in your React Native app."]}),"\n",(0,a.jsxs)(t.p,{children:["After React Native Directory, the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/",children:"npm registry"})," is the next best place if you can't find a library specifically for React Native on the directory. The npm registry is the definitive source for JavaScript libraries, but the libraries that it lists may not all be compatible with React Native. React Native is one of many JavaScript programming environments, including Node.js, web browsers, Electron, and more, and npm includes libraries that work for all of these environments."]}),"\n",(0,a.jsx)(t.h2,{id:"\u5224\u65ad\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027",children:"\u5224\u65ad\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027"}),"\n",(0,a.jsx)(t.h3,{id:"\u5b83\u652f\u6301-react-native-\u5417",children:"\u5b83\u652f\u6301 React Native \u5417\uff1f"}),"\n",(0,a.jsxs)(t.p,{children:["Usually libraries built ",(0,a.jsx)(t.em,{children:"specifically for other platforms"})," will not work with React Native. Examples include ",(0,a.jsx)(t.code,{children:"react-select"})," which is built for the web and specifically targets ",(0,a.jsx)(t.code,{children:"react-dom"}),", and ",(0,a.jsx)(t.code,{children:"rimraf"})," which is built for Node.js and interacts with your computer file system. Other libraries like ",(0,a.jsx)(t.code,{children:"lodash"})," use only JavaScript langauge features and work in any environment. You will gain a sense for this over time, but until then the easiest way to find out is to try it yourself. You can remove packages using ",(0,a.jsx)(t.code,{children:"npm uninstall"})," if it turns out that it does not work in React Native."]}),"\n",(0,a.jsx)(t.h3,{id:"\u5b83\u652f\u6301\u67d0\u4e2a\u7cfb\u7edf\u5e73\u53f0\u5417",children:"\u5b83\u652f\u6301\u67d0\u4e2a\u7cfb\u7edf\u5e73\u53f0\u5417\uff1f"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://reactnative.directory/",children:"React Native Directory"})," allows you to filter by platform compatibility, such as iOS, Android, Web, and Windows. If the library you would like to use is not currently listed there, refer to the README for the library to learn more."]}),"\n",(0,a.jsx)(t.h3,{id:"\u5b83\u652f\u6301\u6211\u7684-react-native-\u7684\u7248\u672c\u5417",children:"\u5b83\u652f\u6301\u6211\u7684 React Native \u7684\u7248\u672c\u5417?"}),"\n",(0,a.jsxs)(t.p,{children:["The latest version of a library is typically compatible with the latest version of React Native. If you are using an older version, you should refer to the README to know which version of the library you should install. You can install a particular version of the library by running ",(0,a.jsx)(t.code,{children:"npm install <library-name>@<version-number>"}),", for example: ",(0,a.jsx)(t.code,{children:"npm install @react-native-community/netinfo@^2.0.0"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},11674:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(63445);const n=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"native",defaultOs:n?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:n?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(27378),n=r(38944);const i={tabItem:"tabItem_wHwb"};var l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&u(e,r,t[r]);return e};function p({children:e,hidden:t,className:r}){return a.createElement("div",d({role:"tabpanel",className:(0,n.Z)(i.tabItem,r)},{hidden:t}),e)}},48375:(e,t,r)=>{r.d(t,{Z:()=>M});var a=r(27378),n=r(38944),i=r(12112),l=r(3620),o=r(69490),s=r(14953),c=r(27886),u=r(7106),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&m(e,r,t[r]);if(b)for(var r of b(t))f.call(t,r)&&m(e,r,t[r]);return e},w=(e,t)=>p(e,h(t));function g(e){var t,r;return null!=(r=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?r:[]}function j(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return g(e).map((({props:{value:e,label:t,attributes:r,default:a}})=>({value:e,label:t,attributes:r,default:a})))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x({value:e,tabValues:t}){return t.some((t=>t.value===e))}function O({queryString:e=!1,groupId:t}){const r=(0,l.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace(w(y({},r.location),{search:t.toString()}))}),[n,r])]}function N(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=j(e),[l,s]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(r=t.find((e=>e.default)))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=O({queryString:r,groupId:n}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),b=(()=>{const e=null!=c?c:p;return x({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var k=r(14185);const R={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var E=Object.defineProperty,S=Object.defineProperties,I=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,V=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&A(e,r,t[r]);if(T)for(var r of T(t))P.call(t,r)&&A(e,r,t[r]);return e},C=(e,t)=>S(e,I(t));function D({className:e,block:t,selectedValue:r,selectValue:l,tabValues:o}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),n=o[a].value;n!==r&&(c(t),l(n))},d=e=>{var t,r;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;a=null!=(t=s[r])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=null!=(r=s[t])?r:s[s.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:i})=>a.createElement("li",C(V({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:u},i),{className:(0,n.Z)("tabs__item",R.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function q({lazy:e,children:t,selectedValue:r}){const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function L(e){const t=N(e);return a.createElement("div",{className:(0,n.Z)("tabs-container",R.tabList)},a.createElement(D,V(V({},e),t)),a.createElement(q,V(V({},e),t)))}function M(e){const t=(0,k.Z)();return a.createElement(L,V({key:String(t)},e),g(e.children))}},71426:(e,t,r)=>{var a=r(27378),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,i={},c=null,u=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!s.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:u,props:i,_owner:o.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},24246:(e,t,r)=>{e.exports=r(71426)},71670:(e,t,r)=>{r.d(t,{Zo:()=>o,ah:()=>i});var a=r(27378);const n=a.createContext({});function i(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function o({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||l:i(e),a.createElement(n.Provider,{value:o},t)}}}]);