/*! For license information please see c935642e.1b398f30.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[80813],{26574:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var c=i(24246),t=i(71670);const o={id:"netinfo",title:"NetInfo"},d=void 0,s={unversionedId:"netinfo",id:"netinfo",title:"NetInfo",description:"\u5df2\u8fc7\u65f6\u3002 Use react-native-community/react-native-netinfo instead.",source:"@site/../cndocs/netinfo.md",sourceDirName:".",slug:"/netinfo",permalink:"/docs/next/netinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/netinfo.md",tags:[],version:"current",frontMatter:{id:"netinfo",title:"NetInfo"}},r={},l=[{value:"ConnectionType \u679a\u4e3e\u503c",id:"connectiontype-\u679a\u4e3e\u503c",level:3},{value:"EffectiveConnectionType \u679a\u4e3e\u503c",id:"effectiveconnectiontype-\u679a\u4e3e\u503c",level:3},{value:"Android",id:"android",level:3},{value:"\u67e5\u770b\u65b9\u6cd5",id:"\u67e5\u770b\u65b9\u6cd5",level:3},{value:"\u67e5\u770b\u5c5e\u6027",id:"\u67e5\u770b\u5c5e\u6027",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3},{value:"<code>getConnectionInfo()</code>",id:"getconnectioninfo",level:3},{value:"<code>isConnectionExpensive()</code>",id:"isconnectionexpensive",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>isConnected</code>",id:"isconnected",level:3}];function h(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",hr:"hr",h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u5df2\u8fc7\u65f6\u3002"})," Use ",(0,c.jsx)(n.a,{href:"https://github.com/react-native-community/react-native-netinfo",children:"react-native-community/react-native-netinfo"})," instead."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7 NetInfo \u6a21\u5757\u53ef\u4ee5\u83b7\u53d6\u8bbe\u5907\u5f53\u524d\u7684\u8054\u7f51\u72b6\u6001\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"NetInfo.getConnectionInfo().then((connectionInfo) => {\n  console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);\n});\nfunction handleFirstConnectivityChange(connectionInfo) {\n  console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);\n  NetInfo.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n"})}),"\n",(0,c.jsx)(n.h3,{id:"connectiontype-\u679a\u4e3e\u503c",children:"ConnectionType \u679a\u4e3e\u503c"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ConnectionType"}),"\u63cf\u8ff0\u4e86\u8bbe\u5907\u8054\u7f51\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ConnectionType"}),"\u6709\u5982\u4e0b\u8de8\u5e73\u53f0\u53ef\u7528\u7684\u503c:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"none"})," - \u8bbe\u5907\u5904\u4e8e\u79bb\u7ebf\u72b6\u6001"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"wifi"})," - \u8bbe\u5907\u901a\u8fc7 wifi \u8054\u7f51\uff0c\u6216\u8005\u8bbe\u5907\u662f iOS \u6a21\u62df\u5668"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"cellular"})," - \u8bbe\u5907\u901a\u8fc7\u8702\u7a9d\u6570\u636e\u6d41\u91cf\u8054\u7f51"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"unknown"})," - \u8054\u7f51\u72b6\u6001\u5f02\u5e38"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ConnectionType"}),"\u8fd8\u6709\u5982\u4e0b\u4ec5\u5728 Android \u5e73\u53f0\u4e0a\u53ef\u7528\u7684\u503c:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"bluetooth"})," - \u8bbe\u5907\u901a\u8fc7\u84dd\u7259\u534f\u8bae\u8054\u7f51"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ethernet"})," - \u8bbe\u5907\u901a\u8fc7\u4ee5\u592a\u7f51\u534f\u8bae\u8054\u7f51"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"wimax"})," - \u8bbe\u5907\u901a\u8fc7 WiMAX \u534f\u8bae\u8054\u7f51"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"effectiveconnectiontype-\u679a\u4e3e\u503c",children:"EffectiveConnectionType \u679a\u4e3e\u503c"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"EffectiveConnectionType"}),"\u6709\u5982\u4e0b\u8de8\u5e73\u53f0\u53ef\u7528\u7684\u503c:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"2g"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"3g"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"4g"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"unknown"})}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u5728 Android \u4e0a\u83b7\u53d6\u8054\u7f51\u72b6\u6001\uff0c\u8fd8\u9700\u8981\u5728",(0,c.jsx)(n.code,{children:"AndroidManifest.xml"}),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u6743\u9650\u8bf7\u6c42\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />'})}),"\n",(0,c.jsx)(n.h3,{id:"\u67e5\u770b\u65b9\u6cd5",children:"\u67e5\u770b\u65b9\u6cd5"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs/next/netinfo#addeventlistener",children:(0,c.jsx)(n.code,{children:"addEventListener"})})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs/next/netinfo#removeeventlistener",children:(0,c.jsx)(n.code,{children:"removeEventListener"})})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs/next/netinfo#getconnectioninfo",children:(0,c.jsx)(n.code,{children:"getConnectionInfo"})})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs/next/netinfo#isconnectionexpensive",children:(0,c.jsx)(n.code,{children:"isConnectionExpensive"})})}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u67e5\u770b\u5c5e\u6027",children:"\u67e5\u770b\u5c5e\u6027"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/docs/next/netinfo#isconnected",children:(0,c.jsx)(n.code,{children:"isConnected"})})}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,c.jsx)(n.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,c.jsx)(n.h3,{id:"addeventlistener",children:(0,c.jsx)(n.code,{children:"addEventListener()"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"NetInfo.addEventListener(eventName, handler);\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,c.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,c.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"eventName"}),(0,c.jsx)(n.td,{children:"enum(connectionChange, change)"}),(0,c.jsx)(n.td,{children:"\u662f"}),(0,c.jsx)(n.td,{children:"\u4e8b\u4ef6\u540d"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"handler"}),(0,c.jsx)(n.td,{children:"function"}),(0,c.jsx)(n.td,{children:"\u662f"}),(0,c.jsx)(n.td,{children:"\u76d1\u542c\u51fd\u6570"})]})]})]}),"\n",(0,c.jsx)(n.p,{children:"\u652f\u6301\u7684\u4e8b\u4ef6\u540d\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"connectionChange"}),"\uff1a\u5f53\u8054\u7f51\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002\u4f20\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u6709\u4e0b\u5217\u5c5e\u6027\uff1a","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"type"}),"\uff1a \u4e0a\u9762\u6240\u5217\u51fa\u7684",(0,c.jsx)(n.code,{children:"ConnectionType"}),"\u503c"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"effectiveType"}),": \u4e0a\u9762\u6240\u5217\u51fa\u7684",(0,c.jsx)(n.code,{children:"EffectiveConnectionType"}),"\u503c"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"change"}),": \u8fd9\u4e00\u4e8b\u4ef6\u5df2\u8fc7\u65f6\u3002\u8bf7\u4f7f\u7528",(0,c.jsx)(n.code,{children:"connectionChange"}),"\u4ee3\u66ff\u3002\u5f53\u8054\u7f51\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"removeeventlistener",children:(0,c.jsx)(n.code,{children:"removeEventListener()"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"NetInfo.removeEventListener(eventName, handler);\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u79fb\u9664\u8054\u7f51\u72b6\u6001\u6539\u53d8\u7684\u76d1\u542c\u51fd\u6570\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,c.jsx)(n.th,{children:"\u5fc5\u9700"}),(0,c.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"eventName"}),(0,c.jsx)(n.td,{children:"enum(connectionChange, change)"}),(0,c.jsx)(n.td,{children:"\u662f"}),(0,c.jsx)(n.td,{children:"\u4e8b\u4ef6\u540d"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"handler"}),(0,c.jsx)(n.td,{children:"function"}),(0,c.jsx)(n.td,{children:"\u662f"}),(0,c.jsx)(n.td,{children:"\u76d1\u542c\u51fd\u6570"})]})]})]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"getconnectioninfo",children:(0,c.jsx)(n.code,{children:"getConnectionInfo()"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"NetInfo.getConnectionInfo();\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u89e3\u6790\u503c\u4e3a\u5e26\u6709",(0,c.jsx)(n.code,{children:"type"}),"\u548c",(0,c.jsx)(n.code,{children:"effectiveType"}),"\u5c5e\u6027\u7684\u5bf9\u8c61\u3002\u5176\u4e2d",(0,c.jsx)(n.code,{children:"type"}),"\u5c5e\u6027\u7684\u503c\u4e3a",(0,c.jsx)(n.a,{href:"/docs/next/netinfo#connectiontype-enum",children:(0,c.jsx)(n.code,{children:"ConnectionType"})})," \uff0c\u800c",(0,c.jsx)(n.code,{children:"effectiveType"}),"\u5c5e\u6027\u7684\u503c\u4e3a",(0,c.jsx)(n.a,{href:"/docs/next/netinfo#effectiveconnectiontype-enum",children:(0,c.jsx)(n.code,{children:"EffectiveConnectionType"})}),")\u3002"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"isconnectionexpensive",children:(0,c.jsx)(n.code,{children:"isConnectionExpensive()"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"NetInfo.isConnectionExpensive();\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4ec5 Android \u53ef\u7528\u3002\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u6d3b\u52a8\u7684\u8fde\u63a5\u662f\u5426\u8ba1\u8d39\u3002\u5982\u679c\u5f53\u524d\u8fde\u63a5\u662f\u901a\u8fc7\u79fb\u52a8\u6570\u636e\u7f51\u7edc\uff0c\u6216\u8005\u901a\u8fc7\u57fa\u4e8e\u79fb\u52a8\u6570\u636e\u7f51\u7edc\u6240\u521b\u5efa\u7684 wifi \u70ed\u70b9\uff0c\u6216\u662f\u5927\u91cf\u6d88\u8017\u7535\u6c60\u7b49\u7b49\uff0c\u90fd\u6709\u53ef\u80fd\u88ab\u5224\u5b9a\u4e3a\u8ba1\u8d39\u7684\u6570\u636e\u8fde\u63a5\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"NetInfo.isConnectionExpensive()\n.then(isConnectionExpensive => {\n  console.log('Connection is ' + (isConnectionExpensive ? 'Expensive' : 'Not Expensive'));\n})\n.catch(error => {\n  console.error(error);\n});\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,c.jsx)(n.h3,{id:"isconnected",children:(0,c.jsx)(n.code,{children:"isConnected"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u53ef\u7528\u3002\u4ee5\u5f02\u6b65\u65b9\u5f0f\u83b7\u53d6\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u8bbe\u5907\u662f\u5426\u8054\u7f51\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"NetInfo.isConnected.fetch().then(isConnected => {\n  console.log('First, is ' + (isConnected ? 'online' : 'offline'));\n});\nfunction handleFirstConnectivityChange(isConnected) {\n  console.log('Then, is ' + (isConnected ? 'online' : 'offline'));\n  NetInfo.isConnected.removeEventListener(\n    'connectionChange',\n    handleFirstConnectivityChange\n  );\n}\nNetInfo.isConnected.addEventListener(\n  'connectionChange',\n  handleFirstConnectivityChange\n);\n"})})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}},71426:(e,n,i)=>{var c=i(27378),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,s=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var c,o={},l=null,h=null;for(c in void 0!==i&&(l=""+i),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)d.call(n,c)&&!r.hasOwnProperty(c)&&(o[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===o[c]&&(o[c]=n[c]);return{$$typeof:t,type:e,key:l,ref:h,props:o,_owner:s.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},24246:(e,n,i)=>{e.exports=i(71426)},71670:(e,n,i)=>{i.d(n,{Zo:()=>s,ah:()=>o});var c=i(27378);const t=c.createContext({});function o(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function s({components:e,children:n,disableParentContext:i}){let s;return s=i?"function"==typeof e?e({}):e||d:o(e),c.createElement(t.Provider,{value:s},n)}}}]);