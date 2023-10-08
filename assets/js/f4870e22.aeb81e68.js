/*! For license information please see f4870e22.aeb81e68.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6794],{31263:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=n(24246),c=n(71670);const r={id:"communication-ios",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},o=void 0,a={unversionedId:"communication-ios",id:"version-0.72/communication-ios",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",description:"\u901a\u8fc7\u690d\u5165\u539f\u751f\u5e94\u7528\u548c\u539f\u751f UI \u7ec4\u4ef6\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002",source:"@site/versioned_docs/version-0.72/communication-ios.md",sourceDirName:".",slug:"/communication-ios",permalink:"/docs/communication-ios",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/communication-ios.md",tags:[],version:"0.72",frontMatter:{id:"communication-ios",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u5728iOS\u6a21\u62df\u5668\u4e0a\u8fd0\u884c",permalink:"/docs/running-on-simulator-ios"},next:{title:"iOS \u5e94\u7528\u5c0f\u7ec4\u4ef6",permalink:"/docs/app-extensions"}},s={},l=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native",id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native",level:3},{value:"\u4ece React Native \u4f20\u9012\u5c5e\u6027\u5230\u539f\u751f\u7ec4\u4ef6",id:"\u4ece-react-native-\u4f20\u9012\u5c5e\u6027\u5230\u539f\u751f\u7ec4\u4ef6",level:3},{value:"\u5c5e\u6027\u7684\u9650\u5236",id:"\u5c5e\u6027\u7684\u9650\u5236",level:2},{value:"\u5176\u4ed6\u7684\u8de8\u8bed\u8a00\u4ea4\u4e92\uff08\u4e8b\u4ef6\u548c\u539f\u751f\u6a21\u5757\uff09",id:"\u5176\u4ed6\u7684\u8de8\u8bed\u8a00\u4ea4\u4e92\u4e8b\u4ef6\u548c\u539f\u751f\u6a21\u5757",level:2},{value:"\u4ece\u539f\u751f\u4ee3\u7801\u8c03\u7528 React Natvie \u51fd\u6570\uff08\u4e8b\u4ef6\uff09",id:"\u4ece\u539f\u751f\u4ee3\u7801\u8c03\u7528-react-natvie-\u51fd\u6570\u4e8b\u4ef6",level:3},{value:"\u4ece React Native \u4e2d\u8c03\u7528\u539f\u751f\u65b9\u6cd5\uff08\u539f\u751f\u6a21\u5757\uff09",id:"\u4ece-react-native-\u4e2d\u8c03\u7528\u539f\u751f\u65b9\u6cd5\u539f\u751f\u6a21\u5757",level:3},{value:"\u5e03\u5c40\u8ba1\u7b97\u6d41",id:"\u5e03\u5c40\u8ba1\u7b97\u6d41",level:2},{value:"\u5728 React Native \u4e2d\u5d4c\u5165\u4e00\u4e2a\u539f\u751f\u7ec4\u4ef6",id:"\u5728-react-native-\u4e2d\u5d4c\u5165\u4e00\u4e2a\u539f\u751f\u7ec4\u4ef6",level:3},{value:"\u5728\u539f\u751f\u4e2d\u5d4c\u5165\u4e00\u4e2a React Native \u7ec4\u4ef6",id:"\u5728\u539f\u751f\u4e2d\u5d4c\u5165\u4e00\u4e2a-react-native-\u7ec4\u4ef6",level:3},{value:"\u56fa\u5b9a\u5927\u5c0f\u7684 React Native \u5185\u5bb9",id:"\u56fa\u5b9a\u5927\u5c0f\u7684-react-native-\u5185\u5bb9",level:4},{value:"\u5f39\u6027\u5927\u5c0f\u7684 React Native",id:"\u5f39\u6027\u5927\u5c0f\u7684-react-native",level:4}];function d(e){const i=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",em:"em",ul:"ul",li:"li",h4:"h4",ol:"ol"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["\u901a\u8fc7",(0,t.jsx)(i.a,{href:"integration-with-existing-apps",children:"\u690d\u5165\u539f\u751f\u5e94\u7528"}),"\u548c",(0,t.jsx)(i.a,{href:"native-components-ios",children:"\u539f\u751f UI \u7ec4\u4ef6"}),"\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,t.jsx)(i.p,{children:"React Native \u662f\u4ece React \u4e2d\u5f97\u5230\u7684\u7075\u611f\uff0c\u56e0\u6b64\u57fa\u672c\u7684\u4fe1\u606f\u6d41\u662f\u7c7b\u4f3c\u7684\u3002\u5728 React \u4e2d\u4fe1\u606f\u662f\u5355\u5411\u7684\u3002\u6211\u4eec\u7ef4\u62a4\u7740\u7ec4\u4ef6\u5c42\u6b21\uff0c\u5728\u5176\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4ec5\u4f9d\u8d56\u4e8e\u5b83\u7236\u7ec4\u4ef6\u548c\u81ea\u5df1\u7684\u72b6\u6001\u3002\u901a\u8fc7\u5c5e\u6027\uff08props\uff09\u6211\u4eec\u5c06\u4fe1\u606f\u4ece\u4e0a\u800c\u4e0b\u7684\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u5230\u5b50\u5143\u7d20\u3002\u5982\u679c\u4e00\u4e2a\u7956\u5148\u7ec4\u4ef6\u9700\u8981\u81ea\u5df1\u5b50\u5b59\u7684\u72b6\u6001\uff0c\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u7ed9\u5bf9\u5e94\u7684\u5b50\u5143\u7d20\u3002"}),"\n",(0,t.jsx)(i.p,{children:"React Native \u4e5f\u8fd0\u7528\u4e86\u76f8\u540c\u7684\u6982\u5ff5\u3002\u53ea\u8981\u6211\u4eec\u5b8c\u5168\u5728\u6846\u67b6\u5185\u6784\u5efa\u5e94\u7528\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u548c\u56de\u8c03\u51fd\u6570\u6765\u8c03\u52a8\u6574\u4e2a\u5e94\u7528\u3002\u4f46\u662f\uff0c\u5f53\u6211\u4eec\u6df7\u5408 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u7279\u6b8a\u7684\uff0c\u8de8\u8bed\u8a00\u7684\u673a\u5236\u6765\u4f20\u9012\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,t.jsx)(i.p,{children:"\u5c5e\u6027\u662f\u6700\u7b80\u5355\u7684\u8de8\u7ec4\u4ef6\u901a\u4fe1\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b9\u6cd5\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native \u6216\u8005\u4ece React Native \u5230\u539f\u751f\u7ec4\u4ef6\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native",children:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native"}),"\n",(0,t.jsxs)(i.p,{children:["\u6211\u4eec\u4f7f\u7528",(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u5c06 React Natvie \u89c6\u56fe\u5c01\u88c5\u5230\u539f\u751f\u7ec4\u4ef6\u4e2d\u3002",(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u662f\u4e00\u4e2a",(0,t.jsx)(i.code,{children:"UIView"}),"\u5bb9\u5668\uff0c\u627f\u8f7d\u7740 React Native \u5e94\u7528\u3002\u540c\u65f6\u5b83\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8054\u901a\u539f\u751f\u7aef\u548c\u88ab\u6258\u7ba1\u7aef\u7684\u63a5\u53e3\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["\u901a\u8fc7",(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u7684\u521d\u59cb\u5316\u51fd\u6570\u4f60\u53ef\u4ee5\u5c06\u4efb\u610f\u5c5e\u6027\u4f20\u9012\u7ed9 React Native \u5e94\u7528\u3002\u53c2\u6570",(0,t.jsx)(i.code,{children:"initialProperties"}),"\u5fc5\u987b\u662f",(0,t.jsx)(i.code,{children:"NSDictionary"}),"\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002\u8fd9\u4e00\u5b57\u5178\u53c2\u6570\u4f1a\u5728\u5185\u90e8\u88ab\u8f6c\u5316\u4e3a\u4e00\u4e2a\u53ef\u4f9b JS \u7ec4\u4ef6\u8c03\u7528\u7684 JSON \u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'NSArray *imageList = @[@"http://foo.com/bar1.png",\n                       @"http://foo.com/bar2.png"];\n\nNSDictionary *props = @{@"images" : imageList};\n\nRCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                 moduleName:@"ImageBrowserApp"\n                                          initialProperties:props];\n'})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"import React from 'react';\nimport {\n  View,\n  Image\n} from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return (\n      <Image source={{uri: imgURI}} />\n    );\n  }\n  render() {\n    return (\n      <View>\n        {this.props.images.map(this.renderImage)}\n      </View>\n    );\n  }\n}\n\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u540c\u6837\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u8bfb\u5199\u7684\u5c5e\u6027",(0,t.jsx)(i.code,{children:"appProperties"}),"\u3002\u5728",(0,t.jsx)(i.code,{children:"appProperties"}),"\u8bbe\u7f6e\u4e4b\u540e\uff0cReact Native \u5e94\u7528\u5c06\u4f1a\u6839\u636e\u65b0\u7684\u5c5e\u6027\u91cd\u65b0\u6e32\u67d3\u3002\u5f53\u7136\uff0c\u53ea\u6709\u5728\u65b0\u5c5e\u6027\u548c\u4e4b\u524d\u7684\u5c5e\u6027\u6709\u533a\u522b\u65f6\u66f4\u65b0\u624d\u4f1a\u88ab\u89e6\u53d1\u3002"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'NSArray *imageList = @[@"http://foo.com/bar3.png",\n                       @"http://foo.com/bar4.png"];\n\nrootView.appProperties = @{@"images" : imageList};\n'})}),"\n",(0,t.jsx)(i.p,{children:"\u4f60\u53ef\u4ee5\u968f\u65f6\u66f4\u65b0\u5c5e\u6027\uff0c\u4f46\u662f\u66f4\u65b0\u5fc5\u987b\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u8fdb\u884c\uff0c\u8bfb\u53d6\u5219\u53ef\u4ee5\u5728\u4efb\u4f55\u7ebf\u7a0b\u4e2d\u8fdb\u884c\u3002"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.em,{children:"\u6ce8\u610f:"})})," \u76ee\u524d\u6709\u4e00\u4e2a\u5df2\u77e5\u95ee\u9898\uff0c\u5982\u679c\u5728 bridge \u8fd8\u6ca1\u521d\u59cb\u5316\u5b8c\u6210\u524d\u5c31\u8bbe\u7f6e appProperties\uff0c\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u65e0\u6548\uff0c\u5177\u4f53\u8ba8\u8bba\u8bf7\u89c1 ",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/issues/20115",children:"https://github.com/facebook/react-native/issues/20115"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u66f4\u65b0\u5c5e\u6027\u65f6\u5e76\u4e0d\u80fd\u505a\u5230\u53ea\u66f4\u65b0\u4e00\u90e8\u5206\u5c5e\u6027\u3002\u6211\u4eec\u5efa\u8bae\u4f60\u81ea\u5df1\u5c01\u88c5\u4e00\u4e2a\u51fd\u6570\u6765\u6784\u9020\u5c5e\u6027\u3002"}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.em,{children:"\u6ce8\u610f\uff1a"})})," \u76ee\u524d\uff0c\u6700\u9876\u5c42\u7684 RN \u7ec4\u4ef6\uff08\u5373 registerComponent \u65b9\u6cd5\u4e2d\u8c03\u7528\u7684\u90a3\u4e2a\uff09\u7684",(0,t.jsx)(i.code,{children:"componentWillReceiveProps"}),"\u548c",(0,t.jsx)(i.code,{children:"componentWillUpdateProps"}),"\u65b9\u6cd5\u5728\u5c5e\u6027\u66f4\u65b0\u540e\u4e0d\u4f1a\u89e6\u53d1\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(i.code,{children:"componentWillMount"}),"\u8bbf\u95ee\u65b0\u7684\u5c5e\u6027\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"\u4ece-react-native-\u4f20\u9012\u5c5e\u6027\u5230\u539f\u751f\u7ec4\u4ef6",children:"\u4ece React Native \u4f20\u9012\u5c5e\u6027\u5230\u539f\u751f\u7ec4\u4ef6"}),"\n",(0,t.jsxs)(i.p,{children:["\u8fd9\u7bc7",(0,t.jsx)(i.a,{href:"native-components-ios#%E5%B1%9E%E6%80%A7",children:"\u6587\u6863"}),"\u8be6\u7ec6\u8ba8\u8bba\u4e86\u66b4\u9732\u539f\u751f\u7ec4\u4ef6\u5c5e\u6027\u7684\u95ee\u9898\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5728\u4f60\u81ea\u5b9a\u4e49\u7684\u539f\u751f\u7ec4\u4ef6\u4e2d\u901a\u8fc7",(0,t.jsx)(i.code,{children:"RCT_CUSTOM_VIEW_PROPERTY"}),"\u5b8f\u5bfc\u51fa\u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728 React Native \u4e2d\u4f7f\u7528\uff0c\u5c31\u597d\u50cf\u5b83\u4eec\u662f\u666e\u901a\u7684 React Native \u7ec4\u4ef6\u4e00\u6837\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u5c5e\u6027\u7684\u9650\u5236",children:"\u5c5e\u6027\u7684\u9650\u5236"}),"\n",(0,t.jsx)(i.p,{children:"\u8de8\u8bed\u8a00\u5c5e\u6027\u7684\u4e3b\u8981\u7f3a\u70b9\u662f\u4e0d\u652f\u6301\u56de\u8c03\u65b9\u6cd5\uff0c\u56e0\u800c\u65e0\u6cd5\u5b9e\u73b0\u81ea\u4e0b\u800c\u4e0a\u7684\u6570\u636e\u7ed1\u5b9a\u3002\u8bbe\u60f3\u4f60\u6709\u4e00\u4e2a\u5c0f\u7684 RN \u89c6\u56fe\uff0c\u5f53\u4e00\u4e2a JS \u52a8\u4f5c\u89e6\u53d1\u65f6\u4f60\u60f3\u4ece\u539f\u751f\u7684\u7236\u89c6\u56fe\u4e2d\u79fb\u9664\u5b83\u3002\u6b64\u65f6\u4f60\u4f1a\u53d1\u73b0\u6839\u672c\u505a\u4e0d\u5230\uff0c\u56e0\u4e3a\u4fe1\u606f\u9700\u8981\u81ea\u4e0b\u800c\u4e0a\u8fdb\u884c\u4f20\u9012\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u867d\u7136\u6211\u4eec\u6709\u8de8\u8bed\u8a00\u56de\u8c03\uff08",(0,t.jsx)(i.a,{href:"native-modules-ios#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0",children:"\u53c2\u9605\u8fd9\u91cc"}),"\uff09\uff0c\u4f46\u662f\u8fd9\u4e9b\u56de\u8c03\u51fd\u6570\u5e76\u4e0d\u603b\u80fd\u6ee1\u8db3\u9700\u6c42\u3002\u6700\u4e3b\u8981\u7684\u95ee\u9898\u662f\u5b83\u4eec\u5e76\u4e0d\u662f\u88ab\u8bbe\u8ba1\u6765\u5f53\u4f5c\u5c5e\u6027\u8fdb\u884c\u4f20\u9012\u3002\u8fd9\u4e00\u673a\u5236\u7684\u672c\u610f\u662f\u5141\u8bb8\u6211\u4eec\u4ece JS \u89e6\u53d1\u4e00\u4e2a\u539f\u751f\u52a8\u4f5c\uff0c\u7136\u540e\u7528 JS \u5904\u7406\u90a3\u4e2a\u52a8\u4f5c\u7684\u5904\u7406\u7ed3\u679c\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u5176\u4ed6\u7684\u8de8\u8bed\u8a00\u4ea4\u4e92\u4e8b\u4ef6\u548c\u539f\u751f\u6a21\u5757",children:"\u5176\u4ed6\u7684\u8de8\u8bed\u8a00\u4ea4\u4e92\uff08\u4e8b\u4ef6\u548c\u539f\u751f\u6a21\u5757\uff09"}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u4e0a\u4e00\u7ae0\u6240\u8bf4\uff0c\u4f7f\u7528\u5c5e\u6027\u603b\u4f1a\u6709\u4e00\u4e9b\u9650\u5236\u3002\u6709\u65f6\u5019\u5c5e\u6027\u5e76\u4e0d\u8db3\u4ee5\u6ee1\u8db3\u5e94\u7528\u903b\u8f91\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u66f4\u7075\u6d3b\u7684\u89e3\u51b3\u529e\u6cd5\u3002\u8fd9\u4e00\u7ae0\u63cf\u8ff0\u4e86\u5176\u4ed6\u7684\u5728 React Native \u4e2d\u53ef\u7528\u7684\u901a\u4fe1\u65b9\u6cd5\u3002\u4ed6\u4eec\u53ef\u4ee5\u7528\u6765\u5185\u90e8\u901a\u4fe1\uff08\u5728 JS \u548c RN \u7684\u539f\u751f\u5c42\u4e4b\u95f4\uff09\uff0c\u4e5f\u53ef\u4ee5\u7528\u4f5c\u5916\u90e8\u901a\u4fe1\uff08\u5728 RN \u548c\u7eaf\u539f\u751f\u90e8\u5206\u4e4b\u95f4\uff09\u3002"}),"\n",(0,t.jsx)(i.p,{children:"React Native \u5141\u8bb8\u4f7f\u7528\u8de8\u8bed\u8a00\u7684\u51fd\u6570\u8c03\u7528\u3002\u4f60\u53ef\u4ee5\u5728 JS \u4e2d\u8c03\u7528\u539f\u751f\u4ee3\u7801\uff0c\u4e5f\u53ef\u4ee5\u5728\u539f\u751f\u4ee3\u7801\u4e2d\u8c03\u7528 JS\u3002\u5728\u4e0d\u540c\u7aef\u9700\u8981\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u76f8\u540c\u7684\u76ee\u7684\u3002\u5728\u539f\u751f\u4ee3\u7801\u4e2d\u6211\u4eec\u4f7f\u7528\u4e8b\u4ef6\u673a\u5236\u6765\u8c03\u5ea6 JS \u4e2d\u7684\u5904\u7406\u51fd\u6570\uff0c\u800c\u5728 React Native \u4e2d\u6211\u4eec\u76f4\u63a5\u4f7f\u7528\u539f\u751f\u6a21\u5757\u5bfc\u51fa\u7684\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"\u4ece\u539f\u751f\u4ee3\u7801\u8c03\u7528-react-natvie-\u51fd\u6570\u4e8b\u4ef6",children:"\u4ece\u539f\u751f\u4ee3\u7801\u8c03\u7528 React Natvie \u51fd\u6570\uff08\u4e8b\u4ef6\uff09"}),"\n",(0,t.jsxs)(i.p,{children:["\u4e8b\u4ef6\u7684\u8be6\u7ec6\u7528\u6cd5\u5728\u8fd9\u7bc7",(0,t.jsx)(i.a,{href:"native-components-ios#%E4%BA%8B%E4%BB%B6",children:"\u6587\u7ae0"}),"\u4e2d\u8fdb\u884c\u4e86\u8ba8\u8bba\u3002\u6ce8\u610f\u4f7f\u7528\u4e8b\u4ef6\u65e0\u6cd5\u786e\u4fdd\u6267\u884c\u7684\u65f6\u95f4\uff0c\u56e0\u4e3a\u4e8b\u4ef6\u7684\u5904\u7406\u51fd\u6570\u662f\u5728\u5355\u72ec\u7684\u7ebf\u7a0b\u4e2d\u6267\u884c\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u4e8b\u4ef6\u5f88\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u4e0d\u9700\u8981\u5f15\u7528\u76f4\u63a5\u4fee\u6539 React Native \u7ec4\u4ef6\u3002\u4f46\u662f\uff0c\u5f53\u4f60\u4f7f\u7528\u65f6\u8981\u6ce8\u610f\u4e0b\u9762\u8fd9\u4e9b\u9677\u9631\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u7531\u4e8e\u4e8b\u4ef6\u53ef\u4ee5\u4ece\u5404\u79cd\u5730\u65b9\u4ea7\u751f\uff0c\u5b83\u4eec\u53ef\u80fd\u5bfc\u81f4\u6df7\u4e71\u7684\u4f9d\u8d56\u3002"}),"\n",(0,t.jsx)(i.li,{children:"\u4e8b\u4ef6\u5171\u4eab\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u56e0\u6b64\u4f60\u53ef\u80fd\u9047\u5230\u540d\u5b57\u51b2\u7a81\u3002\u51b2\u7a81\u4e0d\u4f1a\u5728\u7f16\u5199\u4ee3\u7801\u65f6\u88ab\u63a2\u6d4b\u5230\uff0c\u56e0\u6b64\u5f88\u96be\u6392\u9519\u3002"}),"\n",(0,t.jsxs)(i.li,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u4e86\u540c\u4e00\u4e2a React Native \u7ec4\u4ef6\u7684\u591a\u4e2a\u5f15\u7528\uff0c\u7136\u540e\u60f3\u5728\u4e8b\u4ef6\u4e2d\u533a\u5206\u5b83\u4eec\uff0cname \u4f60\u5f88\u53ef\u80fd\u9700\u8981\u5728\u4e8b\u4ef6\u4e2d\u540c\u65f6\u4f20\u9012\u4e00\u4e9b\u6807\u8bc6\uff08\u4f60\u53ef\u4ee5\u4f7f\u7528\u539f\u751f\u89c6\u56fe\u4e2d\u7684",(0,t.jsx)(i.code,{children:"reactTag"}),"\u4f5c\u4e3a\u6807\u8bc6\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u5728 React Native \u4e2d\u5d4c\u5165\u539f\u751f\u7ec4\u4ef6\u65f6\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u662f\u7528\u539f\u751f\u7ec4\u4ef6\u7684 RCTViewManager \u4f5c\u4e3a\u89c6\u56fe\u7684\u4ee3\u7406\uff0c\u901a\u8fc7 bridge \u5411 JS \u53d1\u9001\u4e8b\u4ef6\u3002\u8fd9\u6837\u53ef\u4ee5\u96c6\u4e2d\u5728\u4e00\u5904\u8c03\u7528\u76f8\u5173\u7684\u4e8b\u4ef6\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"\u4ece-react-native-\u4e2d\u8c03\u7528\u539f\u751f\u65b9\u6cd5\u539f\u751f\u6a21\u5757",children:"\u4ece React Native \u4e2d\u8c03\u7528\u539f\u751f\u65b9\u6cd5\uff08\u539f\u751f\u6a21\u5757\uff09"}),"\n",(0,t.jsxs)(i.p,{children:["\u539f\u751f\u6a21\u5757\u662f JS \u4e2d\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7684 Objective-C \u7c7b\u3002\u4e00\u822c\u6765\u8bf4\u8fd9\u6837\u7684\u6bcf\u4e00\u4e2a\u6a21\u5757\u7684\u5b9e\u4f8b\u90fd\u662f\u5728\u6bcf\u4e00\u6b21\u901a\u8fc7 JS bridge \u901a\u4fe1\u65f6\u521b\u5efa\u7684\u3002\u4ed6\u4eec\u53ef\u4ee5\u5bfc\u51fa\u4efb\u610f\u7684\u51fd\u6570\u548c\u5e38\u91cf\u7ed9 React Native\u3002\u76f8\u5173\u7ec6\u8282\u53ef\u4ee5\u53c2\u9605\u8fd9\u7bc7",(0,t.jsx)(i.a,{href:"native-modules-ios#content",children:"\u6587\u7ae0"}),"\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["\u4e8b\u5b9e\u4e0a\u539f\u751f\u6a21\u5757\u7684\u5355\u5b9e\u4f8b\u6a21\u5f0f\u9650\u5236\u4e86\u5d4c\u5165\u3002\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a React Native \u7ec4\u4ef6\u88ab\u5d4c\u5165\u4e86\u4e00\u4e2a\u539f\u751f\u89c6\u56fe\uff0c\u5e76\u4e14\u6211\u4eec\u5e0c\u671b\u66f4\u65b0\u539f\u751f\u7684\u7236\u89c6\u56fe\u3002\u4f7f\u7528\u539f\u751f\u6a21\u5757\u673a\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u5bfc\u51fa\u4e00\u4e2a\u51fd\u6570\uff0c\u4e0d\u4ec5\u8981\u63a5\u6536\u9884\u8bbe\u53c2\u6570\uff0c\u8fd8\u8981\u63a5\u6536\u7236\u89c6\u56fe\u7684\u6807\u8bc6\u3002\u8fd9\u4e2a\u6807\u8bc6\u5c06\u4f1a\u7528\u6765\u83b7\u5f97\u7236\u89c6\u56fe\u7684\u5f15\u7528\u4ee5\u66f4\u65b0\u7236\u89c6\u56fe\u3002\u90a3\u6837\u7684\u8bdd\uff0c\u6211\u4eec\u9700\u8981\u7ef4\u6301\u6a21\u5757\u4e2d\u6807\u8bc6\u5230\u539f\u751f\u6a21\u5757\u7684\u6620\u5c04\u3002\u867d\u7136\u8fd9\u4e2a\u89e3\u51b3\u529e\u6cd5\u5f88\u590d\u6742\uff0c\u5b83\u4ecd\u88ab\u7528\u5728\u4e86\u7ba1\u7406\u6240\u6709 React Native \u89c6\u56fe\u7684",(0,t.jsx)(i.code,{children:"RCTUIManager"}),"\u7c7b\u4e2d\uff0c"]}),"\n",(0,t.jsxs)(i.p,{children:["\u539f\u751f\u6a21\u5757\u540c\u6837\u53ef\u4ee5\u66b4\u9732\u5df2\u6709\u7684\u539f\u751f\u5e93\u7ed9 JS\uff0c",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/react-native-geolocation",children:"\u5730\u7406\u5b9a\u4f4d\u5e93"}),"\u5c31\u662f\u4e00\u4e2a\u73b0\u6210\u7684\u4f8b\u5b50\u3002"]}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"\u8b66\u544a\uff1a\u6240\u6709\u539f\u751f\u6a21\u5757\u5171\u4eab\u540c\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u521b\u5efa\u65b0\u6a21\u5757\u65f6\u6ce8\u610f\u907f\u514d\u547d\u540d\u51b2\u7a81\u3002"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u5e03\u5c40\u8ba1\u7b97\u6d41",children:"\u5e03\u5c40\u8ba1\u7b97\u6d41"}),"\n",(0,t.jsx)(i.p,{children:"\u5f53\u96c6\u6210\u539f\u751f\u6a21\u5757\u548c React Natvie \u65f6\uff0c\u6211\u4eec\u540c\u6837\u9700\u8981\u4e00\u4e2a\u80fd\u534f\u540c\u4e0d\u540c\u7684\u5e03\u5c40\u7cfb\u7edf\u7684\u529e\u6cd5\u3002\u8fd9\u4e00\u7ae0\u8282\u8ba8\u8bba\u4e86\u5e38\u89c1\u7684\u5e03\u5c40\u95ee\u9898\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u89e3\u51b3\u673a\u5236\u7684\u7b80\u5355\u8bf4\u660e\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"\u5728-react-native-\u4e2d\u5d4c\u5165\u4e00\u4e2a\u539f\u751f\u7ec4\u4ef6",children:"\u5728 React Native \u4e2d\u5d4c\u5165\u4e00\u4e2a\u539f\u751f\u7ec4\u4ef6"}),"\n",(0,t.jsxs)(i.p,{children:["\u8fd9\u4e2a\u60c5\u51b5\u5728",(0,t.jsx)(i.a,{href:"native-components-ios#%E6%A0%B7%E5%BC%8F",children:"\u8fd9\u7bc7\u6587\u7ae0"}),"\u4e2d\u8fdb\u884c\u4e86\u8ba8\u8bba\u3002\u57fa\u672c\u4e0a\uff0c\u7531\u4e8e\u6240\u6709\u7684\u539f\u751f\u89c6\u56fe\u90fd\u662f",(0,t.jsx)(i.code,{children:"UIView"}),"\u7684\u5b50\u96c6\uff0c\u5927\u591a\u6570\u7c7b\u578b\u548c\u5c3a\u5bf8\u5c5e\u6027\u5c06\u548c\u4f60\u671f\u671b\u7684\u4e00\u6837\u53ef\u4ee5\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"\u5728\u539f\u751f\u4e2d\u5d4c\u5165\u4e00\u4e2a-react-native-\u7ec4\u4ef6",children:"\u5728\u539f\u751f\u4e2d\u5d4c\u5165\u4e00\u4e2a React Native \u7ec4\u4ef6"}),"\n",(0,t.jsx)(i.h4,{id:"\u56fa\u5b9a\u5927\u5c0f\u7684-react-native-\u5185\u5bb9",children:"\u56fa\u5b9a\u5927\u5c0f\u7684 React Native \u5185\u5bb9"}),"\n",(0,t.jsxs)(i.p,{children:["\u6700\u7b80\u5355\u7684\u60c5\u51b5\u662f\u4e00\u4e2a\u5bf9\u4e8e\u539f\u751f\u7aef\u5df2\u77e5\u7684\uff0c\u56fa\u5b9a\u5927\u5c0f\u7684 React Native \u5e94\u7528\uff0c\u5c24\u5176\u662f\u4e00\u4e2a\u5168\u5c4f\u7684 React Native \u89c6\u56fe\u3002\u5982\u679c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5c0f\u4e00\u70b9\u7684\u6839\u89c6\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u660e\u786e\u7684\u8bbe\u7f6e",(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u7684 frame\u3002\u6bd4\u5982\u8bf4\uff0c\u521b\u5efa\u4e00\u4e2a 200 \u50cf\u7d20\u9ad8\uff0c\u5bbf\u4e3b\u89c6\u56fe\u90a3\u6837\u5bbd\u7684 RN app\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"// SomeViewController.m\n\n- (void)viewDidLoad\n{\n  [...]\n  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                   moduleName:appName\n                                            initialProperties:props];\n  rootView.frame = CGRectMake(0, 0, self.view.width, 200);\n  [self.view addSubview:rootView];\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u5f53\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u56fa\u5b9a\u5927\u5c0f\u7684\u6839\u89c6\u56fe\uff0c\u5219\u9700\u8981\u5728 JS \u4e2d\u9075\u5b88\u5b83\u7684\u8fb9\u754c\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u4eec\u9700\u8981\u786e\u4fdd React Native \u5185\u5bb9\u80fd\u591f\u5728\u56fa\u5b9a\u7684\u5927\u5c0f\u4e2d\u653e\u4e0b\u3002\u6700\u7b80\u5355\u7684\u529e\u6cd5\u662f\u4f7f\u7528 flexbox \u5e03\u5c40\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7edd\u5bf9\u5b9a\u4f4d\uff0c\u5e76\u4e14 React \u7ec4\u4ef6\u5728\u6839\u89c6\u56fe\u8fb9\u754c\u5916\u53ef\u89c1\uff0c\u5219 React Native \u7ec4\u4ef6\u5c06\u4f1a\u548c\u539f\u751f\u89c6\u56fe\u91cd\u53e0\uff0c\u5bfc\u81f4\u67d0\u4e9b\u4e0d\u7b26\u5408\u671f\u671b\u7684\u884c\u4e3a\u3002\u6bd4\u5982\u8bf4\uff0c\u5f53\u4f60\u70b9\u51fb\u6839\u89c6\u56fe\u8fb9\u754c\u4e4b\u5916\u7684\u533a\u57df",(0,t.jsx)(i.code,{children:"TouchableHighlight"}),"\u5c06\u4e0d\u4f1a\u9ad8\u4eae\u3002\u901a\u8fc7\u91cd\u65b0\u8bbe\u7f6e frame \u7684\u5c5e\u6027\u6765\u52a8\u6001\u66f4\u65b0\u6839\u89c6\u56fe\u7684\u5927\u5c0f\u662f\u5b8c\u5168\u53ef\u884c\u7684\u3002React Native \u5c06\u4f1a\u5173\u6ce8\u5185\u5bb9\u5e03\u5c40\u7684\u53d8\u5316\u3002"]}),"\n",(0,t.jsx)(i.h4,{id:"\u5f39\u6027\u5927\u5c0f\u7684-react-native",children:"\u5f39\u6027\u5927\u5c0f\u7684 React Native"}),"\n",(0,t.jsx)(i.p,{children:"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u6e32\u67d3\u4e00\u4e9b\u4e0d\u77e5\u9053\u5927\u5c0f\u7684\u5185\u5bb9\u3002\u5047\u8bbe\u5c3a\u5bf8\u5c06\u4f1a\u5728 JS \u4e2d\u52a8\u6001\u6307\u5b9a\u3002\u6211\u4eec\u6709\u4e24\u4e2a\u89e3\u51b3\u529e\u6cd5\u3002"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\u4f60\u53ef\u4ee5\u5c06 React Native \u89c6\u56fe\u5305\u88f9\u5728",(0,t.jsx)(i.code,{children:"ScrollView"}),"\u4e2d\u3002\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1\u4f60\u7684\u5185\u5bb9\u603b\u662f\u53ef\u4ee5\u8bbf\u95ee\uff0c\u5e76\u4e14\u4e0d\u4f1a\u548c\u539f\u751f\u89c6\u56fe\u91cd\u53e0\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:["React Native \u5141\u8bb8\u4f60\u5728 JS \u4e2d\u51b3\u5b9a RN \u5e94\u7528\u7684\u5c3a\u5bf8\uff0c\u5e76\u4e14\u5c06\u5b83\u4f20\u9012\u7ed9\u5bbf\u4e3b\u89c6\u56fe",(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u3002\u7136\u540e\u5bbf\u4e3b\u89c6\u56fe\u5c06\u91cd\u65b0\u5e03\u5c40\u5b50\u89c6\u56fe\uff0c\u4fdd\u8bc1 UI \u7edf\u4e00\u3002\u6211\u4eec\u901a\u8fc7",(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u7684\u5f39\u6027\u6a21\u5f0f\u6765\u8fbe\u5230\u76ee\u7684\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u652f\u6301 4 \u79cd\u4e0d\u540c\u7684\u5f39\u6027\u6a21\u5f0f\uff1a"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"// RCTRootView.h\n\ntypedef NS_ENUM(NSInteger, RCTRootViewSizeFlexibility) {\n  RCTRootViewSizeFlexibilityNone = 0,\n  RCTRootViewSizeFlexibilityWidth,\n  RCTRootViewSizeFlexibilityHeight,\n  RCTRootViewSizeFlexibilityWidthAndHeight,\n};\n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u9ed8\u8ba4\u503c\u662f",(0,t.jsx)(i.code,{children:"RCTRootViewSizeFlexibilityNone"}),"\uff0c\u8868\u793a\u4f7f\u7528\u56fa\u5b9a\u5927\u5c0f\u7684\u6839\u89c6\u56fe\uff08\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(i.code,{children:"setFrame"}),"\u66f4\u6539\uff09\u3002\u5176\u4ed6\u4e09\u79cd\u6a21\u5f0f\u53ef\u4ee5\u8ddf\u8e2a React Native \u5c3a\u5bf8\u7684\u53d8\u5316\u3002\u6bd4\u5982\u8bf4\uff0c\u8bbe\u7f6e\u6a21\u5f0f\u4e3a",(0,t.jsx)(i.code,{children:"RCTRootViewSizeFlexibilityHeight"}),"\uff0cReact Native \u5c06\u4f1a\u6d4b\u91cf\u5185\u5bb9\u7684\u9ad8\u5ea6\u7136\u540e\u4f20\u9012\u56de",(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u7684\u4ee3\u7406\u3002\u4ee3\u7406\u53ef\u4ee5\u6267\u884c\u4efb\u610f\u7684\u884c\u4e3a\uff0c\u5305\u62ec\u8bbe\u7f6e\u6839\u89c6\u56fe\u7684 frame \u4ee5\u4f7f\u5185\u5bb9\u5c3a\u5bf8\u76f8\u5339\u914d\u3002\u4ee3\u7406\u4ec5\u4ec5\u5728\u5185\u5bb9\u7684\u5c3a\u5bf8\u53d1\u751f\u53d8\u5316\u65f6\u624d\u8fdb\u884c\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.em,{children:"\u6ce8\u610f\uff1a"})})," \u5728 JS \u548c\u539f\u751f\u4e2d\u90fd\u8bbe\u7f6e\u5f39\u6027\u5c3a\u5bf8\u53ef\u80fd\u5bfc\u81f4\u4e0d\u786e\u5b9a\u7684\u884c\u4e3a\u3002\u6bd4\u5982--\u4e0d\u8981\u5728\u8bbe\u7f6e",(0,t.jsx)(i.code,{children:"RCTRootView"}),"\u4e3a",(0,t.jsx)(i.code,{children:"RCTRootViewSizeFlexibilityWidth"}),"\u65f6\u540c\u65f6\u6307\u5b9a\u6700\u9876\u5c42\u7684 RN \u7ec4\u4ef6\u5bbd\u5ea6\u53ef\u53d8\uff08\u4f7f\u7528 Flexbox\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'// FlexibleSizeExampleView.m\n\n- (instancetype)initWithFrame:(CGRect)frame\n{\n  [...]\n\n  _rootView = [[RCTRootView alloc] initWithBridge:bridge\n  moduleName:@"FlexibilityExampleApp"\n  initialProperties:@{}];\n\n  _rootView.delegate = self;\n  _rootView.sizeFlexibility = RCTRootViewSizeFlexibilityHeight;\n  _rootView.frame = CGRectMake(0, 0, self.frame.size.width, 0);\n}\n\n#pragma mark - RCTRootViewDelegate\n- (void)rootViewDidChangeIntrinsicSize:(RCTRootView *)rootView\n{\n  CGRect newFrame = rootView.frame;\n  newFrame.size = rootView.intrinsicContentSize;\n\n  rootView.frame = newFrame;\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["\u5728\u4f8b\u5b50\u4e2d\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a",(0,t.jsx)(i.code,{children:"FlexibleSizeExampleView"}),"\u89c6\u56fe\u6765\u5305\u542b\u6839\u89c6\u56fe\u3002\u6211\u4eec\u521b\u5efa\u4e86\u6839\u89c6\u56fe\uff0c\u521d\u59cb\u5316\u5e76\u4e14\u8bbe\u7f6e\u4e86\u4ee3\u7406\u3002\u4ee3\u7406\u5c06\u4f1a\u5904\u7406\u5c3a\u5bf8\u66f4\u65b0\u3002\u7136\u540e\uff0c\u6211\u4eec\u8bbe\u7f6e\u6839\u89c6\u56fe\u7684\u5f39\u6027\u5c3a\u5bf8\u4e3a",(0,t.jsx)(i.code,{children:"RCTRootViewSizeFlexibilityHeight"}),"\uff0c\u610f\u5473\u7740",(0,t.jsx)(i.code,{children:"rootViewDidChangeIntrinsicSize:"}),"\u65b9\u6cd5\u5c06\u4f1a\u5728\u6bcf\u6b21 React Native \u5185\u5bb9\u9ad8\u5ea6\u53d8\u5316\u65f6\u8fdb\u884c\u8c03\u7528\u3002\u6700\u540e\uff0c\u6211\u4eec\u8bbe\u7f6e\u6839\u89c6\u56fe\u7684\u5bbd\u5ea6\u548c\u4f4d\u7f6e\u3002\u6ce8\u610f\u6211\u4eec\u4e5f\u8bbe\u7f6e\u4e86\u9ad8\u5ea6\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\u6548\u679c\uff0c\u56e0\u4e3a\u6211\u4eec\u5df2\u7ecf\u5c06\u9ad8\u5ea6\u8bbe\u7f6e\u4e3a\u6839\u636e RN \u5185\u5bb9\u8fdb\u884c\u5f39\u6027\u53d8\u5316\u4e86\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u67e5\u770b\u5b8c\u6574\u7684\u4f8b\u5b50",(0,t.jsx)(i.a,{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/RNTester/NativeExampleViews/FlexibleSizeExampleView.m",children:"\u6e90\u4ee3\u7801"}),"\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["\u52a8\u6001\u6539\u53d8\u6839\u89c6\u56fe\u7684\u5f39\u6027\u6a21\u5f0f\u662f\u53ef\u884c\u7684\u3002\u6539\u53d8\u6839\u89c6\u56fe\u7684\u5f39\u6027\u6a21\u5f0f\u5c06\u4f1a\u5bfc\u81f4\u5e03\u5c40\u7684\u91cd\u65b0\u8ba1\u7b97\uff0c\u5e76\u4e14\u5728\u91cd\u65b0\u91cf\u51fa\u5185\u5bb9\u5c3a\u5bf8\u65f6\u4f1a\u8c03\u7528",(0,t.jsx)(i.code,{children:"rootViewDidChangeIntrinsicSize"}),"\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.em,{children:"\u6ce8\u610f\uff1a"})})," React Native \u5e03\u5c40\u662f\u901a\u8fc7\u4e00\u4e2a\u5355\u72ec\u7684\u7ebf\u7a0b\u8fdb\u884c\u8ba1\u7b97\uff0c\u800c\u539f\u751f UI \u89c6\u56fe\u662f\u901a\u8fc7\u4e3b\u7ebf\u7a0b\u66f4\u65b0\u3002\u8fd9\u53ef\u80fd\u5bfc\u81f4\u77ed\u6682\u7684\u539f\u751f\u7aef\u548c React Native \u7aef\u7684\u4e0d\u4e00\u81f4\u3002\u8fd9\u662f\u4e00\u4e2a\u5df2\u77e5\u7684\u95ee\u9898\uff0c\u6211\u4eec\u7684\u56e2\u961f\u5df2\u7ecf\u5728\u7740\u624b\u89e3\u51b3\u4e0d\u540c\u6e90\u7684 UI \u540c\u6b65\u66f4\u65b0\u3002 ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.em,{children:"\u6ce8\u610f\uff1a"})})," \u9664\u975e\u6839\u89c6\u56fe\u6210\u4e3a\u5176\u4ed6\u89c6\u56fe\u7684\u5b50\u89c6\u56fe\uff0c\u5426\u5219 React Native \u4e0d\u4f1a\u8fdb\u884c\u4efb\u4f55\u7684\u5e03\u5c40\u8ba1\u7b97\u3002\u5982\u679c\u4f60\u60f3\u5728\u8fd8\u6ca1\u6709\u83b7\u5f97 React Native \u89c6\u56fe\u7684\u5c3a\u5bf8\u4e4b\u524d\u5148\u9690\u85cf\u89c6\u56fe\uff0c\u8bf7\u5c06\u6839\u89c6\u56fe\u6dfb\u52a0\u4e3a\u5b50\u89c6\u56fe\u5e76\u4e14\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u8fdb\u884c\u9690\u85cf\uff08\u4f7f\u7528",(0,t.jsx)(i.code,{children:"UIView"}),"\u7684",(0,t.jsx)(i.code,{children:"hidden"}),"\u5c5e\u6027\uff09\uff0c\u7136\u540e\u5728\u4ee3\u7406\u65b9\u6cd5\u4e2d\u6539\u53d8\u5b83\u7684\u53ef\u89c1\u6027\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,c.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},71426:(e,i,n)=>{var t=n(27378),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var t,r={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(d=i.ref),i)o.call(i,t)&&!s.hasOwnProperty(t)&&(r[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===r[t]&&(r[t]=i[t]);return{$$typeof:c,type:e,key:l,ref:d,props:r,_owner:a.current}}i.Fragment=r,i.jsx=l,i.jsxs=l},24246:(e,i,n)=>{e.exports=n(71426)},71670:(e,i,n)=>{n.d(i,{Zo:()=>a,ah:()=>r});var t=n(27378);const c=t.createContext({});function r(e){const i=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const o={};function a({components:e,children:i,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:r(e),t.createElement(c.Provider,{value:a},i)}}}]);