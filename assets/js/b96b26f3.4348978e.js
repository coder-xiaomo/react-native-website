"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8362],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45981:function(e,n,t){var a=t(161),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=i?"ios":"android",s=i?"macos":r?"windows":"linux";n.Z={defaultGuide:"native",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,n,t){var a=t(27378);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},64535:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(27378),i=t(84956);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(38944),s="tabItem_c0e5",o="tabItemActive_28AG";var d=37,c=39;var u=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,u=e.values,p=e.groupId,m=e.className,b=r(),h=b.tabGroupChoices,A=b.setTabGroupChoices,f=(0,a.useState)(i),v=f[0],y=f[1],k=a.Children.toArray(e.children),g=[];if(null!=p){var C=h[p];null!=C&&C!==v&&u.some((function(e){return e.value===C}))&&y(C)}var E=function(e){var n=e.currentTarget,t=g.indexOf(n),a=u[t].value;y(a),null!=p&&(A(p,a),setTimeout((function(){var e,t,a,i,r,l,s,d;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,r=e.right,l=window,s=l.innerHeight,d=l.innerWidth,t>=0&&r<=d&&i<=s&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(o),setTimeout((function(){return n.classList.remove(o)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case c:var a=g.indexOf(e.target)+1;t=g[a]||g[0];break;case d:var i=g.indexOf(e.target)-1;t=g[i]||g[g.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},u.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":v===n}),key:n,ref:function(e){return g.push(e)},onKeyDown:N,onFocus:E,onClick:E},t)}))),n?(0,a.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},84956:function(e,n,t){var a=(0,t(27378).createContext)(void 0);n.Z=a},45276:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var a=t(25773),i=t(30808),r=(t(27378),t(35318)),l=t(64535),s=t(70517),o=t(45981),d=["components"],c={id:"accessibilityinfo",title:"AccessibilityInfo"},u=void 0,p={unversionedId:"accessibilityinfo",id:"version-0.63/accessibilityinfo",isDocsHomePage:!1,title:"AccessibilityInfo",description:"\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u77e5\u9053\u7528\u6237\u7684\u8bbe\u5907\u662f\u5426\u6b63\u5728\u8fd0\u884c\u8bfb\u5c4f\u5e94\u7528\u3002AccessibilityInfo\u6b63\u662f\u7528\u4e8e\u6b64\u76ee\u7684\u3002\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u76d1\u542c\u5176\u72b6\u6001\u53d8\u5316\u3002",source:"@site/versioned_docs/version-0.63/accessibilityinfo.md",sourceDirName:".",slug:"/accessibilityinfo",permalink:"/docs/0.63/accessibilityinfo",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/accessibilityinfo.md",version:"0.63",lastUpdatedAt:1628399172,formattedLastUpdatedAt:"8/8/2021",frontMatter:{id:"accessibilityinfo",title:"AccessibilityInfo"},sidebar:"version-0.63/api",next:{title:"Alert",permalink:"/docs/0.63/alert"}},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>isBoldTextEnabled()</code>",id:"isboldtextenabled",children:[]},{value:"<code>isGrayscaleEnabled()</code>",id:"isgrayscaleenabled",children:[]},{value:"<code>isInvertColorsEnabled()</code>",id:"isinvertcolorsenabled",children:[]},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",children:[]},{value:"<code>isReduceTransparencyEnabled()</code>",id:"isreducetransparencyenabled",children:[]},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",children:[]},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",children:[]},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]}],b={toc:m};function h(e){var n=e.components,t=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u77e5\u9053\u7528\u6237\u7684\u8bbe\u5907\u662f\u5426\u6b63\u5728\u8fd0\u884c\u8bfb\u5c4f\u5e94\u7528\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"AccessibilityInfo"),"\u6b63\u662f\u7528\u4e8e\u6b64\u76ee\u7684\u3002\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u76d1\u542c\u5176\u72b6\u6001\u53d8\u5316\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)(s.Z,{value:"classical",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aclass%20AccessibilityStatusExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20reduceMotionEnabled%3A%20false%2C%0A%20%20%20%20screenReaderEnabled%3A%20false%2C%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20_handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20_handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bthis.styles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20%20%20container%3A%20%7B%0A%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20status%3A%20%7B%0A%20%20%20%20%20%20margin%3A%2030%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%7D%0A%0Aexport%20default%20AccessibilityStatusExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"isboldtextenabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"isBoldTextEnabled()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static isBoldTextEnabled()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"iOS-Only.")," Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when bold text is enabled and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h3",{id:"isgrayscaleenabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static isGrayscaleEnabled()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"iOS-Only.")," Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when grayscale is enabled and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h3",{id:"isinvertcolorsenabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static isInvertColorsEnabled()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"iOS-Only.")," Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when invert colors is enabled and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h3",{id:"isreducemotionenabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static isReduceMotionEnabled()\n")),(0,r.kt)("p",null,"Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when reduce motion is enabled and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h3",{id:"isreducetransparencyenabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static isReduceTransparencyEnabled()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"iOS-Only.")," Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when a reduce transparency is enabled and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h3",{id:"isscreenreaderenabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static isScreenReaderEnabled()\n")),(0,r.kt)("p",null,"\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u5f53\u524d\u662f\u5426\u5f00\u542f\u3002\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u89e3\u6790\u503c\u4e3a\u4e00\u4e2a\u5e03\u5c14\u503c\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u8868\u793a\u5f00\u542f\u72b6\u6001\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u53cd\u4e4b\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addeventlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static addEventListener(eventName, handler)\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\uff0c\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boldTextChanged"),": iOS-only event. Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," when bold text is enabled and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grayscaleChanged"),": iOS-only event. Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," when a gray scale is enabled and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"invertColorsChanged"),": iOS-only event. Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," when invert colors is enabled and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reduceMotionChanged"),": Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',(0,r.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screenReaderChanged"),": \u8bfb\u5c4f\u5e94\u7528\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002\u4f20\u9012\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u4e3a\u5e03\u5c14\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"\u8868\u793a\u5f00\u542f\u72b6\u6001\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\u53cd\u4e4b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reduceTransparencyChanged"),": iOS-only event. Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," when reduce transparency is enabled and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"announcementFinished"),": \u4ec5 iOS \u53ef\u7528\u3002\u5728\u8bfb\u5c4f\u8f6f\u4ef6\u5b8c\u6210\u4e00\u6b21\u6717\u8bfb\u540e\u89e6\u53d1\u3002\u4f20\u9012\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u4e3a\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u542b\u4ee5\u4e0b\u4e24\u4e2a\u5b57\u6bb5\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"announcement"),": \u8bfb\u5c4f\u8f6f\u4ef6\u6240\u8bfb\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"success"),": \u6b64\u6b21\u6717\u8bfb\u662f\u5426\u6210\u529f\u5b8c\u6210\u3002")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setaccessibilityfocus"},(0,r.kt)("inlineCode",{parentName:"h3"},"setAccessibilityFocus()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static setAccessibilityFocus(reactTag)\n")),(0,r.kt)("p",null,"\u5c06\u8bfb\u5c4f\u8f6f\u4ef6\u7684\u7126\u70b9\u8bbe\u7f6e\u5230\u67d0\u4e2a react \u7ec4\u4ef6\u4e0a\u3002\u5728 Android \u7b49\u540c\u4e8e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent(reactTag, UIManager.AccessibilityEventTypes.typeViewFocused);"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": Make sure that any ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," you want to receive the accessibility focus has ",(0,r.kt)("inlineCode",{parentName:"p"},"accessible={true}"),".")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"announceforaccessibility"},(0,r.kt)("inlineCode",{parentName:"h3"},"announceForAccessibility()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static announceForAccessibility(announcement)\n")),(0,r.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u5b57\u7b26\u4e32\u7ed9\u8bfb\u5c4f\u5e94\u7528\u6717\u8bfb\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removeeventlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static removeEventListener(eventName, handler)\n")),(0,r.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9281-sunnylqm719"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(92.81%), ",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(7.19%)"))}h.isMDXComponent=!0}}]);