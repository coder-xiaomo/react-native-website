/*! For license information please see eb50cd7d.bcb6a0f1.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9718],{6235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>C,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(24246),a=t(71670),i=t(48375),o=t(86386),s=t(11674);const l={id:"vibration",title:"Vibration"},c=void 0,d={id:"vibration",title:"Vibration",description:"Vibrates the device.",source:"@site/versioned_docs/version-0.70/vibration.md",sourceDirName:".",slug:"/vibration",permalink:"/docs/0.70/vibration",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/vibration.md",tags:[],version:"0.70",frontMatter:{id:"vibration",title:"Vibration"},sidebar:"api",previous:{title:"Transforms",permalink:"/docs/0.70/transforms"},next:{title:"useColorScheme",permalink:"/docs/0.70/usecolorscheme"}},C={},u=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>vibrate()</code>",id:"vibrate",level:3},{value:"<code>cancel()</code>",id:"cancel",level:3}];function p(e){const n=Object.assign({p:"p",h2:"h2",div:"div",blockquote:"blockquote",code:"code",hr:"hr",h1:"h1",h3:"h3",pre:"pre",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Vibrates the device."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(i.Z,{groupId:"syntax",defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,children:[(0,r.jsx)(o.Z,{value:"functional",children:(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%5Cn%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%5Cn%5Cn%20%20const%20PATTERN%20%3D%20%5B%5Cn%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%203%20*%20ONE_SECOND_IN_MS%5Cn%20%20%5D%3B%5Cn%5Cn%20%20const%20PATTERN_DESC%20%3D%5Cn%20%20%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%3F%20%5C%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%5C%22%5Cn%20%20%20%20%20%20%3A%20%5C%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%5C%22%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Vibrate%20once%5C%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%3F%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20for%2010%20seconds%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%3A%20null%7D%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%20until%20cancelled%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Stop%20vibration%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%5Cn%20%20%20%20%20%20%20%20color%3D%5C%22%23FF0000%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20%5C%22%23737373%5C%22%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})}),(0,r.jsx)(o.Z,{value:"classical",children:(0,r.jsx)(n.div,{class:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%5Cn%5Cn%20%20%20%20const%20PATTERN%20%3D%20%5B%5Cn%20%20%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%20%20%203%20*%20ONE_SECOND_IN_MS%5Cn%20%20%20%20%5D%3B%5Cn%5Cn%20%20%20%20const%20PATTERN_DESC%20%3D%5Cn%20%20%20%20%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%3F%20%5C%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%5C%22%5Cn%20%20%20%20%20%20%20%20%3A%20%5C%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%5C%22%3B%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Vibrate%20once%5C%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%3F%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20for%2010%20seconds%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%3A%20null%7D%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%20until%20cancelled%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Stop%20vibration%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%5Cn%20%20%20%20%20%20%20%20%20%20color%3D%5C%22%23FF0000%5C%22%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20%5C%22%23737373%5C%22%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Android apps should request the ",(0,r.jsx)(n.code,{children:"android.permission.VIBRATE"})," permission by adding ",(0,r.jsx)(n.code,{children:'<uses-permission android:name="android.permission.VIBRATE"/>'})," to ",(0,r.jsx)(n.code,{children:"AndroidManifest.xml"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The Vibration API is implemented as a ",(0,r.jsx)(n.code,{children:"AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)"})," call on iOS."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"vibrate",children:(0,r.jsx)(n.code,{children:"vibrate()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"Vibration.vibrate(?pattern: number | Array<number>, ?repeat: boolean)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Triggers a vibration with a fixed duration."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"On Android,"})," the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the ",(0,r.jsx)(n.code,{children:"pattern"})," argument. ",(0,r.jsx)(n.strong,{children:"On iOS,"})," the vibration duration is fixed at roughly 400 milliseconds."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"vibrate()"})," method can take a ",(0,r.jsx)(n.code,{children:"pattern"})," argument with an array of numbers that represent time in milliseconds. You may set ",(0,r.jsx)(n.code,{children:"repeat"})," to true to run through the vibration pattern in a loop until ",(0,r.jsx)(n.code,{children:"cancel()"})," is called."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"On Android,"})," the odd indices of the ",(0,r.jsx)(n.code,{children:"pattern"})," array represent the vibration duration, while the even ones represent the separation time. ",(0,r.jsx)(n.strong,{children:"On iOS,"})," the numbers in the ",(0,r.jsx)(n.code,{children:"pattern"})," array represent the separation time, as the vibration duration is fixed."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Platform"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pattern"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Vibration duration in milliseconds. Defaults to 400 ms."}),(0,r.jsx)(n.td,{children:"Android"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pattern"}),(0,r.jsx)(n.td,{children:"Array of numbers"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Vibration pattern as an array of numbers in milliseconds."}),(0,r.jsx)(n.td,{children:"Android, iOS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"repeat"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Repeat vibration pattern until cancel(), default to false."}),(0,r.jsx)(n.td,{children:"Android, iOS"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"cancel",children:(0,r.jsx)(n.code,{children:"cancel()"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"Vibration.cancel();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Call this to stop vibrating after having invoked ",(0,r.jsx)(n.code,{children:"vibrate()"})," with repetition enabled."]})]})}const b=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(63445);const a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:a?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:a?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(27378),a=t(38944);const i={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,C=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&d(e,t,n[t]);return e};function u({children:e,hidden:n,className:t}){return r.createElement("div",C({role:"tabpanel",className:(0,a.Z)(i.tabItem,t)},{hidden:n}),e)}},48375:(e,n,t)=>{t.d(n,{Z:()=>M});var r=t(27378),a=t(38944),i=t(12112),o=t(3620),s=t(69490),l=t(14953),c=t(27886),d=t(7106),C=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?C(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))h.call(n,t)&&m(e,t,n[t]);if(b)for(var t of b(n))f.call(n,t)&&m(e,t,n[t]);return e},D=(e,n)=>u(e,p(n));function x(e){var n,t;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))?t:[]}function E(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return x(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace(D(v({},t.location),{search:n.toString()}))}),[a,t])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=E(e),[o,l]=(0,r.useState)((()=>function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,C]=j({queryString:t,groupId:a}),[u,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,a]=(0,d.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:a}),b=(()=>{const e=null!=c?c:u;return y({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),C(e),p(e)}),[C,p,i]),tabValues:i}}var w=t(14185);const S={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var A=Object.defineProperty,B=Object.defineProperties,O=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,P=(e,n)=>{for(var t in n||(n={}))_.call(n,t)&&k(e,t,n[t]);if(V)for(var t of V(n))N.call(n,t)&&k(e,t,n[t]);return e},T=(e,n)=>B(e,O(n));function F({className:e,block:n,selectedValue:t,selectValue:o,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),a=s[r].value;a!==t&&(c(n),o(a))},C=e=>{var n,t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=null!=(n=l[t])?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=null!=(t=l[n])?t:l[l.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},s.map((({value:e,label:n,attributes:i})=>r.createElement("li",T(P({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:C,onClick:d},i),{className:(0,a.Z)("tabs__item",S.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function I({lazy:e,children:n,selectedValue:t}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function R(e){const n=g(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",S.tabList)},r.createElement(F,P(P({},e),n)),r.createElement(I,P(P({},e),n)))}function M(e){const n=(0,w.Z)();return r.createElement(R,P({key:String(n)},e),x(e.children))}},71426:(e,n,t)=>{var r=t(27378),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:s.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>i});var r=t(27378);const a=r.createContext({});function i(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||o:i(e),r.createElement(a.Provider,{value:s},n)}}}]);