/*! For license information please see 15800944.9d29dec6.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27594],{11159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(24246),a=n(71670),s=n(35405);const r={id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},i=void 0,c={unversionedId:"native-modules-setup",id:"version-0.70/native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e",description:"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find this guide useful.",source:"@site/versioned_docs/version-0.70/native-module-setup.md",sourceDirName:".",slug:"/native-modules-setup",permalink:"/docs/0.70/native-modules-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-module-setup.md",tags:[],version:"0.70",frontMatter:{id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},sidebar:"docs",previous:{title:"iOS \u539f\u751f\u6a21\u5757",permalink:"/docs/0.70/native-modules-ios"},next:{title:"Android \u539f\u751fUI\u7ec4\u4ef6",permalink:"/docs/0.70/native-components-android"}},l={},d=[];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",blockquote:"blockquote"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsxs)(t.p,{children:["Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find ",(0,o.jsx)(t.a,{href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry",children:"this guide"})," useful."]}),"\n",(0,o.jsxs)(t.p,{children:["To get set up with the basic project structure for a native module we will use the community tool called ",(0,o.jsx)(t.a,{href:"https://github.com/react-native-community/bob",children:"Bob"}),". You can go ahead further and dive deep into how that library works, but for our needs we will only execute the basic ",(0,o.jsx)(t.code,{children:"create"})," script:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"npx @react-native-community/bob create react-native-awesome-module\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Where ",(0,o.jsx)(t.code,{children:"react-native-awesome-module"})," is the name you would like for the new module. After doing this you will navigate into ",(0,o.jsx)(t.code,{children:"react-native-awesome-module"})," folder and bootstrap the example project by running:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"yarn bootstrap\n"})}),"\n",(0,o.jsx)(t.p,{children:"When the bootstrap is done, you will be able to start the example app by executing one of the following commands:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"# Android app\nyarn example android\n# iOS app\nyarn example ios\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When all steps above are done, you will be able to continue with ",(0,o.jsx)(t.a,{href:"native-modules-android",children:"Android Native Modules"})," or ",(0,o.jsx)(t.a,{href:"native-modules-ios",children:"iOS Native Modules"})," guides to add in some code."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["For a less opinionated setup, have a look at the third party tool ",(0,o.jsx)(t.a,{href:"https://github.com/brodybits/create-react-native-module",children:"create-react-native-module"}),"."]}),"\n"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}},35405:(e,t,n)=>{n.d(t,{ZP:()=>r});var o=n(24246),a=n(71670);function s(e){const t=Object.assign({admonition:"admonition",p:"p",a:"a"},(0,a.ah)(),e.components);return(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ",(0,o.jsx)(t.a,{href:"./the-new-architecture/pillars-turbomodules",children:"TurboModule"})," and ",(0,o.jsx)(t.a,{href:"./the-new-architecture/pillars-fabric-components",children:"Fabric Components"})," to achieve similar results."]})})}const r=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(s,e)})):s(e)}},71426:(e,t,n)=>{var o=n(27378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,s={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,o)&&!c.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var o=n(27378);const a=o.createContext({});function s(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:s(e),o.createElement(a.Provider,{value:i},t)}}}]);