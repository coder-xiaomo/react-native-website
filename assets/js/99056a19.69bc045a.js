/*! For license information please see 99056a19.69bc045a.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[80902],{61647:(e,n,r)=>{r.d(n,{ZP:()=>s});var i=r(24246),t=r(71670);function o(e){const n=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,t.ah)(),e.components);return(0,i.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:[(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,i.jsx)(n.strong,{children:"\u5b9e\u9a8c\u6027"}),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,i.jsx)(n.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"}),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"]}),(0,i.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,i.jsx)(n.strong,{children:"\u624b\u52a8\u6b65\u9aa4"}),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002"]})]})}const s=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},79324:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=r(24246),t=r(71670),o=r(61647);const s={id:"new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c"},a=void 0,d={id:"new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c",description:"There are a few prerequisites that should be addressed before the New Architecture is enabled in your application.",source:"@site/versioned_docs/version-0.73/new-architecture-app-intro.md",sourceDirName:".",slug:"/new-architecture-app-intro",permalink:"/docs/new-architecture-app-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-intro.md",tags:[],version:"0.73",frontMatter:{id:"new-architecture-app-intro",title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c"},sidebar:"docs",previous:{title:"\u5728 iOS \u5e93\u4e2d\u542f\u7528",permalink:"/docs/new-architecture-library-ios"},next:{title:"React 18 \u4e0e React Native",permalink:"/docs/react-18-and-react-native"}},c={},l=[{value:"Use a React Native &gt;= 0.68 release",id:"use-a-react-native--068-release",level:2},{value:"Android specifics",id:"android-specifics",level:3},{value:"Use Hermes",id:"use-hermes",level:2},{value:"Android",id:"android",level:3},{value:"iOS: Make the project build",id:"ios-make-the-project-build",level:2},{value:"iOS: Use Objective-C++ (<code>.mm</code> extension)",id:"ios-use-objective-c-mm-extension",level:2},{value:"iOS: TurboModules: Ensure your App Provides an <code>RCTCxxBridgeDelegate</code>",id:"ios-turbomodules-ensure-your-app-provides-an-rctcxxbridgedelegate",level:2}];function h(e){const n=Object.assign({p:"p",h2:"h2",code:"code",a:"a",pre:"pre",h3:"h3",ol:"ol",li:"li",strong:"strong",admonition:"admonition",em:"em"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(n.p,{children:"There are a few prerequisites that should be addressed before the New Architecture is enabled in your application."}),"\n",(0,i.jsx)(n.h2,{id:"use-a-react-native--068-release",children:"Use a React Native >= 0.68 release"}),"\n",(0,i.jsxs)(n.p,{children:["React Native released the support for the New Architecture with the release ",(0,i.jsx)(n.code,{children:"0.68.0"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This guide is written with the expectation that you\u2019re using the latest React Native release. At the moment of writing, this is ",(0,i.jsx)(n.code,{children:"0.70.0"}),". Other than this guide, you can leverage the ",(0,i.jsx)(n.a,{href:"https://react-native-community.github.io/upgrade-helper/",children:"upgrade helper"})," to determine what other changes may be required for your project."]}),"\n",(0,i.jsx)(n.p,{children:"To update to the most recent version of React Native, you can run this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add react-native@0.70.0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Starting from React Native ",(0,i.jsx)(n.code,{children:"0.69.0"}),", you may also need to update the version of React to 18. You can do so by using this command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add react@18.0.0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"android-specifics",children:"Android specifics"}),"\n",(0,i.jsx)(n.p,{children:"Using the New Architecture on Android has some prerequisites that you need to meet:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Using Gradle 7.x and Android Gradle Plugin 7.x"}),"\n",(0,i.jsxs)(n.li,{children:["Using the ",(0,i.jsx)(n.strong,{children:"new React Gradle Plugin"})]}),"\n",(0,i.jsxs)(n.li,{children:["Building ",(0,i.jsx)(n.code,{children:"react-native"})," ",(0,i.jsx)(n.strong,{children:"from Source"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can update Gradle by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd android && ./gradlew wrapper --gradle-version 7.3.3 --distribution-type=all\n"})}),"\n",(0,i.jsxs)(n.p,{children:["While the AGP version should be updated inside the ",(0,i.jsx)(n.strong,{children:"top-level"})," ",(0,i.jsx)(n.code,{children:"build.gradle"})," file at the ",(0,i.jsx)(n.code,{children:"com.android.tools.build:gradle"})," dependency line."]}),"\n",(0,i.jsxs)(n.p,{children:["Now, you can edit your ",(0,i.jsx)(n.strong,{children:"top-level"})," ",(0,i.jsx)(n.code,{children:"settings.gradle"})," file to include the following line at the end of the file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'includeBuild(\'../node_modules/react-native-gradle-plugin\')\n\ninclude(":ReactAndroid")\nproject(":ReactAndroid").projectDir = file(\'../node_modules/react-native/ReactAndroid\')\ninclude(":ReactAndroid:hermes-engine")\nproject(":ReactAndroid:hermes-engine").projectDir = file(\'../node_modules/react-native/ReactAndroid/hermes-engine\')\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then, open the ",(0,i.jsx)(n.code,{children:"android/app/src/main/AndroidManifest.xml"})," file and add this line:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'android:windowSoftInputMode="adjustResize"\n+ android:exported="true">\n<intent-filter>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then, edit your ",(0,i.jsx)(n.strong,{children:"top-level Gradle file"})," to include the highlighted lines:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'buildscript {\n    ext {\n        buildToolsVersion = "31.0.0"\n        minSdkVersion = 21\n        compileSdkVersion = 31\n        targetSdkVersion = 31\n        if (System.properties[\'os.arch\'] == "aarch64") {\n            // For M1 Users we need to use the NDK 24 which added support for aarch64\n            ndkVersion = "24.0.8215888"\n        } else {\n            // Otherwise we default to the side-by-side NDK version from AGP.\n            ndkVersion = "21.4.7075529"\n        }\n    }\n\n    // ...\n    dependencies {\n        // Make sure that AGP is at least at version 7.x\n        classpath("com.android.tools.build:gradle:7.2.0")\n\n        // Add those lines\n        classpath("com.facebook.react:react-native-gradle-plugin")\n        classpath("de.undercouch:gradle-download-task:4.1.2")\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Edit your ",(0,i.jsx)(n.strong,{children:"module-level"})," ",(0,i.jsx)(n.strong,{children:"Gradle file"})," (usually ",(0,i.jsx)(n.code,{children:"app/build.gradle[.kts]"}),") to include the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'// ...\n\napply plugin: "com.android.application"\n\n// ...\n\nif (enableHermes) {\n-    def hermesPath = "../../node_modules/hermes-engine/android/";\n-    debugImplementation files(hermesPath + "hermes-debug.aar")\n-    releaseImplementation files(hermesPath + "hermes-release.aar")\n+    //noinspection GradleDynamicVersion\n+    implementation("com.facebook.react:hermes-engine:+") { // From node_modules\n+        exclude group:\'com.facebook.fbjni\'\n+    }\n} else {\n\n// ...\n\n+ configurations.all {\n+     resolutionStrategy.dependencySubstitution {\n+         substitute(module("com.facebook.react:react-native"))\n+                 .using(project(":ReactAndroid"))\n+                 .because("On New Architecture we\'re building React Native from source")\n+         substitute(module("com.facebook.react:hermes-engine"))\n+                .using(project(":ReactAndroid:hermes-engine"))\n+                .because("On New Architecture we\'re building Hermes from source")\n+     }\n+ }\n\n// Run this once to be able to run the application with BUCK\n// puts all compile dependencies into folder libs for BUCK to use\ntask copyDownloadableDepsToLibs(type: Copy) {\n\n// ...\n\n+ def isNewArchitectureEnabled() {\n+     // To opt-in for the New Architecture, you can either:\n+     // - Set `newArchEnabled` to true inside the `gradle.properties` file\n+     // - Invoke gradle with `-newArchEnabled=true`\n+     // - Set an environment variable `ORG_GRADLE_PROJECT_newArchEnabled=true`\n+     return project.hasProperty("newArchEnabled") && project.newArchEnabled == "true"\n+ }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, it\u2019s time to update your project to use the ",(0,i.jsx)(n.code,{children:"react-native"})," dependency from source, rather than using a precompiled artifact from the NPM package. This is needed as the later setup will rely on building the native code from source."]}),"\n",(0,i.jsxs)(n.p,{children:["Let\u2019s edit your ",(0,i.jsx)(n.strong,{children:"module-level"})," ",(0,i.jsx)(n.code,{children:"build.gradle"})," (the one inside ",(0,i.jsx)(n.code,{children:"app/"})," folder) and change the following line:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'dependencies {\n-  implementation "com.facebook.react:react-native:+"  // From node_modules\n+  implementation project(":ReactAndroid")  // From node_modules\n'})}),"\n",(0,i.jsx)(n.h2,{id:"use-hermes",children:"Use Hermes"}),"\n",(0,i.jsx)(n.p,{children:"Hermes is an open-source JavaScript engine optimized for React Native. Hermes is enabled by default and you have to explicitly disable it if you want to use JSC."}),"\n",(0,i.jsx)(n.p,{children:"We highly recommend using Hermes in your application. With Hermes enabled, you will be able to use the JavaScript debugger in Flipper to directly debug your JavaScript code."}),"\n",(0,i.jsxs)(n.p,{children:["Please ",(0,i.jsx)(n.a,{href:"hermes",children:"follow the instructions on the React Native website"})," to learn how to enable/disable Hermes."]}),"\n",(0,i.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"iOS:"})," If you opt out of using Hermes, you will need to replace ",(0,i.jsx)(n.code,{children:"HermesExecutorFactory"})," with ",(0,i.jsx)(n.code,{children:"JSCExecutorFactory"})," in any examples used throughout the rest of this guide."]})}),"\n",(0,i.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,i.jsxs)(n.p,{children:["To enable Hermes in Android, open the ",(0,i.jsx)(n.code,{children:"android/app/build.gradle"})," and apply the following changes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'project.ext.react = [\n-    enableHermes: true,  // clean and rebuild if changing\n+    enableHermes: true,  // clean and rebuild if changing\n]\n// ...\n\n}\n\nif (enableHermes) {\n-    def hermesPath = "../../node_modules/hermes-engine/android/";\n-    debugImplementation files(hermesPath + "hermes-debug.aar")\n-    releaseImplementation files(hermesPath + "hermes-release.aar")\n+    //noinspection GradleDynamicVersion\n+    implementation("com.facebook.react:hermes-engine:+") { // From node_modules\n+        exclude group:\'com.facebook.fbjni\'\n+    }\n} else {\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Moreover, you'll need to update the ",(0,i.jsx)(n.code,{children:"proguard-rules"}),", adding the following ones:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"-keep class com.facebook.hermes.unicode.** { *; }\n-keep class com.facebook.jni.** { *; }\n"})}),"\n",(0,i.jsx)(n.p,{children:"After that, remember to cleanup the project, running"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd android\n./gradlew clean\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ios-make-the-project-build",children:"iOS: Make the project build"}),"\n",(0,i.jsx)(n.p,{children:"After upgrading the project, there are a few changes you need to apply:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Fix an API change in the ",(0,i.jsx)(n.code,{children:"AppDelegate.m"}),". Open this file and apply this change:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:'#if DEBUG\n-       return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];\n+       return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];\n#else\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Target the proper iOS version. Open the ",(0,i.jsx)(n.code,{children:"Podfile"})," and apply this change:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"- platform :ios, '11.0'\n+ platform :ios, '12.4'\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Create an ",(0,i.jsx)(n.code,{children:".xcode.env"})," file to export the locaion of the NODE_BINARY. Navigate to the ",(0,i.jsx)(n.code,{children:"ios"})," folder and run this command:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"echo 'export NODE_BINARY=$(command -v node)' > .xcode.env\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need it, you can also open the file and replace the ",(0,i.jsx)(n.code,{children:"$(command -v node)"})," with the path to the node executable.\nReact Native supports also a local version of this file ",(0,i.jsx)(n.code,{children:".xcode.env.local"}),". This file is not synced with the repository to let you customize your local setup, if it differs from the Continuous Integration or the team one."]}),"\n",(0,i.jsxs)(n.h2,{id:"ios-use-objective-c-mm-extension",children:["iOS: Use Objective-C++ (",(0,i.jsx)(n.code,{children:".mm"})," extension)"]}),"\n",(0,i.jsxs)(n.p,{children:["TurboModules can be written using Objective-C or C++. In order to support both cases, any source files that include C++ code should use the ",(0,i.jsx)(n.code,{children:".mm"})," file extension. This extension corresponds to Objective-C++, a language variant that allows for the use of a combination of C++ and Objective-C in source files."]}),"\n",(0,i.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,i.jsxs)(n.p,{children:["Use Xcode to rename existing files to ensure file references persist in your project. You might need to clean the build folder (",(0,i.jsx)(n.em,{children:"Project \u2192 Clean Build Folder"}),") before re-building the app. If the file is renamed outside of Xcode, you may need to click on the old ",(0,i.jsx)(n.code,{children:".m"})," file reference and Locate the new file."]})}),"\n",(0,i.jsxs)(n.h2,{id:"ios-turbomodules-ensure-your-app-provides-an-rctcxxbridgedelegate",children:["iOS: TurboModules: Ensure your App Provides an ",(0,i.jsx)(n.code,{children:"RCTCxxBridgeDelegate"})]}),"\n",(0,i.jsxs)(n.p,{children:["In order to set up the TurboModule system, you will add some code to interact with the bridge in your AppDelegate. Before you start, go ahead and rename your AppDelegate file to use the ",(0,i.jsx)(n.code,{children:".mm"})," extension."]}),"\n",(0,i.jsxs)(n.p,{children:["Now you will have your AppDelegate conform to ",(0,i.jsx)(n.code,{children:"RCTCxxBridgeDelegate"}),". Start by adding the following imports at the top of your AppDelegate file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:"#import <reacthermes/HermesExecutorFactory.h>\n#import <React/RCTCxxBridgeDelegate.h>\n#import <React/RCTJSIExecutorRuntimeInstaller.h>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, declare your app delegate as a ",(0,i.jsx)(n.code,{children:"RCTCxxBridgeDelegate"})," provider:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:"@interface AppDelegate () <RCTCxxBridgeDelegate> {\n  // ...\n}\n@end\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To conform to the ",(0,i.jsx)(n.code,{children:"RCTCxxBridgeDelegate"})," protocol, you will need to implement the ",(0,i.jsx)(n.code,{children:"jsExecutorFactoryForBridge:"})," method. Typically, this is where you would return a ",(0,i.jsx)(n.code,{children:"JSCExecutorFactory"})," or ",(0,i.jsx)(n.code,{children:"HermesExecutorFactory"}),", and we will use it to install our TurboModules bindings later on."]}),"\n",(0,i.jsxs)(n.p,{children:["You can implement the ",(0,i.jsx)(n.code,{children:"jsExecutorFactoryForBridge:"})," method like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-objc",children:"#pragma mark - RCTCxxBridgeDelegate\n\n- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n  return std::make_unique<facebook::react::HermesExecutorFactory>(facebook::react::RCTJSIExecutorRuntimeInstaller([bridge](facebook::jsi::Runtime &runtime) {\n      if (!bridge) {\n        return;\n      }\n    })\n  );\n}\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},71426:(e,n,r)=>{var i=r(27378),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var i,o={},c=null,l=null;for(i in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,i)&&!d.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:t,type:e,key:c,ref:l,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},24246:(e,n,r)=>{e.exports=r(71426)},71670:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>o});var i=r(27378);const t=i.createContext({});function o(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||s:o(e),i.createElement(t.Provider,{value:a},n)}}}]);