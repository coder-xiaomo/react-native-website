/*! For license information please see 9863d968.cb0bb014.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[65701],{51217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(24246),r=t(71670);const i={id:"button",title:"Button"},d=void 0,c={unversionedId:"button",id:"button",title:"Button",description:"\u4e00\u4e2a\u7b80\u5355\u7684\u8de8\u5e73\u53f0\u7684\u6309\u94ae\u7ec4\u4ef6\u3002\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7684\u5b9a\u5236\u3002",source:"@site/../cndocs/button.md",sourceDirName:".",slug:"/button",permalink:"/docs/next/button",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/button.md",tags:[],version:"current",frontMatter:{id:"button",title:"Button"},sidebar:"\u7ec4\u4ef6",previous:{title:"ActivityIndicator",permalink:"/docs/next/activityindicator"},next:{title:"FlatList",permalink:"/docs/next/flatlist"}},l={},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:'<div class="label required basic">\u5fc5\u9700</div><strong><code>onPress</code></strong>',id:"\u5fc5\u9700onpress",level:3},{value:'<div class="label required basic">\u5fc5\u9700</div><strong><code>title</code></strong>',id:"\u5fc5\u9700title",level:3},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",level:3},{value:"<code>accessibilityActions</code>",id:"accessibilityactions",level:3},{value:"<code>onAccessibilityAction</code>",id:"onaccessibilityaction",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>testID</code>",id:"testid",level:3},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",level:3},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",level:3},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",level:3},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",level:3},{value:"<code>nextFocusRight</code>",id:"nextfocusright",level:3},{value:"<code>nextFocusUp</code>",id:"nextfocusup",level:3},{value:"<code>touchSoundDisabled</code>",id:"touchsounddisabled",level:3}];function h(e){const n=Object.assign({p:"p",code:"code",pre:"pre",h2:"h2",div:"div",h1:"h1",h3:"h3",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr",a:"a",em:"em"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684\u8de8\u5e73\u53f0\u7684\u6309\u94ae\u7ec4\u4ef6\u3002\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7684\u5b9a\u5236\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u6837\u5f0f\u662f\u56fa\u5b9a\u7684\u3002\u6240\u4ee5\u5982\u679c\u5b83\u7684\u5916\u89c2\u5e76\u4e0d\u600e\u4e48\u642d\u914d\u4f60\u7684\u8bbe\u8ba1\uff0c\u90a3\u4f60\u9700\u8981\u4f7f\u7528",(0,s.jsx)(n.code,{children:"TouchableOpacity"}),"\u6216\u662f",(0,s.jsx)(n.code,{children:"TouchableNativeFeedback"}),"\u7ec4\u4ef6\u6765\u5b9a\u5236\u81ea\u5df1\u6240\u9700\u8981\u7684\u6309\u94ae\uff0c\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u5728 github.com \u7f51\u7ad9\u4e0a\u641c\u7d22 'react native button' \u6765\u770b\u770b\u793e\u533a\u5176\u4ed6\u4eba\u7684\u4f5c\u54c1\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'import { Button } from \'react-native\';\n...\n\n<Button\n  onPress={onPressLearnMore}\n  title="Learn More"\n  color="#841584"\n  accessibilityLabel="Learn more about this purple button"\n/>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"Buttons","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20StyleSheet%2C%20Button%2C%20View%2C%20SafeAreaView%2C%20Text%2C%20Alert%20%7D%20from%20'react-native'%3B%5Cnimport%20Constants%20from%20'expo-constants'%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%3CView%20style%3D%7Bstyles.separator%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20The%20title%20and%20onPress%20handler%20are%20required.%20It%20is%20recommended%20to%20set%5Cn%20%20%20%20%20%20%20%20%20%20accessibilityLabel%20to%20help%20make%20your%20app%20usable%20by%20everyone.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Press%20me%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Simple%20Button%20pressed')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20Adjust%20the%20color%20in%20a%20way%20that%20looks%20standard%20on%20each%20platform.%20On%5Cn%20%20%20%20%20%20%20%20%20%20iOS%2C%20the%20color%20prop%20controls%20the%20color%20of%20the%20text.%20On%20Android%2C%20the%5Cn%20%20%20%20%20%20%20%20%20%20color%20adjusts%20the%20background%20color%20of%20the%20button.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Press%20me%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20color%3D%5C%22%23f194ff%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Button%20with%20adjusted%20color%20pressed')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20All%20interaction%20for%20the%20component%20are%20disabled.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Press%20me%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20disabled%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Cannot%20press%20this%20one')%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20This%20layout%20strategy%20lets%20the%20title%20define%20the%20width%20of%20the%20button.%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.fixToText%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Left%20button%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Left%20button%20pressed')%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Right%20button%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Alert.alert('Right%20button%20pressed')%7D%5Cn%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%20Constants.statusBarHeight%2C%5Cn%20%20%20%20marginHorizontal%3A%2016%2C%5Cn%20%20%7D%2C%5Cn%20%20title%3A%20%7B%5Cn%20%20%20%20textAlign%3A%20'center'%2C%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%7D%2C%5Cn%20%20fixToText%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20'row'%2C%5Cn%20%20%20%20justifyContent%3A%20'space-between'%2C%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20'%23737373'%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}),"\n",(0,s.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(n.h3,{id:"\u5fc5\u9700onpress",children:[(0,s.jsx)("div",{class:"label required basic",children:"\u5fc5\u9700"}),(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"onPress"})})]}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u70b9\u51fb\u6b64\u6309\u94ae\u65f6\u6240\u8c03\u7528\u7684\u5904\u7406\u51fd\u6570"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"md ({nativeEvent: [PressEvent](pressevent)})"})})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"\u5fc5\u9700title",children:[(0,s.jsx)("div",{class:"label required basic",children:"\u5fc5\u9700"}),(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"title"})})]}),"\n",(0,s.jsx)(n.p,{children:"\u6309\u94ae\u5185\u663e\u793a\u7684\u6587\u672c"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"string"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"accessibilitylabel",children:(0,s.jsx)(n.code,{children:"accessibilityLabel"})}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4e8e\u7ed9\u6b8b\u969c\u4eba\u58eb\u663e\u793a\u7684\u6587\u672c\uff08\u6bd4\u5982\u8bfb\u5c4f\u5e94\u7528\u53ef\u80fd\u4f1a\u8bfb\u53d6\u8fd9\u4e00\u5185\u5bb9\uff09"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"string"})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"accessibilityactions",children:(0,s.jsx)(n.code,{children:"accessibilityActions"})}),"\n",(0,s.jsxs)(n.p,{children:["Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The ",(0,s.jsx)(n.code,{children:"accessibilityActions"})," property should contain a list of action objects. Each action object should contain the field name and label."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/next/accessibility#accessibility-actions",children:"Accessibility guide"})," for more information."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"onaccessibilityaction",children:(0,s.jsx)(n.code,{children:"onAccessibilityAction"})}),"\n",(0,s.jsx)(n.p,{children:"Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform."}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/next/accessibility#accessibility-actions",children:"Accessibility guide"})," for more information."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"function"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"color",children:(0,s.jsx)(n.code,{children:"color"})}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u672c\u7684\u989c\u8272(iOS)\uff0c\u6216\u662f\u6309\u94ae\u7684\u80cc\u666f\u8272(Android)"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(n.tbody,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"colors",children:"color"})})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"disabled",children:(0,s.jsx)(n.code,{children:"disabled"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u7f6e\u4e3a true \u65f6\u6b64\u6309\u94ae\u5c06\u4e0d\u53ef\u70b9\u51fb\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"testid",children:(0,s.jsx)(n.code,{children:"testID"})}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u6b64\u89c6\u56fe\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"hastvpreferredfocus",children:(0,s.jsx)(n.code,{children:"hasTVPreferredFocus"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"(Apple TV only)"})," TV preferred focus (see documentation for the View component)."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"iOS"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"nextfocusdown",children:(0,s.jsx)(n.code,{children:"nextFocusDown"})}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates down. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nextfocusforward",children:(0,s.jsx)(n.code,{children:"nextFocusForward"})}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates forward. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nextfocusleft",children:(0,s.jsx)(n.code,{children:"nextFocusLeft"})}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates left. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nextfocusright",children:(0,s.jsx)(n.code,{children:"nextFocusRight"})}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates right. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nextfocusup",children:(0,s.jsx)(n.code,{children:"nextFocusUp"})}),"\n",(0,s.jsxs)(n.p,{children:["Designates the next view to receive focus when the user navigates up. See the ",(0,s.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp",children:"Android documentation"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"touchsounddisabled",children:(0,s.jsx)(n.code,{children:"touchSoundDisabled"})}),"\n",(0,s.jsx)(n.p,{children:"If true, doesn't play system sound on touch."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"Android"})]})})]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},71426:(e,n,t)=>{var s=t(27378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var s,i={},o=null,h=null;for(s in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)d.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:o,ref:h,props:i,_owner:c.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(27378);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||d:i(e),s.createElement(r.Provider,{value:c},n)}}}]);