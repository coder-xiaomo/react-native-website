/*! For license information please see 6c509596.3c5ae329.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3700],{31801:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var d=r(24246),s=r(71670);const a={id:"signed-apk-android",title:"\u6253\u5305\u53d1\u5e03"},l=void 0,i={id:"signed-apk-android",title:"\u6253\u5305\u53d1\u5e03",description:"Android \u8981\u6c42\u6240\u6709\u5e94\u7528\u90fd\u6709\u4e00\u4e2a\u6570\u5b57\u7b7e\u540d\u624d\u4f1a\u88ab\u5141\u8bb8\u5b89\u88c5\u5728\u7528\u6237\u624b\u673a\u4e0a\uff0c\u6240\u4ee5\u5728\u628a\u5e94\u7528\u53d1\u5e03\u5230\u5e94\u7528\u5e02\u573a\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5148\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\u7684 AAB \u6216 APK \u5305\uff08Google Play \u73b0\u5728\u8981\u6c42 AAB \u683c\u5f0f\uff0c\u800c\u56fd\u5185\u7684\u5e94\u7528\u5e02\u573a\u76ee\u524d\u4ec5\u652f\u6301 APK \u683c\u5f0f\u3002\u4f46\u65e0\u8bba\u54ea\u79cd\u683c\u5f0f\uff0c\u4e0b\u9762\u7684\u7b7e\u540d\u6b65\u9aa4\u662f\u4e00\u6837\u7684\uff09\u3002Android \u5f00\u53d1\u8005\u5b98\u7f51\u4e0a\u7684\u5982\u4f55\u7ed9\u4f60\u7684\u5e94\u7528\u7b7e\u540d\u6587\u6863\u63cf\u8ff0\u4e86\u7b7e\u540d\u7684\u7ec6\u8282\u3002\u672c\u6307\u5357\u65e8\u5728\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5316\u7684\u7b7e\u540d\u548c\u6253\u5305\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u4e0d\u4f1a\u6d89\u53ca\u592a\u591a\u7406\u8bba\u3002",source:"@site/versioned_docs/version-0.71/signed-apk-android.md",sourceDirName:".",slug:"/signed-apk-android",permalink:"/docs/0.71/signed-apk-android",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/signed-apk-android.md",tags:[],version:"0.71",frontMatter:{id:"signed-apk-android",title:"\u6253\u5305\u53d1\u5e03"},sidebar:"docs",previous:{title:"Headless JS\uff08\u540e\u53f0\u4efb\u52a1\uff09",permalink:"/docs/0.71/headless-js-android"},next:{title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",permalink:"/docs/0.71/communication-android"}},o={},c=[{value:"\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\u5bc6\u94a5",id:"\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\u5bc6\u94a5",level:3},{value:"\u8bbe\u7f6e gradle \u53d8\u91cf",id:"\u8bbe\u7f6e-gradle-\u53d8\u91cf",level:3},{value:"\u628a\u7b7e\u540d\u914d\u7f6e\u52a0\u5165\u5230\u9879\u76ee\u7684 gradle \u914d\u7f6e\u4e2d",id:"\u628a\u7b7e\u540d\u914d\u7f6e\u52a0\u5165\u5230\u9879\u76ee\u7684-gradle-\u914d\u7f6e\u4e2d",level:3},{value:"\u751f\u6210\u53d1\u884c APK \u5305",id:"\u751f\u6210\u53d1\u884c-apk-\u5305",level:3},{value:"\u6d4b\u8bd5\u5e94\u7528\u7684\u53d1\u884c\u7248\u672c",id:"\u6d4b\u8bd5\u5e94\u7528\u7684\u53d1\u884c\u7248\u672c",level:3},{value:"\u9488\u5bf9\u4e0d\u540c\u7684 CPU \u67b6\u6784\u751f\u6210 APK \u4ee5\u51cf\u5c0f APK \u6587\u4ef6\u7684\u5927\u5c0f",id:"\u9488\u5bf9\u4e0d\u540c\u7684-cpu-\u67b6\u6784\u751f\u6210-apk-\u4ee5\u51cf\u5c0f-apk-\u6587\u4ef6\u7684\u5927\u5c0f",level:3},{value:"\u542f\u7528 Proguard \u6765\u51cf\u5c11 apk \u7684\u5927\u5c0f\uff08\u53ef\u9009\uff09",id:"\u542f\u7528-proguard-\u6765\u51cf\u5c11-apk-\u7684\u5927\u5c0f\u53ef\u9009",level:3},{value:"\u751f\u6210\u53d1\u884c AAB \u5305",id:"\u751f\u6210\u53d1\u884c-aab-\u5305",level:2}];function t(e){const n=Object.assign({p:"p",a:"a",h3:"h3",code:"code",pre:"pre",strong:"strong",ol:"ol",li:"li",blockquote:"blockquote",h2:"h2"},(0,s.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Android \u8981\u6c42\u6240\u6709\u5e94\u7528\u90fd\u6709\u4e00\u4e2a\u6570\u5b57\u7b7e\u540d\u624d\u4f1a\u88ab\u5141\u8bb8\u5b89\u88c5\u5728\u7528\u6237\u624b\u673a\u4e0a\uff0c\u6240\u4ee5\u5728\u628a\u5e94\u7528\u53d1\u5e03\u5230\u5e94\u7528\u5e02\u573a\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5148\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\u7684 AAB \u6216 APK \u5305\uff08Google Play \u73b0\u5728\u8981\u6c42 AAB \u683c\u5f0f\uff0c\u800c\u56fd\u5185\u7684\u5e94\u7528\u5e02\u573a\u76ee\u524d\u4ec5\u652f\u6301 APK \u683c\u5f0f\u3002\u4f46\u65e0\u8bba\u54ea\u79cd\u683c\u5f0f\uff0c\u4e0b\u9762\u7684\u7b7e\u540d\u6b65\u9aa4\u662f\u4e00\u6837\u7684\uff09\u3002Android \u5f00\u53d1\u8005\u5b98\u7f51\u4e0a\u7684",(0,d.jsx)(n.a,{href:"https://developer.android.com/tools/publishing/app-signing.html",children:"\u5982\u4f55\u7ed9\u4f60\u7684\u5e94\u7528\u7b7e\u540d"}),"\u6587\u6863\u63cf\u8ff0\u4e86\u7b7e\u540d\u7684\u7ec6\u8282\u3002\u672c\u6307\u5357\u65e8\u5728\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5316\u7684\u7b7e\u540d\u548c\u6253\u5305\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u4e0d\u4f1a\u6d89\u53ca\u592a\u591a\u7406\u8bba\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\u5bc6\u94a5",children:"\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\u5bc6\u94a5"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u7528",(0,d.jsx)(n.code,{children:"keytool"}),"\u547d\u4ee4\u751f\u6210\u4e00\u4e2a\u79c1\u6709\u5bc6\u94a5\u3002\u5728 Windows \u4e0a",(0,d.jsx)(n.code,{children:"keytool"}),"\u547d\u4ee4\u653e\u5728 JDK \u7684 bin \u76ee\u5f55\u4e2d\uff08\u6bd4\u5982",(0,d.jsx)(n.code,{children:"C:\\Program Files\\Java\\jdkx.x.x_x\\bin"}),"\uff09\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5728\u547d\u4ee4\u884c\u4e2d\u5148\u8fdb\u5165\u90a3\u4e2a\u76ee\u5f55\u624d\u80fd\u6267\u884c\u6b64\u547d\u4ee4\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"$ keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u6761\u547d\u4ee4\u4f1a\u8981\u6c42\u4f60\u8f93\u5165\u5bc6\u94a5\u5e93\uff08keystore\uff09\u548c\u5bf9\u5e94\u5bc6\u94a5\u7684\u5bc6\u7801\uff0c\u7136\u540e\u8bbe\u7f6e\u4e00\u4e9b\u53d1\u884c\u76f8\u5173\u7684\u4fe1\u606f\u3002\u6700\u540e\u5b83\u4f1a\u751f\u6210\u4e00\u4e2a\u53eb\u505a",(0,d.jsx)(n.code,{children:"my-release-key.keystore"}),"\u7684\u5bc6\u94a5\u5e93\u6587\u4ef6\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u8fd0\u884c\u4e0a\u9762\u8fd9\u6761\u8bed\u53e5\u4e4b\u540e\uff0c\u5bc6\u94a5\u5e93\u91cc\u5e94\u8be5\u5df2\u7ecf\u751f\u6210\u4e86\u4e00\u4e2a\u5355\u72ec\u7684\u5bc6\u94a5\uff0c\u6709\u6548\u671f\u4e3a 10000 \u5929\u3002--alias \u53c2\u6570\u540e\u9762\u7684\u522b\u540d\u662f\u4f60\u5c06\u6765\u4e3a\u5e94\u7528\u7b7e\u540d\u65f6\u6240\u9700\u8981\u7528\u5230\u7684\uff0c\u6240\u4ee5\u8bb0\u5f97\u8bb0\u5f55\u8fd9\u4e2a\u522b\u540d\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u8bf7\u8bb0\u5f97\u59a5\u5584\u5730\u4fdd\u7ba1\u597d\u4f60\u7684\u5bc6\u94a5\u5e93\u6587\u4ef6\uff0c\u4e00\u822c\u4e0d\u8981\u4e0a\u4f20\u5230\u7248\u672c\u5e93\u6216\u8005\u5176\u5b83\u7684\u5730\u65b9\u3002"})}),"\n",(0,d.jsx)(n.h3,{id:"\u8bbe\u7f6e-gradle-\u53d8\u91cf",children:"\u8bbe\u7f6e gradle \u53d8\u91cf"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u628a",(0,d.jsx)(n.code,{children:"my-release-key.keystore"}),"\u6587\u4ef6\u653e\u5230\u4f60\u5de5\u7a0b\u4e2d\u7684",(0,d.jsx)(n.code,{children:"android/app"}),"\u6587\u4ef6\u5939\u4e0b\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u7f16\u8f91",(0,d.jsx)(n.code,{children:"~/.gradle/gradle.properties"}),"\uff08\u5168\u5c40\u914d\u7f6e\uff0c\u5bf9\u6240\u6709\u9879\u76ee\u6709\u6548\uff09\u6216\u662f",(0,d.jsx)(n.code,{children:"\u9879\u76ee\u76ee\u5f55/android/gradle.properties"}),"\uff08\u9879\u76ee\u914d\u7f6e\uff0c\u53ea\u5bf9\u6240\u5728\u9879\u76ee\u6709\u6548\uff09\u3002\u5982\u679c\u6ca1\u6709",(0,d.jsx)(n.code,{children:"gradle.properties"}),"\u6587\u4ef6\u4f60\u5c31\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a\uff0c\u6dfb\u52a0\u5982\u4e0b\u7684\u4ee3\u7801\uff08\u6ce8\u610f\u628a\u5176\u4e2d\u7684",(0,d.jsx)(n.code,{children:"****"}),"\u66ff\u6362\u4e3a\u76f8\u5e94\u5bc6\u7801\uff09"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["\u6ce8\u610f\uff1a~\u7b26\u53f7\u8868\u793a\u7528\u6237\u76ee\u5f55\uff0c\u6bd4\u5982 windows \u4e0a\u53ef\u80fd\u662f",(0,d.jsx)(n.code,{children:"C:\\Users\\\u7528\u6237\u540d"}),"\uff0c\u800c mac \u4e0a\u53ef\u80fd\u662f",(0,d.jsx)(n.code,{children:"/Users/\u7528\u6237\u540d"}),"\u3002"]})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"MYAPP_RELEASE_STORE_FILE=my-release-key.keystore\nMYAPP_RELEASE_KEY_ALIAS=my-key-alias\nMYAPP_RELEASE_STORE_PASSWORD=*****\nMYAPP_RELEASE_KEY_PASSWORD=*****\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u8fd9\u4e9b\u4f1a\u4f5c\u4e3a gradle \u7684\u53d8\u91cf\uff0c\u5728\u540e\u9762\u7684\u6b65\u9aa4\u4e2d\u53ef\u4ee5\u7528\u6765\u7ed9\u5e94\u7528\u7b7e\u540d\u3002"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u5173\u4e8e\u5bc6\u94a5\u5e93\u7684\u6ce8\u610f\u4e8b\u9879:"}),"\uff1a\u5982\u679c\u4f60\u4e0d\u60f3\u4ee5\u660e\u6587\u65b9\u5f0f\u4fdd\u5b58\u5bc6\u7801\uff0c\u540c\u65f6\u4f60\u4f7f\u7528\u7684\u662f macOS \u7cfb\u7edf\uff0c\u90a3\u4e48\u4f60\u4e5f\u53ef\u4ee5\u628a\u5bc6\u7801",(0,d.jsx)(n.a,{href:"https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/",children:"\u4fdd\u5b58\u5230\u94a5\u5319\u4e32\uff08Keychain\uff09\u4e2d"}),"\u3002\u8fd9\u6837\u4e00\u6765\u4f60\u5c31\u53ef\u4ee5\u7701\u7565\u6389\u4e0a\u9762\u914d\u7f6e\u4e2d\u7684\u540e\u4e24\u884c\uff08\u5373 MYAPP_RELEASE_STORE_PASSWORD \u548c MYAPP_RELEASE_KEY_PASSWORD\uff09\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u628a\u7b7e\u540d\u914d\u7f6e\u52a0\u5165\u5230\u9879\u76ee\u7684-gradle-\u914d\u7f6e\u4e2d",children:"\u628a\u7b7e\u540d\u914d\u7f6e\u52a0\u5165\u5230\u9879\u76ee\u7684 gradle \u914d\u7f6e\u4e2d"}),"\n",(0,d.jsxs)(n.p,{children:["\u7f16\u8f91\u4f60\u9879\u76ee\u76ee\u5f55\u4e0b\u7684",(0,d.jsx)(n.code,{children:"android/app/build.gradle"}),"\uff0c\u6dfb\u52a0\u5982\u4e0b\u7684\u7b7e\u540d\u914d\u7f6e\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-gradle",children:"...\nandroid {\n    ...\n    defaultConfig { ... }\n    signingConfigs {\n        release {\n            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {\n                storeFile file(MYAPP_RELEASE_STORE_FILE)\n                storePassword MYAPP_RELEASE_STORE_PASSWORD\n                keyAlias MYAPP_RELEASE_KEY_ALIAS\n                keyPassword MYAPP_RELEASE_KEY_PASSWORD\n            }\n        }\n    }\n    buildTypes {\n        release {\n            ...\n            signingConfig signingConfigs.release\n        }\n    }\n}\n...\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u751f\u6210\u53d1\u884c-apk-\u5305",children:"\u751f\u6210\u53d1\u884c APK \u5305"}),"\n",(0,d.jsx)(n.p,{children:"\u53ea\u9700\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"$ cd android\n$ ./gradlew assembleRelease\n"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u8bd1\u6ce8\uff1a",(0,d.jsx)(n.code,{children:"cd android"}),"\u8868\u793a\u8fdb\u5165 android \u76ee\u5f55\uff08\u5982\u679c\u4f60\u5df2\u7ecf\u5728 android \u76ee\u5f55\u4e2d\u4e86\u90a3\u5c31\u4e0d\u7528\u8f93\u5165\u4e86\uff09\u3002",(0,d.jsx)(n.code,{children:"./gradlew assembleRelease"}),"\u5728 macOS\u3001Linux \u6216\u662f windows \u7684 PowerShell \u73af\u5883\u4e2d\u8868\u793a\u6267\u884c\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u540d\u4e3a gradlew \u7684\u811a\u672c\u6587\u4ef6\uff0c\u4e14\u5176\u8fd0\u884c\u53c2\u6570\u4e3a assembleRelease\uff0c\u6ce8\u610f\u8fd9\u4e2a",(0,d.jsx)(n.code,{children:"./"}),"\u4e0d\u53ef\u7701\u7565\uff1b\u800c\u5728 windows \u7684\u4f20\u7edf CMD \u547d\u4ee4\u884c\u4e0b\u5219\u9700\u8981\u53bb\u6389",(0,d.jsx)(n.code,{children:"./"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Gradle \u7684",(0,d.jsx)(n.code,{children:"assembleRelease"}),"\u53c2\u6570\u4f1a\u628a\u6240\u6709\u7528\u5230\u7684 JavaScript \u4ee3\u7801\u90fd\u6253\u5305\u5230\u4e00\u8d77\uff0c\u7136\u540e\u5185\u7f6e\u5230 APK \u5305\u4e2d\u3002\u5982\u679c\u4f60\u60f3\u8c03\u6574\u4e0b\u8fd9\u4e2a\u884c\u4e3a\uff08\u6bd4\u5982 js \u4ee3\u7801\u4ee5\u53ca\u9759\u6001\u8d44\u6e90\u6253\u5305\u7684\u9ed8\u8ba4\u6587\u4ef6\u540d\u6216\u662f\u76ee\u5f55\u7ed3\u6784\u7b49\uff09\uff0c\u53ef\u4ee5\u770b\u770b",(0,d.jsx)(n.code,{children:"android/app/build.gradle"}),"\u6587\u4ef6\uff0c\u7136\u540e\u7422\u78e8\u4e0b\u5e94\u8be5\u600e\u4e48\u4fee\u6539\u4ee5\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u8bf7\u786e\u4fdd gradle.properties \u4e2d",(0,d.jsx)(n.code,{children:"\u6ca1\u6709"}),"\u5305\u542b",(0,d.jsx)(n.code,{children:"_org.gradle.configureondemand=true_"}),"\uff0c\u5426\u5219\u4f1a\u8df3\u8fc7 js \u6253\u5305\u7684\u6b65\u9aa4\uff0c\u5bfc\u81f4\u6700\u7ec8\u751f\u6210\u7684\u662f\u4e00\u4e2a\u65e0\u6cd5\u8fd0\u884c\u7684\u7a7a\u58f3\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u751f\u6210\u7684 APK \u6587\u4ef6\u4f4d\u4e8e",(0,d.jsx)(n.code,{children:"android/app/build/outputs/apk/release/app-release.apk"}),"\uff0c\u5b83\u5df2\u7ecf\u53ef\u4ee5\u7528\u6765\u53d1\u5e03\u4e86\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6d4b\u8bd5\u5e94\u7528\u7684\u53d1\u884c\u7248\u672c",children:"\u6d4b\u8bd5\u5e94\u7528\u7684\u53d1\u884c\u7248\u672c"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u628a\u53d1\u884c\u7248\u672c\u63d0\u4ea4\u5230 Play Store \u4e4b\u524d\uff0c\u4f60\u5e94\u8be5\u505a\u4e00\u6b21\u6700\u7ec8\u6d4b\u8bd5\u3002\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u5728\u8bbe\u5907\u4e0a\u5b89\u88c5\u53d1\u884c\u7248\u672c\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"$ npx react-native run-android --variant=release\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6ce8\u610f",(0,d.jsx)(n.code,{children:"--variant=release"}),"\u53c2\u6570\u53ea\u80fd\u5728\u4f60\u5b8c\u6210\u4e86\u4e0a\u9762\u7684\u7b7e\u540d\u914d\u7f6e\u4e4b\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\u3002\u4f60\u73b0\u5728\u53ef\u4ee5\u5173\u6389\u8fd0\u884c\u4e2d\u7684 packager \u4e86\uff0c\u56e0\u4e3a\u4f60\u6240\u6709\u7684\u4ee3\u7801\u548c\u6846\u67b6\u4f9d\u8d56\u5df2\u7ecf\u90fd\u88ab\u6253\u5305\u5230 apk \u5305\u4e2d\uff0c\u53ef\u4ee5\u79bb\u7ebf\u8fd0\u884c\u4e86\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u5728 debug \u548c release \u7248\u672c\u95f4\u6765\u56de\u5207\u6362\u5b89\u88c5\u65f6\u53ef\u80fd\u4f1a\u62a5\u9519\u7b7e\u540d\u4e0d\u5339\u914d\uff0c\u6b64\u65f6\u9700\u8981\u5148\u5378\u8f7d\u524d\u4e00\u4e2a\u7248\u672c\u518d\u5c1d\u8bd5\u5b89\u88c5\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u9488\u5bf9\u4e0d\u540c\u7684-cpu-\u67b6\u6784\u751f\u6210-apk-\u4ee5\u51cf\u5c0f-apk-\u6587\u4ef6\u7684\u5927\u5c0f",children:"\u9488\u5bf9\u4e0d\u540c\u7684 CPU \u67b6\u6784\u751f\u6210 APK \u4ee5\u51cf\u5c0f APK \u6587\u4ef6\u7684\u5927\u5c0f"}),"\n",(0,d.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u751f\u6210\u7684 APK \u4f1a\u540c\u65f6\u5305\u542b\u9488\u5bf9\u4e8e\u591a\u79cd CPU \u67b6\u6784\u7684\u539f\u751f\u4ee3\u7801\u3002\u8fd9\u6837\u53ef\u4ee5\u8ba9\u6211\u4eec\u66f4\u65b9\u4fbf\u7684\u5411\u5176\u4ed6\u4eba\u5206\u4eab\u8fd9\u4e2a APK\uff0c\u56e0\u4e3a\u5b83\u51e0\u4e4e\u53ef\u4ee5\u8fd0\u884c\u5728\u6240\u6709\u7684 Android \u8bbe\u5907\u4e0a\u3002\u4f46\u662f\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u6240\u6709\u8bbe\u5907\u4e0a\u90fd\u6709\u4e00\u4e9b\u6839\u672c\u4e0d\u4f1a\u8fd0\u884c\u7684\u4ee3\u7801\uff0c\u767d\u767d\u5360\u636e\u4e86\u7a7a\u95f4\u3002\u76ee\u524d\u5b89\u5353\u8bbe\u5907\u7edd\u5927\u591a\u6570\u662f ARM \u67b6\u6784\uff0c\u56e0\u6b64\u5bf9\u4e8e\u5927\u90e8\u5206\u5e94\u7528\u6765\u8bf4\u53ef\u4ee5\u8003\u8651\u53bb\u6389 x86 \u67b6\u6784\u7684\u652f\u6301\uff08\u4f46\u662f\u8bf7\u6ce8\u610f\u6a21\u62df\u5668\u5927\u90e8\u5206\u662f x86 \u67b6\u6784\uff0c\u56e0\u6b64\u53bb\u6389 x86 \u67b6\u6784\u540e\u5c06\u65e0\u6cd5\u5728\u6a21\u62df\u5668\u4e0a\u8fd0\u884c\uff09\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728",(0,d.jsx)(n.code,{children:"android/app/build.gradle"}),"\u4e2d\u4fee\u6539\u5982\u4e0b\u4ee3\u7801\uff08false \u6539\u4e3a true\uff09\u6765\u751f\u6210\u591a\u4e2a\u9488\u5bf9\u4e0d\u540c CPU \u67b6\u6784\u7684 APK\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-diff",children:'- ndk {\n-   abiFilters "armeabi-v7a", "x86"\n- }\n- def enableSeparateBuildPerCPUArchitecture = false\n+ def enableSeparateBuildPerCPUArchitecture = true\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u628a\u8fd9\u4e0a\u9762\u6253\u5305\u751f\u6210\u7684\u591a\u4e2a APK \u90fd\u4e0a\u4f20\u5230\u652f\u6301\u5bf9\u7528\u6237\u8bbe\u5907 CPU \u67b6\u6784\u5b9a\u4f4d\u7684\u5e94\u7528\u7a0b\u5e8f\u5546\u5e97\uff0c\u4f8b\u5982 Google Play \u548c Amazon AppStore\uff0c\u7528\u6237\u5c06\u81ea\u52a8\u83b7\u5f97\u76f8\u5e94\u7684 APK\u3002\u5982\u679c\u60a8\u60f3\u4e0a\u4f20\u5230\u5176\u4ed6\u5e02\u573a\uff0c\u4f8b\u5982 APKFiles\uff08\u4e0d\u652f\u6301\u4e00\u4e2a\u5e94\u7528\u6709\u591a\u4e2a APK \u6587\u4ef6\uff09\uff0c\u53ef\u4ee5\u4fee\u6539\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6765\u989d\u5916\u751f\u6210\u4e00\u4e2a\u9002\u7528\u4e0d\u540c CPU \u67b6\u6784\u7684\u901a\u7528 APK\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-diff",children:"- universalApk false\n+ universalApk true  // \u989d\u5916\u751f\u6210\u4e00\u4e2a\u9002\u7528\u4e0d\u540cCPU\u67b6\u6784\u7684\u901a\u7528APK\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u542f\u7528-proguard-\u6765\u51cf\u5c11-apk-\u7684\u5927\u5c0f\u53ef\u9009",children:"\u542f\u7528 Proguard \u6765\u51cf\u5c11 apk \u7684\u5927\u5c0f\uff08\u53ef\u9009\uff09"}),"\n",(0,d.jsx)(n.p,{children:"Proguard \u662f\u4e00\u4e2a Java \u5b57\u8282\u7801\u6df7\u6dc6\u538b\u7f29\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u79fb\u9664\u6389 React Native Java\uff08\u548c\u5b83\u7684\u4f9d\u8d56\u5e93\u4e2d\uff09\u4e2d\u6ca1\u6709\u88ab\u4f7f\u7528\u5230\u7684\u90e8\u5206\uff0c\u6700\u7ec8\u6709\u6548\u7684\u51cf\u5c11 APK \u7684\u5927\u5c0f\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u91cd\u8981"}),"\uff1a\u542f\u7528 Proguard \u4e4b\u540e\uff0c\u4f60\u5fc5\u987b\u518d\u6b21\u5168\u9762\u5730\u6d4b\u8bd5\u4f60\u7684\u5e94\u7528\u3002Proguard \u6709\u65f6\u5019\u9700\u8981\u4e3a\u4f60\u5f15\u5165\u7684\u6bcf\u4e2a\u539f\u751f\u5e93\u505a\u4e00\u4e9b\u989d\u5916\u7684\u914d\u7f6e\u3002\u53c2\u89c1",(0,d.jsx)(n.code,{children:"app/proguard-rules.pro"}),"\u6587\u4ef6\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u8981\u542f\u7528 Proguard\uff0c\u4fee\u6539",(0,d.jsx)(n.code,{children:"android/app/build.gradle"}),"\u6587\u4ef6\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-gradle",children:"/**\n * Run Proguard to shrink the Java bytecode in release builds.\n */\ndef enableProguardInReleaseBuilds = true\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u751f\u6210\u53d1\u884c-aab-\u5305",children:"\u751f\u6210\u53d1\u884c AAB \u5305"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c\u4e0b\u5217\u547d\u4ee4\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"cd android\n./gradlew bundleRelease\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Gradle \u7684",(0,d.jsx)(n.code,{children:"bundleRelease"}),"\u53c2\u6570\u4f1a\u628a\u6240\u6709\u7528\u5230\u7684 JavaScript \u4ee3\u7801\u90fd\u6253\u5305\u5230\u4e00\u8d77\uff0c\u7136\u540e\u5185\u7f6e\u5230 AAB \u5305(",(0,d.jsx)(n.a,{href:"https://developer.android.com/guide/app-bundle",children:"Android App Bundle"}),")\u4e2d\u3002\u5982\u679c\u4f60\u60f3\u8c03\u6574\u4e0b\u8fd9\u4e2a\u884c\u4e3a\uff08\u6bd4\u5982 js \u4ee3\u7801\u4ee5\u53ca\u9759\u6001\u8d44\u6e90\u6253\u5305\u7684\u9ed8\u8ba4\u6587\u4ef6\u540d\u6216\u662f\u76ee\u5f55\u7ed3\u6784\u7b49\uff09\uff0c\u53ef\u4ee5\u770b\u770b",(0,d.jsx)(n.code,{children:"android/app/build.gradle"}),"\u6587\u4ef6\uff0c\u7136\u540e\u7422\u78e8\u4e0b\u5e94\u8be5\u600e\u4e48\u4fee\u6539\u4ee5\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u8bf7\u786e\u4fdd gradle.properties \u4e2d",(0,d.jsx)(n.code,{children:"\u6ca1\u6709"}),"\u5305\u542b",(0,d.jsx)(n.code,{children:"_org.gradle.configureondemand=true_"}),"\uff0c\u5426\u5219\u4f1a\u8df3\u8fc7 js \u6253\u5305\u7684\u6b65\u9aa4\uff0c\u5bfc\u81f4\u6700\u7ec8\u751f\u6210\u7684\u662f\u4e00\u4e2a\u65e0\u6cd5\u8fd0\u884c\u7684\u7a7a\u58f3\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u751f\u6210\u7684 AAB \u6587\u4ef6\u4f4d\u4e8e",(0,d.jsx)(n.code,{children:"android/app/build/outputs/bundle/release/app-release.aab"}),"\uff0c\u5b83\u5df2\u7ecf\u53ef\u4ee5\u7528\u6765\u4e0a\u4f20\u5230 Google Play \u5e02\u573a\u4e86\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["In order for Google Play to accept AAB format the App Signing by Google Play needs to be configured for your application on the Google Play Console. If you are updating an existing app that doesn't use App Signing by Google Play, please check our ",(0,d.jsx)(n.a,{href:"#migrating-old-android-react-native-apps-to-use-app-signing-by-google-play",children:"migration section"})," to learn how to perform that configuration change."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}},71426:(e,n,r)=>{var d=r(27378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var d,a={},c=null,t=null;for(d in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(t=n.ref),n)l.call(n,d)&&!o.hasOwnProperty(d)&&(a[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===a[d]&&(a[d]=n[d]);return{$$typeof:s,type:e,key:c,ref:t,props:a,_owner:i.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},24246:(e,n,r)=>{e.exports=r(71426)},71670:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>a});var d=r(27378);const s=d.createContext({});function a(e){const n=d.useContext(s);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||l:a(e),d.createElement(s.Provider,{value:i},n)}}}]);