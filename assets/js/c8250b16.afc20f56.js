/*! For license information please see c8250b16.afc20f56.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[81595],{61475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(24246),r=a(71670),l=a(48375),s=a(86386),o=a(11674);const i={id:"getting-started",title:"\u7b80\u4ecb"},c=void 0,d={unversionedId:"getting-started",id:"getting-started",title:"\u7b80\u4ecb",description:"\u6b22\u8fce\u5f00\u542f React Native \u7684\u65c5\u7a0b\uff01\u5982\u679c\u4f60\u5728\u627e\u5982\u4f55\u642d\u5efa\u73af\u5883\u7684\u6587\u6863\uff0c\u8bf7\u79fb\u6b65\u642d\u5efa\u5f00\u53d1\u73af\u5883\u3002 \u7ee7\u7eed\u5f80\u4e0b\u9605\u8bfb\u53ef\u4e86\u89e3\u5173\u4e8e\u6587\u6863\u7ed3\u6784\u3001\u539f\u751f\u7ec4\u4ef6\u3001React\u7b49\u76f8\u5173\u7684\u4e00\u4e9b\u4ecb\u7ecd\u3002",source:"@site/../cndocs/introduction.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/next/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/introduction.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"\u7b80\u4ecb"},sidebar:"docs",next:{title:"\u6838\u5fc3\u7ec4\u4ef6\u4e0e\u539f\u751f\u7ec4\u4ef6",permalink:"/docs/next/intro-react-native-components"}},u={},p=[{value:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863",id:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863",level:2},{value:"\u9884\u5907\u77e5\u8bc6",id:"\u9884\u5907\u77e5\u8bc6",level:2},{value:"\u4ea4\u4e92\u793a\u4f8b",id:"\u4ea4\u4e92\u793a\u4f8b",level:2},{value:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e Class \u7ec4\u4ef6",id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e-class-\u7ec4\u4ef6",level:2},{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",level:2},{value:"\u7279\u6b8a\u683c\u5f0f",id:"\u7279\u6b8a\u683c\u5f0f",level:2}];function f(e){const t=Object.assign({p:"p",h2:"h2",a:"a",blockquote:"blockquote",div:"div",code:"code",strong:"strong",hr:"hr"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"content-banner",children:[(0,n.jsxs)(t.p,{children:["\u6b22\u8fce\u5f00\u542f React Native \u7684\u65c5\u7a0b\uff01\u5982\u679c\u4f60\u5728\u627e\u5982\u4f55\u642d\u5efa\u73af\u5883\u7684\u6587\u6863\uff0c\u8bf7\u79fb\u6b65",(0,n.jsx)("a",{href:"environment-setup",children:"\u642d\u5efa\u5f00\u53d1\u73af\u5883"}),"\u3002 \u7ee7\u7eed\u5f80\u4e0b\u9605\u8bfb\u53ef\u4e86\u89e3\u5173\u4e8e\u6587\u6863\u7ed3\u6784\u3001\u539f\u751f\u7ec4\u4ef6\u3001React\u7b49\u76f8\u5173\u7684\u4e00\u4e9b\u4ecb\u7ecd\u3002"]}),(0,n.jsx)("img",{className:"content-banner-img",src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/p_android-ios-devices.svg",alt:" "})]}),"\n",(0,n.jsx)(t.p,{children:"\u8bb8\u591a\u4e0d\u540c\u7c7b\u578b\u7684\u4eba\u90fd\u5728\u4f7f\u7528 React Native\uff1a\u4ece\u9ad8\u7ea7 iOS \u5f00\u53d1\u4eba\u5458\u5230 React \u521d\u5b66\u8005\uff0c\u518d\u5230\u804c\u4e1a\u751f\u6daf\u4e2d\u7b2c\u4e00\u6b21\u5f00\u59cb\u7f16\u7a0b\u7684\u4eba\u3002\u8fd9\u4e9b\u6587\u6863\u662f\u4e3a\u6240\u6709\u5b66\u4e60\u8005\u7f16\u5199\u7684\uff0c\u65e0\u8bba\u4ed6\u4eec\u7684\u7ecf\u9a8c\u6c34\u5e73\u6216\u80cc\u666f\u5982\u4f55\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863",children:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863"}),"\n",(0,n.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u4ece\u8fd9\u91cc\u5f00\u59cb\uff0c\u50cf\u770b\u4e66\u4e00\u6837\u7ebf\u6027\u9605\u8bfb\u8fd9\u4e9b\u6587\u6863\uff1b\u4e5f\u53ef\u4ee5\u9605\u8bfb\u4f60\u9700\u8981\u7684\u7279\u5b9a\u90e8\u5206\u3002\u5df2\u7ecf\u719f\u6089 React \u4e86\u5417\uff1f\u4f60\u53ef\u4ee5\u8df3\u8fc7",(0,n.jsx)(t.a,{href:"intro-react",children:"\u8be5\u90e8\u5206"}),"--\u6216\u8005\u9605\u8bfb\u5b83\u6765\u8fdb\u884c\u7b80\u5355\u7684\u590d\u4e60\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u9884\u5907\u77e5\u8bc6",children:"\u9884\u5907\u77e5\u8bc6"}),"\n",(0,n.jsxs)(t.p,{children:["\u8981\u4f7f\u7528 React Native\uff0c\u4f60\u9700\u8981\u5bf9 JavaScript \u57fa\u7840\u77e5\u8bc6\u6709\u6240\u4e86\u89e3\u3002\u5982\u679c\u4f60\u662f JavaScript \u65b0\u624b\u6216\u9700\u8981\u590d\u4e60\uff0c\u4f60\u53ef\u4ee5\u5728 MDN \u4e0a",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",children:"\u6df1\u5165\u5b66\u4e60"}),"\u6216",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript",children:"\u590d\u4e60\u4e00\u4e0b"}),"\u3002"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u867d\u7136\u6211\u4eec\u5c3d\u6700\u5927\u52aa\u529b\u5047\u8bbe\u8bfb\u8005\u5728\u8fd9\u4e4b\u524d\u6ca1\u6709\u592a\u591a React\u3001Android \u6216 iOS \u5f00\u53d1\u7684\u77e5\u8bc6\uff0c\u4f46\u5bf9\u4e8e\u6709\u62b1\u8d1f\u7684 React Native \u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u8fd9\u4e9b\u90fd\u662f\u6709\u4ef7\u503c\u7684\u5b66\u4e60\u4e3b\u9898\u3002\u6211\u4eec\u4f1a\u5c3d\u53ef\u80fd\u5730\u63d0\u4f9b\u6df1\u5165\u4e86\u89e3\u7684\u76f8\u5173\u6587\u7ae0\u94fe\u63a5\u3002"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u4ea4\u4e92\u793a\u4f8b",children:"\u4ea4\u4e92\u793a\u4f8b"}),"\n",(0,n.jsx)(t.p,{children:"\u6587\u6863\u4e2d\u65f6\u5e38\u4f1a\u9644\u6709\u4e00\u4e9b\u53ef\u4ee5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u4ea4\u4e92\u793a\u4f8b\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,n.jsx)(t.div,{class:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20YourApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20Try%20editing%20me!%20%F0%9F%8E%89%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20YourApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,n.jsx)(t.p,{children:"\u4e0a\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u4e86\u4e00\u4e2a\u53eb\u505a Snack Player \u7684\u5de5\u5177\uff08\u6211\u4eec\u4e5f\u4f1a\u7528\u201c\u6c99\u76d2\u73af\u5883\u201d\u4ee3\u6307\uff09\u3002\u8fd9\u662f\u7531 Expo \u516c\u53f8\u63d0\u4f9b\u7684\u4e13\u95e8\u7528\u4e8e\u6f14\u793a\u3001\u5b66\u4e60 React Native \u7684\u4ea4\u4e92\u5de5\u5177\u3002\u5b83\u96c6\u6210\u4e86 react-native-web \u517c\u5bb9\u5c42\uff0c\u4f1a\u5c3d\u53ef\u80fd\u628a React Native \u7684\u4ee3\u7801\u8f6c\u5316\u4e3a\u517c\u5bb9\u7684\u7f51\u9875\u6765\u8fd0\u884c\uff08\u5f53\u7136\u4f1a\u6709\u65e0\u6cd5\u8f6c\u5316\u7684\u60c5\u51b5\uff0c\u90a3\u79cd\u60c5\u51b5\u4e0b\u5219\u5fc5\u987b\u4f7f\u7528\u6a21\u62df\u5668\u6216\u8005\u624b\u673a\u6765\u8fd0\u884c\uff09\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u548c\u8fd0\u884c\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5728\u91cc\u9762\u76f4\u63a5\u7ec3\u4e60\u3002\u8bd5\u7740\u6539\u4e0b\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\u6587\u5b57\u770b\u770b\u6548\u679c\u5427\uff01"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\u6c99\u76d2\u73af\u5883\u901a\u5e38\u53ea\u7528\u4e8e\u7b80\u5355\u7684\u6f14\u793a\u3001\u5b66\u4e60\u9879\u76ee\uff0c\u5b83\u65e0\u6cd5\u6dfb\u52a0\u65b0\u7684\u539f\u751f\u6a21\u5757\u3002\u6240\u4ee5\u5bf9\u4e8e\u6b63\u5f0f\u7684\u9879\u76ee\uff0c\u6211\u4eec\u5efa\u8bae",(0,n.jsx)(t.a,{href:"environment-setup",children:"\u642d\u5efa\u5b8c\u6574\u7684\u539f\u751f\u73af\u5883"})," \u3002\u4e0a\u9762\u7684\u4ee3\u7801\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u5230\u5b8c\u6574\u9879\u76ee\u7684",(0,n.jsx)(t.code,{children:"App.js"}),"\u6587\u4ef6\u4e2d\u6765\u8fd0\u884c\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e-class-\u7ec4\u4ef6",children:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e Class \u7ec4\u4ef6"}),"\n",(0,n.jsx)(t.p,{children:"\u4f60\u53ef\u4ee5\u5728 React \u4e2d\u4f7f\u7528\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6216 Class \u7ec4\u4ef6\u3002\u6700\u5f00\u59cb\u53ea\u6709 Class \u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528 state \uff0c\u4f46\u81ea\u4ece\u6709\u4e86 React Hooks API, \u4f60\u53ef\u4ee5\u4e3a\u51fd\u6570\u7ec4\u4ef6\u6dfb\u52a0 state \u548c\u5f88\u591a\u5176\u5b83\u7684\u529f\u80fd\u3002"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://zh-hans.reactjs.org/docs/hooks-intro.html",children:"Hooks API \u662f React Native 0.59 \u63d0\u4f9b\u7684\u65b0\u7279\u6027"}),", Hooks \u662f\u4e00\u79cd\u9762\u5411\u672a\u6765\u7684\u7f16\u5199 React \u7ec4\u4ef6\u7684\u65b9\u5f0f\uff0c\u56e0\u6b64\u6211\u4eec\u5728\u672c\u6587\u6863\u4e2d\u4f18\u5148\u4f7f\u7528\u51fd\u6570\u7ec4\u4ef6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u70b9\u51fb\u201cClass \u7ec4\u4ef6\u201d\u5207\u6362\u5230 Class \u7ec4\u4ef6\u4ee3\u7801\uff1a"]}),"\n",(0,n.jsxs)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,n.jsx)(s.Z,{value:"functional",children:(0,n.jsx)(t.div,{class:"snack-player","data-snack-name":"Hello World Function Component","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20HelloWorldApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20%20%20%20%20alignItems%3A%20'center'%5Cn%20%20%20%20%20%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20HelloWorldApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,n.jsx)(s.Z,{value:"classical",children:(0,n.jsx)(t.div,{class:"snack-player","data-snack-name":"Hello World Class Component","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20HelloWorldApp%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnexport%20default%20HelloWorldApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,n.jsx)(t.h2,{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",children:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"}),"\n",(0,n.jsx)(t.p,{children:"\u5b66\u4e60 React Native \u7684\u5f00\u53d1\u8005\u62e5\u6709\u4e0d\u540c\u7684\u5f00\u53d1\u80cc\u666f\uff0c\u4f60\u6216\u8bb8\u6709\u5f88\u591a\u6280\u672f\u7ecf\u9a8c\uff0c\u5305\u62ec Android\u3001iOS \u7b49\u7b49\uff0c\u6211\u4eec\u5728\u7f16\u5199\u6587\u6863\u7684\u65f6\u5019\u52aa\u529b\u7167\u987e\u5230\u5177\u6709\u4e0d\u540c\u77e5\u8bc6\u80cc\u666f\u7684\u5f00\u53d1\u8005\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u4f1a\u4e13\u95e8\u9488\u5bf9\u7279\u5b9a\u7684\u5e73\u53f0\u63d0\u4f9b\u7279\u5b9a\u7684\u8bb2\u89e3:"}),"\n",(0,n.jsxs)(l.Z,{groupId:"guide",defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),children:[(0,n.jsx)(s.Z,{value:"web",children:(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Web \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002"}),"\n"]})}),(0,n.jsx)(s.Z,{value:"android",children:(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Android \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002"}),"\n"]})}),(0,n.jsx)(s.Z,{value:"ios",children:(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"iOS \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002"}),"\n"]})})]}),"\n",(0,n.jsx)(t.h2,{id:"\u7279\u6b8a\u683c\u5f0f",children:"\u7279\u6b8a\u683c\u5f0f"}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u4eec\u4f7f\u7528\u7c97\u4f53\u5b57\u6765\u63cf\u8ff0\u83dc\u5355\u8def\u5f84\uff0c\u4f7f\u7528\u201c>\u201d\u7b26\u53f7\u8fde\u63a5\u5b50\u83dc\u5355\uff0c\u6bd4\u5982\uff1a ",(0,n.jsx)(t.strong,{children:"Android Studio > Preferences"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["\u73b0\u5728\u8ba9\u6211\u4eec\u5f00\u59cb\u5b66\u4e60 React Native \u7684\u57fa\u7840\u77e5\u8bc6 ",(0,n.jsx)(t.a,{href:"/docs/next/intro-react-native-components",children:"\u6838\u5fc3\u7ec4\u4ef6\u4e0e\u539f\u751f\u7ec4\u4ef6"}),"."]})]})}const v=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},11674:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),r=a(38944);const l={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&d(e,a,t[a]);return e};function p({children:e,hidden:t,className:a}){return n.createElement("div",u({role:"tabpanel",className:(0,r.Z)(l.tabItem,a)},{hidden:t}),e)}},48375:(e,t,a)=>{a.d(t,{Z:()=>q});var n=a(27378),r=a(38944),l=a(12112),s=a(3620),o=a(69490),i=a(14953),c=a(27886),d=a(7106),u=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,C=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&m(e,a,t[a]);if(v)for(var a of v(t))h.call(t,a)&&m(e,a,t[a]);return e},x=(e,t)=>p(e,f(t));function g(e){var t,a;return null!=(a=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?a:[]}function y(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return g(e).map((({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function w({value:e,tabValues:t}){return t.some((t=>t.value===e))}function j({queryString:e=!1,groupId:t}){const a=(0,s.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace(x(C({},a.location),{search:t.toString()}))}),[r,a])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=y(e),[s,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){var a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!w({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(a=t.find((e=>e.default)))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,u]=j({queryString:a,groupId:r}),[p,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,d.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),v=(()=>{const e=null!=c?c:p;return w({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!w({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var E=a(14185);const O={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var D=Object.defineProperty,A=Object.defineProperties,S=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,_=(e,t,a)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,N=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&_(e,a,t[a]);if(B)for(var a of B(t))V.call(t,a)&&_(e,a,t[a]);return e},T=(e,t)=>A(e,S(t));function R({className:e,block:t,selectedValue:a,selectValue:s,tabValues:o}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},u=e=>{var t,a;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=null!=(t=i[a])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=null!=(a=i[t])?a:i[i.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>n.createElement("li",T(N({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>i.push(e),onKeyDown:u,onClick:d},l),{className:(0,r.Z)("tabs__item",O.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function P({lazy:e,children:t,selectedValue:a}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function Z(e){const t=k(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",O.tabList)},n.createElement(R,N(N({},e),t)),n.createElement(P,N(N({},e),t)))}function q(e){const t=(0,E.Z)();return n.createElement(Z,N({key:String(t)},e),g(e.children))}},71426:(e,t,a)=>{var n=a(27378),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,l={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:o.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},24246:(e,t,a)=>{e.exports=a(71426)},71670:(e,t,a)=>{a.d(t,{Zo:()=>o,ah:()=>l});var n=a(27378);const r=n.createContext({});function l(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||s:l(e),n.createElement(r.Provider,{value:o},t)}}}]);