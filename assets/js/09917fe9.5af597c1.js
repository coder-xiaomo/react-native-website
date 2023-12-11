/*! For license information please see 09917fe9.5af597c1.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[77819],{69062:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=n(24246),r=n(71670);const t={id:"linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93"},c=void 0,d={id:"linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93",description:"\u5e76\u4e0d\u662f\u6240\u6709\u7684 APP \u90fd\u9700\u8981\u4f7f\u7528\u5168\u90e8\u7684\u539f\u751f\u529f\u80fd\uff0c\u5305\u542b\u652f\u6301\u5168\u90e8\u7279\u6027\u7684\u4ee3\u7801\u4f1a\u589e\u5927\u5e94\u7528\u7684\u4f53\u79ef\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u5e0c\u671b\u80fd\u8ba9\u4f60\u7b80\u5355\u5730\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6dfb\u52a0\u9700\u8981\u7684\u7279\u6027\u3002",source:"@site/../cndocs/linking-libraries-ios.md",sourceDirName:".",slug:"/linking-libraries-ios",permalink:"/docs/next/linking-libraries-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/linking-libraries-ios.md",tags:[],version:"current",frontMatter:{id:"linking-libraries-ios",title:"\u94fe\u63a5\u539f\u751f\u5e93"},sidebar:"docs",previous:{title:"React Native Gradle Plugin",permalink:"/docs/next/react-native-gradle-plugin"},next:{title:"\u5728iOS\u6a21\u62df\u5668\u4e0a\u8fd0\u884c",permalink:"/docs/next/running-on-simulator-ios"}},a={},l=[{value:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4\uff1a",id:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4",level:2},{value:"\u81ea\u52a8\u94fe\u63a5",id:"\u81ea\u52a8\u94fe\u63a5",level:3},{value:"\u624b\u52a8\u94fe\u63a5",id:"\u624b\u52a8\u94fe\u63a5",level:3},{value:"\u7b2c\u4e00\u6b65",id:"\u7b2c\u4e00\u6b65",level:4},{value:"\u7b2c\u4e8c\u6b65",id:"\u7b2c\u4e8c\u6b65",level:4},{value:"\u7b2c\u4e09\u6b65",id:"\u7b2c\u4e09\u6b65",level:4}];function o(e){const i=Object.assign({p:"p",em:"em",code:"code",h2:"h2",h3:"h3",pre:"pre",admonition:"admonition",a:"a",h4:"h4",img:"img"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"\u5e76\u4e0d\u662f\u6240\u6709\u7684 APP \u90fd\u9700\u8981\u4f7f\u7528\u5168\u90e8\u7684\u539f\u751f\u529f\u80fd\uff0c\u5305\u542b\u652f\u6301\u5168\u90e8\u7279\u6027\u7684\u4ee3\u7801\u4f1a\u589e\u5927\u5e94\u7528\u7684\u4f53\u79ef\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u5e0c\u671b\u80fd\u8ba9\u4f60\u7b80\u5355\u5730\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6dfb\u52a0\u9700\u8981\u7684\u7279\u6027\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u8fd9\u79cd\u601d\u60f3\u4e0b\uff0c\u6211\u4eec\u628a\u8bb8\u591a\u7279\u6027\u90fd\u53d1\u5e03\u6210\u4e3a\u4e92\u4e0d\u76f8\u5173\u7684\u9759\u6001\u5e93\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5927\u90e8\u5206\u7684\u5e93\u53ea\u9700\u8981\u62d6\u8fdb\u4e24\u4e2a\u6587\u4ef6\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\uff0c\u5076\u5c14\u4f60\u8fd8\u9700\u8981\u51e0\u6b65\u989d\u5916\u7684\u5de5\u4f5c\uff0c\u4f46\u4e0d\u4f1a\u518d\u6709\u66f4\u591a\u7684\u4e8b\u60c5\u8981\u505a\u4e86\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.em,{children:["\u6211\u4eec\u968f\u7740 React Native \u53d1\u5e03\u7684\u6240\u6709\u5e93\u90fd\u5728\u4ed3\u5e93\u4e2d\u7684",(0,s.jsx)(i.code,{children:"Libraries"}),"\u6587\u4ef6\u5939\u4e0b\u3002\u5176\u4e2d\u6709\u4e00\u4e9b\u662f\u7eaf Javascript \u4ee3\u7801\uff0c\u4f60\u53ea\u9700\u8981\u53bb",(0,s.jsx)(i.code,{children:"import"}),"\u5b83\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002\u53e6\u5916\u6709\u4e00\u4e9b\u5e93\u57fa\u4e8e\u4e00\u4e9b\u539f\u751f\u4ee3\u7801\u5b9e\u73b0\uff0c\u4f60\u5fc5\u987b\u628a\u8fd9\u4e9b\u6587\u4ef6\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\uff0c\u5426\u5219\u5e94\u7528\u4f1a\u5728\u4f60\u4f7f\u7528\u8fd9\u4e9b\u5e93\u7684\u65f6\u5019\u4ea7\u751f\u62a5\u9519\u3002"]})}),"\n",(0,s.jsx)(i.h2,{id:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4",children:"\u6dfb\u52a0\u5305\u542b\u539f\u751f\u4ee3\u7801\u7684\u5e93\u9700\u8981\u51e0\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsx)(i.h3,{id:"\u81ea\u52a8\u94fe\u63a5",children:"\u81ea\u52a8\u94fe\u63a5"}),"\n",(0,s.jsx)(i.p,{children:"\u5b89\u88c5\u67d0\u4e2a\u5e26\u539f\u751f\u4f9d\u8d56\u7684\u5e93\uff1a"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"$ npm install \u67d0\u4e2a\u5e26\u6709\u539f\u751f\u4f9d\u8d56\u7684\u5e93\n"})}),"\n",(0,s.jsx)(i.admonition,{title:"\u63d0\u793a",type:"info",children:(0,s.jsxs)(i.p,{children:["React Native will link your libs based on ",(0,s.jsx)(i.code,{children:"dependencies"})," and ",(0,s.jsx)(i.code,{children:"devDependencies"})," in your ",(0,s.jsx)(i.code,{children:"package.json"})," file."]})}),"\n",(0,s.jsxs)(i.p,{children:["That's it! Next time you build your app the native code will be linked thanks to the ",(0,s.jsx)(i.a,{href:"https://github.com/react-native-community/cli/blob/main/docs/autolinking.md",children:"autolinking"})," mechanism."]}),"\n",(0,s.jsx)(i.h3,{id:"\u624b\u52a8\u94fe\u63a5",children:"\u624b\u52a8\u94fe\u63a5"}),"\n",(0,s.jsx)(i.h4,{id:"\u7b2c\u4e00\u6b65",children:"\u7b2c\u4e00\u6b65"}),"\n",(0,s.jsxs)(i.p,{children:["\u5982\u679c\u8be5\u5e93\u5305\u542b\u539f\u751f\u4ee3\u7801\uff0c\u90a3\u4e48\u5728\u5b83\u7684\u6587\u4ef6\u5939\u4e0b\u4e00\u5b9a\u6709\u4e00\u4e2a",(0,s.jsx)(i.code,{children:".xcodeproj"}),"\u6587\u4ef6\u3002\u628a\u8fd9\u4e2a\u6587\u4ef6\u62d6\u5230\u4f60\u7684 XCode \u5de5\u7a0b\u4e0b\uff08\u901a\u5e38\u62d6\u5230 XCode \u7684",(0,s.jsx)(i.code,{children:"Libraries"}),"\u5206\u7ec4\u91cc\uff09"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(21729).Z+"",width:"2560",height:"1552"})}),"\n",(0,s.jsx)(i.h4,{id:"\u7b2c\u4e8c\u6b65",children:"\u7b2c\u4e8c\u6b65"}),"\n",(0,s.jsxs)(i.p,{children:["\u70b9\u51fb\u4f60\u7684\u4e3b\u5de5\u7a0b\u6587\u4ef6\uff0c\u9009\u62e9",(0,s.jsx)(i.code,{children:"Build Phases"}),"\uff0c\u7136\u540e\u628a\u521a\u624d\u6240\u6dfb\u52a0\u8fdb\u53bb\u7684",(0,s.jsx)(i.code,{children:".xcodeproj"}),"\u4e0b\u7684",(0,s.jsx)(i.code,{children:"Products"}),"\u6587\u4ef6\u5939\u4e2d\u7684\u9759\u6001\u5e93\u6587\u4ef6\uff08.a \u6587\u4ef6\uff09\uff0c\u62d6\u5230",(0,s.jsx)(i.code,{children:"Link Binary With Libraries"}),"\u7ec4\u5185\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(83169).Z+"",width:"2560",height:"1564"})}),"\n",(0,s.jsx)(i.h4,{id:"\u7b2c\u4e09\u6b65",children:"\u7b2c\u4e09\u6b65"}),"\n",(0,s.jsx)(i.p,{children:"\u4e0d\u662f\u6240\u6709\u7684\u5e93\u90fd\u9700\u8981\u8fdb\u884c\u8fd9\u4e2a\u6b65\u9aa4\uff0c\u4f60\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\u5728\u4e8e\uff1a"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.em,{children:"\u6211\u9700\u8981\u5728\u7f16\u8bd1\u7684\u671f\u95f4\u4e86\u89e3\u5e93\u7684\u5185\u5bb9\u5417\uff1f"})}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u4e2a\u95ee\u9898\u7684\u610f\u601d\u662f\uff0c\u4f60\u662f\u9700\u8981\u5728\u539f\u751f\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u5e93\uff0c\u8fd8\u662f\u53ea\u9700\u8981\u901a\u8fc7 JavaScript \u8bbf\u95ee\uff1f\u5982\u679c\u4f60\u53ea\u9700\u8981\u901a\u8fc7 JavaScript \u8bbf\u95ee\u8fd9\u4e2a\u5e93\uff0c\u4f60\u5c31\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u6b65\u4e86\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u4e00\u6b65\u9aa4\u5bf9\u4e8e\u6211\u4eec\u968f React Native \u53d1\u5e03\u7684\u5927\u90e8\u5206\u5e93\u6765\u8bf4\u90fd\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4f46\u6709\u4e24\u4e2a\u4f8b\u5916\u662f",(0,s.jsx)(i.code,{children:"PushNotificationIOS"}),"\u548c",(0,s.jsx)(i.code,{children:"LinkingIOS"}),"\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u4ee5",(0,s.jsx)(i.code,{children:"PushNotificationIOS"}),"\u4e3a\u4f8b\uff0c\u4f60\u9700\u8981\u5728",(0,s.jsx)(i.code,{children:"AppDelegate"}),"\u6bcf\u6536\u5230\u4e00\u6761\u63a8\u9001\u901a\u77e5\u4e4b\u540e\uff0c\u8c03\u7528\u5e93\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u9700\u8981\u80fd\u591f\u8bbf\u95ee\u5230\u5e93\u7684\u5934\u6587\u4ef6\u3002\u4e3a\u4e86\u80fd\u591f\u987a\u5229\u6253\u5305\uff0c\u4f60\u9700\u8981\u6253\u5f00\u4f60\u7684\u5de5\u7a0b\u6587\u4ef6\uff0c\u9009\u62e9",(0,s.jsx)(i.code,{children:"Build Settings"}),"\uff0c\u7136\u540e\u641c\u7d22",(0,s.jsx)(i.code,{children:"Header Search Paths"}),"\uff0c\u7136\u540e\u6dfb\u52a0\u5e93\u6240\u5728\u7684\u76ee\u5f55\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:n(11814).Z+"",width:"2706",height:"1708"})})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,r.ah)(),e.components);return i?(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},71426:(e,i,n)=>{var s=n(27378),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var s,t={},l=null,o=null;for(s in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(o=i.ref),i)c.call(i,s)&&!a.hasOwnProperty(s)&&(t[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===t[s]&&(t[s]=i[s]);return{$$typeof:r,type:e,key:l,ref:o,props:t,_owner:d.current}}i.Fragment=t,i.jsx=l,i.jsxs=l},24246:(e,i,n)=>{e.exports=n(71426)},83169:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/AddToBuildPhases-3e79422ff24780db618eae2d7a5ea604.png"},21729:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/AddToLibraries-92a6a7f58c75a8344d9bbeeae4ac167b.png"},11814:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/images/AddToSearchPaths-7b278a6ea5ef28cfa94e8d22da5a8b13.png"},71670:(e,i,n)=>{n.d(i,{Zo:()=>d,ah:()=>t});var s=n(27378);const r=s.createContext({});function t(e){const i=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const c={};function d({components:e,children:i,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||c:t(e),s.createElement(r.Provider,{value:d},i)}}}]);