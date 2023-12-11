/*! For license information please see 66e1c749.a13638f3.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[87822],{59488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>C,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a=t(24246),r=t(71670),l=t(48375),s=t(86386),o=t(11674);const c={id:"backhandler",title:"BackHandler"},i=void 0,d={id:"backhandler",title:"BackHandler",description:"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-0.71/backhandler.md",sourceDirName:".",slug:"/backhandler",permalink:"/docs/0.71/backhandler",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/backhandler.md",tags:[],version:"0.71",frontMatter:{id:"backhandler",title:"BackHandler"},sidebar:"api",previous:{title:"useWindowDimensions",permalink:"/docs/0.71/usewindowdimensions"},next:{title:"PermissionsAndroid",permalink:"/docs/0.71/permissionsandroid"}},C={},u=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Usage with React Navigation",id:"usage-with-react-navigation",level:2},{value:"Backhandler hook",id:"backhandler-hook",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>exitApp()</code>",id:"exitapp",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3}];function p(e){const n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote",code:"code",a:"a",h2:"h2",pre:"pre",div:"div",hr:"hr",h1:"h1",h3:"h3"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u56de\u8c03\u51fd\u6570\u662f\u5012\u5e8f\u6267\u884c\u7684\uff08\u5373\u540e\u6dfb\u52a0\u7684\u51fd\u6570\u5148\u6267\u884c\uff09\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u5982\u679c\u67d0\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de true"}),"\uff0c\u5219\u540e\u7eed\u7684\u51fd\u6570\u90fd\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u5982\u679c\u6ca1\u6709\u6dfb\u52a0\u4efb\u4f55\u76d1\u542c\u51fd\u6570\uff0c\u6216\u8005\u6240\u6709\u7684\u76d1\u542c\u51fd\u6570\u90fd\u8fd4\u56de false"}),"\uff0c\u5219\u4f1a\u6267\u884c\u9ed8\u8ba4\u884c\u4e3a\uff0c\u9000\u51fa\u5e94\u7528\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u5982\u679c app \u5f53\u524d\u6253\u5f00\u4e86\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"Modal"}),"\u7a97\u53e3\uff0c\u5219 BackHandler \u4e0d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u3002(",(0,a.jsxs)(n.a,{href:"/docs/0.71/modal#onrequestclose",children:["\u67e5\u770b",(0,a.jsx)(n.code,{children:"Modal"}),"\u7684\u6587\u6863"]}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"BackHandler.addEventListener('hardwareBackPress', function () {\n  /**\n   * this.onMainScreen()\u548cthis.goBack()\u4e24\u4e2a\u65b9\u6cd5\u90fd\u53ea\u662f\u4f2a\u65b9\u6cd5\uff0c\u9700\u8981\u4f60\u81ea\u5df1\u53bb\u5b9e\u73b0\n   * \u4e00\u822c\u6765\u8bf4\u90fd\u8981\u914d\u5408\u5bfc\u822a\u5668\u7ec4\u4ef6\u4f7f\u7528\n   */\n\n  if (!this.onMainScreen()) {\n    this.goBack();\n    /**\n     * \u8fd4\u56detrue\u65f6\u4f1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u4f20\u9012\uff0c\u56e0\u800c\u4e0d\u4f1a\u6267\u884c\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n     */\n    return true;\n  }\n  /**\n   * \u8fd4\u56defalse\u65f6\u4f1a\u4f7f\u4e8b\u4ef6\u7ee7\u7eed\u4f20\u9012\uff0c\u89e6\u53d1\u5176\u4ed6\u6ce8\u518c\u7684\u76d1\u542c\u51fd\u6570\uff0c\u6216\u662f\u7cfb\u7edf\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n   */\n  return false;\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(n.p,{children:"The following example implements a scenario where you confirm if the user wants to exit the app:"}),"\n",(0,a.jsxs)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,a.jsx)(s.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20Alert.alert(%5C%22Hold%20on!%5C%22%2C%20%5C%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%5C%22%2C%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22YES%5C%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%5Cn%20%20%20%20%20%20%5D)%3B%5Cn%20%20%20%20%20%20return%20true%3B%5Cn%20%20%20%20%7D%3B%5Cn%5Cn%20%20%20%20const%20backHandler%20%3D%20BackHandler.addEventListener(%5Cn%20%20%20%20%20%20%5C%22hardwareBackPress%5C%22%2C%5Cn%20%20%20%20%20%20backAction%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20backHandler.remove()%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(s.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20backAction%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Alert.alert(%5C%22Hold%20on!%5C%22%2C%20%5C%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%5C%22%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20text%3A%20%5C%22YES%5C%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%5Cn%20%20%20%20%5D)%3B%5Cn%20%20%20%20return%20true%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.backHandler%20%3D%20BackHandler.addEventListener(%5Cn%20%20%20%20%20%20%5C%22hardwareBackPress%5C%22%2C%5Cn%20%20%20%20%20%20this.backAction%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20this.backHandler.remove()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BackHandler.addEventListener"})," creates an event listener & returns a ",(0,a.jsx)(n.code,{children:"NativeEventSubscription"})," object which should be cleared using ",(0,a.jsx)(n.code,{children:"NativeEventSubscription.remove"})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["Additionally ",(0,a.jsx)(n.code,{children:"BackHandler.removeEventListener"})," can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the ",(0,a.jsx)(n.code,{children:"addEventListener"})," call as shown the following example \ufe63"]}),"\n",(0,a.jsxs)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,children:[(0,a.jsx)(s.Z,{value:"functional",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Alert.alert(%5C%22Hold%20on!%5C%22%2C%20%5C%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%5C%22%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20text%3A%20%5C%22YES%5C%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%5Cn%20%20%20%20%5D)%3B%5Cn%20%20%20%20return%20true%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20BackHandler.addEventListener(%5C%22hardwareBackPress%5C%22%2C%20backAction)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%5Cn%20%20%20%20%20%20BackHandler.removeEventListener(%5C%22hardwareBackPress%5C%22%2C%20backAction)%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,a.jsx)(s.Z,{value:"classical",children:(0,a.jsx)(n.div,{class:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20backAction%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20Alert.alert(%5C%22Hold%20on!%5C%22%2C%20%5C%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%5C%22%2C%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%7B%20text%3A%20%5C%22YES%5C%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%5Cn%20%20%20%20%5D)%3B%5Cn%20%20%20%20return%20true%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20BackHandler.addEventListener(%5C%22hardwareBackPress%5C%22%2C%20this.backAction)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20BackHandler.removeEventListener(%5C%22hardwareBackPress%5C%22%2C%20this.backAction)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage-with-react-navigation",children:"Usage with React Navigation"}),"\n",(0,a.jsxs)(n.p,{children:["If you are using React Navigation to navigate across different screens, you can follow their guide on ",(0,a.jsx)(n.a,{href:"https://reactnavigation.org/docs/custom-android-back-button-handling/",children:"Custom Android back button behaviour"})]}),"\n",(0,a.jsx)(n.h2,{id:"backhandler-hook",children:"Backhandler hook"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/react-native-community/hooks#usebackhandler",children:"React Native Hooks"})," has a nice ",(0,a.jsx)(n.code,{children:"useBackHandler"})," hook which will simplify the process of setting up event listeners."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,a.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,a.jsx)(n.h3,{id:"addeventlistener",children:(0,a.jsx)(n.code,{children:"addEventListener()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static addEventListener(eventName, handler)\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"exitapp",children:(0,a.jsx)(n.code,{children:"exitApp()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static exitApp()\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"removeeventlistener",children:(0,a.jsx)(n.code,{children:"removeEventListener()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"static removeEventListener(eventName, handler)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},11674:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(27378),r=t(38944);const l={tabItem:"tabItem_wHwb"};var s=Object.defineProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,C=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(o)for(var t of o(n))i.call(n,t)&&d(e,t,n[t]);return e};function u({children:e,hidden:n,className:t}){return a.createElement("div",C({role:"tabpanel",className:(0,r.Z)(l.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>Z});var a=t(27378),r=t(38944),l=t(12112),s=t(3620),o=t(69490),c=t(14953),i=t(27886),d=t(7106),C=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?C(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))f.call(n,t)&&b(e,t,n[t]);if(h)for(var t of h(n))v.call(n,t)&&b(e,t,n[t]);return e},k=(e,n)=>u(e,p(n));function B(e){var n,t;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function x(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return B(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y({value:e,tabValues:n}){return n.some((n=>n.value===e))}function D({queryString:e=!1,groupId:n}){const t=(0,s.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(k(m({},t.location),{search:n.toString()}))}),[r,t])]}function A(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=x(e),[s,c]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[i,C]=D({queryString:t,groupId:r}),[u,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),h=(()=>{const e=null!=i?i:u;return y({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{h&&c(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),C(e),p(e)}),[C,p,l]),tabValues:l}}var g=t(14185);const w={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var E=Object.defineProperty,j=Object.defineProperties,S=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,I=(e,n,t)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,V=(e,n)=>{for(var t in n||(n={}))P.call(n,t)&&I(e,t,n[t]);if(O)for(var t of O(n))H.call(n,t)&&I(e,t,n[t]);return e},T=(e,n)=>j(e,S(n));function _({className:e,block:n,selectedValue:t,selectValue:s,tabValues:o}){const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),r=o[a].value;r!==t&&(i(n),s(r))},C=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=null!=(t=c[n])?t:c[c.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},o.map((({value:e,label:n,attributes:l})=>a.createElement("li",T(V({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>c.push(e),onKeyDown:C,onClick:d},l),{className:(0,r.Z)("tabs__item",w.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function N({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function L(e){const n=A(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",w.tabList)},a.createElement(_,V(V({},e),n)),a.createElement(N,V(V({},e),n)))}function Z(e){const n=(0,g.Z)();return a.createElement(L,V({key:String(n)},e),B(e.children))}},71426:(e,n,t)=>{var a=t(27378),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var a,l={},i=null,d=null;for(a in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,a)&&!c.hasOwnProperty(a)&&(l[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===l[a]&&(l[a]=n[a]);return{$$typeof:r,type:e,key:i,ref:d,props:l,_owner:o.current}}n.Fragment=l,n.jsx=i,n.jsxs=i},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>l});var a=t(27378);const r=a.createContext({});function l(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||s:l(e),a.createElement(r.Provider,{value:o},n)}}}]);