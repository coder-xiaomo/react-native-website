/*! For license information please see 3b17f5a4.baa2a595.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8589],{92479:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(24246),l=n(71670);const s={id:"pixelratio",title:"PixelRatio"},r=void 0,o={id:"pixelratio",title:"PixelRatio",description:"PixelRatio \u53ef\u4ee5\u83b7\u53d6\u5230\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\u548c\u5b57\u4f53\u7f29\u653e\u6bd4\u3002",source:"@site/../cndocs/pixelratio.md",sourceDirName:".",slug:"/pixelratio",permalink:"/docs/next/pixelratio",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/pixelratio.md",tags:[],version:"current",frontMatter:{id:"pixelratio",title:"PixelRatio"},sidebar:"api",previous:{title:"PanResponder",permalink:"/docs/next/panresponder"},next:{title:"Platform",permalink:"/docs/next/platform"}},a={},c=[{value:"\u6839\u636e\u50cf\u7d20\u5bc6\u5ea6\u83b7\u53d6\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247",id:"\u6839\u636e\u50cf\u7d20\u5bc6\u5ea6\u83b7\u53d6\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247",level:2},{value:"\u50cf\u7d20\u7f51\u683c\u5bf9\u9f50",id:"\u50cf\u7d20\u7f51\u683c\u5bf9\u9f50",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"<code>getFontScale()</code>",id:"getfontscale",level:3},{value:"<code>getPixelSizeForLayoutSize()</code>",id:"getpixelsizeforlayoutsize",level:3},{value:"<code>roundToNearestPixel()</code>",id:"roundtonearestpixel",level:3}];function d(e){const i=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",blockquote:"blockquote",div:"div",hr:"hr",h1:"h1",h3:"h3",ul:"ul",li:"li",a:"a",strong:"strong"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"PixelRatio"})," \u53ef\u4ee5\u83b7\u53d6\u5230\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\u548c\u5b57\u4f53\u7f29\u653e\u6bd4\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u6839\u636e\u50cf\u7d20\u5bc6\u5ea6\u83b7\u53d6\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247",children:"\u6839\u636e\u50cf\u7d20\u5bc6\u5ea6\u83b7\u53d6\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247"}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u5e94\u7528\u8fd0\u884c\u5728\u4e00\u4e2a\u9ad8\u50cf\u7d20\u5bc6\u5ea6\u7684\u8bbe\u5907\u4e0a\uff0c\u663e\u793a\u7684\u56fe\u7247\u4e5f\u5e94\u5f53\u5206\u8fa8\u7387\u66f4\u9ad8\u3002\u4e00\u4e2a\u53d6\u5f97\u7f29\u7565\u56fe\u7684\u597d\u89c4\u5219\u5c31\u662f\u5c06\u663e\u793a\u5c3a\u5bf8\u4e58\u4ee5\u50cf\u7d20\u5bc6\u5ea6\u6bd4\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"const image = getImage({\n  width: PixelRatio.getPixelSizeForLayoutSize(200),\n  height: PixelRatio.getPixelSizeForLayoutSize(100),\n});\n<Image source={image} style={{width: 200, height: 100}} />\n"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["\u8bd1\u6ce8: \u8fd9\u6bb5\u4ee3\u7801\u7684\u610f\u601d\u662f\uff0c\u5982\u679c\u4f60\u8981\u5728\u5c4f\u5e55\u4e0a\u6446\u653e\u4e00\u4e2a\u5bbd 200 \u9ad8 100 \u7684\u56fe\u7247\uff0c\u90a3\u4e48\u9996\u5148\u8981\u51c6\u5907\u591a\u4e2a\u5206\u8fa8\u7387\u5c3a\u5bf8\u7684\u56fe\u3002",(0,t.jsx)(i.code,{children:"PixelRatio.getPixelSizeForLayoutSize(200)"}),"\u65b9\u6cd5\u4f1a\u6839\u636e\u5f53\u524d\u8bbe\u5907\u7684 pixelratio \u8fd4\u56de\u5bf9\u5e94\u503c\uff0c\u6bd4\u5982\u5f53\u524d\u8bbe\u5907\u7684 pixelratio \u4e3a 2\uff0c\u5219\u8fd4\u56de ",(0,t.jsx)(i.code,{children:"200 \\* 2 = 400"}),"\uff0c\u6700\u540e\u751f\u6210\u7684\u53c2\u6570\u4e3a",(0,t.jsx)(i.code,{children:"{ width: 400, height: 200 }"}),"\uff0c\u7136\u540e\u5f00\u53d1\u8005\u81ea\u5df1\u5b9e\u73b0 getImage \u65b9\u6cd5\uff0c\u6839\u636e\u8fd9\u4e00\u53c2\u6570\uff0c\u8fd4\u56de\u6700\u7b26\u5408\u6b64\u5c3a\u5bf8\u7684\u56fe\u7247\u5730\u5740\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u50cf\u7d20\u7f51\u683c\u5bf9\u9f50",children:"\u50cf\u7d20\u7f51\u683c\u5bf9\u9f50"}),"\n",(0,t.jsx)(i.p,{children:"\u5728 iOS \u8bbe\u5907\u4e0a\uff0c\u4f60\u53ef\u4ee5\u7ed9\u5143\u7d20\u6307\u5b9a\u4efb\u610f\u7cbe\u5ea6\u7684\u5750\u6807\u548c\u5c3a\u5bf8\uff0c\u4f8b\u5982 29.674825\u3002\u4e0d\u8fc7\u6700\u7ec8\u7684\u7269\u7406\u5c4f\u5e55\u4e0a\u53ea\u4f1a\u663e\u793a\u56fa\u5b9a\u7684\u5750\u6807\u6570\u3002\u8b6c\u5982 iPhone4 \u7684\u5206\u8fa8\u7387\u662f 640x960\uff0c\u800c iPhone6 \u662f 750*1334\u3002iOS \u4f1a\u8bd5\u56fe\u5c3d\u53ef\u80fd\u5fe0\u5b9e\u5730\u663e\u793a\u4f60\u6307\u5b9a\u7684\u5750\u6807\uff0c\u6240\u4ee5\u5b83\u91c7\u7528\u4e86\u4e00\u79cd\u628a\u4e00\u4e2a\u50cf\u7d20\u5206\u6563\u5230\u591a\u4e2a\u50cf\u7d20\u91cc\u7684\u505a\u6cd5\u6765\u6b3a\u9a97\u773c\u775b\u3002\u4f46\u8fd9\u4e2a\u4f5c\u7528\u7684\u8d1f\u9762\u5f71\u54cd\u662f\u663e\u793a\u51fa\u6765\u7684\u5143\u7d20\u770b\u8d77\u6765\u4f1a\u6709\u4e00\u4e9b\u6a21\u7cca\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u5f00\u53d1\u8005\u4eec\u5e76\u4e0d\u60f3\u8981\u8fd9\u4e2a\u7279\u6027\uff0c\u53cd\u800c\u9700\u8981\u53bb\u505a\u4e00\u4e9b\u989d\u5916\u7684\u5de5\u4f5c\u6765\u786e\u4fdd\u5750\u6807\u4e0e\u50cf\u7d20\u5750\u6807\u5bf9\u9f50\uff0c\u6765\u907f\u514d\u5143\u7d20\u663e\u5f97\u6a21\u7cca\u3002\u5728 React Native \u4e2d\uff0c\u6211\u4eec\u4f1a\u81ea\u52a8\u5bf9\u9f50\u5750\u6807\u5230\u50cf\u7d20\u5750\u6807\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u6211\u4eec\u505a\u8fd9\u4e2a\u5bf9\u9f50\u7684\u65f6\u5019\u5fc5\u987b\u5341\u5206\u5c0f\u5fc3\u3002\u5982\u679c\u4f60\u540c\u65f6\u4f7f\u7528\u5df2\u7ecf\u5bf9\u9f50\u7684\u503c\u548c\u6ca1\u6709\u5bf9\u9f50\u7684\u503c\uff0c\u5c31\u4f1a\u5f88\u5bb9\u6613\u4ea7\u751f\u4e00\u4e9b\u56e0\u4e3a\u8fd1\u4f3c\u5bfc\u81f4\u7684\u7d2f\u79ef\u9519\u8bef\u3002\u5373\u4f7f\u8fd9\u6837\u7684\u7d2f\u79ef\u9519\u8bef\u53ea\u53d1\u751f\u4e00\u6b21\uff0c\u540e\u679c\u4e5f\u53ef\u80fd\u4f1a\u5f88\u4e25\u91cd\uff0c\u56e0\u4e3a\u5f88\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e2a\u50cf\u7d20\u5bbd\u7684\u8fb9\u6846\u6700\u7ec8\u7a81\u7136\u6d88\u5931\u6216\u8005\u663e\u793a\u4e3a\u4e24\u500d\u7684\u5bbd\u5ea6\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u5728 React Native \u4e2d\uff0c\u6240\u6709 JS \u4e2d\u7684\u4e1c\u897f\uff0c\u5305\u62ec\u5e03\u5c40\u5f15\u64ce\uff0c\u90fd\u4f7f\u7528\u4efb\u610f\u7cbe\u5ea6\u7684\u6570\u503c\u3002\u6211\u4eec\u53ea\u5728\u4e3b\u7ebf\u7a0b\u6700\u540e\u8bbe\u7f6e\u539f\u751f\u7ec4\u4ef6\u7684\u4f4d\u7f6e\u548c\u5750\u6807\u7684\u65f6\u5019\u624d\u53bb\u505a\u5bf9\u9f50\u5de5\u4f5c\u3002\u800c\u4e14\uff0c\u5bf9\u9f50\u662f\u76f8\u5bf9\u4e8e\u5c4f\u5e55\u8fdb\u884c\u7684\uff0c\u800c\u975e\u76f8\u5bf9\u4e8e\u7236\u5143\u7d20\u8fdb\u884c\uff0c\u8fdb\u4e00\u6b65\u907f\u514d\u8fd1\u4f3c\u8bef\u5dee\u7684\u7d2f\u79ef\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(i.div,{class:"snack-player","data-snack-name":"PixelRatio Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Image%2C%20PixelRatio%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20TextInput%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnconst%20size%20%3D%2050%3B%5Cnconst%20cat%20%3D%20%7B%5Cn%20%20uri%3A%20%5C%22https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat1.png%5C%22%2C%5Cn%20%20width%3A%20size%2C%5Cn%20%20height%3A%20size%5Cn%7D%3B%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CScrollView%20style%3D%7Bstyles.scrollContainer%7D%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3ECurrent%20Pixel%20Ratio%20is%3A%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.get()%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3ECurrent%20Font%20Scale%20is%3A%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPixelRatio.getFontScale()%7D%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EOn%20this%20device%20images%20with%20a%20layout%20width%20of%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bsize%7D%20px%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CImage%20source%3D%7Bcat%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3Erequire%20images%20with%20a%20pixel%20width%20of%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%5Cn%20%20%20%20%20%20%20%20%7BPixelRatio.getPixelSizeForLayoutSize(size)%7D%20px%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CImage%5Cn%20%20%20%20%20%20%20%20source%3D%7Bcat%7D%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20width%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%2C%5Cn%20%20%20%20%20%20%20%20%20%20height%3A%20PixelRatio.getPixelSizeForLayoutSize(size)%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20%3C%2FScrollView%3E%5Cn)%3B%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20scrollContainer%3A%20%7B%5Cn%20%20%20%20flext%3A%201%2C%5Cn%20%20%20%20marginTop%3A%20%5C%222em%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20value%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%20%20marginBottom%3A%2012%2C%5Cn%20%20%20%20marginTop%3A%204%5Cn%20%20%7D%5Cn%7D)%3B%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-frame":"false"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,t.jsx)(i.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,t.jsx)(i.h3,{id:"get",children:(0,t.jsx)(i.code,{children:"get()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"static get()\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u8fd4\u56de\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 1"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"mdpi Android devices"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 1.5"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"hdpi Android devices"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 2"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"iPhone SE, 6S, 7, 8"}),"\n",(0,t.jsx)(i.li,{children:"iPhone XR"}),"\n",(0,t.jsx)(i.li,{children:"iPhone 11"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"xhdpi Android devices"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 3"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"iPhone 6S Plus, 7 Plus, 8 Plus"}),"\n",(0,t.jsx)(i.li,{children:"iPhone X, XS, XS Max"}),"\n",(0,t.jsx)(i.li,{children:"iPhone 11 Pro, 11 Pro Max"}),"\n",(0,t.jsx)(i.li,{children:"Pixel, Pixel 2"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"xxhdpi Android devices"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"PixelRatio.get() === 3.5"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Nexus 6"}),"\n",(0,t.jsx)(i.li,{children:"Pixel XL, Pixel 2 XL"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://material.io/tools/devices/",children:"xxxhdpi Android devices"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getfontscale",children:(0,t.jsx)(i.code,{children:"getFontScale()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"static getFontScale(): number\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u8fd4\u56de\u5b57\u4f53\u5927\u5c0f\u7f29\u653e\u6bd4\u4f8b\u3002\u8fd9\u4e2a\u6bd4\u4f8b\u53ef\u4ee5\u7528\u4e8e\u8ba1\u7b97\u7edd\u5bf9\u7684\u5b57\u4f53\u5927\u5c0f\uff0c\u6240\u4ee5\u5f88\u591a\u6df1\u5ea6\u4f9d\u8d56\u5b57\u4f53\u5927\u5c0f\u7684\u7ec4\u4ef6\u9700\u8981\u7528\u6b64\u51fd\u6570\u7684\u7ed3\u679c\u8fdb\u884c\u8ba1\u7b97\u3002"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Android \u4e0a\u5bf9\u5e94\u7684\u662f\u7528\u6237\u9009\u9879\u91cc\u7684\u201c\u8bbe\u7f6e > \u663e\u793a > \u5b57\u4f53\u5927\u5c0f\u201d\u3002"}),"\n",(0,t.jsxs)(i.li,{children:["iOS \u4e0a\u5bf9\u5e94\u7684\u662f\u7528\u6237\u9009\u9879\u91cc\u7684",(0,t.jsx)(i.strong,{children:"Settings > Display & Brightness > Text Size"}),", value can also be updated in ",(0,t.jsx)(i.strong,{children:"Settings > Accessibilty > Display & Test Size > Larger Text"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u5b57\u4f53\u7f29\u653e\u5927\u5c0f\uff0c\u5b83\u4f1a\u76f4\u63a5\u8fd4\u56de\u8bbe\u5907\u7684\u50cf\u7d20\u5bc6\u5ea6\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u76ee\u524d\u8fd9\u4e2a\u51fd\u6570\u4ec5\u4ec5\u5728 Android \u8bbe\u5907\u4e0a\u5b9e\u73b0\u4e86\uff0c\u5728 iOS \u8bbe\u5907\u4e0a\u5b83\u4f1a\u76f4\u63a5\u8fd4\u56de\u9ed8\u8ba4\u7684\u50cf\u7d20\u5bc6\u5ea6\u3002"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getpixelsizeforlayoutsize",children:(0,t.jsx)(i.code,{children:"getPixelSizeForLayoutSize()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"static getPixelSizeForLayoutSize(layoutSize: number): number\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u5c06\u4e00\u4e2a\u5e03\u5c40\u5c3a\u5bf8(dp)\u8f6c\u6362\u4e3a\u50cf\u7d20\u5c3a\u5bf8(px)\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u4e00\u5b9a\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\u6570\u503c\u3002"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"roundtonearestpixel",children:(0,t.jsx)(i.code,{children:"roundToNearestPixel()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"static roundToNearestPixel(layoutSize)\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels. For example, on a device with a PixelRatio of 3, ",(0,t.jsx)(i.code,{children:"PixelRatio.roundToNearestPixel(8.4) = 8.33"}),", which corresponds to exactly (8.33 * 3) = 25 pixels."]})]})}const x=function(e={}){const{wrapper:i}=Object.assign({},(0,l.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},71426:(e,i,n)=>{var t=n(27378),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,i,n){var t,s={},c=null,d=null;for(t in void 0!==n&&(c=""+n),void 0!==i.key&&(c=""+i.key),void 0!==i.ref&&(d=i.ref),i)r.call(i,t)&&!a.hasOwnProperty(t)&&(s[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===s[t]&&(s[t]=i[t]);return{$$typeof:l,type:e,key:c,ref:d,props:s,_owner:o.current}}i.Fragment=s,i.jsx=c,i.jsxs=c},24246:(e,i,n)=>{e.exports=n(71426)},71670:(e,i,n)=>{n.d(i,{Zo:()=>o,ah:()=>s});var t=n(27378);const l=t.createContext({});function s(e){const i=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const r={};function o({components:e,children:i,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:s(e),t.createElement(l.Provider,{value:o},i)}}}]);