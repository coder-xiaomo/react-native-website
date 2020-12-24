(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{238:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(8),r=(a(0),a(413)),o={id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},c={unversionedId:"native-modules-intro",id:"native-modules-intro",isDocsHomePage:!1,title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb",description:"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.",source:"@site/../cndocs/native-modules-intro.md",slug:"/native-modules-intro",permalink:"/docs/next/native-modules-intro",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-intro.md",version:"current",lastUpdatedAt:1608804459,sidebar:"docs",previous:{title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565",permalink:"/docs/next/security"},next:{title:"Android \u539f\u751f\u6a21\u5757",permalink:"/docs/next/native-modules-android"}},l=[{value:"\u521b\u5efa\u539f\u751f\u6a21\u5757",id:"\u521b\u5efa\u539f\u751f\u6a21\u5757",children:[]},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",children:[]}],s={toc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing."),Object(r.b)("p",null,"The NativeModule system exposes instances of Java/Objective-C/C++ (native) classes to JavaScript (JS) as JS objects, thereby allowing you to execute arbitrary native code from within JS. While we don't expect this feature to be part of the usual development process, it is essential that it exists. If React Native doesn't export a native API that your JS app needs you should be able to export it yourself!"),Object(r.b)("h2",{id:"\u521b\u5efa\u539f\u751f\u6a21\u5757"},"\u521b\u5efa\u539f\u751f\u6a21\u5757"),Object(r.b)("p",null,"There are two ways to write a native module for your React Native application:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Directly within your React Native application\u2019s iOS/Android projects"),Object(r.b)("li",{parentName:"ol"},"As a NPM package that can be installed as a dependency by your/other React Native applications")),Object(r.b)("p",null,"This guide will first walk you through implementing a native module directly within a React Native application. However the native module you build in the following guide can be distributed as an NPM package. Check out the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"native-modules-setup"}),"Setting Up a Native Module as a NPM Package")," guide if you are interested in doing so."),Object(r.b)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),Object(r.b)("p",null,"In the following sections we will walk you through guides on how to build a native module directly within a React Native application. As a prerequisite, you will need a React Native application to work within. You can follow the steps ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"getting-started"}),"here")," to setup a React Native application if you do not already have one."),Object(r.b)("p",null,"Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application."),Object(r.b)("p",null,"In the following sections you will create such a Calendar native module for both ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"native-modules-android"}),"Android")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"native-modules-ios"}),"iOS"),"."))}u.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,v=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return a?i.a.createElement(v,c(c({ref:t},s),{},{components:a})):i.a.createElement(v,c({ref:t},s))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);