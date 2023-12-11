/*! For license information please see accf606c.879635ac.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[63115],{67877:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(24246),i=t(71670);function a(e){const n=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:[(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,r.jsx)(n.strong,{children:"\u5b9e\u9a8c\u6027"}),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,r.jsx)(n.a,{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8",children:"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"}),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"]}),(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,r.jsx)(n.strong,{children:"\u624b\u52a8\u6b65\u9aa4"}),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},20008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(24246),i=t(71670),a=t(67877);const o={id:"new-architecture-app-renderer-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 Fabric"},s=void 0,c={id:"new-architecture-app-renderer-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 Fabric",description:"This section will go over how to enable the new renderer in your app. Make sure your application meets all the prerequisites.",source:"@site/versioned_docs/version-0.72/new-architecture-app-renderer-ios.md",sourceDirName:".",slug:"/new-architecture-app-renderer-ios",permalink:"/docs/0.72/new-architecture-app-renderer-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-renderer-ios.md",tags:[],version:"0.72",frontMatter:{id:"new-architecture-app-renderer-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 Fabric"},sidebar:"docs",previous:{title:"\u5728 Android \u4e0a\u542f\u7528 Fabric",permalink:"/docs/0.72/new-architecture-app-renderer-android"},next:{title:"React 18 \u4e0e React Native",permalink:"/docs/0.72/react-18-and-react-native"}},d={},l=[{value:"1. Enable Fabric in Podfile",id:"1-enable-fabric-in-podfile",level:2},{value:"2. Update your root view",id:"2-update-your-root-view",level:2},{value:"3. Run pod install",id:"3-run-pod-install",level:2}];function p(e){const n=Object.assign({p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.ZP,{}),"\n",(0,r.jsxs)(n.p,{children:["This section will go over how to enable the new renderer in your app. Make sure your application meets all the ",(0,r.jsx)(n.a,{href:"new-architecture-app-intro",children:"prerequisites"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"1-enable-fabric-in-podfile",children:"1. Enable Fabric in Podfile"}),"\n",(0,r.jsxs)(n.p,{children:["Add changes to your Podfile. You can see some examples in ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/main/packages/rn-tester/Podfile",children:"RNTester"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/fbt/blob/rn-demo-app/ios/Podfile",children:"rn-demo-app"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",metastring:'title="Podfile"',children:"# Add the following line at the top of Podfile.\n# Codegen produces files/classes that share names, and it will show the warning.\n# deterministic_uuids option surpresses the warning.\ninstall! 'cocoapods', :deterministic_uuids => false\ntarget 'Some App' do\n  pods()\nend\ndef pods()\n  # Get config\n  config = use_native_modules!\n  # Use env variables to turn it on/off.\n  fabric_enabled = ENV['USE_FABRIC']\n  use_react_native!(\n    ...\n    # Modify here if your app root path isn't the same as this one.\n    :app_path => \"#{Dir.pwd}/..\",\n    # Pass the flag to enable fabric to use_react_native!.\n    :fabric_enabled => fabric_enabled\n  )\nend\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-update-your-root-view",children:"2. Update your root view"}),"\n",(0,r.jsxs)(n.p,{children:["How to render your app with Fabric depends on your setup. Here is an example of how you can enable Fabric in your app with the ",(0,r.jsx)(n.code,{children:"RN_FABRIC_ENABLED"})," compiler flag to enable/disable. Refer ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/main/packages/rn-tester/RNTester/AppDelegate.mm",children:"RN-Tester\u2019s AppDelegate"})," as an example."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-objc",metastring:'title="AppDelegate.mm"',children:'#ifdef RN_FABRIC_ENABLED\n#import <React/RCTFabricSurfaceHostingProxyRootView.h>\n#import <React/RCTSurfacePresenter.h>\n#import <React/RCTSurfacePresenterBridgeAdapter.h>\n#import <react/config/ReactNativeConfig.h>\n#endif\n\n@interface AppDelegate () <RCTCxxBridgeDelegate,\n                           RCTTurboModuleManagerDelegate> {\n#ifdef RN_FABRIC_ENABLED\n  RCTSurfacePresenterBridgeAdapter *_bridgeAdapter;\n  std::shared_ptr<const facebook::react::ReactNativeConfig> _reactNativeConfig;\n  facebook::react::ContextContainer::Shared _contextContainer;\n#endif\n\n  // Find a line that define rootView and replace/edit with the following lines.\n\n#ifdef RN_FABRIC_ENABLED\n  _contextContainer = std::make_shared<facebook::react::ContextContainer const>();\n  _reactNativeConfig = std::make_shared<facebook::react::EmptyReactNativeConfig const>();\n\n  _contextContainer->insert("ReactNativeConfig", _reactNativeConfig);\n\n  _bridgeAdapter = [[RCTSurfacePresenterBridgeAdapter alloc]\n        initWithBridge:bridge\n      contextContainer:_contextContainer];\n\n  bridge.surfacePresenter = _bridgeAdapter.surfacePresenter;\n\n  UIView *rootView =\n      [[RCTFabricSurfaceHostingProxyRootView alloc] initWithBridge:bridge\n                                                        moduleName:<#moduleName#>\n                                                 initialProperties:@{}];\n#else\n  // Current implementation to define rootview.\n  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                   moduleName:<#moduleName#>\n                                            initialProperties:@{}];\n#endif\n'})}),"\n",(0,r.jsx)(n.h2,{id:"3-run-pod-install",children:"3. Run pod install"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"// Run pod install with the flags\nUSE_FABRIC=1 RCT_NEW_ARCH_ENABLED=1 pod install\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},71426:(e,n,t)=>{var r=t(27378),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,a={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:l,props:a,_owner:s.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>a});var r=t(27378);const i=r.createContext({});function a(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||o:a(e),r.createElement(i.Provider,{value:s},n)}}}]);