/*! For license information please see 36778e0d.239e8ac6.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7874],{46483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>C,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=n(24246),a=n(71670),l=n(48375),s=n(86386),o=n(11674);const i={id:"touchablehighlight",title:"TouchableHighlight"},c=void 0,d={unversionedId:"touchablehighlight",id:"touchablehighlight",title:"TouchableHighlight",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/../cndocs/touchablehighlight.md",sourceDirName:".",slug:"/touchablehighlight",permalink:"/docs/next/touchablehighlight",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/touchablehighlight.md",tags:[],version:"current",frontMatter:{id:"touchablehighlight",title:"TouchableHighlight"},sidebar:"\u7ec4\u4ef6",previous:{title:"TextInput",permalink:"/docs/next/textinput"},next:{title:"TouchableOpacity",permalink:"/docs/next/touchableopacity"}},u={},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>activeOpacity</code>",id:"activeopacity",level:3},{value:"<code>onHideUnderlay</code>",id:"onhideunderlay",level:3},{value:"<code>onShowUnderlay</code>",id:"onshowunderlay",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>underlayColor</code>",id:"underlaycolor",level:3},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",level:3},{value:"<code>tvParallaxProperties</code>",id:"tvparallaxproperties",level:3}];function p(e){const t=Object.assign({blockquote:"blockquote",p:"p",a:"a",code:"code",pre:"pre",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,r.jsx)(t.a,{href:"/docs/next/pressable",children:"Pressable"})," API."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5c01\u88c5\u89c6\u56fe\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94\u89e6\u6478\u64cd\u4f5c\u3002\u5f53\u6309\u4e0b\u7684\u65f6\u5019\uff0c\u5c01\u88c5\u7684\u89c6\u56fe\u7684\u4e0d\u900f\u660e\u5ea6\u4f1a\u964d\u4f4e\uff0c\u540c\u65f6\u4f1a\u6709\u4e00\u4e2a\u5e95\u5c42\u7684\u989c\u8272\u900f\u8fc7\u800c\u88ab\u7528\u6237\u770b\u5230\uff0c\u4f7f\u5f97\u89c6\u56fe\u53d8\u6697\u6216\u53d8\u4eae\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u5e95\u5c42\u5b9e\u73b0\u4e0a\uff0c\u5b9e\u9645\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u89c6\u56fe\u5230\u89c6\u56fe\u5c42\u7ea7\u4e2d\uff0c\u5982\u679c\u4f7f\u7528\u7684\u65b9\u6cd5\u4e0d\u6b63\u786e\uff0c\u6709\u65f6\u5019\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u4e0d\u5e0c\u671b\u51fa\u73b0\u7684\u89c6\u89c9\u6548\u679c\u3002\u8b6c\u5982\u6ca1\u6709\u7ed9\u89c6\u56fe\u7684 backgroundColor \u663e\u5f0f\u58f0\u660e\u4e00\u4e2a\u4e0d\u900f\u660e\u7684\u989c\u8272\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u6ce8\u610f",(0,r.jsx)(t.code,{children:"TouchableHighlight"}),"\u53ea\u652f\u6301\u4e00\u4e2a\u5b50\u8282\u70b9\uff08\u4e0d\u80fd\u6ca1\u6709\u5b50\u8282\u70b9\u4e5f\u4e0d\u80fd\u591a\u4e8e\u4e00\u4e2a\uff09\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5305\u542b\u591a\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e00\u4e2a View \u6765\u5305\u88c5\u5b83\u4eec\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"function MyComponent(props) {\n  return (\n    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>\n      <Text>My Component</Text>\n    </View>\n  );\n}\n\n<TouchableHighlight\n  activeOpacity={0.6}\n  underlayColor=\"#DDDDDD\"\n  onPress={() => alert('Pressed!')}>\n  <MyComponent />\n</TouchableHighlight>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,r.jsx)(s.Z,{value:"functional",children:(0,r.jsx)(t.div,{class:"snack-player","data-snack-name":"TouchableHighlight Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20TouchableHighlightExample%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(count%20%2B%201)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7BonPress%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.countText%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%7Bcount%20%3F%20count%20%3A%20null%7D%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23DDDDDD%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20countText%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22%23FF00FF%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20TouchableHighlightExample%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,r.jsx)(s.Z,{value:"classical",children:(0,r.jsx)(t.div,{class:"snack-player","data-snack-name":"TouchableHighlight Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20constructor(props)%20%7B%5Cn%20%20%20%20super(props)%3B%5Cn%20%20%20%20this.state%20%3D%20%7B%20count%3A%200%20%7D%3B%5Cn%20%20%7D%5Cn%5Cn%20%20onPress%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis.onPress%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.countContainer%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.countText%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7Bthis.state.count%20%3F%20this.state.count%20%3A%20null%7D%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingHorizontal%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20button%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23DDDDDD%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20countContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20countText%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22%23FF00FF%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,r.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(t.p,{children:["Inherits ",(0,r.jsx)(t.a,{href:"/docs/next/touchablewithoutfeedback#props",children:"TouchableWithoutFeedback Props"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"activeopacity",children:(0,r.jsx)(t.code,{children:"activeOpacity"})}),"\n",(0,r.jsxs)(t.p,{children:["\u6307\u5b9a\u5c01\u88c5\u7684\u89c6\u56fe\u5728\u88ab\u89e6\u6478\u64cd\u4f5c\u6fc0\u6d3b\u65f6\u4ee5\u591a\u5c11\u4e0d\u900f\u660e\u5ea6\u663e\u793a\uff080 \u5230 1 \u4e4b\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a 0.85\uff09\u3002\u9700\u8981\u8bbe\u7f6e",(0,r.jsx)(t.code,{children:"underlayColor"}),"\u3002"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:"\u5426"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"onhideunderlay",children:(0,r.jsx)(t.code,{children:"onHideUnderlay"})}),"\n",(0,r.jsx)(t.p,{children:"\u5e95\u5c42\u7684\u989c\u8272\u88ab\u9690\u85cf\u7684\u65f6\u5019\u8c03\u7528\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:"\u5426"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"onshowunderlay",children:(0,r.jsx)(t.code,{children:"onShowUnderlay"})}),"\n",(0,r.jsx)(t.p,{children:"\u5f53\u5e95\u5c42\u7684\u989c\u8272\u88ab\u663e\u793a\u7684\u65f6\u5019\u8c03\u7528\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:"\u5426"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"style",children:(0,r.jsx)(t.code,{children:"style"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"View.style"}),(0,r.jsx)(t.td,{children:"\u5426"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"underlaycolor",children:(0,r.jsx)(t.code,{children:"underlayColor"})}),"\n",(0,r.jsx)(t.p,{children:"\u6709\u89e6\u6478\u64cd\u4f5c\u65f6\u663e\u793a\u51fa\u6765\u7684\u5e95\u5c42\u7684\u989c\u8272\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/next/colors",children:"color"})}),(0,r.jsx)(t.td,{children:"\u5426"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"hastvpreferredfocus",children:(0,r.jsx)(t.code,{children:"hasTVPreferredFocus"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Apple TV only)"})," TV preferred focus (see documentation for the View component)."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"}),(0,r.jsx)(t.th,{children:"\u5e73\u53f0"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"\u5426"}),(0,r.jsx)(t.td,{children:"iOS"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"tvparallaxproperties",children:(0,r.jsx)(t.code,{children:"tvParallaxProperties"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Apple TV only)"})," Object with properties to control Apple TV parallax effects."]}),"\n",(0,r.jsx)(t.p,{children:"enabled: If true, parallax effects are enabled. Defaults to true. shiftDistanceX: Defaults to 2.0. shiftDistanceY: Defaults to 2.0. tiltAngle: Defaults to 0.05. magnification: Defaults to 1.0. pressMagnification: Defaults to 1.0. pressDuration: Defaults to 0.3. pressDelay: Defaults to 0.0."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"}),(0,r.jsx)(t.th,{children:"\u5e73\u53f0"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"\u5426"}),(0,r.jsx)(t.td,{children:"iOS"})]})})]})]})}const C=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},11674:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(63445);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:a?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(27378),a=n(38944);const l={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&d(e,n,t[n]);return e};function h({children:e,hidden:t,className:n}){return r.createElement("div",u({role:"tabpanel",className:(0,a.Z)(l.tabItem,n)},{hidden:t}),e)}},48375:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(27378),a=n(38944),l=n(12112),s=n(3620),o=n(69490),i=n(14953),c=n(27886),d=n(7106),u=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&f(e,n,t[n]);if(C)for(var n of C(t))x.call(t,n)&&f(e,n,t[n]);return e},y=(e,t)=>h(e,p(t));function v(e){var t,n;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return v(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g({value:e,tabValues:t}){return t.some((t=>t.value===e))}function D({queryString:e=!1,groupId:t}){const n=(0,s.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(y(j({},n.location),{search:t.toString()}))}),[a,n])]}function w(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[s,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,u]=D({queryString:n,groupId:a}),[h,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,d.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),C=(()=>{const e=null!=c?c:h;return g({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{C&&i(C)}),[C]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var E=n(14185);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var B=Object.defineProperty,T=Object.defineProperties,A=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))V.call(t,n)&&S(e,n,t[n]);if(O)for(var n of O(t))P.call(t,n)&&S(e,n,t[n]);return e},F=(e,t)=>T(e,A(t));function _({className:e,block:t,selectedValue:n,selectValue:s,tabValues:o}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==n&&(c(t),s(a))},u=e=>{var t,n;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=null!=(t=i[n])?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=null!=(n=i[t])?n:i[i.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},o.map((({value:e,label:t,attributes:l})=>r.createElement("li",F(I({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:u,onClick:d},l),{className:(0,a.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function H({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=w(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",k.tabList)},r.createElement(_,I(I({},e),t)),r.createElement(H,I(I({},e),t)))}function Z(e){const t=(0,E.Z)();return r.createElement(N,I({key:String(t)},e),v(e.children))}},71426:(e,t,n)=>{var r=n(27378),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,l={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:d,props:l,_owner:o.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>l});var r=n(27378);const a=r.createContext({});function l(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:l(e),r.createElement(a.Provider,{value:o},t)}}}]);