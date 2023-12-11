/*! For license information please see 727a66d9.2ba85e56.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9573],{53220:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var t=n(24246),s=n(71670);const o={id:"pushnotificationios",title:"\ud83d\udea7 PushNotificationIOS"},c=void 0,d={id:"pushnotificationios",title:"\ud83d\udea7 PushNotificationIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/push-notification-ios instead.",source:"@site/versioned_docs/version-0.70/pushnotificationios.md",sourceDirName:".",slug:"/pushnotificationios",permalink:"/docs/0.70/pushnotificationios",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/pushnotificationios.md",tags:[],version:"0.70",frontMatter:{id:"pushnotificationios",title:"\ud83d\udea7 PushNotificationIOS"}},l={},r=[{value:"Methods",id:"methods",level:2},{value:"<code>presentLocalNotification()</code>",id:"presentlocalnotification",level:3},{value:"<code>scheduleLocalNotification()</code>",id:"schedulelocalnotification",level:3},{value:"<code>cancelAllLocalNotifications()</code>",id:"cancelalllocalnotifications",level:3},{value:"<code>removeAllDeliveredNotifications()</code>",id:"removealldeliverednotifications",level:3},{value:"<code>getDeliveredNotifications()</code>",id:"getdeliverednotifications",level:3},{value:"<code>removeDeliveredNotifications()</code>",id:"removedeliverednotifications",level:3},{value:"<code>setApplicationIconBadgeNumber()</code>",id:"setapplicationiconbadgenumber",level:3},{value:"<code>getApplicationIconBadgeNumber()</code>",id:"getapplicationiconbadgenumber",level:3},{value:"<code>cancelLocalNotifications()</code>",id:"cancellocalnotifications",level:3},{value:"<code>getScheduledLocalNotifications()</code>",id:"getscheduledlocalnotifications",level:3},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3},{value:"<code>requestPermissions()</code>",id:"requestpermissions",level:3},{value:"<code>abandonPermissions()</code>",id:"abandonpermissions",level:3},{value:"<code>checkPermissions()</code>",id:"checkpermissions",level:3},{value:"<code>getInitialNotification()</code>",id:"getinitialnotification",level:3},{value:"<code>constructor()</code>",id:"constructor",level:3},{value:"<code>finish()</code>",id:"finish",level:3},{value:"<code>getMessage()</code>",id:"getmessage",level:3},{value:"<code>getSound()</code>",id:"getsound",level:3},{value:"<code>getCategory()</code>",id:"getcategory",level:3},{value:"<code>getAlert()</code>",id:"getalert",level:3},{value:"<code>getContentAvailable()</code>",id:"getcontentavailable",level:3},{value:"<code>getBadgeCount()</code>",id:"getbadgecount",level:3},{value:"<code>getData()</code>",id:"getdata",level:3},{value:"<code>getThreadID()</code>",id:"getthreadid",level:3}];function a(e){const i=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",hr:"hr",h1:"h1",h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",div:"div",em:"em"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"\u5df2\u8fc7\u65f6\u3002"})," Use ",(0,t.jsx)(i.a,{href:"https://github.com/react-native-community/react-native-push-notification-ios",children:"@react-native-community/push-notification-ios"})," instead."]}),"\n"]}),"\n",(0,t.jsxs)("div",{class:"banner-native-code-required",children:[(0,t.jsx)("h3",{children:"Projects with Native Code Only"}),(0,t.jsx)("p",{children:(0,t.jsxs)(i.p,{children:["The following section only applies to projects with native code exposed. If you are using the managed ",(0,t.jsx)("code",{children:"expo-cli"})," workflow, see the guide on ",(0,t.jsx)("a",{href:"https://docs.expo.io/versions/latest/sdk/notifications/",children:"Notifications"})," in the Expo documentation for the appropriate alternative."]})})]}),"\n",(0,t.jsx)(i.p,{children:"\u672c\u6a21\u5757\u5e2e\u52a9\u4f60\u5904\u7406\u5e94\u7528\u7684\u63a8\u9001\u901a\u77e5\uff0c\u5305\u62ec\u6743\u9650\u63a7\u5236\u4ee5\u53ca\u5e94\u7528\u56fe\u6807\u4e0a\u7684\u89d2\u6807\u6570\uff08\u672a\u8bfb\u6d88\u606f\u6570\uff09\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u8981\u4f7f\u7528\u63a8\u9001\u901a\u77e5\u529f\u80fd\uff0c\u9996\u5148",(0,t.jsx)(i.a,{href:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html#//apple_ref/doc/uid/TP40012582-CH26-SW6",children:"\u5728\u82f9\u679c\u540e\u53f0\u914d\u7f6e\u63a8\u9001\u901a\u77e5\u670d\u52a1"}),"\u5e76\u4e14\u51c6\u5907\u597d\u670d\u52a1\u7aef\u7684\u7cfb\u7edf\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"Add the PushNotificationIOS library to your Podfile: ./ios/Podfile"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ruby",children:"  target 'myAwesomeApp' do\n    # Pods for myAwesomeApp\n    pod 'React-RCTPushNotification', :path => '../node_modules/react-native/Libraries/PushNotificationIOS'\n  end\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u8bd1\u6ce8: 0.60 \u7248\u672c\u4e4b\u524d\u7684\u6b65\u9aa4\u4e0d\u540c\uff0c\u8bf7\u67e5\u770b\u8001\u7248\u672c\u6587\u6863\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u7136\u540e\u4f60\u9700\u8981\u5728 AppDelegate \u4e2d\u542f\u7528\u63a8\u9001\u901a\u77e5\u7684\u652f\u6301\u4ee5\u53ca\u6ce8\u518c\u76f8\u5e94\u7684\u4e8b\u4ef6\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u5728",(0,t.jsx)(i.code,{children:"AppDelegate.m"}),"\u5f00\u5934\uff1a"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-objectivec",children:"#import <React/RCTPushNotificationManager.h>\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u7136\u540e\u5728 AppDelegate \u5b9e\u73b0\u4e2d\u6dfb\u52a0\u5982\u4e0b\u7684\u4ee3\u7801\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:" // Required to register for notifications\n - (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings\n {\n  [RCTPushNotificationManager didRegisterUserNotificationSettings:notificationSettings];\n }\n // Required for the register event.\n - (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken\n {\n  [RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n }\n // Required for the notification event. You must call the completion handler after handling the remote notification.\n - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo\n                                                        fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler\n {\n   [RCTPushNotificationManager didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];\n }\n // Required for the registrationError event.\n - (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error\n {\n  [RCTPushNotificationManager didFailToRegisterForRemoteNotificationsWithError:error];\n }\n // Required for the localNotification event.\n - (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification\n {\n  [RCTPushNotificationManager didReceiveLocalNotification:notification];\n }\n"})}),"\n",(0,t.jsx)(i.p,{children:"To show notifications while being in the foreground (available starting from iOS 10) add the following lines:"}),"\n",(0,t.jsxs)(i.p,{children:["At the top of your ",(0,t.jsx)(i.code,{children:"AppDelegate.m"}),":"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"#import <UserNotifications/UserNotifications.h>"})}),"\n",(0,t.jsx)(i.p,{children:"And then in your AppDelegate implementation add the following:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-objectivec",children:"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  ...\n  // Define UNUserNotificationCenter\n  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];\n  center.delegate = self;\n\n  return YES;\n}\n\n//Called when a notification is delivered to a foreground app.\n-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler\n{\n  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);\n}\n"})}),"\n",(0,t.jsx)(i.p,{children:"Then enable Background Modes/Remote notifications to be able to use remote notifications properly. The easiest way to do this is via the project settings. Navigate to Targets -> Your App -> Capabilities -> Background Modes and check Remote notifications. This will automatically enable the required settings."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h1,{id:"\u6587\u6863",children:"\u6587\u6863"}),"\n",(0,t.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(i.h3,{id:"presentlocalnotification",children:(0,t.jsx)(i.code,{children:"presentLocalNotification()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.presentLocalNotification(details);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Schedules the localNotification for immediate presentation."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"details"}),(0,t.jsx)(i.td,{children:"object"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"\u770b\u4e0b\u9762\u7684\u8bf4\u660e"})]})})]}),"\n",(0,t.jsx)(i.p,{children:"details is an object containing:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"alertBody"})," : The message displayed in the notification alert."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"alertAction"}),' : The "action" displayed beneath an actionable notification. Defaults to "view";']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"soundName"})," : The sound played when the notification is fired (optional)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"isSilent"})," : If true, the notification will appear without sound (optional)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"category"})," : The category of this notification, required for actionable notifications (optional)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"userInfo"})," : An optional object containing additional notification data."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"applicationIconBadgeNumber"})," (optional) : The number to display as the app's icon badge. The default value of this property is 0, which means that no badge is displayed."]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"schedulelocalnotification",children:(0,t.jsx)(i.code,{children:"scheduleLocalNotification()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.scheduleLocalNotification(details);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Schedules the localNotification for future presentation."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"details"}),(0,t.jsx)(i.td,{children:"object"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"\u770b\u4e0b\u9762\u7684\u8bf4\u660e"})]})})]}),"\n",(0,t.jsx)(i.p,{children:"details is an object containing:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fireDate"})," : The date and time when the system should deliver the notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"alertTitle"})," : The text displayed as the title of the notification alert."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"alertBody"})," : The message displayed in the notification alert."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"alertAction"}),' : The "action" displayed beneath an actionable notification. Defaults to "view";']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"soundName"})," : The sound played when the notification is fired (optional)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"isSilent"})," : If true, the notification will appear without sound (optional)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"category"})," : The category of this notification, required for actionable notifications (optional)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"userInfo"})," : An optional object containing additional notification data."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"applicationIconBadgeNumber"})," (optional) : The number to display as the app's icon badge. Setting the number to 0 removes the icon badge."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"repeatInterval"})," : The interval to repeat as a string. Possible values: ",(0,t.jsx)(i.code,{children:"minute"}),", ",(0,t.jsx)(i.code,{children:"hour"}),", ",(0,t.jsx)(i.code,{children:"day"}),", ",(0,t.jsx)(i.code,{children:"week"}),", ",(0,t.jsx)(i.code,{children:"month"}),", ",(0,t.jsx)(i.code,{children:"year"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"cancelalllocalnotifications",children:(0,t.jsx)(i.code,{children:"cancelAllLocalNotifications()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.cancelAllLocalNotifications();\n"})}),"\n",(0,t.jsx)(i.p,{children:"Cancels all scheduled localNotifications"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"removealldeliverednotifications",children:(0,t.jsx)(i.code,{children:"removeAllDeliveredNotifications()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.removeAllDeliveredNotifications();\n"})}),"\n",(0,t.jsx)(i.p,{children:"Remove all delivered notifications from Notification Center"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getdeliverednotifications",children:(0,t.jsx)(i.code,{children:"getDeliveredNotifications()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.getDeliveredNotifications(callback);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Provides you with a list of the app\u2019s notifications that are still displayed in Notification Center"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"callback"}),(0,t.jsx)(i.td,{children:"function"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"Function which receive an array of delivered notifications."})]})})]}),"\n",(0,t.jsx)(i.p,{children:"A delivered notification is an object containing:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"identifier"})," : The identifier of this notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"title"})," : The title of this notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"body"})," : The body of this notification."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"category"})," : The category of this notification, if has one."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"userInfo"})," : An optional object containing additional notification data."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"thread-id"})," : The thread identifier of this notification, if has one."]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"removedeliverednotifications",children:(0,t.jsx)(i.code,{children:"removeDeliveredNotifications()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.removeDeliveredNotifications(identifiers);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Removes the specified notifications from Notification Center"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"identifiers"}),(0,t.jsx)(i.td,{children:"array"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"Array of notification identifiers."})]})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"setapplicationiconbadgenumber",children:(0,t.jsx)(i.code,{children:"setApplicationIconBadgeNumber()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.setApplicationIconBadgeNumber(number);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Sets the badge number for the app icon on the home screen"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"number"}),(0,t.jsx)(i.td,{children:"number"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"Badge number for the app icon."})]})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getapplicationiconbadgenumber",children:(0,t.jsx)(i.code,{children:"getApplicationIconBadgeNumber()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.getApplicationIconBadgeNumber(callback);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Gets the current badge number for the app icon on the home screen"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"callback"}),(0,t.jsx)(i.td,{children:"function"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"A function that will be passed the current badge number."})]})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"cancellocalnotifications",children:(0,t.jsx)(i.code,{children:"cancelLocalNotifications()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.cancelLocalNotifications(userInfo);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Cancel local notifications."}),"\n",(0,t.jsxs)(i.p,{children:["Optionally restricts the set of canceled notifications to those notifications whose ",(0,t.jsx)(i.code,{children:"userInfo"})," fields match the corresponding fields in the ",(0,t.jsx)(i.code,{children:"userInfo"})," argument."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"userInfo"}),(0,t.jsx)(i.td,{children:"object"}),(0,t.jsx)(i.td,{children:"\u5426"}),(0,t.jsx)(i.td,{})]})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getscheduledlocalnotifications",children:(0,t.jsx)(i.code,{children:"getScheduledLocalNotifications()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.getScheduledLocalNotifications(callback);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Gets the local notifications that are currently scheduled."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"callback"}),(0,t.jsx)(i.td,{children:"function"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"A function that will be passed an array of objects describing local notifications."})]})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"addeventlistener",children:(0,t.jsx)(i.code,{children:"addEventListener()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.addEventListener(type, handler);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Attaches a listener to remote or local notification events while the app is running in the foreground or the background."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"Event type."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"handler"}),(0,t.jsx)(i.td,{children:"function"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"Listener."})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"Valid events are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"notification"}),"\uff1a\u5f53\u63a5\u6536\u5230\u8fdc\u7a0b\u901a\u77e5\u65f6\u89e6\u53d1\u3002\u5904\u7406\u7a0b\u5e8f\u5c06\u4f7f\u7528\u4e00\u4e2a",(0,t.jsx)(i.code,{children:"PushNotificationIOS"}),"\u5b9e\u4f8b\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"localNotification"}),"\uff1a\u5f53\u63a5\u6536\u5230\u672c\u5730\u901a\u77e5\u65f6\u89e6\u53d1\u3002\u5904\u7406\u7a0b\u5e8f\u5c06\u4f7f\u7528\u4e00\u4e2a",(0,t.jsx)(i.code,{children:"PushNotificationIOS"}),"\u5b9e\u4f8b\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"register"}),"\uff1a\u5f53\u7528\u6237\u6ce8\u518c\u8fdc\u7a0b\u901a\u77e5\u65f6\u89e6\u53d1\u3002\u5904\u7406\u7a0b\u5e8f\u5c06\u4f7f\u7528\u8868\u793a\u8bbe\u5907\u4ee4\u724c\u7684\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"registrationError"}),": \u5f53\u7528\u6237\u65e0\u6cd5\u6ce8\u518c\u8fdc\u7a0b\u901a\u77e5\u65f6\u89e6\u53d1\u3002\u901a\u5e38\u5728 APNS \u51fa\u73b0\u95ee\u9898\u6216\u8bbe\u5907\u4e3a\u6a21\u62df\u5668\u65f6\u53d1\u751f\u3002\u5904\u7406\u7a0b\u5e8f\u5c06\u88ab\u8c03\u7528\u5e76\u4f20\u5165 ",(0,t.jsx)(i.code,{children:"{message: string, code: number, details: any}"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"removeeventlistener",children:(0,t.jsx)(i.code,{children:"removeEventListener()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.removeEventListener(type, handler);\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Removes the event listener. Do this in ",(0,t.jsx)(i.code,{children:"componentWillUnmount"})," to prevent memory leaks"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.td,{children:"string"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"Event type."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"handler"}),(0,t.jsx)(i.td,{children:"function"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"Listener."})]})]})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"requestpermissions",children:(0,t.jsx)(i.code,{children:"requestPermissions()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.requestPermissions([permissions]);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Requests notification permissions from iOS, prompting the user's dialog box. By default, it will request all notification permissions, but a subset of these can be requested by passing a map of requested permissions. The following permissions are supported:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"alert"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"badge"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"sound"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"If a map is provided to the method, only the permissions with truthy values will be requested."}),"\n",(0,t.jsx)(i.p,{children:"This method returns a promise that will resolve when the user accepts, rejects, or if the permissions were previously rejected. The promise resolves to the current state of the permission."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"permissions"}),(0,t.jsx)(i.td,{children:"array"}),(0,t.jsx)(i.td,{children:"\u5426"}),(0,t.jsx)(i.td,{children:"alert, badge, or sound"})]})})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"abandonpermissions",children:(0,t.jsx)(i.code,{children:"abandonPermissions()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.abandonPermissions();\n"})}),"\n",(0,t.jsx)(i.p,{children:"Unregister for all remote notifications received via Apple Push Notification service."}),"\n",(0,t.jsx)(i.p,{children:"You should call this method in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications. Users can temporarily prevent apps from receiving remote notifications through the Notifications section of the Settings app. Apps unregistered through this method can always re-register."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"checkpermissions",children:(0,t.jsx)(i.code,{children:"checkPermissions()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.checkPermissions(callback);\n"})}),"\n",(0,t.jsx)(i.p,{children:"See what push permissions are currently enabled."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u53c2\u6570\uff1a"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u540d\u79f0"}),(0,t.jsx)(i.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u5fc5\u9700"}),(0,t.jsx)(i.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"callback"}),(0,t.jsx)(i.td,{children:"function"}),(0,t.jsx)(i.td,{children:"\u662f"}),(0,t.jsx)(i.td,{children:"\u770b\u4e0b\u9762\u7684\u8bf4\u660e"})]})})]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"callback"})," will be invoked with a ",(0,t.jsx)(i.code,{children:"permissions"})," object:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"alert"})," ",(0,t.jsx)(i.div,{})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"badge"})," ",(0,t.jsx)(i.div,{})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"sound"})," ",(0,t.jsx)(i.div,{})]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getinitialnotification",children:(0,t.jsx)(i.code,{children:"getInitialNotification()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"PushNotificationIOS.getInitialNotification();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This method returns a promise. If the app was launched by a push notification, this promise resolves to an object of type ",(0,t.jsx)(i.code,{children:"PushNotificationIOS"}),". Otherwise, it resolves to ",(0,t.jsx)(i.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"constructor",children:(0,t.jsx)(i.code,{children:"constructor()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"constructor(nativeNotif);\n"})}),"\n",(0,t.jsxs)(i.p,{children:["You will never need to instantiate ",(0,t.jsx)(i.code,{children:"PushNotificationIOS"})," yourself. Listening to the ",(0,t.jsx)(i.code,{children:"notification"})," event and invoking ",(0,t.jsx)(i.code,{children:"getInitialNotification"})," is sufficient."]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"finish",children:(0,t.jsx)(i.code,{children:"finish()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"finish(fetchResult);\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This method is available for remote notifications that have been received via: ",(0,t.jsx)(i.code,{children:"application:didReceiveRemoteNotification:fetchCompletionHandler:"})," ",(0,t.jsx)(i.a,{href:"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application?language=objc",children:"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application?language=objc"})]}),"\n",(0,t.jsxs)(i.p,{children:["Call this to execute when the remote notification handling is complete. When calling this block, pass in the fetch result value that best describes the results of your operation. You ",(0,t.jsx)(i.em,{children:"must"})," call this handler and should do so as soon as possible. For a list of possible values, see ",(0,t.jsx)(i.code,{children:"PushNotificationIOS.FetchResult"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"If you do not call this method your background remote notifications could be throttled, to read more about it see the above documentation link."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getmessage",children:(0,t.jsx)(i.code,{children:"getMessage()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"getMessage();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["An alias for ",(0,t.jsx)(i.code,{children:"getAlert"})," to get the notification's main message string"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getsound",children:(0,t.jsx)(i.code,{children:"getSound()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"getSound();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Gets the sound string from the ",(0,t.jsx)(i.code,{children:"aps"})," object"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getcategory",children:(0,t.jsx)(i.code,{children:"getCategory()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"getCategory();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Gets the category string from the ",(0,t.jsx)(i.code,{children:"aps"})," object"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getalert",children:(0,t.jsx)(i.code,{children:"getAlert()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"getAlert();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Gets the notification's main message from the ",(0,t.jsx)(i.code,{children:"aps"})," object"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getcontentavailable",children:(0,t.jsx)(i.code,{children:"getContentAvailable()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"getContentAvailable();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Gets the content-available number from the ",(0,t.jsx)(i.code,{children:"aps"})," object"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getbadgecount",children:(0,t.jsx)(i.code,{children:"getBadgeCount()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"getBadgeCount();\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Gets the badge count number from the ",(0,t.jsx)(i.code,{children:"aps"})," object"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getdata",children:(0,t.jsx)(i.code,{children:"getData()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"getData();\n"})}),"\n",(0,t.jsx)(i.p,{children:"Gets the data object on the notif"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"getthreadid",children:(0,t.jsx)(i.code,{children:"getThreadID()"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"getThreadID();\n"})}),"\n",(0,t.jsx)(i.p,{children:"Gets the thread ID on the notification"})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,s.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},71426:(e,i,n)=>{var t=n(27378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,i,n){var t,o={},r=null,a=null;for(t in void 0!==n&&(r=""+n),void 0!==i.key&&(r=""+i.key),void 0!==i.ref&&(a=i.ref),i)c.call(i,t)&&!l.hasOwnProperty(t)&&(o[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===o[t]&&(o[t]=i[t]);return{$$typeof:s,type:e,key:r,ref:a,props:o,_owner:d.current}}i.Fragment=o,i.jsx=r,i.jsxs=r},24246:(e,i,n)=>{e.exports=n(71426)},71670:(e,i,n)=>{n.d(i,{Zo:()=>d,ah:()=>o});var t=n(27378);const s=t.createContext({});function o(e){const i=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const c={};function d({components:e,children:i,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||c:o(e),t.createElement(s.Provider,{value:d},i)}}}]);