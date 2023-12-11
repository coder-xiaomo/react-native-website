/*! For license information please see 0d01e3af.da75ab71.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[83208],{19525:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(24246),r=i(71670);const s={id:"performance",title:"\u6027\u80fd\u7efc\u8ff0"},a=void 0,o={id:"performance",title:"\u6027\u80fd\u7efc\u8ff0",description:"\u4f7f\u7528 React Native \u66ff\u4ee3\u57fa\u4e8e WebView \u7684\u6846\u67b6\u6765\u5f00\u53d1 App \u7684\u4e00\u4e2a\u5f3a\u6709\u529b\u7684\u7406\u7531\uff0c\u5c31\u662f\u4e3a\u4e86\u4f7f App \u53ef\u4ee5\u8fbe\u5230\u6bcf\u79d2 60 \u5e27\uff08\u8db3\u591f\u6d41\u7545\uff09\uff0c\u5e76\u4e14\u80fd\u6709\u7c7b\u4f3c\u539f\u751f App \u7684\u5916\u89c2\u548c\u624b\u611f\u3002\u56e0\u6b64\u6211\u4eec\u4e5f\u5c3d\u53ef\u80fd\u5730\u4f18\u5316 React Native \u53bb\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u4f7f\u5f00\u53d1\u8005\u80fd\u96c6\u4e2d\u7cbe\u529b\u5904\u7406 App \u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u800c\u4e0d\u7528\u8d39\u5fc3\u8003\u8651\u6027\u80fd\u3002\u4f46\u662f\uff0c\u603b\u8fd8\u662f\u6709\u4e00\u4e9b\u5730\u65b9\u6709\u6240\u6b20\u7f3a\uff0c\u4ee5\u53ca\u5728\u67d0\u4e9b\u573a\u5408 React Native \u8fd8\u4e0d\u80fd\u591f\u66ff\u4f60\u51b3\u5b9a\u5982\u4f55\u8fdb\u884c\u4f18\u5316\uff08\u7528\u539f\u751f\u4ee3\u7801\u5199\u4e5f\u65e0\u6cd5\u907f\u514d\uff09\uff0c\u56e0\u6b64\u4eba\u5de5\u7684\u5e72\u9884\u4f9d\u7136\u662f\u5fc5\u8981\u7684\u3002",source:"@site/versioned_docs/version-0.70/performance.md",sourceDirName:".",slug:"/performance",permalink:"/docs/0.70/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/performance.md",tags:[],version:"0.70",frontMatter:{id:"performance",title:"\u6027\u80fd\u7efc\u8ff0"},sidebar:"docs",previous:{title:"\u65e0\u969c\u788d\u529f\u80fd",permalink:"/docs/0.70/accessibility"},next:{title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6",permalink:"/docs/0.70/build-speed"}},c={},d=[{value:"\u5173\u4e8e\u201c\u5e27\u201d\u4f60\u6240\u9700\u8981\u77e5\u9053\u7684",id:"\u5173\u4e8e\u5e27\u4f60\u6240\u9700\u8981\u77e5\u9053\u7684",level:2},{value:"JS \u5e27\u7387(JavaScript \u7ebf\u7a0b)",id:"js-\u5e27\u7387javascript-\u7ebf\u7a0b",level:3},{value:"UI \u5e27\u7387(\u4e3b\u7ebf\u7a0b)",id:"ui-\u5e27\u7387\u4e3b\u7ebf\u7a0b",level:3},{value:"\u6027\u80fd\u95ee\u9898\u7684\u5e38\u89c1\u539f\u56e0",id:"\u6027\u80fd\u95ee\u9898\u7684\u5e38\u89c1\u539f\u56e0",level:2},{value:"\u5f00\u53d1\u6a21\u5f0f (<code>dev=true</code>)",id:"\u5f00\u53d1\u6a21\u5f0f-devtrue",level:3},{value:"console.log \u8bed\u53e5",id:"consolelog-\u8bed\u53e5",level:3},{value:"<code>ListView</code> \u9996\u6b21\u6e32\u67d3\u7f13\u6162\u6216\u8005\u7531\u4e8e\u5217\u8868\u5f88\u5927\u5bfc\u81f4\u6ed1\u52a8\u5f88\u6162",id:"listview-\u9996\u6b21\u6e32\u67d3\u7f13\u6162\u6216\u8005\u7531\u4e8e\u5217\u8868\u5f88\u5927\u5bfc\u81f4\u6ed1\u52a8\u5f88\u6162",level:3},{value:"\u5728\u91cd\u7ed8\u4e00\u4e2a\u51e0\u4e4e\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316\u7684\u9875\u9762\u65f6\uff0cJS \u5e27\u7387\u4e25\u91cd\u964d\u4f4e",id:"\u5728\u91cd\u7ed8\u4e00\u4e2a\u51e0\u4e4e\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316\u7684\u9875\u9762\u65f6js-\u5e27\u7387\u4e25\u91cd\u964d\u4f4e",level:3},{value:"Dropping JS thread FPS because of doing a lot of work on the JavaScript thread at the same time",id:"dropping-js-thread-fps-because-of-doing-a-lot-of-work-on-the-javascript-thread-at-the-same-time",level:3},{value:"\u5728\u5c4f\u5e55\u4e0a\u79fb\u52a8\u89c6\u56fe\uff08\u6eda\u52a8\uff0c\u5207\u6362\uff0c\u65cb\u8f6c\uff09\u65f6\uff0cUI \u7ebf\u7a0b\u6389\u5e27",id:"\u5728\u5c4f\u5e55\u4e0a\u79fb\u52a8\u89c6\u56fe\u6eda\u52a8\u5207\u6362\u65cb\u8f6c\u65f6ui-\u7ebf\u7a0b\u6389\u5e27",level:3},{value:"\u4f7f\u7528\u52a8\u753b\u6539\u53d8\u56fe\u7247\u7684\u5c3a\u5bf8\u65f6\uff0cUI \u7ebf\u7a0b\u6389\u5e27",id:"\u4f7f\u7528\u52a8\u753b\u6539\u53d8\u56fe\u7247\u7684\u5c3a\u5bf8\u65f6ui-\u7ebf\u7a0b\u6389\u5e27",level:3},{value:"Touchable \u7cfb\u5217\u7ec4\u4ef6\u4e0d\u80fd\u5f88\u597d\u7684\u54cd\u5e94",id:"touchable-\u7cfb\u5217\u7ec4\u4ef6\u4e0d\u80fd\u5f88\u597d\u7684\u54cd\u5e94",level:3}];function l(e){const n=Object.assign({p:"p",h2:"h2",code:"code",img:"img",h3:"h3",a:"a",blockquote:"blockquote",pre:"pre",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u4f7f\u7528 React Native \u66ff\u4ee3\u57fa\u4e8e WebView \u7684\u6846\u67b6\u6765\u5f00\u53d1 App \u7684\u4e00\u4e2a\u5f3a\u6709\u529b\u7684\u7406\u7531\uff0c\u5c31\u662f\u4e3a\u4e86\u4f7f App \u53ef\u4ee5\u8fbe\u5230\u6bcf\u79d2 60 \u5e27\uff08\u8db3\u591f\u6d41\u7545\uff09\uff0c\u5e76\u4e14\u80fd\u6709\u7c7b\u4f3c\u539f\u751f App \u7684\u5916\u89c2\u548c\u624b\u611f\u3002\u56e0\u6b64\u6211\u4eec\u4e5f\u5c3d\u53ef\u80fd\u5730\u4f18\u5316 React Native \u53bb\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0c\u4f7f\u5f00\u53d1\u8005\u80fd\u96c6\u4e2d\u7cbe\u529b\u5904\u7406 App \u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u800c\u4e0d\u7528\u8d39\u5fc3\u8003\u8651\u6027\u80fd\u3002\u4f46\u662f\uff0c\u603b\u8fd8\u662f\u6709\u4e00\u4e9b\u5730\u65b9\u6709\u6240\u6b20\u7f3a\uff0c\u4ee5\u53ca\u5728\u67d0\u4e9b\u573a\u5408 React Native \u8fd8\u4e0d\u80fd\u591f\u66ff\u4f60\u51b3\u5b9a\u5982\u4f55\u8fdb\u884c\u4f18\u5316\uff08\u7528\u539f\u751f\u4ee3\u7801\u5199\u4e5f\u65e0\u6cd5\u907f\u514d\uff09\uff0c\u56e0\u6b64\u4eba\u5de5\u7684\u5e72\u9884\u4f9d\u7136\u662f\u5fc5\u8981\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6587\u7684\u76ee\u7684\u662f\u6559\u7ed9\u4f60\u4e00\u4e9b\u57fa\u672c\u7684\u77e5\u8bc6\uff0c\u6765\u5e2e\u4f60\u6392\u67e5\u6027\u80fd\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ee5\u53ca\u63a2\u8ba8\u8fd9\u4e9b\u95ee\u9898\u4ea7\u751f\u7684\u539f\u56e0\u548c\u63a8\u8350\u7684\u89e3\u51b3\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u4e8e\u5e27\u4f60\u6240\u9700\u8981\u77e5\u9053\u7684",children:"\u5173\u4e8e\u201c\u5e27\u201d\u4f60\u6240\u9700\u8981\u77e5\u9053\u7684"}),"\n",(0,t.jsx)(n.p,{children:"\u8001\u4e00\u8f88\u4eba\u5e38\u5e38\u628a\u7535\u5f71\u79f0\u4e3a\u201c\u79fb\u52a8\u7684\u753b\u201d\uff0c\u662f\u56e0\u4e3a\u89c6\u9891\u4e2d\u903c\u771f\u7684\u52a8\u6001\u6548\u679c\u5176\u5b9e\u662f\u4e00\u79cd\u5e7b\u89c9\uff0c\u8fd9\u79cd\u5e7b\u89c9\u662f\u7531\u4e00\u7ec4\u9759\u6001\u7684\u56fe\u7247\u4ee5\u4e00\u4e2a\u7a33\u5b9a\u7684\u901f\u5ea6\u5feb\u901f\u53d8\u5316\u6240\u4ea7\u751f\u7684\u3002\u6211\u4eec\u628a\u8fd9\u7ec4\u56fe\u7247\u4e2d\u7684\u6bcf\u4e00\u5f20\u56fe\u7247\u53eb\u505a\u4e00\u5e27\uff0c\u800c\u6bcf\u79d2\u949f\u663e\u793a\u7684\u5e27\u6570\u76f4\u63a5\u7684\u5f71\u54cd\u4e86\u89c6\u9891\uff08\u6216\u8005\u8bf4\u7528\u6237\u754c\u9762\uff09\u7684\u6d41\u7545\u5ea6\u548c\u771f\u5b9e\u611f\u3002iOS \u8bbe\u5907\u63d0\u4f9b\u4e86\u6bcf\u79d2 60 \u7684\u5e27\u7387\uff0c\u8fd9\u5c31\u7559\u7ed9\u4e86\u5f00\u53d1\u8005\u548c UI \u7cfb\u7edf\u5927\u7ea6 16.67ms \u6765\u5b8c\u6210\u751f\u6210\u4e00\u5f20\u9759\u6001\u56fe\u7247\uff08\u5e27\uff09\u6240\u9700\u8981\u7684\u6240\u6709\u5de5\u4f5c\u3002\u5982\u679c\u5728\u8fd9\u5206\u6d3e\u7684 16.67ms \u4e4b\u5185\u6ca1\u6709\u80fd\u591f\u5b8c\u6210\u8fd9\u4e9b\u5de5\u4f5c\uff0c\u5c31\u4f1a\u5f15\u53d1\u2018\u4e22\u5e27\u2019\u7684\u540e\u679c\uff0c\u4f7f\u754c\u9762\u8868\u73b0\u7684\u4e0d\u591f\u6d41\u7545\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u8981\u8bb2\u7684\u4e8b\u60c5\u53ef\u80fd\u66f4\u4e3a\u590d\u6742\uff1a\u8bf7\u5148\u8c03\u51fa\u4f60\u5e94\u7528\u7684\u5f00\u53d1\u83dc\u5355\uff0c\u6253\u5f00",(0,t.jsx)(n.code,{children:"Show FPS Monitor"}),". \u4f60\u4f1a\u6ce8\u610f\u5230\u6709\u4e24\u4e2a\u4e0d\u540c\u7684\u5e27\u7387."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(14084).Z+"",width:"522",height:"138"})}),"\n",(0,t.jsx)(n.h3,{id:"js-\u5e27\u7387javascript-\u7ebf\u7a0b",children:"JS \u5e27\u7387(JavaScript \u7ebf\u7a0b)"}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u5927\u591a\u6570 React Native \u5e94\u7528\u6765\u8bf4\uff0c\u4e1a\u52a1\u903b\u8f91\u662f\u8fd0\u884c\u5728 JavaScript \u7ebf\u7a0b\u4e0a\u7684\u3002\u8fd9\u662f React \u5e94\u7528\u6240\u5728\u7684\u7ebf\u7a0b\uff0c\u4e5f\u662f\u53d1\u751f API \u8c03\u7528\uff0c\u4ee5\u53ca\u5904\u7406\u89e6\u6478\u4e8b\u4ef6\u7b49\u64cd\u4f5c\u7684\u7ebf\u7a0b\u3002\u66f4\u65b0\u6570\u636e\u5230\u539f\u751f\u652f\u6301\u7684\u89c6\u56fe\u662f\u6279\u91cf\u8fdb\u884c\u7684\uff0c\u5e76\u4e14\u5728\u4e8b\u4ef6\u5faa\u73af\u6bcf\u8fdb\u884c\u4e00\u6b21\u7684\u65f6\u5019\u88ab\u53d1\u9001\u5230\u539f\u751f\u7aef\uff0c\u8fd9\u4e00\u6b65\u901a\u5e38\u4f1a\u5728\u4e00\u5e27\u65f6\u95f4\u7ed3\u675f\u4e4b\u524d\u5904\u7406\u5b8c\uff08\u5982\u679c\u4e00\u5207\u987a\u5229\u7684\u8bdd\uff09\u3002\u5982\u679c JavaScript \u7ebf\u7a0b\u6709\u4e00\u5e27\u6ca1\u6709\u53ca\u65f6\u54cd\u5e94\uff0c\u5c31\u88ab\u8ba4\u4e3a\u53d1\u751f\u4e86\u4e00\u6b21\u4e22\u5e27\u3002 \u4f8b\u5982\uff0c\u4f60\u5728\u4e00\u4e2a\u590d\u6742\u5e94\u7528\u7684\u6839\u7ec4\u4ef6\u4e0a\u8c03\u7528\u4e86",(0,t.jsx)(n.code,{children:"this.setState"}),"\uff0c\u4ece\u800c\u5bfc\u81f4\u4e00\u6b21\u5f00\u9500\u5f88\u5927\u7684\u5b50\u7ec4\u4ef6\u6811\u7684\u91cd\u7ed8\uff0c\u53ef\u60f3\u800c\u77e5\uff0c\u8fd9\u53ef\u80fd\u4f1a\u82b1\u8d39 200ms \u4e5f\u5c31\u662f\u6574\u6574 12 \u5e27\u7684\u4e22\u5931\u3002\u6b64\u65f6\uff0c\u4efb\u4f55\u7531 JavaScript \u63a7\u5236\u7684\u52a8\u753b\u90fd\u4f1a\u5361\u4f4f\u3002\u53ea\u8981\u5361\u987f\u8d85\u8fc7 100ms\uff0c\u7528\u6237\u5c31\u4f1a\u660e\u663e\u7684\u611f\u89c9\u5230\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u79cd\u60c5\u51b5\u7ecf\u5e38\u53d1\u751f\u5728\u8001\u7684",(0,t.jsx)(n.code,{children:"Navigator"}),"\u5bfc\u822a\u5668\u7684\u5207\u6362\u8fc7\u7a0b\u4e2d\uff1a\u5f53\u4f60 push \u4e00\u4e2a\u65b0\u7684\u8def\u7531\u65f6\uff0cJavaScript \u9700\u8981\u7ed8\u5236\u65b0\u573a\u666f\u6240\u9700\u7684\u6240\u6709\u7ec4\u4ef6\uff0c\u4ee5\u53d1\u9001\u6b63\u786e\u7684\u547d\u4ee4\u7ed9\u539f\u751f\u7aef\u53bb\u521b\u5efa\u89c6\u56fe\u3002\u7531\u4e8e\u5207\u6362\u662f\u7531 JavaScript \u7ebf\u7a0b\u6240\u63a7\u5236\uff0c\u56e0\u6b64\u7ecf\u5e38\u4f1a\u5360\u7528\u82e5\u5e72\u5e27\u7684\u65f6\u95f4\uff0c\u5f15\u8d77\u4e00\u4e9b\u5361\u987f\u3002\u6709\u7684\u65f6\u5019\uff0c\u7ec4\u4ef6\u4f1a\u5728",(0,t.jsx)(n.code,{children:"componentDidMount"}),"\u51fd\u6570\u4e2d\u505a\u4e00\u4e9b\u989d\u5916\u7684\u4e8b\u60c5\uff0c\u8fd9\u751a\u81f3\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9875\u9762\u5207\u6362\u8fc7\u7a0b\u4e2d\u591a\u8fbe\u4e00\u79d2\u7684\u5361\u987f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u53e6\u4e00\u4e2a\u4f8b\u5b50\u662f\u8001\u7684\u89e6\u6478\u4e8b\u4ef6\u7684\u54cd\u5e94\uff1a\u5982\u679c\u4f60\u6b63\u5728 JavaScript \u7ebf\u7a0b\u5904\u7406\u4e00\u4e2a\u8de8\u8d8a\u591a\u4e2a\u5e27\u7684\u5de5\u4f5c\uff0c\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230",(0,t.jsx)(n.code,{children:"TouchableOpacity"}),"\u7684\u54cd\u5e94\u88ab\u5ef6\u8fdf\u4e86\u3002\u8fd9\u662f\u56e0\u4e3a JavaScript \u7ebf\u7a0b\u592a\u5fd9\u4e86\uff0c\u4e0d\u80fd\u591f\u5904\u7406\u4e3b\u7ebf\u7a0b\u53d1\u9001\u8fc7\u6765\u7684\u539f\u59cb\u89e6\u6478\u4e8b\u4ef6\uff0c\u7ed3\u679c",(0,t.jsx)(n.code,{children:"TouchableOpacity"}),"\u5c31\u4e0d\u80fd\u53ca\u65f6\u54cd\u5e94\u8fd9\u4e9b\u4e8b\u4ef6\u5e76\u547d\u4ee4\u4e3b\u7ebf\u7a0b\u7684\u9875\u9762\u53bb\u8c03\u6574\u900f\u660e\u5ea6\u4e86\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"ui-\u5e27\u7387\u4e3b\u7ebf\u7a0b",children:"UI \u5e27\u7387(\u4e3b\u7ebf\u7a0b)"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f88\u591a\u4eba\u4f1a\u6ce8\u610f\u5230\uff0c",(0,t.jsx)(n.code,{children:"NavigatorIOS"}),"\u7684\u6027\u80fd\u8981\u6bd4\u8001\u7684\u7eaf JS \u5b9e\u73b0\u7684",(0,t.jsx)(n.code,{children:"Navigator"}),"\u597d\u7684\u591a\u3002\u539f\u56e0\u5c31\u662f\u5b83\u7684\u5207\u6362\u52a8\u753b\u662f\u5b8c\u5168\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u6267\u884c\u7684\uff0c\u56e0\u6b64\u4e0d\u4f1a\u88ab JavaScript \u7ebf\u7a0b\u4e0a\u7684\u6389\u5e27\u6240\u5f71\u54cd\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u540c\u6837\uff0c\u5f53 JavaScript \u7ebf\u7a0b\u5361\u4f4f\u7684\u65f6\u5019\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u6b22\u5feb\u7684\u4e0a\u4e0b\u6eda\u52a8",(0,t.jsx)(n.code,{children:"ScrollView"}),"\uff0c\u56e0\u4e3a",(0,t.jsx)(n.code,{children:"ScrollView"}),"\u8fd0\u884c\u5728\u4e3b\u7ebf\u7a0b\u4e4b\u4e0a\uff08\u5c3d\u7ba1\u6eda\u52a8\u4e8b\u4ef6\u4f1a\u88ab\u5206\u53d1\u5230 JS \u7ebf\u7a0b\uff0c\u4f46\u662f\u63a5\u6536\u8fd9\u4e9b\u4e8b\u4ef6\u5bf9\u4e8e\u6eda\u52a8\u8fd9\u4e2a\u52a8\u4f5c\u6765\u8bf4\u5e76\u4e0d\u5fc5\u8981\uff09\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6027\u80fd\u95ee\u9898\u7684\u5e38\u89c1\u539f\u56e0",children:"\u6027\u80fd\u95ee\u9898\u7684\u5e38\u89c1\u539f\u56e0"}),"\n",(0,t.jsxs)(n.h3,{id:"\u5f00\u53d1\u6a21\u5f0f-devtrue",children:["\u5f00\u53d1\u6a21\u5f0f (",(0,t.jsx)(n.code,{children:"dev=true"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["JavaScript \u7ebf\u7a0b\u7684\u6027\u80fd\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u662f\u5f88\u7cdf\u7cd5\u7684\u3002\u8fd9\u662f\u4e0d\u53ef\u907f\u514d\u7684\uff0c\u56e0\u4e3a\u6709\u8bb8\u591a\u5de5\u4f5c\u9700\u8981\u5728\u8fd0\u884c\u7684\u65f6\u5019\u53bb\u505a\uff0c\u8b6c\u5982\u4f7f\u4f60\u83b7\u5f97\u826f\u597d\u7684\u8b66\u544a\u548c\u9519\u8bef\u4fe1\u606f\uff0c\u53c8\u6bd4\u5982\u9a8c\u8bc1\u5c5e\u6027\u7c7b\u578b\uff08propTypes\uff09\u4ee5\u53ca\u4ea7\u751f\u5404\u79cd\u5176\u4ed6\u7684\u8b66\u544a\u3002\u8bf7\u52a1\u5fc5\u6ce8\u610f\u5728",(0,t.jsx)(n.a,{href:"/docs/0.70/running-on-device#%E5%8F%91%E5%B8%83%E5%BA%94%E7%94%A8",children:"release \u6a21\u5f0f"}),"\u4e0b\u53bb\u6d4b\u8bd5\u6027\u80fd\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"consolelog-\u8bed\u53e5",children:"console.log \u8bed\u53e5"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fd0\u884c\u6253\u597d\u4e86\u79bb\u7ebf\u5305\u7684\u5e94\u7528\u65f6\uff0c\u63a7\u5236\u53f0\u5927\u91cf\u6253\u5370\u8bed\u53e5\u53ef\u80fd\u4f1a\u62d6\u7d2f JavaScript \u7ebf\u7a0b\u3002\u6ce8\u610f\u6709\u4e9b\u7b2c\u4e09\u65b9\u8c03\u8bd5\u5e93\u4e5f\u53ef\u80fd\u5305\u542b\u63a7\u5236\u53f0\u6253\u5370\u8bed\u53e5\uff0c\u6bd4\u5982",(0,t.jsx)(n.a,{href:"https://github.com/evgenyrodionov/redux-logger",children:"redux-logger"}),"\uff0c\u6240\u4ee5\u5728\u53d1\u5e03\u5e94\u7528\u524d\u8bf7\u52a1\u5fc5\u4ed4\u7ec6\u68c0\u67e5\uff0c\u786e\u4fdd\u5168\u90e8\u79fb\u9664\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6709\u4e2a",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/plugins/transform-remove-console/",children:"babel \u63d2\u4ef6"}),"\u53ef\u4ee5\u5e2e\u4f60\u79fb\u9664\u6240\u6709\u7684",(0,t.jsx)(n.code,{children:"console.*"}),"\u8c03\u7528\u3002\u9996\u5148\u9700\u8981\u4f7f\u7528",(0,t.jsx)(n.code,{children:"yarn add --dev babel-plugin-transform-remove-console"}),"\u6765\u5b89\u88c5\uff0c\u7136\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7f16\u8f91\uff08\u6216\u8005\u662f\u65b0\u5efa\uff09\u4e00\u4e2a\u540d\u4e3a\xb7.babelrc`\u7684\u6587\u4ef6\uff0c\u5728\u5176\u4e2d\u52a0\u5165\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "env": {\n    "production": {\n      "plugins": ["transform-remove-console"]\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u5728\u6253\u5305\u53d1\u5e03\u65f6\uff0c\u6240\u6709\u7684\u63a7\u5236\u53f0\u8bed\u53e5\u5c31\u4f1a\u88ab\u81ea\u52a8\u79fb\u9664\uff0c\u800c\u5728\u8c03\u8bd5\u65f6\u5b83\u4eec\u4ecd\u7136\u4f1a\u88ab\u6b63\u5e38\u8c03\u7528\u3002"}),"\n",(0,t.jsxs)(n.h3,{id:"listview-\u9996\u6b21\u6e32\u67d3\u7f13\u6162\u6216\u8005\u7531\u4e8e\u5217\u8868\u5f88\u5927\u5bfc\u81f4\u6ed1\u52a8\u5f88\u6162",children:[(0,t.jsx)(n.code,{children:"ListView"})," \u9996\u6b21\u6e32\u67d3\u7f13\u6162\u6216\u8005\u7531\u4e8e\u5217\u8868\u5f88\u5927\u5bfc\u81f4\u6ed1\u52a8\u5f88\u6162"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u65b0\u7684",(0,t.jsx)(n.a,{href:"flatlist",children:(0,t.jsx)(n.code,{children:"FlatList"})}),"\u6216\u8005",(0,t.jsx)(n.a,{href:"sectionlist",children:(0,t.jsx)(n.code,{children:"SectionList"})}),"\u7ec4\u4ef6\u66ff\u4ee3\u3002\u9664\u4e86\u7b80\u5316\u4e86API\uff0c\u8fd9\u4e9b\u65b0\u7684\u5217\u8868\u7ec4\u4ef6\u5728\u6027\u80fd\u65b9\u9762\u90fd\u6709\u4e86\u6781\u5927\u7684\u63d0\u5347, \u5176\u4e2d\u6700\u4e3b\u8981\u7684\u4e00\u4e2a\u662f\u65e0\u8bba\u5217\u8868\u6709\u591a\u5c11\u884c\uff0c\u5b83\u7684\u5185\u5b58\u4f7f\u7528\u90fd\u662f\u5e38\u6570\u7ea7\u7684\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684",(0,t.jsx)(n.a,{href:"flatlist",children:(0,t.jsx)(n.code,{children:"FlatList"})}),"\u6e32\u67d3\u5f97\u5f88\u6162, \u8bf7\u786e\u4fdd\u4f60\u4f7f\u7528\u4e86",(0,t.jsx)(n.a,{href:"/docs/0.70/flatlist#getitemlayout",children:(0,t.jsx)(n.code,{children:"getItemLayout"})}),"\uff0c\u5b83\u901a\u8fc7\u8df3\u8fc7\u5bf9items\u7684\u5904\u7406\u6765\u4f18\u5316\u4f60\u7684\u6e32\u67d3\u901f\u5ea6\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5728\u91cd\u7ed8\u4e00\u4e2a\u51e0\u4e4e\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316\u7684\u9875\u9762\u65f6js-\u5e27\u7387\u4e25\u91cd\u964d\u4f4e",children:"\u5728\u91cd\u7ed8\u4e00\u4e2a\u51e0\u4e4e\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316\u7684\u9875\u9762\u65f6\uff0cJS \u5e27\u7387\u4e25\u91cd\u964d\u4f4e"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5b9e\u73b0",(0,t.jsx)(n.code,{children:"shouldComponentUpdate"}),"\u51fd\u6570\u6765\u6307\u660e\u5728\u4ec0\u4e48\u6837\u7684\u786e\u5207\u6761\u4ef6\u4e0b\uff0c\u4f60\u5e0c\u671b\u8fd9\u4e2a\u7ec4\u4ef6\u5f97\u5230\u91cd\u7ed8\u3002\u5982\u679c\u4f60\u7f16\u5199\u7684\u662f\u7eaf\u7cb9\u7684\u7ec4\u4ef6\uff08\u754c\u9762\u5b8c\u5168\u7531 props \u548c state \u6240\u51b3\u5b9a\uff09\uff0c\u4f60\u53ef\u4ee5\u5229\u7528",(0,t.jsx)(n.code,{children:"PureComponent"}),"\u6765\u4e3a\u4f60\u505a\u8fd9\u4e2a\u5de5\u4f5c\u3002\u518d\u5f3a\u8c03\u4e00\u6b21\uff0c\u4e0d\u53ef\u53d8\u7684\u6570\u636e\u7ed3\u6784\uff08immutable\uff0c\u5373\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6570\u636e\uff0c\u4e0d\u4fee\u6539\u539f\u503c\uff0c\u800c\u662f\u590d\u5236\u540e\u4fee\u6539\u5e76\u8fd4\u56de\u65b0\u503c\uff09\u5728\u63d0\u901f\u65b9\u9762\u975e\u5e38\u6709\u7528 \u2014\u2014 \u5f53\u4f60\u4e0d\u5f97\u4e0d\u5bf9\u4e00\u4e2a\u957f\u5217\u8868\u5bf9\u8c61\u505a\u4e00\u4e2a\u6df1\u5ea6\u7684\u6bd4\u8f83\uff0c\u5b83\u4f1a\u4f7f\u91cd\u7ed8\u4f60\u7684\u6574\u4e2a\u7ec4\u4ef6\u66f4\u52a0\u5feb\u901f\uff0c\u800c\u4e14\u4ee3\u7801\u91cf\u66f4\u5c11\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"dropping-js-thread-fps-because-of-doing-a-lot-of-work-on-the-javascript-thread-at-the-same-time",children:"Dropping JS thread FPS because of doing a lot of work on the JavaScript thread at the same time"}),"\n",(0,t.jsx)(n.p,{children:'"Slow Navigator transitions" is the most common manifestation of this, but there are other times this can happen. Using InteractionManager can be a good approach, but if the user experience cost is too high to delay work during an animation, then you might want to consider LayoutAnimation.'}),"\n",(0,t.jsxs)(n.p,{children:["The Animated API currently calculates each keyframe on-demand on the JavaScript thread unless you ",(0,t.jsxs)(n.a,{href:"/blog/2017/02/14/using-native-driver-for-animated.html#how-do-i-use-this-in-my-app",children:["set ",(0,t.jsx)(n.code,{children:"useNativeDriver: true"})]}),", while LayoutAnimation leverages Core Animation and is unaffected by JS thread and main thread frame drops."]}),"\n",(0,t.jsx)(n.p,{children:"One case where I have used this is for animating in a modal (sliding down from top and fading in a translucent overlay) while initializing and perhaps receiving responses for several network requests, rendering the contents of the modal, and updating the view where the modal was opened from. See the Animations guide for more information about how to use LayoutAnimation."}),"\n",(0,t.jsx)(n.p,{children:"Caveats:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['LayoutAnimation only works for fire-and-forget animations ("static" animations) -- if it must be interruptible, you will need to use ',(0,t.jsx)(n.code,{children:"Animated"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5728\u5c4f\u5e55\u4e0a\u79fb\u52a8\u89c6\u56fe\u6eda\u52a8\u5207\u6362\u65cb\u8f6c\u65f6ui-\u7ebf\u7a0b\u6389\u5e27",children:"\u5728\u5c4f\u5e55\u4e0a\u79fb\u52a8\u89c6\u56fe\uff08\u6eda\u52a8\uff0c\u5207\u6362\uff0c\u65cb\u8f6c\uff09\u65f6\uff0cUI \u7ebf\u7a0b\u6389\u5e27"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u5177\u6709\u900f\u660e\u80cc\u666f\u7684\u6587\u672c\u4f4d\u4e8e\u4e00\u5f20\u56fe\u7247\u4e0a\u65f6\uff0c\u6216\u8005\u5728\u6bcf\u5e27\u91cd\u7ed8\u89c6\u56fe\u65f6\u9700\u8981\u7528\u5230\u900f\u660e\u5408\u6210\u7684\u4efb\u4f55\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u73b0\u8c61\u5c24\u4e3a\u660e\u663e\u3002\u8bbe\u7f6e",(0,t.jsx)(n.code,{children:"shouldRasterizeIOS"}),"\u6216\u8005",(0,t.jsx)(n.code,{children:"renderToHardwareTextureAndroid"}),"\u5c5e\u6027\u53ef\u4ee5\u663e\u8457\u6539\u5584\u8fd9\u4e00\u73b0\u8c61\u3002\n\u6ce8\u610f\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528\u8be5\u7279\u6027\uff0c\u5426\u5219\u4f60\u7684\u5185\u5b58\u4f7f\u7528\u91cf\u5c06\u4f1a\u98de\u6da8\u3002\u5728\u4f7f\u7528\u65f6\uff0c\u8981\u8bc4\u4f30\u4f60\u7684\u6027\u80fd\u548c\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u3002\u5982\u679c\u4f60\u6ca1\u6709\u9700\u8981\u79fb\u52a8\u8fd9\u4e2a\u89c6\u56fe\u7684\u9700\u6c42\uff0c\u8bf7\u5173\u95ed\u8fd9\u4e00\u5c5e\u6027\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u52a8\u753b\u6539\u53d8\u56fe\u7247\u7684\u5c3a\u5bf8\u65f6ui-\u7ebf\u7a0b\u6389\u5e27",children:"\u4f7f\u7528\u52a8\u753b\u6539\u53d8\u56fe\u7247\u7684\u5c3a\u5bf8\u65f6\uff0cUI \u7ebf\u7a0b\u6389\u5e27"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 iOS \u4e0a\uff0c\u6bcf\u6b21\u8c03\u6574 Image \u7ec4\u4ef6\u7684\u5bbd\u5ea6\u6216\u8005\u9ad8\u5ea6\uff0c\u90fd\u9700\u8981\u91cd\u65b0\u88c1\u526a\u548c\u7f29\u653e\u539f\u59cb\u56fe\u7247\u3002\u8fd9\u4e2a\u64cd\u4f5c\u5f00\u9500\u4f1a\u975e\u5e38\u5927\uff0c\u5c24\u5176\u662f\u5927\u7684\u56fe\u7247\u3002\u6bd4\u8d77\u76f4\u63a5\u4fee\u6539\u5c3a\u5bf8\uff0c\u66f4\u597d\u7684\u65b9\u6848\u662f\u4f7f\u7528",(0,t.jsx)(n.code,{children:"transform: [{scale}]"}),"\u7684\u6837\u5f0f\u5c5e\u6027\u6765\u6539\u53d8\u5c3a\u5bf8\u3002\u6bd4\u5982\u5f53\u4f60\u70b9\u51fb\u4e00\u4e2a\u56fe\u7247\uff0c\u8981\u5c06\u5b83\u653e\u5927\u5230\u5168\u5c4f\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u5c5e\u6027\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"touchable-\u7cfb\u5217\u7ec4\u4ef6\u4e0d\u80fd\u5f88\u597d\u7684\u54cd\u5e94",children:"Touchable \u7cfb\u5217\u7ec4\u4ef6\u4e0d\u80fd\u5f88\u597d\u7684\u54cd\u5e94"}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u4e9b\u65f6\u5019\uff0c\u5982\u679c\u6211\u4eec\u6709\u4e00\u9879\u64cd\u4f5c\u4e0e\u70b9\u51fb\u4e8b\u4ef6\u6240\u5e26\u6765\u7684\u900f\u660e\u5ea6\u6539\u53d8\u6216\u8005\u9ad8\u4eae\u6548\u679c\u53d1\u751f\u5728\u540c\u4e00\u5e27\u4e2d\uff0c\u90a3\u4e48\u6709\u53ef\u80fd\u5728",(0,t.jsx)(n.code,{children:"onPress"}),"\u51fd\u6570\u7ed3\u675f\u4e4b\u524d\u6211\u4eec\u90fd\u770b\u4e0d\u5230\u8fd9\u4e9b\u6548\u679c\u3002\u6bd4\u5982\u5728",(0,t.jsx)(n.code,{children:"onPress"}),"\u6267\u884c\u4e86\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"setState"}),"\u7684\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u9700\u8981\u5927\u91cf\u8ba1\u7b97\u5de5\u4f5c\u5e76\u4e14\u5bfc\u81f4\u4e86\u6389\u5e27\u3002\u5bf9\u6b64\u7684\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\u662f\u5c06",(0,t.jsx)(n.code,{children:"onPress"}),"\u5904\u7406\u51fd\u6570\u4e2d\u7684\u64cd\u4f5c\u5c01\u88c5\u5230",(0,t.jsx)(n.code,{children:"requestAnimationFrame"}),"\u4e2d\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"handleOnPress() {\n  requestAnimationFrame(() => {\n    this.doExpensiveAction();\n  });\n}\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},71426:(e,n,i)=>{var t=i(27378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var t,s={},d=null,l=null;for(t in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:r,type:e,key:d,ref:l,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},24246:(e,n,i)=>{e.exports=i(71426)},14084:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/PerfUtil-38a2ddbf1777887d70563a644c72aa64.png"},71670:(e,n,i)=>{i.d(n,{Zo:()=>o,ah:()=>s});var t=i(27378);const r=t.createContext({});function s(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||a:s(e),t.createElement(r.Provider,{value:o},n)}}}]);