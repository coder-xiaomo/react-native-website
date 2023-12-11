/*! For license information please see 7ba605c7.7d75f71b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[57135],{79233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(24246),r=n(71670),o=n(48375),s=n(86386),l=n(11674);const i={id:"react-devtools",title:"React \u5f00\u53d1\u8005\u5de5\u5177"},c=void 0,d={id:"react-devtools",title:"React \u5f00\u53d1\u8005\u5de5\u5177",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u72ec\u7acb\u7248 React \u5f00\u53d1\u8005\u5de5\u5177(\u4e0d\u662f chrome \u7684\u63d2\u4ef6)\u6765\u8c03\u8bd5 React \u7ec4\u4ef6\u5c42\u6b21\u7ed3\u6784\u3002\u8981\u4f7f\u7528\u5b83\uff0c\u8bf7\u5168\u5c40\u5b89\u88c5react-devtools\u5305:",source:"@site/versioned_docs/version-0.73/react-devtools.md",sourceDirName:".",slug:"/react-devtools",permalink:"/docs/react-devtools",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/react-devtools.md",tags:[],version:"0.73",frontMatter:{id:"react-devtools",title:"React \u5f00\u53d1\u8005\u5de5\u5177"},sidebar:"docs",previous:{title:"\u8c03\u8bd5",permalink:"/docs/debugging"},next:{title:"\u8c03\u8bd5\u539f\u751f\u4ee3\u7801",permalink:"/docs/native-debugging"}},u={},p=[{value:"Integration with React Native Inspector",id:"integration-with-react-native-inspector",level:2},{value:"Inspecting Component Instances",id:"inspecting-component-instances",level:2},{value:"Debugging application state",id:"debugging-application-state",level:2}];function h(e){const t=Object.assign({p:"p",a:"a",code:"code",blockquote:"blockquote",pre:"pre",img:"img",admonition:"admonition",h2:"h2",strong:"strong"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(t.a,{href:"https://github.com/facebook/react/tree/main/packages/react-devtools",children:"\u72ec\u7acb\u7248 React \u5f00\u53d1\u8005\u5de5\u5177(\u4e0d\u662f chrome \u7684\u63d2\u4ef6)"}),"\u6765\u8c03\u8bd5 React \u7ec4\u4ef6\u5c42\u6b21\u7ed3\u6784\u3002\u8981\u4f7f\u7528\u5b83\uff0c\u8bf7\u5168\u5c40\u5b89\u88c5",(0,a.jsx)(t.code,{children:"react-devtools"}),"\u5305:"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\u6ce8\u610f\uff1areact-devtools v4 \u9700\u8981 react-native 0.62 \u6216\u66f4\u9ad8\u7248\u672c\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"}),"\n"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"package-manager",defaultValue:l.Z.defaultPackageManager,values:l.Z.packageManagers,children:[(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npm install -g react-devtools\n"})})}),(0,a.jsx)(s.Z,{value:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"yarn global add react-devtools\n"})})})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u8bd1\u6ce8\uff1areact-devtools \u4f9d\u8d56\u4e8e electron\uff0c\u800c electron \u9700\u8981\u5230\u56fd\u5916\u670d\u52a1\u5668\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305\uff0c\u6240\u4ee5\u56fd\u5185\u7528\u6237\u8fd9\u4e00\u6b65\u5f88\u53ef\u80fd\u4f1a\u5361\u4f4f\u3002\u6b64\u65f6\u8bf7\u5728",(0,a.jsx)(t.code,{children:"\u73af\u5883\u53d8\u91cf"}),"\u4e2d\u6dfb\u52a0 electron \u4e13\u7528\u7684\u56fd\u5185\u955c\u50cf\u6e90\uff1a",(0,a.jsx)(t.code,{children:'ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"'}),"\uff0c\u7136\u540e\u518d\u5c1d\u8bd5\u5b89\u88c5 react-devtools\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\u5728\u547d\u4ee4\u884c\u4e2d\u6267\u884c",(0,a.jsx)(t.code,{children:"react-devtools"}),"\u5373\u53ef\u542f\u52a8\u6b64\u5de5\u5177\uff1a"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"react-devtools\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"React DevTools",src:n(14390).Z+"",width:"1824",height:"1424"})}),"\n",(0,a.jsx)(t.p,{children:"\u5f88\u5feb\u5c31\u80fd\u8fde\u4e0a\u6a21\u62df\u5668\u3002"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u63d0\u793a\uff1a\u5982\u679c\u4f60\u4e0d\u60f3\u5168\u5c40\u5b89\u88c5",(0,a.jsx)(t.code,{children:"react-devtools"}),"\uff0c\u53ef\u4ee5\u628a\u5b83\u5355\u72ec\u52a0\u5165\u9879\u76ee\u4e2d\u3002\u7528",(0,a.jsx)(t.code,{children:"npm install --save-dev react-devtools"}),"\u547d\u4ee4\u628a",(0,a.jsx)(t.code,{children:"react-devtools"}),"\u5305\u5b89\u88c5\u5230\u4f60\u7684\u9879\u76ee\u4e2d\uff0c\u5e76\u5728",(0,a.jsx)(t.code,{children:"package.json"}),"\u7684",(0,a.jsx)(t.code,{children:"scripts"}),"\u4e2d\u6dfb\u52a0 ",(0,a.jsx)(t.code,{children:'"react-devtools": "react-devtools"'}),"\uff0c\u63a5\u7740\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c",(0,a.jsx)(t.code,{children:"npm run react-devtools"}),"\u547d\u4ee4\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["If connecting to the emulator proves troublesome (especially Android 12), try running ",(0,a.jsx)(t.code,{children:"adb reverse tcp:8097 tcp:8097"})," in a new terminal."]})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["If you prefer to avoid global installations, you can add ",(0,a.jsx)(t.code,{children:"react-devtools"})," as a project dependency. Add the ",(0,a.jsx)(t.code,{children:"react-devtools"})," package to your project using ",(0,a.jsx)(t.code,{children:"npm install --save-dev react-devtools"}),", then add ",(0,a.jsx)(t.code,{children:'"react-devtools": "react-devtools"'})," to the ",(0,a.jsx)(t.code,{children:"scripts"})," section in your ",(0,a.jsx)(t.code,{children:"package.json"}),", and then run ",(0,a.jsx)(t.code,{children:"npm run react-devtools"})," from your project folder to open the DevTools."]})}),"\n",(0,a.jsx)(t.h2,{id:"integration-with-react-native-inspector",children:"Integration with React Native Inspector"}),"\n",(0,a.jsx)(t.p,{children:'Open the Dev Menu and choose "Toggle Inspector". It will bring up an overlay that lets you tap on any UI element and see information about it:'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"React Native Inspector",src:n(28188).Z+"",width:"318",height:"589"})}),"\n",(0,a.jsxs)(t.p,{children:["However, when ",(0,a.jsx)(t.code,{children:"react-devtools"})," is running, Inspector will enter a collapsed mode, and instead use the DevTools as primary UI. In this mode, clicking on something in the simulator will bring up the relevant components in the DevTools:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"React DevTools Inspector Integration",src:n(93715).Z+"",width:"2644",height:"1990"})}),"\n",(0,a.jsx)(t.p,{children:'You can choose "Toggle Inspector" in the same menu to exit this mode.'}),"\n",(0,a.jsx)(t.h2,{id:"inspecting-component-instances",children:"Inspecting Component Instances"}),"\n",(0,a.jsx)(t.p,{children:"When debugging JavaScript in Chrome, you can inspect the props and state of the React components in the browser console."}),"\n",(0,a.jsx)(t.p,{children:"First, follow the instructions for debugging in Chrome to open the Chrome console."}),"\n",(0,a.jsxs)(t.p,{children:["Make sure that the dropdown in the top left corner of the Chrome console says ",(0,a.jsx)(t.code,{children:"debuggerWorker.js"}),". ",(0,a.jsx)(t.strong,{children:"This step is essential."})]}),"\n",(0,a.jsxs)(t.p,{children:["Then select a React component in React DevTools. There is a search box at the top that helps you find one by name. As soon as you select it, it will be available as ",(0,a.jsx)(t.code,{children:"$r"})," in the Chrome console, letting you inspect its props, state, and instance properties."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"React DevTools Chrome Console Integration",src:n(63785).Z+"",width:"863",height:"720"})}),"\n",(0,a.jsx)(t.h2,{id:"debugging-application-state",children:"Debugging application state"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/infinitered/reactotron",children:"Reactotron"})," is an open-source desktop app that allows you to inspect Redux or MobX-State-Tree application state as well as view custom logs, run custom commands such as resetting state, store and restore state snapshots, and other helpful debugging features for React Native apps."]}),"\n",(0,a.jsxs)(t.p,{children:["You can view installation instructions ",(0,a.jsx)(t.a,{href:"https://github.com/infinitered/reactotron",children:"in the README"}),". If you're using Expo, here is an article detailing ",(0,a.jsx)(t.a,{href:"https://shift.infinite.red/start-using-reactotron-in-your-expo-project-today-in-3-easy-steps-a03d11032a7a",children:"how to install on Expo"}),"."]})]})}const v=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},11674:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(27378),r=n(38944);const o={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e};function p({children:e,hidden:t,className:n}){return a.createElement("div",u({role:"tabpanel",className:(0,r.Z)(o.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(27378),r=n(38944),o=n(12112),s=n(3620),l=n(69490),i=n(14953),c=n(27886),d=n(7106),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&m(e,n,t[n]);if(v)for(var n of v(t))f.call(t,n)&&m(e,n,t[n]);return e},j=(e,t)=>p(e,h(t));function x(e){var t,n;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function y(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return x(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function w({value:e,tabValues:t}){return t.some((t=>t.value===e))}function I({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(j(g({},n.location),{search:t.toString()}))}),[r,n])]}function O(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=y(e),[s,i]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,u]=I({queryString:n,groupId:r}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,d.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),v=(()=>{const e=null!=c?c:p;return w({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!w({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var k=n(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var R=Object.defineProperty,T=Object.defineProperties,D=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&C(e,n,t[n]);if(_)for(var n of _(t))Z.call(t,n)&&C(e,n,t[n]);return e},N=(e,t)=>T(e,D(t));function V({className:e,block:t,selectedValue:n,selectValue:s,tabValues:l}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),r=l[a].value;r!==n&&(c(t),s(r))},u=e=>{var t,n;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=null!=(t=i[n])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=null!=(n=i[t])?n:i[i.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>a.createElement("li",N(P({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:u,onClick:d},o),{className:(0,r.Z)("tabs__item",E.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function q({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function M(e){const t=O(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",E.tabList)},a.createElement(V,P(P({},e),t)),a.createElement(q,P(P({},e),t)))}function A(e){const t=(0,k.Z)();return a.createElement(M,P({key:String(t)},e),x(e.children))}},71426:(e,t,n)=>{var a=n(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,o={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!i.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},28188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Inspector-4bd1342086bcd964bbd7f82e453743a7.gif"},63785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ReactDevToolsDollarR-1d3a289a44523b92e252a3c65fb82a83.gif"},93715:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ReactDevToolsInspector-fed7286dac8ef8a793245cdd9d3d0f9c.gif"},14390:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ReactDevTools-46f5369dca7c5f17b9e2390e76968d56.png"},71670:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>o});var a=n(27378);const r=a.createContext({});function o(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||s:o(e),a.createElement(r.Provider,{value:l},t)}}}]);