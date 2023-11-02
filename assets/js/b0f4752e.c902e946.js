/*! For license information please see b0f4752e.c902e946.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[57965],{47959:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=n(24246),t=n(71670);const l={id:"refreshcontrol",title:"RefreshControl"},d=void 0,i={unversionedId:"refreshcontrol",id:"version-0.70/refreshcontrol",title:"RefreshControl",description:"\u8fd9\u4e00\u7ec4\u4ef6\u53ef\u4ee5\u7528\u5728 ScrollView \u6216 FlatList \u5185\u90e8\uff0c\u4e3a\u5176\u6dfb\u52a0\u4e0b\u62c9\u5237\u65b0\u7684\u529f\u80fd\u3002\u5f53 ScrollView \u5904\u4e8e\u7ad6\u76f4\u65b9\u5411\u7684\u8d77\u70b9\u4f4d\u7f6e\uff08scrollY: 0\uff09\uff0c\u6b64\u65f6\u4e0b\u62c9\u4f1a\u89e6\u53d1\u4e00\u4e2aonRefresh\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-0.70/refreshcontrol.md",sourceDirName:".",slug:"/refreshcontrol",permalink:"/docs/0.70/refreshcontrol",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/refreshcontrol.md",tags:[],version:"0.70",frontMatter:{id:"refreshcontrol",title:"RefreshControl"},sidebar:"\u7ec4\u4ef6",previous:{title:"Pressable",permalink:"/docs/0.70/pressable"},next:{title:"ScrollView",permalink:"/docs/0.70/scrollview"}},c={},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>refreshing</code>",id:"refreshing",level:3},{value:"<code>onRefresh</code>",id:"onrefresh",level:3},{value:"<code>colors</code>",id:"colors",level:3},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"<code>progressBackgroundColor</code>",id:"progressbackgroundcolor",level:3},{value:"<code>progressViewOffset</code>",id:"progressviewoffset",level:3},{value:"<code>size</code>",id:"size",level:3},{value:"<code>tintColor</code>",id:"tintcolor",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>titleColor</code>",id:"titlecolor",level:3}];function h(e){const r=Object.assign({p:"p",code:"code",h2:"h2",div:"div",strong:"strong",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["\u8fd9\u4e00\u7ec4\u4ef6\u53ef\u4ee5\u7528\u5728 ScrollView \u6216 FlatList \u5185\u90e8\uff0c\u4e3a\u5176\u6dfb\u52a0\u4e0b\u62c9\u5237\u65b0\u7684\u529f\u80fd\u3002\u5f53 ScrollView \u5904\u4e8e\u7ad6\u76f4\u65b9\u5411\u7684\u8d77\u70b9\u4f4d\u7f6e\uff08scrollY: 0\uff09\uff0c\u6b64\u65f6\u4e0b\u62c9\u4f1a\u89e6\u53d1\u4e00\u4e2a",(0,s.jsx)(r.code,{children:"onRefresh"}),"\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(r.div,{class:"snack-player","data-snack-name":"RefreshControl","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20ScrollView%2C%5Cn%20%20RefreshControl%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20SafeAreaView%2C%5Cn%7D%20from%20'react-native'%3B%5Cnimport%20Constants%20from%20'expo-constants'%3B%5Cn%5Cnconst%20wait%20%3D%20(timeout)%20%3D%3E%20%7B%5Cn%20%20return%20new%20Promise(resolve%20%3D%3E%20%7B%5Cn%20%20%20%20setTimeout(resolve%2C%20timeout)%3B%5Cn%20%20%7D)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Brefreshing%2C%20setRefreshing%5D%20%3D%20React.useState(false)%3B%5Cn%5Cn%20%20const%20onRefresh%20%3D%20React.useCallback(()%20%3D%3E%20%7B%5Cn%20%20%20%20setRefreshing(true)%3B%5Cn%5Cn%20%20%20%20wait(2000).then(()%20%3D%3E%20setRefreshing(false))%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CScrollView%5Cn%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollView%7D%5Cn%20%20%20%20%20%20%20%20refreshControl%3D%7B%5Cn%20%20%20%20%20%20%20%20%20%20%3CRefreshControl%20refreshing%3D%7Brefreshing%7D%20onRefresh%3D%7BonRefresh%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPull%20down%20to%20see%20RefreshControl%20indicator%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20marginTop%3A%20Constants.statusBarHeight%2C%5Cn%20%20%7D%2C%5Cn%20%20scrollView%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20backgroundColor%3A%20'pink'%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u6ce8\u610f\uff1a"})," ",(0,s.jsx)(r.code,{children:"refreshing"}),"\u662f\u4e00\u4e2a\u53d7\u63a7\u5c5e\u6027\uff0c \u6240\u4ee5\u5fc5\u987b\u5728",(0,s.jsx)(r.code,{children:"onRefresh"}),"\u51fd\u6570\u4e2d\u8bbe\u7f6e\u4e3a true\uff0c\u5426\u5219 loading \u6307\u793a\u5668\u4f1a\u7acb\u5373\u505c\u6b62\u3002"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(r.h3,{id:"refreshing",children:(0,s.jsx)(r.code,{children:"refreshing"})}),"\n",(0,s.jsx)(r.p,{children:"\u89c6\u56fe\u662f\u5426\u5e94\u8be5\u5728\u5237\u65b0\u65f6\u663e\u793a\u6307\u793a\u5668\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"\u662f"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"onrefresh",children:(0,s.jsx)(r.code,{children:"onRefresh"})}),"\n",(0,s.jsx)(r.p,{children:"\u5728\u89c6\u56fe\u5f00\u59cb\u5237\u65b0\u65f6\u8c03\u7528\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"function"}),(0,s.jsx)(r.td,{children:"\u5426"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"colors",children:(0,s.jsx)(r.code,{children:"colors"})}),"\n",(0,s.jsx)(r.p,{children:"\u6307\u5b9a\u81f3\u5c11\u4e00\u79cd\u989c\u8272\u7528\u6765\u7ed8\u5236\u5237\u65b0\u6307\u793a\u5668\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["array of ",(0,s.jsx)(r.a,{href:"/docs/0.70/colors",children:"color"})]}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"enabled",children:(0,s.jsx)(r.code,{children:"enabled"})}),"\n",(0,s.jsx)(r.p,{children:"\u6307\u5b9a\u662f\u5426\u8981\u542f\u7528\u5237\u65b0\u6307\u793a\u5668\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"progressbackgroundcolor",children:(0,s.jsx)(r.code,{children:"progressBackgroundColor"})}),"\n",(0,s.jsx)(r.p,{children:"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u80cc\u666f\u8272\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/0.70/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"progressviewoffset",children:(0,s.jsx)(r.code,{children:"progressViewOffset"})}),"\n",(0,s.jsx)(r.p,{children:"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u5782\u76f4\u8d77\u59cb\u4f4d\u7f6e(top offset)\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"number"}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"size",children:(0,s.jsx)(r.code,{children:"size"})}),"\n",(0,s.jsx)(r.p,{children:"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u5927\u5c0f\uff0c\u5177\u4f53\u6570\u503c\u53ef\u53c2\u9605 RefreshControl.SIZE."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"enum(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE)"}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"Android"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"tintcolor",children:(0,s.jsx)(r.code,{children:"tintColor"})}),"\n",(0,s.jsx)(r.p,{children:"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u989c\u8272\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/0.70/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"iOS"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"title",children:(0,s.jsx)(r.code,{children:"title"})}),"\n",(0,s.jsx)(r.p,{children:"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u4e0b\u663e\u793a\u7684\u6587\u5b57\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"string"}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"iOS"})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"titlecolor",children:(0,s.jsx)(r.code,{children:"titleColor"})}),"\n",(0,s.jsx)(r.p,{children:"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u4e0b\u663e\u793a\u7684\u6587\u5b57\u7684\u989c\u8272\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(r.th,{children:"\u5e73\u53f0"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/0.70/colors",children:"color"})}),(0,s.jsx)(r.td,{children:"\u5426"}),(0,s.jsx)(r.td,{children:"iOS"})]})})]})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},71426:(e,r,n)=>{var s=n(27378),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var s,l={},o=null,h=null;for(s in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(h=r.ref),r)d.call(r,s)&&!c.hasOwnProperty(s)&&(l[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===l[s]&&(l[s]=r[s]);return{$$typeof:t,type:e,key:o,ref:h,props:l,_owner:i.current}}r.Fragment=l,r.jsx=o,r.jsxs=o},24246:(e,r,n)=>{e.exports=n(71426)},71670:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>l});var s=n(27378);const t=s.createContext({});function l(e){const r=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const d={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||d:l(e),s.createElement(t.Provider,{value:i},r)}}}]);