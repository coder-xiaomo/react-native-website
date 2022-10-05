"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[95108],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,r(r({ref:n},s),{},{components:t})):a.createElement(h,r({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11674:function(e,n,t){var a=t(63445);const o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=o?"ios":"android",l=o?"macos":i?"windows":"linux";n.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(27378),o=t(38944),i="tabItem_wHwb",r=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function u({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&s(e,t,n[t]);return e})({role:"tabpanel",className:(0,o.Z)(i,t)},{hidden:n}),e)}},27789:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(27378),o=t(38944),i=t(14185),r=t(27886),l=t(77184),c=t(12112),p="tabList_J5MA",s="tabItem_l0OV",u=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,w=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&w(e,t,n[t]);if(h)for(var t of h(n))b.call(n,t)&&w(e,t,n[t]);return e};function v(e){var n,t;const{lazy:i,block:u,defaultValue:h,values:f,groupId:b,className:w}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:v.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),k=(0,r.l)(y,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===h?h:null!=(t=null!=h?h:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==C&&!y.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:M}=(0,l.U)(),[O,T]=(0,a.useState)(C),E=[],{blockElementScrollPositionUntilNextRender:V}=(0,c.o5)();if(null!=b){const e=N[b];null!=e&&e!==O&&y.some((n=>n.value===e))&&T(e)}const A=e=>{const n=e.currentTarget,t=E.indexOf(n),a=y[t].value;a!==O&&(V(n),T(a),null!=b&&M(b,String(a)))},j=e=>{var n,t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;a=null!=(t=E[n])?t:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},w)},y.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(i=g({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>E.push(e),onKeyDown:j,onFocus:A,onClick:A},t),r={className:(0,o.Z)("tabs__item",s,null==t?void 0:t.className,{"tabs__item--active":O===e})},d(i,m(r))),null!=n?n:e);var i,r}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function y(e){const n=(0,i.Z)();return a.createElement(v,g({key:String(n)},e))}},920:function(e,n,t){t.d(n,{ZP:function(){return m}});var a=t(35318),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&s(e,t,n[t]);return e};const d={toc:[]};function m(e){var n,t=e,{components:o}=t,s=((e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=u(u({},d),s),i(n,r({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",u({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u5185\u5bb9\u4ecd\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u5185\u5bb9\u4f1a\u968f\u7740\u7248\u672c\u7684\u8fed\u4ee3\u8fdb\u884c\u4fee\u6539\u3002\u60a8\u53ef\u968f\u65f6\u5728\u6211\u4eec\u7684",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u7ec4\u7684\u8ba8\u8bba\u533a"),"\u53d1\u9001\u53cd\u9988\u3002\n\u6b64\u5916\uff0c\u672c\u6587\u6863\u8fd8\u5305\u542b\u4e86\u82e5\u5e72\u9700\u624b\u52a8\u914d\u7f6e\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u4e0d\u4ee3\u8868\u65b0\u67b6\u6784\u7a33\u5b9a\u7248\u7684\u6700\u7ec8\u5f00\u53d1\u4f53\u9a8c\u3002\u6211\u4eec\u4ecd\u5728\u5f00\u53d1\u76f8\u5173\u7684\u5de5\u5177\u3001\u6a21\u677f\u548c\u7b2c\u4e09\u65b9\u5e93\uff0c\u5e2e\u52a9\u4f60\u66f4\u5feb\u5730\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\u4e0a\uff0c\u800c\u975e\u4ece\u5934\u5f00\u59cb\u914d\u7f6e\u73af\u5883\u3002")))}m.isMDXComponent=!0},38495:function(e,n,t){t.d(n,{ZP:function(){return m}});var a=t(35318),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&s(e,t,n[t]);return e};const d={toc:[]};function m(e){var n,t=e,{components:o}=t,s=((e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=u(u({},d),s),i(n,r({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",u({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"The TypeScript support for the New Architecture is still in beta.")))}m.isMDXComponent=!0},34553:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return w},metadata:function(){return v},toc:function(){return k}});var a=t(35318),o=t(27789),i=t(86386),r=t(11674),l=t(38495),c=t(920),p=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&f(e,t,n[t]);if(d)for(var t of d(n))h.call(n,t)&&f(e,t,n[t]);return e};const w={id:"backward-compatibility-fabric-components",title:"Fabric Components as Native Components"},g=void 0,v={unversionedId:"the-new-architecture/backward-compatibility-fabric-components",id:"version-0.70/the-new-architecture/backward-compatibility-fabric-components",title:"Fabric Components as Native Components",description:"The creation of a backward compatible Fabric Component requires the knowledge of how to create a Fabric Component. To recall these concepts, have a look at this guide.",source:"@site/versioned_docs/version-0.70/the-new-architecture/backward-compatibility-fabric-components.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/backward-compatibility-fabric-components",permalink:"/docs/the-new-architecture/backward-compatibility-fabric-components",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/backward-compatibility-fabric-components.md",tags:[],version:"0.70",frontMatter:{id:"backward-compatibility-fabric-components",title:"Fabric Components as Native Components"},sidebar:"docs",previous:{title:"TurboModules as Native Modules",permalink:"/docs/the-new-architecture/backward-compatibility-turbomodules"},next:{title:"\u8fc1\u79fb\u5230\u65b0\u67b6\u6784",permalink:"/docs/new-architecture-intro"}},y={},k=[{value:"Configure the Fabric Component Dependencies",id:"configure-the-fabric-component-dependencies",level:2},{value:'<a name="dependencies-ios" />iOS',id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Update the codebase",id:"update-the-codebase",level:2},{value:"iOS",id:"ios-1",level:3},{value:"Android",id:"android-1",level:3},{value:"Unify the JavaScript specs",id:"unify-the-javascript-specs",level:2}],C={toc:k};function N(e){var n,t=e,{components:p}=t,f=((e,n)=>{var t={};for(var a in e)m.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&d)for(var a of d(e))n.indexOf(a)<0&&h.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=b(b({},C),f),s(n,u({components:p,mdxType:"MDXLayout"}))),(0,a.kt)(c.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("admonition",b({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The creation of a backward compatible Fabric Component requires the knowledge of how to create a Fabric Component. To recall these concepts, have a look at this ",(0,a.kt)("a",b({parentName:"p"},{href:"pillars-fabric-components"}),"guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"Fabric Components only work when the New Architecture is properly setup. If you already have a library that you want to migrate to the New Architecture, have a look at the ",(0,a.kt)("a",b({parentName:"p"},{href:"../new-architecture-intro"}),"migration guide")," as well.")),(0,a.kt)("p",null,"Creating a backward compatible Fabric Component lets your users continue leverage your library, independently from the architecture they use. The creation of such a component requires a few steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure the library so that dependencies are prepared set up properly for both the Old and the New Architecture."),(0,a.kt)("li",{parentName:"ol"},"Update the codebase so that the New Architecture types are not compiled when not available."),(0,a.kt)("li",{parentName:"ol"},"Uniform the JavaScript API so that your user code won't need changes.")),(0,a.kt)(l.ZP,{mdxType:"BetaTS"}),(0,a.kt)("p",null,"While the last step is the same for all the platforms, the first two steps are different for iOS and Android."),(0,a.kt)("h2",b({},{id:"configure-the-fabric-component-dependencies"}),"Configure the Fabric Component Dependencies"),(0,a.kt)("h3",b({},{id:"ios"}),(0,a.kt)("a",{name:"dependencies-ios"}),"iOS"),(0,a.kt)("p",null,"The Apple platform installs Fabric Components using ",(0,a.kt)("a",b({parentName:"p"},{href:"https://cocoapods.org"}),"Cocoapods")," as dependency manager."),(0,a.kt)("p",null,"Every Fabric Component defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"podspec")," that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-ruby"}),'require "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "package.json")))\n\nfolly_version = \'2021.07.22.00\'\nfolly_compiler_flags = \'-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32\'\n\nPod::Spec.new do |s|\n  # Default fields for a valid podspec\n  s.name            = "<FC Name>"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "11.0" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n\n  s.source_files    = "ios/**/*.{h,m,mm,swift}"\n  # React Native Core dependency\n  s.dependency "React-Core"\n\n  #\xa0The following lines are required by the New Architecture.\n  s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"\n  s.pod_target_xcconfig    = {\n      "HEADER_SEARCH_PATHS" => "\\"$(PODS_ROOT)/boost\\"",\n      "OTHER_CPLUSPLUSFLAGS" => "-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1",\n      "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"\n  }\n\n  s.dependency "React-RCTFabric"\n  s.dependency "React-Codegen"\n  s.dependency "RCT-Folly", folly_version\n  s.dependency "RCTRequired"\n  s.dependency "RCTTypeSafety"\n  s.dependency "ReactCommon/turbomodule/core"\nend\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to avoid installing the dependencies when the app is prepared for the Old Architecture."),(0,a.kt)("p",null,"When we want to install the dependencies, we use the following commands depending on the architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-sh"}),"# For the Old Architecture, we use:\npod install\n\n# For the New Architecture, we use:\nRCT_NEW_ARCH_ENABLED=1 pod install\n")),(0,a.kt)("p",null,"Therefore, we can leverage this environment variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"podspec")," to exclude the settings and the dependencies that are related to the New Architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-diff"}),"+ if ENV['RCT_NEW_ARCH_ENABLED'] == '1' then\n    #\xa0The following lines are required by the New Architecture.\n    s.compiler_flags = folly_compiler_flags + \" -DRCT_NEW_ARCH_ENABLED=1\"\n    # ... other dependencies ...\n    s.dependency \"ReactCommon/turbomodule/core\"\n+ end\nend\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," guard prevents the dependencies from being installed when the environment variable is not set."),(0,a.kt)("h3",b({},{id:"android"}),"Android"),(0,a.kt)("p",null,"To create a module that can work with both architectures, you need to configure Gradle to choose which files need to be compiled depending on the chosen architecture. This can be achieved by using ",(0,a.kt)("strong",{parentName:"p"},"different source sets")," in the Gradle configuration."),(0,a.kt)("admonition",b({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Please note that this is currently the suggested approach. While it might lead to some code duplication, it will ensure the maximum compatibility with both architectures. You will see how to reduce the duplication in the next section.")),(0,a.kt)("p",null,"To configure the Fabric Component so that it picks the proper sourceset, you have to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-diff",metastring:'title="build.gradle"',title:'"build.gradle"'}),"+// Add this function in case you don't have it already\n+ def isNewArchitectureEnabled() {\n+    return project.hasProperty(\"newArchEnabled\") && project.newArchEnabled == \"true\"\n+}\n// ... other parts of the build file\ndefaultConfig {\n        minSdkVersion safeExtGet('minSdkVersion', 21)\n        targetSdkVersion safeExtGet('targetSdkVersion', 31)\n+        buildConfigField(\"boolean\", \"IS_NEW_ARCHITECTURE_ENABLED\", isNewArchitectureEnabled().toString())\n+    }\n+\n+    sourceSets {\n+        main {\n+            if (isNewArchitectureEnabled()) {\n+                java.srcDirs += ['src/newarch']\n+            } else {\n+                java.srcDirs += ['src/oldarch']\n+            }\n+        }\n    }\n}\n")),(0,a.kt)("p",null,"This changes do three main things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The first lines define a function that returns whether the New Architecture is enabled or not."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"buildConfigField")," line defines a build configuration boolean field called ",(0,a.kt)("inlineCode",{parentName:"li"},"IS_NEW_ARCHITECTURE_ENABLED"),", and initialize it using the function declared in the first step. This allows you to check at runtime if a user has specified the ",(0,a.kt)("inlineCode",{parentName:"li"},"newArchEnabled")," property or not."),(0,a.kt)("li",{parentName:"ol"},"The last lines leverage the function declared in step one to decide which source sets we need to build, depending on the choosen architecture.")),(0,a.kt)("h2",b({},{id:"update-the-codebase"}),"Update the codebase"),(0,a.kt)("h3",b({},{id:"ios-1"}),"iOS"),(0,a.kt)("p",null,"The second step is to instruct Xcode to avoid compiling all the lines using the New Architecture types and files when we are building an app with the Old Architecture."),(0,a.kt)("p",null,"A Fabric Component requires an header file and an implementation file to add the actual ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," to the module."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"RNMyComponentView.h")," header file could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-objective-c"}),"#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\n#ifndef NativeComponentExampleComponentView_h\n#define NativeComponentExampleComponentView_h\n\nNS_ASSUME_NONNULL_BEGIN\n\n@interface RNMyComponentView : RCTViewComponentView\n@end\n\nNS_ASSUME_NONNULL_END\n\n#endif /* NativeComponentExampleComponentView_h */\n")),(0,a.kt)("p",null,"The implementation ",(0,a.kt)("inlineCode",{parentName:"p"},"RNMyComponentView.mm")," file, instead, could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-objective-c"}),'#import "RNMyComponentView.h"\n\n// <react/renderer imports>\n\n#import "RCTFabricComponentsPlugins.h"\n\nusing namespace facebook::react;\n\n@interface RNMyComponentView () <RCTMyComponentViewViewProtocol>\n\n@end\n\n@implementation RNMyComponentView {\n    UIView * _view;\n}\n\n+ (ComponentDescriptorProvider)componentDescriptorProvider\n{\n    // ... return the descriptor ...\n}\n\n- (instancetype)initWithFrame:(CGRect)frame\n{\n  // ... initialize the object ...\n}\n\n- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps\n{\n  // ... set up the props ...\n\n  [super updateProps:props oldProps:oldProps];\n}\n\nClass<RCTComponentViewProtocol> MyComponentViewCls(void)\n{\n  return RNMyComponentView.class;\n}\n\n@end\n')),(0,a.kt)("p",null,"To make sure that Xcode skips these files, we can wrap ",(0,a.kt)("strong",{parentName:"p"},"both")," of them in some ",(0,a.kt)("inlineCode",{parentName:"p"},"#ifdef RCT_NEW_ARCH_ENABLED")," compilation pragma. For example, the header file could change as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-diff"}),"+ #ifdef RCT_NEW_ARCH_ENABLED\n#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\n// ... rest of the header file ...\n\n#endif /* NativeComponentExampleComponentView_h */\n+ #endif\n")),(0,a.kt)("p",null,"The same two lines should be added in the implementation file, as first and last lines."),(0,a.kt)("p",null,"The above snippet uses the same ",(0,a.kt)("inlineCode",{parentName:"p"},"RCT_NEW_ARCH_ENABLED")," flag used in the previous ",(0,a.kt)("a",b({parentName:"p"},{href:"#dependencies-ios"}),"section"),". When this flag is not set, Xcode skips the lines within the ",(0,a.kt)("inlineCode",{parentName:"p"},"#ifdef")," during compilation and it does not include them into the compiled binary. The compiled binary will have a the ",(0,a.kt)("inlineCode",{parentName:"p"},"RNMyComponentView.o")," object but it will be an empty object."),(0,a.kt)("h3",b({},{id:"android-1"}),"Android"),(0,a.kt)("p",null,"As we can't use conditional compilation blocks on Android, we will define two different source sets. This will allow to create a backward compatible TurboModule with the proper source that is loaded and compiled depending on the used architecture."),(0,a.kt)("p",null,"Therefore, you have to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a Native Component in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/oldarch")," path. See ",(0,a.kt)("a",b({parentName:"li"},{href:"../native-components-android"}),"this guide")," to learn how to create a Native Component."),(0,a.kt)("li",{parentName:"ol"},"Create a Fabric Component in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/newarch")," path. See ",(0,a.kt)("a",b({parentName:"li"},{href:"pillars-fabric-components"}),"this guide")," to learn how to create a Fabric Component.")),(0,a.kt)("p",null,"and then instruct Gradle to decide which implementation to pick."),(0,a.kt)("p",null,"Some files can be shared between a Native and a Fabric Component: these should be created or moved into a folder that is loaded by both the architectures. These files are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyComponentView>.java")," that instantiate and configure the Android View for both the components."),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyComponentView>ManagerImpl.java")," file where which contains the logic of the ViewManager that can be shared between the Native and the Fabric Component."),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyComponentView>Package.java")," file used to load the component.")),(0,a.kt)("p",null,"The final folder structure looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-sh"}),"my-component\n\u251c\u2500\u2500 android\n\u2502   \u251c\u2500\u2500 build.gradle\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 main\n\u2502       \u2502   \u251c\u2500\u2500 AndroidManifest.xml\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyComponent\n\u2502       \u2502               \u251c\u2500\u2500 MyComponentView.java\n\u2502       \u2502               \u251c\u2500\u2500 MyComponentViewManagerImpl.java\n\u2502       \u2502               \u2514\u2500\u2500 MyComponentViewPackage.java\n\u2502       \u251c\u2500\u2500 newarch\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyComponentViewManager.java\n\u2502       \u2514\u2500\u2500 oldarch\n\u2502           \u2514\u2500\u2500 java\n\u2502               \u2514\u2500\u2500 com\n\u2502                   \u2514\u2500\u2500 MyComponentViewManager.java\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 js\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,"The code that should go in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyComponentViewManagerImpl.java")," and that can be shared between the Native Component and the Fabric Component is, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-java",metastring:'title="example of MyComponentViewManager.java"',title:'"example',of:!0,'MyComponentViewManager.java"':!0}),'package com.MyComponent;\nimport androidx.annotation.Nullable;\nimport com.facebook.react.uimanager.ThemedReactContext;\n\npublic class MyComponentViewManagerImpl {\n\n    public static final String NAME = "MyComponent";\n\n    public static MyComponentView createViewInstance(ThemedReactContext context) {\n        return new MyComponentView(context);\n    }\n\n    public static void setFoo(MyComponentView view, String param) {\n        // implement the logic of the foo function using the view and the param passed.\n    }\n}\n')),(0,a.kt)("p",null,"Then, the Native Component and the Fabric Component can be updated using the function declared in the shared manager."),(0,a.kt)("p",null,"For example, for a Native Component:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-java",metastring:'title="Native Component using the ViewManagerImpl"',title:'"Native',Component:!0,using:!0,the:!0,'ViewManagerImpl"':!0}),'public class MyComponentViewManager extends SimpleViewManager<MyComponentView> {\n\n    ReactApplicationContext mCallerContext;\n\n    public MyComponentViewManager(ReactApplicationContext reactContext) {\n        mCallerContext = reactContext;\n    }\n\n    @Override\n    public String getName() {\n        // static NAME property from the shared implementation\n        return MyComponentViewManagerImpl.NAME;\n    }\n\n    @Override\n    public MyComponentView createViewInstance(ThemedReactContext context) {\n        // static createViewInstance function from the shared implementation\n        return MyComponentViewManagerImpl.createViewInstance(context);\n    }\n\n    @ReactProp(name = "foo")\n    public void setFoo(MyComponentView view, String param) {\n        // static custom function from the shared implementation\n        MyComponentViewManagerImpl.setFoo(view, param);\n    }\n\n}\n')),(0,a.kt)("p",null,"And, for a Fabric Component:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-java",metastring:'title="Fabric Component using the ViewManagerImpl"',title:'"Fabric',Component:!0,using:!0,the:!0,'ViewManagerImpl"':!0}),'// Use the static NAME property from the shared implementation\n@ReactModule(name = MyComponentViewManagerImpl.NAME)\npublic class MyComponentViewManager extends SimpleViewManager<MyComponentView>\n        implements MyComponentViewManagerInterface<MyComponentView> {\n\n    private final ViewManagerDelegate<MyComponentView> mDelegate;\n\n    public MyComponentViewManager(ReactApplicationContext context) {\n        mDelegate = new MyComponentViewManagerDelegate<>(this);\n    }\n\n    @Nullable\n    @Override\n    protected ViewManagerDelegate<MyComponentView> getDelegate() {\n        return mDelegate;\n    }\n\n    @NonNull\n    @Override\n    public String getName() {\n        // static NAME property from the shared implementation\n        return MyComponentViewManagerImpl.NAME;\n    }\n\n    @NonNull\n    @Override\n    protected MyComponentView createViewInstance(@NonNull ThemedReactContext context) {\n        // static createViewInstance function from the shared implementation\n        return MyComponentViewManagerImpl.createViewInstance(context);\n    }\n\n    @Override\n    @ReactProp(name = "foo")\n    public void setFoo(MyComponentView view, @Nullable String param) {\n        // static custom function from the shared implementation\n        MyComponentViewManagerImpl.setFoo(view, param]);\n    }\n}\n')),(0,a.kt)("p",null,"For a step-by-step example on how to achieve this, have a look at ",(0,a.kt)("a",b({parentName:"p"},{href:"https://github.com/react-native-community/RNNewArchitectureLibraries/tree/feat/back-fabric-comp"}),"this repo"),"."),(0,a.kt)("h2",b({},{id:"unify-the-javascript-specs"}),"Unify the JavaScript specs"),(0,a.kt)(l.ZP,{mdxType:"BetaTS"}),(0,a.kt)("p",null,"The last step makes sure that the JavaScript behaves transparently to chosen architecture."),(0,a.kt)("p",null,"For a Fabric Component, the source of truth is the ",(0,a.kt)("inlineCode",{parentName:"p"},"<YourModule>NativeComponent.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},".ts"),") spec file. The app accesses the spec file like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-ts"}),"import MyComponent from 'your-component/src/index';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to conditionally ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," file the proper object, given the architecture chosen by the user. We can achieve this with a code that looks like this:"),(0,a.kt)(o.Z,{groupId:"fabric-component-backward-compatibility",defaultValue:r.Z.defaultFabricComponentSpecLanguage,values:r.Z.fabricComponentSpecLanguages,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Flow",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-ts"}),"// @flow\nimport { requireNativeComponent } from 'react-native';\n\nconst isFabricEnabled = global.nativeFabricUIManager != null;\n\nconst myComponent = isFabricEnabled\n  ? require('./MyComponentNativeComponent').default\n  : requireNativeComponent('MyComponent');\n\nexport default myComponent;\n"))),(0,a.kt)(i.Z,{value:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-ts"}),"import requireNativeComponent from 'react-native/Libraries/ReactNative/requireNativeComponent';\n\nconst isFabricEnabled = global.nativeFabricUIManager != null;\n\nconst myComponent = isFabricEnabled\n  ? require('./MyComponentNativeComponent').default\n  : requireNativeComponent('MyComponent');\n\nexport default myComponent;\n")))),(0,a.kt)("p",null,"Whether you are using Flow or TypeScript for your specs, we understand which architecture is running by checking if the ",(0,a.kt)("inlineCode",{parentName:"p"},"global.nativeFabricUIManager")," object has been set or not."),(0,a.kt)("admonition",b({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Please note that the New Architecture is still experimental. The ",(0,a.kt)("inlineCode",{parentName:"p"},"global.nativeFabricUIManager")," API might change in the future for a function that encapsulate this check.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If that object is ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),", the app has not enabled the Fabric feature. It's running on the Old Architecture, and the fallback is to use the default Native Components implementation (",(0,a.kt)("a",b({parentName:"li"},{href:"../native-components-ios"}),"iOS")," or ",(0,a.kt)("a",b({parentName:"li"},{href:"../native-components-android"}),"Android"),")."),(0,a.kt)("li",{parentName:"ul"},"If that object is set, the app is running with Fabric enabled and it should use the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyComponent>NativeComponent")," spec to access the Fabric Component.")))}N.isMDXComponent=!0}}]);