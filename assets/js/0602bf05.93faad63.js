/*! For license information please see 0602bf05.93faad63.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51888],{72899:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=r(24246),a=r(71670),i=r(48375),l=r(86386),s=r(11674);const o={id:"keyboard",title:"Keyboard"},d=void 0,c={unversionedId:"keyboard",id:"version-0.70/keyboard",title:"Keyboard",description:"Keyboard\u6a21\u5757\u7528\u6765\u63a7\u5236\u952e\u76d8\u76f8\u5173\u7684\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-0.70/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/docs/0.70/keyboard",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/keyboard.md",tags:[],version:"0.70",frontMatter:{id:"keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"InteractionManager",permalink:"/docs/0.70/interactionmanager"},next:{title:"LayoutAnimation",permalink:"/docs/0.70/layoutanimation"}},u={},h=[{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>removeListener()</code>",id:"removelistener",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>dismiss()</code>",id:"dismiss",level:3},{value:"<code>scheduleLayoutAnimation</code>",id:"schedulelayoutanimation",level:3}];function b(e){const n=Object.assign({p:"p",code:"code",h3:"h3",div:"div",hr:"hr",h1:"h1",h2:"h2",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",blockquote:"blockquote"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Keyboard"}),"\u6a21\u5757\u7528\u6765\u63a7\u5236\u952e\u76d8\u76f8\u5173\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7528\u6cd5\u793a\u4f8b",children:"\u7528\u6cd5\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Keyboard"}),"\u6a21\u5757\u53ef\u4ee5\u76d1\u542c\u539f\u751f\u952e\u76d8\u4e8b\u4ef6\u4ee5\u505a\u51fa\u76f8\u5e94\u56de\u5e94\uff0c\u6bd4\u5982\u6536\u56de\u952e\u76d8\u3002"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"syntax",defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,children:[(0,t.jsx)(l.Z,{value:"functional",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"Keyboard Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22%5Cnimport%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Keyboard%2C%20TextInput%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Example%20%3D%20()%20%3D%3E%20%7B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20Keyboard.addListener(%5C%22keyboardDidShow%5C%22%2C%20_keyboardDidShow)%3B%5Cn%20%20%20%20Keyboard.addListener(%5C%22keyboardDidHide%5C%22%2C%20_keyboardDidHide)%3B%5Cn%5Cn%20%20%20%20%2F%2F%20cleanup%20function%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20Keyboard.removeListener(%5C%22keyboardDidShow%5C%22%2C%20_keyboardDidShow)%3B%5Cn%20%20%20%20%20%20Keyboard.removeListener(%5C%22keyboardDidHide%5C%22%2C%20_keyboardDidHide)%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20const%20_keyboardDidShow%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20alert(%5C%22Keyboard%20Shown%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20_keyboardDidHide%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20alert(%5C%22Keyboard%20Hidden%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20%3CTextInput%20style%3D%7Bs.input%7D%20placeholder%3D'Click%20here%20...'%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnconst%20s%20%3D%20StyleSheet.create(%7B%5Cn%20%20%20input%3A%7B%5Cn%20%20%20%20margin%3A60%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23fff%5C%22%5Cn%20%20%20%7D%5Cn%7D)%5Cn%5Cnexport%20default%20Example%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})}),(0,t.jsx)(l.Z,{value:"classical",children:(0,t.jsx)(n.div,{class:"snack-player","data-snack-name":"Keyboard Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BKeyboard%2C%20TextInput%20%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20Example%20extends%20Component%20%7B%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.keyboardDidShowListener%20%3D%20Keyboard.addListener(%5Cn%20%20%20%20%20%20'keyboardDidShow'%2C%5Cn%20%20%20%20%20%20this._keyboardDidShow%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20this.keyboardDidHideListener%20%3D%20Keyboard.addListener(%5Cn%20%20%20%20%20%20'keyboardDidHide'%2C%5Cn%20%20%20%20%20%20this._keyboardDidHide%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20this.keyboardDidShowListener.remove()%3B%5Cn%20%20%20%20this.keyboardDidHideListener.remove()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20_keyboardDidShow()%20%7B%5Cn%20%20%20%20alert('Keyboard%20Shown')%3B%5Cn%20%20%7D%5Cn%5Cn%20%20_keyboardDidHide()%20%7B%5Cn%20%20%20%20alert('Keyboard%20Hidden')%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20%3CTextInput%20style%3D%7Bs.input%7D%20placeholder%3D'Click%20here%20...'%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%20%2F%3E%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20s%20%3D%20StyleSheet.create(%7B%5Cn%20%20%20input%3A%7B%5Cn%20%20%20%20margin%3A60%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23fff%5C%22%5Cn%20%20%20%7D%5Cn%7D)%5Cn%5Cnexport%20default%20Example%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,t.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"addlistener",children:(0,t.jsx)(n.code,{children:"addListener()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static addListener(eventName, callback)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"addListener"}),"\u7528\u4e8e\u6ce8\u518c\u4e00\u4e2a JavaScript \u51fd\u6570\u6765\u76d1\u542c\u5904\u7406\u539f\u751f\u952e\u76d8\u901a\u77e5\u4e8b\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u65b9\u6cd5\u4f1a\u8fd4\u56de\u76d1\u542c\u51fd\u6570\u7684\u5f15\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eventName"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"nativeEvent"}),"\u53c2\u6570\u7528\u6765\u6307\u660e\u8981\u76d1\u542c\u7684\u4e8b\u4ef6\uff0c\u5177\u4f53\u6709\u4ee5\u4e0b\u51e0\u79cd:"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"callback"}),(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u8c03\u7528\u7684 js \u51fd\u6570"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"nativeEvent"})}),"\n",(0,t.jsx)(n.p,{children:"This can be any of the following"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"keyboardWillShow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"keyboardDidShow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"keyboardWillHide"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"keyboardDidHide"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"keyboardWillChangeFrame"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"keyboardDidChangeFrame"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"keyboardWillShow"})," as well as ",(0,t.jsx)(n.code,{children:"keyboardWillHide"})," are generally not available on Android since there is no native corresponding event."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\u5728 Android \u4e0a\u53ea\u6709",(0,t.jsx)(n.code,{children:"keyboardDidShow"}),"\u548c",(0,t.jsx)(n.code,{children:"keyboardDidHide"}),"\u4e8b\u4ef6\u6709\u6548\u3002\u5982\u679c Android \u7248\u672c\u5c0f\u4e8e\u7b49\u4e8e 10\uff0c \u4e14",(0,t.jsx)(n.code,{children:"android:windowSoftInputMode"}),"\u8bbe\u7f6e\u4e3a",(0,t.jsx)(n.code,{children:"adjustNothing"}),"\uff0c\u5219\u6ca1\u6709\u4efb\u4f55\u4e8b\u4ef6\u6709\u6548\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"removelistener",children:(0,t.jsx)(n.code,{children:"removeListener()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static removeListener(eventName, callback)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u79fb\u9664\u67d0\u4e2a\u7c7b\u578b\u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eventName"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"\u8981\u79fb\u9664\u76d1\u542c\u51fd\u6570\u7684\u539f\u751f\u4e8b\u4ef6\u7c7b\u578b\u540d\u79f0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"callback"}),(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"\u8981\u79fb\u9664\u7684\u76d1\u542c\u51fd\u6570"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"removealllisteners",children:(0,t.jsx)(n.code,{children:"removeAllListeners()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static removeAllListeners(eventName)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u79fb\u9664\u67d0\u4e2a\u7c7b\u578b\u4e8b\u4ef6\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"dismiss",children:(0,t.jsx)(n.code,{children:"dismiss()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static dismiss()\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u628a\u5f39\u51fa\u7684\u952e\u76d8\u6536\u56de\u53bb\uff0c\u540c\u65f6\u4f7f\u5f53\u524d\u7684\u6587\u672c\u6846\u5931\u53bb\u7126\u70b9\u3002"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"schedulelayoutanimation",children:(0,t.jsx)(n.code,{children:"scheduleLayoutAnimation"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"static scheduleLayoutAnimation(event)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(b,e)})):b(e)}},11674:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(63445);const a=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"native",defaultOs:a?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,r)=>{r.d(n,{Z:()=>h});var t=r(27378),a=r(38944);const i={tabItem:"tabItem_wHwb"};var l=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,r)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))o.call(n,r)&&c(e,r,n[r]);if(s)for(var r of s(n))d.call(n,r)&&c(e,r,n[r]);return e};function h({children:e,hidden:n,className:r}){return t.createElement("div",u({role:"tabpanel",className:(0,a.Z)(i.tabItem,r)},{hidden:n}),e)}},48375:(e,n,r)=>{r.d(n,{Z:()=>q});var t=r(27378),a=r(38944),i=r(12112),l=r(3620),s=r(69490),o=r(14953),d=r(27886),c=r(7106),u=Object.defineProperty,h=Object.defineProperties,b=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,x=(e,n,r)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,y=(e,n)=>{for(var r in n||(n={}))m.call(n,r)&&x(e,r,n[r]);if(p)for(var r of p(n))v.call(n,r)&&x(e,r,n[r]);return e},C=(e,n)=>h(e,b(n));function f(e){var n,r;return null!=(r=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?r:[]}function j(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function k({value:e,tabValues:n}){return n.some((n=>n.value===e))}function g({queryString:e=!1,groupId:n}){const r=(0,l.k6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,o._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace(C(y({},r.location),{search:n.toString()}))}),[a,r])]}function D(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=j(e),[l,o]=(0,t.useState)((()=>function({defaultValue:e,tabValues:n}){var r;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=null!=(r=n.find((e=>e.default)))?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[d,u]=g({queryString:r,groupId:a}),[h,b]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,c.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:a}),p=(()=>{const e=null!=d?d:h;return k({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{p&&o(p)}),[p]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!k({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var w=r(14185);const B={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var E=Object.defineProperty,S=Object.defineProperties,O=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,L=(e,n,r)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,N=(e,n)=>{for(var r in n||(n={}))_.call(n,r)&&L(e,r,n[r]);if(A)for(var r of A(n))I.call(n,r)&&L(e,r,n[r]);return e},T=(e,n)=>S(e,O(n));function K({className:e,block:n,selectedValue:r,selectValue:l,tabValues:s}){const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(d(n),l(a))},u=e=>{var n,r;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=null!=(n=o[r])?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=null!=(r=o[n])?r:o[o.length-1];break}}null==t||t.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},s.map((({value:e,label:n,attributes:i})=>t.createElement("li",T(N({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>o.push(e),onKeyDown:u,onClick:c},i),{className:(0,a.Z)("tabs__item",B.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===e})}),null!=n?n:e))))}function P({lazy:e,children:n,selectedValue:r}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function V(e){const n=D(e);return t.createElement("div",{className:(0,a.Z)("tabs-container",B.tabList)},t.createElement(K,N(N({},e),n)),t.createElement(P,N(N({},e),n)))}function q(e){const n=(0,w.Z)();return t.createElement(V,N({key:String(n)},e),f(e.children))}},71426:(e,n,r)=>{var t=r(27378),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,c=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,t)&&!o.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:s.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},24246:(e,n,r)=>{e.exports=r(71426)},71670:(e,n,r)=>{r.d(n,{Zo:()=>s,ah:()=>i});var t=r(27378);const a=t.createContext({});function i(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function s({components:e,children:n,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||l:i(e),t.createElement(a.Provider,{value:s},n)}}}]);