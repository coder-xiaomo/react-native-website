"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8007],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83875:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(25773),i=n(30808),l=(n(27378),n(35318)),o=["components"],r={id:"pushnotificationios",title:"\ud83d\udea7 PushNotificationIOS"},p=void 0,c={unversionedId:"pushnotificationios",id:"pushnotificationios",isDocsHomePage:!1,title:"\ud83d\udea7 PushNotificationIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/push-notification-ios instead.",source:"@site/../cndocs/pushnotificationios.md",sourceDirName:".",slug:"/pushnotificationios",permalink:"/docs/next/pushnotificationios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/pushnotificationios.md",version:"current",lastUpdatedAt:1628399172,formattedLastUpdatedAt:"8/8/2021",frontMatter:{id:"pushnotificationios",title:"\ud83d\udea7 PushNotificationIOS"}},d=[{value:"Methods",id:"methods",children:[{value:"<code>presentLocalNotification()</code>",id:"presentlocalnotification",children:[]},{value:"<code>scheduleLocalNotification()</code>",id:"schedulelocalnotification",children:[]},{value:"<code>cancelAllLocalNotifications()</code>",id:"cancelalllocalnotifications",children:[]},{value:"<code>removeAllDeliveredNotifications()</code>",id:"removealldeliverednotifications",children:[]},{value:"<code>getDeliveredNotifications()</code>",id:"getdeliverednotifications",children:[]},{value:"<code>removeDeliveredNotifications()</code>",id:"removedeliverednotifications",children:[]},{value:"<code>setApplicationIconBadgeNumber()</code>",id:"setapplicationiconbadgenumber",children:[]},{value:"<code>getApplicationIconBadgeNumber()</code>",id:"getapplicationiconbadgenumber",children:[]},{value:"<code>cancelLocalNotifications()</code>",id:"cancellocalnotifications",children:[]},{value:"<code>getScheduledLocalNotifications()</code>",id:"getscheduledlocalnotifications",children:[]},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>requestPermissions()</code>",id:"requestpermissions",children:[]},{value:"<code>abandonPermissions()</code>",id:"abandonpermissions",children:[]},{value:"<code>checkPermissions()</code>",id:"checkpermissions",children:[]},{value:"<code>getInitialNotification()</code>",id:"getinitialnotification",children:[]},{value:"<code>constructor()</code>",id:"constructor",children:[]},{value:"<code>finish()</code>",id:"finish",children:[]},{value:"<code>getMessage()</code>",id:"getmessage",children:[]},{value:"<code>getSound()</code>",id:"getsound",children:[]},{value:"<code>getCategory()</code>",id:"getcategory",children:[]},{value:"<code>getAlert()</code>",id:"getalert",children:[]},{value:"<code>getContentAvailable()</code>",id:"getcontentavailable",children:[]},{value:"<code>getBadgeCount()</code>",id:"getbadgecount",children:[]},{value:"<code>getData()</code>",id:"getdata",children:[]},{value:"<code>getThreadID()</code>",id:"getthreadid",children:[]}]}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-push-notification-ios"},"@react-native-community/push-notification-ios")," instead.")),(0,l.kt)("div",{class:"banner-native-code-required"},(0,l.kt)("h3",null,"Projects with Native Code Only"),(0,l.kt)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",(0,l.kt)("code",null,"expo-cli")," workflow, see the guide on ",(0,l.kt)("a",{href:"https://docs.expo.io/versions/latest/sdk/notifications/"},"Notifications")," in the Expo documentation for the appropriate alternative.")),(0,l.kt)("p",null,"\u672c\u6a21\u5757\u5e2e\u52a9\u4f60\u5904\u7406\u5e94\u7528\u7684\u63a8\u9001\u901a\u77e5\uff0c\u5305\u62ec\u6743\u9650\u63a7\u5236\u4ee5\u53ca\u5e94\u7528\u56fe\u6807\u4e0a\u7684\u89d2\u6807\u6570\uff08\u672a\u8bfb\u6d88\u606f\u6570\uff09\u3002"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u63a8\u9001\u901a\u77e5\u529f\u80fd\uff0c\u9996\u5148",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html#//apple_ref/doc/uid/TP40012582-CH26-SW6"},"\u5728\u82f9\u679c\u540e\u53f0\u914d\u7f6e\u63a8\u9001\u901a\u77e5\u670d\u52a1"),"\u5e76\u4e14\u51c6\u5907\u597d\u670d\u52a1\u7aef\u7684\u7cfb\u7edf\u3002"),(0,l.kt)("p",null,"Add the PushNotificationIOS library to your Podfile: ./ios/Podfile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"  target 'myAwesomeApp' do\n    # Pods for myAwesomeApp\n    pod 'React-RCTPushNotification', :path => '../node_modules/react-native/Libraries/PushNotificationIOS'\n  end\n")),(0,l.kt)("p",null,"\u8bd1\u6ce8: 0.60 \u7248\u672c\u4e4b\u524d\u7684\u6b65\u9aa4\u4e0d\u540c\uff0c\u8bf7\u67e5\u770b\u8001\u7248\u672c\u6587\u6863\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u4f60\u9700\u8981\u5728 AppDelegate \u4e2d\u542f\u7528\u63a8\u9001\u901a\u77e5\u7684\u652f\u6301\u4ee5\u53ca\u6ce8\u518c\u76f8\u5e94\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"AppDelegate.m"),"\u5f00\u5934\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"#import <React/RCTPushNotificationManager.h>\n")),(0,l.kt)("p",null,"\u7136\u540e\u5728 AppDelegate \u5b9e\u73b0\u4e2d\u6dfb\u52a0\u5982\u4e0b\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," // Required to register for notifications\n - (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings\n {\n  [RCTPushNotificationManager didRegisterUserNotificationSettings:notificationSettings];\n }\n // Required for the register event.\n - (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken\n {\n  [RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n }\n // Required for the notification event. You must call the completion handler after handling the remote notification.\n - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo\n                                                        fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler\n {\n   [RCTPushNotificationManager didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];\n }\n // Required for the registrationError event.\n - (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error\n {\n  [RCTPushNotificationManager didFailToRegisterForRemoteNotificationsWithError:error];\n }\n // Required for the localNotification event.\n - (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification\n {\n  [RCTPushNotificationManager didReceiveLocalNotification:notification];\n }\n")),(0,l.kt)("p",null,"To show notifications while being in the foreground (available starting from iOS 10) add the following lines:"),(0,l.kt)("p",null,"At the top of your ",(0,l.kt)("inlineCode",{parentName:"p"},"AppDelegate.m"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"#import <UserNotifications/UserNotifications.h>")),(0,l.kt)("p",null,"And then in your AppDelegate implementation add the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  ...\n  // Define UNUserNotificationCenter\n  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];\n  center.delegate = self;\n\n  return YES;\n}\n\n//Called when a notification is delivered to a foreground app.\n-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler\n{\n  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);\n}\n")),(0,l.kt)("p",null,"Then enable Background Modes/Remote notifications to be able to use remote notifications properly. The easiest way to do this is via the project settings. Navigate to Targets -> Your App -> Capabilities -> Background Modes and check Remote notifications. This will automatically enable the required settings."),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"presentlocalnotification"},(0,l.kt)("inlineCode",{parentName:"h3"},"presentLocalNotification()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.presentLocalNotification(details);\n")),(0,l.kt)("p",null,"Schedules the localNotification for immediate presentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"details"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u770b\u4e0b\u9762\u7684\u8bf4\u660e")))),(0,l.kt)("p",null,"details is an object containing:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alertBody")," : The message displayed in the notification alert."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alertAction"),' : The "action" displayed beneath an actionable notification. Defaults to "view";'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"soundName")," : The sound played when the notification is fired (optional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"isSilent")," : If true, the notification will appear without sound (optional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"category")," : The category of this notification, required for actionable notifications (optional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userInfo")," : An optional object containing additional notification data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"applicationIconBadgeNumber")," (optional) : The number to display as the app's icon badge. The default value of this property is 0, which means that no badge is displayed.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"schedulelocalnotification"},(0,l.kt)("inlineCode",{parentName:"h3"},"scheduleLocalNotification()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.scheduleLocalNotification(details);\n")),(0,l.kt)("p",null,"Schedules the localNotification for future presentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"details"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u770b\u4e0b\u9762\u7684\u8bf4\u660e")))),(0,l.kt)("p",null,"details is an object containing:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fireDate")," : The date and time when the system should deliver the notification."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alertTitle")," : The text displayed as the title of the notification alert."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alertBody")," : The message displayed in the notification alert."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alertAction"),' : The "action" displayed beneath an actionable notification. Defaults to "view";'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"soundName")," : The sound played when the notification is fired (optional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"isSilent")," : If true, the notification will appear without sound (optional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"category")," : The category of this notification, required for actionable notifications (optional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userInfo")," : An optional object containing additional notification data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"applicationIconBadgeNumber")," (optional) : The number to display as the app's icon badge. Setting the number to 0 removes the icon badge."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"repeatInterval")," : The interval to repeat as a string. Possible values: ",(0,l.kt)("inlineCode",{parentName:"li"},"minute"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hour"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"day"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"week"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"month"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"year"),".")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cancelalllocalnotifications"},(0,l.kt)("inlineCode",{parentName:"h3"},"cancelAllLocalNotifications()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.cancelAllLocalNotifications();\n")),(0,l.kt)("p",null,"Cancels all scheduled localNotifications"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removealldeliverednotifications"},(0,l.kt)("inlineCode",{parentName:"h3"},"removeAllDeliveredNotifications()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.removeAllDeliveredNotifications();\n")),(0,l.kt)("p",null,"Remove all delivered notifications from Notification Center"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getdeliverednotifications"},(0,l.kt)("inlineCode",{parentName:"h3"},"getDeliveredNotifications()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.getDeliveredNotifications(callback);\n")),(0,l.kt)("p",null,"Provides you with a list of the app\u2019s notifications that are still displayed in Notification Center"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Function which receive an array of delivered notifications.")))),(0,l.kt)("p",null,"A delivered notification is an object containing:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"identifier")," : The identifier of this notification."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title")," : The title of this notification."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"body")," : The body of this notification."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"category")," : The category of this notification, if has one."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userInfo")," : An optional object containing additional notification data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"thread-id")," : The thread identifier of this notification, if has one.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removedeliverednotifications"},(0,l.kt)("inlineCode",{parentName:"h3"},"removeDeliveredNotifications()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.removeDeliveredNotifications(identifiers);\n")),(0,l.kt)("p",null,"Removes the specified notifications from Notification Center"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identifiers"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of notification identifiers.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"setapplicationiconbadgenumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"setApplicationIconBadgeNumber()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.setApplicationIconBadgeNumber(number);\n")),(0,l.kt)("p",null,"Sets the badge number for the app icon on the home screen"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Badge number for the app icon.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getapplicationiconbadgenumber"},(0,l.kt)("inlineCode",{parentName:"h3"},"getApplicationIconBadgeNumber()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.getApplicationIconBadgeNumber(callback);\n")),(0,l.kt)("p",null,"Gets the current badge number for the app icon on the home screen"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that will be passed the current badge number.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cancellocalnotifications"},(0,l.kt)("inlineCode",{parentName:"h3"},"cancelLocalNotifications()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.cancelLocalNotifications(userInfo);\n")),(0,l.kt)("p",null,"Cancel local notifications."),(0,l.kt)("p",null,"Optionally restricts the set of canceled notifications to those notifications whose ",(0,l.kt)("inlineCode",{parentName:"p"},"userInfo")," fields match the corresponding fields in the ",(0,l.kt)("inlineCode",{parentName:"p"},"userInfo")," argument."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getscheduledlocalnotifications"},(0,l.kt)("inlineCode",{parentName:"h3"},"getScheduledLocalNotifications()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.getScheduledLocalNotifications(callback);\n")),(0,l.kt)("p",null,"Gets the local notifications that are currently scheduled."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that will be passed an array of objects describing local notifications.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"addeventlistener"},(0,l.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.addEventListener(type, handler);\n")),(0,l.kt)("p",null,"Attaches a listener to remote or local notification events while the app is running in the foreground or the background."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Event type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handler"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Listener.")))),(0,l.kt)("p",null,"Valid events are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"notification")," : Fired when a remote notification is received. The handler will be invoked with an instance of ",(0,l.kt)("inlineCode",{parentName:"li"},"PushNotificationIOS"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localNotification")," : Fired when a local notification is received. The handler will be invoked with an instance of ",(0,l.kt)("inlineCode",{parentName:"li"},"PushNotificationIOS"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"register"),": Fired when the user registers for remote notifications. The handler will be invoked with a hex string representing the deviceToken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"registrationError"),": Fired when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. The handler will be invoked with {message: string, code: number, details: any}.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removeeventlistener"},(0,l.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.removeEventListener(type, handler);\n")),(0,l.kt)("p",null,"Removes the event listener. Do this in ",(0,l.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," to prevent memory leaks"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Event type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"handler"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"Listener.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestpermissions"},(0,l.kt)("inlineCode",{parentName:"h3"},"requestPermissions()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.requestPermissions([permissions]);\n")),(0,l.kt)("p",null,"Requests notification permissions from iOS, prompting the user's dialog box. By default, it will request all notification permissions, but a subset of these can be requested by passing a map of requested permissions. The following permissions are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alert")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"badge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sound"))),(0,l.kt)("p",null,"If a map is provided to the method, only the permissions with truthy values will be requested."),(0,l.kt)("p",null,"This method returns a promise that will resolve when the user accepts, rejects, or if the permissions were previously rejected. The promise resolves to the current state of the permission."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permissions"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"alert, badge, or sound")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"abandonpermissions"},(0,l.kt)("inlineCode",{parentName:"h3"},"abandonPermissions()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.abandonPermissions();\n")),(0,l.kt)("p",null,"Unregister for all remote notifications received via Apple Push Notification service."),(0,l.kt)("p",null,"You should call this method in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications. Users can temporarily prevent apps from receiving remote notifications through the Notifications section of the Settings app. Apps unregistered through this method can always re-register."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"checkpermissions"},(0,l.kt)("inlineCode",{parentName:"h3"},"checkPermissions()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.checkPermissions(callback);\n")),(0,l.kt)("p",null,"See what push permissions are currently enabled."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u770b\u4e0b\u9762\u7684\u8bf4\u660e")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"callback")," will be invoked with a ",(0,l.kt)("inlineCode",{parentName:"p"},"permissions")," object:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"alert")," :boolean"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"badge")," :boolean"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sound")," :boolean")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getinitialnotification"},(0,l.kt)("inlineCode",{parentName:"h3"},"getInitialNotification()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.getInitialNotification();\n")),(0,l.kt)("p",null,"This method returns a promise. If the app was launched by a push notification, this promise resolves to an object of type ",(0,l.kt)("inlineCode",{parentName:"p"},"PushNotificationIOS"),". Otherwise, it resolves to ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"constructor"},(0,l.kt)("inlineCode",{parentName:"h3"},"constructor()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"constructor(nativeNotif);\n")),(0,l.kt)("p",null,"You will never need to instantiate ",(0,l.kt)("inlineCode",{parentName:"p"},"PushNotificationIOS")," yourself. Listening to the ",(0,l.kt)("inlineCode",{parentName:"p"},"notification")," event and invoking ",(0,l.kt)("inlineCode",{parentName:"p"},"getInitialNotification")," is sufficient."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"finish"},(0,l.kt)("inlineCode",{parentName:"h3"},"finish()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"finish(fetchResult);\n")),(0,l.kt)("p",null,"This method is available for remote notifications that have been received via: ",(0,l.kt)("inlineCode",{parentName:"p"},"application:didReceiveRemoteNotification:fetchCompletionHandler:")," ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application?language=objc"},"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application?language=objc")),(0,l.kt)("p",null,"Call this to execute when the remote notification handling is complete. When calling this block, pass in the fetch result value that best describes the results of your operation. You ",(0,l.kt)("em",{parentName:"p"},"must")," call this handler and should do so as soon as possible. For a list of possible values, see ",(0,l.kt)("inlineCode",{parentName:"p"},"PushNotificationIOS.FetchResult"),"."),(0,l.kt)("p",null,"If you do not call this method your background remote notifications could be throttled, to read more about it see the above documentation link."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getmessage"},(0,l.kt)("inlineCode",{parentName:"h3"},"getMessage()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"getMessage();\n")),(0,l.kt)("p",null,"An alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"getAlert")," to get the notification's main message string"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getsound"},(0,l.kt)("inlineCode",{parentName:"h3"},"getSound()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"getSound();\n")),(0,l.kt)("p",null,"Gets the sound string from the ",(0,l.kt)("inlineCode",{parentName:"p"},"aps")," object"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getcategory"},(0,l.kt)("inlineCode",{parentName:"h3"},"getCategory()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"getCategory();\n")),(0,l.kt)("p",null,"Gets the category string from the ",(0,l.kt)("inlineCode",{parentName:"p"},"aps")," object"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getalert"},(0,l.kt)("inlineCode",{parentName:"h3"},"getAlert()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"getAlert();\n")),(0,l.kt)("p",null,"Gets the notification's main message from the ",(0,l.kt)("inlineCode",{parentName:"p"},"aps")," object"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getcontentavailable"},(0,l.kt)("inlineCode",{parentName:"h3"},"getContentAvailable()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"getContentAvailable();\n")),(0,l.kt)("p",null,"Gets the content-available number from the ",(0,l.kt)("inlineCode",{parentName:"p"},"aps")," object"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getbadgecount"},(0,l.kt)("inlineCode",{parentName:"h3"},"getBadgeCount()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"getBadgeCount();\n")),(0,l.kt)("p",null,"Gets the badge count number from the ",(0,l.kt)("inlineCode",{parentName:"p"},"aps")," object"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getdata"},(0,l.kt)("inlineCode",{parentName:"h3"},"getData()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"getData();\n")),(0,l.kt)("p",null,"Gets the data object on the notif"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getthreadid"},(0,l.kt)("inlineCode",{parentName:"h3"},"getThreadID()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"getThreadID();\n")),(0,l.kt)("p",null,"Gets the thread ID on the notification"))}u.isMDXComponent=!0}}]);