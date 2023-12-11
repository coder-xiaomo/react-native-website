/*! For license information please see 929fe6ef.2d52c76b.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71553],{12068:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var n=i(24246),s=i(71670);const r={id:"security",title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565"},a=void 0,o={id:"security",title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565",description:"\u5f00\u53d1\u5e94\u7528\u65f6\u5b89\u5168\u5e38\u5e38\u662f\u4e00\u4e2a\u88ab\u5ffd\u89c6\u7684\u8bdd\u9898\u3002\u7684\u786e\uff0c\u642d\u5efa\u4e00\u4e2a\u5b8c\u5168\u65e0\u61c8\u53ef\u51fb\u7684\u8f6f\u4ef6\u662f\u4e0d\u53ef\u80fd\u7684\u2014\u2014\u6211\u4eec\u8fd8\u6ca1\u6709\u53d1\u660e\u4e00\u4e2a\u5b8c\u5168\u575a\u4e0d\u53ef\u6467\u7684\u9501\uff08\u6bd5\u7adf\uff0c\u94f6\u884c\u91d1\u5e93\u5df2\u7ecf\u8db3\u591f\u575a\u56fa\u4f46\u4ecd\u7136\u4f1a\u88ab\u95ef\u5165\uff09\u3002However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you\u2019re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!",source:"@site/versioned_docs/version-0.70/security.md",sourceDirName:".",slug:"/security",permalink:"/docs/0.70/security",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/security.md",tags:[],version:"0.70",frontMatter:{id:"security",title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565"},sidebar:"docs",previous:{title:"\u8bbf\u95ee\u7f51\u7edc",permalink:"/docs/0.70/network"},next:{title:"\u6837\u5f0f",permalink:"/docs/0.70/style"}},c={},h=[{value:"\u4fdd\u5b58\u654f\u611f\u4fe1\u606f",id:"\u4fdd\u5b58\u654f\u611f\u4fe1\u606f",level:2},{value:"Async Storage",id:"async-storage",level:3},{value:"Secure Storage",id:"secure-storage",level:3},{value:"iOS - Keychain Services",id:"ios---keychain-services",level:4},{value:"Android - Secure Shared Preferences",id:"android---secure-shared-preferences",level:4},{value:"Android - Keystore",id:"android---keystore",level:4},{value:"Authentication and Deep Linking",id:"authentication-and-deep-linking",level:2},{value:"OAuth2 and Redirects",id:"oauth2-and-redirects",level:3},{value:"Network Security",id:"network-security",level:2},{value:"SSL Pinning",id:"ssl-pinning",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const t=Object.assign({p:"p",h2:"h2",a:"a",strong:"strong",blockquote:"blockquote",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4",ul:"ul",li:"li",code:"code",img:"img"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u5f00\u53d1\u5e94\u7528\u65f6\u5b89\u5168\u5e38\u5e38\u662f\u4e00\u4e2a\u88ab\u5ffd\u89c6\u7684\u8bdd\u9898\u3002\u7684\u786e\uff0c\u642d\u5efa\u4e00\u4e2a\u5b8c\u5168\u65e0\u61c8\u53ef\u51fb\u7684\u8f6f\u4ef6\u662f\u4e0d\u53ef\u80fd\u7684\u2014\u2014\u6211\u4eec\u8fd8\u6ca1\u6709\u53d1\u660e\u4e00\u4e2a\u5b8c\u5168\u575a\u4e0d\u53ef\u6467\u7684\u9501\uff08\u6bd5\u7adf\uff0c\u94f6\u884c\u91d1\u5e93\u5df2\u7ecf\u8db3\u591f\u575a\u56fa\u4f46\u4ecd\u7136\u4f1a\u88ab\u95ef\u5165\uff09\u3002However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you\u2019re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!"}),"\n",(0,n.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/d_security_chart.svg",width:"283",alt:" ",style:{float:"right"}}),"\n",(0,n.jsx)(t.p,{children:"In this guide, you will learn about best practices for storing sensitive information, authentication, network security, and tools that will help you secure your app. This is not a preflight checklist\u2014it is a catalogue of options, each of which will help further protect your app and users."}),"\n",(0,n.jsx)(t.h2,{id:"\u4fdd\u5b58\u654f\u611f\u4fe1\u606f",children:"\u4fdd\u5b58\u654f\u611f\u4fe1\u606f"}),"\n",(0,n.jsxs)(t.p,{children:["Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like ",(0,n.jsx)(t.a,{href:"https://github.com/zetachang/react-native-dotenv",children:"react-native-dotenv"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/luggit/react-native-config/",children:"react-native-config"})," are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and api keys."]}),"\n",(0,n.jsx)(t.p,{children:"If you must have an API key or a secret to access some resource from your app, the most secure way to handle this would be to build an orchestration layer between your app and the resource. This could be a serverless function (e.g. using AWS Lambda or Google Cloud Functions) which can forward the request with the required API key or secret. Secrets in server side code cannot be accessed by the API consumers the same way secrets in your app code can."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"For persisted user data, choose the right type of storage based on its sensitivity."})," As your app is used, you\u2019ll often find the need to save data on the device, whether to support your app being used offline, cut down on network requests or save your user\u2019s access token between sessions so they wouldn\u2019t have to re-authenticate each time they use the app."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Persisted vs unpersisted"})," \u2014 persisted data is written to the device\u2019s memory, which lets the data be read by your app across application launches without having to do another network request to fetch it or asking the user to re-enter it. But this also can make that data more vulnerable to being accessed by attackers. Unpersisted data is never written to memory\u2014so there's no data to access!"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"async-storage",children:"Async Storage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/react-native-community/async-storage",children:"Async Storage"})," is a community-maintained module for React Native that provides an asynchronous, unencrypted, key-value store. Async Storage is not shared between apps: every app has its own sandbox environment and has no access to data from other apps."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.strong,{children:"Do"})," use async storage when..."]}),(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.strong,{children:"Don't"})," use async storage for..."]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Persisting non-sensitive data across app runs"}),(0,n.jsx)(t.td,{children:"Token storage"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Persisting Redux state"}),(0,n.jsx)(t.td,{children:"Secrets"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Persisting GraphQL state"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Storing global app-wide variables"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Async Storage is the React Native equivalent of Local Storage from the web"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"secure-storage",children:"Secure Storage"}),"\n",(0,n.jsx)(t.p,{children:"React Native does not come bundled with any way of storing sensitive data. However, there are pre-existing solutions for Android and iOS platforms."}),"\n",(0,n.jsx)(t.h4,{id:"ios---keychain-services",children:"iOS - Keychain Services"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/security/keychain_services",children:"Keychain Services"})," allows you to securely store small chunks of sensitive info for the user. This is an ideal place to store certificates, tokens, passwords, and any other sensitive information that doesn\u2019t belong in Async Storage."]}),"\n",(0,n.jsx)(t.h4,{id:"android---secure-shared-preferences",children:"Android - Secure Shared Preferences"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://developer.android.com/reference/android/content/SharedPreferences",children:"Shared Preferences"})," is the Android equivalent for a persistent key-value data store. ",(0,n.jsx)(t.strong,{children:"Data in Shared Preferences is not encrypted by default"}),", but ",(0,n.jsx)(t.a,{href:"https://developer.android.com/topic/security/data",children:"Encrypted Shared Preferences"})," wraps the Shared Preferences class for Android, and automatically encrypts keys and values."]}),"\n",(0,n.jsx)(t.h4,{id:"android---keystore",children:"Android - Keystore"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://developer.android.com/training/articles/keystore",children:"Android Keystore"})," system lets you store cryptographic keys in a container to make it more difficult to extract from the device."]}),"\n",(0,n.jsx)(t.p,{children:"In order to use iOS Keychain services or Android Secure Shared Preferences, you can either write a bridge yourself or use a library which wraps them for you and provides a unified API at your own risk. Some libraries to consider:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/oblador/react-native-keychain",children:"react-native-keychain"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/mCodex/react-native-sensitive-info",children:"react-native-sensitive-info"})," - secure for iOS, but uses Android Shared Preferences for Android (which is not secure by default). There is however a ",(0,n.jsx)(t.a,{href:"https://github.com/mCodex/react-native-sensitive-info/tree/keystore",children:"fork"}),") that uses Android Keystore"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/CodingZeal/redux-persist-sensitive-storage",children:"redux-persist-sensitive-storage"})," - wraps react-native-sensitive-info"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Be mindful of unintentionally storing or exposing sensitive info."})," This could happen accidentally, for example saving sensitive form data in redux state and persisting the whole state tree in Async Storage. Or sending user tokens and personal info to an application monitoring service such as Sentry or Crashlytics."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"authentication-and-deep-linking",children:"Authentication and Deep Linking"}),"\n",(0,n.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/d_security_deep-linking.svg",width:"225",alt:" ",style:{float:"right",margin:"0 0 1em 1em"}}),"\n",(0,n.jsxs)(t.p,{children:["Mobile apps have a unique vulnerability that is non-existent in the web: ",(0,n.jsx)(t.strong,{children:"deep linking"}),". Deep linking is a way of sending data directly to a native application from an outside source. A deep link looks like ",(0,n.jsx)(t.code,{children:"app://"})," where ",(0,n.jsx)(t.code,{children:"app"})," is your app scheme and anything following the // could be used internally to handle the request."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, if you were building an ecommerce app, you could use ",(0,n.jsx)(t.code,{children:"app://products/1"})," to deep link to your app and open the product detail page for a product with id 1. You can think of these kind of like URLs on the web, but with one crucial distinction:"]}),"\n",(0,n.jsx)(t.p,{children:"Deep links are not secure and you should never send any sensitive information in them."}),"\n",(0,n.jsxs)(t.p,{children:["The reason deep links are not secure is because there is no centralized method of registering URL schemes. As an application developer, you can use almost any url scheme you choose by ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app",children:"configuring it in Xcode"})," for iOS or ",(0,n.jsx)(t.a,{href:"https://developer.android.com/training/app-links/deep-linking",children:"adding an intent on Android"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["There is nothing stopping a malicious application from hijacking your deep link by also registering to the same scheme and then obtaining access to the data your link contains. Sending something like ",(0,n.jsx)(t.code,{children:"app://products/1"})," is not harmful, but sending tokens is a security concern."]}),"\n",(0,n.jsxs)(t.p,{children:["When the operating system has two or more applications to choose from when opening a link, Android will show the user a modal and ask them to choose which application to use to open the link. On iOS however, the operating system will make the choice for you, so the user will be blissfully unaware. Apple has made steps to address this issue in later iOS versions (iOS 11) where the instituted a first-come-first-served principle, although this vulnerability could still be exploited in different ways which you can read more about ",(0,n.jsx)(t.a,{href:"https://thehackernews.com/2019/07/ios-custom-url-scheme.html",children:"here"}),". Using ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/ios/universal-links/",children:"universal links"})," will allow linking to content within your app securely in iOS."]}),"\n",(0,n.jsx)(t.h3,{id:"oauth2-and-redirects",children:"OAuth2 and Redirects"}),"\n",(0,n.jsxs)(t.p,{children:["The OAuth2 authentication protocol is incredibly popular nowadays, prided as the most complete and secure protocol around. The OpenID Connect protocol is also based on this. In OAuth2, the user is asked to authenticate via a third party. On successful completion, this third party redirects back to the requesting application with a verification code which can be exchanged for a JWT \u2014 a ",(0,n.jsx)(t.a,{href:"https://jwt.io/introduction/",children:"JSON Web Token"}),". JWT is an open standard for securely transmitting information between parties on the web."]}),"\n",(0,n.jsx)(t.p,{children:"On the web, this redirect step is secure, because URLs on the web are guaranteed to be unique. This is not true for apps because, as mentioned earlier, there is no centralized method of registering URL schemes! In order to address this security concern, an additional check must be added in the form of PKCE."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://oauth.net/2/pkce/",children:"PKCE"}),", pronounced \u201cPixy\u201d stands for Proof of Key Code Exchange, and is an extension to the OAuth 2 spec. This involves adding an additional layer of security which verifies that the authentication and token exchange requests come from the same client. PKCE uses the ",(0,n.jsx)(t.a,{href:"https://www.movable-type.co.uk/scripts/sha256.html",children:"SHA 256"})," Cryptographic Hash Algorithm. SHA 256 creates a unique \u201csignature\u201d for a text or file of any size, but it is:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Always the same length regardless of the input file"}),"\n",(0,n.jsx)(t.li,{children:"Guaranteed to be always produce the same result for the same input"}),"\n",(0,n.jsx)(t.li,{children:"One way (that is, you can\u2019t reverse engineer it to reveal the original input)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now you have two values:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"code_verifier"})," - a large random string generated by the client"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"code_challenge"})," - the SHA 256 of the code_verifier"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["During the initial ",(0,n.jsx)(t.code,{children:"/authorize"})," request, the client also sends the ",(0,n.jsx)(t.code,{children:"code_challenge"})," for the ",(0,n.jsx)(t.code,{children:"code_verifier"})," it keeps in memory. After the authorize request has returned correctly, the client also sends the ",(0,n.jsx)(t.code,{children:"code_verifier"})," that was used to generate the ",(0,n.jsx)(t.code,{children:"code_challenge"}),". The IDP will then calculate the ",(0,n.jsx)(t.code,{children:"code_challenge"}),", see if it matches what was set on the very first ",(0,n.jsx)(t.code,{children:"/authorize"})," request, and only send the access token if the values match."]}),"\n",(0,n.jsxs)(t.p,{children:["This guarantees that only the application that triggered the initial authorization flow would be able to successfully exchange the verification code for a JWT. So even if a malicious application gets access to the verification code, it will be useless on its own. To see this in action, check out ",(0,n.jsx)(t.a,{href:"https://aaronparecki.com/oauth-2-simplified/#mobile-apps",children:"this example"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A library to consider for native OAuth is ",(0,n.jsx)(t.a,{href:"https://github.com/FormidableLabs/react-native-app-auth",children:"react-native-app-auth"}),". React-native-app-auth is an SDK for communicating with OAuth2 providers. It wraps the native ",(0,n.jsx)(t.a,{href:"https://github.com/openid/AppAuth-iOS",children:"AppAuth-iOS"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/openid/AppAuth-Android",children:"AppAuth-Android"})," libraries and can support PKCE."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"React-native-app-auth can support PKCE only if your Identity Provider supports it."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"OAuth2 with PKCE",src:i(77262).Z+"",width:"1638",height:"2617"})}),"\n",(0,n.jsx)(t.h2,{id:"network-security",children:"Network Security"}),"\n",(0,n.jsxs)(t.p,{children:["Your APIs should always use ",(0,n.jsx)(t.a,{href:"https://www.ssl.com/faqs/faq-what-is-ssl/",children:"SSL encryption"}),". SSL encryption protects against the requested data being read in plain text between when it leaves the server and before it reaches the client. You\u2019ll know the endpoint is secure, because it starts with ",(0,n.jsx)(t.code,{children:"https://"})," instead of ",(0,n.jsx)(t.code,{children:"http://"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"ssl-pinning",children:"SSL Pinning"}),"\n",(0,n.jsxs)(t.p,{children:["Using https endpoints could still leave your data vulnerable to interception. With https, the client will only trust the server if it can provide a valid certificate that is signed by a trusted Certificate Authority that is pre-installed on the client. An attacker could take advantage of this by installing a malicious root CA certificate to the user\u2019s device, so the client would trust all certificates that are signed by the attacker. Thus, relying on certificates alone could still leave you vulnerable to a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",children:"man-in-the-middle attack"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SSL pinning"})," is a technique that can be used on the client side to avoid this attack. It works by embedding (or pinning) a list of trusted certificates to the client during development, so that only the requests signed with one of the trusted certificates will be accepted, and any self-signed certificates will not be."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"When using SSL pinning, you should be mindful of certificate expiry. Certificates expire every 1-2 years and when one does, it\u2019ll need to be updated in the app as well as on the server. As soon as the certificate on the server has been updated, any apps with the old certificate embedded in them will cease to work."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"There is no bulletproof way to handle security, but with conscious effort and diligence, it is possible to significantly reduce the likelihood of a security breach in your application. Invest in security proportional to the sensitivity of the data stored in your application, the number of users, and the damage a hacker could do when gaining access to their account. And remember: it\u2019s significantly harder to access information that was never requested in the first place."})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},71426:(e,t,i)=>{var n=i(27378),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,i){var n,r={},h=null,d=null;for(n in void 0!==i&&(h=""+i),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:h,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=h,t.jsxs=h},24246:(e,t,i)=>{e.exports=i(71426)},77262:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/diagram_pkce-e0b4a829176ac05d07b0bcec73994985.svg"},71670:(e,t,i)=>{i.d(t,{Zo:()=>o,ah:()=>r});var n=i(27378);const s=n.createContext({});function r(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||a:r(e),n.createElement(s.Provider,{value:o},t)}}}]);