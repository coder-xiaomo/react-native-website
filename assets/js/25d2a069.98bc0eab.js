/*! For license information please see 25d2a069.98bc0eab.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[55894],{90355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=n(24246),r=n(71670);const l={id:"alertios",title:"AlertIOS"},d=void 0,i={unversionedId:"alertios",id:"version-0.70/alertios",title:"AlertIOS",description:"AlertIOS\u7528\u4e8e\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u901a\u77e5\u7528\u6237\u4e00\u4e9b\u4fe1\u606f\u6216\u662f\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e9b\u6587\u5b57\u3002",source:"@site/versioned_docs/version-0.70/alertios.md",sourceDirName:".",slug:"/alertios",permalink:"/docs/0.70/alertios",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/alertios.md",tags:[],version:"0.70",frontMatter:{id:"alertios",title:"AlertIOS"}},c={},h=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>alert()</code>",id:"alert",level:3},{value:"<code>prompt()</code>",id:"prompt",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"AlertType",id:"alerttype",level:3},{value:"AlertButtonStyle",id:"alertbuttonstyle",level:3},{value:"ButtonsArray",id:"buttonsarray",level:3}];function a(e){const t=Object.assign({p:"p",code:"code",pre:"pre",a:"a",hr:"hr",h1:"h1",h2:"h2",h3:"h3",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"AlertIOS"}),"\u7528\u4e8e\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u901a\u77e5\u7528\u6237\u4e00\u4e9b\u4fe1\u606f\u6216\u662f\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e9b\u6587\u5b57\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u6846\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"AlertIOS.alert(\n 'Sync Complete',\n 'All your data are belong to us.'\n);\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5f39\u51fa\u4e00\u4e2a\u5e26\u8f93\u5165\u6846\u7684 iOS \u63d0\u793a\u6846\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"AlertIOS.prompt(\n  'Enter a value',\n  null,\n  text => console.log(\"You entered \"+text)\n);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u5c24\u5176\u662f\u4ec5\u4ec5\u663e\u793a\u4e00\u4e2a\u9759\u6001\u7684\u63d0\u793a\u6846\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528\u8de8\u5e73\u53f0\u7684",(0,s.jsx)(t.a,{href:"/docs/0.70/alert",children:(0,s.jsx)(t.code,{children:"Alert"})}),"\u3002"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,s.jsx)(t.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,s.jsx)(t.h3,{id:"alert",children:(0,s.jsx)(t.code,{children:"alert()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"static alert(title: string, [message]: string, [callbackOrButtons]: ?(() => void), ButtonsArray, [type]: AlertType): [object Object]\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u521b\u5efa\u5e76\u663e\u793a\u4e00\u4e2a\u63d0\u793a\u6846\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"title"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"The dialog's title. Passing null or '' will hide the title."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"message"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsx)(t.td,{children:"An optional message that appears below the dialog's title."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"callbackOrButtons"}),(0,s.jsxs)(t.td,{children:["?(() => void),",(0,s.jsx)(t.a,{href:"/docs/0.70/alertios#buttonsarray",children:"ButtonsArray"})]}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsxs)(t.td,{children:["This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called when the user taps 'OK'. If passed an array of button configurations, each button should include a ",(0,s.jsx)(t.code,{children:"text"})," key, as well as optional ",(0,s.jsx)(t.code,{children:"onPress"})," and ",(0,s.jsx)(t.code,{children:"style"})," keys. ",(0,s.jsx)(t.code,{children:"style"})," should be one of 'default', 'cancel' or 'destructive'."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/0.70/alertios#alerttype",children:"AlertType"})}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsx)(t.td,{children:"Deprecated, do not use."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Example with custom buttons:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"AlertIOS.alert(\n  'Update available',\n  'Keep your app up to date to enjoy the latest features',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel',\n    },\n    {\n      text: 'Install',\n      onPress: () => console.log('Install Pressed'),\n    },\n  ],\n);\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"prompt",children:(0,s.jsx)(t.code,{children:"prompt()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"static prompt(title: string, [message]: string, [callbackOrButtons]: ?((text: string) => void), ButtonsArray, [type]: AlertType, [defaultValue]: string, [keyboardType]: string): [object Object]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Create and display a prompt to enter some text."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u5fc5\u9700"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"title"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u662f"}),(0,s.jsx)(t.td,{children:"The dialog's title."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"message"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsx)(t.td,{children:"An optional message that appears above the text input."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"callbackOrButtons"}),(0,s.jsxs)(t.td,{children:["?((text: string) => void),",(0,s.jsx)(t.a,{href:"/docs/0.70/alertios#buttonsarray",children:"ButtonsArray"})]}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsxs)(t.td,{children:["This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called with the prompt's value when the user taps 'OK'. If passed an array of button configurations, each button should include a ",(0,s.jsx)(t.code,{children:"text"})," key, as well as optional ",(0,s.jsx)(t.code,{children:"onPress"})," and ",(0,s.jsx)(t.code,{children:"style"})," keys (see example). ",(0,s.jsx)(t.code,{children:"style"})," should be one of 'default', 'cancel' or 'destructive'."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/0.70/alertios#alerttype",children:"AlertType"})}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsx)(t.td,{children:"This configures the text input. One of 'plain-text', 'secure-text' or 'login-password'."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"defaultValue"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsx)(t.td,{children:"The default text in text input."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"keyboardType"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"\u5426"}),(0,s.jsx)(t.td,{children:"The keyboard type of first text field(if exists). One of 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter' or 'web-search'."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Example with custom buttons:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"AlertIOS.prompt(\n  'Enter password',\n  'Enter your password to claim your $1.5B in lottery winnings',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel',\n    },\n    {\n      text: 'OK',\n      onPress: password =>\n        console.log('OK Pressed, password: ' + password),\n    },\n  ],\n  'secure-text',\n);\n"})}),"\n",(0,s.jsx)(t.p,{children:","}),"\n",(0,s.jsx)(t.p,{children:"Example with the default button and a custom callback:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"AlertIOS.prompt(\n  'Update username',\n  null,\n  text => console.log('Your username is ' + text),\n  null,\n  'default',\n);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u7c7b\u578b\u5b9a\u4e49",children:"\u7c7b\u578b\u5b9a\u4e49"}),"\n",(0,s.jsx)(t.h3,{id:"alerttype",children:"AlertType"}),"\n",(0,s.jsx)(t.p,{children:"An Alert button type"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"$Enum"})})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u5e38\u91cf\uff1a"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"default"}),(0,s.jsx)(t.td,{children:"Default alert with no inputs"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"plain-text"}),(0,s.jsx)(t.td,{children:"Plain text input alert"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"secure-text"}),(0,s.jsx)(t.td,{children:"Secure text input alert"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"login-password"}),(0,s.jsx)(t.td,{children:"Login and password alert"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"alertbuttonstyle",children:"AlertButtonStyle"}),"\n",(0,s.jsx)(t.p,{children:"An Alert button style"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"$Enum"})})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u5e38\u91cf\uff1a"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"default"}),(0,s.jsx)(t.td,{children:"Default button style"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"cancel"}),(0,s.jsx)(t.td,{children:"Cancel button style"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"destructive"}),(0,s.jsx)(t.td,{children:"Destructive button style"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"buttonsarray",children:"ButtonsArray"}),"\n",(0,s.jsx)(t.p,{children:"Array or buttons"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"\u7c7b\u578b"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:"Array"})})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u5c5e\u6027\uff1a"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[text]"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Button label"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[onPress]"}),(0,s.jsx)(t.td,{children:"function"}),(0,s.jsx)(t.td,{children:"Callback function when button pressed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[style]"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/0.70/alertios#alertbuttonstyle",children:"AlertButtonStyle"})}),(0,s.jsx)(t.td,{children:"Button style"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u5e38\u91cf\uff1a"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:"Button label"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onPress"}),(0,s.jsx)(t.td,{children:"Callback function when button pressed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"style"}),(0,s.jsx)(t.td,{children:"Button style"})]})]})]})]})}const o=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},71426:(e,t,n)=>{var s=n(27378),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var s,l={},h=null,a=null;for(s in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(a=t.ref),t)d.call(t,s)&&!c.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:r,type:e,key:h,ref:a,props:l,_owner:i.current}}t.Fragment=l,t.jsx=h,t.jsxs=h},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>l});var s=n(27378);const r=s.createContext({});function l(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||d:l(e),s.createElement(r.Provider,{value:i},t)}}}]);