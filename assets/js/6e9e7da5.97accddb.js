/*! For license information please see 6e9e7da5.97accddb.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[58258],{54503:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=i(24246),s=i(71670);const o={id:"removing-default-permissions",title:"\u79fb\u9664\u4e0d\u9700\u8981\u7684\u6743\u9650"},t=void 0,d={unversionedId:"removing-default-permissions",id:"version-0.70/removing-default-permissions",title:"\u79fb\u9664\u4e0d\u9700\u8981\u7684\u6743\u9650",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u7ed9\u6700\u7ec8\u6253\u5305\u7684 APK \u52a0\u5165\u4e00\u4e9b\u6743\u9650\u7533\u8bf7\uff0c\u5177\u4f53\u5982\u4e0b\uff1a",source:"@site/versioned_docs/version-0.70/removing-default-permissions.md",sourceDirName:".",slug:"/removing-default-permissions",permalink:"/docs/0.70/removing-default-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/removing-default-permissions.md",tags:[],version:"0.70",frontMatter:{id:"removing-default-permissions",title:"\u79fb\u9664\u4e0d\u9700\u8981\u7684\u6743\u9650"}},a={},c=[{value:"\u63d0\u793a",id:"\u63d0\u793a",level:2}];function l(e){const n=Object.assign({p:"p",ul:"ul",li:"li",ol:"ol",code:"code",pre:"pre",h2:"h2"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u7ed9\u6700\u7ec8\u6253\u5305\u7684 APK \u52a0\u5165\u4e00\u4e9b\u6743\u9650\u7533\u8bf7\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"android.permission.INTERNET - \u8c03\u8bd5\u6a21\u5f0f\u6240\u9700\u3002"}),"\n",(0,r.jsx)(n.li,{children:"android.permission.SYSTEM_ALERT_WINDOW - \u8c03\u8bd5\u6a21\u5f0f\u6240\u9700\u3002"}),"\n",(0,r.jsx)(n.li,{children:"android.permission.READ_PHONE_STATE - \u975e\u5fc5\u9700\u3002"}),"\n",(0,r.jsx)(n.li,{children:"android.permission.WRITE_EXTERNAL_STORAGE - \u975e\u5fc5\u9700\u3002"}),"\n",(0,r.jsx)(n.li,{children:"android.permission.READ_EXTERNAL_STORAGE - \u975e\u5fc5\u9700\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e9b\u6743\u9650\u7533\u8bf7\u4f1a\u5728\u7528\u6237\u5b89\u88c5\u6216\u8fd0\u884c\u65f6\u5f39\u51fa\u63d0\u793a\u6253\u65ad\u7528\u6237\u751a\u81f3\u4f7f\u7528\u6237\u611f\u5230\u53cd\u611f\uff0c\u6240\u4ee5\u6211\u4eec\u5e94\u8be5\u5c3d\u91cf\u79fb\u9664\u4e0d\u5fc5\u8981\u7684\u6743\u9650\u7533\u8bf7\uff0c\u4ee5\u6539\u8fdb\u7528\u6237\u4f53\u9a8c\u548c\u63d0\u5347\u7528\u6237\u597d\u611f\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u9996\u5148\u53ef\u4ee5\u8003\u8651\u79fb\u9664",(0,r.jsx)(n.code,{children:"READ_PHONE_STATE"}),"\u3001",(0,r.jsx)(n.code,{children:"WRITE_EXTERNAL_STORAGE"}),"\u548c ",(0,r.jsx)(n.code,{children:"READ_EXTERNAL_STORAGE"}),"\u4e09\u9879\u975e\u5fc5\u9700\u7684\u6743\u9650\u3002\u5373\u4fbf\u4f60\u4f7f\u7528\u4e86",(0,r.jsx)(n.code,{children:"AsyncStorage"}),"\u4e5f\u4e0d\u9700\u8981\u8fd9\u4e09\u4e2a\u6743\u9650\uff0c\u6240\u4ee5\u79fb\u9664\u662f\u5f88\u5b89\u5168\u7684\u3002\u5f53\u4f60\u4ee5\u540e\u9700\u8981\u4f7f\u7528\u65f6\uff0c\u8fd8\u53ef\u4ee5\u518d\u52a0\u56de\u6765\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6253\u5f00",(0,r.jsx)(n.code,{children:"android/app/src/main/AndroidManifest.xml"}),"\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Even though these three permissions are not listed in the manifest they get added in. We add the three permissions with ",(0,r.jsx)(n.code,{children:'tools:node="remove"'}),' attribute, to make sure it gets removed during build. Note that the package identifier will be different, for below it is "com.myapp" because the project was created with ',(0,r.jsx)(n.code,{children:"npx react-native init myapp"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.myappid"\n+   xmlns:tools="http://schemas.android.com/tools"\n    >\n\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />\n+   <uses-permission tools:node="remove" android:name="android.permission.READ_PHONE_STATE" />\n+   <uses-permission tools:node="remove" android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n+   <uses-permission tools:node="remove" android:name="android.permission.READ_EXTERNAL_STORAGE" />\n\n    <application\n      android:name=".MainApplication"\n      android:label="@string/app_name"\n      android:icon="@mipmap/ic_launcher"\n      android:allowBackup="false"\n      android:theme="@style/AppTheme">\n      <activity\n        android:name=".MainActivity"\n        android:label="@string/app_name"\n        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"\n        android:windowSoftInputMode="adjustResize">\n        <intent-filter>\n            <action android:name="android.intent.action.MAIN" />\n            <category android:name="android.intent.category.LAUNCHER" />\n        </intent-filter>\n      </activity>\n      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />\n    </application>\n\n</manifest>\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["That's it. We did not remove the ",(0,r.jsx)(n.code,{children:"INTERNET"})," permission as pretty much all apps use it. Now whenever you create a production APK all these 4 permissions will be removed. When you create a debug APK (",(0,r.jsx)(n.code,{children:"npx react-native run-android"}),") it will install the APK with all four permissions removed."]}),"\n",(0,r.jsx)(n.h2,{id:"\u63d0\u793a",children:"\u63d0\u793a"}),"\n",(0,r.jsx)(n.p,{children:'If your App is free to use in the App-Store and there is no "In-App-Purchase" possible in your App, you also can remove:'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"android.vending.CHECK_LICENSE"}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},71426:(e,n,i)=>{var r=i(27378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var r,o={},c=null,l=null;for(r in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)t.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:d.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},24246:(e,n,i)=>{e.exports=i(71426)},71670:(e,n,i)=>{i.d(n,{Zo:()=>d,ah:()=>o});var r=i(27378);const s=r.createContext({});function o(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function d({components:e,children:n,disableParentContext:i}){let d;return d=i?"function"==typeof e?e({}):e||t:o(e),r.createElement(s.Provider,{value:d},n)}}}]);