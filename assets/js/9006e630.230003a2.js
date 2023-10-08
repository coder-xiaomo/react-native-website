/*! For license information please see 9006e630.230003a2.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20568],{70279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=t(24246),i=t(71670),r=t(48375),a=t(86386),l=t(11674);const o={id:"dimensions",title:"Dimensions"},d=void 0,c={unversionedId:"dimensions",id:"version-0.70/dimensions",title:"Dimensions",description:"\u672c\u6a21\u5757\u7528\u4e8e\u83b7\u53d6\u8bbe\u5907\u5c4f\u5e55\u7684\u5bbd\u9ad8\u3002",source:"@site/versioned_docs/version-0.70/dimensions.md",sourceDirName:".",slug:"/dimensions",permalink:"/docs/0.70/dimensions",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dimensions.md",tags:[],version:"0.70",frontMatter:{id:"dimensions",title:"Dimensions"},sidebar:"api",previous:{title:"DevSettings",permalink:"/docs/0.70/devsettings"},next:{title:"Easing",permalink:"/docs/0.70/easing"}},h={},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>get()</code>",id:"get",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3},{value:"<code>set()</code>",id:"set",level:3},{value:"Type Definitions",id:"type-definitions",level:2},{value:"DimensionsValue",id:"dimensionsvalue",level:3},{value:"DisplayMetrics",id:"displaymetrics",level:3}];function p(e){const n=Object.assign({p:"p",blockquote:"blockquote",a:"a",code:"code",pre:"pre",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u672c\u6a21\u5757\u7528\u4e8e\u83b7\u53d6\u8bbe\u5907\u5c4f\u5e55\u7684\u5bbd\u9ad8\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e React \u51fd\u6570\u7ec4\u4ef6\uff0c\u6211\u4eec\u66f4\u63a8\u8350\u4f7f\u7528",(0,s.jsx)(n.a,{href:"usewindowdimensions",children:(0,s.jsx)(n.code,{children:"useWindowDimensions"})}),"\u8fd9\u4e2a Hook API\u3002\u548c ",(0,s.jsx)(n.code,{children:"Dimensions"})," \u4e0d\u540c\uff0c\u5b83\u4f1a\u5728\u5c4f\u5e55\u5c3a\u5bf8\u53d8\u5316\u65f6\u81ea\u52a8\u66f4\u65b0\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Dimensions } from 'react-native';\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u8bbe\u5907\u7684\u5bbd\u9ad8\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u5c3d\u7ba1\u5c3a\u5bf8\u4fe1\u606f\u7acb\u5373\u5c31\u53ef\u7528\uff0c\u4f46\u5b83\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u88ab\u4fee\u6539\uff08\u8b6c\u5982\u8bbe\u5907\u7684\u65b9\u5411\u6539\u53d8\uff09\uff0c\u6240\u4ee5\u57fa\u4e8e\u8fd9\u4e9b\u5e38\u91cf\u7684\u6e32\u67d3\u903b\u8f91\u548c\u6837\u5f0f\u5e94\u5f53\u6bcf\u6b21 render \u4e4b\u540e\u90fd\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u5c06\u5bf9\u5e94\u7684\u503c\u4fdd\u5b58\u4e0b\u6765\u3002\uff08\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u5185\u8054\u7684\u6837\u5f0f\u800c\u4e0d\u662f\u5728",(0,s.jsx)(n.code,{children:"StyleSheet"}),"\u4e2d\u4fdd\u5b58\u76f8\u5e94\u7684\u5c3a\u5bf8\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8981\u8003\u8651\u53ef\u6298\u53e0\u7684\u8bbe\u5907\uff0c\u6216\u8005\u5176\u4ed6\u5c4f\u5e55\u5c3a\u5bf8\u53ef\u53d8\u7684\u8bbe\u5907\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u4f8b\u5b50\u4e2d\u6240\u4f7f\u7528\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u6216\u662f",(0,s.jsx)(n.a,{href:"usewindowdimensions",children:(0,s.jsx)(n.code,{children:"useWindowDimensions"})}),"\uff1a"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(r.Z,{groupId:"syntax",defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,children:[(0,s.jsx)(a.Z,{value:"functional",children:(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20window%20%3D%20Dimensions.get(%5C%22window%5C%22)%3B%5Cnconst%20screen%20%3D%20Dimensions.get(%5C%22screen%5C%22)%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%20window%2C%20screen%20%7D)%3B%5Cn%5Cn%20%20const%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%5Cn%20%20%20%20setDimensions(%7B%20window%2C%20screen%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20Dimensions.addEventListener(%5C%22change%5C%22%2C%20onChange)%3B%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20Dimensions.removeEventListener(%5C%22change%5C%22%2C%20onChange)%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})}),(0,s.jsx)(a.Z,{value:"classical",children:(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20window%20%3D%20Dimensions.get(%5C%22window%5C%22)%3B%5Cnconst%20screen%20%3D%20Dimensions.get(%5C%22screen%5C%22)%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20dimensions%3A%20%7B%5Cn%20%20%20%20%20%20window%2C%5Cn%20%20%20%20%20%20screen%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%5Cn%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20Dimensions.addEventListener(%5C%22change%5C%22%2C%20this.onChange)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20Dimensions.removeEventListener(%5C%22change%5C%22%2C%20this.onChange)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20%7B%20dimensions%20%7D%20%3D%20this.state%3B%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"addeventlistener",children:(0,s.jsx)(n.code,{children:"addEventListener()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static addEventListener(type, handler)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002\u76ee\u524d\u652f\u6301\u7684\u4e8b\u4ef6\u6709\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"change"}),": Fires when a property within the ",(0,s.jsx)(n.code,{children:"Dimensions"})," object changes. The argument to the event handler is an object with ",(0,s.jsx)(n.code,{children:"window"})," and ",(0,s.jsx)(n.code,{children:"screen"})," properties whose values are the same as the return values of ",(0,s.jsx)(n.code,{children:"Dimensions.get('window')"})," and ",(0,s.jsx)(n.code,{children:"Dimensions.get('screen')"}),", respectively.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"window"})," - Size of the visible Application window"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"screen"})," - Size of the device's screen"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"get",children:(0,s.jsx)(n.code,{children:"get()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static get(dim)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u521d\u59cb\u7684\u5c3a\u5bf8\u4fe1\u606f\u5e94\u8be5\u5728",(0,s.jsx)(n.code,{children:"runApplication"}),"\u4e4b\u540e\u88ab\u6267\u884c\uff0c\u8fd9\u6837\u624d\u53ef\u4ee5\u5728\u4efb\u4f55\u5176\u4ed6\u7684 require \u88ab\u6267\u884c\u4e4b\u524d\u4f7f\u7528\u3002\u4e0d\u8fc7\u5728\u7a0d\u540e\u53ef\u80fd\u8fd8\u4f1a\u66f4\u65b0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\uff1a ",(0,s.jsx)(n.code,{children:"const {height, width} = Dimensions.get('window');"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["dim ",(0,s.jsx)("div",{className:"label basic required two-lines",children:"Required"})]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Name of dimension as defined when calling ",(0,s.jsx)(n.code,{children:"set"}),". Returns value for the dimension."]})]})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["For Android the ",(0,s.jsx)(n.code,{children:"window"})," dimension will exclude the size used by the ",(0,s.jsx)(n.code,{children:"status bar"})," (if not translucent) and ",(0,s.jsx)(n.code,{children:"bottom navigation bar"})]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"removeeventlistener",children:(0,s.jsx)(n.code,{children:"removeEventListener()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static removeEventListener(type, handler)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Deprecated."})," Use the ",(0,s.jsx)(n.code,{children:"remove()"})," method on the event subscription returned by ",(0,s.jsx)(n.a,{href:"#addeventlistener",children:(0,s.jsx)(n.code,{children:"addEventListener()"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"set",children:(0,s.jsx)(n.code,{children:"set()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static set(dims)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This should only be called from native code by sending the ",(0,s.jsx)(n.code,{children:"didUpdateDimensions"})," event."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["dims ",(0,s.jsx)("div",{className:"label basic required",children:"Required"})]}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"String-keyed object of dimensions to set."})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"type-definitions",children:"Type Definitions"}),"\n",(0,s.jsx)(n.h3,{id:"dimensionsvalue",children:"DimensionsValue"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Properties:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"window"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"dimensions#displaymetrics",children:"DisplayMetrics"})}),(0,s.jsx)(n.td,{children:"Size of the visible Application window."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"screen"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"dimensions#displaymetrics",children:"DisplayMetrics"})}),(0,s.jsx)(n.td,{children:"Size of the device's screen."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"displaymetrics",children:"DisplayMetrics"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"Type"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"object"})})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Properties:"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"width"}),(0,s.jsx)(n.td,{children:"number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"height"}),(0,s.jsx)(n.td,{children:"number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scale"}),(0,s.jsx)(n.td,{children:"number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fontScale"}),(0,s.jsx)(n.td,{children:"number"})]})]})]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11674:(e,n,t)=>{t.d(n,{Z:()=>a});var s=t(63445);const i=!!s.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!s.Z.canUseDOM&&navigator.platform.startsWith("Win"),a={defaultGuide:"native",defaultOs:i?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>u});var s=t(27378),i=t(38944);const r={tabItem:"tabItem_wHwb"};var a=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))d.call(n,t)&&c(e,t,n[t]);return e};function u({children:e,hidden:n,className:t}){return s.createElement("div",h({role:"tabpanel",className:(0,i.Z)(r.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>Z});var s=t(27378),i=t(38944),r=t(12112),a=t(3620),l=t(69490),o=t(14953),d=t(27886),c=t(7106),h=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,C=(e,n,t)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))x.call(n,t)&&C(e,t,n[t]);if(m)for(var t of m(n))j.call(n,t)&&C(e,t,n[t]);return e},b=(e,n)=>u(e,p(n));function f(e){var n,t;return null!=(t=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function w(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:t,default:s}})=>({value:e,label:n,attributes:t,default:s})))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function D({queryString:e=!1,groupId:n}){const t=(0,a.k6)(),i=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,o._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace(b(v({},t.location),{search:n.toString()}))}),[i,t])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=w(e),[a,o]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const s=null!=(t=n.find((e=>e.default)))?t:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[d,h]=D({queryString:t,groupId:i}),[u,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,i]=(0,c.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:i}),m=(()=>{const e=null!=d?d:u;return g({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),p(e)}),[h,p,r]),tabValues:r}}var B=t(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var k=Object.defineProperty,O=Object.defineProperties,S=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,V=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,_=(e,n)=>{for(var t in n||(n={}))T.call(n,t)&&V(e,t,n[t]);if(A)for(var t of A(n))I.call(n,t)&&V(e,t,n[t]);return e},N=(e,n)=>O(e,S(n));function P({className:e,block:n,selectedValue:t,selectValue:a,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),i=l[s].value;i!==t&&(d(n),a(i))},h=e=>{var n,t;let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;s=null!=(n=o[t])?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=null!=(t=o[n])?t:o[o.length-1];break}}null==s||s.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},l.map((({value:e,label:n,attributes:r})=>s.createElement("li",N(_({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>o.push(e),onKeyDown:h,onClick:c},r),{className:(0,i.Z)("tabs__item",E.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function q({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function L(e){const n=y(e);return s.createElement("div",{className:(0,i.Z)("tabs-container",E.tabList)},s.createElement(P,_(_({},e),n)),s.createElement(q,_(_({},e),n)))}function Z(e){const n=(0,B.Z)();return s.createElement(L,_({key:String(n)},e),f(e.children))}},71426:(e,n,t)=>{var s=t(27378),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,r={},d=null,c=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,s)&&!o.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:i,type:e,key:d,ref:c,props:r,_owner:l.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(27378);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:l},n)}}}]);