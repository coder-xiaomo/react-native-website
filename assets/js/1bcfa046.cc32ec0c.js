/*! For license information please see 1bcfa046.cc32ec0c.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[47209],{42743:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(24246),o=a(71670);a(48375),a(86386),a(11674);const r={id:"roottag",title:"RootTag"},i=void 0,l={unversionedId:"roottag",id:"version-0.71/roottag",title:"RootTag",description:"RootTag \u662f\u7528\u4e8e\u6807\u8bb0 React Native \u539f\u751f\u6839\u89c6\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u6807\u8bc6\u7b26\uff08opaque identifier\uff09\u3002\u5177\u4f53\u6765\u8bf4\u5c31\u662f ReactRootView(android) \u6216\u662f RCTRootView(iOS) \u7684\u5b9e\u4f8b ID.",source:"@site/versioned_docs/version-0.71/roottag.md",sourceDirName:".",slug:"/roottag",permalink:"/docs/0.71/roottag",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/roottag.md",tags:[],version:"0.71",frontMatter:{id:"roottag",title:"RootTag"},sidebar:"api",previous:{title:"PlatformColor",permalink:"/docs/0.71/platformcolor"},next:{title:"Share",permalink:"/docs/0.71/share"}},s={},c=[{value:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528 RootTag?",id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528-roottag",level:2},{value:"\u5982\u4f55\u4f7f\u7528 RootTag \uff08\u5982\u679c\u4f60\u786e\u5b9e\u8981\u7528\u7684\u8bdd\uff09",id:"\u5982\u4f55\u4f7f\u7528-roottag-\u5982\u679c\u4f60\u786e\u5b9e\u8981\u7528\u7684\u8bdd",level:2},{value:"0.65 \u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",id:"065-\u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",level:3},{value:"0.66 \u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",id:"066-\u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",level:3},{value:"\u672a\u6765\u7684\u8ba1\u5212",id:"\u672a\u6765\u7684\u8ba1\u5212",level:2}];function u(e){const t=Object.assign({p:"p",code:"code",h2:"h2",strong:"strong",a:"a",pre:"pre",h3:"h3"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"RootTag"})," \u662f\u7528\u4e8e\u6807\u8bb0 React Native \u539f\u751f\u6839\u89c6\u56fe\u5c42\u7684\u4e0d\u900f\u660e\u6807\u8bc6\u7b26\uff08opaque identifier\uff09\u3002\u5177\u4f53\u6765\u8bf4\u5c31\u662f ",(0,n.jsx)(t.code,{children:"ReactRootView"}),"(android) \u6216\u662f ",(0,n.jsx)(t.code,{children:"RCTRootView"}),"(iOS) \u7684\u5b9e\u4f8b ID."]}),"\n",(0,n.jsx)(t.h2,{id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528-roottag",children:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528 RootTag?"}),"\n",(0,n.jsxs)(t.p,{children:["\u5bf9\u4e8e\u7edd\u5927\u591a\u6570 React Native \u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u4e00\u822c\u4f60\u5e76\u4e0d\u9700\u8981\u7528\u5230",(0,n.jsx)(t.code,{children:"RootTag"}),"\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"RootTag"}),"s are useful for when an app renders ",(0,n.jsx)(t.strong,{children:"multiple React Native root views"})," and you need to handle native API calls differently depending on the surface. An example of this is when an app is using native navigation and each screen is a separate React Native root view."]}),"\n",(0,n.jsxs)(t.p,{children:["In native navigation, every React Native root view is rendered in a platform\u2019s navigation view (e.g., ",(0,n.jsx)(t.code,{children:"Activity"})," for Android, ",(0,n.jsx)(t.code,{children:"UINavigationViewController"})," for iOS). By this, you are able to leverage the navigation paradigms of the platform such as native look and feel and navigation transitions. The functionality to interact with the native navigation APIs can be exposed to React Native via a ",(0,n.jsx)(t.a,{href:"native-modules-intro",children:"native module"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, to update the title bar of a screen, you would call the navigation module\u2019s API ",(0,n.jsx)(t.code,{children:'setTitle("Updated Title")'}),", but it would need to know which screen in the stack to update. A ",(0,n.jsx)(t.code,{children:"RootTag"})," is necessary here to identify the root view and its hosting container."]}),"\n",(0,n.jsxs)(t.p,{children:["Another use case for ",(0,n.jsx)(t.code,{children:"RootTag"})," is when your app needs to attribute a certain JavaScript call to native based on its originating root view. A ",(0,n.jsx)(t.code,{children:"RootTag"})," is necessary to differentiate the source of the call from different surfaces."]}),"\n",(0,n.jsx)(t.h2,{id:"\u5982\u4f55\u4f7f\u7528-roottag-\u5982\u679c\u4f60\u786e\u5b9e\u8981\u7528\u7684\u8bdd",children:"\u5982\u4f55\u4f7f\u7528 RootTag \uff08\u5982\u679c\u4f60\u786e\u5b9e\u8981\u7528\u7684\u8bdd\uff09"}),"\n",(0,n.jsxs)(t.p,{children:["In versions 0.65 and below, RootTag is accessed via a ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/v0.64.1/Libraries/ReactNative/AppContainer.js#L56",children:"legacy context"}),". To prepare React Native for Concurrent features coming in React 18 and beyond, we are migrating to the latest ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/context.html#api",children:"Context API"})," via ",(0,n.jsx)(t.code,{children:"RootTagContext"})," in 0.66. Version 0.65 supports both the legacy context and the recommended ",(0,n.jsx)(t.code,{children:"RootTagContext"})," to allow developers time to migrate their call-sites. See the breaking changes summary."]}),"\n",(0,n.jsxs)(t.p,{children:["How to access ",(0,n.jsx)(t.code,{children:"RootTag"})," via the ",(0,n.jsx)(t.code,{children:"RootTagContext"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { RootTagContext } from 'react-native';\nimport NativeAnalytics from 'native-analytics';\nimport NativeNavigation from 'native-navigation';\n\nfunction ScreenA() {\n  const rootTag = useContext(RootTagContext);\n\n  const updateTitle = (title) => {\n    NativeNavigation.setTitle(rootTag, title);\n  };\n\n  const handleOneEvent = () => {\n    NativeAnalytics.logEvent(rootTag, 'one_event');\n  };\n\n  // ...\n}\n\nclass ScreenB extends React.Component {\n  static contextType: typeof RootTagContext = RootTagContext;\n\n  updateTitle(title) {\n    NativeNavigation.setTitle(this.context, title);\n  }\n\n  handleOneEvent() {\n    NativeAnalytics.logEvent(this.context, 'one_event');\n  }\n\n  // ...\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about the Context API for ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/context.html#classcontexttype",children:"classes"})," and ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/hooks-reference.html#usecontext",children:"hooks"})," from the React docs."]}),"\n",(0,n.jsx)(t.h3,{id:"065-\u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",children:"0.65 \u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"RootTagContext"})," was formerly named ",(0,n.jsx)(t.code,{children:"unstable_RootTagContext"})," and changed to ",(0,n.jsx)(t.code,{children:"RootTagContext"})," in 0.65. Please update any usages of ",(0,n.jsx)(t.code,{children:"unstable_RootTagContext"})," in your codebase."]}),"\n",(0,n.jsx)(t.h3,{id:"066-\u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",children:"0.66 \u7248\u672c\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4"}),"\n",(0,n.jsxs)(t.p,{children:["The legacy context access to ",(0,n.jsx)(t.code,{children:"RootTag"})," will be removed and replaced by ",(0,n.jsx)(t.code,{children:"RootTagContext"}),". Beginning in 0.65, we encourage developers to proactively migrate ",(0,n.jsx)(t.code,{children:"RootTag"})," accesses to ",(0,n.jsx)(t.code,{children:"RootTagContext"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"\u672a\u6765\u7684\u8ba1\u5212",children:"\u672a\u6765\u7684\u8ba1\u5212"}),"\n",(0,n.jsxs)(t.p,{children:["With the new React Native architecture progressing, there will be future iterations to ",(0,n.jsx)(t.code,{children:"RootTag"}),", with the intention to keep the ",(0,n.jsx)(t.code,{children:"RootTag"})," type opaque and prevent thrash in React Native codebases. Please do not rely on the fact that RootTag currently aliases to a number! If your app relies on RootTags, keep an eye on our version change logs, which you can find ",(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md",children:"here"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},11674:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(63445);const o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:o?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:o?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(27378),o=a(38944);const r={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))c.call(t,a)&&u(e,a,t[a]);return e};function h({children:e,hidden:t,className:a}){return n.createElement("div",d({role:"tabpanel",className:(0,o.Z)(r.tabItem,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(27378),o=a(38944),r=a(12112),i=a(3620),l=a(69490),s=a(14953),c=a(27886),u=a(7106),d=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&g(e,a,t[a]);if(v)for(var a of v(t))b.call(t,a)&&g(e,a,t[a]);return e},x=(e,t)=>h(e,p(t));function y(e){var t,a;return null!=(a=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}function w(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return y(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function j({value:e,tabValues:t}){return t.some((t=>t.value===e))}function T({queryString:e=!1,groupId:t}){const a=(0,i.k6)(),o=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(x(m({},a.location),{search:t.toString()}))}),[o,a])]}function R(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,r=w(e),[i,s]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=T({queryString:a,groupId:o}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,o]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:o}),v=(()=>{const e=null!=c?c:h;return j({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var O=a(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var N=Object.defineProperty,C=Object.defineProperties,I=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,P=(e,t,a)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))_.call(t,a)&&P(e,a,t[a]);if(E)for(var a of E(t))S.call(t,a)&&P(e,a,t[a]);return e},V=(e,t)=>C(e,I(t));function D({className:e,block:t,selectedValue:a,selectValue:i,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),o=l[n].value;o!==a&&(c(t),i(o))},d=e=>{var t,a;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=null!=(a=s[t])?a:s[s.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:r})=>n.createElement("li",V(A({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:u},r),{className:(0,o.Z)("tabs__item",k.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function q({lazy:e,children:t,selectedValue:a}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function L(e){const t=R(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(D,A(A({},e),t)),n.createElement(q,A(A({},e),t)))}function Z(e){const t=(0,O.Z)();return n.createElement(L,A({key:String(t)},e),y(e.children))}},71426:(e,t,a)=>{var n=a(27378),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,r={},c=null,u=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>l,ah:()=>r});var n=a(27378);const o=n.createContext({});function r(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||i:r(e),n.createElement(o.Provider,{value:l},t)}}}]);