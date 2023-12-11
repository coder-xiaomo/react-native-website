/*! For license information please see 97b28733.756a7bd0.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[59851],{35569:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(24246),r=t(71670);const o={id:"speeding-ci-builds",title:"\u4f18\u5316 CI \u6784\u5efa"},s=void 0,a={id:"speeding-ci-builds",title:"\u4f18\u5316 CI \u6784\u5efa",description:"You or your company may have set up a Continuous Integration (CI) environment to test your React Native application.",source:"@site/versioned_docs/version-0.72/speeding-ci-builds.md",sourceDirName:".",slug:"/speeding-ci-builds",permalink:"/docs/0.72/speeding-ci-builds",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/speeding-ci-builds.md",tags:[],version:"0.72",frontMatter:{id:"speeding-ci-builds",title:"\u4f18\u5316 CI \u6784\u5efa"},sidebar:"docs",previous:{title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6",permalink:"/docs/0.72/build-speed"},next:{title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316",permalink:"/docs/0.72/optimizing-flatlist-configuration"}},l={},c=[{value:"Disable Flipper for iOS",id:"disable-flipper-for-ios",level:2},{value:"Handle Transitive Dependencies",id:"handle-transitive-dependencies",level:3}];function d(e){const i=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",a:"a",code:"code",pre:"pre",h3:"h3",ol:"ol"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"You or your company may have set up a Continuous Integration (CI) environment to test your React Native application."}),"\n",(0,n.jsx)(i.p,{children:"A fast CI service is important for 2 reasons:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The more time CI machines are running, the more they cost."}),"\n",(0,n.jsx)(i.li,{children:"The longer the CI jobs take to run, the longer the development loop."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"It is therefore important to try and minimize the time the CI environment spends building React Native."}),"\n",(0,n.jsx)(i.h2,{id:"disable-flipper-for-ios",children:"Disable Flipper for iOS"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/facebook/flipper",children:"Flipper"})," is a debugging tool shipped by default with React Native, to help developers debug and profile their React Native applications. However, Flipper is not required in CI: it is very unlikely that you or one of your collegue would have to debug the app built in the CI environment."]}),"\n",(0,n.jsx)(i.p,{children:"For iOS apps, Flipper is built every time the React Native framework is built and it may require some time to build, and this is time you can save."}),"\n",(0,n.jsxs)(i.p,{children:["Starting from React Native 0.71, we introduced a new flag in the template's Podfile: the ",(0,n.jsxs)(i.a,{href:"https://github.com/facebook/react-native/blob/main/packages/react-native/template/ios/Podfile#L20",children:[(0,n.jsx)(i.code,{children:"NO_FLIPPER"})," flag"]}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["By default, the ",(0,n.jsx)(i.code,{children:"NO_FLIPPER"})," flag is not set, therefore Flipper will be included by default in your app."]}),"\n",(0,n.jsxs)(i.p,{children:["You can specify ",(0,n.jsx)(i.code,{children:"NO_FLIPPER=1"})," when installing your iOS pods, to instruct React Native not to install Flipper. Typically, the command would look like this:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"# from the root folder of the react native project\nNO_FLIPPER=1 bundle exec pod install --project-directory=ios\n"})}),"\n",(0,n.jsx)(i.p,{children:"Add this command in your CI environment to skip the installation of Flipper dependencies and thus saving time and money."}),"\n",(0,n.jsx)(i.h3,{id:"handle-transitive-dependencies",children:"Handle Transitive Dependencies"}),"\n",(0,n.jsxs)(i.p,{children:["Your app may be using some libraries which depends on the Flipper pods. If that's your case, disabling flipper with the ",(0,n.jsx)(i.code,{children:"NO_FLIPPER"})," flag may not be enough: your app may fail to build in this case."]}),"\n",(0,n.jsx)(i.p,{children:"The proper way to handle this case is to add a custom configuration for react native, instructing the app to properly install the transitive dependency. To achieve that:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["If you don't have it already, create a new file called ",(0,n.jsx)(i.code,{children:"react-native.config.js"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Exclude explicitly the transitive dependency from the ",(0,n.jsx)(i.code,{children:"dependencies"})," when the flag is turned on."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["For example, the ",(0,n.jsx)(i.code,{children:"react-native-flipper"})," library is an additional library that depends on Flipper. If your app uses that, you need to exclude it from the dependencies. Your ",(0,n.jsx)(i.code,{children:"react-native.config.js"})," would look like this:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",metastring:'title="react-native.config.js"',children:"module.exports = {\n  // other fields\n  dependencies: {\n    ...(process.env.NO_FLIPPER\n      ? {'react-native-flipper': {platforms: {ios: null}}}\n      : {}),\n  },\n};\n"})})]})}const p=function(e={}){const{wrapper:i}=Object.assign({},(0,r.ah)(),e.components);return i?(0,n.jsx)(i,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},71426:(e,i,t)=>{var n=t(27378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,i,t){var n,o={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==i.key&&(c=""+i.key),void 0!==i.ref&&(d=i.ref),i)s.call(i,n)&&!l.hasOwnProperty(n)&&(o[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:a.current}}i.Fragment=o,i.jsx=c,i.jsxs=c},24246:(e,i,t)=>{e.exports=t(71426)},71670:(e,i,t)=>{t.d(i,{Zo:()=>a,ah:()=>o});var n=t(27378);const r=n.createContext({});function o(e){const i=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const s={};function a({components:e,children:i,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:o(e),n.createElement(r.Provider,{value:a},i)}}}]);