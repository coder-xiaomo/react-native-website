/*! For license information please see 9ddb20fc.ff82b123.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[48228],{88225:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var d=n(24246),i=n(71670);const s={id:"drawerlayoutandroid",title:"DrawerLayoutAndroid"},t=void 0,o={id:"drawerlayoutandroid",title:"DrawerLayoutAndroid",description:"\u5c01\u88c5\u4e86 Android \u5e73\u53f0DrawerLayout\u7684 React \u7ec4\u4ef6\u3002\u62bd\u5c49\uff08\u901a\u5e38\u7528\u4e8e\u5bfc\u822a\u5207\u6362\uff09\u662f\u901a\u8fc7renderNavigationView\u65b9\u6cd5\u6e32\u67d3\u7684\uff0c\u5e76\u4e14 DrawerLayoutAndroid \u7684\u76f4\u63a5\u5b50\u89c6\u56fe\u4f1a\u6210\u4e3a\u4e3b\u89c6\u56fe\uff08\u7528\u4e8e\u653e\u7f6e\u5185\u5bb9\uff09\u3002\u5bfc\u822a\u89c6\u56fe\u4e00\u5f00\u59cb\u5728\u5c4f\u5e55\u4e0a\u5e76\u4e0d\u53ef\u89c1\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u4ecedrawerPosition\u6307\u5b9a\u7684\u7a97\u53e3\u4fa7\u9762\u62d6\u62fd\u51fa\u6765\uff0c\u5e76\u4e14\u62bd\u5c49\u7684\u5bbd\u5ea6\u53ef\u4ee5\u4f7f\u7528drawerWidth\u5c5e\u6027\u6765\u6307\u5b9a\u3002",source:"@site/versioned_docs/version-0.71/drawerlayoutandroid.md",sourceDirName:".",slug:"/drawerlayoutandroid",permalink:"/docs/0.71/drawerlayoutandroid",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/drawerlayoutandroid.md",tags:[],version:"0.71",frontMatter:{id:"drawerlayoutandroid",title:"DrawerLayoutAndroid"},sidebar:"\u7ec4\u4ef6",previous:{title:"VirtualizedList",permalink:"/docs/0.71/virtualizedlist"},next:{title:"TouchableNativeFeedback",permalink:"/docs/0.71/touchablenativefeedback"}},l={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",level:3},{value:"<code>onDrawerClose</code>",id:"ondrawerclose",level:3},{value:"<code>drawerPosition</code>",id:"drawerposition",level:3},{value:"<code>drawerWidth</code>",id:"drawerwidth",level:3},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",level:3},{value:"<code>drawerLockMode</code>",id:"drawerlockmode",level:3},{value:"<code>onDrawerOpen</code>",id:"ondraweropen",level:3},{value:"<code>onDrawerSlide</code>",id:"ondrawerslide",level:3},{value:"<code>onDrawerStateChanged</code>",id:"ondrawerstatechanged",level:3},{value:"<code>drawerBackgroundColor</code>",id:"drawerbackgroundcolor",level:3},{value:"<code>statusBarBackgroundColor</code>",id:"statusbarbackgroundcolor",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>openDrawer()</code>",id:"opendrawer",level:3},{value:"<code>closeDrawer()</code>",id:"closedrawer",level:3}];function a(e){const r=Object.assign({p:"p",code:"code",blockquote:"blockquote",a:"a",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",pre:"pre"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:["\u5c01\u88c5\u4e86 Android \u5e73\u53f0",(0,d.jsx)(r.code,{children:"DrawerLayout"}),"\u7684 React \u7ec4\u4ef6\u3002\u62bd\u5c49\uff08\u901a\u5e38\u7528\u4e8e\u5bfc\u822a\u5207\u6362\uff09\u662f\u901a\u8fc7",(0,d.jsx)(r.code,{children:"renderNavigationView"}),"\u65b9\u6cd5\u6e32\u67d3\u7684\uff0c\u5e76\u4e14 DrawerLayoutAndroid \u7684\u76f4\u63a5\u5b50\u89c6\u56fe\u4f1a\u6210\u4e3a\u4e3b\u89c6\u56fe\uff08\u7528\u4e8e\u653e\u7f6e\u5185\u5bb9\uff09\u3002\u5bfc\u822a\u89c6\u56fe\u4e00\u5f00\u59cb\u5728\u5c4f\u5e55\u4e0a\u5e76\u4e0d\u53ef\u89c1\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u4ece",(0,d.jsx)(r.code,{children:"drawerPosition"}),"\u6307\u5b9a\u7684\u7a97\u53e3\u4fa7\u9762\u62d6\u62fd\u51fa\u6765\uff0c\u5e76\u4e14\u62bd\u5c49\u7684\u5bbd\u5ea6\u53ef\u4ee5\u4f7f\u7528",(0,d.jsx)(r.code,{children:"drawerWidth"}),"\u5c5e\u6027\u6765\u6307\u5b9a\u3002"]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:["\u8bd1\u6ce8\uff1a\u6b64\u7ec4\u4ef6\u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u8de8\u5e73\u53f0\u7684",(0,d.jsx)(r.a,{href:"https://reactnavigation.org/",children:"react-navigation"}),"\u4e2d\u7684 DrawerNavigation \u6765\u4ee3\u66ff\u6b64\u7ec4\u4ef6\u3002"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(r.div,{class:"snack-player","data-snack-name":"DrawerLayoutAndroid Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20DrawerLayoutAndroid%2C%20Text%2C%20StyleSheet%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BdrawerPosition%2C%20setDrawerPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20changeDrawerPosition%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20if%20(drawerPosition%20%3D%3D%3D%20%5C%22left%5C%22)%20%7B%5Cn%20%20%20%20%20%20setDrawerPosition(%5C%22right%5C%22)%3B%5Cn%20%20%20%20%7D%20else%20%7B%5Cn%20%20%20%20%20%20setDrawerPosition(%5C%22left%5C%22)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20navigationView%20%3D%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.navigationContainer%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20margin%3A%2010%2C%20fontSize%3A%2015%20%7D%7D%3EI'm%20in%20the%20Drawer!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CDrawerLayoutAndroid%5Cn%20%20%20%20%20%20drawerWidth%3D%7B300%7D%5Cn%20%20%20%20%20%20drawerPosition%3D%7BdrawerPosition%7D%5Cn%20%20%20%20%20%20renderNavigationView%3D%7B()%20%3D%3E%20navigationView%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20margin%3A%2010%2C%20fontSize%3A%2015%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20DrawerLayoutAndroid%20example%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Change%20Drawer%20Position%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20changeDrawerPosition()%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20margin%3A%2010%2C%20fontSize%3A%2015%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20Drawer%20on%20the%20%7BdrawerPosition%7D!%20Swipe%20from%20the%20side%20to%20see!%5Cn%20%20%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FDrawerLayoutAndroid%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%2050%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20navigationContainer%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20paddingTop%3A%2050%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23fff%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,d.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,d.jsxs)(r.p,{children:["\u7ee7\u627f\u6240\u6709",(0,d.jsx)(r.a,{href:"view#props",children:"View \u7684 Props"}),"."]}),"\n",(0,d.jsx)(r.h3,{id:"rendernavigationview",children:(0,d.jsx)(r.code,{children:"renderNavigationView"})}),"\n",(0,d.jsx)(r.p,{children:"\u88ab\u62c9\u5165\u7684\u5bfc\u822a\u89c6\u56fe\u7684\u5185\u5bb9\u3002"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"function"}),(0,d.jsx)(r.td,{children:"\u662f"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"ondrawerclose",children:(0,d.jsx)(r.code,{children:"onDrawerClose"})}),"\n",(0,d.jsx)(r.p,{children:"\u5bfc\u822a\u89c6\u56fe\u88ab\u5173\u95ed\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"function"}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"drawerposition",children:(0,d.jsx)(r.code,{children:"drawerPosition"})}),"\n",(0,d.jsx)(r.p,{children:"\u8bbe\u7f6e\u5bfc\u822a\u89c6\u56fe\u4ece\u5c4f\u5e55\u7684\u54ea\u4e00\u8fb9\u62c9\u5165\u3002"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"enum(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right)"}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"drawerwidth",children:(0,d.jsx)(r.code,{children:"drawerWidth"})}),"\n",(0,d.jsx)(r.p,{children:"\u8bbe\u7f6e\u5bfc\u822a\u89c6\u56fe\u4ece\u7a97\u53e3\u8fb9\u7f18\u62c9\u5165\u7684\u89c6\u56fe\u7684\u5bbd\u5ea6\u3002"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"number"}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"keyboarddismissmode",children:(0,d.jsx)(r.code,{children:"keyboardDismissMode"})}),"\n",(0,d.jsx)(r.p,{children:"\u8bbe\u7f6e\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u662f\u5426\u9690\u85cf\u8f6f\u952e\u76d8"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"'none' (\u9ed8\u8ba4)\uff0c\u62d6\u52a8\u65f6\u4e0d\u9690\u85cf\u8f6f\u952e\u76d8\u3002"}),"\n",(0,d.jsx)(r.li,{children:"'on-drag'\uff0c\u62d6\u52a8\u65f6\u9690\u85cf\u8f6f\u952e\u76d8\u3002"}),"\n"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"enum('none', 'on-drag')"}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"drawerlockmode",children:(0,d.jsx)(r.code,{children:"drawerLockMode"})}),"\n",(0,d.jsx)(r.p,{children:"\u8bbe\u7f6e\u5bfc\u822a\u89c6\u56fe\u7684\u9501\u5b9a\u6a21\u5f0f\u3002\u6709 3 \u79cd\u72b6\u6001\uff1a"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"unlocked (\u9ed8\u8ba4)\uff0c\u4e0d\u9501\u5b9a\uff0c\u5bfc\u822a\u89c6\u56fe\u53ef\u4ee5\u54cd\u5e94\u6253\u5f00\u548c\u5173\u95ed\u64cd\u4f5c\uff1b"}),"\n",(0,d.jsx)(r.li,{children:"locked-closed\uff0c\u5bfc\u822a\u89c6\u56fe\u4fdd\u6301\u5173\u95ed\uff0c\u4e0d\u80fd\u7528\u624b\u52bf\u6253\u5f00\uff1b"}),"\n",(0,d.jsxs)(r.li,{children:["locked-open\uff0c\u5bfc\u822a\u89c6\u56fe\u4fdd\u6301\u6253\u5f00\uff0c\u4e0d\u80fd\u7528\u624b\u52bf\u5173\u95ed\uff0c\u4f46\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u7a0b\u5e8f\u6253\u5f00\u6216\u5173\u95ed\u3002 (",(0,d.jsx)(r.code,{children:"openDrawer"}),"/",(0,d.jsx)(r.code,{children:"closeDrawer"}),")."]}),"\n"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"enum('unlocked', 'locked-closed', 'locked-open')"}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"ondraweropen",children:(0,d.jsx)(r.code,{children:"onDrawerOpen"})}),"\n",(0,d.jsx)(r.p,{children:"\u5bfc\u822a\u89c6\u56fe\u88ab\u6253\u5f00\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"function"}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"ondrawerslide",children:(0,d.jsx)(r.code,{children:"onDrawerSlide"})}),"\n",(0,d.jsx)(r.p,{children:"\u5bfc\u822a\u89c6\u56fe\u53d1\u751f\u4ea4\u4e92\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"function"}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"ondrawerstatechanged",children:(0,d.jsx)(r.code,{children:"onDrawerStateChanged"})}),"\n",(0,d.jsx)(r.p,{children:"\u5bfc\u822a\u89c6\u56fe\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002\u6709 3 \u79cd\u72b6\u6001\uff1a"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"idle, \u5bfc\u822a\u89c6\u56fe\u6ca1\u6709\u53d1\u751f\u4efb\u4f55\u4ea4\u4e92\uff1b"}),"\n",(0,d.jsx)(r.li,{children:"dragging, \u5bfc\u822a\u89c6\u56fe\u6b63\u5728\u53d1\u751f\u4ea4\u4e92\uff1b"}),"\n",(0,d.jsx)(r.li,{children:"settling\uff0c\u5bfc\u822a\u89c6\u56fe\u6b63\u5728\u53d1\u751f\u4ea4\u4e92\uff0c\u5e76\u4e14\u5bfc\u822a\u89c6\u56fe\u6b63\u5728\u5b8c\u6210\u5176\u5173\u95ed\u6216\u6253\u5f00\u7684\u52a8\u753b\u3002"}),"\n"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"function"}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"drawerbackgroundcolor",children:(0,d.jsx)(r.code,{children:"drawerBackgroundColor"})}),"\n",(0,d.jsx)(r.p,{children:"\u8bbe\u7f6e\u5bfc\u822a\u89c6\u56fe\u7684\u80cc\u666f\u989c\u8272\u3002\u9ed8\u8ba4\u503c\u4e3a\u767d\u8272\u3002\u5982\u679c\u4f60\u60f3\u8bbe\u7f6e\u5bfc\u822a\u89c6\u56fe\u7684\u4e0d\u900f\u660e\u5ea6\uff0c\u8bf7\u4f7f\u7528 rgba\u3002\u4f8b\u5982\uff1a"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{children:'return (\n  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">\n  </DrawerLayoutAndroid>\n);\n'})}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"/docs/0.71/colors",children:"color"})}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"statusbarbackgroundcolor",children:(0,d.jsx)(r.code,{children:"statusBarBackgroundColor"})}),"\n",(0,d.jsx)(r.p,{children:"\u4f7f\u62bd\u5c49\u5360\u6ee1\u6574\u4e2a\u5c4f\u5e55\uff0c\u5e76\u8bbe\u7f6e\u72b6\u6001\u680f\u989c\u8272(\u652f\u6301 API21+/\u5b89\u5353\u7cfb\u7edf 5.0 \u4ee5\u4e0a)\n\u4f7f\u5bfc\u822a\u89c6\u56fe\u5360\u6ee1\u6574\u4e2a\u5c4f\u5e55\uff0c\u5e76\u8bbe\u7f6e\u72b6\u6001\u680f\u80cc\u666f\uff0c\u5141\u8bb8\u4ed6\u5728\u72b6\u6001\u680f\u4e0a\u6253\u5f00\u3002\u4ec5\u5728 API 21 \u53ca\u4ee5\u4e0a\u7248\u672c\u6709\u6548\u3002"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"/docs/0.71/colors",children:"color"})}),(0,d.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,d.jsx)(r.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,d.jsx)(r.h3,{id:"opendrawer",children:(0,d.jsx)(r.code,{children:"openDrawer()"})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-jsx",children:"openDrawer();\n"})}),"\n",(0,d.jsx)(r.p,{children:"\u6253\u5f00\u5bfc\u822a\u89c6\u56fe\u3002"}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"closedrawer",children:(0,d.jsx)(r.code,{children:"closeDrawer()"})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-jsx",children:"closeDrawer();\n"})}),"\n",(0,d.jsx)(r.p,{children:"\u5173\u95ed\u5bfc\u822a\u89c6\u56fe\u3002"})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}},71426:(e,r,n)=>{var d=n(27378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var d,s={},c=null,a=null;for(d in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)t.call(r,d)&&!l.hasOwnProperty(d)&&(s[d]=r[d]);if(e&&e.defaultProps)for(d in r=e.defaultProps)void 0===s[d]&&(s[d]=r[d]);return{$$typeof:i,type:e,key:c,ref:a,props:s,_owner:o.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},24246:(e,r,n)=>{e.exports=n(71426)},71670:(e,r,n)=>{n.d(r,{Zo:()=>o,ah:()=>s});var d=n(27378);const i=d.createContext({});function s(e){const r=d.useContext(i);return d.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const t={};function o({components:e,children:r,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||t:s(e),d.createElement(i.Provider,{value:o},r)}}}]);