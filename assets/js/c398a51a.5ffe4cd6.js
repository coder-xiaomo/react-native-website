"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6686],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(25773),r=n(30808),o=(n(27378),n(35318)),i=["components"],c={id:"symbolication",title:"Symbolicating a stack trace"},l=void 0,s={unversionedId:"symbolication",id:"symbolication",isDocsHomePage:!1,title:"Symbolicating a stack trace",description:"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:",source:"@site/../cndocs/symbolication.md",sourceDirName:".",slug:"/symbolication",permalink:"/docs/next/symbolication",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/symbolication.md",version:"current",lastUpdatedAt:1628399172,formattedLastUpdatedAt:"8/8/2021",frontMatter:{id:"symbolication",title:"Symbolicating a stack trace"},sidebar:"docs",previous:{title:"\u8c03\u8bd5",permalink:"/docs/next/debugging"},next:{title:"Testing",permalink:"/docs/next/testing-overview"}},p=[{value:"Notes on Sourcemaps",id:"notes-on-sourcemaps",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"07-15 10:58:25.820 18979 18998 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: Process: com.awesomeproject, PID: 18979 07-15 10:58:25.820 18979 18998 E AndroidRuntime: com.facebook.react.common.JavascriptException: Failed, js engine: hermes, stack:\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132161\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132084\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: f@1:131854\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: anonymous@1:131119\n")),(0,o.kt)("p",null,"The sections like ",(0,o.kt)("inlineCode",{parentName:"p"},"p@1:132161")," are minified function names and bytecode offsets. To debug the problem, you would instead want to translate it into file, line and function name: ",(0,o.kt)("inlineCode",{parentName:"p"},"AwesomeProject/App.js:54:initializeMap"),". This is known as ",(0,o.kt)("strong",{parentName:"p"},"symbolication.")," You can symbolicate minified function names and bytecode like the above by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"metro-symbolicate")," a generated source map and the stack trace."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"metro-symbolicate")," package is installed by default in the React Native template project from ",(0,o.kt)("a",{parentName:"p",href:"environment-setup"},"setting up your development environment"),".")),(0,o.kt)("p",null,"From a file containing the stacktrace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map < stacktrace.txt\n")),(0,o.kt)("p",null,"From ",(0,o.kt)("inlineCode",{parentName:"p"},"adb logcat"),"directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"adb logcat -d | npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map\n")),(0,o.kt)("p",null,"This will turn each minified function name and offset like ",(0,o.kt)("inlineCode",{parentName:"p"},"p@1:132161")," into the actual file- and function name ",(0,o.kt)("inlineCode",{parentName:"p"},"AwesomeProject/App.js:54:initializeMap"),"."),(0,o.kt)("h2",{id:"notes-on-sourcemaps"},"Notes on Sourcemaps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiple source maps may be generated by the build process. Make sure to used the one in the location shown in the examples."),(0,o.kt)("li",{parentName:"ul"},"Make sure that the source map you use corresponds to the exact commit of the crashing app. Small changes in source code can cause large differences in offsets."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"metro-symbolicate")," exits immediately with success, make sure the input comes from a pipe or redirection and not from a terminal.")))}m.isMDXComponent=!0}}]);