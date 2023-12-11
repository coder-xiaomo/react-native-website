/*! For license information please see 20da3b21.c1fac4d5.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27039],{23014:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(24246),o=t(71670);function i(e){const n=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,o.ah)(),e.components);return(0,a.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:[(0,a.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,a.jsx)(n.strong,{children:"\u5b9e\u9a8c\u6027"}),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,a.jsx)(n.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"}),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"]}),(0,a.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,a.jsx)(n.strong,{children:"\u624b\u52a8\u6b65\u9aa4"}),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002"]})]})}const r=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}},49236:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(24246),o=t(71670);function i(e){const n=Object.assign({admonition:"admonition",p:"p"},(0,o.ah)(),e.components);return(0,a.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,a.jsx)(n.p,{children:"\u65b0\u67b6\u6784\u5bf9\u4e8e TypeScript \u7684\u652f\u6301\u5c1a\u5904\u4e8e beta \u6d4b\u8bd5\u9636\u6bb5\u3002"})})}const r=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}},34973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var a=t(24246),o=t(71670),i=t(48375),r=t(86386),s=t(11674),c=t(49236),l=t(23014);const d={id:"backward-compatibility-fabric-components",title:"Fabric Components as Native Components"},p=void 0,h={id:"the-new-architecture/backward-compatibility-fabric-components",title:"Fabric Components as Native Components",description:"The creation of a backward compatible Fabric Component requires the knowledge of how to create a Fabric Component. To recall these concepts, have a look at this guide.",source:"@site/versioned_docs/version-0.71/the-new-architecture/backward-compatibility-fabric-components.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/backward-compatibility-fabric-components",permalink:"/docs/0.71/the-new-architecture/backward-compatibility-fabric-components",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/backward-compatibility-fabric-components.md",tags:[],version:"0.71",frontMatter:{id:"backward-compatibility-fabric-components",title:"Fabric Components as Native Components"},sidebar:"docs",previous:{title:"TurboModules as Native Modules",permalink:"/docs/0.71/the-new-architecture/backward-compatibility-turbomodules"},next:{title:"\u8fc1\u79fb\u5230\u65b0\u67b6\u6784",permalink:"/docs/0.71/new-architecture-intro"}},u={},m=[{value:"Configure the Fabric Component Dependencies",id:"configure-the-fabric-component-dependencies",level:2},{value:"iOS",id:"dependencies-ios",level:3},{value:"Android",id:"android",level:3},{value:"Update the codebase",id:"update-the-codebase",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android-1",level:3},{value:"Unify the JavaScript specs",id:"unify-the-javascript-specs",level:2}];function f(e){const n=Object.assign({admonition:"admonition",p:"p",a:"a",ol:"ol",li:"li",h2:"h2",h3:"h3",code:"code",pre:"pre",strong:"strong",ul:"ul"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.ZP,{}),"\n",(0,a.jsxs)(n.admonition,{title:"\u63d0\u793a",type:"info",children:[(0,a.jsxs)(n.p,{children:["The creation of a backward compatible Fabric Component requires the knowledge of how to create a Fabric Component. To recall these concepts, have a look at this ",(0,a.jsx)(n.a,{href:"pillars-fabric-components",children:"guide"}),"."]}),(0,a.jsxs)(n.p,{children:["Fabric Components only work when the New Architecture is properly setup. If you already have a library that you want to migrate to the New Architecture, have a look at the ",(0,a.jsx)(n.a,{href:"../new-architecture-intro",children:"migration guide"})," as well."]})]}),"\n",(0,a.jsx)(n.p,{children:"Creating a backward compatible Fabric Component lets your users continue leverage your library, independently from the architecture they use. The creation of such a component requires a few steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Configure the library so that dependencies are prepared set up properly for both the Old and the New Architecture."}),"\n",(0,a.jsx)(n.li,{children:"Update the codebase so that the New Architecture types are not compiled when not available."}),"\n",(0,a.jsx)(n.li,{children:"Uniform the JavaScript API so that your user code won't need changes."}),"\n"]}),"\n",(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsx)(n.p,{children:"While the last step is the same for all the platforms, the first two steps are different for iOS and Android."}),"\n",(0,a.jsx)(n.h2,{id:"configure-the-fabric-component-dependencies",children:"Configure the Fabric Component Dependencies"}),"\n",(0,a.jsx)(n.h3,{id:"dependencies-ios",children:"iOS"}),"\n",(0,a.jsxs)(n.p,{children:["The Apple platform installs Fabric Components using ",(0,a.jsx)(n.a,{href:"https://cocoapods.org",children:"Cocoapods"})," as dependency manager."]}),"\n",(0,a.jsxs)(n.p,{children:["Every Fabric Component defines a ",(0,a.jsx)(n.code,{children:"podspec"})," that looks like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:'require "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "package.json")))\n\nfolly_version = \'2021.07.22.00\'\nfolly_compiler_flags = \'-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32\'\n\nPod::Spec.new do |s|\n  # Default fields for a valid podspec\n  s.name            = "<FC Name>"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "11.0" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n\n  s.source_files    = "ios/**/*.{h,m,mm,swift}"\n  # React Native Core dependency\n  s.dependency "React-Core"\n\n  #\xa0The following lines are required by the New Architecture.\n  s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"\n  s.pod_target_xcconfig    = {\n      "HEADER_SEARCH_PATHS" => "\\"$(PODS_ROOT)/boost\\"",\n      "OTHER_CPLUSPLUSFLAGS" => "-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1",\n      "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"\n  }\n\n  s.dependency "React-RCTFabric"\n  s.dependency "React-Codegen"\n  s.dependency "RCT-Folly", folly_version\n  s.dependency "RCTRequired"\n  s.dependency "RCTTypeSafety"\n  s.dependency "ReactCommon/turbomodule/core"\nend\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"goal"})," is to avoid installing the dependencies when the app is prepared for the Old Architecture."]}),"\n",(0,a.jsx)(n.p,{children:"When we want to install the dependencies, we use the following commands depending on the architecture:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# For the Old Architecture, we use:\npod install\n\n# For the New Architecture, we use:\nRCT_NEW_ARCH_ENABLED=1 pod install\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Therefore, we can leverage this environment variable in the ",(0,a.jsx)(n.code,{children:"podspec"})," to exclude the settings and the dependencies that are related to the New Architecture:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"+ if ENV['RCT_NEW_ARCH_ENABLED'] == '1' then\n    #\xa0The following lines are required by the New Architecture.\n    s.compiler_flags = folly_compiler_flags + \" -DRCT_NEW_ARCH_ENABLED=1\"\n    # ... other dependencies ...\n    s.dependency \"ReactCommon/turbomodule/core\"\n+ end\nend\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This ",(0,a.jsx)(n.code,{children:"if"})," guard prevents the dependencies from being installed when the environment variable is not set."]}),"\n",(0,a.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,a.jsxs)(n.p,{children:["To create a module that can work with both architectures, you need to configure Gradle to choose which files need to be compiled depending on the chosen architecture. This can be achieved by using ",(0,a.jsx)(n.strong,{children:"different source sets"})," in the Gradle configuration."]}),"\n",(0,a.jsx)(n.admonition,{title:"\u5907\u6ce8",type:"note",children:(0,a.jsx)(n.p,{children:"Please note that this is currently the suggested approach. While it might lead to some code duplication, it will ensure the maximum compatibility with both architectures. You will see how to reduce the duplication in the next section."})}),"\n",(0,a.jsxs)(n.p,{children:["To configure the Fabric Component so that it picks the proper sourceset, you have to update the ",(0,a.jsx)(n.code,{children:"build.gradle"})," file in the following way:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",metastring:'title="build.gradle"',children:"+// Add this function in case you don't have it already\n+ def isNewArchitectureEnabled() {\n+    return project.hasProperty(\"newArchEnabled\") && project.newArchEnabled == \"true\"\n+}\n// ... other parts of the build file\ndefaultConfig {\n        minSdkVersion safeExtGet('minSdkVersion', 21)\n        targetSdkVersion safeExtGet('targetSdkVersion', 31)\n+        buildConfigField(\"boolean\", \"IS_NEW_ARCHITECTURE_ENABLED\", isNewArchitectureEnabled().toString())\n+    }\n+\n+    sourceSets {\n+        main {\n+            if (isNewArchitectureEnabled()) {\n+                java.srcDirs += ['src/newarch']\n+            } else {\n+                java.srcDirs += ['src/oldarch']\n+            }\n+        }\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This changes do three main things:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The first lines define a function that returns whether the New Architecture is enabled or not."}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"buildConfigField"})," line defines a build configuration boolean field called ",(0,a.jsx)(n.code,{children:"IS_NEW_ARCHITECTURE_ENABLED"}),", and initialize it using the function declared in the first step. This allows you to check at runtime if a user has specified the ",(0,a.jsx)(n.code,{children:"newArchEnabled"})," property or not."]}),"\n",(0,a.jsx)(n.li,{children:"The last lines leverage the function declared in step one to decide which source sets we need to build, depending on the choosen architecture."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"update-the-codebase",children:"Update the codebase"}),"\n",(0,a.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,a.jsx)(n.p,{children:"The second step is to instruct Xcode to avoid compiling all the lines using the New Architecture types and files when we are building an app with the Old Architecture."}),"\n",(0,a.jsxs)(n.p,{children:["A Fabric Component requires an header file and an implementation file to add the actual ",(0,a.jsx)(n.code,{children:"View"})," to the module."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, the ",(0,a.jsx)(n.code,{children:"RNMyComponentView.h"})," header file could look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-objective-c",children:"#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\n#ifndef NativeComponentExampleComponentView_h\n#define NativeComponentExampleComponentView_h\n\nNS_ASSUME_NONNULL_BEGIN\n\n@interface RNMyComponentView : RCTViewComponentView\n@end\n\nNS_ASSUME_NONNULL_END\n\n#endif /* NativeComponentExampleComponentView_h */\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The implementation ",(0,a.jsx)(n.code,{children:"RNMyComponentView.mm"})," file, instead, could look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-objective-c",children:'#import "RNMyComponentView.h"\n\n// <react/renderer imports>\n\n#import "RCTFabricComponentsPlugins.h"\n\nusing namespace facebook::react;\n\n@interface RNMyComponentView () <RCTMyComponentViewViewProtocol>\n\n@end\n\n@implementation RNMyComponentView {\n    UIView * _view;\n}\n\n+ (ComponentDescriptorProvider)componentDescriptorProvider\n{\n    // ... return the descriptor ...\n}\n\n- (instancetype)initWithFrame:(CGRect)frame\n{\n  // ... initialize the object ...\n}\n\n- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps\n{\n  // ... set up the props ...\n\n  [super updateProps:props oldProps:oldProps];\n}\n\nClass<RCTComponentViewProtocol> MyComponentViewCls(void)\n{\n  return RNMyComponentView.class;\n}\n\n@end\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To make sure that Xcode skips these files, we can wrap ",(0,a.jsx)(n.strong,{children:"both"})," of them in some ",(0,a.jsx)(n.code,{children:"#ifdef RCT_NEW_ARCH_ENABLED"})," compilation pragma. For example, the header file could change as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"+ #ifdef RCT_NEW_ARCH_ENABLED\n#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\n// ... rest of the header file ...\n\n#endif /* NativeComponentExampleComponentView_h */\n+ #endif\n"})}),"\n",(0,a.jsx)(n.p,{children:"The same two lines should be added in the implementation file, as first and last lines."}),"\n",(0,a.jsxs)(n.p,{children:["The above snippet uses the same ",(0,a.jsx)(n.code,{children:"RCT_NEW_ARCH_ENABLED"})," flag used in the previous ",(0,a.jsx)(n.a,{href:"#dependencies-ios",children:"section"}),". When this flag is not set, Xcode skips the lines within the ",(0,a.jsx)(n.code,{children:"#ifdef"})," during compilation and it does not include them into the compiled binary. The compiled binary will have a the ",(0,a.jsx)(n.code,{children:"RNMyComponentView.o"})," object but it will be an empty object."]}),"\n",(0,a.jsx)(n.h3,{id:"android-1",children:"Android"}),"\n",(0,a.jsx)(n.p,{children:"As we can't use conditional compilation blocks on Android, we will define two different source sets. This will allow to create a backward compatible TurboModule with the proper source that is loaded and compiled depending on the used architecture."}),"\n",(0,a.jsx)(n.p,{children:"Therefore, you have to:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a Native Component in the ",(0,a.jsx)(n.code,{children:"src/oldarch"})," path. See ",(0,a.jsx)(n.a,{href:"../native-components-android",children:"this guide"})," to learn how to create a Native Component."]}),"\n",(0,a.jsxs)(n.li,{children:["Create a Fabric Component in the ",(0,a.jsx)(n.code,{children:"src/newarch"})," path. See ",(0,a.jsx)(n.a,{href:"pillars-fabric-components",children:"this guide"})," to learn how to create a Fabric Component."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"and then instruct Gradle to decide which implementation to pick."}),"\n",(0,a.jsx)(n.p,{children:"Some files can be shared between a Native and a Fabric Component: these should be created or moved into a folder that is loaded by both the architectures. These files are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["the ",(0,a.jsx)(n.code,{children:"<MyComponentView>.java"})," that instantiate and configure the Android View for both the components."]}),"\n",(0,a.jsxs)(n.li,{children:["the ",(0,a.jsx)(n.code,{children:"<MyComponentView>ManagerImpl.java"})," file where which contains the logic of the ViewManager that can be shared between the Native and the Fabric Component."]}),"\n",(0,a.jsxs)(n.li,{children:["the ",(0,a.jsx)(n.code,{children:"<MyComponentView>Package.java"})," file used to load the component."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The final folder structure looks like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"my-component\n\u251c\u2500\u2500 android\n\u2502   \u251c\u2500\u2500 build.gradle\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 main\n\u2502       \u2502   \u251c\u2500\u2500 AndroidManifest.xml\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyComponent\n\u2502       \u2502               \u251c\u2500\u2500 MyComponentView.java\n\u2502       \u2502               \u251c\u2500\u2500 MyComponentViewManagerImpl.java\n\u2502       \u2502               \u2514\u2500\u2500 MyComponentViewPackage.java\n\u2502       \u251c\u2500\u2500 newarch\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyComponentViewManager.java\n\u2502       \u2514\u2500\u2500 oldarch\n\u2502           \u2514\u2500\u2500 java\n\u2502               \u2514\u2500\u2500 com\n\u2502                   \u2514\u2500\u2500 MyComponentViewManager.java\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 js\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The code that should go in the ",(0,a.jsx)(n.code,{children:"MyComponentViewManagerImpl.java"})," and that can be shared between the Native Component and the Fabric Component is, for example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="example of MyComponentViewManager.java"',children:'package com.MyComponent;\nimport androidx.annotation.Nullable;\nimport com.facebook.react.uimanager.ThemedReactContext;\n\npublic class MyComponentViewManagerImpl {\n\n    public static final String NAME = "MyComponent";\n\n    public static MyComponentView createViewInstance(ThemedReactContext context) {\n        return new MyComponentView(context);\n    }\n\n    public static void setFoo(MyComponentView view, String param) {\n        // implement the logic of the foo function using the view and the param passed.\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then, the Native Component and the Fabric Component can be updated using the function declared in the shared manager."}),"\n",(0,a.jsx)(n.p,{children:"For example, for a Native Component:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Native Component using the ViewManagerImpl"',children:'public class MyComponentViewManager extends SimpleViewManager<MyComponentView> {\n\n    ReactApplicationContext mCallerContext;\n\n    public MyComponentViewManager(ReactApplicationContext reactContext) {\n        mCallerContext = reactContext;\n    }\n\n    @Override\n    public String getName() {\n        // static NAME property from the shared implementation\n        return MyComponentViewManagerImpl.NAME;\n    }\n\n    @Override\n    public MyComponentView createViewInstance(ThemedReactContext context) {\n        // static createViewInstance function from the shared implementation\n        return MyComponentViewManagerImpl.createViewInstance(context);\n    }\n\n    @ReactProp(name = "foo")\n    public void setFoo(MyComponentView view, String param) {\n        // static custom function from the shared implementation\n        MyComponentViewManagerImpl.setFoo(view, param);\n    }\n\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"And, for a Fabric Component:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Fabric Component using the ViewManagerImpl"',children:'// Use the static NAME property from the shared implementation\n@ReactModule(name = MyComponentViewManagerImpl.NAME)\npublic class MyComponentViewManager extends SimpleViewManager<MyComponentView>\n        implements MyComponentViewManagerInterface<MyComponentView> {\n\n    private final ViewManagerDelegate<MyComponentView> mDelegate;\n\n    public MyComponentViewManager(ReactApplicationContext context) {\n        mDelegate = new MyComponentViewManagerDelegate<>(this);\n    }\n\n    @Nullable\n    @Override\n    protected ViewManagerDelegate<MyComponentView> getDelegate() {\n        return mDelegate;\n    }\n\n    @NonNull\n    @Override\n    public String getName() {\n        // static NAME property from the shared implementation\n        return MyComponentViewManagerImpl.NAME;\n    }\n\n    @NonNull\n    @Override\n    protected MyComponentView createViewInstance(@NonNull ThemedReactContext context) {\n        // static createViewInstance function from the shared implementation\n        return MyComponentViewManagerImpl.createViewInstance(context);\n    }\n\n    @Override\n    @ReactProp(name = "foo")\n    public void setFoo(MyComponentView view, @Nullable String param) {\n        // static custom function from the shared implementation\n        MyComponentViewManagerImpl.setFoo(view, param]);\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["For a step-by-step example on how to achieve this, have a look at ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-community/RNNewArchitectureLibraries/tree/feat/back-fabric-comp",children:"this repo"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"unify-the-javascript-specs",children:"Unify the JavaScript specs"}),"\n",(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsx)(n.p,{children:"The last step makes sure that the JavaScript behaves transparently to chosen architecture."}),"\n",(0,a.jsxs)(n.p,{children:["For a Fabric Component, the source of truth is the ",(0,a.jsx)(n.code,{children:"<YourModule>NativeComponent.js"})," (or ",(0,a.jsx)(n.code,{children:".ts"}),") spec file. The app accesses the spec file like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import MyComponent from 'your-component/src/index';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"goal"})," is to conditionally ",(0,a.jsx)(n.code,{children:"export"})," from the ",(0,a.jsx)(n.code,{children:"index"})," file the proper object, given the architecture chosen by the user. We can achieve this with a code that looks like this:"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"fabric-component-backward-compatibility",defaultValue:s.Z.defaultFabricComponentSpecLanguage,values:s.Z.fabricComponentSpecLanguages,children:[(0,a.jsx)(r.Z,{value:"Flow",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// @flow\nimport {requireNativeComponent} from 'react-native';\n\nconst isFabricEnabled = global.nativeFabricUIManager != null;\n\nconst myComponent = isFabricEnabled\n  ? require('./MyComponentNativeComponent').default\n  : requireNativeComponent('MyComponent');\n\nexport default myComponent;\n"})})}),(0,a.jsx)(r.Z,{value:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import requireNativeComponent from 'react-native/Libraries/ReactNative/requireNativeComponent';\n\nconst isFabricEnabled = global.nativeFabricUIManager != null;\n\nconst myComponent = isFabricEnabled\n  ? require('./MyComponentNativeComponent').default\n  : requireNativeComponent('MyComponent');\n\nexport default myComponent;\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Whether you are using Flow or TypeScript for your specs, we understand which architecture is running by checking if the ",(0,a.jsx)(n.code,{children:"global.nativeFabricUIManager"})," object has been set or not."]}),"\n",(0,a.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,a.jsxs)(n.p,{children:["Please note that the New Architecture is still experimental. The ",(0,a.jsx)(n.code,{children:"global.nativeFabricUIManager"})," API might change in the future for a function that encapsulate this check."]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If that object is ",(0,a.jsx)(n.code,{children:"null"}),", the app has not enabled the Fabric feature. It's running on the Old Architecture, and the fallback is to use the default Native Components implementation (",(0,a.jsx)(n.a,{href:"../native-components-ios",children:"iOS"})," or ",(0,a.jsx)(n.a,{href:"../native-components-android",children:"Android"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["If that object is set, the app is running with Fabric enabled and it should use the ",(0,a.jsx)(n.code,{children:"<MyComponent>NativeComponent"})," spec to access the Fabric Component."]}),"\n"]})]})}const b=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(f,e)})):f(e)}},11674:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(63445);const o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultGuide:"native",defaultOs:o?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:o?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(27378),o=t(38944);const i={tabItem:"tabItem_wHwb"};var r=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(s)for(var t of s(n))l.call(n,t)&&d(e,t,n[t]);return e};function h({children:e,hidden:n,className:t}){return a.createElement("div",p({role:"tabpanel",className:(0,o.Z)(i.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>L});var a=t(27378),o=t(38944),i=t(12112),r=t(3620),s=t(69490),c=t(14953),l=t(27886),d=t(7106),p=Object.defineProperty,h=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,w=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&g(e,t,n[t]);if(m)for(var t of m(n))b.call(n,t)&&g(e,t,n[t]);return e},v=(e,n)=>h(e,u(n));function j(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function x(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return j(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y({value:e,tabValues:n}){return n.some((n=>n.value===e))}function C({queryString:e=!1,groupId:n}){const t=(0,r.k6)(),o=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace(v(w({},t.location),{search:n.toString()}))}),[o,t])]}function N(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=x(e),[r,c]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,p]=C({queryString:t,groupId:o}),[h,u]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,o]=(0,d.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:o}),m=(()=>{const e=null!=l?l:h;return y({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),u(e)}),[p,u,i]),tabValues:i}}var M=t(14185);const V={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var _=Object.defineProperty,E=Object.defineProperties,k=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,n,t)=>n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,I=(e,n)=>{for(var t in n||(n={}))A.call(n,t)&&S(e,t,n[t]);if(T)for(var t of T(n))O.call(n,t)&&S(e,t,n[t]);return e},F=(e,n)=>E(e,k(n));function R({className:e,block:n,selectedValue:t,selectValue:r,tabValues:s}){const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),o=s[a].value;o!==t&&(l(n),r(o))},p=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=null!=(t=c[n])?t:c[c.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},s.map((({value:e,label:n,attributes:i})=>a.createElement("li",F(I({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>c.push(e),onKeyDown:p,onClick:d},i),{className:(0,o.Z)("tabs__item",V.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function P({lazy:e,children:n,selectedValue:t}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function D(e){const n=N(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",V.tabList)},a.createElement(R,I(I({},e),n)),a.createElement(P,I(I({},e),n)))}function L(e){const n=(0,M.Z)();return a.createElement(D,I({key:String(n)},e),j(e.children))}},71426:(e,n,t)=>{var a=t(27378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,i={},l=null,d=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,a)&&!c.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:s.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>i});var a=t(27378);const o=a.createContext({});function i(e){const n=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||r:i(e),a.createElement(o.Provider,{value:s},n)}}}]);