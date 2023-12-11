/*! For license information please see 5ac20d8a.962a808a.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[31580],{4837:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(24246),r=n(71670);const s={id:"using-a-scrollview",title:"\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe"},a=void 0,c={id:"using-a-scrollview",title:"\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe",description:"ScrollView\u662f\u4e00\u4e2a\u901a\u7528\u7684\u53ef\u6eda\u52a8\u7684\u5bb9\u5668\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u5165\u591a\u4e2a\u7ec4\u4ef6\u548c\u89c6\u56fe\uff0c\u800c\u4e14\u8fd9\u4e9b\u7ec4\u4ef6\u5e76\u4e0d\u9700\u8981\u662f\u540c\u7c7b\u578b\u7684\u3002ScrollView \u4e0d\u4ec5\u53ef\u4ee5\u5782\u76f4\u6eda\u52a8\uff0c\u8fd8\u80fd\u6c34\u5e73\u6eda\u52a8\uff08\u901a\u8fc7horizontal\u5c5e\u6027\u6765\u8bbe\u7f6e\uff09\u3002",source:"@site/versioned_docs/version-0.71/using-a-scrollview.md",sourceDirName:".",slug:"/using-a-scrollview",permalink:"/docs/0.71/using-a-scrollview",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/using-a-scrollview.md",tags:[],version:"0.71",frontMatter:{id:"using-a-scrollview",title:"\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe"},sidebar:"docs",previous:{title:"\u5904\u7406\u6587\u672c\u8f93\u5165",permalink:"/docs/0.71/handling-text-input"},next:{title:"\u4f7f\u7528\u957f\u5217\u8868",permalink:"/docs/0.71/using-a-listview"}},i={},l=[];function C(e){const o=Object.assign({p:"p",a:"a",code:"code",div:"div"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/0.71/scrollview",children:(0,t.jsx)(o.code,{children:"ScrollView"})}),"\u662f\u4e00\u4e2a\u901a\u7528\u7684\u53ef\u6eda\u52a8\u7684\u5bb9\u5668\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u653e\u5165\u591a\u4e2a\u7ec4\u4ef6\u548c\u89c6\u56fe\uff0c\u800c\u4e14\u8fd9\u4e9b\u7ec4\u4ef6\u5e76\u4e0d\u9700\u8981\u662f\u540c\u7c7b\u578b\u7684\u3002ScrollView \u4e0d\u4ec5\u53ef\u4ee5\u5782\u76f4\u6eda\u52a8\uff0c\u8fd8\u80fd\u6c34\u5e73\u6eda\u52a8\uff08\u901a\u8fc7",(0,t.jsx)(o.code,{children:"horizontal"}),"\u5c5e\u6027\u6765\u8bbe\u7f6e\uff09\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:["\u4e0b\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u521b\u5efa\u4e86\u4e00\u4e2a\u5782\u76f4\u6eda\u52a8\u7684",(0,t.jsx)(o.code,{children:"ScrollView"}),"\uff0c\u5176\u4e2d\u8fd8\u6df7\u6742\u4e86\u56fe\u7247\u548c\u6587\u5b57\u7ec4\u4ef6\u3002"]}),"\n",(0,t.jsx)(o.div,{class:"snack-player","data-snack-name":"Using ScrollView","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Image%2C%20ScrollView%2C%20Text%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20logo%20%3D%20%7B%5Cn%20%20uri%3A%20'https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png'%2C%5Cn%20%20width%3A%2064%2C%5Cn%20%20height%3A%2064%5Cn%7D%3B%5Cn%5Cnexport%20default%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CScrollView%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EScroll%20me%20plz%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EIf%20you%20like%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EScrolling%20down%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EWhat's%20the%20best%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EFramework%20around%3F%3C%2FText%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%5Cn%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2080%20%7D%7D%3EReact%20Native%3C%2FText%3E%5Cn%20%20%3C%2FScrollView%3E%5Cn)%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,t.jsxs)(o.p,{children:["ScrollViews \u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,t.jsx)(o.code,{children:"pagingEnabled"}),"\u5c5e\u6027\u6765\u5141\u8bb8\u4f7f\u7528\u6ed1\u52a8\u624b\u52bf\u5bf9\u89c6\u56fe\u8fdb\u884c\u5206\u9875\uff0c\u5728 Android \u4e0a\u4e5f\u53ef\u4ee5\u5229\u7528",(0,t.jsx)(o.a,{href:"https://github.com/react-native-community/react-native-viewpager",children:"ViewPager"}),"\u7ec4\u4ef6\u6c34\u5e73\u6ed1\u52a8\u89c6\u56fe\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:["\u5728 iOS \u4e0a\u5305\u542b\u5355\u4e2a\u5b50\u5143\u7d20\u7684 ScrollViews \u53ef\u4ee5\u5141\u8bb8\u7528\u6237\u5bf9\u5185\u5bb9\u8fdb\u884c\u7f29\u653e. \u901a\u8fc7\u8bbe\u7f6e",(0,t.jsx)(o.code,{children:"maximumZoomScale"}),"\u548c",(0,t.jsx)(o.code,{children:"minimumZoomScale"}),"\u4e24\u8005\u7684\u5c5e\u6027, \u60a8\u7684\u7528\u6237\u80fd\u591f\u5229\u7528\u634f\u5408\u4ee5\u53ca\u6269\u5927\u624b\u52bf\u6765\u653e\u5927\u6216\u7f29\u5c0f\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"ScrollView"}),"\u9002\u5408\u7528\u6765\u663e\u793a\u6570\u91cf\u4e0d\u591a\u7684\u6eda\u52a8\u5143\u7d20\u3002\u653e\u7f6e\u5728",(0,t.jsx)(o.code,{children:"ScrollView"}),"\u4e2d\u7684\u6240\u6709\u7ec4\u4ef6\u90fd\u4f1a\u88ab\u6e32\u67d3\uff0c\u54ea\u6015\u6709\u4e9b\u7ec4\u4ef6\u56e0\u4e3a\u5185\u5bb9\u592a\u957f\u88ab\u6324\u51fa\u4e86\u5c4f\u5e55\u5916\u3002\u5982\u679c\u4f60\u9700\u8981\u663e\u793a\u8f83\u957f\u7684\u6eda\u52a8\u5217\u8868\uff0c\u90a3\u4e48\u5e94\u8be5\u4f7f\u7528\u529f\u80fd\u5dee\u4e0d\u591a\u4f46\u6027\u80fd\u66f4\u597d\u7684",(0,t.jsx)(o.code,{children:"FlatList"}),"\u7ec4\u4ef6\u3002\u4e0b\u9762\u6211\u4eec\u6765\u770b\u770b",(0,t.jsx)(o.a,{href:"/docs/0.71/using-a-listview",children:"\u5982\u4f55\u4f7f\u7528\u957f\u5217\u8868"}),"\u3002"]})]})}const d=function(e={}){const{wrapper:o}=Object.assign({},(0,r.ah)(),e.components);return o?(0,t.jsx)(o,Object.assign({},e,{children:(0,t.jsx)(C,e)})):C(e)}},71426:(e,o,n)=>{var t=n(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,n){var t,s={},l=null,C=null;for(t in void 0!==n&&(l=""+n),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(C=o.ref),o)a.call(o,t)&&!i.hasOwnProperty(t)&&(s[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===s[t]&&(s[t]=o[t]);return{$$typeof:r,type:e,key:l,ref:C,props:s,_owner:c.current}}o.Fragment=s,o.jsx=l,o.jsxs=l},24246:(e,o,n)=>{e.exports=n(71426)},71670:(e,o,n)=>{n.d(o,{Zo:()=>c,ah:()=>s});var t=n(27378);const r=t.createContext({});function s(e){const o=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const a={};function c({components:e,children:o,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:s(e),t.createElement(r.Provider,{value:c},o)}}}]);