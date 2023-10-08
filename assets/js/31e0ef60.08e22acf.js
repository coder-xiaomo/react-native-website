/*! For license information please see 31e0ef60.08e22acf.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[35050],{3642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(24246),i=t(71670);const o={id:"actionsheetios",title:"ActionSheetIOS"},c=void 0,r={unversionedId:"actionsheetios",id:"version-0.72/actionsheetios",title:"ActionSheetIOS",description:"\u663e\u793a\u4e00\u4e2a iOS \u539f\u751f\u7684Action Sheet\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-0.72/actionsheetios.md",sourceDirName:".",slug:"/actionsheetios",permalink:"/docs/actionsheetios",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/actionsheetios.md",tags:[],version:"0.72",frontMatter:{id:"actionsheetios",title:"ActionSheetIOS"},sidebar:"api",previous:{title:"ToastAndroid",permalink:"/docs/toastandroid"},next:{title:"DynamicColorIOS",permalink:"/docs/dynamiccolorios"}},l={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",level:3},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",level:3}];function a(e){const n=Object.assign({p:"p",a:"a",h2:"h2",div:"div",h1:"h1",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",hr:"hr"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u663e\u793a\u4e00\u4e2a iOS \u539f\u751f\u7684",(0,s.jsx)(n.a,{href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/",children:"Action Sheet"}),"\u7ec4\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.div,{class:"snack-player","data-snack-name":"ActionSheetIOS","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20ActionSheetIOS%2C%20Button%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bresult%2C%20setResult%5D%20%3D%20useState(%5C%22%F0%9F%94%AE%5C%22)%3B%5Cn%20%20const%20onPress%20%3D%20()%20%3D%3E%5Cn%20%20%20%20ActionSheetIOS.showActionSheetWithOptions(%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20options%3A%20%5B%5C%22Cancel%5C%22%2C%20%5C%22Generate%20number%5C%22%2C%20%5C%22Reset%5C%22%5D%2C%5Cn%20%20%20%20%20%20%20%20destructiveButtonIndex%3A%202%2C%5Cn%20%20%20%20%20%20%20%20cancelButtonIndex%3A%200%2C%5Cn%20%20%20%20%20%20%20%20userInterfaceStyle%3A%20'dark'%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20buttonIndex%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20if%20(buttonIndex%20%3D%3D%3D%200)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%2F%2F%20cancel%20action%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%201)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setResult(Math.floor(Math.random()%20*%20100)%20%2B%201)%3B%5Cn%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%202)%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setResult(%5C%22%F0%9F%94%AE%5C%22)%3B%5Cn%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20)%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.result%7D%3E%7Bresult%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%20onPress%3D%7BonPress%7D%20title%3D%5C%22Show%20Action%20Sheet%5C%22%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20result%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2064%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-device-android":"pixel4","data-snack-device-ios":"iphone12"}),"\n",(0,s.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"showactionsheetwithoptions",children:(0,s.jsx)(n.code,{children:"showActionSheetWithOptions()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static showActionSheetWithOptions(options, callback)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 iOS \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a ActionSheet \u5f39\u51fa\u6846\uff0c\u5176\u4e2d",(0,s.jsx)(n.code,{children:"options"}),"\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u5c5e\u6027\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u4e00\u9879\u6216\u591a\u9879\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," \uff08\u5b57\u7b26\u4e32\u6570\u7ec4\uff09 - \u4e00\u7ec4\u6309\u94ae\u7684\u6587\u5b57\uff08\u5fc5\u9009\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cancelButtonIndex"})," \uff08\u6574\u578b\uff09 - \u53d6\u6d88\u6027\u8d28\u7684\u6309\u94ae\u5728",(0,s.jsx)(n.code,{children:"options"}),"\u4e2d\u7684\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"destructiveButtonIndex"})," \uff08\u6574\u578b\uff09 - \u5220\u9664\u6027\u8d28\u7684\u6309\u94ae\u5728",(0,s.jsx)(n.code,{children:"options"}),"\u4e2d\u7684\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"title"})," \uff08\u5b57\u7b26\u4e32\uff09 - \u5f39\u51fa\u6846\u9876\u90e8\u7684\u6807\u9898"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message"})," \uff08\u5b57\u7b26\u4e32\uff09 - \u5f39\u51fa\u6846\u9876\u90e8\u6807\u9898\u4e0b\u65b9\u7684\u4fe1\u606f"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"anchor"})," (number) - the node to which the action sheet should be anchored (used for iPad)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tintColor"})," (\u5b57\u7b26\u4e32) - \u6307\u5b9a\u5220\u9664\u6027\u8d28\u7684\u6309\u94ae\u7684\u6587\u5b57\u7684",(0,s.jsx)(n.a,{href:"/docs/colors",children:"\u989c\u8272"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"disabledButtonIndices"})," (array of numbers) - a list of button indices which should be disabled"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"userInterfaceStyle"})," (string) - the interface style used for the action sheet, can be set to ",(0,s.jsx)(n.code,{children:"light"})," or ",(0,s.jsx)(n.code,{children:"dark"}),", otherwise the default system style will be used"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"'callback'\u51fd\u6570\u5219\u4ec5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u6240\u70b9\u51fb\u6309\u94ae\u7684\u7d22\u5f15\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ActionSheetIOS.showActionSheetWithOptions({\n  options: ['\u53d6\u6d88', '\u5220\u9664'],\n  destructiveButtonIndex: 1,\n  cancelButtonIndex: 0,\n},\n(buttonIndex) => {\nif (buttonIndex === 1) { /* \u5f53\u63a5\u6536\u5230\u7684\u7d22\u5f15\u4e3a1\uff0c\u5373\u70b9\u51fb\u4e86\u5220\u9664\u6309\u94ae\u65f6\uff0c\u6267\u884c\u5bf9\u5e94\u64cd\u4f5c */ }\n});\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"showshareactionsheetwithoptions",children:(0,s.jsx)(n.code,{children:"showShareActionSheetWithOptions()"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 iOS \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u5206\u4eab\u5f39\u51fa\u6846\uff0c\u5176\u4e2d",(0,s.jsx)(n.code,{children:"options"}),"\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u5c5e\u6027\u5305\u542b\u4ee5\u4e0b\u51e0\u9879\uff08\u5fc5\u987b\u81f3\u5c11\u6709 message \u6216 url\uff09:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"})," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684 URL \u5730\u5740"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message"})," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684\u4fe1\u606f"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subject"})," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684\u4fe1\u606f\u4e3b\u9898"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"excludedActivityTypes"})," \uff08\u6570\u7ec4\uff09 - \u6307\u5b9a\u5728 actionsheet \u4e2d\u4e0d\u663e\u793a\u7684\u6d3b\u52a8"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\uff1a\u5982\u679c",(0,s.jsx)(n.code,{children:"url"}),"\u6307\u5411\u672c\u5730\u6587\u4ef6\uff0c\u6216\u8005\u662f\u4e00\u4e2a base64 \u7f16\u7801\u7684 url\uff0c\u5219\u4f1a\u76f4\u63a5\u8bfb\u53d6\u5e76\u5206\u4eab\u76f8\u5e94\u7684\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\u6765\u5206\u4eab\u56fe\u7247\u3001\u89c6\u9891\u4ee5\u53ca PDF \u6587\u4ef6\u7b49\u3002If ",(0,s.jsx)(n.code,{children:"url"})," points to a remote file or address it must conform to URL format as described in ",(0,s.jsx)(n.a,{href:"https://www.ietf.org/rfc/rfc2396.txt",children:"RFC 2396"}),". For example, a web URL without a proper protocol (HTTP/HTTPS) will not be shared."]}),"\n",(0,s.jsxs)(n.p,{children:["'failureCallback'\u51fd\u6570\u4ec5\u63a5\u53d7\u4e00\u4e2a\u9519\u8bef\u5bf9\u8c61\u53c2\u6570\u3002\u6b64\u5bf9\u8c61\u4e2d\u4ec5\u5305\u542b\u4e00\u4e2a\u53ef\u9009\u7684",(0,s.jsx)(n.code,{children:"stack"}),"\u5c5e\u6027\uff0c\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"'successCallback'\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8868\u793a\u6210\u529f\u4e0e\u5426\u7684\u5e03\u5c14\u503c"}),"\n",(0,s.jsx)(n.li,{children:"\u6210\u529f\u7684\u8bdd\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u5206\u4eab\u65b9\u5f0f\u7684\u5b57\u7b26\u4e32"}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},71426:(e,n,t)=>{var s=t(27378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,o={},d=null,a=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,s)&&!l.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:i,type:e,key:d,ref:a,props:o,_owner:r.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>o});var s=t(27378);const i=s.createContext({});function o(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:o(e),s.createElement(i.Provider,{value:r},n)}}}]);