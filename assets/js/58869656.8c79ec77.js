/*! For license information please see 58869656.8c79ec77.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[87316],{35683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(24246),r=n(71670);const a={id:"state",title:"State\uff08\u72b6\u6001\uff09"},i=void 0,o={id:"state",title:"State\uff08\u72b6\u6001\uff09",description:"\u6211\u4eec\u4f7f\u7528\u4e24\u79cd\u6570\u636e\u6765\u63a7\u5236\u4e00\u4e2a\u7ec4\u4ef6\uff1aprops\u548cstate\u3002props\u662f\u5728\u7236\u7ec4\u4ef6\u4e2d\u6307\u5b9a\uff0c\u800c\u4e14\u4e00\u7ecf\u6307\u5b9a\uff0c\u5728\u88ab\u6307\u5b9a\u7684\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\u5219\u4e0d\u518d\u6539\u53d8\u3002\u5bf9\u4e8e\u9700\u8981\u6539\u53d8\u7684\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528state\u3002",source:"@site/versioned_docs/version-0.72/state.md",sourceDirName:".",slug:"/state",permalink:"/docs/0.72/state",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/state.md",tags:[],version:"0.72",frontMatter:{id:"state",title:"State\uff08\u72b6\u6001\uff09"}},c={},l=[];function d(e){const t=Object.assign({p:"p",code:"code",div:"div",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u4f7f\u7528\u4e24\u79cd\u6570\u636e\u6765\u63a7\u5236\u4e00\u4e2a\u7ec4\u4ef6\uff1a",(0,s.jsx)(t.code,{children:"props"}),"\u548c",(0,s.jsx)(t.code,{children:"state"}),"\u3002",(0,s.jsx)(t.code,{children:"props"}),"\u662f\u5728\u7236\u7ec4\u4ef6\u4e2d\u6307\u5b9a\uff0c\u800c\u4e14\u4e00\u7ecf\u6307\u5b9a\uff0c\u5728\u88ab\u6307\u5b9a\u7684\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\u5219\u4e0d\u518d\u6539\u53d8\u3002\u5bf9\u4e8e\u9700\u8981\u6539\u53d8\u7684\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528",(0,s.jsx)(t.code,{children:"state"}),"\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5047\u5982\u6211\u4eec\u9700\u8981\u5236\u4f5c\u4e00\u6bb5\u4e0d\u505c\u95ea\u70c1\u7684\u6587\u5b57\u3002\u6587\u5b57\u5185\u5bb9\u672c\u8eab\u5728\u7ec4\u4ef6\u521b\u5efa\u65f6\u5c31\u5df2\u7ecf\u6307\u5b9a\u597d\u4e86\uff0c\u6240\u4ee5\u6587\u5b57\u5185\u5bb9\u5e94\u8be5\u662f\u4e00\u4e2a",(0,s.jsx)(t.code,{children:"prop"}),"\u3002\u800c\u6587\u5b57\u7684\u663e\u793a\u6216\u9690\u85cf\u7684\u72b6\u6001\uff08\u5feb\u901f\u7684\u663e\u9690\u5207\u6362\u5c31\u4ea7\u751f\u4e86\u95ea\u70c1\u7684\u6548\u679c\uff09\u5219\u662f\u968f\u7740\u65f6\u95f4\u53d8\u5316\u7684\uff0c\u56e0\u6b64\u8fd9\u4e00\u72b6\u6001\u5e94\u8be5\u5199\u5230",(0,s.jsx)(t.code,{children:"state"}),"\u4e2d\u3002"]}),"\n",(0,s.jsx)(t.div,{class:"snack-player","data-snack-name":"State","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20Blink%20%3D%20(props)%20%3D%3E%20%7B%5Cn%20%20const%20%5BisShowingText%2C%20setIsShowingText%5D%20%3D%20useState(true)%3B%5Cn%5Cn%20%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20const%20toggle%20%3D%20setInterval(()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20setIsShowingText(!isShowingText)%3B%5Cn%20%20%20%20%20%7D%2C%201000)%3B%5Cn%5Cn%20%20%20%20%20return%20()%20%3D%3E%20clearInterval(toggle)%3B%5Cn%20%20%7D)%5Cn%5Cn%20%20if%20(!isShowingText)%20%7B%5Cn%20%20%20%20return%20null%3B%5Cn%20%20%7D%5Cn%5Cn%20%20return%20%3CText%3E%7Bprops.text%7D%3C%2FText%3E%3B%5Cn%7D%5Cn%5Cnconst%20BlinkApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7BmarginTop%3A%2050%7D%7D%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D'I%20love%20to%20blink'%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D'Yes%20blinking%20is%20so%20great'%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D'Why%20did%20they%20ever%20take%20this%20out%20of%20HTML'%20%2F%3E%5Cn%20%20%20%20%20%20%3CBlink%20text%3D'Look%20at%20me%20look%20at%20me%20look%20at%20me'%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20BlinkApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,s.jsxs)(t.p,{children:["\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u4e00\u822c\u4e0d\u4f1a\u5728\u5b9a\u65f6\u5668\u51fd\u6570\uff08setInterval\u3001setTimeout \u7b49\uff09\u4e2d\u6765\u64cd\u4f5c state\u3002\u5178\u578b\u7684\u573a\u666f\u662f\u5728\u63a5\u6536\u5230\u670d\u52a1\u5668\u8fd4\u56de\u7684\u65b0\u6570\u636e\uff0c\u6216\u8005\u5728\u7528\u6237\u8f93\u5165\u6570\u636e\u4e4b\u540e\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u201c\u72b6\u6001\u5bb9\u5668\u201d\u6bd4\u5982",(0,s.jsx)(t.a,{href:"http://redux.js.org/index.html",children:"Redux"}),"\u6765\u7edf\u4e00\u7ba1\u7406\u6570\u636e\u6d41\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6bcf\u6b21\u8c03\u7528",(0,s.jsx)(t.code,{children:"setState"}),"\u65f6\uff0cBlinkApp \u90fd\u4f1a\u91cd\u65b0\u6267\u884c render \u65b9\u6cd5\u91cd\u65b0\u6e32\u67d3\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u5b9a\u65f6\u5668\u6765\u4e0d\u505c\u8c03\u7528",(0,s.jsx)(t.code,{children:"setState"}),"\uff0c\u4e8e\u662f\u7ec4\u4ef6\u5c31\u4f1a\u968f\u7740\u65f6\u95f4\u53d8\u5316\u4e0d\u505c\u5730\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["State \u7684\u5de5\u4f5c\u539f\u7406\u548c React.js \u5b8c\u5168\u4e00\u81f4\uff0c\u6240\u4ee5\u5bf9\u4e8e\u5904\u7406 state \u7684\u4e00\u4e9b\u66f4\u6df1\u5165\u7684\u7ec6\u8282\uff0c\u4f60\u53ef\u4ee5\u53c2\u9605",(0,s.jsx)(t.a,{href:"https://reactjs.org/docs/react-component.html#setstate",children:"React.Component API"}),"\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u8bd1\u6ce8\uff1a\u63d0\u793a\u4e00\u4e9b\u521d\u5b66\u8005\u5e94\u8be5\u7262\u8bb0\u7684\u8981\u70b9\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4e00\u5207\u754c\u9762\u53d8\u5316\u90fd\u662f",(0,s.jsx)(t.code,{children:"\u72b6\u6001state\u53d8\u5316"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"state"}),"\u7684\u4fee\u6539\u5fc5\u987b\u901a\u8fc7",(0,s.jsx)(t.code,{children:"setState()"}),"\u65b9\u6cd5","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["this.state.likes = 100; // \u8fd9\u6837\u7684",(0,s.jsx)(t.code,{children:"\u76f4\u63a5\u8d4b\u503c\u4fee\u6539\u65e0\u6548\uff01"})]}),"\n",(0,s.jsx)(t.li,{children:"setState \u662f\u4e00\u4e2a merge \u5408\u5e76\u64cd\u4f5c\uff0c\u53ea\u4fee\u6539\u6307\u5b9a\u5c5e\u6027\uff0c\u4e0d\u5f71\u54cd\u5176\u4ed6\u5c5e\u6027"}),"\n",(0,s.jsxs)(t.li,{children:["setState \u662f",(0,s.jsx)(t.code,{children:"\u5f02\u6b65"}),"\u64cd\u4f5c\uff0c\u4fee\u6539",(0,s.jsx)(t.code,{children:"\u4e0d\u4f1a\u9a6c\u4e0a\u751f\u6548"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u770b\u5230\u8fd9\u91cc\uff0c\u4f60\u53ef\u80fd\u89c9\u5f97\u6211\u4eec\u7684\u4f8b\u5b50\u603b\u662f\u5343\u7bc7\u4e00\u5f8b\u7684\u9ed1\u8272\u6587\u672c\uff0c\u592a\u7279\u4e48\u65e0\u804a\u4e86\u3002\u90a3\u4e48\u6211\u4eec\u4e00\u8d77\u6765",(0,s.jsx)(t.a,{href:"style",children:"\u5b66\u4e60\u4e00\u4e0b\u6837\u5f0f"}),"\u5427\u3002"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var s=n(27378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,a={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>a});var s=n(27378);const r=s.createContext({});function a(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:a(e),s.createElement(r.Provider,{value:o},t)}}}]);