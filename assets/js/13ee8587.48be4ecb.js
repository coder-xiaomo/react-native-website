/*! For license information please see 13ee8587.48be4ecb.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[36713],{80493:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=t(24246),r=t(71670),i=t(48375),o=t(86386),c=t(11674);const l={id:"integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment"},s=void 0,d={id:"integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment",description:"\u4e0e\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210\u6307\u5357\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06\u5168\u5c4f React Native \u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a Activity \u96c6\u6210\u5230\u73b0\u6709 Android \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u8981\u5728\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u7684 Fragments \u4e2d\u4f7f\u7528 React Native \u7ec4\u4ef6\uff0c\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u8bbe\u7f6e\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u5b83\u5141\u8bb8\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u5c06 React Native \u7ec4\u4ef6\u4e0e Activity \u4e2d\u7684\u539f\u751f Fragments \u96c6\u6210\u5728\u4e00\u8d77\u3002",source:"@site/versioned_docs/version-0.70/integration-with-android-fragment.md",sourceDirName:".",slug:"/integration-with-android-fragment",permalink:"/docs/0.70/integration-with-android-fragment",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/integration-with-android-fragment.md",tags:[],version:"0.70",frontMatter:{id:"integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment"},sidebar:"docs",previous:{title:"\u96c6\u6210\u5230\u73b0\u6709\u539f\u751f\u5e94\u7528",permalink:"/docs/0.70/integration-with-existing-apps"},next:{title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",permalink:"/docs/0.70/building-for-tv"}},u={},p=[{value:"1. \u5c06 React Native \u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",id:"1-\u5c06-react-native-\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"2. \u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0e React Native Fragment \u96c6\u6210",id:"2-\u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0e-react-native-fragment-\u96c6\u6210",level:3},{value:"3. \u4e3a React Native Fragment \u6dfb\u52a0 FrameLayout",id:"3-\u4e3a-react-native-fragment-\u6dfb\u52a0-framelayout",level:3},{value:"4. \u5c06 React Native Fragment \u6dfb\u52a0\u5230 FrameLayout",id:"4-\u5c06-react-native-fragment-\u6dfb\u52a0\u5230-framelayout",level:3},{value:"5. \u6d4b\u8bd5\u4f60\u7684\u96c6\u6210",id:"5-\u6d4b\u8bd5\u4f60\u7684\u96c6\u6210",level:3},{value:"6. \u9644\u52a0\u8bbe\u7f6e - \u539f\u751f\u6a21\u5757",id:"6-\u9644\u52a0\u8bbe\u7f6e---\u539f\u751f\u6a21\u5757",level:3}];function g(e){const a=Object.assign({p:"p",a:"a",h3:"h3",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://reactnative.dev/docs/integration-with-existing-apps",children:"\u4e0e\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210"}),"\u6307\u5357\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06\u5168\u5c4f React Native \u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a Activity \u96c6\u6210\u5230\u73b0\u6709 Android \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u8981\u5728\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u7684 Fragments \u4e2d\u4f7f\u7528 React Native \u7ec4\u4ef6\uff0c\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u8bbe\u7f6e\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u5b83\u5141\u8bb8\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u5c06 React Native \u7ec4\u4ef6\u4e0e Activity \u4e2d\u7684\u539f\u751f Fragments \u96c6\u6210\u5728\u4e00\u8d77\u3002"]}),"\n",(0,n.jsx)(a.h3,{id:"1-\u5c06-react-native-\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",children:"1. \u5c06 React Native \u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,n.jsxs)(a.p,{children:["\u6309\u7167",(0,n.jsx)(a.a,{href:"https://reactnative.dev/docs/integration-with-existing-apps",children:"\u4e0e\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210"}),"\u7684\u6307\u5357\uff0c\u76f4\u5230\u4ee3\u7801\u96c6\u6210\u90e8\u5206\u3002\u7ee7\u7eed\u6267\u884c\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u4e00\u4e2a",(0,n.jsx)(a.code,{children:"index.android.js"}),"\u6587\u4ef6\uff1b\u7b2c 2 \u6b65\uff1a\u6dfb\u52a0\u672c\u8282\u4e2d\u7684 React Native \u4ee3\u7801\u3002"]}),"\n",(0,n.jsx)(a.h3,{id:"2-\u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0e-react-native-fragment-\u96c6\u6210",children:"2. \u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0e React Native Fragment \u96c6\u6210"}),"\n",(0,n.jsxs)(a.p,{children:['\u4f60\u53ef\u4ee5\u5c06\u4f60\u7684 React Native \u7ec4\u4ef6\u6e32\u67d3\u6210\u4e00\u4e2a Fragment\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5168\u5c4f\u7684 React Native Activity\u3002\u8be5\u7ec4\u4ef6\u53ef\u4ee5\u79f0\u4e3a"screen"\u6216"fragment"\uff0c\u5b83\u7684\u529f\u80fd\u4e0e Android Fragment \u76f8\u540c\uff0c\u53ef\u80fd\u5305\u542b\u5b50\u7ec4\u4ef6\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u53ef\u4ee5\u653e\u5728',(0,n.jsx)(a.code,{children:"/fragments"}),"\u6587\u4ef6\u5939\u4e2d\uff0c\u7528\u4e8e\u7ec4\u6210 Fragment \u7684\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u653e\u5728",(0,n.jsx)(a.code,{children:"/components"}),"\u6587\u4ef6\u5939\u4e2d\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u4f60\u9700\u8981\u5728\u4e3b\u5e94\u7528\u7a0b\u5e8f Java/Kotlin \u7c7b\u4e2d\u5b9e\u73b0",(0,n.jsx)(a.code,{children:"ReactApplication"}),"\u63a5\u53e3\u3002\u5982\u679c\u4f60\u4f7f\u7528\u9ed8\u8ba4\u6d3b\u52a8\u4ece Android Studio \u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5219\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7c7b\uff08\u4f8b\u5982",(0,n.jsx)(a.code,{children:"MyReactApplication.java"}),"\u6216",(0,n.jsx)(a.code,{children:"MyReactApplication.kt"}),"\uff09\u3002\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u73b0\u6709\u7c7b\uff0c\u4f60\u53ef\u4ee5\u5728",(0,n.jsx)(a.code,{children:"AndroidManifest.xml"}),"\u6587\u4ef6\u4e2d\u627e\u5230\u8fd9\u4e2a\u4e3b\u7c7b\u3002\u5728",(0,n.jsx)(a.code,{children:"<application />"}),"\u6807\u7b7e\u4e0b\uff0c\u4f60\u5e94\u8be5\u80fd\u770b\u5230\u5c5e\u6027",(0,n.jsx)(a.code,{children:"android:name"}),"\uff0c\u4f8b\u5982",(0,n.jsx)(a.code,{children:'android:name=".MyReactApplication"'}),"\u3002\u6b64\u503c\u662f\u8981\u5b9e\u73b0\u7684\u7c7b\uff0c\u5e76\u4e3a\u5176\u63d0\u4f9b\u6240\u9700\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,n.jsx)(a.p,{children:"\u786e\u4fdd\u4e3b\u5e94\u7528\u7a0b\u5e8f\u7c7b\u5b9e\u73b0ReactApplication\uff1a"}),"\n",(0,n.jsxs)(i.Z,{groupId:"android-language",defaultValue:c.Z.defaultAndroidLanguage,values:c.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"class MyReactApplication: Application(), ReactApplication {...}\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"public class MyReactApplication extends Application implements ReactApplication {...}\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["\u91cd\u5199\u6240\u9700\u7684\u65b9\u6cd5",(0,n.jsx)(a.code,{children:"getUseDeveloperSupport"}),", ",(0,n.jsx)(a.code,{children:"getPackages"}),"\u4ee5\u53ca",(0,n.jsx)(a.code,{children:"getReactNativeHost"}),":"]}),"\n",(0,n.jsxs)(i.Z,{groupId:"android-language",defaultValue:c.Z.defaultAndroidLanguage,values:c.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"class MyReactApplication : Application(), ReactApplication {\n    override fun onCreate() {\n        super.onCreate()\n        SoLoader.init(this, false)\n    }\n    private val reactNativeHost =\n        object : ReactNativeHost(this) {\n            override fun getUseDeveloperSupport() = BuildConfig.DEBUG\n            override fun getPackages(): List<ReactPackage> {\n                val packages = PackageList(this).getPackages().toMutableList()\n                // Packages that cannot be autolinked yet can be added manually here\n                return packages\n            }\n        }\n    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost\n}\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"public class MyReactApplication extends Application implements ReactApplication {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        SoLoader.init(this, false);\n    }\n\n    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n        @Override\n        public boolean getUseDeveloperSupport() {\n            return BuildConfig.DEBUG;\n        }\n\n        protected List<ReactPackage> getPackages() {\n            List<ReactPackage> packages = new PackageList(this).getPackages();\n            // Packages that cannot be autolinked yet can be added manually here\n            return packages;\n        }\n    };\n\n    @Override\n    public ReactNativeHost getReactNativeHost() {\n        return mReactNativeHost;\n    }\n}\n"})})})]}),"\n",(0,n.jsx)(a.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fAndroid Studio\uff0c\u8bf7\u4f7f\u7528 Alt+Enter \u5728\u7c7b\u4e2d\u6dfb\u52a0\u6240\u6709\u7f3a\u5931\u7684\u5bfc\u5165\uff0c\u6216\u8005\u624b\u52a8\u5bfc\u5165\uff1a"}),"\n",(0,n.jsxs)(i.Z,{groupId:"android-language",defaultValue:c.Z.defaultAndroidLanguage,values:c.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"import android.app.Application\n\nimport com.facebook.react.PackageList\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.soloader.SoLoader\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"import android.app.Application;\n\nimport com.facebook.react.PackageList;\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n"})})})]}),"\n",(0,n.jsx)(a.p,{children:'\u6267\u884c"Sync Project files with Gradle"\u64cd\u4f5c\u3002'}),"\n",(0,n.jsx)(a.h3,{id:"3-\u4e3a-react-native-fragment-\u6dfb\u52a0-framelayout",children:"3. \u4e3a React Native Fragment \u6dfb\u52a0 FrameLayout"}),"\n",(0,n.jsxs)(a.p,{children:["\u73b0\u5728\u53ef\u4ee5\u628a React Native Fragment \u6dfb\u52a0\u5230\u4e00\u4e2a Activity \u4e2d\u3002\u5bf9\u4e8e\u4e00\u4e2a\u65b0\u9879\u76ee\u6765\u8bf4\uff0c\u8fd9\u4e2a Activity \u5c06\u662f",(0,n.jsx)(a.code,{children:"MainActivity"}),"\uff0c\u4f46\u5b83\u53ef\u4ee5\u662f\u4efb\u4f55 Activity\uff0c\u5e76\u4e14\u968f\u7740\u5c06\u66f4\u591a React Native \u7ec4\u4ef6\u96c6\u6210\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u66f4\u591a Fragments \u6dfb\u52a0\u5230\u5176\u4ed6 Activity \u4e2d\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u9996\u5148\u5c06 React Native Fragment \u6dfb\u52a0\u5230 Activity \u7684\u5e03\u5c40\u4e2d\uff0c\u4f8b\u5982",(0,n.jsx)(a.code,{children:"res/layouts"}),"\u6587\u4ef6\u5939\u4e2d\u7684",(0,n.jsx)(a.code,{children:"main_activity.xml"}),"\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u6dfb\u52a0\u5177\u6709 id\u3001\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u7684",(0,n.jsx)(a.code,{children:"<FrameLayout>"}),"\uff0cReact Native Fragment \u4f1a\u88ab\u6e32\u67d3\u5230\u6b64\u5e03\u5c40\u4e2d\u3002"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:'<FrameLayout\n    android:id="@+id/reactNativeFragment"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n'})}),"\n",(0,n.jsx)(a.h3,{id:"4-\u5c06-react-native-fragment-\u6dfb\u52a0\u5230-framelayout",children:"4. \u5c06 React Native Fragment \u6dfb\u52a0\u5230 FrameLayout"}),"\n",(0,n.jsx)(a.p,{children:"\u8981\u5c06 React Native Fragment \u6dfb\u52a0\u5230\u5e03\u5c40\u4e2d\uff0c\u4f60\u9700\u8981\u6709\u4e00\u4e2a Activity\u3002\u6b63\u5982\u5728\u4e00\u4e2a\u65b0\u9879\u76ee\u4e2d\u63d0\u5230\u7684\u90a3\u6837\uff0c\u5b83\u5c31\u662f MainActivity\u3002\u5728\u8fd9\u4e2a Activity \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6309\u94ae\u548c\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5355\u51fb\u6309\u94ae\u65f6\uff0c\u5c06\u4f1a\u6e32\u67d3 React Native Fragment\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u4fee\u6539 Activity \u5e03\u5c40\u4ee5\u6dfb\u52a0\u6309\u94ae\uff1a"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-xml",children:'<Button\n    android:layout_margin="10dp"\n    android:id="@+id/button"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:text="Show react fragment" />\n'})}),"\n",(0,n.jsxs)(a.p,{children:["\u73b0\u5728\u5728 Activity \u7c7b\uff08\u4f8b\u5982",(0,n.jsx)(a.code,{children:"MainActivity.java"}),"\u6216",(0,n.jsx)(a.code,{children:"MainActivity.kt"}),"\uff09\u4e2d\uff0c\u4f60\u9700\u8981\u4e3a\u6309\u94ae\u6dfb\u52a0\u4e00\u4e2a",(0,n.jsx)(a.code,{children:"OnClickListener"}),"\uff0c\u5b9e\u4f8b\u5316",(0,n.jsx)(a.code,{children:"ReactFragment"}),"\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u6846\u67b6\u5e03\u5c40\u4e2d\u3002"]}),"\n",(0,n.jsx)(a.p,{children:"\u5c06\u6309\u94ae\u5b57\u6bb5\u6dfb\u52a0\u5230 Activity \u7684\u9876\u90e8\uff1a"}),"\n",(0,n.jsxs)(i.Z,{groupId:"android-language",defaultValue:c.Z.defaultAndroidLanguage,values:c.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"private lateinit var button: Button\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"private Button mButton;\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["\u66f4\u65b0 Activity \u7684",(0,n.jsx)(a.code,{children:"onCreate"}),"\u65b9\u6cd5\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,n.jsxs)(i.Z,{groupId:"android-language",defaultValue:c.Z.defaultAndroidLanguage,values:c.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'override fun onCreate(savedInstanceState: Bundle) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.main_activity)\n    button = findViewById<Button>(R.id.button)\n    button.setOnClickListener {\n        val reactNativeFragment = ReactFragment.Builder()\n                .setComponentName("HelloWorld")\n                .setLaunchOptions(getLaunchOptions("test message"))\n                .build()\n        getSupportFragmentManager()\n                .beginTransaction()\n                .add(R.id.reactNativeFragment, reactNativeFragment)\n                .commit()\n    }\n}\n'})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.main_activity);\n\n    mButton = findViewById(R.id.button);\n    mButton.setOnClickListener(new View.OnClickListener() {\n        public void onClick(View v) {\n            Fragment reactNativeFragment = new ReactFragment.Builder()\n                    .setComponentName("HelloWorld")\n                    .setLaunchOptions(getLaunchOptions("test message"))\n                    .build();\n\n            getSupportFragmentManager()\n                    .beginTransaction()\n                    .add(R.id.reactNativeFragment, reactNativeFragment)\n                    .commit();\n\n        }\n    });\n}\n'})})})]}),"\n",(0,n.jsxs)(a.p,{children:["\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c",(0,n.jsx)(a.code,{children:"Fragment reactNativeFragment = new ReactFragment.Builder()"}),"\u521b\u5efa\u4e86ReactFragment\uff0c",(0,n.jsx)(a.code,{children:"getSupportFragmentManager().beginTransaction().add()"}),"\u5c06 Fragment \u6dfb\u52a0\u5230\u6846\u67b6\u5e03\u5c40\u4e2d\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:['\u5982\u679c\u4f60\u4f7f\u7528\u4e86 React Native \u7684\u5165\u95e8\u5de5\u5177\u5305\uff0c\u8bf7\u5c06"HelloWorld"\u5b57\u7b26\u4e32\u66ff\u6362\u4e3a',(0,n.jsx)(a.code,{children:"index.js"}),"\u6216",(0,n.jsx)(a.code,{children:"index.android.js"}),"\u6587\u4ef6\u4e2d\u7684\u5b57\u7b26\u4e32\uff08\u5b83\u662f ",(0,n.jsx)(a.code,{children:"AppRegistry.registerComponent()"}),"\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff09\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u6dfb\u52a0",(0,n.jsx)(a.code,{children:"getLaunchOptions"}),"\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u5141\u8bb8\u4f60\u5c06\u5c5e\u6027\u4f20\u9012\u5230\u7ec4\u4ef6\u3002\u8fd9\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u4e0d\u9700\u8981\u4f20\u9012\u4efb\u4f55\u5c5e\u6027\uff0c\u53ef\u4ee5\u5220\u9664",(0,n.jsx)(a.code,{children:"setLaunchOptions"}),"\u3002"]}),"\n",(0,n.jsxs)(i.Z,{groupId:"android-language",defaultValue:c.Z.defaultAndroidLanguage,values:c.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'private fun getLaunchOptions(message: String) = Bundle().apply {\n    putString("message", message)\n}\n\n'})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'private Bundle getLaunchOptions(String message) {\n    Bundle initialProperties = new Bundle();\n    initialProperties.putString("message", message);\n    return initialProperties;\n}\n'})})})]}),"\n",(0,n.jsx)(a.p,{children:"\u5728 Activity \u7c7b\u4e2d\u6dfb\u52a0\u6240\u6709\u7f3a\u5c11\u7684\u5bfc\u5165\u3002\u8c28\u614e\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u5305\u4e2d\u7684 BuildConfig \u800c\u4e0d\u662f facebook \u5305\uff01\u6216\u8005\u624b\u52a8\u5bfc\u5165\uff1a"}),"\n",(0,n.jsxs)(i.Z,{groupId:"android-language",defaultValue:c.Z.defaultAndroidLanguage,values:c.Z.androidLanguages,children:[(0,n.jsx)(o.Z,{value:"kotlin",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"import android.app.Application\n\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.shell.MainReactPackage\nimport com.facebook.soloader.SoLoader\n\n"})})}),(0,n.jsx)(o.Z,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"import android.app.Application;\n\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.shell.MainReactPackage;\nimport com.facebook.soloader.SoLoader;\n"})})})]}),"\n",(0,n.jsx)(a.p,{children:'\u6267\u884c"Sync Project files with Gradle"\u64cd\u4f5c.'}),"\n",(0,n.jsx)(a.h3,{id:"5-\u6d4b\u8bd5\u4f60\u7684\u96c6\u6210",children:"5. \u6d4b\u8bd5\u4f60\u7684\u96c6\u6210"}),"\n",(0,n.jsxs)(a.p,{children:["\u786e\u4fdd\u8fd0\u884c",(0,n.jsx)(a.code,{children:"yarn"}),"\u6765\u5b89\u88c5\u4f60\u7684 react-native \u4f9d\u8d56\u9879\u5e76\u8fd0\u884c",(0,n.jsx)(a.code,{children:"yarn native"}),"\u6765\u542f\u52a8 Metro \u6253\u5305\u5668\u3002\u5728 Android Studio \u4e2d\u8fd0\u884c\u4f60\u7684 android \u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u5e94\u8be5\u4ece\u5f00\u53d1\u670d\u52a1\u5668\u52a0\u8f7d JavaScript \u4ee3\u7801\u5e76\u5c06\u5176\u663e\u793a\u5728 Activity \u7684 React Native Fragment \u4e2d\u3002"]}),"\n",(0,n.jsx)(a.h3,{id:"6-\u9644\u52a0\u8bbe\u7f6e---\u539f\u751f\u6a21\u5757",children:"6. \u9644\u52a0\u8bbe\u7f6e - \u539f\u751f\u6a21\u5757"}),"\n",(0,n.jsxs)(a.p,{children:["\u4f60\u53ef\u80fd\u9700\u8981\u4ece\u4f60\u7684 react \u7ec4\u4ef6\u8c03\u7528\u73b0\u6709\u7684 Java/Kotlin \u4ee3\u7801\u3002\u539f\u751f\u6a21\u5757\u5141\u8bb8\u4f60\u8c03\u7528\u539f\u751f\u4ee3\u7801\u5e76\u5728\u539f\u751f\u5e94\u7528\u4e2d\u8fd0\u884c\u65b9\u6cd5\u3002\u6309\u7167",(0,n.jsx)(a.a,{href:"/docs/native-modules-android",children:"\u6b64\u5904"}),"\u8fdb\u884c\u8bbe\u7f6e\u3002"]})]})}const v=function(e={}){const{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(g,e)})):g(e)}},11674:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(27378),r=t(38944);const i={tabItem:"tabItem_wHwb"};var o=Object.defineProperty,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&d(e,t,a[t]);if(c)for(var t of c(a))s.call(a,t)&&d(e,t,a[t]);return e};function p({children:e,hidden:a,className:t}){return n.createElement("div",u({role:"tabpanel",className:(0,r.Z)(i.tabItem,t)},{hidden:a}),e)}},48375:(e,a,t)=>{t.d(a,{Z:()=>B});var n=t(27378),r=t(38944),i=t(12112),o=t(3620),c=t(69490),l=t(14953),s=t(27886),d=t(7106),u=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,b=(e,a)=>{for(var t in a||(a={}))m.call(a,t)&&f(e,t,a[t]);if(v)for(var t of v(a))h.call(a,t)&&f(e,t,a[t]);return e},j=(e,a)=>p(e,g(a));function x(e){var a,t;return null!=(t=null==(a=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))?t:[]}function y(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=a?a:function(e){return x(e).map((({props:{value:e,label:a,attributes:t,default:n}})=>({value:e,label:a,attributes:t,default:n})))}(t);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function k({value:e,tabValues:a}){return a.some((a=>a.value===e))}function w({queryString:e=!1,groupId:a}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace(j(b({},t.location),{search:a.toString()}))}),[r,t])]}function R(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,i=y(e),[o,l]=(0,n.useState)((()=>function({defaultValue:e,tabValues:a}){var t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[s,u]=w({queryString:t,groupId:r}),[p,g]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(a);return[t,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:r}),v=(()=>{const e=null!=s?s:p;return k({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!k({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var N=t(14185);const A={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var O=Object.defineProperty,L=Object.defineProperties,F=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,_=(e,a,t)=>a in e?O(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,I=(e,a)=>{for(var t in a||(a={}))P.call(a,t)&&_(e,t,a[t]);if(S)for(var t of S(a))Z.call(a,t)&&_(e,t,a[t]);return e},C=(e,a)=>L(e,F(a));function E({className:e,block:a,selectedValue:t,selectValue:o,tabValues:c}){const l=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),d=e=>{const a=e.currentTarget,n=l.indexOf(a),r=c[n].value;r!==t&&(s(a),o(r))},u=e=>{var a,t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=null!=(a=l[t])?a:l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=null!=(t=l[a])?t:l[l.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},c.map((({value:e,label:a,attributes:i})=>n.createElement("li",C(I({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>l.push(e),onKeyDown:u,onClick:d},i),{className:(0,r.Z)("tabs__item",A.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e})}),null!=a?a:e))))}function V({lazy:e,children:a,selectedValue:t}){const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function M(e){const a=R(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",A.tabList)},n.createElement(E,I(I({},e),a)),n.createElement(V,I(I({},e),a)))}function B(e){const a=(0,N.Z)();return n.createElement(M,I({key:String(a)},e),x(e.children))}},71426:(e,a,t)=>{var n=t(27378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,a,t){var n,i={},s=null,d=null;for(n in void 0!==t&&(s=""+t),void 0!==a.key&&(s=""+a.key),void 0!==a.ref&&(d=a.ref),a)o.call(a,n)&&!l.hasOwnProperty(n)&&(i[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:r,type:e,key:s,ref:d,props:i,_owner:c.current}}a.Fragment=i,a.jsx=s,a.jsxs=s},24246:(e,a,t)=>{e.exports=t(71426)},71670:(e,a,t)=>{t.d(a,{Zo:()=>c,ah:()=>i});var n=t(27378);const r=n.createContext({});function i(e){const a=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function c({components:e,children:a,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:i(e),n.createElement(r.Provider,{value:c},a)}}}]);