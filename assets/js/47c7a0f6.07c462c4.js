"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[57964],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97083:function(e,t,n){n.d(t,{ZP:function(){return m}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={toc:[]};function m(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},d),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("admonition",u({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,r.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,r.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,r.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}m.isMDXComponent=!0},40661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return y}});var r=n(35318),a=n(97083),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={id:"new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c"},g=void 0,h={unversionedId:"new-architecture-app-intro",id:"version-0.69/new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c",description:"There\u2019s a few prerequisites that should be addressed before the new architecture is enabled in your application.",source:"@site/versioned_docs/version-0.69/new-architecture-app-intro.md",sourceDirName:".",slug:"/new-architecture-app-intro",permalink:"/docs/0.69/new-architecture-app-intro",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-intro.md",tags:[],version:"0.69",frontMatter:{id:"new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c"},sidebar:"docs",previous:{title:"\u5728 iOS \u5e93\u4e2d\u542f\u7528",permalink:"/docs/0.69/new-architecture-library-ios"},next:{title:"\u5728 Android \u4e0a\u542f\u7528 TurboModule",permalink:"/docs/0.69/new-architecture-app-modules-android"}},f={},y=[{value:"Use a React Native nightly release",id:"use-a-react-native-nightly-release",level:2},{value:"Install react-native-codegen",id:"install-react-native-codegen",level:2},{value:"Android specifics",id:"android-specifics",level:3},{value:"Use Hermes",id:"use-hermes",level:2},{value:"iOS: Enable C++17 language feature support",id:"ios-enable-c17-language-feature-support",level:2},{value:"iOS: Use Objective-C++ (<code>.mm</code> extension)",id:"ios-use-objective-c-mm-extension",level:2},{value:"iOS: TurboModules: Ensure your App Provides an <code>RCTCxxBridgeDelegate</code>",id:"ios-turbomodules-ensure-your-app-provides-an-rctcxxbridgedelegate",level:2},{value:"iOS: Setup Folly",id:"ios-setup-folly",level:2}],k={toc:y};function b(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},k),u),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,r.kt)("p",null,"There\u2019s a few prerequisites that should be addressed before the new architecture is enabled in your application."),(0,r.kt)("h2",d({},{id:"use-a-react-native-nightly-release"}),"Use a React Native nightly release"),(0,r.kt)("p",null,"At this time, you must use a React Native nightly release in order to get access to the most up to date changes. Eventually, we will recommend targeting a minimum stable open source release."),(0,r.kt)("p",null,"This guide is written with the expectation that you\u2019re using a specific nightly release. As new revisions of this guide are released, the target nightly release may be updated. The specific nightly version that we will be using throughout the rest of this guide is version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0-20220201-2008-79975d146"),"."),(0,r.kt)("p",null,"Before upgrading your app to a specific nightly release, we recommend upgrading your app to the latest open source release. By upgrading to a published open source release first, you will be able to take advantage of tools like the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/"}),"upgrade helper")," to determine what other changes may be required for your project."),(0,r.kt)("p",null,"As of this writing, the latest stable release is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.67.2"),". Once you have upgraded your project to this version successfully, you may proceed to targeting the ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0-20220201-2008-79975d146")," nightly release. You may target this nightly release the same way you\u2019d target any other version of React Native:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"yarn add react-native@0.0.0-20220201-2008-79975d146\n")),(0,r.kt)("h2",d({},{id:"install-react-native-codegen"}),"Install react-native-codegen"),(0,r.kt)("p",null,"Make sure that you're using the latest version of the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-codegen"}),(0,r.kt)("inlineCode",{parentName:"a"},"react-native-codegen"))," NPM package. At the time of writing it's ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.13"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-codegen\n")),(0,r.kt)("admonition",d({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"If you see an error like ",(0,r.kt)("inlineCode",{parentName:"p"},"***TypeError: RNCodegen.generateFromSchemas is not a function.***"),", it means that you're using a older version of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-codegen"),".\nMake sure you don't have an older version installed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/react-native/node_modules")," folder. You can remove that or reinstall everything in node_modules to fix the problem.")),(0,r.kt)("h3",d({},{id:"android-specifics"}),"Android specifics"),(0,r.kt)("p",null,"Using the new architecture on Android has some prerequisites that you need to meet:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using Gradle 7.x and Android Gradle Plugin 7.x"),(0,r.kt)("li",{parentName:"ol"},"Using the ",(0,r.kt)("strong",{parentName:"li"},"new React Gradle Plugin")),(0,r.kt)("li",{parentName:"ol"},"Building ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native")," ",(0,r.kt)("strong",{parentName:"li"},"from Source"))),(0,r.kt)("p",null,"You can update Gradle by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"cd android && ./gradlew wrapper --gradle-version 7.3 --distribution-type=all\n")),(0,r.kt)("p",null,"While the AGP version should be updated inside the ",(0,r.kt)("strong",{parentName:"p"},"top level")," ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file at the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.android.tools.build:gradle")," dependency line."),(0,r.kt)("p",null,"If you\u2019re set with it, let\u2019s now install the new Gradle plugin which is distributed through a NPM package called ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-gradle-plugin"}),(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"react-native-gradle-plugin"))),". You can do so with:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-gradle-plugin\n")),(0,r.kt)("p",null,"You can control if you have the package already installed by doing:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"ls -la node_modules/react-native-gradle-plugin\n")),(0,r.kt)("p",null,"Now, you can edit your ",(0,r.kt)("strong",{parentName:"p"},"top level")," ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.gradle")," file to include the following line at the end of the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-groovy"}),"includeBuild('../node_modules/react-native-gradle-plugin')\n\ninclude(\":ReactAndroid\")\nproject(\":ReactAndroid\").projectDir = file('../node_modules/react-native/ReactAndroid')\n")),(0,r.kt)("p",null,"Then, edit your ",(0,r.kt)("strong",{parentName:"p"},"top-level Gradle file")," to include the highlighted lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-groovy"}),'buildscript {\n    // ...\n    dependencies {\n        // Make sure that AGP is at least at version 7.x\n        classpath("com.android.tools.build:gradle:7.0.4")\n\n        // Add those lines\n        classpath("com.facebook.react:react-native-gradle-plugin")\n        classpath("de.undercouch:gradle-download-task:4.1.2")\n    }\n}\n')),(0,r.kt)("p",null,"Edit your ",(0,r.kt)("strong",{parentName:"p"},"module-level")," ",(0,r.kt)("strong",{parentName:"p"},"Gradle file")," (usually ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.gradle[.kts]"),") to include the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-groovy"}),'apply plugin: "com.android.application"\n\n// Add those lines\napply plugin: "com.facebook.react"\n// Add those lines as well\nreact {\n    reactRoot = rootProject.file("../node_modules/react-native/")\n    codegenDir = rootProject.file("../node_modules/react-native-codegen/")\n}\n')),(0,r.kt)("p",null,"Finally, it\u2019s time to update your project to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," dependency from source, rather than using a precompiled artifact from the NPM package. This is needed as the later setup will rely on building the native code from source."),(0,r.kt)("p",null,"Let\u2019s edit your ",(0,r.kt)("strong",{parentName:"p"},"module level")," ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," (the one inside ",(0,r.kt)("inlineCode",{parentName:"p"},"app/")," folder) and change the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-groovy"}),'dependencies {\n  // Replace this:\n  implementation "com.facebook.react:react-native:+"  // From node_modules\n  // With this:\n  implementation project(":ReactAndroid")  // From node_modules\n')),(0,r.kt)("h2",d({},{id:"use-hermes"}),"Use Hermes"),(0,r.kt)("p",null,"Hermes is an open-source JavaScript engine optimized for React Native. We highly recommend using Hermes in your application. With Hermes enabled, you will be able to use the JavaScript debugger in Flipper to directly debug your JavaScript code."),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",d({parentName:"p"},{href:"hermes"}),"follow the instructions on the React Native website")," in order to enable Hermes in your application."),(0,r.kt)("admonition",d({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"iOS:")," If you opt out of using Hermes, you will need to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"HermesExecutorFactory")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"JSCExecutorFactory")," in any examples used throughout the rest of this guide.")),(0,r.kt)("h2",d({},{id:"ios-enable-c17-language-feature-support"}),"iOS: Enable C++17 language feature support"),(0,r.kt)("p",null,"Your Xcode project settings need to be updated to support C++17 language features."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select your project in the Project navigator on the left (e.g. MyXcodeApp)"),(0,r.kt)("li",{parentName:"ol"},"Then, make sure your project is selected in the center pane (as opposed to a particular target in your project, e.g. MyXcodeApp under Project, not under Targets)."),(0,r.kt)("li",{parentName:"ol"},"Go to Build Settings"),(0,r.kt)("li",{parentName:"ol"},"Search for C++ Language Dialect or CLANG_CXX_LANGUAGE_STANDARD"),(0,r.kt)("li",{parentName:"ol"},"Make sure ",(0,r.kt)("strong",{parentName:"li"},"C++17"),' is selected from the dropdown menu (or enter "c++17" directly into the value box).')),(0,r.kt)("p",null,"If done correctly, your diff will show the following changes to your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ruby"}),'CLANG_CXX_LANGUAGE_STANDARD = "c++17"\n')),(0,r.kt)("admonition",d({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Your project should also be configured to support Folly. This should be done automatically once the library dependency is picked up, so no further changes to your project are necessary.")),(0,r.kt)("h2",d({},{id:"ios-use-objective-c-mm-extension"}),"iOS: Use Objective-C++ (",(0,r.kt)("inlineCode",{parentName:"h2"},".mm")," extension)"),(0,r.kt)("p",null,"TurboModules can be written using Objective-C or C++. In order to support both cases, any source files that include C++ code should use the ",(0,r.kt)("inlineCode",{parentName:"p"},".mm")," file extension. This extension corresponds to Objective-C++, a language variant that allows for the use of a combination of C++ and Objective-C in source files."),(0,r.kt)("admonition",d({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Use Xcode to rename existing files to ensure file references persist in your project. You might need to clean the build folder (",(0,r.kt)("em",{parentName:"p"},"Project \u2192 Clean Build Folder"),") before re-building the app. If the file is renamed outside of Xcode, you may need to click on the old ",(0,r.kt)("inlineCode",{parentName:"p"},".m")," file reference and Locate the new file.")),(0,r.kt)("h2",d({},{id:"ios-turbomodules-ensure-your-app-provides-an-rctcxxbridgedelegate"}),"iOS: TurboModules: Ensure your App Provides an ",(0,r.kt)("inlineCode",{parentName:"h2"},"RCTCxxBridgeDelegate")),(0,r.kt)("p",null,"In order to set up the TurboModule system, you will add some code to interact with the bridge in your AppDelegate. Before you start, go ahead and rename your AppDelegate file to use the ",(0,r.kt)("inlineCode",{parentName:"p"},".mm")," extension."),(0,r.kt)("p",null,"Now you will have your AppDelegate conform to ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTCxxBridgeDelegate"),". Start by adding the following imports at the top of your AppDelegate file:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-objc"}),"#import <reacthermes/HermesExecutorFactory.h>\n#import <React/RCTCxxBridgeDelegate.h>\n#import <React/RCTJSIExecutorRuntimeInstaller.h>\n")),(0,r.kt)("p",null,"Then, declare your app delegate as a ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTCxxBridgeDelegate")," provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-objc"}),"@interface AppDelegate () <RCTCxxBridgeDelegate> {\n  // ...\n}\n@end\n")),(0,r.kt)("p",null,"To conform to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTCxxBridgeDelegate")," protocol, you will need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsExecutorFactoryForBridge:")," method. Typically, this is where you would return a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSCExecutorFactory")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HermesExecutorFactory"),", and we will use it to install our TurboModules bindings later on."),(0,r.kt)("p",null,"You can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsExecutorFactoryForBridge:")," method like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-objc"}),"#pragma mark - RCTCxxBridgeDelegate\n\n- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n  return std::make_unique<facebook::react::HermesExecutorFactory>(facebook::react::RCTJSIExecutorRuntimeInstaller([bridge](facebook::jsi::Runtime &runtime) {\n      if (!bridge) {\n        return;\n      }\n    })\n  );\n}\n")),(0,r.kt)("h2",d({},{id:"ios-setup-folly"}),"iOS: Setup Folly"),(0,r.kt)("p",null,"The previous step will incorporate in your iOS app a dependency called Folly. Folly requires some extra compiler flags to works properly. To set them up, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Project Navigator")," (",(0,r.kt)("inlineCode",{parentName:"li"},"cmd+1"),"), select your app project."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Targets")," section, select the target with the name of your app."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Build Settings")," tab"),(0,r.kt)("li",{parentName:"ol"},"Search for ",(0,r.kt)("strong",{parentName:"li"},"Other C++ Flags")),(0,r.kt)("li",{parentName:"ol"},"Update the ",(0,r.kt)("strong",{parentName:"li"},"Debug")," configuration, adding following flags: ",(0,r.kt)("inlineCode",{parentName:"li"},"-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1")),(0,r.kt)("li",{parentName:"ol"},"Update the ",(0,r.kt)("strong",{parentName:"li"},"Release")," configuration with the following flags: ",(0,r.kt)("inlineCode",{parentName:"li"},"-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1"))))}b.isMDXComponent=!0}}]);