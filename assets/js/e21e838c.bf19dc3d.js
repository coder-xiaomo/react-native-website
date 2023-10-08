/*! For license information please see e21e838c.bf19dc3d.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[94300],{54723:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(24246),t=s(71670);const i={id:"fast-refresh",title:"\u5feb\u901f\u5237\u65b0"},o=void 0,c={unversionedId:"fast-refresh",id:"version-0.71/fast-refresh",title:"\u5feb\u901f\u5237\u65b0",description:'\u5feb\u901f\u5237\u65b0\u662f React Native \u4e00\u4e2a\u7279\u6027\uff0c\u5728\u4fee\u6539\u7ec4\u4ef6\u7684\u65f6\u5019\u5feb\u901f\u5237\u65b0\u4f1a\u7ed9\u4f60\u4e00\u4e2a\u5373\u65f6\u7684\u53cd\u9988\u3002\u5feb\u901f\u5237\u65b0\u9ed8\u8ba4\u662f\u5f00\u542f\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574 React Native \u5f00\u53d1\u8005\u83dc\u5355\u91cc\u9762\u7684 "Enable Fast Refresh" \u6765\u5f00\u542f\u6216\u5173\u95ed\u3002\u5728\u5feb\u901f\u5237\u65b0\u5f00\u542f\u7684\u65f6\u5019\uff0c\u5927\u591a\u6570\u7684\u4fee\u6539\u80fd\u5728\u4e00\u5230\u4e24\u79d2\u4e4b\u5185\u5448\u73b0\u3002',source:"@site/versioned_docs/version-0.71/fast-refresh.md",sourceDirName:".",slug:"/fast-refresh",permalink:"/docs/0.71/fast-refresh",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/fast-refresh.md",tags:[],version:"0.71",frontMatter:{id:"fast-refresh",title:"\u5feb\u901f\u5237\u65b0"},sidebar:"docs",previous:{title:"\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c",permalink:"/docs/0.71/running-on-device"},next:{title:"\u8c03\u8bd5",permalink:"/docs/0.71/debugging"}},a={},d=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u9519\u8bef\u8fd8\u539f",id:"\u9519\u8bef\u8fd8\u539f",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:2},{value:"Fast Refresh and Hooks",id:"fast-refresh-and-hooks",level:2}];function l(e){const n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",em:"em",a:"a"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'\u5feb\u901f\u5237\u65b0\u662f React Native \u4e00\u4e2a\u7279\u6027\uff0c\u5728\u4fee\u6539\u7ec4\u4ef6\u7684\u65f6\u5019\u5feb\u901f\u5237\u65b0\u4f1a\u7ed9\u4f60\u4e00\u4e2a\u5373\u65f6\u7684\u53cd\u9988\u3002\u5feb\u901f\u5237\u65b0\u9ed8\u8ba4\u662f\u5f00\u542f\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574 React Native \u5f00\u53d1\u8005\u83dc\u5355\u91cc\u9762\u7684 "Enable Fast Refresh" \u6765\u5f00\u542f\u6216\u5173\u95ed\u3002\u5728\u5feb\u901f\u5237\u65b0\u5f00\u542f\u7684\u65f6\u5019\uff0c\u5927\u591a\u6570\u7684\u4fee\u6539\u80fd\u5728\u4e00\u5230\u4e24\u79d2\u4e4b\u5185\u5448\u73b0\u3002'}),"\n",(0,r.jsx)(n.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u7f16\u8f91\u4e86\u4e00\u4e2a",(0,r.jsx)(n.strong,{children:"\u4ec5\u5bfc\u51fa React \u7ec4\u4ef6"}),"\u7684\u6a21\u5757\u6587\u4ef6\uff0c\u5feb\u901f\u5237\u65b0\u53ea\u4f1a\u66f4\u65b0\u8be5\u6a21\u5757\u7684\u4ee3\u7801\uff0c\u5e76\u4e14\u91cd\u65b0\u6e32\u67d3\u4f60\u7684\u7ec4\u4ef6\u3002\u4f60\u80fd\u591f\u7f16\u8f91\u6587\u4ef6\u91cc\u9762\u7684\u4efb\u4f55\u4e1c\u897f\uff0c\u5305\u62ec\u6837\u5f0f\uff0c\u6e32\u67d3\u903b\u8f91\uff0c\u4e8b\u4ef6\u5904\u7406\u6216\u8005 effects\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u7f16\u8f91\u7684\u6a21\u5757\u5e76\u4e0d\u5bfc\u51fa React \u7ec4\u4ef6\uff0c\u5feb\u901f\u5237\u65b0\u5c06\u4f1a\u91cd\u65b0\u8fd0\u884c\u8be5\u6a21\u5757\uff0c\u548c\u5176\u4ed6\u5f15\u5165\u8be5\u6a21\u5757\u7684\u6a21\u5757\u6587\u4ef6\u3002\u4f8b\u5982\uff0c",(0,r.jsx)(n.code,{children:"Button.js"})," \u548c ",(0,r.jsx)(n.code,{children:"Modal.js"})," \u540c\u65f6\u5f15\u5165\u4e86 ",(0,r.jsx)(n.code,{children:"Theme.js"})," \uff0c\u7f16\u8f91 ",(0,r.jsx)(n.code,{children:"theme.js"})," \u7684\u65f6\u5019\uff0c",(0,r.jsx)(n.code,{children:"Button.js"})," \u548c ",(0,r.jsx)(n.code,{children:"Modal.js"})," \u90fd\u4f1a\u66f4\u65b0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6700\u540e\uff0c\u5982\u679c\u4f60",(0,r.jsx)(n.strong,{children:"\u7f16\u8f91\u4e86\u67d0\u4e2a\u6587\u4ef6\uff0c\u800c\u8fd9\u4e2a\u6587\u4ef6\u88ab React \u6e32\u67d3\u6811 \u4e4b\u5916\u7684\u6a21\u5757\u5f15\u5165"}),"\uff0c\u5219\u5feb\u901f\u5237\u65b0\u5c06\u4f1a\u56de\u9000\u5230\u5b8c\u5168\u5237\u65b0\u3002\u4f60\u53ef\u80fd\u6709\u4e00\u4e2a\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u6e32\u67d3\u4e86\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u540c\u65f6\u53c8\u5bfc\u51fa\u4e86\u4e00\u4e2a\u88ab\u5176\u4ed6",(0,r.jsx)(n.strong,{children:"\u975e React \u7ec4\u4ef6"}),"\u5f15\u5165\u7684\u503c\u3002\u4f8b\u5982\uff0c\u4f60\u7684 React \u7ec4\u4ef6\u6a21\u5757\u540c\u65f6\u5bfc\u51fa\u4e86\u4e00\u4e2a\u5e38\u91cf\uff0c\u5e76\u4e14\u5728\u975e React \u7ec4\u4ef6\u6a21\u5757\u5f15\u5165\u4e86\u5b83\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u9762\uff0c\u8003\u8651\u5c06\u67e5\u8be2\u8fc1\u79fb\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u5e76\u5c06\u5176\u5bfc\u5165\u5230\u4e24\u4e2a\u6587\u4ef6\u4e2d\u3002\u8fd9\u6837\u5feb\u901f\u5237\u65b0\u624d\u80fd\u91cd\u65b0\u751f\u6548\u3002\u5176\u4ed6\u7684\u60c5\u51b5\u4e5f\u7c7b\u4f3c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9519\u8bef\u8fd8\u539f",children:"\u9519\u8bef\u8fd8\u539f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5728\u5feb\u901f\u5237\u65b0\u7684\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86",(0,r.jsx)(n.strong,{children:"\u8bed\u6cd5\u9519\u8bef"}),"\uff0c\u53ef\u4ee5\u5728\u4fee\u590d\u9519\u8bef\u540e\u91cd\u65b0\u4fdd\u5b58\u6587\u4ef6\u3002\u7ea2\u5c4f\u8b66\u544a\u4f1a\u8ddf\u7740\u6d88\u5931\u3002\u9519\u8bef\u8bed\u6cd5\u7684\u6a21\u5757\u4f1a\u88ab\u963b\u6b62\u8fd0\u884c\uff0c\u8fd9\u6837\u4f60\u5c31\u4e0d\u9700\u8981\u91cd\u8f7d app\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u51fa\u73b0\u4e86",(0,r.jsx)(n.strong,{children:"\u5728\u6a21\u5757\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u7684\u8fd0\u884c\u65f6\u9519\u8bef"}),"\uff08\u4f8b\u5982\uff0c\u5c06",(0,r.jsx)(n.code,{children:"StyleSheet.create"}),"\u9519\u6253\u6210\u4e86",(0,r.jsx)(n.code,{children:"Style.create"}),"\uff09\uff0c\u5728\u4f60\u4fee\u590d\u9519\u8bef\u4e4b\u540e\uff0c\u5feb\u901f\u5237\u65b0\u4f1a\u8bdd\u4f1a\u7ee7\u7eed\u8fdb\u884c\u3002\u7ea2\u5c4f\u8b66\u544a\u6d88\u5931\uff0c\u6a21\u5757\u66f4\u65b0\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u51fa\u73b0\u4e86",(0,r.jsx)(n.strong,{children:"\u7ec4\u4ef6\u5185\u90e8\u53d1\u751f\u7684\u8fd0\u884c\u65f6\u9519\u8bef"}),"\uff0c\u5728\u4f60\u4fee\u590d\u9519\u8bef\u4e4b\u540e\uff0c\u5feb\u901f\u5237\u65b0\u4f1a\u8bdd",(0,r.jsx)(n.em,{children:"\u4e5f"}),"\u5c06\u7ee7\u7eed\u8fdb\u884c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cReact \u5c06\u4f1a\u4f7f\u7528\u66f4\u65b0\u540e\u7684\u4ee3\u7801\u91cd\u65b0\u6302\u8f7d\u4f60\u7684\u5e94\u7528\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u4e86",(0,r.jsx)(n.a,{href:"https://zh-hans.reactjs.org/docs/error-boundaries.html",children:"error boundaries"}),"(which is a good idea for graceful failures in production), they will retry rendering on the next edit after a redbox. In that sense, having an error boundary can prevent you from always getting kicked out to the root app screen. However, keep in mind that error boundaries shouldn't be ",(0,r.jsx)(n.em,{children:"too"})," granular. They are used by React in production, and should always be designed intentionally."]}),"\n",(0,r.jsx)(n.h2,{id:"\u9650\u5236",children:"\u9650\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u4f60\u6b63\u5728\u7f16\u8f91\u7684\u65f6\u5019\uff0c\u5feb\u901f\u5237\u65b0\u4f1a\u5c1d\u8bd5\u4fdd\u6301\u7ec4\u4ef6\u91cc\u9762\u7684\u672c\u5730 state\uff0c\u4f46\u4ec5\u9650\u4e8e\u8fd9\u79cd\u4fdd\u6301\u662f\u5b89\u5168\u7684\u60c5\u51b5\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5728\u4f60\u7f16\u8f91\u6587\u4ef6\u4e4b\u540e\uff0c\u7ec4\u4ef6\u672c\u5730\u7684 state \u88ab\u91cd\u7f6e\u7684\u539f\u56e0\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"class \u7ec4\u4ef6\u7684\u672c\u5730 state \u4e0d\u4f1a\u88ab\u4fdd\u6301\uff08\u4ec5\u4fdd\u6301\u51fd\u6570\u7ec4\u4ef6\u548c Hooks \u7684 state\uff09\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u9664\u4e86 React \u7ec4\u4ef6\u5916\uff0c\u60a8\u6b63\u5728\u7f16\u8f91\u7684\u6a21\u5757\u53ef\u80fd\u8fd8\u6709 ",(0,r.jsx)(n.em,{children:"\u5176\u4ed6"})," \u5bfc\u51fa\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6709\u65f6\u5019\uff0c\u4e00\u4e2a\u6a21\u5757\u5bfc\u51fa\u7684\u662f\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"createNavigationContainer(MyScreen)"}),"\u3002\u5982\u679c\u8fd4\u56de\u7684\u7ec4\u4ef6\u662f\u4e00\u4e2a class \u7ec4\u4ef6\uff0cstate \u5c06\u4f1a\u88ab\u91cd\u7f6e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u957f\u8fdc\u6765\u770b\uff0c\u968f\u7740\u8d8a\u6765\u8d8a\u591a\u7684\u4ee3\u7801\u5e93\u8f6c\u79fb\u5230\u51fd\u6570\u7ec4\u4ef6\u548c Hooks\uff0c\u4f1a\u51fa\u73b0\u66f4\u591a state \u88ab\u4fdd\u6301\u7684\u60c5\u51b5\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u63d0\u793a",children:"\u63d0\u793a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5feb\u901f\u5237\u65b0\u9ed8\u8ba4\u4fdd\u6301\u51fd\u6570\u7ec4\u4ef6\uff08\u548c Hooks\uff09\u7684\u672c\u5730 state\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6709\u65f6\u5019\u4f60\u53ef\u80fd\u60f3\u8981 ",(0,r.jsx)(n.em,{children:"\u5f3a\u5236"})," \u72b6\u6001\u88ab\u91cd\u7f6e\uff0c\u67d0\u4e2a\u7ec4\u4ef6\u88ab\u91cd\u65b0\u6302\u8f7d\u3002\u4f8b\u5982\u4f60\u6b63\u5728\u8c03\u8bd5\u4e00\u4e2a\u53d1\u751f\u5728\u6302\u8f7d\u671f\u95f4\u7684\u52a8\u753b\uff0c\u8fd9\u79cd\u60c5\u51b5\u662f\u5f88\u6709\u7528\u7684\u3002\u4e3a\u4e86\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u4f60\u53ef\u4ee5\u5728\u6587\u4ef6\u7684\u4efb\u4f55\u5730\u65b9\u589e\u52a0 ",(0,r.jsx)(n.code,{children:"// @refresh reset"}),"\u3002\u8fd9\u4e2a\u6307\u4ee4\u662f\u6587\u4ef6\u7684\u672c\u5730\u6307\u4ee4\uff0c\u6307\u793a\u5feb\u901f\u5237\u65b0\u5728\u6bcf\u6b21\u7f16\u8f91\u65f6\u91cd\u65b0\u52a0\u8f7d\u8be5\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u7ec4\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fast-refresh-and-hooks",children:"Fast Refresh and Hooks"}),"\n",(0,r.jsxs)(n.p,{children:["Fast Refresh \u4f1a\u5c3d\u53ef\u80fd\u7684\u5728\u7f16\u8f91\u5237\u65b0\u65f6\u4fdd\u7559\u7ec4\u4ef6\u7684\u72b6\u6001\u3002In particular, ",(0,r.jsx)(n.code,{children:"useState"})," and ",(0,r.jsx)(n.code,{children:"useRef"})," preserve their previous values as long as you don't change their arguments or the order of the Hook calls."]}),"\n",(0,r.jsxs)(n.p,{children:["\u50cf ",(0,r.jsx)(n.code,{children:"useEffect"}),", ",(0,r.jsx)(n.code,{children:"useMemo"}),", \u4ee5\u53ca ",(0,r.jsx)(n.code,{children:"useCallback"})," \u8fd9\u4e9b\u5e26\u6709\u4f9d\u8d56\u7684 Hooks will ",(0,r.jsx)(n.em,{children:"always"})," update during Fast Refresh. Their list of dependencies will be ignored while Fast Refresh is happening."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, when you edit ",(0,r.jsx)(n.code,{children:"useMemo(() => x * 2, [x])"})," to ",(0,r.jsx)(n.code,{children:"useMemo(() => x * 10, [x])"}),", it will re-run even though ",(0,r.jsx)(n.code,{children:"x"})," (the dependency) has not changed. If React didn't do that, your edit wouldn't reflect on the screen!"]}),"\n",(0,r.jsxs)(n.p,{children:["Sometimes, this can lead to unexpected results. For example, even a ",(0,r.jsx)(n.code,{children:"useEffect"})," with an empty array of dependencies would still re-run once during Fast Refresh. However, writing code resilient to an occasional re-running of ",(0,r.jsx)(n.code,{children:"useEffect"})," is a good practice even without Fast Refresh. This makes it easier for you to later introduce new dependencies to it."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,n,s)=>{var r=s(27378),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,i={},d=null,l=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var r=s(27378);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||o:i(e),r.createElement(t.Provider,{value:c},n)}}}]);