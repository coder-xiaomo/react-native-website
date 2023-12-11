/*! For license information please see 4865bf41.74afff2e.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[43986],{20512:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(24246),r=t(71670);const i={id:"interactionmanager",title:"InteractionManager"},o=void 0,c={id:"interactionmanager",title:"InteractionManager",description:"Interactionmanager \u53ef\u4ee5\u5c06\u4e00\u4e9b\u8017\u65f6\u8f83\u957f\u7684\u5de5\u4f5c\u5b89\u6392\u5230\u6240\u6709\u4e92\u52a8\u6216\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u518d\u8fdb\u884c\u3002\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1 JavaScript \u52a8\u753b\u7684\u6d41\u7545\u8fd0\u884c\u3002",source:"@site/versioned_docs/version-0.72/interactionmanager.md",sourceDirName:".",slug:"/interactionmanager",permalink:"/docs/0.72/interactionmanager",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/interactionmanager.md",tags:[],version:"0.72",frontMatter:{id:"interactionmanager",title:"InteractionManager"},sidebar:"api",previous:{title:"Easing",permalink:"/docs/0.72/easing"},next:{title:"Keyboard",permalink:"/docs/0.72/keyboard"}},s={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced",id:"advanced",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>runAfterInteractions()</code>",id:"runafterinteractions",level:3},{value:"<code>createInteractionHandle()</code>",id:"createinteractionhandle",level:3},{value:"<code>clearInteractionHandle()</code>",id:"clearinteractionhandle",level:3},{value:"<code>setDeadline()</code>",id:"setdeadline",level:3}];function C(n){const e=Object.assign({p:"p",pre:"pre",code:"code",ul:"ul",li:"li",hr:"hr",h2:"h2",h3:"h3",div:"div",blockquote:"blockquote",strong:"strong",h1:"h1"},(0,r.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"Interactionmanager \u53ef\u4ee5\u5c06\u4e00\u4e9b\u8017\u65f6\u8f83\u957f\u7684\u5de5\u4f5c\u5b89\u6392\u5230\u6240\u6709\u4e92\u52a8\u6216\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u518d\u8fdb\u884c\u3002\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1 JavaScript \u52a8\u753b\u7684\u6d41\u7545\u8fd0\u884c\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5e94\u7528\u8fd9\u6837\u53ef\u4ee5\u5b89\u6392\u4e00\u4e2a\u4efb\u52a1\u5728\u4ea4\u4e92\u548c\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u6267\u884c\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"InteractionManager.runAfterInteractions(() => {\n  // ...\u8017\u65f6\u8f83\u957f\u7684\u540c\u6b65\u6267\u884c\u7684\u4efb\u52a1...\n});\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u548c\u5176\u4ed6\u7684\u5ef6\u8fdf\u8ba1\u5212\u51fd\u6570\u5bf9\u6bd4\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"requestAnimationFrame()"})," \u7528\u6765\u6267\u884c\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u63a7\u5236\u89c6\u56fe\u52a8\u753b\u7684\u4ee3\u7801\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"setImmediate/setTimeout()"})," \u5728\u7a0d\u540e\u6267\u884c\u4ee3\u7801\u3002\u6ce8\u610f\u8fd9\u6709\u53ef\u80fd\u4f1a\u5ef6\u8fdf\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684\u52a8\u753b\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"runAfterInteractions()"})," \u5728\u7a0d\u540e\u6267\u884c\u4ee3\u7801\uff0c\u4e0d\u4f1a\u5ef6\u8fdf\u5f53\u524d\u8fdb\u884c\u7684\u52a8\u753b\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["\u89e6\u6478\u5904\u7406\u7cfb\u7edf\u4f1a\u628a\u4e00\u4e2a\u6216\u591a\u4e2a\u8fdb\u884c\u4e2d\u7684\u89e6\u6478\u64cd\u4f5c\u8ba4\u5b9a\u4e3a'\u4ea4\u4e92'\uff0c\u5e76\u4e14\u4f1a\u5c06",(0,a.jsx)(e.code,{children:"runAfterInteractions()"}),"\u7684\u56de\u8c03\u51fd\u6570\u5ef6\u8fdf\u6267\u884c\uff0c\u76f4\u5230\u6240\u6709\u7684\u89e6\u6478\u64cd\u4f5c\u90fd\u7ed3\u675f\u6216\u53d6\u6d88\u4e86\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"InteractionManager \u8fd8\u5141\u8bb8\u5e94\u7528\u6ce8\u518c\u52a8\u753b\uff0c\u5728\u52a8\u753b\u5f00\u59cb\u65f6\u521b\u5efa\u4e00\u4e2a\u4ea4\u4e92\u201c\u53e5\u67c4\u201d\uff0c\u7136\u540e\u5728\u7ed3\u675f\u7684\u65f6\u5019\u6e05\u9664\u5b83\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"const handle = InteractionManager.createInteractionHandle();\n// \u6267\u884c\u52a8\u753b... (`runAfterInteractions`\u4e2d\u7684\u4efb\u52a1\u73b0\u5728\u5f00\u59cb\u6392\u961f\u7b49\u5019)\n// \u5728\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u5f00\u59cb\u6e05\u9664\u53e5\u67c4\uff1a\nInteractionManager.clearInteractionHandle(handle);\n// \u5728\u6240\u6709\u53e5\u67c4\u90fd\u6e05\u9664\u4e4b\u540e\uff0c\u73b0\u5728\u5f00\u59cb\u4f9d\u5e8f\u6267\u884c\u961f\u5217\u4e2d\u7684\u4efb\u52a1\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"runAfterInteractions"}),"\u63a5\u53d7\u4e00\u4e2a\u666e\u901a\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6216\u662f\u4e00\u4e2a",(0,a.jsx)(e.code,{children:"PromiseTask"}),"\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u9700\u8981\u5e26\u6709\u540d\u4e3a",(0,a.jsx)(e.code,{children:"gen"}),"\u7684\u65b9\u6cd5\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a",(0,a.jsx)(e.code,{children:"Promise"}),"\u3002\u5982\u679c\u63d0\u4f9b\u7684\u53c2\u6570\u662f\u4e00\u4e2a",(0,a.jsx)(e.code,{children:"PromiseTask"}),"\uff0c \u90a3\u4e48\u5373\u4fbf\u5b83\u662f\u5f02\u6b65\u7684\u5b83\u4e5f\u4f1a\u963b\u585e\u4efb\u52a1\u961f\u5217\uff0c\u76f4\u5230\u5b83\uff08\u4ee5\u53ca\u5b83\u6240\u6709\u7684\u4f9d\u8d56\u4efb\u52a1\uff0c\u54ea\u6015\u8fd9\u4e9b\u4f9d\u8d56\u4efb\u52a1\u4e5f\u662f\u5f02\u6b65\u7684\uff09\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u624d\u4f1a\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6392\u961f\u7684\u4efb\u52a1\u4f1a\u5728\u4e00\u6b21",(0,a.jsx)(e.code,{children:"setImmediate"}),"\u65b9\u6cd5\u4e2d\u4f9d\u5e8f\u6279\u91cf\u6267\u884c\u3002\u5982\u679c\u4f60\u8c03\u7528\u4e86",(0,a.jsx)(e.code,{children:"setDeadLine"}),"\u65b9\u6cd5\u5e76\u8bbe\u5b9a\u4e86\u4e00\u4e2a\u6b63\u6574\u6570\u503c\uff0c\u5219\u4efb\u52a1\u53ea\u4f1a\u5728\u8bbe\u5b9a\u7684\u65f6\u95f4\u5230\u8fbe\u540e\u5f00\u59cb\u6267\u884c\u3002\u5728\u6b64\u4e4b\u524d\uff0c\u4efb\u52a1\u4f1a\u901a\u8fc7",(0,a.jsx)(e.code,{children:"setTimeout"}),"\u6765\u6302\u8d77\u5e76\u963b\u585e\u5176\u4ed6\u4efb\u52a1\u6267\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u7ed9\u8bf8\u5982\u89e6\u6478\u4ea4\u4e92\u4e00\u7c7b\u7684\u4e8b\u4ef6\u7559\u51fa\u65f6\u95f4\uff0c\u4f7f\u5e94\u7528\u53ef\u4ee5\u66f4\u5feb\u5730\u54cd\u5e94\u7528\u6237\u3002"]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(e.h3,{id:"basic",children:"Basic"}),"\n",(0,a.jsx)(e.div,{class:"snack-player","data-snack-name":"InteractionManager Function Component Basic Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20%5C%22Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn%5C%22%20%2B%20%5C%22Cmd%2BD%20or%20shake%20for%20dev%20menu%5C%22%2C%5Cn%20%20android%3A%5Cn%20%20%20%20%5C%22Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn%5C%22%20%2B%5Cn%20%20%20%20%5C%22Shake%20or%20press%20menu%20button%20for%20dev%20menu%5C%22%2C%5Cn%7D)%3B%5Cn%5Cnconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%5Cn%5Cnconst%20useFadeIn%20%3D%20(duration%20%3D%205000)%20%3D%3E%20%7B%5Cn%20%20const%20%5Bopacity%5D%20%3D%20useState(new%20Animated.Value(0))%3B%5Cn%5Cn%20%20%2F%2F%20Running%20the%20animation%20when%20the%20component%20is%20mounted%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20Animated.timing()%20create%20a%20interaction%20handle%20by%20default%2C%20if%20you%20want%20to%20disabled%20that%5Cn%20%20%20%20%2F%2F%20behaviour%20you%20can%20set%20isInteraction%20to%20false%20to%20disabled%20that.%5Cn%20%20%20%20Animated.timing(opacity%2C%20%7B%5Cn%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20duration%2C%5Cn%20%20%20%20%7D).start()%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20opacity%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7B%20onShown%20%7D)%20%3D%3E%20%7B%5Cn%20%20const%20opacity%20%3D%20useFadeIn()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20animation%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20interactionPromise%20%3D%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onShown())%3B%5Cn%20%20%20%20return%20()%20%3D%3E%20interactionPromise.cancel()%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%2C%20%7B%20opacity%20%7D%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onShown%3D%7B()%20%3D%3E%20Alert.alert(%5C%22Animation%20is%20done%5C%22)%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22salmon%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsx)(e.h3,{id:"advanced",children:"Advanced"}),"\n",(0,a.jsx)(e.div,{class:"snack-player","data-snack-name":"InteractionManager Function Component Advanced Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20%5C%22Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn%5C%22%20%2B%20%5C%22Cmd%2BD%20or%20shake%20for%20dev%20menu%5C%22%2C%5Cn%20%20android%3A%5Cn%20%20%20%20%5C%22Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn%5C%22%20%2B%5Cn%20%20%20%20%5C%22Shake%20or%20press%20menu%20button%20for%20dev%20menu%5C%22%2C%5Cn%7D)%3B%5Cn%5Cnconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%5Cn%5Cn%2F%2F%20You%20can%20create%20a%20custom%20interaction%2Fanimation%20and%20add%5Cn%2F%2F%20support%20for%20InteractionManager%5Cnconst%20useCustomInteraction%20%3D%20(timeLocked%20%3D%202000)%20%3D%3E%20%7B%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20handle%20%3D%20InteractionManager.createInteractionHandle()%3B%5Cn%5Cn%20%20%20%20setTimeout(%5Cn%20%20%20%20%20%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%2C%5Cn%20%20%20%20%20%20timeLocked%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%3B%5Cn%20%20%7D)%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7B%20onInteractionIsDone%20%7D)%20%3D%3E%20%7B%5Cn%20%20useCustomInteraction()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20interaction%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onInteractionIsDone())%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onInteractionIsDone%3D%7B()%20%3D%3E%20Alert.alert(%5C%22Interaction%20is%20done%5C%22)%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22salmon%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\u6ce8\u610f"}),": ",(0,a.jsx)(e.code,{children:"InteractionManager.runAfterInteractions()"}),"\u5728 web \u4e0a\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\u5b83\u4f1a\u7acb\u5373\u89e6\u53d1\u800c\u4e0d\u662f\u7b49\u5f85\u4ea4\u4e92\u52a8\u753b\u7ed3\u675f\u3002"]}),"\n"]}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,a.jsx)(e.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,a.jsx)(e.h3,{id:"runafterinteractions",children:(0,a.jsx)(e.code,{children:"runAfterInteractions()"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"static runAfterInteractions(task)\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5b89\u6392\u4e00\u4e2a\u51fd\u6570\u5728\u6240\u6709\u7684\u4ea4\u4e92\u548c\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u8fd0\u884c\u3002\u8fd4\u56de\u4e00\u4e2a\u53ef\u53d6\u6d88\u7684 promise\u3002"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"createinteractionhandle",children:(0,a.jsx)(e.code,{children:"createInteractionHandle()"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"static createInteractionHandle()\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u901a\u77e5\u7ba1\u7406\u5668\u6709\u67d0\u4e2a\u4ea4\u4e92\u5f00\u59cb\u4e86\u3002"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"clearinteractionhandle",children:(0,a.jsx)(e.code,{children:"clearInteractionHandle()"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"static clearInteractionHandle(handle)\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u901a\u77e5\u7ba1\u7406\u5668\u6709\u67d0\u4e2a\u4ea4\u4e92\u5df2\u7ecf\u7ed3\u675f\u4e86\u3002"}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h3,{id:"setdeadline",children:(0,a.jsx)(e.code,{children:"setDeadline()"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"static setDeadline(deadline)\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u8bbe\u5b9a\u4e86\u4e00\u4e2a\u6b63\u6574\u6570\u503c\uff0c\u5219\u4f1a\u4f7f\u7528 setTimeout \u6765\u6302\u8d77\u6240\u6709\u5c1a\u672a\u6267\u884c\u7684\u4efb\u52a1\u3002\u5728 eventLoopRunningTime \u5230\u8fbe\u8bbe\u5b9a\u65f6\u95f4\u540e\uff0c\u624d\u5f00\u59cb\u4f7f\u7528\u4e00\u4e2a setImmediate \u65b9\u6cd5\u6765\u6279\u91cf\u6267\u884c\u6240\u6709\u4efb\u52a1\u3002"}),"\n",(0,a.jsx)(e.hr,{})]})}const l=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(C,n)})):C(n)}},71426:(n,e,t)=>{var a=t(27378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,t){var a,i={},d=null,C=null;for(a in void 0!==t&&(d=""+t),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(C=e.ref),e)o.call(e,a)&&!s.hasOwnProperty(a)&&(i[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps)void 0===i[a]&&(i[a]=e[a]);return{$$typeof:r,type:n,key:d,ref:C,props:i,_owner:c.current}}e.Fragment=i,e.jsx=d,e.jsxs=d},24246:(n,e,t)=>{n.exports=t(71426)},71670:(n,e,t)=>{t.d(e,{Zo:()=>c,ah:()=>i});var a=t(27378);const r=a.createContext({});function i(n){const e=a.useContext(r);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function c({components:n,children:e,disableParentContext:t}){let c;return c=t?"function"==typeof n?n({}):n||o:i(n),a.createElement(r.Provider,{value:c},e)}}}]);