/*! For license information please see d480b2d8.296a68a7.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[10029],{19866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(24246),i=t(71670);const a={id:"symbolication",title:"Symbolicating a stack trace"},s=void 0,r={unversionedId:"symbolication",id:"version-0.72/symbolication",title:"Symbolicating a stack trace",description:"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:",source:"@site/versioned_docs/version-0.72/symbolication.md",sourceDirName:".",slug:"/symbolication",permalink:"/docs/symbolication",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/symbolication.md",tags:[],version:"0.72",frontMatter:{id:"symbolication",title:"Symbolicating a stack trace"},sidebar:"docs",previous:{title:"\u8c03\u8bd5\u539f\u751f\u4ee3\u7801",permalink:"/docs/native-debugging"},next:{title:"Testing",permalink:"/docs/testing-overview"}},c={},d=[{value:"Notes on Sourcemaps",id:"notes-on-sourcemaps",level:2}];function l(e){const n=Object.assign({p:"p",pre:"pre",code:"code",strong:"strong",blockquote:"blockquote",a:"a",h2:"h2",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"07-15 10:58:25.820 18979 18998 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: Process: com.awesomeproject, PID: 18979 07-15 10:58:25.820 18979 18998 E AndroidRuntime: com.facebook.react.common.JavascriptException: Failed, js engine: hermes, stack:\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132161\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132084\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: f@1:131854\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: anonymous@1:131119\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The sections like ",(0,o.jsx)(n.code,{children:"p@1:132161"})," are minified function names and bytecode offsets. To debug the problem, you would instead want to translate it into file, line and function name: ",(0,o.jsx)(n.code,{children:"AwesomeProject/App.js:54:initializeMap"}),". This is known as ",(0,o.jsx)(n.strong,{children:"symbolication."})," You can symbolicate minified function names and bytecode like the above by passing ",(0,o.jsx)(n.code,{children:"metro-symbolicate"})," a generated source map and the stack trace."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"metro-symbolicate"})," package is installed by default in the React Native template project from ",(0,o.jsx)(n.a,{href:"environment-setup",children:"setting up your development environment"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"From a file containing the stacktrace:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map < stacktrace.txt\n"})}),"\n",(0,o.jsxs)(n.p,{children:["From ",(0,o.jsx)(n.code,{children:"adb logcat"}),"directly:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"adb logcat -d | npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will turn each minified function name and offset like ",(0,o.jsx)(n.code,{children:"p@1:132161"})," into the actual file- and function name ",(0,o.jsx)(n.code,{children:"AwesomeProject/App.js:54:initializeMap"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"notes-on-sourcemaps",children:"Notes on Sourcemaps"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Multiple source maps may be generated by the build process. Make sure to used the one in the location shown in the examples."}),"\n",(0,o.jsx)(n.li,{children:"Make sure that the source map you use corresponds to the exact commit of the crashing app. Small changes in source code can cause large differences in offsets."}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"metro-symbolicate"})," exits immediately with success, make sure the input comes from a pipe or redirection and not from a terminal."]}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},71426:(e,n,t)=>{var o=t(27378),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,a={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,o)&&!c.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:i,type:e,key:d,ref:l,props:a,_owner:r.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var o=t(27378);const i=o.createContext({});function a(e){const n=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||s:a(e),o.createElement(i.Provider,{value:r},n)}}}]);