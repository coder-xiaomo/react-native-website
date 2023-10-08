/*! For license information please see d88eb93c.cfaca815.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[60410],{60123:(e,n,i)=>{i.d(n,{ZP:()=>s});var r=i(24246),t=i(71670);function c(e){const n=Object.assign({admonition:"admonition",p:"p",a:"a"},(0,t.ah)(),e.components);return(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["This document refers to the architecture of the new renderer, ",(0,r.jsx)(n.a,{href:"fabric-renderer",children:"Fabric"}),", that is in active roll-out."]})})}const s=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},90691:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var r=i(24246),t=i(71670),c=i(60123);const s={id:"render-pipeline",title:"\u6e32\u67d3\uff0c\u63d0\u4ea4\u4e0e\u6302\u8f7d\uff08\u6e32\u67d3\u6d41\u6c34\u7ebf\uff09"},l=void 0,d={unversionedId:"render-pipeline",id:"render-pipeline",title:"\u6e32\u67d3\uff0c\u63d0\u4ea4\u4e0e\u6302\u8f7d\uff08\u6e32\u67d3\u6d41\u6c34\u7ebf\uff09",description:"React Native \u6e32\u67d3\u5668\u901a\u8fc7\u4e00\u7cfb\u5217\u52a0\u5de5\u5904\u7406\uff0c\u5c06 React \u4ee3\u7801\u6e32\u67d3\u5230\u5bbf\u4e3b\u5e73\u53f0\u3002\u8fd9\u4e00\u7cfb\u5217\u52a0\u5de5\u5904\u7406\u5c31\u662f\u6e32\u67d3\u6d41\u6c34\u7ebf\uff08pipeline\uff09\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u521d\u59cb\u5316\u6e32\u67d3\u548c UI \u72b6\u6001\u66f4\u65b0\u3002 \u63a5\u4e0b\u6765\u4ecb\u7ecd\u7684\u662f\u6e32\u67d3\u6d41\u6c34\u7ebf\uff0c\u53ca\u5176\u5728\u5404\u79cd\u573a\u666f\u4e2d\u7684\u4e0d\u540c\u4e4b\u5904\u3002",source:"@site/architecture/render-pipeline.md",sourceDirName:".",slug:"/render-pipeline",permalink:"/architecture/render-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/architecture/render-pipeline.md",tags:[],version:"current",frontMatter:{id:"render-pipeline",title:"\u6e32\u67d3\uff0c\u63d0\u4ea4\u4e0e\u6302\u8f7d\uff08\u6e32\u67d3\u6d41\u6c34\u7ebf\uff09"},sidebar:"architecture",previous:{title:"Fabric",permalink:"/architecture/fabric-renderer"},next:{title:"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0",permalink:"/architecture/xplat-implementation"}},a={},h=[{value:"\u521d\u6b21\u6e32\u67d3",id:"\u521d\u6b21\u6e32\u67d3",level:2},{value:"\u9636\u6bb5\u4e00\uff1a\u6e32\u67d3",id:"\u9636\u6bb5\u4e00\u6e32\u67d3",level:3},{value:"\u9636\u6bb5\u4e8c\uff1a\u63d0\u4ea4",id:"\u9636\u6bb5\u4e8c\u63d0\u4ea4",level:3},{value:"\u9636\u6bb5\u4e09\uff1a\u6302\u8f7d",id:"\u9636\u6bb5\u4e09\u6302\u8f7d",level:3},{value:"React \u72b6\u6001\u66f4\u65b0",id:"react-\u72b6\u6001\u66f4\u65b0",level:2},{value:"\u9636\u6bb5\u4e00\uff1a\u6e32\u67d3",id:"\u9636\u6bb5\u4e00\u6e32\u67d3-1",level:3},{value:"\u9636\u6bb5\u4e8c\uff1a\u63d0\u4ea4",id:"\u9636\u6bb5\u4e8c\u63d0\u4ea4-1",level:3},{value:"\u9636\u6bb5\u4e09\uff1a\u6302\u8f7d",id:"\u9636\u6bb5\u4e09\u6302\u8f7d-1",level:3},{value:"React Native \u6e32\u67d3\u5668\u72b6\u6001\u66f4\u65b0",id:"react-native-\u6e32\u67d3\u5668\u72b6\u6001\u66f4\u65b0",level:2},{value:"\u9636\u6bb5\u4e8c\uff1a\u63d0\u4ea4",id:"\u9636\u6bb5\u4e8c\u63d0\u4ea4-2",level:3},{value:"\u9636\u6bb5\u4e09\uff1a\u6302\u8f7d",id:"\u9636\u6bb5\u4e09\u6302\u8f7d-2",level:3}];function o(e){const n=Object.assign({p:"p",a:"a",ul:"ul",li:"li",blockquote:"blockquote",img:"img",ol:"ol",hr:"hr",h2:"h2",pre:"pre",code:"code",h3:"h3",strong:"strong"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.ZP,{}),"\n",(0,r.jsxs)(n.p,{children:["React Native \u6e32\u67d3\u5668\u901a\u8fc7\u4e00\u7cfb\u5217\u52a0\u5de5\u5904\u7406\uff0c\u5c06 React \u4ee3\u7801\u6e32\u67d3\u5230",(0,r.jsx)(n.a,{href:"/architecture/glossary#host-platform",children:"\u5bbf\u4e3b\u5e73\u53f0"}),"\u3002\u8fd9\u4e00\u7cfb\u5217\u52a0\u5de5\u5904\u7406\u5c31\u662f\u6e32\u67d3\u6d41\u6c34\u7ebf\uff08pipeline\uff09\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u521d\u59cb\u5316\u6e32\u67d3\u548c UI \u72b6\u6001\u66f4\u65b0\u3002 \u63a5\u4e0b\u6765\u4ecb\u7ecd\u7684\u662f\u6e32\u67d3\u6d41\u6c34\u7ebf\uff0c\u53ca\u5176\u5728\u5404\u79cd\u573a\u666f\u4e2d\u7684\u4e0d\u540c\u4e4b\u5904\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\uff08\u8bd1\u6ce8\uff1apipeline \u7684\u539f\u4e49\u662f\u5c06\u8ba1\u7b97\u673a\u6307\u4ee4\u5904\u7406\u8fc7\u7a0b\u62c6\u5206\u4e3a\u591a\u4e2a\u6b65\u9aa4\uff0c\u5e76\u901a\u8fc7\u591a\u4e2a\u786c\u4ef6\u5904\u7406\u5355\u5143\u5e76\u884c\u6267\u884c\u6765\u52a0\u5feb\u6307\u4ee4\u6267\u884c\u901f\u5ea6\u3002\u5176\u5177\u4f53\u6267\u884c\u8fc7\u7a0b\u7c7b\u4f3c\u5de5\u5382\u4e2d\u7684\u6d41\u6c34\u7ebf\uff0c\u5e76\u56e0\u6b64\u5f97\u540d\u3002\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u6e32\u67d3\u6d41\u6c34\u7ebf\u53ef\u5927\u81f4\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6e32\u67d3\uff08Render\uff09\uff1a\u5728 JavaScript \u4e2d\uff0cReact \u6267\u884c\u90a3\u4e9b\u4ea7\u54c1\u903b\u8f91\u4ee3\u7801\u521b\u5efa ",(0,r.jsx)(n.a,{href:"/architecture/glossary#react-element-tree-and-react-element",children:"React \u5143\u7d20\u6811\uff08React Element Trees\uff09"}),"\u3002\u7136\u540e\u5728 C++ \u4e2d\uff0c\u7528 React \u5143\u7d20\u6811\u521b\u5efa ",(0,r.jsx)(n.a,{href:"/architecture/glossary#react-shadow-tree-and-react-shadow-node",children:"React \u5f71\u5b50\u6811\uff08React Shadow Tree\uff09"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u63d0\u4ea4\uff08Commit\uff09\uff1a\u5728 React \u5f71\u5b50\u6811\u5b8c\u5168\u521b\u5efa\u540e\uff0c\u6e32\u67d3\u5668\u4f1a\u89e6\u53d1\u4e00\u6b21\u63d0\u4ea4\u3002\u8fd9\u4f1a\u5c06 React \u5143\u7d20\u6811\u548c\u65b0\u521b\u5efa\u7684 React \u5f71\u5b50\u6811\u7684\u63d0\u5347\u4e3a\u201c\u4e0b\u4e00\u68f5\u8981\u6302\u8f7d\u7684\u6811\u201d\u3002 \u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4e5f\u5305\u62ec\u4e86\u5e03\u5c40\u4fe1\u606f\u8ba1\u7b97\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6302\u8f7d\uff08Mount\uff09\uff1aReact \u5f71\u5b50\u6811\u6709\u4e86\u5e03\u5c40\u8ba1\u7b97\u7ed3\u679c\u540e\uff0c\u5b83\u4f1a\u88ab\u8f6c\u5316\u4e3a\u4e00\u4e2a",(0,r.jsx)(n.a,{href:"/architecture/glossary#host-view-tree-and-host-view",children:"\u5bbf\u4e3b\u89c6\u56fe\u6811\uff08Host View Tree\uff09"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6e32\u67d3\u6d41\u6c34\u7ebf\u7684\u5404\u4e2a\u9636\u6bb5\u53ef\u80fd\u53d1\u751f\u5728\u4e0d\u540c\u7684\u7ebf\u7a0b\u4e2d\uff0c\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u7ebf\u7a0b\u6a21\u578b\u90e8\u5206\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://reactnative.dev/assets/images/data-flow-17cc787288df187badd01e1ff17d2833.jpg",alt:"React Native renderer Data flow"})}),"\n",(0,r.jsx)(n.p,{children:"\u6e32\u67d3\u6d41\u6c34\u7ebf\u5b58\u5728\u4e09\u79cd\u4e0d\u540c\u573a\u666f\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u521d\u59cb\u5316\u6e32\u67d3"}),"\n",(0,r.jsx)(n.li,{children:"React \u72b6\u6001\u66f4\u65b0"}),"\n",(0,r.jsx)(n.li,{children:"React Native \u6e32\u67d3\u5668\u7684\u72b6\u6001\u66f4\u65b0"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u521d\u6b21\u6e32\u67d3",children:"\u521d\u6b21\u6e32\u67d3"}),"\n",(0,r.jsx)(n.p,{children:"\u60f3\u8c61\u4e00\u4e0b\u4f60\u51c6\u5907\u6e32\u67d3\u4e00\u4e2a\u7ec4\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function MyComponent() {\n  return (\n    <View>\n      <Text>Hello, World</Text>\n    </View>\n  );\n}\n\n// <MyComponent />\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,r.jsx)(n.code,{children:" <MyComponent />"}),"\u662f React \u5143\u7d20\u3002React \u4f1a\u5c06 React \u5143\u7d20\u7b80\u5316\u4e3a\u6700\u7ec8\u7684 React \u5bbf\u4e3b\u7ec4\u4ef6\u3002\u6bcf\u4e00\u6b21\u90fd\u4f1a\u9012\u5f52\u5730\u8c03\u7528\u51fd\u6570\u7ec4\u4ef6 MyComponet \uff0c\u6216\u7c7b\u7ec4\u4ef6\u7684 render \u65b9\u6cd5\uff0c\u76f4\u81f3\u6240\u6709\u7684\u7ec4\u4ef6\u90fd\u88ab\u8c03\u7528\u8fc7\u3002\u73b0\u5728\uff0c\u4f60\u62e5\u6709\u4e00\u68f5 React \u5bbf\u4e3b\u7ec4\u4ef6\u7684 React \u5143\u7d20\u6811\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9636\u6bb5\u4e00\u6e32\u67d3",children:"\u9636\u6bb5\u4e00\uff1a\u6e32\u67d3"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Phase one: render",src:i(27152).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5143\u7d20\u7b80\u5316\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u8c03\u7528\u4e00\u4e2a React \u5143\u7d20\uff0c\u6e32\u67d3\u5668\u540c\u65f6\u4f1a\u540c\u6b65\u5730\u521b\u5efa React \u5f71\u5b50\u8282\u70b9\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u53ea\u53d1\u751f\u5728 React \u5bbf\u4e3b\u7ec4\u4ef6\u4e0a\uff0c\u4e0d\u4f1a\u53d1\u751f\u5728 React \u590d\u5408\u7ec4\u4ef6\u4e0a\u3002\u6bd4\u5982\uff0c\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"<View>"}),"\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"ViewShadowNode"})," \u5bf9\u8c61\uff0c\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"<Text>"}),"\u4f1a\u521b\u5efa\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"TextShadowNode"}),"\u5bf9\u8c61\u3002\u6ce8\u610f\uff0c",(0,r.jsx)(n.code,{children:"<MyComponent>"}),"\u5e76\u6ca1\u6709\u76f4\u63a5\u5bf9\u5e94\u7684 React \u5f71\u5b50\u8282\u70b9\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 React \u4e3a\u4e24\u4e2a React \u5143\u7d20\u8282\u70b9\u521b\u5efa\u4e00\u5bf9\u7236\u5b50\u5173\u7cfb\u7684\u540c\u65f6\uff0c\u6e32\u67d3\u5668\u4e5f\u4f1a\u4e3a\u5bf9\u5e94\u7684 React \u5f71\u5b50\u8282\u70b9\u521b\u5efa\u4e00\u6837\u7684\u7236\u5b50\u5173\u7cfb\u3002\u8fd9\u5c31\u662f\u5f71\u5b50\u8282\u70b9\u7684\u7ec4\u88c5\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5176\u4ed6\u7ec6\u8282"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa React \u5f71\u5b50\u8282\u70b9\u3001\u521b\u5efa\u4e24\u4e2a\u5f71\u5b50\u8282\u70b9\u7684\u7236\u5b50\u5173\u7cfb\u7684\u64cd\u4f5c\u662f\u540c\u6b65\u7684\uff0c\u4e5f\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u8be5\u64cd\u4f5c\u7684\u6267\u884c\u662f\u4ece React\uff08JavaScript\uff09\u5230\u6e32\u67d3\u5668\uff08C++\uff09\u7684\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u662f\u5728 JavaScript \u7ebf\u7a0b\u4e0a\u6267\u884c\u7684\u3002\uff08\u8bd1\u6ce8\uff1a\u540e\u9762\u7ebf\u7a0b\u6a21\u578b\u6709\u89e3\u91ca\uff09"}),"\n",(0,r.jsxs)(n.li,{children:["React \u5143\u7d20\u6811\u548c\u5143\u7d20\u6811\u4e2d\u7684\u5143\u7d20\u5e76\u4e0d\u662f\u4e00\u76f4\u5b58\u5728\u7684\uff0c\u5b83\u53ea\u4e00\u4e2a\u5f53\u524d\u89c6\u56fe\u7684\u63cf\u8ff0\uff0c\u800c\u6700\u7ec8\u662f\u7531 React \u201cfiber\u201d \u6765\u5b9e\u73b0\u7684\u3002\u6bcf\u4e00\u4e2a \u201cfiber\u201d \u90fd\u4ee3\u8868\u4e00\u4e2a\u5bbf\u4e3b\u7ec4\u4ef6\uff0c\u5b58\u7740\u4e00\u4e2a C++ \u6307\u9488\uff0c\u6307\u5411 React \u5f71\u5b50\u8282\u70b9\u3002\u8fd9\u4e9b\u90fd\u662f\u56e0\u4e3a\u6709\u4e86 JSI \u624d\u6709\u53ef\u80fd\u5b9e\u73b0\u7684\u3002\u5b66\u4e60\u66f4\u591a\u5173\u4e8e \u201cfibers\u201d \u7684\u8d44\u6599\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://github.com/acdlite/react-fiber-architecture#what-is-a-fiber",children:"\u8fd9\u7bc7\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"React \u5f71\u5b50\u6811\u662f\u4e0d\u53ef\u53d8\u7684\u3002\u4e3a\u4e86\u66f4\u65b0\u4efb\u610f\u7684 React \u5f71\u5b50\u8282\u70b9\uff0c\u6e32\u67d3\u5668\u4f1a\u521b\u5efa\u4e86\u4e00\u68f5\u65b0\u7684 React \u5f71\u5b50\u6811\u3002\u4e3a\u4e86\u8ba9\u72b6\u6001\u66f4\u65b0\u66f4\u9ad8\u6548\uff0c\u6e32\u67d3\u5668\u63d0\u4f9b\u4e86 clone \u64cd\u4f5c\u3002\u66f4\u591a\u7ec6\u8282\u53ef\u53c2\u8003\u540e\u9762\u7684 React \u72b6\u6001\u66f4\u65b0\u90e8\u5206\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u5404\u4e2a\u6e32\u67d3\u9636\u6bb5\u7684\u4ea7\u7269\u5982\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Step one",src:i(29115).Z+"",width:"2121",height:"1023"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 React \u5f71\u5b50\u6811\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u6e32\u67d3\u5668\u89e6\u53d1\u4e86\u4e00\u6b21 React \u5143\u7d20\u6811\u7684\u63d0\u4ea4\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u9636\u6bb5\u4e8c\u63d0\u4ea4",children:"\u9636\u6bb5\u4e8c\uff1a\u63d0\u4ea4"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Phase two: commit",src:i(29198).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsx)(n.p,{children:"\u63d0\u4ea4\u9636\u6bb5\uff08Commit Phase\uff09\u7531\u4e24\u4e2a\u64cd\u4f5c\u7ec4\u6210\uff1a\u5e03\u5c40\u8ba1\u7b97\u548c\u6811\u7684\u63d0\u5347\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5e03\u5c40\u8ba1\u7b97\uff08Layout Calculation\uff09"}),"\uff1a\u8fd9\u4e00\u6b65\u4f1a\u8ba1\u7b97\u6bcf\u4e2a React \u5f71\u5b50\u8282\u70b9\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f\u3002\u5728 React Native \u4e2d\uff0c\u6bcf\u4e00\u4e2a React \u5f71\u5b50\u8282\u70b9\u7684\u5e03\u5c40\u90fd\u662f\u901a\u8fc7 Yoga \u5e03\u5c40\u5f15\u64ce\u6765\u8ba1\u7b97\u7684\u3002\u5b9e\u9645\u7684\u8ba1\u7b97\u9700\u8981\u8003\u8651\u6bcf\u4e00\u4e2a React \u5f71\u5b50\u8282\u70b9\u7684\u6837\u5f0f\uff0c\u8be5\u6837\u5f0f\u6765\u81ea\u4e8e JavaScript \u4e2d\u7684 React \u5143\u7d20\u3002\u8ba1\u7b97\u8fd8\u9700\u8981\u8003\u8651 React \u5f71\u5b50\u6811\u7684\u6839\u8282\u70b9\u7684\u5e03\u5c40\u7ea6\u675f\uff0c\u8fd9\u51b3\u5b9a\u4e86\u6700\u7ec8\u8282\u70b9\u80fd\u591f\u62e5\u6709\u591a\u5c11\u53ef\u7528\u7a7a\u95f4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Step two",src:i(30408).Z+"",width:"2117",height:"1026"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6811\u63d0\u5347\uff0c\u4ece\u65b0\u6811\u5230\u4e0b\u4e00\u68f5\u6811\uff08Tree Promotion\uff0cNew Tree \u2192 Next Tree\uff09"}),"\uff1a\u8fd9\u4e00\u6b65\u4f1a\u5c06\u65b0\u7684 React \u5f71\u5b50\u6811\u63d0\u5347\u4e3a\u8981\u6302\u8f7d\u7684\u4e0b\u4e00\u68f5\u6811\u3002\u8fd9\u6b21\u63d0\u5347\u4ee3\u8868\u7740\u65b0\u6811\u62e5\u6709\u4e86\u6240\u6709\u8981\u6302\u8f7d\u7684\u4fe1\u606f\uff0c\u5e76\u4e14\u80fd\u591f\u4ee3\u8868 React \u5143\u7d20\u6811\u7684\u6700\u65b0\u72b6\u6001\u3002\u4e0b\u4e00\u68f5\u6811\u4f1a\u5728 UI \u7ebf\u7a0b\u4e0b\u4e00\u4e2a\u201ctick\u201d\u8fdb\u884c\u6302\u8f7d\u3002\uff08\u8bd1\u6ce8\uff1atick \u662f CPU \u7684\u6700\u5c0f\u65f6\u95f4\u5355\u5143\uff09"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u66f4\u591a\u7ec6\u8282"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8fd9\u4e9b\u64cd\u4f5c\u90fd\u662f\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u5f02\u6b65\u6267\u884c\u7684\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7edd\u5927\u591a\u6570\u5e03\u5c40\u8ba1\u7b97\u90fd\u662f C++ \u4e2d\u6267\u884c\uff0c\u53ea\u6709\u67d0\u4e9b\u7ec4\u4ef6\uff0c\u6bd4\u5982 Text\u3001TextInput \u7ec4\u4ef6\u7b49\u7b49\uff0c\u7684\u5e03\u5c40\u8ba1\u7b97\u662f\u5728\u5bbf\u4e3b\u5e73\u53f0\u6267\u884c\u7684\u3002\u6587\u5b57\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u5728\u6bcf\u4e2a\u5bbf\u4e3b\u5e73\u53f0\u90fd\u662f\u7279\u522b\u7684\uff0c\u9700\u8981\u5728\u5bbf\u4e3b\u5e73\u53f0\u5c42\u8fdb\u884c\u8ba1\u7b97\u3002\u4e3a\u6b64\uff0cYoga \u5e03\u5c40\u5f15\u64ce\u8c03\u7528\u4e86\u5bbf\u4e3b\u5e73\u53f0\u7684\u51fd\u6570\u6765\u8ba1\u7b97\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u5e03\u5c40\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9636\u6bb5\u4e09\u6302\u8f7d",children:"\u9636\u6bb5\u4e09\uff1a\u6302\u8f7d"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Phase three: mount",src:i(88028).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsx)(n.p,{children:"\u6302\u8f7d\u9636\u6bb5\uff08Mount Phase\uff09\u4f1a\u5c06\u5df2\u7ecf\u5305\u542b\u5e03\u5c40\u8ba1\u7b97\u6570\u636e\u7684 React \u5f71\u5b50\u6811\uff0c\u8f6c\u6362\u4e3a\u4ee5\u50cf\u7d20\u5f62\u5f0f\u6e32\u67d3\u5728\u5c4f\u5e55\u4e2d\u7684\u5bbf\u4e3b\u89c6\u56fe\u6811\u3002\u8bf7\u8bb0\u4f4f\uff0c\u8fd9\u68f5 React \u5143\u7d20\u6811\u770b\u8d77\u6765\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<View>\n  <Text>Hello, World</Text>\n</View>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7ad9\u5728\u66f4\u9ad8\u7684\u62bd\u8c61\u5c42\u6b21\u4e0a\uff0cReact Native \u6e32\u67d3\u5668\u4e3a\u6bcf\u4e2a React \u5f71\u5b50\u8282\u70b9\u521b\u5efa\u4e86\u5bf9\u5e94\u7684\u5bbf\u4e3b\u89c6\u56fe\uff0c\u5e76\u4e14\u5c06\u5b83\u4eec\u6302\u8f7d\u5728\u5c4f\u5e55\u4e0a\u3002\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6e32\u67d3\u5668\u4e3a",(0,r.jsx)(n.code,{children:"<View>"})," \u521b\u5efa\u4e86",(0,r.jsx)(n.code,{children:"android.view.ViewGroup"})," \u5b9e\u4f8b\uff0c\u4e3a ",(0,r.jsx)(n.code,{children:"<Text>"})," \u521b\u5efa\u4e86\u6587\u5b57\u5185\u5bb9\u4e3a\u201cHello World\u201d\u7684 ",(0,r.jsx)(n.code,{children:"android.widget.TextView"}),"\u5b9e\u4f8b \u3002iOS \u4e5f\u662f\u7c7b\u4f3c\u7684\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"UIView"})," \u5e76\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"NSLayoutManager"})," \u521b\u5efa\u6587\u672c\u3002\u7136\u540e\u4f1a\u4e3a\u5bbf\u4e3b\u89c6\u56fe\u914d\u7f6e\u6765\u81ea React \u5f71\u5b50\u8282\u70b9\u4e0a\u7684\u5c5e\u6027\uff0c\u8fd9\u4e9b\u5bbf\u4e3b\u89c6\u56fe\u7684\u5927\u5c0f\u4f4d\u7f6e\u90fd\u662f\u901a\u8fc7\u8ba1\u7b97\u597d\u7684\u5e03\u5c40\u4fe1\u606f\u914d\u7f6e\u7684\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Step two",src:i(59125).Z+"",width:"2206",height:"1066"})}),"\n",(0,r.jsx)(n.p,{children:"\u66f4\u8be6\u7ec6\u5730\u8bf4\uff0c\u6302\u8f7d\u9636\u6bb5\u7531\u4e09\u4e2a\u6b65\u9aa4\u7ec4\u6210\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6811\u5bf9\u6bd4\uff08Tree Diffing\uff09\uff1a"})," \u8fd9\u4e2a\u6b65\u9aa4\u5b8c\u5168\u7528\u7684\u662f C++ \u8ba1\u7b97\u7684\uff0c\u4f1a\u5bf9\u6bd4\u201c\u5df2\u7ecf\u6e32\u67d3\u7684\u6811\u201d\uff08previously rendered tree\uff09\u548c\u201d\u4e0b\u4e00\u68f5\u6811\u201d\u4e4b\u95f4\u7684\u5dee\u5f02\u3002\u8ba1\u7b97\u7684\u7ed3\u679c\u662f\u4e00\u7cfb\u5217\u5bbf\u4e3b\u5e73\u53f0\u4e0a\u7684\u539f\u5b50\u53d8\u66f4\u64cd\u4f5c\uff0c\u6bd4\u5982 ",(0,r.jsx)(n.code,{children:"createView"}),", ",(0,r.jsx)(n.code,{children:"updateView"}),", ",(0,r.jsx)(n.code,{children:"removeView"}),", ",(0,r.jsx)(n.code,{children:"deleteView"})," \u7b49\u7b49\u3002\u5728\u8fd9\u4e2a\u6b65\u9aa4\u4e2d\uff0c\u8fd8\u4f1a\u5c06 React \u5f71\u5b50\u6811\u62cd\u5e73\uff0c\u6765\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u5bbf\u4e3b\u89c6\u56fe\u521b\u5efa\u3002\u5173\u4e8e\u89c6\u56fe\u62cd\u5e73\u7684\u7b97\u6cd5\u7ec6\u8282\u53ef\u4ee5\u5728\u540e\u6587\u627e\u5230\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"**\u6811\u63d0\u5347\uff0c\u4ece\u4e0b\u4e00\u68f5\u6811\u5230\u5df2\u6e32\u67d3\u6811\uff08Tree Promotion\uff0cNext Tree \u2192 Rendered Tree\uff09\uff1a**\u5728\u8fd9\u4e2a\u6b65\u9aa4\u4e2d\uff0c\u4f1a\u81ea\u52a8\u5c06\u201c\u4e0b\u4e00\u68f5\u6811\u201d\u63d0\u5347\u4e3a\u201c\u5148\u524d\u6e32\u67d3\u7684\u6811\u201d\uff0c\u56e0\u6b64\u5728\u4e0b\u4e00\u4e2a\u6302\u8f7d\u9636\u6bb5\uff0c\u6811\u7684\u5bf9\u6bd4\u8ba1\u7b97\u7528\u7684\u662f\u6b63\u786e\u7684\u6811\u3002"}),"\n",(0,r.jsx)(n.li,{children:"**\u89c6\u56fe\u6302\u8f7d\uff08View Mounting\uff09\uff1a**\u8fd9\u4e2a\u6b65\u9aa4\u4f1a\u5728\u5bf9\u5e94\u7684\u539f\u751f\u89c6\u56fe\u4e0a\u6267\u884c\u539f\u5b50\u53d8\u66f4\u64cd\u4f5c\uff0c\u8be5\u6b65\u9aa4\u662f\u53d1\u751f\u5728\u539f\u751f\u5e73\u53f0\u7684 UI \u7ebf\u7a0b\u7684\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u66f4\u591a\u7ec6\u8282"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6302\u8f7d\u9636\u6bb5\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u5728 UI \u7ebf\u7a0b\u540c\u6b65\u6267\u884c\u7684\u3002\u5982\u679c\u63d0\u4ea4\u9636\u6bb5\u662f\u5728\u540e\u53f0\u7ebf\u7a0b\u6267\u884c\uff0c\u90a3\u4e48\u5728\u6302\u8f7d\u9636\u6bb5\u4f1a\u5728 UI \u7ebf\u7a0b\u7684\u4e0b\u4e00\u4e2a\u201ctick\u201d\u6267\u884c\u3002\u53e6\u5916\uff0c\u5982\u679c\u63d0\u4ea4\u9636\u6bb5\u662f\u5728 UI \u7ebf\u7a0b\u6267\u884c\u7684\uff0c\u90a3\u4e48\u6302\u8f7d\u9636\u6bb5\u4e5f\u662f\u5728 UI \u7ebf\u7a0b\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6302\u8f7d\u9636\u6bb5\u7684\u8c03\u5ea6\u548c\u6267\u884c\u5f88\u5927\u7a0b\u5ea6\u53d6\u51b3\u4e8e\u5bbf\u4e3b\u5e73\u53f0\u3002\u4f8b\u5982\uff0c\u5f53\u524d Android \u548c iOS \u6302\u8f7d\u5c42\u7684\u6e32\u67d3\u67b6\u6784\u662f\u4e0d\u4e00\u6837\u7684\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u521d\u59cb\u5316\u6e32\u67d3\u65f6\uff0c\u201c\u5148\u524d\u6e32\u67d3\u7684\u6811\u201d\u662f\u7a7a\u7684\u3002\u56e0\u6b64\uff0c\u6811\u5bf9\u6bd4\uff08tree diffing\uff09\u6b65\u9aa4\u53ea\u4f1a\u751f\u6210\u4e00\u7cfb\u5217\u4ec5\u5305\u542b\u521b\u5efa\u89c6\u56fe\u3001\u8bbe\u7f6e\u5c5e\u6027\u3001\u6dfb\u52a0\u89c6\u56fe\u7684\u53d8\u66f4\u64cd\u4f5c\u3002\u800c\u5728\u63a5\u4e0b\u6765\u7684 React \u72b6\u6001\u66f4\u65b0\u573a\u666f\u4e2d\uff0c\u6811\u5bf9\u6bd4\u7684\u6027\u80fd\u81f3\u5173\u91cd\u8981\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u5f53\u524d\u751f\u4ea7\u73af\u5883\u7684\u6d4b\u8bd5\u4e2d\uff0c\u5728\u89c6\u56fe\u62cd\u5e73\u4e4b\u524d\uff0cReact \u5f71\u5b50\u6811\u901a\u5e38\u7531\u5927\u7ea6 600-1000 \u4e2a React \u5f71\u5b50\u8282\u70b9\u7ec4\u6210\u3002\u5728\u89c6\u56fe\u62cd\u5e73\u4e4b\u540e\uff0c\u6811\u7684\u8282\u70b9\u6570\u91cf\u4f1a\u51cf\u5c11\u5230\u5927\u7ea6 200 \u4e2a\u3002\u5728 iPad \u6216\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u4e0a\uff0c\u8fd9\u4e2a\u8282\u70b9\u6570\u91cf\u53ef\u80fd\u8981\u4e58\u4e2a 10\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"react-\u72b6\u6001\u66f4\u65b0",children:"React \u72b6\u6001\u66f4\u65b0"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u7ee7\u7eed\u770b React \u72b6\u6001\u66f4\u65b0\u65f6\uff0c\u6e32\u67d3\u6d41\u6c34\u7ebf\uff08render pipeline\uff09\u7684\u5404\u4e2a\u9636\u6bb5\u662f\u4ec0\u4e48\u6837\u7684\u3002\u5047\u8bbe\u4f60\u5728\u521d\u59cb\u5316\u6e32\u67d3\u65f6\uff0c\u6e32\u67d3\u7684\u662f\u5982\u4e0b\u7ec4\u4ef6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function MyComponent() {\n  return (\n    <View>\n      <View\n        style={{backgroundColor: 'red', height: 20, width: 20}}\n      />\n      <View\n        style={{backgroundColor: 'blue', height: 20, width: 20}}\n      />\n    </View>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5e94\u7528\u6211\u4eec\u5728",(0,r.jsx)(n.a,{href:"#%E5%88%9D%E6%AC%A1%E6%B8%B2%E6%9F%93",children:"\u521d\u6b21\u6e32\u67d3"}),"\u90e8\u5206\u5b66\u7684\u77e5\u8bc6\uff0c\u4f60\u53ef\u4ee5\u5f97\u5230\u5982\u4e0b\u7684\u4e09\u68f5\u6811\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Render pipeline 4",src:i(22173).Z+"",width:"2005",height:"838"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u8282\u70b9 3 \u5bf9\u5e94\u7684\u5bbf\u4e3b\u89c6\u56fe\u80cc\u666f\u662f",(0,r.jsx)(n.strong,{children:"\u7ea2\u7684"}),"\uff0c\u800c",(0,r.jsxs)(n.strong,{children:["\u8282\u70b9 4 ",(0,r.jsx)(n.strong,{children:"\u5bf9\u5e94\u7684\u5bbf\u4e3b\u89c6\u56fe\u80cc\u666f\u662f"}),"\u84dd\u7684"]}),"\u3002\u5047\u8bbe JavaScript \u7684\u4ea7\u54c1\u903b\u8f91\u662f\uff0c\u5c06\u7b2c\u4e00\u4e2a\u5185\u5d4c\u7684",(0,r.jsx)(n.code,{children:"<View>"}),"\u7684\u80cc\u666f\u989c\u8272\u7531\u7ea2\u8272\u6539\u4e3a\u9ec4\u8272\u3002\u65b0\u7684 React \u5143\u7d20\u6811\u770b\u8d77\u6765\u5927\u6982\u662f\u8fd9\u6837\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<View>\n  <View\n    style={{backgroundColor: 'yellow', height: 20, width: 20}}\n  />\n  <View\n    style={{backgroundColor: 'blue', height: 20, width: 20}}\n  />\n</View>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"React Native \u662f\u5982\u4f55\u5904\u7406\u8fd9\u4e2a\u66f4\u65b0\u7684\uff1f"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0c\u5f53\u53d1\u751f\u72b6\u6001\u66f4\u65b0\u65f6\uff0c\u4e3a\u4e86\u66f4\u65b0\u5df2\u7ecf\u6302\u8f7d\u7684\u5bbf\u4e3b\u89c6\u56fe\uff0c\u6e32\u67d3\u5668\u9700\u8981\u76f4\u63a5\u66f4\u65b0 React \u5143\u7d20\u6811\u3002 \u4f46\u662f\u4e3a\u4e86\u7ebf\u7a0b\u7684\u5b89\u5168\uff0cReact \u5143\u7d20\u6811\u548c React \u5f71\u5b50\u6811\u90fd\u5fc5\u987b\u662f\u4e0d\u53ef\u53d8\u7684\uff08immutable\uff09\u3002\u8fd9\u610f\u5473\u7740 React \u5e76\u4e0d\u80fd\u76f4\u63a5\u6539\u53d8\u5f53\u524d\u7684 React \u5143\u7d20\u6811\u548c React \u5f71\u5b50\u6811\uff0c\u800c\u662f\u5fc5\u987b\u4e3a\u6bcf\u68f5\u6811\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u65b0\u5c5e\u6027\u3001\u65b0\u6837\u5f0f\u548c\u65b0\u5b50\u8282\u70b9\u7684\u65b0\u526f\u672c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u7ee7\u7eed\u63a2\u7a76\u72b6\u6001\u66f4\u65b0\u65f6\uff0c\u6e32\u67d3\u6d41\u6c34\u7ebf\u7684\u5404\u4e2a\u9636\u6bb5\u53d1\u751f\u4e86\u4ec0\u4e48\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u9636\u6bb5\u4e00\u6e32\u67d3-1",children:"\u9636\u6bb5\u4e00\uff1a\u6e32\u67d3"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Phase one: render",src:i(27152).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsx)(n.p,{children:"React \u8981\u521b\u5efa\u4e86\u4e00\u4e2a\u5305\u542b\u65b0\u72b6\u6001\u7684\u65b0\u7684 React \u5143\u7d20\u6811\uff0c\u5b83\u5c31\u8981\u590d\u5236\u6240\u6709\u53d8\u66f4\u7684 React \u5143\u7d20\u548c React \u5f71\u5b50\u8282\u70b9\u3002 \u590d\u5236\u540e\uff0c\u518d\u63d0\u4ea4\u65b0\u7684 React \u5143\u7d20\u6811\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["React Native \u6e32\u67d3\u5668\u5229\u7528\u7ed3\u6784\u5171\u4eab\u7684\u65b9\u5f0f\uff0c\u5c06\u4e0d\u53ef\u53d8\u7279\u6027\u7684\u5f00\u9500\u53d8\u5f97\u6700\u5c0f\u3002\u4e3a\u4e86\u66f4\u65b0 React \u5143\u7d20\u7684\u65b0\u72b6\u6001\uff0c\u4ece\u8be5\u5143\u7d20\u5230\u6839\u5143\u7d20\u8def\u5f84\u4e0a\u7684\u6240\u6709\u5143\u7d20\u90fd\u9700\u8981\u590d\u5236\u3002 ",(0,r.jsx)(n.strong,{children:"\u4f46 React \u53ea\u4f1a\u590d\u5236\u6709\u65b0\u5c5e\u6027\u3001\u65b0\u6837\u5f0f\u6216\u65b0\u5b50\u5143\u7d20\u7684 React \u5143\u7d20"}),"\uff0c\u4efb\u4f55\u6ca1\u6709\u56e0\u72b6\u6001\u66f4\u65b0\u53d1\u751f\u53d8\u52a8\u7684 React \u5143\u7d20\u90fd\u4e0d\u4f1a\u590d\u5236\uff0c\u800c\u662f\u7531\u65b0\u6811\u548c\u65e7\u6811\u5171\u4eab\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cReact \u521b\u5efa\u65b0\u6811\u4f7f\u7528\u4e86\u8fd9\u4e9b\u64cd\u4f5c\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["CloneNode(",(0,r.jsx)(n.strong,{children:"Node 3"}),", ",(0,r.jsx)(n.code,{children:"{backgroundColor: 'yellow'}"}),") \u2192 ",(0,r.jsx)(n.strong,{children:"Node 3'"})]}),"\n",(0,r.jsxs)(n.li,{children:["CloneNode(",(0,r.jsx)(n.strong,{children:"Node 2"}),") \u2192 ",(0,r.jsx)(n.strong,{children:"Node 2'"})]}),"\n",(0,r.jsxs)(n.li,{children:["AppendChild(",(0,r.jsx)(n.strong,{children:"Node 2'"}),", ",(0,r.jsx)(n.strong,{children:"Node 3'"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["AppendChild(",(0,r.jsx)(n.strong,{children:"Node 2'"}),", ",(0,r.jsx)(n.strong,{children:"Node 4"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["CloneNode(",(0,r.jsx)(n.strong,{children:"Node 1"}),") \u2192 ",(0,r.jsx)(n.strong,{children:"Node 1'"})]}),"\n",(0,r.jsxs)(n.li,{children:["AppendChild(",(0,r.jsx)(n.strong,{children:"Node 1'"}),", ",(0,r.jsx)(n.strong,{children:"Node 2'"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c**\u8282\u70b9 1'\uff08Node 1'\uff09**\u5c31\u662f\u65b0\u7684 React \u5143\u7d20\u6811\u7684\u6839\u8282\u70b9\u3002\u6211\u4eec\u7528 ",(0,r.jsx)(n.strong,{children:"T"})," \u4ee3\u8868\u201c\u5148\u524d\u6e32\u67d3\u7684\u6811\u201d\uff0c\u7528 ",(0,r.jsx)(n.strong,{children:"T'"})," \u4ee3\u8868\u201c\u65b0\u6811\u201d\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Render pipeline 5",src:i(45653).Z+"",width:"2040",height:"797"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\u8282\u70b9 4 \u5728 ",(0,r.jsx)(n.strong,{children:"T"})," and ",(0,r.jsx)(n.strong,{children:"T'"})," \u4e4b\u95f4\u662f\u5171\u4eab\u7684\u3002\u7ed3\u6784\u5171\u4eab\u63d0\u5347\u4e86\u6027\u80fd\u5e76\u51cf\u5c11\u4e86\u5185\u5b58\u7684\u4f7f\u7528\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9636\u6bb5\u4e8c\u63d0\u4ea4-1",children:"\u9636\u6bb5\u4e8c\uff1a\u63d0\u4ea4"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Phase two: commit",src:i(29198).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 React \u521b\u5efa\u5b8c\u65b0\u7684 React \u5143\u7d20\u6811\u548c React \u5f71\u5b50\u6811\u540e\uff0c\u9700\u8981\u63d0\u4ea4\u5b83\u4eec\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"**\u5e03\u5c40\u8ba1\u7b97\uff08Layout Calculation\uff09\uff1a**\u72b6\u6001\u66f4\u65b0\u65f6\u7684\u5e03\u5c40\u8ba1\u7b97\uff0c\u548c\u521d\u59cb\u5316\u6e32\u67d3\u7684\u5e03\u5c40\u8ba1\u7b97\u7c7b\u4f3c\u3002\u4e00\u4e2a\u91cd\u8981\u7684\u4e0d\u540c\u4e4b\u5904\u662f\u5e03\u5c40\u8ba1\u7b97\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5171\u4eab\u7684 React \u5f71\u5b50\u8282\u70b9\u88ab\u590d\u5236\u3002\u8fd9\u662f\u56e0\u4e3a\uff0c\u5982\u679c\u5171\u4eab\u7684 React \u5f71\u5b50\u8282\u70b9\u7684\u7236\u8282\u70b9\u5f15\u8d77\u4e86\u5e03\u5c40\u6539\u53d8\uff0c\u5171\u4eab\u7684 React \u5f71\u5b50\u8282\u70b9\u7684\u5e03\u5c40\u4e5f\u53ef\u80fd\u53d1\u751f\u6539\u53d8\u3002"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6811\u63d0\u5347\uff08Tree Promotion \uff0cNew Tree \u2192 Next Tree\uff09:"})," \u548c\u521d\u59cb\u5316\u6e32\u67d3\u7684\u6811\u63d0\u5347\u7c7b\u4f3c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6811\u5bf9\u6bd4\uff08Tree Diffing\uff09\uff1a"})," \u8fd9\u4e2a\u6b65\u9aa4\u4f1a\u8ba1\u7b97\u201c\u5148\u524d\u6e32\u67d3\u7684\u6811\u201d\uff08",(0,r.jsx)(n.strong,{children:"T"}),"\uff09\u548c\u201c\u4e0b\u4e00\u68f5\u6811\u201d\uff08",(0,r.jsx)(n.strong,{children:"T'"}),"\uff09\u7684\u533a\u522b\u3002\u8ba1\u7b97\u7684\u7ed3\u679c\u662f\u539f\u751f\u89c6\u56fe\u7684\u53d8\u66f4\u64cd\u4f5c\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u5305\u62ec\uff1a",(0,r.jsx)(n.code,{children:"UpdateView(**Node 3'**, {backgroundColor: '\u201cyellow\u201c})"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9636\u6bb5\u4e09\u6302\u8f7d-1",children:"\u9636\u6bb5\u4e09\uff1a\u6302\u8f7d"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Phase three: mount",src:i(88028).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6811\u63d0\u5347\uff08Tree Promotion \uff0cNext Tree \u2192 Rendered Tree\uff09:"})," \u5728\u8fd9\u4e2a\u6b65\u9aa4\u4e2d\uff0c\u4f1a\u81ea\u52a8\u5c06\u201c\u4e0b\u4e00\u68f5\u6811\u201d\u63d0\u5347\u4e3a\u201c\u5148\u524d\u6e32\u67d3\u7684\u6811\u201d\uff0c\u56e0\u6b64\u5728\u4e0b\u4e00\u4e2a\u6302\u8f7d\u9636\u6bb5\uff0c\u6811\u7684\u5bf9\u6bd4\u8ba1\u7b97\u7528\u7684\u662f\u6b63\u786e\u7684\u6811\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["**\u89c6\u56fe\u6302\u8f7d\uff08View Mounting\uff09\uff1a",(0,r.jsx)(n.strong,{children:"\u8fd9\u4e2a\u6b65\u9aa4\u4f1a\u5728\u5bf9\u5e94\u7684\u539f\u751f\u89c6\u56fe\u4e0a\u6267\u884c\u539f\u5b50\u53d8\u66f4\u64cd\u4f5c\u3002\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u53ea\u6709"}),"\u89c6\u56fe 3\uff08View 3\uff09**\u7684\u80cc\u666f\u989c\u8272\u4f1a\u66f4\u65b0\uff0c\u53d8\u4e3a\u9ec4\u8272\u3002\n",(0,r.jsx)(n.img,{alt:"Render pipeline 6",src:i(14296).Z+"",width:"2038",height:"798"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"react-native-\u6e32\u67d3\u5668\u72b6\u6001\u66f4\u65b0",children:"React Native \u6e32\u67d3\u5668\u72b6\u6001\u66f4\u65b0"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u5f71\u5b50\u6811\u4e2d\u7684\u5927\u591a\u6570\u4fe1\u606f\u800c\u8a00\uff0cReact \u662f\u552f\u4e00\u6240\u6709\u65b9\u4e5f\u662f\u552f\u4e00\u4e8b\u5b9e\u6e90\u3002\u5e76\u4e14\u6240\u6709\u6765\u6e90\u4e8e React \u7684\u6570\u636e\u90fd\u662f\u5355\u5411\u6d41\u52a8\u7684\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u6709\u4e00\u4e2a\u4f8b\u5916\u3002\u8fd9\u4e2a\u4f8b\u5916\u662f\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u673a\u5236\uff1aC++ \u7ec4\u4ef6\u53ef\u4ee5\u62e5\u6709\u72b6\u6001\uff0c\u4e14\u8be5\u72b6\u6001\u53ef\u4ee5\u4e0d\u76f4\u63a5\u66b4\u9732\u7ed9 JavaScript\uff0c\u8fd9\u65f6\u5019 JavaScript \uff08\u6216 React\uff09\u5c31\u4e0d\u662f\u552f\u4e00\u4e8b\u5b9e\u6e90\u4e86\u3002\u901a\u5e38\uff0c\u53ea\u6709\u590d\u6742\u7684\u5bbf\u4e3b\u7ec4\u4ef6\u624d\u4f1a\u7528\u5230 C++ \u72b6\u6001\uff0c\u7edd\u5927\u591a\u6570\u5bbf\u4e3b\u7ec4\u4ef6\u90fd\u4e0d\u9700\u8981\u6b64\u529f\u80fd\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff0cScrollView \u4f7f\u7528\u8fd9\u79cd\u673a\u5236\u8ba9\u6e32\u67d3\u5668\u77e5\u9053\u5f53\u524d\u7684\u504f\u79fb\u91cf\u662f\u591a\u5c11\u3002\u504f\u79fb\u91cf\u7684\u66f4\u65b0\u662f\u5bbf\u4e3b\u5e73\u53f0\u7684\u89e6\u53d1\uff0c\u5177\u4f53\u5730\u8bf4\u662f ScrollView \u7ec4\u4ef6\u3002\u8fd9\u4e9b\u504f\u79fb\u91cf\u4fe1\u606f\u5728 React Native \u7684 ",(0,r.jsx)(n.a,{href:"/docs/direct-manipulation#measurecallback",children:"measure"})," \u7b49 API \u4e2d\u6709\u7528\u5230\u3002 \u56e0\u4e3a\u504f\u79fb\u91cf\u6570\u636e\u662f\u7531 C++ \u72b6\u6001\u6301\u6709\u7684\uff0c\u6240\u4ee5\u6e90\u4e8e\u5bbf\u4e3b\u5e73\u53f0\u66f4\u65b0\uff0c\u4e0d\u5f71\u54cd React \u5143\u7d20\u6811\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0cC++ \u72b6\u6001\u66f4\u65b0\u7c7b\u4f3c\u4e8e\u6211\u4eec\u524d\u9762\u63d0\u5230\u7684 React \u72b6\u6001\u66f4\u65b0\uff0c\u4f46\u6709\u4e24\u70b9\u4e0d\u540c\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u56e0\u4e3a\u4e0d\u6d89\u53ca React\uff0c\u6240\u4ee5\u8df3\u8fc7\u4e86\u201c\u6e32\u67d3\u9636\u6bb5\u201d\uff08Render phase\uff09\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u66f4\u65b0\u53ef\u4ee5\u6e90\u81ea\u548c\u53d1\u751f\u5728\u4efb\u4f55\u7ebf\u7a0b\uff0c\u5305\u62ec\u4e3b\u7ebf\u7a0b\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9636\u6bb5\u4e8c\u63d0\u4ea4-2",children:"\u9636\u6bb5\u4e8c\uff1a\u63d0\u4ea4"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Phase two: commit",src:i(29198).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsxs)(n.p,{children:["\u63d0\u4ea4\u9636\u6bb5\uff08Commit Phase\uff09\uff1a\u5728\u6267\u884c C++ \u72b6\u6001\u66f4\u65b0\u65f6\uff0c\u4f1a\u6709\u4e00\u6bb5\u4ee3\u7801\u628a\u5f71\u5b50\u8282\u70b9**\uff08N\uff09**\u7684 C++ \u72b6\u6001\u8bbe\u7f6e\u4e3a\u503c ",(0,r.jsx)(n.strong,{children:"S"}),"\u3002React Native \u6e32\u67d3\u5668\u4f1a\u53cd\u590d\u5c1d\u8bd5\u83b7\u53d6 ",(0,r.jsx)(n.strong,{children:"N"})," \u7684\u6700\u65b0\u63d0\u4ea4\u7248\u672c\uff0c\u5e76\u4f7f\u7528\u65b0\u72b6\u6001 ",(0,r.jsx)(n.strong,{children:"S"})," \u590d\u5236\u5b83 \uff0c\u5e76\u5c06\u65b0\u7684\u5f71\u5b50\u8282\u70b9 ",(0,r.jsx)(n.strong,{children:"N'"})," \u63d0\u4ea4\u7ed9\u5f71\u5b50\u6811\u3002\u5982\u679c React \u5728\u6b64\u671f\u95f4\u6267\u884c\u4e86\u53e6\u4e00\u6b21\u63d0\u4ea4\uff0c\u6216\u8005\u5176\u4ed6 C++ \u72b6\u6001\u6709\u4e86\u66f4\u65b0\uff0c\u672c\u6b21 C++ \u72b6\u6001\u63d0\u4ea4\u5931\u8d25\u3002\u8fd9\u65f6\u6e32\u67d3\u5668\u5c06\u591a\u6b21\u91cd\u8bd5 C++ \u72b6\u6001\u66f4\u65b0\uff0c\u76f4\u5230\u63d0\u4ea4\u6210\u529f\u3002\u8fd9\u53ef\u4ee5\u9632\u6b62\u771f\u5b9e\u6e90\u7684\u51b2\u7a81\u548c\u7ade\u4e89\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u9636\u6bb5\u4e09\u6302\u8f7d-2",children:"\u9636\u6bb5\u4e09\uff1a\u6302\u8f7d"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Phase three: mount",src:i(88028).Z+"",width:"1622",height:"92"})}),"\n",(0,r.jsx)(n.p,{children:"\u6302\u8f7d\u9636\u6bb5\uff08Mount Phase\uff09\u5b9e\u9645\u4e0a\u4e0e React \u72b6\u6001\u66f4\u65b0\u7684\u6302\u8f7d\u9636\u6bb5\u76f8\u540c\u3002\u6e32\u67d3\u5668\u4ecd\u7136\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\u5e03\u5c40\u3001\u6267\u884c\u6811\u5bf9\u6bd4\u7b49\u64cd\u4f5c\u3002\u8be6\u7ec6\u6b65\u9aa4\u5728\u524d\u9762\u5df2\u7ecf\u8bb2\u8fc7\u4e86\u3002"})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},71426:(e,n,i)=>{var r=i(27378),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,i){var r,c={},a=null,h=null;for(r in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:h,props:c,_owner:l.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},24246:(e,n,i)=>{e.exports=i(71426)},27152:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/phase-one-render-cdd8336227468340a4c6b37d485e5bf8.png"},88028:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/phase-three-mount-3544340fff87101e0f7815560061fec7.png"},29198:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/phase-two-commit-bc6267e2319ae0ccfaa52663d36ad48f.png"},29115:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/render-pipeline-1-e5243e792e2cd1a55617acb26adbcf2b.png"},30408:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/render-pipeline-2-75ee0201996c04a64f009f1a67bf470a.png"},59125:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/render-pipeline-3-1dc3249f58a1ecef0392b7faabaca37c.png"},22173:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/render-pipeline-4-0f4611cfae668670f72f2b4c89813714.png"},45653:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/render-pipeline-5-5c32c125c1752ce394bdb54da364addb.png"},14296:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/render-pipeline-6-dabe7cbda658efec9aeb1ad3be75b72c.png"},71670:(e,n,i)=>{i.d(n,{Zo:()=>l,ah:()=>c});var r=i(27378);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function l({components:e,children:n,disableParentContext:i}){let l;return l=i?"function"==typeof e?e({}):e||s:c(e),r.createElement(t.Provider,{value:l},n)}}}]);