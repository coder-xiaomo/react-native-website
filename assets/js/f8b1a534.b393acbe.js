/*! For license information please see f8b1a534.b393acbe.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5801],{56654:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(24246),a=n(71670);function o(e){const t=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,a.ah)(),e.components);return(0,r.jsxs)(t.admonition,{title:"\u6ce8\u610f",type:"caution",children:[(0,r.jsxs)(t.p,{children:["\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,r.jsx)(t.strong,{children:"\u5b9e\u9a8c\u6027"}),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,r.jsx)(t.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"}),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"]}),(0,r.jsxs)(t.p,{children:["\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,r.jsx)(t.strong,{children:"\u624b\u52a8\u6b65\u9aa4"}),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002"]})]})}const i=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},62097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=n(24246),a=n(71670),o=n(56654),i=n(48375),l=n(86386),s=n(11674);const c={id:"new-architecture-library-android",title:"\u5728 Android \u5e93\u4e2d\u542f\u7528"},u=void 0,d={id:"new-architecture-library-android",title:"\u5728 Android \u5e93\u4e2d\u542f\u7528",description:"Once you have defined the JavaScript specs for your native modules as part of the prerequisites, set up the configuration of the Codegen, and follow the Android/Gradle setup, you are now ready to migrate your library to the new architecture. Here are the steps you can follow to accomplish this.",source:"@site/../cndocs/new-architecture-library-android.md",sourceDirName:".",slug:"/new-architecture-library-android",permalink:"/docs/next/new-architecture-library-android",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-library-android.md",tags:[],version:"current",frontMatter:{id:"new-architecture-library-android",title:"\u5728 Android \u5e93\u4e2d\u542f\u7528"},sidebar:"docs",previous:{title:"\u5728\u5e93\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c",permalink:"/docs/next/new-architecture-library-intro"},next:{title:"\u5728 iOS \u5e93\u4e2d\u542f\u7528",permalink:"/docs/next/new-architecture-library-ios"}},p={},h=[{value:"1. Extend or Implement the Code-generated Native Interfaces",id:"1-extend-or-implement-the-code-generated-native-interfaces",level:2},{value:"Extends the Abstract Class Provided by the Codegen",id:"extends-the-abstract-class-provided-by-the-codegen",level:3}];function m(e){const t=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsxs)(t.p,{children:["Once you have defined the JavaScript specs for your native modules as part of the ",(0,r.jsx)(t.a,{href:"new-architecture-library-intro",children:"prerequisites"}),", set up the configuration of the Codegen, and follow the Android/Gradle setup, you are now ready to migrate your library to the new architecture. Here are the steps you can follow to accomplish this."]}),"\n",(0,r.jsx)(t.h2,{id:"1-extend-or-implement-the-code-generated-native-interfaces",children:"1. Extend or Implement the Code-generated Native Interfaces"}),"\n",(0,r.jsxs)(t.p,{children:["The JavaScript spec for your native module or component will be used to generate native interface code for each supported platform (i.e., Android and iOS). These native interface files will be generated ",(0,r.jsx)(t.strong,{children:"when a React Native application that depends on your library is built"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["While this generated native interface code ",(0,r.jsx)(t.strong,{children:"will not ship as part of your library"}),", you do need to make sure your Java/Kotlin code conforms to the protocols provided by these native interface files."]}),"\n",(0,r.jsxs)(t.p,{children:["You can invoke the ",(0,r.jsx)(t.code,{children:"generateCodegenArtifactsFromSchema"})," Gradle task to generate your library\u2019s native interface code in order to use them ",(0,r.jsx)(t.strong,{children:"as a reference:"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"./gradlew generateCodegenArtifactsFromSchema\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The files that are output can be found inside ",(0,r.jsx)(t.code,{children:"build/generated/source/codegen"})," and ",(0,r.jsx)(t.strong,{children:"should not be committed"}),", but you\u2019ll need to refer to them to determine what changes you need to make to your native modules in order for them to provide an implementation for each generated interface."]}),"\n",(0,r.jsxs)(t.p,{children:["The output of the Codegen for a module called ",(0,r.jsx)(t.code,{children:"NativeAwesomeManager"})," will look like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"app/build/generated/source/codegen\n\u251c\u2500\u2500 java\n\u2502   \u2514\u2500\u2500 com\n\u2502       \u2514\u2500\u2500 example\n\u2502           \u2514\u2500\u2500 samplelibrary\n\u2502               \u2514\u2500\u2500 NativeAwesomeManagerSpec.java\n\u251c\u2500\u2500 jni\n\u2502   \u251c\u2500\u2500 Android.mk\n\u2502   \u251c\u2500\u2500 CMakeLists.txt\n\u2502   \u251c\u2500\u2500 react\n\u2502   \u2502   \u2514\u2500\u2500 renderer\n\u2502   \u2502       \u2514\u2500\u2500 components\n\u2502   \u2502           \u2514\u2500\u2500 samplelibrary\n\u2502   \u2502               \u251c\u2500\u2500 ComponentDescriptors.h\n\u2502   \u2502               \u251c\u2500\u2500 EventEmitters.cpp\n\u2502   \u2502               \u251c\u2500\u2500 EventEmitters.h\n\u2502   \u2502               \u251c\u2500\u2500 Props.cpp\n\u2502   \u2502               \u251c\u2500\u2500 Props.h\n\u2502   \u2502               \u251c\u2500\u2500 ShadowNodes.cpp\n\u2502   \u2502               \u2514\u2500\u2500 ShadowNodes.h\n\u2502   \u251c\u2500\u2500 samplelibrary-generated.cpp\n\u2502   \u2514\u2500\u2500 samplelibrary.h\n\u2514\u2500\u2500 schema.json\n"})}),"\n",(0,r.jsx)(t.h3,{id:"extends-the-abstract-class-provided-by-the-codegen",children:"Extends the Abstract Class Provided by the Codegen"}),"\n",(0,r.jsxs)(t.p,{children:["Update your native module or component to ensure it ",(0,r.jsx)(t.strong,{children:"extends the abstract class"})," that has been code-generated from your JavaScript specs (i.e., the ",(0,r.jsx)(t.code,{children:"NativeAwesomeManagerSpec.java"})," file from the previous example)."]}),"\n",(0,r.jsxs)(t.p,{children:["Following the example set forth in the previous section, your library might import ",(0,r.jsx)(t.code,{children:"NativeAwesomeManagerSpec"}),", implement the relevant native interface and the necessary methods for it:"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"android-language",defaultValue:s.Z.defaultAndroidLanguage,values:s.Z.androidLanguages,children:[(0,r.jsx)(l.Z,{value:"java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import androidx.annotation.NonNull;\n\nimport com.example.samplelibrary.NativeAwesomeManagerSpec;\nimport com.facebook.react.bridge.Promise;\nimport com.facebook.react.bridge.ReactApplicationContext;\n\npublic class NativeAwesomeManager extends NativeAwesomeManagerSpec {\n\n    public static final String NAME = "NativeAwesomeManager";\n\n    public NativeAwesomeManager(ReactApplicationContext reactContext) {\n        super(reactContext);\n    }\n\n    @Override\n    public void getString(String id, Promise promise) {\n        // Implement this method\n    }\n\n    @NonNull\n    @Override\n    public String getName() {\n        return NAME;\n    }\n}\n'})})}),(0,r.jsx)(l.Z,{value:"kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'import com.example.samplelibrary.NativeAwesomeManagerSpec\nimport com.facebook.react.bridge.Promise\nimport com.facebook.react.bridge.ReactApplicationContext\n\nclass NativeAwesomeManager(reactContext: ReactApplicationContext) :\n    NativeAwesomeManagerSpec(reactContext) {\n    override fun getString(id: String, promise: Promise) {\n        // Implement this method\n    }\n\n    override fun getName() = NAME\n\n    companion object {\n        val NAME = "NativeAwesomeManager"\n    }\n}\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Please note that the ",(0,r.jsx)(t.strong,{children:"generated abstract class"})," that you\u2019re now extending (",(0,r.jsx)(t.code,{children:"MyAwesomeSpec"})," in this example) is itself extending ",(0,r.jsx)(t.code,{children:"ReactContextBaseJavaModule"}),". Therefore you should not use access to any of the method/fields you were previously using (e.g., the ",(0,r.jsx)(t.code,{children:"ReactApplicationContext"})," and so on). Moreover, the generated class will now also implement the ",(0,r.jsx)(t.code,{children:"TurboModule"})," interface for you."]})]})}const b=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(63445);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:a?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(27378),a=n(38944);const o={tabItem:"tabItem_wHwb"};var i=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};function p({children:e,hidden:t,className:n}){return r.createElement("div",d({role:"tabpanel",className:(0,a.Z)(o.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>q});var r=n(27378),a=n(38944),o=n(12112),i=n(3620),l=n(69490),s=n(14953),c=n(27886),u=n(7106),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&v(e,n,t[n]);return e},y=(e,t)=>p(e,h(t));function w(e){var t,n;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return w(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j({value:e,tabValues:t}){return t.some((t=>t.value===e))}function O({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(y(g({},n.location),{search:t.toString()}))}),[a,n])]}function S(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=x(e),[i,s]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=O({queryString:n,groupId:a}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,u.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:p;return j({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var N=n(14185);const A={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var k=Object.defineProperty,E=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&_(e,n,t[n]);if(P)for(var n of P(t))M.call(t,n)&&_(e,n,t[n]);return e},V=(e,t)=>E(e,C(t));function Z({className:e,block:t,selectedValue:n,selectValue:i,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,r=s.indexOf(t),a=l[r].value;a!==n&&(c(t),i(a))},d=e=>{var t,n;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;r=null!=(t=s[n])?t:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=null!=(n=s[t])?n:s[s.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>r.createElement("li",V(T({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:d,onClick:u},o),{className:(0,a.Z)("tabs__item",A.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function D({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function R(e){const t=S(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",A.tabList)},r.createElement(Z,T(T({},e),t)),r.createElement(D,T(T({},e),t)))}function q(e){const t=(0,N.Z)();return r.createElement(R,T({key:String(t)},e),w(e.children))}},71426:(e,t,n)=>{var r=n(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>o});var r=n(27378);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:o(e),r.createElement(a.Provider,{value:l},t)}}}]);