/*! For license information please see fdd518cf.4d47037e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[68140],{80469:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var r=s(24246),i=s(71670);const d={id:"bundled-hermes",title:"\u6346\u7ed1 Hermes \u5f15\u64ce"},c=void 0,t={unversionedId:"bundled-hermes",id:"bundled-hermes",title:"\u6346\u7ed1 Hermes \u5f15\u64ce",description:"\u672c\u9875\u9762\u7efc\u8ff0\u4e86 Hermes \u4e0e React Native \u662f\u5982\u4f55\u88ab\u6784\u9020\u7684\u3002",source:"@site/architecture/bundled-hermes.md",sourceDirName:".",slug:"/bundled-hermes",permalink:"/architecture/bundled-hermes",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/architecture/bundled-hermes.md",tags:[],version:"current",frontMatter:{id:"bundled-hermes",title:"\u6346\u7ed1 Hermes \u5f15\u64ce"},sidebar:"architecture",previous:{title:"\u7ebf\u7a0b\u6a21\u578b",permalink:"/architecture/threading-model"},next:{title:"\u672f\u8bed\u8868",permalink:"/architecture/glossary"}},a={},l=[{value:"\u4ec0\u4e48\u662f\u201c\u6346\u7ed1 Hermes \u5f15\u64ce\u201d\uff08Bundled Hermes\uff09",id:"\u4ec0\u4e48\u662f\u6346\u7ed1-hermes-\u5f15\u64cebundled-hermes",level:2},{value:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u8fc1\u79fb\u5230 &#39;Bundled Hermes&#39;",id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u8fc1\u79fb\u5230-bundled-hermes",level:2},{value:"\u8fd9\u5c06\u4f1a\u5982\u4f55\u5f71\u54cd\u5e94\u7528\u5f00\u53d1\u8005",id:"\u8fd9\u5c06\u4f1a\u5982\u4f55\u5f71\u54cd\u5e94\u7528\u5f00\u53d1\u8005",level:2},{value:"iOS \u7528\u6237",id:"ios-\u7528\u6237",level:3},{value:"Android \u7528\u6237",id:"android-\u7528\u6237",level:3},{value:"\u65b0\u67b6\u6784\u4e0b\u7684 Android \u7528\u6237",id:"\u65b0\u67b6\u6784\u4e0b\u7684-android-\u7528\u6237",level:4},{value:"\u4f7f\u7528 windows \u6784\u5efa\u65b0\u67b6\u6784\u7684 Android \u7528\u6237",id:"\u4f7f\u7528-windows-\u6784\u5efa\u65b0\u67b6\u6784\u7684-android-\u7528\u6237",level:4},{value:"\u7528\u6237\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5f15\u64ce\u4e48?",id:"\u7528\u6237\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5f15\u64ce\u4e48",level:3},{value:"\u8fd9\u4e2a\u6539\u52a8\u5982\u4f55\u5f71\u54cd\u8d21\u732e\u8005\u548c\u7b2c\u4e09\u65b9\u5e93\u5f00\u53d1\u8005",id:"\u8fd9\u4e2a\u6539\u52a8\u5982\u4f55\u5f71\u54cd\u8d21\u732e\u8005\u548c\u7b2c\u4e09\u65b9\u5e93\u5f00\u53d1\u8005",level:2},{value:"Bundled Hermes \u5e95\u5c42\u662f\u5982\u4f55\u5de5\u4f5c\u7684?",id:"bundled-hermes-\u5e95\u5c42\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:3},{value:"Android \u5b9e\u73b0\u7ec6\u8282",id:"android-\u5b9e\u73b0\u7ec6\u8282",level:4},{value:"iOS \u5b9e\u73b0\u7ec6\u8282",id:"ios-\u5b9e\u73b0\u7ec6\u8282",level:4},{value:"\u6211\u62c5\u5fc3\u8fd9\u4e2a\u6539\u52a8\u4f1a\u5f71\u54cd\u6211",id:"\u6211\u62c5\u5fc3\u8fd9\u4e2a\u6539\u52a8\u4f1a\u5f71\u54cd\u6211",level:3}];function o(e){const n=Object.assign({p:"p",strong:"strong",a:"a",admonition:"admonition",h2:"h2",em:"em",h3:"h3",code:"code",pre:"pre",h4:"h4",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u672c\u9875\u9762\u7efc\u8ff0\u4e86 Hermes \u4e0e React Native \u662f",(0,r.jsx)(n.strong,{children:"\u5982\u4f55\u88ab\u6784\u9020"}),"\u7684\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8981\u627e\u7684\u662f\u5982\u4f55\u5728\u4f60\u7684\u5e94\u7528\u4e2d\u4f7f\u7528 Hermes\uff0c\u53ef\u4ee5\u9605\u8bfb",(0,r.jsx)(n.a,{href:"/docs/hermes",children:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce"}),"\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4f1a\u6df1\u5165\u8fd9\u4e00\u6280\u672f\u7ec6\u8282\uff0c\u56e0\u6b64\u76ee\u6807\u8bfb\u8005\u4e3a\u57fa\u4e8e Hermes \u6216 React Native \u6784\u5efa\u7b2c\u4e09\u65b9\u5e93\u7684\u7528\u6237\u3002React Native \u7684\u4e00\u822c\u7528\u6237\u5e76\u4e0d\u9700\u8981\u4e86\u89e3 React Native \u4e0e Hermes \u5982\u4f55\u4ea4\u4e92\u7684\u6df1\u5165\u7ec6\u8282\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u6346\u7ed1-hermes-\u5f15\u64cebundled-hermes",children:"\u4ec0\u4e48\u662f\u201c\u6346\u7ed1 Hermes \u5f15\u64ce\u201d\uff08Bundled Hermes\uff09"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 React Native 0.69.0 \u7248\u672c\u540e\uff0cReact Native \u7684\u6bcf\u4e2a\u7248\u672c\u90fd\u4f1a",(0,r.jsx)(n.strong,{children:"\u5185\u7f6e"}),"\u4e00\u4e2a\u6346\u7ed1\u7684 Hermes \u7248\u672c\u3002\u6211\u4eec\u628a\u8fd9\u79cd\u53d1\u5e03\u6a21\u578b\u79f0\u4f5c ",(0,r.jsx)(n.strong,{children:"Bundled Hermes"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\u5728 0.69 \u7248\u672c\u4e4b\u540e\uff0c\u5bf9\u6bcf\u4e2a\u53ef\u4ee5\u516c\u5f00\u4f7f\u7528\u7684 React Native \u7248\u672c\uff0c\u4f60\u90fd\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e2a\u8ddf\u968f\u8be5\u7248\u672c\u8fdb\u884c\u6784\u5efa\u4e0e\u6d4b\u8bd5\u7684 JS \u5f15\u64ce\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u8fc1\u79fb\u5230-bundled-hermes",children:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u8fc1\u79fb\u5230 'Bundled Hermes'"}),"\n",(0,r.jsxs)(n.p,{children:["\u5386\u53f2\u7248\u672c\u4e2d\uff0cReact Native \u548c Hermes \u4f7f\u7528\u7684\u662f\u4e24\u5957",(0,r.jsx)(n.strong,{children:"\u4e0d\u540c\u7684\u53d1\u5e03\u6d41\u7a0b"}),"\uff0c\u5404\u81ea\u6709\u4e0d\u540c\u7684\u7248\u672c\u3002\u8fd9\u4e00\u505a\u6cd5\u5bf9\u5f00\u6e90\u793e\u533a\u5e26\u6765\u4e86\u56f0\u6270\uff0c\u4f60\u5f88\u96be\u77e5\u6653\u67d0\u4e2a\u7279\u5b9a\u7684 Hermes \u7248\u672c\u662f\u5426\u4e0e React Native \u7248\u672c\u517c\u5bb9(\u4f8b\u5982 Hermes 0.11.0 \u53ea\u80fd\u548c React Native 0.68.0 \u7248\u672c\u517c\u5bb9)\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Hermes \u548c React Natives \u5171\u4eab\u4e86\u4e00\u4efd JSI \u4ee3\u7801(",(0,r.jsx)(n.a,{href:"https://github.com/facebook/hermes/tree/main/API/jsi/jsi",children:"Hermes \u4e2d"}),"\uff0c",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/tree/main/ReactCommon/jsi/jsi",children:"React Native \u4e2d"}),")\u3002\u5982\u679c\u4e24\u4e2a JSI \u62f7\u8d1d\u6ca1\u6709\u540c\u6b65\uff0cHermes \u7684\u6784\u5efa\u5c06\u4e0d\u80fd\u4e0e React Native \u7684\u6784\u5efa\u517c\u5bb9\u3002\u66f4\u591a\u8be6\u60c5\u53ef\u4ee5\u4e86\u89e3",(0,r.jsx)(n.a,{href:"https://github.com/react-native-community/discussions-and-proposals/issues/257",children:"ABI \u517c\u5bb9\u6027\u95ee\u9898\u7684\u8ba8\u8bba"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u6211\u4eec\u6539\u8fdb\u4e86 React Native \u7684\u53d1\u5e03\u6d41\u7a0b\uff0c\u4ee5\u4fdd\u8bc1\u4e0b\u8f7d\u548c\u6784\u5efa Hermes \u65f6\u548c\u5f53\u524d\u7684 React Native \u4f7f\u7528\u4e86\u76f8\u540c\u7684 JSI \u62f7\u8d1d\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u57fa\u4e8e\u6b64\u6d41\u7a0b\uff0c\u6211\u4eec\u4f1a\u5728\u53d1\u5e03 React Native \u7248\u672c\u65f6\uff0c\u540c\u65f6\u53d1\u5e03\u4e00\u4e2a\u4e0e\u5b83\u7ed1\u5b9a\u7684",(0,r.jsx)(n.strong,{children:"\u5b8c\u5168\u517c\u5bb9"}),"\u7684 Hermes \u7248\u672c\u3002\u57fa\u4e8e\u6211\u4eec\u5f00\u53d1\u7684 React Native \u7248\u672c\u6765\u8fc1\u79fb\u5347\u7ea7 Hermes \u7248\u672c\uff0c\u56e0\u6b64\u53eb\u505a\u201c\u6346\u7ed1 Hermes \u5f15\u64ce\u201d ",(0,r.jsx)(n.em,{children:"Bundled Hermes"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd9\u5c06\u4f1a\u5982\u4f55\u5f71\u54cd\u5e94\u7528\u5f00\u53d1\u8005",children:"\u8fd9\u5c06\u4f1a\u5982\u4f55\u5f71\u54cd\u5e94\u7528\u5f00\u53d1\u8005"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u540c\u4e4b\u524d\u6240\u4ecb\u7ecd\u7684\uff0c\u5982\u679c\u4f60\u662f\u4e00\u4e2a\u5e94\u7528\u5f00\u53d1\u8005\uff0c\u8fd9\u4e2a\u6539\u52a8",(0,r.jsx)(n.strong,{children:"\u5c06\u4e0d\u4f1a\u76f4\u63a5\u5f71\u54cd"}),"\u4f60\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u4fdd\u8bc1\u900f\u660e\u6027\uff0c\u63a5\u4e0b\u6765\u7684\u6587\u4ef6\u5c06\u89e3\u91ca\u6211\u4eec\u5728\u5e95\u5c42\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\uff0c\u5e76\u89e3\u91ca\u4e00\u4e9b\u8fd9\u6837\u505a\u7684\u7406\u7531\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"ios-\u7528\u6237",children:"iOS \u7528\u6237"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 iOS \u4e2d\uff0c\u6211\u4eec\u79fb\u52a8\u4e86\u4e4b\u524d\u4f7f\u7528\u7684 ",(0,r.jsx)(n.code,{children:"hermes-engine"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 React Native 0.69 \u4ee5\u524d\uff0c\u7528\u6237\u9700\u8981\u4e0b\u8f7d\u4e00\u4e2a pod(\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230",(0,r.jsx)(n.a,{href:"https://github.com/CocoaPods/Specs/blob/master/Specs/5/d/0/hermes-engine/0.11.0/hermes-engine.podspec.json",children:"podspec"}),")\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 React Native 0.69 \u4e2d\uff0c\u7528\u6237\u4e0d\u518d\u9700\u8981\u989d\u5916\u4f7f\u7528 podspec\uff0c\u5b83\u88ab\u5b9a\u4e49\u5728 ",(0,r.jsx)(n.code,{children:"react-native"})," NPM \u5305\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"sdks/hermes-engine/hermes-engine.podspec"})," \u6587\u4ef6\u66ff\u6362\u4e86\u3002\n\u8fd9\u4e2a podspec \u4f9d\u8d56\u4e8e\u4e00\u4e2a\u9884\u7f16\u8bd1\u7684 Hermes \u538b\u7f29\u5305(tarball)\uff0c\u8be5\u538b\u7f29\u5305\u662f\u4f5c\u4e3a React Native \u53d1\u5e03\u6d41\u7a0b\u7684\u4e00\u90e8\u5206\u88ab\u4e0a\u4f20\u5230 GitHub Releases\u3002(\u5982\uff0c",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/releases/tag/v0.69.0-rc.6",children:"0.69.0-rc.6 \u7248\u672c\u53d1\u5e03\u4e2d\u7684\u8d44\u6e90\u6587\u4ef6"}),")"]}),"\n",(0,r.jsx)(n.h3,{id:"android-\u7528\u6237",children:"Android \u7528\u6237"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 Android \u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5\u5982\u4e0b\u65b9\u5f0f\u66f4\u65b0 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/main/template/android/app/build.gradle",children:(0,r.jsx)(n.code,{children:"android/app/build.gradle"})})," \u6587\u4ef6\u7684\u9ed8\u8ba4\u6a21\u677f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'dependencies {\n    // ...\n\n    if (enableHermes) {\n+       implementation("com.facebook.react:hermes-engine:+") {\n+           exclude group:\'com.facebook.fbjni\'\n+       }\n-       def hermesPath = "../../node_modules/hermes-engine/android/";\n-       debugImplementation files(hermesPath + "hermes-debug.aar")\n-       releaseImplementation files(hermesPath + "hermes-release.aar")\n    } else {\n        implementation jscFlavor\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["React Native 0.69 \u4e4b\u524d\uff0c\u7528\u6237\u5c06\u4f1a\u4f7f\u7528\u6765\u81ea ",(0,r.jsx)(n.code,{children:"hermes-engine"})," NPM package \u7684 ",(0,r.jsx)(n.code,{children:"hermes-debug.aar"})," \u548c ",(0,r.jsx)(n.code,{children:"hermes-release.aar"}),"\u3002\n\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5c06\u4f1a\u5728 React Native \u672a\u6765\u7684\u67d0\u4e00\u4e2a\u7248\u672c\uff0c\u5b8c\u5168",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/c418bf4c8fe8bf97273e3a64211eaa38d836e0a0/package.json#L105",children:"\u53bb\u9664"}),"\u5bf9 ",(0,r.jsx)(n.code,{children:"hermes-engine"}),"\u7684\u4f9d\u8d56\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u65b0\u67b6\u6784\u4e0b\u7684-android-\u7528\u6237",children:"\u65b0\u67b6\u6784\u4e0b\u7684 Android \u7528\u6237"}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u6211\u4eec\u539f\u59cb\u4ee3\u7801\u521d\u59cb\u5316\u6784\u5efa\u7684\u539f\u7406(\u5982\uff0c\u6211\u4eec\u600e\u6837\u4f7f\u7528 NDK)\uff0c\u4f7f\u7528\u65b0\u67b6\u6784\u7684\u7528\u6237\u5c06\u4f1a",(0,r.jsx)(n.strong,{children:"\u4ece\u6e90\u7801\u6784\u5efa Hermes"})]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e3a\u65b0\u67b6\u6784\u4e0a\u7684\u7528\u6237\u8c03\u6574\u4e86 React Native \u548c Hermes \u7684\u6784\u5efa\u673a\u5236(\u4ed6\u4eec\u5c06\u4ece\u6e90\u4ee3\u7801\u6784\u5efa\u8fd9\u4e24\u4e2a\u6846\u67b6)\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u610f\u5473\u7740\u6b64\u7c7b Android \u7528\u6237\u5728\u9996\u6b21\u6784\u5efa\u65f6\u53ef\u80fd\u4f1a\u5728\u6784\u5efa\u65f6\u9047\u5230\u6027\u80fd\u4e0b\u964d\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728",(0,r.jsx)(n.a,{href:"/docs/next/build-speed",children:"\u52a0\u901f\u4f60\u7684\u6784\u5efa\u9636\u6bb5"}),"\u4e2d\u627e\u5230\u4f18\u5316\u6784\u5efa\u65f6\u95f4\u548c\u51cf\u5c11\u5bf9\u4f60\u6784\u5efa\u5f71\u54cd\u7684\u5e2e\u52a9\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4f7f\u7528-windows-\u6784\u5efa\u65b0\u67b6\u6784\u7684-android-\u7528\u6237",children:"\u4f7f\u7528 windows \u6784\u5efa\u65b0\u67b6\u6784\u7684 Android \u7528\u6237"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Windows \u673a\u5668\u4e0a\u6784\u5efa\u65b0\u67b6\u6784\u4e0b\u7684 React Native \u5e94\u7528\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u989d\u5916\u6b65\u9aa4\u6765\u4f7f\u5f97\u6784\u5efa\u53ef\u4ee5\u6b63\u786e\u5de5\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u786e\u4fdd",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/environment-setup",children:"\u6b63\u786e\u7684\u914d\u7f6e\u73af\u5883"}),"\uff0c\u5305\u62ec Android SDK \u548c node\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5b89\u88c5\u5e26\u6709 Chocolatey \u7684",(0,r.jsx)(n.a,{href:"https://community.chocolatey.org/packages/cmake",children:"cmake"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5b89\u88c5\u4e0b\u9762\u4e2d\u7684\u4e00\u4e2a\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",children:"Build Tools for Visual Studio 2022"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://visualstudio.microsoft.com/vs/community/",children:"Visual Studio 22 Community Edition"})," - \u53ea\u9009\u62e9 C++ desktop development (C++ \u684c\u9762\u5f00\u53d1) \u5c31\u8db3\u591f\u4e86\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u786e\u4fdd ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell?view=vs-2022",children:"Visual Studio Command Prompt"})," \u6b63\u786e\u914d\u7f6e\u3002\u5728\u8fd9\u4e9b\u547d\u4ee4\u884c\u73af\u5883\u4e2d\u914d\u7f6e\u4e86\u6b63\u786e\u7684 C++ \u7f16\u8bd1\u5668\u73af\u5883\u53d8\u91cf\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5728 Visual Studio Command Prompt \u4e2d\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"npx react-native run-android"})," \u8fd0\u884c\u5e94\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7528\u6237\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5f15\u64ce\u4e48",children:"\u7528\u6237\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5f15\u64ce\u4e48?"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u7531\u7684\u4f7f\u7528/\u7981\u7528 Hermes (\u5728 Android \u4e2d ",(0,r.jsx)(n.code,{children:"enableHermes"})," \u53d8\u91cf\u63a7\u5236\uff0c\u5728 iOS \u4e2d\u662f ",(0,r.jsx)(n.code,{children:"hermes_enabled"}),")\u3002\n'Bundled Hermes' \u6539\u52a8\u5bf9\u4f60\u6765\u8bf4\u53ea\u5f71\u54cd\u4e86 ",(0,r.jsx)(n.strong,{children:"Hermes \u5982\u4f55\u88ab\u6784\u5efa\u548c\u6253\u5305"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u5728\u5199\u4f5c\u8fd9\u7bc7\u6587\u7ae0\u65f6\uff0c",(0,r.jsx)(n.code,{children:"enableHermes"}),"/",(0,r.jsx)(n.code,{children:"hermes_enabled"})," \u7684\u9ed8\u8ba4\u503c\u4e3a",(0,r.jsx)(n.code,{children:"false"}),"\u3002 \u6211\u4eec\u4f1a\u5728\u4e0d\u4e45\u7684\u5c06\u6765\u5bfb\u627e\u4e00\u4e2a\u5347\u7ea7\u6a21\u677f\u7684\u673a\u4f1a\uff0c \u6765\u5c06\u9ed8\u8ba4\u503c\u5347\u7ea7\u4e3a",(0,r.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd9\u4e2a\u6539\u52a8\u5982\u4f55\u5f71\u54cd\u8d21\u732e\u8005\u548c\u7b2c\u4e09\u65b9\u5e93\u5f00\u53d1\u8005",children:"\u8fd9\u4e2a\u6539\u52a8\u5982\u4f55\u5f71\u54cd\u8d21\u732e\u8005\u548c\u7b2c\u4e09\u65b9\u5e93\u5f00\u53d1\u8005"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u662f React Native \u7684\u8d21\u732e\u8005\uff0c\u6216\u8005\u60a8\u6b63\u5728 React Native \u6216 Hermes \u4e4b\u4e0a\u6784\u5efa\u7b2c\u4e09\u65b9\u5e93\uff0c\u8bf7\u8fdb\u4e00\u6b65\u9605\u8bfb\u6211\u4eec\u89e3\u91ca Bundled Hermes \u7684\u5de5\u4f5c\u539f\u7406\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"bundled-hermes-\u5e95\u5c42\u662f\u5982\u4f55\u5de5\u4f5c\u7684",children:"Bundled Hermes \u5e95\u5c42\u662f\u5982\u4f55\u5de5\u4f5c\u7684?"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u79cd\u673a\u5236\u4f9d\u8d56\u4e8e\u5728 facebook/react-native \u4ee3\u7801\u5e93\u4e2d\uff0c\u5230 facebook/hermes \u5b58\u50a8\u5e93\u4e2d",(0,r.jsx)(n.strong,{children:"\u4e0b\u8f7d\u6e90\u7801\u538b\u7f29\u5305"}),"\u7684\u673a\u5236\u3002\u6211\u4eec\u4e3a\u5176\u4ed6\u539f\u751f\u4f9d\u8d56\u9879\uff08Folly\u3001Glog \u7b49\uff09\u5236\u5b9a\u4e86\u7c7b\u4f3c\u7684\u673a\u5236\uff0c\u5e76\u4e14\u6211\u4eec\u8ba9 Hermes \u9075\u5faa\u76f8\u540c\u7684\u8bbe\u7f6e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4ece ",(0,r.jsx)(n.code,{children:"main"})," \u6784\u5efa React Native \u65f6\uff0c\u6211\u4eec\u5c06\u83b7\u53d6 facebook/hermes \u7684 ",(0,r.jsx)(n.code,{children:"main"})," \u5206\u652f\u538b\u7f29\u5305\uff0c\u5e76\u5c06\u5176\u6784\u5efa\u4e3a React Native \u6784\u5efa\u8fc7\u7a0b\u7684\u4e00\u90e8\u5206\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4ece\u53d1\u5e03\u5206\u652f\uff08\u6bd4\u5982 ",(0,r.jsx)(n.code,{children:"0.69-stable"}),"\uff09\u6784\u5efa React Native \u65f6\uff0c\u6211\u4eec\u5c06\u5728 Hermes \u4ed3\u5e93\u4e0a\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"\u6807\u7b7e"}),"\u6765\u5728\u4e24\u4e2a\u4ed3\u5e93\u4e4b\u95f4",(0,r.jsx)(n.strong,{children:"\u540c\u6b65\u4ee3\u7801"}),"\u3002\u7136\u540e\uff0c\u4f7f\u7528\u7684\u7279\u5b9a\u6807\u7b7e\u540d\u79f0\u5c06\u5b58\u50a8\u5728 React Native \u7684\u53d1\u5e03\u5206\u652f\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"sdks/.hermesversion"})," \u6587\u4ef6\u4e2d\uff08\u4f8b\u5982\u5728 0.69 \u53d1\u5e03\u5206\u652f\u4e0a",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/0.69-stable/sdks/.hermesversion",children:"\u6587\u4ef6"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ece\u67d0\u79cd\u610f\u4e49\u4e0a\u8bf4\uff0c\u60a8\u53ef\u4ee5\u5c06\u6b64\u65b9\u6cd5\u89c6\u4e3a\u7c7b\u4f3c\u4e8e ",(0,r.jsx)(n.strong,{children:"git submodule"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5728 Hermes \u4e4b\u4e0a\u6784\u5efa\uff0c\u4f60\u53ef\u4ee5\u4f9d\u9760\u8fd9\u4e9b\u6807\u7b7e\u6765\u4e86\u89e3\u5728\u6784\u5efa React Native \u65f6\u4f7f\u7528\u4e86\u54ea\u4e2a\u7248\u672c\u7684 Hermes\uff0c\u56e0\u4e3a\u6807\u7b7e\u540d\u79f0\u4e2d\u6307\u5b9a\u4e86 React Native \u7684\u7248\u672c\uff08\u5982 ",(0,r.jsx)(n.code,{children:"hermes-2022-05- 20-RNv0.69.0-ee8941b8874132b8f83e4486b63ed5c19fc3f111"}),"\uff09\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"android-\u5b9e\u73b0\u7ec6\u8282",children:"Android \u5b9e\u73b0\u7ec6\u8282"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u5728 Android \u4e0a\u5b9e\u73b0\uff0c\u6211\u4eec\u5728 React Native \u7684 ",(0,r.jsx)(n.code,{children:"/ReactAndroid/hermes-engine"})," \u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u6784\u5efa\uff0c\u5b83\u5c06\u8d1f\u8d23\u6784\u5efa Hermes \u548c\u6253\u5305\u4ee5\u4f9b\u4f7f\u7528\uff08",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/pull/33396",children:"\u66f4\u591a\u4e0a\u4e0b\u6587\u8bf7\u53c2\u89c1\u6b64\u5904"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u73b0\u5728\u53ef\u4ee5\u5728 React Native ",(0,r.jsx)(n.code,{children:"main"})," \u5206\u652f\u4e0b\uff0c\u901a\u8fc7\u8c03\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u89e6\u53d1 Hermes \u5f15\u64ce\u7684\u6784\u5efa\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"// Build a debug version of Hermes\n./gradlew :ReactAndroid:hermes-engine:assembleDebug\n// Build a release version of Hermes\n./gradlew :ReactAndroid:hermes-engine:assembleRelease\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u4e0d\u9700\u8981\u5728\u60a8\u7684\u673a\u5668\u4e0a\u5b89\u88c5\u989d\u5916\u7684\u5de5\u5177\uff08\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"cmake"}),"\u3001",(0,r.jsx)(n.code,{children:"ninja"})," \u6216 ",(0,r.jsx)(n.code,{children:"python3"}),"\uff09\uff0c\u56e0\u4e3a\u6211\u4eec\u5c06\u6784\u5efa\u914d\u7f6e\u4e3a\u4f7f\u7528\u8fd9\u4e9b\u5de5\u5177\u7684 NDK \u7248\u672c\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 Gradle \u4f7f\u7528\u8005\u65b9\u9762\uff0c\u6211\u4eec\u4e5f\u8fdb\u884c\u4e86\u4e00\u4e9b\u5c0f\u6539\u8fdb\uff1a\u6211\u4eec\u4ece",(0,r.jsx)(n.code,{children:"releaseImplementation"}),"\u548c",(0,r.jsx)(n.code,{children:"debugImplementation"}),"\u8f6c\u79fb\u5230",(0,r.jsx)(n.code,{children:"implementation"}),"\u3002 \u8fd9\u662f\u53ef\u6027\u7684\uff0c\u56e0\u4e3a\u8f83\u65b0\u7684 ",(0,r.jsx)(n.code,{children:"hermes-engine"})," Android \u5de5\u4ef6\u662f ",(0,r.jsx)(n.strong,{children:"variant aware"})," \u7684\uff0c\u5e76\u4e14\u5c06\u6b63\u786e\u5339\u914d\u5f15\u64ce\u7684\u8c03\u8bd5\u7248\u672c\u4e0e\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u8c03\u8bd5\u7248\u672c\u3002\u60a8\u5728\u8fd9\u91cc\u4e0d\u9700\u8981\u4efb\u4f55\u81ea\u5b9a\u4e49\u914d\u7f6e\uff08\u5373\u4f7f\u60a8\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"staging"})," \u6216\u5176\u4ed6\u6784\u5efa\u7c7b\u578b/\u98ce\u683c\uff09\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u8fd9\u9700\u8981\u5728\u6a21\u677f\u4e2d\u6dfb\u52a0\u8fd9\u4e00\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"exclude group:'com.facebook.fbjni'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u8fd9\u4e00\u884c\u662f\u56e0\u4e3a React Native \u4ee5\u975e\u9884\u5236\u65b9\u6cd5\uff08\u5373\u89e3\u538b\u7f29 .aar \u548c\u63d0\u53d6 .so \u6587\u4ef6\uff09\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"fbjni"}),"\u3002 Hermes-engine \u548c\u5176\u4ed6\u5e93\u6b63\u5728\u4f7f\u7528 prefab \u4ee3\u66ff\u4f7f\u7528 fbjni\u3002 \u6211\u4eec\u6b63\u5728\u7814\u7a76\u5c06\u6765 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/pull/33397",children:"\u89e3\u51b3\u6b64\u95ee\u9898"}),"\uff0c\u4ece\u800c\u53ea\u9700\u8981\u4e00\u884c\u4ee3\u7801\u5c31\u53ef\u4ee5\u5bfc\u5165 Hermes\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"ios-\u5b9e\u73b0\u7ec6\u8282",children:"iOS \u5b9e\u73b0\u7ec6\u8282"}),"\n",(0,r.jsx)(n.p,{children:"iOS \u5b9e\u73b0\u4f9d\u8d56\u4e8e\u4f4d\u4e8e\u4ee5\u4e0b\u4f4d\u7f6e\u7684\u4e00\u7cfb\u5217\u811a\u672c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/tree/main/scripts/hermes",children:(0,r.jsx)(n.code,{children:"/scripts/hermes"})}),"\u3002 \u8fd9\u4e9b\u811a\u672c\u5305\u542b\u4e0b\u8f7d hermes \u538b\u7f29\u5305\u3001\u89e3\u538b\u7f29\u548c\u914d\u7f6e iOS \u6784\u5efa\u7684\u903b\u8f91\u3002\u5982\u679c\u60a8\u5c06 ",(0,r.jsx)(n.code,{children:"hermes_enabled"})," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"true"}),"\uff0c\u5b83\u4eec\u5c06\u5728 ",(0,r.jsx)(n.code,{children:"pod install"})," \u65f6\u88ab\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/react-native/tree/main/sdks/hermes-engine",children:(0,r.jsx)(n.code,{children:"/sdks/hermes-engine"})}),"\u3002 \u8fd9\u4e9b\u811a\u672c\u5305\u542b\u6709\u6548\u6784\u5efa Hermes \u7684\u6784\u5efa\u903b\u8f91\u3002\u5b83\u4eec\u662f\u4ece ",(0,r.jsx)(n.code,{children:"facebook/hermes"})," \u5b58\u50a8\u5e93\u590d\u5236\u7684\uff0c\u5e76\u52a0\u4ee5\u6539\u9020\u4ee5\u4fbf\u5728 React Native \u4e2d\u6b63\u5e38\u5de5\u4f5c\u3002\u5177\u4f53\u6765\u8bf4\uff0c",(0,r.jsx)(n.code,{children:"utils"})," \u6587\u4ef6\u5939\u4e2d\u7684\u811a\u672c\u8d1f\u8d23\u4e3a\u6240\u6709 Mac \u5e73\u53f0\u6784\u5efa Hermes\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u4e3a iOS \u5206\u53d1\u9884\u6784\u5efa\uff0c\u6211\u4eec\u4f9d\u8d56 CircleCI \u4e0a\u7684 ",(0,r.jsx)(n.code,{children:"build_hermes_macos"})," \u4efb\u52a1\u3002\u8be5\u4f5c\u4e1a\u5c06\u751f\u6210\u4e00\u4e2a\u538b\u7f29\u5305\u4ea7\u7269\uff0c\u8be5\u538b\u7f29\u5305\u5c06\u7531 ",(0,r.jsx)(n.code,{children:"hermes-engine"})," podspec \u4e0b\u8f7d\uff08\u5373 ",(0,r.jsx)(n.a,{href:"https://app.circleci.com/pipelines/github/facebook/react-native/13679/workflows/5172f8e4-6b02-4ccb-ab97-7cb954911fae/jobs/258701/artifacts",children:"React Native 0.69 \u6267\u884c\u6240\u9700\u7684\u8d44\u6e90"}),"\uff09\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6211\u62c5\u5fc3\u8fd9\u4e2a\u6539\u52a8\u4f1a\u5f71\u54cd\u6211",children:"\u6211\u62c5\u5fc3\u8fd9\u4e2a\u6539\u52a8\u4f1a\u5f71\u54cd\u6211"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u60f3\u5f3a\u8c03\u7684\u662f\uff0c\u8fd9\u672c\u8d28\u4e0a\u662f\u5bf9 Hermes \u5728 ",(0,r.jsx)(n.em,{children:"\u54ea\u91cc"})," \u8fdb\u884c\u6784\u5efa\u4ee5\u53ca\u4ee3\u7801\u662f ",(0,r.jsx)(n.em,{children:"\u5982\u4f55"})," \u5728\u4e24\u4e2a\u5b58\u50a8\u5e93\u4e4b\u95f4\u8fdb\u884c\u540c\u6b65\u7684\u7ec4\u7ec7\u66f4\u6539\u3002 \u66f4\u6539\u5e94\u8be5\u5bf9\u6211\u4eec\u7684\u7528\u6237\u5b8c\u5168\u900f\u660e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ece\u5386\u53f2\u4e0a\u770b\uff0c\u6211\u4eec\u66fe\u7ecf\u4e3a\u7279\u5b9a\u7248\u672c\u7684 React Native \u505a\u8fc7 Hermes \u7684\u53d1\u5e03\uff08\u4f8b\u5982 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/hermes/releases/tag/v0.11.0",children:(0,r.jsx)(n.code,{children:"v0.11.0 for RN0.68.x"})}),")\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 'Bundled Hermes'\uff0c\u60a8\u53ef\u4ee5\u6539\u4e3a\u4f9d\u8d56\u4e00\u4e2a\u4ee3\u8868\u4f60\u6240\u4f7f\u7528\u7684\u7279\u5b9a\u7248\u672c\u7684 React Native \u7684\u6807\u7b7e\u3002"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},71426:(e,n,s)=>{var r=s(27378),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var r,d={},l=null,o=null;for(r in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(o=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:o,props:d,_owner:t.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>d});var r=s(27378);const i=r.createContext({});function d(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||c:d(e),r.createElement(i.Provider,{value:t},n)}}}]);