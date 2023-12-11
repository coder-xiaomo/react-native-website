/*! For license information please see 20b2c2b8.e1e3a0e7.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[30423],{83846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>C,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(24246),i=t(71670),r=t(48375),s=t(86386),o=t(11674);const l={id:"layoutanimation",title:"LayoutAnimation"},C=void 0,c={id:"layoutanimation",title:"LayoutAnimation",description:"\u5f53\u5e03\u5c40\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u5c06\u89c6\u56fe\u8fd0\u52a8\u5230\u5b83\u4eec\u65b0\u7684\u4f4d\u7f6e\u4e0a\u3002",source:"@site/versioned_docs/version-0.70/layoutanimation.md",sourceDirName:".",slug:"/layoutanimation",permalink:"/docs/0.70/layoutanimation",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/layoutanimation.md",tags:[],version:"0.70",frontMatter:{id:"layoutanimation",title:"LayoutAnimation"},sidebar:"api",previous:{title:"Keyboard",permalink:"/docs/0.70/keyboard"},next:{title:"Linking",permalink:"/docs/0.70/linking"}},d={},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>configureNext()</code>",id:"configurenext",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"config",id:"config",level:5},{value:"<code>create()</code>",id:"create",level:3},{value:"Properties",id:"properties",level:2},{value:"Types",id:"types",level:3},{value:"Properties",id:"properties-1",level:3},{value:"Presets",id:"presets",level:3},{value:"easeInEaseOut",id:"easeineaseout",level:3},{value:"linear",id:"linear",level:3},{value:"spring",id:"spring",level:3}];function h(e){const n=Object.assign({p:"p",strong:"strong",pre:"pre",code:"code",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h5:"h5",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u5f53\u5e03\u5c40\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u5c06\u89c6\u56fe\u8fd0\u52a8\u5230\u5b83\u4eec\u65b0\u7684\u4f4d\u7f6e\u4e0a\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4e00\u4e2a\u5e38\u7528\u7684\u8c03\u7528\u6b64 API \u7684\u529e\u6cd5\u662f\u5728\u72b6\u6001\u66f4\u65b0\u524d\u8c03\u7528\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\u5982\u679c\u8981\u5728",(0,a.jsx)(n.strong,{children:"Android"}),"\u4e0a\u4f7f\u7528\u6b64\u52a8\u753b\uff0c\u5219\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u542f\u7528\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"import { UIManager } from 'react-native';\n\nif (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u5e94\u8be5\u5199\u5728\u4efb\u4f55\u7ec4\u4ef6\u52a0\u8f7d\u4e4b\u524d\uff0c\u6bd4\u5982\u53ef\u4ee5\u5199\u5230 index.js \u7684\u5f00\u5934\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20LayoutAnimation%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20UIManager%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20%5C%22collapse%5C%22%20%3A%20%5C%22expand%5C%22%7D!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20style%20%3D%20StyleSheet.create(%7B%5Cn%20%20tile%3A%20%7B%5Cn%20%20%20%20background%3A%20%5C%22lightGrey%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderColor%3A%20%5C%22%23d6d7da%5C%22%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20overflow%3A%20%5C%22hidden%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,a.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,a.jsx)(n.h3,{id:"configurenext",children:(0,a.jsx)(n.code,{children:"configureNext()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8ba1\u5212\u4e0b\u4e00\u6b21\u5e03\u5c40\u8981\u53d1\u751f\u7684\u52a8\u753b\u3002"}),"\n",(0,a.jsx)(n.h4,{id:"\u53c2\u6570",children:"\u53c2\u6570\uff1a"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u540d\u79f0"}),(0,a.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,a.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,a.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"config"}),(0,a.jsx)(n.td,{children:"object"}),(0,a.jsx)(n.td,{children:"\u662f"}),(0,a.jsx)(n.td,{children:"\u770b\u4e0b\u9762\u7684\u8bf4\u660e"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"onAnimationDidEnd"}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{children:"\u5426"}),(0,a.jsx)(n.td,{children:"\u52a8\u753b\u7ed3\u675f\u540e\u7684\u56de\u8c03"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"onAnimationDidFail"}),(0,a.jsx)(n.td,{children:"function"}),(0,a.jsx)(n.td,{children:"\u5426"}),(0,a.jsx)(n.td,{children:"\u52a8\u753b\u5931\u8d25\u540e\u7684\u56de\u8c03"})]})]})]}),"\n",(0,a.jsx)(n.h5,{id:"config",children:"config"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"duration"})," \u52a8\u753b\u6301\u7eed\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"create"}),"\uff0c\u914d\u7f6e\u521b\u5efa\u65b0\u89c6\u56fe\u65f6\u7684\u52a8\u753b\u3002\uff08\u53c2\u9605",(0,a.jsx)(n.code,{children:"Anim"}),"\u7c7b\u578b\uff09"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"update"}),"\uff0c\u914d\u7f6e\u88ab\u66f4\u65b0\u7684\u89c6\u56fe\u7684\u52a8\u753b\u3002\uff08\u53c2\u9605",(0,a.jsx)(n.code,{children:"Anim"}),"\u7c7b\u578b\uff09"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"create",children:(0,a.jsx)(n.code,{children:"create()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static create(duration, type, creationProp)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u7528\u6765\u521b\u5efa",(0,a.jsx)(n.code,{children:"configureNext"}),"\u6240\u9700\u7684 config \u53c2\u6570\u7684\u8f85\u52a9\u51fd\u6570\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,a.jsxs)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,a.jsx)(s.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%5Cn%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%5Cn%20%20%20%20%20%20LayoutAnimation.create(%5Cn%20%20%20%20%20%20%20%20500%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%5Cn%20%20%20%20%20%20)%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(s.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20boxPosition%3A%20%5C%22left%5C%22%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%5Cn%20%20%20%20%20%20LayoutAnimation.create(%5Cn%20%20%20%20%20%20%20%20500%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%5Cn%20%20%20%20%20%20)%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20boxPosition%3A%20this.state.boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7Bthis.toggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,a.jsxs)(n.p,{children:["An enumeration of animation types to be used in the ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#create",children:(0,a.jsx)(n.code,{children:"create"})})," method, or in the ",(0,a.jsx)(n.code,{children:"create"}),"/",(0,a.jsx)(n.code,{children:"update"}),"/",(0,a.jsx)(n.code,{children:"delete"})," configs for ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#configurenext",children:(0,a.jsx)(n.code,{children:"configureNext"})}),". (example usage: ",(0,a.jsx)(n.code,{children:"LayoutAnimation.Types.easeIn"}),")"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.th,{children:"Types"})})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"spring"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"linear"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"easeInEaseOut"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"easeIn"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"easeOut"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"keyboard"})})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"properties-1",children:"Properties"}),"\n",(0,a.jsxs)(n.p,{children:["An enumeration of layout properties to be animated to be used in the ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#create",children:(0,a.jsx)(n.code,{children:"create"})})," method, or in the ",(0,a.jsx)(n.code,{children:"create"}),"/",(0,a.jsx)(n.code,{children:"update"}),"/",(0,a.jsx)(n.code,{children:"delete"})," configs for ",(0,a.jsx)(n.a,{href:"/docs/0.70/layoutanimation#configurenext",children:(0,a.jsx)(n.code,{children:"configureNext"})}),". (example usage: ",(0,a.jsx)(n.code,{children:"LayoutAnimation.Properties.opacity"}),")"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.th,{children:"Properties"})})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"opacity"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"scaleX"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"scaleY"})}),(0,a.jsx)(n.tr,{children:(0,a.jsx)(n.td,{children:"scaleXY"})})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"presets",children:"Presets"}),"\n",(0,a.jsx)(n.p,{children:"A set of predefined animation config."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Presets"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"easeInEaseOut"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"create(300, 'easeInEaseOut', 'opacity')"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"linear"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"create(500, 'linear', 'opacity')"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"spring"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"})})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"easeineaseout",children:"easeInEaseOut"}),"\n",(0,a.jsxs)(n.p,{children:["Shortcut to bind ",(0,a.jsx)(n.code,{children:"configureNext()"})," methods with ",(0,a.jsx)(n.code,{children:"Presets.easeInEaseOut"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"linear",children:"linear"}),"\n",(0,a.jsxs)(n.p,{children:["Shortcut to bind ",(0,a.jsx)(n.code,{children:"configureNext()"})," methods with ",(0,a.jsx)(n.code,{children:"Presets.linear"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"spring",children:"spring"}),"\n",(0,a.jsxs)(n.p,{children:["Shortcut to bind ",(0,a.jsx)(n.code,{children:"configureNext()"})," methods with ",(0,a.jsx)(n.code,{children:"Presets.spring"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Example usage:"}),"\n",(0,a.jsxs)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,a.jsx)(s.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%5Cn%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(s.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20firstBoxPosition%3A%20%5C%22left%5C%22%2C%5Cn%20%20%20%20secondBoxPosition%3A%20%5C%22left%5C%22%2C%5Cn%20%20%20%20thirdBoxPosition%3A%20%5C%22left%5C%22%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20firstBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20secondBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20thirdBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7Bthis.toggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7Bthis.toggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7Bthis.toggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},11674:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(63445);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:i?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(27378),i=t(38944);const r={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(o)for(var t of o(n))C.call(n,t)&&c(e,t,n[t]);return e};function u({children:e,hidden:n,className:t}){return a.createElement("div",d({role:"tabpanel",className:(0,i.Z)(r.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>_});var a=t(27378),i=t(38944),r=t(12112),s=t(3620),o=t(69490),l=t(14953),C=t(27886),c=t(7106),d=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,D=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))x.call(n,t)&&D(e,t,n[t]);if(p)for(var t of p(n))f.call(n,t)&&D(e,t,n[t]);return e},y=(e,n)=>u(e,h(n));function B(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function g(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return B(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,C.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,s.k6)(),i=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace(y(m({},t.location),{search:n.toString()}))}),[i,t])]}function A(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=g(e),[s,l]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[C,d]=j({queryString:t,groupId:i}),[u,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,i]=(0,c.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:i}),p=(()=>{const e=null!=C?C:u;return b({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{p&&l(p)}),[p]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,r]),tabValues:r}}var v=t(14185);const E={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var w=Object.defineProperty,P=Object.defineProperties,k=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,I=(e,n,t)=>n in e?w(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,L=(e,n)=>{for(var t in n||(n={}))O.call(n,t)&&I(e,t,n[t]);if(S)for(var t of S(n))V.call(n,t)&&I(e,t,n[t]);return e},F=(e,n)=>P(e,k(n));function T({className:e,block:n,selectedValue:t,selectValue:s,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),i=o[a].value;i!==t&&(C(n),s(i))},d=e=>{var n,t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=null!=(t=l[n])?t:l[l.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},o.map((({value:e,label:n,attributes:r})=>a.createElement("li",F(L({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:d,onClick:c},r),{className:(0,i.Z)("tabs__item",E.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function N({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function R(e){const n=A(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",E.tabList)},a.createElement(T,L(L({},e),n)),a.createElement(N,L(L({},e),n)))}function _(e){const n=(0,v.Z)();return a.createElement(R,L({key:String(n)},e),B(e.children))}},71426:(e,n,t)=>{var a=t(27378),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,t){var a,r={},C=null,c=null;for(a in void 0!==t&&(C=""+t),void 0!==n.key&&(C=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,a)&&!l.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===r[a]&&(r[a]=n[a]);return{$$typeof:i,type:e,key:C,ref:c,props:r,_owner:o.current}}n.Fragment=r,n.jsx=C,n.jsxs=C},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var a=t(27378);const i=a.createContext({});function r(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||s:r(e),a.createElement(i.Provider,{value:o},n)}}}]);