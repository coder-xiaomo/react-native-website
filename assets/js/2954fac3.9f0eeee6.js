/*! For license information please see 2954fac3.9f0eeee6.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[17389],{93317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(24246),a=n(71670);const r={id:"upgrading",title:"\u66f4\u65b0"},o=void 0,s={unversionedId:"upgrading",id:"upgrading",title:"\u66f4\u65b0",description:"\u65f6\u523b\u5c06 React Native \u66f4\u65b0\u5230\u6700\u65b0\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u83b7\u5f97\u66f4\u591a API\u3001\u89c6\u56fe\u3001\u5f00\u53d1\u8005\u5de5\u5177\u4ee5\u53ca\u5176\u4ed6\u4e00\u4e9b\u597d\u4e1c\u897f\uff08\u8bd1\u6ce8\uff1a\u5b98\u65b9\u5f00\u53d1\u4efb\u52a1\u7e41\u91cd\uff0c\u4eba\u624b\u7d27\u7f3a\uff0c\u51e0\u4e4e\u4e0d\u4f1a\u5bf9\u65e7\u7248\u672c\u63d0\u4f9b\u7ef4\u62a4\u652f\u6301\uff0c\u6240\u4ee5\u5373\u4fbf\u66f4\u65b0\u53ef\u80fd\u5e26\u6765\u4e00\u4e9b\u517c\u5bb9\u4e0a\u7684\u53d8\u66f4\uff0c\u4f46\u5efa\u8bae\u5f00\u53d1\u8005\u8fd8\u662f\u5c3d\u4e00\u5207\u53ef\u80fd\u7b2c\u4e00\u65f6\u95f4\u66f4\u65b0\uff09\u3002\u7531\u4e8e\u4e00\u4e2a\u5b8c\u6574\u7684 React Native \u9879\u76ee\u662f\u7531 Android \u9879\u76ee\u3001iOS \u9879\u76ee\u548c JavaScript \u9879\u76ee\u7ec4\u6210\u7684\uff0c\u4e14\u90fd\u6253\u5305\u5728\u4e00\u4e2a npm \u5305\u4e2d\uff0c\u6240\u4ee5\u5347\u7ea7\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u9ebb\u70e6\u3002\u6211\u4eec\u4f1a\u5c3d\u91cf\u7b80\u5316\u8fd9\u4e00\u6d41\u7a0b\u3002\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u4f7f\u7528npx react-native info\u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7684\u7248\u672c\u3002There's currently two ways for upgrading your React Native project: by using React Native CLI or manually with Upgrade Helper.",source:"@site/../cndocs/upgrading.md",sourceDirName:".",slug:"/upgrading",permalink:"/docs/next/upgrading",draft:!1,unlisted:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/upgrading.md",tags:[],version:"current",frontMatter:{id:"upgrading",title:"\u66f4\u65b0"},sidebar:"docs",previous:{title:"\u4f7f\u7528 TypeScript",permalink:"/docs/next/typescript"},next:{title:"\u8bbf\u95ee\u7f51\u7edc",permalink:"/docs/next/network"}},c={},l=[{value:"React Native CLI",id:"react-native-cli",level:3},{value:"1. Run the <code>upgrade</code> command",id:"1-run-the-upgrade-command",level:4},{value:"2. Resolve the conflicts",id:"2-resolve-the-conflicts",level:4},{value:"Upgrade Helper",id:"upgrade-helper",level:3},{value:"1. \u9009\u62e9\u7248\u672c",id:"1-\u9009\u62e9\u7248\u672c",level:4},{value:"2. \u66f4\u65b0\u4f9d\u8d56",id:"2-\u66f4\u65b0\u4f9d\u8d56",level:4},{value:"3. \u66f4\u65b0\u9879\u76ee\u6587\u4ef6",id:"3-\u66f4\u65b0\u9879\u76ee\u6587\u4ef6",level:4},{value:"\u7591\u96be\u89e3\u7b54",id:"\u7591\u96be\u89e3\u7b54",level:3},{value:"I want to upgrade with React Native CLI but I don&#39;t use Git",id:"i-want-to-upgrade-with-react-native-cli-but-i-dont-use-git",level:4},{value:"I have done all the changes but my app is still using an old version",id:"i-have-done-all-the-changes-but-my-app-is-still-using-an-old-version",level:4},{value:"\u624b\u52a8\u5347\u7ea7",id:"\u624b\u52a8\u5347\u7ea7",level:3}];function d(e){const t=Object.assign({p:"p",code:"code",a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["\u65f6\u523b\u5c06 React Native \u66f4\u65b0\u5230\u6700\u65b0\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u83b7\u5f97\u66f4\u591a API\u3001\u89c6\u56fe\u3001\u5f00\u53d1\u8005\u5de5\u5177\u4ee5\u53ca\u5176\u4ed6\u4e00\u4e9b\u597d\u4e1c\u897f\uff08\u8bd1\u6ce8\uff1a\u5b98\u65b9\u5f00\u53d1\u4efb\u52a1\u7e41\u91cd\uff0c\u4eba\u624b\u7d27\u7f3a\uff0c\u51e0\u4e4e\u4e0d\u4f1a\u5bf9\u65e7\u7248\u672c\u63d0\u4f9b\u7ef4\u62a4\u652f\u6301\uff0c\u6240\u4ee5\u5373\u4fbf\u66f4\u65b0\u53ef\u80fd\u5e26\u6765\u4e00\u4e9b\u517c\u5bb9\u4e0a\u7684\u53d8\u66f4\uff0c\u4f46\u5efa\u8bae\u5f00\u53d1\u8005\u8fd8\u662f\u5c3d\u4e00\u5207\u53ef\u80fd\u7b2c\u4e00\u65f6\u95f4\u66f4\u65b0\uff09\u3002\u7531\u4e8e\u4e00\u4e2a\u5b8c\u6574\u7684 React Native \u9879\u76ee\u662f\u7531 Android \u9879\u76ee\u3001iOS \u9879\u76ee\u548c JavaScript \u9879\u76ee\u7ec4\u6210\u7684\uff0c\u4e14\u90fd\u6253\u5305\u5728\u4e00\u4e2a npm \u5305\u4e2d\uff0c\u6240\u4ee5\u5347\u7ea7\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u9ebb\u70e6\u3002\u6211\u4eec\u4f1a\u5c3d\u91cf\u7b80\u5316\u8fd9\u4e00\u6d41\u7a0b\u3002\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u4f7f\u7528",(0,i.jsx)(t.code,{children:"npx react-native info"}),"\u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7684\u7248\u672c\u3002There's currently two ways for upgrading your React Native project: by using ",(0,i.jsx)(t.a,{href:"https://github.com/react-native-community/cli",children:"React Native CLI"})," or manually with ",(0,i.jsx)(t.a,{href:"https://github.com/react-native-community/upgrade-helper",children:"Upgrade Helper"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u8bd1\u6ce8\uff1a",(0,i.jsx)(t.a,{href:"https://github.com/facebook/react-native/releases",children:"\u82f1\u6587\u66f4\u65b0\u65e5\u5fd7\u70b9\u8fd9\u91cc\u67e5\u770b"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"react-native-cli",children:"React Native CLI"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/react-native-community/cli",children:"React Native CLI"})," comes with ",(0,i.jsx)(t.code,{children:"upgrade"})," command that provides a one-step operation to upgrade the source files with a minimum of conflicts, it internally uses ",(0,i.jsx)(t.a,{href:"https://github.com/react-native-community/rn-diff-purge",children:"rn-diff-purge"})," project to find out which files need to be created, removed or modified."]}),"\n",(0,i.jsxs)(t.h4,{id:"1-run-the-upgrade-command",children:["1. Run the ",(0,i.jsx)(t.code,{children:"upgrade"})," command"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"upgrade"})," command works on top of Git by using ",(0,i.jsx)(t.code,{children:"git apply"})," with 3-way merge, therefore it's required to use Git in order for this to work, if you don't use Git but still want to use this solution then you can check out how to do it in the ",(0,i.jsx)(t.a,{href:"#i-want-to-upgrade-with-react-native-cli-but-i-don-t-use-git",children:"Troubleshooting"})," section."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Run the following command to start the process of upgrading to the latest version:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"npx react-native upgrade\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You may specify a React Native version by passing an argument, e.g. to upgrade to ",(0,i.jsx)(t.code,{children:"0.61.0-rc.0"})," run:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"npx react-native upgrade 0.61.0-rc.0\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The project is upgraded using ",(0,i.jsx)(t.code,{children:"git apply"})," with 3-way merge, it may happen that you'll need to resolve a few conflicts after it's finished."]}),"\n",(0,i.jsx)(t.h4,{id:"2-resolve-the-conflicts",children:"2. Resolve the conflicts"}),"\n",(0,i.jsx)(t.p,{children:"Conflicted files include delimiters which make very clear where the changes come from. For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'13B07F951A680F5B00A75B9A /* Release */ = {\n  isa = XCBuildConfiguration;\n  buildSettings = {\n    ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;\n<<<<<<< ours\n    CODE_SIGN_IDENTITY = "iPhone Developer";\n    FRAMEWORK_SEARCH_PATHS = (\n      "$(inherited)",\n      "$(PROJECT_DIR)/HockeySDK.embeddedframework",\n      "$(PROJECT_DIR)/HockeySDK-iOS/HockeySDK.embeddedframework",\n    );\n=======\n    CURRENT_PROJECT_VERSION = 1;\n>>>>>>> theirs\n    HEADER_SEARCH_PATHS = (\n      "$(inherited)",\n      /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,\n      "$(SRCROOT)/../node_modules/react-native/React/**",\n      "$(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/**",\n    );\n'})}),"\n",(0,i.jsx)(t.p,{children:'You can think of "ours" as "your team" and "theirs" as "the React Native development team".'}),"\n",(0,i.jsx)(t.h3,{id:"upgrade-helper",children:"Upgrade Helper"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://react-native-community.github.io/upgrade-helper/",children:"Upgrade Helper"})," is a web tool to help you out when upgrading your apps by providing the full set of changes happening between any two versions. It also shows comments on specific files to help understanding why that change is needed."]}),"\n",(0,i.jsx)(t.h4,{id:"1-\u9009\u62e9\u7248\u672c",children:"1. \u9009\u62e9\u7248\u672c"}),"\n",(0,i.jsx)(t.p,{children:'You first need to select from and to which version you wish to upgrade, by default the latest major versions are selected. After selecting you can click the button "Show me how to upgrade".'}),"\n",(0,i.jsx)(t.p,{children:'\ud83d\udca1 Major updates will show an "useful content" section on the top with links to help you out when upgrading.'}),"\n",(0,i.jsx)(t.h4,{id:"2-\u66f4\u65b0\u4f9d\u8d56",children:"2. \u66f4\u65b0\u4f9d\u8d56"}),"\n",(0,i.jsxs)(t.p,{children:["The first file that is shown is the ",(0,i.jsx)(t.code,{children:"package.json"}),", it's good to update the dependencies that are showing in there. For example, if ",(0,i.jsx)(t.code,{children:"react-native"})," and ",(0,i.jsx)(t.code,{children:"react"})," appears as changes then you can install it in your project by running ",(0,i.jsx)(t.code,{children:"yarn add"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"# {{VERSION}} and {{REACT_VERSION}} are the release versions showing in the diff\nyarn add react-native@{{VERSION}}\nyarn add react@{{REACT_VERSION}}\n"})}),"\n",(0,i.jsx)(t.h4,{id:"3-\u66f4\u65b0\u9879\u76ee\u6587\u4ef6",children:"3. \u66f4\u65b0\u9879\u76ee\u6587\u4ef6"}),"\n",(0,i.jsxs)(t.p,{children:["The new release may contain updates to other files that are generated when you run ",(0,i.jsx)(t.code,{children:"npx react-native init"}),", those files are listed after the ",(0,i.jsx)(t.code,{children:"package.json"})," in the Upgrade Helper page. If there aren't other changes then you can just rebuild the project and continue developing."]}),"\n",(0,i.jsx)(t.p,{children:"In case there are changes then you can either update them manually by copying and pasting from the changes in the page or you can do it with the React Native CLI upgrade command by running:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"npx react-native upgrade\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will check your files against the latest template and perform the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If there is a new file in the template, it is simply created."}),"\n",(0,i.jsx)(t.li,{children:"If a file in the template is identical to your file, it is skipped."}),"\n",(0,i.jsx)(t.li,{children:"If a file is different in your project than the template, you will be prompted; you have options to keep your file or overwrite it with the template version."}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Some upgrades won't be done automatically with the React Native CLI and require manual work, e.g. ",(0,i.jsx)(t.code,{children:"0.28"})," to ",(0,i.jsx)(t.code,{children:"0.29"}),", or ",(0,i.jsx)(t.code,{children:"0.56"})," to ",(0,i.jsx)(t.code,{children:"0.57"}),". Make sure to check the ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/react-native/releases",children:"release notes"})," when upgrading so that you can identify any manual changes your particular project may require."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"\u7591\u96be\u89e3\u7b54",children:"\u7591\u96be\u89e3\u7b54"}),"\n",(0,i.jsx)(t.h4,{id:"i-want-to-upgrade-with-react-native-cli-but-i-dont-use-git",children:"I want to upgrade with React Native CLI but I don't use Git"}),"\n",(0,i.jsxs)(t.p,{children:["While your project does not have to be handled by the Git versioning system -- you can use Mercurial, SVN, or nothing -- you will still need to ",(0,i.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"install Git"})," on your system in order to use ",(0,i.jsx)(t.code,{children:"npx react-native upgrade"}),". Git will also need to be available in the ",(0,i.jsx)(t.code,{children:"PATH"}),". If your project doesn't use Git, initialize it and commit:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'git init # Initialize a Git repository\ngit add . # Stage all the current files\ngit commit -m "Upgrade react-native" # Save the current files in a commit\n'})}),"\n",(0,i.jsxs)(t.p,{children:["After you finish upgrading you may remove the ",(0,i.jsx)(t.code,{children:".git"})," directory."]}),"\n",(0,i.jsx)(t.h4,{id:"i-have-done-all-the-changes-but-my-app-is-still-using-an-old-version",children:"I have done all the changes but my app is still using an old version"}),"\n",(0,i.jsxs)(t.p,{children:["These sort of errors are usually related to caching, it's recommended to install ",(0,i.jsx)(t.a,{href:"https://github.com/pmadruga/react-native-clean-project",children:"react-native-clean-project"})," to clear all your project's cache and then you can run it again."]}),"\n",(0,i.jsx)(t.h3,{id:"\u624b\u52a8\u5347\u7ea7",children:"\u624b\u52a8\u5347\u7ea7"}),"\n",(0,i.jsx)(t.p,{children:"\u5347\u7ea7\u8fc7\u7a0b\u5f80\u5f80\u4f1a\u78b0\u5230\u5f88\u591a\u95ee\u9898\uff0c\u5c24\u5176\u6d89\u53ca\u5230\u4f17\u591a\u7b2c\u4e09\u65b9\u65f6\uff0c\u5904\u7406\u8d77\u6765\u5c24\u4e3a\u8d39\u65f6\u8d39\u529b\u3002\u6b64\u65f6\u5efa\u8bae\u53ef\u4ee5\u5c1d\u8bd5\u76f4\u63a5 init \u4e00\u4e2a\u65b0\u7684\u9879\u76ee\uff0c\u7136\u540e\u628a\u73b0\u6709\u9879\u76ee\u7684 JS \u4ee3\u7801\u8fdb\u884c\u624b\u52a8\u8fc1\u79fb\u3002"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},71426:(e,t,n)=>{var i=n(27378),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,r={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,i)&&!c.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:a,type:e,key:l,ref:d,props:r,_owner:s.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},24246:(e,t,n)=>{e.exports=n(71426)},71670:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>r});var i=n(27378);const a=i.createContext({});function r(e){const t=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:r(e),i.createElement(a.Provider,{value:s},t)}}}]);