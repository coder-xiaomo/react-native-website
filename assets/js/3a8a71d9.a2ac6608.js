"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[7771],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=d(n),m=r,s=k["".concat(o,".").concat(m)]||k[m]||c[m]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},20101:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return k}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],p={id:"picker",title:"\ud83d\udea7 Picker"},o=void 0,d={unversionedId:"picker",id:"version-0.63/picker",isDocsHomePage:!1,title:"\ud83d\udea7 Picker",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/picker instead.",source:"@site/versioned_docs/version-0.63/picker.md",sourceDirName:".",slug:"/picker",permalink:"/docs/0.63/picker",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/picker.md",version:"0.63",lastUpdatedAt:1628399172,formattedLastUpdatedAt:"8/8/2021",frontMatter:{id:"picker",title:"\ud83d\udea7 Picker"}},u=[{value:"Props",id:"props",children:[{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>selectedValue</code>",id:"selectedvalue",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>prompt</code>",id:"prompt",children:[]},{value:"<code>itemStyle</code>",id:"itemstyle",children:[]}]}],c={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-picker"},"@react-native-community/picker")," instead.")),(0,l.kt)("p",null,"\u672c\u7ec4\u4ef6\u53ef\u4ee5\u5728 iOS \u548c Android \u4e0a\u6e32\u67d3\u539f\u751f\u7684\u9009\u62e9\u5668\uff08Picker\uff09\u3002"),(0,l.kt)("div",{className:"snack-player","data-snack-name":"picker","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20Picker%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BselectedValue%2C%20setSelectedValue%5D%20%3D%20useState(%22java%22)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CPicker%0A%20%20%20%20%20%20%20%20selectedValue%3D%7BselectedValue%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20height%3A%2050%2C%20width%3A%20150%20%7D%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue%2C%20itemIndex)%20%3D%3E%20setSelectedValue(itemValue)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CPicker.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPicker.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPicker%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20paddingTop%3A%2040%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("p",null,"\u7ee7\u627f\u6240\u6709",(0,l.kt)("a",{parentName:"p",href:"/docs/0.63/view#props"},"View Props"),"."),(0,l.kt)("h3",{id:"onvaluechange"},(0,l.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,l.kt)("p",null,"\u67d0\u4e00\u9879\u88ab\u9009\u4e2d\u65f6\u6267\u884c\u6b64\u56de\u8c03\u3002\u8c03\u7528\u65f6\u5e26\u6709\u5982\u4e0b\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"itemValue"),": \u88ab\u9009\u4e2d\u9879\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"value"),"\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"itemPosition"),": \u88ab\u9009\u4e2d\u9879\u5728 picker \u4e2d\u7684\u7d22\u5f15\u4f4d\u7f6e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"selectedvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectedValue")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u9009\u4e2d\u7684\u503c\u3002\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u6574\u6570\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"style"},(0,l.kt)("inlineCode",{parentName:"h3"},"style")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pickerStyleType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"testid"},(0,l.kt)("inlineCode",{parentName:"h3"},"testID")),(0,l.kt)("p",null,"\u7528\u4e8e\u5728\u7aef\u5bf9\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u6b64\u89c6\u56fe\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"enabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,l.kt)("p",null,"\u5982\u679c\u8bbe\u4e3a false\uff0c\u5219\u4f1a\u7981\u7528\u6b64\u9009\u62e9\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"Android")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mode"},(0,l.kt)("inlineCode",{parentName:"h3"},"mode")),(0,l.kt)("p",null,"\u5728 Android \u4e0a\uff0c\u53ef\u4ee5\u6307\u5b9a\u5728\u7528\u6237\u70b9\u51fb\u9009\u62e9\u5668\u65f6\uff0c\u4ee5\u600e\u6837\u7684\u5f62\u5f0f\u5448\u73b0\u9009\u9879\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'dialog': \u663e\u793a\u4e00\u4e2a\u6a21\u6001\u5bf9\u8bdd\u6846\u3002\u9ed8\u8ba4\u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},"'dropdown': \u4ee5\u9009\u62e9\u5668\u6240\u5728\u4f4d\u7f6e\u4e3a\u951a\u70b9\u5c55\u5f00\u4e00\u4e2a\u4e0b\u62c9\u6846\u3002")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enum('dialog', 'dropdown')"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"Android")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"prompt"},(0,l.kt)("inlineCode",{parentName:"h3"},"prompt")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u9009\u62e9\u5668\u7684\u63d0\u793a\u5b57\u7b26\u4e32\u3002\u5728 Android \u7684\u5bf9\u8bdd\u6846\u6a21\u5f0f\u4e2d\u7528\u4f5c\u5bf9\u8bdd\u6846\u7684\u6807\u9898\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"Android")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"itemstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"itemStyle")),(0,l.kt)("p",null,"\u6307\u5b9a\u5e94\u7528\u5728\u6bcf\u9879\u6807\u7b7e\u4e0a\u7684\u6837\u5f0f\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.63/text-style-props"},"text styles")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,l.kt)("hr",null),(0,l.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,l.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}k.isMDXComponent=!0}}]);