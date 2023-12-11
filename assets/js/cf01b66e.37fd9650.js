/*! For license information please see cf01b66e.37fd9650.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[23653],{61375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(24246),r=n(71670),i=n(48375),o=n(86386),s=n(11674);const l={id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},c=void 0,u={id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",description:"\u901a\u8fc7\u690d\u5165\u539f\u751f\u5e94\u7528\u548c\u539f\u751f UI \u7ec4\u4ef6\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002",source:"@site/versioned_docs/version-0.70/communication-android.md",sourceDirName:".",slug:"/communication-android",permalink:"/docs/0.70/communication-android",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/communication-android.md",tags:[],version:"0.70",frontMatter:{id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u6253\u5305\u53d1\u5e03",permalink:"/docs/0.70/signed-apk-android"},next:{title:"\u94fe\u63a5\u539f\u751f\u5e93",permalink:"/docs/0.70/linking-libraries-ios"}},d={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native",id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native",level:3},{value:"Passing properties from React Native to native",id:"passing-properties-from-react-native-to-native",level:3},{value:"Limits of properties",id:"limits-of-properties",level:3},{value:"Other ways of cross-language interaction (events and native modules)",id:"other-ways-of-cross-language-interaction-events-and-native-modules",level:2},{value:"Calling React Native functions from native (events)",id:"calling-react-native-functions-from-native-events",level:3},{value:"Calling native functions from React Native (native modules)",id:"calling-native-functions-from-react-native-native-modules",level:3}];function h(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",em:"em",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["\u901a\u8fc7",(0,a.jsx)(t.a,{href:"integration-with-existing-apps",children:"\u690d\u5165\u539f\u751f\u5e94\u7528"}),"\u548c",(0,a.jsx)(t.a,{href:"native-components-android",children:"\u539f\u751f UI \u7ec4\u4ef6"}),"\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,a.jsx)(t.p,{children:"React Native \u662f\u4ece React \u4e2d\u5f97\u5230\u7684\u7075\u611f\uff0c\u56e0\u6b64\u57fa\u672c\u7684\u4fe1\u606f\u6d41\u662f\u7c7b\u4f3c\u7684\u3002\u5728 React \u4e2d\u4fe1\u606f\u662f\u5355\u5411\u7684\u3002\u6211\u4eec\u7ef4\u62a4\u7740\u7ec4\u4ef6\u5c42\u6b21\uff0c\u5728\u5176\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4ec5\u4f9d\u8d56\u4e8e\u5b83\u7236\u7ec4\u4ef6\u548c\u81ea\u5df1\u7684\u72b6\u6001\u3002\u901a\u8fc7\u5c5e\u6027\uff08props\uff09\u6211\u4eec\u5c06\u4fe1\u606f\u4ece\u4e0a\u800c\u4e0b\u7684\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u5230\u5b50\u5143\u7d20\u3002\u5982\u679c\u4e00\u4e2a\u7956\u5148\u7ec4\u4ef6\u9700\u8981\u81ea\u5df1\u5b50\u5b59\u7684\u72b6\u6001\uff0c\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u7ed9\u5bf9\u5e94\u7684\u5b50\u5143\u7d20\u3002"}),"\n",(0,a.jsx)(t.p,{children:"React Native \u4e5f\u8fd0\u7528\u4e86\u76f8\u540c\u7684\u6982\u5ff5\u3002\u53ea\u8981\u6211\u4eec\u5b8c\u5168\u5728\u6846\u67b6\u5185\u6784\u5efa\u5e94\u7528\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u548c\u56de\u8c03\u51fd\u6570\u6765\u8c03\u52a8\u6574\u4e2a\u5e94\u7528\u3002\u4f46\u662f\uff0c\u5f53\u6211\u4eec\u6df7\u5408 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u7279\u6b8a\u7684\uff0c\u8de8\u8bed\u8a00\u7684\u673a\u5236\u6765\u4f20\u9012\u4fe1\u606f\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,a.jsx)(t.p,{children:"\u5c5e\u6027\u662f\u6700\u7b80\u5355\u7684\u8de8\u7ec4\u4ef6\u901a\u4fe1\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b9\u6cd5\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native \u6216\u8005\u4ece React Native \u5230\u539f\u751f\u7ec4\u4ef6\u3002"}),"\n",(0,a.jsx)(t.h3,{id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native",children:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native"}),"\n",(0,a.jsxs)(t.p,{children:["You can pass properties down to the React Native app by providing a custom implementation of ",(0,a.jsx)(t.code,{children:"ReactActivityDelegate"})," in your main activity. This implementation should override ",(0,a.jsx)(t.code,{children:"getLaunchOptions"})," to return a ",(0,a.jsx)(t.code,{children:"Bundle"})," with the desired properties."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",defaultValue:s.Z.defaultAndroidLanguage,values:s.Z.androidLanguages,children:[(0,a.jsx)(o.Z,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'public class MainActivity extends ReactActivity {\n  @Override\n  protected ReactActivityDelegate createReactActivityDelegate() {\n    return new ReactActivityDelegate(this, getMainComponentName()) {\n      @Override\n      protected Bundle getLaunchOptions() {\n        Bundle initialProperties = new Bundle();\n        ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n                "http://foo.com/bar1.png",\n                "http://foo.com/bar2.png"\n        ));\n        initialProperties.putStringArrayList("images", imageList);\n        return initialProperties;\n      }\n    };\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'class MainActivity : ReactActivity() {\n    override fun createReactActivityDelegate(): ReactActivityDelegate {\n        return object : ReactActivityDelegate(this, mainComponentName) {\n            override fun getLaunchOptions(): Bundle {\n                val imageList = arrayListOf("http://foo.com/bar1.png", "http://foo.com/bar2.png")\n                val initialProperties = Bundle().apply { putStringArrayList("images", imageList) }\n                return initialProperties\n            }\n        }\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"import React from 'react';\nimport { View, Image } from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return <Image source={{ uri: imgURI }} />;\n  }\n  render() {\n    return <View>{this.props.images.map(this.renderImage)}</View>;\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"ReactRootView"})," provides a read-write property ",(0,a.jsx)(t.code,{children:"appProperties"}),". After ",(0,a.jsx)(t.code,{children:"appProperties"})," is set, the React Native app is re-rendered with new properties. The update is only performed when the new updated properties differ from the previous ones."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"android-language",defaultValue:s.Z.defaultAndroidLanguage,values:s.Z.androidLanguages,children:[(0,a.jsx)(o.Z,{value:"java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'Bundle updatedProps = mReactRootView.getAppProperties();\nArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n        "http://foo.com/bar3.png",\n        "http://foo.com/bar4.png"\n));\nupdatedProps.putStringArrayList("images", imageList);\n\nmReactRootView.setAppProperties(updatedProps);\n'})})}),(0,a.jsx)(o.Z,{value:"kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'var updatedProps: Bundle = reactRootView.getAppProperties()\nvar imageList = arrayListOf("http://foo.com/bar3.png", "http://foo.com/bar4.png")\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"It is fine to update properties anytime. However, updates have to be performed on the main thread. You use the getter on any thread."}),"\n",(0,a.jsx)(t.p,{children:"There is no way to update only a few properties at a time. We suggest that you build it into your own wrapper instead."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.em,{children:"Note:"})})," Currently, JS function ",(0,a.jsx)(t.code,{children:"componentWillUpdateProps"})," of the top level RN component will not be called after a prop update. However, you can access the new props in ",(0,a.jsx)(t.code,{children:"componentDidMount"})," function."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"passing-properties-from-react-native-to-native",children:"Passing properties from React Native to native"}),"\n",(0,a.jsxs)(t.p,{children:["The problem exposing properties of native components is covered in detail in ",(0,a.jsx)(t.a,{href:"native-components-android#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation",children:"this article"}),". In short, properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with ",(0,a.jsx)(t.code,{children:"@ReactProp"}),", then use them in React Native as if the component was an ordinary React Native component."]}),"\n",(0,a.jsx)(t.h3,{id:"limits-of-properties",children:"Limits of properties"}),"\n",(0,a.jsx)(t.p,{children:"The main drawback of cross-language properties is that they do not support callbacks, which would allow us to handle bottom-up data bindings. Imagine you have a small RN view that you want to be removed from the native parent view as a result of a JS action. There is no way to do that with props, as the information would need to go bottom-up."}),"\n",(0,a.jsxs)(t.p,{children:["Although we have a flavor of cross-language callbacks (",(0,a.jsx)(t.a,{href:"native-modules-android#callbacks",children:"described here"}),"), these callbacks are not always the thing we need. The main problem is that they are not intended to be passed as properties. Rather, this mechanism allows us to trigger a native action from JS, and handle the result of that action in JS."]}),"\n",(0,a.jsx)(t.h2,{id:"other-ways-of-cross-language-interaction-events-and-native-modules",children:"Other ways of cross-language interaction (events and native modules)"}),"\n",(0,a.jsx)(t.p,{children:"As stated in the previous chapter, using properties comes with some limitations. Sometimes properties are not enough to drive the logic of our app and we need a solution that gives more flexibility. This chapter covers other communication techniques available in React Native. They can be used for internal communication (between JS and native layers in RN) as well as for external communication (between RN and the 'pure native' part of your app)."}),"\n",(0,a.jsx)(t.p,{children:"React Native enables you to perform cross-language function calls. You can execute custom native code from JS and vice versa. Unfortunately, depending on the side we are working on, we achieve the same goal in different ways. For native - we use events mechanism to schedule an execution of a handler function in JS, while for React Native we directly call methods exported by native modules."}),"\n",(0,a.jsx)(t.h3,{id:"calling-react-native-functions-from-native-events",children:"Calling React Native functions from native (events)"}),"\n",(0,a.jsxs)(t.p,{children:["Events are described in detail in ",(0,a.jsx)(t.a,{href:"native-components-android#events",children:"this article"}),". Note that using events gives us no guarantees about execution time, as the event is handled on a separate thread."]}),"\n",(0,a.jsx)(t.p,{children:"Events are powerful, because they allow us to change React Native components without needing a reference to them. However, there are some pitfalls that you can fall into while using them:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"As events can be sent from anywhere, they can introduce spaghetti-style dependencies into your project."}),"\n",(0,a.jsx)(t.li,{children:"Events share namespace, which means that you may encounter some name collisions. Collisions will not be detected statically, which makes them hard to debug."}),"\n",(0,a.jsxs)(t.li,{children:["If you use several instances of the same React Native component and you want to distinguish them from the perspective of your event, you'll likely need to introduce identifiers and pass them along with events (you can use the native view's ",(0,a.jsx)(t.code,{children:"reactTag"})," as an identifier)."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"calling-native-functions-from-react-native-native-modules",children:"Calling native functions from React Native (native modules)"}),"\n",(0,a.jsxs)(t.p,{children:["Native modules are Java/Kotlin classes that are available in JS. Typically one instance of each module is created per JS bridge. They can export arbitrary functions and constants to React Native. They have been covered in detail in ",(0,a.jsx)(t.a,{href:"native-modules-android",children:"this article"}),"."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.em,{children:"Warning"})}),": All native modules share the same namespace. Watch out for name collisions when creating new ones."]}),"\n"]})]})}const v=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},11674:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(27378),r=n(38944);const i={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};function p({children:e,hidden:t,className:n}){return a.createElement("div",d({role:"tabpanel",className:(0,r.Z)(i.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>q});var a=n(27378),r=n(38944),i=n(12112),o=n(3620),s=n(69490),l=n(14953),c=n(27886),u=n(7106),d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&g(e,n,t[n]);if(v)for(var n of v(t))f.call(t,n)&&g(e,n,t[n]);return e},y=(e,t)=>p(e,h(t));function w(e){var t,n;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function x(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return w(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j({value:e,tabValues:t}){return t.some((t=>t.value===e))}function R({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(y(b({},n.location),{search:t.toString()}))}),[r,n])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=x(e),[o,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(n=t.find((e=>e.default)))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=R({queryString:n,groupId:r}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,u.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),v=(()=>{const e=null!=c?c:p;return j({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var O=n(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var S=Object.defineProperty,A=Object.defineProperties,P=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&T(e,n,t[n]);if(I)for(var n of I(t))E.call(t,n)&&T(e,n,t[n]);return e},_=(e,t)=>A(e,P(t));function C({className:e,block:t,selectedValue:n,selectValue:o,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==n&&(c(t),o(r))},d=e=>{var t,n;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=null!=(t=l[n])?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=null!=(n=l[t])?n:l[l.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:i})=>a.createElement("li",_(V({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>l.push(e),onKeyDown:d,onClick:u},i),{className:(0,r.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function D({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function Z(e){const t=N(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},a.createElement(C,V(V({},e),t)),a.createElement(D,V(V({},e),t)))}function q(e){const t=(0,O.Z)();return a.createElement(Z,V({key:String(t)},e),w(e.children))}},71426:(e,t,n)=>{var a=n(27378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var a=n(27378);const r=a.createContext({});function i(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:i(e),a.createElement(r.Provider,{value:s},t)}}}]);