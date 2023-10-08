/*! For license information please see 95bb95fe.29d166eb.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75706],{34121:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var r=s(24246),i=s(71670);const d={id:"gesture-responder-system",title:"\u624b\u52bf\u54cd\u5e94\u7cfb\u7edf"},t=void 0,o={unversionedId:"gesture-responder-system",id:"version-0.72/gesture-responder-system",title:"\u624b\u52bf\u54cd\u5e94\u7cfb\u7edf",description:"\u79fb\u52a8\u8bbe\u5907\u4e0a\u7684\u624b\u52bf\u8bc6\u522b\u8981\u6bd4\u5728 web \u4e0a\u590d\u6742\u5f97\u591a\u3002\u7528\u6237\u7684\u4e00\u6b21\u89e6\u6478\u64cd\u4f5c\u7684\u771f\u5b9e\u610f\u56fe\u662f\u4ec0\u4e48\uff0cApp \u8981\u7ecf\u8fc7\u597d\u51e0\u4e2a\u9636\u6bb5\u624d\u80fd\u5224\u65ad\u3002\u6bd4\u5982 App \u9700\u8981\u5224\u65ad\u7528\u6237\u7684\u89e6\u6478\u5230\u5e95\u662f\u5728\u6eda\u52a8\u9875\u9762\uff0c\u8fd8\u662f\u6ed1\u52a8\u4e00\u4e2a widget\uff0c\u6216\u8005\u53ea\u662f\u4e00\u4e2a\u5355\u7eaf\u7684\u70b9\u51fb\u3002\u751a\u81f3\u968f\u7740\u6301\u7eed\u65f6\u95f4\u7684\u4e0d\u540c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u8fd8\u4f1a\u8f6c\u5316\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u591a\u70b9\u540c\u65f6\u89e6\u63a7\u7684\u60c5\u51b5\u3002",source:"@site/versioned_docs/version-0.72/gesture-responder-system.md",sourceDirName:".",slug:"/gesture-responder-system",permalink:"/docs/gesture-responder-system",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/gesture-responder-system.md",tags:[],version:"0.72",frontMatter:{id:"gesture-responder-system",title:"\u624b\u52bf\u54cd\u5e94\u7cfb\u7edf"},sidebar:"docs",previous:{title:"\u52a8\u753b",permalink:"/docs/animations"},next:{title:"\u65e0\u969c\u788d\u529f\u80fd",permalink:"/docs/accessibility"}},l={},c=[{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:3},{value:"TouchableHighlight \u4e0e Touchable \u7cfb\u5217\u7ec4\u4ef6",id:"touchablehighlight-\u4e0e-touchable-\u7cfb\u5217\u7ec4\u4ef6",level:3},{value:"\u54cd\u5e94\u8005\u7684\u751f\u547d\u5468\u671f",id:"\u54cd\u5e94\u8005\u7684\u751f\u547d\u5468\u671f",level:2},{value:"\u6355\u83b7 ShouldSet \u4e8b\u4ef6\u5904\u7406",id:"\u6355\u83b7-shouldset-\u4e8b\u4ef6\u5904\u7406",level:3},{value:"PanResponder",id:"panresponder",level:3}];function h(e){const n=Object.assign({p:"p",h3:"h3",code:"code",h2:"h2",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u79fb\u52a8\u8bbe\u5907\u4e0a\u7684\u624b\u52bf\u8bc6\u522b\u8981\u6bd4\u5728 web \u4e0a\u590d\u6742\u5f97\u591a\u3002\u7528\u6237\u7684\u4e00\u6b21\u89e6\u6478\u64cd\u4f5c\u7684\u771f\u5b9e\u610f\u56fe\u662f\u4ec0\u4e48\uff0cApp \u8981\u7ecf\u8fc7\u597d\u51e0\u4e2a\u9636\u6bb5\u624d\u80fd\u5224\u65ad\u3002\u6bd4\u5982 App \u9700\u8981\u5224\u65ad\u7528\u6237\u7684\u89e6\u6478\u5230\u5e95\u662f\u5728\u6eda\u52a8\u9875\u9762\uff0c\u8fd8\u662f\u6ed1\u52a8\u4e00\u4e2a widget\uff0c\u6216\u8005\u53ea\u662f\u4e00\u4e2a\u5355\u7eaf\u7684\u70b9\u51fb\u3002\u751a\u81f3\u968f\u7740\u6301\u7eed\u65f6\u95f4\u7684\u4e0d\u540c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u8fd8\u4f1a\u8f6c\u5316\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u591a\u70b9\u540c\u65f6\u89e6\u63a7\u7684\u60c5\u51b5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u624b\u52bf\u54cd\u5e94\u7cfb\u7edf\u53ef\u4ee5\u4f7f\u7ec4\u4ef6\u5728\u4e0d\u5173\u5fc3\u7236\u7ec4\u4ef6\u6216\u5b50\u7ec4\u4ef6\u7684\u524d\u63d0\u4e0b\u81ea\u884c\u5904\u7406\u89e6\u6478\u4ea4\u4e92\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u4e4b\u6240\u4ee5\u4f1a\u89c9\u5f97 web app \u548c\u539f\u751f app \u5728\u4f53\u9a8c\u4e0a\u6709\u5de8\u5927\u7684\u5dee\u5f02\uff0c\u89e6\u6478\u54cd\u5e94\u662f\u4e00\u5927\u5173\u952e\u56e0\u7d20\u3002\u7528\u6237\u7684\u6bcf\u4e00\u4e2a\u64cd\u4f5c\u90fd\u5e94\u8be5\u5177\u6709\u4e0b\u5217\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u53cd\u9988/\u9ad8\u4eae \u2014\u2014 \u8ba9\u7528\u6237\u770b\u5230\u4ed6\u4eec\u5230\u5e95\u6309\u5230\u4e86\u4ec0\u4e48\u4e1c\u897f\uff0c\u4ee5\u53ca\u677e\u5f00\u624b\u540e\u4f1a\u53d1\u751f\u4ec0\u4e48\u3002\u53d6\u6d88\u529f\u80fd \u2014\u2014 \u5f53\u7528\u6237\u6b63\u5728\u89e6\u6478\u64cd\u4f5c\u65f6\uff0c\u5e94\u8be5\u662f\u53ef\u4ee5\u901a\u8fc7\u628a\u624b\u6307\u79fb\u5f00\u6765\u7ec8\u6b62\u64cd\u4f5c\u3002\u8fd9\u4e9b\u7279\u6027\u4f7f\u5f97\u7528\u6237\u5728\u4f7f\u7528 App \u65f6\u4f53\u9a8c\u66f4\u597d\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ef\u4ee5\u8ba9\u7528\u6237\u5927\u80c6\u8bd5\u7528\uff0c\u800c\u4e0d\u5fc5\u62c5\u5fc3\u70b9\u9519\u4e86\u4ec0\u4e48\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"touchablehighlight-\u4e0e-touchable-\u7cfb\u5217\u7ec4\u4ef6",children:"TouchableHighlight \u4e0e Touchable \u7cfb\u5217\u7ec4\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u54cd\u5e94\u7cfb\u7edf\u7528\u8d77\u6765\u53ef\u80fd\u6bd4\u8f83\u590d\u6742\u3002\u6240\u4ee5\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u62bd\u8c61\u7684",(0,r.jsx)(n.code,{children:"Touchable"}),"\u5b9e\u73b0\uff0c\u7528\u6765\u505a\u201c\u53ef\u89e6\u63a7\u201d\u7684\u7ec4\u4ef6\u3002\u8fd9\u4e00\u5b9e\u73b0\u5229\u7528\u4e86\u54cd\u5e94\u7cfb\u7edf\uff0c\u4f7f\u5f97\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u4ee5\u58f0\u660e\u7684\u65b9\u5f0f\u6765\u914d\u7f6e\u89e6\u63a7\u5904\u7406\u3002\u5982\u679c\u8981\u505a\u4e00\u4e2a\u6309\u94ae\u6216\u8005\u7f51\u9875\u94fe\u63a5\uff0c\u90a3\u4e48\u4f7f\u7528",(0,r.jsx)(n.code,{children:"TouchableHighlight"}),"\u5c31\u53ef\u4ee5\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u54cd\u5e94\u8005\u7684\u751f\u547d\u5468\u671f",children:"\u54cd\u5e94\u8005\u7684\u751f\u547d\u5468\u671f"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a View \u53ea\u8981\u5b9e\u73b0\u4e86\u6b63\u786e\u7684\u534f\u5546\u65b9\u6cd5\uff0c\u5c31\u53ef\u4ee5\u6210\u4e3a\u89e6\u6478\u4e8b\u4ef6\u7684\u54cd\u5e94\u8005\u3002\u6211\u4eec\u901a\u8fc7\u4e24\u4e2a\u65b9\u6cd5\u53bb\u201c\u8be2\u95ee\u201d\u4e00\u4e2a View \u662f\u5426\u613f\u610f\u6210\u4e3a\u54cd\u5e94\u8005\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"View.props.onStartShouldSetResponder: (evt) => true,"})," - \u5728\u7528\u6237\u5f00\u59cb\u89e6\u6478\u7684\u65f6\u5019\uff08\u624b\u6307\u521a\u521a\u63a5\u89e6\u5c4f\u5e55\u7684\u77ac\u95f4\uff09\uff0c\u662f\u5426\u613f\u610f\u6210\u4e3a\u54cd\u5e94\u8005\uff1f"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"View.props.onMoveShouldSetResponder: (evt) => true,"})," - \u5982\u679c View \u4e0d\u662f\u54cd\u5e94\u8005\uff0c\u90a3\u4e48\u5728\u6bcf\u4e00\u4e2a\u89e6\u6478\u70b9\u5f00\u59cb\u79fb\u52a8\uff08\u6ca1\u6709\u505c\u4e0b\u4e5f\u6ca1\u6709\u79bb\u5f00\u5c4f\u5e55\uff09\u65f6\u518d\u8be2\u95ee\u4e00\u6b21\uff1a\u662f\u5426\u613f\u610f\u54cd\u5e94\u89e6\u6478\u4ea4\u4e92\u5462\uff1f"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c View \u8fd4\u56de true\uff0c\u5e76\u5f00\u59cb\u5c1d\u8bd5\u6210\u4e3a\u54cd\u5e94\u8005\uff0c\u90a3\u4e48\u4f1a\u89e6\u53d1\u4e0b\u5217\u4e8b\u4ef6\u4e4b\u4e00:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"View.props.onResponderGrant: (evt) => {}"})," - View \u73b0\u5728\u8981\u5f00\u59cb\u54cd\u5e94\u89e6\u6478\u4e8b\u4ef6\u4e86\u3002\u8fd9\u4e5f\u662f\u9700\u8981\u505a\u9ad8\u4eae\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u6237\u77e5\u9053\u4ed6\u5230\u5e95\u70b9\u5230\u4e86\u54ea\u91cc\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"View.props.onResponderReject: (evt) => {}"})," - \u54cd\u5e94\u8005\u73b0\u5728\u201c\u53e6\u6709\u5176\u4eba\u201d\u800c\u4e14\u6682\u65f6\u4e0d\u4f1a\u201c\u653e\u6743\u201d\uff0c\u8bf7\u53e6\u4f5c\u5b89\u6392\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c View \u5df2\u7ecf\u5f00\u59cb\u54cd\u5e94\u89e6\u6478\u4e8b\u4ef6\u4e86\uff0c\u90a3\u4e48\u4e0b\u5217\u8fd9\u4e9b\u5904\u7406\u51fd\u6570\u4f1a\u88ab\u4e00\u4e00\u8c03\u7528\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"View.props.onResponderMove: (evt) => {}"})," - \u7528\u6237\u6b63\u5728\u5c4f\u5e55\u4e0a\u79fb\u52a8\u624b\u6307\u65f6\uff08\u6ca1\u6709\u505c\u4e0b\u4e5f\u6ca1\u6709\u79bb\u5f00\u5c4f\u5e55\uff09\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"View.props.onResponderRelease: (evt) => {}"}),' - \u89e6\u6478\u64cd\u4f5c\u7ed3\u675f\u65f6\u89e6\u53d1\uff0c\u6bd4\u5982"touchUp"\uff08\u624b\u6307\u62ac\u8d77\u79bb\u5f00\u5c4f\u5e55\uff09\u3002']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"View.props.onResponderTerminationRequest: (evt) => true"})," - \u6709\u5176\u4ed6\u7ec4\u4ef6\u8bf7\u6c42\u63a5\u66ff\u54cd\u5e94\u8005\uff0c\u5f53\u524d\u7684 View \u662f\u5426\u201c\u653e\u6743\u201d\uff1f\u8fd4\u56de true \u7684\u8bdd\u5219\u91ca\u653e\u54cd\u5e94\u8005\u6743\u529b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"View.props.onResponderTerminate: (evt) => {}"})," - \u54cd\u5e94\u8005\u6743\u529b\u5df2\u7ecf\u4ea4\u51fa\u3002\u8fd9\u53ef\u80fd\u662f\u7531\u4e8e\u5176\u4ed6 View \u901a\u8fc7",(0,r.jsx)(n.code,{children:"onResponderTerminationRequest"}),"\u8bf7\u6c42\u7684\uff0c\u4e5f\u53ef\u80fd\u662f\u7531\u64cd\u4f5c\u7cfb\u7edf\u5f3a\u5236\u593a\u6743\uff08\u6bd4\u5982 iOS \u4e0a\u7684\u63a7\u5236\u4e2d\u5fc3\u6216\u662f\u901a\u77e5\u4e2d\u5fc3\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"evt"}),"\u662f\u4e00\u4e2a\u5408\u6210\u4e8b\u4ef6\uff0c\u5b83\u5305\u542b\u4ee5\u4e0b\u7ed3\u6784\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nativeEvent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"changedTouches"})," - \u5728\u4e0a\u4e00\u6b21\u4e8b\u4ef6\u4e4b\u540e\uff0c\u6240\u6709\u53d1\u751f\u53d8\u5316\u7684\u89e6\u6478\u4e8b\u4ef6\u7684\u6570\u7ec4\u96c6\u5408\uff08\u5373\u4e0a\u4e00\u6b21\u4e8b\u4ef6\u540e\uff0c\u6240\u6709\u79fb\u52a8\u8fc7\u7684\u89e6\u6478\u70b9\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"identifier"})," - \u89e6\u6478\u70b9\u7684 ID"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"locationX"})," - \u89e6\u6478\u70b9\u76f8\u5bf9\u4e8e\u5f53\u524d\u5143\u7d20\u7684\u6a2a\u5750\u6807"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"locationY"})," - \u89e6\u6478\u70b9\u76f8\u5bf9\u4e8e\u5f53\u524d\u5143\u7d20\u7684\u7eb5\u5750\u6807"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pageX"})," - \u89e6\u6478\u70b9\u76f8\u5bf9\u4e8e\u6839\u5143\u7d20\u7684\u6a2a\u5750\u6807"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pageY"})," - \u89e6\u6478\u70b9\u76f8\u5bf9\u4e8e\u6839\u5143\u7d20\u7684\u7eb5\u5750\u6807"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"target"})," - \u89e6\u6478\u70b9\u6240\u5728\u7684\u5143\u7d20 ID"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"timestamp"})," - \u89e6\u6478\u4e8b\u4ef6\u7684\u65f6\u95f4\u6233\uff0c\u53ef\u7528\u4e8e\u79fb\u52a8\u901f\u5ea6\u7684\u8ba1\u7b97"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"touches"})," - \u5f53\u524d\u5c4f\u5e55\u4e0a\u7684\u6240\u6709\u89e6\u6478\u70b9\u7684\u96c6\u5408"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6355\u83b7-shouldset-\u4e8b\u4ef6\u5904\u7406",children:"\u6355\u83b7 ShouldSet \u4e8b\u4ef6\u5904\u7406"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"onStartShouldSetResponder"}),"\u4e0e",(0,r.jsx)(n.code,{children:"onMoveShouldSetResponder"}),"\u662f\u4ee5\u5192\u6ce1\u7684\u5f62\u5f0f\u8c03\u7528\u7684\uff0c\u5373\u5d4c\u5957\u6700\u6df1\u7684\u8282\u70b9\u6700\u5148\u8c03\u7528\u3002\u8fd9\u610f\u5473\u7740\u5f53\u591a\u4e2a View \u540c\u65f6\u5728",(0,r.jsx)(n.code,{children:"*ShouldSetResponder"}),"\u4e2d\u8fd4\u56de true \u65f6\uff0c\u6700\u5e95\u5c42\u7684 View \u5c06\u4f18\u5148\u201c\u593a\u6743\u201d\u3002\u5728\u591a\u6570\u60c5\u51b5\u4e0b\u8fd9\u5e76\u6ca1\u6709\u4ec0\u4e48\u95ee\u9898\uff0c\u56e0\u4e3a\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u6240\u6709\u63a7\u4ef6\u548c\u6309\u94ae\u662f\u53ef\u7528\u7684\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f46\u662f\u6709\u4e9b\u65f6\u5019\uff0c\u67d0\u4e2a\u7236 View \u4f1a\u5e0c\u671b\u80fd\u5148\u6210\u4e3a\u54cd\u5e94\u8005\u3002\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u201c\u6355\u83b7\u671f\u201d\u6765\u89e3\u51b3\u8fd9\u4e00\u9700\u6c42\u3002\u54cd\u5e94\u7cfb\u7edf\u5728\u4ece\u6700\u5e95\u5c42\u7684\u7ec4\u4ef6\u5f00\u59cb\u5192\u6ce1\u4e4b\u524d\uff0c\u4f1a\u9996\u5148\u6267\u884c\u4e00\u4e2a\u201c\u6355\u83b7\u671f\u201d\uff0c\u5728\u6b64\u671f\u95f4\u4f1a\u89e6\u53d1",(0,r.jsx)(n.code,{children:"on*ShouldSetResponderCapture"}),"\u7cfb\u5217\u4e8b\u4ef6\u3002\u56e0\u6b64\uff0c\u5982\u679c\u67d0\u4e2a\u7236 View \u60f3\u8981\u5728\u89e6\u6478\u64cd\u4f5c\u5f00\u59cb\u65f6\u963b\u6b62\u5b50\u7ec4\u4ef6\u6210\u4e3a\u54cd\u5e94\u8005\uff0c\u90a3\u5c31\u5e94\u8be5\u5904\u7406",(0,r.jsx)(n.code,{children:"onStartShouldSetResponderCapture"}),"\u4e8b\u4ef6\u5e76\u8fd4\u56de true \u503c\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"View.props.onStartShouldSetResponderCapture: (evt) => true,"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"View.props.onMoveShouldSetResponderCapture: (evt) => true,"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"panresponder",children:"PanResponder"}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u4f7f\u7528\u66f4\u9ad8\u7ea7\u7684\u624b\u52bf\u529f\u80fd\uff0c\u8bf7\u53c2\u770b",(0,r.jsx)(n.a,{href:"/docs/panresponder",children:"PanResponder"}),"."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},71426:(e,n,s)=>{var r=s(27378),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,d={},c=null,h=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)t.call(n,r)&&!l.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:h,props:d,_owner:o.current}}n.Fragment=d,n.jsx=c,n.jsxs=c},24246:(e,n,s)=>{e.exports=s(71426)},71670:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>d});var r=s(27378);const i=r.createContext({});function d(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||t:d(e),r.createElement(i.Provider,{value:o},n)}}}]);