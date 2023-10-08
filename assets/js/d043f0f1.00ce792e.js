/*! For license information please see d043f0f1.00ce792e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51257],{17121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(24246),o=n(71670);const s={id:"app-extensions",title:"iOS\u5e94\u7528\u6269\u5c55"},a=void 0,r={unversionedId:"app-extensions",id:"version-0.70/app-extensions",title:"iOS\u5e94\u7528\u6269\u5c55",description:"App extensions let you provide custom functionality and content outside of your main app. There are different types of app extensions on iOS, and they are all covered in the App Extension Programming Guide. In this guide, we'll briefly cover how you may take advantage of app extensions on iOS.",source:"@site/versioned_docs/version-0.70/app-extensions.md",sourceDirName:".",slug:"/app-extensions",permalink:"/docs/0.70/app-extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/app-extensions.md",tags:[],version:"0.70",frontMatter:{id:"app-extensions",title:"iOS\u5e94\u7528\u6269\u5c55"},sidebar:"docs",previous:{title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",permalink:"/docs/0.70/communication-ios"},next:{title:"\u4e0a\u67b6 App Store",permalink:"/docs/0.70/publishing-to-app-store"}},l={},d=[{value:"Memory use in extensions",id:"memory-use-in-extensions",level:2},{value:"Today widget",id:"today-widget",level:3},{value:"Other app extensions",id:"other-app-extensions",level:3}];function p(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",img:"img"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["App extensions let you provide custom functionality and content outside of your main app. There are different types of app extensions on iOS, and they are all covered in the ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214-CH20-SW1",children:"App Extension Programming Guide"}),". In this guide, we'll briefly cover how you may take advantage of app extensions on iOS."]}),"\n",(0,i.jsx)(t.h2,{id:"memory-use-in-extensions",children:"Memory use in extensions"}),"\n",(0,i.jsx)(t.p,{children:"As these extensions are loaded outside of the regular app sandbox, it's highly likely that several of these app extensions will be loaded simultaneously. As you might expect, these extensions have small memory usage limits. Keep these in mind when developing your app extensions. It's always highly recommended to test your application on an actual device, and more so when developing app extensions: too frequently, developers find that their extension works fine in the iOS Simulator, only to get user reports that their extension is not loading on actual devices."}),"\n",(0,i.jsxs)(t.p,{children:["We highly recommend that you watch Conrad Kramer's talk on ",(0,i.jsx)(t.a,{href:"https://cocoaheads.tv/memory-use-in-extensions-by-conrad-kramer/",children:"Memory Use in Extensions"})," to learn more about this topic."]}),"\n",(0,i.jsx)(t.h3,{id:"today-widget",children:"Today widget"}),"\n",(0,i.jsx)(t.p,{children:"The memory limit of a Today widget is 16 MB. As it happens, Today widget implementations using React Native may work unreliably because the memory usage tends to be too high. You can tell if your Today widget is exceeding the memory limit if it yields the message 'Unable to Load':"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(78565).Z+"",width:"1242",height:"497"})}),"\n",(0,i.jsxs)(t.p,{children:["Always make sure to test your app extensions in a real device, but be aware that this may not be sufficient, especially when dealing with Today widgets. Debug-configured builds are more likely to exceed the memory limits, while release-configured builds don't fail right away. We highly recommend that you use ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/index.html",children:"Xcode's Instruments"})," to analyze your real world memory usage, as it's very likely that your release-configured build is very close to the 16 MB limit. In situations like these, you can quickly go over the 16 MB limit by performing common operations, such as fetching data from an API."]}),"\n",(0,i.jsxs)(t.p,{children:["To experiment with the limits of React Native Today widget implementations, try extending the example project in ",(0,i.jsx)(t.a,{href:"https://github.com/matejkriz/react-native-today-widget/",children:"react-native-today-widget"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"other-app-extensions",children:"Other app extensions"}),"\n",(0,i.jsxs)(t.p,{children:["Other types of app extensions have greater memory limits than the Today widget. For instance, Custom Keyboard extensions are limited to 48 MB, and Share extensions are limited to 120 MB. Implementing such app extensions with React Native is more viable. One proof of concept example is ",(0,i.jsx)(t.a,{href:"https://github.com/andrewsardone/react-native-ios-share-extension",children:"react-native-ios-share-extension"}),"."]})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(p,e)})):p(e)}},71426:(e,t,n)=>{var i=n(27378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,s={},d=null,p=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:p,props:s,_owner:r.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},24246:(e,t,n)=>{e.exports=n(71426)},78565:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/TodayWidgetUnableToLoad-b931f8be6eeb72c037338b9ab9766477.jpg"},71670:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>s});var i=n(27378);const o=i.createContext({});function s(e){const t=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:s(e),i.createElement(o.Provider,{value:r},t)}}}]);