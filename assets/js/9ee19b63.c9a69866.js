/*! For license information please see 9ee19b63.c9a69866.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[45754],{91080:(s,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var c=l(24246),n=l(71670);const o={id:"colors",title:"\u989c\u8272"},d=void 0,r={id:"colors",title:"\u989c\u8272",description:"React Native \u4e2d\u7684\u7ec4\u4ef6\u662f\u4f7f\u7528 JavaScript \u8fdb\u884c\u6837\u5f0f\u5316\u7684\u3002\u989c\u8272\u5c5e\u6027\u901a\u5e38\u4e0e Web \u4e0a\u7684 CSS \u5de5\u4f5c\u65b9\u5f0f\u76f8\u5339\u914d\u3002\u6bcf\u4e2a\u5e73\u53f0\u4e0a\u5173\u4e8e\u989c\u8272\u4f7f\u7528\u7684\u4e00\u822c\u6307\u5357\u5982\u4e0b\uff1a",source:"@site/versioned_docs/version-0.73/colors.md",sourceDirName:".",slug:"/colors",permalink:"/docs/colors",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/colors.md",tags:[],version:"0.73",frontMatter:{id:"colors",title:"\u989c\u8272"},sidebar:"docs",previous:{title:"\u56fe\u7247",permalink:"/docs/images"},next:{title:"\u5904\u7406\u89e6\u6478\u4e8b\u4ef6",permalink:"/docs/handling-touches"}},i={},a=[{value:"\u989c\u8272\u76f8\u5173\u7684 API",id:"\u989c\u8272\u76f8\u5173\u7684-api",level:2},{value:"\u989c\u8272\u7684\u8868\u793a\u5f62\u5f0f",id:"\u989c\u8272\u7684\u8868\u793a\u5f62\u5f0f",level:2},{value:"\u7ea2-\u7eff-\u84dd (RGB)",id:"\u7ea2-\u7eff-\u84dd-rgb",level:3},{value:"\u8272\u8c03-\u9971\u548c\u5ea6-\u4eae\u5ea6 (HSL)",id:"\u8272\u8c03-\u9971\u548c\u5ea6-\u4eae\u5ea6-hsl",level:3},{value:"\u989c\u8272\u503c",id:"\u989c\u8272\u503c",level:3},{value:"\u5168\u900f\u660e <code>transparent</code>",id:"\u5168\u900f\u660e-transparent",level:3},{value:"\u989c\u8272\u540d\u79f0",id:"\u989c\u8272\u540d\u79f0",level:3}];function x(s){const e=Object.assign({p:"p",a:"a",ul:"ul",li:"li",h2:"h2",h3:"h3",code:"code",admonition:"admonition"},(0,n.ah)(),s.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:["React Native \u4e2d\u7684\u7ec4\u4ef6\u662f",(0,c.jsx)(e.a,{href:"style",children:"\u4f7f\u7528 JavaScript \u8fdb\u884c\u6837\u5f0f\u5316"}),"\u7684\u3002\u989c\u8272\u5c5e\u6027\u901a\u5e38\u4e0e Web \u4e0a\u7684 ",(0,c.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value",children:"CSS"})," \u5de5\u4f5c\u65b9\u5f0f\u76f8\u5339\u914d\u3002\u6bcf\u4e2a\u5e73\u53f0\u4e0a\u5173\u4e8e\u989c\u8272\u4f7f\u7528\u7684\u4e00\u822c\u6307\u5357\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://material.io/design/color/color-usage.html",children:"Android"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/",children:"iOS"})}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u989c\u8272\u76f8\u5173\u7684-api",children:"\u989c\u8272\u76f8\u5173\u7684 API"}),"\n",(0,c.jsx)(e.p,{children:"React Native \u6709\u51e0\u4e2a\u989c\u8272 API\uff0c\u65e8\u5728\u8ba9\u60a8\u5145\u5206\u5229\u7528\u5e73\u53f0\u7684\u8bbe\u8ba1\u548c\u7528\u6237\u504f\u597d\u3002"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"platformcolor",children:"PlatformColor"})," \u5141\u8bb8\u60a8\u5f15\u7528\u5e73\u53f0\u7684\u989c\u8272\u7cfb\u7edf\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"dynamiccolorios",children:"DynamicColorIOS"})," \u662f iOS \u7279\u6709\u7684\uff0c\u53ef\u4ee5\u8ba9\u60a8\u6307\u5b9a\u5728\u6d45\u8272\u6216\u6df1\u8272\u6a21\u5f0f\u4e0b\u4f7f\u7528\u54ea\u4e9b\u989c\u8272\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u989c\u8272\u7684\u8868\u793a\u5f62\u5f0f",children:"\u989c\u8272\u7684\u8868\u793a\u5f62\u5f0f"}),"\n",(0,c.jsx)(e.h3,{id:"\u7ea2-\u7eff-\u84dd-rgb",children:"\u7ea2-\u7eff-\u84dd (RGB)"}),"\n",(0,c.jsxs)(e.p,{children:["React Native \u652f\u6301 ",(0,c.jsx)(e.code,{children:"rgb()"})," \u548c ",(0,c.jsx)(e.code,{children:"rgba()"})," \u4e24\u79cd\u5341\u516d\u8fdb\u5236\u4e0e\u51fd\u6570\u65b9\u6cd5"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"'#f0f'"})," (#rgb)"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"'#ff00ff'"})," (#rrggbb)"]}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"'rgb(255, 0, 255)'"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"'rgba(255, 255, 255, 1.0)'"})}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u8272\u8c03-\u9971\u548c\u5ea6-\u4eae\u5ea6-hsl",children:"\u8272\u8c03-\u9971\u548c\u5ea6-\u4eae\u5ea6 (HSL)"}),"\n",(0,c.jsxs)(e.p,{children:["\u4e5f\u652f\u6301 ",(0,c.jsx)(e.code,{children:"hsl()"})," \u548c ",(0,c.jsx)(e.code,{children:"hsla()"})," \u51fd\u6570\u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"'hsl(360, 100%, 100%)'"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"'hsla(360, 100%, 100%, 1.0)'"})}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u989c\u8272\u503c",children:"\u989c\u8272\u503c"}),"\n",(0,c.jsxs)(e.p,{children:["React Native \u8fd8\u652f\u6301\u5c06\u989c\u8272\u8868\u793a\u4e3a",(0,c.jsx)(e.code,{children:"int"}),"\u503c\uff08\u4ee5 RGB \u989c\u8272\u6a21\u5f0f\uff09\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"0xff00ff00"})," (0xrrggbbaa)"]}),"\n"]}),"\n",(0,c.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,c.jsxs)(e.p,{children:["\u8fd9\u770b\u8d77\u6765\u53ef\u80fd\u4e0e Android ",(0,c.jsx)(e.a,{href:"https://developer.android.com/reference/android/graphics/Color",children:"Color"})," \u7684\u6574\u6570\u8868\u793a\u7c7b\u4f3c\uff0c\u4f46\u5728 Android \u4e0a\u7684\u503c\u662f\u4ee5 SRGB \u989c\u8272\u6a21\u5f0f\uff080xaarrggbb\uff09\u5b58\u50a8\u7684\u3002"]})}),"\n",(0,c.jsxs)(e.h3,{id:"\u5168\u900f\u660e-transparent",children:["\u5168\u900f\u660e ",(0,c.jsx)(e.code,{children:"transparent"})]}),"\n",(0,c.jsxs)(e.p,{children:["\u5168\u900f\u660e\u989c\u8272\u503c",(0,c.jsx)(e.code,{children:"rgba(0,0,0,0)"})," \u6709\u4e2a\u5355\u72ec\u7684\u5199\u6cd5\uff0c\u548c",(0,c.jsx)(e.a,{href:"https://www.w3.org/TR/css-color-3/#transparent",children:"CSS3"}),"\u4e00\u81f4\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.code,{children:"'transparent'"})}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u989c\u8272\u540d\u79f0",children:"\u989c\u8272\u540d\u79f0"}),"\n",(0,c.jsxs)(e.p,{children:["\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u989c\u8272\u540d\u79f0\u6765\u4f5c\u4e3a\u989c\u8272\u503c. React Native \u9075\u5faa",(0,c.jsx)(e.a,{href:"http://www.w3.org/TR/css3-color/#svg-color",children:"CSS3 \u89c4\u8303"}),"\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f0f8ff"},className:"color-box"})," aliceblue (",(0,c.jsx)("code",{children:"#f0f8ff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#faebd7"},className:"color-box"})," antiquewhite (",(0,c.jsx)("code",{children:"#faebd7"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#00ffff"},className:"color-box"})," aqua (",(0,c.jsx)("code",{children:"#00ffff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#7fffd4"},className:"color-box"})," aquamarine (",(0,c.jsx)("code",{children:"#7fffd4"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f0ffff"},className:"color-box"})," azure (",(0,c.jsx)("code",{children:"#f0ffff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f5f5dc"},className:"color-box"})," beige (",(0,c.jsx)("code",{children:"#f5f5dc"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffe4c4"},className:"color-box"})," bisque (",(0,c.jsx)("code",{children:"#ffe4c4"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#000000"},className:"color-box"})," black (",(0,c.jsx)("code",{children:"#000000"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffebcd"},className:"color-box"})," blanchedalmond (",(0,c.jsx)("code",{children:"#ffebcd"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#0000ff"},className:"color-box"})," blue (",(0,c.jsx)("code",{children:"#0000ff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#8a2be2"},className:"color-box"})," blueviolet (",(0,c.jsx)("code",{children:"#8a2be2"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#a52a2a"},className:"color-box"})," brown (",(0,c.jsx)("code",{children:"#a52a2a"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#deb887"},className:"color-box"})," burlywood (",(0,c.jsx)("code",{children:"#deb887"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#5f9ea0"},className:"color-box"})," cadetblue (",(0,c.jsx)("code",{children:"#5f9ea0"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#7fff00"},className:"color-box"})," chartreuse (",(0,c.jsx)("code",{children:"#7fff00"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#d2691e"},className:"color-box"})," chocolate (",(0,c.jsx)("code",{children:"#d2691e"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff7f50"},className:"color-box"})," coral (",(0,c.jsx)("code",{children:"#ff7f50"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#6495ed"},className:"color-box"})," cornflowerblue (",(0,c.jsx)("code",{children:"#6495ed"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fff8dc"},className:"color-box"})," cornsilk (",(0,c.jsx)("code",{children:"#fff8dc"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#dc143c"},className:"color-box"})," crimson (",(0,c.jsx)("code",{children:"#dc143c"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#00ffff"},className:"color-box"})," cyan (",(0,c.jsx)("code",{children:"#00ffff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#00008b"},className:"color-box"})," darkblue (",(0,c.jsx)("code",{children:"#00008b"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#008b8b"},className:"color-box"})," darkcyan (",(0,c.jsx)("code",{children:"#008b8b"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#b8860b"},className:"color-box"})," darkgoldenrod (",(0,c.jsx)("code",{children:"#b8860b"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#a9a9a9"},className:"color-box"})," darkgray (",(0,c.jsx)("code",{children:"#a9a9a9"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#006400"},className:"color-box"})," darkgreen (",(0,c.jsx)("code",{children:"#006400"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#a9a9a9"},className:"color-box"})," darkgrey (",(0,c.jsx)("code",{children:"#a9a9a9"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#bdb76b"},className:"color-box"})," darkkhaki (",(0,c.jsx)("code",{children:"#bdb76b"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#8b008b"},className:"color-box"})," darkmagenta (",(0,c.jsx)("code",{children:"#8b008b"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#556b2f"},className:"color-box"})," darkolivegreen (",(0,c.jsx)("code",{children:"#556b2f"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff8c00"},className:"color-box"})," darkorange (",(0,c.jsx)("code",{children:"#ff8c00"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#9932cc"},className:"color-box"})," darkorchid (",(0,c.jsx)("code",{children:"#9932cc"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#8b0000"},className:"color-box"})," darkred (",(0,c.jsx)("code",{children:"#8b0000"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#e9967a"},className:"color-box"})," darksalmon (",(0,c.jsx)("code",{children:"#e9967a"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#8fbc8f"},className:"color-box"})," darkseagreen (",(0,c.jsx)("code",{children:"#8fbc8f"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#483d8b"},className:"color-box"})," darkslateblue (",(0,c.jsx)("code",{children:"#483d8b"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#2f4f4f"},className:"color-box"})," darkslategrey (",(0,c.jsx)("code",{children:"#2f4f4f"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#00ced1"},className:"color-box"})," darkturquoise (",(0,c.jsx)("code",{children:"#00ced1"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#9400d3"},className:"color-box"})," darkviolet (",(0,c.jsx)("code",{children:"#9400d3"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff1493"},className:"color-box"})," deeppink (",(0,c.jsx)("code",{children:"#ff1493"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#00bfff"},className:"color-box"})," deepskyblue (",(0,c.jsx)("code",{children:"#00bfff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#696969"},className:"color-box"})," dimgray (",(0,c.jsx)("code",{children:"#696969"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#696969"},className:"color-box"})," dimgrey (",(0,c.jsx)("code",{children:"#696969"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#1e90ff"},className:"color-box"})," dodgerblue (",(0,c.jsx)("code",{children:"#1e90ff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#b22222"},className:"color-box"})," firebrick (",(0,c.jsx)("code",{children:"#b22222"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fffaf0"},className:"color-box"})," floralwhite (",(0,c.jsx)("code",{children:"#fffaf0"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#228b22"},className:"color-box"})," forestgreen (",(0,c.jsx)("code",{children:"#228b22"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff00ff"},className:"color-box"})," fuchsia (",(0,c.jsx)("code",{children:"#ff00ff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#dcdcdc"},className:"color-box"})," gainsboro (",(0,c.jsx)("code",{children:"#dcdcdc"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f8f8ff"},className:"color-box"})," ghostwhite (",(0,c.jsx)("code",{children:"#f8f8ff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffd700"},className:"color-box"})," gold (",(0,c.jsx)("code",{children:"#ffd700"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#daa520"},className:"color-box"})," goldenrod (",(0,c.jsx)("code",{children:"#daa520"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#808080"},className:"color-box"})," gray (",(0,c.jsx)("code",{children:"#808080"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#008000"},className:"color-box"})," green (",(0,c.jsx)("code",{children:"#008000"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#adff2f"},className:"color-box"})," greenyellow (",(0,c.jsx)("code",{children:"#adff2f"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#808080"},className:"color-box"})," grey (",(0,c.jsx)("code",{children:"#808080"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f0fff0"},className:"color-box"})," honeydew (",(0,c.jsx)("code",{children:"#f0fff0"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff69b4"},className:"color-box"})," hotpink (",(0,c.jsx)("code",{children:"#ff69b4"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#cd5c5c"},className:"color-box"})," indianred (",(0,c.jsx)("code",{children:"#cd5c5c"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#4b0082"},className:"color-box"})," indigo (",(0,c.jsx)("code",{children:"#4b0082"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fffff0"},className:"color-box"})," ivory (",(0,c.jsx)("code",{children:"#fffff0"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f0e68c"},className:"color-box"})," khaki (",(0,c.jsx)("code",{children:"#f0e68c"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#e6e6fa"},className:"color-box"})," lavender (",(0,c.jsx)("code",{children:"#e6e6fa"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fff0f5"},className:"color-box"})," lavenderblush (",(0,c.jsx)("code",{children:"#fff0f5"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#7cfc00"},className:"color-box"})," lawngreen (",(0,c.jsx)("code",{children:"#7cfc00"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fffacd"},className:"color-box"})," lemonchiffon (",(0,c.jsx)("code",{children:"#fffacd"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#add8e6"},className:"color-box"})," lightblue (",(0,c.jsx)("code",{children:"#add8e6"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f08080"},className:"color-box"})," lightcoral (",(0,c.jsx)("code",{children:"#f08080"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#e0ffff"},className:"color-box"})," lightcyan (",(0,c.jsx)("code",{children:"#e0ffff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fafad2"},className:"color-box"})," lightgoldenrodyellow (",(0,c.jsx)("code",{children:"#fafad2"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#d3d3d3"},className:"color-box"})," lightgray (",(0,c.jsx)("code",{children:"#d3d3d3"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#90ee90"},className:"color-box"})," lightgreen (",(0,c.jsx)("code",{children:"#90ee90"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#d3d3d3"},className:"color-box"})," lightgrey (",(0,c.jsx)("code",{children:"#d3d3d3"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffb6c1"},className:"color-box"})," lightpink (",(0,c.jsx)("code",{children:"#ffb6c1"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffa07a"},className:"color-box"})," lightsalmon (",(0,c.jsx)("code",{children:"#ffa07a"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#20b2aa"},className:"color-box"})," lightseagreen (",(0,c.jsx)("code",{children:"#20b2aa"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#87cefa"},className:"color-box"})," lightskyblue (",(0,c.jsx)("code",{children:"#87cefa"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#778899"},className:"color-box"})," lightslategrey (",(0,c.jsx)("code",{children:"#778899"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#b0c4de"},className:"color-box"})," lightsteelblue (",(0,c.jsx)("code",{children:"#b0c4de"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffffe0"},className:"color-box"})," lightyellow (",(0,c.jsx)("code",{children:"#ffffe0"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#00ff00"},className:"color-box"})," lime (",(0,c.jsx)("code",{children:"#00ff00"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#32cd32"},className:"color-box"})," limegreen (",(0,c.jsx)("code",{children:"#32cd32"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#faf0e6"},className:"color-box"})," linen (",(0,c.jsx)("code",{children:"#faf0e6"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff00ff"},className:"color-box"})," magenta (",(0,c.jsx)("code",{children:"#ff00ff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#800000"},className:"color-box"})," maroon (",(0,c.jsx)("code",{children:"#800000"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#66cdaa"},className:"color-box"})," mediumaquamarine (",(0,c.jsx)("code",{children:"#66cdaa"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#0000cd"},className:"color-box"})," mediumblue (",(0,c.jsx)("code",{children:"#0000cd"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ba55d3"},className:"color-box"})," mediumorchid (",(0,c.jsx)("code",{children:"#ba55d3"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#9370db"},className:"color-box"})," mediumpurple (",(0,c.jsx)("code",{children:"#9370db"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#3cb371"},className:"color-box"})," mediumseagreen (",(0,c.jsx)("code",{children:"#3cb371"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#7b68ee"},className:"color-box"})," mediumslateblue (",(0,c.jsx)("code",{children:"#7b68ee"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#00fa9a"},className:"color-box"})," mediumspringgreen (",(0,c.jsx)("code",{children:"#00fa9a"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#48d1cc"},className:"color-box"})," mediumturquoise (",(0,c.jsx)("code",{children:"#48d1cc"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#c71585"},className:"color-box"})," mediumvioletred (",(0,c.jsx)("code",{children:"#c71585"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#191970"},className:"color-box"})," midnightblue (",(0,c.jsx)("code",{children:"#191970"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f5fffa"},className:"color-box"})," mintcream (",(0,c.jsx)("code",{children:"#f5fffa"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffe4e1"},className:"color-box"})," mistyrose (",(0,c.jsx)("code",{children:"#ffe4e1"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffe4b5"},className:"color-box"})," moccasin (",(0,c.jsx)("code",{children:"#ffe4b5"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffdead"},className:"color-box"})," navajowhite (",(0,c.jsx)("code",{children:"#ffdead"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#000080"},className:"color-box"})," navy (",(0,c.jsx)("code",{children:"#000080"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fdf5e6"},className:"color-box"})," oldlace (",(0,c.jsx)("code",{children:"#fdf5e6"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#808000"},className:"color-box"})," olive (",(0,c.jsx)("code",{children:"#808000"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#6b8e23"},className:"color-box"})," olivedrab (",(0,c.jsx)("code",{children:"#6b8e23"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffa500"},className:"color-box"})," orange (",(0,c.jsx)("code",{children:"#ffa500"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff4500"},className:"color-box"})," orangered (",(0,c.jsx)("code",{children:"#ff4500"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#da70d6"},className:"color-box"})," orchid (",(0,c.jsx)("code",{children:"#da70d6"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#eee8aa"},className:"color-box"})," palegoldenrod (",(0,c.jsx)("code",{children:"#eee8aa"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#98fb98"},className:"color-box"})," palegreen (",(0,c.jsx)("code",{children:"#98fb98"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#afeeee"},className:"color-box"})," paleturquoise (",(0,c.jsx)("code",{children:"#afeeee"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#db7093"},className:"color-box"})," palevioletred (",(0,c.jsx)("code",{children:"#db7093"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffefd5"},className:"color-box"})," papayawhip (",(0,c.jsx)("code",{children:"#ffefd5"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffdab9"},className:"color-box"})," peachpuff (",(0,c.jsx)("code",{children:"#ffdab9"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#cd853f"},className:"color-box"})," peru (",(0,c.jsx)("code",{children:"#cd853f"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffc0cb"},className:"color-box"})," pink (",(0,c.jsx)("code",{children:"#ffc0cb"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#dda0dd"},className:"color-box"})," plum (",(0,c.jsx)("code",{children:"#dda0dd"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#b0e0e6"},className:"color-box"})," powderblue (",(0,c.jsx)("code",{children:"#b0e0e6"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#800080"},className:"color-box"})," purple (",(0,c.jsx)("code",{children:"#800080"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#663399"},className:"color-box"})," rebeccapurple (",(0,c.jsx)("code",{children:"#663399"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff0000"},className:"color-box"})," red (",(0,c.jsx)("code",{children:"#ff0000"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#bc8f8f"},className:"color-box"})," rosybrown (",(0,c.jsx)("code",{children:"#bc8f8f"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#4169e1"},className:"color-box"})," royalblue (",(0,c.jsx)("code",{children:"#4169e1"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#8b4513"},className:"color-box"})," saddlebrown (",(0,c.jsx)("code",{children:"#8b4513"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fa8072"},className:"color-box"})," salmon (",(0,c.jsx)("code",{children:"#fa8072"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f4a460"},className:"color-box"})," sandybrown (",(0,c.jsx)("code",{children:"#f4a460"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#2e8b57"},className:"color-box"})," seagreen (",(0,c.jsx)("code",{children:"#2e8b57"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fff5ee"},className:"color-box"})," seashell (",(0,c.jsx)("code",{children:"#fff5ee"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#a0522d"},className:"color-box"})," sienna (",(0,c.jsx)("code",{children:"#a0522d"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#c0c0c0"},className:"color-box"})," silver (",(0,c.jsx)("code",{children:"#c0c0c0"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#87ceeb"},className:"color-box"})," skyblue (",(0,c.jsx)("code",{children:"#87ceeb"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#6a5acd"},className:"color-box"})," slateblue (",(0,c.jsx)("code",{children:"#6a5acd"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#708090"},className:"color-box"})," slategray (",(0,c.jsx)("code",{children:"#708090"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#fffafa"},className:"color-box"})," snow (",(0,c.jsx)("code",{children:"#fffafa"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#00ff7f"},className:"color-box"})," springgreen (",(0,c.jsx)("code",{children:"#00ff7f"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#4682b4"},className:"color-box"})," steelblue (",(0,c.jsx)("code",{children:"#4682b4"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#d2b48c"},className:"color-box"})," tan (",(0,c.jsx)("code",{children:"#d2b48c"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#008080"},className:"color-box"})," teal (",(0,c.jsx)("code",{children:"#008080"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#d8bfd8"},className:"color-box"})," thistle (",(0,c.jsx)("code",{children:"#d8bfd8"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ff6347"},className:"color-box"})," tomato (",(0,c.jsx)("code",{children:"#ff6347"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#40e0d0"},className:"color-box"})," turquoise (",(0,c.jsx)("code",{children:"#40e0d0"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ee82ee"},className:"color-box"})," violet (",(0,c.jsx)("code",{children:"#ee82ee"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f5deb3"},className:"color-box"})," wheat (",(0,c.jsx)("code",{children:"#f5deb3"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffffff"},className:"color-box"})," white (",(0,c.jsx)("code",{children:"#ffffff"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#f5f5f5"},className:"color-box"})," whitesmoke (",(0,c.jsx)("code",{children:"#f5f5f5"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#ffff00"},className:"color-box"})," yellow (",(0,c.jsx)("code",{children:"#ffff00"}),")"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)("ins",{style:{background:"#9acd32"},className:"color-box"})," yellowgreen (",(0,c.jsx)("code",{children:"#9acd32"}),")"]}),"\n"]})]})}const j=function(s={}){const{wrapper:e}=Object.assign({},(0,n.ah)(),s.components);return e?(0,c.jsx)(e,Object.assign({},s,{children:(0,c.jsx)(x,s)})):x(s)}},71426:(s,e,l)=>{var c=l(27378),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(s,e,l){var c,o={},a=null,x=null;for(c in void 0!==l&&(a=""+l),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(x=e.ref),e)d.call(e,c)&&!i.hasOwnProperty(c)&&(o[c]=e[c]);if(s&&s.defaultProps)for(c in e=s.defaultProps)void 0===o[c]&&(o[c]=e[c]);return{$$typeof:n,type:s,key:a,ref:x,props:o,_owner:r.current}}e.Fragment=o,e.jsx=a,e.jsxs=a},24246:(s,e,l)=>{s.exports=l(71426)},71670:(s,e,l)=>{l.d(e,{Zo:()=>r,ah:()=>o});var c=l(27378);const n=c.createContext({});function o(s){const e=c.useContext(n);return c.useMemo((()=>"function"==typeof s?s(e):{...e,...s}),[e,s])}const d={};function r({components:s,children:e,disableParentContext:l}){let r;return r=l?"function"==typeof s?s({}):s||d:o(s),c.createElement(n.Provider,{value:r},e)}}}]);