/*! For license information please see fcb6886d.6b98fca6.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[52961],{93637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(24246),s=n(71670);const a={id:"imagebackground",title:"ImageBackground"},o=void 0,i={id:"imagebackground",title:"ImageBackground",description:"A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the ` component, which has the same props as `, and add whatever children to it you would like to layer on top of it.",source:"@site/versioned_docs/version-0.70/imagebackground.md",sourceDirName:".",slug:"/imagebackground",permalink:"/docs/0.70/imagebackground",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/imagebackground.md",tags:[],version:"0.70",frontMatter:{id:"imagebackground",title:"ImageBackground"},sidebar:"\u7ec4\u4ef6",previous:{title:"Image",permalink:"/docs/0.70/image"},next:{title:"KeyboardAvoidingView",permalink:"/docs/0.70/keyboardavoidingview"}},d={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"Image Props",id:"image-props",level:3},{value:"<code>imageStyle</code>",id:"imagestyle",level:3},{value:"<code>imageRef</code>",id:"imageref",level:3},{value:"<code>style</code>",id:"style",level:3}];function l(e){const t=Object.assign({p:"p",code:"code",a:"a",h2:"h2",div:"div",hr:"hr",h1:"h1",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A common feature request from developers familiar with the web is ",(0,r.jsx)(t.code,{children:"background-image"}),". To handle this use case, you can use the ",(0,r.jsx)(t.code,{children:"<ImageBackground>"})," component, which has the same props as ",(0,r.jsx)(t.code,{children:"<Image>"}),", and add whatever children to it you would like to layer on top of it."]}),"\n",(0,r.jsxs)(t.p,{children:["You might not want to use ",(0,r.jsx)(t.code,{children:"<ImageBackground>"})," in some cases, since the implementation is very simple. Refer to ",(0,r.jsx)(t.code,{children:"<ImageBackground>"}),"'s ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js",children:"source code"})," for more insight, and create your own custom component when needed."]}),"\n",(0,r.jsx)(t.p,{children:"Note that you must specify some width and height style attributes."}),"\n",(0,r.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(t.div,{class:"snack-player","data-snack-name":"ImageBackground","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20ImageBackground%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20image%20%3D%20%7B%20uri%3A%20%5C%22https%3A%2F%2Fzh-hans.reactjs.org%2Flogo-og.png%5C%22%20%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CImageBackground%20source%3D%7Bimage%7D%20style%3D%7Bstyles.image%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EInside%3C%2FText%3E%5Cn%20%20%20%20%3C%2FImageBackground%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20flexDirection%3A%20%5C%22column%5C%22%5Cn%20%20%7D%2C%5Cn%20%20image%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20resizeMode%3A%20%5C%22cover%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20color%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20fontSize%3A%2042%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20background%3A%20%5C%22%23000000a0%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,r.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,r.jsx)(t.h3,{id:"image-props",children:(0,r.jsx)(t.a,{href:"/docs/0.70/image#props",children:"Image Props"})}),"\n",(0,r.jsx)(t.h3,{id:"imagestyle",children:(0,r.jsx)(t.code,{children:"imageStyle"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/0.70/image-style-props",children:"image styles"})}),(0,r.jsx)(t.td,{children:"\u5426"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"imageref",children:(0,r.jsx)(t.code,{children:"imageRef"})}),"\n",(0,r.jsxs)(t.p,{children:["Allows to set a reference to the inner ",(0,r.jsx)(t.code,{children:"Image"})," component"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u5fc5\u9700"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html",children:"Ref"})}),(0,r.jsx)(t.td,{children:"\u5426"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"style",children:(0,r.jsx)(t.code,{children:"style"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Type"})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/0.70/view-style-props",children:"View Style"})})})})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,t,n)=>{var r=n(27378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var r=n(27378);const s=r.createContext({});function a(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:a(e),r.createElement(s.Provider,{value:i},t)}}}]);