/*! For license information please see b6220ba5.3976d320.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[96637],{13065:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var s=d(24246),t=d(71670);const n={id:"view-style-props",title:"View \u6837\u5f0f\u5c5e\u6027"},i=void 0,l={unversionedId:"view-style-props",id:"version-0.72/view-style-props",title:"View \u6837\u5f0f\u5c5e\u6027",description:"\u793a\u4f8b",source:"@site/versioned_docs/version-0.72/view-style-props.md",sourceDirName:".",slug:"/view-style-props",permalink:"/docs/view-style-props",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/view-style-props.md",tags:[],version:"0.72",frontMatter:{id:"view-style-props",title:"View \u6837\u5f0f\u5c5e\u6027"},sidebar:"\u7ec4\u4ef6",previous:{title:"Text \u6837\u5f0f\u5c5e\u6027",permalink:"/docs/text-style-props"},next:{title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61",permalink:"/docs/layoutevent"}},o={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Props",id:"props",level:2},{value:"<code>borderRightColor</code>",id:"borderrightcolor",level:3},{value:"<code>backfaceVisibility</code>",id:"backfacevisibility",level:3},{value:"<code>borderBottomColor</code>",id:"borderbottomcolor",level:3},{value:"<code>borderBottomEndRadius</code>",id:"borderbottomendradius",level:3},{value:"<code>borderBottomLeftRadius</code>",id:"borderbottomleftradius",level:3},{value:"<code>borderBottomRightRadius</code>",id:"borderbottomrightradius",level:3},{value:"<code>borderBottomStartRadius</code>",id:"borderbottomstartradius",level:3},{value:"<code>borderBottomWidth</code>",id:"borderbottomwidth",level:3},{value:"<code>borderColor</code>",id:"bordercolor",level:3},{value:"<code>borderEndColor</code>",id:"borderendcolor",level:3},{value:"<code>borderLeftColor</code>",id:"borderleftcolor",level:3},{value:"<code>borderLeftWidth</code>",id:"borderleftwidth",level:3},{value:"<code>borderRadius</code>",id:"borderradius",level:3},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>borderRightWidth</code>",id:"borderrightwidth",level:3},{value:"<code>borderStartColor</code>",id:"borderstartcolor",level:3},{value:"<code>borderStyle</code>",id:"borderstyle",level:3},{value:"<code>borderTopColor</code>",id:"bordertopcolor",level:3},{value:"<code>borderTopEndRadius</code>",id:"bordertopendradius",level:3},{value:"<code>borderTopLeftRadius</code>",id:"bordertopleftradius",level:3},{value:"<code>borderTopRightRadius</code>",id:"bordertoprightradius",level:3},{value:"<code>borderTopStartRadius</code>",id:"bordertopstartradius",level:3},{value:"<code>borderTopWidth</code>",id:"bordertopwidth",level:3},{value:"<code>borderWidth</code>",id:"borderwidth",level:3},{value:"<code>opacity</code>",id:"opacity",level:3},{value:"<code>elevation</code>",id:"elevation",level:3}];function h(e){const r=Object.assign({h3:"h3",div:"div",h1:"h1",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",hr:"hr",p:"p"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(r.div,{class:"snack-player","data-snack-name":"ViewStyleProps","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnconst%20ViewStyleProps%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.top%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.middle%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.bottom%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%7D%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-between%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23fff%5C%22%2C%5Cn%20%20%20%20padding%3A%2020%2C%5Cn%20%20%20%20margin%3A%2010%2C%5Cn%20%20%7D%2C%5Cn%20%20top%3A%20%7B%5Cn%20%20%20%20flex%3A%200.3%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22grey%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%205%2C%5Cn%20%20%20%20borderTopLeftRadius%3A%2020%2C%5Cn%20%20%20%20borderTopRightRadius%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%20%20middle%3A%20%7B%5Cn%20%20%20%20flex%3A%200.3%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22beige%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%205%2C%5Cn%20%20%7D%2C%5Cn%20%20bottom%3A%20%7B%5Cn%20%20%20%20flex%3A%200.3%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22pink%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%205%2C%5Cn%20%20%20%20borderBottomLeftRadius%3A%2020%2C%5Cn%20%20%20%20borderBottomRightRadius%3A%2020%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cnexport%20default%20ViewStyleProps%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}),"\n",(0,s.jsx)(r.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(r.h3,{id:"borderrightcolor",children:(0,s.jsx)(r.code,{children:"borderRightColor"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"backfacevisibility",children:(0,s.jsx)(r.code,{children:"backfaceVisibility"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"enum('visible', 'hidden')"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderbottomcolor",children:(0,s.jsx)(r.code,{children:"borderBottomColor"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderbottomendradius",children:(0,s.jsx)(r.code,{children:"borderBottomEndRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderbottomleftradius",children:(0,s.jsx)(r.code,{children:"borderBottomLeftRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderbottomrightradius",children:(0,s.jsx)(r.code,{children:"borderBottomRightRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderbottomstartradius",children:(0,s.jsx)(r.code,{children:"borderBottomStartRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderbottomwidth",children:(0,s.jsx)(r.code,{children:"borderBottomWidth"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"bordercolor",children:(0,s.jsx)(r.code,{children:"borderColor"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderendcolor",children:(0,s.jsx)(r.code,{children:"borderEndColor"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderleftcolor",children:(0,s.jsx)(r.code,{children:"borderLeftColor"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderleftwidth",children:(0,s.jsx)(r.code,{children:"borderLeftWidth"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderradius",children:(0,s.jsx)(r.code,{children:"borderRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"backgroundcolor",children:(0,s.jsx)(r.code,{children:"backgroundColor"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderrightwidth",children:(0,s.jsx)(r.code,{children:"borderRightWidth"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderstartcolor",children:(0,s.jsx)(r.code,{children:"borderStartColor"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderstyle",children:(0,s.jsx)(r.code,{children:"borderStyle"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"enum('solid', 'dotted', 'dashed')"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"bordertopcolor",children:(0,s.jsx)(r.code,{children:"borderTopColor"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"bordertopendradius",children:(0,s.jsx)(r.code,{children:"borderTopEndRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"bordertopleftradius",children:(0,s.jsx)(r.code,{children:"borderTopLeftRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"bordertoprightradius",children:(0,s.jsx)(r.code,{children:"borderTopRightRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"bordertopstartradius",children:(0,s.jsx)(r.code,{children:"borderTopStartRadius"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"bordertopwidth",children:(0,s.jsx)(r.code,{children:"borderTopWidth"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"borderwidth",children:(0,s.jsx)(r.code,{children:"borderWidth"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"opacity",children:(0,s.jsx)(r.code,{children:"opacity"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"elevation",children:(0,s.jsx)(r.code,{children:"elevation"})}),"\n",(0,s.jsxs)(r.p,{children:["(\u9650 Android)\u4f7f\u7528 Android \u539f\u751f\u7684 elevation API \u6765\u8bbe\u7f6e\u89c6\u56fe\u7684\u9ad8\u5ea6\uff08 ",(0,s.jsx)(r.a,{href:"https://developer.android.com/training/material/shadows-clipping.html#Elevation",children:"elevation API"}),"\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u4e3a\u89c6\u56fe\u6dfb\u52a0\u4e00\u4e2a\u6295\u5f71\uff0c\u5e76\u4e14\u4f1a\u5f71\u54cd\u89c6\u56fe\u5c42\u53e0\u7684\u987a\u5e8f\u3002\u6b64\u5c5e\u6027\u4ec5\u652f\u6301 Android5.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"Android"})]})})]})]})}const x=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},71426:(e,r,d)=>{var s=d(27378),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,d){var s,n={},c=null,h=null;for(s in void 0!==d&&(c=""+d),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)i.call(r,s)&&!o.hasOwnProperty(s)&&(n[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===n[s]&&(n[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:h,props:n,_owner:l.current}}r.Fragment=n,r.jsx=c,r.jsxs=c},24246:(e,r,d)=>{e.exports=d(71426)},71670:(e,r,d)=>{d.d(r,{Zo:()=>l,ah:()=>n});var s=d(27378);const t=s.createContext({});function n(e){const r=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function l({components:e,children:r,disableParentContext:d}){let l;return l=d?"function"==typeof e?e({}):e||i:n(e),s.createElement(t.Provider,{value:l},r)}}}]);