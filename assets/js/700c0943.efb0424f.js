/*! For license information please see 700c0943.efb0424f.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[69965],{87933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(24246),a=t(71670);const o={id:"custom-webview-android",title:"Custom WebView"},r=void 0,s={id:"custom-webview-android",title:"Custom WebView",description:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code.",source:"@site/versioned_docs/version-0.70/custom-webview-android.md",sourceDirName:".",slug:"/custom-webview-android",permalink:"/docs/0.70/custom-webview-android",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/custom-webview-android.md",tags:[],version:"0.70",frontMatter:{id:"custom-webview-android",title:"Custom WebView"}},l={},c=[{value:"Native Code",id:"native-code",level:2},{value:"Adding New Properties",id:"adding-new-properties",level:3},{value:"Adding New Events",id:"adding-new-events",level:3},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."}),"\n",(0,i.jsxs)(n.p,{children:["Before you do this, you should be familiar with the concepts in ",(0,i.jsx)(n.a,{href:"native-components-android",children:"native UI components"}),". You should also familiarise yourself with the ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/views/webview/ReactWebViewManager.java",children:"native code for web views"}),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."]}),"\n",(0,i.jsx)(n.h2,{id:"native-code",children:"Native Code"}),"\n",(0,i.jsxs)(n.p,{children:["To get started, you'll need to create a subclass of ",(0,i.jsx)(n.code,{children:"ReactWebViewManager"}),", ",(0,i.jsx)(n.code,{children:"ReactWebView"}),", and ",(0,i.jsx)(n.code,{children:"ReactWebViewClient"}),". In your view manager, you'll then need to override:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createReactWebViewInstance"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"getName"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"addEventEmitters"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@ReactModule(name = CustomWebViewManager.REACT_CLASS)\npublic class CustomWebViewManager extends ReactWebViewManager {\n  /* This name must match what we\'re referring to in JS */\n  protected static final String REACT_CLASS = "RCTCustomWebView";\n\n  protected static class CustomWebViewClient extends ReactWebViewClient { }\n\n  protected static class CustomWebView extends ReactWebView {\n    public CustomWebView(ThemedReactContext reactContext) {\n      super(reactContext);\n    }\n  }\n\n  @Override\n  protected ReactWebView createReactWebViewInstance(ThemedReactContext reactContext) {\n    return new CustomWebView(reactContext);\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n\n  @Override\n  protected void addEventEmitters(ThemedReactContext reactContext, WebView view) {\n    view.setWebViewClient(new CustomWebViewClient());\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You'll need to follow the usual steps to ",(0,i.jsx)(n.a,{href:"/docs/0.70/native-modules-android#register-the-module",children:"register the module"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"adding-new-properties",children:"Adding New Properties"}),"\n",(0,i.jsxs)(n.p,{children:["To add a new property, you'll need to add it to ",(0,i.jsx)(n.code,{children:"CustomWebView"}),", and then expose it in ",(0,i.jsx)(n.code,{children:"CustomWebViewManager"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class CustomWebViewManager extends ReactWebViewManager {\n  ...\n\n  protected static class CustomWebView extends ReactWebView {\n    public CustomWebView(ThemedReactContext reactContext) {\n      super(reactContext);\n    }\n\n    protected @Nullable String mFinalUrl;\n\n    public void setFinalUrl(String url) {\n        mFinalUrl = url;\n    }\n\n    public String getFinalUrl() {\n        return mFinalUrl;\n    }\n  }\n\n  ...\n\n  @ReactProp(name = "finalUrl")\n  public void setFinalUrl(WebView view, String url) {\n    ((CustomWebView) view).setFinalUrl(url);\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"adding-new-events",children:"Adding New Events"}),"\n",(0,i.jsx)(n.p,{children:"For events, you'll first need to make create event subclass."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// NavigationCompletedEvent.java\npublic class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {\n  private WritableMap mParams;\n\n  public NavigationCompletedEvent(int viewTag, WritableMap params) {\n    super(viewTag);\n    this.mParams = params;\n  }\n\n  @Override\n  public String getEventName() {\n    return "navigationCompleted";\n  }\n\n  @Override\n  public void dispatch(RCTEventEmitter rctEventEmitter) {\n    init(getViewTag());\n    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can trigger the event in your web view client. You can hook existing handlers if your events are based on them."}),"\n",(0,i.jsxs)(n.p,{children:["You should refer to ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/views/webview/ReactWebViewManager.java",children:"ReactWebViewManager.java"})," in the React Native codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {\n  private WritableMap mParams;\n\n  public NavigationCompletedEvent(int viewTag, WritableMap params) {\n    super(viewTag);\n    this.mParams = params;\n  }\n\n  @Override\n  public String getEventName() {\n    return "navigationCompleted";\n  }\n\n  @Override\n  public void dispatch(RCTEventEmitter rctEventEmitter) {\n    init(getViewTag());\n    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);\n  }\n}\n\n// CustomWebViewManager.java\nprotected static class CustomWebViewClient extends ReactWebViewClient {\n  @Override\n  public boolean shouldOverrideUrlLoading(WebView view, String url) {\n    boolean shouldOverride = super.shouldOverrideUrlLoading(view, url);\n    String finalUrl = ((CustomWebView) view).getFinalUrl();\n\n    if (!shouldOverride && url != null && finalUrl != null && new String(url).equals(finalUrl)) {\n      final WritableMap params = Arguments.createMap();\n      dispatchEvent(view, new NavigationCompletedEvent(view.getId(), params));\n    }\n\n    return shouldOverride;\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, you'll need to expose the events in ",(0,i.jsx)(n.code,{children:"CustomWebViewManager"})," through ",(0,i.jsx)(n.code,{children:"getExportedCustomDirectEventTypeConstants"}),". Note that currently, the default implementation returns ",(0,i.jsx)(n.code,{children:"null"}),", but this may change in the future."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class CustomWebViewManager extends ReactWebViewManager {\n  ...\n\n  @Override\n  public @Nullable\n  Map getExportedCustomDirectEventTypeConstants() {\n    Map<String, Object> export = super.getExportedCustomDirectEventTypeConstants();\n    if (export == null) {\n      export = MapBuilder.newHashMap();\n    }\n    export.put("navigationCompleted", MapBuilder.of("registrationName", "onNavigationCompleted"));\n    return export;\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,i.jsx)(n.p,{children:"To use your custom web view, you'll need to create a class for it. Your class must:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Export all the prop types from ",(0,i.jsx)(n.code,{children:"WebView.propTypes"})]}),"\n",(0,i.jsxs)(n.li,{children:["Return a ",(0,i.jsx)(n.code,{children:"WebView"})," component with the prop ",(0,i.jsx)(n.code,{children:"nativeConfig.component"})," set to your native component (see below)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To get your native component, you must use ",(0,i.jsx)(n.code,{children:"requireNativeComponent"}),": the same as for regular custom components. However, you must pass in an extra third argument, ",(0,i.jsx)(n.code,{children:"WebView.extraNativeComponentConfig"}),". This third argument contains prop types that are only required for native code."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import React, {Component, PropTypes} from 'react';\nimport {WebView, requireNativeComponent} from 'react-native';\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView {...this.props} nativeConfig={{component: RCTCustomWebView}} />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  WebView.extraNativeComponentConfig\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to add custom props to your native component, you can use ",(0,i.jsx)(n.code,{children:"nativeConfig.props"})," on the web view."]}),"\n",(0,i.jsxs)(n.p,{children:["For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",(0,i.jsx)(n.code,{children:"this.props"}),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",(0,i.jsx)(n.code,{children:"this.props"})," if it exists."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are unsure how something should be implemented from the JS side, look at ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/WebView/WebView.android.js",children:"WebView.android.js"})," in the React Native source."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func,\n  };\n\n  static defaultProps = {\n    finalUrl: 'about:blank',\n  };\n\n  _onNavigationCompleted = (event) => {\n    const {onNavigationCompleted} = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted,\n          },\n        }}\n      />\n    );\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Just like for regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",(0,i.jsx)(n.code,{children:"nativeOnly"})," property of the third argument previously mentioned. For event handlers, you have to use the value ",(0,i.jsx)(n.code,{children:"true"})," instead of a regular prop type."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you wanted to add an internal event handler called ",(0,i.jsx)(n.code,{children:"onScrollToBottom"}),", you would use,"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true,\n    },\n  }\n);\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},71426:(e,n,t)=>{var i=t(27378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,o={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,i)&&!l.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:s.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},24246:(e,n,t)=>{e.exports=t(71426)},71670:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>o});var i=t(27378);const a=i.createContext({});function o(e){const n=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||r:o(e),i.createElement(a.Provider,{value:s},n)}}}]);