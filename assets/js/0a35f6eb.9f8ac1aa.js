/*! For license information please see 0a35f6eb.9f8ac1aa.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[486],{51132:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var i=n(24246),s=n(71670);const r={id:"build-speed",title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6"},d=void 0,l={id:"build-speed",title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6",description:"\u6784\u5efaReact Native\u5e94\u7528\u53ef\u80fd\u4f1a\u975e\u5e38\u6602\u8d35\uff0c\u5e76\u4e14\u9700\u8981\u5f00\u53d1\u4eba\u5458\u82b1\u8d39\u6570\u5206\u949f\u7684\u65f6\u95f4\u3002",source:"@site/versioned_docs/version-0.72/build-speed.md",sourceDirName:".",slug:"/build-speed",permalink:"/docs/0.72/build-speed",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/build-speed.md",tags:[],version:"0.72",frontMatter:{id:"build-speed",title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6"},sidebar:"docs",previous:{title:"\u6027\u80fd\u7efc\u8ff0",permalink:"/docs/0.72/performance"},next:{title:"\u4f18\u5316 CI \u6784\u5efa",permalink:"/docs/0.72/speeding-ci-builds"}},a={},t=[{value:"\u4ec5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6784\u5efa\u4e00\u4e2aABI\uff08\u4ec5\u9002\u7528\u4e8eAndroid\uff09",id:"\u4ec5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6784\u5efa\u4e00\u4e2aabi\u4ec5\u9002\u7528\u4e8eandroid",level:2},{value:"\u4f7f\u7528\u7f16\u8bd1\u5668\u7f13\u5b58",id:"\u4f7f\u7528\u7f16\u8bd1\u5668\u7f13\u5b58",level:2},{value:"\u672c\u5730\u7f13\u5b58",id:"\u672c\u5730\u7f13\u5b58",level:3},{value:"XCode \u7279\u5b9a\u8bbe\u7f6e",id:"xcode-\u7279\u5b9a\u8bbe\u7f6e",level:4},{value:"\u5728 CI \u4e0a\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5",id:"\u5728-ci-\u4e0a\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5",level:4},{value:"\u5206\u5e03\u5f0f\u7f13\u5b58",id:"\u5206\u5e03\u5f0f\u7f13\u5b58",level:3}];function o(e){const c=Object.assign({p:"p",strong:"strong",admonition:"admonition",h2:"h2",a:"a",code:"code",pre:"pre",h3:"h3",h4:"h4",ol:"ol",li:"li",ul:"ul"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c.p,{children:["\u6784\u5efaReact Native\u5e94\u7528\u53ef\u80fd\u4f1a\u975e\u5e38",(0,i.jsx)(c.strong,{children:"\u6602\u8d35"}),"\uff0c\u5e76\u4e14\u9700\u8981\u5f00\u53d1\u4eba\u5458\u82b1\u8d39\u6570\u5206\u949f\u7684\u65f6\u95f4\u3002\n\u968f\u7740\u9879\u76ee\u89c4\u6a21\u7684\u589e\u957f\u4ee5\u53ca\u5728\u62e5\u6709\u591a\u4e2aReact Native\u5f00\u53d1\u4eba\u5458\u7684\u5927\u578b\u7ec4\u7ec7\u4e2d\uff0c\u8fd9\u53ef\u80fd\u6210\u4e3a\u4e00\u4e2a\u95ee\u9898\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u4e3a\u4e86\u51cf\u8f7b\u6027\u80fd\u635f\u5931\uff0c\u672c\u9875\u9762\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5efa\u8bae\u6765",(0,i.jsx)(c.strong,{children:"\u6539\u5584\u60a8\u7684\u6784\u5efa\u65f6\u95f4"}),"\u3002"]}),"\n",(0,i.jsx)(c.admonition,{type:"info",children:(0,i.jsx)(c.p,{children:"\u5982\u679c\u60a8\u6ce8\u610f\u5230\u4f7f\u7528\u65b0\u67b6\u6784\u5728 Android \u4e0a\u6784\u5efa\u65f6\u95f4\u8f83\u6162\uff0c\u8bf7\u5c3d\u91cf\u5347\u7ea7 React Native \u5230\u6700\u65b0\u7248\u672c\u3002"})}),"\n",(0,i.jsx)(c.h2,{id:"\u4ec5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6784\u5efa\u4e00\u4e2aabi\u4ec5\u9002\u7528\u4e8eandroid",children:"\u4ec5\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6784\u5efa\u4e00\u4e2aABI\uff08\u4ec5\u9002\u7528\u4e8eAndroid\uff09"}),"\n",(0,i.jsxs)(c.p,{children:["\u5728\u672c\u5730\u6784\u5efaAndroid\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u6784\u5efa\u6240\u67094\u4e2a",(0,i.jsx)(c.a,{href:"https://developer.android.com/ndk/guides/abis",children:"\u5e94\u7528\u7a0b\u5e8f\u4e8c\u8fdb\u5236\u63a5\u53e3\uff08ABIs\uff09"}),"\uff1a",(0,i.jsx)(c.code,{children:"armeabi-v7a"}),"\uff0c",(0,i.jsx)(c.code,{children:"arm64-v8a"}),"\uff0c",(0,i.jsx)(c.code,{children:"x86"}),"\u548c ",(0,i.jsx)(c.code,{children:"x86_64"}),"."]}),"\n",(0,i.jsx)(c.p,{children:"\u7136\u800c\uff0c\u5982\u679c\u60a8\u6b63\u5728\u672c\u5730\u6784\u5efa\u5e76\u6d4b\u8bd5\u6a21\u62df\u5668\u6216\u7269\u7406\u8bbe\u5907\uff0c\u5219\u53ef\u80fd\u4e0d\u9700\u8981\u6784\u5efa\u6240\u6709\u8fd9\u4e9bABI\u3002"}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u5c06\u51cf\u5c11\u7ea675\uff05\u7684",(0,i.jsx)(c.strong,{children:"\u672c\u673a\u7f16\u8bd1\u65f6\u95f4"}),"\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u60a8\u4f7f\u7528React Native CLI\uff0c\u8bf7\u5411 ",(0,i.jsx)(c.code,{children:"run-android"})," \u547d\u4ee4\u6dfb\u52a0 ",(0,i.jsx)(c.code,{children:"--active-arch-only"})," \u6807\u5fd7\u3002\u6b64\u6807\u5fd7\u5c06\u786e\u4fdd\u4ece\u8fd0\u884c\u7684\u6a21\u62df\u5668\u6216\u63d2\u5165\u7684\u624b\u673a\u4e2d\u9009\u62e9\u6b63\u786e\u7684ABI\u3002\u8981\u786e\u8ba4\u6b64\u65b9\u6cd5\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff0c\u60a8\u5c06\u5728\u63a7\u5236\u53f0\u4e0a\u770b\u5230\u7c7b\u4f3c\u4e8e ",(0,i.jsx)(c.code,{children:"info Detected architectures arm64-v8a"})," \u7684\u6d88\u606f\u3002"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:'$ yarn react-native run-android --active-arch-only\n\n[ ... ]\ninfo Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.\nJetifier found 1037 file(s) to forward-jetify. Using 32 workers...\ninfo JS server already running.\ninfo Detected architectures arm64-v8a\ninfo Installing the app...\n'})}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u4e2a\u673a\u5236\u4f9d\u8d56\u4e8e",(0,i.jsx)(c.code,{children:"reactNativeArchitectures"})," Gradle \u5c5e\u6027\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u76f4\u63a5\u4ece\u547d\u4ee4\u884c\u4f7f\u7528 Gradle \u6784\u5efa\u800c\u4e0d\u4f7f\u7528 CLI\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u6307\u5b9a\u8981\u6784\u5efa\u7684 ABI\uff1a"}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:"$ ./gradlew :app:assembleDebug -PreactNativeArchitectures=x86,x86_64\n"})}),"\n",(0,i.jsx)(c.p,{children:"\u5982\u679c\u60a8\u5e0c\u671b\u5728 CI \u4e0a\u6784\u5efa Android \u5e94\u7528\u7a0b\u5e8f\u5e76\u4f7f\u7528\u77e9\u9635\u6765\u5e76\u884c\u5316\u6784\u5efa\u4e0d\u540c\u7684\u67b6\u6784\uff0c\u8fd9\u5c06\u975e\u5e38\u6709\u7528\u3002"}),"\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u60a8\u613f\u610f\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728\u672c\u5730\u8986\u76d6\u6b64\u503c\uff0c\u5728\u9879\u76ee\u7684",(0,i.jsx)(c.a,{href:"https://github.com/facebook/react-native/blob/19cf70266eb8ca151aa0cc46ac4c09cb987b2ceb/template/android/gradle.properties#L30-L33",children:"\u9876\u7ea7\u6587\u4ef6\u5939"}),"\u4e2d\u4f7f\u7528",(0,i.jsx)(c.code,{children:"gradle.properties"}),"\u6587\u4ef6\uff1a"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:"# Use this property to specify which architecture you want to build.\n# You can also override it from the CLI using\n# ./gradlew <task> -PreactNativeArchitectures=x86_64\nreactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64\n"})}),"\n",(0,i.jsxs)(c.p,{children:["\u4e00\u65e6\u4f60\u6784\u5efa\u4e86\u5e94\u7528\u7684",(0,i.jsx)(c.strong,{children:"\u53d1\u5e03\u7248\u672c"}),"\uff0c\u4e0d\u8981\u5fd8\u8bb0\u79fb\u9664\u8fd9\u4e9b\u6807\u5fd7\uff0c\u56e0\u4e3a\u4f60\u5e0c\u671b\u6784\u5efa\u4e00\u4e2a\u9002\u7528\u4e8e\u6240\u6709 ABI \u800c\u4e0d\u4ec5\u4ec5\u662f\u5728\u65e5\u5e38\u5f00\u53d1\u6d41\u7a0b\u4e2d\u4f7f\u7528\u7684\u90a3\u4e2a\u7684 apk/app bundle\u3002"]}),"\n",(0,i.jsx)(c.h2,{id:"\u4f7f\u7528\u7f16\u8bd1\u5668\u7f13\u5b58",children:"\u4f7f\u7528\u7f16\u8bd1\u5668\u7f13\u5b58"}),"\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u60a8\u7ecf\u5e38\u8fd0\u884c\u672c\u5730\u6784\u5efa\uff08\u65e0\u8bba\u662f C++ \u8fd8\u662f Objective-C\uff09\uff0c\u60a8\u53ef\u80fd\u4f1a\u4ece\u4f7f\u7528",(0,i.jsx)(c.strong,{children:"\u7f16\u8bd1\u5668\u7f13\u5b58"}),"\u4e2d\u53d7\u76ca\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u5177\u4f53\u800c\u8a00\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u7c7b\u578b\u7684\u7f13\u5b58\uff1a\u672c\u5730\u7f16\u8bd1\u5668\u7f13\u5b58\u548c\u5206\u5e03\u5f0f\u7f16\u8bd1\u5668\u7f13\u5b58\u3002"}),"\n",(0,i.jsx)(c.h3,{id:"\u672c\u5730\u7f13\u5b58",children:"\u672c\u5730\u7f13\u5b58"}),"\n",(0,i.jsx)(c.admonition,{title:"\u63d0\u793a",type:"info",children:(0,i.jsxs)(c.p,{children:["\u4ee5\u4e0b\u8bf4\u660e\u9002\u7528\u4e8e",(0,i.jsx)(c.strong,{children:"Android\u548ciOS"}),"\u3002\n\u5982\u679c\u60a8\u53ea\u6784\u5efaAndroid\u5e94\u7528\u7a0b\u5e8f\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u7ee7\u7eed\u8fdb\u884c\u3002\n\u5982\u679c\u60a8\u8fd8\u8981\u6784\u5efaiOS\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u6309\u7167\u4e0b\u9762\u7684",(0,i.jsx)(c.a,{href:"#xcode-specific-setup",children:"XCode\u7279\u5b9a\u8bbe\u7f6e"}),"\u90e8\u5206\u4e2d\u7684\u8bf4\u660e\u64cd\u4f5c\u3002"]})}),"\n",(0,i.jsxs)(c.p,{children:["\u6211\u4eec\u5efa\u8bae\u4f7f\u7528",(0,i.jsx)(c.a,{href:"https://ccache.dev/",children:(0,i.jsx)(c.strong,{children:"ccache"})}),"\u6765\u7f13\u5b58\u60a8\u7684\u672c\u5730\u6784\u5efa\u7f16\u8bd1\u8fc7\u7a0b\u3002\nCcache \u901a\u8fc7\u5305\u88c5 C++ \u7f16\u8bd1\u5668\uff0c\u5b58\u50a8\u7f16\u8bd1\u7ed3\u679c\uff0c\u5e76\u5728\u539f\u59cb\u5b58\u50a8\u4e86\u4e2d\u95f4\u7f16\u8bd1\u7ed3\u679c\u7684\u60c5\u51b5\u4e0b\u8df3\u8fc7\u7f16\u8bd1\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u8981\u5b89\u88c5\u5b83\uff0c\u60a8\u53ef\u4ee5\u6309\u7167",(0,i.jsx)(c.a,{href:"https://github.com/ccache/ccache/blob/master/doc/INSTALL.md",children:"\u5b98\u65b9\u5b89\u88c5\u8bf4\u660e"}),"\u8fdb\u884c\u64cd\u4f5c\u3002\u5728 macOS \u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(c.code,{children:"brew install ccache"})," \u547d\u4ee4\u6765\u5b89\u88c5 ccache\u3002\u4e00\u65e6\u5b89\u88c5\u5b8c\u6210\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u914d\u7f6e\u4ee5\u7f13\u5b58 NDK \u7684\u7f16\u8bd1\u7ed3\u679c\uff1a"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:"ln -s $(which ccache) /usr/local/bin/gcc\nln -s $(which ccache) /usr/local/bin/g++\nln -s $(which ccache) /usr/local/bin/cc\nln -s $(which ccache) /usr/local/bin/c++\nln -s $(which ccache) /usr/local/bin/clang\nln -s $(which ccache) /usr/local/bin/clang++\n"})}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u5c06\u5728",(0,i.jsx)(c.code,{children:"/usr/local/bin/"}),"\u76ee\u5f55\u4e0b\u521b\u5efa\u540d\u4e3a",(0,i.jsx)(c.code,{children:"gcc"}),"\u3001",(0,i.jsx)(c.code,{children:"g++"}),"\u7b49\u7684\u7b26\u53f7\u94fe\u63a5\uff0c\u6307\u5411 ",(0,i.jsx)(c.code,{children:"ccache"}),"."]}),"\n",(0,i.jsxs)(c.p,{children:["\u53ea\u8981 ",(0,i.jsx)(c.code,{children:"/usr/local/bin/"})," \u5728 ",(0,i.jsx)(c.code,{children:"$PATH"})," \u53d8\u91cf\u4e2d\u4f4d\u4e8e ",(0,i.jsx)(c.code,{children:"/usr/bin/"})," \u4e4b\u524d\uff08\u8fd9\u662f\u9ed8\u8ba4\u8bbe\u7f6e\uff09\uff0c\u5b83\u5c31\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(c.code,{children:"which"})," \u547d\u4ee4\u9a8c\u8bc1\u5176\u662f\u5426\u6709\u6548\uff1a"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:"$ which gcc\n/usr/local/bin/gcc\n"})}),"\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u7ed3\u679c\u662f ",(0,i.jsx)(c.code,{children:"/usr/local/bin/gcc"}),", \u90a3\u4e48\u5b9e\u9645\u4e0a\u60a8\u6b63\u5728\u8c03\u7528\u5305\u88c5\u4e86 ",(0,i.jsx)(c.code,{children:"gcc"})," \u7684 ",(0,i.jsx)(c.code,{children:"ccache"}),"."]}),"\n",(0,i.jsxs)(c.admonition,{title:"\u6ce8\u610f",type:"caution",children:[(0,i.jsxs)(c.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e2a",(0,i.jsx)(c.code,{children:"ccache"}),"\u7684\u8bbe\u7f6e\u5c06\u5f71\u54cd\u5230\u60a8\u5728\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u7684\u6240\u6709\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u4e0d\u4ec5\u9650\u4e8eReact Native\u76f8\u5173\u7684\u7f16\u8bd1\u3002\u4f7f\u7528\u65f6\u8bf7\u81ea\u884c\u627f\u62c5\u98ce\u9669\u3002\u5982\u679c\u60a8\u65e0\u6cd5\u5b89\u88c5/\u7f16\u8bd1\u5176\u4ed6\u8f6f\u4ef6\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u8fd9\u4e2a\u539f\u56e0\u3002\u5982\u679c\u662f\u8fd9\u79cd\u60c5\u51b5\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u6240\u521b\u5efa\u7684\u7b26\u53f7\u94fe\u63a5\uff1a"]}),(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:"unlink /usr/local/bin/gcc\nunlink /usr/local/bin/g++\nunlink /usr/local/bin/cc\nunlink /usr/local/bin/c++\nunlink /usr/local/bin/clang\nunlink /usr/local/bin/clang++\n"})}),(0,i.jsx)(c.p,{children:"\u4ee5\u6062\u590d\u8ba1\u7b97\u673a\u5230\u539f\u59cb\u72b6\u6001\u5e76\u4f7f\u7528\u9ed8\u8ba4\u7f16\u8bd1\u5668\u3002"})]}),"\n",(0,i.jsxs)(c.p,{children:["\u7136\u540e\u4f60\u53ef\u4ee5\u8fdb\u884c\u4e24\u6b21\u5e72\u51c0\u7684\u6784\u5efa\uff08\u4f8b\u5982\u5728Android\u4e0a\uff0c\u4f60\u53ef\u4ee5\u5148\u8fd0\u884c",(0,i.jsx)(c.code,{children:"yarn react-native run-android"}),"\uff0c\u5220\u9664",(0,i.jsx)(c.code,{children:"android/app/build"}),"\u6587\u4ef6\u5939\uff0c\u7136\u540e\u518d\u6b21\u8fd0\u884c\u7b2c\u4e00\u4e2a\u547d\u4ee4\uff09\u3002\u4f60\u4f1a\u6ce8\u610f\u5230\u7b2c\u4e8c\u6b21\u6784\u5efa\u6bd4\u7b2c\u4e00\u6b21\u5feb\u5f97\u591a\uff08\u53ea\u9700\u8981\u51e0\u79d2\u800c\u4e0d\u662f\u51e0\u5206\u949f\uff09\u3002\n\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9a8c\u8bc1",(0,i.jsx)(c.code,{children:"ccache"}),"\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff0c\u5e76\u68c0\u67e5\u7f13\u5b58\u547d\u4e2d/\u672a\u547d\u4e2d\u7387 ",(0,i.jsx)(c.code,{children:"ccache -s"})]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{children:"$ ccache -s\nSummary:\n  Hits:             196 /  3068 (6.39 %)\n    Direct:           0 /  3068 (0.00 %)\n    Preprocessed:   196 /  3068 (6.39 %)\n  Misses:          2872\n    Direct:        3068\n    Preprocessed:  2872\nUncacheable:       \t1\nPrimary storage:\nHits\uff1a             \t196 /  \t6136 \uff083.19%\uff09\nMisses\uff1a           \t5940 \nCache size (GB)\uff1a  \t0.60 /  \t20.00 \uff083.00%\uff09\n"})}),"\n",(0,i.jsxs)(c.p,{children:["\u8bf7\u6ce8\u610f\uff0c",(0,i.jsx)(c.code,{children:"ccache"}),"\u5c06\u7edf\u8ba1\u6570\u636e\u805a\u5408\u5230\u6240\u6709\u6784\u5efa\u4e2d\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(c.code,{children:"ccache --zero-stats"})," \u5728\u6784\u5efa\u4e4b\u524d\u91cd\u7f6e\u5b83\u4eec\u4ee5\u9a8c\u8bc1\u7f13\u5b58\u547d\u4e2d\u7387\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u9700\u8981\u6e05\u9664\u7f13\u5b58\uff0c\u8bf7\u4f7f\u7528 ",(0,i.jsx)(c.code,{children:"ccache --clear"})]}),"\n",(0,i.jsx)(c.h4,{id:"xcode-\u7279\u5b9a\u8bbe\u7f6e",children:"XCode \u7279\u5b9a\u8bbe\u7f6e"}),"\n",(0,i.jsxs)(c.p,{children:["\u4e3a\u4e86\u786e\u4fdd",(0,i.jsx)(c.code,{children:"ccache"}),"\u5728iOS\u548cXCode\u4e2d\u6b63\u5e38\u5de5\u4f5c\uff0c\u60a8\u9700\u8981\u9075\u5faa\u4e00\u4e9b\u989d\u5916\u7684\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsxs)(c.ol,{children:["\n",(0,i.jsxs)(c.li,{children:["\u60a8\u5fc5\u987b\u4fee\u6539Xcode\u548c",(0,i.jsx)(c.code,{children:"xcodebuild"}),"\u8c03\u7528\u7f16\u8bd1\u5668\u547d\u4ee4\u7684\u65b9\u5f0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u4eec\u4f7f\u7528_\u5b8c\u5168\u6307\u5b9a\u8def\u5f84_\u6765\u8c03\u7528\u7f16\u8bd1\u5668\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u56e0\u6b64\u4e0d\u4f1a\u4f7f\u7528\u5b89\u88c5\u5728",(0,i.jsx)(c.code,{children:"/usr/local/bin"}),"\u4e2d\u7684\u7b26\u53f7\u94fe\u63a5\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u9009\u9879\u4e4b\u4e00\u914d\u7f6eXcode\u4ee5\u4f7f\u7528\u76f8\u5bf9\u540d\u79f0\u6765\u8c03\u7528\u7f16\u8bd1\u5668\uff1a"]}),"\n"]}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:["\u5982\u679c\u60a8\u4f7f\u7528\u76f4\u63a5\u547d\u4ee4\u884c\uff0c\u5219\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e0a\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u524d\u7f00\uff1a ",(0,i.jsx)(c.code,{children:"CLANG=clang CLANGPLUSPLUS=clang++ LD=clang LDPLUSPLUS=clang++ xcodebuild <rest of xcodebuild command line>"})]}),"\n",(0,i.jsxs)(c.li,{children:["\u5728\u60a8\u7684 ",(0,i.jsx)(c.code,{children:"ios/Podfile"})," \u4e2d\u6dfb\u52a0\u4e00\u4e2a ",(0,i.jsx)(c.code,{children:"post_install"})," \u90e8\u5206\uff0c\u5728 ",(0,i.jsx)(c.code,{children:"pod install"})," \u6b65\u9aa4\u671f\u95f4\u66f4\u6539Xcode\u5de5\u4f5c\u533a\u4e2d\u7684\u7f16\u8bd1\u5668\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-ruby",children:'  post_install do |installer|\n    react_native_post_install(installer)\n\n    # ...possibly other post_install items here\n\n    installer.pods_project.targets.each do |target|\n      target.build_configurations.each do |config|\n        # Using the un-qualified names means you can swap in different implementations, for example ccache\n        config.build_settings["CC"] = "clang"\n        config.build_settings["LD"] = "clang"\n        config.build_settings["CXX"] = "clang++"\n        config.build_settings["LDPLUSPLUS"] = "clang++"\n      end\n    end\n\n    __apply_Xcode_12_5_M1_post_install_workaround(installer)\n  end\n'})}),"\n",(0,i.jsxs)(c.ol,{start:"2",children:["\n",(0,i.jsx)(c.li,{children:"\u4f60\u9700\u8981\u4e00\u4e2accache\u914d\u7f6e\uff0c\u5141\u8bb8\u4e00\u5b9a\u7a0b\u5ea6\u7684\u677e\u6563\u548c\u7f13\u5b58\u884c\u4e3a\uff0c\u4ee5\u4fbf\u5728Xcode\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u6ce8\u518c\u7f13\u5b58\u547d\u4e2d\u3002\u5982\u679c\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\uff0c\u5219\u4e0e\u6807\u51c6\u4e0d\u540c\u7684ccache\u914d\u7f6e\u53d8\u91cf\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-bash",children:"export CCACHE_SLOPPINESS=clang_index_store,file_stat_matches,include_file_ctime,include_file_mtime,ivfsoverlay,pch_defines,modules,system_headers,time_macros\nexport CCACHE_FILECLONE=true\nexport CCACHE_DEPEND=true\nexport CCACHE_INODECACHE=true\n"})}),"\n",(0,i.jsxs)(c.p,{children:["\u76f8\u540c\u7684\u8bbe\u7f6e\u4e5f\u53ef\u4ee5\u5728",(0,i.jsx)(c.code,{children:"ccache.conf"}),"\u6587\u4ef6\u6216\u4efb\u4f55\u5176\u4ed6ccache\u63d0\u4f9b\u7684\u673a\u5236\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605",(0,i.jsx)(c.a,{href:"https://ccache.dev/manual/4.3.html",children:"\u5b98\u65b9ccache\u624b\u518c"}),"\u3002"]}),"\n",(0,i.jsx)(c.h4,{id:"\u5728-ci-\u4e0a\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5",children:"\u5728 CI \u4e0a\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5"}),"\n",(0,i.jsxs)(c.p,{children:["Ccache \u4f7f\u7528 macOS \u4e0a\u7684 ",(0,i.jsx)(c.code,{children:"/Users/$USER/Library/Caches/ccache"})," \u6587\u4ef6\u5939\u6765\u5b58\u50a8\u7f13\u5b58\u3002\n\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u5728 CI \u4e0a\u4fdd\u5b58\u548c\u6062\u590d\u76f8\u5e94\u7684\u6587\u4ef6\u5939\uff0c\u4ee5\u52a0\u5feb\u6784\u5efa\u901f\u5ea6\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u7136\u800c\uff0c\u6709\u51e0\u70b9\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,i.jsxs)(c.ol,{children:["\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsxs)(c.p,{children:["\u5728 CI \u4e0a\uff0c\u6211\u4eec\u5efa\u8bae\u8fdb\u884c\u5b8c\u5168\u6e05\u7406\u6784\u5efa\uff0c\u4ee5\u907f\u514d\u7f13\u5b58\u6c61\u67d3\u95ee\u9898\u3002\u5982\u679c\u6309\u7167\u524d\u9762\u63d0\u5230\u7684\u65b9\u6cd5\u8fdb\u884c\u64cd\u4f5c\uff0c\u5219\u5e94\u8be5\u80fd\u591f\u5c06\u672c\u673a\u6784\u5efa\u5e76\u884c\u5316\u4e3a 4 \u79cd\u4e0d\u540c\u7684 ABI\uff0c\u5e76\u4e14\u5f88\u53ef\u80fd\u4e0d\u9700\u8981\u5728 CI \u4e0a\u4f7f\u7528 ",(0,i.jsx)(c.code,{children:"ccache"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsxs)(c.p,{children:[(0,i.jsx)(c.code,{children:"ccache"})," \u4f9d\u8d56\u4e8e\u65f6\u95f4\u6233\u6765\u8ba1\u7b97\u7f13\u5b58\u547d\u4e2d\u3002\u8fd9\u5728 CI \u4e0a\u6548\u679c\u4e0d\u4f73\uff0c\u56e0\u4e3a\u6587\u4ef6\u4f1a\u5728\u6bcf\u6b21\u8fd0\u884c\u65f6\u91cd\u65b0\u4e0b\u8f7d\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u60a8\u9700\u8981\u4f7f\u7528 ",(0,i.jsx)(c.code,{children:"compiler_check content"})," \u9009\u9879\uff0c\u8be5\u9009\u9879\u6539\u7528",(0,i.jsx)(c.a,{href:"https://ccache.dev/manual/4.3.html",children:"\u5bf9\u6587\u4ef6\u5185\u5bb9\u8fdb\u884c\u54c8\u5e0c"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(c.h3,{id:"\u5206\u5e03\u5f0f\u7f13\u5b58",children:"\u5206\u5e03\u5f0f\u7f13\u5b58"}),"\n",(0,i.jsx)(c.p,{children:"\u4e0e\u672c\u5730\u7f13\u5b58\u7c7b\u4f3c\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u8003\u8651\u4e3a\u539f\u751f\u6784\u5efa\u4f7f\u7528\u5206\u5e03\u5f0f\u7f13\u5b58\u3002\n\u8fd9\u5728\u9891\u7e41\u8fdb\u884c\u539f\u751f\u6784\u5efa\u7684\u5927\u578b\u7ec4\u7ec7\u4e2d\u7279\u522b\u6709\u7528\u3002"}),"\n",(0,i.jsxs)(c.p,{children:["\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,i.jsx)(c.a,{href:"https://github.com/mozilla/sccache",children:"sccache"}),"\u6765\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\u3002\n\u5173\u4e8e\u5982\u4f55\u8bbe\u7f6e\u548c\u4f7f\u7528\u8be5\u5de5\u5177\uff0c\u8bf7\u53c2\u9605sccache\u7684",(0,i.jsx)(c.a,{href:"https://github.com/mozilla/sccache/blob/main/docs/DistributedQuickstart.md",children:"\u5206\u5e03\u5f0f\u7f16\u8bd1\u5feb\u901f\u5165\u95e8\u6307\u5357"}),"\u3002"]})]})}const h=function(e={}){const{wrapper:c}=Object.assign({},(0,s.ah)(),e.components);return c?(0,i.jsx)(c,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},71426:(e,c,n)=>{var i=n(27378),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function t(e,c,n){var i,r={},t=null,o=null;for(i in void 0!==n&&(t=""+n),void 0!==c.key&&(t=""+c.key),void 0!==c.ref&&(o=c.ref),c)d.call(c,i)&&!a.hasOwnProperty(i)&&(r[i]=c[i]);if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===r[i]&&(r[i]=c[i]);return{$$typeof:s,type:e,key:t,ref:o,props:r,_owner:l.current}}c.Fragment=r,c.jsx=t,c.jsxs=t},24246:(e,c,n)=>{e.exports=n(71426)},71670:(e,c,n)=>{n.d(c,{Zo:()=>l,ah:()=>r});var i=n(27378);const s=i.createContext({});function r(e){const c=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(c):{...c,...e}),[c,e])}const d={};function l({components:e,children:c,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||d:r(e),i.createElement(s.Provider,{value:l},c)}}}]);